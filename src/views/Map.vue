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
      markers: null,
      marker: [
        {
          coords: [55.75, 37.61],
          alarm: null
        },
        {
          coords: [55.75, 37.62],
          alarm: null
        },
        {
          coords: [55.755, 37.62],
          alarm: null
        }
      ],
      ClasterClass: 'mycluster'
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
      this.markers = L.markerClusterGroup({
        // отображение полилинии границы кластера
        showCoverageOnHover: true,
        // измененеие иконки маркера кластера
        iconCreateFunction: function(cluster) {
          let ClasterClass = 'mycluster'
          console.log(cluster.getAllChildMarkers())
          // получение объектов кластера
          let markers = cluster.getAllChildMarkers()

          for (var i = 0; i < markers.length; i++) {
            console.log(markers[i].alarm)
            if (markers[i].alarm !== null) {
              ClasterClass = 'myclusterAlarm'
            }
          }
          return L.divIcon({
            html: '<b>' + cluster.getChildCount() + '</b>',
            className: ClasterClass,
            iconSize: L.point(40, 40)
          })
        },
        singleMarkerMode: false
      })
      arr.forEach(element => {
        // формирование маркеров на слое кластера
        let markerLayerClaster = L.marker(element.coords)
        markerLayerClaster.alarm = element.alarm
        // L.marker(element.coords).addTo(this.map)
        // marker claster
        this.markers.addLayer(markerLayerClaster)
      })
      // добавление маркеров на слой
      this.map.addLayer(this.markers)
    }
  }
}
</script>

<style>
#map {
  height: 600px;
}
.marker-cluster-small {
  background-color: rgba(140, 146, 226, 0.6);
}
.marker-cluster-small div {
  background-color: rgba(57, 116, 204, 0.6);
}
.mycluster {
  width: 40px;
  height: 40px;
  background-color: greenyellow;
  text-align: center;
  font-size: 24px;
}
.myclusterAlarm {
  width: 40px;
  height: 40px;
  background-color: rgb(255, 130, 47);
  text-align: center;
  font-size: 24px;
}
</style>
