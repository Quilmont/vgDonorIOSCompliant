'use strict';

app.home = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('home');

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
document.addEventListener("deviceready", onDeviceReady, false);

//function onPushNotificationReceived(e) {
//  alert(JSON.stringify(e));
//};

var onAndroidPushReceived = function(e) {
    var message = e.message;
    alert(message);
};

var onWpPushReceived = function(e) {
    if (e.type === "toast" && e.jsonContent) {
        var message = e.jsonContent["wp:Text2"] || e.jsonContent["wp:Text1"];
        alert(message);
    }
};

var onIosPushReceived = function(e) {
    var message = e.alert;
    navigator.notification.alert(message, alertCallback, ["Title"], [buttonName])
    //alert(message);
};

function onDeviceReady() {
    var everlive = new Everlive({
        appId: 'p19kbcfk9usxy9qm',
        scheme: 'https'
    });
    var devicePushSettings = {
        iOS: {
            badge: 'true',
            sound: 'true',
            alert: 'true'
        },
        android: {
            senderID: '959656764321'
        },
        wp8: {
            channelName: 'EverlivePushChannel'
        },
        notificationCallbackWP8: onWpPushReceived,
        notificationCallbackAndroid: onAndroidPushReceived,
        notificationCallbackIOS: onIosPushReceived
    };
    everlive.push.register(devicePushSettings, function() {
        //alert("Successful registration in Telerik Platform. You are ready to receive push notifications.");
    }, function(err) {
        alert("Error: " + err.message);
    });
}

// END_CUSTOM_CODE_home