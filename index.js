var now = moment().format("D MMM, h.mA");
document.getElementById("date").innerHTML = now;

var platform = new H.service.Platform({
  'apikey': 'zNt7PkvIDBA-4CiFc4mX0wa3GIIQYN_5KVH4tROc5uY'
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


if (document.querySelector(".bg").requestFullscreen)
  document.querySelector(".bg").requestFullscreen();
else if (document.querySelector(".bg").webkitRequestFullScreen)
  document.querySelector(".bg").webkitRequestFullScreen();

screen.orientation.lock("portrait");