<script>
	import '../app.css';
	import Sidebar from '../components/Sidebar.svelte';
</script>

<svelte:head>
	<title>SVGHunter</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container antialiased flex">
	<Sidebar />
	<main class="flex flex-1 mx-4 my-8 border rounded-md">
		<slot />
	</main>
</div>
