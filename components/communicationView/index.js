'use strict';

app.communicationView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('communicationView');

// START_CUSTOM_CODE_communicationView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
var iabRef = null;
var x = null;

function replaceHeaderImage() {
    iabRef.executeScript({
        code: "var img=document.getElementsByClassName(\"slicknav_menu\"); img[0].style.display = 'none';var img=document.getElementsByClassName(\"donate-banner\"); img[0].style.display = 'none';var img=document.getElementsByClassName(\"foot\"); img[0].style.display = 'none'; var img=document.getElementsByClassName(\"social-float\"); img[0].style.display = 'none';"
    }, 
    function() {
        // alert("Image Element Successfully Hijacked");
        app.mobileApp.pane.loader.hide();
        iabRef.show();
    });
}

function iabClose(event) {
    iabRef.removeEventListener('loadstop', replaceHeaderImage);
    iabRef.removeEventListener('exit', iabClose);
}

function openHome() {
    app.mobileApp.pane.loader.show();
    iabRef = window.open('http://thevillagegroup.org/', '_blank', 'location=no,hidden=yes');
    iabRef.addEventListener('loadstop', replaceHeaderImage);
    iabRef.addEventListener('exit', iabClose);
}

function openCal() {
    iabRef = window.open('https://calendar.google.com/calendar/embed?src=qcsorg41i9eh16kejvi82b4i9g%40group.calendar.google.com&ctz=America/New_York', '_blank', 'location=no,hidden=no');
}

function openAbout() {
    app.mobileApp.pane.loader.show();
    iabRef = window.open('http://thevillagegroup.org/about-the-village-group/', '_blank', 'location=no,hidden=yes');
    iabRef.addEventListener('loadstop', replaceHeaderImage);
    iabRef.addEventListener('exit', iabClose);
}

function openDonate() {
    iabRef = window.open('http://thevillagegroup.org/community-programs-and-services/donate/', '_system', 'location=no,hidden=yes');
}

function openVol() {
    app.mobileApp.pane.loader.show();
    iabRef = window.open('http://thevillagegroup.org/community-programs-and-services/volunteer/', '_blank', 'location=no,hidden=yes');
    iabRef.addEventListener('loadstop', replaceHeaderImage);
    iabRef.addEventListener('exit', iabClose);
}

function openPrograms() {
    app.mobileApp.pane.loader.show();
    iabRef = window.open('http://thevillagegroup.org/after-school-programs/', '_blank', 'location=no,hidden=yes');
    iabRef.addEventListener('loadstop', replaceHeaderImage);
    iabRef.addEventListener('exit', iabClose);
}
// END_CUSTOM_CODE_communicationView
(function(parent) {
    var
    /// start global model properties

        processImage = function(img) {

            if (!img) {
                var empty1x1png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=';
                img = 'data:image/png;base64,' + empty1x1png;
            }

            return img;
        },
        /// end global model properties

        communicationViewModel = kendo.observable({
            /// start add model functions
            /// end add model functions

        });

    /// start form functions
    /// end form functions

    parent.set('onShow', function _onShow() {
        var that = parent;
        that.set('addFormData', {
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('communicationViewModel', communicationViewModel);
})(app.communicationView);

// START_CUSTOM_CODE_communicationViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_communicationViewModel