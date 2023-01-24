<svelte:options tag="cobalt-avatar" />

<script>
  export let src = "";
  export let status = "available" || "busy" || "away" || "unavailable";
  export let statusSize = "small" || "medium" || "large";

  $: statusClasses = () => {
    let inputKlasses = [status, statusSize];
    inputKlasses = inputKlasses.filter((klass) => klass.length);
    return inputKlasses.join(" ");
  };
</script>

<div class="cobalt-avatar">
  {#if src}
    <img {src} class="avatar-img" alt="avatar" />
  {/if}
  <slot />
  <span class={["base", statusClasses()].join(" ")} />
</div>

<style>
  .cobalt-avatar {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    border-radius: 800px;
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }

  .base {
    border-radius: 800px;
    position: absolute;
    border: 1px solid #373737;
  }

  .small {
    width: 8px;
    height: 8px;
    top: 25px;
    right: 0px;
  }

  .medium {
    width: 12px;
    height: 12px;
    top: 22px;
    right: -4px;
  }

  .large {
    width: 16px;
    height: 16px;
    top: 22px;
    right: -4px;
  }

  .available {
    background-color: #00ff00;
  }

  .danger {
    background-color: #ff0000;
  }

  .away {
    background-color: #ffff00;
  }

  .unavailable {
    background-color: #ffffff;
  }

  .avatar-img {
    width: 100%;
    height: auto;
    border-radius: 50rem;
  }
</style>
