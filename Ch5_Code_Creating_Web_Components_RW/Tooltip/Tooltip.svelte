<svelte:options tag="cobalt-tooltip" />

<script>
  import { fade } from "svelte/transition";
  export let id = "tooltip";
  export let label;
  export let tip;
  export let timeout = "400";
  export let showHTML = "false";

  let displayHTML = JSON.parse(showHTML);

  let active = false;
  let enterTrigger;
  let leaveTrigger;

  function handleKeydown(e) {
    if (e.key === "Escape") {
      active = false;
      e.target.blur();
    }
  }

  function handleMouseEnter() {
    enterTrigger = setTimeout(() => {
      active = true;
    }, parseInt(timeout, 0));
  }

  function handleMouseLeave() {
    if (enterTrigger) {
      clearTimeout(enterTrigger);
      enterTrigger = null;
    }
    leaveTrigger = setTimeout(() => {
      active = false;
    }, parseInt(timeout, 0));
  }

  function handleInteraction() {
    if (leaveTrigger) {
      clearTimeout(leaveTrigger);
      leaveTrigger = null;
    }
  }
</script>

<div class="tooltip">
  <button
    aria-describedby={id}
    type="button"
    class="trigger"
    on:click={() => (active = true)}
    on:keydown={handleKeydown}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
  >
    ?
  </button>
  <div aria-hidden={!active} {id} role="tooltip" aria-label={label}>
    {#if active}
      <div
        transition:fade
        class="content"
        on:mouseenter={handleInteraction}
        on:mouseleave={handleMouseLeave}
      >
        {#if displayHTML}
          {@html tip}
        {:else}
          {tip}
        {/if}
      </div>
    {/if}
  </div>
</div>

<style>
  .tooltip {
    position: relative;
    z-index: 2;
  }

  .trigger {
    padding: 0;
    margin: 0;
    width: 19px;
    height: 19px;
    line-height: 15px;
    font-size: 17px;
    text-align: center;
    background-color: transparent;
    border-radius: 50%;
    border: 3px solid #666666;
    color: #999999;
    cursor: pointer;
    font-weight: bold;
  }

  .content {
    all: initial;
    position: absolute;
    left: 0;
    top: 100%;
    width: 300px;
    margin-top: 10px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .trigger:focus {
    outline: 2px solid #000;
  }

  [role="tooltip"]:empty {
    display: none;
  }
</style>
