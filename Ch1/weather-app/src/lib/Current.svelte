<script>
  import { onMount } from "svelte";

  let weather = {
    location: "",
    temp: "0",
    forecast: "n/a",
    icon: "https://placehold.it/50/50",
  };

  onMount(() => {
    location = "6174041";
    getCurrentWeather();
  });

  const API_KEY = import.meta.env.VITE_API_KEY2;
  console.log("API KEY", API_KEY);
  let currentTemp;
  let LAT;
  let LON;
  let icon;

  let location = "";
  let loading = true;
  let error = false;

  const getCurrentWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        LAT = position.coords.latitude;
        LON = position.coords.longitude;
        LAT = 40.6971494;
        LON = -74.2598665;

        loading = true;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              error = true;
              return;
            }

            weather = data;
            currentTemp = weather.main.temp.toFixed(0);
            icon = weather.weather[0].icon;
          })
          .catch((err) => {
            error = true;
          });
      });
    }
  };
</script>

<div class="container">
  <h1 class="temp">{currentTemp}°</h1>
  <img src="http://openweathermap.org/img/wn/{icon}@2x.png" alt="weather" />
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    margin: 0;
  }

  .temp {
    font-size: 56px;
    margin: 0;
  }
</style>
