(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-native"), require("react/lib/ReactComponentWithPureRenderMixin"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-native", "react/lib/ReactComponentWithPureRenderMixin"], factory);
	else if(typeof exports === 'object')
		exports["ReactNavigation"] = factory(require("react"), require("react-native"), require("react/lib/ReactComponentWithPureRenderMixin"));
	else
		root["ReactNavigation"] = factory(root["react"], root["react-native"], root["react/lib/ReactComponentWithPureRenderMixin"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdateReactNavigation"];
/******/ 	this["webpackHotUpdateReactNavigation"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest() { // eslint-disable-line no-unused-vars
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if(typeof XMLHttpRequest === "undefined")
/******/ 				return reject(new Error("No browser support"));
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = 10000;
/******/ 				request.send(null);
/******/ 			} catch(err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if(request.readyState !== 4) return;
/******/ 				if(request.status === 0) {
/******/ 					// timeout
/******/ 					reject(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 				} else if(request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if(request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch(e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "026354a631bd4aa2dc7a"; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotMainModule = true; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else hotCurrentParents = [moduleId];
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			hotMainModule = false;
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name)) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		Object.defineProperty(fn, "e", {
/******/ 			enumerable: true,
/******/ 			value: function(chunkId) {
/******/ 				if(hotStatus === "ready")
/******/ 					hotSetStatus("prepare");
/******/ 				hotChunksLoading++;
/******/ 				return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 					finishChunkLoading();
/******/ 					throw err;
/******/ 				});
/******/ 	
/******/ 				function finishChunkLoading() {
/******/ 					hotChunksLoading--;
/******/ 					if(hotStatus === "prepare") {
/******/ 						if(!hotWaitingFilesMap[chunkId]) {
/******/ 							hotEnsureUpdateChunk(chunkId);
/******/ 						}
/******/ 						if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 							hotUpdateDownloaded();
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		});
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotMainModule,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotMainModule = true;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest().then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 	
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate).then(function(result) {
/******/ 				deferred.resolve(result);
/******/ 			}, function(err) {
/******/ 				deferred.reject(err);
/******/ 			});
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					dependency = moduleOutdatedDependencies[i];
/******/ 					cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(i = 0; i < callbacks.length; i++) {
/******/ 					cb = callbacks[i];
/******/ 					try {
/******/ 						cb(moduleOutdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "accept-errored",
/******/ 								moduleId: moduleId,
/******/ 								dependencyId: moduleOutdatedDependencies[i],
/******/ 								error: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err;
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return Promise.resolve(outdatedModules);
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(3)(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/autobind-decorator/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 *
 * The decorator may be used on classes or methods
 * ```
 * @autobind
 * class FullBound {}
 *
 * class PartBound {
 *   @autobind
 *   method () {}
 * }
 * ```
 */


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = autobind;

function autobind() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    return boundClass.apply(undefined, args);
  } else {
    return boundMethod.apply(undefined, args);
  }
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys = undefined;
  // Use Reflect if exists
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype);
    // use symbols if support is provided
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

    // Only methods need binding
    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@autobind decorator can only be applied to methods not: ' + typeof fn);
  }

  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  var definingProperty = false;

  return {
    configurable: true,
    get: function get() {
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        value: boundFn,
        configurable: true,
        writable: true
      });
      definingProperty = false;
      return boundFn;
    }
  };
}
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/clamp/index.js":
/***/ (function(module, exports) {

module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}


/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),

/***/ "./node_modules/isarray/index.js":
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__("./node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/react-native-dismiss-keyboard/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = dismissKeyboard;

var _reactNative = __webpack_require__(1);

var TextInputState = _reactNative.TextInput.State;

function dismissKeyboard() {
  TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-drawer-layout/dist/DrawerLayout.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });exports.default = undefined;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _desc, _value, _class, _class2, _temp;var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _autobindDecorator = __webpack_require__("./node_modules/autobind-decorator/lib/index.js");var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
var _reactNativeDismissKeyboard = __webpack_require__("./node_modules/react-native-dismiss-keyboard/dist/index.js");var _reactNativeDismissKeyboard2 = _interopRequireDefault(_reactNativeDismissKeyboard);
var _reactNative = __webpack_require__(1);var _reactNative2 = _interopRequireDefault(_reactNative);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {var desc = {};Object['ke' + 'ys'](descriptor).forEach(function (key) {desc[key] = descriptor[key];});desc.enumerable = !!desc.enumerable;desc.configurable = !!desc.configurable;if ('value' in desc || desc.initializer) {desc.writable = true;}desc = decorators.slice().reverse().reduce(function (desc, decorator) {return decorator(target, property, desc) || desc;}, desc);if (context && desc.initializer !== void 0) {desc.value = desc.initializer ? desc.initializer.call(context) : void 0;desc.initializer = undefined;}if (desc.initializer === void 0) {Object['define' + 'Property'](target, property, desc);desc = null;}return desc;}var


Animated = _reactNative2.default.Animated,
Dimensions = _reactNative2.default.Dimensions,
InteractionManager = _reactNative2.default.InteractionManager,
PanResponder = _reactNative2.default.PanResponder,
StyleSheet = _reactNative2.default.StyleSheet,
TouchableWithoutFeedback = _reactNative2.default.TouchableWithoutFeedback,
View = _reactNative2.default.View;var



PropTypes = _react2.default.PropTypes;


var DEVICE_WIDTH = parseFloat(Dimensions.get('window').width);
var THRESHOLD = DEVICE_WIDTH / 2;
var VX_MAX = 0.1;

var IDLE = 'Idle';
var DRAGGING = 'Dragging';
var SETTLING = 'Settling';var

DrawerLayout = (_class = (_temp = _class2 = function (_React$Component) {_inherits(DrawerLayout, _React$Component);





























  function DrawerLayout(props, context) {_classCallCheck(this, DrawerLayout);var _this = _possibleConstructorReturn(this, (DrawerLayout.__proto__ || Object.getPrototypeOf(DrawerLayout)).call(this,
    props, context));

    _this.interactionHandle = null;

    _this.state = {
      openValue: new Animated.Value(0),
      drawerShown: false };return _this;

  }_createClass(DrawerLayout, [{ key: 'componentWillMount', value: function componentWillMount()

    {var _this2 = this;var
      openValue = this.state.openValue;

      openValue.addListener(function (_ref) {var value = _ref.value;
        var drawerShown = value > 0;
        if (drawerShown !== _this2.state.drawerShown) {
          _this2.setState({ drawerShown: drawerShown });
        }

        if (_this2.props.keyboardDismissMode === 'on-drag') {
          (0, _reactNativeDismissKeyboard2.default)();
        }

        if (value === 0 || value === 1) {
          if (_this2.interactionHandle) {
            InteractionManager.clearInteractionHandle(_this2.interactionHandle);
            _this2.interactionHandle = undefined;
          }
        } else if (!_this2.interactionHandle) {
          _this2.interactionHandle = InteractionManager.createInteractionHandle();
        }

        _this2._lastOpenValue = value;
        if (_this2.props.onDrawerSlide) {
          _this2.props.onDrawerSlide({ nativeEvent: { offset: value } });
        }
      });

      this._panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: this._shouldSetPanResponder,
        onPanResponderGrant: this._panResponderGrant,
        onPanResponderMove: this._panResponderMove,
        onPanResponderTerminationRequest: function onPanResponderTerminationRequest() {return false;},
        onPanResponderRelease: this._panResponderRelease,
        onPanResponderTerminate: function onPanResponderTerminate() {} });

    } }, { key: 'render', value: function render()

    {var _state =



      this.state,drawerShown = _state.drawerShown,openValue = _state.openValue;var _props =





      this.props,drawerBackgroundColor = _props.drawerBackgroundColor,drawerPosition = _props.drawerPosition,drawerWidth = _props.drawerWidth;

      var dynamicDrawerStyles = {
        backgroundColor: drawerBackgroundColor };

      dynamicDrawerStyles[drawerPosition] = 0;
      dynamicDrawerStyles.width = drawerWidth;


      var outputRange = void 0;

      if (drawerPosition === 'left') {
        outputRange = [-drawerWidth, 0];
      } else {
        outputRange = [drawerWidth, 0];
      }

      var drawerTranslateX = openValue.interpolate({
        inputRange: [0, 1],
        outputRange: outputRange,
        extrapolate: 'clamp' });

      var animatedDrawerStyles = {
        transform: [{ translateX: drawerTranslateX }] };



      var overlayOpacity = openValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.7],
        extrapolate: 'clamp' });

      var animatedOverlayStyles = { opacity: overlayOpacity };

      return (
        _react2.default.createElement(View, _extends({
            style: { flex: 1, backgroundColor: 'transparent' } },
          this._panResponder.panHandlers),

          _react2.default.createElement(Animated.View, { style: styles.main },
            this.props.children),


          drawerShown &&
          _react2.default.createElement(TouchableWithoutFeedback, { onPress: this._onOverlayClick },
            _react2.default.createElement(Animated.View, { style: [styles.overlay, animatedOverlayStyles] })),

          _react2.default.createElement(Animated.View, {
              style: [styles.drawer, dynamicDrawerStyles, animatedDrawerStyles] },

            this.props.renderNavigationView())));



    } }, { key: '_onOverlayClick', value: function _onOverlayClick(

    e) {
      e.stopPropagation();
      if (!this._isLockedClosed() && !this._isLockedOpen()) {
        this.closeDrawer();
      }
    } }, { key: '_emitStateChanged', value: function _emitStateChanged(

    newState) {
      if (this.props.onDrawerStateChanged) {
        this.props.onDrawerStateChanged(newState);
      }
    } }, { key: 'openDrawer', value: function openDrawer()

    {var _this3 = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._emitStateChanged(SETTLING);
      Animated.spring(this.state.openValue, _extends({
        toValue: 1,
        bounciness: 0,
        restSpeedThreshold: 0.1 },
      options)).

      start(function () {
        if (_this3.props.onDrawerOpen) {
          _this3.props.onDrawerOpen();
        }
        _this3._emitStateChanged(IDLE);
      });
    } }, { key: 'closeDrawer', value: function closeDrawer()

    {var _this4 = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._emitStateChanged(SETTLING);
      Animated.spring(this.state.openValue, _extends({
        toValue: 0,
        bounciness: 0,
        restSpeedThreshold: 1 },
      options)).

      start(function () {
        if (_this4.props.onDrawerClose) {
          _this4.props.onDrawerClose();
        }
        _this4._emitStateChanged(IDLE);
      });
    } }, { key: '_handleDrawerOpen', value: function _handleDrawerOpen()

    {
      if (this.props.onDrawerOpen) {
        this.props.onDrawerOpen();
      }
    } }, { key: '_handleDrawerClose', value: function _handleDrawerClose()

    {
      if (this.props.onDrawerClose) {
        this.props.onDrawerClose();
      }
    } }, { key: '_shouldSetPanResponder', value: function _shouldSetPanResponder(

    e, _ref2) {var moveX = _ref2.moveX,dx = _ref2.dx,dy = _ref2.dy;var
      drawerPosition = this.props.drawerPosition;

      if (this._isLockedClosed() || this._isLockedOpen()) {
        return false;
      }

      if (drawerPosition === 'left') {
        var overlayArea = DEVICE_WIDTH - (
        DEVICE_WIDTH - this.props.drawerWidth);

        if (this._lastOpenValue === 1) {
          if (
          dx < 0 && Math.abs(dx) > Math.abs(dy) * 3 || moveX > overlayArea)
          {
            this._isClosing = true;
            this._closingAnchorValue = this._getOpenValueForX(moveX);
            return true;
          }
        } else {
          if (moveX <= 35 && dx > 0) {
            this._isClosing = false;
            return true;
          }

          return false;
        }
      } else {
        var _overlayArea = DEVICE_WIDTH - this.props.drawerWidth;

        if (this._lastOpenValue === 1) {
          if (
          dx > 0 && Math.abs(dx) > Math.abs(dy) * 3 || moveX < _overlayArea)
          {
            this._isClosing = true;
            this._closingAnchorValue = this._getOpenValueForX(moveX);
            return true;
          }
        } else {
          if (moveX >= DEVICE_WIDTH - 35 && dx < 0) {
            this._isClosing = false;
            return true;
          }

          return false;
        }
      }
    } }, { key: '_panResponderGrant', value: function _panResponderGrant()

    {
      this._emitStateChanged(DRAGGING);
    } }, { key: '_panResponderMove', value: function _panResponderMove(

    e, _ref3) {var moveX = _ref3.moveX;
      var openValue = this._getOpenValueForX(moveX);

      if (this._isClosing) {
        openValue = 1 - (this._closingAnchorValue - openValue);
      }

      if (openValue > 1) {
        openValue = 1;
      } else if (openValue < 0) {
        openValue = 0;
      }

      this.state.openValue.setValue(openValue);
    } }, { key: '_panResponderRelease', value: function _panResponderRelease(

    e, _ref4) {var moveX = _ref4.moveX,vx = _ref4.vx;var
      drawerPosition = this.props.drawerPosition;
      var previouslyOpen = this._isClosing;
      var isWithinVelocityThreshold = vx < VX_MAX && vx > -VX_MAX;

      if (drawerPosition === 'left') {
        if (
        vx > 0 && moveX > THRESHOLD ||
        vx >= VX_MAX ||
        isWithinVelocityThreshold && previouslyOpen && moveX > THRESHOLD)
        {
          this.openDrawer({ velocity: vx });
        } else if (
        vx < 0 && moveX < THRESHOLD ||
        vx < -VX_MAX ||
        isWithinVelocityThreshold && !previouslyOpen)
        {
          this.closeDrawer({ velocity: vx });
        } else if (previouslyOpen) {
          this.openDrawer();
        } else {
          this.closeDrawer();
        }
      }

      if (drawerPosition === 'right') {
        if (
        vx < 0 && moveX < THRESHOLD ||
        vx <= -VX_MAX ||
        isWithinVelocityThreshold && previouslyOpen && moveX < THRESHOLD)
        {
          this.openDrawer({ velocity: -1 * vx });
        } else if (
        vx > 0 && moveX > THRESHOLD ||
        vx > VX_MAX ||
        isWithinVelocityThreshold && !previouslyOpen)
        {
          this.closeDrawer({ velocity: -1 * vx });
        } else if (previouslyOpen) {
          this.openDrawer();
        } else {
          this.closeDrawer();
        }
      }
    } }, { key: '_isLockedClosed', value: function _isLockedClosed()

    {
      return this.props.drawerLockMode === 'locked-closed' &&
      !this.state.drawerShown;
    } }, { key: '_isLockedOpen', value: function _isLockedOpen()

    {
      return this.props.drawerLockMode === 'locked-open' &&
      this.state.drawerShown;
    } }, { key: '_getOpenValueForX', value: function _getOpenValueForX(

    x) {var _props2 =
      this.props,drawerPosition = _props2.drawerPosition,drawerWidth = _props2.drawerWidth;

      if (drawerPosition === 'left') {
        return x / drawerWidth;
      } else if (drawerPosition === 'right') {
        return (DEVICE_WIDTH - x) / drawerWidth;
      }
    } }]);return DrawerLayout;}(_react2.default.Component), _class2.defaultProps = { drawerWidth: 0, drawerPosition: 'left' }, _class2.positions = { Left: 'left', Right: 'right' }, _class2.propTypes = { children: PropTypes.node, drawerBackgroundColor: PropTypes.string, drawerLockMode: PropTypes.oneOf(['unlocked', 'locked-closed', 'locked-open']), drawerPosition: PropTypes.oneOf(['left', 'right']).isRequired, drawerWidth: PropTypes.number.isRequired, keyboardDismissMode: PropTypes.oneOf(['none', 'on-drag']), onDrawerClose: PropTypes.func, onDrawerOpen: PropTypes.func, onDrawerSlide: PropTypes.func, onDrawerStateChanged: PropTypes.func, renderNavigationView: PropTypes.func.isRequired, statusBarBackgroundColor: PropTypes.string }, _temp), (_applyDecoratedDescriptor(_class.prototype, '_onOverlayClick', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, '_onOverlayClick'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'openDrawer', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'openDrawer'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'closeDrawer', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'closeDrawer'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_handleDrawerOpen', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, '_handleDrawerOpen'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_handleDrawerClose', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, '_handleDrawerClose'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_shouldSetPanResponder', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, '_shouldSetPanResponder'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_panResponderGrant', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, '_panResponderGrant'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_panResponderMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, '_panResponderMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_panResponderRelease', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, '_panResponderRelease'), _class.prototype)), _class);exports.default = DrawerLayout;


var styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 1001 },

  main: {
    flex: 1 },

  overlay: {
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1000 } });

/***/ }),

/***/ "./node_modules/react-native-tab-view/index.js":
/***/ (function(module, exports, __webpack_require__) {




module.exports={
get TabViewAnimated(){return __webpack_require__("./node_modules/react-native-tab-view/src/TabViewAnimated.js").default;},
get TabViewPagerPan(){return __webpack_require__("./node_modules/react-native-tab-view/src/TabViewPagerPan.js").default;},
get TabViewPagerScroll(){return __webpack_require__("./node_modules/react-native-tab-view/src/TabViewPagerScroll.js").default;},
get TabViewPagerAndroid(){return __webpack_require__("./node_modules/react-native-tab-view/src/TabViewPagerAndroid.js").default;},
get TabBar(){return __webpack_require__("./node_modules/react-native-tab-view/src/TabBar.js").default;}};

/***/ }),

/***/ "./node_modules/react-native-tab-view/src/TabBar.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);






var _TouchableItem=__webpack_require__("./node_modules/react-native-tab-view/src/TouchableItem.js");var _TouchableItem2=_interopRequireDefault(_TouchableItem);
var _TabViewPropTypes=__webpack_require__("./node_modules/react-native-tab-view/src/TabViewPropTypes.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


var styles=_reactNative.StyleSheet.create({
container:{
flex:1},

scroll:{
overflow:'scroll'},

tabBar:{
backgroundColor:'#2196f3',
elevation:4,
shadowColor:'black',
shadowOpacity:0.1,
shadowRadius:_reactNative.StyleSheet.hairlineWidth,
shadowOffset:{
height:_reactNative.StyleSheet.hairlineWidth},

zIndex:1},

tabContent:{
flexDirection:'row',
flexWrap:'nowrap'},

tabLabel:{
backgroundColor:'transparent',
color:'white',
margin:8},

tabItem:{
flexGrow:1,
padding:8,
alignItems:'center',
justifyContent:'center'},

badge:{
position:'absolute',
top:0,
right:0},

indicatorContainer:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0},

indicator:{
backgroundColor:'#ffeb3b',
position:'absolute',
left:0,
bottom:0,
right:0,
height:2}});var








































TabBar=function(_PureComponent){_inherits(TabBar,_PureComponent);function TabBar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TabBar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TabBar.__proto__||Object.getPrototypeOf(TabBar)).call.apply(_ref,[this].concat(args))),_this),_this.




















state={
offset:new _reactNative.Animated.Value(0),
visibility:new _reactNative.Animated.Value(0)},_this.















































_isManualScroll=false,_this.
_isMomentumScroll=false,_this.

_renderLabel=function(scene){
if(typeof _this.props.renderLabel!=='undefined'){
return _this.props.renderLabel(scene);
}
var label=_this.props.getLabelText(scene);
if(typeof label!=='string'){
return null;
}
return _react2.default.createElement(_reactNative.Text,{style:[styles.tabLabel,_this.props.labelStyle]},label);
},_this.

_renderIndicator=function(props){
if(typeof _this.props.renderIndicator!=='undefined'){
return _this.props.renderIndicator(props);
}var
width=props.width,position=props.position;
var translateX=_reactNative.Animated.multiply(position,width);
return(
_react2.default.createElement(_reactNative.Animated.View,{
style:[styles.indicator,{width:width,transform:[{translateX:translateX}]},_this.props.indicatorStyle]}));


},_this.



_getTabWidthFromStyle=function(style){
if(_this._tabWidthCache&&_this._tabWidthCache.style===style){
return _this._tabWidthCache.width;
}
var passedTabStyle=_reactNative.StyleSheet.flatten(_this.props.tabStyle);
var cache={style:style,width:passedTabStyle?passedTabStyle.width:null};
_this._tabWidthCache=cache;
return cache;
},_this.

_getFinalTabWidth=function(props){var
layout=props.layout,navigationState=props.navigationState;
var tabWidth=_this._getTabWidthFromStyle(props.tabStyle);
if(typeof tabWidth==='number'){
return tabWidth;
}
if(typeof tabWidth==='string'&&tabWidth.endsWith('%')){
return layout.width*(parseFloat(tabWidth,10)/100);
}
if(props.scrollEnabled){
return layout.width/5*2;
}
return layout.width/navigationState.routes.length;
},_this.

_getMaxScrollableDistance=function(props){var
layout=props.layout,navigationState=props.navigationState;
if(layout.width===0){
return 0;
}
var finalTabWidth=_this._getFinalTabWidth(props);
var tabBarWidth=finalTabWidth*navigationState.routes.length;
var maxDistance=tabBarWidth-layout.width;
return Math.max(maxDistance,0);
},_this.

_normalizeScrollValue=function(props,value){
var maxDistance=_this._getMaxScrollableDistance(props);
return Math.max(Math.min(value,maxDistance),0);
},_this.

_getScrollAmount=function(props,i){var
layout=props.layout;
var finalTabWidth=_this._getFinalTabWidth(props);
var centerDistance=finalTabWidth*i+finalTabWidth/2;
var scrollAmount=centerDistance-layout.width/2;
return _this._normalizeScrollValue(props,scrollAmount);
},_this.

_resetScrollOffset=function(props){
if(!props.scrollEnabled||!_this._scrollView){
return;
}

var scrollAmount=_this._getScrollAmount(props,props.navigationState.index);
_this._scrollView.scrollTo({
x:scrollAmount,
animated:true});

_reactNative.Animated.timing(_this.state.offset,{
toValue:0,
duration:150}).
start();
},_this.

_adjustScroll=function(index){
if(!_this.props.scrollEnabled||!_this._scrollView){
return;
}

var scrollAmount=_this._getScrollAmount(_this.props,index);
_this._scrollView.scrollTo({
x:scrollAmount,
animated:false});

},_this.

_adjustOffset=function(value){
if(!_this._isManualScroll||!_this.props.scrollEnabled){
return;
}

var scrollAmount=_this._getScrollAmount(_this.props,_this.props.navigationState.index);
var scrollOffset=value-scrollAmount;

if(_this._isMomentumScroll){
_reactNative.Animated.spring(_this.state.offset,{
toValue:-scrollOffset,
tension:300,
friction:35}).
start();
}else{
_this.state.offset.setValue(-scrollOffset);
}
},_this.

_handleScroll=function(e){
_this._adjustOffset(e.nativeEvent.contentOffset.x);
},_this.

_handleBeginDrag=function(){

_this._isManualScroll=true;
_this._isMomentumScroll=false;
},_this.

_handleEndDrag=function(){



global.requestAnimationFrame(function(){
if(_this._isMomentumScroll){
return;
}
_this._isManualScroll=false;
});
},_this.

_handleMomentumScrollBegin=function(){

_this._isMomentumScroll=true;
},_this.

_handleMomentumScrollEnd=function(){

_this._isMomentumScroll=false;
_this._isManualScroll=false;
},_this.

_setRef=function(el){return _this._scrollView=el;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TabBar,[{key:'componentWillMount',value:function componentWillMount(){if(this.props.scrollEnabled===true){var tabWidth=this._getTabWidthFromStyle(this.props.tabStyle);if(this.props.layout.width||tabWidth){this.state.visibility.setValue(1);}}else{this.state.visibility.setValue(1);}}},{key:'componentDidMount',value:function componentDidMount(){this._adjustScroll(this.props.navigationState.index);this._positionListener=this.props.subscribe('position',this._adjustScroll);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(this.props.navigationState!==nextProps.navigationState){this._resetScrollOffset(nextProps);}var nextTabWidth=this._getTabWidthFromStyle(nextProps.tabStyle);if(this.props.tabStyle!==nextProps.tabStyle&&nextTabWidth||this.props.layout.width!==nextProps.layout.width&&nextProps.layout.width){this.state.visibility.setValue(1);}}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){var _this2=this;if(this.props.scrollEnabled&&(prevProps.layout!==this.props.layout||prevProps.tabStyle!==this.props.tabStyle)){global.requestAnimationFrame(function(){return _this2._adjustScroll(_this2.props.navigationState.index);});}}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._positionListener.remove();}},{key:'render',value:function render()

{var _this3=this;var _props=
this.props,position=_props.position,navigationState=_props.navigationState,scrollEnabled=_props.scrollEnabled;var
routes=navigationState.routes,index=navigationState.index;
var initialOffset=this._getScrollAmount(this.props,this.props.navigationState.index);
var maxDistance=this._getMaxScrollableDistance(this.props);
var finalTabWidth=this._getFinalTabWidth(this.props);
var tabBarWidth=finalTabWidth*routes.length;


var inputRange=[-1].concat(_toConsumableArray(routes.map(function(x,i){return i;})));
var translateOutputRange=inputRange.map(function(i){return _this3._getScrollAmount(_this3.props,i)*-1;});

var translateX=_reactNative.Animated.add(
position.interpolate({
inputRange:inputRange,
outputRange:translateOutputRange}),

this.state.offset).
interpolate({
inputRange:[-maxDistance,0],
outputRange:[-maxDistance,0],
extrapolate:'clamp'});


return(
_react2.default.createElement(_reactNative.Animated.View,{style:[styles.tabBar,this.props.style]},
_react2.default.createElement(_reactNative.Animated.View,{pointerEvents:'none',style:[styles.indicatorContainer,scrollEnabled?{width:tabBarWidth,transform:[{translateX:translateX}]}:null]},
this._renderIndicator(_extends({},
this.props,{
width:new _reactNative.Animated.Value(finalTabWidth)}))),


_react2.default.createElement(_reactNative.View,{style:styles.scroll},
_react2.default.createElement(_reactNative.ScrollView,{
horizontal:true,
scrollEnabled:scrollEnabled,
bounces:false,
alwaysBounceHorizontal:false,
scrollsToTop:false,
showsHorizontalScrollIndicator:false,
automaticallyAdjustContentInsets:false,
contentContainerStyle:[styles.tabContent,scrollEnabled?null:styles.container],
scrollEventThrottle:16,
onScroll:this._handleScroll,
onScrollBeginDrag:this._handleBeginDrag,
onScrollEndDrag:this._handleEndDrag,
onMomentumScrollBegin:this._handleMomentumScrollBegin,
onMomentumScrollEnd:this._handleMomentumScrollEnd,
contentOffset:{x:initialOffset,y:0},
ref:this._setRef},

routes.map(function(route,i){
var focused=index===i;
var outputRange=inputRange.map(function(inputIndex){return inputIndex===i?1:0.7;});
var opacity=_reactNative.Animated.multiply(_this3.state.visibility,position.interpolate({
inputRange:inputRange,
outputRange:outputRange}));

var scene={
route:route,
focused:focused,
index:i};

var label=_this3._renderLabel(scene);
var icon=_this3.props.renderIcon?_this3.props.renderIcon(scene):null;
var badge=_this3.props.renderBadge?_this3.props.renderBadge(scene):null;

var tabStyle={};

tabStyle.opacity=opacity;

if(icon){
if(label){
tabStyle.paddingTop=8;
}else{
tabStyle.padding=12;
}
}

var passedTabStyle=_reactNative.StyleSheet.flatten(_this3.props.tabStyle);
var isWidthSet=passedTabStyle&&typeof passedTabStyle.width!=='undefined'||scrollEnabled===true;
var tabContainerStyle={};

if(isWidthSet){
tabStyle.width=finalTabWidth;
}

if(passedTabStyle&&typeof passedTabStyle.flex==='number'){
tabContainerStyle.flex=passedTabStyle.flex;
}else if(!isWidthSet){
tabContainerStyle.flex=1;
}

return(
_react2.default.createElement(_TouchableItem2.default,{
accessible:true,
borderless:true,
key:route.key,
testID:route.testID,
accessibilityLabel:route.title,
accessibilityTraits:'button',
pressColor:_this3.props.pressColor,
pressOpacity:_this3.props.pressOpacity,
delayPressIn:0,
onPress:function onPress(){var _props2=
_this3.props,onTabPress=_props2.onTabPress,jumpToIndex=_props2.jumpToIndex;
jumpToIndex(i);
if(onTabPress){
onTabPress(routes[i]);
}
},
style:tabContainerStyle},

_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Animated.View,{style:[styles.tabItem,tabStyle,passedTabStyle,styles.container]},
icon,
label),

badge?
_react2.default.createElement(_reactNative.Animated.View,{style:[styles.badge,{opacity:_this3.state.visibility}]},
badge):
null)));




})))));




}}]);return TabBar;}(_react.PureComponent);TabBar.propTypes=_extends({},_TabViewPropTypes.SceneRendererPropType,{scrollEnabled:_react.PropTypes.bool,pressColor:_TouchableItem2.default.propTypes.pressColor,pressOpacity:_TouchableItem2.default.propTypes.pressOpacity,getLabelText:_react.PropTypes.func,renderIcon:_react.PropTypes.func,renderLabel:_react.PropTypes.func,renderIndicator:_react.PropTypes.func,onTabPress:_react.PropTypes.func,tabStyle:_reactNative.View.propTypes.style,indicatorStyle:_reactNative.View.propTypes.style,labelStyle:_reactNative.Text.propTypes.style,style:_react.PropTypes.any});TabBar.defaultProps={getLabelText:function getLabelText(_ref2){var route=_ref2.route;return route.title?route.title.toUpperCase():null;}};exports.default=TabBar;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-native-tab-view/src/TabViewAnimated.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);




var _TabViewTransitioner=__webpack_require__("./node_modules/react-native-tab-view/src/TabViewTransitioner.js");var _TabViewTransitioner2=_interopRequireDefault(_TabViewTransitioner);
var _TabViewPropTypes=__webpack_require__("./node_modules/react-native-tab-view/src/TabViewPropTypes.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
overflow:'hidden'}});



















var TabViewPager=void 0;

switch(_reactNative.Platform.OS){
case'android':
TabViewPager=__webpack_require__("./node_modules/react-native-tab-view/src/TabViewPagerAndroid.js").default;
break;
case'ios':
TabViewPager=__webpack_require__("./node_modules/react-native-tab-view/src/TabViewPagerScroll.js").default;
break;
default:
TabViewPager=__webpack_require__("./node_modules/react-native-tab-view/src/TabViewPagerPan.js").default;
break;}var


TabViewAnimated=function(_PureComponent){_inherits(TabViewAnimated,_PureComponent);














function TabViewAnimated(props){_classCallCheck(this,TabViewAnimated);var _this=_possibleConstructorReturn(this,(TabViewAnimated.__proto__||Object.getPrototypeOf(TabViewAnimated)).call(this,
props));_initialiseProps.call(_this);

_this.state={
loaded:[_this.props.navigationState.index]};return _this;

}_createClass(TabViewAnimated,[{key:'render',value:function render()


























































{
return(
_react2.default.createElement(_TabViewTransitioner2.default,_extends({},
this.props,{
loaded:this.state.loaded,
onChangePosition:this._handleChangePosition,
render:this._renderItems})));


}}]);return TabViewAnimated;}(_react.PureComponent);TabViewAnimated.propTypes={navigationState:_TabViewPropTypes.NavigationStatePropType.isRequired,renderPager:_react.PropTypes.func.isRequired,renderScene:_react.PropTypes.func.isRequired,renderHeader:_react.PropTypes.func,renderFooter:_react.PropTypes.func,onChangePosition:_react.PropTypes.func,lazy:_react.PropTypes.bool};TabViewAnimated.defaultProps={renderPager:function renderPager(props){return _react2.default.createElement(TabViewPager,props);}};var _initialiseProps=function _initialiseProps(){var _this2=this;this._renderScene=function(props){var _props=_this2.props,renderScene=_props.renderScene,navigationState=_props.navigationState,lazy=_props.lazy;var loaded=_this2.state.loaded;if(lazy){if(loaded.includes(navigationState.routes.indexOf(props.route))){return renderScene(props);}return null;}return renderScene(props);};this._renderItems=function(props){var _props2=_this2.props,renderPager=_props2.renderPager,renderHeader=_props2.renderHeader,renderFooter=_props2.renderFooter;var navigationState=props.navigationState;return _react2.default.createElement(_reactNative.View,{style:styles.container},renderHeader&&renderHeader(props),renderPager(_extends({},props,{children:navigationState.routes.map(function(route,index){return _this2._renderScene(_extends({},props,{route:route,index:index,focused:index===props.navigationState.index}));})})),renderFooter&&renderFooter(props));};this._handleChangePosition=function(value){var _props3=_this2.props,onChangePosition=_props3.onChangePosition,navigationState=_props3.navigationState,lazy=_props3.lazy;if(onChangePosition){onChangePosition(value);}var loaded=_this2.state.loaded;if(lazy){var next=Math.ceil(value);if(next===navigationState.index){next=Math.floor(value);}if(loaded.includes(next)){return;}_this2.setState({loaded:[].concat(_toConsumableArray(loaded),[next])});}};};exports.default=TabViewAnimated;

/***/ }),

/***/ "./node_modules/react-native-tab-view/src/TabViewPagerAndroid.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);




var _TabViewPropTypes=__webpack_require__("./node_modules/react-native-tab-view/src/TabViewPropTypes.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}











var styles=_reactNative.StyleSheet.create({
container:{
flexGrow:1},


page:{
overflow:'hidden'}});var









TabViewPagerAndroid=function(_PureComponent){_inherits(TabViewPagerAndroid,_PureComponent);function TabViewPagerAndroid(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TabViewPagerAndroid);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TabViewPagerAndroid.__proto__||Object.getPrototypeOf(TabViewPagerAndroid)).call.apply(_ref,[this].concat(args))),_this),_this.


































_isDrag=false,_this.
_isIdle=true,_this.


_setPage=function(index){
if(_this._viewPager&&_this._currentIndex!==index){
_this._currentIndex=index;
if(_this.props.animationEnabled!==false){
_this._viewPager.setPage(index);
}else{
_this._viewPager.setPageWithoutAnimation(index);
}
}
},_this.

_handleJump=function(index){
if(_this._isIdle){
_this._setPage(index);
}
},_this.

_handlePageScroll=function(e){
if(_this._isDrag){
_this.props.position.setValue(
e.nativeEvent.position+e.nativeEvent.offset);

}
},_this.

_handlePageScrollStateChanged=function(e){
_this._isIdle=e==='idle';
if(e==='dragging'){
_this._isDrag=true;
}else if(e==='idle'){
_this._isDrag=false;
if(_this._currentIndex!==_this.props.navigationState.index){
_this.props.jumpToIndex(_this._currentIndex);
}
}
},_this.

_handlePageSelected=function(e){
_this._currentIndex=e.nativeEvent.position;
},_this.

_setRef=function(el){return _this._viewPager=el;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TabViewPagerAndroid,[{key:'componentWillMount',value:function componentWillMount(){this._currentIndex=this.props.navigationState.index;this._jumpListener=this.props.subscribe('jump',this._handleJump);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var _this2=this;if(this.props.layout!==nextProps.layout||_react.Children.count(this.props.children)!==_react.Children.count(nextProps.children)){global.requestAnimationFrame(function(){if(_this2._viewPager){_this2._viewPager.setPageWithoutAnimation(nextProps.navigationState.index);}});}}},{key:'componentDidUpdate',value:function componentDidUpdate(){if(this._isIdle){this._setPage(this.props.navigationState.index);}}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._jumpListener.remove();}},{key:'render',value:function render()

{var _props=
this.props,children=_props.children,navigationState=_props.navigationState,swipeEnabled=_props.swipeEnabled;
return(
_react2.default.createElement(_reactNative.ViewPagerAndroid,{
key:navigationState.routes.length,
keyboardDismissMode:'on-drag',
initialPage:navigationState.index,
scrollEnabled:swipeEnabled!==false,
onPageScroll:this._handlePageScroll,
onPageScrollStateChanged:this._handlePageScrollStateChanged,
onPageSelected:this._handlePageSelected,
style:styles.container,
ref:this._setRef},

_react.Children.map(children,function(child,i){return(
_react2.default.createElement(_reactNative.View,{
key:navigationState.routes[i].key,
testID:navigationState.routes[i].testID,
style:styles.page},

child));})));




}}]);return TabViewPagerAndroid;}(_react.PureComponent);TabViewPagerAndroid.propTypes=_extends({},_TabViewPropTypes.SceneRendererPropType,{swipeEnabled:_react.PropTypes.bool,animationEnabled:_react.PropTypes.bool,children:_react.PropTypes.node});exports.default=TabViewPagerAndroid;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-native-tab-view/src/TabViewPagerPan.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);






var _TabViewStyleInterpolator=__webpack_require__("./node_modules/react-native-tab-view/src/TabViewStyleInterpolator.js");var _TabViewStyleInterpolator2=_interopRequireDefault(_TabViewStyleInterpolator);
var _TabViewPropTypes=__webpack_require__("./node_modules/react-native-tab-view/src/TabViewPropTypes.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



var styles=_reactNative.StyleSheet.create({
sheet:{
flexGrow:1,
flexDirection:'row',
alignItems:'stretch'}});















var DEAD_ZONE=12;var

TabViewPagerPan=function(_PureComponent){_inherits(TabViewPagerPan,_PureComponent);function TabViewPagerPan(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TabViewPagerPan);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TabViewPagerPan.__proto__||Object.getPrototypeOf(TabViewPagerPan)).call.apply(_ref,[this].concat(args))),_this),_this.


























_lastValue=null,_this.
_isMoving=null,_this.
_startDirection=0,_this.

_isIndexInRange=function(index){var
routes=_this.props.navigationState.routes;
return index>=0&&index<=routes.length-1;
},_this.

_isMovingHorzontally=function(evt,gestureState){
return(
Math.abs(gestureState.dx)>Math.abs(gestureState.dy*3)&&
Math.abs(gestureState.vx)>Math.abs(gestureState.vy*3));

},_this.

_isReverseDirection=function(gestureState){
if(_this._startDirection>0){
return gestureState.vx<0;
}else{
return gestureState.vx>0;
}
},_this.

_getNextIndex=function(evt,gestureState){var
index=_this.props.navigationState.index;

var swipeVelocityThreshold=_this.props.swipeVelocityThreshold;

if(_reactNative.Platform.OS==='android'){


swipeVelocityThreshold/=1000000;
}

if(
Math.abs(gestureState.dx)>_this.props.swipeDistanceThreshold||
Math.abs(gestureState.vx)>swipeVelocityThreshold)
{
var nextIndex=index-gestureState.dx/Math.abs(gestureState.dx);
if(_this._isIndexInRange(nextIndex)){
return nextIndex;
}
}
return index;
},_this.

_canMoveScreen=function(evt,gestureState){
if(_this.props.swipeEnabled===false){
return false;
}var _this$props$navigatio=
_this.props.navigationState,routes=_this$props$navigatio.routes,index=_this$props$navigatio.index;
var canMove=_this._isMovingHorzontally(evt,gestureState)&&(
gestureState.dx>=DEAD_ZONE&&index>=0||
gestureState.dx<=-DEAD_ZONE&&index<=routes.length-1);

if(canMove){
_this._startDirection=gestureState.dx;
}
return canMove;
},_this.

_startGesture=function(){
_this._lastValue=_this.props.getLastPosition();
_this.props.position.stopAnimation();
},_this.

_respondToGesture=function(evt,gestureState){var
width=_this.props.layout.width;
var currentPosition=typeof _this._lastValue==='number'?_this._lastValue:_this.props.navigationState.index;
var nextPosition=currentPosition-gestureState.dx/width;
if(_this._isMoving===null){
_this._isMoving=_this._isMovingHorzontally(evt,gestureState);
}
if(_this._isMoving&&_this._isIndexInRange(nextPosition)){
_this.props.position.setValue(nextPosition);
}
},_this.

_finishGesture=function(evt,gestureState){
var currentIndex=_this.props.navigationState.index;
var currentValue=_this.props.getLastPosition();
if(currentValue!==currentIndex){
if(_this._isMoving&&!_this._isReverseDirection(gestureState)){
var nextIndex=_this._getNextIndex(evt,gestureState);
_this.props.jumpToIndex(nextIndex);
}else{
_this.props.jumpToIndex(currentIndex);
}
}
_this._lastValue=null;
_this._isMoving=null;
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TabViewPagerPan,[{key:'componentWillMount',value:function componentWillMount(){this._panResponder=_reactNative.PanResponder.create({onMoveShouldSetPanResponder:this._canMoveScreen,onMoveShouldSetPanResponderCapture:this._canMoveScreen,onPanResponderGrant:this._startGesture,onPanResponderMove:this._respondToGesture,onPanResponderTerminate:this._finishGesture,onPanResponderRelease:this._finishGesture,onPanResponderTerminationRequest:function onPanResponderTerminationRequest(){return true;}});}},{key:'render',value:function render()

{var _props=
this.props,navigationState=_props.navigationState,layout=_props.layout;var
routes=navigationState.routes;

var style=_TabViewStyleInterpolator2.default.forHorizontal(this.props);

return(
_react2.default.createElement(_reactNative.Animated.View,_extends({style:[styles.sheet,style,{width:layout.width*routes.length}]},this._panResponder.panHandlers),
_react.Children.map(this.props.children,function(child,i){return(
_react2.default.createElement(_reactNative.View,{
key:navigationState.routes[i].key,
testID:navigationState.routes[i].testID,
style:{width:layout.width}},

child));})));




}}]);return TabViewPagerPan;}(_react.PureComponent);TabViewPagerPan.propTypes=_extends({},_TabViewPropTypes.SceneRendererPropType,{swipeEnabled:_react.PropTypes.bool,swipeDistanceThreshold:_react.PropTypes.number.isRequired,swipeVelocityThreshold:_react.PropTypes.number.isRequired,children:_react.PropTypes.node});TabViewPagerPan.defaultProps={swipeDistanceThreshold:120,swipeVelocityThreshold:0.25};exports.default=TabViewPagerPan;

/***/ }),

/***/ "./node_modules/react-native-tab-view/src/TabViewPagerScroll.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);




var _TabViewPropTypes=__webpack_require__("./node_modules/react-native-tab-view/src/TabViewPropTypes.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}











var styles=_reactNative.StyleSheet.create({
container:{
flexGrow:1},


page:{
flex:1,
overflow:'hidden'}});var








TabViewPagerScroll=function(_PureComponent){_inherits(TabViewPagerScroll,_PureComponent);function TabViewPagerScroll(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TabViewPagerScroll);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TabViewPagerScroll.__proto__||Object.getPrototypeOf(TabViewPagerScroll)).call.apply(_ref,[this].concat(args))),_this),_this.

























_isManualScroll=false,_this.
_isMomentumScroll=false,_this.

_scrollTo=function(x){
if(_this._scrollView){
_this._scrollView.scrollTo({
x:x,
animated:false});

}
},_this.

_updatePosition=function(value){
if(_this._isManualScroll||!_this._scrollView){
return;
}
_this._scrollTo(value*_this.props.layout.width);
},_this.

_handleBeginDrag=function(){

_this._isManualScroll=true;
_this._isMomentumScroll=false;
},_this.

_handleEndDrag=function(){



global.requestAnimationFrame(function(){
if(_this._isMomentumScroll){
return;
}
_this._isManualScroll=false;
});
},_this.

_handleMomentumScrollBegin=function(){

_this._isMomentumScroll=true;
},_this.

_handleMomentumScrollEnd=function(e){

_this._isMomentumScroll=false;
_this._isManualScroll=false;

var nextIndex=Math.round(e.nativeEvent.contentOffset.x/_this.props.layout.width);
_this.props.jumpToIndex(nextIndex);
},_this.

_handleScroll=function(e){
if(!_this._isManualScroll){
return;
}
_this.props.position.setValue(
e.nativeEvent.contentOffset.x/_this.props.layout.width);

},_this.

_setRef=function(el){return _this._scrollView=el;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TabViewPagerScroll,[{key:'componentDidMount',value:function componentDidMount(){this._scrollTo(this.props.navigationState.index*this.props.layout.width);this._positionListener=this.props.subscribe('position',this._updatePosition);}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){var _this2=this;if(prevProps.layout!==this.props.layout||_react.Children.count(prevProps.children)!==_react.Children.count(this.props.children)){global.requestAnimationFrame(function(){return _this2._scrollTo(_this2.props.navigationState.index*_this2.props.layout.width);});}}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._positionListener.remove();}},{key:'render',value:function render()

{var _props=
this.props,children=_props.children,layout=_props.layout,navigationState=_props.navigationState;
return(
_react2.default.createElement(_reactNative.ScrollView,{
horizontal:true,
pagingEnabled:true,
directionalLockEnabled:true,
keyboardDismissMode:'on-drag',
keyboardShouldPersistTaps:'always',
scrollEnabled:this.props.swipeEnabled,
automaticallyAdjustContentInsets:false,
bounces:false,
alwaysBounceHorizontal:false,
scrollsToTop:false,
showsHorizontalScrollIndicator:false,
scrollEventThrottle:16,
onScroll:this._handleScroll,
onScrollBeginDrag:this._handleBeginDrag,
onScrollEndDrag:this._handleEndDrag,
onMomentumScrollBegin:this._handleMomentumScrollBegin,
onMomentumScrollEnd:this._handleMomentumScrollEnd,
contentOffset:{x:this.props.navigationState.index*this.props.layout.width,y:0},
style:styles.container,
contentContainerStyle:layout.width?null:styles.container,
ref:this._setRef},

layout.width?_react.Children.map(children,function(child,i){return(
_react2.default.createElement(_reactNative.View,{
key:navigationState.routes[i].key,
testID:navigationState.routes[i].testID,
style:{width:layout.width,overflow:'hidden'}},

child));}):


_react2.default.createElement(_reactNative.View,{
key:navigationState.routes[navigationState.index].key,
testID:navigationState.routes[navigationState.index].testID,
style:styles.page},

_react.Children.toArray(children)[navigationState.index])));




}}]);return TabViewPagerScroll;}(_react.PureComponent);TabViewPagerScroll.propTypes=_extends({},_TabViewPropTypes.SceneRendererPropType,{swipeEnabled:_react.PropTypes.bool,children:_react.PropTypes.node});exports.default=TabViewPagerScroll;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-native-tab-view/src/TabViewPropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.SceneRendererPropType=exports.NavigationStatePropType=exports.NavigationRoutePropType=undefined;

var _react=__webpack_require__(0);
var _reactNative=__webpack_require__(1);

var NavigationRoutePropType=exports.NavigationRoutePropType=_react.PropTypes.shape({
title:_react.PropTypes.string,
key:_react.PropTypes.string.isRequired});


var NavigationStatePropType=exports.NavigationStatePropType=_react.PropTypes.shape({
routes:_react.PropTypes.arrayOf(NavigationRoutePropType).isRequired,
index:_react.PropTypes.number.isRequired});


var SceneRendererPropType=exports.SceneRendererPropType={
layout:_react.PropTypes.shape({
measured:_react.PropTypes.bool.isRequired,
height:_react.PropTypes.number.isRequired,
width:_react.PropTypes.number.isRequired}).
isRequired,
navigationState:NavigationStatePropType.isRequired,
position:_react.PropTypes.instanceOf(_reactNative.Animated.Value).isRequired,
jumpToIndex:_react.PropTypes.func.isRequired,
getLastPosition:_react.PropTypes.func.isRequired,
subscribe:_react.PropTypes.func.isRequired};

/***/ }),

/***/ "./node_modules/react-native-tab-view/src/TabViewStyleInterpolator.js":
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}



function forHorizontal(props){var
layout=props.layout,position=props.position,navigationState=props.navigationState;var
width=layout.width;var
routes=navigationState.routes;

var inputRange=[-1].concat(_toConsumableArray(routes.map(function(x,i){return i;})));
var outputRange=inputRange.map(function(i){
return width*i*-1;
});

var translateX=position.interpolate({
inputRange:inputRange,
outputRange:outputRange});


return{
transform:[{translateX:translateX}]};

}exports.default=

{
forHorizontal:forHorizontal};

/***/ }),

/***/ "./node_modules/react-native-tab-view/src/TabViewTransitioner.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);



var _TabViewPropTypes=__webpack_require__("./node_modules/react-native-tab-view/src/TabViewPropTypes.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



















var DefaultTransitionSpec={
timing:_reactNative.Animated.spring,
tension:300,
friction:35};var


TabViewTransitioner=function(_PureComponent){_inherits(TabViewTransitioner,_PureComponent);





















function TabViewTransitioner(props){_classCallCheck(this,TabViewTransitioner);var _this=_possibleConstructorReturn(this,(TabViewTransitioner.__proto__||Object.getPrototypeOf(TabViewTransitioner)).call(this,
props));_this.




























_mounted=false;_this.



_subscriptions={};_this.

_trackPosition=function(e){
_this._triggerEvent('position',e.value);
_this._lastPosition=e.value;var
onChangePosition=_this.props.onChangePosition;
if(onChangePosition){
onChangePosition(e.value);
}
};_this.

_getLastPosition=function(){
if(typeof _this._lastPosition==='number'){
return _this._lastPosition;
}else{
return _this.props.navigationState.index;
}
};_this.

_handleLayout=function(e){var _e$nativeEvent$layout=
e.nativeEvent.layout,height=_e$nativeEvent$layout.height,width=_e$nativeEvent$layout.width;

if(_this.state.layout.width===width&&_this.state.layout.height===height){
return;
}

_this.setState({
layout:{
measured:true,
height:height,
width:width}});


};_this.

_buildSceneRendererProps=function(){
return{
layout:_this.state.layout,
navigationState:_this.props.navigationState,
position:_this.state.position,
jumpToIndex:_this._jumpToIndex,
getLastPosition:_this._getLastPosition,
subscribe:_this._addSubscription};

};_this.

_transitionTo=function(toValue,callback){
var lastPosition=_this._getLastPosition();
var currentTransitionProps={
progress:lastPosition};

var nextTransitionProps={
progress:toValue};

var transitionSpec=void 0;
if(_this.props.configureTransition){
transitionSpec=_this.props.configureTransition(currentTransitionProps,nextTransitionProps);
}
if(transitionSpec){var _transitionSpec=
transitionSpec,timing=_transitionSpec.timing,transitionConfig=_objectWithoutProperties(_transitionSpec,['timing']);
timing(_this.state.position,_extends({},
transitionConfig,{
toValue:toValue})).
start(callback);
}else{
_this.state.position.setValue(toValue);
if(callback){
callback();
}
}
};_this.

_jumpToIndex=function(index){
if(!_this._mounted){

return;
}var _this$props=

_this.props,canJumpToTab=_this$props.canJumpToTab,navigationState=_this$props.navigationState;

if(canJumpToTab&&!canJumpToTab(navigationState.routes[index])){
var lastPosition=_this._getLastPosition();
if(lastPosition!==navigationState.index){
_this._transitionTo(navigationState.index);
}
return;
}

_this._triggerEvent('jump',index);
_this._nextIndex=index;
_this._transitionTo(index,function(){return(
global.requestAnimationFrame(function(){
if(_this.props.navigationState.index===index){
return;
}

if(_this._nextIndex===index&&_this._mounted){
_this.props.onRequestChangeTab(index);
}
}));});

};_this.

_addSubscription=function(event,callback){
if(!_this._subscriptions[event]){
_this._subscriptions[event]=[];
}
_this._subscriptions[event].push(callback);
return{
remove:function remove(){
var index=_this._subscriptions[event].indexOf(callback);
if(index>-1){
_this._subscriptions[event].splice(index,1);
}
}};

};_this.

_triggerEvent=function(event,value){
if(_this._subscriptions[event]){
_this._subscriptions[event].forEach(function(fn){return fn(value);});
}
};_this.state={layout:_extends({},_this.props.initialLayout,{measured:false}),position:new _reactNative.Animated.Value(_this.props.navigationState.index)};return _this;}_createClass(TabViewTransitioner,[{key:'componentDidMount',value:function componentDidMount(){this._mounted=true;this._positionListener=this.state.position.addListener(this._trackPosition);}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){if(prevProps.navigationState.index!==this.props.navigationState.index){this._transitionTo(this.props.navigationState.index);}}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._mounted=false;this.state.position.removeListener(this._positionListener);}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,_extends({},this.props,{onLayout:this._handleLayout}),
this.props.render(this._buildSceneRendererProps())));


}}]);return TabViewTransitioner;}(_react.PureComponent);TabViewTransitioner.propTypes={navigationState:_TabViewPropTypes.NavigationStatePropType.isRequired,render:_react.PropTypes.func.isRequired,configureTransition:_react.PropTypes.func.isRequired,onRequestChangeTab:_react.PropTypes.func.isRequired,onChangePosition:_react.PropTypes.func,initialLayout:_react.PropTypes.shape({height:_react.PropTypes.number.isRequired,width:_react.PropTypes.number.isRequired}),canJumpToTab:_react.PropTypes.func};TabViewTransitioner.defaultProps={configureTransition:function configureTransition(){return DefaultTransitionSpec;},initialLayout:{height:0,width:0}};exports.default=TabViewTransitioner;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-native-tab-view/src/TouchableItem.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}






var LOLLIPOP=21;var














TouchableItem=function(_PureComponent){_inherits(TouchableItem,_PureComponent);function TouchableItem(){_classCallCheck(this,TouchableItem);return _possibleConstructorReturn(this,(TouchableItem.__proto__||Object.getPrototypeOf(TouchableItem)).apply(this,arguments));}_createClass(TouchableItem,[{key:'render',value:function render()













{var _props=
this.props,style=_props.style,pressOpacity=_props.pressOpacity,pressColor=_props.pressColor,borderless=_props.borderless,rest=_objectWithoutProperties(_props,['style','pressOpacity','pressColor','borderless']);

if(_reactNative.Platform.OS==='android'&&_reactNative.Platform.Version>=LOLLIPOP){
return(
_react2.default.createElement(_reactNative.TouchableNativeFeedback,_extends({},
rest,{
background:_reactNative.TouchableNativeFeedback.Ripple(pressColor,borderless)}),

_react2.default.createElement(_reactNative.View,{style:style},
_react.Children.only(this.props.children))));



}else{
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({},
rest,{
style:style,
activeOpacity:pressOpacity}),

this.props.children));


}
}}]);return TouchableItem;}(_react.PureComponent);TouchableItem.propTypes={delayPressIn:_react.PropTypes.number,borderless:_react.PropTypes.bool,pressColor:_react.PropTypes.string,pressOpacity:_react.PropTypes.number,children:_react.PropTypes.node.isRequired,style:_reactNative.View.propTypes.style};TouchableItem.defaultProps={pressColor:'rgba(255, 255, 255, .4)'};exports.default=TouchableItem;

/***/ }),

/***/ "./node_modules/react-navigation/lib/NavigationActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var namespacedAction=function namespacedAction(action){return'Navigation/'+action;};

var BACK=namespacedAction('BACK');
var INIT=namespacedAction('INIT');
var NAVIGATE=namespacedAction('NAVIGATE');
var RESET=namespacedAction('RESET');
var SET_PARAMS=namespacedAction('SET_PARAMS');
var URI=namespacedAction('URI');

var createAction=function createAction(type){return function(){var payload=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return _extends({
type:type},
payload);};};


var back=createAction(BACK);
var init=createAction(INIT);
var navigate=createAction(NAVIGATE);
var reset=createAction(RESET);
var setParams=createAction(SET_PARAMS);
var uri=createAction(URI);

var deprecatedActionMap={
Back:BACK,
Init:INIT,
Navigate:NAVIGATE,
Reset:RESET,
SetParams:SET_PARAMS,
Uri:URI};


var mapDeprecatedActionAndWarn=function mapDeprecatedActionAndWarn(action){
var mappedType=deprecatedActionMap[action.type];
if(!mappedType){return action;}

console.warn(['The action type \''+
action.type+'\' has been renamed to \''+mappedType+'\'.','\''+
action.type+'\' will continue to work while in beta but will be removed',
'in the first major release. Moving forward, you should use the',
'action constants and action creators exported by this library in',
"the 'actions' object.",
'See https://github.com/react-community/react-navigation/pull/120 for',
'more details.'].
join(' '));

return _extends({},
action,{
type:deprecatedActionMap[action.type]});

};exports.default=

{

BACK:BACK,
INIT:INIT,
NAVIGATE:NAVIGATE,
RESET:RESET,
SET_PARAMS:SET_PARAMS,
URI:URI,


back:back,
init:init,
navigate:navigate,
reset:reset,
setParams:setParams,
uri:uri,


mapDeprecatedActionAndWarn:mapDeprecatedActionAndWarn};

/***/ }),

/***/ "./node_modules/react-navigation/lib/PlatformHelpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});

var Linking=exports.Linking={
addEventListener:function addEventListener(){},
removeEventListener:function removeEventListener(){},
getInitialURL:function getInitialURL(){return Promise.reject('Unsupported platform');}};


var BackAndroid=exports.BackAndroid={
addEventListener:function addEventListener(){}};

/***/ }),

/***/ "./node_modules/react-navigation/lib/PropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});

var _react=__webpack_require__(0);
var _reactNative=__webpack_require__(1);















var action=_react.PropTypes.shape({
type:_react.PropTypes.string.isRequired});



var animatedValue=_react.PropTypes.instanceOf(_reactNative.Animated.Value);


var navigationRoute=_react.PropTypes.shape({
key:_react.PropTypes.string.isRequired});



var navigationState=_react.PropTypes.shape({
index:_react.PropTypes.number.isRequired,
routes:_react.PropTypes.arrayOf(navigationRoute)});



var layout=_react.PropTypes.shape({
height:animatedValue,
initHeight:_react.PropTypes.number.isRequired,
initWidth:_react.PropTypes.number.isRequired,
isMeasured:_react.PropTypes.bool.isRequired,
width:animatedValue});



var scene=_react.PropTypes.shape({
index:_react.PropTypes.number.isRequired,
isActive:_react.PropTypes.bool.isRequired,
isStale:_react.PropTypes.bool.isRequired,
key:_react.PropTypes.string.isRequired,
route:navigationRoute.isRequired});



var SceneRendererProps={
layout:layout.isRequired,
navigationState:navigationState.isRequired,
navigation:_react.PropTypes.object,
position:animatedValue.isRequired,
progress:animatedValue.isRequired,
scene:scene.isRequired,
scenes:_react.PropTypes.arrayOf(scene).isRequired};


var SceneRenderer=_react.PropTypes.shape(SceneRendererProps);


var panHandlers=_react.PropTypes.shape({
onMoveShouldSetResponder:_react.PropTypes.func.isRequired,
onMoveShouldSetResponderCapture:_react.PropTypes.func.isRequired,
onResponderEnd:_react.PropTypes.func.isRequired,
onResponderGrant:_react.PropTypes.func.isRequired,
onResponderMove:_react.PropTypes.func.isRequired,
onResponderReject:_react.PropTypes.func.isRequired,
onResponderRelease:_react.PropTypes.func.isRequired,
onResponderStart:_react.PropTypes.func.isRequired,
onResponderTerminate:_react.PropTypes.func.isRequired,
onResponderTerminationRequest:_react.PropTypes.func.isRequired,
onStartShouldSetResponder:_react.PropTypes.func.isRequired,
onStartShouldSetResponderCapture:_react.PropTypes.func.isRequired});





function extractSceneRendererProps(
props)
{
return{
index:props.index,
layout:props.layout,
navigationState:props.navigationState,
position:props.position,
progress:props.progress,
scene:props.scene,
navigation:props.navigation,
scenes:props.scenes};

}exports.default=

{

extractSceneRendererProps:extractSceneRendererProps,


SceneRendererProps:SceneRendererProps,


SceneRenderer:SceneRenderer,
action:action,
navigationState:navigationState,
navigationRoute:navigationRoute,
panHandlers:panHandlers};

/***/ }),

/***/ "./node_modules/react-navigation/lib/StateUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}














var StateUtils={




get:function get(state,key){
return state.routes.find(function(route){return route.key===key;})||null;
},





indexOf:function indexOf(state,key){
return state.routes.map(function(route){return route.key;}).indexOf(key);
},





has:function has(state,key){
return!!state.routes.some(function(route){return route.key===key;});
},






push:function push(state,route){
(0,_invariant2.default)(
StateUtils.indexOf(state,route.key)===-1,
'should not push route with duplicated key %s',
route.key);


var routes=state.routes.slice();
routes.push(route);

return _extends({},
state,{
index:routes.length-1,
routes:routes});

},






pop:function pop(state){
if(state.index<=0){

return state;
}
var routes=state.routes.slice(0,-1);
return _extends({},
state,{
index:routes.length-1,
routes:routes});

},




jumpToIndex:function jumpToIndex(state,index){
if(index===state.index){
return state;
}

(0,_invariant2.default)(!!state.routes[index],'invalid index %s to jump to',index);

return _extends({},
state,{
index:index});

},




jumpTo:function jumpTo(state,key){
var index=StateUtils.indexOf(state,key);
return StateUtils.jumpToIndex(state,index);
},




back:function back(state){
var index=state.index-1;
var route=state.routes[index];
return route?StateUtils.jumpToIndex(state,index):state;
},




forward:function forward(state){
var index=state.index+1;
var route=state.routes[index];
return route?StateUtils.jumpToIndex(state,index):state;
},






replaceAt:function replaceAt(
state,
key,
route)
{
var index=StateUtils.indexOf(state,key);
return StateUtils.replaceAtIndex(state,index,route);
},






replaceAtIndex:function replaceAtIndex(
state,
index,
route)
{
(0,_invariant2.default)(
!!state.routes[index],
'invalid index %s for replacing route %s',
index,
route.key);


if(state.routes[index]===route){
return state;
}

var routes=state.routes.slice();
routes[index]=route;

return _extends({},
state,{
index:index,
routes:routes});

},






reset:function reset(
state,
routes,
index)
{
(0,_invariant2.default)(
routes.length&&Array.isArray(routes),
'invalid routes to replace');


var nextIndex=index===undefined?routes.length-1:index;

if(state.routes.length===routes.length&&state.index===nextIndex){
var compare=function compare(route,ii){return routes[ii]===route;};
if(state.routes.every(compare)){
return state;
}
}

(0,_invariant2.default)(!!routes[nextIndex],'invalid index %s to reset',nextIndex);

return _extends({},
state,{
index:nextIndex,
routes:routes});

}};exports.default=


StateUtils;

/***/ }),

/***/ "./node_modules/react-navigation/lib/addNavigationHelpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=













function(navigation){
return _extends({},
navigation,{
goBack:function goBack(key){return navigation.dispatch(_NavigationActions2.default.back({
key:key===undefined?navigation.state.key:key}));},

navigate:function navigate(
routeName,
params,
action){return(
navigation.dispatch(_NavigationActions2.default.navigate({
routeName:routeName,
params:params,
action:action})));},






setParams:function setParams(params){return(
navigation.dispatch(_NavigationActions2.default.setParams({
params:params,
key:navigation.state.key})));}});


};var _NavigationActions=__webpack_require__("./node_modules/react-navigation/lib/NavigationActions.js");var _NavigationActions2=_interopRequireDefault(_NavigationActions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ }),

/***/ "./node_modules/react-navigation/lib/createNavigationContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=

























createNavigationContainer;var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");var _invariant2=_interopRequireDefault(_invariant);var _PlatformHelpers=__webpack_require__("./node_modules/react-navigation/lib/PlatformHelpers.js");var _NavigationActions=__webpack_require__("./node_modules/react-navigation/lib/NavigationActions.js");var _NavigationActions2=_interopRequireDefault(_NavigationActions);var _addNavigationHelpers=__webpack_require__("./node_modules/react-navigation/lib/addNavigationHelpers.js");var _addNavigationHelpers2=_interopRequireDefault(_addNavigationHelpers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function createNavigationContainer(
Component,
containerConfig)
{









function urlToPathAndParams(url){
var params={};
var URIPrefix=containerConfig&&containerConfig.URIPrefix;
var delimiter=URIPrefix||'://';
var path=url.split(delimiter)[1];
if(!path){
path=url;
}
return{
path:path,
params:params};

}var

NavigationContainer=function(_React$Component){_inherits(NavigationContainer,_React$Component);
























function NavigationContainer(props){_classCallCheck(this,NavigationContainer);var _this=_possibleConstructorReturn(this,(NavigationContainer.__proto__||Object.getPrototypeOf(NavigationContainer)).call(this,
props));_this.subs=null;_this._isStateful=function(){var hasNavProp=!!_this.props.navigation;if(hasNavProp){(0,_invariant2.default)(!containerConfig,'This navigator has a container config AND a navigation prop, so it is '+'unclear if it should own its own state. Remove the containerConfig '+'if the navigator should get its state from the navigation prop. If the '+'navigator should maintain its own state, do not pass a navigation prop.');return false;}return true;};_this.
















































_handleOpenURL=function(_ref){var url=_ref.url;
console.log('Handling URL:',url);
var parsedUrl=urlToPathAndParams(url);
if(parsedUrl){var
path=parsedUrl.path,params=parsedUrl.params;
var action=Component.router.getActionForPathAndParams(path,params);
if(action){
_this.dispatch(action);
}
}
};_this.

dispatch=function(action){var
state=_this.state;
if(!_this._isStateful()){
return false;
}
var nav=Component.router.getStateForAction(action,state.nav);

if(nav&&nav!==state.nav){
if(console.group){
console.group('Navigation Dispatch: ');
console.log('Action: ',action);
console.log('New State: ',nav);
console.log('Last State: ',state.nav);
console.groupEnd();
}else{
console.log('Navigation Dispatch: ',{action:action,newState:nav,lastState:state.nav});
}
_this.setState({nav:nav});
return true;
}
return false;
};_this.state={nav:_this._isStateful()?Component.router.getStateForAction(_NavigationActions2.default.init()):null};return _this;}_createClass(NavigationContainer,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;if(this._isStateful()){this.subs=_PlatformHelpers.BackAndroid.addEventListener('backPress',function(){return _this2.dispatch(_NavigationActions2.default.back());});_PlatformHelpers.Linking.addEventListener('url',this._handleOpenURL);_PlatformHelpers.Linking.getInitialURL().then(function(url){if(url){console.log('Handling URL:',url);var parsedUrl=urlToPathAndParams(url);if(parsedUrl){var path=parsedUrl.path,params=parsedUrl.params;var action=Component.router.getActionForPathAndParams(path,params);if(action){_this2.dispatch(action);}}}});}}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){var _ref2=this._isStateful()?[prevState.nav,this.state.nav]:[prevProps.navigation.state,this.props.navigation.state],_ref3=_slicedToArray(_ref2,2),prevNavigationState=_ref3[0],navigationState=_ref3[1];if(prevNavigationState!==navigationState&&typeof this.props.onNavigationStateChange==='function'){this.props.onNavigationStateChange(prevNavigationState,navigationState);}}},{key:'componentWillUnmount',value:function componentWillUnmount(){_PlatformHelpers.Linking.removeEventListener('url',this._handleOpenURL);this.subs&&this.subs.remove();}},{key:'render',value:function render()



{
var navigation=this.props.navigation;
if(this._isStateful()){
if(!this._navigation||this._navigation.state!==this.state.nav){
this._navigation=(0,_addNavigationHelpers2.default)({
dispatch:this.dispatch.bind(this),
state:this.state.nav});

}
navigation=this._navigation;
}
return(
_react2.default.createElement(Component,_extends({},
this.props,{
navigation:navigation})));


}}]);return NavigationContainer;}(_react2.default.Component);NavigationContainer.router=Component.router;


return NavigationContainer;
}

/***/ }),

/***/ "./node_modules/react-navigation/lib/navigators/DrawerNavigator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);




var _createNavigator=__webpack_require__("./node_modules/react-navigation/lib/navigators/createNavigator.js");var _createNavigator2=_interopRequireDefault(_createNavigator);
var _createNavigationContainer=__webpack_require__("./node_modules/react-navigation/lib/createNavigationContainer.js");var _createNavigationContainer2=_interopRequireDefault(_createNavigationContainer);
var _TabRouter=__webpack_require__("./node_modules/react-navigation/lib/routers/TabRouter.js");var _TabRouter2=_interopRequireDefault(_TabRouter);
var _DrawerScreen=__webpack_require__("./node_modules/react-navigation/lib/views/Drawer/DrawerScreen.js");var _DrawerScreen2=_interopRequireDefault(_DrawerScreen);
var _DrawerView=__webpack_require__("./node_modules/react-navigation/lib/views/Drawer/DrawerView.js");var _DrawerView2=_interopRequireDefault(_DrawerView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}













var DefaultDrawerConfig={




drawerWidth:_reactNative.Dimensions.get('window').width-(_reactNative.Platform.OS==='android'?56:64),
contentComponent:_DrawerView2.default.Items,
drawerPosition:'left'};


var DrawerNavigator=function DrawerNavigator(
routeConfigs,
config)
{
var mergedConfig=_extends({},DefaultDrawerConfig,config);var

containerConfig=





mergedConfig.containerConfig,drawerWidth=mergedConfig.drawerWidth,contentComponent=mergedConfig.contentComponent,contentOptions=mergedConfig.contentOptions,drawerPosition=mergedConfig.drawerPosition,tabsConfig=_objectWithoutProperties(mergedConfig,['containerConfig','drawerWidth','contentComponent','contentOptions','drawerPosition']);
var contentRouter=(0,_TabRouter2.default)(routeConfigs,tabsConfig);
var drawerRouter=(0,_TabRouter2.default)({
DrawerClose:{
screen:(0,_createNavigator2.default)(contentRouter)(function(props){return(
_react2.default.createElement(_DrawerScreen2.default,props));})},


DrawerOpen:{
screen:function screen(){return null;}}},

{
initialRouteName:'DrawerClose'});

return(0,_createNavigationContainer2.default)((0,_createNavigator2.default)(drawerRouter)(function(props){return(
_react2.default.createElement(_DrawerView2.default,_extends({},
props,{
drawerWidth:drawerWidth,
contentComponent:contentComponent,
contentOptions:contentOptions,
drawerPosition:drawerPosition})));}),

containerConfig);
};exports.default=

DrawerNavigator;

/***/ }),

/***/ "./node_modules/react-navigation/lib/navigators/StackNavigator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _createNavigationContainer=__webpack_require__("./node_modules/react-navigation/lib/createNavigationContainer.js");var _createNavigationContainer2=_interopRequireDefault(_createNavigationContainer);
var _createNavigator=__webpack_require__("./node_modules/react-navigation/lib/navigators/createNavigator.js");var _createNavigator2=_interopRequireDefault(_createNavigator);
var _CardStack=__webpack_require__("./node_modules/react-navigation/lib/views/CardStack.js");var _CardStack2=_interopRequireDefault(_CardStack);
var _StackRouter=__webpack_require__("./node_modules/react-navigation/lib/routers/StackRouter.js");var _StackRouter2=_interopRequireDefault(_StackRouter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=













function(routeConfigMap){var stackConfig=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var

containerOptions=










stackConfig.containerOptions,initialRouteName=stackConfig.initialRouteName,initialRouteParams=stackConfig.initialRouteParams,paths=stackConfig.paths,headerComponent=stackConfig.headerComponent,headerMode=stackConfig.headerMode,mode=stackConfig.mode,cardStyle=stackConfig.cardStyle,onTransitionStart=stackConfig.onTransitionStart,onTransitionEnd=stackConfig.onTransitionEnd,navigationOptions=stackConfig.navigationOptions;
var stackRouterConfig={
initialRouteName:initialRouteName,
initialRouteParams:initialRouteParams,
paths:paths,
navigationOptions:navigationOptions};

var router=(0,_StackRouter2.default)(routeConfigMap,stackRouterConfig);
return(0,_createNavigationContainer2.default)((0,_createNavigator2.default)(router)(function(props){return(
_react2.default.createElement(_CardStack2.default,_extends({},
props,{
headerComponent:headerComponent,
headerMode:headerMode,
mode:mode,
cardStyle:cardStyle,
onTransitionStart:onTransitionStart,
onTransitionEnd:onTransitionEnd})));}),

containerOptions);
};

/***/ }),

/***/ "./node_modules/react-navigation/lib/navigators/TabNavigator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);

var _createNavigator=__webpack_require__("./node_modules/react-navigation/lib/navigators/createNavigator.js");var _createNavigator2=_interopRequireDefault(_createNavigator);
var _createNavigationContainer=__webpack_require__("./node_modules/react-navigation/lib/createNavigationContainer.js");var _createNavigationContainer2=_interopRequireDefault(_createNavigationContainer);
var _TabRouter=__webpack_require__("./node_modules/react-navigation/lib/routers/TabRouter.js");var _TabRouter2=_interopRequireDefault(_TabRouter);
var _TabView=__webpack_require__("./node_modules/react-navigation/lib/views/TabView/TabView.js");var _TabView2=_interopRequireDefault(_TabView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}














var TabNavigator=function TabNavigator(
routeConfigs)

{var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

var mergedConfig=_extends({},TabNavigator.Presets.Default,config);var

containerOptions=







mergedConfig.containerOptions,tabBarComponent=mergedConfig.tabBarComponent,tabBarPosition=mergedConfig.tabBarPosition,tabBarOptions=mergedConfig.tabBarOptions,swipeEnabled=mergedConfig.swipeEnabled,animationEnabled=mergedConfig.animationEnabled,lazyLoad=mergedConfig.lazyLoad,tabsConfig=_objectWithoutProperties(mergedConfig,['containerOptions','tabBarComponent','tabBarPosition','tabBarOptions','swipeEnabled','animationEnabled','lazyLoad']);
var router=(0,_TabRouter2.default)(routeConfigs,tabsConfig);
return(0,_createNavigationContainer2.default)((0,_createNavigator2.default)(router)(function(props){return(
_react2.default.createElement(_TabView2.default,_extends({},
props,{
tabBarComponent:tabBarComponent,
tabBarPosition:tabBarPosition,
tabBarOptions:tabBarOptions,
swipeEnabled:swipeEnabled,
animationEnabled:animationEnabled,
lazyLoad:lazyLoad})));}),

containerOptions);
};

var Presets={
iOSBottomTabs:{
tabBarComponent:_TabView2.default.TabBarBottom,
tabBarPosition:'bottom',
swipeEnabled:false,
animationEnabled:false,
lazyLoad:false},

AndroidTopTabs:{
tabBarComponent:_TabView2.default.TabBarTop,
tabBarPosition:'top',
swipeEnabled:true,
animationEnabled:true,
lazyLoad:false}};





















TabNavigator.Presets={
iOSBottomTabs:Presets.iOSBottomTabs,
AndroidTopTabs:Presets.AndroidTopTabs,
Default:_reactNative.Platform.OS==='ios'?Presets.iOSBottomTabs:Presets.AndroidTopTabs};exports.default=


TabNavigator;

/***/ }),

/***/ "./node_modules/react-navigation/lib/navigators/createNavigator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}











var createNavigator=function createNavigator(router){return(
function(View){var
Navigator=function(_React$Component){_inherits(Navigator,_React$Component);function Navigator(){_classCallCheck(this,Navigator);return _possibleConstructorReturn(this,(Navigator.__proto__||Object.getPrototypeOf(Navigator)).apply(this,arguments));}_createClass(Navigator,[{key:'render',value:function render()




{
return(
_react2.default.createElement(View,_extends({},
this.props,{
router:router})));


}}]);return Navigator;}(_react2.default.Component);Navigator.router=router;


return Navigator;
});};exports.default=

createNavigator;

/***/ }),

/***/ "./node_modules/react-navigation/lib/react-navigation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";




module.exports={


get createNavigationContainer(){return __webpack_require__("./node_modules/react-navigation/lib/createNavigationContainer.js").default;},
get StateUtils(){return __webpack_require__("./node_modules/react-navigation/lib/StateUtils.js").default;},
get PropTypes(){return __webpack_require__("./node_modules/react-navigation/lib/PropTypes.js").default;},
get addNavigationHelpers(){return __webpack_require__("./node_modules/react-navigation/lib/addNavigationHelpers.js").default;},
get NavigationActions(){return __webpack_require__("./node_modules/react-navigation/lib/NavigationActions.js").default;},


get createNavigator(){return __webpack_require__("./node_modules/react-navigation/lib/navigators/createNavigator.js").default;},
get StackNavigator(){return __webpack_require__("./node_modules/react-navigation/lib/navigators/StackNavigator.js").default;},
get TabNavigator(){return __webpack_require__("./node_modules/react-navigation/lib/navigators/TabNavigator.js").default;},
get DrawerNavigator(){return __webpack_require__("./node_modules/react-navigation/lib/navigators/DrawerNavigator.js").default;},


get StackRouter(){return __webpack_require__("./node_modules/react-navigation/lib/routers/StackRouter.js").default;},
get TabRouter(){return __webpack_require__("./node_modules/react-navigation/lib/routers/TabRouter.js").default;},


get Transitioner(){return __webpack_require__("./node_modules/react-navigation/lib/views/Transitioner.js").default;},
get CardStack(){return __webpack_require__("./node_modules/react-navigation/lib/views/CardStack.js").default;},
get DrawerView(){return __webpack_require__("./node_modules/react-navigation/lib/views/Drawer/DrawerView.js").default;},
get TabView(){return __webpack_require__("./node_modules/react-navigation/lib/views/TabView/TabView.js").default;},


get withNavigation(){return __webpack_require__("./node_modules/react-navigation/lib/views/withNavigation.js").default;}};

/***/ }),

/***/ "./node_modules/react-navigation/lib/routers/StackRouter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _pathToRegexp=__webpack_require__("./node_modules/path-to-regexp/index.js");var _pathToRegexp2=_interopRequireDefault(_pathToRegexp);

var _NavigationActions=__webpack_require__("./node_modules/react-navigation/lib/NavigationActions.js");var _NavigationActions2=_interopRequireDefault(_NavigationActions);
var _createConfigGetter=__webpack_require__("./node_modules/react-navigation/lib/routers/createConfigGetter.js");var _createConfigGetter2=_interopRequireDefault(_createConfigGetter);
var _getScreenForRouteName=__webpack_require__("./node_modules/react-navigation/lib/routers/getScreenForRouteName.js");var _getScreenForRouteName2=_interopRequireDefault(_getScreenForRouteName);
var _StateUtils=__webpack_require__("./node_modules/react-navigation/lib/StateUtils.js");var _StateUtils2=_interopRequireDefault(_StateUtils);
var _validateRouteConfigMap=__webpack_require__("./node_modules/react-navigation/lib/routers/validateRouteConfigMap.js");var _validateRouteConfigMap2=_interopRequireDefault(_validateRouteConfigMap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}















var uniqueBaseId='id-'+Date.now();
var uuidCount=0;
function _getUuid(){
return uniqueBaseId+'-'+uuidCount++;
}exports.default=

function(
routeConfigs)

{var stackConfig=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

(0,_validateRouteConfigMap2.default)(routeConfigs);

var childRouters={};
var routeNames=Object.keys(routeConfigs);

routeNames.forEach(function(routeName){
var screen=(0,_getScreenForRouteName2.default)(routeConfigs,routeName);
if(screen&&screen.router){

childRouters[routeName]=screen.router;
}else{

childRouters[routeName]=null;
}
});var _stackConfig$initialR=



stackConfig.initialRouteParams,initialRouteParams=_stackConfig$initialR===undefined?{}:_stackConfig$initialR;

var initialRouteName=stackConfig.initialRouteName||routeNames[0];

var initialChildRouter=childRouters[initialRouteName];
var paths=stackConfig.paths||{};

routeNames.forEach(function(routeName){
var pathPattern=paths[routeName]||routeConfigs[routeName].path;
var matchExact=!!pathPattern&&!childRouters[routeName];
if(!pathPattern){
pathPattern=routeName;
}
var keys=[];
var re=(0,_pathToRegexp2.default)(pathPattern,keys);
if(!matchExact){
var wildcardRe=(0,_pathToRegexp2.default)(pathPattern+'/*',keys);
re=new RegExp('(?:'+re.source+')|(?:'+wildcardRe.source+')');
}

paths[routeName]={re:re,keys:keys};
});

return{

getComponentForState:function getComponentForState(state){
var activeChildRoute=state.routes[state.index];var
routeName=activeChildRoute.routeName;
if(childRouters[routeName]){
return childRouters[routeName].getComponentForState(activeChildRoute);
}
return(0,_getScreenForRouteName2.default)(routeConfigs,routeName);
},

getComponentForRouteName:function getComponentForRouteName(routeName){
return(0,_getScreenForRouteName2.default)(routeConfigs,routeName);
},

getStateForAction:function getStateForAction(action,state){
action=_NavigationActions2.default.mapDeprecatedActionAndWarn(action);


if(!state){
var route={};
if(action.type===_NavigationActions2.default.NAVIGATE&&childRouters[action.routeName]!==undefined){
return{
index:0,
routes:[_extends({},

action,{
type:undefined,
key:'Init'})]};



}
if(initialChildRouter){
route=initialChildRouter.getStateForAction(_NavigationActions2.default.navigate({
routeName:initialRouteName,
params:initialRouteParams}));

}
var _params=(route.params||action.params)&&_extends({},
route.params||{},
action.params||{});

route=_extends({},
route,{
routeName:initialRouteName,
key:'Init'},
_params?{params:_params}:{});

state={
index:0,
routes:[route]};

}


var currentRoute=state.routes[state.index];
var childRouter=childRouters[currentRoute.routeName];
if(childRouter){
var _route=childRouter.getStateForAction(action,currentRoute);
if(_route&&_route!==currentRoute){
return _StateUtils2.default.replaceAt(state,currentRoute.key,_route);
}
}


if(action.type===_NavigationActions2.default.NAVIGATE&&childRouters[action.routeName]!==undefined){
var _childRouter=childRouters[action.routeName];
var _route2=void 0;
if(_childRouter){
var childAction=action.action||_NavigationActions2.default.init({params:action.params});
_route2=_extends({},
action,
_childRouter.getStateForAction(childAction),{
key:_getUuid(),
routeName:action.routeName});

}else{
_route2=_extends({},
action,{
key:_getUuid(),
routeName:action.routeName});

}
return _StateUtils2.default.push(state,_route2);
}

if(action.type===_NavigationActions2.default.SET_PARAMS){

var lastRoute=state.routes.find(function(route){return route.key===action.key;});
if(lastRoute){
var _params2=_extends({},
lastRoute.params,
action.params);

var routes=[].concat(_toConsumableArray(state.routes));
routes[state.routes.indexOf(lastRoute)]=_extends({},
lastRoute,{
params:_params2});

return _extends({},
state,{
routes:routes});

}
}

if(action.type===_NavigationActions2.default.RESET){
var resetAction=action;

return _extends({},
state,{
routes:resetAction.actions.map(function(action,index){
var router=childRouters[action.routeName];
if(router){
return _extends({},
action,
router.getStateForAction(action),{
routeName:action.routeName,
key:'Init'+index});

}
var route=_extends({},
action,{
key:'Init'+index});

delete route.type;
return route;
}),
index:action.index});

}

if(action.type===_NavigationActions2.default.BACK){
var backRouteIndex=null;
if(action.key){

var backRoute=state.routes.find(function(route){return route.key===action.key;});

backRouteIndex=state.routes.indexOf(backRoute);
}
if(backRouteIndex==null){
return _StateUtils2.default.pop(state);
}
if(backRouteIndex>0){
return _extends({},
state,{
routes:state.routes.slice(0,backRouteIndex),
index:backRouteIndex-1});

}
}
return state;
},

getPathAndParamsForState:function getPathAndParamsForState(state){

return{
path:''};

},

getActionForPathAndParams:function getActionForPathAndParams(pathToResolve){


if(!pathToResolve){
return _NavigationActions2.default.navigate({
routeName:initialRouteName});

}



var matchedRouteName=void 0;
var pathMatch=void 0;
var pathMatchKeys=void 0;

for(var routeName in paths){var _paths$routeName=

paths[routeName],re=_paths$routeName.re,keys=_paths$routeName.keys;
pathMatch=re.exec(pathToResolve);
if(pathMatch&&pathMatch.length){
pathMatchKeys=keys;
matchedRouteName=routeName;
break;
}
}


if(!matchedRouteName){
return null;
}





var nestedAction=void 0;
if(childRouters[matchedRouteName]){
nestedAction=childRouters[matchedRouteName].getActionForPathAndParams(

pathMatch.slice(pathMatchKeys.length).join('/'));

}




var params=pathMatch.slice(1).reduce(function(result,matchResult,i){
var key=pathMatchKeys[i];
if(key.asterisk||!key){
return result;
}
var nextResult=result||{};
var paramName=key.name;
nextResult[paramName]=matchResult;
return nextResult;
},null);

return _NavigationActions2.default.navigate(_extends({
routeName:matchedRouteName},
params?{params:params}:{},
nestedAction?{action:nestedAction}:{}));

},

getScreenConfig:(0,_createConfigGetter2.default)(routeConfigs,stackConfig.navigationOptions)};


};

/***/ }),

/***/ "./node_modules/react-navigation/lib/routers/TabRouter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");var _invariant2=_interopRequireDefault(_invariant);
var _getScreenForRouteName=__webpack_require__("./node_modules/react-navigation/lib/routers/getScreenForRouteName.js");var _getScreenForRouteName2=_interopRequireDefault(_getScreenForRouteName);
var _createConfigGetter=__webpack_require__("./node_modules/react-navigation/lib/routers/createConfigGetter.js");var _createConfigGetter2=_interopRequireDefault(_createConfigGetter);

var _NavigationActions=__webpack_require__("./node_modules/react-navigation/lib/NavigationActions.js");var _NavigationActions2=_interopRequireDefault(_NavigationActions);
var _validateRouteConfigMap=__webpack_require__("./node_modules/react-navigation/lib/routers/validateRouteConfigMap.js");var _validateRouteConfigMap2=_interopRequireDefault(_validateRouteConfigMap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}exports.default=













function(
routeConfigs)

{var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

(0,_validateRouteConfigMap2.default)(routeConfigs);

var order=config.order||Object.keys(routeConfigs);
var paths=config.paths||{};
var initialRouteName=config.initialRouteName||order[0];
var initialRouteIndex=order.indexOf(initialRouteName);
var backBehavior=config.backBehavior||'initialRoute';
var shouldBackNavigateToInitialRoute=backBehavior==='initialRoute';
var tabRouters={};
order.forEach(function(routeName){
var routeConfig=routeConfigs[routeName];
paths[routeName]=typeof routeConfig.path==='string'?routeConfig.path:routeName;
tabRouters[routeName]=null;
if(routeConfig.screen&&routeConfig.screen.router){
tabRouters[routeName]=routeConfig.screen.router;
}
});
(0,_invariant2.default)(
initialRouteIndex!==-1,
'Invalid initialRouteName \''+initialRouteName+'\' for TabRouter. '+('Should be one of '+
order.map(function(n){return'"'+n+'"';}).join(', ')));

return{
getStateForAction:function getStateForAction(
action,
inputState)
{

action=_NavigationActions2.default.mapDeprecatedActionAndWarn(action);


var state=inputState;
if(!state){
var _routes=order.map(function(routeName){
var tabRouter=tabRouters[routeName];
if(tabRouter){
var childAction=action.action||_NavigationActions2.default.init(_extends({},
action.params?{params:action.params}:{}));

return _extends({},
tabRouter.getStateForAction(childAction),{
key:routeName,
routeName:routeName});

}
return{
key:routeName,
routeName:routeName};

});
state={
routes:_routes,
index:initialRouteIndex};


}

if(action.type===_NavigationActions2.default.INIT){(function(){var _action=

action,params=_action.params;
if(params){
state.routes=state.routes.map(function(route){return _extends({},
route,{
params:_extends({},
route.params,
params)});});


}})();
}


var activeTabLastState=state.routes[state.index];
var activeTabRouter=tabRouters[order[state.index]];
if(activeTabRouter){
var activeTabState=activeTabRouter.getStateForAction(
action.action||action,
activeTabLastState);

if(!activeTabState&&inputState){
return null;
}
if(activeTabState&&activeTabState!==activeTabLastState){
var _routes2=[].concat(_toConsumableArray(state.routes));
_routes2[state.index]=activeTabState;
return _extends({},
state,{
routes:_routes2});

}
}



var activeTabIndex=state.index;
var isBackEligible=action.key==null||action.key===activeTabLastState.key;
if(
action.type===_NavigationActions2.default.BACK&&
isBackEligible&&shouldBackNavigateToInitialRoute)
{
activeTabIndex=initialRouteIndex;
}
var didNavigate=false;
if(action.type===_NavigationActions2.default.NAVIGATE){var _ret2=function(){
var navigateAction=action;
didNavigate=!!order.find(function(tabId,i){
if(tabId===navigateAction.routeName){
activeTabIndex=i;
return true;
}
return false;
});
if(didNavigate&&action.action){
var tabRouter=tabRouters[action.routeName];
var newChildState=tabRouter?
tabRouter.getStateForAction(action.action,state.routes[activeTabIndex]):
null;
if(newChildState&&newChildState!==state.routes[activeTabIndex]){
var _routes3=[].concat(_toConsumableArray(state.routes));
_routes3[activeTabIndex]=newChildState;
return{v:_extends({},
state,{
routes:_routes3,
index:activeTabIndex})};

}
}}();if((typeof _ret2==='undefined'?'undefined':_typeof(_ret2))==="object")return _ret2.v;
}
if(action.type===_NavigationActions2.default.SET_PARAMS){
var lastRoute=state.routes.find(

function(route){return route.key===action.key;});

if(lastRoute){
var params=_extends({},
lastRoute.params,
action.params);

var _routes4=[].concat(_toConsumableArray(state.routes));
_routes4[state.routes.indexOf(lastRoute)]=_extends({},
lastRoute,{
params:params});

return _extends({},
state,{
routes:_routes4});

}
}
if(activeTabIndex!==state.index){
return _extends({},
state,{
index:activeTabIndex});

}else if(didNavigate&&!inputState){
return state;
}else if(didNavigate){
return null;
}


var index=state.index;

var routes=state.routes;
order.find(function(tabId,i){
var tabRouter=tabRouters[tabId];
if(i===index){
return false;
}
var tabState=routes[i];
if(tabRouter){

tabState=tabRouter.getStateForAction(action,tabState);
}
if(!tabState){
index=i;
return true;
}
if(tabState!==routes[i]){
routes=[].concat(_toConsumableArray(routes));
routes[i]=tabState;
index=i;
return true;
}
return false;
});


if(index!==state.index||routes!==state.routes){
return _extends({},
state,{
index:index,
routes:routes});

}
return state;
},

getComponentForState:function getComponentForState(state){
var routeName=order[state.index];
(0,_invariant2.default)(
routeName,'There is no route defined for index '+
state.index+'. Check that\n        that you passed in a navigation state with a valid tab/screen index.');


var childRouter=tabRouters[routeName];
if(childRouter){
return childRouter.getComponentForState(state.routes[state.index]);
}
return(0,_getScreenForRouteName2.default)(routeConfigs,routeName);
},

getComponentForRouteName:function getComponentForRouteName(routeName){
return(0,_getScreenForRouteName2.default)(routeConfigs,routeName);
},

getPathAndParamsForState:function getPathAndParamsForState(state){
var route=state.routes[state.index];
var routeName=order[state.index];
var subPath=paths[routeName];
var screen=(0,_getScreenForRouteName2.default)(routeConfigs,routeName);
var path=subPath;
var params=route.params;
if(screen&&screen.router){


var child=screen.router.getPathAndParamsForState(route);
path=subPath?subPath+'/'+child.path:child.path;
params=child.params?_extends({},params,child.params):params;
}
return{
path:path,
params:params};

},






getActionForPathAndParams:function getActionForPathAndParams(path,params){
return order.map(function(tabId){
var parts=path.split('/');
var pathToTest=paths[tabId];
if(parts[0]===pathToTest){
var tabRouter=tabRouters[tabId];
var action=_NavigationActions2.default.navigate({
routeName:tabId});

if(tabRouter&&tabRouter.getActionForPathAndParams){
action.action=tabRouter.getActionForPathAndParams(parts.slice(1).join('/'),params);
}else if(params){
action.params=params;
}
return action;
}
return null;
}).find(function(action){return!!action;})||order.map(function(tabId){
var tabRouter=tabRouters[tabId];
return tabRouter&&tabRouter.getActionForPathAndParams(path,params);
}).find(function(action){return!!action;})||null;
},

getScreenConfig:(0,_createConfigGetter2.default)(routeConfigs,config.navigationOptions)};

};

/***/ }),

/***/ "./node_modules/react-navigation/lib/routers/createConfigGetter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});



var _invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");var _invariant2=_interopRequireDefault(_invariant);

var _getScreenForRouteName=__webpack_require__("./node_modules/react-navigation/lib/routers/getScreenForRouteName.js");var _getScreenForRouteName2=_interopRequireDefault(_getScreenForRouteName);
var _addNavigationHelpers=__webpack_require__("./node_modules/react-navigation/lib/addNavigationHelpers.js");var _addNavigationHelpers2=_interopRequireDefault(_addNavigationHelpers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=









function(
routeConfigs,
defaultOptions){return(

function(
navigation,
optionName,
config)
{
var route=navigation.state;
(0,_invariant2.default)(
route.routeName&&
typeof route.routeName==='string',
'Cannot get config because the route does not have a routeName.');


var Component=(0,_getScreenForRouteName2.default)(routeConfigs,route.routeName);

var outputConfig=config||null;

if(Component.router){var
state=navigation.state,dispatch=navigation.dispatch;
(0,_invariant2.default)(
state&&state.routes&&state.index!=null,'Expect nav state to have routes and index, '+
JSON.stringify(route));

var childNavigation=(0,_addNavigationHelpers2.default)({
state:state.routes[state.index],
dispatch:dispatch});

outputConfig=Component.router.getScreenConfig(childNavigation,optionName);
}

var routeConfig=routeConfigs[route.routeName];

return[
defaultOptions,
Component.navigationOptions,
routeConfig.navigationOptions].
reduce(
function(acc,options){
if(options&&options[optionName]!==undefined){
return typeof options[optionName]==='function'?
options[optionName](navigation,acc):
options[optionName];
}
return acc;
},
outputConfig);

});};

/***/ }),

/***/ "./node_modules/react-navigation/lib/routers/getScreenForRouteName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=












getScreenForRouteName;var _invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getScreenForRouteName(
routeConfigs,
routeName)
{
var routeConfig=routeConfigs[routeName];

(0,_invariant2.default)(
routeConfig,
'There is no route defined for key '+routeName+'.\n'+('Must be one of: '+
Object.keys(routeConfigs).map(function(a){return'\''+a+'\'';}).join(',')));


if(routeConfig.screen){
return routeConfig.screen;
}

if(typeof routeConfig.getScreen==='function'){
var screen=routeConfig.getScreen();
(0,_invariant2.default)(
typeof screen==='function',
'The getScreen defined for route \''+routeName+' didn\'t return a valid '+
'screen or navigator.\n\n'+
'Please pass it like this:\n'+(
routeName+': {\n  getScreen: () => require(\'./MyScreen\').default\n}'));

return screen;
}

(0,_invariant2.default)(false,'Route '+routeName+' must define a screen or a getScreen.');
}

/***/ }),

/***/ "./node_modules/react-navigation/lib/routers/validateRouteConfigMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}





function validateRouteConfigMap(routeConfigs){
var routeNames=Object.keys(routeConfigs);
(0,_invariant2.default)(
routeNames.length>0,
'Please specify at least one route when configuring a navigator.');


routeNames.forEach(function(routeName){
var routeConfig=routeConfigs[routeName];

(0,_invariant2.default)(
routeConfig.screen||routeConfig.getScreen,
'Route \''+routeName+'\' should declare a screen. '+
'For example:\n\n'+
'import MyScreen from \'./MyScreen\';\n'+
'...\n'+(
routeName+': {\n')+
'  screen: MyScreen,\n'+
'}');


if(routeConfig.screen&&routeConfig.getScreen){
(0,_invariant2.default)(false,
'Route \''+routeName+'\' should declare a screen or '+
'a getScreen, not both.');

}

if(routeConfig.screen){
(0,_invariant2.default)(
typeof routeConfig.screen==='function',
'The component for route \''+routeName+'\' must be a '+
'a React component. For example:\n\n'+
'import MyScreen from \'./MyScreen\';\n'+
'...\n'+(
routeName+': {\n')+
'  screen: MyScreen,\n'+
'}\n\n'+
'You can also use a navigator:\n\n'+
'import MyNavigator from \'./MyNavigator\';\n'+
'...\n'+(
routeName+': {\n')+
'  screen: MyNavigator,\n'+
'}');

}
});
}exports.default=

validateRouteConfigMap;

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/AbstractPanResponder.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});

var _reactNative=__webpack_require__(1);



var _invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}





var EmptyPanHandlers={
onMoveShouldSetPanResponder:null,
onPanResponderGrant:null,
onPanResponderMove:null,
onPanResponderRelease:null,
onPanResponderTerminate:null,
onPanResponderTerminationRequest:null};var






AbstractPanResponder=



function AbstractPanResponder(){var _this=this;_classCallCheck(this,AbstractPanResponder);
var config={};
Object.keys(EmptyPanHandlers).forEach(function(name){
var fn=_this[name];

(0,_invariant2.default)(
typeof fn==='function',
'subclass of `NavigationAbstractPanResponder` must implement method %s',
name);


config[name]=fn.bind(_this);
},this);

this.panHandlers=_reactNative.PanResponder.create(config).panHandlers;
};exports.default=AbstractPanResponder;

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/AnimatedValueSubscription.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var





AnimatedValueSubscription=function(){



function AnimatedValueSubscription(value,callback){_classCallCheck(this,AnimatedValueSubscription);
this._value=value;
this._token=value.addListener(callback);
}_createClass(AnimatedValueSubscription,[{key:'remove',value:function remove()

{
this._value.removeListener(this._token);
}}]);return AnimatedValueSubscription;}();exports.default=AnimatedValueSubscription;

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/Card.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);

var _reactNative=__webpack_require__(1);




var _CardStackPanResponder=__webpack_require__("./node_modules/react-navigation/lib/views/CardStackPanResponder.js");var _CardStackPanResponder2=_interopRequireDefault(_CardStackPanResponder);
var _CardStackStyleInterpolator=__webpack_require__("./node_modules/react-navigation/lib/views/CardStackStyleInterpolator.js");var _CardStackStyleInterpolator2=_interopRequireDefault(_CardStackStyleInterpolator);
var _PointerEventsContainer=__webpack_require__("./node_modules/react-navigation/lib/views/PointerEventsContainer.js");var _PointerEventsContainer2=_interopRequireDefault(_PointerEventsContainer);
var _PropTypes=__webpack_require__("./node_modules/react-navigation/lib/PropTypes.js");var _PropTypes2=_interopRequireDefault(_PropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



















Card=function(_React$Component){_inherits(Card,_React$Component);function Card(){_classCallCheck(this,Card);return _possibleConstructorReturn(this,(Card.__proto__||Object.getPrototypeOf(Card)).apply(this,arguments));}_createClass(Card,[{key:'render',value:function render()












{var _props=






this.props,panHandlers=_props.panHandlers,pointerEvents=_props.pointerEvents,renderScene=_props.renderScene,style=_props.style,props=_objectWithoutProperties(_props,['panHandlers','pointerEvents','renderScene','style']);

var viewStyle=style===undefined?
_CardStackStyleInterpolator2.default.forHorizontal(props):
style;

var viewPanHandlers=panHandlers===undefined?
_CardStackPanResponder2.default.forHorizontal(_extends({},
props,{
onNavigateBack:this.props.onNavigateBack})):

panHandlers;

return(
_react2.default.createElement(_reactNative.Animated.View,_extends({},
viewPanHandlers,{
pointerEvents:pointerEvents,
ref:this.props.onComponentRef,
style:[styles.main,viewStyle]}),

renderScene(props)));


}}]);return Card;}(_react2.default.Component);Card.propTypes=_extends({},_PropTypes2.default.SceneRendererProps,{onComponentRef:_react.PropTypes.func.isRequired,onNavigateBack:_react.PropTypes.func,panHandlers:_PropTypes2.default.panHandlers,pointerEvents:_react.PropTypes.string.isRequired,renderScene:_react.PropTypes.func.isRequired,style:_react.PropTypes.any});


var styles=_reactNative.StyleSheet.create({
main:{
backgroundColor:'#E9E9EF',
bottom:0,
left:0,
position:'absolute',
right:0,
shadowColor:'black',
shadowOffset:{width:0,height:0},
shadowOpacity:0.4,
shadowRadius:10,
top:0}});



Card=(0,_PointerEventsContainer2.default)(Card);

Card.CardStackPanResponder=_CardStackPanResponder2.default;
Card.CardStackStyleInterpolator=_CardStackStyleInterpolator2.default;exports.default=

Card;

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/CardStack.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);






var _Transitioner=__webpack_require__("./node_modules/react-navigation/lib/views/Transitioner.js");var _Transitioner2=_interopRequireDefault(_Transitioner);
var _Card=__webpack_require__("./node_modules/react-navigation/lib/views/Card.js");var _Card2=_interopRequireDefault(_Card);
var _CardStackStyleInterpolator=__webpack_require__("./node_modules/react-navigation/lib/views/CardStackStyleInterpolator.js");var _CardStackStyleInterpolator2=_interopRequireDefault(_CardStackStyleInterpolator);
var _CardStackPanResponder=__webpack_require__("./node_modules/react-navigation/lib/views/CardStackPanResponder.js");var _CardStackPanResponder2=_interopRequireDefault(_CardStackPanResponder);
var _Header=__webpack_require__("./node_modules/react-navigation/lib/views/Header.js");var _Header2=_interopRequireDefault(_Header);
var _PropTypes=__webpack_require__("./node_modules/react-navigation/lib/PropTypes.js");var _PropTypes2=_interopRequireDefault(_PropTypes);
var _NavigationActions=__webpack_require__("./node_modules/react-navigation/lib/NavigationActions.js");var _NavigationActions2=_interopRequireDefault(_NavigationActions);
var _addNavigationHelpers=__webpack_require__("./node_modules/react-navigation/lib/addNavigationHelpers.js");var _addNavigationHelpers2=_interopRequireDefault(_addNavigationHelpers);
var _SceneView=__webpack_require__("./node_modules/react-navigation/lib/views/SceneView.js");var _SceneView2=_interopRequireDefault(_SceneView);


















var _TransitionConfigs=__webpack_require__("./node_modules/react-navigation/lib/views/TransitionConfigs.js");var _TransitionConfigs2=_interopRequireDefault(_TransitionConfigs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var NativeAnimatedModule=_reactNative.NativeModules&&_reactNative.NativeModules.NativeAnimatedModule;var
























CardStack=function(_Component){_inherits(CardStack,_Component);function CardStack(){var _ref;var _temp,_this,_ret;_classCallCheck(this,CardStack);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=CardStack.__proto__||Object.getPrototypeOf(CardStack)).call.apply(_ref,[this].concat(args))),_this),_this.


_childNavigationProps=

{},_this.



























































































_configureTransition=function(

transitionProps,

prevTransitionProps)
{
var isModal=_this.props.mode==='modal';


var transitionSpec=_extends({},
_this._getTransitionConfig(
transitionProps,
prevTransitionProps).
transitionSpec);

if(
!!NativeAnimatedModule&&

_CardStackStyleInterpolator2.default.canUseNativeDriver(isModal))
{

transitionSpec.useNativeDriver=true;
}
return transitionSpec;
},_this.































































































































_getChildNavigation=function(
scene)
{
var navigation=_this._childNavigationProps[scene.key];
if(!navigation||navigation.state!==scene.route){
navigation=_this._childNavigationProps[scene.key]=(0,_addNavigationHelpers2.default)(_extends({},
_this.props.navigation,{
state:scene.route}));

}
return navigation;
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(CardStack,[{key:'componentWillMount',value:function componentWillMount(){this._render=this._render.bind(this);this._renderScene=this._renderScene.bind(this);}},{key:'render',value:function render(){return _react2.default.createElement(_Transitioner2.default,{configureTransition:this._configureTransition,navigation:this.props.navigation,render:this._render,style:this.props.style,onTransitionStart:this.props.onTransitionStart,onTransitionEnd:this.props.onTransitionEnd});}},{key:'_renderHeader',value:function _renderHeader(transitionProps,headerMode){var _this2=this;var headerConfig=this.props.router.getScreenConfig(transitionProps.navigation,'header')||{};return _react2.default.createElement(this.props.headerComponent,_extends({},transitionProps,{router:this.props.router,style:headerConfig.style,mode:headerMode,onNavigateBack:function onNavigateBack(){return _this2.props.navigation.goBack(null);},renderLeftComponent:function renderLeftComponent(props){var header=_this2.props.router.getScreenConfig(props.navigation,'header')||{};return header.left;},renderRightComponent:function renderRightComponent(props){var header=_this2.props.router.getScreenConfig(props.navigation,'header')||{};return header.right;},renderTitleComponent:function renderTitleComponent(props){var header=_this2.props.router.getScreenConfig(props.navigation,'header')||{};if(typeof header.title==='string'){return undefined;}return header.title;}}));}},{key:'_render',value:function _render(props){var _this3=this;var floatingHeader=null;var headerMode=this._getHeaderMode();if(headerMode==='float'){floatingHeader=this._renderHeader(props,headerMode);}return _react2.default.createElement(_reactNative.View,{style:styles.container},_react2.default.createElement(_reactNative.View,{style:styles.scenes},props.scenes.map(function(scene){return _this3._renderScene(_extends({},props,{scene:scene,navigation:_this3._getChildNavigation(scene)}));})),floatingHeader);}},{key:'_getHeaderMode',value:function _getHeaderMode(){if(this.props.headerMode){return this.props.headerMode;}if(_reactNative.Platform.OS==='android'||this.props.mode==='modal'){return'screen';}return'float';}},{key:'_getTransitionConfig',value:function _getTransitionConfig(transitionProps,prevTransitionProps){var defaultConfig=_TransitionConfigs2.default.defaultTransitionConfig(transitionProps,prevTransitionProps,this.props.mode==='modal');if(this.props.transitionConfig){return _extends({},defaultConfig,this.props.transitionConfig());}return defaultConfig;}},{key:'_renderInnerCard',value:function _renderInnerCard(SceneComponent,props){var header=this.props.router.getScreenConfig(props.navigation,'header');var headerMode=this._getHeaderMode();if(headerMode==='screen'){var isHeaderHidden=header&&header.visible===false;var maybeHeader=isHeaderHidden?null:this._renderHeader(props,headerMode);return _react2.default.createElement(_reactNative.View,{style:styles.container},_react2.default.createElement(_reactNative.View,{style:{flex:1}},_react2.default.createElement(_SceneView2.default,{screenProps:this.props.screenProps,navigation:props.navigation,component:SceneComponent})),maybeHeader);}return _react2.default.createElement(_SceneView2.default,{screenProps:this.props.screenProps,navigation:props.navigation,component:SceneComponent});}},{key:'_renderScene',value:function _renderScene(

props){var _this4=this;
var isModal=this.props.mode==='modal';var _getTransitionConfig2=


this._getTransitionConfig(),screenInterpolator=_getTransitionConfig2.screenInterpolator;
var style=screenInterpolator&&screenInterpolator(props);

var panHandlers=null;

var cardStackConfig=this.props.router.getScreenConfig(
props.navigation,
'cardStack')||
{};



var gesturesEnabledConfig=cardStackConfig.gesturesEnabled;
var gesturesEnabled=typeof gesturesEnabledConfig==='boolean'?
gesturesEnabledConfig:
_reactNative.Platform.OS==='ios';
if(gesturesEnabled){
var onNavigateBack=null;
if(this.props.navigation.state.index!==0){
onNavigateBack=function onNavigateBack(){return _this4.props.navigation.dispatch(
_NavigationActions2.default.back({key:props.scene.route.key}));};

}
var panHandlersProps=_extends({},
props,{
onNavigateBack:onNavigateBack,
gestureResponseDistance:this.props.gestureResponseDistance});

panHandlers=isModal?
_CardStackPanResponder2.default.forVertical(panHandlersProps):
_CardStackPanResponder2.default.forHorizontal(panHandlersProps);
}

var SceneComponent=this.props.router.getComponentForRouteName(props.scene.route.routeName);

return(
_react2.default.createElement(_Card2.default,_extends({},
props,{
key:'card_'+props.scene.key,
panHandlers:panHandlers,
renderScene:function renderScene(sceneProps){return _this4._renderInnerCard(SceneComponent,sceneProps);},
style:[style,this.props.cardStyle]})));


}}]);return CardStack;}(_react.Component);CardStack.Card=_Card2.default;CardStack.Header=_Header2.default;CardStack.propTypes={cardStyle:_react.PropTypes.any,headerMode:_react.PropTypes.oneOf(['float','screen','none']),headerComponent:_react.PropTypes.func,mode:_react.PropTypes.oneOf(['card','modal']),gestureResponseDistance:_react.PropTypes.number,transitionConfig:_react.PropTypes.func,navigation:_react.PropTypes.shape({state:_PropTypes2.default.navigationState.isRequired,dispatch:_react.PropTypes.func.isRequired}).isRequired,style:_reactNative.View.propTypes.style};CardStack.defaultProps={mode:'card',headerComponent:_Header2.default};


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,




flexDirection:'column-reverse'},

scenes:{
flex:1}});exports.default=



CardStack;

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/CardStackPanResponder.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactNative=__webpack_require__(1);




var _clamp=__webpack_require__("./node_modules/clamp/index.js");var _clamp2=_interopRequireDefault(_clamp);

var _AbstractPanResponder2=__webpack_require__("./node_modules/react-navigation/lib/views/AbstractPanResponder.js");var _AbstractPanResponder3=_interopRequireDefault(_AbstractPanResponder2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}






var emptyFunction=function emptyFunction(){};




var ANIMATION_DURATION=250;






var POSITION_THRESHOLD=1/3;




var RESPOND_THRESHOLD=12;




var GESTURE_RESPONSE_DISTANCE=35;







var GESTURE_ANIMATED_VELOCITY_RATIO=-4;





var Directions={
HORIZONTAL:'horizontal',
VERTICAL:'vertical'};var


























CardStackPanResponder=function(_AbstractPanResponder){_inherits(CardStackPanResponder,_AbstractPanResponder);






function CardStackPanResponder(
direction,
props)
{_classCallCheck(this,CardStackPanResponder);var _this=_possibleConstructorReturn(this,(CardStackPanResponder.__proto__||Object.getPrototypeOf(CardStackPanResponder)).call(this));

_this._isResponding=false;
_this._isVertical=direction===Directions.VERTICAL;
_this._props=props;
_this._startValue=0;








_this._addNativeListener(_this._props.layout.width);
_this._addNativeListener(_this._props.layout.height);
_this._addNativeListener(_this._props.position);return _this;
}_createClass(CardStackPanResponder,[{key:'onMoveShouldSetPanResponder',value:function onMoveShouldSetPanResponder(

event,gesture){
var props=this._props;

if(props.navigationState.index!==props.scene.index){
return false;
}

var layout=props.layout;
var isVertical=this._isVertical;
var index=props.navigationState.index;
var currentDragDistance=gesture[isVertical?'dy':'dx'];
var currentDragPosition=event.nativeEvent[isVertical?'pageY':'pageX'];
var maxDragDistance=isVertical?
layout.height.__getValue():
layout.width.__getValue();

var positionMax=isVertical?
props.gestureResponseDistance:




props.gestureResponseDistance||GESTURE_RESPONSE_DISTANCE;

if(positionMax!=null&&currentDragPosition-currentDragDistance>positionMax){
return false;
}

return(
Math.abs(currentDragDistance)>RESPOND_THRESHOLD&&
maxDragDistance>0&&
index>0);

}},{key:'onPanResponderGrant',value:function onPanResponderGrant()

{var _this2=this;
this._isResponding=false;
this._props.position.stopAnimation(function(value){
_this2._isResponding=true;
_this2._startValue=value;
});
}},{key:'onPanResponderMove',value:function onPanResponderMove(

event,gesture){
if(!this._isResponding){
return;
}

var props=this._props;
var layout=props.layout;
var isVertical=this._isVertical;
var axis=isVertical?'dy':'dx';
var index=props.navigationState.index;
var distance=isVertical?
layout.height.__getValue():
layout.width.__getValue();
var currentValue=_reactNative.I18nManager.isRTL&&axis==='dx'?
this._startValue+gesture[axis]/distance:
this._startValue-gesture[axis]/distance;

var value=(0,_clamp2.default)(
index-1,
currentValue,
index);


props.position.setValue(value);
}},{key:'onPanResponderRelease',value:function onPanResponderRelease(

event,gesture){var _this3=this;
if(!this._isResponding){
return;
}

this._isResponding=false;

var props=this._props;
var isVertical=this._isVertical;
var axis=isVertical?'dy':'dx';
var velocity=gesture[isVertical?'vy':'vx'];
var index=props.navigationState.index;


props.position.stopAnimation(function(value){
if(!props.onNavigateBack){
_this3._reset(velocity);
return;
}



if(velocity<-0.5){
_this3._reset(velocity);
return;
}
if(velocity>0.5){
_this3._goBack(velocity);
return;
}



if(
value<=index-POSITION_THRESHOLD)
{
_this3._goBack(velocity);
}else{
_this3._reset(velocity);
}
});
}},{key:'onPanResponderTerminate',value:function onPanResponderTerminate()

{
this._isResponding=false;
this._reset(0);
}},{key:'onPanResponderTerminationRequest',value:function onPanResponderTerminationRequest(

event,gesture){


return false;
}},{key:'_reset',value:function _reset(

velocity){
var props=this._props;
_reactNative.Animated.spring(
props.position,
{
toValue:props.navigationState.index,
duration:ANIMATION_DURATION,
useNativeDriver:props.position.__isNative,
velocity:velocity*GESTURE_ANIMATED_VELOCITY_RATIO,
bounciness:0}).

start();
}},{key:'_goBack',value:function _goBack(

velocity){
var props=this._props;
if(!props.onNavigateBack){
return;
}
_reactNative.Animated.spring(
props.position,
{
toValue:Math.max(props.navigationState.index-1,0),
duration:ANIMATION_DURATION,
useNativeDriver:props.position.__isNative,
velocity:velocity*GESTURE_ANIMATED_VELOCITY_RATIO,
bounciness:0}).

start(props.onNavigateBack);
}},{key:'_addNativeListener',value:function _addNativeListener(

animatedValue){
if(!animatedValue.__isNative){
return;
}

if(Object.keys(animatedValue._listeners).length===0){
animatedValue.addListener(emptyFunction);
}
}}]);return CardStackPanResponder;}(_AbstractPanResponder3.default);


function createPanHandlers(
direction,
props)
{
var responder=new CardStackPanResponder(direction,props);
return responder.panHandlers;
}

function forHorizontal(
props)
{
return createPanHandlers(Directions.HORIZONTAL,props);
}

function forVertical(
props)
{
return createPanHandlers(Directions.VERTICAL,props);
}exports.default=

{

ANIMATION_DURATION:ANIMATION_DURATION,
RESPOND_THRESHOLD:RESPOND_THRESHOLD,


Directions:Directions,


forHorizontal:forHorizontal,
forVertical:forVertical};

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/CardStackStyleInterpolator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});

var _reactNative=__webpack_require__(1);

























function forInitial(props){var

navigationState=

props.navigationState,scene=props.scene;

var focused=navigationState.index===scene.index;
var opacity=focused?1:0;

var translate=focused?0:1000000;
return{
opacity:opacity,
transform:[
{translateX:translate},
{translateY:translate}]};


}




function forHorizontal(props){var

layout=


props.layout,position=props.position,scene=props.scene;

if(!layout.isMeasured){
return forInitial(props);
}

var index=scene.index;
var inputRange=[index-1,index,index+0.99,index+1];



var width=layout.initWidth+30;
var outputRange=_reactNative.I18nManager.isRTL?
[-width,0,10,10]:
[width,0,-10,-10];


var opacity=position.interpolate({
inputRange:inputRange,
outputRange:[1,1,0.3,0]});


var translateY=0;
var translateX=position.interpolate({
inputRange:inputRange,
outputRange:outputRange});


return{
opacity:opacity,
transform:[
{translateX:translateX},
{translateY:translateY}]};


}




function forVertical(props){var

layout=


props.layout,position=props.position,scene=props.scene;

if(!layout.isMeasured){
return forInitial(props);
}

var index=scene.index;
var inputRange=[index-1,index,index+0.99,index+1];
var height=layout.initHeight;

var opacity=position.interpolate({
inputRange:inputRange,
outputRange:[1,1,0.3,0]});


var translateX=0;
var translateY=position.interpolate({
inputRange:inputRange,
outputRange:[height,0,0,0]});


return{
opacity:opacity,
transform:[
{translateX:translateX},
{translateY:translateY}]};


}




function forFadeFromBottomAndroid(props){var

layout=


props.layout,position=props.position,scene=props.scene;

if(!layout.isMeasured){
return forInitial(props);
}

var index=scene.index;
var inputRange=[index-1,index,index+0.99,index+1];
var height=layout.initHeight;

var opacity=position.interpolate({
inputRange:inputRange,
outputRange:[0,1,1,0]});


var translateX=0;
var translateY=position.interpolate({
inputRange:inputRange,
outputRange:[50,0,0,0]});


return{
opacity:opacity,
transform:[
{translateX:translateX},
{translateY:translateY}]};


}

function canUseNativeDriver(isVertical){



return true;
}exports.default=

{
forHorizontal:forHorizontal,
forVertical:forVertical,
forFadeFromBottomAndroid:forFadeFromBottomAndroid,
canUseNativeDriver:canUseNativeDriver};

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/Drawer/DrawerNavigatorItems.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);





var _TouchableItem=__webpack_require__("./node_modules/react-navigation/lib/views/TouchableItem.js");var _TouchableItem2=_interopRequireDefault(_TouchableItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}




























var DrawerNavigatorItems=function DrawerNavigatorItems(_ref){var
navigation=_ref.navigation,
activeTintColor=_ref.activeTintColor,
activeBackgroundColor=_ref.activeBackgroundColor,
inactiveTintColor=_ref.inactiveTintColor,
inactiveBackgroundColor=_ref.inactiveBackgroundColor,
getLabel=_ref.getLabel,
renderIcon=_ref.renderIcon,
style=_ref.style;return(

_react2.default.createElement(_reactNative.View,{style:[styles.container,style]},
navigation.state.routes.map(function(route,index){
var focused=navigation.state.index===index;
var color=focused?activeTintColor:inactiveTintColor;
var backgroundColor=focused?activeBackgroundColor:inactiveBackgroundColor;
var scene={route:route,index:index,focused:focused,tintColor:color};
var icon=renderIcon(scene);
var label=getLabel(scene);
return(
_react2.default.createElement(_TouchableItem2.default,{
key:route.key,
onPress:function onPress(){
navigation.navigate('DrawerClose');
navigation.navigate(route.routeName);
},
delayPressIn:0},

_react2.default.createElement(_reactNative.View,{style:[styles.item,{backgroundColor:backgroundColor}]},
icon?
_react2.default.createElement(_reactNative.View,{style:[styles.icon,focused?null:styles.inactiveIcon]},
icon):

null,
typeof label==='string'?

_react2.default.createElement(_reactNative.Text,{style:[styles.label,{color:color}]},
label):


label)));




})));};



DrawerNavigatorItems.propTypes={
navigation:_react.PropTypes.object.isRequired,
activeTintColor:_react.PropTypes.string,
activeBackgroundColor:_react.PropTypes.string,
inactiveTintColor:_react.PropTypes.string,
inactiveBackgroundColor:_react.PropTypes.string,
style:_reactNative.View.propTypes.style};



DrawerNavigatorItems.defaultProps={
activeTintColor:'#2196f3',
activeBackgroundColor:'rgba(0, 0, 0, .04)',
inactiveTintColor:'rgba(0, 0, 0, .87)',
inactiveBackgroundColor:'transparent'};


var styles=_reactNative.StyleSheet.create({
container:{
marginVertical:4},

item:{
flexDirection:'row',
alignItems:'center'},

icon:{
marginHorizontal:16,
width:24,
alignItems:'center'},

inactiveIcon:{




opacity:0.62},

label:{
margin:16,
fontWeight:'bold'}});exports.default=



DrawerNavigatorItems;

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/Drawer/DrawerScreen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);

var _SceneView=__webpack_require__("./node_modules/react-navigation/lib/views/SceneView.js");var _SceneView2=_interopRequireDefault(_SceneView);
var _withCachedChildNavigation=__webpack_require__("./node_modules/react-navigation/lib/withCachedChildNavigation.js");var _withCachedChildNavigation2=_interopRequireDefault(_withCachedChildNavigation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





















DrawerScreen=function(_PureComponent){_inherits(DrawerScreen,_PureComponent);function DrawerScreen(){_classCallCheck(this,DrawerScreen);return _possibleConstructorReturn(this,(DrawerScreen.__proto__||Object.getPrototypeOf(DrawerScreen)).apply(this,arguments));}_createClass(DrawerScreen,[{key:'render',value:function render()


{var _props=
this.props,router=_props.router,navigation=_props.navigation,childNavigationProps=_props.childNavigationProps;var _navigation$state=
navigation.state,routes=_navigation$state.routes,index=_navigation$state.index;
var childNavigation=childNavigationProps[routes[index].key];
var Content=router.getComponentForRouteName(routes[index].routeName);
return(
_react2.default.createElement(_SceneView2.default,{
screenProps:this.props.screenProps,
component:Content,
navigation:childNavigation}));


}}]);return DrawerScreen;}(_react.PureComponent);exports.default=


(0,_withCachedChildNavigation2.default)(DrawerScreen);

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/Drawer/DrawerSidebar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);





var _withCachedChildNavigation=__webpack_require__("./node_modules/react-navigation/lib/withCachedChildNavigation.js");var _withCachedChildNavigation2=_interopRequireDefault(_withCachedChildNavigation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



























DrawerSidebar=function(_PureComponent){_inherits(DrawerSidebar,_PureComponent);function DrawerSidebar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,DrawerSidebar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=DrawerSidebar.__proto__||Object.getPrototypeOf(DrawerSidebar)).call.apply(_ref,[this].concat(args))),_this),_this.


_getScreenConfig=function(routeKey,configName){
var DrawerScreen=_this.props.router.getComponentForRouteName('DrawerClose');
return DrawerScreen.router.getScreenConfig(
_this.props.childNavigationProps[routeKey],
configName);

},_this.

_getLabel=function(_ref2){var focused=_ref2.focused,tintColor=_ref2.tintColor,route=_ref2.route;
var drawer=_this._getScreenConfig(route.key,'drawer');
if(drawer&&drawer.label){
return typeof drawer.label==='function'?
drawer.label({tintColor:tintColor,focused:focused}):
drawer.label;
}

var title=_this._getScreenConfig(route.key,'title');
if(typeof title==='string'){
return title;
}

return route.routeName;
},_this.

_renderIcon=function(_ref3){var focused=_ref3.focused,tintColor=_ref3.tintColor,route=_ref3.route;
var drawer=_this._getScreenConfig(route.key,'drawer');
if(drawer&&drawer.icon){
return typeof drawer.icon==='function'?
drawer.icon({tintColor:tintColor,focused:focused}):
drawer.icon;
}
return null;
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(DrawerSidebar,[{key:'render',value:function render()

{
var ContentComponent=this.props.contentComponent;
return(
_react2.default.createElement(_reactNative.View,{style:[styles.container,this.props.style]},
_react2.default.createElement(ContentComponent,_extends({},
this.props.contentOptions,{
navigation:this.props.navigation,
getLabel:this._getLabel,
renderIcon:this._renderIcon,
router:this.props.router}))));



}}]);return DrawerSidebar;}(_react.PureComponent);exports.default=


(0,_withCachedChildNavigation2.default)(DrawerSidebar);

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff',
paddingTop:_reactNative.Platform.OS==='ios'?20:0}});

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/Drawer/DrawerView.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNativeDrawerLayout=__webpack_require__("./node_modules/react-native-drawer-layout/dist/DrawerLayout.js");var _reactNativeDrawerLayout2=_interopRequireDefault(_reactNativeDrawerLayout);

var _addNavigationHelpers=__webpack_require__("./node_modules/react-navigation/lib/addNavigationHelpers.js");var _addNavigationHelpers2=_interopRequireDefault(_addNavigationHelpers);
var _DrawerNavigatorItems=__webpack_require__("./node_modules/react-navigation/lib/views/Drawer/DrawerNavigatorItems.js");var _DrawerNavigatorItems2=_interopRequireDefault(_DrawerNavigatorItems);
var _DrawerSidebar=__webpack_require__("./node_modules/react-navigation/lib/views/Drawer/DrawerSidebar.js");var _DrawerSidebar2=_interopRequireDefault(_DrawerSidebar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


































DrawerView=function(_PureComponent){_inherits(DrawerView,_PureComponent);function DrawerView(){var _ref;var _temp,_this,_ret;_classCallCheck(this,DrawerView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=DrawerView.__proto__||Object.getPrototypeOf(DrawerView)).call.apply(_ref,[this].concat(args))),_this),_this.























_handleDrawerOpen=function(){var
navigation=_this.props.navigation;var _navigation$state=
navigation.state,routes=_navigation$state.routes,index=_navigation$state.index;
if(routes[index].routeName!=='DrawerOpen'){
_this.props.navigation.navigate('DrawerOpen');
}
},_this.

_handleDrawerClose=function(){var
navigation=_this.props.navigation;var _navigation$state2=
navigation.state,routes=_navigation$state2.routes,index=_navigation$state2.index;
if(routes[index].routeName!=='DrawerClose'){
_this.props.navigation.navigate('DrawerClose');
}
},_this.

_updateScreenNavigation=function(
navigation)
{
var navigationState=navigation.state.routes.find(function(route){return route.routeName==='DrawerClose';});
if(_this._screenNavigationProp&&_this._screenNavigationProp.state===navigationState){
return;
}
_this._screenNavigationProp=(0,_addNavigationHelpers2.default)(_extends({},
navigation,{
state:navigationState}));

},_this.

_getNavigationState=function(
navigation)
{
var navigationState=navigation.state.routes.find(function(route){return route.routeName==='DrawerClose';});
return navigationState;
},_this.

_renderNavigationView=function(){return(
_react2.default.createElement(_DrawerSidebar2.default,{
navigation:_this._screenNavigationProp,
router:_this.props.router,
contentComponent:_this.props.contentComponent,
contentOptions:_this.props.contentOptions,
style:_this.props.style}));},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(DrawerView,[{key:'componentWillMount',value:function componentWillMount(){this._updateScreenNavigation(this.props.navigation);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(this.props.navigation.state.index!==nextProps.navigation.state.index){var _nextProps$navigation=nextProps.navigation.state,routes=_nextProps$navigation.routes,_index=_nextProps$navigation.index;if(routes[_index].routeName==='DrawerOpen'){this._drawer.openDrawer();}else{this._drawer.closeDrawer();}}this._updateScreenNavigation(nextProps.navigation);}},{key:'render',value:function render()





{var _this2=this;
var DrawerScreen=this.props.router.getComponentForRouteName('DrawerClose');
return(
_react2.default.createElement(_reactNativeDrawerLayout2.default,{
ref:function ref(c){return _this2._drawer=c;},
drawerWidth:this.props.drawerWidth,
onDrawerOpen:this._handleDrawerOpen,
onDrawerClose:this._handleDrawerClose,
renderNavigationView:this._renderNavigationView,
drawerPosition:
this.props.drawerPosition==='right'?
_reactNativeDrawerLayout2.default.positions.Right:_reactNativeDrawerLayout2.default.positions.Left},


_react2.default.createElement(DrawerScreen,{
screenProps:this.props.screenProps,
navigation:this._screenNavigationProp})));



}}]);return DrawerView;}(_react.PureComponent);DrawerView.Items=_DrawerNavigatorItems2.default;exports.default=DrawerView;

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/Header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);

var _reactNative=__webpack_require__(1);






var _ReactComponentWithPureRenderMixin=__webpack_require__(2);var _ReactComponentWithPureRenderMixin2=_interopRequireDefault(_ReactComponentWithPureRenderMixin);

var _HeaderTitle=__webpack_require__("./node_modules/react-navigation/lib/views/HeaderTitle.js");var _HeaderTitle2=_interopRequireDefault(_HeaderTitle);
var _HeaderBackButton=__webpack_require__("./node_modules/react-navigation/lib/views/HeaderBackButton.js");var _HeaderBackButton2=_interopRequireDefault(_HeaderBackButton);
var _HeaderStyleInterpolator=__webpack_require__("./node_modules/react-navigation/lib/views/HeaderStyleInterpolator.js");var _HeaderStyleInterpolator2=_interopRequireDefault(_HeaderStyleInterpolator);
var _PropTypes=__webpack_require__("./node_modules/react-navigation/lib/PropTypes.js");var _PropTypes2=_interopRequireDefault(_PropTypes);
var _addNavigationHelpers=__webpack_require__("./node_modules/react-navigation/lib/addNavigationHelpers.js");var _addNavigationHelpers2=_interopRequireDefault(_addNavigationHelpers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}








































var APPBAR_HEIGHT=_reactNative.Platform.OS==='ios'?44:56;
var STATUSBAR_HEIGHT=_reactNative.Platform.OS==='ios'?20:0;var

Header=function(_React$PureComponent){_inherits(Header,_React$PureComponent);function Header(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Header);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Header.__proto__||Object.getPrototypeOf(Header)).call.apply(_ref,[this].concat(args))),_this),_this.


















state={
widths:{}},_this.





































_renderTitleComponent=function(props){
var titleStyle=_this._getHeaderTitleStyle(props.navigation);
var color=_this._getHeaderTintColor(props.navigation);
var title=_this._getHeaderTitle(props.navigation);
return(
_react2.default.createElement(_HeaderTitle2.default,{
style:[color?{color:color}:null,titleStyle]},

title));


},_this.

_renderLeftComponent=function(props){
if(props.scene.index===0||!props.onNavigateBack){
return null;
}
var tintColor=_this._getHeaderTintColor(props.navigation);
var previousNavigation=(0,_addNavigationHelpers2.default)(_extends({},
props.navigation,{
state:props.scenes[props.scene.index-1].route}));

var backButtonTitle=_this._getBackButtonTitle(previousNavigation);
return(
_react2.default.createElement(_HeaderBackButton2.default,{
onPress:props.onNavigateBack,
tintColor:tintColor,
title:backButtonTitle}));


},_this.

_renderRightComponent=function(){return null;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Header,[{key:'_getHeaderTitle',value:function _getHeaderTitle(navigation){var header=this.props.router.getScreenConfig(navigation,'header');var title=void 0;if(header&&header.title){title=header.title;}else{title=this.props.router.getScreenConfig(navigation,'title');}return typeof title==='string'?title:undefined;}},{key:'_getBackButtonTitle',value:function _getBackButtonTitle(navigation){var header=this.props.router.getScreenConfig(navigation,'header')||{};if(header.backTitle===null){return undefined;}return header.backTitle||this._getHeaderTitle(navigation);}},{key:'_getHeaderTintColor',value:function _getHeaderTintColor(navigation){var header=this.props.router.getScreenConfig(navigation,'header');if(header&&header.tintColor){return header.tintColor;}return undefined;}},{key:'_getHeaderTitleStyle',value:function _getHeaderTitleStyle(navigation){var header=this.props.router.getScreenConfig(navigation,'header');if(header&&header.titleStyle){return header.titleStyle;}return undefined;}},{key:'_renderLeft',value:function _renderLeft(

props){
return this._renderSubView(
props,
'left',
this.props.renderLeftComponent,
this._renderLeftComponent,
_HeaderStyleInterpolator2.default.forLeft);

}},{key:'_renderTitle',value:function _renderTitle(

props){
return this._renderSubView(
props,
'title',
this.props.renderTitleComponent,
this._renderTitleComponent,
_HeaderStyleInterpolator2.default.forCenter);

}},{key:'_renderRight',value:function _renderRight(

props){
return this._renderSubView(
props,
'right',
this.props.renderRightComponent,
this._renderRightComponent,
_HeaderStyleInterpolator2.default.forRight);

}},{key:'_renderSubView',value:function _renderSubView(


props,
name,
renderer,
defaultRenderer,
styleInterpolator)
{var _this2=this;var

scene=

props.scene,navigationState=props.navigationState;var

index=


scene.index,isStale=scene.isStale,key=scene.key;

var offset=navigationState.index-index;

if(Math.abs(offset)>2){


return null;
}

var subViewProps=_extends({},
props,{
onNavigateBack:this.props.onNavigateBack});


var subView=renderer(subViewProps);
if(subView===undefined){
subView=defaultRenderer(subViewProps);
}

var pointerEvents=offset!==0||isStale?'none':'box-none';



var onLayoutIOS=_reactNative.Platform.OS==='ios'&&name==='title'?
function(e){
_this2.setState({
widths:_extends({},
_this2.state.widths,_defineProperty({},
key,e.nativeEvent.layout.width))});


}:
undefined;

var titleWidth=name==='left'||name==='right'?
this.state.widths[key]:
undefined;

return(
_react2.default.createElement(_reactNative.Animated.View,{
pointerEvents:pointerEvents,
onLayout:onLayoutIOS,
key:name+'_'+key,
style:[
titleWidth&&{
width:(props.layout.initWidth-titleWidth)/2},

styles.item,
styles[name],
styleInterpolator(props)]},


subView));


}},{key:'_renderHeader',value:function _renderHeader(

props){
var left=this._renderLeft(props);
var right=this._renderRight(props);
var title=this._renderTitle(props);

return(
_react2.default.createElement(_reactNative.View,{
style:[_reactNative.StyleSheet.absoluteFill,styles.header],
key:'scene_'+props.scene.key},

left,
title,
right));


}},{key:'render',value:function render()

{var _this3=this;
var appBar=void 0;

if(this.props.mode==='float'){
var scenesProps=this.props.scenes.
map(function(scene,index){return _extends({},
_PropTypes2.default.extractSceneRendererProps(_this3.props),{
scene:scene,
index:index,
navigation:(0,_addNavigationHelpers2.default)(_extends({},
_this3.props.navigation,{
state:scene.route}))});});



appBar=scenesProps.map(this._renderHeader,this);
}else{
appBar=this._renderHeader(_extends({},
this.props,{
position:new _reactNative.Animated.Value(this.props.scene.index),
progress:new _reactNative.Animated.Value(0)}));

}var _props=


this.props,scenes=_props.scenes,scene=_props.scene,style=_props.style,position=_props.position,progress=_props.progress,rest=_objectWithoutProperties(_props,['scenes','scene','style','position','progress']);

return(
_react2.default.createElement(_reactNative.Animated.View,_extends({},rest,{style:[styles.container,style]}),
_react2.default.createElement(_reactNative.View,{style:styles.appBar},
appBar)));



}}]);return Header;}(_react2.default.PureComponent);Header.HEIGHT=APPBAR_HEIGHT+STATUSBAR_HEIGHT;Header.Title=_HeaderTitle2.default;Header.BackButton=_HeaderBackButton2.default;Header.propTypes=_extends({},_PropTypes2.default.SceneRendererProps,{onNavigateBack:_react.PropTypes.func,renderLeftComponent:_react.PropTypes.func,renderRightComponent:_react.PropTypes.func,renderTitleComponent:_react.PropTypes.func,router:_react.PropTypes.object,style:_react.PropTypes.any});


var styles=_reactNative.StyleSheet.create({
container:{
paddingTop:STATUSBAR_HEIGHT,
backgroundColor:_reactNative.Platform.OS==='ios'?'#EFEFF2':'#FFF',
height:STATUSBAR_HEIGHT+APPBAR_HEIGHT,
shadowColor:'black',
shadowOpacity:0.1,
shadowRadius:_reactNative.StyleSheet.hairlineWidth,
shadowOffset:{
height:_reactNative.StyleSheet.hairlineWidth},

elevation:4},

appBar:{
flex:1},

header:{
flexDirection:'row'},

item:{
justifyContent:'center',
backgroundColor:'transparent'},

title:_reactNative.Platform.OS==='android'?
{
flex:1,
alignItems:'flex-start'}:

{},
left:{
alignItems:'flex-start'},

right:{
alignItems:'flex-end'}});exports.default=



Header;

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/HeaderBackButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);










var _TouchableItem=__webpack_require__("./node_modules/react-navigation/lib/views/TouchableItem.js");var _TouchableItem2=_interopRequireDefault(_TouchableItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


















HeaderBackButton=function(_React$PureComponent){_inherits(HeaderBackButton,_React$PureComponent);function HeaderBackButton(){var _ref;var _temp,_this,_ret;_classCallCheck(this,HeaderBackButton);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=HeaderBackButton.__proto__||Object.getPrototypeOf(HeaderBackButton)).call.apply(_ref,[this].concat(args))),_this),_this.














state={},_this.

_onContainerLayout=function(e){
if(_reactNative.Platform.OS!=='ios'){
return;
}
_this.setState({
containerWidth:e.nativeEvent.layout.width});

},_this.

_onTextLayout=function(e){
if(_this.state.initialTextWidth){
return;
}
_this.setState({
initialTextWidth:e.nativeEvent.layout.x+e.nativeEvent.layout.width});

},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(HeaderBackButton,[{key:'render',value:function render()

{var _props=
this.props,onPress=_props.onPress,title=_props.title,tintColor=_props.tintColor,truncatedTitle=_props.truncatedTitle;

var renderTruncated=this.state.containerWidth&&this.state.initialTextWidth?
this.state.containerWidth<this.state.initialTextWidth:
false;

return(
_react2.default.createElement(_TouchableItem2.default,{
delayPressIn:0,
onPress:onPress,
style:styles.container,
borderless:true},

_react2.default.createElement(_reactNative.View,{
onLayout:this._onContainerLayout,
style:styles.container},

_react2.default.createElement(_reactNative.Image,{
style:[
styles.icon,
title&&styles.iconWithTitle,
{tintColor:tintColor}],

source:__webpack_require__("./node_modules/react-navigation/lib/views/assets/back-icon.png")}),

_reactNative.Platform.OS==='ios'&&title&&
_react2.default.createElement(_reactNative.Text,{
ellipsizeMode:'middle',
onLayout:this._onTextLayout,
style:[styles.title,{color:tintColor}],
numberOfLines:1},

renderTruncated?truncatedTitle:title))));





}}]);return HeaderBackButton;}(_react2.default.PureComponent);HeaderBackButton.propTypes={onPress:_react.PropTypes.func.isRequired,title:_react.PropTypes.string,tintColor:_react.PropTypes.string,truncatedTitle:_react.PropTypes.string};HeaderBackButton.defaultProps={tintColor:_reactNative.Platform.select({ios:'#037aff'}),truncatedTitle:'Back'};


var styles=_reactNative.StyleSheet.create({
container:{
alignItems:'center',
flexDirection:'row',
backgroundColor:'transparent'},

title:{
fontSize:17,
paddingRight:10},

icon:_reactNative.Platform.OS==='ios'?
{
height:20,
width:12,
marginLeft:10,
marginRight:22,
marginVertical:12,
resizeMode:'contain',
transform:[{scaleX:_reactNative.I18nManager.isRTL?-1:1}]}:

{
height:24,
width:24,
margin:16,
resizeMode:'contain',
transform:[{scaleX:_reactNative.I18nManager.isRTL?-1:1}]},

iconWithTitle:_reactNative.Platform.OS==='ios'?
{
marginRight:5}:

{}});exports.default=


HeaderBackButton;

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/HeaderStyleInterpolator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});

var _reactNative=__webpack_require__(1);


















function forLeft(props){var
position=props.position,scene=props.scene;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,1,0]})};


}

function forCenter(props){var
position=props.position,scene=props.scene;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,1,0]}),

transform:[
{
translateX:position.interpolate({
inputRange:[index-1,index+1],
outputRange:_reactNative.I18nManager.isRTL?
[-200,200]:
[200,-200]})}]};




}

function forRight(props){var
position=props.position,scene=props.scene;var
index=scene.index;
return{
opacity:position.interpolate({
inputRange:[index-1,index,index+1],
outputRange:[0,1,0]})};


}exports.default=

{
forLeft:forLeft,
forCenter:forCenter,
forRight:forRight};

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/HeaderTitle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);

var _reactNative=__webpack_require__(1);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}














var HeaderTitle=function HeaderTitle(_ref){var style=_ref.style,rest=_objectWithoutProperties(_ref,['style']);return(
_react2.default.createElement(_reactNative.Text,_extends({numberOfLines:1},rest,{style:[styles.title,style]})));};


var styles=_reactNative.StyleSheet.create({
title:{
fontSize:_reactNative.Platform.OS==='ios'?17:18,
fontWeight:_reactNative.Platform.OS==='ios'?'600':'500',
color:'rgba(0, 0, 0, .9)',
textAlign:_reactNative.Platform.OS==='ios'?'center':'left',
marginHorizontal:16}});



HeaderTitle.propTypes={
style:_reactNative.Text.propTypes.style};exports.default=


HeaderTitle;

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/PointerEventsContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=




















create;var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");var _invariant2=_interopRequireDefault(_invariant);var _AnimatedValueSubscription=__webpack_require__("./node_modules/react-navigation/lib/views/AnimatedValueSubscription.js");var _AnimatedValueSubscription2=_interopRequireDefault(_AnimatedValueSubscription);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MIN_POSITION_OFFSET=0.01;function create(
Component)
{var
Container=function(_React$Component){_inherits(Container,_React$Component);








function Container(props,context){_classCallCheck(this,Container);var _this=_possibleConstructorReturn(this,(Container.__proto__||Object.getPrototypeOf(Container)).call(this,
props,context));
_this._pointerEvents=_this._computePointerEvents();return _this;
}_createClass(Container,[{key:'componentWillMount',value:function componentWillMount()

{
this._onPositionChange=this._onPositionChange.bind(this);
this._onComponentRef=this._onComponentRef.bind(this);
}},{key:'componentDidMount',value:function componentDidMount()

{
this._bindPosition(this.props);
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._positionListener&&this._positionListener.remove();
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
this._bindPosition(nextProps);
}},{key:'render',value:function render()

{
this._pointerEvents=this._computePointerEvents();
return(
_react2.default.createElement(Component,_extends({},
this.props,{
pointerEvents:this._pointerEvents,
onComponentRef:this._onComponentRef})));


}},{key:'_onComponentRef',value:function _onComponentRef(

component){
this._component=component;
if(component){
(0,_invariant2.default)(
typeof component.setNativeProps==='function',
'component must implement method `setNativeProps`');

}
}},{key:'_bindPosition',value:function _bindPosition(

props){
this._positionListener&&this._positionListener.remove();
this._positionListener=new _AnimatedValueSubscription2.default(
props.position,
this._onPositionChange);

}},{key:'_onPositionChange',value:function _onPositionChange()

{
if(this._component){
var pointerEvents=this._computePointerEvents();
if(this._pointerEvents!==pointerEvents){
this._pointerEvents=pointerEvents;
this._component.setNativeProps({pointerEvents:pointerEvents});
}
}
}},{key:'_computePointerEvents',value:function _computePointerEvents()

{var _props=




this.props,navigationState=_props.navigationState,position=_props.position,scene=_props.scene;

if(scene.isStale||navigationState.index!==scene.index){

return scene.index>navigationState.index?
'box-only':
'none';
}

var offset=position.__getAnimatedValue()-navigationState.index;
if(Math.abs(offset)>MIN_POSITION_OFFSET){



return'box-only';
}

return'auto';
}}]);return Container;}(_react2.default.Component);

return Container;
}

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/SceneView.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}














var screenPropsWarningShown=false;var

SceneView=function(_PureComponent){_inherits(SceneView,_PureComponent);function SceneView(){_classCallCheck(this,SceneView);return _possibleConstructorReturn(this,(SceneView.__proto__||Object.getPrototypeOf(SceneView)).apply(this,arguments));}_createClass(SceneView,[{key:'getChildContext',value:function getChildContext()






{
return{
navigation:this.props.navigation};

}},{key:'componentWillMount',value:function componentWillMount()

{
if(this.props.screenProps!==undefined&&!screenPropsWarningShown){
console.warn(
'Behaviour of screenProps has changed from initial beta. '+
'Components will now receive it as `this.props.screenProps` instead.\n'+
'This warning will be removed in future.');

screenPropsWarningShown=true;
}
}},{key:'render',value:function render()

{var _props=




this.props,screenProps=_props.screenProps,navigation=_props.navigation,Component=_props.component;

return(
_react2.default.createElement(Component,{
screenProps:screenProps,
navigation:navigation}));


}}]);return SceneView;}(_react.PureComponent);SceneView.childContextTypes={navigation:_react2.default.PropTypes.object.isRequired};exports.default=SceneView;

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/ScenesReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=
















































































ScenesReducer;var _invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");var _invariant2=_interopRequireDefault(_invariant);var _shallowEqual=__webpack_require__("./node_modules/fbjs/lib/shallowEqual.js");var _shallowEqual2=_interopRequireDefault(_shallowEqual);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var SCENE_KEY_PREFIX='scene_';function compareKey(one,two){var delta=one.length-two.length;if(delta>0){return 1;}if(delta<0){return-1;}return one>two?1:-1;}function compareScenes(one,two){if(one.index>two.index){return 1;}if(one.index<two.index){return-1;}return compareKey(one.key,two.key);}function areScenesShallowEqual(one,two){return one.key===two.key&&one.index===two.index&&one.isStale===two.isStale&&one.isActive===two.isActive&&areRoutesShallowEqual(one.route,two.route);}function areRoutesShallowEqual(one,two){if(!one||!two){return one===two;}if(one.key!==two.key){return false;}return(0,_shallowEqual2.default)(one,two);}function ScenesReducer(
scenes,
nextState,
prevState)
{
if(prevState===nextState){
return scenes;
}

var prevScenes=new Map();
var freshScenes=new Map();
var staleScenes=new Map();


scenes.forEach(function(scene){var
key=scene.key;
if(scene.isStale){
staleScenes.set(key,scene);
}
prevScenes.set(key,scene);
});

var nextKeys=new Set();
nextState.routes.forEach(function(route,index){
var key=SCENE_KEY_PREFIX+route.key;
var scene={
index:index,
isActive:false,
isStale:false,
key:key,
route:route};

(0,_invariant2.default)(
!nextKeys.has(key),
'navigationState.routes['+index+'].key "'+key+'" conflicts with '+
'another route!');

nextKeys.add(key);

if(staleScenes.has(key)){


staleScenes.delete(key);
}
freshScenes.set(key,scene);
});

if(prevState){

prevState.routes.forEach(function(route,index){
var key=SCENE_KEY_PREFIX+route.key;
if(freshScenes.has(key)){
return;
}
staleScenes.set(key,{
index:index,
isActive:false,
isStale:true,
key:key,
route:route});

});
}

var nextScenes=[];

var mergeScene=function mergeScene(nextScene){var
key=nextScene.key;
var prevScene=prevScenes.has(key)?prevScenes.get(key):null;
if(prevScene&&areScenesShallowEqual(prevScene,nextScene)){


nextScenes.push(prevScene);
}else{
nextScenes.push(nextScene);
}
};

staleScenes.forEach(mergeScene);
freshScenes.forEach(mergeScene);

nextScenes.sort(compareScenes);

var activeScenesCount=0;
nextScenes.forEach(function(scene,ii){
var isActive=!scene.isStale&&scene.index===nextState.index;
if(isActive!==scene.isActive){
nextScenes[ii]=_extends({},
scene,{
isActive:isActive});

}
if(isActive){
activeScenesCount++;
}
});

(0,_invariant2.default)(
activeScenesCount===1,
'there should always be only one scene active, not %s.',
activeScenesCount);


if(nextScenes.length!==scenes.length){
return nextScenes;
}

if(nextScenes.some(
function(scene,index){return!areScenesShallowEqual(scenes[index],scene);}))
{
return nextScenes;
}


return scenes;
}

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/TabView/TabBarBottom.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);





var _TabBarIcon=__webpack_require__("./node_modules/react-navigation/lib/views/TabView/TabBarIcon.js");var _TabBarIcon2=_interopRequireDefault(_TabBarIcon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



































TabBarBottom=function(_PureComponent){_inherits(TabBarBottom,_PureComponent);function TabBarBottom(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TabBarBottom);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TabBarBottom.__proto__||Object.getPrototypeOf(TabBarBottom)).call.apply(_ref,[this].concat(args))),_this),_this.













_renderLabel=function(scene){var _this$props=







_this.props,position=_this$props.position,navigationState=_this$props.navigationState,activeTintColor=_this$props.activeTintColor,inactiveTintColor=_this$props.inactiveTintColor,labelStyle=_this$props.labelStyle,showLabel=_this$props.showLabel;
if(showLabel===false){
return null;
}var
index=scene.index;var
routes=navigationState.routes;

var inputRange=[-1].concat(_toConsumableArray(routes.map(function(x,i){return i;})));
var outputRange=inputRange.map(function(inputIndex){return(
inputIndex===index?activeTintColor:inactiveTintColor);});

var color=position.interpolate({
inputRange:inputRange,
outputRange:outputRange});


var label=_this.props.getLabel(scene);
if(typeof label==='string'){
return(
_react2.default.createElement(_reactNative.Animated.Text,{style:[styles.label,{color:color},labelStyle]},
label));


}

return label;
},_this.

_renderIcon=function(scene){var _this$props2=







_this.props,position=_this$props2.position,navigationState=_this$props2.navigationState,activeTintColor=_this$props2.activeTintColor,inactiveTintColor=_this$props2.inactiveTintColor,renderIcon=_this$props2.renderIcon,showIcon=_this$props2.showIcon;
if(showIcon===false){
return null;
}
return(
_react2.default.createElement(_TabBarIcon2.default,{
position:position,
navigationState:navigationState,
activeTintColor:activeTintColor,
inactiveTintColor:inactiveTintColor,
renderIcon:renderIcon,
scene:scene,
style:styles.icon}));


},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TabBarBottom,[{key:'render',value:function render()

{var _this2=this;var _props=







this.props,position=_props.position,navigationState=_props.navigationState,jumpToIndex=_props.jumpToIndex,activeBackgroundColor=_props.activeBackgroundColor,inactiveBackgroundColor=_props.inactiveBackgroundColor,style=_props.style;var
routes=navigationState.routes;

var inputRange=[-1].concat(_toConsumableArray(routes.map(function(x,i){return i;})));
return(
_react2.default.createElement(_reactNative.View,{style:[styles.tabBar,style]},
navigationState.routes.map(function(route,index){
var focused=index===navigationState.index;
var scene={route:route,index:index,focused:focused};
var outputRange=inputRange.map(function(inputIndex){return(
inputIndex===index?activeBackgroundColor:inactiveBackgroundColor);});

var backgroundColor=position.interpolate({
inputRange:inputRange,
outputRange:outputRange});

var justifyContent=_this2.props.showIcon?'flex-end':'center';
return(
_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{key:route.key,onPress:function onPress(){return jumpToIndex(index);}},
_react2.default.createElement(_reactNative.Animated.View,{style:[styles.tab,{backgroundColor:backgroundColor,justifyContent:justifyContent}]},
_this2._renderIcon(scene),
_this2._renderLabel(scene))));



})));


}}]);return TabBarBottom;}(_react.PureComponent);TabBarBottom.defaultProps={activeTintColor:'#3478f6',activeBackgroundColor:'transparent',inactiveTintColor:'#929292',inactiveBackgroundColor:'transparent',showLabel:true,showIcon:true};exports.default=TabBarBottom;


var styles=_reactNative.StyleSheet.create({
tabBar:{
height:49,
flexDirection:'row',
borderTopWidth:_reactNative.StyleSheet.hairlineWidth,
borderTopColor:'rgba(0, 0, 0, .2)',
backgroundColor:'#f4f4f4'},

tab:{
flex:1,
alignItems:'stretch',
justifyContent:'flex-end'},

icon:{
flexGrow:1},

label:{
textAlign:'center',
fontSize:10,
marginBottom:1.5,
backgroundColor:'transparent'}});

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/TabView/TabBarIcon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

























TabBarIcon=function(_PureComponent){_inherits(TabBarIcon,_PureComponent);function TabBarIcon(){_classCallCheck(this,TabBarIcon);return _possibleConstructorReturn(this,(TabBarIcon.__proto__||Object.getPrototypeOf(TabBarIcon)).apply(this,arguments));}_createClass(TabBarIcon,[{key:'render',value:function render()


{var _props=







this.props,position=_props.position,scene=_props.scene,navigationState=_props.navigationState,activeTintColor=_props.activeTintColor,inactiveTintColor=_props.inactiveTintColor,style=_props.style;var
route=scene.route,index=scene.index;var
routes=navigationState.routes;

var inputRange=[-1].concat(_toConsumableArray(routes.map(function(x,i){return i;})));
var activeOpacity=position.interpolate({
inputRange:inputRange,
outputRange:inputRange.map(function(i){return i===index?1:0;})});

var inactiveOpacity=position.interpolate({
inputRange:inputRange,
outputRange:inputRange.map(function(i){return i===index?0:1;})});



return(
_react2.default.createElement(_reactNative.View,{style:style},
_react2.default.createElement(_reactNative.Animated.View,{style:[styles.icon,{opacity:activeOpacity}]},
this.props.renderIcon({
route:route,
index:index,
focused:true,
tintColor:activeTintColor})),


_react2.default.createElement(_reactNative.Animated.View,{style:[styles.icon,{opacity:inactiveOpacity}]},
this.props.renderIcon({
route:route,
index:index,
focused:false,
tintColor:inactiveTintColor}))));




}}]);return TabBarIcon;}(_react.PureComponent);exports.default=TabBarIcon;


var styles=_reactNative.StyleSheet.create({
icon:{



position:'absolute',
top:0,
left:0,
right:0,
bottom:0,
alignItems:'center',
justifyContent:'center'}});

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/TabView/TabBarTop.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);



var _reactNativeTabView=__webpack_require__("./node_modules/react-native-tab-view/index.js");
var _TabBarIcon=__webpack_require__("./node_modules/react-navigation/lib/views/TabView/TabBarIcon.js");var _TabBarIcon2=_interopRequireDefault(_TabBarIcon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
































TabBarTop=function(_PureComponent){_inherits(TabBarTop,_PureComponent);function TabBarTop(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TabBarTop);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TabBarTop.__proto__||Object.getPrototypeOf(TabBarTop)).call.apply(_ref,[this].concat(args))),_this),_this.











_renderLabel=function(scene){var _this$props=








_this.props,position=_this$props.position,navigationState=_this$props.navigationState,activeTintColor=_this$props.activeTintColor,inactiveTintColor=_this$props.inactiveTintColor,showLabel=_this$props.showLabel,upperCaseLabel=_this$props.upperCaseLabel,labelStyle=_this$props.labelStyle;
if(showLabel===false){
return null;
}var
index=scene.index;var
routes=navigationState.routes;

var inputRange=[-1].concat(_toConsumableArray(routes.map(function(x,i){return i;})));
var outputRange=inputRange.map(function(inputIndex){return(
inputIndex===index?activeTintColor:inactiveTintColor);});

var color=position.interpolate({
inputRange:inputRange,
outputRange:outputRange});


var label=_this.props.getLabel(scene);
if(typeof label==='string'){
return(
_react2.default.createElement(_reactNative.Animated.Text,{style:[styles.label,{color:color},labelStyle]},
upperCaseLabel?label.toUpperCase():label));


}

return label;
},_this.

_renderIcon=function(scene){var _this$props2=







_this.props,position=_this$props2.position,navigationState=_this$props2.navigationState,activeTintColor=_this$props2.activeTintColor,inactiveTintColor=_this$props2.inactiveTintColor,renderIcon=_this$props2.renderIcon,showIcon=_this$props2.showIcon;
if(showIcon===false){
return null;
}
return(
_react2.default.createElement(_TabBarIcon2.default,{
position:position,
navigationState:navigationState,
activeTintColor:activeTintColor,
inactiveTintColor:inactiveTintColor,
renderIcon:renderIcon,
scene:scene,
style:styles.icon}));


},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TabBarTop,[{key:'render',value:function render()

{

var props=this.props;

return(
_react2.default.createElement(_reactNativeTabView.TabBar,_extends({},
props,{
renderIcon:this._renderIcon,
renderLabel:this._renderLabel})));


}}]);return TabBarTop;}(_react.PureComponent);TabBarTop.defaultProps={activeTintColor:'#fff',inactiveTintColor:'#fff',showIcon:false,showLabel:true,upperCaseLabel:true};exports.default=TabBarTop;


var styles=_reactNative.StyleSheet.create({
icon:{
height:24,
width:24},

label:{
textAlign:'center',
fontSize:13,
margin:8,
backgroundColor:'transparent'}});

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/TabView/TabView.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);



var _reactNativeTabView=__webpack_require__("./node_modules/react-native-tab-view/index.js");





var _TabBarTop=__webpack_require__("./node_modules/react-navigation/lib/views/TabView/TabBarTop.js");var _TabBarTop2=_interopRequireDefault(_TabBarTop);
var _TabBarBottom=__webpack_require__("./node_modules/react-navigation/lib/views/TabView/TabBarBottom.js");var _TabBarBottom2=_interopRequireDefault(_TabBarBottom);
var _SceneView=__webpack_require__("./node_modules/react-navigation/lib/views/SceneView.js");var _SceneView2=_interopRequireDefault(_SceneView);
var _withCachedChildNavigation=__webpack_require__("./node_modules/react-navigation/lib/withCachedChildNavigation.js");var _withCachedChildNavigation2=_interopRequireDefault(_withCachedChildNavigation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
































var TabViewPager=void 0;

switch(_reactNative.Platform.OS){
case'android':
TabViewPager=_reactNativeTabView.TabViewPagerAndroid;
break;
case'ios':
TabViewPager=_reactNativeTabView.TabViewPagerScroll;
break;
default:
TabViewPager=_reactNativeTabView.TabViewPagerPan;}var


TabView=function(_PureComponent){_inherits(TabView,_PureComponent);function TabView(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TabView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TabView.__proto__||Object.getPrototypeOf(TabView)).call.apply(_ref,[this].concat(args))),_this),_this.






_handlePageChanged=function(index){var
navigation=_this.props.navigation;
navigation.navigate(
navigation.state.routes[index].routeName);
},_this.

_renderScene=function(_ref2){var route=_ref2.route;
var TabComponent=_this.props.router.getComponentForRouteName(route.routeName);
return(
_react2.default.createElement(_SceneView2.default,{
screenProps:_this.props.screenProps,
component:TabComponent,
navigation:_this.props.childNavigationProps[route.key]}));


},_this.

_getLabel=function(_ref3){var focused=_ref3.focused,route=_ref3.route,tintColor=_ref3.tintColor;
var tabBar=_this.props.router.getScreenConfig(
_this.props.childNavigationProps[route.key],
'tabBar');


if(tabBar&&tabBar.label){
return typeof tabBar.label==='function'?
tabBar.label({tintColor:tintColor,focused:focused}):
tabBar.label;
}

var title=_this.props.router.getScreenConfig(
_this.props.childNavigationProps[route.key],
'title');

if(typeof title==='string'){
return title;
}

return route.routeName;
},_this.

_renderIcon=function(_ref4){var focused=_ref4.focused,route=_ref4.route,tintColor=_ref4.tintColor;
var tabBar=_this.props.router.getScreenConfig(
_this.props.childNavigationProps[route.key],
'tabBar');

if(tabBar&&tabBar.icon){
return typeof tabBar.icon==='function'?
tabBar.icon({tintColor:tintColor,focused:focused}):
tabBar.icon;
}
return null;
},_this.

_renderTabBar=function(props){var _this$props=




_this.props,tabBarOptions=_this$props.tabBarOptions,TabBarComponent=_this$props.tabBarComponent,animationEnabled=_this$props.animationEnabled;
if(typeof TabBarComponent==='undefined'){
return null;
}
return(
_react2.default.createElement(TabBarComponent,_extends({},
props,
tabBarOptions,{
navigation:_this.props.navigation,
getLabel:_this._getLabel,
renderIcon:_this._renderIcon,
animationEnabled:animationEnabled})));


},_this.

_renderPager=function(props){var _this$props2=



_this.props,swipeEnabled=_this$props2.swipeEnabled,animationEnabled=_this$props2.animationEnabled;

return(
_react2.default.createElement(TabViewPager,_extends({},
props,{
swipeEnabled:swipeEnabled,
animationEnabled:animationEnabled})));


},_this.

_configureTransition=function(){return null;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TabView,[{key:'render',value:function render()

{var _props=






this.props,navigation=_props.navigation,tabBarComponent=_props.tabBarComponent,tabBarPosition=_props.tabBarPosition,animationEnabled=_props.animationEnabled,lazyLoad=_props.lazyLoad;

var renderHeader=void 0;
var renderFooter=void 0;var

state=this.props.navigation.state;
var tabBar=this.props.router.getScreenConfig(this.props.childNavigationProps[state.routes[state.index].key],'tabBar');

var tabBarVisible=tabBar?tabBar.visible!==false:true;

if(tabBarComponent!==undefined&&tabBarVisible){
if(tabBarPosition==='bottom'){
renderFooter=this._renderTabBar;
}else{
renderHeader=this._renderTabBar;
}
}

var configureTransition=void 0;

if(animationEnabled===false){
configureTransition=this._configureTransition;
}

return(

_react2.default.createElement(_reactNativeTabView.TabViewAnimated,{
style:styles.container,
navigationState:navigation.state,
lazy:lazyLoad,
renderHeader:renderHeader,
renderFooter:renderFooter,
renderScene:this._renderScene,
renderPager:this._renderPager,
configureTransition:configureTransition,
onRequestChangeTab:this._handlePageChanged}));


}}]);return TabView;}(_react.PureComponent);TabView.TabBarTop=_TabBarTop2.default;TabView.TabBarBottom=_TabBarBottom2.default;


var TabViewEnhanced=(0,_withCachedChildNavigation2.default)(TabView);

TabViewEnhanced.TabBarTop=_TabBarTop2.default;
TabViewEnhanced.TabBarBottom=_TabBarBottom2.default;exports.default=

TabViewEnhanced;

var styles=_reactNative.StyleSheet.create({
container:{
flex:1}});

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/TouchableItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();










var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}









var ANDROID_VERSION_LOLLIPOP=21;var















TouchableItem=function(_Component){_inherits(TouchableItem,_Component);function TouchableItem(){_classCallCheck(this,TouchableItem);return _possibleConstructorReturn(this,(TouchableItem.__proto__||Object.getPrototypeOf(TouchableItem)).apply(this,arguments));}_createClass(TouchableItem,[{key:'render',value:function render()














{








if(_reactNative.Platform.OS==='android'&&_reactNative.Platform.Version>=ANDROID_VERSION_LOLLIPOP){var _props=
this.props,_style=_props.style,rest=_objectWithoutProperties(_props,['style']);

return(
_react2.default.createElement(_reactNative.TouchableNativeFeedback,_extends({},
rest,{
style:null,
background:
_reactNative.TouchableNativeFeedback.Ripple(
this.props.pressColor,
this.props.borderless)}),



_react2.default.createElement(_reactNative.View,{style:this.props.style},
_react.Children.only(this.props.children))));



}

return(
_react2.default.createElement(_reactNative.TouchableOpacity,this.props,
this.props.children));


}}]);return TouchableItem;}(_react.Component);TouchableItem.propTypes={onPress:_react.PropTypes.func,delayPressIn:_react.PropTypes.number,borderless:_react.PropTypes.bool,pressColor:_react.PropTypes.string,activeOpacity:_react.PropTypes.number,children:_react.PropTypes.node.isRequired,style:_reactNative.View.propTypes.style};TouchableItem.defaultProps={pressColor:'rgba(0, 0, 0, .32)'};exports.default=TouchableItem;

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/TransitionConfigs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});







var _CardStackStyleInterpolator=__webpack_require__("./node_modules/react-navigation/lib/views/CardStackStyleInterpolator.js");var _CardStackStyleInterpolator2=_interopRequireDefault(_CardStackStyleInterpolator);
var _HeaderStyleInterpolator=__webpack_require__("./node_modules/react-navigation/lib/views/HeaderStyleInterpolator.js");var _HeaderStyleInterpolator2=_interopRequireDefault(_HeaderStyleInterpolator);

var _reactNative=__webpack_require__(1);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

















var DefaultTransitionSpec={

duration:250,
timing:_reactNative.Animated.spring,
bounciness:0,
speed:9};



var SlideFromRightIOS={
screenInterpolator:_CardStackStyleInterpolator2.default.forHorizontal};



var ModalSlideFromBottomIOS={
screenInterpolator:_CardStackStyleInterpolator2.default.forVertical};



var FadeInFromBottomAndroid={

transitionSpec:{
duration:350,
easing:_reactNative.Easing.out(_reactNative.Easing.poly(5)),
timing:_reactNative.Animated.timing},

screenInterpolator:_CardStackStyleInterpolator2.default.forFadeFromBottomAndroid};



var FadeOutToBottomAndroid={

transitionSpec:{
duration:230,
easing:_reactNative.Easing.in(_reactNative.Easing.poly(4)),
timing:_reactNative.Animated.timing},

screenInterpolator:_CardStackStyleInterpolator2.default.forFadeFromBottomAndroid};


function defaultTransitionConfig(

transitionProps,

prevTransitionProps,

isModal)
{
if(_reactNative.Platform.OS==='android'){


if(prevTransitionProps&&transitionProps.index<prevTransitionProps.index){

return FadeOutToBottomAndroid;
}
return FadeInFromBottomAndroid;
}else{

if(isModal){
return ModalSlideFromBottomIOS;
}else{
return SlideFromRightIOS;
}
}
}exports.default=

{
DefaultTransitionSpec:DefaultTransitionSpec,
defaultTransitionConfig:defaultTransitionConfig};

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/Transitioner.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);

var _reactNative=__webpack_require__(1);





var _invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");var _invariant2=_interopRequireDefault(_invariant);

var _ScenesReducer=__webpack_require__("./node_modules/react-navigation/lib/views/ScenesReducer.js");var _ScenesReducer2=_interopRequireDefault(_ScenesReducer);
var _TransitionConfigs=__webpack_require__("./node_modules/react-navigation/lib/views/TransitionConfigs.js");var _TransitionConfigs2=_interopRequireDefault(_TransitionConfigs);
var _addNavigationHelpers=__webpack_require__("./node_modules/react-navigation/lib/addNavigationHelpers.js");var _addNavigationHelpers2=_interopRequireDefault(_addNavigationHelpers);
var _PropTypes=__webpack_require__("./node_modules/react-navigation/lib/PropTypes.js");var _PropTypes2=_interopRequireDefault(_PropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



































PropTypes=_react2.default.PropTypes;

var DefaultTransitionSpec=_TransitionConfigs2.default.DefaultTransitionSpec;var

Transitioner=function(_React$Component){_inherits(Transitioner,_React$Component);

























function Transitioner(props,context){_classCallCheck(this,Transitioner);var _this=_possibleConstructorReturn(this,(Transitioner.__proto__||Object.getPrototypeOf(Transitioner)).call(this,
props,context));



var layout={
height:new _reactNative.Animated.Value(0),
initHeight:0,
initWidth:0,
isMeasured:false,
width:new _reactNative.Animated.Value(0)};


_this.state={
layout:layout,
position:new _reactNative.Animated.Value(_this.props.navigation.state.index),
progress:new _reactNative.Animated.Value(1),
scenes:(0,_ScenesReducer2.default)([],_this.props.navigation.state)};


_this._prevTransitionProps=null;
_this._transitionProps=buildTransitionProps(props,_this.state);
_this._isMounted=false;
_this._isTransitionRunning=false;
_this._queuedTransition=null;return _this;
}_createClass(Transitioner,[{key:'componentWillMount',value:function componentWillMount()

{
this._onLayout=this._onLayout.bind(this);
this._onTransitionEnd=this._onTransitionEnd.bind(this);
}},{key:'componentDidMount',value:function componentDidMount()

{
this._isMounted=true;
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._isMounted=false;
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
var nextScenes=(0,_ScenesReducer2.default)(
this.state.scenes,
nextProps.navigation.state,
this.props.navigation.state);


if(nextScenes===this.state.scenes){
return;
}

var indexHasChanged=nextProps.navigation.state.index!==this.props.navigation.state.index;
if(this._isTransitionRunning){
this._queuedTransition={nextProps:nextProps,nextScenes:nextScenes,indexHasChanged:indexHasChanged};
return;
}

this._startTransition(nextProps,nextScenes,indexHasChanged);
}},{key:'_startTransition',value:function _startTransition(

nextProps,nextScenes,indexHasChanged){var _this2=this;
var nextState=_extends({},
this.state,{
scenes:nextScenes});var



position=

nextState.position,progress=nextState.progress;

progress.setValue(0);

this._prevTransitionProps=this._transitionProps;
this._transitionProps=buildTransitionProps(nextProps,nextState);


var transitionUserSpec=nextProps.configureTransition?
nextProps.configureTransition(
this._transitionProps,
this._prevTransitionProps):

null;

var transitionSpec=_extends({},
DefaultTransitionSpec,
transitionUserSpec);var


timing=transitionSpec.timing;
delete transitionSpec.timing;

var animations=indexHasChanged?
[
timing(
progress,_extends({},

transitionSpec,{
toValue:1})),


timing(
position,_extends({},

transitionSpec,{
toValue:nextProps.navigation.state.index}))]:



[];


this._isTransitionRunning=true;
this.setState(nextState,function(){
nextProps.onTransitionStart&&nextProps.onTransitionStart(
_this2._transitionProps,
_this2._prevTransitionProps);

_reactNative.Animated.parallel(animations).start(_this2._onTransitionEnd);
});
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{
onLayout:this._onLayout,
style:[styles.main,this.props.style]},

this.props.render(this._transitionProps,this._prevTransitionProps)));


}},{key:'_onLayout',value:function _onLayout(

event){var _event$nativeEvent$la=
event.nativeEvent.layout,height=_event$nativeEvent$la.height,width=_event$nativeEvent$la.width;
if(this.state.layout.initWidth===width&&
this.state.layout.initHeight===height){
return;
}
var layout=_extends({},
this.state.layout,{
initHeight:height,
initWidth:width,
isMeasured:true});


layout.height.setValue(height);
layout.width.setValue(width);

var nextState=_extends({},
this.state,{
layout:layout});


this._transitionProps=buildTransitionProps(this.props,nextState);
this.setState(nextState);
}},{key:'_onTransitionEnd',value:function _onTransitionEnd()

{var _this3=this;
if(!this._isMounted){
return;
}
var prevTransitionProps=this._prevTransitionProps;
this._prevTransitionProps=null;

var nextState=_extends({},
this.state,{
scenes:this.state.scenes.filter(isSceneNotStale)});


this._transitionProps=buildTransitionProps(this.props,nextState);

this.setState(nextState,function(){
_this3.props.onTransitionEnd&&_this3.props.onTransitionEnd(
_this3._transitionProps,
prevTransitionProps);

if(_this3._queuedTransition){
_this3._startTransition(
_this3._queuedTransition.nextProps,
_this3._queuedTransition.nextScenes,
_this3._queuedTransition.indexHasChanged);

_this3._queuedTransition=null;
}else{
_this3._isTransitionRunning=false;
}
});
}}]);return Transitioner;}(_react2.default.Component);Transitioner.propTypes={configureTransition:PropTypes.func,navigation:PropTypes.shape({state:_PropTypes2.default.navigationState.isRequired}).isRequired,onTransitionEnd:PropTypes.func,onTransitionStart:PropTypes.func,render:PropTypes.func.isRequired};


function buildTransitionProps(
props,
state)
{var

navigation=
props.navigation;var


layout=



state.layout,position=state.position,progress=state.progress,scenes=state.scenes;

var scene=scenes.find(isSceneActive);

(0,_invariant2.default)(scene,'Could not find active scene');

return{
layout:layout,
navigationState:navigation.state,
navigation:(0,_addNavigationHelpers2.default)(_extends({},
navigation,{
state:scene.route})),

position:position,
progress:progress,
scenes:scenes,
scene:scene,
index:scene.index};

}

function isSceneNotStale(scene){
return!scene.isStale;
}

function isSceneActive(scene){
return scene.isActive;
}

var styles=_reactNative.StyleSheet.create({
main:{
flex:1}});exports.default=



Transitioner;

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/assets/back-icon.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAVCAYAAACdbmSKAAAAAXNSR0IArs4c6QAAAcBJREFUOBGNlD1IHFEQx/+zXo7oXTjBwsbays7OQhICQa+QJJUBiSBYiY1wIqeER8gdqa4RKyWQEIikSEIKP4JiZ2dnZW1jYSF6Kn5k/L+3b+/2NufFV7x58/HbmTc7u8BDlqpgXhdR1IINl/8yRgNcYxmKCR9rUi0hoykCXwi8icWd35/JaJrAKoFXHlAEmMYHWWoOVbQdx/hBYMgBgr88T6Isn6z+L2Q0iyv8pu+ZB24o36Ik35zOrfFOHzWHU6zRPuAChDgwSuCn0/1Wz1TWLlSxyTL6ve+Cd3jNO2zEAXsOoZJ2E9ii3ucCBGdowwjey47TE5vAaA+L2Ka91/tO+Kg8S9pNxNZU++I+xwDrmGkF2IAAjzBOeWAVvyocmbARkSUhAxg5RAaDtO97X47N+IN3GrY8AVg1cLZ5OUIWT3mXPR+TwS1bX9RhrzeIELKmohzjCZ4TDBugeMzzL5YajVENrEPWNCcn6MQLnsJWK9I8fycYH1hfngWiVZAqQ/PMsu5M6qbmK0udiEIaM0VWI5fs6kuC4fjY+QZWsKBTNqQ+RhEQl82/p9nmmSLQyA0zjvHR7pPw5o7I3Vom/hF3CoZ28yV6pQMAAAAASUVORK5CYII="

/***/ }),

/***/ "./node_modules/react-navigation/lib/views/withNavigation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=



















withNavigation;var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _hoistNonReactStatics=__webpack_require__("./node_modules/hoist-non-react-statics/index.js");var _hoistNonReactStatics2=_interopRequireDefault(_hoistNonReactStatics);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function withNavigation(Component){
var componentWithNavigation=function componentWithNavigation(props,_ref){var navigation=_ref.navigation;return(
_react2.default.createElement(Component,_extends({},props,{navigation:navigation})));};


componentWithNavigation.displayName='withNavigation('+(Component.displayName||Component.name)+')';

componentWithNavigation.contextTypes={
navigation:_react2.default.PropTypes.object.isRequired};


return(0,_hoistNonReactStatics2.default)(componentWithNavigation,Component);
}

/***/ }),

/***/ "./node_modules/react-navigation/lib/withCachedChildNavigation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=



















withCachedChildNavigation;var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _addNavigationHelpers=__webpack_require__("./node_modules/react-navigation/lib/addNavigationHelpers.js");var _addNavigationHelpers2=_interopRequireDefault(_addNavigationHelpers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function withCachedChildNavigation(
Comp)
{var _class,_temp2;
return _temp2=_class=function(_PureComponent){_inherits(_class,_PureComponent);function _class(){var _ref;var _temp,_this,_ret;_classCallCheck(this,_class);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=_class.__proto__||Object.getPrototypeOf(_class)).call.apply(_ref,[this].concat(args))),_this),_this.

















_updateNavigationProps=function(
navigation)
{

if(!_this._childNavigationProps){
_this._childNavigationProps={};
}
navigation.state.routes.forEach(function(route){
var childNavigation=_this._childNavigationProps[route.key];
if(childNavigation&&childNavigation.state===route){
return;
}
_this._childNavigationProps[route.key]=(0,_addNavigationHelpers2.default)(_extends({},
navigation,{
state:route}));

});
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(_class,[{key:'componentWillMount',value:function componentWillMount(){this._updateNavigationProps(this.props.navigation);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){this._updateNavigationProps(nextProps.navigation);}},{key:'render',value:function render()

{
return(
_react2.default.createElement(Comp,_extends({},
this.props,{
childNavigationProps:this._childNavigationProps})));


}}]);return _class;}(_react.PureComponent),_class.displayName='withCachedChildNavigation('+(Comp.displayName||Comp.name)+')',_temp2;

}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {





module.exports={


get createNavigationContainer(){return __webpack_require__("./node_modules/react-navigation/lib/createNavigationContainer.js").default;},
get StateUtils(){return __webpack_require__("./node_modules/react-navigation/lib/StateUtils.js").default;},
get PropTypes(){return __webpack_require__("./node_modules/react-navigation/lib/PropTypes.js").default;},
get addNavigationHelpers(){return __webpack_require__("./node_modules/react-navigation/lib/addNavigationHelpers.js").default;},
get NavigationActions(){return __webpack_require__("./node_modules/react-navigation/lib/NavigationActions.js").default;},


get createNavigator(){return __webpack_require__("./node_modules/react-navigation/lib/navigators/createNavigator.js").default;},
get StackNavigator(){return __webpack_require__("./src/navigators/StackNavigator.js").default;},
get TabNavigator(){return __webpack_require__("./src/navigators/TabNavigator.js").default;},
get DrawerNavigator(){return __webpack_require__("./src/navigators/DrawerNavigator.js").default;},


get StackRouter(){return __webpack_require__("./node_modules/react-navigation/lib/routers/StackRouter.js").default;},
get TabRouter(){return __webpack_require__("./node_modules/react-navigation/lib/routers/TabRouter.js").default;},


get Transitioner(){return __webpack_require__("./node_modules/react-navigation/lib/views/Transitioner.js").default;},
get CardStack(){return __webpack_require__("./node_modules/react-navigation/lib/views/CardStack.js").default;},
get DrawerView(){return __webpack_require__("./src/views/Drawer/DrawerView.js").default;},
get TabView(){return __webpack_require__("./node_modules/react-navigation/lib/views/TabView/TabView.js").default;},


get withNavigation(){return __webpack_require__("./node_modules/react-navigation/lib/views/withNavigation.js").default;}};

/***/ }),

/***/ "./src/navigators/DrawerNavigator.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);




var _DrawerScreen=__webpack_require__("./src/views/Drawer/DrawerScreen.js");var _DrawerScreen2=_interopRequireDefault(_DrawerScreen);
var _DrawerView=__webpack_require__("./src/views/Drawer/DrawerView.js");var _DrawerView2=_interopRequireDefault(_DrawerView);

var _reactNavigation=__webpack_require__("./node_modules/react-navigation/lib/react-navigation.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}


















var DefaultDrawerConfig={





drawerWidth:400,
contentComponent:_DrawerView2.default.Items,
drawerPosition:'left'};


var DrawerNavigator=function DrawerNavigator(
routeConfigs,
config)
{
var mergedConfig=_extends({},DefaultDrawerConfig,config);var

containerConfig=





mergedConfig.containerConfig,drawerWidth=mergedConfig.drawerWidth,contentComponent=mergedConfig.contentComponent,contentOptions=mergedConfig.contentOptions,drawerPosition=mergedConfig.drawerPosition,tabsConfig=_objectWithoutProperties(mergedConfig,['containerConfig','drawerWidth','contentComponent','contentOptions','drawerPosition']);
var contentRouter=(0,_reactNavigation.TabRouter)(routeConfigs,tabsConfig);
var drawerRouter=(0,_reactNavigation.TabRouter)({
DrawerClose:{
screen:(0,_reactNavigation.createNavigator)(contentRouter)(function(props){return(
_react2.default.createElement(_DrawerScreen2.default,props));})},


DrawerOpen:{
screen:function screen(){return null;}}},

{
initialRouteName:'DrawerClose'});

return(0,_reactNavigation.createNavigationContainer)((0,_reactNavigation.createNavigator)(drawerRouter)(function(props){return(
_react2.default.createElement(_DrawerView2.default,_extends({},
props,{
drawerWidth:drawerWidth,
contentComponent:contentComponent,
contentOptions:contentOptions,
drawerPosition:drawerPosition})));}),

containerConfig);
};exports.default=

DrawerNavigator;

/***/ }),

/***/ "./src/navigators/StackNavigator.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});

var _reactNavigation=__webpack_require__("./node_modules/react-navigation/lib/react-navigation.js");exports.default=_reactNavigation.StackNavigator;

/***/ }),

/***/ "./src/navigators/TabNavigator.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});

var _reactNavigation=__webpack_require__("./node_modules/react-navigation/lib/react-navigation.js");exports.default=_reactNavigation.TabNavigator;

/***/ }),

/***/ "./src/views/Drawer/DrawerNavigatorItems.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);





var _TouchableItem=__webpack_require__("./node_modules/react-navigation/lib/views/TouchableItem.js");var _TouchableItem2=_interopRequireDefault(_TouchableItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



























var DrawerNavigatorItems=function DrawerNavigatorItems(_ref){var
navigation=_ref.navigation,
activeTintColor=_ref.activeTintColor,
activeBackgroundColor=_ref.activeBackgroundColor,
inactiveTintColor=_ref.inactiveTintColor,
inactiveBackgroundColor=_ref.inactiveBackgroundColor,
getLabel=_ref.getLabel,
renderIcon=_ref.renderIcon,
style=_ref.style;return(

_react2.default.createElement(_reactNative.View,{style:[styles.container,style]},
navigation.state.routes.map(function(route,index){
var focused=navigation.state.index===index;
var color=focused?activeTintColor:inactiveTintColor;
var backgroundColor=focused?activeBackgroundColor:inactiveBackgroundColor;
var scene={route:route,index:index,focused:focused,tintColor:color};
var icon=renderIcon(scene);
var label=getLabel(scene);
return(
_react2.default.createElement(_TouchableItem2.default,{
key:route.key,
onPress:function onPress(){
navigation.navigate('DrawerClose');
navigation.navigate(route.routeName);
},
delayPressIn:0},

_react2.default.createElement(_reactNative.View,{style:[styles.item,{backgroundColor:backgroundColor}]},
icon?
_react2.default.createElement(_reactNative.View,{style:[styles.icon,focused?null:styles.inactiveIcon]},
icon):

null,
typeof label==='string'?

_react2.default.createElement(_reactNative.Text,{style:[styles.label,{color:color}]},
label):


label)));




})));};



DrawerNavigatorItems.propTypes={
navigation:_react.PropTypes.object.isRequired,
activeTintColor:_react.PropTypes.string,
activeBackgroundColor:_react.PropTypes.string,
inactiveTintColor:_react.PropTypes.string,
inactiveBackgroundColor:_react.PropTypes.string,
style:_reactNative.View.propTypes.style};



DrawerNavigatorItems.defaultProps={
activeTintColor:'#2196f3',
activeBackgroundColor:'rgba(0, 0, 0, .04)',
inactiveTintColor:'rgba(0, 0, 0, .87)',
inactiveBackgroundColor:'transparent'};


var styles=_reactNative.StyleSheet.create({
container:{
marginVertical:4},

item:{
flexDirection:'row',
alignItems:'center'},

icon:{
marginHorizontal:16,
width:24,
alignItems:'center'},

inactiveIcon:{




opacity:0.62},

label:{
margin:16,
fontWeight:'bold'}});exports.default=



DrawerNavigatorItems;

/***/ }),

/***/ "./src/views/Drawer/DrawerScreen.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);

var _SceneView=__webpack_require__("./node_modules/react-navigation/lib/views/SceneView.js");var _SceneView2=_interopRequireDefault(_SceneView);

var _withCachedChildNavigation=__webpack_require__("./node_modules/react-navigation/lib/withCachedChildNavigation.js");var _withCachedChildNavigation2=_interopRequireDefault(_withCachedChildNavigation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var




















DrawerScreen=function(_PureComponent){_inherits(DrawerScreen,_PureComponent);function DrawerScreen(){_classCallCheck(this,DrawerScreen);return _possibleConstructorReturn(this,(DrawerScreen.__proto__||Object.getPrototypeOf(DrawerScreen)).apply(this,arguments));}_createClass(DrawerScreen,[{key:'render',value:function render()


{var _props=
this.props,router=_props.router,navigation=_props.navigation,childNavigationProps=_props.childNavigationProps;var _navigation$state=
navigation.state,routes=_navigation$state.routes,index=_navigation$state.index;
var childNavigation=childNavigationProps[routes[index].key];
var Content=router.getComponentForRouteName(routes[index].routeName);
return(
_react2.default.createElement(_SceneView2.default,{
screenProps:this.props.screenProps,
component:Content,
navigation:childNavigation}));


}}]);return DrawerScreen;}(_react.PureComponent);exports.default=


(0,_withCachedChildNavigation2.default)(DrawerScreen);

/***/ }),

/***/ "./src/views/Drawer/DrawerSidebar.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNative=__webpack_require__(1);





var _withCachedChildNavigation=__webpack_require__("./node_modules/react-navigation/lib/withCachedChildNavigation.js");var _withCachedChildNavigation2=_interopRequireDefault(_withCachedChildNavigation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



























DrawerSidebar=function(_PureComponent){_inherits(DrawerSidebar,_PureComponent);function DrawerSidebar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,DrawerSidebar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=DrawerSidebar.__proto__||Object.getPrototypeOf(DrawerSidebar)).call.apply(_ref,[this].concat(args))),_this),_this.


_getScreenConfig=function(routeKey,configName){
var DrawerScreen=_this.props.router.getComponentForRouteName('DrawerClose');
return DrawerScreen.router.getScreenConfig(
_this.props.childNavigationProps[routeKey],
configName);

},_this.

_getLabel=function(_ref2){var focused=_ref2.focused,tintColor=_ref2.tintColor,route=_ref2.route;
var drawer=_this._getScreenConfig(route.key,'drawer');
if(drawer&&drawer.label){
return typeof drawer.label==='function'?
drawer.label({tintColor:tintColor,focused:focused}):
drawer.label;
}

var title=_this._getScreenConfig(route.key,'title');
if(typeof title==='string'){
return title;
}

return route.routeName;
},_this.

_renderIcon=function(_ref3){var focused=_ref3.focused,tintColor=_ref3.tintColor,route=_ref3.route;
var drawer=_this._getScreenConfig(route.key,'drawer');
if(drawer&&drawer.icon){
return typeof drawer.icon==='function'?
drawer.icon({tintColor:tintColor,focused:focused}):
drawer.icon;
}
return null;
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(DrawerSidebar,[{key:'render',value:function render()

{
var ContentComponent=this.props.contentComponent;
return(
_react2.default.createElement(_reactNative.View,{style:[styles.container,this.props.style]},
_react2.default.createElement(ContentComponent,_extends({},
this.props.contentOptions,{
navigation:this.props.navigation,
getLabel:this._getLabel,
renderIcon:this._renderIcon}))));



}}]);return DrawerSidebar;}(_react.PureComponent);exports.default=


(0,_withCachedChildNavigation2.default)(DrawerSidebar);

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff',
paddingTop:_reactNative.Platform.OS==='ios'?20:0}});

/***/ }),

/***/ "./src/views/Drawer/DrawerView.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);
var _reactNativeDrawerLayout=__webpack_require__("./node_modules/react-native-drawer-layout/dist/DrawerLayout.js");var _reactNativeDrawerLayout2=_interopRequireDefault(_reactNativeDrawerLayout);

var _reactNavigation=__webpack_require__("./node_modules/react-navigation/lib/react-navigation.js");



var _DrawerNavigatorItems=__webpack_require__("./src/views/Drawer/DrawerNavigatorItems.js");var _DrawerNavigatorItems2=_interopRequireDefault(_DrawerNavigatorItems);
var _DrawerSidebar=__webpack_require__("./src/views/Drawer/DrawerSidebar.js");var _DrawerSidebar2=_interopRequireDefault(_DrawerSidebar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


































DrawerView=function(_PureComponent){_inherits(DrawerView,_PureComponent);function DrawerView(){var _ref;var _temp,_this,_ret;_classCallCheck(this,DrawerView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=DrawerView.__proto__||Object.getPrototypeOf(DrawerView)).call.apply(_ref,[this].concat(args))),_this),_this.























_handleDrawerOpen=function(){var
navigation=_this.props.navigation;var _navigation$state=
navigation.state,routes=_navigation$state.routes,index=_navigation$state.index;
if(routes[index].routeName!=='DrawerOpen'){
_this.props.navigation.navigate('DrawerOpen');
}
},_this.

_handleDrawerClose=function(){var
navigation=_this.props.navigation;var _navigation$state2=
navigation.state,routes=_navigation$state2.routes,index=_navigation$state2.index;
if(routes[index].routeName!=='DrawerClose'){
_this.props.navigation.navigate('DrawerClose');
}
},_this.

_updateScreenNavigation=function(
navigation)
{
var navigationState=navigation.state.routes.find(function(route){return route.routeName==='DrawerClose';});
if(_this._screenNavigationProp&&_this._screenNavigationProp.state===navigationState){
return;
}
_this._screenNavigationProp=(0,_reactNavigation.addNavigationHelpers)(_extends({},
navigation,{
state:navigationState}));

},_this.

_getNavigationState=function(
navigation)
{
var navigationState=navigation.state.routes.find(function(route){return route.routeName==='DrawerClose';});
return navigationState;
},_this.

_renderNavigationView=function(){return(
_react2.default.createElement(_DrawerSidebar2.default,{
navigation:_this._screenNavigationProp,
router:_this.props.router,
contentComponent:_this.props.contentComponent,
contentOptions:_this.props.contentOptions,
style:_this.props.style}));},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(DrawerView,[{key:'componentWillMount',value:function componentWillMount(){this._updateScreenNavigation(this.props.navigation);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(this.props.navigation.state.index!==nextProps.navigation.state.index){var _nextProps$navigation=nextProps.navigation.state,routes=_nextProps$navigation.routes,_index=_nextProps$navigation.index;if(routes[_index].routeName==='DrawerOpen'){this._drawer.openDrawer();}else{this._drawer.closeDrawer();}}this._updateScreenNavigation(nextProps.navigation);}},{key:'render',value:function render()





{var _this2=this;
var DrawerScreen=this.props.router.getComponentForRouteName('DrawerClose');
return(
_react2.default.createElement(_reactNativeDrawerLayout2.default,{
ref:function ref(c){return _this2._drawer=c;},
drawerWidth:this.props.drawerWidth,
onDrawerOpen:this._handleDrawerOpen,
onDrawerClose:this._handleDrawerClose,
renderNavigationView:this._renderNavigationView,
drawerPosition:
this.props.drawerPosition==='right'?
_reactNativeDrawerLayout2.default.positions.Right:_reactNativeDrawerLayout2.default.positions.Left},


_react2.default.createElement(DrawerScreen,{
screenProps:this.props.screenProps,
navigation:this._screenNavigationProp})));



}}]);return DrawerView;}(_react.PureComponent);DrawerView.Items=_DrawerNavigatorItems2.default;exports.default=DrawerView;

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map