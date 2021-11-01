import { LightningElement, wire, api } from "lwc";
import { getRecord } from "lightning/uiRecordApi";

// Custom Labels Imports
import labelReviews from "@salesforce/label/c.Reviews";
import labelAddReview from "@salesforce/label/c.Add_Review";
import labelNoProductRecordIsBind from "@salesforce/label/c.No_Product_Record_Bind";
import labelAverageReviews from "@salesforce/label/c.Average_Reviews";
import labelAverageRating from "@salesforce/label/c.Average_Rating";

// Product2 Schema Imports
import PRODUCT_ID_FIELD from "@salesforce/schema/Product2.Id";
import PRODUCT_NAME_FIELD from "@salesforce/schema/Product2.Name";
import PRODUCT_AVERAGE_RATING_FIELD from "@salesforce/schema/Product2.AverageRating__c";
const PRODUCT_FIELDS = [PRODUCT_ID_FIELD, PRODUCT_NAME_FIELD, PRODUCT_AVERAGE_RATING_FIELD];

export default class ReviewTabs extends LightningElement {
  label = {
    labelReviews,
    labelAddReview,
    labelNoProductRecordIsBind,
    labelAverageReviews,
    labelAverageRating
  };
  
  @api productId;
  @api product;
  averageRatingText;

  // Public Getter and Setter to allow for logic to run on recordId change
  get recordId() {
    return this.productId;
  }


  @api set recordId(value) {
    this.productId = value;
  };

  @wire(getRecord, { recordId: "$productId", fields: PRODUCT_FIELDS })
  wiredRecord({ data }) {
    if (data) {
      this.product = data;
      this.averageRatingText = this.label.labelAverageRating + ' ' + this.product.fields.AverageRating__c.value;
    }
  }

  // Navigates back to the review list, and refreshes reviews component
  handleReviewCreated() {
    this.template.querySelector('lightning-tabset').activeTabValue = 'reviews';
    const reviews = this.template.querySelector('c-product-reviews');
    
    if (reviews) {
      reviews.refresh();
    }
  }
}
