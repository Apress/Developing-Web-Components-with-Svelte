<svelte:options tag="cobalt-spinner" />

<script>
  export let color = "#19247c";
  export let duration = "0.75s";
  export let size = "60";
  export let variant = "";

  const range = (size, startAt = 0) =>
    [...Array(size).keys()].map((i) => i + startAt);
</script>

<div class="cobalt">
  <!-- Circle spinner -->
  {#if variant == "circle"}
    <div>
      <div
        class="circle"
        style="--size: {size}px; --color: {color}; --duration: {duration}"
      />
    </div>
  {/if}

  <!-- Jumper spinner -->
  {#if variant == "jumper"}
    <div style="--size: {size}px; --color: {color}; --duration: {duration};">
      {#each range(3, 1) as version}
        <div
          class="jumper"
          style="animation-delay: {(1 / 3) * (version - 1) + 'px'};"
        />
      {/each}
    </div>
  {/if}
</div>

<style>
  .cobalt {
    display: flex;
  }

  .circle {
    height: var(--size);
    width: var(--size);
    border-color: var(--color) transparent var(--color) var(--color);
    border-width: calc(var(--size) / 12);
    border-style: solid;
    border-radius: 50%;
    animation: var(--duration) linear 0s infinite normal none running
      rotateCircle;
  }

  @keyframes rotateCircle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .jumper {
    height: var(--size);
    width: var(--size);
    border-radius: 100%;
    animation-fill-mode: both;
    position: absolute;
    opacity: 0;
    background-color: var(--color);
    animation: bounce var(--duration) linear infinite;
  }

  @keyframes bounce {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    5% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
</style>
