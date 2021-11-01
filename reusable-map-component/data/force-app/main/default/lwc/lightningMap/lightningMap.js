// import BOATMC from the message channel
import { LightningElement, api, track } from "lwc";

export default class LightningMap extends LightningElement {
  // private
  subscription = null;
  errorMessage = 'The address or coordinate information has errors. Please contact your administrator';

  // General Info
  @api title;
  @api cardTitle;
  @api description;
  @api locationType;
  @api zoomLevel;
  
  // Address Info
  @api street;
  @api city;
  @api state;
  @api postalCode;
  @api country;

  // Coordinate Info
  @api latitude;
  @api longitude;

  @track mapMarkers = [];
  
  connectedCallback() {
    this.createMapMarkers();
  }

  // Creates the map markers array with the provided location information for the map.
  createMapMarkers() {
    if (this.locationType === 'Address Information') {
      this.createMapMarkerWithAddress();
    } else if (this.locationType === 'Coordinate Information') {
      this.createMapMarkerWithCoordinates();
    }
  }

  createMapMarkerWithCoordinates() {
    this.mapMarkers = [
      {
        location: {
          Latitude: this.latitude,
          Longitude: this.longitude
        },

        title: this.title,
        value: this.title,
        description: this.description
      }
    ];
  }
  
  createMapMarkerWithAddress() {
    this.mapMarkers = [
      {
        location: {
          City: this.city,
          Country: this.country,
          PostalCode: this.postalCode,
          State: this.state,
          Street: this.street
        },

        value: this.title,
        title: this.title,
        description: this.description
      }
    ];
  }

  // Getter method for displaying the map component, or a helper method.
  get showMap() {
    return this.mapMarkers.length > 0;
  }
}
