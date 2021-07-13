public class GetDesiredDeliveryDate {
    @AuraEnabled 
    public static DateTime getDesiredDeliveryDate(String orderSummaryId) {
        List<OrderDeliveryGroupSummary> orderDeliveryGroupSummary = [SELECT Id, DesiredDeliveryDate 
                                                                     FROM OrderDeliveryGroupSummary 
                                                                     WHERE OrderSummaryId =: orderSummaryId 
                                                                     LIMIT 1];
        
        if(orderDeliveryGroupSummary.size() > 0) {
            return orderDeliveryGroupSummary.get(0).DesiredDeliveryDate;
        }
        
        return null;
    }
}