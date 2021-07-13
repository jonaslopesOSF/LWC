import { LightningElement, api, wire, track } from 'lwc';
import getDeliveryDateForCart from "@salesforce/apex/GetDesiredDeliveryDate.getDeliveryDateForCart";

export default class DesiredDeliveryDate extends LightningElement {
   @track deliverydate;
   
    @api 
    get cartId() {
        return this.cartId;
    }

    set cartId(value) {
        this.cartId = value;
    }

    @wire(getDeliveryDateForCart, {cartId: "$cartId"})
    myCart;
}