public class RandomContactFactory {
    public static List<Contact> generateRandomContacts(Integer numCts, String CtLastName) {
        List<Contact> ctList = new List<Contact>();
        
        for(Integer i=0;i<numCts;i++) {
            Contact c = new Contact(FirstName='FirtName' + i,Lastname='CommonName');
            ctList.add(c);
        }
        return ctList;
    }
}