import { LightningElement, api, track } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import PRODUCT_REVIEW_OBJECT from "@salesforce/schema/ProductReview__c";
import NAME_FIELD from "@salesforce/schema/ProductReview__c.Name";
import COMMENT_FIELD from "@salesforce/schema/ProductReview__c.Comment__c";

const SUCCESS_VARIANT = "success";

// Custom Labels Imports
import labelReviewSubject from '@salesforce/label/c.Review_Subject';
import labelRating from '@salesforce/label/c.Rating';
import successTitle from "@salesforce/label/c.Success_Title";

export default class ProductAddReviewForm extends LightningElement {
  // Private
  @track rating = 0;
  @track productId;

  productReviewObject = PRODUCT_REVIEW_OBJECT;
  nameField = NAME_FIELD;
  commentField = COMMENT_FIELD;

  label = {
    labelReviewSubject,
    labelRating,
    successTitle
  }
  
  // Public Getter and Setter to allow for logic to run on recordId change
  get recordId() {
    return this.productId;
  }

  @api set recordId(value) {
    this.setAttribute("productId", value);
    this.productId = value;
  }
  
  // Gets user rating input from stars component
  handleRatingChanged(event) { 
    this.rating = event.detail.rating;
  }
  
  // Custom submission handler to properly set Rating
  // This function must prevent the anchor element from navigating to a URL.
  // form to be submitted: lightning-record-edit-form
  handleSubmit(event) {
    event.preventDefault();
    const fields = event.detail.fields;
    fields.Rating__c = this.rating;
    fields.Product__c = this.productId;

    this.template.querySelector('lightning-record-edit-form').submit(fields);
  }
  
  // Shows a toast message once form is submitted successfully
  // Dispatches event when a review is created
  handleSuccess() {
    // TODO: dispatch the custom event and show the success message
    const createReviewEvent = new CustomEvent("createreview", {
      detail: {}
    });

    this.dispatchEvent(createReviewEvent);
    
    const toastEvent = new ShowToastEvent({
      title: successTitle,
      message: '',
      variant: SUCCESS_VARIANT
    });

    this.dispatchEvent(toastEvent);
    this.handleReset();
  }
  
  // Clears form data upon submission
  // TODO: it must reset each lightning-input-field
  handleReset() {
    const inputFields = this.template.querySelectorAll("lightning-input-field");
    if (inputFields) {
      inputFields.forEach(field => {
        field.reset();
      });
    }
  }
}
