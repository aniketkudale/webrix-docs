(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{R0D4:function(e,n,o){"use strict";o.d(n,"a",(function(){return g}));var i,r=o("YKqZ"),t=o("ps+7"),a=o("SLoj"),l=o("tVVT"),u=o("qUIE"),s=o("e2Mr"),c=o("uyO6"),d=o("mzcJ"),f=function(){function e(e,n,o){this.lengthComputable=e,this.loaded=n,this.total=o}return e.FromProgressEvent=function(n){return new e(n.lengthComputable,n.loaded,n.total)},e}();!function(e){e[e.Clean=0]="Clean",e[e.Stop=1]="Stop",e[e.Sync=2]="Sync",e[e.NoSync=3]="NoSync"}(i||(i={}));var g=function(){function e(){}return Object.defineProperty(e,"ForceFullSceneLoadingForIncremental",{get:function(){return d.a.ForceFullSceneLoadingForIncremental},set:function(e){d.a.ForceFullSceneLoadingForIncremental=e},enumerable:!0,configurable:!0}),Object.defineProperty(e,"ShowLoadingScreen",{get:function(){return d.a.ShowLoadingScreen},set:function(e){d.a.ShowLoadingScreen=e},enumerable:!0,configurable:!0}),Object.defineProperty(e,"loggingLevel",{get:function(){return d.a.loggingLevel},set:function(e){d.a.loggingLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(e,"CleanBoneMatrixWeights",{get:function(){return d.a.CleanBoneMatrixWeights},set:function(e){d.a.CleanBoneMatrixWeights=e},enumerable:!0,configurable:!0}),e._getDefaultPlugin=function(){return e._registeredPlugins[".babylon"]},e._getPluginForExtension=function(n){var o=e._registeredPlugins[n];return o||(c.a.Warn("Unable to find a plugin to load "+n+" files. Trying to use .babylon default plugin. To load from a specific filetype (eg. gltf) see: http://doc.babylonjs.com/how_to/load_from_any_file_type"),e._getDefaultPlugin())},e._getPluginForDirectLoad=function(n){for(var o in e._registeredPlugins){var i=e._registeredPlugins[o].plugin;if(i.canDirectLoad&&i.canDirectLoad(n))return e._registeredPlugins[o]}return e._getDefaultPlugin()},e._getPluginForFilename=function(n){var o=n.indexOf("?");-1!==o&&(n=n.substring(0,o));var i=n.lastIndexOf("."),r=n.substring(i,n.length).toLowerCase();return e._getPluginForExtension(r)},e._getDirectLoad=function(e){return"data:"===e.substr(0,5)?e.substr(5):null},e._loadData=function(n,o,i,r,t,l,s){var c,d=e._getDirectLoad(n.name),g=s?e._getPluginForExtension(s):d?e._getPluginForDirectLoad(n.name):e._getPluginForFilename(n.name);if(!(c=g.plugin.createPlugin?g.plugin.createPlugin():g.plugin))throw"The loader plugin corresponding to the file type you are trying to load has not been found. If using es6, please import the plugin you wish to use before.";if(e.OnPluginActivatedObservable.notifyObservers(c),d)return i(c,c.directLoad?c.directLoad(o,d):d),c;var v=g.isBinary,m=function(e,n){o.isDisposed?t("Scene has been disposed"):i(c,e,n)},p=null,b=!1,h=c.onDisposeObservable;h&&h.add((function(){b=!0,p&&(p.abort(),p=null),l()}));var L=r?function(e){r(f.FromProgressEvent(e))}:void 0,P=function(){if(!b){var e=function(e,n){m(e,n?n.responseURL:void 0)},i=function(e){t(e.message,e)};p=c.requestFile?c.requestFile(o,n.url,e,L,v,i):o._requestFile(n.url,e,L,!0,v,i)}},_=n.file||a.a.FilesToLoad[n.name.toLowerCase()];if(-1===n.rootUrl.indexOf("file:")||-1!==n.rootUrl.indexOf("file:")&&!_){var y=o.getEngine(),S=y.enableOfflineSupport;if(S){for(var F=!1,E=0,w=o.disableOfflineSupportExceptionRules;E<w.length;E++){if(w[E].test(n.url)){F=!0;break}}S=!F}S&&u.a.OfflineProviderFactory?o.offlineProvider=u.a.OfflineProviderFactory(n.url,P,y.disableManifestCheck):P()}else if(_){var A=function(e){t(e.message,e)};p=c.readFile?c.readFile(o,_,m,L,v,A):o._readFile(_,m,L,v,A)}else t("Unable to find file named "+n.name);return c},e._getFileInfo=function(e,n){var o,i,t=null;if(n)if(n.name){var a=n;o=e+a.name,i=a.name,t=a}else{var l=n;if("/"===l.substr(0,1))return r.b.Error("Wrong sceneFilename parameter"),null;o=e+l,i=l}else o=e,i=r.b.GetFilename(e),e=r.b.GetFolderPath(e);return{url:o,rootUrl:e,name:i,file:t}},e.GetPluginForExtension=function(n){return e._getPluginForExtension(n).plugin},e.IsPluginForExtensionAvailable=function(n){return!!e._registeredPlugins[n]},e.RegisterPlugin=function(n){if("string"==typeof n.extensions){var o=n.extensions;e._registeredPlugins[o.toLowerCase()]={plugin:n,isBinary:!1}}else{var i=n.extensions;Object.keys(i).forEach((function(o){e._registeredPlugins[o.toLowerCase()]={plugin:n,isBinary:i[o].isBinary}}))}},e.ImportMesh=function(n,o,i,r,t,a,l,u){if(void 0===i&&(i=""),void 0===r&&(r=s.a.LastCreatedScene),void 0===t&&(t=null),void 0===a&&(a=null),void 0===l&&(l=null),void 0===u&&(u=null),!r)return c.a.Error("No scene available to import mesh to"),null;var d=e._getFileInfo(o,i);if(!d)return null;var f={};r._addPendingData(f);var g=function(){r._removePendingData(f)},v=function(e,n){var o="Unable to import meshes from "+d.url+": "+e;l?l(r,o,n):c.a.Error(o),g()},m=a?function(e){try{a(e)}catch(e){v("Error in onProgress callback: "+e,e)}}:void 0,p=function(e,n,o,i){if(r.importedMeshesFiles.push(d.url),t)try{t(e,n,o,i)}catch(e){v("Error in onSuccess callback: "+e,e)}r._removePendingData(f)};return e._loadData(d,r,(function(e,o,i){if(e.rewriteRootURL&&(d.rootUrl=e.rewriteRootURL(d.rootUrl,i)),e.importMesh){var t=e,a=new Array,l=new Array,u=new Array;if(!t.importMesh(n,r,o,d.rootUrl,a,l,u,v))return;r.loadingPluginName=e.name,p(a,l,u,[])}else{e.importMeshAsync(n,r,o,d.rootUrl,m,d.name).then((function(n){r.loadingPluginName=e.name,p(n.meshes,n.particleSystems,n.skeletons,n.animationGroups)})).catch((function(e){v(e.message,e)}))}}),m,v,g,u)},e.ImportMeshAsync=function(n,o,i,r,t,a){return void 0===i&&(i=""),void 0===r&&(r=s.a.LastCreatedScene),void 0===t&&(t=null),void 0===a&&(a=null),new Promise((function(l,u){e.ImportMesh(n,o,i,r,(function(e,n,o,i){l({meshes:e,particleSystems:n,skeletons:o,animationGroups:i})}),t,(function(e,n,o){u(o||new Error(n))}),a)}))},e.Load=function(n,o,i,t,a,u,c){return void 0===o&&(o=""),void 0===i&&(i=s.a.LastCreatedEngine),void 0===t&&(t=null),void 0===a&&(a=null),void 0===u&&(u=null),void 0===c&&(c=null),i?e.Append(n,o,new l.a(i),t,a,u,c):(r.b.Error("No engine available"),null)},e.LoadAsync=function(n,o,i,r,t){return void 0===o&&(o=""),void 0===i&&(i=s.a.LastCreatedEngine),void 0===r&&(r=null),void 0===t&&(t=null),new Promise((function(a,l){e.Load(n,o,i,(function(e){a(e)}),r,(function(e,n,o){l(o||new Error(n))}),t)}))},e.Append=function(n,o,i,r,t,a,l){if(void 0===o&&(o=""),void 0===i&&(i=s.a.LastCreatedScene),void 0===r&&(r=null),void 0===t&&(t=null),void 0===a&&(a=null),void 0===l&&(l=null),!i)return c.a.Error("No scene available to append to"),null;var u=e._getFileInfo(n,o);if(!u)return null;e.ShowLoadingScreen&&i.getEngine().displayLoadingUI();var d={};i._addPendingData(d);var f=function(){i._removePendingData(d),i.getEngine().hideLoadingUI()},g=function(e,n){var o="Unable to load from "+u.url+(e?": "+e:"");a?a(i,o,n):c.a.Error(o),f()},v=t?function(e){try{t(e)}catch(e){g("Error in onProgress callback",e)}}:void 0,m=function(){if(r)try{r(i)}catch(e){g("Error in onSuccess callback",e)}i._removePendingData(d)};return e._loadData(u,i,(function(n,o){if(n.load){if(!n.load(i,o,u.rootUrl,g))return;i.loadingPluginName=n.name,m()}else{n.loadAsync(i,o,u.rootUrl,v,u.name).then((function(){i.loadingPluginName=n.name,m()})).catch((function(e){g(e.message,e)}))}e.ShowLoadingScreen&&i.executeWhenReady((function(){i.getEngine().hideLoadingUI()}))}),v,g,f,l)},e.AppendAsync=function(n,o,i,r,t){return void 0===o&&(o=""),void 0===i&&(i=s.a.LastCreatedScene),void 0===r&&(r=null),void 0===t&&(t=null),new Promise((function(a,l){e.Append(n,o,i,(function(e){a(e)}),r,(function(e,n,o){l(o||new Error(n))}),t)}))},e.LoadAssetContainer=function(n,o,i,r,t,a,l){if(void 0===o&&(o=""),void 0===i&&(i=s.a.LastCreatedScene),void 0===r&&(r=null),void 0===t&&(t=null),void 0===a&&(a=null),void 0===l&&(l=null),!i)return c.a.Error("No scene available to load asset container to"),null;var u=e._getFileInfo(n,o);if(!u)return null;var d={};i._addPendingData(d);var f=function(){i._removePendingData(d)},g=function(e,n){var o="Unable to load assets from "+u.url+(e?": "+e:"");n&&n.message&&(o+=" ("+n.message+")"),a?a(i,o,n):c.a.Error(o),f()},v=t?function(e){try{t(e)}catch(e){g("Error in onProgress callback",e)}}:void 0,m=function(e){if(r)try{r(e)}catch(e){g("Error in onSuccess callback",e)}i._removePendingData(d)};return e._loadData(u,i,(function(n,o){if(n.loadAssetContainer){var r=n.loadAssetContainer(i,o,u.rootUrl,g);if(!r)return;i.loadingPluginName=n.name,m(r)}else if(n.loadAssetContainerAsync){n.loadAssetContainerAsync(i,o,u.rootUrl,v,u.name).then((function(e){i.loadingPluginName=n.name,m(e)})).catch((function(e){g(e.message,e)}))}else g("LoadAssetContainer is not supported by this plugin. Plugin did not provide a loadAssetContainer or loadAssetContainerAsync method.");e.ShowLoadingScreen&&i.executeWhenReady((function(){i.getEngine().hideLoadingUI()}))}),v,g,f,l)},e.LoadAssetContainerAsync=function(n,o,i,r,t){return void 0===o&&(o=""),void 0===i&&(i=s.a.LastCreatedScene),void 0===r&&(r=null),void 0===t&&(t=null),new Promise((function(a,l){e.LoadAssetContainer(n,o,i,(function(e){a(e)}),r,(function(e,n,o){l(o||new Error(n))}),t)}))},e.ImportAnimations=function(e,n,o,r,t,a,l,u,d){if(void 0===n&&(n=""),void 0===o&&(o=s.a.LastCreatedScene),void 0===r&&(r=!0),void 0===t&&(t=i.Clean),void 0===a&&(a=null),void 0===l&&(l=null),void 0===u&&(u=null),void 0===d&&(d=null),o){if(r){for(var f=0,g=o.animatables;f<g.length;f++){g[f].reset()}o.stopAllAnimations(),o.animationGroups.slice().forEach((function(e){e.dispose()})),o.getNodes().forEach((function(e){e.animations&&(e.animations=[])}))}else switch(t){case i.Clean:o.animationGroups.slice().forEach((function(e){e.dispose()}));break;case i.Stop:o.animationGroups.forEach((function(e){e.stop()}));break;case i.Sync:o.animationGroups.forEach((function(e){e.reset(),e.restart()}));break;case i.NoSync:break;default:return void c.a.Error("Unknown animation group loading mode value '"+t+"'")}var v=o.animatables.length;this.LoadAssetContainer(e,n,o,(function(e){e.mergeAnimationsTo(o,o.animatables.slice(v),a),e.dispose(),o.onAnimationFileImportedObservable.notifyObservers(o),l&&l(o)}),u,d)}else c.a.Error("No scene available to load animations to")},e.ImportAnimationsAsync=function(n,o,r,t,a,l,u,c,d){return void 0===o&&(o=""),void 0===r&&(r=s.a.LastCreatedScene),void 0===t&&(t=!0),void 0===a&&(a=i.Clean),void 0===l&&(l=null),void 0===u&&(u=null),void 0===c&&(c=null),void 0===d&&(d=null),new Promise((function(i,u){e.ImportAnimations(n,o,r,t,a,l,(function(e){i(e)}),c,(function(e,n,o){u(o||new Error(n))}))}))},e.NO_LOGGING=0,e.MINIMAL_LOGGING=1,e.SUMMARY_LOGGING=2,e.DETAILED_LOGGING=3,e.OnPluginActivatedObservable=new t.a,e._registeredPlugins={},e}()},mzcJ:function(e,n,o){"use strict";o.d(n,"a",(function(){return i}));var i=function(){function e(){}return Object.defineProperty(e,"ForceFullSceneLoadingForIncremental",{get:function(){return e._ForceFullSceneLoadingForIncremental},set:function(n){e._ForceFullSceneLoadingForIncremental=n},enumerable:!0,configurable:!0}),Object.defineProperty(e,"ShowLoadingScreen",{get:function(){return e._ShowLoadingScreen},set:function(n){e._ShowLoadingScreen=n},enumerable:!0,configurable:!0}),Object.defineProperty(e,"loggingLevel",{get:function(){return e._loggingLevel},set:function(n){e._loggingLevel=n},enumerable:!0,configurable:!0}),Object.defineProperty(e,"CleanBoneMatrixWeights",{get:function(){return e._CleanBoneMatrixWeights},set:function(n){e._CleanBoneMatrixWeights=n},enumerable:!0,configurable:!0}),e._ForceFullSceneLoadingForIncremental=!1,e._ShowLoadingScreen=!0,e._CleanBoneMatrixWeights=!1,e._loggingLevel=0,e}()}}]);