<svelte:options tag="cobalt-cell" />

<script>
  export let placeholderImages;
  let imgHolder = JSON.parse(placeholderImages);
</script>

<div class="cell">
  {#if imgHolder}
    <div>
      <img
        src="https://loremflickr.com/150/160/camera"
        alt="placeholder"
        data-testid="placeholderImage"
      />
      <div class="description" data-testid="placeholderLabel">
        This is a test image
      </div>
    </div>
  {:else}
    <div class="cellSize">
      <slot />
    </div>
  {/if}
</div>

<style>
  .cell {
    border: 1px solid black;
    text-align: center;
  }

  .cellSize {
    min-height: 100px;
  }

  .description {
    color: #ffffff;
    background-color: #6666ff;
    padding: 2px 0;
  }

  img {
    padding: 5px;
  }
</style>
