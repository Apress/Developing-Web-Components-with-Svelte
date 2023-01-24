<script>
  import Date from "./lib/Date.svelte";
  import Current from "./lib/Current.svelte";
</script>

<div class="container">
  <h1>Weather</h1>
  <Date />
  <Current />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    box-shadow: 0px 0px 18px -2px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    width: 450px;
    background-image: linear-gradient(#9a9a9a, #a7a7a7, #b3b3b3);
    height: 224px;
  }

  h1 {
    display: grid;
    grid-template-columns: 1fr 1.55fr;
    text-align: start;
    color: #000000;
  }
</style>
