cordova.define("cordova-plugin-hea-log.cordovaHeaLog", function(require, exports, module) {
var exec = require('cordova/exec');

exports.log = function(arg0,arg1,arg2,success, error) {
exec(success, error, "Logjava", "log", [arg0,arg1,arg2]);
};
});
