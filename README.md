# GBV Service Providers Map - Coastal Ghana

![Project Logo](src/images/logos/waca.png) <!-- Replace with your actual logo path -->

A web map displaying Gender-Based Violence (GBV) service providers (schools, hospitals, police stations, courts, etc.) across selected coastal districts in Ghana. This tool helps victims find support services and aids GBV reduction efforts.

[![Leaflet](https://img.shields.io/badge/Leaflet-1.7.1-green.svg)](https://leafletjs.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Table of Contents 📑
- [About](#about)
- [Usage](#usage)
  - [Installation](#installation)
  - [Running the Map](#running-the-map)
- [Development](#development)
  - [Pre-Requisites](#pre-requisites)
  - [Development Environment](#development-environment)
  - [File Structure](#file-structure)
  - [Data Sources](#data-sources)
- [Community](#community)
  - [Contribution](#contribution)
  - [Branches](#branches)
- [License](#license)

---

## About ℹ️
This interactive web map visualizes GBV service providers across coastal districts in Ghana, including:
- Schools
- Hospitals/clinics
- Police stations
- Courts
- Other support services

The project aims to:
- Help GBV victims locate support services quickly
- Assist NGOs and government agencies in resource planning
- Raise awareness about available GBV services

Built with 🛠️:
[![Leaflet](src/images/logos/leaflet-logo.svg)](https://leafletjs.com/) 
[![QGIS](https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/QGIS_logo_new.svg/120px-QGIS_logo_new.svg.png)](https://qgis.org/) 
[![HTML5](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png)](https://developer.mozilla.org/en-US/docs/Web/HTML) 
[![CSS3](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png)](https://developer.mozilla.org/en-US/docs/Web/CSS) 
[![JavaScript](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/120px-Unofficial_JavaScript_logo_2.svg.png)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Usage

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/edudzikorku/GBV_Service_Providers.git
   ```
2. Navigate to the project directory:
   ```bash
   cd GBV_Service_Providers
   ```

No additional installation is required as this is a client-side web application.

### Running the Map
1. Open `index.html` in any modern web browser
2. Use the map controls to:
   - Zoom in/out
   - Toggle between different service provider layers
   - Click on markers for more information

---

## Development

### Pre-Requisites ✅
- Modern web browser (Chrome, Firefox, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Basic understanding of:
  - HTML/CSS/JavaScript
  - Leaflet.js (optional)
  - GeoJSON format (optional)

### Development Environment
1. Fork and clone the repository
2. Install a local development server (optional but recommended):
   ```bash
   npm install -g live-server
   live-server
   ```

### File Structure 📁
```
index.html                # Main application entry point
src/
├── data/                 # GeoJSON data files
│   ├── districts.geojson         # District boundaries
│   └── gbv_service_providers.geojson  # Service provider locations
├── images/               # Project images and logos
├── scripts/              # JavaScript files
│   ├── config.js         # Map configuration
│   └── main.js           # Main application logic
└── styles/               # CSS files
    ├── index.css         # Main styles
    └── media.css         # Responsive styles
```

### Data Sources 📊
- Service provider locations: Collected from Google Maps via [Apify](https://console.apify.com/)
- District boundaries: [Humanitarian Data Exchange](https://data.humdata.org/dataset/cod-ab-gha)
- Data processed using [QGIS](https://qgis.org/)

---

## Community

### Contribution
We welcome contributions to improve this project:

1. **Report a bug**  
   Open an issue describing the problem

2. **Request a feature**  
   Suggest new features or improvements

3. **Submit a pull request**  
   - Fork the repository
   - Create a feature branch (`feat-your-feature-name`)
   - Submit a PR to the `stage` branch

### Branches
- `main`: Production branch (stable releases)
- `stage`: Development branch (active work)

---

## License :scroll:
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments 🙏
- Leaflet.js for the mapping library
- QGIS team for geospatial data processing
- Humanitarian Data Exchange for boundary data
- All GBV service providers featured on the map