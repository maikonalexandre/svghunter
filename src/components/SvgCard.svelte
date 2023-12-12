<script>
	import { Copy, DownloadSimple, Link } from 'phosphor-svelte';
</script>

<div class="flex flex-col items-center justify-center rounded-md p-4 border">
	<div class="mb-4 mt-2 h-10 bg-neutral-400 w-10" />
	<div class="mb-3 flex flex-col items-center justify-center">
		<p class="truncate text-[15px] font-medium">Title</p>
		<a href="#" class="text-sm lowercase text-neutral-500 hover:underline">category</a>
	</div>
	<div class="flex items-center space-x-1">
		<button
			title="Copy to clipboard"
			class="flex items-center space-x-2 rounded-md p-2 duration-100 hover:bg-neutral-200
			dark:hover:bg-neutral-700/40"
		>
			<Copy size={17} />
		</button>
		<button
			title="Download"
			class="flex items-center space-x-2 rounded-md p-2 duration-100 hover:bg-neutral-200 dark:hover:bg-neutral-700/40"
		>
			<DownloadSimple size={17} />
		</button>
		<a
			href="#"
			title="Website"
			target="_blank"
			class="flex items-center space-x-2 rounded-md p-2 duration-100 hover:bg-neutral-200 dark:hover:bg-neutral-700/40"
		>
			<Link size={17} />
		</a>
	</div>
</div>
