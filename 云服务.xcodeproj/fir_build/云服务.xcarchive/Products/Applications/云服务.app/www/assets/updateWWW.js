var UpdateWeb = {

  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },

  // Bind any events that are required.
  // Usually you should subscribe on 'deviceready' event to know, when you can start calling cordova modules
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  // deviceready Event Handler
  onDeviceReady: function() {
    // change plugin options
    UpdateWeb.configurePlugin();
  },

  configurePlugin: function() {
    var options = {
      'config-file': 'http://10.0.2.81:8100/chcp.json'
    };

    chcp.configure(options, UpdateWeb.configureCallback);
  },

  configureCallback: function(error) {
    if (error) {
      console.log('Error during the configuration process');
      console.log(error.description);
    } else {
      console.log('Plugin configured successfully');
      UpdateWeb.checkForUpdate();
    }
  },

  checkForUpdate: function() {
    chcp.fetchUpdate(this.fetchUpdateCallback);
  },

  fetchUpdateCallback: function(error, data) {
    if (error) {
      console.log('Failed to load the update with error code: ' + error.code);
      console.log(error.description);
      return;
    }
    console.log('Update is loaded, running the installation');

    chcp.installUpdate(this.installationCallback);
  },

  installationCallback: function(error) {
    if (error) {
      console.log('Failed to install the update with error code: ' + error.code);
      console.log(error.description);
    } else {
      console.log('Update installed!');
    }
  }
};

UpdateWeb.initialize();
