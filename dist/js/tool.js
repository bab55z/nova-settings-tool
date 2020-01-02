/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(13);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_tabs_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_tabs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_tabs_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_v_uploader__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_v_uploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_v_uploader__);



// v-uploader plugin global config
var uploaderConfig = {
    // file uploader service url
    uploadFileUrl: '/nova-vendor/nova-settings-tool/upload-file',
    // file delete service url
    deleteFileUrl: '/nova-vendor/nova-settings-tool/delete-file',
    // set the way to show upload message(upload fail message)
    showMessage: function showMessage(vue, message) {
        //using v-dialogs to show message
        vue.$toasted.show(message, { type: 'error' });
    },
    language: 'en'
};

Nova.booting(function (Vue, router) {
    Vue.use(__WEBPACK_IMPORTED_MODULE_1_v_uploader___default.a, uploaderConfig);
    Vue.component('tabs', __WEBPACK_IMPORTED_MODULE_0_vue_tabs_component__["Tabs"]);
    Vue.component('tab', __WEBPACK_IMPORTED_MODULE_0_vue_tabs_component__["Tab"]);
    router.addRoutes([{
        name: 'nova-settings-tool',
        path: '/nova-settings-tool',
        component: __webpack_require__(4)
    }]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-tabs"] = factory();
	else
		root["VueTabs"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var IE8_DOM_DEFINE = __webpack_require__(24);
var toPrimitive = __webpack_require__(26);
var dP = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./components/Tab'), require('./components/Tabs'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Tab, global.Tabs);
        global.index = mod.exports;
    }
})(this, function (exports, _Tab, _Tabs) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Tabs = exports.Tab = undefined;

    var _Tab2 = _interopRequireDefault(_Tab);

    var _Tabs2 = _interopRequireDefault(_Tabs);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = {
        install: function install(Vue) {
            Vue.component('tab', _Tab2.default);
            Vue.component('tabs', _Tabs2.default);
        }
    };
    exports.Tab = _Tab2.default;
    exports.Tabs = _Tabs2.default;
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(10),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.Tab = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        props: {
            id: { default: null },
            name: { required: true },
            prefix: { default: '' },
            suffix: { default: '' },
            isDisabled: { default: false }
        },

        data: function data() {
            return {
                isActive: false,
                isVisible: true
            };
        },

        computed: {
            header: function header() {
                return this.prefix + this.name + this.suffix;
            },
            computedId: function computedId() {
                return this.id ? this.id : this.name.toLowerCase().replace(/ /g, '-');
            },
            hash: function hash() {
                if (this.isDisabled) {
                    return '#';
                }

                return '#' + this.computedId;
            }
        }
    };
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive),
      expression: "isActive"
    }],
    staticClass: "tabs-component-panel",
    attrs: {
      "aria-hidden": !_vm.isActive,
      "id": _vm.computedId,
      "role": "tabpanel"
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(29),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(13)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../expiringStorage'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.expiringStorage);
        global.Tabs = mod.exports;
    }
})(this, function (exports, _expiringStorage) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _expiringStorage2 = _interopRequireDefault(_expiringStorage);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = {
        props: {
            cacheLifetime: {
                default: 5
            },
            options: {
                type: Object,
                required: false,
                default: function _default() {
                    return {
                        useUrlFragment: true,
                        defaultTabHash: null
                    };
                }
            }
        },

        data: function data() {
            return {
                tabs: [],
                activeTabHash: '',
                activeTabIndex: 0,
                lastActiveTabHash: ''
            };
        },

        computed: {
            storageKey: function storageKey() {
                return 'vue-tabs-component.cache.' + window.location.host + window.location.pathname;
            }
        },

        created: function created() {
            this.tabs = this.$children;
        },
        mounted: function mounted() {
            var _this = this;

            window.addEventListener('hashchange', function () {
                return _this.selectTab(window.location.hash);
            });

            if (this.findTab(window.location.hash)) {
                this.selectTab(window.location.hash);
                return;
            }

            var previousSelectedTabHash = _expiringStorage2.default.get(this.storageKey);

            if (this.findTab(previousSelectedTabHash)) {
                this.selectTab(previousSelectedTabHash);
                return;
            }

            if (this.options.defaultTabHash !== null && this.findTab("#" + this.options.defaultTabHash)) {
                this.selectTab("#" + this.options.defaultTabHash);
                return;
            }

            if (this.tabs.length) {
                this.selectTab(this.tabs[0].hash);
            }
        },


        methods: {
            findTab: function findTab(hash) {
                return this.tabs.find(function (tab) {
                    return tab.hash === hash;
                });
            },
            selectTab: function selectTab(selectedTabHash, event) {
                // See if we should store the hash in the url fragment.
                if (event && !this.options.useUrlFragment) {
                    event.preventDefault();
                }

                var selectedTab = this.findTab(selectedTabHash);

                if (!selectedTab) {
                    return;
                }

                if (selectedTab.isDisabled) {
                    event.preventDefault();
                    return;
                }

                if (this.lastActiveTabHash === selectedTab.hash) {
                    this.$emit('clicked', { tab: selectedTab });
                    return;
                }

                this.tabs.forEach(function (tab) {
                    tab.isActive = tab.hash === selectedTab.hash;
                });

                this.$emit('changed', { tab: selectedTab });

                this.activeTabHash = selectedTab.hash;
                this.activeTabIndex = this.getTabIndex(selectedTabHash);

                this.lastActiveTabHash = this.activeTabHash = selectedTab.hash;

                _expiringStorage2.default.set(this.storageKey, selectedTab.hash, this.cacheLifetime);
            },
            setTabVisible: function setTabVisible(hash, visible) {
                var tab = this.findTab(hash);

                if (!tab) {
                    return;
                }

                tab.isVisible = visible;

                if (tab.isActive) {
                    // If tab is active, set a different one as active.
                    tab.isActive = visible;

                    this.tabs.every(function (tab, index, array) {
                        if (tab.isVisible) {
                            tab.isActive = true;

                            return false;
                        }

                        return true;
                    });
                }
            },
            getTabIndex: function getTabIndex(hash) {
                var tab = this.findTab(hash);

                return this.tabs.indexOf(tab);
            },
            getTabHash: function getTabHash(index) {
                var _this2 = this;

                var tab = this.tabs.find(function (tab) {
                    return _this2.tabs.indexOf(tab) === index;
                });

                if (!tab) {
                    return;
                }

                return tab.hash;
            },
            getActiveTab: function getActiveTab() {
                return this.findTab(this.activeTabHash);
            },
            getActiveTabIndex: function getActiveTabIndex() {
                return this.getTabIndex(this.activeTabHash);
            }
        }
    };
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(14), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.classCallCheck, global.createClass);
        global.expiringStorage = mod.exports;
    }
})(this, function (exports, _classCallCheck2, _createClass2) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

    var _createClass3 = _interopRequireDefault(_createClass2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var ExpiringStorage = function () {
        function ExpiringStorage() {
            (0, _classCallCheck3.default)(this, ExpiringStorage);
        }

        (0, _createClass3.default)(ExpiringStorage, [{
            key: "get",
            value: function get(key) {
                var cached = JSON.parse(localStorage.getItem(key));

                if (!cached) {
                    return null;
                }

                var expires = new Date(cached.expires);

                if (expires < new Date()) {
                    localStorage.removeItem(key);
                    return null;
                }

                return cached.value;
            }
        }, {
            key: "set",
            value: function set(key, value, lifeTimeInMinutes) {
                var currentTime = new Date().getTime();

                var expires = new Date(currentTime + lifeTimeInMinutes * 60000);

                localStorage.setItem(key, JSON.stringify({ value: value, expires: expires }));
            }
        }]);
        return ExpiringStorage;
    }();

    exports.default = new ExpiringStorage();
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(16);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(19);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', { defineProperty: __webpack_require__(5).f });


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(4);
var ctx = __webpack_require__(20);
var hide = __webpack_require__(22);
var has = __webpack_require__(28);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(21);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(27);
module.exports = __webpack_require__(0) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(6)(function () {
  return Object.defineProperty(__webpack_require__(25)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tabs-component"
  }, [_c('ul', {
    staticClass: "tabs-component-tabs",
    attrs: {
      "role": "tablist"
    }
  }, _vm._l((_vm.tabs), function(tab, i) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (tab.isVisible),
        expression: "tab.isVisible"
      }],
      key: i,
      staticClass: "tabs-component-tab",
      class: {
        'is-active': tab.isActive, 'is-disabled': tab.isDisabled
      },
      attrs: {
        "role": "presentation"
      }
    }, [_c('a', {
      staticClass: "tabs-component-tab-a",
      attrs: {
        "aria-controls": tab.hash,
        "aria-selected": tab.isActive,
        "href": tab.hash,
        "role": "tab"
      },
      domProps: {
        "innerHTML": _vm._s(tab.header)
      },
      on: {
        "click": function($event) {
          _vm.selectTab(tab.hash, $event)
        }
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "tabs-component-panels"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("vUploader",[],t):"object"==typeof exports?exports.vUploader=t():e.vUploader=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=3)}([function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=i(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=u[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(r(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(r(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function r(e){var t,n,i=document.querySelector("style["+m+'~="'+e.id+'"]');if(i){if(h)return f;i.parentNode.removeChild(i)}if(q){var r=p++;i=c||(c=o()),t=a.bind(null,i,r,!1),n=a.bind(null,i,r,!0)}else i=o(),t=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function a(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function s(e,t){var n=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),g.ssrId&&e.setAttribute(m,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var A="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!A)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(7),u={},d=A&&(document.head||document.getElementsByTagName("head")[0]),c=null,p=0,h=!1,f=function(){},g=null,m="data-vue-ssr-id",q="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){h=n,g=o||{};var r=l(e,t);return i(r),function(t){for(var n=[],o=0;o<r.length;o++){var a=r[o],s=u[a.id];s.refs--,n.push(s)}t?(r=l(e,t),i(r)):r=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var A=0;A<s.parts.length;A++)s.parts[A]();delete u[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";var i=n(9),o=n.n(i),r=n(11),a=(n.n(r),n(21)),s=n.n(a),A=n(22);t.a={name:"v-uploader",props:{language:{type:String,default:"cn"},preview:{type:Boolean,default:!0},previewImg:String,buttonText:String,buttonIcon:{type:Boolean,default:!0},previewWidth:{type:Number,default:200},previewHeight:{type:Number,default:150},multiple:{type:Boolean,default:!1},uploadFileObjName:{type:String,default:"uploadFileObj"},itemLimit:{type:Number,default:0},fileSizeLimit:{type:String,default:"5MB"},fileTypeExts:{type:String,default:"jpeg,jpg,gif,png"},imageMaxHeight:{type:Number,default:0},imageMaxWidth:{type:Number,default:0},imageMinHeight:{type:Number,default:0},imageMinWidth:{type:Number,default:0},beforeUpload:Function,uploadFileUrl:{type:String,default:""},deleteFileUrl:{type:String,default:""},showMessage:{type:Function,default:void 0}},data:function(){return{uploadedFiles:[],deleteIndexs:[],options:{},callback:void 0,singleUploadImg:"",ui:{},uploaderClass:{"v-uploader":!0,"single-mode":!1,"multiple-mode":!1}}},watch:{previewImg:function(e){e&&(this.singleUploadImg=e)}},beforeMount:function(){var e=this;this.multiple?this.uploaderClass["multiple-mode"]=!0:this.uploaderClass["single-mode"]=!0,this.ui=A.b(this.language);var t="holder.js/"+this.previewWidth+"x"+this.previewHeight+"?text="+this.ui.thumbnail+"&size=16";this.singleUploadImg=this.previewImg?this.previewImg:t,this.multiple?this.callback=function(t){t&&void 0!==t.success&&t.success&&e.uploadedFiles.push(t)}:this.callback=function(t){t&&void 0!==t.success&&t.success&&(e.preview&&(e.singleUploadImg=t.url),e.$emit("done",[t]))},this.options=A.a.call(this)},mounted:function(){var e=this;this.multiple?(e.options.deleteFile.endpoint=this.deleteFileUrl,e.options.template=this.$refs.uploadArea,e.options.element=this.$refs.multipleUpload,e.options.showMessage=function(t){e.showMessage&&"function"==typeof e.showMessage&&e.showMessage(e,t)},e.options.callbacks.onDelete=function(t){e.deleteIndexs.push(t),e.$emit("done",e.uploadedFiles.filter(function(t,n){return!e.deleteIndexs.includes(n)}))},e.options.callbacks.onAllComplete=function(t,n){e.$emit("done",e.uploadedFiles)},this.itemLimit&&(this.options.validation.itemLimit=this.itemLimit),this.beforeUpload&&"function"==typeof this.beforeUpload&&(e.options.callbacks.onSubmit=this.beforeUpload),new o.a.FineUploader(e.options)):(this.preview&&!this.previewImg&&s.a.run({images:this.$refs.simpleImg}),this.options.button=this.$refs.upload,e.options.callbacks.onError=function(t,n,i,o){e.showMessage&&"function"==typeof e.showMessage&&e.showMessage(e,i)},this.beforeUpload&&"function"==typeof this.beforeUpload&&(e.options.callbacks.onSubmit=this.beforeUpload),new o.a.FineUploaderBasic(e.options))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(t).length&&("string"==typeof t.language&&(i.a.props.language.default=t.language),"boolean"==typeof t.preview&&(i.a.props.preview.default=t.preview),"string"==typeof t.buttonText&&(i.a.props.buttonText.default=t.buttonText),"boolean"==typeof t.buttonIcon&&(i.a.props.buttonIcon.default=t.buttonIcon),"number"==typeof t.previewWidth&&(i.a.props.previewWidth.default=t.previewWidth),"number"==typeof t.previewHeight&&(i.a.props.previewHeight.default=t.previewHeight),"boolean"==typeof t.multiple&&(i.a.props.multiple.default=t.multiple),"string"==typeof t.uploadFileObjName&&(i.a.props.uploadFileObjName.default=t.uploadFileObjName),"number"==typeof t.itemLimit&&(i.a.props.itemLimit.default=t.itemLimit),"string"==typeof t.fileSizeLimit&&(i.a.props.fileSizeLimit.default=t.fileSizeLimit),"string"==typeof t.fileTypeExts&&(i.a.props.fileTypeExts.default=t.fileTypeExts),"number"==typeof t.imageMaxHeight&&(i.a.props.imageMaxHeight.default=t.imageMaxHeight),"number"==typeof t.imageMaxWidth&&(i.a.props.imageMaxWidth.default=t.imageMaxWidth),"number"==typeof t.imageMinHeight&&(i.a.props.imageMinHeight.default=t.imageMinHeight),"number"==typeof t.imageMinWidth&&(i.a.props.imageMinWidth.default=t.imageMinWidth),"string"==typeof t.uploadFileUrl&&(i.a.props.uploadFileUrl.default=t.uploadFileUrl),"string"==typeof t.deleteFileUrl&&(i.a.props.deleteFileUrl.default=t.deleteFileUrl),"function"==typeof t.showMessage&&(i.a.props.showMessage.default=t.showMessage)),e.component(i.a.name,i.a)}};t.default=o},function(e,t,n){"use strict";function i(e){n(5)}var o=n(2),r=n(23),a=n(8),s=i,A=a(o.a,r.a,!1,s,"data-v-18963f2e",null);t.a=A.exports},function(e,t,n){var i=n(6);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(1)("1869cb86",i,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'div.v-uploader[data-v-18963f2e]{margin-bottom:10px}div.v-uploader.single-mode[data-v-18963f2e]{display:inline-block}div.v-uploader.multiple-mode[data-v-18963f2e]{display:block}div.v-uploader .uploader-button[data-v-18963f2e]{-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;-webkit-box-shadow:0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.2);box-shadow:0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.2);-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;transition:all .2s ease-in-out;color:#212121;background:#fff;border-color:#fff;outline:0;width:auto;display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143}div.v-uploader .uploader-button i[data-v-18963f2e]{font-size:13px}div.v-uploader .uploader-button[data-v-18963f2e]:active{-webkit-box-shadow:0 10px 20px rgba(0,0,0,.2),0 6px 6px rgba(0,0,0,.23);box-shadow:0 10px 20px rgba(0,0,0,.2),0 6px 6px rgba(0,0,0,.23)}div.v-uploader div.single-upload[data-v-18963f2e]{display:inline-block;margin-right:5px;text-align:center}div.v-uploader div.single-upload div.image-box[data-v-18963f2e]{-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;-webkit-box-shadow:0 1px 8px rgba(0,0,0,.1);-moz-box-shadow:0 1px 8px rgba(0,0,0,.1);box-shadow:0 1px 8px rgba(0,0,0,.1);border:1px solid #ddd;padding:5px;margin-bottom:10px}div.v-uploader div.upload-list[data-v-18963f2e]{width:100%}div.v-uploader div.upload-list .qq-gallery.qq-uploader[data-v-18963f2e]{padding:10px}div.v-uploader div.upload-list .qq-gallery .qq-upload-list[data-v-18963f2e]{height:205px;padding:1px 0 10px 1px;overflow-x:hidden;margin-bottom:10px}div.v-uploader div.upload-list .qq-gallery .qq-upload-list li[data-v-18963f2e]{margin:0 10px 10px 0;height:180px}div.v-uploader div.upload-list .qq-gallery .qq-upload-list li.qq-upload-success[data-v-18963f2e]{background-color:#dff0d8}div.v-uploader div.upload-list .qq-gallery .file-upload-finish[data-v-18963f2e]{cursor:pointer;color:#fff;background:#2196f3;border-color:#2196f3}div.v-uploader div.upload-list .qq-gallery .info-show[data-v-18963f2e]{float:left;line-height:18px;white-space:nowrap;padding:0 5px;color:#333}div.v-uploader div.upload-list .qq-gallery .info-show span[data-v-18963f2e]{color:#999;margin-right:10px;font-family:Consolas}@font-face{font-family:v-upload-iconfont;src:url("data:image/eot;base64,wAgAABgIAAABAAIAAAAAAAIABQMAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAdiHmXgAAAAAAAAAAAAAAAAAAAAAAABAAaQBjAG8AbgBmAG8AbgB0AAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAQAGkAYwBvAG4AZgBvAG4AdAAAAAAAAAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzJW7kiCAAABfAAAAFZjbWFwz5JsKAAAAeQAAAGcZ2x5ZlcIODoAAAOMAAAB2GhlYWQRdEjPAAAA4AAAADZoaGVhCCEDzgAAALwAAAAkaG10eBAyAAAAAAHUAAAAEGxvY2EBYgDaAAADgAAAAAptYXhwARMAXQAAARgAAAAgbmFtZT5U/n0AAAVkAAACbXBvc3Tmlhu2AAAH1AAAAEIAAQAAA4D/gABcBEkAAAAABEMAAQAAAAAAAAAAAAAAAAAAAAQAAQAAAAEAAF7mIXZfDzz1AAsEAAAAAADXCQJdAAAAANcJAl0AAP/hBEMDNwAAAAgAAgAAAAAAAAABAAAABABRAAUAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQQNAZAABQAIAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABAAHjmgwOA/4AAXAOAAIAAAAABAAAAAAAABAAAAAPpAAAESQAABAAAAAAAAAUAAAADAAAALAAAAAQAAAFoAAEAAAAAAGIAAwABAAAALAADAAoAAAFoAAQANgAAAAgACAACAAAAeOZa5oP//wAAAHjmWuaD//8AAAAAAAAAAQAIAAgACAAAAAEAAwACAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAA0AAAAAAAAAAMAAAB4AAAAeAAAAAEAAOZaAADmWgAAAAMAAOaDAADmgwAAAAIAAAAAAHYA2gDsAAAABQAA/+EDvAMYABMAKAAxAEQAUAAAAQYrASIOAh0BISc0LgIrARUhBRUXFA4DJyMnIQcjIi4DPQEXIgYUFjI2NCYXBgcGDwEOAR4BMyEyNicuAicBNTQ+AjsBMhYdAQEZGxpTEiUcEgOQAQoYJx6F/koCogEVHyMcDz4t/kksPxQyIBMIdwwSEhkSEowIBgUFCAICBA8OAW0XFgkFCQoG/qQFDxoVvB8pAh8BDBknGkxZDSAbEmGING4dJRcJAQGAgAETGyAOpz8RGhERGhF8GhYTEhkHEA0IGBoNIyQUAXfkCxgTDB0m4wAAAAADAAAAAARDAzcAEQAnAEUAAAE0IyEiBg8BBhUUMyEyNj8BNiUhNTQmIyEiJj0BNCYrASIGFRE3PgEFFA8BDgEjISImNRE0NjsBMhYdASEyFh0BMzIWFxYD+h/9kxc0D6gKHgJuFzQOqAv9dAG3IBf+txcgIBe3FyCSGlIC/BqpGVMm/ZI1S0s1tzRMATc0TG0fNAwJAWwUGRHQDQoUGhHQDGdcFiAgFyUXICAX/hi0HyddIyLPHihMNAIlNExMNBJMNFwcGhIAAAEAAAAAA4ACkgAFAAAlJwcXAScBgLM87wIAPM2zPO8CADwAAAAAEgDeAAEAAAAAAAAAFQAAAAEAAAAAAAEACAAVAAEAAAAAAAIABwAdAAEAAAAAAAMACAAkAAEAAAAAAAQACAAsAAEAAAAAAAUACwA0AAEAAAAAAAYACAA/AAEAAAAAAAoAKwBHAAEAAAAAAAsAEwByAAMAAQQJAAAAKgCFAAMAAQQJAAEAEACvAAMAAQQJAAIADgC/AAMAAQQJAAMAEADNAAMAAQQJAAQAEADdAAMAAQQJAAUAFgDtAAMAAQQJAAYAEAEDAAMAAQQJAAoAVgETAAMAAQQJAAsAJgFpCkNyZWF0ZWQgYnkgaWNvbmZvbnQKaWNvbmZvbnRSZWd1bGFyaWNvbmZvbnRpY29uZm9udFZlcnNpb24gMS4waWNvbmZvbnRHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQAKAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQACgBpAGMAbwBuAGYAbwBuAHQAUgBlAGcAdQBsAGEAcgBpAGMAbwBuAGYAbwBuAHQAaQBjAG8AbgBmAG8AbgB0AFYAZQByAHMAaQBvAG4AIAAxAC4AMABpAGMAbwBuAGYAbwBuAHQARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAECAQMBBAEFAAF4DWZvbGRlci1vcGVuLW8EZG9uZQAAAAA=");src:url("data:image/eot;base64,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?t=1524818269295#iefix") format("embedded-opentype"),url("data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAWkAAsAAAAACBgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAAQwAAAFZW7kiCY21hcAAAAYAAAABmAAABnM+SbChnbHlmAAAB6AAAAbEAAAHYVwg4OmhlYWQAAAOcAAAALwAAADYRdEjPaGhlYQAAA8wAAAAeAAAAJAghA85obXR4AAAD7AAAABAAAAAQEDIAAGxvY2EAAAP8AAAACgAAAAoBYgDabWF4cAAABAgAAAAfAAAAIAETAF1uYW1lAAAEKAAAAUUAAAJtPlT+fXBvc3QAAAVwAAAAMQAAAELmlhu2eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk4WWcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBwYKp41Mzf8b2CIYW5gaAAKM4LkAOEpDAUAeJzFkLENwCAMBN+YRCjKKCmjDEOZKiPQs6vXILahYQIenbFfLxkBYAPAyqVEgD4QTK+65D7jcD/i0TnpCXoXyVJbmzoTeSJ5x5akHctE61bPOr3eY7L/LgN9ouSO+VI7CD9X5RLnAAB4nCWRu27UQBSG54xj7yVeG48vY89efMOeoMBKOOPdgmS3AAqIi4hUSKFIlYakQkpDsQ0SBQVa3gAhEWqQtskrIPIKCHp6xBrG5OjoP9IvHen/zkEqQn+/K5eKj2y0he6iB+gAIdC2ITHwEGIuxngb3Fh1qWMoPOVxK03Gyh7QRHO8YiJyqrU0EwwYwU5cTPgYcyjFDN+DwhsCBH12SLIBUd5C1+ejV/Vj/B7cMB2Yszv1o9tzp4js9rlOSEDIm7amqm2MN0wDTqnXUTtdrf6gmsy9DG/hEPSAs+ppL+qT49fibJjRDsBiAXY/Mj7OLWbJfsk8mwStG722z3rpTQfOf276tj7MfyBZSiMb95UpshBHDyWnSONEptdcpwk/h0kWlyKXZr4HIpdH0FxrOgPVaQgbu7TE5BotbmSn8Kin/A7X76gwL7ojfEaFcbG5fgGriNYrGkVUypI9wX/Yp+AwXy/L/f1yJSqYiuo0FHoHnjuBddXrOsy60k+OPLmRNWu1/yXkz9Lk22irEjgTVSVIJY4GjMjY/2EWeInk9zLeosBh8Xn3F0a7X68H+gf3elGXAAAAeJxjYGRgYADiuGdCavH8Nl8ZuFkYQOA6J1Msgv7/kMWZ2RzI5WBgAokCAOhECBYAeJxjYGRgYG7438AQw+LJAAQszgyMDKiABQBTJAL5AAAEAAAAA+kAAARJAAAEAAAAAAAAAAB2ANoA7AAAeJxjYGRgYGBhCGRgZQABJiDmAkIGhv9gPgMAERIBcQB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICFkYmRmZGFkZWBsYI3LT8nJbVIN78gNU83nyUlPy+VgQEAXuoHSgAAAA==") format("woff"),url("data:image/ttf;base64,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?t=1524818269295") format("truetype"),url("data:image/svg;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPCEtLQoyMDEzLTktMzA6IENyZWF0ZWQuCi0tPgo8c3ZnPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgaWNvbmZvbnQKPC9tZXRhZGF0YT4KPGRlZnM+Cgo8Zm9udCBpZD0iaWNvbmZvbnQiIGhvcml6LWFkdi14PSIxMDI0IiA+CiAgPGZvbnQtZmFjZQogICAgZm9udC1mYW1pbHk9Imljb25mb250IgogICAgZm9udC13ZWlnaHQ9IjUwMCIKICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIgogICAgdW5pdHMtcGVyLWVtPSIxMDI0IgogICAgYXNjZW50PSI4OTYiCiAgICBkZXNjZW50PSItMTI4IgogIC8+CiAgICA8bWlzc2luZy1nbHlwaCAvPgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieCIgdW5pY29kZT0ieCIgaG9yaXotYWR2LXg9IjEwMDEiCmQ9Ik0yODEgNTQzcS0yNyAtMSAtNTMgLTFoLTgzcS0xOCAwIC0zNi41IC02dC0zMi41IC0xOC41dC0yMyAtMzJ0LTkgLTQ1LjV2LTc2aDkxMnY0MXEwIDE2IC0wLjUgMzB0LTAuNSAxOHEwIDEzIC01IDI5dC0xNyAyOS41dC0zMS41IDIyLjV0LTQ5LjUgOWgtMTMzdi05N2gtNDM4djk3ek05NTUgMzEwdi01MnEwIC0yMyAwLjUgLTUydDAuNSAtNTh0LTEwLjUgLTQ3LjV0LTI2IC0zMHQtMzMgLTE2dC0zMS41IC00LjVxLTE0IC0xIC0yOS41IC0wLjUKdC0yOS41IDAuNWgtMzJsLTQ1IDEyOGgtNDM5bC00NCAtMTI4aC0yOWgtMzRxLTIwIDAgLTQ1IDFxLTI1IDAgLTQxIDkuNXQtMjUuNSAyM3QtMTMuNSAyOS41dC00IDMwdjE2N2g5MTF6TTE2MyAyNDdxLTEyIDAgLTIxIC04LjV0LTkgLTIxLjV0OSAtMjEuNXQyMSAtOC41cTEzIDAgMjIgOC41dDkgMjEuNXQtOSAyMS41dC0yMiA4LjV6TTMxNiAxMjNxLTggLTI2IC0xNCAtNDhxLTUgLTE5IC0xMC41IC0zN3QtNy41IC0yNXQtMyAtMTV0MSAtMTQuNQp0OS41IC0xMC41dDIxLjUgLTRoMzdoNjdoODFoODBoNjRoMzZxMjMgMCAzNCAxMnQyIDM4cS01IDEzIC05LjUgMzAuNXQtOS41IDM0LjVxLTUgMTkgLTExIDM5aC0zNjh6TTMzNiA0OTh2MjI4cTAgMTEgMi41IDIzdDEwIDIxLjV0MjAuNSAxNS41dDM0IDZoMTg4cTMxIDAgNTEuNSAtMTQuNXQyMC41IC01Mi41di0yMjdoLTMyN3oiIC8+CiAgICAKCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJmb2xkZXItb3Blbi1vIiB1bmljb2RlPSImIzU5MDExOyIgZD0iTTEwMTcuNzE0Mjg2IDM2NHEwIDIwLTMwLjI4NTcxNSAyMEgzNjUuNzE0Mjg2cS0yMi44NTcxNDMgMC00OC44NTcxNDMtMTIuMjg1NzE0VDI3NiAzNDEuNzE0Mjg2bC0xNjgtMjA3LjQyODU3MnEtMTAuMjg1NzE0LTEzLjcxNDI4Ni0xMC4yODU3MTQtMjIuODU3MTQzIDAtMjAgMzAuMjg1NzE0LTIwaDYyMS43MTQyODZxMjIuODU3MTQzIDAgNDkuMTQyODU3IDEyLjU3MTQyOXQ0MC41NzE0MjggMzAuMjg1NzE0bDE2OCAyMDcuNDI4NTcycTEwLjI4NTcxNCAxMi41NzE0MjkgMTAuMjg1NzE1IDIyLjI4NTcxNHpNMzY1LjcxNDI4NiA0NTcuMTQyODU3aDQzOC44NTcxNDNWNTQ4LjU3MTQyOXEwIDIyLjg1NzE0My0xNiAzOC44NTcxNDJ0LTM4Ljg1NzE0MyAxNkg0MjAuNTcxNDI5cS0yMi44NTcxNDMgMC0zOC44NTcxNDMgMTZ0LTE2IDM4Ljg1NzE0M3YzNi41NzE0MjlxMCAyMi44NTcxNDMtMTYgMzguODU3MTQzdC0zOC44NTcxNDMgMTZIMTI4cS0yMi44NTcxNDMgMC0zOC44NTcxNDMtMTZ0LTE2LTM4Ljg1NzE0M3YtNDg3LjQyODU3MmwxNDYuMjg1NzE0IDE4MHEyNS4xNDI4NTcgMzAuMjg1NzE0IDY2LjI4NTcxNSA1MFQzNjUuNzE0Mjg2IDQ1Ny4xNDI4NTd6IG03MjUuMTQyODU3LTkzLjE0Mjg1N3EwLTM1LjQyODU3MS0yNi4yODU3MTQtNjguNTcxNDI5bC0xNjguNTcxNDI5LTIwNy40Mjg1NzFxLTI0LjU3MTQyOS0zMC4yODU3MTQtNjYuMjg1NzE0LTUwdC04MC0xOS43MTQyODZIMTI4cS01Mi41NzE0MjkgMC05MC4yODU3MTQgMzcuNzE0Mjg2VDAgMTQ2LjI4NTcxNFY2OTQuODU3MTQzcTAgNTIuNTcxNDI5IDM3LjcxNDI4NiA5MC4yODU3MTR0OTAuMjg1NzE0IDM3LjcxNDI4NmgxODIuODU3MTQzcTUyLjU3MTQyOSAwIDkwLjI4NTcxNC0zNy43MTQyODZ0MzcuNzE0Mjg2LTkwLjI4NTcxNHYtMTguMjg1NzE0aDMxMC44NTcxNDNxNTIuNTcxNDI5IDAgOTAuMjg1NzE0LTM3LjcxNDI4NnQzNy43MTQyODYtOTAuMjg1NzE0di05MS40Mjg1NzJoMTA5LjcxNDI4NXEzMC44NTcxNDMgMCA1Ni41NzE0MjktMTR0MzguMjg1NzE0LTQwLjI4NTcxNHE4LjU3MTQyOS0xOC4yODU3MTQgOC41NzE0MjktMzguODU3MTQzeiIgIGhvcml6LWFkdi14PSIxMDk3IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9ImRvbmUiIHVuaWNvZGU9IiYjNTg5NzA7IiBkPSJNMzg0IDIwNC44TDIwNC44IDM4NGwtNTkuNzMzMzMzLTU5LjczMzMzM0wzODQgODUuMzMzMzMzIDg5NiA1OTcuMzMzMzMzbC01OS43MzMzMzMgNTkuNzMzMzM0eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAoKCiAgPC9mb250Pgo8L2RlZnM+PC9zdmc+Cg==?t=1524818269295#v-upload-iconfont") format("svg")}.v-upload-iconfont[data-v-18963f2e]{font-family:v-upload-iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-uploader-open[data-v-18963f2e]:before{content:"\\E683"}.icon-uploader-done[data-v-18963f2e]:before{content:"\\E65A"}',""])},function(e,t){e.exports=function(e,t){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],a=r[0],s=r[1],A=r[2],l=r[3],u={id:e+":"+o,css:s,media:A,sourceMap:l};i[a]?i[a].parts.push(u):n.push(i[a]={id:a,parts:[u]})}return n}},function(e,t){e.exports=function(e,t,n,i,o,r){var a,s=e=e||{},A=typeof e.default;"object"!==A&&"function"!==A||(a=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o);var u;if(r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=u):i&&(u=i),u){var d=l.functional,c=d?l.render:l.beforeCreate;d?(l._injectStyles=u,l.render=function(e,t){return u.call(t),c(e,t)}):l.beforeCreate=c?[].concat(c,u):[u]}return{esModule:a,exports:s,options:l}}},function(e,t,n){"use strict";e.exports=n(10)},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;!function(global){var qq=function(e){"use strict";return{hide:function(){return e.style.display="none",this},attach:function(t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n),function(){qq(e).detach(t,n)}},detach:function(t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.attachEvent&&e.detachEvent("on"+t,n),this},contains:function(t){return!!t&&(e===t||(e.contains?e.contains(t):!!(8&t.compareDocumentPosition(e))))},insertBefore:function(t){return t.parentNode.insertBefore(e,t),this},remove:function(){return e.parentNode.removeChild(e),this},css:function(t){if(null==e.style)throw new qq.Error("Can't apply style to node as it is not on the HTMLElement prototype chain!");return null!=t.opacity&&"string"!=typeof e.style.opacity&&void 0!==e.filters&&(t.filter="alpha(opacity="+Math.round(100*t.opacity)+")"),qq.extend(e.style,t),this},hasClass:function(t,n){var i=new RegExp("(^| )"+t+"( |$)");return i.test(e.className)||!(!n||!i.test(e.parentNode.className))},addClass:function(t){return qq(e).hasClass(t)||(e.className+=" "+t),this},removeClass:function(t){var n=new RegExp("(^| )"+t+"( |$)");return e.className=e.className.replace(n," ").replace(/^\s+|\s+$/g,""),this},getByClass:function(t,n){var i,o=[];return n&&e.querySelector?e.querySelector("."+t):e.querySelectorAll?e.querySelectorAll("."+t):(i=e.getElementsByTagName("*"),qq.each(i,function(e,n){qq(n).hasClass(t)&&o.push(n)}),n?o[0]:o)},getFirstByClass:function(t){return qq(e).getByClass(t,!0)},children:function(){for(var t=[],n=e.firstChild;n;)1===n.nodeType&&t.push(n),n=n.nextSibling;return t},setText:function(t){return e.innerText=t,e.textContent=t,this},clearText:function(){return qq(e).setText("")},hasAttribute:function(t){var n;return e.hasAttribute?!!e.hasAttribute(t)&&null==/^false$/i.exec(e.getAttribute(t)):void 0!==(n=e[t])&&null==/^false$/i.exec(n)}}};!function(){"use strict";qq.canvasToBlob=function(e,t,n){return qq.dataUriToBlob(e.toDataURL(t,n))},qq.dataUriToBlob=function(e){var t,n,i,o;return n=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):decodeURI(e.split(",")[1]),o=e.split(",")[0].split(":")[1].split(";")[0],t=new ArrayBuffer(n.length),i=new Uint8Array(t),qq.each(n,function(e,t){i[e]=t.charCodeAt(0)}),function(e,t){var n=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,i=n&&new n;return i?(i.append(e),i.getBlob(t)):new Blob([e],{type:t})}(t,o)},qq.log=function(e,t){window.console&&(t&&"info"!==t?window.console[t]?window.console[t](e):window.console.log("<"+t+"> "+e):window.console.log(e))},qq.isObject=function(e){return e&&!e.nodeType&&"[object Object]"===Object.prototype.toString.call(e)},qq.isFunction=function(e){return"function"==typeof e},qq.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)||e&&window.ArrayBuffer&&e.buffer&&e.buffer.constructor===ArrayBuffer},qq.isItemList=function(e){return"[object DataTransferItemList]"===Object.prototype.toString.call(e)},qq.isNodeList=function(e){return"[object NodeList]"===Object.prototype.toString.call(e)||e.item&&e.namedItem},qq.isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},qq.trimStr=function(e){return String.prototype.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},qq.format=function(e){var t=Array.prototype.slice.call(arguments,1),n=e,i=n.indexOf("{}");return qq.each(t,function(e,t){var o=n.substring(0,i),r=n.substring(i+2);if(n=o+t+r,(i=n.indexOf("{}",i+t.length))<0)return!1}),n},qq.isFile=function(e){return window.File&&"[object File]"===Object.prototype.toString.call(e)},qq.isFileList=function(e){return window.FileList&&"[object FileList]"===Object.prototype.toString.call(e)},qq.isFileOrInput=function(e){return qq.isFile(e)||qq.isInput(e)},qq.isInput=function(e,t){var n=function(e){var n=e.toLowerCase();return t?"file"!==n:"file"===n};return!!(window.HTMLInputElement&&"[object HTMLInputElement]"===Object.prototype.toString.call(e)&&e.type&&n(e.type))||!!(e.tagName&&"input"===e.tagName.toLowerCase()&&e.type&&n(e.type))},qq.isBlob=function(e){if(window.Blob&&"[object Blob]"===Object.prototype.toString.call(e))return!0},qq.isXhrUploadSupported=function(){var e=document.createElement("input");return e.type="file",void 0!==e.multiple&&"undefined"!=typeof File&&"undefined"!=typeof FormData&&void 0!==qq.createXhrInstance().upload},qq.createXhrInstance=function(){if(window.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(e){return qq.log("Neither XHR or ActiveX are supported!","error"),null}},qq.isFolderDropSupported=function(e){return e.items&&e.items.length>0&&e.items[0].webkitGetAsEntry},qq.isFileChunkingSupported=function(){return!qq.androidStock()&&qq.isXhrUploadSupported()&&(void 0!==File.prototype.slice||void 0!==File.prototype.webkitSlice||void 0!==File.prototype.mozSlice)},qq.sliceBlob=function(e,t,n){return(e.slice||e.mozSlice||e.webkitSlice).call(e,t,n)},qq.arrayBufferToHex=function(e){var t="",n=new Uint8Array(e);return qq.each(n,function(e,n){var i=n.toString(16);i.length<2&&(i="0"+i),t+=i}),t},qq.readBlobToHex=function(e,t,n){var i=qq.sliceBlob(e,t,t+n),o=new FileReader,r=new qq.Promise;return o.onload=function(){r.success(qq.arrayBufferToHex(o.result))},o.onerror=r.failure,o.readAsArrayBuffer(i),r},qq.extend=function(e,t,n){return qq.each(t,function(t,i){n&&qq.isObject(i)?(void 0===e[t]&&(e[t]={}),qq.extend(e[t],i,!0)):e[t]=i}),e},qq.override=function(e,t){var n={},i=t(n);return qq.each(i,function(t,i){void 0!==e[t]&&(n[t]=e[t]),e[t]=i}),e},qq.indexOf=function(e,t,n){if(e.indexOf)return e.indexOf(t,n);n=n||0;var i=e.length;for(n<0&&(n+=i);n<i;n+=1)if(e.hasOwnProperty(n)&&e[n]===t)return n;return-1},qq.getUniqueId=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})},qq.ie=function(){return-1!==navigator.userAgent.indexOf("MSIE")||-1!==navigator.userAgent.indexOf("Trident")},qq.ie7=function(){return-1!==navigator.userAgent.indexOf("MSIE 7")},qq.ie8=function(){return-1!==navigator.userAgent.indexOf("MSIE 8")},qq.ie10=function(){return-1!==navigator.userAgent.indexOf("MSIE 10")},qq.ie11=function(){return qq.ie()&&-1!==navigator.userAgent.indexOf("rv:11")},qq.edge=function(){return navigator.userAgent.indexOf("Edge")>=0},qq.safari=function(){return void 0!==navigator.vendor&&-1!==navigator.vendor.indexOf("Apple")},qq.chrome=function(){return void 0!==navigator.vendor&&-1!==navigator.vendor.indexOf("Google")},qq.opera=function(){return void 0!==navigator.vendor&&-1!==navigator.vendor.indexOf("Opera")},qq.firefox=function(){return!qq.edge()&&!qq.ie11()&&-1!==navigator.userAgent.indexOf("Mozilla")&&void 0!==navigator.vendor&&""===navigator.vendor},qq.windows=function(){return"Win32"===navigator.platform},qq.android=function(){return-1!==navigator.userAgent.toLowerCase().indexOf("android")},qq.androidStock=function(){return qq.android()&&navigator.userAgent.toLowerCase().indexOf("chrome")<0},qq.ios6=function(){return qq.ios()&&-1!==navigator.userAgent.indexOf(" OS 6_")},qq.ios7=function(){return qq.ios()&&-1!==navigator.userAgent.indexOf(" OS 7_")},qq.ios8=function(){return qq.ios()&&-1!==navigator.userAgent.indexOf(" OS 8_")},qq.ios800=function(){return qq.ios()&&-1!==navigator.userAgent.indexOf(" OS 8_0 ")},qq.ios=function(){return-1!==navigator.userAgent.indexOf("iPad")||-1!==navigator.userAgent.indexOf("iPod")||-1!==navigator.userAgent.indexOf("iPhone")},qq.iosChrome=function(){return qq.ios()&&-1!==navigator.userAgent.indexOf("CriOS")},qq.iosSafari=function(){return qq.ios()&&!qq.iosChrome()&&-1!==navigator.userAgent.indexOf("Safari")},qq.iosSafariWebView=function(){return qq.ios()&&!qq.iosChrome()&&!qq.iosSafari()},qq.preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},qq.toElement=function(){var e=document.createElement("div");return function(t){e.innerHTML=t;var n=e.firstChild;return e.removeChild(n),n}}(),qq.each=function(e,t){var n;if(e)if(window.Storage&&e.constructor===window.Storage)for(n=0;n<e.length&&!1!==t(e.key(n),e.getItem(e.key(n)));n++);else if(qq.isArray(e)||qq.isItemList(e)||qq.isNodeList(e))for(n=0;n<e.length&&!1!==t(n,e[n]);n++);else if(qq.isString(e))for(n=0;n<e.length&&!1!==t(n,e.charAt(n));n++);else for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&!1===t(n,e[n]))break},qq.bind=function(e,t){if(qq.isFunction(e)){var n=Array.prototype.slice.call(arguments,2);return function(){var i=qq.extend([],n);return arguments.length&&(i=i.concat(Array.prototype.slice.call(arguments))),e.apply(t,i)}}throw new Error("first parameter must be a function!")},qq.obj2url=function(e,t,n){var i=[],o="&",r=function(e,n){var o=t?/\[\]$/.test(t)?t:t+"["+n+"]":n;"undefined"!==o&&"undefined"!==n&&i.push("object"==typeof e?qq.obj2url(e,o,!0):"[object Function]"===Object.prototype.toString.call(e)?encodeURIComponent(o)+"="+encodeURIComponent(e()):encodeURIComponent(o)+"="+encodeURIComponent(e))};return!n&&t?(o=/\?/.test(t)?/\?$/.test(t)?"":"&":"?",i.push(t),i.push(qq.obj2url(e))):"[object Array]"===Object.prototype.toString.call(e)&&void 0!==e?qq.each(e,function(e,t){r(t,e)}):void 0!==e&&null!==e&&"object"==typeof e?qq.each(e,function(e,t){r(t,e)}):i.push(encodeURIComponent(t)+"="+encodeURIComponent(e)),t?i.join(o):i.join(o).replace(/^&/,"").replace(/%20/g,"+")},qq.obj2FormData=function(e,t,n){return t||(t=new FormData),qq.each(e,function(e,i){e=n?n+"["+e+"]":e,qq.isObject(i)?qq.obj2FormData(i,t,e):qq.isFunction(i)?t.append(e,i()):t.append(e,i)}),t},qq.obj2Inputs=function(e,t){var n;return t||(t=document.createElement("form")),qq.obj2FormData(e,{append:function(e,i){n=document.createElement("input"),n.setAttribute("name",e),n.setAttribute("value",i),t.appendChild(n)}}),t},qq.parseJson=function(json){return window.JSON&&qq.isFunction(JSON.parse)?JSON.parse(json):eval("("+json+")")},qq.getExtension=function(e){var t=e.lastIndexOf(".")+1;if(t>0)return e.substr(t,e.length-t)},qq.getFilename=function(e){return qq.isInput(e)?e.value.replace(/.*(\/|\\)/,""):qq.isFile(e)&&null!==e.fileName&&void 0!==e.fileName?e.fileName:e.name},qq.DisposeSupport=function(){var e=[];return{dispose:function(){var t;do{(t=e.shift())&&t()}while(t)},attach:function(){var e=arguments;this.addDisposer(qq(e[0]).attach.apply(this,Array.prototype.slice.call(arguments,1)))},addDisposer:function(t){e.push(t)}}}}(),function(){"use strict";void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=function(){return qq}.call(exports,__webpack_require__,exports,module))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}(),function(){"use strict";qq.Error=function(e){this.message="[Fine Uploader "+qq.version+"] "+e},qq.Error.prototype=new Error}(),qq.version="5.16.2",qq.supportedFeatures=function(){"use strict";function e(){if(window.XMLHttpRequest){return void 0!==qq.createXhrInstance().withCredentials}return!1}function t(){return void 0!==window.XDomainRequest}var n,i,o,r,a,s,A,l,u,d,c,p,h,f,g;return n=function(){var e,t=!0;try{e=document.createElement("input"),e.type="file",qq(e).hide(),e.disabled&&(t=!1)}catch(e){t=!1}return t}(),r=n&&qq.isXhrUploadSupported(),i=r&&!qq.androidStock(),o=r&&function(){var e=document.createElement("span");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&!qq.android()&&!qq.ios()}(),a=o&&function(){var e=document.createElement("input");return e.type="file",!!("webkitdirectory"in(e||document.querySelectorAll("input[type=file]")[0]))}(),s=r&&qq.isFileChunkingSupported(),A=r&&s&&function(){try{return!!window.localStorage&&qq.isFunction(window.localStorage.setItem)}catch(e){return!1}}(),l=r&&function(){return(qq.chrome()||qq.opera())&&void 0!==navigator.userAgent.match(/Chrome\/[1][4-9]|Chrome\/[2-9][0-9]/)}(),u=n&&(void 0!==window.postMessage||r),c=e(),d=t(),p=function(){return!!e()||t()}(),h=function(){return void 0!==document.createElement("input").webkitdirectory}(),f=r&&void 0!==window.FileReader,g=function(){return!!r&&(!qq.androidStock()&&!qq.iosChrome())}(),{ajaxUploading:r,blobUploading:i,canDetermineSize:r,chunking:s,deleteFileCors:p,deleteFileCorsXdr:d,deleteFileCorsXhr:c,dialogElement:!!window.HTMLDialogElement,fileDrop:o,folderDrop:a,folderSelection:h,imagePreviews:f,imageValidation:f,itemSizeValidation:r,pause:s,progressBar:g,resume:A,scaling:f&&i,tiffPreviews:qq.safari(),unlimitedScaledImageSize:!qq.ios(),uploading:n,uploadCors:u,uploadCustomHeaders:r,uploadNonMultipart:r,uploadViaPaste:l}}(),qq.isGenericPromise=function(e){"use strict";return!!(e&&e.then&&qq.isFunction(e.then))},qq.Promise=function(){"use strict";var e,t,n=[],i=[],o=[],r=0;qq.extend(this,{then:function(o,a){return 0===r?(o&&n.push(o),a&&i.push(a)):-1===r?a&&a.apply(null,t):o&&o.apply(null,e),this},done:function(n){return 0===r?o.push(n):n.apply(null,void 0===t?e:t),this},success:function(){return r=1,e=arguments,n.length&&qq.each(n,function(t,n){n.apply(null,e)}),o.length&&qq.each(o,function(t,n){n.apply(null,e)}),this},failure:function(){return r=-1,t=arguments,i.length&&qq.each(i,function(e,n){n.apply(null,t)}),o.length&&qq.each(o,function(e,n){n.apply(null,t)}),this}})},qq.BlobProxy=function(e,t){"use strict";qq.extend(this,{referenceBlob:e,create:function(){return t(e)}})},qq.UploadButton=function(e){"use strict";function t(){var e=document.createElement("input");return e.setAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME,i),e.setAttribute("title",a.title),o.setMultiple(a.multiple,e),a.folders&&qq.supportedFeatures.folderSelection&&e.setAttribute("webkitdirectory",""),a.acceptFiles&&e.setAttribute("accept",a.acceptFiles),e.setAttribute("type","file"),e.setAttribute("name",a.name),qq(e).css({position:"absolute",right:0,top:0,fontFamily:"Arial",fontSize:qq.ie()&&!qq.ie8()?"3500px":"118px",margin:0,padding:0,cursor:"pointer",opacity:0}),!qq.ie7()&&qq(e).css({height:"100%"}),a.element.appendChild(e),r.attach(e,"change",function(){a.onChange(e)}),r.attach(e,"mouseover",function(){qq(a.element).addClass(a.hoverClass)}),r.attach(e,"mouseout",function(){qq(a.element).removeClass(a.hoverClass)}),r.attach(e,"focus",function(){qq(a.element).addClass(a.focusClass)}),r.attach(e,"blur",function(){qq(a.element).removeClass(a.focusClass)}),e}var n,i,o=this,r=new qq.DisposeSupport,a={acceptFiles:null,element:null,focusClass:"qq-upload-button-focus",folders:!1,hoverClass:"qq-upload-button-hover",ios8BrowserCrashWorkaround:!1,multiple:!1,name:"qqfile",onChange:function(e){},title:null};qq.extend(a,e),i=qq.getUniqueId(),qq(a.element).css({position:"relative",overflow:"hidden",direction:"ltr"}),qq.extend(this,{getInput:function(){return n},getButtonId:function(){return i},setMultiple:function(e,t){var n=t||this.getInput();a.ios8BrowserCrashWorkaround&&qq.ios8()&&(qq.iosChrome()||qq.iosSafariWebView())?n.setAttribute("multiple",""):e?n.setAttribute("multiple",""):n.removeAttribute("multiple")},setAcceptFiles:function(e){e!==a.acceptFiles&&n.setAttribute("accept",e)},reset:function(){n.parentNode&&qq(n).remove(),qq(a.element).removeClass(a.focusClass),n=null,n=t()}}),n=t()},qq.UploadButton.BUTTON_ID_ATTR_NAME="qq-button-id",qq.UploadData=function(e){"use strict";function t(e){if(qq.isArray(e)){var t=[];return qq.each(e,function(e,n){t.push(o[n])}),t}return o[e]}function n(e){if(qq.isArray(e)){var t=[];return qq.each(e,function(e,n){t.push(o[r[n]])}),t}return o[r[e]]}function i(e){var t=[],n=[].concat(e);return qq.each(n,function(e,n){var i=a[n];void 0!==i&&qq.each(i,function(e,n){t.push(o[n])})}),t}var o=[],r={},a={},s={},A={};qq.extend(this,{addFile:function(t){var n=t.status||qq.status.SUBMITTING,i=o.push({name:t.name,originalName:t.name,uuid:t.uuid,size:null==t.size?-1:t.size,status:n,file:t.file})-1;return t.batchId&&(o[i].batchId=t.batchId,void 0===A[t.batchId]&&(A[t.batchId]=[]),A[t.batchId].push(i)),t.proxyGroupId&&(o[i].proxyGroupId=t.proxyGroupId,void 0===s[t.proxyGroupId]&&(s[t.proxyGroupId]=[]),s[t.proxyGroupId].push(i)),o[i].id=i,r[t.uuid]=i,void 0===a[n]&&(a[n]=[]),a[n].push(i),t.onBeforeStatusChange&&t.onBeforeStatusChange(i),e.onStatusChange(i,null,n),i},retrieve:function(e){return qq.isObject(e)&&o.length?void 0!==e.id?t(e.id):void 0!==e.uuid?n(e.uuid):e.status?i(e.status):void 0:qq.extend([],o,!0)},removeFileRef:function(e){var n=t(e);n&&delete n.file},reset:function(){o=[],r={},a={},A={}},setStatus:function(t,n){var i=o[t].status,r=qq.indexOf(a[i],t);a[i].splice(r,1),o[t].status=n,void 0===a[n]&&(a[n]=[]),a[n].push(t),e.onStatusChange(t,i,n)},uuidChanged:function(e,t){var n=o[e].uuid;o[e].uuid=t,r[t]=e,delete r[n]},updateName:function(e,t){o[e].name=t},updateSize:function(e,t){o[e].size=t},setParentId:function(e,t){o[e].parentId=t},getIdsInProxyGroup:function(e){var t=o[e].proxyGroupId;return t?s[t]:[]},getIdsInBatch:function(e){var t=o[e].batchId;return A[t]}})},qq.status={SUBMITTING:"submitting",SUBMITTED:"submitted",REJECTED:"rejected",QUEUED:"queued",CANCELED:"canceled",PAUSED:"paused",UPLOADING:"uploading",UPLOAD_FINALIZING:"upload finalizing",UPLOAD_RETRYING:"retrying upload",UPLOAD_SUCCESSFUL:"upload successful",UPLOAD_FAILED:"upload failed",DELETE_FAILED:"delete failed",DELETING:"deleting",DELETED:"deleted"},function(){"use strict";qq.basePublicApi={addBlobs:function(e,t,n){this.addFiles(e,t,n)},addInitialFiles:function(e){var t=this;qq.each(e,function(e,n){t._addCannedFile(n)})},addFiles:function(e,t,n){this._maybeHandleIos8SafariWorkaround();var i=0===this._storedIds.length?qq.getUniqueId():this._currentBatchId,o=qq.bind(function(e){this._handleNewFile({blob:e,name:this._options.blobs.defaultName},i,u)},this),r=qq.bind(function(e){this._handleNewFile(e,i,u)},this),a=qq.bind(function(e){var t=qq.canvasToBlob(e);this._handleNewFile({blob:t,name:this._options.blobs.defaultName+".png"},i,u)},this),s=qq.bind(function(e){var t=e.quality&&e.quality/100,n=qq.canvasToBlob(e.canvas,e.type,t);this._handleNewFile({blob:n,name:e.name},i,u)},this),A=qq.bind(function(e){if(qq.isInput(e)&&qq.supportedFeatures.ajaxUploading){var t=Array.prototype.slice.call(e.files),n=this;qq.each(t,function(e,t){n._handleNewFile(t,i,u)})}else this._handleNewFile(e,i,u)},this),l=this,u=[];this._currentBatchId=i,e&&(!function(){qq.isFileList(e)&&(e=Array.prototype.slice.call(e)),e=[].concat(e)}(),qq.each(e,function(e,t){qq.isFileOrInput(t)?A(t):qq.isBlob(t)?o(t):qq.isObject(t)?t.blob&&t.name?r(t):t.canvas&&t.name&&s(t):t.tagName&&"canvas"===t.tagName.toLowerCase()?a(t):l.log(t+" is not a valid file container!  Ignoring!","warn")}),this.log("Received "+u.length+" files."),this._prepareItemsForUpload(u,t,n))},cancel:function(e){var t=this._uploadData.retrieve({id:e});t&&t.status===qq.status.UPLOAD_FINALIZING?this.log(qq.format("Ignoring cancel for file ID {} ({}).  Finalizing upload.",e,this.getName(e)),"error"):this._handler.cancel(e)},cancelAll:function(){var e=[],t=this;qq.extend(e,this._storedIds),qq.each(e,function(e,n){t.cancel(n)}),this._handler.cancelAll()},clearStoredFiles:function(){this._storedIds=[]},continueUpload:function(e){var t=this._uploadData.retrieve({id:e});return!(!qq.supportedFeatures.pause||!this._options.chunking.enabled)&&(t.status===qq.status.PAUSED?(this.log(qq.format("Paused file ID {} ({}) will be continued.  Not paused.",e,this.getName(e))),this._uploadFile(e),!0):(this.log(qq.format("Ignoring continue for file ID {} ({}).  Not paused.",e,this.getName(e)),"error"),!1))},deleteFile:function(e){return this._onSubmitDelete(e)},doesExist:function(e){return this._handler.isValid(e)},drawThumbnail:function(e,t,n,i,o){var r,a,s=new qq.Promise;return this._imageGenerator?(r=this._thumbnailUrls[e],a={customResizeFunction:o,maxSize:n>0?n:null,scale:n>0},!i&&qq.supportedFeatures.imagePreviews&&(r=this.getFile(e)),null==r?s.failure({container:t,error:"File or URL not found."}):this._imageGenerator.generate(r,t,a).then(function(e){s.success(e)},function(e,t){s.failure({container:e,error:t||"Problem generating thumbnail"})})):s.failure({container:t,error:"Missing image generator module"}),s},getButton:function(e){return this._getButton(this._buttonIdsForFileIds[e])},getEndpoint:function(e){return this._endpointStore.get(e)},getFile:function(e){var t,n=this._handler.getFile(e);return n||(t=this._uploadData.retrieve({id:e}))&&(n=t.file),n||null},getInProgress:function(){return this._uploadData.retrieve({status:[qq.status.UPLOADING,qq.status.UPLOAD_RETRYING,qq.status.QUEUED]}).length},getName:function(e){return this._uploadData.retrieve({id:e}).name},getParentId:function(e){var t=this.getUploads({id:e}),n=null;return t&&void 0!==t.parentId&&(n=t.parentId),n},getResumableFilesData:function(){return this._handler.getResumableFilesData()},getSize:function(e){return this._uploadData.retrieve({id:e}).size},getNetUploads:function(){return this._netUploaded},getRemainingAllowedItems:function(){var e=this._currentItemLimit;return e>0?e-this._netUploadedOrQueued:null},getUploads:function(e){return this._uploadData.retrieve(e)},getUuid:function(e){return this._uploadData.retrieve({id:e}).uuid},isResumable:function(e){return this._handler.hasResumeRecord(e)},log:function(e,t){!this._options.debug||t&&"info"!==t?t&&"info"!==t&&qq.log("[Fine Uploader "+qq.version+"] "+e,t):qq.log("[Fine Uploader "+qq.version+"] "+e)},pauseUpload:function(e){var t=this._uploadData.retrieve({id:e});if(!qq.supportedFeatures.pause||!this._options.chunking.enabled)return!1;if(qq.indexOf([qq.status.UPLOADING,qq.status.UPLOAD_RETRYING],t.status)>=0){if(this._handler.pause(e))return this._uploadData.setStatus(e,qq.status.PAUSED),!0;this.log(qq.format("Unable to pause file ID {} ({}).",e,this.getName(e)),"error")}else this.log(qq.format("Ignoring pause for file ID {} ({}).  Not in progress.",e,this.getName(e)),"error");return!1},removeFileRef:function(e){this._handler.expunge(e),this._uploadData.removeFileRef(e)},reset:function(){this.log("Resetting uploader..."),this._handler.reset(),this._storedIds=[],this._autoRetries=[],this._retryTimeouts=[],this._preventRetries=[],this._thumbnailUrls=[],qq.each(this._buttons,function(e,t){t.reset()}),this._paramsStore.reset(),this._endpointStore.reset(),this._netUploadedOrQueued=0,this._netUploaded=0,this._uploadData.reset(),this._buttonIdsForFileIds=[],this._pasteHandler&&this._pasteHandler.reset(),this._options.session.refreshOnReset&&this._refreshSessionData(),this._succeededSinceLastAllComplete=[],this._failedSinceLastAllComplete=[],this._totalProgress&&this._totalProgress.reset(),this._customResumeDataStore.reset()},retry:function(e){return this._manualRetry(e)},scaleImage:function(e,t){var n=this;return qq.Scaler.prototype.scaleImage(e,t,{log:qq.bind(n.log,n),getFile:qq.bind(n.getFile,n),uploadData:n._uploadData})},setCustomHeaders:function(e,t){this._customHeadersStore.set(e,t)},setCustomResumeData:function(e,t){this._customResumeDataStore.set(t,e)},setDeleteFileCustomHeaders:function(e,t){this._deleteFileCustomHeadersStore.set(e,t)},setDeleteFileEndpoint:function(e,t){this._deleteFileEndpointStore.set(e,t)},setDeleteFileParams:function(e,t){this._deleteFileParamsStore.set(e,t)},setEndpoint:function(e,t){this._endpointStore.set(e,t)},setForm:function(e){this._updateFormSupportAndParams(e)},setItemLimit:function(e){this._currentItemLimit=e},setName:function(e,t){this._uploadData.updateName(e,t)},setParams:function(e,t){this._paramsStore.set(e,t)},setUuid:function(e,t){return this._uploadData.uuidChanged(e,t)},setStatus:function(e,t){if(!this.getUploads({id:e}))throw new qq.Error(e+" is not a valid file ID.");switch(t){case qq.status.DELETED:this._onDeleteComplete(e,null,!1);break;case qq.status.DELETE_FAILED:this._onDeleteComplete(e,null,!0);break;default:var n="Method setStatus called on '"+name+"' not implemented yet for "+t;throw this.log(n),new qq.Error(n)}},uploadStoredFiles:function(){0===this._storedIds.length?this._itemError("noFilesError"):this._uploadStoredFiles()}},qq.basePrivateApi={_addCannedFile:function(e){var t=this;return this._uploadData.addFile({uuid:e.uuid,name:e.name,size:e.size,status:qq.status.UPLOAD_SUCCESSFUL,onBeforeStatusChange:function(n){e.deleteFileEndpoint&&t.setDeleteFileEndpoint(e.deleteFileEndpoint,n),e.deleteFileParams&&t.setDeleteFileParams(e.deleteFileParams,n),e.thumbnailUrl&&(t._thumbnailUrls[n]=e.thumbnailUrl),t._netUploaded++,t._netUploadedOrQueued++}})},_annotateWithButtonId:function(e,t){qq.isFile(e)&&(e.qqButtonId=this._getButtonId(t))},_batchError:function(e){this._options.callbacks.onError(null,null,e,void 0)},_createDeleteHandler:function(){var e=this;return new qq.DeleteFileAjaxRequester({method:this._options.deleteFile.method.toUpperCase(),maxConnections:this._options.maxConnections,uuidParamName:this._options.request.uuidName,customHeaders:this._deleteFileCustomHeadersStore,paramsStore:this._deleteFileParamsStore,endpointStore:this._deleteFileEndpointStore,cors:this._options.cors,log:qq.bind(e.log,e),onDelete:function(t){e._onDelete(t),e._options.callbacks.onDelete(t)},onDeleteComplete:function(t,n,i){e._onDeleteComplete(t,n,i),e._options.callbacks.onDeleteComplete(t,n,i)}})},_createPasteHandler:function(){var e=this;return new qq.PasteSupport({targetElement:this._options.paste.targetElement,callbacks:{log:qq.bind(e.log,e),pasteReceived:function(t){e._handleCheckedCallback({name:"onPasteReceived",callback:qq.bind(e._options.callbacks.onPasteReceived,e,t),onSuccess:qq.bind(e._handlePasteSuccess,e,t),identifier:"pasted image"})}}})},_createStore:function(e,t){var n={},i=e,o={},r=t,a=function(e){return qq.isObject(e)?qq.extend({},e):e},s=function(){return qq.isFunction(r)?r():r},A=function(e,t){r&&qq.isObject(t)&&qq.extend(t,s()),o[e]&&qq.extend(t,o[e])};return{set:function(e,t){null==t?(n={},i=a(e)):n[t]=a(e)},get:function(e){var t;return t=null!=e&&n[e]?n[e]:a(i),A(e,t),a(t)},addReadOnly:function(e,t){qq.isObject(n)&&(null===e?qq.isFunction(t)?r=t:(r=r||{},qq.extend(r,t)):(o[e]=o[e]||{},qq.extend(o[e],t)))},remove:function(e){return delete n[e]},reset:function(){n={},o={},i=e}}},_createUploadDataTracker:function(){var e=this;return new qq.UploadData({getName:function(t){return e.getName(t)},getUuid:function(t){return e.getUuid(t)},getSize:function(t){return e.getSize(t)},onStatusChange:function(t,n,i){e._onUploadStatusChange(t,n,i),e._options.callbacks.onStatusChange(t,n,i),e._maybeAllComplete(t,i),e._totalProgress&&setTimeout(function(){e._totalProgress.onStatusChange(t,n,i)},0)}})},_createUploadButton:function(e){var t,n=this,i=e.accept||this._options.validation.acceptFiles,o=e.allowedExtensions||this._options.validation.allowedExtensions;return t=new qq.UploadButton({acceptFiles:i,element:e.element,focusClass:this._options.classes.buttonFocus,folders:e.folders,hoverClass:this._options.classes.buttonHover,ios8BrowserCrashWorkaround:this._options.workarounds.ios8BrowserCrash,multiple:function(){return!!qq.supportedFeatures.ajaxUploading&&(!(n._options.workarounds.iosEmptyVideos&&qq.ios()&&!qq.ios6()&&n._isAllowedExtension(o,".mov"))&&(void 0===e.multiple?n._options.multiple:e.multiple))}(),name:this._options.request.inputName,onChange:function(e){n._onInputChange(e)},title:null==e.title?this._options.text.fileInputTitle:e.title}),this._disposeSupport.addDisposer(function(){t.dispose()}),n._buttons.push(t),t},_createUploadHandler:function(e,t){var n=this,i={},o={debug:this._options.debug,maxConnections:this._options.maxConnections,cors:this._options.cors,paramsStore:this._paramsStore,endpointStore:this._endpointStore,chunking:this._options.chunking,resume:this._options.resume,blobs:this._options.blobs,log:qq.bind(n.log,n),preventRetryParam:this._options.retry.preventRetryResponseProperty,onProgress:function(e,t,o,r){o<0||r<0||(i[e]?i[e].loaded===o&&i[e].total===r||(n._onProgress(e,t,o,r),n._options.callbacks.onProgress(e,t,o,r)):(n._onProgress(e,t,o,r),n._options.callbacks.onProgress(e,t,o,r)),i[e]={loaded:o,total:r})},onComplete:function(e,t,o,r){delete i[e];var a,s=n.getUploads({id:e}).status;s!==qq.status.UPLOAD_SUCCESSFUL&&s!==qq.status.UPLOAD_FAILED&&(a=n._onComplete(e,t,o,r),a instanceof qq.Promise?a.done(function(){n._options.callbacks.onComplete(e,t,o,r)}):n._options.callbacks.onComplete(e,t,o,r))},onCancel:function(e,t,i){var o=new qq.Promise;return n._handleCheckedCallback({name:"onCancel",callback:qq.bind(n._options.callbacks.onCancel,n,e,t),onFailure:o.failure,onSuccess:function(){i.then(function(){n._onCancel(e,t)}),o.success()},identifier:e}),o},onUploadPrep:qq.bind(this._onUploadPrep,this),onUpload:function(e,t){n._onUpload(e,t);var i=n._options.callbacks.onUpload(e,t);return qq.isGenericPromise(i)?(n.log(qq.format("onUpload for {} returned a Promise - waiting for resolution.",e)),i):(new qq.Promise).success()},onUploadChunk:function(e,t,i){n._onUploadChunk(e,i);var o=n._options.callbacks.onUploadChunk(e,t,i);return qq.isGenericPromise(o)?(n.log(qq.format("onUploadChunk for {}.{} returned a Promise - waiting for resolution.",e,i.partIndex)),o):(new qq.Promise).success()},onUploadChunkSuccess:function(e,t,i,o){n._onUploadChunkSuccess(e,t),n._options.callbacks.onUploadChunkSuccess.apply(n,arguments)},onResume:function(e,t,i,o){return n._options.callbacks.onResume(e,t,i,o)},onAutoRetry:function(e,t,i,o){return n._onAutoRetry.apply(n,arguments)},onUuidChanged:function(e,t){n.log("Server requested UUID change from '"+n.getUuid(e)+"' to '"+t+"'"),n.setUuid(e,t)},getName:qq.bind(n.getName,n),getUuid:qq.bind(n.getUuid,n),getSize:qq.bind(n.getSize,n),setSize:qq.bind(n._setSize,n),getDataByUuid:function(e){return n.getUploads({uuid:e})},isQueued:function(e){var t=n.getUploads({id:e}).status;return t===qq.status.QUEUED||t===qq.status.SUBMITTED||t===qq.status.UPLOAD_RETRYING||t===qq.status.PAUSED},getIdsInProxyGroup:n._uploadData.getIdsInProxyGroup,getIdsInBatch:n._uploadData.getIdsInBatch,isInProgress:function(e){return n.getUploads({id:e}).status===qq.status.UPLOADING},getCustomResumeData:qq.bind(n._getCustomResumeData,n),setStatus:function(e,t){n._uploadData.setStatus(e,t)}};return qq.each(this._options.request,function(e,t){o[e]=t}),o.customHeaders=this._customHeadersStore,e&&qq.each(e,function(e,t){o[e]=t}),new qq.UploadHandlerController(o,t)},_fileOrBlobRejected:function(e){this._netUploadedOrQueued--,this._uploadData.setStatus(e,qq.status.REJECTED)},_formatSize:function(e){if(0===e)return e+this._options.text.sizeSymbols[0];var t=-1;do{e/=1e3,t++}while(e>999);return Math.max(e,.1).toFixed(1)+this._options.text.sizeSymbols[t]},_generateExtraButtonSpecs:function(){var e=this;this._extraButtonSpecs={},qq.each(this._options.extraButtons,function(t,n){var i=n.multiple,o=qq.extend({},e._options.validation,!0),r=qq.extend({},n);void 0===i&&(i=e._options.multiple),r.validation&&qq.extend(o,n.validation,!0),qq.extend(r,{multiple:i,validation:o},!0),e._initExtraButton(r)})},_getButton:function(e){var t=this._extraButtonSpecs[e];return t?t.element:e===this._defaultButtonId?this._options.button:void 0},_getButtonId:function(e){var t,n,i=e;if(i instanceof qq.BlobProxy&&(i=i.referenceBlob),i&&!qq.isBlob(i)){if(qq.isFile(i))return i.qqButtonId;if("input"===i.tagName.toLowerCase()&&"file"===i.type.toLowerCase())return i.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME);if(t=i.getElementsByTagName("input"),qq.each(t,function(e,t){if("file"===t.getAttribute("type"))return n=t,!1}),n)return n.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME)}},_getCustomResumeData:function(e){return this._customResumeDataStore.get(e)},_getNotFinished:function(){return this._uploadData.retrieve({status:[qq.status.UPLOADING,qq.status.UPLOAD_RETRYING,qq.status.QUEUED,qq.status.SUBMITTING,qq.status.SUBMITTED,qq.status.PAUSED]}).length},_getValidationBase:function(e){var t=this._extraButtonSpecs[e];return t?t.validation:this._options.validation},_getValidationDescriptor:function(e){return e.file instanceof qq.BlobProxy?{name:qq.getFilename(e.file.referenceBlob),size:e.file.referenceBlob.size}:{name:this.getUploads({id:e.id}).name,size:this.getUploads({id:e.id}).size}},_getValidationDescriptors:function(e){var t=this,n=[];return qq.each(e,function(e,i){n.push(t._getValidationDescriptor(i))}),n},_handleCameraAccess:function(){if(this._options.camera.ios&&qq.ios()){var e=this._options.camera.button,t=e?this._getButtonId(e):this._defaultButtonId,n=this._options;t&&t!==this._defaultButtonId&&(n=this._extraButtonSpecs[t]),n.multiple=!1,null===n.validation.acceptFiles?n.validation.acceptFiles="image/*;capture=camera":n.validation.acceptFiles+=",image/*;capture=camera",qq.each(this._buttons,function(e,i){if(i.getButtonId()===t)return i.setMultiple(n.multiple),i.setAcceptFiles(n.acceptFiles),!1})}},_handleCheckedCallback:function(e){var t=this,n=e.callback();return qq.isGenericPromise(n)?(this.log(e.name+" - waiting for "+e.name+" promise to be fulfilled for "+e.identifier),n.then(function(n){t.log(e.name+" promise success for "+e.identifier),e.onSuccess(n)},function(){e.onFailure?(t.log(e.name+" promise failure for "+e.identifier),e.onFailure()):t.log(e.name+" promise failure for "+e.identifier)})):(!1!==n?e.onSuccess(n):e.onFailure?(this.log(e.name+" - return value was 'false' for "+e.identifier+".  Invoking failure callback."),e.onFailure()):this.log(e.name+" - return value was 'false' for "+e.identifier+".  Will not proceed."),n)},_handleNewFile:function(e,t,n){var i=this,o=qq.getUniqueId(),r=-1,a=qq.getFilename(e),s=e.blob||e,A=this._customNewFileHandler?this._customNewFileHandler:qq.bind(i._handleNewFileGeneric,i);!qq.isInput(s)&&s.size>=0&&(r=s.size),A(s,a,o,r,n,t,this._options.request.uuidName,{uploadData:i._uploadData,paramsStore:i._paramsStore,addFileToHandler:function(e,t){i._handler.add(e,t),i._netUploadedOrQueued++,i._trackButton(e)}})},_handleNewFileGeneric:function(e,t,n,i,o,r){var a=this._uploadData.addFile({uuid:n,name:t,size:i,batchId:r,file:e});this._handler.add(a,e),this._trackButton(a),this._netUploadedOrQueued++,o.push({id:a,file:e})},_handlePasteSuccess:function(e,t){var n=e.type.split("/")[1],i=t;null==i&&(i=this._options.paste.defaultName),i+="."+n,this.addFiles({name:i,blob:e})},_handleDeleteSuccess:function(e){if(this.getUploads({id:e}).status!==qq.status.DELETED){var t=this.getName(e);this._netUploadedOrQueued--,this._netUploaded--,this._handler.expunge(e),this._uploadData.setStatus(e,qq.status.DELETED),this.log("Delete request for '"+t+"' has succeeded.")}},_handleDeleteFailed:function(e,t){var n=this.getName(e);this._uploadData.setStatus(e,qq.status.DELETE_FAILED),this.log("Delete request for '"+n+"' has failed.","error"),t&&void 0!==t.withCredentials?this._options.callbacks.onError(e,n,"Delete request failed with response code "+t.status,t):this._options.callbacks.onError(e,n,"Delete request failed",t)},_initExtraButton:function(e){var t=this._createUploadButton({accept:e.validation.acceptFiles,allowedExtensions:e.validation.allowedExtensions,element:e.element,folders:e.folders,multiple:e.multiple,title:e.fileInputTitle});this._extraButtonSpecs[t.getButtonId()]=e},_initFormSupportAndParams:function(){this._formSupport=qq.FormSupport&&new qq.FormSupport(this._options.form,qq.bind(this.uploadStoredFiles,this),qq.bind(this.log,this)),this._formSupport&&this._formSupport.attachedToForm?(this._paramsStore=this._createStore(this._options.request.params,this._formSupport.getFormInputsAsObject),this._options.autoUpload=this._formSupport.newAutoUpload,this._formSupport.newEndpoint&&(this._options.request.endpoint=this._formSupport.newEndpoint)):this._paramsStore=this._createStore(this._options.request.params)},_isDeletePossible:function(){return!(!qq.DeleteFileAjaxRequester||!this._options.deleteFile.enabled)&&(!this._options.cors.expected||(!!qq.supportedFeatures.deleteFileCorsXhr||!(!qq.supportedFeatures.deleteFileCorsXdr||!this._options.cors.allowXdr)))},_isAllowedExtension:function(e,t){var n=!1;return!e.length||(qq.each(e,function(e,i){if(qq.isString(i)){var o=new RegExp("\\."+i+"$","i");if(null!=t.match(o))return n=!0,!1}}),n)},_itemError:function(e,t,n){function i(e,t){a=a.replace(e,t)}var o,r,a=this._options.messages[e],s=[],A=[].concat(t),l=A[0],u=this._getButtonId(n),d=this._getValidationBase(u);return qq.each(d.allowedExtensions,function(e,t){qq.isString(t)&&s.push(t)}),o=s.join(", ").toLowerCase(),i("{file}",this._options.formatFileName(l)),i("{extensions}",o),i("{sizeLimit}",this._formatSize(d.sizeLimit)),i("{minSizeLimit}",this._formatSize(d.minSizeLimit)),r=a.match(/(\{\w+\})/g),null!==r&&qq.each(r,function(e,t){i(t,A[e])}),this._options.callbacks.onError(null,l,a,void 0),a},_manualRetry:function(e,t){if(this._onBeforeManualRetry(e))return this._netUploadedOrQueued++,this._uploadData.setStatus(e,qq.status.UPLOAD_RETRYING),t?t(e):this._handler.retry(e),!0},_maybeAllComplete:function(e,t){var n=this,i=this._getNotFinished();t===qq.status.UPLOAD_SUCCESSFUL?this._succeededSinceLastAllComplete.push(e):t===qq.status.UPLOAD_FAILED&&this._failedSinceLastAllComplete.push(e),0===i&&(this._succeededSinceLastAllComplete.length||this._failedSinceLastAllComplete.length)&&setTimeout(function(){n._onAllComplete(n._succeededSinceLastAllComplete,n._failedSinceLastAllComplete)},0)},_maybeHandleIos8SafariWorkaround:function(){var e=this;if(this._options.workarounds.ios8SafariUploads&&qq.ios800()&&qq.iosSafari())throw setTimeout(function(){window.alert(e._options.messages.unsupportedBrowserIos8Safari)},0),new qq.Error(this._options.messages.unsupportedBrowserIos8Safari)},_maybeParseAndSendUploadError:function(e,t,n,i){if(!n.success)if(i&&200!==i.status&&!n.error)this._options.callbacks.onError(e,t,"XHR returned response code "+i.status,i);else{var o=n.error?n.error:this._options.text.defaultResponseError;this._options.callbacks.onError(e,t,o,i)}},_maybeProcessNextItemAfterOnValidateCallback:function(e,t,n,i,o){var r=this;if(t.length>n)if(e||!this._options.validation.stopOnFirstInvalidFile)setTimeout(function(){var e=r._getValidationDescriptor(t[n]),a=r._getButtonId(t[n].file),s=r._getButton(a);r._handleCheckedCallback({name:"onValidate",callback:qq.bind(r._options.callbacks.onValidate,r,e,s),onSuccess:qq.bind(r._onValidateCallbackSuccess,r,t,n,i,o),onFailure:qq.bind(r._onValidateCallbackFailure,r,t,n,i,o),identifier:"Item '"+e.name+"', size: "+e.size})},0);else if(!e)for(;n<t.length;n++)r._fileOrBlobRejected(t[n].id)},_onAllComplete:function(e,t){this._totalProgress&&this._totalProgress.onAllComplete(e,t,this._preventRetries),this._options.callbacks.onAllComplete(qq.extend([],e),qq.extend([],t)),this._succeededSinceLastAllComplete=[],this._failedSinceLastAllComplete=[]},_onAutoRetry:function(e,t,n,i,o){var r=this;if(r._preventRetries[e]=n[r._options.retry.preventRetryResponseProperty],r._shouldAutoRetry(e)){var a=1e3*r._options.retry.autoAttemptDelay;return r._maybeParseAndSendUploadError.apply(r,arguments),r._options.callbacks.onAutoRetry(e,t,r._autoRetries[e]),r._onBeforeAutoRetry(e,t),r._uploadData.setStatus(e,qq.status.UPLOAD_RETRYING),r._retryTimeouts[e]=setTimeout(function(){r.log("Starting retry for "+t+"..."),o?o(e):r._handler.retry(e)},a),!0}},_onBeforeAutoRetry:function(e,t){this.log("Waiting "+this._options.retry.autoAttemptDelay+" seconds before retrying "+t+"...")},_onBeforeManualRetry:function(e){var t,n=this._currentItemLimit;return this._preventRetries[e]?(this.log("Retries are forbidden for id "+e,"warn"),!1):this._handler.isValid(e)?(t=this.getName(e),!1!==this._options.callbacks.onManualRetry(e,t)&&(n>0&&this._netUploadedOrQueued+1>n?(this._itemError("retryFailTooManyItems"),!1):(this.log("Retrying upload for '"+t+"' (id: "+e+")..."),!0))):(this.log("'"+e+"' is not a valid file ID","error"),!1)},_onCancel:function(e,t){this._netUploadedOrQueued--,clearTimeout(this._retryTimeouts[e]);var n=qq.indexOf(this._storedIds,e);!this._options.autoUpload&&n>=0&&this._storedIds.splice(n,1),this._uploadData.setStatus(e,qq.status.CANCELED)},_onComplete:function(e,t,n,i){return n.success?(n.thumbnailUrl&&(this._thumbnailUrls[e]=n.thumbnailUrl),this._netUploaded++,this._uploadData.setStatus(e,qq.status.UPLOAD_SUCCESSFUL)):(this._netUploadedOrQueued--,this._uploadData.setStatus(e,qq.status.UPLOAD_FAILED),!0===n[this._options.retry.preventRetryResponseProperty]&&(this._preventRetries[e]=!0)),this._maybeParseAndSendUploadError(e,t,n,i),!!n.success},_onDelete:function(e){this._uploadData.setStatus(e,qq.status.DELETING)},_onDeleteComplete:function(e,t,n){this.getName(e);n?this._handleDeleteFailed(e,t):this._handleDeleteSuccess(e)},_onInputChange:function(e){var t;if(qq.supportedFeatures.ajaxUploading){for(t=0;t<e.files.length;t++)this._annotateWithButtonId(e.files[t],e);this.addFiles(e.files)}else e.value.length>0&&this.addFiles(e);qq.each(this._buttons,function(e,t){t.reset()})},_onProgress:function(e,t,n,i){this._totalProgress&&this._totalProgress.onIndividualProgress(e,n,i)},_onSubmit:function(e,t){},_onSubmitCallbackSuccess:function(e,t){this._onSubmit.apply(this,arguments),this._uploadData.setStatus(e,qq.status.SUBMITTED),this._onSubmitted.apply(this,arguments),this._options.autoUpload?(this._options.callbacks.onSubmitted.apply(this,arguments),this._uploadFile(e)):(this._storeForLater(e),this._options.callbacks.onSubmitted.apply(this,arguments))},_onSubmitDelete:function(e,t,n){var i,o=this.getUuid(e);return t&&(i=qq.bind(t,this,e,o,n)),this._isDeletePossible()?(this._handleCheckedCallback({name:"onSubmitDelete",callback:qq.bind(this._options.callbacks.onSubmitDelete,this,e),onSuccess:i||qq.bind(this._deleteHandler.sendDelete,this,e,o,n),identifier:e}),!0):(this.log("Delete request ignored for ID "+e+", delete feature is disabled or request not possible due to CORS on a user agent that does not support pre-flighting.","warn"),!1)},_onSubmitted:function(e){},_onTotalProgress:function(e,t){this._options.callbacks.onTotalProgress(e,t)},_onUploadPrep:function(e){},_onUpload:function(e,t){this._uploadData.setStatus(e,qq.status.UPLOADING)},_onUploadChunk:function(e,t){},_onUploadChunkSuccess:function(e,t){!this._preventRetries[e]&&this._options.retry.enableAuto&&(this._autoRetries[e]=0)},_onUploadStatusChange:function(e,t,n){n===qq.status.PAUSED&&clearTimeout(this._retryTimeouts[e])},_onValidateBatchCallbackFailure:function(e){var t=this;qq.each(e,function(e,n){t._fileOrBlobRejected(n.id)})},_onValidateBatchCallbackSuccess:function(e,t,n,i,o){var r,a=this._currentItemLimit,s=this._netUploadedOrQueued;0===a||s<=a?t.length>0?this._handleCheckedCallback({name:"onValidate",callback:qq.bind(this._options.callbacks.onValidate,this,e[0],o),onSuccess:qq.bind(this._onValidateCallbackSuccess,this,t,0,n,i),onFailure:qq.bind(this._onValidateCallbackFailure,this,t,0,n,i),identifier:"Item '"+t[0].file.name+"', size: "+t[0].file.size}):this._itemError("noFilesError"):(this._onValidateBatchCallbackFailure(t),r=this._options.messages.tooManyItemsError.replace(/\{netItems\}/g,s).replace(/\{itemLimit\}/g,a),this._batchError(r))},_onValidateCallbackFailure:function(e,t,n,i){var o=t+1;this._fileOrBlobRejected(e[t].id,e[t].file.name),this._maybeProcessNextItemAfterOnValidateCallback(!1,e,o,n,i)},_onValidateCallbackSuccess:function(e,t,n,i){var o=this,r=t+1,a=this._getValidationDescriptor(e[t]);this._validateFileOrBlobData(e[t],a).then(function(){o._upload(e[t].id,n,i),o._maybeProcessNextItemAfterOnValidateCallback(!0,e,r,n,i)},function(){o._maybeProcessNextItemAfterOnValidateCallback(!1,e,r,n,i)})},_prepareItemsForUpload:function(e,t,n){if(0===e.length)return void this._itemError("noFilesError");var i=this._getValidationDescriptors(e),o=this._getButtonId(e[0].file),r=this._getButton(o);this._handleCheckedCallback({name:"onValidateBatch",callback:qq.bind(this._options.callbacks.onValidateBatch,this,i,r),onSuccess:qq.bind(this._onValidateBatchCallbackSuccess,this,i,e,t,n,r),onFailure:qq.bind(this._onValidateBatchCallbackFailure,this,e),identifier:"batch validation"})},_preventLeaveInProgress:function(){var e=this;this._disposeSupport.attach(window,"beforeunload",function(t){if(e.getInProgress())return t=t||window.event,t.returnValue=e._options.messages.onLeave,e._options.messages.onLeave})},_refreshSessionData:function(){var e=this,t=this._options.session;qq.Session&&null!=this._options.session.endpoint&&(this._session||(qq.extend(t,{cors:this._options.cors}),t.log=qq.bind(this.log,this),t.addFileRecord=qq.bind(this._addCannedFile,this),this._session=new qq.Session(t)),setTimeout(function(){e._session.refresh().then(function(t,n){e._sessionRequestComplete(),e._options.callbacks.onSessionRequestComplete(t,!0,n)},function(t,n){e._options.callbacks.onSessionRequestComplete(t,!1,n)})},0))},_sessionRequestComplete:function(){},_setSize:function(e,t){this._uploadData.updateSize(e,t),this._totalProgress&&this._totalProgress.onNewSize(e)},_shouldAutoRetry:function(e){var t=this._uploadData.retrieve({id:e});return!!(!this._preventRetries[e]&&this._options.retry.enableAuto&&t.status!==qq.status.PAUSED&&(void 0===this._autoRetries[e]&&(this._autoRetries[e]=0),this._autoRetries[e]<this._options.retry.maxAutoAttempts))&&(this._autoRetries[e]+=1,!0)},_storeForLater:function(e){this._storedIds.push(e)},_trackButton:function(e){var t;(t=qq.supportedFeatures.ajaxUploading?this._handler.getFile(e).qqButtonId:this._getButtonId(this._handler.getInput(e)))&&(this._buttonIdsForFileIds[e]=t)},_updateFormSupportAndParams:function(e){this._options.form.element=e,this._formSupport=qq.FormSupport&&new qq.FormSupport(this._options.form,qq.bind(this.uploadStoredFiles,this),qq.bind(this.log,this)),this._formSupport&&this._formSupport.attachedToForm&&(this._paramsStore.addReadOnly(null,this._formSupport.getFormInputsAsObject),this._options.autoUpload=this._formSupport.newAutoUpload,this._formSupport.newEndpoint&&this.setEndpoint(this._formSupport.newEndpoint))},_upload:function(e,t,n){var i=this.getName(e);t&&this.setParams(t,e),n&&this.setEndpoint(n,e),this._handleCheckedCallback({name:"onSubmit",callback:qq.bind(this._options.callbacks.onSubmit,this,e,i),onSuccess:qq.bind(this._onSubmitCallbackSuccess,this,e,i),onFailure:qq.bind(this._fileOrBlobRejected,this,e,i),identifier:e})},_uploadFile:function(e){this._handler.upload(e)||this._uploadData.setStatus(e,qq.status.QUEUED)},_uploadStoredFiles:function(){for(var e,t,n=this;this._storedIds.length;)e=this._storedIds.shift(),this._uploadFile(e);(t=this.getUploads({status:qq.status.SUBMITTING}).length)&&(qq.log("Still waiting for "+t+" files to clear submit queue. Will re-parse stored IDs array shortly."),setTimeout(function(){n._uploadStoredFiles()},1e3))},_validateFileOrBlobData:function(e,t){var n=this,i=function(){return e.file instanceof qq.BlobProxy?e.file.referenceBlob:e.file}(),o=t.name,r=t.size,a=this._getButtonId(e.file),s=this._getValidationBase(a),A=new qq.Promise;return A.then(function(){},function(){n._fileOrBlobRejected(e.id,o)}),qq.isFileOrInput(i)&&!this._isAllowedExtension(s.allowedExtensions,o)?(this._itemError("typeError",o,i),A.failure()):this._options.validation.allowEmpty||0!==r?r>0&&s.sizeLimit&&r>s.sizeLimit?(this._itemError("sizeError",o,i),A.failure()):r>0&&r<s.minSizeLimit?(this._itemError("minSizeError",o,i),A.failure()):(qq.ImageValidation&&qq.supportedFeatures.imagePreviews&&qq.isFile(i)?new qq.ImageValidation(i,qq.bind(n.log,n)).validate(s.image).then(A.success,function(e){n._itemError(e+"ImageError",o,i),A.failure()}):A.success(),A):(this._itemError("emptyError",o,i),A.failure())},_wrapCallbacks:function(){var e,t,n;e=this,t=function(t,n,i){var o;try{return n.apply(e,i)}catch(n){o=n.message||n.toString(),e.log("Caught exception in '"+t+"' callback - "+o,"error")}};for(n in this._options.callbacks)!function(){var i,o;i=n,o=e._options.callbacks[i],e._options.callbacks[i]=function(){return t(i,o,arguments)}}()}}}(),function(){"use strict";qq.FineUploaderBasic=function(e){var t=this;this._options={debug:!1,button:null,multiple:!0,maxConnections:3,disableCancelForFormUploads:!1,autoUpload:!0,warnBeforeUnload:!0,request:{customHeaders:{},endpoint:"/server/upload",filenameParam:"qqfilename",forceMultipart:!0,inputName:"qqfile",method:"POST",omitDefaultParams:!1,params:{},paramsInBody:!0,requireSuccessJson:!0,totalFileSizeName:"qqtotalfilesize",uuidName:"qquuid"},validation:{allowedExtensions:[],sizeLimit:0,minSizeLimit:0,itemLimit:0,stopOnFirstInvalidFile:!0,acceptFiles:null,image:{maxHeight:0,maxWidth:0,minHeight:0,minWidth:0},allowEmpty:!1},callbacks:{onSubmit:function(e,t){},onSubmitted:function(e,t){},onComplete:function(e,t,n,i){},onAllComplete:function(e,t){},onCancel:function(e,t){},onUpload:function(e,t){},onUploadChunk:function(e,t,n){},onUploadChunkSuccess:function(e,t,n,i){},onResume:function(e,t,n,i){},onProgress:function(e,t,n,i){},onTotalProgress:function(e,t){},onError:function(e,t,n,i){},onAutoRetry:function(e,t,n){},onManualRetry:function(e,t){},onValidateBatch:function(e){},onValidate:function(e){},onSubmitDelete:function(e){},onDelete:function(e){},onDeleteComplete:function(e,t,n){},onPasteReceived:function(e){},onStatusChange:function(e,t,n){},onSessionRequestComplete:function(e,t,n){}},messages:{typeError:"{file} has an invalid extension. Valid extension(s): {extensions}.",sizeError:"{file} is too large, maximum file size is {sizeLimit}.",minSizeError:"{file} is too small, minimum file size is {minSizeLimit}.",emptyError:"{file} is empty, please select files again without it.",noFilesError:"No files to upload.",tooManyItemsError:"Too many items ({netItems}) would be uploaded.  Item limit is {itemLimit}.",maxHeightImageError:"Image is too tall.",maxWidthImageError:"Image is too wide.",minHeightImageError:"Image is not tall enough.",minWidthImageError:"Image is not wide enough.",retryFailTooManyItems:"Retry failed - you have reached your file limit.",onLeave:"The files are being uploaded, if you leave now the upload will be canceled.",unsupportedBrowserIos8Safari:"Unrecoverable error - this browser does not permit file uploading of any kind due to serious bugs in iOS8 Safari.  Please use iOS8 Chrome until Apple fixes these issues."},retry:{enableAuto:!1,maxAutoAttempts:3,autoAttemptDelay:5,preventRetryResponseProperty:"preventRetry"},classes:{buttonHover:"qq-upload-button-hover",buttonFocus:"qq-upload-button-focus"},chunking:{enabled:!1,concurrent:{enabled:!1},mandatory:!1,paramNames:{partIndex:"qqpartindex",partByteOffset:"qqpartbyteoffset",chunkSize:"qqchunksize",totalFileSize:"qqtotalfilesize",totalParts:"qqtotalparts"},partSize:function(e){return 2e6},success:{endpoint:null,headers:function(e){return null},jsonPayload:!1,method:"POST",params:function(e){return null},resetOnStatus:[]}},resume:{enabled:!1,recordsExpireIn:7,paramNames:{resuming:"qqresume"},customKeys:function(e){return[]}},formatFileName:function(e){return e},text:{defaultResponseError:"Upload failure reason unknown",fileInputTitle:"file input",sizeSymbols:["kB","MB","GB","TB","PB","EB"]},deleteFile:{enabled:!1,method:"DELETE",endpoint:"/server/upload",customHeaders:{},params:{}},cors:{expected:!1,sendCredentials:!1,allowXdr:!1},blobs:{defaultName:"misc_data"},paste:{targetElement:null,defaultName:"pasted_image"},camera:{ios:!1,button:null},extraButtons:[],session:{endpoint:null,params:{},customHeaders:{},refreshOnReset:!0},form:{element:"qq-form",autoUpload:!1,interceptSubmit:!0},scaling:{customResizer:null,sendOriginal:!0,orient:!0,defaultType:null,defaultQuality:80,failureText:"Failed to scale",includeExif:!1,sizes:[]},workarounds:{iosEmptyVideos:!0,ios8SafariUploads:!0,ios8BrowserCrash:!1}},qq.extend(this._options,e,!0),this._buttons=[],this._extraButtonSpecs={},this._buttonIdsForFileIds=[],this._wrapCallbacks(),this._disposeSupport=new qq.DisposeSupport,this._storedIds=[],this._autoRetries=[],this._retryTimeouts=[],this._preventRetries=[],this._thumbnailUrls=[],this._netUploadedOrQueued=0,this._netUploaded=0,this._uploadData=this._createUploadDataTracker(),this._initFormSupportAndParams(),this._customHeadersStore=this._createStore(this._options.request.customHeaders),this._deleteFileCustomHeadersStore=this._createStore(this._options.deleteFile.customHeaders),this._deleteFileParamsStore=this._createStore(this._options.deleteFile.params),this._endpointStore=this._createStore(this._options.request.endpoint),this._deleteFileEndpointStore=this._createStore(this._options.deleteFile.endpoint),this._handler=this._createUploadHandler(),this._deleteHandler=qq.DeleteFileAjaxRequester&&this._createDeleteHandler(),this._options.button&&(this._defaultButtonId=this._createUploadButton({element:this._options.button,title:this._options.text.fileInputTitle}).getButtonId()),this._generateExtraButtonSpecs(),this._handleCameraAccess(),this._options.paste.targetElement&&(qq.PasteSupport?this._pasteHandler=this._createPasteHandler():this.log("Paste support module not found","error")),this._options.warnBeforeUnload&&this._preventLeaveInProgress(),this._imageGenerator=qq.ImageGenerator&&new qq.ImageGenerator(qq.bind(this.log,this)),this._refreshSessionData(),this._succeededSinceLastAllComplete=[],this._failedSinceLastAllComplete=[],this._scaler=qq.Scaler&&new qq.Scaler(this._options.scaling,qq.bind(this.log,this))||{},this._scaler.enabled&&(this._customNewFileHandler=qq.bind(this._scaler.handleNewFile,this._scaler)),qq.TotalProgress&&qq.supportedFeatures.progressBar&&(this._totalProgress=new qq.TotalProgress(qq.bind(this._onTotalProgress,this),function(e){var n=t._uploadData.retrieve({id:e});return n&&n.size||0})),this._currentItemLimit=this._options.validation.itemLimit,this._customResumeDataStore=this._createStore()},qq.FineUploaderBasic.prototype=qq.basePublicApi,qq.extend(qq.FineUploaderBasic.prototype,qq.basePrivateApi)}(),qq.AjaxRequester=function(e){"use strict";function t(){return qq.indexOf(["GET","POST","HEAD"],x.method)>=0}function n(e){var t=!1;return qq.each(t,function(e,n){if(qq.indexOf(["Accept","Accept-Language","Content-Language","Content-Type"],n)<0)return t=!0,!1}),t}function i(e){return x.cors.expected&&void 0===e.withCredentials}function o(){var e;return(window.XMLHttpRequest||window.ActiveXObject)&&(e=qq.createXhrInstance(),void 0===e.withCredentials&&(e=new XDomainRequest,e.onload=function(){},e.onerror=function(){},e.ontimeout=function(){},e.onprogress=function(){})),e}function r(e,t){var n=y[e]&&y[e].xhr;return n||(n=t||(x.cors.expected?o():qq.createXhrInstance()),y[e].xhr=n),n}function a(e){var t,n=qq.indexOf(v,e),i=x.maxConnections;delete y[e],v.splice(n,1),v.length>=i&&n<i&&(t=v[i-1],l(t))}function s(e,t){var n=r(e),o=x.method,s=!0===t;a(e),s?q(o+" request for "+e+" has failed","error"):i(n)||g(n.status)||(s=!0,q(o+" request for "+e+" has failed - response code "+n.status,"error")),x.onComplete(e,n,s)}function A(e){var t,n=y[e].additionalParams,i=x.mandatedParams;return x.paramsStore.get&&(t=x.paramsStore.get(e)),n&&qq.each(n,function(e,n){t=t||{},t[e]=n}),i&&qq.each(i,function(e,n){t=t||{},t[e]=n}),t}function l(e,t){var n,o=r(e,t),a=x.method,s=A(e),l=y[e].payload;return x.onSend(e),n=u(e,s,y[e].additionalQueryParams),i(o)?(o.onload=p(e),o.onerror=h(e)):o.onreadystatechange=d(e),c(e),o.open(a,n,!0),x.cors.expected&&x.cors.sendCredentials&&!i(o)&&(o.withCredentials=!0),f(e),q("Sending "+a+" request for "+e),l?o.send(l):b||!s?o.send():s&&x.contentType&&x.contentType.toLowerCase().indexOf("application/x-www-form-urlencoded")>=0?o.send(qq.obj2url(s,"")):s&&x.contentType&&x.contentType.toLowerCase().indexOf("application/json")>=0?o.send(JSON.stringify(s)):o.send(s),o}function u(e,t,n){var i=x.endpointStore.get(e),o=y[e].addToPath;return void 0!=o&&(i+="/"+o),b&&t&&(i=qq.obj2url(t,i)),n&&(i=qq.obj2url(n,i)),i}function d(e){return function(){4===r(e).readyState&&s(e)}}function c(e){var t=x.onProgress;t&&(r(e).upload.onprogress=function(n){n.lengthComputable&&t(e,n.loaded,n.total)})}function p(e){return function(){s(e)}}function h(e){return function(){s(e,!0)}}function f(e){var o=r(e),a=x.customHeaders,s=y[e].additionalHeaders||{},A=x.method,l={};i(o)||(x.acceptHeader&&o.setRequestHeader("Accept",x.acceptHeader),x.allowXRequestedWithAndCacheControl&&(x.cors.expected&&t()&&!n(a)||(o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.setRequestHeader("Cache-Control","no-cache"))),!x.contentType||"POST"!==A&&"PUT"!==A||o.setRequestHeader("Content-Type",x.contentType),qq.extend(l,qq.isFunction(a)?a(e):a),qq.extend(l,s),qq.each(l,function(e,t){o.setRequestHeader(e,t)}))}function g(e){return qq.indexOf(x.successfulResponseCodes[x.method],e)>=0}function m(e,t,n,i,o,r,a){if(y[e]={addToPath:n,additionalParams:i,additionalQueryParams:o,additionalHeaders:r,payload:a},v.push(e)<=x.maxConnections)return l(e,t)}var q,b,v=[],y={},x={acceptHeader:null,validMethods:["PATCH","POST","PUT"],method:"POST",contentType:"application/x-www-form-urlencoded",maxConnections:3,customHeaders:{},endpointStore:{},paramsStore:{},mandatedParams:{},allowXRequestedWithAndCacheControl:!0,successfulResponseCodes:{DELETE:[200,202,204],PATCH:[200,201,202,203,204],POST:[200,201,202,203,204],PUT:[200,201,202,203,204],GET:[200]},cors:{expected:!1,sendCredentials:!1},log:function(e,t){},onSend:function(e){},onComplete:function(e,t,n){},onProgress:null};if(qq.extend(x,e),q=x.log,qq.indexOf(x.validMethods,x.method)<0)throw new Error("'"+x.method+"' is not a supported method for this type of request!");b="GET"===x.method||"DELETE"===x.method,qq.extend(this,{initTransport:function(e){var t,n,i,o,r,a;return{withPath:function(e){return t=e,this},withParams:function(e){return n=e,this},withQueryParams:function(e){return a=e,this},withHeaders:function(e){return i=e,this},withPayload:function(e){return o=e,this},withCacheBuster:function(){return r=!0,this},send:function(s){return r&&qq.indexOf(["GET","DELETE"],x.method)>=0&&(n.qqtimestamp=(new Date).getTime()),m(e,s,t,n,a,i,o)}}},canceled:function(e){a(e)}})},qq.UploadHandler=function(e){"use strict";var t=e.proxy,n={},i=t.onCancel,o=t.getName;qq.extend(this,{add:function(e,t){n[e]=t,n[e].temp={}},cancel:function(e){var t=this,r=new qq.Promise;i(e,o(e),r).then(function(){t.isValid(e)&&(n[e].canceled=!0,t.expunge(e)),r.success()})},expunge:function(e){delete n[e]},getThirdPartyFileId:function(e){return n[e].key},isValid:function(e){return void 0!==n[e]},reset:function(){n={}},_getFileState:function(e){return n[e]},_setThirdPartyFileId:function(e,t){n[e].key=t},_wasCanceled:function(e){return!!n[e].canceled}})},qq.UploadHandlerController=function(e,t){"use strict";var n,i,o,r=this,a=!1,s=!1,A={paramsStore:{},maxConnections:3,chunking:{enabled:!1,multiple:{enabled:!1}},log:function(e,t){},onProgress:function(e,t,n,i){},onComplete:function(e,t,n,i){},onCancel:function(e,t){},onUploadPrep:function(e){},onUpload:function(e,t){},onUploadChunk:function(e,t,n){},onUploadChunkSuccess:function(e,t,n,i){},onAutoRetry:function(e,t,n,i){},onResume:function(e,t,n,i){},onUuidChanged:function(e,t){},getName:function(e){},setSize:function(e,t){},isQueued:function(e){},getIdsInProxyGroup:function(e){},getIdsInBatch:function(e){},isInProgress:function(e){}},l={done:function(e,t,n,i){var r=o._getChunkData(e,t);o._getFileState(e).attemptingResume=!1,delete o._getFileState(e).temp.chunkProgress[t],o._getFileState(e).loaded+=r.size,A.onUploadChunkSuccess(e,o._getChunkDataForCallback(r),n,i)},finalize:function(e){var t=A.getSize(e),n=A.getName(e);i("All chunks have been uploaded for "+e+" - finalizing...."),o.finalizeChunks(e).then(function(r,a){i("Finalize successful for "+e);var s=c.normalizeResponse(r,!0);A.onProgress(e,n,t,t),o._maybeDeletePersistedChunkData(e),c.cleanup(e,s,a)},function(t,o){var r=c.normalizeResponse(t,!1);i("Problem finalizing chunks for file ID "+e+" - "+r.error,"error"),(r.reset||o&&A.chunking.success.resetOnStatus.indexOf(o.status)>=0)&&l.reset(e),A.onAutoRetry(e,n,r,o)||c.cleanup(e,r,o)})},handleFailure:function(e,t,n,r){var a=A.getName(t);i("Chunked upload request failed for "+t+", chunk "+e),o.clearCachedChunk(t,e);var d,p=c.normalizeResponse(n,!1);if(p.reset)l.reset(t);else{var h=o._getFileState(t).chunking.inProgress;d=h?qq.indexOf(h,e):-1,d>=0&&(o._getFileState(t).chunking.inProgress.splice(d,1),o._getFileState(t).chunking.remaining.unshift(e))}o._getFileState(t).temp.ignoreFailure||(s&&(o._getFileState(t).temp.ignoreFailure=!0,i(qq.format("Going to attempt to abort these chunks: {}. These are currently in-progress: {}.",JSON.stringify(Object.keys(o._getXhrs(t))),JSON.stringify(o._getFileState(t).chunking.inProgress))),qq.each(o._getXhrs(t),function(e,n){i(qq.format("Attempting to abort file {}.{}. XHR readyState {}. ",t,e,n.readyState)),n.abort(),n._cancelled=!0}),o.moveInProgressToRemaining(t),u.free(t,!0)),A.onAutoRetry(t,a,p,r)||c.cleanup(t,p,r))},hasMoreParts:function(e){return!!o._getFileState(e).chunking.remaining.length},nextPart:function(e){var t=o._getFileState(e).chunking.remaining.shift();return t>=o._getTotalChunks(e)&&(t=null),t},reset:function(e){i("Server or callback has ordered chunking effort to be restarted on next attempt for item ID "+e,"error"),o._maybeDeletePersistedChunkData(e),o.reevaluateChunking(e),o._getFileState(e).loaded=0,o._getFileState(e).attemptingResume=!1},sendNext:function(e){var t=A.getSize(e),n=A.getName(e),r=l.nextPart(e),a=o._getChunkData(e,r),d=o._getFileState(e),p=d.attemptingResume,h=d.chunking.inProgress||[];if(null==d.loaded&&(d.loaded=0),p&&!1===A.onResume(e,n,a,d.customResumeData)&&(l.reset(e),r=l.nextPart(e),a=o._getChunkData(e,r),p=!1),null==r&&0===h.length)l.finalize(e);else{h.push(r),o._getFileState(e).chunking.inProgress=h,s&&u.open(e,r),s&&u.available()&&o._getFileState(e).chunking.remaining.length&&l.sendNext(e),0===a.blob.size&&(i(qq.format("Chunk {} for file {} will not be uploaded, zero sized chunk.",r,e),"error"),l.handleFailure(r,e,"File is no longer available",null));A.onUploadChunk(e,n,o._getChunkDataForCallback(a)).then(function(n){if(A.isInProgress(e)){i(qq.format("Sending chunked upload request for item {}.{}, bytes {}-{} of {}.",e,r,a.start+1,a.end,t));var s={chunkIdx:r,id:e,overrides:n,resuming:p};o.uploadChunk(s).then(function(t,n){i("Chunked upload request succeeded for "+e+", chunk "+r),o.clearCachedChunk(e,r);var a=o._getFileState(e).chunking.inProgress||[],s=c.normalizeResponse(t,!0),A=qq.indexOf(a,r);i(qq.format("Chunk {} for file {} uploaded successfully.",r,e)),l.done(e,r,s,n),A>=0&&a.splice(A,1),o._maybePersistChunkedState(e),l.hasMoreParts(e)||0!==a.length?l.hasMoreParts(e)?l.sendNext(e):i(qq.format("File ID {} has no more chunks to send and these chunk indexes are still marked as in-progress: {}",e,JSON.stringify(a))):l.finalize(e)},function(t,n){l.handleFailure(r,e,t,n)}).done(function(){o.clearXhr(e,r)})}else i(qq.format("Not sending chunked upload request for item {}.{} - no longer in progress.",e,r))},function(t){l.handleFailure(r,e,t,null)})}}},u={_open:[],_openChunks:{},_waiting:[],available:function(){var e=A.maxConnections,t=0,n=0;return qq.each(u._openChunks,function(e,i){t++,n+=i.length}),e-(u._open.length-t+n)},free:function(e,t){var n,r=!t,a=qq.indexOf(u._waiting,e),s=qq.indexOf(u._open,e);delete u._openChunks[e],c.getProxyOrBlob(e)instanceof qq.BlobProxy&&(i("Generated blob upload has ended for "+e+", disposing generated blob."),delete o._getFileState(e).file),a>=0?u._waiting.splice(a,1):r&&s>=0&&(u._open.splice(s,1),(n=u._waiting.shift())>=0&&(u._open.push(n),c.start(n)))},getWaitingOrConnected:function(){var e=[];return qq.each(u._openChunks,function(t,n){n&&n.length&&e.push(parseInt(t))}),qq.each(u._open,function(t,n){u._openChunks[n]||e.push(parseInt(n))}),e=e.concat(u._waiting)},isUsingConnection:function(e){return qq.indexOf(u._open,e)>=0},open:function(e,t){return null==t&&u._waiting.push(e),!!u.available()&&(null==t?(u._waiting.pop(),u._open.push(e)):function(){var n=u._openChunks[e]||[];n.push(t),u._openChunks[e]=n}(),!0)},reset:function(){u._waiting=[],u._open=[]}},d={send:function(e,t){var n=o._getFileState(e);if(!n)return void i("Ignoring send request as this upload may have been cancelled, File ID "+e,"warn");n.loaded=0,i("Sending simple upload request for "+e),o.uploadFile(e).then(function(n,o){i("Simple upload request succeeded for "+e);var r=c.normalizeResponse(n,!0),a=A.getSize(e);A.onProgress(e,t,a,a),c.maybeNewUuid(e,r),c.cleanup(e,r,o)},function(n,o){i("Simple upload request failed for "+e);var r=c.normalizeResponse(n,!1);A.onAutoRetry(e,t,r,o)||c.cleanup(e,r,o)})}},c={cancel:function(e){i("Cancelling "+e),A.paramsStore.remove(e),u.free(e)},cleanup:function(e,t,n){var i=A.getName(e);A.onComplete(e,i,t,n),o._getFileState(e)&&o._clearXhrs&&o._clearXhrs(e),u.free(e)},getProxyOrBlob:function(e){return o.getProxy&&o.getProxy(e)||o.getFile&&o.getFile(e)},initHandler:function(){var e=t?qq[t]:qq.traditional,n=qq.supportedFeatures.ajaxUploading?"Xhr":"Form";o=new e[n+"UploadHandler"](A,{getCustomResumeData:A.getCustomResumeData,getDataByUuid:A.getDataByUuid,getName:A.getName,getSize:A.getSize,getUuid:A.getUuid,log:i,onCancel:A.onCancel,onProgress:A.onProgress,onUuidChanged:A.onUuidChanged,onFinalizing:function(e){A.setStatus(e,qq.status.UPLOAD_FINALIZING)}}),o._removeExpiredChunkingRecords&&o._removeExpiredChunkingRecords()},isDeferredEligibleForUpload:function(e){return A.isQueued(e)},maybeDefer:function(e,t){return t&&!o.getFile(e)&&t instanceof qq.BlobProxy?(A.onUploadPrep(e),i("Attempting to generate a blob on-demand for "+e),t.create().then(function(t){i("Generated an on-demand blob for "+e),o.updateBlob(e,t),A.setSize(e,t.size),o.reevaluateChunking(e),c.maybeSendDeferredFiles(e)},function(t){var o={};t&&(o.error=t),i(qq.format("Failed to generate blob for ID {}.  Error message: {}.",e,t),"error"),A.onComplete(e,A.getName(e),qq.extend(o,n),null),c.maybeSendDeferredFiles(e),u.free(e)}),!1):c.maybeSendDeferredFiles(e)},maybeSendDeferredFiles:function(e){var t=A.getIdsInProxyGroup(e),n=!1;return t&&t.length?(i("Maybe ready to upload proxy group file "+e),qq.each(t,function(t,i){if(c.isDeferredEligibleForUpload(i)&&o.getFile(i))n=i===e,c.now(i);else if(c.isDeferredEligibleForUpload(i))return!1})):(n=!0,c.now(e)),n},maybeNewUuid:function(e,t){void 0!==t.newUuid&&A.onUuidChanged(e,t.newUuid)},normalizeResponse:function(e,t){var n=e;return qq.isObject(e)||(n={},qq.isString(e)&&!t&&(n.error=e)),n.success=t,n},now:function(e){var t=A.getName(e);if(!r.isValid(e))throw new qq.Error(e+" is not a valid file ID to upload!");A.onUpload(e,t).then(function(n){n&&n.pause?(A.setStatus(e,qq.status.PAUSED),o.pause(e),u.free(e)):a&&o._shouldChunkThisFile(e)?l.sendNext(e):d.send(e,t)},function(n){if(n=n||{},i(e+" upload start aborted due to rejected onUpload Promise - details: "+n,"error"),!A.onAutoRetry(e,t,n.responseJSON||{})){var o=c.normalizeResponse(n.responseJSON,!1);c.cleanup(e,o)}})},start:function(e){var t=c.getProxyOrBlob(e);return t?c.maybeDefer(e,t):(c.now(e),!0)}};qq.extend(this,{add:function(e,t){o.add.apply(this,arguments)},upload:function(e){return!!u.open(e)&&c.start(e)},retry:function(e){return s&&(o._getFileState(e).temp.ignoreFailure=!1),u.isUsingConnection(e)?c.start(e):r.upload(e)},cancel:function(e){var t=o.cancel(e);qq.isGenericPromise(t)?t.then(function(){c.cancel(e)}):!1!==t&&c.cancel(e)},cancelAll:function(){var e,t=u.getWaitingOrConnected();if(t.length)for(e=t.length-1;e>=0;e--)r.cancel(t[e]);u.reset()},getFile:function(e){return o.getProxy&&o.getProxy(e)?o.getProxy(e).referenceBlob:o.getFile&&o.getFile(e)},isProxied:function(e){return!(!o.getProxy||!o.getProxy(e))},getInput:function(e){if(o.getInput)return o.getInput(e)},reset:function(){i("Resetting upload handler"),r.cancelAll(),u.reset(),o.reset()},expunge:function(e){if(r.isValid(e))return o.expunge(e)},isValid:function(e){return o.isValid(e)},hasResumeRecord:function(e){var t=o.isValid(e)&&o._getLocalStorageId&&o._getLocalStorageId(e);return!!t&&!!localStorage.getItem(t)},getResumableFilesData:function(){return o.getResumableFilesData?o.getResumableFilesData():[]},getThirdPartyFileId:function(e){if(r.isValid(e))return o.getThirdPartyFileId(e)},pause:function(e){return!!(r.isResumable(e)&&o.pause&&r.isValid(e)&&o.pause(e))&&(u.free(e),o.moveInProgressToRemaining(e),!0)},isAttemptingResume:function(e){return!!o.isAttemptingResume&&o.isAttemptingResume(e)},isResumable:function(e){return!!o.isResumable&&o.isResumable(e)}}),qq.extend(A,e),i=A.log,a=A.chunking.enabled&&qq.supportedFeatures.chunking,s=a&&A.chunking.concurrent.enabled,n=function(){var e={};return e[A.preventRetryParam]=!0,e}(),c.initHandler()},qq.WindowReceiveMessage=function(e){"use strict";var t={log:function(e,t){}},n={};qq.extend(t,e),qq.extend(this,{receiveMessage:function(e,t){var i=function(e){t(e.data)};window.postMessage?n[e]=qq(window).attach("message",i):log("iframe message passing not supported in this browser!","error")},stopReceivingMessages:function(e){if(window.postMessage){var t=n[e];t&&t()}}})},qq.FormUploadHandler=function(e){"use strict";function t(e){delete u[e],c&&(clearTimeout(d[e]),delete d[e],g.stopReceivingMessages(e));var t=document.getElementById(a._getIframeName(e));t&&(t.setAttribute("src","javascript:false;"),qq(t).remove())}function n(e){return e.split("_")[0]}function i(e){var t=qq.toElement("<iframe src='javascript:false;' name='"+e+"' />");return t.setAttribute("id",e),t.style.display="none",document.body.appendChild(t),t}function o(e,t){var i=e.id,o=n(i),r=h(o);l[r]=t,u[o]=qq(e).attach("load",function(){a.getInput(o)&&(f("Received iframe load event for CORS upload request (iframe name "+i+")"),d[i]=setTimeout(function(){var e="No valid message received from loaded iframe for iframe name "+i;f(e,"error"),t({error:e})},1e3))}),g.receiveMessage(i,function(e){f("Received the following window message: '"+e+"'");var t,o=(n(i),a._parseJsonResponse(e)),r=o.uuid;r&&l[r]?(f("Handling response for iframe name "+i),clearTimeout(d[i]),delete d[i],a._detachLoadEvent(i),t=l[r],delete l[r],g.stopReceivingMessages(i),t(o)):r||f("'"+e+"' does not contain a UUID - ignoring.")})}var r=e.options,a=this,s=e.proxy,A=qq.getUniqueId(),l={},u={},d={},c=r.isCors,p=r.inputName,h=s.getUuid,f=s.log,g=new qq.WindowReceiveMessage({log:f});qq.extend(this,new qq.UploadHandler(e)),qq.override(this,function(e){return{add:function(t,n){e.add(t,{input:n}),n.setAttribute("name",p),n.parentNode&&qq(n).remove()},expunge:function(n){t(n),e.expunge(n)},isValid:function(t){return e.isValid(t)&&void 0!==a._getFileState(t).input}}}),qq.extend(this,{getInput:function(e){return a._getFileState(e).input},_attachLoadEvent:function(e,t){var n;c?o(e,t):u[e.id]=qq(e).attach("load",function(){if(f("Received response for "+e.id),e.parentNode){try{if(e.contentDocument&&e.contentDocument.body&&"false"==e.contentDocument.body.innerHTML)return}catch(e){f("Error when attempting to access iframe during handling of upload response ("+e.message+")","error"),n={success:!1}}t(n)}})},_createIframe:function(e){return i(a._getIframeName(e))},_detachLoadEvent:function(e){void 0!==u[e]&&(u[e](),delete u[e])},_getIframeName:function(e){return e+"_"+A},_initFormForUpload:function(e){var t=e.method,n=e.endpoint,i=e.params,o=e.paramsInBody,r=e.targetName,a=qq.toElement("<form method='"+t+"' enctype='multipart/form-data'></form>"),s=n;return o?qq.obj2Inputs(i,a):s=qq.obj2url(i,n),a.setAttribute("action",s),a.setAttribute("target",r),a.style.display="none",document.body.appendChild(a),a},_parseJsonResponse:function(e){var t={};try{t=qq.parseJson(e)}catch(e){f("Error when attempting to parse iframe upload response ("+e.message+")","error")}return t}})},qq.XhrUploadHandler=function(e){"use strict";function t(e){qq.each(n._getXhrs(e),function(t,i){var o=n._getAjaxRequester(e,t);i.onreadystatechange=null,i.upload.onprogress=null,i.abort(),o&&o.canceled&&o.canceled(e)})}var n=this,i=e.options.namespace,o=e.proxy,r=e.options.chunking,a=function(e){var t=n._getFileState(e);if(t.chunkSize)return t.chunkSize;var i=r.partSize;return qq.isFunction(i)&&(i=i(e,d(e))),t.chunkSize=i,i},s=e.options.resume,A=r&&e.options.chunking.enabled&&qq.supportedFeatures.chunking,l=s&&e.options.resume.enabled&&A&&qq.supportedFeatures.resume,u=o.getName,d=o.getSize,c=o.getUuid,p=o.getEndpoint,h=o.getDataByUuid,f=o.onUuidChanged,g=o.onProgress,m=o.log,q=o.getCustomResumeData;qq.extend(this,new qq.UploadHandler(e)),qq.override(this,function(e){return{add:function(t,i){if(qq.isFile(i)||qq.isBlob(i))e.add(t,{file:i});else{if(!(i instanceof qq.BlobProxy))throw new Error("Passed obj is not a File, Blob, or proxy");e.add(t,{proxy:i})}n._initTempState(t),l&&n._maybePrepareForResume(t)},expunge:function(i){t(i),n._maybeDeletePersistedChunkData(i),n._clearXhrs(i),e.expunge(i)}}}),qq.extend(this,{clearCachedChunk:function(e,t){var i=n._getFileState(e);i&&delete i.temp.cachedChunks[t]},clearXhr:function(e,t){var i=n._getFileState(e).temp;i.xhrs&&delete i.xhrs[t],i.ajaxRequesters&&delete i.ajaxRequesters[t]},finalizeChunks:function(e,t){var i=n._getTotalChunks(e)-1,o=n._getXhr(e,i);return t?(new qq.Promise).success(t(o),o):(new qq.Promise).success({},o)},getFile:function(e){return n.isValid(e)&&n._getFileState(e).file},getProxy:function(e){return n.isValid(e)&&n._getFileState(e).proxy},getResumableFilesData:function(){var e=[];return n._iterateResumeRecords(function(t,i){n.moveInProgressToRemaining(null,i.chunking.inProgress,i.chunking.remaining);var o={name:i.name,remaining:i.chunking.remaining,size:i.size,uuid:i.uuid};i.key&&(o.key=i.key),i.customResumeData&&(o.customResumeData=i.customResumeData),e.push(o)}),e},isAttemptingResume:function(e){return n._getFileState(e).attemptingResume},isResumable:function(e){return!!r&&n.isValid(e)&&!n._getFileState(e).notResumable},moveInProgressToRemaining:function(e,t,i){var o=n._getFileState(e)||{},r=o.chunking||{},a=t||r.inProgress,s=i||r.remaining;a&&(m(qq.format("Moving these chunks from in-progress {}, to remaining.",JSON.stringify(a))),a.reverse(),qq.each(a,function(e,t){s.unshift(t)}),a.length=0)},pause:function(e){if(n.isValid(e))return m(qq.format("Aborting XHR upload for {} '{}' due to pause instruction.",e,u(e))),n._getFileState(e).paused=!0,t(e),!0},reevaluateChunking:function(e){if(r&&n.isValid(e)){var t,i,o=n._getFileState(e);if(delete o.chunking,o.chunking={},(t=n._getTotalChunks(e))>1||r.mandatory){for(o.chunking.enabled=!0,o.chunking.parts=t,o.chunking.remaining=[],i=0;i<t;i++)o.chunking.remaining.push(i);n._initTempState(e)}else o.chunking.enabled=!1}},updateBlob:function(e,t){n.isValid(e)&&(n._getFileState(e).file=t)},_clearXhrs:function(e){var t=n._getFileState(e).temp;qq.each(t.ajaxRequesters,function(e){delete t.ajaxRequesters[e]}),qq.each(t.xhrs,function(e){delete t.xhrs[e]})},_createXhr:function(e,t){return n._registerXhr(e,t,qq.createXhrInstance())},_getAjaxRequester:function(e,t){var i=null==t?-1:t;return n._getFileState(e).temp.ajaxRequesters[i]},_getChunkData:function(e,t){var i=a(e),o=d(e),r=n.getFile(e),s=i*t,A=s+i>=o?o:s+i,l=n._getTotalChunks(e),u=this._getFileState(e).temp.cachedChunks,c=u[t]||qq.sliceBlob(r,s,A);return u[t]=c,{part:t,start:s,end:A,count:l,blob:c,size:A-s}},_getChunkDataForCallback:function(e){return{partIndex:e.part,startByte:e.start+1,endByte:e.end,totalParts:e.count}},_getLocalStorageId:function(e){var t=u(e),n=d(e),o=a(e),r=p(e),A=s.customKeys(e),l=qq.format("qq{}resume{}-{}-{}-{}-{}",i,"5.0",t,n,o,r);return A.forEach(function(e){l+="-"+e}),l},_getMimeType:function(e){return n.getFile(e).type},_getPersistableData:function(e){return n._getFileState(e).chunking},_getTotalChunks:function(e){if(r){var t=d(e),n=a(e);return Math.ceil(t/n)}},_getXhr:function(e,t){var i=null==t?-1:t;return n._getFileState(e).temp.xhrs[i]},_getXhrs:function(e){return n._getFileState(e).temp.xhrs},_iterateResumeRecords:function(e){l&&qq.each(localStorage,function(t,n){if(0===t.indexOf(qq.format("qq{}resume",i))){var o=JSON.parse(n);e(t,o)}})},_initTempState:function(e){n._getFileState(e).temp={ajaxRequesters:{},chunkProgress:{},xhrs:{},cachedChunks:{}}},_markNotResumable:function(e){n._getFileState(e).notResumable=!0},_maybeDeletePersistedChunkData:function(e){var t;return!!(l&&n.isResumable(e)&&(t=n._getLocalStorageId(e))&&localStorage.getItem(t))&&(localStorage.removeItem(t),!0)},_maybePrepareForResume:function(e){var t,i,o=n._getFileState(e);l&&void 0===o.key&&(t=n._getLocalStorageId(e),(i=localStorage.getItem(t))&&(i=JSON.parse(i),h(i.uuid)?n._markNotResumable(e):(m(qq.format("Identified file with ID {} and name of {} as resumable.",e,u(e))),f(e,i.uuid),o.key=i.key,o.chunking=i.chunking,o.loaded=i.loaded,o.customResumeData=i.customResumeData,o.attemptingResume=!0,n.moveInProgressToRemaining(e))))},_maybePersistChunkedState:function(e){var t,i,o=n._getFileState(e);if(l&&n.isResumable(e)){var r=q(e);t=n._getLocalStorageId(e),i={name:u(e),size:d(e),uuid:c(e),key:o.key,chunking:o.chunking,loaded:o.loaded,lastUpdated:Date.now()},r&&(i.customResumeData=r);try{localStorage.setItem(t,JSON.stringify(i))}catch(t){m(qq.format("Unable to save resume data for '{}' due to error: '{}'.",e,t.toString()),"warn")}}},_registerProgressHandler:function(e,t,i){var o=n._getXhr(e,t),r=u(e),a={simple:function(t,n){var i=d(e);t===n?g(e,r,i,i):g(e,r,t>=i?i-1:t,i)},chunked:function(o,a){var s=n._getFileState(e).temp.chunkProgress,A=n._getFileState(e).loaded,l=o,u=a,c=d(e),p=l-(u-i),h=A;s[t]=p,qq.each(s,function(e,t){h+=t}),g(e,r,h,c)}};o.upload.onprogress=function(e){if(e.lengthComputable){a[null==i?"simple":"chunked"](e.loaded,e.total)}}},_registerXhr:function(e,t,i,o){var r=null==t?-1:t,a=n._getFileState(e).temp;return a.xhrs=a.xhrs||{},a.ajaxRequesters=a.ajaxRequesters||{},a.xhrs[r]=i,o&&(a.ajaxRequesters[r]=o),i},_removeExpiredChunkingRecords:function(){var e=s.recordsExpireIn;n._iterateResumeRecords(function(t,n){var i=new Date(n.lastUpdated);i.setDate(i.getDate()+e),i.getTime()<=Date.now()&&(m("Removing expired resume record with key "+t),localStorage.removeItem(t))})},_shouldChunkThisFile:function(e){var t=n._getFileState(e);if(t)return t.chunking||n.reevaluateChunking(e),t.chunking.enabled}})},qq.DeleteFileAjaxRequester=function(e){"use strict";var t,n={method:"DELETE",uuidParamName:"qquuid",endpointStore:{},maxConnections:3,customHeaders:function(e){return{}},paramsStore:{},cors:{expected:!1,sendCredentials:!1},log:function(e,t){},onDelete:function(e){},onDeleteComplete:function(e,t,n){}};qq.extend(n,e),t=qq.extend(this,new qq.AjaxRequester({acceptHeader:"application/json",validMethods:["POST","DELETE"],method:n.method,endpointStore:n.endpointStore,paramsStore:n.paramsStore,mandatedParams:function(){return"POST"===n.method.toUpperCase()?{_method:"DELETE"}:{}}(),maxConnections:n.maxConnections,customHeaders:function(e){return n.customHeaders.get(e)},log:n.log,onSend:n.onDelete,onComplete:n.onDeleteComplete,cors:n.cors})),qq.extend(this,{sendDelete:function(e,i,o){var r=o||{};n.log("Submitting delete file request for "+e),"DELETE"===n.method?t.initTransport(e).withPath(i).withParams(r).send():(r[n.uuidParamName]=i,t.initTransport(e).withParams(r).send())}})},function(){function e(e){var t,n=e.naturalWidth,i=e.naturalHeight,o=document.createElement("canvas");return n*i>1048576&&(o.width=o.height=1,t=o.getContext("2d"),t.drawImage(e,1-n,0),0===t.getImageData(0,0,1,1).data[3])}function t(e,t,n){var i,o,r,a,s=document.createElement("canvas"),A=0,l=n,u=n;for(s.width=1,s.height=n,i=s.getContext("2d"),i.drawImage(e,0,0),o=i.getImageData(0,0,1,n).data;u>A;)r=o[4*(u-1)+3],0===r?l=u:A=u,u=l+A>>1;return a=u/n,0===a?1:a}function n(e,t,n,i){var r=document.createElement("canvas"),a=n.mime||"image/jpeg",s=new qq.Promise;return o(e,t,r,n,i).then(function(){s.success(r.toDataURL(a,n.quality||.8))}),s}function i(e){if(!qq.ios())throw new qq.Error("Downsampled dimensions can only be reliably calculated for iOS!");if(e.origHeight*e.origWidth>5241e3)return{newHeight:Math.round(Math.sqrt(e.origHeight/e.origWidth*5241e3)),newWidth:Math.round(Math.sqrt(e.origWidth/e.origHeight*5241e3))}}function o(n,o,s,A,l){var u,d=n.naturalWidth,c=n.naturalHeight,p=A.width,h=A.height,f=s.getContext("2d"),g=new qq.Promise;return f.save(),A.resize?r({blob:o,canvas:s,image:n,imageHeight:c,imageWidth:d,orientation:A.orientation,resize:A.resize,targetHeight:h,targetWidth:p}):(qq.supportedFeatures.unlimitedScaledImageSize||(u=i({origWidth:p,origHeight:h}))&&(qq.log(qq.format("Had to reduce dimensions due to device limitations from {}w / {}h to {}w / {}h",p,h,u.newWidth,u.newHeight),"warn"),p=u.newWidth,h=u.newHeight),a(s,p,h,A.orientation),qq.ios()?function(){e(n)&&(d/=2,c/=2);var i,o,r,a=1024,s=document.createElement("canvas"),A=l?t(n,d,c):1,u=Math.ceil(a*p/d),g=Math.ceil(a*h/c/A),m=0,q=0;for(s.width=s.height=a,i=s.getContext("2d");m<c;){for(o=0,r=0;o<d;)i.clearRect(0,0,a,a),i.drawImage(n,-o,-m),f.drawImage(s,0,0,a,a,r,q,u,g),o+=a,r+=u;m+=a,q+=g}f.restore(),s=i=null}():f.drawImage(n,0,0,p,h),s.qqImageRendered&&s.qqImageRendered(),g.success(),g)}function r(e){var t=e.blob,n=e.image,i=e.imageHeight,o=e.imageWidth,r=e.orientation,s=new qq.Promise,A=e.resize,l=document.createElement("canvas"),u=l.getContext("2d"),d=e.canvas,c=e.targetHeight,p=e.targetWidth;return a(l,o,i,r),d.height=c,d.width=p,u.drawImage(n,0,0),A({blob:t,height:c,image:n,sourceCanvas:l,targetCanvas:d,width:p}).then(function(){d.qqImageRendered&&d.qqImageRendered(),s.success()},s.failure),s}function a(e,t,n,i){switch(i){case 5:case 6:case 7:case 8:e.width=n,e.height=t;break;default:e.width=t,e.height=n}var o=e.getContext("2d");switch(i){case 2:o.translate(t,0),o.scale(-1,1);break;case 3:o.translate(t,n),o.rotate(Math.PI);break;case 4:o.translate(0,n),o.scale(1,-1);break;case 5:o.rotate(.5*Math.PI),o.scale(1,-1);break;case 6:o.rotate(.5*Math.PI),o.translate(0,-n);break;case 7:o.rotate(.5*Math.PI),o.translate(t,-n),o.scale(-1,1);break;case 8:o.rotate(-.5*Math.PI),o.translate(-t,0)}}function s(e,t){var n=this;window.Blob&&e instanceof Blob&&function(){var t=new Image,i=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null;if(!i)throw Error("No createObjectURL function found to create blob url");t.src=i.createObjectURL(e),n.blob=e,e=t}(),e.naturalWidth||e.naturalHeight||(e.onload=function(){var e=n.imageLoadListeners;e&&(n.imageLoadListeners=null,setTimeout(function(){for(var t=0,n=e.length;t<n;t++)e[t]()},0))},e.onerror=t,this.imageLoadListeners=[]),this.srcImage=e}s.prototype.render=function(e,t){t=t||{};var i,r=this,a=this.srcImage.naturalWidth,s=this.srcImage.naturalHeight,A=t.width,l=t.height,u=t.maxWidth,d=t.maxHeight,c=!this.blob||"image/jpeg"===this.blob.type,p=e.tagName.toLowerCase();if(this.imageLoadListeners)return void this.imageLoadListeners.push(function(){r.render(e,t)});A&&!l?l=s*A/a<<0:l&&!A?A=a*l/s<<0:(A=a,l=s),u&&A>u&&(A=u,l=s*A/a<<0),d&&l>d&&(l=d,A=a*l/s<<0),i={width:A,height:l},qq.each(t,function(e,t){i[e]=t}),"img"===p?function(){var t=e.src;n(r.srcImage,r.blob,i,c).then(function(n){e.src=n,t===e.src&&e.onload()})}():"canvas"===p&&o(this.srcImage,this.blob,e,i,c),"function"==typeof this.onrender&&this.onrender(e)},qq.MegaPixImage=s}(),qq.ImageGenerator=function(e){"use strict";function t(e){return"img"===e.tagName.toLowerCase()}function n(e){return"canvas"===e.tagName.toLowerCase()}function i(){return void 0!==(new Image).crossOrigin}function o(){var e=document.createElement("canvas");return e.getContext&&e.getContext("2d")}function r(e){var t=e.split("/"),n=t[t.length-1].split("?")[0],i=qq.getExtension(n);switch(i=i&&i.toLowerCase()){case"jpeg":case"jpg":return"image/jpeg";case"png":return"image/png";case"bmp":return"image/bmp";case"gif":return"image/gif";case"tiff":case"tif":return"image/tiff"}}function a(e){var t,n,i,o=document.createElement("a");return o.href=e,t=o.protocol,i=o.port,n=o.hostname,t.toLowerCase()!==window.location.protocol.toLowerCase()||(n.toLowerCase()!==window.location.hostname.toLowerCase()||i!==window.location.port&&!qq.ie())}function s(t,n){t.onload=function(){t.onload=null,t.onerror=null,n.success(t)},t.onerror=function(){t.onload=null,t.onerror=null,e("Problem drawing thumbnail!","error"),n.failure(t,"Problem drawing thumbnail!")}}function A(e,t){e.qqImageRendered=function(){t.success(e)}}function l(i,o){var r=t(i)||n(i);return t(i)?s(i,o):n(i)?A(i,o):(o.failure(i),e(qq.format("Element container of type {} is not supported!",i.tagName),"error")),r}function u(t,n,i){var o=new qq.Promise,r=new qq.Identify(t,e),a=i.maxSize,s=null==i.orient||i.orient,A=function(){n.onerror=null,n.onload=null,e("Could not render preview, file may be too large!","error"),o.failure(n,"Browser cannot render image!")};return r.isPreviewable().then(function(r){var u={parse:function(){return(new qq.Promise).success()}},d=s?new qq.Exif(t,e):u,c=new qq.MegaPixImage(t,A);l(n,o)&&d.parse().then(function(e){var t=e&&e.Orientation;c.render(n,{maxWidth:a,maxHeight:a,orientation:t,mime:r,resize:i.customResizeFunction})},function(t){e(qq.format("EXIF data could not be parsed ({}).  Assuming orientation = 1.",t)),c.render(n,{maxWidth:a,maxHeight:a,mime:r,resize:i.customResizeFunction})})},function(){e("Not previewable"),o.failure(n,"Not previewable")}),o}function d(e,t,n,i,o){var s=new Image,A=new qq.Promise;l(s,A),a(e)&&(s.crossOrigin="anonymous"),s.src=e,A.then(function(){l(t,n),new qq.MegaPixImage(s).render(t,{maxWidth:i,maxHeight:i,mime:r(e),resize:o})},n.failure)}function c(e,t,n,i){l(t,n),qq(t).css({maxWidth:i+"px",maxHeight:i+"px"}),t.src=e}function p(e,r,s){var A=new qq.Promise,u=s.scale,p=u?s.maxSize:null;return u&&t(r)?o()?a(e)&&!i()?c(e,r,A,p):d(e,r,A,p):c(e,r,A,p):n(r)?d(e,r,A,p):l(r,A)&&(r.src=e),A}qq.extend(this,{generate:function(t,n,i){return qq.isString(t)?(e("Attempting to update thumbnail based on server response."),p(t,n,i||{})):(e("Attempting to draw client-side image preview."),u(t,n,i||{}))}}),this._testing={},this._testing.isImg=t,this._testing.isCanvas=n,this._testing.isCrossOrigin=a,this._testing.determineMimeOfFileName=r},qq.Exif=function(e,t){"use strict";function n(e){for(var t=0,n=0;e.length>0;)t+=parseInt(e.substring(0,2),16)*Math.pow(2,n),e=e.substring(2,e.length),n+=8;return t}function i(t,n){var o=t,r=n;return void 0===o&&(o=2,r=new qq.Promise),qq.readBlobToHex(e,o,4).then(function(e){var t,n=/^ffe([0-9])/.exec(e);n?"1"!==n[1]?(t=parseInt(e.slice(4,8),16),i(o+t+2,r)):r.success(o):r.failure("No EXIF header to be found!")}),r}function o(){var t=new qq.Promise;return qq.readBlobToHex(e,0,6).then(function(e){0!==e.indexOf("ffd8")?t.failure("Not a valid JPEG!"):i().then(function(e){t.success(e)},function(e){t.failure(e)})}),t}function r(t){var n=new qq.Promise;return qq.readBlobToHex(e,t+10,2).then(function(e){n.success("4949"===e)}),n}function a(t,i){var o=new qq.Promise;return qq.readBlobToHex(e,t+18,2).then(function(e){if(i)return o.success(n(e));o.success(parseInt(e,16))}),o}function s(t,n){var i=t+20,o=12*n;return qq.readBlobToHex(e,i,o)}function A(e){for(var t=[],n=0;n+24<=e.length;)t.push(e.slice(n,n+24)),n+=24;return t}function l(e,t){var i=qq.extend([],u),o={};return qq.each(t,function(t,r){var a,s,A,l=r.slice(0,4),u=e?n(l):parseInt(l,16),c=i.indexOf(u);if(c>=0&&(s=d[u].name,A=d[u].bytes,a=r.slice(16,16+2*A),o[s]=e?n(a):parseInt(a,16),i.splice(c,1)),0===i.length)return!1}),o}var u=[274],d={274:{name:"Orientation",bytes:2}};qq.extend(this,{parse:function(){var n=new qq.Promise,i=function(e){t(qq.format("EXIF header parse failed: '{}' ",e)),n.failure(e)};return o().then(function(o){t(qq.format("Moving forward with EXIF header parsing for '{}'",void 0===e.name?"blob":e.name)),r(o).then(function(e){t(qq.format("EXIF Byte order is {} endian",e?"little":"big")),a(o,e).then(function(r){t(qq.format("Found {} APP1 directory entries",r)),s(o,r).then(function(i){var o=A(i),r=l(e,o);t("Successfully parsed some EXIF tags"),n.success(r)},i)},i)},i)},i),n}}),this._testing={},this._testing.parseLittleEndian=n},qq.Identify=function(e,t){"use strict";function n(e,t){var n=!1,i=[].concat(e);return qq.each(i,function(e,i){if(0===t.indexOf(i))return n=!0,!1}),n}qq.extend(this,{isPreviewable:function(){var i=this,o=new qq.Promise,r=!1,a=void 0===e.name?"blob":e.name;return t(qq.format("Attempting to determine if {} can be rendered in this browser",a)),t("First pass: check type attribute of blob object."),this.isPreviewableSync()?(t("Second pass: check for magic bytes in file header."),qq.readBlobToHex(e,0,4).then(function(e){qq.each(i.PREVIEWABLE_MIME_TYPES,function(t,i){if(n(i,e))return("image/tiff"!==t||qq.supportedFeatures.tiffPreviews)&&(r=!0,o.success(t)),!1}),t(qq.format("'{}' is {} able to be rendered in this browser",a,r?"":"NOT")),r||o.failure()},function(){t("Error reading file w/ name '"+a+"'.  Not able to be rendered in this browser."),o.failure()})):o.failure(),o},isPreviewableSync:function(){var n=e.type,i=qq.indexOf(Object.keys(this.PREVIEWABLE_MIME_TYPES),n)>=0,o=!1,r=void 0===e.name?"blob":e.name;return i&&(o="image/tiff"!==n||qq.supportedFeatures.tiffPreviews),!o&&t(r+" is not previewable in this browser per the blob's type attr"),o}})},qq.Identify.prototype.PREVIEWABLE_MIME_TYPES={"image/jpeg":"ffd8ff","image/gif":"474946","image/png":"89504e","image/bmp":"424d","image/tiff":["49492a00","4d4d002a"]},qq.ImageValidation=function(e,t){"use strict";function n(e){var t=!1;return qq.each(e,function(e,n){if(n>0)return t=!0,!1}),t}function i(){var n=new qq.Promise;return new qq.Identify(e,t).isPreviewable().then(function(){var i=new Image,o=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null;o?(i.onerror=function(){t("Cannot determine dimensions for image.  May be too large.","error"),n.failure()},i.onload=function(){n.success({width:this.width,height:this.height})},i.src=o.createObjectURL(e)):(t("No createObjectURL function available to generate image URL!","error"),n.failure())},n.failure),n}function o(e,t){var n;return qq.each(e,function(e,i){if(i>0){var o=/(max|min)(Width|Height)/.exec(e),r=o[2].charAt(0).toLowerCase()+o[2].slice(1),a=t[r];switch(o[1]){case"min":if(a<i)return n=e,!1;break;case"max":if(a>i)return n=e,!1}}}),n}this.validate=function(e){var r=new qq.Promise;return t("Attempting to validate image."),n(e)?i().then(function(t){var n=o(e,t);n?r.failure(n):r.success()},r.success):r.success(),r}},qq.Session=function(e){"use strict";function t(e){if(qq.isArray(e))return!0;i.log("Session response is not an array.","error")}function n(e,n,o,r){var a=!1;n=n&&t(e),n&&qq.each(e,function(e,t){if(null==t.uuid)a=!0,i.log(qq.format("Session response item {} did not include a valid UUID - ignoring.",e),"error");else if(null==t.name)a=!0,i.log(qq.format("Session response item {} did not include a valid name - ignoring.",e),"error");else try{return i.addFileRecord(t),!0}catch(e){a=!0,i.log(e.message,"error")}return!1}),r[n&&!a?"success":"failure"](e,o)}var i={endpoint:null,params:{},customHeaders:{},cors:{},addFileRecord:function(e){},log:function(e,t){}};qq.extend(i,e,!0),this.refresh=function(){var e=new qq.Promise,t=function(t,i,o){n(t,i,o,e)},o=qq.extend({},i);return new qq.SessionAjaxRequester(qq.extend(o,{onComplete:t})).queryServer(),e}},qq.SessionAjaxRequester=function(e){"use strict";function t(e,t,n){var o=null;if(null!=t.responseText)try{o=qq.parseJson(t.responseText)}catch(e){i.log("Problem parsing session response: "+e.message,"error"),n=!0}i.onComplete(o,!n,t)}var n,i={endpoint:null,customHeaders:{},params:{},cors:{expected:!1,sendCredentials:!1},onComplete:function(e,t,n){},log:function(e,t){}};qq.extend(i,e),n=qq.extend(this,new qq.AjaxRequester({acceptHeader:"application/json",validMethods:["GET"],method:"GET",endpointStore:{get:function(){return i.endpoint}},customHeaders:i.customHeaders,log:i.log,onComplete:t,cors:i.cors})),qq.extend(this,{queryServer:function(){var e=qq.extend({},i.params);i.log("Session query request."),n.initTransport("sessionRefresh").withParams(e).withCacheBuster().send()}})},qq.Scaler=function(e,t){"use strict";var n=e.customResizer,i=e.sendOriginal,o=e.orient,r=e.defaultType,a=e.defaultQuality/100,s=e.failureText,A=e.includeExif,l=this._getSortedSizes(e.sizes);qq.extend(this,{enabled:qq.supportedFeatures.scaling&&l.length>0,getFileRecords:function(e,u,d){var c=this,p=[],h=d.blob?d.blob:d;return new qq.Identify(h,t).isPreviewableSync()?(qq.each(l,function(e,i){var l=c._determineOutputType({defaultType:r,requestedType:i.type,refType:h.type});p.push({uuid:qq.getUniqueId(),name:c._getName(u,{name:i.name,type:l,refType:h.type}),blob:new qq.BlobProxy(h,qq.bind(c._generateScaledImage,c,{customResizeFunction:n,maxSize:i.maxSize,orient:o,type:l,quality:a,failedText:s,includeExif:A,log:t}))})}),p.push({uuid:e,name:u,size:h.size,blob:i?h:null})):p.push({uuid:e,name:u,size:h.size,blob:h}),p},handleNewFile:function(e,t,n,i,o,r,a,s){var A=this,l=(e.qqButtonId||e.blob&&e.blob.qqButtonId,[]),u=null,d=s.addFileToHandler,c=s.uploadData,p=s.paramsStore,h=qq.getUniqueId();qq.each(A.getFileRecords(n,t,e),function(e,t){var n,i=t.size;t.blob instanceof qq.BlobProxy&&(i=-1),n=c.addFile({uuid:t.uuid,name:t.name,size:i,batchId:r,proxyGroupId:h}),t.blob instanceof qq.BlobProxy?l.push(n):u=n,t.blob?(d(n,t.blob),o.push({id:n,file:t.blob})):c.setStatus(n,qq.status.REJECTED)}),null!==u&&(qq.each(l,function(e,t){var n={qqparentuuid:c.retrieve({id:u}).uuid,qqparentsize:c.retrieve({id:u}).size};n[a]=c.retrieve({id:t}).uuid,c.setParentId(t,u),p.addReadOnly(t,n)}),l.length&&function(){var e={};e[a]=c.retrieve({id:u}).uuid,p.addReadOnly(u,e)}())}})},qq.extend(qq.Scaler.prototype,{scaleImage:function(e,t,n){"use strict";if(!qq.supportedFeatures.scaling)throw new qq.Error("Scaling is not supported in this browser!");var i=new qq.Promise,o=n.log,r=n.getFile(e),a=n.uploadData.retrieve({id:e}),s=a&&a.name,A=a&&a.uuid,l={customResizer:t.customResizer,sendOriginal:!1,orient:t.orient,defaultType:t.type||null,defaultQuality:t.quality,failedToScaleText:"Unable to scale",sizes:[{name:"",maxSize:t.maxSize}]},u=new qq.Scaler(l,o);return qq.Scaler&&qq.supportedFeatures.imagePreviews&&r?qq.bind(function(){var t=u.getFileRecords(A,s,r)[0];t&&t.blob instanceof qq.BlobProxy?t.blob.create().then(i.success,i.failure):(o(e+" is not a scalable image!","error"),i.failure())},this)():(i.failure(),o("Could not generate requested scaled image for "+e+".  Scaling is either not possible in this browser, or the file could not be located.","error")),i},_determineOutputType:function(e){"use strict";var t=e.requestedType,n=e.defaultType,i=e.refType;return n||t?t&&qq.indexOf(Object.keys(qq.Identify.prototype.PREVIEWABLE_MIME_TYPES),t)>=0?"image/tiff"===t?qq.supportedFeatures.tiffPreviews?t:n:t:n:"image/jpeg"!==i?"image/png":i},_getName:function(e,t){"use strict";var n=e.lastIndexOf("."),i=t.type||"image/png",o=t.refType,r="",a=qq.getExtension(e),s="";return t.name&&t.name.trim().length&&(s=" ("+t.name+")"),n>=0?(r=e.substr(0,n),o!==i&&(a=i.split("/")[1]),r+=s+"."+a):r=e+s,r},_getSortedSizes:function(e){"use strict";return e=qq.extend([],e),e.sort(function(e,t){return e.maxSize>t.maxSize?1:e.maxSize<t.maxSize?-1:0})},_generateScaledImage:function(e,t){"use strict";var n=this,i=e.customResizeFunction,o=e.log,r=e.maxSize,a=e.orient,s=e.type,A=e.quality,l=e.failedText,u=e.includeExif&&"image/jpeg"===t.type&&"image/jpeg"===s,d=new qq.Promise,c=new qq.ImageGenerator(o),p=document.createElement("canvas");return o("Attempting to generate scaled version for "+t.name),c.generate(t,p,{maxSize:r,orient:a,customResizeFunction:i}).then(function(){var e=p.toDataURL(s,A),i=function(){o("Success generating scaled version for "+t.name);var n=qq.dataUriToBlob(e);d.success(n)};u?n._insertExifHeader(t,e,o).then(function(t){e=t,i()},function(){o("Problem inserting EXIF header into scaled image.  Using scaled image w/out EXIF data.","error"),i()}):i()},function(){o("Failed attempt to generate scaled version for "+t.name,"error"),d.failure(l)}),d},_insertExifHeader:function(e,t,n){"use strict";var i=new FileReader,o=new qq.Promise,r="";return i.onload=function(){r=i.result,o.success(qq.ExifRestorer.restore(r,t))},i.onerror=function(){n("Problem reading "+e.name+" during attempt to transfer EXIF data to scaled version.","error"),o.failure()},i.readAsDataURL(e),o},_dataUriToBlob:function(e){"use strict";var t,n,i,o;return t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):decodeURI(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(t.length),o=new Uint8Array(i),qq.each(t,function(e,t){o[e]=t.charCodeAt(0)}),this._createBlob(i,n)},_createBlob:function(e,t){"use strict";var n=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,i=n&&new n;return i?(i.append(e),i.getBlob(t)):new Blob([e],{type:t})}}),qq.ExifRestorer=function(){var e={};return e.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e.encode64=function(e){var t,n,i,o,r,a="",s="",A="",l=0;do{t=e[l++],n=e[l++],s=e[l++],i=t>>2,o=(3&t)<<4|n>>4,r=(15&n)<<2|s>>6,A=63&s,isNaN(n)?r=A=64:isNaN(s)&&(A=64),a=a+this.KEY_STR.charAt(i)+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(r)+this.KEY_STR.charAt(A),t=n=s="",i=o=r=A=""}while(l<e.length);return a},e.restore=function(e,t){if(!e.match("data:image/jpeg;base64,"))return t;var n=this.decode64(e.replace("data:image/jpeg;base64,","")),i=this.slice2Segments(n),o=this.exifManipulation(t,i);return"data:image/jpeg;base64,"+this.encode64(o)},e.exifManipulation=function(e,t){var n=this.getExifArray(t),i=this.insertExif(e,n);return new Uint8Array(i)},e.getExifArray=function(e){for(var t,n=0;n<e.length;n++)if(t=e[n],255==t[0]&225==t[1])return t;return[]},e.insertExif=function(e,t){var n=e.replace("data:image/jpeg;base64,",""),i=this.decode64(n),o=i.indexOf(255,3),r=i.slice(0,o),a=i.slice(o),s=r;return s=s.concat(t),s=s.concat(a)},e.slice2Segments=function(e){for(var t=0,n=[];;){if(255==e[t]&218==e[t+1])break;if(255==e[t]&216==e[t+1])t+=2;else{var i=256*e[t+2]+e[t+3],o=t+i+2,r=e.slice(t,o);n.push(r),t=o}if(t>e.length)break}return n},e.decode64=function(e){var t,n,i,o,r,a="",s="",A=0,l=[];if(/[^A-Za-z0-9\+\/\=]/g.exec(e))throw new Error("There were invalid base64 characters in the input text.  Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='");e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{i=this.KEY_STR.indexOf(e.charAt(A++)),o=this.KEY_STR.indexOf(e.charAt(A++)),r=this.KEY_STR.indexOf(e.charAt(A++)),s=this.KEY_STR.indexOf(e.charAt(A++)),t=i<<2|o>>4,n=(15&o)<<4|r>>2,a=(3&r)<<6|s,l.push(t),64!=r&&l.push(n),64!=s&&l.push(a),t=n=a="",i=o=r=s=""}while(A<e.length);return l},e}(),qq.TotalProgress=function(e,t){"use strict";var n={},i=0,o=0,r=-1,a=-1,s=function(t,n){t===r&&n===a||e(t,n),r=t,a=n},A=function(e,t){var n=!0;return qq.each(e,function(e,i){if(qq.indexOf(t,i)>=0)return n=!1,!1}),n},l=function(e){c(e,-1,-1),delete n[e]},u=function(e,t,n){(0===t.length||A(t,n))&&(s(o,o),this.reset())},d=function(e){var i=t(e);i>0&&(c(e,0,i),n[e]={loaded:0,total:i})},c=function(e,t,r){var a=n[e]?n[e].loaded:0,A=n[e]?n[e].total:0;-1===t&&-1===r?(i-=a,o-=A):(t&&(i+=t-a),r&&(o+=r-A)),s(i,o)};qq.extend(this,{onAllComplete:u,onStatusChange:function(e,t,n){n===qq.status.CANCELED||n===qq.status.REJECTED?l(e):n===qq.status.SUBMITTING&&d(e)},onIndividualProgress:function(e,t,i){c(e,t,i),n[e]={loaded:t,total:i}},onNewSize:function(e){d(e)},reset:function(){n={},i=0,o=0}})},qq.PasteSupport=function(e){"use strict";function t(e){return e.type&&0===e.type.indexOf("image/")}function n(){o&&o()}var i,o;i={targetElement:null,callbacks:{log:function(e,t){},pasteReceived:function(e){}}},qq.extend(i,e),function(){o=qq(i.targetElement).attach("paste",function(e){var n=e.clipboardData;n&&qq.each(n.items,function(e,n){if(t(n)){var o=n.getAsFile();i.callbacks.pasteReceived(o)}})})}(),qq.extend(this,{reset:function(){n()}})},qq.FormSupport=function(e,t,n){"use strict";function i(e){e.getAttribute("action")&&(a.newEndpoint=e.getAttribute("action"))}function o(e,t){if(!e.checkValidity||e.checkValidity())return!0;n("Form did not pass validation checks - will not upload.","error"),t()}function r(e){var n=e.submit;qq(e).attach("submit",function(i){i=i||window.event,i.preventDefault?i.preventDefault():i.returnValue=!1,o(e,n)&&t()}),e.submit=function(){o(e,n)&&t()}}var a=this,s=e.interceptSubmit,A=e.element,l=e.autoUpload;qq.extend(this,{newEndpoint:null,newAutoUpload:l,attachedToForm:!1,getFormInputsAsObject:function(){return null==A?null:a._form2Obj(A)}}),A=function(e){return e&&(qq.isString(e)&&(e=document.getElementById(e)),e&&(n("Attaching to form element."),i(e),s&&r(e))),e}(A),this.attachedToForm=!!A},qq.extend(qq.FormSupport.prototype,{_form2Obj:function(e){"use strict";var t={},n=function(e){var t=["button","image","reset","submit"];return qq.indexOf(t,e.toLowerCase())<0},i=function(e){return qq.indexOf(["checkbox","radio"],e.toLowerCase())>=0},o=function(e){return!(!i(e.type)||e.checked)||e.disabled&&"hidden"!==e.type.toLowerCase()},r=function(e){var t=null;return qq.each(qq(e).children(),function(e,n){if("option"===n.tagName.toLowerCase()&&n.selected)return t=n.value,!1}),t};return qq.each(e.elements,function(e,i){if(!qq.isInput(i,!0)&&"textarea"!==i.tagName.toLowerCase()||!n(i.type)||o(i)){if("select"===i.tagName.toLowerCase()&&!o(i)){var a=r(i);null!==a&&(t[i.name]=a)}}else t[i.name]=i.value}),t}}),qq.traditional=qq.traditional||{},qq.traditional.FormUploadHandler=function(e,t){"use strict";function n(e,t){var n,i,r;try{i=t.contentDocument||t.contentWindow.document,r=i.body.innerHTML,s("converting iframe's innerHTML to JSON"),s("innerHTML = "+r),r&&r.match(/^<pre/i)&&(r=i.body.firstChild.firstChild.nodeValue),n=o._parseJsonResponse(r)}catch(e){s("Error when attempting to parse form upload response ("+e.message+")","error"),n={success:!1}}return n}function i(t,n){var i=e.paramsStore.get(t),s="get"===e.method.toLowerCase()?"GET":"POST",A=e.endpointStore.get(t),l=r(t);return i[e.uuidName]=a(t),i[e.filenameParam]=l,o._initFormForUpload({method:s,endpoint:A,params:i,paramsInBody:e.paramsInBody,targetName:n.name})}var o=this,r=t.getName,a=t.getUuid,s=t.log;this.uploadFile=function(t){var r,a=o.getInput(t),A=o._createIframe(t),l=new qq.Promise;return r=i(t,A),r.appendChild(a),o._attachLoadEvent(A,function(i){s("iframe loaded");var r=i||n(t,A);o._detachLoadEvent(t),e.cors.expected||qq(A).remove(),r.success?l.success(r):l.failure(r)}),s("Sending upload request for "+t),r.submit(),qq(r).remove(),l},qq.extend(this,new qq.FormUploadHandler({options:{isCors:e.cors.expected,inputName:e.inputName},proxy:{onCancel:e.onCancel,getName:r,getUuid:a,log:s}}))},qq.traditional=qq.traditional||{},qq.traditional.XhrUploadHandler=function(e,t){"use strict";var n=this,i=t.getName,o=t.getSize,r=t.getUuid,a=t.log,s=e.forceMultipart||e.paramsInBody,A=function(t,n,r){var a=o(t),A=i(t);e.omitDefaultParams||(n[e.chunking.paramNames.partIndex]=r.part,n[e.chunking.paramNames.partByteOffset]=r.start,n[e.chunking.paramNames.chunkSize]=r.size,n[e.chunking.paramNames.totalParts]=r.count,n[e.totalFileSizeName]=a),s&&!e.omitDefaultParams&&(n[e.filenameParam]=A)},l=new qq.traditional.AllChunksDoneAjaxRequester({cors:e.cors,endpoint:e.chunking.success.endpoint,headers:e.chunking.success.headers,jsonPayload:e.chunking.success.jsonPayload,log:a,method:e.chunking.success.method,params:e.chunking.success.params}),u=function(e,t){var n=new qq.Promise;return t.onreadystatechange=function(){if(4===t.readyState){var i=p(e,t);i.success?n.success(i.response,t):n.failure(i.response,t)}},n},d=function(t){var a=e.paramsStore.get(t),s=i(t),A=o(t);return a[e.uuidName]=r(t),a[e.filenameParam]=s,a[e.totalFileSizeName]=A,a[e.chunking.paramNames.totalParts]=n._getTotalChunks(t),a},c=function(t,n){return qq.indexOf([200,201,202,203,204],t.status)<0||e.requireSuccessJson&&!n.success||n.reset},p=function(e,t){var n;return a("xhr - server response received for "+e),a("responseText = "+t.responseText),n=h(!0,t),{success:!c(t,n),response:n}},h=function(t,n){var i={};try{a(qq.format("Received response status {} with body: {}",n.status,n.responseText)),i=qq.parseJson(n.responseText)}catch(n){t&&e.requireSuccessJson&&a("Error when attempting to parse xhr response text ("+n.message+")","error")}return i},f=function(t){var i=new qq.Promise;return l.complete(t,n._createXhr(t),d(t),e.customHeaders.get(t)).then(function(e){i.success(h(!1,e),e)},function(e){i.failure(h(!1,e),e)}),i},g=function(t){var n,a=t.fileOrBlob,A=t.id,l=t.xhr,u=t.xhrOverrides||{},d=t.customParams||{},c=t.params||{},p=u.params||{},h=s?new FormData:null,f=u.method||e.method,g=u.endpoint||e.endpointStore.get(A),m=i(A),q=o(A);return e.omitDefaultParams?(n=qq.extend({},d),qq.extend(n,p)):(n=qq.extend({},d),qq.extend(n,p),qq.extend(n,c),n[e.uuidName]=r(A),n[e.filenameParam]=m,s?n[e.totalFileSizeName]=q:e.paramsInBody||(n[e.inputName]=m)),e.paramsInBody||(g=qq.obj2url(n,g)),l.open(f,g,!0),e.cors.expected&&e.cors.sendCredentials&&(l.withCredentials=!0),s?(e.paramsInBody&&qq.obj2FormData(n,h),h.append(e.inputName,a),h):a},m=function(t){var i=t.headerOverrides,o=t.id,r=t.xhr;if(i)qq.each(i,function(e,t){r.setRequestHeader(e,t)});else{var a=e.customHeaders.get(o),A=n.getFile(o);r.setRequestHeader("Accept","application/json"),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("Cache-Control","no-cache"),s||(r.setRequestHeader("Content-Type","application/octet-stream"),r.setRequestHeader("X-Mime-Type",A.type)),qq.each(a,function(e,t){r.setRequestHeader(e,t)})}};qq.extend(this,{uploadChunk:function(t){var i,o,r,a=t.id,s=t.chunkIdx,l=t.overrides||{},d=t.resuming,c=n._getChunkData(a,s),p=n._createXhr(a,s),h={};return i=u(a,p),n._registerProgressHandler(a,s,c.size),r=e.paramsStore.get(a),A(a,h,c),d&&(h[e.resume.paramNames.resuming]=!0),o=g({fileOrBlob:c.blob,id:a,customParams:r,params:h,xhr:p,xhrOverrides:l}),m({headerOverrides:l.headers,id:a,xhr:p}),p.send(o),i},uploadFile:function(t){var i,o,r,a,s=n.getFile(t);return o=n._createXhr(t),n._registerProgressHandler(t),i=u(t,o),r=e.paramsStore.get(t),a=g({fileOrBlob:s,id:t,customParams:r,xhr:o}),m({id:t,xhr:o}),o.send(a),i}}),qq.extend(this,new qq.XhrUploadHandler({options:qq.extend({namespace:"traditional"},e),proxy:qq.extend({getEndpoint:e.endpointStore.get},t)})),qq.override(this,function(n){return{finalizeChunks:function(i){return t.onFinalizing(i),e.chunking.success.endpoint?f(i):n.finalizeChunks(i,qq.bind(h,this,!0))}}})},qq.traditional.AllChunksDoneAjaxRequester=function(e){"use strict";var t,n={cors:{allowXdr:!1,expected:!1,sendCredentials:!1},endpoint:null,log:function(e,t){},method:"POST"},i={},o={get:function(e){return qq.isFunction(n.endpoint)?n.endpoint(e):n.endpoint}};qq.extend(n,e),t=qq.extend(this,new qq.AjaxRequester({acceptHeader:"application/json",contentType:n.jsonPayload?"application/json":"application/x-www-form-urlencoded",validMethods:[n.method],method:n.method,endpointStore:o,allowXRequestedWithAndCacheControl:!1,cors:n.cors,log:n.log,onComplete:function(e,t,n){var o=i[e];delete i[e],n?o.failure(t):o.success(t)}})),qq.extend(this,{complete:function(e,o,r,a){var s=new qq.Promise;return n.log("Submitting All Chunks Done request for "+e),i[e]=s,t.initTransport(e).withParams(n.params(e)||r).withHeaders(n.headers(e)||a).send(o),s}})},qq.DragAndDrop=function(e){"use strict";function t(e,t){var n=Array.prototype.slice.call(e);l.callbacks.dropLog("Grabbed "+e.length+" dropped files."),t.dropDisabled(!1),l.callbacks.processingDroppedFilesComplete(n,t.getElement())}function n(e){var t=new qq.Promise;return e.isFile?e.file(function(n){n.qqPath=i(e),p.push(n),t.success()},function(n){l.callbacks.dropLog("Problem parsing '"+e.fullPath+"'.  FileError code "+n.code+".","error"),t.failure()}):e.isDirectory&&o(e).then(function(e){var i=e.length;qq.each(e,function(e,o){n(o).done(function(){0===(i-=1)&&t.success()})}),e.length||t.success()},function(n){l.callbacks.dropLog("Problem parsing '"+e.fullPath+"'.  FileError code "+n.code+".","error"),t.failure()}),t}function i(e){var t=e.name,n=e.fullPath,i=n.lastIndexOf(t);return n=n.substr(0,i),"/"===n.charAt(0)&&(n=n.substr(1)),n}function o(e,t,n,i){var r=i||new qq.Promise,a=t||e.createReader();return a.readEntries(function(t){var i=n?n.concat(t):t;t.length?setTimeout(function(){o(e,a,i,r)},0):r.success(i)},r.failure),r}function r(e,t){var i=[],o=new qq.Promise;return l.callbacks.processingDroppedFiles(),t.dropDisabled(!0),e.files.length>1&&!l.allowMultipleItems?(l.callbacks.processingDroppedFilesComplete([]),l.callbacks.dropError("tooManyFilesError",""),t.dropDisabled(!1),o.failure()):(p=[],qq.isFolderDropSupported(e)?qq.each(e.items,function(e,t){var r=t.webkitGetAsEntry();r&&(r.isFile?p.push(t.getAsFile()):i.push(n(r).done(function(){i.pop(),0===i.length&&o.success()})))}):p=e.files,0===i.length&&o.success()),o}function a(e){var n=new qq.UploadDropZone({HIDE_ZONES_EVENT_NAME:u,element:e,onEnter:function(t){qq(e).addClass(l.classes.dropActive),t.stopPropagation()},onLeaveNotDescendants:function(t){qq(e).removeClass(l.classes.dropActive)},onDrop:function(e){r(e.dataTransfer,n).then(function(){t(p,n)},function(){l.callbacks.dropLog("Drop event DataTransfer parsing failed.  No files will be uploaded.","error")})}});return h.addDisposer(function(){n.dispose()}),qq(e).hasAttribute(d)&&qq(e).hide(),c.push(n),n}function s(e){var t;return qq.each(e.dataTransfer.types,function(e,n){if("Files"===n)return t=!0,!1}),t}function A(e){return qq.safari()?e.x<0||e.y<0:0===e.x&&0===e.y}var l,u="qq-hidezones",d="qq-hide-dropzone",c=[],p=[],h=new qq.DisposeSupport;l={dropZoneElements:[],allowMultipleItems:!0,classes:{dropActive:null},callbacks:new qq.DragAndDrop.callbacks},qq.extend(l,e,!0),function(){var e=l.dropZoneElements,t=function(){setTimeout(function(){qq.each(e,function(e,t){qq(t).hasAttribute(d)&&qq(t).hide(),qq(t).removeClass(l.classes.dropActive)})},10)};qq.each(e,function(t,n){var i=a(n);e.length&&qq.supportedFeatures.fileDrop&&h.attach(document,"dragenter",function(t){!i.dropDisabled()&&s(t)&&qq.each(e,function(e,t){t instanceof HTMLElement&&qq(t).hasAttribute(d)&&qq(t).css({display:"block"})})})}),h.attach(document,"dragleave",function(e){A(e)&&t()}),h.attach(qq(document).children()[0],"mouseenter",function(e){t()}),h.attach(document,"drop",function(e){s(e)&&(e.preventDefault(),t())}),h.attach(document,u,t)}(),qq.extend(this,{setupExtraDropzone:function(e){l.dropZoneElements.push(e),a(e)},removeDropzone:function(e){var t,n=l.dropZoneElements;for(t in n)if(n[t]===e)return n.splice(t,1)},dispose:function(){h.dispose(),qq.each(c,function(e,t){t.dispose()})}}),this._testing={},this._testing.extractDirectoryPath=i},qq.DragAndDrop.callbacks=function(){"use strict";return{processingDroppedFiles:function(){},processingDroppedFilesComplete:function(e,t){},dropError:function(e,t){qq.log("Drag & drop error code '"+e+" with these specifics: '"+t+"'","error")},dropLog:function(e,t){qq.log(e,t)}}},qq.UploadDropZone=function(e){"use strict";function t(){return qq.safari()||qq.firefox()&&qq.windows()}function n(e){if(!qq.supportedFeatures.fileDrop)return!1;var t,n=e.dataTransfer,i=qq.safari();return t=!(!qq.ie()||!qq.supportedFeatures.fileDrop)||"none"!==n.effectAllowed,n&&t&&(n.files&&n.files.length||!i&&n.types.contains&&n.types.contains("Files")||n.types.includes&&n.types.includes("Files"))}function i(e){return void 0!==e&&(s=e),s}function o(){function e(){t=document.createEvent("Event"),t.initEvent(r.HIDE_ZONES_EVENT_NAME,!0,!0)}var t;if(window.CustomEvent)try{t=new CustomEvent(r.HIDE_ZONES_EVENT_NAME)}catch(t){e()}else e();document.dispatchEvent(t)}var r,a,s,A,l=new qq.DisposeSupport;r={element:null,onEnter:function(e){},onLeave:function(e){},onLeaveNotDescendants:function(e){},onDrop:function(e){}},qq.extend(r,e),a=r.element,function(e){A||(t?l.attach(document,"dragover",function(e){e.preventDefault()}):l.attach(document,"dragover",function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="none",e.preventDefault())}),A=!0)}(),function(){l.attach(a,"dragover",function(e){if(n(e)){var t=qq.ie()&&qq.supportedFeatures.fileDrop?null:e.dataTransfer.effectAllowed;e.dataTransfer.dropEffect="move"===t||"linkMove"===t?"move":"copy",e.stopPropagation(),e.preventDefault()}}),l.attach(a,"dragenter",function(e){if(!i()){if(!n(e))return;r.onEnter(e)}}),l.attach(a,"dragleave",function(e){if(n(e)){r.onLeave(e);var t=document.elementFromPoint(e.clientX,e.clientY);qq(this).contains(t)||r.onLeaveNotDescendants(e)}}),l.attach(a,"drop",function(e){if(!i()){if(!n(e))return;e.preventDefault(),e.stopPropagation(),r.onDrop(e),o()}})}(),qq.extend(this,{dropDisabled:function(e){return i(e)},dispose:function(){l.dispose()},getElement:function(){return a}}),this._testing={},this._testing.isValidFileDrag=n},function(){"use strict";qq.uiPublicApi={addInitialFiles:function(e){this._parent.prototype.addInitialFiles.apply(this,arguments),this._templating.addCacheToDom()},clearStoredFiles:function(){this._parent.prototype.clearStoredFiles.apply(this,arguments),this._templating.clearFiles()},addExtraDropzone:function(e){this._dnd&&this._dnd.setupExtraDropzone(e)},removeExtraDropzone:function(e){if(this._dnd)return this._dnd.removeDropzone(e)},getItemByFileId:function(e){if(!this._templating.isHiddenForever(e))return this._templating.getFileContainer(e)},reset:function(){this._parent.prototype.reset.apply(this,arguments),this._templating.reset(),!this._options.button&&this._templating.getButton()&&(this._defaultButtonId=this._createUploadButton({element:this._templating.getButton(),title:this._options.text.fileInputTitle}).getButtonId()),this._dnd&&(this._dnd.dispose(),this._dnd=this._setupDragAndDrop()),this._totalFilesInBatch=0,this._filesInBatchAddedToUi=0,this._setupClickAndEditEventHandlers()},setName:function(e,t){var n=this._options.formatFileName(t);this._parent.prototype.setName.apply(this,arguments),this._templating.updateFilename(e,n)},pauseUpload:function(e){var t=this._parent.prototype.pauseUpload.apply(this,arguments);return t&&this._templating.uploadPaused(e),t},continueUpload:function(e){var t=this._parent.prototype.continueUpload.apply(this,arguments);return t&&this._templating.uploadContinued(e),t},getId:function(e){return this._templating.getFileId(e)},getDropTarget:function(e){return this.getFile(e).qqDropTarget}},qq.uiPrivateApi={_getButton:function(e){var t=this._parent.prototype._getButton.apply(this,arguments);return t||e===this._defaultButtonId&&(t=this._templating.getButton()),t},_removeFileItem:function(e){this._templating.removeFile(e)},_setupClickAndEditEventHandlers:function(){this._fileButtonsClickHandler=qq.FileButtonsClickHandler&&this._bindFileButtonsClickEvent(),this._focusinEventSupported=!qq.firefox(),this._isEditFilenameEnabled()&&(this._filenameClickHandler=this._bindFilenameClickEvent(),this._filenameInputFocusInHandler=this._bindFilenameInputFocusInEvent(),this._filenameInputFocusHandler=this._bindFilenameInputFocusEvent())},_setupDragAndDrop:function(){var e=this,t=this._options.dragAndDrop.extraDropzones,n=this._templating,i=n.getDropZone();return i&&t.push(i),new qq.DragAndDrop({dropZoneElements:t,allowMultipleItems:this._options.multiple,classes:{dropActive:this._options.classes.dropActive},callbacks:{processingDroppedFiles:function(){n.showDropProcessing()},processingDroppedFilesComplete:function(t,i){n.hideDropProcessing(),qq.each(t,function(e,t){t.qqDropTarget=i}),t.length&&e.addFiles(t,null,null)},dropError:function(t,n){e._itemError(t,n)},dropLog:function(t,n){e.log(t,n)}}})},_bindFileButtonsClickEvent:function(){var e=this;return new qq.FileButtonsClickHandler({templating:this._templating,log:function(t,n){e.log(t,n)},onDeleteFile:function(t){e.deleteFile(t)},onCancel:function(t){e.cancel(t)},onRetry:function(t){e.retry(t)},onPause:function(t){e.pauseUpload(t)},onContinue:function(t){e.continueUpload(t)},onGetName:function(t){return e.getName(t)}})},_isEditFilenameEnabled:function(){return this._templating.isEditFilenamePossible()&&!this._options.autoUpload&&qq.FilenameClickHandler&&qq.FilenameInputFocusHandler&&qq.FilenameInputFocusHandler},_filenameEditHandler:function(){var e=this,t=this._templating;return{templating:t,log:function(t,n){e.log(t,n)},onGetUploadStatus:function(t){return e.getUploads({id:t}).status},onGetName:function(t){return e.getName(t)},onSetName:function(t,n){e.setName(t,n)},onEditingStatusChange:function(e,n){var i=qq(t.getEditInput(e)),o=qq(t.getFileContainer(e));n?(i.addClass("qq-editing"),t.hideFilename(e),t.hideEditIcon(e)):(i.removeClass("qq-editing"),t.showFilename(e),t.showEditIcon(e)),o.addClass("qq-temp").removeClass("qq-temp")}}},_onUploadStatusChange:function(e,t,n){this._parent.prototype._onUploadStatusChange.apply(this,arguments),this._isEditFilenameEnabled()&&this._templating.getFileContainer(e)&&n!==qq.status.SUBMITTED&&(this._templating.markFilenameEditable(e),this._templating.hideEditIcon(e)),t===qq.status.UPLOAD_RETRYING&&n===qq.status.UPLOADING?(this._templating.hideRetry(e),this._templating.setStatusText(e),qq(this._templating.getFileContainer(e)).removeClass(this._classes.retrying)):n===qq.status.UPLOAD_FAILED&&this._templating.hidePause(e)},_bindFilenameInputFocusInEvent:function(){var e=qq.extend({},this._filenameEditHandler());return new qq.FilenameInputFocusInHandler(e)},_bindFilenameInputFocusEvent:function(){var e=qq.extend({},this._filenameEditHandler());return new qq.FilenameInputFocusHandler(e)},_bindFilenameClickEvent:function(){var e=qq.extend({},this._filenameEditHandler());return new qq.FilenameClickHandler(e)},_storeForLater:function(e){this._parent.prototype._storeForLater.apply(this,arguments),this._templating.hideSpinner(e)},_onAllComplete:function(e,t){this._parent.prototype._onAllComplete.apply(this,arguments),this._templating.resetTotalProgress()},_onSubmit:function(e,t){var n=this.getFile(e);n&&n.qqPath&&this._options.dragAndDrop.reportDirectoryPaths&&this._paramsStore.addReadOnly(e,{qqpath:n.qqPath}),this._parent.prototype._onSubmit.apply(this,arguments),this._addToList(e,t)},_onSubmitted:function(e){this._isEditFilenameEnabled()&&(this._templating.markFilenameEditable(e),this._templating.showEditIcon(e),this._focusinEventSupported||this._filenameInputFocusHandler.addHandler(this._templating.getEditInput(e)))},_onProgress:function(e,t,n,i){this._parent.prototype._onProgress.apply(this,arguments),this._templating.updateProgress(e,n,i),0===i||100===Math.round(n/i*100)?(this._templating.hideCancel(e),this._templating.hidePause(e),this._templating.hideProgress(e),this._templating.setStatusText(e,this._options.text.waitingForResponse),this._displayFileSize(e)):this._displayFileSize(e,n,i)},_onTotalProgress:function(e,t){this._parent.prototype._onTotalProgress.apply(this,arguments),this._templating.updateTotalProgress(e,t)},_onComplete:function(e,t,n,i){function o(t){s&&(a.setStatusText(e),qq(s).removeClass(A._classes.retrying),a.hideProgress(e),A.getUploads({id:e}).status!==qq.status.UPLOAD_FAILED&&a.hideCancel(e),a.hideSpinner(e),t.success?A._markFileAsSuccessful(e):(qq(s).addClass(A._classes.fail),a.showCancel(e),a.isRetryPossible()&&!A._preventRetries[e]&&(qq(s).addClass(A._classes.retryable),a.showRetry(e)),A._controlFailureTextDisplay(e,t)))}var r=this._parent.prototype._onComplete.apply(this,arguments),a=this._templating,s=a.getFileContainer(e),A=this;return r instanceof qq.Promise?r.done(function(e){o(e)}):o(n),r},_markFileAsSuccessful:function(e){var t=this._templating;this._isDeletePossible()&&t.showDeleteButton(e),qq(t.getFileContainer(e)).addClass(this._classes.success),this._maybeUpdateThumbnail(e)},_onUploadPrep:function(e){this._parent.prototype._onUploadPrep.apply(this,arguments),this._templating.showSpinner(e)},_onUpload:function(e,t){var n=this._parent.prototype._onUpload.apply(this,arguments);return this._templating.showSpinner(e),n},_onUploadChunk:function(e,t){this._parent.prototype._onUploadChunk.apply(this,arguments),t.partIndex>0&&this._handler.isResumable(e)&&this._templating.allowPause(e)},_onCancel:function(e,t){this._parent.prototype._onCancel.apply(this,arguments),this._removeFileItem(e),0===this._getNotFinished()&&this._templating.resetTotalProgress()},_onBeforeAutoRetry:function(e){var t,n,i;this._parent.prototype._onBeforeAutoRetry.apply(this,arguments),this._showCancelLink(e),this._options.retry.showAutoRetryNote&&(t=this._autoRetries[e],n=this._options.retry.maxAutoAttempts,i=this._options.retry.autoRetryNote.replace(/\{retryNum\}/g,t),i=i.replace(/\{maxAuto\}/g,n),this._templating.setStatusText(e,i),qq(this._templating.getFileContainer(e)).addClass(this._classes.retrying))},_onBeforeManualRetry:function(e){return this._parent.prototype._onBeforeManualRetry.apply(this,arguments)?(this._templating.resetProgress(e),qq(this._templating.getFileContainer(e)).removeClass(this._classes.fail),this._templating.setStatusText(e),this._templating.showSpinner(e),this._showCancelLink(e),!0):(qq(this._templating.getFileContainer(e)).addClass(this._classes.retryable),this._templating.showRetry(e),!1)},_onSubmitDelete:function(e){var t=qq.bind(this._onSubmitDeleteSuccess,this);this._parent.prototype._onSubmitDelete.call(this,e,t)},_onSubmitDeleteSuccess:function(e,t,n){this._options.deleteFile.forceConfirm?this._showDeleteConfirm.apply(this,arguments):this._sendDeleteRequest.apply(this,arguments)},_onDeleteComplete:function(e,t,n){this._parent.prototype._onDeleteComplete.apply(this,arguments),this._templating.hideSpinner(e),n?(this._templating.setStatusText(e,this._options.deleteFile.deletingFailedText),this._templating.showDeleteButton(e)):this._removeFileItem(e)},_sendDeleteRequest:function(e,t,n){this._templating.hideDeleteButton(e),this._templating.showSpinner(e),this._templating.setStatusText(e,this._options.deleteFile.deletingStatusText),this._deleteHandler.sendDelete.apply(this,arguments)},_showDeleteConfirm:function(e,t,n){var i,o=this.getName(e),r=this._options.deleteFile.confirmMessage.replace(/\{filename\}/g,o),a=(this.getUuid(e),arguments),s=this;i=this._options.showConfirm(r),qq.isGenericPromise(i)?i.then(function(){s._sendDeleteRequest.apply(s,a)}):!1!==i&&s._sendDeleteRequest.apply(s,a)},_addToList:function(e,t,n){var i,o,r=0,a=this._handler.isProxied(e)&&this._options.scaling.hideScaled;this._options.display.prependFiles&&(this._totalFilesInBatch>1&&this._filesInBatchAddedToUi>0&&(r=this._filesInBatchAddedToUi-1),i={index:r}),n||(this._options.disableCancelForFormUploads&&!qq.supportedFeatures.ajaxUploading&&this._templating.disableCancel(),this._options.multiple||(o=this.getUploads({id:e}),this._handledProxyGroup=this._handledProxyGroup||o.proxyGroupId,o.proxyGroupId===this._handledProxyGroup&&o.proxyGroupId||(this._handler.cancelAll(),this._clearList(),this._handledProxyGroup=null))),n?(this._templating.addFileToCache(e,this._options.formatFileName(t),i,a),this._templating.updateThumbnail(e,this._thumbnailUrls[e],!0,this._options.thumbnails.customResizer)):(this._templating.addFile(e,this._options.formatFileName(t),i,a),this._templating.generatePreview(e,this.getFile(e),this._options.thumbnails.customResizer)),this._filesInBatchAddedToUi+=1,(n||this._options.display.fileSizeOnSubmit&&qq.supportedFeatures.ajaxUploading)&&this._displayFileSize(e)},_clearList:function(){this._templating.clearFiles(),this.clearStoredFiles()},_displayFileSize:function(e,t,n){var i=this.getSize(e),o=this._formatSize(i);i>=0&&(void 0!==t&&void 0!==n&&(o=this._formatProgress(t,n)),this._templating.updateSize(e,o))},_formatProgress:function(e,t){function n(e,t){i=i.replace(e,t)}var i=this._options.text.formatProgress;return n("{percent}",Math.round(e/t*100)),n("{total_size}",this._formatSize(t)),i},_controlFailureTextDisplay:function(e,t){var n,i,o;n=this._options.failedUploadTextDisplay.mode,i=this._options.failedUploadTextDisplay.responseProperty,"custom"===n?(o=t[i],o||(o=this._options.text.failUpload),this._templating.setStatusText(e,o),this._options.failedUploadTextDisplay.enableTooltip&&this._showTooltip(e,o)):"default"===n?this._templating.setStatusText(e,this._options.text.failUpload):"none"!==n&&this.log("failedUploadTextDisplay.mode value of '"+n+"' is not valid","warn")},_showTooltip:function(e,t){this._templating.getFileContainer(e).title=t},_showCancelLink:function(e){this._options.disableCancelForFormUploads&&!qq.supportedFeatures.ajaxUploading||this._templating.showCancel(e)},_itemError:function(e,t,n){var i=this._parent.prototype._itemError.apply(this,arguments);this._options.showMessage(i)},_batchError:function(e){this._parent.prototype._batchError.apply(this,arguments),this._options.showMessage(e)},_setupPastePrompt:function(){var e=this;this._options.callbacks.onPasteReceived=function(){var t=e._options.paste.namePromptMessage,n=e._options.paste.defaultName;return e._options.showPrompt(t,n)}},_fileOrBlobRejected:function(e,t){this._totalFilesInBatch-=1,this._parent.prototype._fileOrBlobRejected.apply(this,arguments)},_prepareItemsForUpload:function(e,t,n){this._totalFilesInBatch=e.length,this._filesInBatchAddedToUi=0,this._parent.prototype._prepareItemsForUpload.apply(this,arguments)},_maybeUpdateThumbnail:function(e){var t=this._thumbnailUrls[e];this.getUploads({id:e}).status===qq.status.DELETED||!t&&!this._options.thumbnails.placeholders.waitUntilResponse&&qq.supportedFeatures.imagePreviews||this._templating.updateThumbnail(e,t,this._options.thumbnails.customResizer)},_addCannedFile:function(e){var t=this._parent.prototype._addCannedFile.apply(this,arguments);return this._addToList(t,this.getName(t),!0),this._templating.hideSpinner(t),this._templating.hideCancel(t),this._markFileAsSuccessful(t),t},_setSize:function(e,t){this._parent.prototype._setSize.apply(this,arguments),this._templating.updateSize(e,this._formatSize(t))},_sessionRequestComplete:function(){this._templating.addCacheToDom(),this._parent.prototype._sessionRequestComplete.apply(this,arguments)}}}(),qq.FineUploader=function(e,t){"use strict";var n=this;this._parent=t?qq[t].FineUploaderBasic:qq.FineUploaderBasic,this._parent.apply(this,arguments),qq.extend(this._options,{element:null,button:null,listElement:null,dragAndDrop:{extraDropzones:[],reportDirectoryPaths:!1},text:{formatProgress:"{percent}% of {total_size}",failUpload:"Upload failed",waitingForResponse:"Processing...",paused:"Paused"},template:"qq-template",classes:{retrying:"qq-upload-retrying",retryable:"qq-upload-retryable",success:"qq-upload-success",fail:"qq-upload-fail",editable:"qq-editable",hide:"qq-hide",dropActive:"qq-upload-drop-area-active"},failedUploadTextDisplay:{mode:"default",responseProperty:"error",enableTooltip:!0},messages:{tooManyFilesError:"You may only drop one file",unsupportedBrowser:"Unrecoverable error - this browser does not permit file uploading of any kind."},retry:{showAutoRetryNote:!0,autoRetryNote:"Retrying {retryNum}/{maxAuto}..."},deleteFile:{forceConfirm:!1,confirmMessage:"Are you sure you want to delete {filename}?",deletingStatusText:"Deleting...",deletingFailedText:"Delete failed"},display:{fileSizeOnSubmit:!1,prependFiles:!1},paste:{promptForName:!1,namePromptMessage:"Please name this image"},thumbnails:{customResizer:null,maxCount:0,placeholders:{waitUntilResponse:!1,notAvailablePath:null,waitingPath:null},timeBetweenThumbs:750},scaling:{hideScaled:!1},showMessage:function(e){if(n._templating.hasDialog("alert"))return n._templating.showDialog("alert",e);setTimeout(function(){window.alert(e)},0)},showConfirm:function(e){return n._templating.hasDialog("confirm")?n._templating.showDialog("confirm",e):window.confirm(e)},showPrompt:function(e,t){return n._templating.hasDialog("prompt")?n._templating.showDialog("prompt",e,t):window.prompt(e,t)}},!0),qq.extend(this._options,e,!0),this._templating=new qq.Templating({log:qq.bind(this.log,this),templateIdOrEl:this._options.template,containerEl:this._options.element,fileContainerEl:this._options.listElement,button:this._options.button,imageGenerator:this._imageGenerator,classes:{hide:this._options.classes.hide,editable:this._options.classes.editable},limits:{maxThumbs:this._options.thumbnails.maxCount,timeBetweenThumbs:this._options.thumbnails.timeBetweenThumbs},placeholders:{waitUntilUpdate:this._options.thumbnails.placeholders.waitUntilResponse,thumbnailNotAvailable:this._options.thumbnails.placeholders.notAvailablePath,waitingForThumbnail:this._options.thumbnails.placeholders.waitingPath},text:this._options.text}),this._options.workarounds.ios8SafariUploads&&qq.ios800()&&qq.iosSafari()?this._templating.renderFailure(this._options.messages.unsupportedBrowserIos8Safari):!qq.supportedFeatures.uploading||this._options.cors.expected&&!qq.supportedFeatures.uploadCors?this._templating.renderFailure(this._options.messages.unsupportedBrowser):(this._wrapCallbacks(),this._templating.render(),this._classes=this._options.classes,!this._options.button&&this._templating.getButton()&&(this._defaultButtonId=this._createUploadButton({element:this._templating.getButton(),title:this._options.text.fileInputTitle}).getButtonId()),this._setupClickAndEditEventHandlers(),qq.DragAndDrop&&qq.supportedFeatures.fileDrop&&(this._dnd=this._setupDragAndDrop()),this._options.paste.targetElement&&this._options.paste.promptForName&&(qq.PasteSupport?this._setupPastePrompt():this.log("Paste support module not found.","error")),this._totalFilesInBatch=0,this._filesInBatchAddedToUi=0)},qq.extend(qq.FineUploader.prototype,qq.basePublicApi),qq.extend(qq.FineUploader.prototype,qq.basePrivateApi),qq.extend(qq.FineUploader.prototype,qq.uiPublicApi),qq.extend(qq.FineUploader.prototype,qq.uiPrivateApi),qq.Templating=function(e){"use strict";var t,n,i,o,r,a,s,A,l={content:document.createDocumentFragment(),map:{}},u=!1,d=0,c=!1,p=[],h=-1,f={log:null,limits:{maxThumbs:0,timeBetweenThumbs:750},templateIdOrEl:"qq-template",containerEl:null,fileContainerEl:null,button:null,imageGenerator:null,classes:{hide:"qq-hide",editable:"qq-editable"},placeholders:{waitUntilUpdate:!1,thumbnailNotAvailable:null,waitingForThumbnail:null},text:{paused:"Paused"}},g={button:"qq-upload-button-selector",alertDialog:"qq-alert-dialog-selector",dialogCancelButton:"qq-cancel-button-selector",confirmDialog:"qq-confirm-dialog-selector",dialogMessage:"qq-dialog-message-selector",dialogOkButton:"qq-ok-button-selector",promptDialog:"qq-prompt-dialog-selector",uploader:"qq-uploader-selector",drop:"qq-upload-drop-area-selector",list:"qq-upload-list-selector",progressBarContainer:"qq-progress-bar-container-selector",progressBar:"qq-progress-bar-selector",totalProgressBarContainer:"qq-total-progress-bar-container-selector",totalProgressBar:"qq-total-progress-bar-selector",file:"qq-upload-file-selector",spinner:"qq-upload-spinner-selector",size:"qq-upload-size-selector",cancel:"qq-upload-cancel-selector",pause:"qq-upload-pause-selector",continueButton:"qq-upload-continue-selector",deleteButton:"qq-upload-delete-selector",retry:"qq-upload-retry-selector",statusText:"qq-upload-status-text-selector",editFilenameInput:"qq-edit-filename-selector",editNameIcon:"qq-edit-filename-icon-selector",dropText:"qq-upload-drop-area-text-selector",dropProcessing:"qq-drop-processing-selector",dropProcessingSpinner:"qq-drop-processing-spinner-selector",thumbnail:"qq-thumbnail-selector"},m={},q=new qq.Promise,b=new qq.Promise,v=function(e){var t=new qq.Promise;return b.then(function(n){L(n,e),e.src?t.success():(e.src=n.src,e.onload=function(){e.onload=null,j(e),t.success()})},function(){P(e),t.success()}),t},y=function(e,n,i){var o=R(e);return t("Generating new thumbnail for "+e),n.qqThumbnailId=e,f.imageGenerator.generate(n,o,i).then(function(){d++,j(o),m[e].success()},function(){m[e].failure(),f.placeholders.waitUntilUpdate||Q(e,o)})},x=function(){if(p.length){c=!0;var e=p.shift();e.update?G(e):O(e)}else c=!1},w=function(e){return U(F(e),g.cancel)},_=function(e){return U(F(e),g.continueButton)},E=function(e){return U(r,g[e+"Dialog"])},C=function(e){return U(F(e),g.deleteButton)},I=function(){return U(r,g.dropProcessing)},S=function(e){return U(F(e),g.editNameIcon)},F=function(e){return l.map[e]||qq(a).getFirstByClass("qq-file-id-"+e)},B=function(e){return U(F(e),g.file)},D=function(e){return U(F(e),g.pause)},T=function(e){return null==e?U(r,g.totalProgressBarContainer)||U(r,g.totalProgressBar):U(F(e),g.progressBarContainer)||U(F(e),g.progressBar)},M=function(e){return U(F(e),g.retry)},k=function(e){return U(F(e),g.size)},N=function(e){return U(F(e),g.spinner)},U=function(e,t){return e&&qq(e).getFirstByClass(t)},R=function(e){return s&&U(F(e),g.thumbnail)},P=function(e){e&&qq(e).addClass(f.classes.hide)},L=function(e,t){var n=e.style.maxWidth,i=e.style.maxHeight;i&&n&&!t.style.maxWidth&&!t.style.maxHeight&&qq(t).css({maxWidth:n,maxHeight:i})},Q=function(e,t){var n=m[e]||(new qq.Promise).failure(),i=new qq.Promise;return q.then(function(e){n.then(function(){i.success()},function(){L(e,t),t.onload=function(){t.onload=null,i.success()},t.src=e.src,j(t)})}),i},z=function(e,t,n){var i=n,o=i.firstChild;t>0&&(o=qq(i).children()[t].nextSibling),i.insertBefore(e,o)},O=function(e){var t=e.id,n=e.optFileOrBlob,i=n&&n.qqThumbnailId,o=R(t),r={customResizeFunction:e.customResizeFunction,maxSize:h,orient:!0,scale:!0};qq.supportedFeatures.imagePreviews?o?f.limits.maxThumbs&&f.limits.maxThumbs<=d?(Q(t,o),x()):v(o).done(function(){m[t]=new qq.Promise,m[t].done(function(){setTimeout(x,f.limits.timeBetweenThumbs)}),null!=i?Y(t,i):y(t,n,r)}):x():o&&(v(o),x())},G=function(e){var t=e.id,n=e.thumbnailUrl,i=e.showWaitingImg,o=R(t),r={customResizeFunction:e.customResizeFunction,scale:A,maxSize:h};if(o)if(n){if(!(f.limits.maxThumbs&&f.limits.maxThumbs<=d))return i&&v(o),f.imageGenerator.generate(n,o,r).then(function(){j(o),d++,setTimeout(x,f.limits.timeBetweenThumbs)},function(){Q(t,o),setTimeout(x,f.limits.timeBetweenThumbs)});Q(t,o),x()}else Q(t,o),x()},H=function(e,t){var n=T(e),i=null==e?g.totalProgressBar:g.progressBar;n&&!qq(n).hasClass(i)&&(n=qq(n).getFirstByClass(i)),n&&(qq(n).css({width:t+"%"}),n.setAttribute("aria-valuenow",t))},j=function(e){e&&qq(e).removeClass(f.classes.hide)},Y=function(e,n){var i=R(e),o=R(n);t(qq.format("ID {} is the same file as ID {}.  Will use generated thumbnail from ID {} instead.",e,n,n)),m[n].then(function(){d++,m[e].success(),t(qq.format("Now using previously generated thumbnail created for ID {} on ID {}.",n,e)),i.src=o.src,j(i)},function(){m[e].failure(),f.placeholders.waitUntilUpdate||Q(e,i)})};qq.extend(f,e),t=f.log,qq.supportedFeatures.imagePreviews||(f.limits.timeBetweenThumbs=0,f.limits.maxThumbs=0),r=f.containerEl,s=void 0!==f.imageGenerator,o=function(){var e,o,r,a,l,u,d,c,p,m,q;if(t("Parsing template"),null==f.templateIdOrEl)throw new Error("You MUST specify either a template element or ID!");if(qq.isString(f.templateIdOrEl)){if(null===(e=document.getElementById(f.templateIdOrEl)))throw new Error(qq.format("Cannot find template script at ID '{}'!",f.templateIdOrEl));o=e.innerHTML}else{if(void 0===f.templateIdOrEl.innerHTML)throw new Error("You have specified an invalid value for the template option!  It must be an ID or an Element.");o=f.templateIdOrEl.innerHTML}if(o=qq.trimStr(o),a=document.createElement("div"),a.appendChild(qq.toElement(o)),q=qq(a).getFirstByClass(g.uploader),f.button&&(u=qq(a).getFirstByClass(g.button))&&qq(u).remove(),qq.DragAndDrop&&qq.supportedFeatures.fileDrop||(p=qq(a).getFirstByClass(g.dropProcessing))&&qq(p).remove(),d=qq(a).getFirstByClass(g.drop),d&&!qq.DragAndDrop&&(t("DnD module unavailable.","info"),qq(d).remove()),qq.supportedFeatures.fileDrop?qq(q).hasAttribute("qq-drop-area-text")&&d&&(m=qq(d).getFirstByClass(g.dropText))&&qq(m).remove():(q.removeAttribute("qq-drop-area-text"),d&&qq(d).hasAttribute("qq-hide-dropzone")&&qq(d).css({display:"none"})),c=qq(a).getFirstByClass(g.thumbnail),s?c&&(h=parseInt(c.getAttribute("qq-max-size")),h=h>0?h:null,A=qq(c).hasAttribute("qq-server-scale")):c&&qq(c).remove(),s=s&&c,n=qq(a).getByClass(g.editFilenameInput).length>0,i=qq(a).getByClass(g.retry).length>0,null==(r=qq(a).getFirstByClass(g.list)))throw new Error("Could not find the file list container in the template!");return l=r.children[0].cloneNode(!0),r.innerHTML="",a.getElementsByTagName("DIALOG").length&&document.createElement("dialog"),t("Template parsing complete"),{template:a,fileTemplate:l}}(),function(){var e=f.placeholders.thumbnailNotAvailable,n=f.placeholders.waitingForThumbnail,i={maxSize:h,scale:A};s&&(e?f.imageGenerator.generate(e,new Image,i).then(function(e){q.success(e)},function(){q.failure(),t("Problem loading 'not available' placeholder image at "+e,"error")}):q.failure(),n?f.imageGenerator.generate(n,new Image,i).then(function(e){b.success(e)},function(){b.failure(),t("Problem loading 'waiting for thumbnail' placeholder image at "+n,"error")}):b.failure())}(),qq.extend(this,{render:function(){t("Rendering template in DOM."),d=0,r.appendChild(o.template.cloneNode(!0)),P(I()),this.hideTotalProgress(),a=f.fileContainerEl||U(r,g.list),t("Template rendering complete")},renderFailure:function(e){var t=qq.toElement(e);r.innerHTML="",r.appendChild(t)},reset:function(){r.innerHTML="",this.render()},clearFiles:function(){a.innerHTML=""},disableCancel:function(){u=!0},addFile:function(e,t,n,i,s){var A,d=o.fileTemplate.cloneNode(!0),c=U(d,g.file),p=U(r,g.uploader),h=s?l.content:a;s&&(l.map[e]=d),qq(d).addClass("qq-file-id-"+e),p.removeAttribute("qq-drop-area-text"),c&&(qq(c).setText(t),c.setAttribute("title",t)),d.setAttribute("qq-file-id",e),n?z(d,n.index,h):h.appendChild(d),i?(d.style.display="none",qq(d).addClass("qq-hidden-forever")):(P(T(e)),P(k(e)),P(C(e)),P(M(e)),P(D(e)),P(_(e)),u&&this.hideCancel(e),(A=R(e))&&!A.src&&b.then(function(e){A.src=e.src,e.style.maxHeight&&e.style.maxWidth&&qq(A).css({maxHeight:e.style.maxHeight,maxWidth:e.style.maxWidth}),j(A)}))},addFileToCache:function(e,t,n,i){this.addFile(e,t,n,i,!0)},addCacheToDom:function(){a.appendChild(l.content),l.content=document.createDocumentFragment(),l.map={}},removeFile:function(e){qq(F(e)).remove()},getFileId:function(e){var t=e;if(t){for(;null==t.getAttribute("qq-file-id");)t=t.parentNode;return parseInt(t.getAttribute("qq-file-id"))}},getFileList:function(){return a},markFilenameEditable:function(e){var t=B(e);t&&qq(t).addClass(f.classes.editable)},updateFilename:function(e,t){var n=B(e);n&&(qq(n).setText(t),n.setAttribute("title",t))},hideFilename:function(e){P(B(e))},showFilename:function(e){j(B(e))},isFileName:function(e){return qq(e).hasClass(g.file)},getButton:function(){return f.button||U(r,g.button)},hideDropProcessing:function(){P(I())},showDropProcessing:function(){j(I())},getDropZone:function(){return U(r,g.drop)},isEditFilenamePossible:function(){return n},hideRetry:function(e){P(M(e))},isRetryPossible:function(){return i},showRetry:function(e){j(M(e))},getFileContainer:function(e){return F(e)},showEditIcon:function(e){var t=S(e);t&&qq(t).addClass(f.classes.editable)},isHiddenForever:function(e){return qq(F(e)).hasClass("qq-hidden-forever")},hideEditIcon:function(e){var t=S(e);t&&qq(t).removeClass(f.classes.editable)},isEditIcon:function(e){return qq(e).hasClass(g.editNameIcon,!0)},getEditInput:function(e){return U(F(e),g.editFilenameInput)},isEditInput:function(e){return qq(e).hasClass(g.editFilenameInput,!0)},updateProgress:function(e,t,n){var i,o=T(e);o&&n>0&&(i=Math.round(t/n*100),100===i?P(o):j(o),H(e,i))},updateTotalProgress:function(e,t){this.updateProgress(null,e,t)},hideProgress:function(e){var t=T(e);t&&P(t)},hideTotalProgress:function(){this.hideProgress()},resetProgress:function(e){H(e,0),this.hideTotalProgress(e)},resetTotalProgress:function(){this.resetProgress()},showCancel:function(e){if(!u){var t=w(e);t&&qq(t).removeClass(f.classes.hide)}},hideCancel:function(e){P(w(e))},isCancel:function(e){return qq(e).hasClass(g.cancel,!0)},allowPause:function(e){j(D(e)),P(_(e))},uploadPaused:function(e){this.setStatusText(e,f.text.paused),this.allowContinueButton(e),P(N(e))},hidePause:function(e){P(D(e))},isPause:function(e){return qq(e).hasClass(g.pause,!0)},isContinueButton:function(e){return qq(e).hasClass(g.continueButton,!0)},allowContinueButton:function(e){j(_(e)),P(D(e))},uploadContinued:function(e){this.setStatusText(e,""),this.allowPause(e),j(N(e))},showDeleteButton:function(e){j(C(e))},hideDeleteButton:function(e){P(C(e))},isDeleteButton:function(e){return qq(e).hasClass(g.deleteButton,!0)},isRetry:function(e){return qq(e).hasClass(g.retry,!0)},updateSize:function(e,t){var n=k(e);n&&(j(n),qq(n).setText(t))},setStatusText:function(e,t){var n=U(F(e),g.statusText);n&&(null==t?qq(n).clearText():qq(n).setText(t))},hideSpinner:function(e){qq(F(e)).removeClass("qq-in-progress"),P(N(e))},showSpinner:function(e){qq(F(e)).addClass("qq-in-progress"),j(N(e))},generatePreview:function(e,t,n){this.isHiddenForever(e)||(p.push({id:e,customResizeFunction:n,optFileOrBlob:t}),!c&&x())},updateThumbnail:function(e,t,n,i){this.isHiddenForever(e)||(p.push({customResizeFunction:i,update:!0,id:e,thumbnailUrl:t,showWaitingImg:n}),!c&&x())},hasDialog:function(e){return qq.supportedFeatures.dialogElement&&!!E(e)},showDialog:function(e,t,n){var i=E(e),o=U(i,g.dialogMessage),r=i.getElementsByTagName("INPUT")[0],a=U(i,g.dialogCancelButton),s=U(i,g.dialogOkButton),A=new qq.Promise,l=function(){a.removeEventListener("click",u),s&&s.removeEventListener("click",d),A.failure()},u=function(){a.removeEventListener("click",u),i.close()},d=function(){i.removeEventListener("close",l),s.removeEventListener("click",d),i.close(),A.success(r&&r.value)};return i.addEventListener("close",l),a.addEventListener("click",u),s&&s.addEventListener("click",d),r&&(r.value=n),o.textContent=t,i.showModal(),A}})},qq.UiEventHandler=function(e,t){"use strict";function n(e){i.attach(e,o.eventType,function(e){e=e||window.event;var t=e.target||e.srcElement;o.onHandled(t,e)})}var i=new qq.DisposeSupport,o={eventType:"click",attachTo:null,onHandled:function(e,t){}};qq.extend(this,{addHandler:function(e){n(e)},dispose:function(){i.dispose()}}),qq.extend(t,{getFileIdFromItem:function(e){return e.qqFileId},getDisposeSupport:function(){return i}}),qq.extend(o,e),o.attachTo&&n(o.attachTo)},qq.FileButtonsClickHandler=function(e){"use strict";function t(e,t){qq.each(o,function(n,o){var r,a=n.charAt(0).toUpperCase()+n.slice(1);if(i.templating["is"+a](e))return r=i.templating.getFileId(e),qq.preventDefault(t),i.log(qq.format("Detected valid file button click event on file '{}', ID: {}.",i.onGetName(r),r)),o(r),!1})}var n={},i={templating:null,log:function(e,t){},onDeleteFile:function(e){},onCancel:function(e){},onRetry:function(e){},onPause:function(e){},onContinue:function(e){},onGetName:function(e){}},o={cancel:function(e){i.onCancel(e)},retry:function(e){i.onRetry(e)},deleteButton:function(e){i.onDeleteFile(e)},pause:function(e){i.onPause(e)},continueButton:function(e){i.onContinue(e)}};qq.extend(i,e),i.eventType="click",i.onHandled=t,i.attachTo=i.templating.getFileList(),qq.extend(this,new qq.UiEventHandler(i,n))},qq.FilenameClickHandler=function(e){"use strict";function t(e,t){if(i.templating.isFileName(e)||i.templating.isEditIcon(e)){var o=i.templating.getFileId(e);i.onGetUploadStatus(o)===qq.status.SUBMITTED&&(i.log(qq.format("Detected valid filename click event on file '{}', ID: {}.",i.onGetName(o),o)),qq.preventDefault(t),n.handleFilenameEdit(o,e,!0))}}var n={},i={templating:null,log:function(e,t){},classes:{file:"qq-upload-file",editNameIcon:"qq-edit-filename-icon"},onGetUploadStatus:function(e){},onGetName:function(e){}};qq.extend(i,e),i.eventType="click",i.onHandled=t,qq.extend(this,new qq.FilenameEditHandler(i,n))},qq.FilenameInputFocusInHandler=function(e,t){"use strict";function n(e,n){if(i.templating.isEditInput(e)){var o=i.templating.getFileId(e);i.onGetUploadStatus(o)===qq.status.SUBMITTED&&(i.log(qq.format("Detected valid filename input focus event on file '{}', ID: {}.",i.onGetName(o),o)),t.handleFilenameEdit(o,e))}}var i={templating:null,onGetUploadStatus:function(e){},log:function(e,t){}};t||(t={}),i.eventType="focusin",i.onHandled=n,qq.extend(i,e),qq.extend(this,new qq.FilenameEditHandler(i,t))},qq.FilenameInputFocusHandler=function(e){"use strict";e.eventType="focus",e.attachTo=null,qq.extend(this,new qq.FilenameInputFocusInHandler(e,{}))},qq.FilenameEditHandler=function(e,t){"use strict";function n(e){var t=s.onGetName(e),n=t.lastIndexOf(".");return n>0&&(t=t.substr(0,n)),t}function i(e){var t=s.onGetName(e);return qq.getExtension(t)}function o(e,t){var n,o=e.value;void 0!==o&&qq.trimStr(o).length>0&&(n=i(t),void 0!==n&&(o=o+"."+n),s.onSetName(t,o)),s.onEditingStatusChange(t,!1)}function r(e,n){t.getDisposeSupport().attach(e,"blur",function(){o(e,n)})}function a(e,n){t.getDisposeSupport().attach(e,"keyup",function(t){13===(t.keyCode||t.which)&&o(e,n)})}var s={templating:null,log:function(e,t){},onGetUploadStatus:function(e){},onGetName:function(e){},onSetName:function(e,t){},onEditingStatusChange:function(e,t){}};qq.extend(s,e),s.attachTo=s.templating.getFileList(),qq.extend(this,new qq.UiEventHandler(s,t)),qq.extend(t,{handleFilenameEdit:function(e,t,i){var o=s.templating.getEditInput(e);s.onEditingStatusChange(e,!0),o.value=n(e),i&&o.focus(),r(o,e),a(o,e)}})}}(window)},function(e,t,n){var i=n(12);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(1)("49ae38be",i,!0,{})},function(e,t,n){var i=n(13);t=e.exports=n(0)(!1),t.push([e.i,'.qq-gallery .qq-btn{float:right;border:none;padding:0;margin:0;box-shadow:none}.qq-gallery .qq-upload-button{display:inline;width:105px;padding:7px 10px;float:left;text-align:center;background:#00abc7;color:#fff;border-radius:2px;border:1px solid #37b7cc;box-shadow:inset 0 1px 1px hsla(0,0%,100%,.37),inset 1px 0 1px hsla(0,0%,100%,.07),0 1px 0 rgba(0,0,0,.36),inset 0 -2px 12px rgba(0,0,0,.08)}.qq-gallery .qq-upload-button-hover{background:#33b6cc}.qq-gallery .qq-upload-button-focus{outline:1px dotted #000}.qq-gallery.qq-uploader{position:relative;min-height:200px;max-height:490px;overflow-y:hidden;width:inherit;border-radius:6px;border:1px dashed #ccc;background-color:#fafafa;padding:20px}.qq-gallery.qq-uploader:before{content:attr(qq-drop-area-text) " ";position:absolute;font-size:200%;left:0;width:100%;text-align:center;top:45%;opacity:.25}.qq-gallery .qq-upload-drop-area,.qq-upload-extra-drop-area{position:absolute;top:0;left:0;width:100%;height:100%;min-height:30px;z-index:2;background:#f9f9f9;border-radius:4px;text-align:center}.qq-gallery .qq-upload-drop-area span{display:block;position:absolute;top:50%;width:100%;margin-top:-8px;font-size:16px}.qq-gallery .qq-upload-extra-drop-area{position:relative;margin-top:50px;font-size:16px;padding-top:30px;height:20px;min-height:40px}.qq-gallery .qq-upload-drop-area-active{background:#fdfdfd;border-radius:4px}.qq-gallery .qq-upload-list{margin:0;padding:10px 0 0;list-style:none;max-height:450px;overflow-y:auto;clear:both;box-shadow:none}.qq-gallery .qq-upload-list li{display:inline-block;position:relative;max-width:120px;margin:0 25px 25px 0;padding:0;line-height:16px;font-size:13px;color:#424242;background-color:#fff;border-radius:2px;box-shadow:0 1px 1px 0 rgba(0,0,0,.22);vertical-align:top;height:186px}.qq-gallery .qq-upload-continue,.qq-gallery .qq-upload-delete,.qq-gallery .qq-upload-failed-text,.qq-gallery .qq-upload-pause,.qq-gallery .qq-upload-retry,.qq-gallery .qq-upload-size,.qq-gallery .qq-upload-spinner{display:inline}.qq-gallery .qq-upload-continue:hover,.qq-gallery .qq-upload-delete:hover,.qq-gallery .qq-upload-pause:hover,.qq-gallery .qq-upload-retry:hover{background-color:transparent}.qq-gallery .qq-upload-cancel,.qq-gallery .qq-upload-continue,.qq-gallery .qq-upload-delete,.qq-gallery .qq-upload-pause{cursor:pointer}.qq-gallery .qq-upload-continue,.qq-gallery .qq-upload-delete,.qq-gallery .qq-upload-pause{border:none;background:0 0;color:#00a0ba;font-size:12px;padding:0}.qq-gallery .qq-upload-status-text{color:#333;font-size:12px;padding-left:3px;padding-top:2px;width:inherit;display:none;width:108px}.qq-gallery .qq-upload-fail .qq-upload-status-text{text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;display:block}.qq-gallery .qq-upload-retrying .qq-upload-status-text{display:inline-block}.qq-gallery .qq-upload-retrying .qq-progress-bar-container{display:none}.qq-gallery .qq-upload-cancel{background-color:#525252;color:#f7f7f7;font-weight:700;font-family:Arial,Helvetica,sans-serif;border-radius:12px;border:none;height:22px;width:22px;padding:4px;position:absolute;right:-5px;top:-6px;margin:0;line-height:17px}.qq-gallery .qq-upload-cancel:hover{background-color:#525252}.qq-gallery .qq-upload-retry{cursor:pointer;position:absolute;top:30px;left:50%;margin-left:-31px;box-shadow:inset 0 1px 1px hsla(0,0%,100%,.37),inset 1px 0 1px hsla(0,0%,100%,.07),0 4px 4px rgba(0,0,0,.5),inset 0 -2px 12px rgba(0,0,0,.08);padding:3px 4px;border:1px solid #d2ddc7;border-radius:2px;color:inherit;background-color:#ebf6e0;z-index:1}.qq-gallery .qq-upload-retry:hover{background-color:#f7ffec}.qq-gallery .qq-file-info{padding:10px 6px 4px;margin-top:-3px;border-radius:0 0 2px 2px;text-align:left;overflow:hidden}.qq-gallery .qq-file-info .qq-file-name{position:relative}.qq-gallery .qq-upload-file{display:block;margin-right:0;margin-bottom:3px;width:auto;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden}.qq-gallery .qq-upload-spinner{display:inline-block;background:url('+i(n(14))+");position:absolute;left:50%;margin-left:-7px;top:53px;width:15px;height:15px;vertical-align:text-bottom}.qq-gallery .qq-drop-processing{display:block}.qq-gallery .qq-drop-processing-spinner{display:inline-block;background:url("+i(n(15))+");width:24px;height:24px;vertical-align:text-bottom}.qq-gallery .qq-upload-failed-text{display:none;font-style:italic;font-weight:700}.qq-gallery .qq-upload-failed-icon{display:none;width:15px;height:15px;vertical-align:text-bottom}.qq-gallery .qq-upload-fail .qq-upload-failed-text,.qq-gallery .qq-upload-retrying .qq-upload-failed-text{display:inline}.qq-gallery .qq-upload-list li.qq-upload-success{background-color:#f2f7ed}.qq-gallery .qq-upload-list li.qq-upload-fail{background-color:#f5eded;box-shadow:0 0 1px 0 red;border:0}.qq-gallery .qq-progress-bar{display:block;background:#00abc7;width:0;height:15px;border-radius:6px;margin-bottom:3px}.qq-gallery .qq-total-progress-bar{height:25px;border-radius:9px}.qq-gallery .qq-total-progress-bar-container{margin-left:9px;display:inline;float:right;width:500px}.qq-gallery .qq-upload-size{float:left;font-size:11px;color:#929292;margin-bottom:3px;margin-right:0;display:inline-block}.qq-gallery INPUT.qq-edit-filename{position:absolute;opacity:0;z-index:-1}.qq-gallery .qq-upload-file.qq-editable{cursor:pointer;margin-right:20px}.qq-gallery .qq-edit-filename-icon.qq-editable{display:inline-block;cursor:pointer;position:absolute;right:0;top:0}.qq-gallery INPUT.qq-edit-filename.qq-editing{position:static;height:28px;width:90px;width:-moz-available;padding:0 8px;margin-bottom:3px;border:1px solid #ccc;border-radius:2px;font-size:13px;opacity:1}.qq-gallery .qq-edit-filename-icon{display:none;background:url("+i(n(16))+");width:15px;height:15px;vertical-align:text-bottom}.qq-gallery .qq-delete-icon{background:url("+i(n(17))+")}.qq-gallery .qq-delete-icon,.qq-gallery .qq-retry-icon{width:15px;height:15px;vertical-align:sub;display:inline-block}.qq-gallery .qq-retry-icon{background:url("+i(n(18))+");float:none}.qq-gallery .qq-continue-icon{background:url("+i(n(19))+")}.qq-gallery .qq-continue-icon,.qq-gallery .qq-pause-icon{width:15px;height:15px;vertical-align:sub;display:inline-block}.qq-gallery .qq-pause-icon{background:url("+i(n(20))+")}.qq-gallery .qq-hide{display:none}.qq-gallery .qq-in-progress .qq-thumbnail-wrapper{opacity:.5}.qq-gallery .qq-thumbnail-wrapper{overflow:hidden;position:relative;height:120px;width:120px}.qq-gallery .qq-thumbnail-selector{border-radius:2px 2px 0 0;bottom:0;top:0;margin:auto;display:block}:root *>.qq-gallery .qq-thumbnail-selector{position:relative;top:50%;transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%)}.qq-gallery.qq-uploader DIALOG{display:none}.qq-gallery.qq-uploader DIALOG[open]{display:block}.qq-gallery.qq-uploader DIALOG .qq-dialog-buttons{text-align:center;padding-top:10px}.qq-gallery.qq-uploader DIALOG .qq-dialog-buttons BUTTON{margin-left:5px;margin-right:5px}.qq-gallery.qq-uploader DIALOG .qq-dialog-message-selector{padding-bottom:10px}.qq-gallery .qq-uploader DIALOG::backdrop{background-color:rgba(0,0,0,.7)}",""])},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t){e.exports="data:image/gif;base64,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"},function(e,t){e.exports="data:image/gif;base64,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"},function(e,t){e.exports="data:image/gif;base64,R0lGODlhDwAPALMPAHNzc7+/v2ZmZuXl5aWlpU1NTYCAgMzMzJmZmbKysllZWUBAQPLy8tnZ2TMzM////yH5BAEAAA8ALAAAAAAPAA8AAARD8MlJm0g0z+Ic1lITNEv3ZaSXAlpqNgCDll0XtHStyFXe7RpA7cejBBgKXXFy8CAdQA3CxDAsKYLaDSRZAAgDrpgbAQA7"},function(e,t){e.exports="data:image/gif;base64,R0lGODlhDwAPALMMAE1NTY2NjdnZ2b+/v/Ly8llZWaWlpXNzc5mZmczMzGZmZjMzM////wAAAAAAAAAAACH5BAEAAAwALAAAAAAPAA8AAARMkMlpEJoYqa2WL9zFHF5pesCUrGybYAEnbwHWAWiu2EvSMQtFIsjzLYBC4qRjRA53y94v+CxOk1AJ81qNDjoEqlJ7MmUZAot6/WJEAAA7"},function(e,t){e.exports="data:image/gif;base64,R0lGODlhDwAPALMOAGZmZZWVlNvb26CgoFpaWcTEw4mJiefn505OTX19fdDQz/Pz83FxcUJCQf///wAAACH5BAEAAA4ALAAAAAAPAA8AAARa0Mmp6jxTLtN6N0aQCUiDJEPiAdNSJgvlYc7QJJmTMLwiEQ1aLrNosIYSQGOhaDCQEkbD1yBAHVIh9GCSCHgMXEYlchQ7hZYKEUt6GAOpSZAJhEoeQ7tFseQiADs="},function(e,t){e.exports="data:image/gif;base64,R0lGODlhDwAPAMQQAOfn55WVlImJibi4t6ysrMTEw9vb22ZmZX19faCgoFpaWfPz805OTdDQz3FxcUJCQf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABAALAAAAAAPAA8AAAVaICSORtMsIjCOhPK8jzMw6+K8h4C4bzMiD4VvxAuIGg+GalRwOI0QwYOwqo4OD5S1+tpab0uvSJrwFkaApMFKeEAhgeRgtEi8ziNp0Ml4zasDWDAIa14LJlYhADs="},function(e,t){e.exports="data:image/gif;base64,R0lGODlhDwAPALMIAOXl5dnZ2b+/v0BAQGZmZpmZmczMzDMzM////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAgALAAAAAAPAA8AAAQ7EMlJ6xznCBTyAFV2FIghGmFGmhlKieuZjqX8qnU7x/pNswfXBJYL7opCCRGYRCxtE4J0E5ASQJbsJAIAOw=="},function(e,t,n){/*!

Holder - client side image placeholders
Version 2.9.4+cabil
© 2016 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  MIT

*/
!function(e){if(e.document){var t=e.document;t.querySelectorAll||(t.querySelectorAll=function(n){var i,o=t.createElement("style"),r=[];for(t.documentElement.firstChild.appendChild(o),t._qsa=[],o.styleSheet.cssText=n+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",e.scrollBy(0,0),o.parentNode.removeChild(o);t._qsa.length;)i=t._qsa.shift(),i.style.removeAttribute("x-qsa"),r.push(i);return t._qsa=null,r}),t.querySelector||(t.querySelector=function(e){var n=t.querySelectorAll(e);return n.length?n[0]:null}),t.getElementsByClassName||(t.getElementsByClassName=function(e){return e=String(e).replace(/^|\s+/g,"."),t.querySelectorAll(e)}),Object.keys||(Object.keys=function(e){if(e!==Object(e))throw TypeError("Object.keys called on non-object");var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(t);return n}),Array.prototype.forEach||(Array.prototype.forEach=function(e){if(void 0===this||null===this)throw TypeError();var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw TypeError();var i,o=arguments[1];for(i=0;i<n;i++)i in t&&e.call(o,t[i],i,t)}),function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.atob=e.atob||function(e){e=String(e);var n,i=0,o=[],r=0,a=0;if(e=e.replace(/\s/g,""),e.length%4==0&&(e=e.replace(/=+$/,"")),e.length%4==1)throw Error("InvalidCharacterError");if(/[^+\/0-9A-Za-z]/.test(e))throw Error("InvalidCharacterError");for(;i<e.length;)n=t.indexOf(e.charAt(i)),r=r<<6|n,a+=6,24===a&&(o.push(String.fromCharCode(r>>16&255)),o.push(String.fromCharCode(r>>8&255)),o.push(String.fromCharCode(255&r)),a=0,r=0),i+=1;return 12===a?(r>>=4,o.push(String.fromCharCode(255&r))):18===a&&(r>>=2,o.push(String.fromCharCode(r>>8&255)),o.push(String.fromCharCode(255&r))),o.join("")},e.btoa=e.btoa||function(e){e=String(e);var n,i,o,r,a,s,A,l=0,u=[];if(/[^\x00-\xFF]/.test(e))throw Error("InvalidCharacterError");for(;l<e.length;)n=e.charCodeAt(l++),i=e.charCodeAt(l++),o=e.charCodeAt(l++),r=n>>2,a=(3&n)<<4|i>>4,s=(15&i)<<2|o>>6,A=63&o,l===e.length+2?(s=64,A=64):l===e.length+1&&(A=64),u.push(t.charAt(r),t.charAt(a),t.charAt(s),t.charAt(A));return u.join("")}}(e),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(e){var t=this.__proto__||this.constructor.prototype;return e in this&&(!(e in t)||t[e]!==this[e])}),
// @license http://opensource.org/licenses/MIT
function(){if("performance"in e==!1&&(e.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in e.performance==!1){var t=Date.now();performance.timing&&performance.timing.navigationStart&&(t=performance.timing.navigationStart),e.performance.now=function(){return Date.now()-t}}}(),e.requestAnimationFrame||(e.webkitRequestAnimationFrame&&e.webkitCancelAnimationFrame?function(e){e.requestAnimationFrame=function(t){return webkitRequestAnimationFrame(function(){t(e.performance.now())})},e.cancelAnimationFrame=e.webkitCancelAnimationFrame}(e):e.mozRequestAnimationFrame&&e.mozCancelAnimationFrame?function(e){e.requestAnimationFrame=function(t){return mozRequestAnimationFrame(function(){t(e.performance.now())})},e.cancelAnimationFrame=e.mozCancelAnimationFrame}(e):function(e){e.requestAnimationFrame=function(t){return e.setTimeout(t,1e3/60)},e.cancelAnimationFrame=e.clearTimeout}(e))}}(this),function(t,n){e.exports=n()}(0,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){(function(t){function i(e,t,n,i){var a=o(n.substr(n.lastIndexOf(e.domain)),e);a&&r({mode:null,el:i,flags:a,engineSettings:t})}function o(e,t){var n={theme:E(F.settings.themes.gray,null),stylesheets:t.stylesheets,instanceOptions:t},i=e.indexOf("?"),o=[e];-1!==i&&(o=[e.slice(0,i),e.slice(i+1)]);var r=o[0].split("/");n.holderURL=e;var a=r[1],s=a.match(/([\d]+p?)x([\d]+p?)/);if(!s)return!1;if(n.fluid=-1!==a.indexOf("p"),n.dimensions={width:s[1].replace("p","%"),height:s[2].replace("p","%")},2===o.length){var A=g.parse(o[1]);if(q.truthy(A.ratio)){n.fluid=!0;var l=parseFloat(n.dimensions.width.replace("%","")),u=parseFloat(n.dimensions.height.replace("%",""));u=Math.floor(u/l*100),l=100,n.dimensions.width=l+"%",n.dimensions.height=u+"%"}if(n.auto=q.truthy(A.auto),A.bg&&(n.theme.bg=q.parseColor(A.bg)),A.fg&&(n.theme.fg=q.parseColor(A.fg)),A.bg&&!A.fg&&(n.autoFg=!0),A.theme&&n.instanceOptions.themes.hasOwnProperty(A.theme)&&(n.theme=E(n.instanceOptions.themes[A.theme],null)),A.text&&(n.text=A.text),A.textmode&&(n.textmode=A.textmode),A.size&&(n.size=A.size),A.font&&(n.font=A.font),A.align&&(n.align=A.align),A.lineWrap&&(n.lineWrap=A.lineWrap),n.nowrap=q.truthy(A.nowrap),n.outline=q.truthy(A.outline),q.truthy(A.random)){F.vars.cache.themeKeys=F.vars.cache.themeKeys||Object.keys(n.instanceOptions.themes);var d=F.vars.cache.themeKeys[0|Math.random()*F.vars.cache.themeKeys.length];n.theme=E(n.instanceOptions.themes[d],null)}}return n}function r(e){var t=e.mode,n=e.el,i=e.flags,o=e.engineSettings,r=i.dimensions,s=i.theme,A=r.width+"x"+r.height;t=null==t?i.fluid?"fluid":"image":t;var d=/holder_([a-z]+)/g;if(null!=i.text&&(s.text=i.text,"object"===n.nodeName.toLowerCase())){for(var c=s.text.split("\\n"),p=0;p<c.length;p++)c[p]=q.encodeHtmlEntity(c[p]);s.text=c.join("\\n")}if(s.text){var h=s.text.match(d);null!==h&&h.forEach(function(e){"holder_dimensions"===e&&(s.text=s.text.replace(e,A))})}var f=i.holderURL,g=E(o,null);if(i.font&&(s.font=i.font,!g.noFontFallback&&"img"===n.nodeName.toLowerCase()&&F.setup.supportsCanvas&&"svg"===g.renderer&&(g=E(g,{renderer:"canvas"}))),i.font&&"canvas"==g.renderer&&(g.reRender=!0),"background"==t)null==n.getAttribute("data-background-src")&&v.setAttr(n,{"data-background-src":f});else{var m={};m[F.vars.dataAttr]=f,v.setAttr(n,m)}i.theme=s,n.holderData={flags:i,engineSettings:g},"image"!=t&&"fluid"!=t||v.setAttr(n,{alt:s.text?s.text+" ["+A+"]":A});var b={mode:t,el:n,holderSettings:{dimensions:r,theme:s,flags:i},engineSettings:g};"image"==t?(i.auto||(n.style.width=r.width+"px",n.style.height=r.height+"px"),"html"==g.renderer?n.style.backgroundColor=s.bg:(a(b),"exact"==i.textmode&&(n.holderData.resizeUpdate=!0,F.vars.resizableImages.push(n),l(n)))):"background"==t&&"html"!=g.renderer?a(b):"fluid"==t&&(n.holderData.resizeUpdate=!0,"%"==r.height.slice(-1)?n.style.height=r.height:null!=i.auto&&i.auto||(n.style.height=r.height+"px"),"%"==r.width.slice(-1)?n.style.width=r.width:null!=i.auto&&i.auto||(n.style.width=r.width+"px"),"inline"!=n.style.display&&""!==n.style.display&&"none"!=n.style.display||(n.style.display="block"),u(n),"html"==g.renderer?n.style.backgroundColor=s.bg:(F.vars.resizableImages.push(n),l(n)))}function a(e){function n(){var t=null;switch(A.renderer){case"canvas":t=_(u,e);break;case"svg":t=w(u,e);break;default:throw"Holder: invalid renderer: "+A.renderer}return t}var i=null,o=e.mode,r=e.el,a=e.holderSettings,A=e.engineSettings;switch(A.renderer){case"svg":if(!F.setup.supportsSVG)return;break;case"canvas":if(!F.setup.supportsCanvas)return;break;default:return}var l={width:a.dimensions.width,height:a.dimensions.height,theme:a.theme,flags:a.flags},u=s(l);if(null==(i=n()))throw"Holder: couldn't render placeholder";"background"==o?(r.style.backgroundImage="url("+i+")",A.noBackgroundSize||(r.style.backgroundSize=l.width+"px "+l.height+"px")):("img"===r.nodeName.toLowerCase()?v.setAttr(r,{src:i}):"object"===r.nodeName.toLowerCase()&&v.setAttr(r,{data:i,type:"image/svg+xml"}),A.reRender&&t.setTimeout(function(){var e=n();if(null==e)throw"Holder: couldn't render placeholder";"img"===r.nodeName.toLowerCase()?v.setAttr(r,{src:e}):"object"===r.nodeName.toLowerCase()&&v.setAttr(r,{data:e,type:"image/svg+xml"})},150)),v.setAttr(r,{"data-holder-rendered":!0})}function s(e){function t(e,t,n,i){t.width=n,t.height=i,e.width=Math.max(e.width,t.width),e.height+=t.height}var n=F.defaults.size;switch(parseFloat(e.theme.size)?n=e.theme.size:parseFloat(e.flags.size)&&(n=e.flags.size),e.font={family:e.theme.font?e.theme.font:"Arial, Helvetica, Open Sans, sans-serif",size:A(e.width,e.height,n,F.defaults.scale),units:e.theme.units?e.theme.units:F.defaults.units,weight:e.theme.fontweight?e.theme.fontweight:"bold"},e.text=e.theme.text||Math.floor(e.width)+"x"+Math.floor(e.height),e.noWrap=e.theme.nowrap||e.flags.nowrap,e.align=e.theme.align||e.flags.align||"center",e.flags.textmode){case"literal":e.text=e.flags.dimensions.width+"x"+e.flags.dimensions.height;break;case"exact":if(!e.flags.exactDimensions)break;e.text=Math.floor(e.flags.exactDimensions.width)+"x"+Math.floor(e.flags.exactDimensions.height)}var i=e.flags.lineWrap||F.setup.lineWrapRatio,o=e.width*i,r=o,a=new m({width:e.width,height:e.height}),s=a.Shape,l=new s.Rect("holderBg",{fill:e.theme.bg});if(l.resize(e.width,e.height),a.root.add(l),e.flags.outline){var u=new y(l.properties.fill);u=u.lighten(u.lighterThan("7f7f7f")?-.1:.1),l.properties.outline={fill:u.toHex(!0),width:2}}var d=e.theme.fg;if(e.flags.autoFg){var c=new y(l.properties.fill),p=new y("fff"),h=new y("000",{alpha:.285714});d=c.blendAlpha(c.lighterThan("7f7f7f")?h:p).toHex(!0)}var f=new s.Group("holderTextGroup",{text:e.text,align:e.align,font:e.font,fill:d});f.moveTo(null,null,1),a.root.add(f);var g=f.textPositionData=B(a);if(!g)throw"Holder: staging fallback not supported yet.";f.properties.leading=g.boundingBox.height;var q=null,b=null;if(g.lineCount>1){var v,x=0,w=0,_=0;b=new s.Group("line"+_),"left"!==e.align&&"right"!==e.align||(r=e.width*(1-2*(1-i)));for(var E=0;E<g.words.length;E++){var C=g.words[E];q=new s.Text(C.text);var I="\\n"==C.text;!e.noWrap&&(x+C.width>=r||!0===I)&&(t(f,b,x,f.properties.leading),f.add(b),x=0,w+=f.properties.leading,_+=1,b=new s.Group("line"+_),b.y=w),!0!==I&&(q.moveTo(x,0),x+=g.spaceWidth+C.width,b.add(q))}if(t(f,b,x,f.properties.leading),f.add(b),"left"===e.align)f.moveTo(e.width-o,null,null);else if("right"===e.align){for(v in f.children)b=f.children[v],b.moveTo(e.width-b.width,null,null);f.moveTo(0-(e.width-o),null,null)}else{for(v in f.children)b=f.children[v],b.moveTo((f.width-b.width)/2,null,null);f.moveTo((e.width-f.width)/2,null,null)}f.moveTo(null,(e.height-f.height)/2,null),(e.height-f.height)/2<0&&f.moveTo(null,0,null)}else q=new s.Text(e.text),b=new s.Group("line0"),b.add(q),f.add(b),"left"===e.align?f.moveTo(e.width-o,null,null):"right"===e.align?f.moveTo(0-(e.width-o),null,null):f.moveTo((e.width-g.boundingBox.width)/2,null,null),f.moveTo(null,(e.height-g.boundingBox.height)/2,null);return a}function A(e,t,n,i){var o=parseInt(e,10),r=parseInt(t,10),a=Math.max(o,r),s=Math.min(o,r),A=.8*Math.min(s,a*i);return Math.round(Math.max(n,A))}function l(e){var t;t=null==e||null==e.nodeType?F.vars.resizableImages:[e];for(var n=0,i=t.length;n<i;n++){var o=t[n];if(o.holderData){var r=o.holderData.flags,s=C(o);if(s){if(!o.holderData.resizeUpdate)continue;if(r.fluid&&r.auto){var A=o.holderData.fluidConfig;switch(A.mode){case"width":s.height=s.width/A.ratio;break;case"height":s.width=s.height*A.ratio}}var l={mode:"image",holderSettings:{dimensions:s,theme:r.theme,flags:r},el:o,engineSettings:o.holderData.engineSettings};"exact"==r.textmode&&(r.exactDimensions=s,l.holderSettings.dimensions=r.dimensions),a(l)}else c(o)}}}function u(e){if(e.holderData){var t=C(e);if(t){var n=e.holderData.flags,i={fluidHeight:"%"==n.dimensions.height.slice(-1),fluidWidth:"%"==n.dimensions.width.slice(-1),mode:null,initialDimensions:t};i.fluidWidth&&!i.fluidHeight?(i.mode="width",i.ratio=i.initialDimensions.width/parseFloat(n.dimensions.height)):!i.fluidWidth&&i.fluidHeight&&(i.mode="height",i.ratio=parseFloat(n.dimensions.width)/i.initialDimensions.height),e.holderData.fluidConfig=i}else c(e)}}function d(){var e,n=[],i=Object.keys(F.vars.invisibleImages);i.forEach(function(t){e=F.vars.invisibleImages[t],C(e)&&"img"==e.nodeName.toLowerCase()&&(n.push(e),delete F.vars.invisibleImages[t])}),n.length&&S.run({images:n}),setTimeout(function(){t.requestAnimationFrame(d)},10)}function c(e){e.holderData.invisibleId||(F.vars.invisibleId+=1,F.vars.invisibleImages["i"+F.vars.invisibleId]=e,e.holderData.invisibleId=F.vars.invisibleId)}function p(e){F.vars.debounceTimer||e.call(this),F.vars.debounceTimer&&t.clearTimeout(F.vars.debounceTimer),F.vars.debounceTimer=t.setTimeout(function(){F.vars.debounceTimer=null,e.call(this)},F.setup.debounce)}function h(){p(function(){l(null)})}var f=n(2),g=n(3),m=n(6),q=n(7),b=n(8),v=n(9),y=n(10),x=n(11),w=n(12),_=n(15),E=q.extend,C=q.dimensionCheck,I=x.svg_ns,S={version:x.version,addTheme:function(e,t){return null!=e&&null!=t&&(F.settings.themes[e]=t),delete F.vars.cache.themeKeys,this},addImage:function(e,t){return v.getNodeArray(t).forEach(function(t){var n=v.newEl("img"),i={};i[F.setup.dataAttr]=e,v.setAttr(n,i),t.appendChild(n)}),this},setResizeUpdate:function(e,t){e.holderData&&(e.holderData.resizeUpdate=!!t,e.holderData.resizeUpdate&&l(e))},run:function(e){e=e||{};var n={},a=E(F.settings,e);F.vars.preempted=!0,F.vars.dataAttr=a.dataAttr||F.setup.dataAttr,n.renderer=a.renderer?a.renderer:F.setup.renderer,-1===F.setup.renderers.join(",").indexOf(n.renderer)&&(n.renderer=F.setup.supportsSVG?"svg":F.setup.supportsCanvas?"canvas":"html");var s=v.getNodeArray(a.images),A=v.getNodeArray(a.bgnodes),l=v.getNodeArray(a.stylenodes),u=v.getNodeArray(a.objects);return n.stylesheets=[],n.svgXMLStylesheet=!0,n.noFontFallback=!!a.noFontFallback,n.noBackgroundSize=!!a.noBackgroundSize,l.forEach(function(e){if(e.attributes.rel&&e.attributes.href&&"stylesheet"==e.attributes.rel.value){var t=e.attributes.href.value,i=v.newEl("a");i.href=t;var o=i.protocol+"//"+i.host+i.pathname+i.search;n.stylesheets.push(o)}}),A.forEach(function(e){if(t.getComputedStyle){var i=t.getComputedStyle(e,null).getPropertyValue("background-image"),s=e.getAttribute("data-background-src"),A=s||i,l=null,u=a.domain+"/",d=A.indexOf(u);if(0===d)l=A;else if(1===d&&"?"===A[0])l=A.slice(1);else{var c=A.substr(d).match(/([^\"]*)"?\)/);if(null!==c)l=c[1];else if(0===A.indexOf("url("))throw"Holder: unable to parse background URL: "+A}if(l){var p=o(l,a);p&&r({mode:"background",el:e,flags:p,engineSettings:n})}}}),u.forEach(function(e){var t={};try{t.data=e.getAttribute("data"),t.dataSrc=e.getAttribute(F.vars.dataAttr)}catch(e){}var o=null!=t.data&&0===t.data.indexOf(a.domain),r=null!=t.dataSrc&&0===t.dataSrc.indexOf(a.domain);o?i(a,n,t.data,e):r&&i(a,n,t.dataSrc,e)}),s.forEach(function(e){var t={};try{t.src=e.getAttribute("src"),t.dataSrc=e.getAttribute(F.vars.dataAttr),t.rendered=e.getAttribute("data-holder-rendered")}catch(e){}var o=null!=t.src,r=null!=t.dataSrc&&0===t.dataSrc.indexOf(a.domain),s=null!=t.rendered&&"true"==t.rendered;o?0===t.src.indexOf(a.domain)?i(a,n,t.src,e):r&&(s?i(a,n,t.dataSrc,e):function(e,t,n,o,r){q.imageExists(e,function(e){e||i(t,n,o,r)})}(t.src,a,n,t.dataSrc,e)):r&&i(a,n,t.dataSrc,e)}),this}},F={settings:{domain:"holder.js",images:"img",objects:"object",bgnodes:"body .holderjs",stylenodes:"head link.holderjs",themes:{gray:{bg:"#EEEEEE",fg:"#AAAAAA"},social:{bg:"#3a5a97",fg:"#FFFFFF"},industrial:{bg:"#434A52",fg:"#C2F200"},sky:{bg:"#0D8FDB",fg:"#FFFFFF"},vine:{bg:"#39DBAC",fg:"#1E292C"},lava:{bg:"#F8591A",fg:"#1C2846"}}},defaults:{size:10,units:"pt",scale:1/16}},B=function(){var e=null,t=null,n=null;return function(i){var o=i.root;if(F.setup.supportsSVG){var r=!1;null!=e&&e.parentNode===document.body||(r=!0),e=b.initSVG(e,o.properties.width,o.properties.height),e.style.display="block",r&&(t=v.newEl("text",I),n=function(e){return document.createTextNode(e)}(null),v.setAttr(t,{x:0}),t.appendChild(n),e.appendChild(t),document.body.appendChild(e),e.style.visibility="hidden",e.style.position="absolute",e.style.top="-100%",e.style.left="-100%");var a=o.children.holderTextGroup,s=a.properties;v.setAttr(t,{y:s.font.size,style:q.cssProps({"font-weight":s.font.weight,"font-size":s.font.size+s.font.units,"font-family":s.font.family})}),n.nodeValue=s.text;var A=t.getBBox(),l=Math.ceil(A.width/o.properties.width),u=s.text.split(" "),d=s.text.match(/\\n/g);l+=null==d?0:d.length,n.nodeValue=s.text.replace(/[ ]+/g,"");var c=t.getComputedTextLength(),p=A.width-c,h=Math.round(p/Math.max(1,u.length-1)),f=[];if(l>1){n.nodeValue="";for(var g=0;g<u.length;g++)if(0!==u[g].length){n.nodeValue=q.decodeHtmlEntity(u[g]);var m=t.getBBox();f.push({text:u[g],width:m.width})}}return e.style.display="none",{spaceWidth:h,lineCount:l,boundingBox:A,words:f}}return!1}}();for(var D in F.flags)F.flags.hasOwnProperty(D)&&(F.flags[D].match=function(e){return e.match(this.regex)});F.setup={renderer:"html",debounce:100,ratio:1,supportsCanvas:!1,supportsSVG:!1,lineWrapRatio:.9,dataAttr:"data-src",renderers:["html","canvas","svg"]},F.vars={preempted:!1,resizableImages:[],invisibleImages:{},invisibleId:0,visibilityCheckStarted:!1,debounceTimer:null,cache:{}},function(){var e=v.newEl("canvas");e.getContext&&-1!=e.toDataURL("image/png").indexOf("data:image/png")&&(F.setup.renderer="canvas",F.setup.supportsCanvas=!0),document.createElementNS&&document.createElementNS(I,"svg").createSVGRect&&(F.setup.renderer="svg",F.setup.supportsSVG=!0)}(),function(){F.vars.visibilityCheckStarted||(t.requestAnimationFrame(d),F.vars.visibilityCheckStarted=!0)}(),f&&f(function(){F.vars.preempted||S.run(),t.addEventListener?(t.addEventListener("resize",h,!1),t.addEventListener("orientationchange",h,!1)):t.attachEvent("onresize",h),"object"==typeof t.Turbolinks&&t.document.addEventListener("page:change",function(){S.run()})}),e.exports=S}).call(t,function(){return this}())},function(e,t){e.exports="undefined"!=typeof window&&/*!
	 * onDomReady.js 1.4.0 (c) 2013 Tubal Martin - MIT license
	 *
	 * Specially modified to work with Holder.js
	 */
function(e){function t(e){if(!b){if(!a.body)return o(t);for(b=!0;e=v.shift();)o(e)}}function n(e){(m||e.type===A||a[c]===d)&&(i(),t())}function i(){m?(a[g](h,n,l),e[g](A,n,l)):(a[p](f,n),e[p](u,n))}function o(e,t){setTimeout(e,+t>=0?t:1)}function r(e){b?o(e):v.push(e)}null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e,!1),document.readyState="complete"},!1),document.readyState="loading");var a=e.document,s=a.documentElement,A="load",l=!1,u="on"+A,d="complete",c="readyState",p="detachEvent",h="DOMContentLoaded",f="onreadystatechange",g="removeEventListener",m="addEventListener"in a,q=l,b=l,v=[];if(a[c]===d)o(t);else if(m)a.addEventListener(h,n,l),e.addEventListener(A,n,l);else{a.attachEvent(f,n),e.attachEvent(u,n);try{q=null==e.frameElement&&s}catch(e){}q&&q.doScroll&&function e(){if(!b){try{q.doScroll("left")}catch(t){return o(e,50)}i(),t()}}()}return r.version="1.4.0",r.isReady=function(){return b},r}(window)},function(e,t,n){var i=encodeURIComponent,o=decodeURIComponent,r=n(4),a=n(5),s=/(\w+)\[(\d+)\]/,A=/\w+\.\w+/;t.parse=function(e){if("string"!=typeof e)return{};if(""===(e=r(e)))return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t={},n=e.split("&"),i=0;i<n.length;i++){var a,l,u,d=n[i].split("="),c=o(d[0]);if(a=s.exec(c))t[a[1]]=t[a[1]]||[],t[a[1]][a[2]]=o(d[1]);else if(a=A.test(c)){for(a=c.split("."),l=t;a.length;)if(u=a.shift(),u.length){if(l[u]){if(l[u]&&"object"!=typeof l[u])break}else l[u]={};a.length||(l[u]=o(d[1])),l=l[u]}}else t[d[0]]=null==d[1]?"":o(d[1])}return t},t.stringify=function(e){if(!e)return"";var t=[];for(var n in e){var o=e[n];if("array"!=a(o))t.push(i(n)+"="+i(e[n]));else for(var r=0;r<o.length;++r)t.push(i(n+"["+r+"]")+"="+i(o[r]))}return t.join("&")}},function(e,t){function n(e){return e.replace(/^\s*|\s*$/g,"")}t=e.exports=n,t.left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}},function(e,t){function n(e){return!(null==e||!(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)))}var i=Object.prototype.toString;e.exports=function(e){switch(i.call(e)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===e?"null":void 0===e?"undefined":e!==e?"nan":e&&1===e.nodeType?"element":n(e)?"buffer":typeof(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e))}},function(e,t){var n=function(e){function t(e,t){for(var n in t)e[n]=t[n];return e}var n=1,i=function(e){n++,this.parent=null,this.children={},this.id=n,this.name="n"+n,void 0!==e&&(this.name=e),this.x=this.y=this.z=0,this.width=this.height=0};i.prototype.resize=function(e,t){null!=e&&(this.width=e),null!=t&&(this.height=t)},i.prototype.moveTo=function(e,t,n){this.x=null!=e?e:this.x,this.y=null!=t?t:this.y,this.z=null!=n?n:this.z},i.prototype.add=function(e){var t=e.name;if(void 0!==this.children[t])throw"SceneGraph: child already exists: "+t;this.children[t]=e,e.parent=this};var o=function(){i.call(this,"root"),this.properties=e};o.prototype=new i;var r=function(e,n){if(i.call(this,e),this.properties={fill:"#000000"},void 0!==n)t(this.properties,n);else if(void 0!==e&&"string"!=typeof e)throw"SceneGraph: invalid node name"};r.prototype=new i;var a=function(){r.apply(this,arguments),this.type="group"};a.prototype=new r;var s=function(){r.apply(this,arguments),this.type="rect"};s.prototype=new r;var A=function(e){r.call(this),this.type="text",this.properties.text=e};A.prototype=new r;var l=new o;return this.Shape={Rect:s,Text:A,Group:a},this.root=l,this};e.exports=n},function(e,t){(function(e){t.extend=function(e,t){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);if(null!=t)for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);return n},t.cssProps=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+":"+e[n]);return t.join(";")},t.encodeHtmlEntity=function(e){for(var t=[],n=0,i=e.length-1;i>=0;i--)n=e.charCodeAt(i),n>128?t.unshift(["&#",n,";"].join("")):t.unshift(e[i]);return t.join("")},t.imageExists=function(e,t){var n=new Image;n.onerror=function(){t.call(this,!1)},n.onload=function(){t.call(this,!0)},n.src=e},t.decodeHtmlEntity=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(t)})},t.dimensionCheck=function(e){var t={height:e.clientHeight,width:e.clientWidth};return!(!t.height||!t.width)&&t},t.truthy=function(e){return"string"==typeof e?"true"===e||"yes"===e||"1"===e||"on"===e||"✓"===e:!!e},t.parseColor=function(e){var t,n=/(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i,i=/^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,o=/^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/,r=e.match(n);return null!==r?(t=r[1]||r[2],"#"!==t[0]?"#"+t:t):null!==(r=e.match(i))?t="rgb("+r.slice(1).join(",")+")":(r=e.match(o),null!==r?t="rgba("+r.slice(1).join(",")+")":null)},t.canvasRatio=function(){var t=1,n=1;if(e.document){var i=e.document.createElement("canvas");if(i.getContext){var o=i.getContext("2d");t=e.devicePixelRatio||1,n=o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1}}return t/n}}).call(t,function(){return this}())},function(e,t,n){(function(e){var i=n(9),o="http://www.w3.org/2000/svg";t.initSVG=function(e,t,n){var r,a,s=!1;e&&e.querySelector?null===(a=e.querySelector("style"))&&(s=!0):(e=i.newEl("svg",o),s=!0),s&&(r=i.newEl("defs",o),a=i.newEl("style",o),i.setAttr(a,{type:"text/css"}),r.appendChild(a),e.appendChild(r)),e.webkitMatchesSelector&&e.setAttribute("xmlns",o);for(var A=0;A<e.childNodes.length;A++)8===e.childNodes[A].nodeType&&e.removeChild(e.childNodes[A]);for(;a.childNodes.length;)a.removeChild(a.childNodes[0]);return i.setAttr(e,{width:t,height:n,viewBox:"0 0 "+t+" "+n,preserveAspectRatio:"none"}),e},t.svgStringToDataURI=function(){return function(t,n){return n?"data:image/svg+xml;charset=UTF-8;base64,"+btoa(e.unescape(encodeURIComponent(t))):"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(t)}}(),t.serializeSVG=function(t,n){if(e.XMLSerializer){var o=new XMLSerializer,r="",a=n.stylesheets;if(n.svgXMLStylesheet){for(var s=i.createXML(),A=a.length-1;A>=0;A--){var l=s.createProcessingInstruction("xml-stylesheet",'href="'+a[A]+'" rel="stylesheet"');s.insertBefore(l,s.firstChild)}s.removeChild(s.documentElement),r=o.serializeToString(s)}var u=o.serializeToString(t);return u=u.replace(/\&amp;(\#[0-9]{2,}\;)/g,"&$1"),r+u}}}).call(t,function(){return this}())},function(e,t){(function(e){t.newEl=function(t,n){if(e.document)return null==n?e.document.createElement(t):e.document.createElementNS(n,t)},t.setAttr=function(e,t){for(var n in t)e.setAttribute(n,t[n])},t.createXML=function(){if(e.DOMParser)return(new DOMParser).parseFromString("<xml />","application/xml")},t.getNodeArray=function(t){var n=null;return"string"==typeof t?n=document.querySelectorAll(t):e.NodeList&&t instanceof e.NodeList?n=t:e.Node&&t instanceof e.Node?n=[t]:e.HTMLCollection&&t instanceof e.HTMLCollection?n=t:t instanceof Array?n=t:null===t&&(n=[]),n=Array.prototype.slice.call(n)}}).call(t,function(){return this}())},function(e,t){var n=function(e,t){"string"==typeof e&&(this.original=e,"#"===e.charAt(0)&&(e=e.slice(1)),/[^a-f0-9]+/i.test(e)||(3===e.length&&(e=e.replace(/./g,"$&$&")),6===e.length&&(this.alpha=1,t&&t.alpha&&(this.alpha=t.alpha),this.set(parseInt(e,16)))))};n.rgb2hex=function(e,t,n){function i(e){var t=(0|e).toString(16);return e<16&&(t="0"+t),t}return[e,t,n].map(i).join("")},n.hsl2rgb=function(e,t,n){var i=e/60,o=(1-Math.abs(2*n-1))*t,r=o*(1-Math.abs(parseInt(i)%2-1)),a=n-o/2,s=0,A=0,l=0;return i>=0&&i<1?(s=o,A=r):i>=1&&i<2?(s=r,A=o):i>=2&&i<3?(A=o,l=r):i>=3&&i<4?(A=r,l=o):i>=4&&i<5?(s=r,l=o):i>=5&&i<6&&(s=o,l=r),s+=a,A+=a,l+=a,s=parseInt(255*s),A=parseInt(255*A),l=parseInt(255*l),[s,A,l]},n.prototype.set=function(e){this.raw=e;var t=(16711680&this.raw)>>16,n=(65280&this.raw)>>8,i=255&this.raw,o=.2126*t+.7152*n+.0722*i,r=-.09991*t-.33609*n+.436*i,a=.615*t-.55861*n-.05639*i;return this.rgb={r:t,g:n,b:i},this.yuv={y:o,u:r,v:a},this},n.prototype.lighten=function(e){var t=Math.min(1,Math.max(0,Math.abs(e)))*(e<0?-1:1),i=255*t|0,o=Math.min(255,Math.max(0,this.rgb.r+i)),r=Math.min(255,Math.max(0,this.rgb.g+i)),a=Math.min(255,Math.max(0,this.rgb.b+i)),s=n.rgb2hex(o,r,a);return new n(s)},n.prototype.toHex=function(e){return(e?"#":"")+this.raw.toString(16)},n.prototype.lighterThan=function(e){return e instanceof n||(e=new n(e)),this.yuv.y>e.yuv.y},n.prototype.blendAlpha=function(e){e instanceof n||(e=new n(e));var t=e,i=this,o=t.alpha*t.rgb.r+(1-t.alpha)*i.rgb.r,r=t.alpha*t.rgb.g+(1-t.alpha)*i.rgb.g,a=t.alpha*t.rgb.b+(1-t.alpha)*i.rgb.b;return new n(n.rgb2hex(o,r,a))},e.exports=n},function(e,t){e.exports={version:"2.9.4",svg_ns:"http://www.w3.org/2000/svg"}},function(e,t,n){function i(e,t){return d.element({tag:t,width:e.width,height:e.height,fill:e.properties.fill})}function o(e){return l.cssProps({fill:e.fill,"font-weight":e.font.weight,"font-family":e.font.family+", monospace","font-size":e.font.size+e.font.units})}function r(e,t,n){var i=n/2;return["M",i,i,"H",e-i,"V",t-i,"H",i,"V",0,"M",0,i,"L",e,t-i,"M",0,t-i,"L",e,i].join(" ")}var a=n(13),s=n(8),A=n(11),l=n(7),u=A.svg_ns,d={element:function(e){var t=e.tag,n=e.content||"";return delete e.tag,delete e.content,[t,n,e]}};e.exports=function(e,t){var n=t.engineSettings,A=n.stylesheets,l=A.map(function(e){return'<?xml-stylesheet rel="stylesheet" href="'+e+'"?>'}).join("\n"),c="holder_"+Number(new Date).toString(16),p=e.root,h=p.children.holderTextGroup,f="#"+c+" text { "+o(h.properties)+" } ";h.y+=.8*h.textPositionData.boundingBox.height;var g=[];Object.keys(h.children).forEach(function(e){var t=h.children[e];Object.keys(t.children).forEach(function(e){var n=t.children[e],i=h.x+t.x+n.x,o=h.y+t.y+n.y,r=d.element({tag:"text",content:n.properties.text,x:i,y:o});g.push(r)})});var m=d.element({tag:"g",content:g}),q=null;if(p.children.holderBg.properties.outline){var b=p.children.holderBg.properties.outline;q=d.element({tag:"path",d:r(p.children.holderBg.width,p.children.holderBg.height,b.width),"stroke-width":b.width,stroke:b.fill,fill:"none"})}var v=i(p.children.holderBg,"rect"),y=[];y.push(v),b&&y.push(q),y.push(m);var x=d.element({tag:"g",id:c,content:y}),w=d.element({tag:"style",content:f,type:"text/css"}),_=d.element({tag:"defs",content:w}),E=d.element({tag:"svg",content:[_,x],width:p.properties.width,height:p.properties.height,xmlns:u,viewBox:[0,0,p.properties.width,p.properties.height].join(" "),preserveAspectRatio:"none"}),C=a(E);return C=l+C[0],s.svgStringToDataURI(C,"background"===t.mode)}},function(e,t,n){n(14);e.exports=function e(t,n,i){"use strict";function o(e,t){if(null!==t&&!1!==t&&void 0!==t)return"string"!=typeof t&&"object"!=typeof t?String(t):t}var r,a,s,A,l=1,u=!0;if(i=i||{},"string"==typeof t[0])t[0]=function(e){var t=e.match(/^[\w-]+/),n={tag:t?t[0]:"div",attr:{},children:[]},o=e.match(/#([\w-]+)/),r=e.match(/\$([\w-]+)/),a=e.match(/\.[\w-]+/g);return o&&(n.attr.id=o[1],i[o[1]]=n),r&&(i[r[1]]=n),a&&(n.attr.class=a.join(" ").replace(/\./g,"")),e.match(/&$/g)&&(u=!1),n}(t[0]);else{if(!Array.isArray(t[0]))throw new Error("First element of array must be a string, or an array and not "+JSON.stringify(t[0]));l=0}for(;l<t.length;l++){if(!1===t[l]||null===t[l]){t[0]=!1;break}if(void 0!==t[l]&&!0!==t[l])if("string"==typeof t[l])u&&(t[l]=function(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}(t[l])),t[0].children.push(t[l]);else if("number"==typeof t[l])t[0].children.push(t[l]);else if(Array.isArray(t[l])){if(Array.isArray(t[l][0])){if(t[l].reverse().forEach(function(e){t.splice(l+1,0,e)}),0!==l)continue;l++}e(t[l],n,i),t[l][0]&&t[0].children.push(t[l][0])}else if("function"==typeof t[l])s=t[l];else{if("object"!=typeof t[l])throw new TypeError('"'+t[l]+'" is not allowed as a value.');for(a in t[l])t[l].hasOwnProperty(a)&&null!==t[l][a]&&!1!==t[l][a]&&("style"===a&&"object"==typeof t[l][a]?t[0].attr[a]=JSON.stringify(t[l][a],o).slice(2,-2).replace(/","/g,";").replace(/":"/g,":").replace(/\\"/g,"'"):t[0].attr[a]=t[l][a])}}if(!1!==t[0]){r="<"+t[0].tag;for(A in t[0].attr)t[0].attr.hasOwnProperty(A)&&(r+=" "+A+'="'+function(e){return e||0===e?String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;"):""}(t[0].attr[A])+'"');r+=">",t[0].children.forEach(function(e){r+=e}),r+="</"+t[0].tag+">",t[0]=r}return i[0]=t[0],s&&s(t[0]),i}},function(e,t){/*!
	 * escape-html
	 * Copyright(c) 2012-2013 TJ Holowaychuk
	 * Copyright(c) 2015 Andreas Lubbe
	 * Copyright(c) 2015 Tiancheng "Timothy" Gu
	 * MIT Licensed
	 */
"use strict";function n(e){var t=""+e,n=i.exec(t);if(!n)return t;var o,r="",a=0,s=0;for(a=n.index;a<t.length;a++){switch(t.charCodeAt(a)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 39:o="&#39;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}s!==a&&(r+=t.substring(s,a)),s=a+1,r+=o}return s!==a?r+t.substring(s,a):r}var i=/["'&<>]/;e.exports=n},function(e,t,n){var i=n(9),o=n(7);e.exports=function(){var e=i.newEl("canvas"),t=null;return function(n){null==t&&(t=e.getContext("2d"));var i=o.canvasRatio(),r=n.root;e.width=i*r.properties.width,e.height=i*r.properties.height,t.textBaseline="middle";var a=r.children.holderBg,s=i*a.width,A=i*a.height;t.fillStyle=a.properties.fill,t.fillRect(0,0,s,A),a.properties.outline&&(t.strokeStyle=a.properties.outline.fill,t.lineWidth=a.properties.outline.width,t.moveTo(1,1),t.lineTo(s-1,1),t.lineTo(s-1,A-1),t.lineTo(1,A-1),t.lineTo(1,1),t.moveTo(0,1),t.lineTo(s,A-1),t.moveTo(0,A-1),t.lineTo(s,1),t.stroke());var l=r.children.holderTextGroup;t.font=l.properties.font.weight+" "+i*l.properties.font.size+l.properties.font.units+" "+l.properties.font.family+", monospace",t.fillStyle=l.properties.fill;for(var u in l.children){var d=l.children[u];for(var c in d.children){var p=d.children[c],h=i*(l.x+d.x+p.x),f=i*(l.y+d.y+p.y+l.properties.leading/2);t.fillText(p.properties.text,h,f)}}return e.toDataURL("image/png")}}()}])}),function(e,t){t&&(Holder=e.Holder)}(this,"undefined"!=typeof Meteor&&"undefined"!=typeof Package)},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var i=function(e,t){if(!e)return null;var n=t?1e3:1024,i=n,o=i*n,r=o*n,a=e.substring(e.length-2).toUpperCase(),s=e.substring(0,e.length-2),A=Number.parseInt(s),l=0;switch(a){case"KB":l=A*i;break;case"MB":l=A*o;break;case"GB":l=A*r}return l},o={cn:{messages:{typeError:"{file} 文件格式不正确。有效格式： {extensions}",sizeError:"{file} 文件容量超过限制, 文件最大容量为： {sizeLimit}",minSizeError:"{file} 文件容量低于限制, 上传的文件最小容量为： {minSizeLimit}.",emptyError:"{file} 文件为空，请选择其他文件进行上传。",noFilesError:"未选择任何文件进行上传",tooManyItemsError:"太多文件 ({netItems}) 需要被上传，上传文件数量限制为： {itemLimit}个",maxHeightImageError:"图片高度超过限制",maxWidthImageError:"图片宽度超过限制",minHeightImageError:"图片高度不足",minWidthImageError:"图片宽度不足",retryFailTooManyItems:"重试失败 - 您已达到文件数量上限。",onLeave:"文件正在上传，若离开该页面，正在上传的文件将被取消"},text:{failUpload:"上传失败",fileInputTitle:"选择文件进行上传"},ui:{thumbnail:"图片预览",choseFileButton:"选择文件",dropHere:"将文件拖到这里进行上传……",done:"完成",fileTypes:"文件类型",fileSizeLimit:"文件容量限制"}},en:{ui:{thumbnail:"thumbnail",choseFileButton:"select file",dropHere:"drop files here",done:"done",fileTypes:"file extensions",fileSizeLimit:"file size limit"}}},r=function(){var e=this,t={multiple:this.multiple,request:{endpoint:this.uploadFileUrl,inputName:this.uploadFileObjName,params:{fileSizeLimit:this.fileSizeLimit,fileTypeExts:this.fileTypeExts}},deleteFile:{enabled:!0,method:"POST"},debug:!0,validation:{allowedExtensions:this.fileTypeExts.split(","),sizeLimit:i(this.fileSizeLimit,!0),sizeLimitStr:this.fileSizeLimit,image:{maxHeight:this.imageMaxHeight,maxWidth:this.imageMaxWidth,minHeight:this.imageMinHeight,minWidth:this.imageMinWidth}},callbacks:{onComplete:function(e,t,n,i){},onSubmitDelete:function(e){}}};return this.language&&"cn"===this.language&&(t.messages=o.cn.messages,t.text=o.cn.text),this.callback&&"function"==typeof this.callback&&(t.callbacks.onComplete=function(t,n,i,o){i&&e.callback(i)}),t},a=function(e){return e&&"en"===e?o.en.ui:o.cn.ui}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.uploaderClass]},[e.multiple?e._e():n("div",{staticClass:"single-upload"},[e.preview?n("div",{staticClass:"image-box"},[n("img",{ref:"simpleImg",attrs:{src:e.singleUploadImg,alt:"",width:e.previewWidth,height:e.previewHeight}})]):e._e(),e._v(" "),n("div",{ref:"upload",staticClass:"btn singleFileUpload uploader-button"},[e.buttonIcon?n("i",{staticClass:"v-upload-iconfont icon-uploader-open"}):e._e(),e._v(" "),n("span",[e._v(e._s(e.buttonText?e.buttonText:e.ui.choseFileButton))])])]),e._v(" "),e.multiple?n("div",{ref:"multipleUpload",staticClass:"upload-list"}):e._e(),e._v(" "),e.multiple?n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"uploadArea"},[n("div",{staticClass:"qq-uploader-selector qq-uploader qq-gallery",staticStyle:{height:"100%"},attrs:{"qq-drop-area-text":e.ui.dropHere}},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"qq-upload-button-selector qq-upload-button uploader-button"},[n("div",[e.buttonIcon?n("i",{staticClass:"v-upload-iconfont icon-uploader-open"}):e._e(),e._v("\n                    "+e._s(e.buttonText?e.buttonText:e.ui.choseFileButton)+"\n                ")])]),e._v(" "),n("div",{staticClass:"info-show"},[n("div",[e._v("\n                    "+e._s(e.ui.fileSizeLimit)+"："),n("span",{domProps:{textContent:e._s(e.fileSizeLimit)}}),n("br"),e._v("\n                    "+e._s(e.ui.fileTypes)+"："),n("span",{domProps:{textContent:e._s(e.fileTypeExts)}})])]),e._v(" "),e._m(2)])]):e._e()])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"qq-upload-list-selector qq-upload-list",attrs:{role:"region","aria-live":"polite","aria-relevant":"additions removals"}},[n("li",[n("span",{staticClass:"qq-upload-status-text-selector qq-upload-status-text",attrs:{role:"status"}}),e._v(" "),n("div",{staticClass:"qq-progress-bar-container-selector qq-progress-bar-container"},[n("div",{staticClass:"qq-progress-bar-selector qq-progress-bar",attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}})]),e._v(" "),n("span",{staticClass:"qq-upload-spinner-selector qq-upload-spinner"}),e._v(" "),n("div",{staticClass:"qq-thumbnail-wrapper"},[n("img",{staticClass:"qq-thumbnail-selector",attrs:{"qq-max-size":"120","qq-server-scale":""}})]),e._v(" "),n("button",{staticClass:"qq-upload-cancel-selector qq-upload-cancel",attrs:{type:"button"}},[e._v("X")]),e._v(" "),n("button",{staticClass:"qq-upload-retry-selector qq-upload-retry",attrs:{type:"button"}},[n("span",{staticClass:"qq-btn qq-retry-icon",attrs:{"aria-label":"Retry"}}),e._v(" Retry\n                    ")]),e._v(" "),n("div",{staticClass:"qq-file-info"},[n("div",{staticClass:"qq-file-name"},[n("span",{staticClass:"qq-upload-file-selector qq-upload-file"}),e._v(" "),n("span",{staticClass:"qq-edit-filename-icon-selector qq-edit-filename-icon",attrs:{"aria-label":"Edit filename"}})]),e._v(" "),n("input",{staticClass:"qq-edit-filename-selector qq-edit-filename",attrs:{tabindex:"0",type:"text"}}),e._v(" "),n("span",{staticClass:"qq-upload-size-selector qq-upload-size"}),e._v(" "),n("button",{staticClass:"qq-btn qq-upload-delete-selector qq-upload-delete",attrs:{type:"button"}},[n("span",{staticClass:"qq-btn qq-delete-icon",attrs:{"aria-label":"Delete"}})]),e._v(" "),n("button",{staticClass:"qq-btn qq-upload-pause-selector qq-upload-pause",attrs:{type:"button"}},[n("span",{staticClass:"qq-btn qq-pause-icon",attrs:{"aria-label":"Pause"}})]),e._v(" "),n("button",{staticClass:"qq-btn qq-upload-continue-selector qq-upload-continue",attrs:{type:"button"}},[n("span",{staticClass:"qq-btn qq-continue-icon",attrs:{"aria-label":"Continue"}})])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"qq-upload-drop-area-selector qq-upload-drop-area",attrs:{"qq-hide-dropzone":""}},[n("span",{staticClass:"qq-upload-drop-area-text-selector"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"qq-total-progress-bar-container-selector qq-total-progress-bar-container"},[n("div",{staticClass:"qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar",attrs:{role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"}})])}],r={render:i,staticRenderFns:o};t.a=r}])});
//# sourceMappingURL=v-uploader.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(5)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(11)
/* template */
var __vue_template__ = __webpack_require__(12)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ff5483", Component.options)
  } else {
    hotAPI.reload("data-v-68ff5483", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("290c3e45", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68ff5483\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tool.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68ff5483\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tool.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Scoped Styles */\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(9)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import { FormField, HandlesValidationErrors } from 'laravel-nova';
/* harmony default export */ __webpack_exports__["default"] = ({
    //mixins: [FormField, HandlesValidationErrors],
    data: function data() {
        return {
            settingTabs: [],
            localeSettings: []
        };
    },
    methods: {
        getToken: function getToken() {
            return document.head.querySelector("meta[name='csrf-token']").content;
        },
        uploadDone: function uploadDone(files) {
            if (files && Array.isArray(files) && files.length) {}
        },
        changeLangTab: function changeLangTab(tabIndex, itemIndex, locale) {
            this.settingTabs[tabIndex].items[itemIndex].currentLocale = locale;
        },
        save: function save(event) {
            var toaster = this.$toasted;

            event.preventDefault();
            window.axios.post('/nova-vendor/nova-settings-tool/save', this.settingTabs).then(function (response) {
                toaster.show(response.data, { type: 'success' });
            }).catch(function (error) {
                toaster.show(error.response.data, { type: 'error' });
            });
        },
        getSettingTabs: function getSettingTabs() {
            var _this = this;

            var toaster = this.$toasted;
            window.axios.get('/nova-vendor/nova-settings-tool/tabs').then(function (response) {
                _this.settingTabs = response.data;
                console.log(response.data);
            }).catch(function (error) {
                toaster.show(error, { type: 'error' });
            });
        },
        getLocaleSettings: function getLocaleSettings() {
            var _this2 = this;

            window.axios.get('/nova-vendor/nova-settings-tool/localeSettings').then(function (response) {
                _this2.localeSettings = response.data;
                console.log(_this2.localeSettings);
            }).catch(function (error) {
                console.log(error);
            });
        },
        resetSettings: function resetSettings() {
            var toaster = this.$toasted;
            window.axios.get('/nova-vendor/nova-settings-tool/reset').then(function (response) {
                toaster.show(response.data, { type: 'success' });
                window.location.reload(true);
            }).catch(function (error) {
                console.log(error);
            });
        },
        handleInput: function handleInput(event, field) {
            event.stopImmediatePropagation();
            if (event.target.composing) {
                return;
            }
            this.$set(field.translate ? field.value : field, field.translate ? field.currentLocale : 'value', event.target.value);
        }
    },
    created: function created() {
        this.getLocaleSettings();
    },
    mounted: function mounted() {
        this.getSettingTabs();
    },
    updated: function updated() {
        var firstTabRef = this.settingTabs[0].tab_name.split(' ').join('');
        this.$refs.settingTabs.selectTab('#' + firstTabRef, event);
    }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", { attrs: { action: "" }, on: { submit: _vm.save } }, [
    _c(
      "div",
      [
        _c(
          "div",
          { staticClass: "flex mb-6 items-center justify-between" },
          [
            _c("heading", { staticClass: "mb-6" }, [
              _vm._v("Nova Settings Tool")
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default btn-primary",
                attrs: { type: "submit" }
              },
              [_vm._v("Update Settings")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default btn-primary",
                attrs: { type: "button" },
                on: { click: _vm.resetSettings }
              },
              [_vm._v("Reset Settings To Default Values")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "tabs",
          { ref: "settingTabs" },
          _vm._l(_vm.settingTabs, function(tab, tabIndex) {
            return _c(
              "tab",
              {
                key: tabIndex,
                ref: tab.tab_name.split(" ").join(""),
                refInFor: true,
                attrs: {
                  name: tab.tab_name,
                  id: tab.tab_name.split(" ").join("")
                }
              },
              [
                _c(
                  "div",
                  _vm._l(tab.items, function(field, itemIndex) {
                    return _c(
                      "div",
                      {
                        key: field.key,
                        staticClass: "flex border-b border-40"
                      },
                      [
                        _c("div", { staticClass: "w-1/4 px-8 py-6" }, [
                          _c(
                            "label",
                            { staticClass: "inline-block text-80 h-9 pt-2" },
                            [_vm._v(_vm._s(field.label))]
                          ),
                          _vm._v(" "),
                          _c("p", {
                            staticClass: "text-sm leading-normal text-80 italic"
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            class:
                              field.type === "image"
                                ? "w-2/4 px-8 py-6"
                                : "w-3/4 px-8 py-6"
                          },
                          [
                            _vm._l(field.value, function(value, locale) {
                              return typeof field.translate !== "undefined" &&
                                field.translate === true
                                ? _c(
                                    "a",
                                    {
                                      key: "a-" + locale,
                                      staticClass:
                                        "inline-block font-bold cursor-pointer mr-2 animate-text-color select-none border-primary mb-4",
                                      class: {
                                        "text-60":
                                          locale !== field.currentLocale,
                                        "text-primary border-b-2":
                                          locale === field.currentLocale
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.changeLangTab(
                                            tabIndex,
                                            itemIndex,
                                            locale
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            _vm.localeSettings.locales[locale]
                                          ) +
                                          "\n                            "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            }),
                            _vm._v(" "),
                            field.type === "text" &&
                            (typeof field.multiline === "undefined" ||
                              field.multiline === false)
                              ? _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: field.translate
                                        ? field.value[field.currentLocale]
                                        : field.value,
                                      expression:
                                        "field.translate ? field.value[field.currentLocale] : field.value"
                                    }
                                  ],
                                  staticClass:
                                    "w-full form-control form-input form-input-bordered",
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: field.translate
                                      ? field.value[field.currentLocale]
                                      : field.value
                                  },
                                  on: {
                                    "!input": function($event) {
                                      _vm.handleInput($event, field)
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        field.translate
                                          ? field.value[field.currentLocale]
                                          : field,
                                        "value",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            field.type === "text" &&
                            (typeof field.multiline !== "undefined" &&
                              field.multiline === true)
                              ? _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: field.translate
                                        ? field.value[field.currentLocale]
                                        : field.value,
                                      expression:
                                        "field.translate ? field.value[field.currentLocale] : field.value"
                                    }
                                  ],
                                  staticClass:
                                    "w-full form-control form-input form-input-bordered min-h-textarea",
                                  domProps: {
                                    value: field.translate
                                      ? field.value[field.currentLocale]
                                      : field.value
                                  },
                                  on: {
                                    "!input": function($event) {
                                      _vm.handleInput($event, field)
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        field.translate
                                          ? field.value[field.currentLocale]
                                          : field,
                                        "value",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            field.type === "image"
                              ? _c("v-uploader", {
                                  attrs: {
                                    "upload-file-url":
                                      "/nova-vendor/nova-settings-tool/upload-file?_token=" +
                                      _vm.getToken(),
                                    "preview-img": field.value,
                                    "upload-file-obj-name": field.key,
                                    "image-max-height":
                                      typeof field.maxHeight !== "undefined"
                                        ? field.maxHeight
                                        : "",
                                    "image-min-height":
                                      typeof field.minHeight !== "undefined"
                                        ? field.minHeight
                                        : "",
                                    "image-max-width":
                                      typeof field.maxWidth !== "undefined"
                                        ? field.maxWidth
                                        : "",
                                    "image-min-width":
                                      typeof field.minWidth !== "undefined"
                                        ? field.minWidth
                                        : ""
                                  },
                                  on: { done: _vm.uploadDone }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            field.type === "boolean"
                              ? _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: field.value,
                                        expression: "field.value"
                                      }
                                    ],
                                    staticClass:
                                      "w-full form-control form-input form-input-bordered",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          field,
                                          "value",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      {
                                        attrs: { value: "1" },
                                        domProps: {
                                          selected: field.value === 1
                                        }
                                      },
                                      [_vm._v("Yes")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: { value: "0" },
                                        domProps: {
                                          selected: field.value === 0
                                        }
                                      },
                                      [_vm._v("No")]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            typeof field.help !== "undefined" &&
                            field.help.length
                              ? _c(
                                  "p",
                                  {
                                    staticClass: "text-grey-dark text-xs italic"
                                  },
                                  [_c("br"), _vm._v(" " + _vm._s(field.help))]
                                )
                              : _vm._e()
                          ],
                          2
                        )
                      ]
                    )
                  })
                )
              ]
            )
          }),
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ff5483", module.exports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);