<script lang="ts">
	import { Copy, DownloadSimple, Link } from 'phosphor-svelte';

	import download from 'downloadjs';
	import { toast } from 'svelte-sonner';
	import type { svgType } from '../types';
	import { MIMETYPE, getSvgContent } from '../utils';

	export let svg: svgType;

	const downloadSvg = (url?: string) => {
		download(url || '');
		toast.success('Downloading...');
	};

	const copyToClipboard = async (url?: string) => {
		const data = {
			[MIMETYPE]: getSvgContent(url, true)
		};
		try {
			const clipboardItem = new ClipboardItem(data);
			await navigator.clipboard.write([clipboardItem]);
		} catch (error) {
			const content = (await getSvgContent(url, false)) as string;
			await navigator.clipboard.writeText(content);
		}
		toast.success('Copied to clipboard!', {
			description: `${svg.title} - ${svg.category}`
		});
	};
</script>

<div class="flex flex-col items-center justify-center rounded-md p-4 border">
	<img src={svg.route} alt={svg.title} class="mb-4 mt-2 h-10" />
	<div class="mb-3 flex flex-col items-center justify-center">
		<p class="truncate text-[15px] font-medium">{svg.title}</p>
		<a
			href={`/${svg.category.toLowerCase()}`}
			class="text-sm lowercase text-neutral-500 hover:underline">{svg.category}</a
		>
	</div>
	<div class="flex items-center space-x-1">
		<button
			on:click={() => {
				copyToClipboard(svg.route);
			}}
			title="Copy to clipboard"
			class="flex items-center space-x-2 rounded-md p-2 duration-100 hover:bg-neutral-200
			dark:hover:bg-neutral-700/40"
		>
			<Copy size={17} />
		</button>
		<button
			on:click={() => {
				downloadSvg(svg.route);
			}}
			title="Download"
			class="flex items-center space-x-2 rounded-md p-2 duration-100 hover:bg-neutral-200 dark:hover:bg-neutral-700/40"
		>
			<DownloadSimple size={17} />
		</button>
		<a
			href={svg.url}
			title="Website"
			target="_blank"
			class="flex items-center space-x-2 rounded-md p-2 duration-100 hover:bg-neutral-200 dark:hover:bg-neutral-700/40"
		>
			<Link size={17} />
		</a>
	</div>
</div>
