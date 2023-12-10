type CardSuit = 'framework' | 'language' | 'tool' | 'database';
interface Card {
	name: string;
	description: string;
	author: string;
	year: number;
	value: string;
	suit: CardSuit;
	icon: string;
}
interface CardStore {
	faceCards: Card[];
}
