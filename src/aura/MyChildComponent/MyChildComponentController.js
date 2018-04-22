({
	doInit : function(component, event, helper) {
		console.log("child doInit");
	},
    handleCustomRefresh : function(component, event, helper) {
		var value = event.getParam("toRefreshNow");
		console.log("child doRefresh "+value);
	},
	methodRefresh : function(component, event, helper) {
		console.log("child methodRefresh");
	},
	shootRefresh : function(component, event, helper) {
		console.log("child shootRefresh");
		$A.get("e.force:refreshView").fire();
	},
})