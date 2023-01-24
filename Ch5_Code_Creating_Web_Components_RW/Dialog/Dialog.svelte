<svelte:options tag="cobalt-dialog" />

<script>
  import CloseIcon from "./Close.svelte";
  export let show = "true"; // THis is the one to change!
  let showDialog = show == "true";
</script>

<button on:click={() => (showDialog = !showDialog)}>Show dialog</button>

{#if showDialog}
  <div class="cobalt">
    <div id="background" />
    <div id="modal">
      <div class="header">
        <h3>Modal title</h3>
        <button
          type="button"
          class="close"
          on:click={() => (showDialog = false)}
        >
          <CloseIcon />
        </button>
      </div>
      <p>Click on the X to close me</p>
    </div>
  </div>
{/if}

<style>
  .cobalt {
    font-family: Arial, Helvetica, sans-serif;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  #background {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    animation: fadein 0.5s;
  }

  #modal {
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 10px;
    width: 400px;
    height: 250px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #c4c4c4;
  }

  #modal div button {
    display: contents;
    color: #19247c;
  }

  #modal div button:hover {
    color: #9393ff;
  }
</style>
