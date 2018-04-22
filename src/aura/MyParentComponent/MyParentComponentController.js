({
	doInit : function(component, event, helper) {
		console.log("parent doInit");
	},
    doRefresh : function(component, event, helper) {
		console.log("parent doRefresh");
	},
	shootRefresh : function(component, event, helper) {
		console.log("parent shootRefresh");
		var myEvent = $A.get("e.c:customRefresh");
        myEvent.setParams({"toRefreshNow": "Yes sir, let's refresh!"});
        myEvent.fire();
	},
	methodshootRefresh : function(component, event, helper) {
		console.log("parent methodshootRefresh");
		var childComponent = component.find('MyChildComponent');
        childComponent.methodRefresh('true');
		
	},
})