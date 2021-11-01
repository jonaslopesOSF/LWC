import { LightningElement, api, track } from "lwc";
import getAllReviews from "@salesforce/apex/ProductDataService.getAllReviews";

// Custom Labels Imports
import labelNoReviewsAvailable from "@salesforce/label/c.No_Reviews_Available";

export default class ProductReviews extends LightningElement {
  // Private
  @track productReviews;
  @track error;
  @track isLoading;
  @track productId;
  readOnly = true;
  
  label = {
    labelNoReviewsAvailable,
  }

  // Getter and Setter to allow for logic to run on recordId change
  get recordId() {
    return this.productId;
  }

  @api set recordId(value) {
    this.setAttribute("productId", value);
    this.productId = value;

    this.getReviews();
  }
  
  // Getter to determine if there are reviews to display
  get reviewsToShow() { 
    return this.productReviews?.length ? true : false;
  }

  // Public method to force a refresh of the reviews invoking getReviews
  @api refresh() { 
    this.getReviews();
  }
  
  // Imperative Apex call to get reviews for given product
  // returns immediately if productId is empty or null
  // sets isLoading to true during the process and false when it’s completed
  // Gets all the productReviews from the result, checking for errors.
  getReviews() { 
    if (!this.productId) {
      return;
    }

    this.isLoading = true;

    getAllReviews({ productId: this.recordId })
      .then((result) => {
        this.productReviews = result;
        this.error = undefined;
      })
      .catch((error) => {
        this.productReviews = undefined;
        this.error = error.body.message;;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
