<script>
	import Counter from '../components/Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Grid from '../components/grid.svelte';
</script>

<!-- <svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head> -->

<section>
	<Grid>
		<div class="">1</div>
		<div class="">2</div>
		<div class="">3</div>
		<div class="">4</div>
		<div class="">5</div>
		<div class="">6</div>
		<div class="">7</div>
	</Grid>

	<Counter />
</section>
