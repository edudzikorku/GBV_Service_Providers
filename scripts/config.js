// Configurations and translations 
var config = {
    // Map initial view 
    mapCenter: [5.518837, -0.304244], // Greater Accra Region, Ghana
    initialZoom: 12,

    // Loaded strings  
    localizedStrings: {
        "en": {
            "searchPlaceholder": "Search service providers...",
            "noResults": "No matches found",
            "noLocation": "Could not get your location",
            "noLocationSupport": "Geolocation is not supported by your browser",
            "filterTitle": "Filter Services",
            "medical": "Medical",
            "shelter": "Shelter",
            "legal": "Legal",
            'counseling': "Counseling",
            "other": "Other",
            "directions": "Directions",
            "clearRoute": "Clear Route",
            "switchLanguage": "Switch to Ewe",
            "address": "Address",
            "contact": "Contact",
            "email": "Email",
            "services": "Services",
            "hours": "Hours",
            "getDirections": "Get Directions",
            "loading": "Loading data...",
            "imageError": "Image not available"
        }
    },

    // Icon definitions 
    icons: {
        "health services": {
            icon: 'fa-hospital',
            colour: 'red'
        },
        "education services": {
            icon: 'fa-school',
            colour: 'blue'
        },
        "legal & human rights": {
            icon: 'fa-gavel',
            colour: 'green'
        },
        "law enforcement & protection": {
            icon: 'fa-shield',
            colour: 'gray'
        },
        "child & youth support ngos": {
            icon: 'fa-hands-helping',
            colour: 'orange'
        },
        "government & municipal administration": {
            icon: 'fa-landmark',
            colour: 'purple'
        },
        "social welfare & community development": {
            icon: 'fa-heart',
            colour: '#735751'
        }
    },

    // Paths 
    // Data crs must be in WGS84:4326
    providerDataPath: 'data/gbv_service_providers.geojson',
    greaterAccraDistrictDataPath: 'data/districts.geojson',
    imagePath: "images/"
}