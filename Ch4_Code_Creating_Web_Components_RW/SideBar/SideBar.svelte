<svelte:options tag="cobalt-sidebar" />

<script>
  import { fly } from "svelte/transition";
  export let show = "true";
  let sidebar_show = show === "true";
</script>

<cobalt-hamburger on:click={() => (sidebar_show = !sidebar_show)} />

{#if sidebar_show}
  <nav transition:fly={{ x: 250, opacity: 1 }}>
    <slot />
  </nav>
{/if}

<style>
  nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    padding: 32px 16px 9.6px;
    border-left: 1px solid #aaa;
    background: #fff;
    overflow-y: auto;
    width: 160px;
    box-shadow: 2px 3px 3px 3px #000000;
  }
</style>
