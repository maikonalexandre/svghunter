<script lang="ts">
	import Grid from '../../components/Grid.svelte';
	import Search from '../../components/Search.svelte';
	import SvgCard from '../../components/SvgCard.svelte';

	import type { PageData } from './$types';
	import type { svgType } from '../../types';

	export let data: PageData;
	let svgsByCategory = data.SVGS || [];
	let category = data.category || '';

	let searchTerm = '';
	let filteredSvgs: svgType[] = [];

	if (searchTerm.length === 0) {
		filteredSvgs = svgsByCategory.sort((a: svgType, b: svgType) => {
			return b.id - a.id;
		});
	}

	const searchSvgs = () => {
		return (filteredSvgs = svgsByCategory.filter((svg: svgType) => {
			let svgTitle = svg.title.toLowerCase();
			return svgTitle.includes(searchTerm.toLowerCase());
		}));
	};

	const clearSearch = () => {
		searchTerm = '';
		searchSvgs();
	};
</script>

<section>
	<Search
		bind:searchTerm
		on:input={searchSvgs}
		clearSearch={() => clearSearch()}
		placeholder={`Search item...`}
	/>
	<Grid>
		{#each filteredSvgs as svg}
			<SvgCard {svg} />
		{/each}
	</Grid>
</section>
