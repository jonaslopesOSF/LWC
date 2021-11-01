@isTest
private class ProductDataServiceTest {
    @isTest
    static void testGetProductReviews(){
        Product2 product = new Product2(Name = 'testproduct');
        ProductReview__c review = new ProductReview__c(Product__c = product.Id, Comment__c = '', Rating__c = 2);
        insert review;

        List<ProductReview__c> reviews = ProductDataService.getAllReviews(product.Id);
        System.assertEquals(1, reviews.size(), 'There reviews where not queries correctly.');
    }
}