<script>
  import './checkbox.css';
	export let checked = true;
  export let label = "This is a default checkbox";
  export let disabled = false;
  export let onClick = null;
</script>

<div class="cobalt">
  <input 
    type="checkbox" 
    id="name"
    {checked}
    {disabled}
    on:click = {onClick}
    {...$$props}    
  /> 
  <label for="name">
    {label}
  </label>
</div>
