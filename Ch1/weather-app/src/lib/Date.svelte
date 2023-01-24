<script>
  import { DateTime } from "luxon";
  const dt = DateTime.now();
  let currentDate = dt
    .setLocale("en-US")
    .toLocaleString({ ...DateTime.DATE_MED, weekday: "long" });
</script>

<div class="container">
  <p class="current-date">{currentDate}</p>
  <p class="location">
    <i class="fas fa-map-marker-alt" />
    New York, USA
  </p>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin: 0;
    padding: 0;
    color: rgba(255, 255, 255, 0.815);
  }

  i {
    color: rgba(255, 255, 255, 0.815);
  }
</style>
