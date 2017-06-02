'use strict';

app.socialmedView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('socialmedView');

// START_CUSTOM_CODE_socialmedView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_socialmedView
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

        socialmedViewModel = kendo.observable({
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
    parent.set('socialmedViewModel', socialmedViewModel);
})(app.socialmedView);

// START_CUSTOM_CODE_socialmedViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
iabRef = null;

function openFB() {
    iabRef = window.open('https://www.facebook.com/thevillagegroup/', '_blank', 'location=no,hidden=no');
}

function openTwitter() {
    iabRef = window.open('https://twitter.com/thevillagegroup', '_blank', 'location=no,hidden=no');
}

function openInsta() {
    iabRef = window.open('https://www.instagram.com/thevillagegroup/', '_blank', 'location=no,hidden=no');
}

// END_CUSTOM_CODE_socialmedViewModel