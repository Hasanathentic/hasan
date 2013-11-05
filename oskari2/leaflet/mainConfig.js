require.config({
  baseUrl: "/Oskari/", // the base is set to requirejs lib to help requiring 3rd party libs
  paths: { // some path shortcuts to ease declarations
    oskari: "src/oskari/oskari-with-app",
    "oskari-with-app": "src/oskari/oskari-with-app",
    "oskari-with-loader": "src/oskari/oskari-with-loader",
    jquery: "http://code.jquery.com/jquery-1.9.1",
    "jquery-migrate": "libraries/jquery/jquery-migrate-1.2.1-modified",
    css: "libraries/requirejs/lib/css",
    json: "libraries/requirejs/lib/json",
    domReady: "libraries/requirejs/lib/domReady",
    text: "libraries/requirejs/lib/text",
    normalize: "libraries/requirejs/lib/normalize"
  },
  map: {
    // '*' means all modules will get 'jquery-private'
    // for their 'jquery' dependency.
    "*": {
      "oskari": "oskari-with-app",
      "jquery": "jquery-migrate",
      "leaflet": "src/oskari/map-leaflet/module",
      "mapfull": "src/leaflet/mapfull/module",
      "mapmodule-plugin": "src/leaflet/mapmodule-plugin/module",
      "divmanazer": "src/framework/divmanazer/module",
      "toolbar": "bundles/framework/bundle/toolbar/module",
      "statehandler": "bundles/framework/bundle/statehandler/module",
      "infobox": "src/leaflet/infobox/module",
      "search": "bundles/framework/bundle/search/module",
      "layerselector2": "bundles/framework/bundle/layerselector2/module",
      "layerselection2": "bundles/framework/bundle/layerselection2/module",
      "personaldata": "bundles/framework/bundle/personaldata/module",
      "maplegend": "bundles/framework/bundle/maplegend/module",
      "userguide": "bundles/framework/bundle/userguide/module",
      "backendstatus": "bundles/framework/bundle/backendstatus/module",
      "postprocessor": "bundles/framework/bundle/postprocessor/module",
      "statsgrid": "bundles/statistics/bundle/statsgrid/module",
      "promote": "bundles/framework/bundle/promote/module"
    },

    // 'jquery-private' wants the real jQuery module
    // though. If this line was not here, there would
    // be an unresolvable cyclic dependency.
    "jquery-migrate": {
      "jquery": "jquery"
    }
  },
  shim: {
    "oskari": {
      exports: "Oskari"
    }
  },
  config: {
    i18n: {
      locale: language
    }
  },
  waitSeconds: 30
});