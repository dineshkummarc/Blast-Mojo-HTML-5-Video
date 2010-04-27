dojo.provide("foo.global.behavior.ToggleVolumeBehavior");
dojo.require("mojo.command.Behavior");

/*
    Class: foo.global.controller.ToggleVolumeBehavior
    Author: Paul Ortchanian
    
   	Behaviors for Toggle muting of video

*/

dojo.declare("foo.global.behavior.ToggleVolumeBehavior", mojo.command.Behavior, 
{
  execute: function(requestObj) {
    
    var params = requestObj.getParams();
    // Get element user clicked on
    var bol = params.bol;
    var video = mojo.queryFirst(params.video);
    if(bol){
      if(video.volume < 1) video.volume += 0.25;
    }else{
      if(video.volume > 0) video.volume -= 0.25;
    }
  }
});