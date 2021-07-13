import { LightningElement, api, wire, track } from 'lwc';
import getDesiredDeliveryDateFromOrderSummary from "@salesforce/apex/GetDesiredDeliveryDate.getDesiredDeliveryDateFromOrderSummary";

export default class OrderDeliveryDate extends LightningElement {
  @track desiredDeliveryDate;

  @api 
  get recordId() {
      return this.recordId;
  }

  set recordId(value) {
      this.recordId = value;
  }
  
  @wire(getDesiredDeliveryDateFromOrderSummary, { recordId: "$recordId" })
  desiredDeliveryDate;

}