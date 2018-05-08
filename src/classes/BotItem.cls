public class BotItem {

    @AuraEnabled public String name { get;set; }
    @AuraEnabled public String linkURL { get;set; }
    
    public BotItem(String name) {
        this.name = name;
        //new comment 1 & 1 & 1
        //new comment 2 & 3 & 4
        //new comment 2 & 3 & 4 5

    }
    
    public BotItem(String name, string linkURL) {
        this.name = name;
        this.linkURL = linkURL;
    }

}