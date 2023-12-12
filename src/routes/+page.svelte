<script lang="ts">
	import Grid from '../components/Grid.svelte';
	import Search from '../components/Search.svelte';
	import SvgCard from '../components/SvgCard.svelte';

	import { SVGS } from '../data/svgs';
	import type { svgType } from '../types';
	const svgsJson = JSON.parse(JSON.stringify(SVGS));

	let searchTerm = '';
	let filteredSvgs: svgType[] = [];
	let svgsByCategory = svgsJson || [];

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
