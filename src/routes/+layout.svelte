<script>
	import '../app.css';
	import Sidebar from '../components/Sidebar.svelte';
	import Transiction from '../components/Transiction.svelte';
	import { page } from '$app/stores';
	import { Toaster } from 'svelte-sonner';
</script>

<svelte:head>
	<title>SVGHunter</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="antialiased flex max-md:flex-col min-w-screen">
	<Sidebar />
	<main class="flex flex-1 px-8 py-12 rounded-md max-md:p-4 min-h-screen">
		<Transiction pathname={$page.url.pathname}>
			<slot />
		</Transiction>
		<Toaster
			position="bottom-right"
			toastOptions={{
				style: `background-color: #171717;
			 color: #ffff; 
			 border-radius: 0.4rem; border: 1px solid #262626;`
			}}
		/>
	</main>
</div>
