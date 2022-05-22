/*drop down menu for cities*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


// Initialize and add the map
function initMap() {
    // The location of Uluru
    const r2h = { lat: 35.041446257618134, lng: -80.83900364213677 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: r2h,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: r2h,
      map: map,
    });
  }
  
  window.initMap = initMap;
