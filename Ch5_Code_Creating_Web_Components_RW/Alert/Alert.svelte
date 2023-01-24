<svelte:options tag="cobalt-alert" />

<script>
  import Icon from "./Icon.svelte";

  export let show;
  export let icon;
  export let close;
  export let type = "";
  export let title = "";
  export let description = "";
  let showAnimation = true;
  let typeClass;

  // Convert string value to boolean where appropriate
  let showIcon = JSON.parse(icon);

  switch (type) {
    case "warn":
      typeClass = "alert-warn";
      break;
    case "dark":
      typeClass = "alert-dark";
      break;
    case "error":
      typeClass = "alert-error";
      break;
    case "info":
      typeClass = "alert-info";
      break;
    case "success":
      typeClass = "alert-success";
      break;
    default:
      typeClass = "";
  }
  const classes = ["alert", typeClass, showAnimation ? "fade-in" : ""]
    .filter((klass) => klass.length)
    .join(" ");

  const closeAlert = () => {
    show = false;
  };
</script>

{#if show}
  <dialog open on:click={close} class={classes} role="alert">
    <div class="icon">
      {#if showIcon}<Icon iconType={type} />{/if}
    </div>
    <div class="message">
      <strong>
        {title}
      </strong>
      {description}
    </div>
    <div>
      <button on:click={closeAlert}>&#x2716;</button>
    </div>
  </dialog>
{/if}

<style>
  dialog {
    min-width: 300px;
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border: none;
  }

  button {
    background: none;
    border: none;
    font-size: 21px;
  }

  .icon {
    margin-right: 10px;
  }

  .message {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    min-width: 300px;
  }

  .fade-in {
    animation: fade-in 2000ms both;
  }

  @keyframes fade-in {
    from {
      opacity: 0%;
    }
  }

  .alert-warn {
    background: #ffeb3b;
    color: #000000;
  }

  .alert-info {
    background: #2196f3;
    color: #ffffff;
  }
</style>
