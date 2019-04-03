<template>
  <div>
    <h1>Map</h1>
    <div id="mapid" ref="mapElement"></div>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'MapLeaflet',
  daata() {
    return {
      mymap: L.map(this.$refs.mapElement).setView([51.505, -0.09], 13)
    }
  }
}
</script>

<style>
#mapid {
  height: 600px;
  width: 800px;
}
</style>
