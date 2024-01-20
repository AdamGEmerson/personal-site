<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import SectionHeading from '../../../components/SectionHeading.svelte';
	import { capitalized } from '../../../utils/helpers.js';
	import { quintOut } from 'svelte/easing';
	import BlackJackStats from '../../../components/blackjack/BlackJackStats.svelte';
	import Scoreboard from '../../../components/blackjack/Scoreboard.svelte';

	// let deck: Card[];
	// cards.subscribe((value) => {
	// 	deck = value.faceCards;
	// 	deck = deck.sort(() => Math.random() - 0.5);
	// });

	interface Card {
		suit: string;
		value: string;
	}

	const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
	const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

	let deck: Card[] = [];
	let dealerHand: Card[] = [];
	let playerHand: Card[] = [];

	let gameActive = false;
	let hold = false;
	let message: string | undefined = "Click 'New Game' to start";
	let messageQueue: string[] = [];
	let hitEnabled: boolean;

	let playerScore = 0;
	let dealerScore = 0;
	let playerWins = 0;
	let dealerWins = 0;
	let playerStreak = 0;
	let dealerStreak = 0;
	let bestPlayerStreak = 0;
	let bestDealerStreak = 0;

	onMount(() => {
		suits.forEach((suit) => {
			values.forEach((value) => {
				deck.push({ suit, value });
			});
		});
	});

	function shuffle(array: Card[]) {
		let currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	const newGame = () => {
		deck = [];
		dealerHand = [];
		playerHand = [];
		hold = false;
		gameActive = true;
		suits.forEach((suit) => {
			values.forEach((value) => {
				deck.push({ suit, value });
			});
		});

		shuffle(deck);
		drawCard('dealer');
		drawCard('player');
		drawCard('player');
		playerScore = calculateScore(playerHand);
		dealerScore = calculateScore(dealerHand);
		messageQueue.push('Cards are dealt...');
	};

	const drawCard = (hand: 'dealer' | 'player') => {
		if (deck.length > 0) {
			let card = <Card>deck.pop();
			if (hand === 'dealer') {
				dealerHand.push(card);
				dealerHand = dealerHand;
				messageQueue.push(`Dealer draws ${card.value} of ${capitalized(card.suit)}`);
			} else if (hand === 'player') {
				playerHand.push(card);
				playerHand = playerHand;
				messageQueue.push(`Player draws ${card.value} of ${capitalized(card.suit)}`);
			}
		}
	};

	const hit = () => {
		drawCard('player');
		playerScore = calculateScore(playerHand);
	};

	const holdCards = () => {
		hold = true;
	};

	const dealerDraw = async () => {
		while (dealerScore < 21 && dealerScore <= playerScore) {
			drawCard('dealer');
			dealerScore = calculateScore(dealerHand);
			await new Promise((resolve) => setTimeout(resolve, 1000));
		}
		if (dealerScore > 21) {
			messageQueue.push('Dealer busts, Player wins!');
			gameOver();
		} else {
			messageQueue.push('Dealer wins!');
			gameOver();
		}
	};

	const updateMessage = async () => {
		while (messageQueue.length > 0) {
			message = messageQueue.shift();
			await new Promise((resolve) => setTimeout(resolve, 1000));
		}
	};

	const calculateScore = (hand: Card[]) => {
		// TODO: Fix ace scoring
		let score = 0;
		hand.forEach((card) => {
			if (card.value === 'A') {
				score += 11;
			} else if (card.value === 'J' || card.value === 'Q' || card.value === 'K') {
				score += 10;
			} else {
				score += parseInt(card.value);
			}
		});
		if (score > 21 && hand.filter((card) => card.value === 'A').length > 0) {
			score -= 10;
		}
		return score;
	};

	// Game over function that determines winner and updates stats
	const gameOver = () => {
		if (playerScore > 21) {
			dealerWins++;
			dealerStreak++;
			playerStreak = 0;
			if (dealerStreak > bestDealerStreak) {
				bestDealerStreak = dealerStreak;
			}
		} else if (dealerScore > 21) {
			playerWins++;
			playerStreak++;
			dealerStreak = 0;
			if (playerStreak > bestPlayerStreak) {
				bestPlayerStreak = playerStreak;
			}
		} else if (playerScore > dealerScore) {
			playerWins++;
			playerStreak++;
			dealerStreak = 0;
			if (playerStreak > bestPlayerStreak) {
				bestPlayerStreak = playerStreak;
			}
		} else if (dealerScore > playerScore) {
			dealerWins++;
			dealerStreak++;
			playerStreak = 0;
			if (dealerStreak > bestDealerStreak) {
				bestDealerStreak = dealerStreak;
			}
		} else if (playerScore == 21) {
			playerWins++;
			playerStreak++;
			dealerStreak = 0;
			if (playerStreak > bestPlayerStreak) {
				bestPlayerStreak = playerStreak;
			}
		} else {
			playerStreak = 0;
			dealerStreak = 0;
		}
		gameActive = false;
	};

	$: {
		if (playerScore > 21) {
			messageQueue.push('Player busts, Dealer wins!');
			gameOver();
		}
		if (playerScore == 21) {
			messageQueue.push('Player wins!');
			gameOver();
		}
		if (hold) {
			messageQueue.push('Player holds...');
			dealerDraw();
		}
		if (messageQueue.length > 0) {
			updateMessage();
		}
	}

	$: hitEnabled = !hold && gameActive;
</script>

<div class="flex flex-col h-full w-full items-start gap-2 py-8">
	<div class="flex flex-wrap md:flex-nowrap md:flex-row justify-around items-center w-full h-full">
		<BlackJackStats
			name="Dealer"
			wins={dealerWins}
			streak={dealerStreak}
			bestStreak={bestDealerStreak}
		/>
		<div class="order-first md:order-none w-full">
			<Scoreboard {playerScore} {dealerScore} />
		</div>
		<BlackJackStats
			name="Player"
			wins={playerWins}
			streak={playerStreak}
			bestStreak={bestPlayerStreak}
		/>
	</div>
	<div class="w-full">
		{#key message}
			<div transition:slide>
				<SectionHeading>{message}</SectionHeading>
			</div>
		{/key}
	</div>

	<div class="flex flex-row gap-2">
		<button on:click={newGame} class="bg-stone-900 text-stone-300 p-2 font-mono">New Game</button>
		<button
			on:click={hit}
			class="bg-stone-900 text-stone-300 p-2 disabled:bg-transparent disabled:text-stone-500 disabled:ring-2 ring-inset disabled:ring-stone-500 font-mono"
			disabled={!hitEnabled}>Hit</button
		>
		<button
			on:click={holdCards}
			class="bg-stone-900 ring-2 ring-stone-900 text-stone-300 p-2 disabled:bg-transparent disabled:text-stone-500 disabled:ring-2 ring-inset disabled:ring-stone-500 font-mono"
			disabled={!gameActive}>Hold</button
		>
	</div>

	<div class="flex flex-row w-full gap-4">
		<div class="w-full flex flex-col gap-1">
			<SectionHeading>Dealer - {dealerScore}</SectionHeading>
			<div class="flex flex-col gap-1 w-full font-mono px-2">
				{#each dealerHand as card}
					<div transition:fly={{ x: -100 }}>{card.value} of {capitalized(card.suit)}</div>
				{/each}
			</div>
		</div>
		<div class="w-full flex flex-col gap-1">
			<SectionHeading>Player - {playerScore}</SectionHeading>
			<div class="flex flex-col gap-1 font-mono px-2">
				{#each playerHand as card}
					<div transition:fly={{ x: -100 }}>{card.value} of {capitalized(card.suit)}</div>
				{/each}
			</div>
		</div>
	</div>
</div>
