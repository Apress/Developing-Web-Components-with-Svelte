<svelte:options tag="cobalt-tabs" />

<script>
  import tabItems from "./tabsdata.json";
  export let activeTabValue = "0";
  export let items;
  export let vertical = false;

  if (items == null) {
    items = tabItems;
  }

  const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<div class="cobalt" class:vertical>
  <ul>
    {#each Object.entries(items) as [id, name]}
      <li class={activeTabValue === id ? "active" : ""}>
        <span on:click={handleClick(id)}>
          {JSON.stringify(items[id].name).replace(/['"]+/g, "")}
        </span>
      </li>
    {/each}
  </ul>

  <div class="content">
    {#each Object.entries(items) as [id, text]}
      {#if activeTabValue === id}
        {JSON.stringify(items[id].text).replace(/['"]+/g, "")}
      {/if}
    {/each}
  </div>
</div>

<style>
  .cobalt {
    display: block;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #dee2e6;
  }

  .content {
    padding: 10px;
  }

  span {
    border: 1px solid transparent;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: block;
    padding: 8px 16px;
    cursor: pointer;
  }

  span:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
    background-color: #9393ff;
  }

  li.active > span {
    color: #ffffff;
    background-color: #19247c;
    border-color: #dee2e6 #dee2e6 #fff;
  }

  /* variant */
  div.cobalt.vertical {
    display: flex;
  }

  div.cobalt.vertical ul {
    flex-direction: column;
    border-bottom: none;
    align-self: baseline;
    margin-top: 0;
  }

  div.cobalt.vertical div.content {
    width: 300px;
    height: 200px;
  }

  div.cobalt.vertical ul li span {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
