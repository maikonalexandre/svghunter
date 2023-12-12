<script lang="ts">
	import { page } from '$app/stores';
	import { SVGS } from '../data/svgs';
	import { Horse, ArrowSquareUpRight, Cube, GithubLogo } from 'phosphor-svelte';

	const categories = SVGS.map((e) => {
		return e.category;
	}).filter((category, i, arr) => arr.indexOf(category) === i);
</script>

<div class="p-4 max-w-[200px] overflow-hidden">
	<header class="flex flex-col gap-2">
		<div class="border-b py-2">
			<div class="flex items-center justify-between">
				<h1 class="font-medium text-lg">SVGHunter</h1>
				<div>🌞</div>
			</div>
			<span class="text-sm font-semibold text-neutral-400">✍️ Lindas logos SVG</span>
		</div>

		<nav class="border-b">
			<ul class="w-full flex flex-col gap-2 pb-2">
				<li class="flex" aria-current={$page.url.pathname === `/` ? 'page' : undefined}>
					<a
						href="/"
						data-currentpage={$page.url.pathname == '/'}
						class="w-full text-sm font-norm text-neutral-700 p-2 transition duration-100 rounded-lg data-[currentpage=true]:bg-neutral-200 hover:bg-neutral-200"
						data-sveltekit-preload-data>All</a
					>
				</li>
				{#each categories.sort() as category}
					<li
						class="flex"
						aria-current={$page.url.pathname === `/${category.toLowerCase()}` ? 'page' : undefined}
					>
						<a
							href={`/${category.toLowerCase()}`}
							data-currentpage={$page.url.pathname == `/${category.toLowerCase()}`}
							class="w-full text-sm font-norm text-neutral-700 p-2 transition duration-100 rounded-lg data-[currentpage=true]:bg-neutral-200 hover:bg-neutral-200"
							data-sveltekit-preload-data>{category}</a
						>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="flex flex-col border-b gap-2 py-2">
			<a
				href="#"
				class="font-light p-2 rounded-md flex items-center gap-2 text-neutral-900 hover:bg-neutral-200"
			>
				<Cube />
				Submit logo
				<ArrowSquareUpRight />
			</a>

			<a
				href="#"
				class="font-light p-2 rounded-md flex items-center gap-2 text-neutral-900 hover:bg-neutral-200"
			>
				<GithubLogo />
				See repository
				<ArrowSquareUpRight />
			</a>
		</div>
	</header>

	<footer class="py-4 font-light text-sm text-neutral-900">
		<span class="cursor-pointer">
			❤️ Made by <a target="_blank" href="https://www.maikonalexandre.com.br">Maike Dev</a>
		</span>
	</footer>
</div>
