var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
    content: ''
});

// Our markers
markers1 = [
    ['0', 'Otay Mesa West, San Diego, CA, USA', 32.575258, -117.061613, 'ems', 'icon_report_ems.png'],
    ['1', 'Sabre Springs, San Diego, CA, USA', 32.958337, -117.096112, 'fire', 'icon_report_fire.png'],
    ['2', 'Home Av & Fairmount Av, San Diego, CA 92105, USA', 32.728588, -117.100064, 'hazmat', 'icon_report_hazmat.png'],
    ['3', 'San Ysidro, San Diego, CA, USA', 32.556325, -117.055856, 'mva', 'icon_report_mva.png'],
    ['4', 'Valencia Park, San Diego, CA 92114, USA', 32.691563, -117.072024, 'fire', 'icon_report_fire.png'],
    ['5', 'Pacific Beach, San Diego, CA, US', 32.805941, -117.219577, 'ems', 'icon_report_ems.png'],
    ['6', 'Front St & B St, San Diego, CA 92101, USA', 32.717516, -117.164727, 'hazmat', 'icon_report_hazmat.png'],
    ['7', '5th Av & Broadway, San Diego, CA 92101, USA', 32.715218, -117.160156, 'mva', 'icon_report_mva.png']

];

//Function to init map

function initialize() {
    var center = new google.maps.LatLng(32.6147, -117.0499);
    var mapOptions = {
        zoom: 10,
        center: center,
        scrollwheel: false

    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
}

//Function to add marker to map


function addMarker(marker) {
    var category = marker[4];
    var title = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];
    var icon = marker[5]

    marker1 = new google.maps.Marker({
        title: title,
        position: pos,
        category: category,
        map: map,
        icon: icon
    });

    gmarkers1.push(marker1);

    // Marker click listener
    google.maps.event.addListener(marker1, 'click', (function(marker1, content) {
        return function() {
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(this.getPosition());
            map.setZoom(10);
        }
    })(marker1, content));
}


// Function to filter markers by category


filterMarkers = function(category) {
    for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);
        } else {
            marker.setVisible(false);
        }
    }
}

// Init map
initialize();
