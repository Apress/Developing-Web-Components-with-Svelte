<svelte:options tag="cobalt-table" />

<script>
  import Grid from "./Grid.svelte";
  import Cell from "./Cell.svelte";

  export let columnCount = "4";
  export let rowCount = "4";
  export let itemCount = "";
  export let border = "";
  export let placeholderImages = "false";
</script>

<Grid columns={columnCount} rows={rowCount} {border}>
  {#each { length: parseInt(itemCount, 0) } as _, i}
    <Cell {placeholderImages} />
  {/each}
</Grid>
