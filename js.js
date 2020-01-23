let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 46.7712, lng: 23.6236 },
        zoom: 8,
        disableDefaultUi: true,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        //  mapTypeId: google.maps.MapTypeId.ROADMAP,
        // mapTypeId:google.maps.MapTypeId.SATELITE,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
            style: google.maps.ZoomControlStyle.SMALL
        },
        panControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        }
    });
}




