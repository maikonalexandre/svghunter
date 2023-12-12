<script lang="ts">
	import Grid from '../components/Grid.svelte';
	import Search from '../components/Search.svelte';
	import SvgCard from '../components/SvgCard.svelte';

	import { SVGS } from '../data/svgs';
	import type { svgType } from '../types';
	const svgsJson = JSON.parse(JSON.stringify(SVGS));

	let searchTerm = '';
	let filteredSvgs: svgType[] = [];

	if (searchTerm.length === 0) {
		filteredSvgs = svgsJson.sort((a: svgType, b: svgType) => {
			return b.id - a.id;
		});
	}

	const searchSvgs = () => {
		return (filteredSvgs = svgsJson.filter((svg: svgType) => {
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
	<Search {clearSearch} on:input={() => {}} placeholder="search items" {searchTerm} />
	<Grid>
		{#each svgsJson as svg}
			<SvgCard {svg} />
		{/each}
	</Grid>
</section>
