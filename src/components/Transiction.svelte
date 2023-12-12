<script lang="ts">
	import { fly } from 'svelte/transition';
	export let pathname: string = '';
</script>

{#key pathname}
	<div class="w-full" in:fly={{ x: 0, y: 23, duration: 450 }}>
		<slot />
	</div>
{/key}
