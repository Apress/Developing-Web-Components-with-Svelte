<svelte:options tag="cobalt-breadcrumbs" />

<script>
  import arrow from "./icons/arrow-forward-outline.svg";

  export let divider = "/";
  export let image = false;
  // export let breadcrumbItems = [
  //   { href: "/", text: "Dashboard" },
  //   { href: "/reports", text: "Annual reports" },
  //   { href: "/reports/2019", text: "2019" },
  // ];
  import breadcrumbItemsData from "./breadcrumbsdata.json";

  export let breadcrumbItems = [];

  if (breadcrumbItems == []) {
    breadcrumbItems = breadcrumbItemsData;
  }
</script>

<div class="cobalt">
  <ul class="breadcrumb">
    {#each breadcrumbItems as breadcrumbItem, i}
      <li>
        <!-- Breadcrumb divider -->
        {#if i !== 0}
          {#if !image}
            <span>{divider}</span>
          {/if}

          {#if image}
            <img src={arrow} alt="arrow" height="15" width="15" />
          {/if}
        {/if}

        <!-- Render each breadcrumb -->
        {#if i === breadcrumbItems.length - 1}
          {breadcrumbItem.text}
        {:else}
          <a href={breadcrumbItem.href}>{breadcrumbItem.text}</a>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  .cobalt {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
  }

  ul.breadcrumb {
    padding: 10px 16px;
    list-style: none;
    background-color: #eee;
  }

  ul.breadcrumb li {
    display: inline;
    font-size: 18px;
  }

  ul.breadcrumb li a {
    color: #19247c;
    text-decoration: none;
  }

  ul.breadcrumb li a:hover {
    color: #9393ff;
    text-decoration: underline;
  }

  ul.breadcrumb li span {
    display: inline;
    padding: 8px;
  }
</style>
