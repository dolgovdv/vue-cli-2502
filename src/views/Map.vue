<template>
  <div>
    <h1>Map</h1>
    <div id="map"></div>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  name: 'MapLeaflet',
  data() {
    return {
      map: null,
      tileLayer: null,
      markers: L.markerClusterGroup(),
      marker: [{ coords: [55.75, 37.61] }, { coords: [55.75, 37.51] }]
    }
  },
  mounted() {
    /* Code to run when app is mounted */
    this.initMap()
  },
  methods: {
    /* Any app-specific functions go here */
    initMap() {
      this.map = L.map('map', {
        center: [55.75, 37.61],
        zoom: 11,
        layers: this.layer
      })
      this.tileLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;'
      })
      this.tileLayer.addTo(this.map)

      this.addMarker(this.marker)
    },
    addMarker(arr) {
      arr.forEach(element => {
        // L.marker(element.coords).addTo(this.map)
        // marker claster
        this.markers.addLayer(L.marker(element.coords))
      })

      this.map.addLayer(this.markers)
    }
  }
}
</script>

<style>
#map {
  height: 600px;
}
</style>
