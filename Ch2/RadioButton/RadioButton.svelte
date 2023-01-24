<script>
  import './radiobutton.css';
  export let options;
  export let userSelected = options[0].value;
	
  const slugify = (str = "") =>
    str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
</script>

<div class="cobalt">
  {#each options as { value, label }}
    <input
      type="radio"
      id={slugify(label)}
      bind:group={userSelected}
      value={value} 
      {...$$props}
    />
    <label for={slugify(label)}> {label} </label>
  {/each}
</div>
