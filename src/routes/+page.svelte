<script lang="ts">
	import Grid from '../components/Grid.svelte';
	import Search from '../components/Search.svelte';
	import SvgCard from '../components/SvgCard.svelte';

	// import { svgs } from '@/data/svgs';
	// const allSvgs = JSON.parse(JSON.stringify(svgs));

	// // Search:
	// let searchTerm = '';
	// let filteredSvgs: iSVG[] = [];

	// if (searchTerm.length === 0) {
	// 	filteredSvgs = allSvgs.sort((a: iSVG, b: iSVG) => {
	// 		return b.id - a.id;
	// 	});
	// }

	// const searchSvgs = () => {
	// 	return (filteredSvgs = allSvgs.filter((svg: iSVG) => {
	// 		let svgTitle = svg.title.toLowerCase();
	// 		return svgTitle.includes(searchTerm.toLowerCase());
	// 	}));
	// };

	// const clearSearch = () => {
	// 	searchTerm = '';
	// 	searchSvgs();
	// };
</script>

<section>
	<Search clearSearch={() => {}} on:input={() => {}} placeholder="search items" searchTerm="" />
	<Grid>
		<SvgCard>1</SvgCard>
		<SvgCard>2</SvgCard>
		<SvgCard>3</SvgCard>
		<SvgCard>4</SvgCard>
		<SvgCard>5</SvgCard>
		<SvgCard>6</SvgCard>
		<SvgCard>7</SvgCard>
	</Grid>
</section>
