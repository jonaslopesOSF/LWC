# Reusable lightning map
This component is a reusable lightning map component that can be dragged and dropped on communities and the salesforce platform, for example: Lightning App Builder (home page and app page) and Experience Builder.

To add a Lightning web component to a Lightning page in Lightning App Builder, deploy My Domain in your org. See Salesforce Help: https://help.salesforce.com/s/articleView?language=en_US&type=5&id=sf.domain_name_overview.htm

This project is based on a necessity to include map view component that is broadly used in lots of about us pages from different storefronts around the web. 

- If you specify an address, you must provide at least one of the following values: City, PostalCode, State, or Country.
- If you pass in both an address and a latitude and longitude, the map plots the marker according to the location type attribute defiend in the component properties by the admin.
- If a marker is invalid, it will not be plotted on the map.
- All latitude and longitude values must be valid. If you pass in an invalid latitude or longitude, the markers aren't plotted on the map. Latitude values fall within -90 and 90, and longitude values fall within -180 and 180.
--------------------------------------------------------------------------------------------------------------------

Introduction
============

This component is easily and flexible in order to provide map location information of the defined location, it can be a company headquarter address, a store on the city and so on. 

The only thing the system administrator needs to do is to type "map" in the components search box and it will appear on the custom components section.

![](<data/img/custom component search box.png>)

After dragging it in experience builder or lightning app builder (home page or app page), the required and optional properties are shown to be filled.
The admin needs to chose the following properties:
- Card Title
- Title
- Description
- Location Type
- Zoom Level
- Street
- City
- State
- PostalCode
- Country
- Latitude
- Longitude

![](<data/img/experience builder.png>)

The only observation here is that if the admin prefer to fill the latitude and longitude fields, he doesn't need to fill the address information fields like: street, city, postalcode, country and state. The opposite is also true.

Component on home page edit mode
=======================

![](<data/img/home page.png>)

Component working on home page 

![](<data/img/home page working.png>)

Component on app page edit mode
=======================

![](<data/img/lightning app page.png>)

Component autoadjustable depending on space
=======================

![](<data/img/autoadjustable.png>)
