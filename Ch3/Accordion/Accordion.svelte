<svelte:options tag="cobalt-accordion" />

<script>
	import AccordionItem from "./AccordionItem.svelte";
	//import accordionData from "./accordiondata.json";
	export let data = []; //= accordionData;
</script>

<div class="cobalt-accordion">
	{#each data as entry}
		<AccordionItem title={entry.title} entry={entry.text} />
	{/each}
</div>

<style>
	.cobalt-accordion {
		display: flex;
		flex-direction: column;
		width: 500px;
	}
</style>
