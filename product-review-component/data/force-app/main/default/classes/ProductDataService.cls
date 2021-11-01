public with sharing class ProductDataService {
    @AuraEnabled(cacheable = false)
    public static List<ProductReview__c> getAllReviews(Id productId) {
        return [
            SELECT
                Id,
                Name,
                Comment__c,
                Rating__c,
                Product__c,
                LastModifiedDate,
                CreatedDate,
                CreatedBy.Name,
                CreatedBy.SmallPhotoUrl,
                CreatedBy.CompanyName
            FROM
                ProductReview__c
            WHERE
                Product__c =: productId
            WITH SECURITY_ENFORCED
            ORDER BY
                CreatedDate DESC
        ];
    }
}