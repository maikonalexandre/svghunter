<script>
  	import "../app.css";
	import Sidebar from '../components/Sidebar.svelte';
</script>

<div class="container antialiased flex">
		<Sidebar />
		<main class="flex flex-1 mx-4 my-8 border rounded-md">
			<slot />
		</main>
</div>

