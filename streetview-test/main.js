var panorama;

// The panorama that will be used as the entry point to the custom
// panorama set.
var entryPanoId = null;

function initialize() {
    // The latlng of the entry point to the Google office on the road.
    var sydneyOffice = new google.maps.LatLng(-33.918666,151.226274);

    // Set up the map and enable the Street View control.
    var mapOptions = {
        center: sydneyOffice,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'),
    mapOptions);

    panorama = map.getStreetView();
		
    google.maps.event.addListener(panorama, 'position_changed', function() {
        //var positionCell = document.getElementById('position_cell');
        var location = panorama.getPosition();
        console.debug(location);
    });
    // Set up Street View and initially set it visible. Register the
    // custom panorama provider function.
    var panoOptions = {
        position: sydneyOffice,
        visible: true,
        panoProvider:  getCustomPanorama,
        //	  panControl: false,
        pov: {
            heading: 34,
            pitch: 10,
            zoom: 0
        }
    };
    panorama.setOptions(panoOptions);

    // Create a StreetViewService object.
    var streetviewService = new google.maps.StreetViewService();

    // Compute the nearest panorama to the Google Sydney office
    // using the service and store that pano ID.
    var radius = 50;
    streetviewService.getPanoramaByLocation(sydneyOffice, radius,
    function(result, status) {
        if (status == google.maps.StreetViewStatus.OK) {
            // We'll monitor the links_changed event to check if the current
            // pano is either a custom pano or our entry pano.
            entryPanoId = result.location.pano;
            google.maps.event.addListener(panorama, 'links_changed',
            function() {
                createCustomLinks();
            });
        }
    });
}

var entryUrl = 'https://lh3.googleusercontent.com/-pZH3pnc-hlY/UOFrDYP5DII/AAAAAAAAAGc/kVKKcwtk7XI/s988/level5-entry.jpg';
var hallUrl = 'https://lh6.googleusercontent.com/-LGx29xi1uSE/UOFrDfuIUvI/AAAAAAAAAGc/-VQaAL3p8S0/s988/level5-hall.jpg';
var deskUrl = 'https://lh3.googleusercontent.com/-h60wgmoIBJ8/UOFftieGypI/AAAAAAAAAFQ/kSFVCk0J8i4/s988/level5-desk.jpg';
function getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
    switch (pano) {
        case 'entry': return entryUrl;
        case 'hall': return hallUrl;
        case 'desk': return deskUrl;
        default: {
                alert('unknow pano ID !!!');
                return;
        }
    }
    
    // Return a pano image given the panoID.
    // return 'http://code.google.com/apis/maps/documentation/javascript/examples/images/panoReception1024-' + zoom + '-' + tileX + '-' +tileY + '.jpg';
    // return 'http://code.google.com/apis/maps/documentation/javascript/images/samplePanorama.png';
    //	return 'http://s4.postimage.org/byk7jlsgd/Lighthouse.jpg'
    //return 'http://imagerevival.com.au/panorama.jpg'
    //return 'https://lh4.googleusercontent.com/-ive75-A4qi4/Tri_O9hU_xI/AAAAAAAAAAc/gqtMNemVf9g/w580-h435-k/unit_pic5.jpg'
    //return 'https://lh6.googleusercontent.com/-4wwoZH5v3RQ/TxqQfUYq1II/AAAAAAAAADk/0oewygPy0zY/w1061-h136-k/image3048.png'
    //return 'https://lh3.googleusercontent.com/-h60wgmoIBJ8/UOFftieGypI/AAAAAAAAAFQ/kSFVCk0J8i4/s988/level5-desk.jpg'
}

function getCustomPanorama(pano) {
    switch(pano) {
        case 'entry':
            return {
                location: {
                    pano: 'entry',
                    description: "NICTA level 5 entry",
                    latLng: new google.maps.LatLng(-33.913787,151.225385)
                },
                links: [],
                // The text for the copyright control.
                copyright: 'Imagery (c) 2010 Google',
                // The definition of the tiles for this panorama.
                tiles: {
                    tileSize: new google.maps.Size(988, 494),
                    worldSize: new google.maps.Size(988, 494),
                    // The heading at the origin of the panorama tile set.
                    centerHeading: 0,
                    getTileUrl: getCustomPanoramaTileUrl
                }
			  
            };
            break;
            case 'hall':
            return {
                location: {
                    pano: 'hall',
                    description: "NICTA level 5 hall",
                    latLng: new google.maps.LatLng(-33.913787,151.225385)
                },
                links: [],
                // The text for the copyright control.
                copyright: 'Imagery (c) 2010 Google',
                // The definition of the tiles for this panorama.
                tiles: {
                    tileSize: new google.maps.Size(988, 494),
                    worldSize: new google.maps.Size(988, 494),
                    // The heading at the origin of the panorama tile set.
                    centerHeading: 0,
                    getTileUrl: getCustomPanoramaTileUrl
                }
			  
            };
            break;
            case 'desk':
            return {
                location: {
                    pano: 'desk',
                    description: "NICTA IFL desk",
                    latLng: new google.maps.LatLng(-33.913787,151.225385)
                },
                links: [],
                // The text for the copyright control.
                copyright: 'Imagery (c) 2010 Google',
                // The definition of the tiles for this panorama.
                tiles: {
                    tileSize: new google.maps.Size(988, 494),
                    worldSize: new google.maps.Size(988, 494),
                    // The heading at the origin of the panorama tile set.
                    centerHeading: 0,
                    getTileUrl: getCustomPanoramaTileUrl
                }
			  
            };
            break;
        default:
            return null;
    }
}

function createCustomLinks() {
    var links = panorama.getLinks();
    var panoId = panorama.getPano();

    switch(panoId) {
        case entryPanoId:
            // Adding a link in the view from the entrance of the building to
            // reception.
            links.push({
                heading: -88,
                description : 'NICTA NRL',
                pano : 'entry'
            });
            break;
        case 'entry':
            // Adding a link in the view from the entrance of the office
            // with an arrow pointing at 100 degrees, with a text of "Exit"
            // and loading the street entrance of the building pano on click.
            links.push({
                heading: 180,
                description : 'Exit',
                pano : entryPanoId
            },{
                heading: 0,
                description : 'hall',
                pano : 'hall'
            });
			
            //			panorama.setPov({
            //				heading: 90,
            //				pitch: 100,
            //				zoom: 0
            //			  });
            break;
            case 'hall': links.push({
                heading: 180,
                description : 'Entry',
                pano : 'entry'
            },{
                heading: 0,
                description : 'IFL',
                pano : 'desk'
            });
            break;
            case 'desk': links.push({
                heading: 180,
                description : 'Hall',
                pano : 'hall'
            },{
                heading: 0,
                description : 'jump out',
                pano : entryPanoId
            });
            break;
        default:
            return;
    }
}

google.maps.event.addDomListener(window, 'load', initialize);


