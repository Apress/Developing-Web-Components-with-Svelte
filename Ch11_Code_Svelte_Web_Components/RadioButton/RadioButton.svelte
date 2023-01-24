<script>
  export let id;
  export let options = [];
  export let checkedOptions = [];
  export let type = "radio";
  export let legendLabel = "Radio buttons";
</script>

<fieldset>
  <legend class="legend">{legendLabel}</legend>
  {#each options as { name, value, label }, index}
    <label class="radio-label-wrap">
      <input
        class="radioClasses"
        id="{id}-{name}-{index}"
        {type}
        {name}
        {value}
        checked={checkedOptions.includes(value)}
        on:blur
        on:input
        on:click
        on:focus
        {...$$restProps}
      />
      <span class="radio-label-copy">{label}</span>
    </label>
  {/each}
</fieldset>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    line-height: 1.4;
  }

  .radio-group {
    font-family: Arial, Helvetica, sans-serif;
  }

  input[type="radio"] {
    position: relative;
    margin: 0;
    cursor: pointer;
    vertical-align: text-top;
  }
  input[type="radio"]:before {
    transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
    transform: scale(0, 0);
    content: "";
    position: absolute;
    top: 0.14rem;
    left: 0.1rem;
    z-index: 1;
    width: 0.55rem;
    height: 0.55rem;
    background: #16a085;
    border-radius: 50%;
  }
  input[type="radio"]:checked:before {
    transform: scale(1, 1);
  }
  input[type="radio"]:after {
    content: "";
    position: absolute;
    top: -0.1rem;
    left: -0.125rem;
    width: 1rem;
    height: 1rem;
    background: #fff;
    border: 2px solid #e2e2e2;
    border-radius: 50%;
  }
</style>
