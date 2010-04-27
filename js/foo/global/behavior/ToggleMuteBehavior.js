dojo.provide("foo.global.behavior.ToggleMuteBehavior");
dojo.require("mojo.command.Behavior");

/*
    Class: foo.global.controller.ToggleMuteBehavior
    Author: Paul Ortchanian
    
   	Behaviors for Toggle muting of video

*/

dojo.declare("foo.global.behavior.ToggleMuteBehavior", mojo.command.Behavior, 
{
	execute: function(requestObj) {
		
		var params = requestObj.getParams()
		// Get element user clicked on
		var bol = params.bol;
		var video = mojo.queryFirst(params.video);
		// toggle
		video.muted = Boolean(bol);
	
  	}
});