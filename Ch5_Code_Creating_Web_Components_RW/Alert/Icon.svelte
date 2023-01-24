<svelte:options tag="cobalt-icon" />

<script>
  export let width = "24px";
  export let height = "24px";
  export let iconType = "";

  let icons = [
    {
      box: 512,
      name: "info",
      svg: `<path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M220 220h32v116"/>
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 340h88" /><path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z" fill="#ffffff" />`,
    },
    {
      box: 512,
      name: "warn",
      svg: `<path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" stroke="#000000" fill="none" stroke-miterlimit="10" stroke-width="32"/><path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="#000000" />`,
    },
  ];

  let displayIcon = icons.find((e) => e.name === iconType);
</script>

<svg
  class={$$props.class}
  {width}
  {height}
  viewBox="0 0 {displayIcon.box} {displayIcon.box}"
>
  {@html displayIcon.svg}
</svg>
