<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Transiction from '../components/Transiction.svelte';
	import { page } from '$app/stores';
	import { Toaster } from 'svelte-sonner';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>SVGHunter</title>
	<meta name="svg hunter" content="A library with open source logos" />
	<meta name="google-site-verification" content="EOVyvjb1LaJ29mw3mxRQhL5wvI7HjeDxxB4-7vV6NvE" />
</svelte:head>

<div class="antialiased flex flex-col max-w-7xl mx-auto min-w-screen">
	<Navbar />
	<main class="flexflex-1 p-4 rounded-md max-md:p-4 min-h-screen">
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

	<Footer />
</div>
