define('aurelia-loader-esm', ['require', 'exports', 'aurelia-metadata', 'aurelia-loader', 'aurelia-pal'], function (require, exports, aureliaMetadata, aureliaLoader, aureliaPal) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
    * An implementation of the TemplateLoader interface implemented with text-based loading.
    */
    var TextTemplateLoader = /** @class */ (function () {
        function TextTemplateLoader() {
        }
        /**
        * Loads a template.
        * @param loader The loader that is requesting the template load.
        * @param entry The TemplateRegistryEntry to load and populate with a template.
        * @return A promise which resolves when the TemplateRegistryEntry is loaded with a template.
        */
        TextTemplateLoader.prototype.loadTemplate = function (loader, entry) {
            return __awaiter(this, void 0, void 0, function () {
                var text;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, loader.loadText(entry.address)];
                        case 1:
                            text = _a.sent();
                            entry.template = aureliaPal.DOM.createTemplateFromMarkup(text);
                            return [2 /*return*/];
                    }
                });
            });
        };
        return TextTemplateLoader;
    }());
    function ensureOriginOnExports(moduleExports, moduleId) {
        var target = moduleExports;
        var key;
        var exportedValue;
        if (typeof target === 'object') {
            for (key in target) {
                exportedValue = target[key];
                if (typeof exportedValue === 'function') {
                    aureliaMetadata.Origin.set(exportedValue, new aureliaMetadata.Origin(moduleId, key));
                }
            }
        }
        return moduleExports;
    }
    /**
    * A default implementation of the Loader abstraction which works with webpack (extended common-js style).
    */
    var EsmLoader = /** @class */ (function (_super) {
        __extends(EsmLoader, _super);
        function EsmLoader() {
            var _this = _super.call(this) || this;
            _this.moduleRegistry = Object.create(null);
            _this.loaderPlugins = Object.create(null);
            _this.modulesBeingLoaded = new Map();
            _this.useTemplateLoader(new TextTemplateLoader());
            _this.addPlugin('template-registry-entry', {
                fetch: function (moduleId) { return __awaiter(_this, void 0, void 0, function () {
                    var entry;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                entry = this.getOrCreateTemplateRegistryEntry(moduleId);
                                if (!!entry.templateIsLoaded) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.templateLoader.loadTemplate(this, entry)];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2: return [2 /*return*/, entry];
                        }
                    });
                }); }
            });
            aureliaPal.PLATFORM.eachModule = function (callback) {
                var registry = _this.moduleRegistry;
                var cachedModuleIds = Object.getOwnPropertyNames(registry);
                cachedModuleIds
                    // Note: we use .some here like a .forEach that can be "break"ed out of.
                    // It will stop iterating only when a truthy value is returned.
                    // Even though the docs say "true" explicitly, loader-default also goes by truthy
                    // and this is to keep it consistent with that.
                    .some(function (moduleId) {
                    var moduleExports = registry[moduleId].exports;
                    if (typeof moduleExports === 'object') {
                        return callback(moduleId, moduleExports);
                    }
                    return false;
                });
            };
            return _this;
        }
        /**
         * @internal
         */
        EsmLoader.prototype._import = function (address) {
            return __awaiter(this, void 0, void 0, function () {
                var addressParts, moduleId, loaderPlugin, plugin;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            addressParts = address.split('!');
                            moduleId = addressParts.splice(addressParts.length - 1, 1)[0];
                            loaderPlugin = addressParts.length === 1 ? addressParts[0] : null;
                            if (!loaderPlugin) return [3 /*break*/, 2];
                            plugin = this.loaderPlugins[loaderPlugin];
                            if (!plugin) {
                                throw new Error("Plugin " + loaderPlugin + " is not registered in the loader.");
                            }
                            return [4 /*yield*/, plugin.fetch(moduleId)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [2 /*return*/, new Promise(function (resolve, reject) { require([moduleId], resolve, reject) }).then(function (m) {
                                _this.moduleRegistry[moduleId] = m;
                                return m;
                            })];
                    }
                });
            });
        };
        /**
        * Maps a module id to a source.
        * @param id The module id.
        * @param source The source to map the module to.
        */
        EsmLoader.prototype.map = function (id, source) { };
        /**
        * Normalizes a module id.
        * @param moduleId The module id to normalize.
        * @param relativeTo What the module id should be normalized relative to.
        * @return The normalized module id.
        */
        EsmLoader.prototype.normalizeSync = function (moduleId, relativeTo) {
            return moduleId;
        };
        /**
        * Normalizes a module id.
        * @param moduleId The module id to normalize.
        * @param relativeTo What the module id should be normalized relative to.
        * @return The normalized module id.
        */
        EsmLoader.prototype.normalize = function (moduleId, relativeTo) {
            return Promise.resolve(moduleId);
        };
        /**
        * Instructs the loader to use a specific TemplateLoader instance for loading templates
        * @param templateLoader The instance of TemplateLoader to use for loading templates.
        */
        EsmLoader.prototype.useTemplateLoader = function (templateLoader) {
            this.templateLoader = templateLoader;
        };
        /**
        * Loads a collection of modules.
        * @param ids The set of module ids to load.
        * @return A Promise for an array of loaded modules.
        */
        EsmLoader.prototype.loadAllModules = function (ids) {
            var _this = this;
            return Promise.all(ids.map(function (id) { return _this.loadModule(id); }));
        };
        /**
        * Loads a module.
        * @param moduleId The module ID to load.
        * @return A Promise for the loaded module.
        */
        EsmLoader.prototype.loadModule = function (moduleId) {
            return __awaiter(this, void 0, void 0, function () {
                var existing, beingLoaded, moduleExports;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            existing = this.moduleRegistry[moduleId];
                            if (existing) {
                                return [2 /*return*/, existing];
                            }
                            beingLoaded = this.modulesBeingLoaded.get(moduleId);
                            if (beingLoaded) {
                                return [2 /*return*/, beingLoaded];
                            }
                            beingLoaded = this._import(moduleId);
                            this.modulesBeingLoaded.set(moduleId, beingLoaded);
                            return [4 /*yield*/, beingLoaded];
                        case 1:
                            moduleExports = _a.sent();
                            this.moduleRegistry[moduleId] = ensureOriginOnExports(moduleExports, moduleId);
                            this.modulesBeingLoaded.delete(moduleId);
                            return [2 /*return*/, moduleExports];
                    }
                });
            });
        };
        /**
        * Loads a template.
        * @param url The url of the template to load.
        * @return A Promise for a TemplateRegistryEntry containing the template.
        */
        EsmLoader.prototype.loadTemplate = function (url) {
            return this.loadModule(this.applyPluginToUrl(url, 'template-registry-entry'));
        };
        /**
        * Loads a text-based resource.
        * @param url The url of the text file to load.
        * @return A Promise for text content.
        */
        EsmLoader.prototype.loadText = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, fetch(url).then(function (res) { return res.text(); })];
                });
            });
        };
        /**
        * Alters a module id so that it includes a plugin loader.
        * @param url The url of the module to load.
        * @param pluginName The plugin to apply to the module id.
        * @return The plugin-based module id.
        */
        EsmLoader.prototype.applyPluginToUrl = function (url, pluginName) {
            return pluginName + "!" + url;
        };
        /**
        * Registers a plugin with the loader.
        * @param pluginName The name of the plugin.
        * @param implementation The plugin implementation.
        */
        EsmLoader.prototype.addPlugin = function (pluginName, implementation) {
            this.loaderPlugins[pluginName] = implementation;
        };
        return EsmLoader;
    }(aureliaLoader.Loader));
    aureliaPal.PLATFORM.Loader = EsmLoader;

    exports.TextTemplateLoader = TextTemplateLoader;
    exports.ensureOriginOnExports = ensureOriginOnExports;
    exports.EsmLoader = EsmLoader;

    Object.defineProperty(exports, '__esModule', { value: true });

});
