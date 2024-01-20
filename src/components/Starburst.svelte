<script>
	import { onMount } from 'svelte';

	export let color = '#1E1A19';
	export let size = '128';
	let mql = window.matchMedia('(max-width: 642px)');

	onMount(() => {
		addEventListener('resize', () => {
			console.log('resize');
			mql = window.matchMedia('(max-width: 642px)');
		});

		return () => {
			removeEventListener('resize', () => {
				mql = window.matchMedia('(max-width: 642px)');
			});
		};
	});
</script>

<a class="relative flex starburst" href="/blackjack">
	<svg
		class="z-40"
		width={mql.matches ? 164 : size}
		height={mql.matches ? 164 : size}
		viewBox="0 0 1155 1155"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M1077.63 866.249H953.805L985.853 985.853L866.249 953.805V1077.63L759.015 1015.72L726.967 1135.32L639.411 1047.76L577.499 1155L515.587 1047.76L428.032 1135.32L395.985 1015.72L288.751 1077.63V953.805L169.145 985.854L201.193 866.249H77.3715L139.283 759.015L19.6775 726.967L107.235 639.41L0 577.498L107.233 515.587L19.6773 428.031L139.281 395.983L77.3701 288.751L201.195 288.751L169.146 169.144L288.751 201.192V77.3702L395.984 139.281L428.031 19.6786L515.588 107.236L577.5 0L639.411 107.233L726.967 19.6778L759.014 139.281L866.249 77.3689V201.193L985.852 169.145L953.804 288.751L1077.63 288.751L1015.72 395.982L1135.32 428.03L1047.76 515.587L1155 577.499L1047.76 639.412L1135.32 726.968L1015.72 759.015L1077.63 866.249Z"
			fill={color}
			stroke={'white'}
			stroke-width="10"
		/>
	</svg>
	<p
		class={`absolute ${
			mql.matches ? 'top-10 left-16' : 'top-20 left-28'
		} z-50 text-stone-300 font-mono text-lg md:text-xl`}
	>
		Play <br /> Cards!
	</p>
</a>

<style>
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.starburst {
		display: block;
		transform: rotate(0deg);
		transition: all 0.2s ease-in-out;
		scale: 1;
	}

	.starburst:hover svg {
		transition: all 0.2s ease-in-out;
		scale: 1.1;
		animation: spin 8s linear infinite;
	}

	.starburst:hover p {
		transition: all 0.2s ease-in-out;
		scale: 1.1;
	}
</style>
