/*
  main program
  Builds an app object on the global context; all properties are functions
  Which means no actual code (other than assignments) is executed at initial loading

  All application specific code goes here
*/

'use strict';

/*
  Build upon the globalContext (passed as this below) to define all our variables in the "app" variable
  We'll have all the virtualized stuff there in the local stack (thus, name conflicts are still possible)
*/
(function(globalContext) {

  globalContext.app = {};
  app.name = 'Splash';

  app.onOpen = function(ui) {
    var html = HtmlService.createTemplateFromFile('Sidebar').evaluate()
      .setTitle(app.name)

    ui.showSidebar(html);
  };

  app.doGet = function() {
    return HtmlService.createTemplateFromFile('Main').evaluate()
      .setTitle(app.name)
  }

  app.createMenus = function() {
  };

})(this);
