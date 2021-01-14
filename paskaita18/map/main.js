// window.addEventListener('load', function () {
//   // Creating map options
//   const mapOptions = {
//     center: [54.6831417351062, 25.27912111788835],
//     zoom: 13,
//   };

//   // Creating a map object
//   const map = new L.map("map", mapOptions);

//   // Creating a Layer object
//   const layer = new L.TileLayer(
//     "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   );

//   // Adding layer to the map
//   map.addLayer(layer);

//   fetch('http://m.stops.lt/vilnius/gps.txt')
//     .then((response) => response.text())
//     .then((list) => {
//       const listBus = list.split('\n');

//       for (let i = 0; i < listBus.length; i += 1) {
//         const bus = listBus[i];
//         const busParameters = bus.split(',');
//         const busType = busParameters[0];
//         const busName = busParameters[1];
//         const longitude = busParameters[2];
//         const latitude = busParameters[3];

//         if (longitude && latitude) {
//           var circle = L.circle([latitude / 1000000, longitude / 1000000], {
//             fillColor: busType == 1 ? 'red' : 'blue',
//             fillOpacity: 0.8,
//             color: 'none',
//             radius: 32,
//           }).addTo(map);
//           circle.bindPopup(busName);
//         }
//       }

//       // console.log(listBus)
//     });
// });

window.addEventListener('load', function () {
  // Creating map options
  const mapOptions = {
    center: [54.6831417351062, 25.27912111788835],
    zoom: 13,
  };

  // Creating a map object
  const map = new L.map("map", mapOptions);

  // Creating a Layer object
  const layer = new L.TileLayer(
    "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );

  // Adding layer to the map
  map.addLayer(layer);

  fetch('https://raw.githubusercontent.com/vilnius/mparking/master/parking_places.csv')
    .then((response) => response.text())
    .then((list) => {
      const listBus = list.split('\n');
      const zones = {};
      for (let i = 1; i < listBus.length; i += 1) {
        const zone = listBus[i].split(',');
        const zoneId = zone[1];
        const long = zone[3];
        const lat = zone[2];
        const order = zone[4];
        const type = zone[5];
        console.log(zoneId)
        if (zones[zoneId]) {
          zones[zoneId].push({
            longitude: long,
            latitude: lat,
            order,
            type,
          });
        } else {
          zones[zoneId] = [{
            longitude: long,
            latitude: lat,
            order,
            type,
          }]
        }

      }
      const zoneslist = Object.keys(zones);
      for (let i = 0; i < zoneslist.length; i += 1) {
        const zone = zones[zoneslist[i]];
        console.log(zone);
        var polygon = L.polygon([
          zone.sort((a, b) => a.order - b.order).map((z) => ([z.longitude, z.latitude]))
        ]).addTo(map);
        // polygon.bindPopup(type == 26 ? 'Geltona' : type);
      }
      // console.log(listBus)
    });
});

