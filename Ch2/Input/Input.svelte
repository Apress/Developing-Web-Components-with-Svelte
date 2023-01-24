<script>
  import './input.css';
  export let label = "Label:";
  export let placeholder = "";
  export let fieldType = "text";
  export let onInput = null;
  export let disabled = false;
  export let inputName = "";
  export let fieldID = "";
</script>

<div class="cobalt">
  {#if label}
    <label for="name">{label}</label>
  {/if}
  <input type={fieldType} 
          id={fieldID} 
          name={inputName}
          placeholder={placeholder}
          disabled={disabled}
          on:input = {onInput}
          {...$$props}
  >
</div>

