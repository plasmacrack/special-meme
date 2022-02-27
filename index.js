var now = moment().format("D MMM, h.mA");
document.getElementById("date").innerHTML = now;

var platform = new H.service.Platform({
  'apikey': 'ty2q_ksw2AHpX3Xl0rLMMv8KVur8BEpiBaA-hwBzWJU'
});

var geocoder = platform.getSearchService();
if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    geocoder.reverseGeocode(
      {
        limit: 1,
        at: position.coords.latitude + "," + position.coords.longitude
      }, data => {
        document.getElementById("location").innerHTML = data.items[0].address.label;
      }, error => {
        console.error(error);
      }
    );
  });
} else {
    console.error("Geolocation is not supported by this browser!");
}