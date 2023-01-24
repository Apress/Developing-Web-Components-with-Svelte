<svelte:options tag="cobalt-grid" />

<script>
  export let columns = "2";
  export let rows = "4";
  export let border = "1px solid #000000";

  let colInt = parseInt(columns, 0);
  let rowInt = parseInt(rows, 0);
</script>

<div
  style="
    grid-template-rows: repeat({rowInt}, 1fr); 
    grid-template-columns: repeat({colInt}, auto);
    border: {border};
  "
>
  <slot />
</div>

<style>
  div {
    font-family: Arial, Helvetica, sans-serif;
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 5px;
    grid-auto-flow: column;
    border: 1px solid black;
  }
</style>
