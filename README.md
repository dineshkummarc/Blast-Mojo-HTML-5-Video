[HTML5 Video Player with Flash Fallback for Blast Mojo Framework](http://blastmojo.com/) - by Paul Ortchanian
================================

How to integrate HTML5 video into your existing web application
---------------------------------------
* Make sure you have the latest version of the Blast Mojo Framework (http://github.com/blastradius/Blast-Mojo) integrated into your web application
* Copy the following behaviors into your Behaviors directory (you can put them into a more suitable folder, such as, js/applicationName/behavior/video/*)
    * InitSwfObjectBehavior - Responsible for intializing a Flash object via Swfobject when your application bootstraps.
    * KillSwfObjectBehavior - (optional) Responsible for destroying the flash object. The developer can decide to programmatically remove the flash player.
    * ToggleCollapseBehavior - (optional) Responsible for collapsing the video object.
    * ToggleMuteBehavior - (optional) Responsible for muting/unmuting the video object.
    * TogglePlayBehavior - Responsible for playing/stopping the video object.
    * ToggleVolumeBehavior - Responsible for increasing or decreasing the volume of the video object.
        
* Add the following entry to your SiteMap:
    <code>
        {
            pattern: "#video-player",
            controllers: [
                {controller: "foo.global.controller.VideoPlayaController"}
            ]
        }
    </code>
* Run your application!

TODO
---------------------------------------
* Document how users can programmatically swap between different video sources.