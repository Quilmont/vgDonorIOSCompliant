'use strict';

app.media = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('media');

// START_CUSTOM_CODE_media
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
//document.addEventListener("deviceready", onDeviceReady, false);

function openDB() {
    window.open('https://www.dropbox.com/home/VG', '_system', 'location=no,hidden=no');

}

function id(element) {
    return document.getElementById(element);
}

function onMediaReady() {
    navigator.splashscreen.hide();
    captureApp = new captureApp();
    captureApp.run();
}

function captureApp() {}

captureApp.prototype = {
        pictureSource: null,

        destinationType: null,

        run: function() {
            var that = this;
            id("captureVideo").addEventListener("click", function() {
                that._captureVideo.apply(that, arguments);
            });
            id("captureImage").addEventListener("click", function() {
                that._captureImage.apply(that, arguments);
            });
        },

        _captureVideo: function() {
            var that = this;
            navigator.device.capture.captureVideo(function() {
                that._captureSuccess.apply(that, arguments);
            }, function() {
                captureApp._captureError.apply(that, arguments);
            }, {
                limit: 10
            });
        },

        _captureImage: function() {
            var that = this;
            navigator.device.capture.captureImage(function() {
                that._captureSuccess.apply(that, arguments);
            }, function() {
                captureApp._captureError.apply(that, arguments);
            }, {
                limit: 1
            });
        },

        _captureSuccess: function(capturedFiles) {
            var i,
                media = document.getElementById("media");
            media.innerHTML = "";
            for (i = 0; i < capturedFiles.length; i += 1) {
                media.innerHTML = "Media was saved to your device successfully! Keep capturing media, or upload to our online Gallery!";
            }
        },

        _captureError: function(error) {
            if (window.navigator.simulator === true) {
                alert(error);
            } else {
                var media = document.getElementById("media");
                media.innerHTML = "No media was captured";
            }
        },
    }
    // END_CUSTOM_CODE_media