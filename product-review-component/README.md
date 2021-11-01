# Reusable lightning map
This component is a reusable product review component that can be dragged and dropped on communities and the salesforce platform, for example: Lightning App Builder (Product Record Page) and Experience Builder (Product Detail Page).

To add a Lightning web component to a Lightning page in Lightning App Builder, deploy My Domain in your org. See Salesforce Help: https://help.salesforce.com/s/articleView?language=en_US&type=5&id=sf.domain_name_overview.htm

This project is based on a necessity to include a product review component that is broadly used in various e-commerces around the web. 

- If you plan to use in communities, take care of svg rendering and CSP rules before make it work.
- The component is auto adjustable in the Lightning environment since it is build on top of LWCs.
- The idea of this component is available on APPExchange but is a paid solution and an expensive one.
--------------------------------------------------------------------------------------------------------------------

Introduction
============

This component is easily and flexible in order to provide product review information for each product on the store.

The only thing the system administrator needs to do is to type "review" in the components search box and it will appear on the custom components section.

![](<data/img/searching component.png>)

After dragging it in experience builder on PDP the Admin should fill the property "Record Id" with this:

![](<data/img/component property.png>)

When using it on product record page, there is no need to include the record Id property since the component is "aware" that he is running on a product record page.

![](<data/img/properties on product record page.png>)

Component on product record page 
=======================

![](<data/img/Reviews record page.png>)

![](<data/img/Reviews record page 2.png>)

Product review created - confirmation

![](<data/img/review created toast.png>)

Component on create review mode
=======================

![](<data/img/create review.png>)

Component if no reviews are available
=======================

![](<data/img/no reviews.png>)
