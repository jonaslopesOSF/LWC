import { LightningElement, api, wire, track } from 'lwc';
import getDesiredDeliveryDate from "@salesforce/apex/GetDesiredDeliveryDate.getDesiredDeliveryDate";

export default class DesiredDeliveryDate extends LightningElement {
    @track desiredDeliveryDate;

    @api 
    get cartId() {
        return this.cartId;
    }

    set cartId(value) {
        this.cartId = value;
    }
    
    @wire(getDesiredDeliveryDate, { cartId: "$cartId" })
    desiredDeliveryDate;
}