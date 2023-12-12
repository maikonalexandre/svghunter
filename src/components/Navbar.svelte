<script lang="ts">
	import { page } from '$app/stores';
	import { SVGS } from '../data/svgs';
	import { Cube, GithubLogo } from 'phosphor-svelte';

	const categories = SVGS.map((e) => {
		return e.category;
	}).filter((category, i, arr) => arr.indexOf(category) === i);
</script>

<header class="flex flex-col max-md:gap-0 p-4">
	<div
		class="flex items-center justify-between my-3 py-1 px-2 border-b max-sm:flex-col max-sm:gap-2"
	>
		<div class="flex items-baseline gap-2">
			<h1 class="font-semibold text-2xl">🏹 SVGHunter</h1>
			<span class="text-sm font-medium text-neutral-500">v1.0</span>
		</div>

		<div class="flex gap-4">
			<a
				target="_blank"
				href="https://github.com/maikonalexandre/svghunter"
				class="font-light flex items-center gap-1 text-neutral-900 rounded-lg px-2 py-1 hover:bg-neutral-100"
			>
				<Cube />
				Submit logo
			</a>

			<a
				target="_blank"
				href="https://github.com/maikonalexandre/svghunter"
				class="font-light flex items-center gap-1 text-neutral-900 rounded-lg px-2 py-1 hover:bg-neutral-100"
			>
				<GithubLogo />
				See repository
			</a>
		</div>
	</div>

	<nav class="border-b">
		<ul class="w-full flex flex-row gap-1 py-1 flex-wrap">
			<li class="flex" aria-current={$page.url.pathname === `/` ? 'page' : undefined}>
				<a
					href="/"
					data-currentpage={$page.url.pathname == '/'}
					class="w-full text-sm font-norm text-sky-500 py-1 px-2 transition duration-100 rounded-lg data-[currentpage=true]:bg-neutral-200 hover:bg-neutral-200"
					data-sveltekit-preload-data>All</a
				>
			</li>

			{#each categories.sort() as category}
				<li
					class="flex items-center"
					aria-current={$page.url.pathname === `/${category.toLowerCase()}` ? 'page' : undefined}
				>
					<a
						href={`/${category.toLowerCase()}`}
						data-currentpage={$page.url.pathname == `/${category.toLowerCase()}`}
						class="w-full text-sm text-neutral-600 font-norm text-neutral-700 py-1 px-2 transition duration-100 rounded-lg data-[currentpage=true]:bg-neutral-200 hover:bg-neutral-200"
						data-sveltekit-preload-data>{category}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>
