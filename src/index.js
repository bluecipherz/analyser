/******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = __webpack_require__(2);
	
	var _index3 = __webpack_require__(3);
	
	var _main = __webpack_require__(4);
	
	var _flowManager = __webpack_require__(5);
	
	var _grid = __webpack_require__(6);
	
	var _portalLogin = __webpack_require__(7);
	
	var _dashboard = __webpack_require__(8);
	
	var _httpService = __webpack_require__(9);
	
	var _video = __webpack_require__(10);
	
	var _d = __webpack_require__(11);
	
	var _timeline = __webpack_require__(12);
	
	var _config = __webpack_require__(13);
	
	var _widget = __webpack_require__(14);
	
	var _grid2 = __webpack_require__(15);
	
	var _auth = __webpack_require__(16);
	
	var _helper = __webpack_require__(17);
	
	var _treedata = __webpack_require__(18);
	
	var _login = __webpack_require__(19);
	
	var _app = __webpack_require__(20);
	
	var _request = __webpack_require__(21);
	
	var _assetApi = __webpack_require__(22);
	
	var _groupApi = __webpack_require__(23);
	
	var _userApi = __webpack_require__(24);
	
	var _roleApi = __webpack_require__(25);
	
	var _helpertest = __webpack_require__(26);
	
	var _portalLogin2 = __webpack_require__(27);
	
	var _inDialog = __webpack_require__(28);
	
	var _in = __webpack_require__(29);
	
	var _dynamicController = __webpack_require__(30);
	
	var _setDom = __webpack_require__(31);
	
	/* global malarkey:false, moment:false */
	
	angular.module('management', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'mm.foundation', 'toastr']).config(_index.config).config(_index2.routerConfig)
	// .config(function($httpProvider) {
	//     $httpProvider.interceptors.push('authInterceptor');
	// })
	
	// have to fix above config
	
	.constant('moment', moment)
	// .constant('API_HOST', 'http://localhost:8000/api')
	.constant('API_HOST', 'http://api.blueciphers.com/api').constant('TOKEN_KEY', 'JWT_TOKEN_KEY').run(_index3.runBlock).service('gridService', _grid2.gridService).service('authService', _auth.authService).service('authInterceptor', _auth.authInterceptor).service('helperService', _helper.helperService).service('treeDataService', _treedata.treeDataService).service('loginService', _login.loginService).service('requestService', _request.requestService).service('assetAPIService', _assetApi.assetAPIService).service('groupAPIService', _groupApi.groupAPIService).service('userAPIService', _userApi.userAPIService).service('roleAPIService', _roleApi.roleAPIService).service('helperTestService', _helpertest.helperTestService).service('appConstants', _app.appConstants).service('$inDialog', _inDialog.$inDialog).service('portalLoginService', _portalLogin2.portalLoginService).service('http', _httpService.http).controller('MainController', _main.MainController).controller('FlowController', _flowManager.FlowController).controller('GridController', _grid.GridController).controller('DashboardController', _dashboard.DashboardController).controller('PortalLoginController', _portalLogin.PortalLoginController).directive('dynamicController', function () {
	    return new _dynamicController.dynamicController();
	}).directive('setDom', function () {
	    return new _setDom.setDom();
	}).directive('inDialog', function () {
	    return new _in.inDialog();
	});
	
	// Pure javascript Flow Manager widgets;
	flowManager.widget('widgetConnector', _widget.widgetConnector);
	flowManager.widget('videoPlayer', _video.videoPlayer);
	flowManager.widget('3dPlayer', _d.$3dPlayer);
	flowManager.widget('timeline', _timeline.timeline);
	flowManager.widget('configWidget', _config.configWidget);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	config.$inject = ["$logProvider", "toastrConfig"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider, toastrConfig) {
	  'ngInject';
	  // Enable log
	
	  $logProvider.debugEnabled(true);
	
	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';
	
	    $stateProvider.state('dashboard', {
	        url: '/',
	        templateUrl: 'app/portal/dashboard/dashboard.html',
	        controller: 'DashboardController',
	        controllerAs: 'vm'
	    }).state('portalLogin', {
	        url: '/portal-login',
	        templateUrl: 'app/portal/login/portal.login.html',
	        controller: 'PortalLoginController',
	        controllerAs: 'vm'
	    });
	
	    $urlRouterProvider.otherwise('/');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	runBlock.$inject = ["$rootScope", "$log", "$state", "$cookieStore"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.runBlock = runBlock;
	function runBlock($rootScope, $log, $state, $cookieStore) {
	    'ngInject';
	
	    $log.log("runBlock");
	    $rootScope.showLoginDialog = true;
	    //$rootScope.$emit('getData', {'login': true});
	
	    // $window.ga('create', 'UA-86820286-2', 'auto');
	    //
	    // // track pageview on state change
	    // $rootScope.$on('$stateChangeSuccess', function (event) {
	    //   $window.ga('send', 'pageview', $location.path());
	    // });
	
	
	    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
	
	        var isLogin = toState.name === "portalLogin";
	        if (isLogin) {
	            return; // no need to redirect
	        }
	
	        // now, redirect only not authenticated
	
	        var userInfo = isAuthed();
	
	        if (userInfo === false) {
	            e.preventDefault(); // stop current execution
	            $state.go('portalLogin'); // go to login
	        }
	    });
	
	    function isAuthed() {
	        if ($cookieStore.get('userData')) {
	            return true;
	        } else {
	            return false;
	        }
	    }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainController = exports.MainController = function () {
	  MainController.$inject = ["gridService"];
	  function MainController(gridService) {
	    'ngInject';
	
	    _classCallCheck(this, MainController);
	
	    this.awesomeThings = [];
	    this.classAnimation = '';
	    this.creationDate = 1486045471836;
	
	    this.testFunction(gridService);
	  }
	
	  _createClass(MainController, [{
	    key: 'testFunction',
	    value: function testFunction(NavTreeService) {
	      //console.log('running test function is awesome', NavTreeService.getData());
	    }
	  }]);
	
	  return MainController;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FlowController = exports.FlowController = ["gridService", "$scope", function FlowController(gridService, $scope) {
	    'ngInject';
	
	    _classCallCheck(this, FlowController);
	
	    console.log('flow controller');
	
	    var vm = this;
	    var rectWidth = 120;
	    var rectHeight = 35;
	    var defs;
	    var filter;
	    var feMerge;
	    var wData = gridService.getWidgetData();
	    var widgets = wData.widgets;
	    var widgetData = wData.widgetData;
	    var indexByTag = wData.indexByTag;
	    var tempX;
	    var tempY;
	    var dragged = false;
	    var disableDrag = false;
	    vm.defaultMethod = flowManager.getDefaultMethod();
	
	    vm.midH = 2000;
	    vm.midW = 2000;
	    vm.flowJSON = gridService.getFlow();
	    vm.selectedTab = 0;
	    vm.widgetSet = wData.widgetSet;
	    vm.mcPopupTabIndex = 0;
	    vm.flowLines = {};
	
	    vm.vis = d3.select('#fm-midpan').attr('width', vm.midW).attr('height', vm.midH).attr("viewBox", "0 0 " + vm.midW + " " + vm.midH).on("contextmenu", function (d) {
	        d3.event.preventDefault();
	    }).on("mouseup", svgMouseup);
	
	    function svgMouseup() {
	        deselectAll();
	    }
	
	    function deselectAll() {
	        vm.vis.selectAll('g').attr('class', 'flow-rect-main');
	        vm.selectedWidget = null;
	        vm.selectedFunction = null;
	        disableDrag = false;
	        if (!$scope.$$phase) {
	            $scope.$apply();
	        }
	    }
	
	    function dragEnd(d, i) {
	        if (dragged && !disableDrag) {
	            // Saving widgetData into localstorage
	            var tagName = d3.select(this).attr("tag-name");
	            var widget = getMyWidget(tagName);
	            widget.rectSettings.x = tempX;
	            widget.rectSettings.y = tempY;
	            var data = JSON.stringify(widgetData);
	            localStorage.setItem('widgetData', data);
	            refreshLines();
	            dragged = false;
	        }
	    }
	
	    function dragging(d, i) {
	        if (!disableDrag) {
	            tempX = d3.event.x;
	            tempY = d3.event.y;
	            d3.select(this).attr("transform", function (d, i) {
	                return "translate(" + [d3.event.x, d3.event.y] + ")";
	            });
	            var tagName = d3.select(this).attr("tag-name");
	            for (var idx in vm.flowLines) {
	                if (vm.flowLines[idx].from == tagName || vm.flowLines[idx].to == tagName) {
	                    drawLine(vm.flowLines[idx]);
	                }
	            }
	            dragged = true;
	        }
	    }
	
	    vm.removeFlow = function (from, to, id) {
	        if (vm.flowJSON[from][to]) {
	            for (var idx in vm.flowJSON[from][to]) {
	                if (vm.flowJSON[from][to][idx].id == id) {
	                    vm.flowJSON[from][to].splice(idx);
	                    updateFlow();
	                }
	            }
	        }
	    };
	
	    vm.selectFunction = function (output) {
	
	        disableDrag = true;
	        if (output.params == "method") {
	            output.params = vm.selectedWidget.settings.runParams;
	        }
	
	        vm.selectedFunction = angular.copy(output);
	        vm.tempFuncSelObject = {};
	
	        /* Checking for the connectable function */
	        for (var idx in widgets) {
	            var widget = widgetData[idx];
	            if (widget.id != vm.selectedWidget.id) {
	                var tempWid = { id: widget.id, name: widget.name, tag: widget.tag, connectable: false, inputs: [] };
	                for (var jdx in widget.methods) {
	                    var input = angular.copy(widget.methods[jdx]);
	                    if (input.input) {
	                        var tInpT = angular.copy(input.params);
	                        var tSelT = angular.copy(vm.selectedFunction.params);
	                        if (tSelT && tInpT) {
	                            var tCount = tInpT.length;
	                            var tCounter = 0;
	                            for (var tJdx in tInpT) {
	                                for (var tIdx in tSelT) {
	                                    if (tSelT[tIdx] == tInpT[tJdx]) {
	                                        tCounter++;
	                                    }
	                                }
	                            }
	                            if (tCounter >= tCount) {
	                                var found = isMethodFlowDefined(vm.selectedWidget.tag, widget.tag, vm.selectedFunction.name, input.name);
	                                if (!found) {
	                                    tempWid.connectable = true;
	                                    // console.log(tempWid.tag)
	                                    tempWid.inputs.push(input);
	                                }
	                            }
	                        }
	                    }
	                }
	                vm.tempFuncSelObject[tempWid.tag] = tempWid;
	                vm.methodsToShow = tempWid.inputs;
	            }
	        }
	        for (var idx in vm.tempFuncSelObject) {
	            if (!vm.tempFuncSelObject[idx].connectable) {
	                var tRect = getD3Rect(vm.tempFuncSelObject[idx].tag);
	                var tempClass = tRect.attr('class');
	                tRect.attr('class', tempClass + ' disabled');
	            }
	        }
	    };
	
	    vm.tempInput = {};
	    vm.tempSelectedInput = {};
	
	    vm.removeInput = function (method) {
	        for (var idx in vm.selectedWidget.methods) {
	            if (vm.selectedWidget.methods[idx].id == method.id) {
	                vm.selectedWidget.methods.splice(idx, 1);
	                if (vm.tempSelectedInput.id == method.id) {
	                    vm.tempSelectedInput = {};
	                }
	            }
	        }
	    };
	
	    vm.removeParam = function (param) {
	        vm.tempSelectedInput.params.splice(vm.tempSelectedInput.params.indexOf(param), 1);
	    };
	
	    vm.addParam = function (event) {
	        if (event == null || event.keyCode == 32) {
	            if (event != null) event.preventDefault();
	            if (vm.tempParam != null) vm.tempParam.trim();
	            if (vm.tempParam != null && vm.tempParam != '') {
	                var found = false;
	                for (var idx in vm.tempSelectedInput.params) {
	                    if (vm.tempSelectedInput.params[idx] == vm.tempParam) {
	                        found = true;
	                    }
	                }
	
	                if (!found) {
	                    if (!vm.tempSelectedInput.params) vm.tempSelectedInput.params = [];
	                    vm.tempSelectedInput.params.push(vm.tempParam);
	                    vm.tempParam = '';
	                }
	            }
	        }
	    };
	
	    vm.focusInput = function () {
	        $('#paramInput').focus();
	    };
	
	    vm.addInput = function () {
	        var method = angular.copy(vm.tempInput);
	        vm.tempInput = {};
	        method.id = vm.selectedWidget.methods.length;
	        vm.selectedWidget.methods.push(method);
	    };
	
	    $scope.aceOption = {
	        mode: 'javascript',
	        onLoad: function onLoad(editor) {
	            // defaults
	            // editor.setTheme("ace/theme/monokai");
	            // options
	            editor.setOptions({
	                showGutter: true,
	                showPrintMargin: false
	            });
	        }
	    };
	
	    vm.createMethod = function () {
	        $('#fm-method-create').show();
	    };
	
	    vm.saveMethodCreatePopup = function () {
	        localStorage.setItem('widgetData', JSON.stringify(widgetData));
	        $('#fm-method-create').hide();
	        //MAKE API CALL TO SAVE DATA
	    };
	
	    vm.closeMethodCreatePopup = function () {
	        $('#fm-method-create').hide();
	    };
	
	    vm.editMethod = function (method) {
	        console.log(method);
	    };
	
	    vm.cancelAssigning = function () {
	        $('#fm-method-popCont').hide();
	    };
	
	    vm.assignFlow = function (method) {
	        $('#fm-method-popCont').hide();
	        vm.tempFlowObject = {};
	        vm.tempFlowObject.from = angular.copy(vm.selectedWidget);
	        vm.tempFlowObject.to = angular.copy(vm.tempSelectedWidget);
	        vm.tempFlowObject.fromMethod = angular.copy(vm.selectedFunction);
	        vm.tempFlowObject.toMethod = method;
	        vm.selectedFunction = null;
	        vm.tempSelectedWidget = null;
	        vm.selectedWidget = null;
	        genFlow(vm.tempFlowObject);
	        deselectAll();
	    };
	
	    function genFlow(data) {
	        vm.flowJSON = gridService.getFlow();
	        console.log(vm.flowJSON);
	        if (!vm.flowJSON) {
	            vm.flowJSON = {};
	            console.log('im here');
	        }
	        if (!(data.from.tag in vm.flowJSON)) vm.flowJSON[data.from.tag] = {};
	        if (!vm.flowJSON[data.from.tag][data.to.tag]) {
	            vm.flowJSON[data.from.tag][data.to.tag] = [];
	        }
	        var flowFound = isMethodFlowDefined(data.from.tag, data.to.tag, data.fromMethod.name, data.toMethod.name);
	        if (!flowFound) {
	            var index = vm.flowJSON[data.from.tag][data.to.tag].length;
	            vm.flowJSON[data.from.tag][data.to.tag].push({
	                id: index,
	                from: data.fromMethod.name,
	                to: data.toMethod.name
	            });
	            updateFlow();
	        } else {
	            console.log('[FLOW MANAGER] Multiple instance of same flow is not allowed');
	        }
	    }
	
	    function updateFlow() {
	        localStorage.setItem('flowJSON', JSON.stringify(vm.flowJSON));
	        refreshLines();
	        flowManager.refreshFlow(gridService.getFlow());
	    }
	
	    function isMethodFlowDefined(from, to, fm, tm) {
	        var found = false;
	        if (!vm.flowJSON) return false;
	        if (!vm.flowJSON[from]) return false;
	        if (!vm.flowJSON[from][to]) return false;
	        for (var idx in vm.flowJSON[from][to]) {
	            var tempObj = vm.flowJSON[from][to][idx];
	            if (tempObj.from == fm && tempObj.to == tm) {
	                found = true;
	            }
	        }
	        return found;
	    }
	
	    function dragStart(d, i) {
	        if (!vm.selectedFunction) {
	            var tagName = d3.select(this).attr("tag-name");
	            vm.selectedWidget = widgets[indexByTag[tagName]];
	            vm.vis.selectAll('g').attr('class', 'flow-rect-main');
	            d3.select(this).attr("class", 'flow-rect-main active');
	            $scope.$apply();
	        } else {
	            var tagName = d3.select(this).attr("tag-name");
	            vm.tempSelectedWidget = getMyWidget(tagName);
	
	            var connectable = false;
	            for (var idx in vm.tempFuncSelObject) {
	                if (vm.tempFuncSelObject[idx].connectable == true && vm.tempFuncSelObject[idx].tag == vm.tempSelectedWidget.tag) {
	                    connectable = true;
	                }
	            }
	            if (connectable) {
	                $scope.$apply();
	                showMethodPopup(d3.event);
	            }
	        }
	    }
	
	    function showMethodPopup(e) {
	        var left = e.pageX;
	        var top = e.pageY;
	        var bottom = 'auto';
	        var right = 'auto';
	        if (left > $(window).width() / 2) {
	            right = $(window).width() - left;
	            left = 'auto';
	        }
	        if (top > $(window).height() / 2) {
	            bottom = $(window).height() - top;
	            top = 'auto';
	        }
	        $('#fm-method-pop').css({ left: left, top: top, bottom: bottom, right: right });
	        $('#fm-method-popCont').show();
	    }
	
	    function getD3Rect(idx) {
	        return d3.select(document.getElementById('widrect-' + idx));
	    }
	
	    function getMyWidget(tagName) {
	        return widgetData[indexByTag[tagName]];
	    }
	
	    function getMyName(name) {
	        return name;
	    }
	
	    function draw() {
	        d3.selectAll("#fm-midpan > *").remove();
	
	        defs = vm.vis.append("defs");
	        filter = defs.append("filter").attr("id", "drop-shadow").attr("height", "150%");
	        filter.append("feGaussianBlur").attr("in", "SourceAlpha").attr("stdDeviation", 2).attr("result", "offsetblur");
	        filter.append("feComponentTransfer").append("feFuncA").attr('type', 'linear').attr('slope', '0.3');
	        filter.append("feOffset").attr("in", "blur").attr("dx", 1).attr("dy", 1).attr("result", "offsetBlur");
	
	        feMerge = filter.append("feMerge");
	        feMerge.append("feMergeNode").attr("in", "offsetBlur");
	        feMerge.append("feMergeNode").attr("in", "SourceGraphic");
	
	        var rectDrag = d3.drag().subject(function () {
	            var t = d3.select(this);
	            var tr = getTranslation(t.attr("transform"));
	            return {
	                x: t.attr("x") + tr[0],
	                y: t.attr("y") + tr[1]
	            };
	        }).on("drag", dragging).on("end", dragEnd);
	
	        for (var idx in widgets) {
	
	            if (!widgetData[idx].rectSettings || !widgetData[idx].rectSettings.x) {
	                if (!widgetData[idx].rectSettings) widgetData[idx].rectSettings = {};
	                widgetData[idx].rectSettings.x = 0;
	                widgetData[idx].rectSettings.y = 0;
	            }
	
	            widgets[idx].rect = vm.vis.append("g").attr("transform", "translate(" + widgetData[idx].rectSettings.x + "," + widgetData[idx].rectSettings.y + ")").attr("tag-name", widgets[idx].tag).attr('class', 'flow-rect-main').attr('id', 'widrect-' + widgets[idx].tag).on("mousedown", dragStart);
	
	            if (gridService.isChrome) widgets[idx].rect.style("filter", "url(#drop-shadow)");
	
	            widgets[idx].rect.append("rect").attr("width", rectHeight).attr("height", rectHeight).attr('fill', widgets[idx].color).attr('font-size', '70%').attr('font-family', 'gotham').attr('class', 'flow-rect-dragger');
	            widgets[idx].rect.append("rect").attr("width", rectWidth).attr("height", rectHeight).attr('fill', '#fff').attr('x', rectHeight).attr('font-size', '70%').attr('font-family', 'gotham');
	            widgets[idx].rect.append("text").attr('font-family', 'gotham').attr('font-size', '90%').attr('fill', '#555').attr('line-height', rectHeight).attr('x', rectHeight + 10).attr('y', 22).attr('z-index', 110).text(getMyName(widgetData[idx].tag));
	            widgets[idx].rect.append("rect").attr("width", 10).attr("height", rectHeight).attr("x", rectWidth + rectHeight).attr('fill', '#999').attr('font-size', '70%').attr('font-family', 'gotham').attr('class', 'flow-rect-dragger');
	            widgets[idx].rect.append("circle").attr("r", 6).attr('stroke-width', 1).attr('stroke', '#666').attr("cx", rectWidth + rectHeight + 10).attr('cy', rectHeight / 2).attr('fill', '#ddd');
	            widgets[idx].rect.append("circle").attr("r", 6).attr('stroke-width', 1).attr('stroke', '#666').attr('class', 'fm-node-first-circle').attr("cx", 0).attr('cy', rectHeight / 2).attr('fill', '#ddd');
	            widgets[idx].rect.call(rectDrag);
	        }
	        refreshLines();
	    }
	
	    function refreshLines() {
	        var currFlows = [];
	        for (var idx in vm.flowLines) {
	            vm.flowLines[idx].line.remove();
	            delete vm.flowLines[idx];
	        }
	        for (var fromTag in vm.flowJSON) {
	            if (widgets[indexByTag[fromTag]]) {
	                var fromRect = widgets[indexByTag[fromTag]].rect;
	                for (var toTag in vm.flowJSON[fromTag]) {
	                    if (vm.flowJSON[fromTag][toTag].length) {
	                        var toRect = widgets[indexByTag[toTag]].rect;
	                        var fromCoords = getTranslation(fromRect.attr("transform"));
	                        var toCoords = getTranslation(toRect.attr("transform"));
	                        var tempFLO = {
	                            fromCoords: fromCoords,
	                            toCoords: toCoords,
	                            from: fromTag,
	                            to: toTag
	                        };
	                        drawLine(tempFLO);
	                        if (!(fromTag + toTag in vm.flowLines)) {
	                            vm.flowLines[fromTag + toTag] = tempFLO;
	                        }
	                        currFlows.push(fromTag + toTag);
	                    }
	                }
	            }
	        }
	        d3.selectAll("#fm-midpan > *").sort(function (a, b) {
	            // select the parent and sort the path's
	            return 1;
	        });
	    }
	
	    function getD(fromCoords, toCoords) {
	        fromCoords[1] += 17;
	        fromCoords[0] += 165;
	        toCoords[1] += 17;
	        return [[fromCoords[0], fromCoords[1]], [fromCoords[0] + 5, fromCoords[1]], [fromCoords[0] + 25, fromCoords[1]], [toCoords[0] - 25, toCoords[1]], [toCoords[0] - 5, toCoords[1]], [toCoords[0], toCoords[1]]];
	    }
	
	    var valueline = d3.line().curve(d3.curveBasis).x(function (d) {
	        return d[0];
	    }).y(function (d) {
	        return d[1];
	    });
	
	    function drawLine(data) {
	        var fromRect = widgets[indexByTag[data.from]].rect;
	        var toRect = widgets[indexByTag[data.to]].rect;
	        var fromCoords = getTranslation(fromRect.attr("transform"));
	        var toCoords = getTranslation(toRect.attr("transform"));
	        var d = getD(fromCoords, toCoords);
	        data.fromCoords = fromCoords;
	        data.toCoords = toCoords;
	
	        if (data.line == null) {
	            data.line = vm.vis.append('path').attr('d', valueline(d)).attr('stroke', '#777').attr('stroke-width', 4).attr('fill', 'none').attr('z-index', -1);
	        } else {
	            data.line.attr('d', valueline(d));
	        }
	    }
	
	    function getTranslation(transform) {
	        var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
	        g.setAttributeNS(null, "transform", transform);
	        var matrix = g.transform.baseVal.consolidate().matrix;
	        return [matrix.e, matrix.f];
	    }
	
	    draw();
	
	    /*
	     *
	     *   Code for Left pan
	     *
	     * */
	
	    vm.grabWidget = function (event, data) {
	        var widDom = $(event.currentTarget);
	        vm.widDom = widDom.clone();
	        vm.widDom.data = data;
	        vm.widgetGrabbed = true;
	        var pageX = widDom.offset().left;
	        var pageY = widDom.offset().top;
	        vm.widDom.leftOff = event.pageX - pageX;
	        vm.widDom.topOff = event.pageY - pageY;
	        if (vm.widDom) {
	            vm.widDom.addClass('dummy');
	            vm.widDom.css({
	                left: pageX,
	                top: pageY,
	                width: widDom.width(),
	                margin: 0
	            });
	            $('#fm-leftpan').append(vm.widDom);
	        }
	    };
	
	    $(window).mouseup(function () {
	        vm.dropWidget();
	    });
	    $(window).mousemove(function (event) {
	        vm.draggingWidget(event);
	    });
	
	    vm.dropWidget = function () {
	        if (vm.widDom && vm.widgetGrabbed) {
	            vm.widgetGrabbed = false;
	            var tempData = {
	                offset: vm.widDom.offset(),
	                width: vm.widDom.width(),
	                height: vm.widDom.height(),
	                data: vm.widDom.data
	            };
	            makeNewWidget(tempData);
	            vm.widDom.remove();
	        }
	    };
	
	    vm.draggingWidget = function (event) {
	        if (vm.widgetGrabbed) {
	            vm.widDom.css({
	                left: event.pageX - vm.widDom.leftOff,
	                top: event.pageY - vm.widDom.topOff
	            });
	        }
	    };
	
	    function updateScopeData(wDataResp) {
	
	        wData = wDataResp;
	        widgetData = wData.widgetData;
	        widgets = wData.widgets;
	        indexByTag = wData.indexByTag;
	    }
	
	    function makeNewWidget(params) {
	        var midPanOff = $('.fm-midpan').offset();
	        var midWidth = $('.fm-midpan').width();
	        var midHeight = $('.fm-midpan').height();
	        var data = angular.copy(params.data);
	        if (params.offset.left > midPanOff.left && params.offset.top > midPanOff.top && params.offset.left + params.width / 2 < midPanOff.left + midWidth && params.offset.top + params.height / 2 < midPanOff.top + midHeight) {
	            //making data for new widget
	            data.tag = generateIntanceId(data);
	            data.id = generateUniqueId();
	            data.rectSettings = {};
	            data.rectSettings.y = params.offset.top - $('#fm-midpan').offset().top;
	            data.rectSettings.x = params.offset.left - $('#fm-midpan').offset().left;
	            gridService.updateWidgetData(data, function (resp) {
	                updateScopeData(resp);
	                draw();
	            });
	        }
	    }
	
	    function generateUniqueId() {
	        var uid;
	        while (true) {
	            uid = getRandomInt(1, 100000);
	            var found = false;
	            for (var idx in widgetData) {
	                if (widgetData[idx].id == uid) {
	                    found = true;
	                }
	            }
	            if (!found) {
	                break;
	            }
	        }
	        return uid;
	    }
	
	    function getRandomInt(min, max) {
	        return Math.floor(Math.random() * (max - min + 1)) + min;
	    }
	
	    function generateIntanceId(data) {
	        return data.name + (parseInt(widgetData.length) + 1);
	    }
	}];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GridController = exports.GridController = ["gridService", "$scope", "loginService", function GridController(gridService, $scope, loginService) {
	    'ngInject';
	
	    _classCallCheck(this, GridController);
	
	    console.log('Grid Controller');
	
	    var vm = this;
	
	    vm.widgets = [];
	    vm.gridMode = 0; // 0 = normal Mode , 1 = edit Mode
	    vm.layoutOrder = null;
	    vm.widgetData = gridService.getWidgetData();
	
	    vm.switchMode = function (mode) {
	        vm.gridMode = mode;
	        if (mode == 0) {
	            for (var idx in vm.widgets) {
	                vm.widgets[idx].draggie.disable();
	            }
	        } else if (mode == 1) {
	            for (var idx in vm.widgets) {
	                vm.widgets[idx].draggie.enable();
	            }
	        }
	    };
	
	    var switchModeInter = setInterval(function () {
	        if (vm.widgets[0] && vm.widgets[0].draggie) {
	            clearInterval(switchModeInter);
	            vm.switchMode(0);
	        }
	    }, 100);
	
	    var oi_timeout = null;
	
	    function orderItems() {
	        var itemElems = $($grid.packery('getItemElements'));
	        vm.layoutOrder = [];
	        $(itemElems).each(function (i, itemElem) {
	            var id = parseInt($(itemElem).attr('widget-id'));
	            var tag = $(itemElem).attr('widget-tag');
	            vm.layoutOrder[i] = { position: id };
	        });
	
	        if (oi_timeout) clearTimeout(oi_timeout);
	        oi_timeout = setTimeout(function () {
	            localStorage.setItem('layoutOrder', JSON.stringify(vm.layoutOrder));
	        }, 1000);
	    };
	
	    function getWidgets() {
	        var callback = function callback(layoutOrder) {
	            vm.layoutOrder = layoutOrder;
	            var widList = [];
	            for (var idx in vm.widgetData.widgets) {
	                widList.push(vm.widgetData.widgets[idx].tag);
	            }
	            for (var idx in vm.layoutOrder) {
	                for (var jdx in vm.widgetData.widgets) {
	                    if (vm.widgetData.widgets[jdx].id == vm.layoutOrder[idx].position) {
	                        vm.widgets.push(vm.widgetData.widgets[jdx]);
	                        widList.splice(widList.indexOf(vm.widgetData.widgets[jdx].tag), 1);
	                    }
	                }
	            }
	            for (var idx in widList) {
	                var tempObj = angular.copy(vm.widgetData.widgets[vm.widgetData.indexByTag[widList[idx]]]);
	                vm.widgets.push(tempObj);
	            }
	            startPackery();
	        };
	        gridService.getLayoutOrder(callback);
	    }
	
	    getWidgets();
	
	    function setCSSClass(cols, u, v) {
	        var styleString = '';
	        for (var idx = 1; idx <= cols; idx++) {
	            styleString += '.gi-w-' + idx + '{ width: ' + (u * idx - 0) + 'px } ' + '.gi-vh-' + idx + '{ height: ' + v * idx + 'px } ' + '.gi-h-' + idx + '{ height: ' + u * idx + 'px } ';
	        }
	        var style = document.createElement('style');
	        style.type = 'text/css';
	        style.innerHTML = styleString;
	        document.getElementsByTagName('head')[0].appendChild(style);
	    }
	
	    function startPackery() {
	        var packeryInter = setInterval(function () {
	            if ($('.grid > div').length >= vm.widgets.length) {
	                initPackery();
	                clearInterval(packeryInter);
	            }
	        }, 200);
	    }
	
	    var $grid;
	
	    function initPackery() {
	        var cols = 24;
	        vm.columnWidth = parseInt(($(window).width() - 0) / cols);
	        vm.columnHeight = parseInt($(window).height() / cols);
	        setCSSClass(cols, vm.columnWidth, vm.columnHeight);
	
	        $grid = $('.grid').packery({
	            itemSelector: '.grid-item',
	            columnWidth: vm.columnWidth
	        });
	        var counter = 0;
	
	        $grid.find('.grid-item').each(function (i, gridItem) {
	            var draggie = new Draggabilly(gridItem);
	            for (var idx = 0; idx < vm.widgets.length; idx++) {
	                var wid = parseInt($(gridItem).attr('widget-id'));
	                if (vm.widgets[idx].id == wid) {
	                    counter++;
	                    vm.widgets[idx].draggie = draggie;
	                    $grid.packery('bindDraggabillyEvents', vm.widgets[idx].draggie);
	                }
	            }
	        });
	
	        $grid.packery('on', 'layoutComplete', orderItems);
	        $grid.packery('on', 'dragItemPositioned', orderItems);
	    }
	}];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 4/28/2017.
	 */
	var PortalLoginController = exports.PortalLoginController = ["portalLoginService", "$state", function PortalLoginController(portalLoginService, $state) {
	    'ngInject';
	
	    _classCallCheck(this, PortalLoginController);
	
	    var vm = this;
	
	    vm.login = function () {
	        vm.error = '';
	        vm.fetching = true;
	        portalLoginService.login(vm.username, vm.password, function (resp) {
	            $state.go('dashboard');
	            vm.fetching = false;
	        }, function (resp) {
	            vm.fetching = false;
	            vm.error = 'Invalid Credentials';
	        });
	    };
	}];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 4/28/2017.
	 */
	var DashboardController = exports.DashboardController = ["portalLoginService", "$cookieStore", "API_HOST", "$resource", function DashboardController(portalLoginService, $cookieStore, API_HOST, $resource) {
	    'ngInject';
	
	    _classCallCheck(this, DashboardController);
	
	    var vm = this;
	
	    vm.state = {};
	    vm.user = $cookieStore.get('userData');
	
	    function getAPPList() {
	
	        if (!vm.user) return;
	
	        var appList = portalLoginService.wrapActions($resource(API_HOST + '/getapplist'), ['save']);
	
	        appList.save({ user_id: 6 }).$promise.then(function (results) {
	            vm.productList = processProductList(results.products);
	        });
	    }
	
	    function processProductList(list) {
	        for (var idx in list) {
	            list[idx].debugging = parseInt(list[idx].debugging);
	        }
	        return list;
	    }
	
	    function syncAPIList() {
	
	        if (!vm.user) return;
	
	        var appList = portalLoginService.wrapActions($resource(API_HOST + '/getapicalls'), ['save']);
	
	        appList.save({ product_id: vm.state.product.id }).$promise.then(function (results) {
	            vm.apicalls = results.apicalls;
	            for (var idx in vm.apicalls) {
	                var tempList = vm.apicalls[idx].api.split('/');
	                vm.apicalls[idx].apiEndpoint = tempList[tempList.length - 1];
	                vm.apicalls[idx].apiEndpoint = vm.apicalls[idx].apiEndpoint.split('?');
	                vm.apicalls[idx].apiEndpoint = vm.apicalls[idx].apiEndpoint[0];
	                vm.apicalls[idx].timestamp = getTimeFromString(vm.apicalls[idx].created_at);
	            }
	        });
	    }
	
	    function getTimeFromString(str) {
	        return getCurrentTime(moment(str).unix() * 1000);
	    }
	
	    var minute = 1000 * 60;
	    var hour = minute * 60;
	    var shiftHours = 5;
	    var shiftMinutes = 30;
	
	    function getCurrentTime(timestamp) {
	        return timestamp + (shiftHours * hour + shiftMinutes * minute);
	    }
	
	    vm.selectAPICall = function (call) {
	        vm.state.apicall = call;
	        var json;
	        var str;
	        try {
	            json = JSON.parse(vm.state.apicall.parameters);
	            str = JSON.stringify(json, undefined, 4);
	        } catch (e) {
	            str = vm.state.apicall.parameters;
	        }
	
	        output(syntaxHighlight(str));
	    };
	
	    vm.syncAPICalls = function () {
	        syncAPIList();
	    };
	
	    vm.selectProduct = function (item) {
	        vm.state.product = item;
	    };
	
	    vm.changeMode = function (item) {
	
	        var appList = portalLoginService.wrapActions($resource(API_HOST + '/changedebuggingmode'), ['save']);
	
	        var deb = !vm.state.product.debugging ? 1 : 0;
	
	        appList.save({ id: vm.state.product.id, debugging: deb }).$promise.then(function (results) {
	            vm.state.product = results.product;
	            vm.productList = results.products;
	        });
	    };
	
	    getAPPList();
	
	    function output(inp) {
	        $('.dbmcd-container pre').html(inp);
	    }
	
	    function syntaxHighlight(json) {
	        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
	            var cls = 'number';
	            if (/^"/.test(match)) {
	                if (/:$/.test(match)) {
	                    cls = 'key';
	                } else {
	                    cls = 'string';
	                }
	            } else if (/true|false/.test(match)) {
	                cls = 'boolean';
	            } else if (/null/.test(match)) {
	                cls = 'null';
	            }
	            return '<span class="' + cls + '">' + match + '</span>';
	        });
	    }
	}];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 4/28/2017.
	 */
	var http = exports.http = ["$resource", "API_HOST", "$log", "$q", "portalLoginService", function http($resource, API_HOST, $log, $q, portalLoginService) {
	    'ngInject';
	
	    _classCallCheck(this, http);
	
	    var vm = this;
	
	    vm.post = function (url, body) {
	        var req = portalLoginService.wrapActions($resource(API_HOST + url), ['save']);
	
	        return req.save(body).$promise.then(vm.handleResponse, vm.handleFailure);
	    };
	
	    vm.handleResponse = function (resp) {
	        //$log.log("handleResponse");
	        if (resp.data) {
	            resp = resp.data;
	        }
	        return $q.resolve(resp);
	    };
	
	    vm.handleFailure = function (resp) {
	        //$inError.add(resp);
	        $log.log("handleFailure ", resp);
	        return $q.reject(resp);
	    };
	}];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var videoPlayerController = function videoPlayerController(tag) {
	    _classCallCheck(this, videoPlayerController);
	
	    var vm = this;
	
	    flowManager.initWidget(tag, function (tag) {
	        init(tag);
	    });
	
	    vm.processInput = function (tag, data) {};
	
	    function init(tag) {
	        vm.tag = tag.tag_id;
	    }
	};
	
	var videoPlayer = {
	    controller: videoPlayerController,
	    view: 'app/widgets/common/videoPlayer/video.player.html',
	    methods: [
	        // {id:0, name:'setData',output:true, input:true, params : ['asset']},
	    ],
	    color: '#cc2222',
	    settings: { vh: 20, w: 9 }
	};
	
	exports.videoPlayer = videoPlayer;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $3dPlayerController = function $3dPlayerController(tag, $scope) {
	    _classCallCheck(this, $3dPlayerController);
	
	    var vm = this;
	
	    /*
	    *
	    * Flow Manager Functions
	    *
	    * */
	
	    vm.processInput = function (tag, data) {
	        if (tag == 'setFrame') {
	            updateFrame(data);
	        }
	    };
	
	    vm.frameData = {};
	
	    function updateFrame(data) {
	        if ('cameraPosition' in data) {
	            vm.frameData.cameraPosition = data.cameraPosition;
	        }
	    }
	
	    /*
	    *
	    * Variable Initialization
	    *
	    * */
	
	    vm.modes = {
	        'MANUAL': 'MANUAL',
	        'AUTO': 'AUTO'
	    };
	
	    vm.tools = {
	        'MOVE': 'MOVE',
	        'CUTVIEW': 'CUTVIEW'
	    };
	
	    vm.axes = {
	        X: 'X',
	        Y: 'Y',
	        Z: 'Z'
	    };
	
	    vm.controls = {
	        mode: vm.modes.AUTO,
	        tool: {
	            enabled: false,
	            current: vm.tools['MOVE']
	        },
	        cutview: {
	            planes: [],
	            axis: vm.axes['X']
	        }
	    };
	
	    /*
	    *
	    *  ThreeJS
	    *
	    * */
	
	    var renderer,
	        camera,
	        loader,
	        viewportHeight,
	        viewportWidth,
	        scene,
	        viewportId = '3dPlayer',
	        geoMesh,
	        cameraControls,
	        stats;
	
	    function initThree() {
	        var threeInter = setInterval(function () {
	            if ($('#' + viewportId).length > 0 && $('#' + viewportId).height() > 150) {
	                viewportHeight = $('#' + viewportId).height();
	                viewportWidth = $('#' + viewportId).width();
	                if (viewportHeight > 0 && viewportWidth > 0) {
	                    init3();
	                    clearInterval(threeInter);
	                }
	            }
	        }, 20);
	    }
	
	    function init3() {
	        renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
	        renderer.setSize(viewportWidth, viewportHeight);
	        // renderer.setClearColor( 0x777777, 0 ); // the default
	        document.getElementById(viewportId).appendChild(renderer.domElement);
	
	        camera = new THREE.PerspectiveCamera(45, viewportWidth / viewportHeight, 0.1, 500);
	        camera.position.set(2.5, 2.5, 2.5);
	
	        loader = new THREE.JSONLoader();
	        scene = new THREE.Scene();
	
	        cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
	        cameraControls.addEventListener('change', render); // remove when using animation loop
	        cameraControls.enabled = false;
	
	        // enable animation loop when using damping or autorotation
	        // cameraControls.enableDamping = true;
	        // cameraControls.dampingFactor = 0.25;
	        // cameraControls.enableZoom = false;
	
	        var material = new THREE.MeshPhongMaterial({
	            // map : texture,
	            color: 0x883333,
	            vertexColors: THREE.VertexColors,
	            specular: 0x555555,
	            side: THREE.DoubleSide,
	            shininess: 100
	        });
	
	        loader.load('app/models/neuron.js', function (geo, mat) {
	            mat[0].side = THREE.DoubleSide;
	            console.log(mat);
	            geoMesh = new THREE.Mesh(geo, material);
	            vm.servoBody = geoMesh;
	            camera.lookAt(geoMesh.position);
	            animate();
	            scene.add(geoMesh);
	        });
	
	        var light = new THREE.AmbientLight('#fff'); // soft white light
	        scene.add(light);
	        var directionalLight = new THREE.DirectionalLight(0xffffff);
	        directionalLight.position.set(-3, 20, 100).normalize();
	        scene.add(directionalLight);
	
	        stats = new Stats();
	        document.getElementById('configWidget').appendChild(stats.dom);
	
	        renderer.render(scene, camera);
	
	        vm.controls.cutview.plane = new THREE.Plane(new THREE.Vector3(0, 0, 0), 0.1);
	        vm.controls.cutview.plane.normal.x = -1;
	        renderer.clippingPlanes = vm.controls.cutview.planes;
	
	        vm.controls.cutview.markerMaterial = new THREE.MeshBasicMaterial({ transparent: true, wireframe: true, color: 0xff0000, opacity: 0 });
	        vm.controls.cutview.marker = new THREE.Mesh(new THREE.PlaneBufferGeometry(3, 3, 2, 2), vm.controls.cutview.markerMaterial);
	
	        var control = new THREE.TransformControls(camera, renderer.domElement);
	        control.addEventListener('change', render);
	        control.attach(vm.controls.cutview.marker);
	
	        scene.add(vm.controls.cutview.marker);
	        // scene.add( control );
	
	
	        vm.changeMode('MANUAL');
	        vm.changeTool('MOVE');
	        vm.changeCutViewAxis('X');
	        applyScope();
	    }
	
	    function animate() {
	        vm.servoAnimId = requestAnimationFrame(animate);
	        render();
	    }
	
	    function render() {
	        processFrame();
	        renderer.render(scene, camera);
	    }
	
	    function processFrame() {
	        if (vm.controls.mode == vm.modes.AUTO) {
	            animateVectors(camera.position, vm.frameData.cameraPosition, 0.2);
	            camera.lookAt(geoMesh.position);
	        } else {}
	        stats.update();
	    }
	
	    var dimensions = ['x', 'y', 'z'];
	    var diDiff = 0;
	
	    function animateVectors(v1, v2, max) {
	        if (!v1 || !v2) return;
	        for (var axis in dimensions) {
	            diDiff = v1[dimensions[axis]] - v2[dimensions[axis]];
	            if (diDiff > 0) {
	                v1[dimensions[axis]] -= Math.min(max, diDiff / 10);
	            } else if (diDiff < 0) {
	                v1[dimensions[axis]] += Math.min(max, -1 * diDiff / 10);
	            }
	        }
	    }
	
	    /*
	    *
	    *  Controller Functions
	    *
	    * */
	
	    vm.changeMode = function (mode) {
	        vm.controls.mode = vm.modes[mode];
	        if (vm.modes[mode] == vm.modes['AUTO']) {
	            disableTool();
	        } else {
	            enableTool();
	        }
	    };
	
	    vm.changeTool = function (tool) {
	        if (vm.controls.tool.enabled) {
	            vm.controls.tool.current = vm.tools[tool];
	            if (vm.tools[tool] == vm.tools['MOVE']) {
	                cameraControls.enabled = true;
	            } else {
	                cameraControls.enabled = false;
	            }
	        }
	    };
	
	    vm.changeCutViewAxis = function (axis) {
	        vm.controls.cutview.axis = axis;
	        vm.controls.cutview.plane.normal.x = 0;
	        vm.controls.cutview.plane.normal.y = 0;
	        vm.controls.cutview.plane.normal.z = 0;
	        vm.controls.cutview.plane.constant = 0.0;
	        vm.controls.cutview.marker.rotation.x = 0;
	        vm.controls.cutview.marker.rotation.y = 0;
	        vm.controls.cutview.marker.rotation.z = 0;
	        vm.controls.cutview.marker.position.x = -0.02;
	        vm.controls.cutview.marker.position.y = -0.02;
	        vm.controls.cutview.marker.position.z = -0.02;
	
	        if (vm.axes[axis] == vm.axes['X']) {
	            vm.controls.cutview.plane.normal.x = -1;
	            vm.controls.cutview.marker.rotation.y = Math.PI / 2;
	        } else if (vm.axes[axis] == vm.axes['Y']) {
	            vm.controls.cutview.plane.normal.y = -1;
	            vm.controls.cutview.marker.rotation.x = Math.PI / 2;
	        } else {
	            vm.controls.cutview.plane.normal.z = -1;
	            vm.controls.cutview.marker.rotation.z = Math.PI / 2;
	        }
	    };
	
	    vm.toggleCutView = function () {
	        if (vm.controls.cutview.enabled) {
	            vm.controls.cutview.enabled = false;
	            disableCutView();
	        } else {
	            vm.controls.cutview.enabled = true;
	            enableCutView();
	        }
	    };
	
	    vm.changeCutViewVal = function (val) {
	        vm.controls.cutview.plane.constant += val;
	        if (vm.controls.cutview.axis == vm.axes['X']) {
	            vm.controls.cutview.marker.position.x += val;
	        } else if (vm.controls.cutview.axis == vm.axes['X']) {
	            vm.controls.cutview.marker.position.y += val;
	        } else {
	            vm.controls.cutview.marker.position.z += val;
	        }
	    };
	
	    function disableTool() {
	        vm.changeTool('');
	        vm.controls.tool.enabled = false;
	    }
	
	    function enableTool() {
	        vm.controls.tool.enabled = true;
	        vm.changeTool('MOVE');
	    }
	
	    function enableCutView() {
	        vm.controls.cutview.enabled = true;
	        renderer.clippingPlanes = [vm.controls.cutview.plane];
	        vm.controls.cutview.markerMaterial.opacity = 1;
	    }
	
	    function disableCutView() {
	        vm.controls.cutview.enabled = false;
	        renderer.clippingPlanes = [];
	        vm.controls.cutview.markerMaterial.opacity = 0;
	    }
	
	    /*
	    *
	    *  Init Function
	    *
	    * */
	
	    function initBClick() {
	        vm.bclickEls = {};
	        vm.bclickDomEls = vm.DOM.find('[b-click]');
	        vm.bclickDomEls.each(function (key, el) {
	            $(el).click(function () {
	                eval($(el).attr('b-click'));
	                applyScope();
	            });
	        });
	    }
	
	    var tempArrObj;
	    var tempArr;
	
	    function applyBClass() {
	        vm.bclickEls = {};
	        vm.bclickDomEls = vm.DOM.find('[b-class]');
	        vm.bclickDomEls.each(function (key, el) {
	            tempArr = $(el).attr('b-class').split(',');
	            for (var idx in tempArr) {
	                tempArrObj = tempArr[idx].split(':');
	                if (eval(tempArrObj[1])) $(el).addClass(tempArrObj[0]);else $(el).removeClass(tempArrObj[0]);
	            }
	        });
	    }
	
	    function applyScope() {
	        setTimeout(function () {
	            applyBClass();
	        });
	    }
	
	    function initScope() {
	        initBClick();
	        applyScope();
	    }
	
	    function init(tag) {
	
	        /*
	        *   Basic Settings
	        * */
	
	        vm.tag = tag.tag_id;
	        vm.widgetData = flowManager.getData(vm.tag);
	        vm.DOM = vm.widgetData.DOM;
	        initThree();
	        initScope();
	
	        /*
	        * Initial Setup
	        * */
	    }
	
	    flowManager.initWidget(tag, function (tag) {
	        init(tag);
	    });
	};
	
	var $3dPlayer = {
	    controller: $3dPlayerController,
	    view: 'app/widgets/common/3dPlayer/3d.player.html',
	    methods: [{ id: 0, name: 'setFrame', output: false, input: true, params: ['frame'] }],
	    color: '#cc2222',
	    settings: { vh: 20, w: 9 }
	};
	
	exports.$3dPlayer = $3dPlayer;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var timelineController = function timelineController(tag) {
	    _classCallCheck(this, timelineController);
	
	    var vm = this;
	    vm.FPS = 30;
	
	    flowManager.initWidget(tag, function (tag) {
	        init(tag);
	    });
	
	    vm.processInput = function (tag, data) {};
	
	    /*-------------------------*/
	
	    function init(tag) {
	
	        vm.tag = tag.tag_id;
	        vm.widgetData = flowManager.getData(vm.tag);
	        vm.DOM = vm.widgetData.DOM;
	        initBClick();
	
	        vm.player = {
	            playing: false,
	            currentIndex: 0
	        };
	
	        vm.player.togglePlay = function () {
	            if (vm.player.playing) {
	                vm.player.playing = false;
	                // console.log('im paused');
	                pause();
	            } else {
	                // console.log('im playing')
	                vm.player.playing = true;
	                play();
	            }
	        };
	
	        vm.player.data = generateTempData();
	
	        var d3Data = {
	            svg: '#timelineSVG',
	            container: '#timeline',
	            data: vm.player.data
	        };
	
	        initD3(d3Data);
	    }
	
	    var cameraPosition = { x: 4, y: -1, z: 3 };
	    var randCounter = 0;
	    function generateTempData() {
	        var tempArray = [];
	        for (var idx = 0; idx < 1000; idx++) {
	            randCounter++;
	            if (randCounter >= 60) {
	                randCounter = 0;
	                cameraPosition = getRandomVector(-5, 5);
	            }
	            tempArray.push({ x: moment().seconds(idx).unix() * 1000, y: idx, cameraPosition: cameraPosition });
	        }
	        return tempArray;
	    }
	
	    function getRandomVector(min, max) {
	        return {
	            x: getRandomAxis(min, max),
	            y: getRandomAxis(min, max),
	            z: getRandomAxis(min, max)
	        };
	    }
	
	    function getRandomAxis(min, max) {
	        var axis = min + Math.random() * (max - min);
	        if (axis > 0) {
	            axis = Math.max(1, axis);
	        } else {
	            axis = Math.min(-1, axis);
	        }
	        return axis;
	    }
	
	    function initBClick() {
	        vm.bclickEls = {};
	        vm.bclickDomEls = vm.DOM.find('[b-click]');
	        vm.bclickDomEls.each(function (key, el) {
	            $(el).click(function () {
	                eval('vm.' + $(el).attr('b-click'));
	            });
	        });
	    }
	
	    function initD3(data) {
	        if ($(data.container) && $(data.container).length && $(data.container).width() > 300) {
	            vm.d3 = new D3Timeline(data);
	        } else {
	            setTimeout(function () {
	                initD3(data);
	            }, 20);
	        }
	    }
	
	    function D3Timeline(data) {
	
	        var self = this;
	        self.container = angular.element(data.container);
	        self.width = self.container.width();
	        self.height = self.container.height();
	        self.svg = data.svg;
	        self.data = data.data;
	
	        self.visP = d3.select(data.svg).attr("preserveAspectRatio", "xMinYMin meet").attr("viewBox", "0 0 " + self.width + " " + Math.max(0, self.height)).classed("svg-content-responsive", true).on("contextmenu", function (d) {
	            d3.event.preventDefault();
	        }).on("mousemove", mouseHoverEvent).on("mousedown", mouseDownEvent).on("mouseup", mouseUpEvent);
	
	        getAxisScale();
	        draw();
	
	        function draw() {
	            d3.selectAll(self.svg + " > *").remove();
	
	            self.clipRect = self.visP.append("clipPath") // define a clip path
	            .attr('x', 0).attr('y', 0).attr("id", "main-clip") // give the clipPath an ID
	            .append("rect").attr("width", self.width).attr("height", self.height);
	
	            self.vis = self.visP.append("svg:g").attr('class', 'visTrans').attr('x', 0).attr('y', 0).attr("clip-path", "url(#main-clip)") // clip the rectangle
	            .attr("transform", "translate(0,0)");
	
	            self.marker = self.vis.append('g').attr('class', 'tl-marker').append('rect').attr('x', 0).attr('y', 0).attr('width', 1).attr('height', self.height).attr('fill', '#f00');
	        }
	
	        function getAxisScale() {
	            self.axisScale = {};
	            for (var idx in self.data) {
	                var dataItem = self.data[idx];
	                if (dataItem.x < self.axisScale.xl || self.axisScale.xl == null) self.axisScale.xl = dataItem.x;
	                if (dataItem.x > self.axisScale.xh || self.axisScale.xh == null) self.axisScale.xh = dataItem.x;
	
	                if (dataItem.y < self.axisScale.yl || self.axisScale.yl == null) self.axisScale.yl = dataItem.y;
	                if (dataItem.y > self.axisScale.yh || self.axisScale.yh == null) self.axisScale.yh = dataItem.y;
	            }
	
	            self.xScale = d3.scaleLinear().range([0, self.width]).domain([new Date(self.axisScale.xl), new Date(self.axisScale.xh)]);
	            self.yScale = d3.scaleLinear().range([self.height, 0]).domain([self.axisScale.yl, self.axisScale.yh]);
	        }
	
	        function mouseHoverEvent() {
	            if (self.mouseClicked) {
	                self.mouseX = d3.mouse(this)[0];
	                self.mouseY = d3.mouse(this)[1];
	                self.markerPosition = parseInt(self.xScale.invert(self.mouseX));
	                updateMarker();
	                updateMarkerIndex(self.mouseXVal);
	            }
	        }
	
	        function mouseDownEvent() {
	            self.mouseClicked = true;
	            self.mouseX = d3.mouse(this)[0];
	            self.mouseY = d3.mouse(this)[1];
	            self.mouseXVal = parseInt(self.xScale.invert(self.mouseX));
	            updateMarker();
	            updateMarkerIndex(self.mouseXVal);
	        }
	        function mouseUpEvent() {
	            self.mouseClicked = false;
	        }
	
	        self.updateMarker = function (frame) {
	            self.mouseX = self.xScale(frame.x);
	            updateMarker();
	        };
	
	        function updateMarker() {
	            self.marker.attr('transform', 'translate(' + self.mouseX + ',0)');
	        }
	    }
	
	    function play() {
	        vm.player.interval = setInterval(function () {
	            if (vm.player.currentIndex + 1 >= vm.player.data.length) {
	                clearInterval(vm.player.interval);
	                updateFrame(vm.player.currentIndex);
	                vm.player.currentIndex = 0;
	                vm.player.playing = false;
	            } else {
	                vm.player.currentIndex = getCurrentIndex(1);
	                updateFrame(vm.player.currentIndex);
	            }
	        }, 1000 / vm.FPS);
	    }
	
	    function pause() {
	        clearInterval(vm.player.interval);
	    }
	
	    function getCurrentIndex(offset) {
	        if (vm.player.currentIndex == null) vm.player.currentIndex = 0;
	        if (offset == null) offset = 0;
	        return vm.player.currentIndex + offset;
	    }
	
	    function getFrameIndex(x, diff, data) {
	        var found = false;
	        var startingIndex = 0;
	        var endingIndex = data.length;
	        var index;
	        var eq;
	        var counter = 0;
	        while (!found) {
	            index = parseInt((endingIndex - startingIndex) / 2) + startingIndex;
	            // console.log(startingIndex,index, endingIndex)
	            eq = getRound(x, data[index].x, diff);
	            if (eq == 0) {
	                // found
	                found = true;
	            } else if (eq == -1) {
	                // greater than
	                startingIndex += index - startingIndex;
	            } else {
	                // less than
	                endingIndex -= index - startingIndex;
	            }
	            if (startingIndex - endingIndex <= 1 && endingIndex - startingIndex <= 1) {
	                counter++;
	                diff += diff;
	                if (counter > 10) {
	                    break;
	                }
	            }
	        }
	
	        function getRound(x1, x2, diff) {
	            var diff1 = x1 + diff - x2;
	            // var diff2 = x1 - diff - x2;
	            if (diff1 < 0) {
	                // console.log(diff1, diff2, '++')
	                return 1;
	            } else if (diff1 > 0) {
	                // console.log(diff1, diff2, '--')
	                return -1;
	            } else {
	                return 0;
	            }
	        }
	        index--;
	        return index;
	    }
	
	    function updateMarkerIndex(mouseXVal) {
	        vm.player.currentIndex = getFrameIndex(mouseXVal, 1000, vm.player.data);
	        frameUpdated();
	    }
	
	    function updateFrame(index) {
	        updateTimeline(index);
	        frameUpdated();
	    }
	
	    function updateTimeline(index) {
	        vm.d3.updateMarker(vm.player.data[index]);
	    }
	
	    function frameUpdated() {
	        flowManager.runFlow(vm.tag, 'pushFrame', vm.player.data[vm.player.currentIndex]);
	    }
	};
	
	var timeline = {
	    controller: timelineController,
	    view: 'app/widgets/common/timeline/timeline.html',
	    methods: [{ id: 0, name: 'pushFrame', output: true, input: false, params: ['frame'] }],
	    color: '#cc2222',
	    settings: { vh: 4, w: 18 }
	};
	
	exports.timeline = timeline;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var configWidgetController = function configWidgetController(tag) {
	    _classCallCheck(this, configWidgetController);
	
	    var vm = this;
	
	    vm.processInput = function (tag, data) {};
	
	    function init(tag) {
	        vm.tag = tag.tag_id;
	    }
	
	    flowManager.initWidget(tag, function (tag) {
	        init(tag);
	    });
	};
	
	var configWidget = {
	    controller: configWidgetController,
	    view: 'app/widgets/common/configWidget/config.widget.html',
	    methods: [
	        // {id:0, name:'setData',output:true, input:true, params : ['asset']},
	    ],
	    color: '#cc2222',
	    settings: { vh: 24, w: 6 }
	};
	
	exports.configWidget = configWidget;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var widgetConnectorController = function widgetConnectorController(tag) {
	    _classCallCheck(this, widgetConnectorController);
	
	    var vm = this;
	
	    vm.states = [];
	    vm.stateId = -1;
	
	    flowManager.initWidget(tag, function (tag) {
	        init(tag);
	    });
	
	    vm.processInput = function (tag, data) {
	        if (tag == 'setData') {
	
	            vm.pushState(data);
	            flowManager.runFlow(vm.tag, 'setData', processData(data));
	        } else if (tag == 'navigateBack') {
	
	            var toState = vm.getState(-1);
	            if (toState != null) {
	                flowManager.runFlow(vm.tag, 'setData', processData(toState));
	            }
	        } else if (tag == 'navigateForward') {
	
	            var toState = vm.getState(1);
	            if (toState != null) {
	                flowManager.runFlow(vm.tag, 'setData', processData(toState));
	            }
	        } else if (tag == 'setState') {
	
	            vm.pushState(data);
	            flowManager.runFlow(vm.tag, 'pushState', processData(data));
	        } else if (tag == 'updateState') {
	
	            vm.updateState(data);
	            flowManager.runFlow(vm.tag, 'pushState', processData(data));
	        }
	    };
	
	    function processData(data) {
	        if (!data.navigation) data.navigation = {};
	
	        data.navigation.isBackward = false;
	        data.navigation.isForward = false;
	
	        if (vm.stateId < vm.states.length - 1) data.navigation.isForward = true;
	        if (vm.stateId > 0) data.navigation.isBackward = true;
	
	        return data;
	    }
	
	    function init(tag) {
	        vm.tag = tag.tag_id;
	    }
	
	    vm.updateState = function (state) {
	        vm.states[vm.stateId] = state;
	    };
	
	    vm.pushState = function (state) {
	
	        var tempState = vm.states[vm.stateId];
	        if (tempState) {
	            if (tempState.fetch) delete tempState.fetch;
	            if (!state.group && tempState.group) state.group = tempState.group;
	            if (!state.tab && tempState.tab) state.tab = tempState.tab;
	            // if(!state.item && tempState.item) state.item = tempState.item;
	        }
	
	        vm.stateId++;
	        vm.states.splice(vm.stateId);
	        vm.states.push(state);
	    };
	
	    vm.getState = function (diff) {
	        var tempindex = vm.stateId + diff;
	        if (tempindex >= 0 && tempindex < vm.states.length) {
	            vm.stateId = tempindex;
	            return vm.states[vm.stateId];
	        } else {
	            return null;
	        }
	    };
	};
	
	var widgetConnector = {
	    controller: widgetConnectorController,
	    methods: [{ id: 0, name: 'setData', output: true, input: true, params: ['asset'] }, { id: 1, name: 'setState', output: true, input: true, params: ['asset'] }, { id: 2, name: 'updateState', output: true, input: true, params: ['asset'] }, { id: 3, name: 'navigateBack', output: true, input: true, params: ['asset'] }, { id: 4, name: 'navigateForward', output: true, input: true, params: ['asset'] }, { id: 5, name: 'pushState', output: true, params: ['asset'] }],
	    color: '#cc2222',
	    settings: {}
	};
	
	exports.widgetConnector = widgetConnector;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/2/2017.
	 */
	var gridService = exports.gridService = function () {
	    gridService.$inject = ["$log"];
	    function gridService($log) {
	        'ngInject';
	
	        _classCallCheck(this, gridService);
	
	        $log.log("gridService");
	        var vm = this;
	        var getDefaultWidgets = true;
	        var resetLocalStorage = false;
	
	        vm.isOpera = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	        vm.isFirefox = typeof InstallTrigger !== 'undefined';
	        vm.isSafari = /constructor/i.test(window.HTMLElement) || function (p) {
	            return p.toString() === "[object SafariRemoteNotification]";
	        }(!window['safari'] || safari.pushNotification);
	        vm.isIE = /*@cc_on!@*/false || !!document.documentMode;
	        vm.isEdge = !vm.isIE && !!window.StyleMedia;
	        vm.isChrome = !!window.chrome && !!window.chrome.webstore;
	        vm.isBlink = (vm.isChrome || vm.isOpera) && !!window.CSS;
	
	        vm.paramTypes = {
	            INT: 'INT',
	            STRING: 'STRING',
	            BOOLEAN: 'BOOLEAN',
	            FUNCTION: 'FUNCTION',
	            TIMESTAMP: 'TIMESTAMP'
	        };
	
	        if (getDefaultWidgets) {
	
	            //widgetConnector4
	            //ConfigWidget3
	            //NavTree1
	            //Search2
	
	            var t_flowJSON = {
	                timeline3: {
	                    '3dPlayer2': [{ id: 0, from: 'pushFrame', to: 'setFrame' }]
	                }
	            };
	
	            t_flowJSON = JSON.stringify(t_flowJSON);
	
	            var t_layoutOrder = '[{"position":73877},{"position":36051},{"position":75438}]';
	            // var t_widgetData = '[{"name":"videoPlayer","type":"js","view":"app/widgets/common/videoPlayer/video.player.html","methods":[],"color":"#cc2222","settings":{"vh":20,"w":9},"tag":"videoPlayer1","id":95431,"rectSettings":{"y":44,"x":61},"rect":{"_groups":[[{}]],"_parents":[{}]}},{"name":"3dPlayer","type":"js","view":"app/widgets/common/3dPlayer/3d.player.html","methods":[],"color":"#cc2222","settings":{"vh":20,"w":9},"tag":"3dPlayer2","id":36823,"rectSettings":{"y":106,"x":124},"rect":{"_groups":[[{}]],"_parents":[{}]}},{"name":"timeline","type":"js","view":"app/widgets/common/timeline/timeline.html","methods":[],"color":"#cc2222","settings":{"vh":4,"w":18},"tag":"timeline3","id":76780,"rectSettings":{"y":172,"x":196},"rect":{"_groups":[[{}]],"_parents":[{}]}},{"name":"configWidget","type":"js","view":"app/widgets/common/3dPlayer/config.widget.html","methods":[],"color":"#cc2222","settings":{"vh":24,"w":6},"tag":"configWidget4","id":49536,"rectSettings":{"y":246,"x":306}}]'
	            var t_widgetData = '';
	
	            localStorage.setItem('flowJSON', t_flowJSON);
	            localStorage.setItem('layoutOrder', t_layoutOrder);
	            localStorage.setItem('widgetData', t_widgetData);
	        }
	
	        var widgetSet = flowManager.getWidgetSettings();
	
	        var widgetData = [];
	
	        if (resetLocalStorage) localStorage.setItem('widgetData', JSON.stringify(widgetData));
	        if (localStorage.getItem('widgetData')) {
	            widgetData = JSON.parse(localStorage.getItem('widgetData'));
	        }
	
	        function generateWidgets(widgetJSON) {
	            for (var idx in widgetJSON) {
	                var widData = widgetSet[widgetJSON[idx].name];
	                if (!widgetJSON[idx].methods) widgetJSON[idx].methods = [];
	                for (var jdx in widData) {
	                    if (jdx != 'methods') {
	                        widgetJSON[idx][jdx] = widData[jdx];
	                    } else {
	                        for (var kdx in widData[jdx]) {
	                            var found = false;
	                            for (var qdx in widgetJSON[idx][jdx]) {
	                                if (widgetJSON[idx][jdx][qdx].name == widData[jdx][kdx].name) {
	                                    found = true;
	                                }
	                            }
	                            if (!found) widgetJSON[idx][jdx].push(widData[jdx][kdx]);
	                        }
	                    }
	                }
	            }
	            return widgetJSON;
	        }
	
	        vm.getWidgets = function () {
	            return generateWidgets(widgetData);
	        };
	        vm.getWidgetData = function () {
	            var indexByTag = {};
	            for (var idx in widgetData) {
	                indexByTag[widgetData[idx].tag] = idx;
	            }
	            return {
	                widgets: generateWidgets(widgetData),
	                widgetSet: widgetSet,
	                widgetData: widgetData,
	                indexByTag: indexByTag
	            };
	        };
	
	        vm.updateWidgetData = function (data, callback) {
	            var found = false;
	            for (var idx in widgetData) {
	                if (widgetData[idx].tag == data.tag) {
	                    widgetData[idx] = data;
	                    found = true;
	                    break;
	                }
	            }
	            if (!found) {
	                widgetData.push(data);
	            }
	            vm.pushToAPI('widgetData', widgetData, function () {
	                if (callback) callback(vm.getWidgetData());
	            });
	        };
	
	        vm.pushToAPI = function (tag, data, callback) {
	            localStorage.setItem(tag, JSON.stringify(angular.copy(data)));
	            if (callback) callback();
	        };
	
	        vm.getLayoutOrder = function (callback) {
	            var wid = vm.getWidgets();
	            var tempLay = [];
	            if (localStorage.getItem('layoutOrder') && !resetLocalStorage) {
	                tempLay = JSON.parse(localStorage.getItem('layoutOrder'));
	            } else {
	                for (var idx = 0; idx < wid.length; idx++) {
	                    tempLay.push({ position: idx });
	                }
	            }
	            if (callback) callback(tempLay);
	        };
	
	        vm.getFlow = function () {
	            var flow = {};
	            if (resetLocalStorage) localStorage.setItem('flowJSON', '{}');
	            if (localStorage.getItem('flowJSON')) {
	                flow = JSON.parse(localStorage.getItem('flowJSON'));
	            }
	            return flow;
	        };
	
	        flowManager.initFlow(vm.getFlow());
	    }
	
	    _createClass(gridService, [{
	        key: 'getData',
	        value: function getData() {
	            return this.data;
	        }
	    }]);
	
	    return gridService;
	}();

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	
	var authService = exports.authService = ["$window", "$log", "TOKEN_KEY", function authService($window, $log, TOKEN_KEY) {
	    'ngInject';
	
	    _classCallCheck(this, authService);
	
	    var vm = this;
	    $log.log("authService");
	
	    vm.parseJwt = function (token) {
	        //$log.log(token);
	        var base64Url = token.split('.')[1];
	        var base64 = base64Url.replace('-', '+').replace('_', '/');
	        return angular.fromJson($window.atob(base64));
	    };
	
	    vm.saveToken = function (token) {
	        $window.localStorage[TOKEN_KEY] = token;
	    };
	
	    vm.getToken = function () {
	        return $window.localStorage[TOKEN_KEY];
	    };
	
	    vm.isAuthed = function () {
	        var token = vm.getToken();
	        if (token != null) {
	            var params = vm.parseJwt(token);
	            return Math.round(new Date().getTime() / 1000) <= params.exp;
	        } else {
	            return false;
	        }
	    };
	
	    vm.logout = function () {
	        $window.localStorage.removeItem(TOKEN_KEY);
	    };
	}];
	
	var authInterceptor = exports.authInterceptor = ["$log", "API_HOST", "authService", function authInterceptor($log, API_HOST, authService) {
	    'ngInject';
	
	    _classCallCheck(this, authInterceptor);
	
	    return {
	        // automatically attach Authorization header
	        request: function request(config) {
	            //$log.log(config);
	            if (config.url.indexOf(API_HOST) === 0) {
	                if (config.method == 'POST') {
	                    if (!(config.url.indexOf('gettoken') > 0)) {
	                        config.data.token = authService.getToken();
	                    }
	                } else if (config.method == 'GET') {
	                    //config.headers.Authorization = 'Bearer ' + authService.getToken();
	                }
	            }
	
	            return config;
	        },
	
	        // If a token was sent back, save it
	        response: function response(res) {
	            //$log.log(res);
	            if (res.data && res.data.data) {
	                //$log.log(res.data.data.token);
	                if (res.config.url.indexOf(API_HOST) === 0 && res.data.data.token) {
	                    authService.saveToken(res.data.data.token);
	                }
	            }
	
	            return res;
	        }
	
	        // responseError: function(res) {
	        //     $log.log('interceptor');
	        //     $log.log(res);
	        // }
	    };
	}];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	
	var helperService = exports.helperService = ["$log", "$q", "appConstants", function helperService($log, $q, appConstants) {
	    'ngInject';
	
	    _classCallCheck(this, helperService);
	
	    var vm = this;
	    $log.log("helperService");
	
	    var SLASH = '/';
	
	    // should be same as defined in backend
	    vm.assetTypeIdToAssetType = {
	        2: appConstants.GROUP,
	        3: appConstants.USER,
	        4: appConstants.ROLE,
	        5: appConstants.LOCALUSER,
	        45: appConstants.VEHICLE,
	        52: appConstants.DEVICE
	    };
	
	    // generating reverse lookup
	    vm.assetTypeToAssetTypeId = function () {
	        var assetTypeToAssetTypeId = {};
	        for (var idx in vm.assetTypeIdToAssetType) {
	            assetTypeToAssetTypeId[vm.assetTypeIdToAssetType[idx]] = idx;
	        }
	        return assetTypeToAssetTypeId;
	    }();
	
	    vm.getAssetId2 = function (path) {
	        if (path == null) return null;
	
	        var tokens = path.split(SLASH);
	
	        if (tokens.length > 2) return tokens[tokens.length - 2];
	
	        return null;
	    };
	
	    vm.getParentPath2 = function (path) {
	        if (path == null) return null;
	
	        var savedidx = 0;
	        var count = 0;
	        for (var idx = path.length - 1; idx >= 0; idx--) {
	            if (path[idx] == SLASH) count++;
	
	            if (count == 2) {
	                savedidx = idx;
	            }
	
	            if (count == 5) {
	                break;
	            }
	        }
	
	        if (count == 5) return path.substring(0, savedidx);
	
	        return path;
	    };
	
	    vm.getParentId2 = function (path) {
	        if (path == null) return null;
	
	        return vm.getAssetId2(vm.getParentPath2(path));
	    };
	
	    vm.getAssetTypeId2 = function (path) {
	        if (path == null) return null;
	
	        var tokens = path.split(SLASH);
	
	        if (tokens.length > 3) return tokens[tokens.length - 3];
	
	        return null;
	    };
	
	    vm.getAssetType2 = function (path) {
	        if (path == null) return null;
	
	        return vm.assetTypeIdToAssetType[vm.getAssetTypeId2(path)];
	    };
	
	    vm.getAssetLevel2 = function (path) {
	        if (path == null) return null;
	
	        return Math.floor((path.split(SLASH).length - 1) / 2);
	    };
	
	    vm.addAssetInfo = function (asset) {
	        if (asset == null) return null;
	
	        asset.assetid = vm.getAssetId2(asset.assetpath);
	        asset.pgrouppath = vm.getParentPath2(asset.assetpath);
	        asset.pgroupid = vm.getParentId2(asset.assetpath);
	        asset.ui_asset_type = vm.getAssetType2(asset.assetpath);
	        asset.assetlevel = vm.getAssetLevel2(asset.assetpath);
	    };
	
	    vm.filterAssetGroups = function (data) {
	        var filteredList = [];
	        for (var idx in data) {
	            if (data[idx].tag == 'TEAM') filteredList.push(data[idx]);
	        }
	
	        return $q.resolve(filteredList);
	    };
	
	    // ################################################################################################
	
	    vm.mergeAssetPermissions = function (resp) {
	        var data = resp.data.data;
	        for (var idx in data.assets) {
	            var asset = data.assets[idx];
	            vm.addAssetInfo(asset);
	            for (var pidx in data.permissions) {
	                var permission = data.permissions[pidx];
	                if (asset.assetpath == permission.assetpath) {
	                    asset.permissions = JSON.parse(permission.permid);
	                }
	            }
	        }
	
	        return $q.resolve(resp);
	    };
	
	    vm.mergeUserPermissions = function (resp) {
	        // $log.log(resp);
	        var usersList = [];
	        var data = resp[0].data.data;
	        for (var idx in data.assets) {
	            var asset = data.assets[idx];
	            for (var perm in data.permissions) {
	                var permission = data.permissions[perm];
	                if (asset.assetpath == permission.assetpath) {
	                    usersList.push({
	                        assetpath: asset.assetpath,
	                        name: asset.name,
	                        pname: asset.pname,
	                        assetid: permission.assetid,
	                        permid: permission.permid
	                    });
	                }
	            }
	        }
	        return $q.resolve(usersList);
	    };
	
	    vm.mergeAssetAssignments = function (resp) {
	        //$log.log(resp);
	        var data = resp.data.data;
	        var asset = data.asset[0];
	        asset.info = data.info;
	        asset.assg = data.assg;
	        asset.assginfo = data.assginfo;
	        asset.permissions = JSON.parse(data.permissions[0].permid);
	        //$log.log(asset);
	        return $q.resolve(asset);
	    };
	
	    vm.mergeFenceInfo = function (resp) {
	        var data = resp.data.data;
	        for (var idx in data.assets) {
	            var asset = data.assets[idx];
	            asset.info = [];
	            for (var pidx in data.info) {
	                var item = data.info[pidx];
	                if (asset.assetpath == item.assetpath) {
	                    asset.info.push(item);
	                }
	            }
	        }
	
	        return $q.resolve(resp);
	    };
	
	    vm.makeAssetMap = function (data) {
	        var assets = {};
	        for (var idx in data.assets) {
	            var asset = data.assets[idx];
	            var key = getMyPath(asset);
	            vm.addAssetInfo(asset);
	            assets[key] = asset;
	        }
	
	        return $q.resolve(assets);
	    };
	
	    vm.makePermissionMap = function (data) {
	        var permissions = {};
	        for (var idx in data.permissions) {
	            var permission = data.permissions[idx];
	            var key = getMyPath(permission);
	            permissions[key] = permission;
	        }
	
	        return $q.resolve(permissions);
	    };
	
	    vm.mergeMap = function (map1, map2) {
	        for (var idx in map1) {
	            if (idx in map2) {
	                for (var jdx in map2[idx]) {
	                    map1[idx][jdx] = map2[idx][jdx];
	                }
	            }
	        }
	        return map1;
	    };
	
	    function getMyPath(asset) {
	        var type = asset.assetpath;
	        if (!type) type = asset.grouppath;
	        if (!type) type = asset.rolepath;
	        if (!type) type = asset.userpath;
	        if (!type) type = asset.vehiclepath;
	        if (!type) type = asset.devicepath;
	        return type;
	    }
	
	    vm.validateResponse = function (resp) {
	        if (resp && resp.data && resp.data.data) {
	            return $q.resolve(resp.data.data);
	        }
	        return $q.reject(resp);
	    };
	
	    vm.makeAssetList = function (data) {
	        return $q.resolve(data.assets);
	    };
	
	    vm.makeMapOnAssetPath = function (data) {
	        // diff with makeAssetMap is that this function
	        // is directly reading from the array
	        // var data = resp.data.data;
	        var assets = {};
	        for (var idx in data) {
	            var asset = data[idx];
	            // vm.addAssetInfo(asset);
	            assets[asset.assetpath] = asset;
	        }
	        return $q.resolve(assets);
	    };
	
	    vm.slashCount = function (path) {
	        var count = 0;
	        for (var idx in path) {
	            if (path[idx] == SLASH) count++;
	        }
	
	        return count;
	    };
	
	    vm.sortOnAssetLevel = function (hashObj) {
	        var arrayObj = [];
	        for (var idx in hashObj) {
	            arrayObj.push(hashObj[idx]);
	        }
	
	        function compare(a, b) {
	            return a.info.assetlevel - b.info.assetlevel;
	        }
	
	        arrayObj.sort(compare);
	
	        return arrayObj;
	    };
	
	    vm.sortPaths = function (arrayObj) {
	        function compare(a, b) {
	            return vm.slashCount(a) - vm.slashCount(b);
	        }
	
	        arrayObj.sort(compare);
	
	        return arrayObj;
	    };
	
	    vm.getNextPathItemEnd = function (str, start) {
	        var slash = '/';
	
	        if (str === null) return -1;
	
	        if (start === null) start = 0;
	
	        if (start < 0 || start >= str.length) return -1;
	
	        if (str.charAt(start) !== slash) return -1;
	
	        if (str.substr(start, str.length).length < 4) return -1;
	
	        var firstSlash = str.indexOf(slash, start + 1);
	        if (firstSlash != -1 && firstSlash < str.length - 1) {
	            var secondSlash = str.indexOf(slash, firstSlash + 1);
	            if (secondSlash != -1) {
	                return secondSlash - 1;
	            } else {
	                return str.length - 1;
	            }
	        }
	
	        return -1;
	    };
	
	    vm.getNodesInPath = function (path) {
	        if (angular.isUndefined(path)) return [];
	
	        var nodesInPath = [];
	        var startIndex = 0;
	        var endIndex = 0;
	        var itemStartIndex = 0;
	        //$log.log("==================" + path);
	        while (itemStartIndex < path.length) {
	            endIndex = vm.getNextPathItemEnd(path, itemStartIndex);
	            if (endIndex == -1) return null;
	            //$log.log("endIndex " + endIndex);
	            if (endIndex < path.length) {
	                nodesInPath.push(path.substring(startIndex, endIndex + 1));
	            }
	            itemStartIndex = endIndex + 1;
	        }
	        //$log.log(nodesInPath);
	        return nodesInPath;
	    };
	
	    JSON.flatten = function (data) {
	        var result = {};
	
	        function recurse(cur, prop) {
	            if (Object(cur) !== cur) {
	                result[prop] = cur;
	            } else if (Array.isArray(cur)) {
	                for (var i = 0, l = cur.length; i < l; i++) {
	                    recurse(cur[i], prop + "[" + i + "]");
	                }if (l == 0) result[prop] = [];
	            } else {
	                var isEmpty = true;
	                for (var p in cur) {
	                    isEmpty = false;
	                    recurse(cur[p], prop ? prop + "." + p : p);
	                }
	                if (isEmpty && prop) result[prop] = {};
	            }
	        }
	
	        recurse(data, "");
	        return result;
	    };
	
	    JSON.flatten2 = function (data) {
	        var result = {};
	
	        function recurse(cur, prop) {
	            if (Object(cur) !== cur) {
	                result[prop] = cur;
	            } else if (Array.isArray(cur)) {
	                for (var i = 0, l = cur.length; i < l; i++) {
	                    if (_typeof(cur[i]) === 'object') {
	                        recurse(cur[i], prop + "[" + i + "]");
	                    } else {
	                        if (i == 0) {
	                            result[prop] = [];
	                        }
	                        result[prop].push(cur[i]);
	                    }
	                }
	                if (l == 0) result[prop] = [];
	            } else {
	                var isEmpty = true;
	                for (var p in cur) {
	                    isEmpty = false;
	                    recurse(cur[p], prop ? prop + "." + p : p);
	                }
	                if (isEmpty && prop) result[prop] = {};
	            }
	        }
	
	        recurse(data, "");
	        return result;
	    };
	
	    JSON.unflatten = function (data) {
	        "use strict";
	
	        if (Object(data) !== data || Array.isArray(data)) return data;
	        var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
	            resultholder = {};
	        for (var p in data) {
	            var cur = resultholder,
	                prop = "",
	                m;
	            while (m = regex.exec(p)) {
	                cur = cur[prop] || (cur[prop] = m[2] ? [] : {});
	                prop = m[2] || m[1];
	            }
	            cur[prop] = data[p];
	        }
	        return resultholder[""] || resultholder;
	    };
	
	    vm.setIndirect = function (arr) {
	        for (var idx in arr) {
	            arr[idx].indirect = true;
	        }
	        return arr;
	    };
	
	    vm.spliceRedundantObjects = function (arr, key) {
	
	        var filteredByKey = {};
	        var filteredMap = [];
	
	        for (var idx in arr) {
	            var tempKey = arr[idx][key];
	            if (!(tempKey in filteredByKey)) {
	                filteredByKey[tempKey] = [];
	            }
	            filteredByKey[tempKey].push(arr[idx]);
	        }
	
	        for (var idx in filteredByKey) {
	            var itemArray = getMyItem(filteredByKey[idx]);
	            for (var jdx in itemArray) {
	                filteredMap.push(itemArray[jdx]);
	            }
	        }
	
	        function getMyItem(list) {
	            var obj = null;
	            var tempArray = [];
	            var id = null;
	
	            for (var idx in list) {
	                if (vm.getAssetType2(list[idx].grouppath) == appConstants.GROUP) {
	                    var tempId = vm.getAssetId2(list[idx][key]);
	                    if (id == null || tempId < id) {
	                        id = tempId;
	                        obj = list[idx];
	                        obj.indirect = true;
	                    }
	                } else {
	                    list[idx].indirect = false;
	                    tempArray.push(list[idx]);
	                }
	            }
	            if (obj != null) tempArray.push(obj);
	            return tempArray;
	        }
	
	        return filteredMap;
	    };
	
	    vm.arrayDiff = function (array1, array2, key) {
	
	        if (!array1 || array1 && !array1.length) return array2;
	
	        var filtered = [];
	        var found;
	
	        for (var idx in array2) {
	            found = false;
	            for (var jdx in array1) {
	                if (array2[idx][key] == array1[jdx][key]) {
	                    found = true;
	                }
	            }
	            if (!found) filtered.push(array2[idx]);
	        }
	
	        return filtered;
	    };
	
	    vm.returnValue = function (base, str) {
	        var path = str.split('.');
	        var tempPath = [];
	        var pathObj = {};
	        var tempBase = angular.copy(base);
	        var found = true;
	
	        for (var idx in path) {
	            pathObj[path[idx]] = path[idx].split('[');
	            for (var jdx in pathObj[path[idx]]) {
	                tempPath.push(pathObj[path[idx]][jdx].replace(']', ''));
	            }
	        }
	        tempPath.shift();
	        if (tempBase) {
	            for (var idx in tempPath) {
	                if (angular.isDefined(tempBase[tempPath[idx]])) {
	                    tempBase = tempBase[tempPath[idx]];
	                } else {
	                    found = false;
	                    break;
	                }
	            }
	        }
	        if (!found) {
	            return null;
	        } else {
	            return tempBase;
	        }
	    };
	}];

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	
	var treeDataService = exports.treeDataService = ["$log", "$q", "helperService", "groupAPIService", function treeDataService($log, $q, helperService, groupAPIService) {
	    'ngInject';
	
	    _classCallCheck(this, treeDataService);
	
	    var vm = this;
	    $log.log("treeDataService");
	
	    vm.collapsedStatus = false;
	    vm.globalGenericTree = null;
	
	    vm.getGenericTreeIndex = function (genericTree, asset) {
	        for (var idx in genericTree) {
	            if (genericTree[idx].info.assetpath == asset.assetpath) return idx;
	        }
	    };
	
	    vm.buildManagementTree = function (genericTree, key) {
	        //$log.log("buildManagementTree " + key);
	
	        if (genericTree === null) return null;
	
	        if (!('visited' in genericTree[key])) {
	            genericTree[key].visited = true;
	        } else if (genericTree[key].visited == true) {
	            //$log.log("Already visited: " + key);
	            return null;
	        }
	
	        var gtNode = genericTree[key];
	        gtNode.visited = true;
	
	        //$log.log(gtNode);
	        var utNode = {};
	        utNode.id = genericTree[key].info.assetpath;
	        utNode.title = gtNode.info.name;
	        utNode.info = gtNode.info;
	        utNode.items = [];
	        utNode.checkStatus = false;
	        utNode.collapsed = vm.collapsedStatus;
	
	        var resultNode = null;
	        var child = null;
	        if (gtNode.children !== null) {
	            for (var idx in gtNode.children) {
	                child = gtNode.children[idx];
	                //$log.log("parent: " + key + ", child = " + idx + ", type = " + child.ui_asset_type);
	                resultNode = vm.buildManagementTree(genericTree, vm.getGenericTreeIndex(genericTree, child));
	                //$log.log(resultNode);
	
	                if (resultNode !== null) {
	                    utNode.items.push(resultNode);
	                }
	            }
	        }
	
	        return utNode;
	    };
	
	    vm.createManagementTree = function (tempTree) {
	        // $log.log("genericTree", genericTree);
	        var genericTree = tempTree[0];
	        var groupTree = tempTree[1];
	
	        var uiTree = [];
	        for (var key in genericTree) {
	            var resultNode = vm.buildManagementTree(genericTree, key);
	            if (resultNode !== null) {
	                uiTree.push(resultNode);
	            }
	        }
	
	        if (vm.globalGenericTree == null) {
	            vm.globalGenericTree = uiTree;
	        }
	
	        if (vm.globalGenericTree[0]) vm.globalGenericTree[0].collapsed = true;
	        if (vm.globalGenericTree[0]) vm.globalGenericTree[0].loading = false;
	
	        // $log.log("createManagementTree", uiTree);
	        return $q.resolve([uiTree, groupTree]);
	    };
	
	    vm.createGenericTree = function (resp) {
	        // $log.log("createGenericTree", resp);
	        var groups = resp[0];
	        var groupTree = {};
	        // $log.log("mygroups", groups);
	
	        for (var ridx = 0; ridx < resp.length; ridx++) {
	            var assets = resp[ridx];
	            //add all the asset's allowed parent hierarchy to groupTree
	            for (var aidx in assets) {
	                var asset = assets[aidx];
	                //$log.log(asset);
	                var assetpath = asset.assetpath;
	                var pgrouppath = asset.pgrouppath;
	
	                if (!(assetpath in groupTree)) {
	                    groupTree[assetpath] = {};
	                    groupTree[assetpath].info = asset;
	                    groupTree[assetpath].children = null;
	                    // groupTree[assetpath].collapsed = vm.collapsedStatus;
	
	                    if (pgrouppath in groups && pgrouppath != assetpath) {
	                        if (!(pgrouppath in groupTree)) {
	                            groupTree[pgrouppath] = {};
	                            groupTree[pgrouppath].info = groups[pgrouppath];
	                            groupTree[pgrouppath].children = {};
	                            groupTree[pgrouppath].children[assetpath] = asset;
	                            // groupTree[pgrouppath].collapsed = vm.collapsedStatus;
	                        } else {
	                            if (groupTree[pgrouppath].children == null) {
	                                groupTree[pgrouppath].children = {};
	                            }
	                            groupTree[pgrouppath].children[assetpath] = asset;
	                        }
	                    }
	                }
	            }
	        }
	
	        // console.log("createGenericTree", groupTree);
	        var assetArray = helperService.sortOnAssetLevel(groupTree);
	        // console.log("createGenericTree", assetArray);
	        return $q.resolve([assetArray, groupTree]);
	    };
	
	    vm.handleSuccess = function (resp) {
	        console.log('handle success');
	        console.log(resp);
	        return $q.resolve(resp);
	    };
	
	    vm.handleFailure = function (resp) {
	        console.log('handle failure');
	        console.log(resp);
	        return $q.reject(resp);
	    };
	
	    vm.getManagementTree = function (body) {
	        return groupAPIService.getMyDirectAssetsMap(body).then(vm.createGenericTree, vm.handleFailure).then(vm.createManagementTree, vm.handleFailure);
	    };
	}];

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	var loginService = exports.loginService = ["$rootScope", "$log", "authService", "requestService", "$inDialog", function loginService($rootScope, $log, authService, requestService, $inDialog) {
	    'ngInject';
	
	    _classCallCheck(this, loginService);
	
	    $log.log("loginService");
	    var vm = this;
	    vm.username = '';
	    vm.password = '';
	    vm.listeners = {};
	
	    vm.addListener = function (key, listener) {
	        if (!(key in vm.listeners)) {
	            vm.listeners[key] = [];
	        }
	
	        if (vm.listeners[key].indexOf(listener) === -1) {
	            vm.listeners[key].push(listener);
	        }
	    };
	
	    vm.callListeners = function (msg, key) {
	        if (key in vm.listeners) {
	            for (var idx in vm.listeners[key]) {
	                vm.listeners[key][idx](msg, key);
	            }
	        }
	    };
	
	    vm.login = function (username, password) {
	        return requestService.firePost('/authenticate', {
	            "user": {
	                email: username,
	                password: password
	            }
	        }).then(function (resp) {
	            // $log.log(resp);
	            vm.username = username;
	            vm.password = password;
	            vm.callListeners(resp, 'loginSuccess');
	            return resp;
	        });
	    };
	
	    vm.logout = function () {
	        authService.logout && authService.logout();
	        $rootScope.showLoginDialog = true;
	        vm.checkLogin();
	    };
	
	    vm.isAuthed = function () {
	        return authService.isAuthed ? authService.isAuthed() : false;
	    };
	
	    vm.checkLogin = function () {
	        if ($rootScope.showLoginDialog) {
	            $inDialog.show({
	                controller: 'LoginDialogController',
	                templateUrl: 'app/main/login/login.html',
	                clickOutsideToClose: false,
	                escapeToClose: false,
	                height: 300,
	                width: 400
	            });
	        }
	    };
	
	    requestService.addAuthListener(vm.checkLogin);
	}];

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	var appConstants = exports.appConstants = function appConstants() {
	    _classCallCheck(this, appConstants);
	
	    return {
	        GROUP: 'in.intellicar.assets.group',
	        VEHICLE: 'in.intellicar.assets.vehicle',
	        USER: 'in.intellicar.assets.user',
	        LOCALUSER: 'in.intellicar.assets.user.localuser',
	        ROLE: 'in.intellicar.assets.role',
	        DEVICE: 'in.intellicar.assets.device',
	        INFO: 'in.intellicar.assets.group',
	        PROFILE: 'in.intellicar.assets.profile',
	        SIMCARD: 'in.intellicar.assets.simcards',
	        ROOT_GROUP: '/2/6/'
	    };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	var requestService = exports.requestService = ["$log", "$http", "$q", "API_HOST", "authService", function requestService($log, $http, $q, API_HOST, authService) {
	    'ngInject';
	
	    _classCallCheck(this, requestService);
	
	    var vm = this;
	    var authListeners = [];
	    var errorStatusCodes = [400, 401, 403];
	
	    $log.log("requestService");
	
	    vm.getToken = function () {
	        return authService.getToken();
	    };
	
	    vm.firePost = function (api, body, auth) {
	        api = API_HOST + api;
	
	        if (body === null) body = {};
	
	        if (auth == null || auth) auth = true;else auth = false;
	
	        if (!auth) return $http.post(api, body);
	
	        if (authService.isAuthed() || api.indexOf('gettoken') > 0) {
	            return $http.post(api, body).catch(vm.handleFailure);
	        } else {
	            $log.log("user not authenticated");
	            vm.checkLogin();
	            return $q.reject({ 'auth': false });
	        }
	    };
	
	    vm.fireGet = function (api, auth) {
	        api = API_HOST + api;
	
	        if (auth == null || auth) auth = true;else auth = false;
	
	        if (!auth) return $http.post(api);
	
	        if (authService.isAuthed() || api.indexOf('gettoken') > 0) {
	            return $http.post(api).catch(vm.handleFailure);
	        } else {
	            $log.log("user not authenticated");
	            vm.checkLogin();
	            return $q.reject({ 'auth': false });
	        }
	    };
	
	    vm.handleFailure = function (resp) {
	        //$log.log("API returned error");
	        //$log.log(resp);
	        if (errorStatusCodes.indexOf(resp.status) != -1) {
	            //$log.log("failure status code");
	            //vm.checkLogin(true);
	        }
	
	        return $q.reject(resp);
	    };
	
	    vm.checkLogin = function (force) {
	        if (!authService.isAuthed() || force) {
	            angular.forEach(authListeners, function (value, key) {
	                // calling callback
	                // $log.log("calling show login");
	                value();
	            });
	        }
	    };
	
	    vm.addAuthListener = function (callback) {
	        // $log.log('adding login callback');
	        authListeners.push(callback);
	    };
	
	    // If required. It is periodically called from maincontroller to check for valid token
	    // currently disabled in maincontroller
	    vm.isLoginTokenValid = function () {
	        //$log.log("isLoginTokenVaild");
	        vm.checkLogin(false);
	    };
	}];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by smiddela on 25/02/17.
	 */
	
	var assetAPIService = exports.assetAPIService = ["$log", "$q", "requestService", "helperService", "$inError", function assetAPIService($log, $q, requestService, helperService, $inError) {
	    'ngInject';
	
	    _classCallCheck(this, assetAPIService);
	
	    $log.log("assetAPIService");
	    var vm = this;
	
	    vm.deleteAsset = function (body) {
	        return requestService.firePost('/api/asset/delete', body);
	    };
	
	    vm.getMyCreateAssetPermInfo = function (body) {
	        return requestService.firePost('/api/asset/getmycreateassetperminfo', body);
	    };
	
	    vm.getMyEditDeleteAssetPermInfo = function (body) {
	        return requestService.firePost('/api/asset/getmyeditdeleteassetperminfo', body);
	    };
	
	    vm.validateAssetName = function (body) {
	        return requestService.firePost('/api/asset/validateassetname', body);
	    };
	
	    vm.handleResponse = function (resp) {
	        //$log.log("handleResponse");
	        return $q.resolve(resp);
	    };
	
	    vm.handleFailure = function (resp) {
	        $inError.add(resp);
	        $log.log("handleFailure ", resp);
	        return $q.reject(resp);
	    };
	
	    vm.getMyEditDeleteAssetPermInfoMap = function (body) {
	        return vm.getMyEditDeleteAssetPermInfo(body).then(helperService.validateResponse).then(helperService.makePermissionMap).then(vm.handleResponse, vm.handleFailure);
	    };
	
	    vm.getMyCreateAssetPermInfoMap = function (body) {
	        return vm.getMyCreateAssetPermInfo(body).then(helperService.validateResponse).then(vm.handleResponse, vm.handleFailure);
	    };
	}];

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	var groupAPIService = exports.groupAPIService = ["$log", "$q", "requestService", "helperService", "appConstants", "$inError", function groupAPIService($log, $q, requestService, helperService, appConstants, $inError) {
	        'ngInject';
	
	        _classCallCheck(this, groupAPIService);
	
	        $log.log("groupAPIService");
	        var vm = this;
	
	        var root_pgrouppath = '/2/6/';
	
	        vm.encloseBody = function (data) {
	                // return data;
	                return { group: data };
	        };
	
	        vm.getAssetType = function (type, body) {
	
	                body = angular.copy(body);
	
	                if (!body.pgrouppath) {
	                        body.pgrouppath = root_pgrouppath;
	                }
	                if (!body.assettype) {
	                        body.assettype = type;
	                }
	
	                return body;
	        };
	
	        vm.listAssets = function (body) {
	                // $log.log("listAssets");
	                // body = {}
	                return requestService.firePost('/api/group/listassets', body);
	        };
	
	        vm.getMyGroups = function (body) {
	                // $log.log("getMyGroups");
	                body = vm.getAssetType(appConstants.GROUP, body);
	                return vm.listAssets(body);
	        };
	
	        vm.getMyDirectGroups = function (body) {
	                // $log.log("getMyGroups");
	                body = vm.getAssetType(appConstants.GROUP, body);
	                return requestService.firePost('/api/user/getmygroups', body);
	        };
	
	        vm.getMyVehicles = function (body) {
	                // $log.log("getMyVehicles");
	                body = vm.getAssetType(appConstants.VEHICLE, body);
	                return vm.listAssets(body);
	        };
	
	        vm.getMyUsers = function (body) {
	                // $log.log("getMyUsers");
	                body = vm.getAssetType(appConstants.USER, body);
	                return vm.listAssets(body);
	        };
	
	        vm.getMyRoles = function (body) {
	                // $log.log("getMyRoles");
	                body = vm.getAssetType(appConstants.ROLE, body);
	                return vm.listAssets(body);
	        };
	
	        vm.getMyDevices = function (body) {
	                // $log.log("getMyDevices");
	                body = vm.getAssetType(appConstants.DEVICE, body);
	                return vm.listAssets(body);
	        };
	
	        vm.assignUser = function (body) {
	                return requestService.firePost('/api/group/assignuser', body);
	        };
	
	        vm.deassignUser = function (body) {
	                return requestService.firePost('/api/group/deassignuser', body);
	        };
	
	        vm.assignRole = function (body) {
	                return requestService.firePost('/api/group/assignrole', body);
	        };
	
	        vm.deassignRole = function (body) {
	                return requestService.firePost('/api/group/deassignrole', body);
	        };
	
	        vm.getAssignedUsers = function (body) {
	                return requestService.firePost('/api/group/getassignedusers', body);
	        };
	
	        vm.getAssignedRoles = function (body) {
	                return requestService.firePost('/api/group/getassignedroles', body);
	        };
	
	        vm.getMyAssignableUsers = function (body) {
	                return requestService.firePost('/api/group/getmyassignableusers', body);
	        };
	
	        vm.getMyAssignableRoles = function (body) {
	                return requestService.firePost('/api/group/getmyassignableroles', body);
	        };
	
	        vm.deleteAsset = function (body) {
	                return requestService.firePost('/api/asset/delete', body);
	        };
	
	        vm.createGroup = function (body) {
	                return requestService.firePost('/api/group/create', body).then(helperService.validateResponse);
	        };
	
	        vm.handleResponse = function (resp) {
	                //$log.log("handleResponse");
	                return $q.resolve(resp);
	        };
	
	        vm.handleFailure = function (resp) {
	                $inError.add(resp);
	                $log.log("handleFailure ", resp);
	                return $q.reject(resp);
	        };
	
	        vm.listAssetsMap = function (body) {
	                return vm.listAssets(body).then(helperService.validateResponse).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getAssignedRolesMap = function (body) {
	                return vm.getAssignedRoles(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignableUsersMap = function (body) {
	                return vm.getMyAssignableUsers(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignableRolesMap = function (body) {
	                return vm.getMyAssignableRoles(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getAssignedUsersMap = function (body) {
	                return vm.getAssignedUsers(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyGroupsMap = function (body) {
	                // $log.log("getMyGroupsMap");
	                return vm.getMyGroups(body).then(helperService.validateResponse).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyDirectGroupsMap = function (body) {
	                // $log.log("getMyGroupsMap");
	                return vm.getMyDirectGroups(body).then(helperService.validateResponse).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyVehiclesMap = function (body) {
	                //$log.log("getMyVehiclesMap");
	                return vm.getMyVehicles(body).then(helperService.validateResponse).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyUsersMap = function (body) {
	                //$log.log("getMyUsersMap");
	                return vm.getMyUsers(body).then(helperService.validateResponse).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyUsersMapList = function (body) {
	                //$log.log("getMyUsersMap");
	                return vm.getMyUsers(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyRolesMap = function (body) {
	                // $log.log("getMyRolesMap");
	                return vm.getMyRoles(body).then(helperService.validateResponse).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyRolesList = function (body) {
	                // $log.log("getMyRolesMap");
	                return vm.getMyRoles(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyDevicesMap = function (body) {
	                // $log.log("getMyDevicesMap");
	                return vm.getMyDevices(body).then(helperService.mergeAssetPermissions).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.handleDirectAssetResponse = function (resp) {
	                // $log.log("groupAPIService handleDirectAssetResponse");
	                return $q.resolve(resp);
	        };
	
	        vm.getMyDirectAssetsMap = function (body) {
	                //$log.log("groupAPIService getMyDirectAssetsMap");
	                var gPromise = vm.getMyDirectGroupsMap(body);
	                // var vPromise = vm.getMyVehiclesMap(body);
	                // var uPromise = vm.getMyUsersMap(body);
	                // var rPromise = vm.getMyRolesMap(body);
	                // var dPromise = vm.getMyDevicesMap(body);
	
	                // return $q.all([gPromise, vPromise, uPromise, rPromise, dPromise])
	                return $q.all([gPromise]).then(vm.handleDirectAssetResponse, vm.handleFailure);
	        };
	}];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	
	var userAPIService = exports.userAPIService = ["$log", "$q", "requestService", "helperService", "$inError", function userAPIService($log, $q, requestService, helperService, $inError) {
	        'ngInject';
	
	        _classCallCheck(this, userAPIService);
	
	        $log.log("userAPIService");
	        var vm = this;
	
	        vm.encloseBody = function (data) {
	                // return data;
	                return { user: data };
	        };
	
	        vm.getMyGroups = function (body) {
	                // $log.log("getMyGroups");
	                // body = vm.encloseBody(body);
	                return requestService.firePost('/api/group/listassets', body);
	        };
	
	        vm.getAssignedGroups = function (body) {
	                // $log.log("getMyGroups");
	                // body = vm.encloseBody(body);
	                return requestService.firePost('/api/user/getassignedgroups', body);
	        };
	
	        vm.getAssignedRoles = function (body) {
	                // $log.log("getMyGroups");
	                // body = vm.encloseBody(body);
	                return requestService.firePost('/api/user/getassignedroles', body);
	        };
	
	        vm.getMyAssignableGroups = function (body) {
	                return requestService.firePost('/api/user/getmyassignablegroups', body);
	        };
	
	        vm.getMyAssignableRoles = function (body) {
	                return requestService.firePost('/api/user/getmyassignableroles', body);
	        };
	
	        vm.assignRole = function (body) {
	                return requestService.firePost('/api/user/assignrole', body);
	        };
	
	        vm.deassignRole = function (body) {
	                return requestService.firePost('/api/user/deassignrole', body);
	        };
	
	        vm.createUser = function (body) {
	                return requestService.firePost('/api/user/createlocaluser', body).then(helperService.validateResponse);
	        };
	
	        vm.handleResponse = function (resp) {
	                // $log.log("handleResponse");
	                // $log.log(resp);
	                return $q.resolve(resp);
	        };
	
	        vm.handleFailure = function (resp) {
	                $log.log("handleFailure ");
	                $inError.add(resp);
	                $log.log(resp);
	                return $q.reject(resp);
	        };
	
	        vm.getAssignedRolesMap = function (body) {
	                return vm.getAssignedRoles(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignableRolesMap = function (body) {
	                return vm.getMyAssignableRoles(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignableGroupsMap = function (body) {
	                return vm.getMyAssignableGroups(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(helperService.filterAssetGroups).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getAssignedGroupsMap = function (body) {
	                return vm.getAssignedGroups(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyGroupsMap = function (body) {
	                // $log.log("getMyGroupsMap");
	                return vm.getMyGroups(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignedGroupsMap = function (body) {
	                // $log.log("getMyGroupsMap");
	                return vm.getMyAssignedGroups(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssetGroupsMap = function (body) {
	                //$log.log("getMyAssetGroupsMap");
	                return vm.getMyAssetGroups(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyVehiclesMap = function (body) {
	                // $log.log("getMyVehiclesMap");
	                return vm.getMyVehicles(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyUsersMap = function (body) {
	                // $log.log("getMyUsersMap");
	                return vm.getMyUsers(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyUsersMapList = function (body) {
	                // $log.log("getMyRolesMap");
	                return vm.getMyUsers(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetList, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyRolesMap = function (body) {
	                // $log.log("getMyRolesMap");
	                return vm.getMyRoles(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyRolesList = function (body) {
	                // $log.log("getMyRolesMap");
	                return vm.getMyRoles(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetList, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyDevicesMap = function (body) {
	                // $log.log("getMyDevicesMap");
	                return vm.getMyDevices(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.handleDirectAssetResponse = function (resp) {
	                //$log.log("userAPIService handleDirectAssetResponse");
	                // $log.log(resp);
	                return $q.resolve(resp);
	        };
	
	        vm.getMyDirectAssetsMap = function (body) {
	                // $log.log("userAPIService getMyDirectAssetsMap");
	                var gPromise = vm.getMyGroupsMap(body);
	                var vPromise = vm.getMyVehiclesMap(body);
	                var uPromise = vm.getMyUsersMap(body);
	                var rPromise = vm.getMyRolesMap(body);
	                var dPromise = vm.getMyDevicesMap(body);
	                var myPromise = vm.getMyInfoMap(body);
	
	                return $q.all([gPromise, vPromise, uPromise, rPromise, dPromise, myPromise]).then(vm.handleDirectAssetResponse, vm.handleFailure);
	        };
	}];

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by smiddela on 02/03/17.
	 */
	
	var roleAPIService = exports.roleAPIService = ["$log", "$q", "requestService", "helperService", "appConstants", "$inError", function roleAPIService($log, $q, requestService, helperService, appConstants, $inError) {
	        'ngInject';
	
	        _classCallCheck(this, roleAPIService);
	
	        $log.log("roleAPIService");
	        var vm = this;
	
	        vm.getAssignedUsers = function (body) {
	                return requestService.firePost('/api/role/getassignedusers', body);
	        };
	
	        vm.getAssignedGroups = function (body) {
	                return requestService.firePost('/api/role/getassignedgroups', body);
	        };
	
	        vm.getMyAssignableUsers = function (body) {
	                return requestService.firePost('/api/role/getmyassignableusers', body);
	        };
	
	        vm.getMyAssignableGroups = function (body) {
	                return requestService.firePost('/api/role/getmyassignablegroups', body);
	        };
	
	        vm.getMyPermissions = function (body) {
	                return requestService.firePost('/api/role/getmypermissions', body);
	        };
	
	        vm.getAssignedPermissions = function (body) {
	                return requestService.firePost('/api/role/getassignedpermissions', body);
	        };
	
	        vm.addPermission = function (body) {
	                return requestService.firePost('/api/role/addpermission', body);
	        };
	
	        vm.deletePermission = function (body) {
	                return requestService.firePost('/api/role/deletepermission', body);
	        };
	
	        vm.createRole = function (body) {
	                return requestService.firePost('/api/role/create', body).then(helperService.validateResponse);
	        };
	
	        vm.handleResponse = function (resp) {
	                //$log.log("handleResponse");
	                return $q.resolve(resp);
	        };
	
	        vm.handleFailure = function (resp) {
	                $inError.add(resp);
	                $log.log("handleFailure ", resp);
	                return $q.reject(resp);
	        };
	
	        vm.getAssignedGroupsMap = function (body) {
	                return vm.getAssignedGroups(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getAssignedUsersMap = function (body) {
	                return vm.getAssignedUsers(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignableGroupsMap = function (body) {
	                return vm.getMyAssignableGroups(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(helperService.filterAssetGroups).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignableUsersMap = function (body) {
	                return vm.getMyAssignableUsers(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyPermissionsMap = function (body) {
	                return vm.getMyPermissions(body).then(helperService.validateResponse).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getAssignedPermissionsMap = function (body) {
	                return vm.getAssignedPermissions(body).then(helperService.validateResponse).then(vm.handleResponse, vm.handleFailure);
	        };
	}];

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by smiddela on 01/03/17.
	 */
	
	var helperTestService = exports.helperTestService = ["$log", "$q", "helperService", function helperTestService($log, $q, helperService) {
	        'ngInject';
	
	        _classCallCheck(this, helperTestService);
	
	        $log.log("helperTestService");
	        var vm = this;
	
	        var path = void 0;
	        var ASSET_ID = void 0;
	        var PARENT_PATH = void 0;
	        var PARENT_ID = void 0;
	        var ASSET_TYPE_ID = void 0;
	
	        vm.test1 = function () {
	                // console.log("TEST1");
	                path = '/2/6/';
	                ASSET_ID = 6;
	                PARENT_PATH = '/2/6/';
	                PARENT_ID = 6;
	                ASSET_TYPE_ID = 2;
	        };
	
	        vm.test2 = function () {
	                // console.log("TEST2");
	                path = '/2/61/5/72/';
	                ASSET_ID = 72;
	                PARENT_PATH = '/2/61/';
	                PARENT_ID = 61;
	                ASSET_TYPE_ID = 5;
	        };
	
	        vm.test3 = function () {
	                // console.log("TEST3");
	                path = '/2/6/2/144/2/145/2/148/5/156/';
	                ASSET_ID = 156;
	                PARENT_PATH = '/2/6/2/144/2/145/2/148/';
	                PARENT_ID = 148;
	                ASSET_TYPE_ID = 5;
	        };
	
	        vm.runTest = function () {
	                var assetid = helperService.getAssetId2(path);
	                if (assetid != ASSET_ID) console.log("GET_ASSET_ID failed", path, "computed", assetid, "Expected", ASSET_ID);
	
	                var parentpath = helperService.getParentPath2(path);
	                if (parentpath != PARENT_PATH) console.log("GET_PARENT_PATH failed", path, "computed", parentpath, "Expected", PARENT_PATH);
	
	                var parentid = helperService.getParentId2(path);
	                if (parentid != PARENT_ID) console.log("GET_PARENT_ID failed", path, "computed", parentid, "Expected", PARENT_ID);
	
	                var assettypeid = helperService.getAssetTypeId2(path);
	                if (assettypeid != ASSET_TYPE_ID) console.log("GET_ASSET_TYPE_ID failed", path, "computed", assettypeid, "Expected", ASSET_TYPE_ID);
	        };
	
	        vm.test1();
	        vm.runTest();
	
	        vm.test2();
	        vm.runTest();
	
	        vm.test3();
	        vm.runTest();
	}];

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 4/28/2017.
	 */
	var portalLoginService = exports.portalLoginService = ["$http", "$rootScope", "$cookieStore", "API_HOST", function portalLoginService($http, $rootScope, $cookieStore, API_HOST) {
	    'ngInject';
	    // Service logic
	    // ...
	
	    _classCallCheck(this, portalLoginService);
	
	    var tokenHandler = {};
	    var token;
	    var user;
	
	    // var projects; // temp implementation
	    var tempLoggedin = false;
	
	    var observerCallbacks = [];
	
	    if (angular.isDefined($cookieStore.get('userData'))) {
	        // temp login
	        var e = $cookieStore.get('email');
	        var p = $cookieStore.get('password');
	
	        $http.post(API_HOST + '/authenticate', { email: e, password: p }).then(function (response, status, header, config) {
	            set(response.data.token);
	            user = response.data.user;
	            $rootScope.authUser = response.data.user;
	            // projects = response.data.projects;
	            tempLoggedin = true;
	            notifyObservers();
	        }, function (data, status, header, config) {
	            console.log('login error');
	        });
	
	        // end temp login
	    }
	
	    //login
	    var _login = function _login(username, password, callback, failure) {
	        $http.post(API_HOST + '/authenticate', { email: username, password: password }).then(function (response, status, header, config) {
	            set(response.data.token);
	            user = response.data.user;
	            $rootScope.authUser = response.data.user;
	            // projects = response.data.projects;
	            $cookieStore.put('token', token);
	            $cookieStore.put('userData', $rootScope.authUser);
	            console.log(response);
	            tempLoggedin = true;
	            notifyObservers();
	            callback(response);
	            $cookieStore.put('email', username);
	            $cookieStore.put('password', password);
	            $cookieStore.put('loggedIn', true);
	        }, function (data, status, header, config) {
	            failure(data);
	        });
	    };
	    //end login
	    var notifyObservers = function notifyObservers() {
	        angular.forEach(observerCallbacks, function (callback) {
	            callback();
	        });
	    };
	
	    var set = function set(newToken) {
	        token = newToken;
	    };
	
	    tokenHandler.get = function () {
	        return token;
	    };
	
	    var wrapActions = function wrapActions(resource, actions) {
	        var wrappedResource = resource;
	        for (var i = 0; i < actions.length; i++) {
	            tokenWrapper(wrappedResource, actions[i]);
	        }
	        // return modified copy of resource
	        return wrappedResource;
	    };
	
	    // wraps resource action to send request with auth token
	    var tokenWrapper = function tokenWrapper(resource, action) {
	        // copy original action
	        resource['_' + action] = resource[action];
	        resource[action] = function (data, success, error) {
	            return resource['_' + action](angular.extend({}, data || {}, { token: tokenHandler.get() }), success, error);
	        };
	    };
	
	    function putCookies(name, data) {
	        var str;
	        try {
	            str = JSON.parse(data);
	        } catch (e) {
	            str = data;
	        }
	        localStorage.setItem(name, data);
	    }
	
	    // Public API here
	    return {
	        wrapActions: wrapActions,
	        getUser: function getUser() {
	            return user;
	        },
	        getProjects: function getProjects() {
	            return projects;
	        },
	        onTempLogin: function onTempLogin(callback) {
	            observerCallbacks.push(callback);
	        },
	        login: function login(u, p, c, f) {
	            return _login(u, p, c, f);
	        },
	        isTempLogged: function isTempLogged() {
	            return tempLoggedin;
	        },
	        getToken: tokenHandler.get
	    };
	}];

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	var $inDialog = exports.$inDialog = function $inDialog() {
	    'ngInject';
	
	    _classCallCheck(this, $inDialog);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 *  Created by Rinas Musthafa on 2/11/2017.
	 *
	 *    NOTE : You have to initialize it once in the index.html file.
	 *
	 *  Params
	 *
	 *      controller = [ string ] ngController name
	 *      templateUrl = [ string ] url of the HTML template
	 *      clickOutsideToClose = [ boolean ] enable/disable close action when user click outside of the dialog / default = true
	 *      escapeToClose = [ boolean ] enable/disable close acton when user press escape button / default = true
	 *      height = [ int ] dialog height
	 *      width = [ int ] dialog width
	 *
	 */
	var inDialog = exports.inDialog = function () {
	    function inDialog() {
	        'ngInject';
	
	        _classCallCheck(this, inDialog);
	
	        this.restrict = 'E';
	        this.scope = {};
	        this.templateUrl = 'app/widgets/directives/inDialog/in.dialog.html';
	    }
	
	    _createClass(inDialog, [{
	        key: 'controller',
	        value: ["$inDialog", "$scope", function controller($inDialog, $scope) {
	            'ngInject';
	
	            $scope.active = false;
	            $scope.clickOutsideToClose = true;
	            $scope.escapeToClose = true;
	
	            var hide = function hide(apply) {
	                $scope.active = false;
	                if (apply) {
	                    $scope.$apply();
	                }
	            };
	
	            var show = function show(data) {
	                if (data && data.controller != null && data.templateUrl != null) {
	
	                    $scope.active = true;
	                    $scope.style = '';
	
	                    $scope.data = angular.copy(data);
	
	                    if ($scope.data.height) {
	                        $scope.style += 'height: ' + $scope.data.height + 'px; ';
	                        $scope.style += 'top: 50%; ';
	                        $scope.style += 'margin-top: ' + -1 * $scope.data.height / 2 + 'px; ';
	                    }
	                    if ($scope.data.width) {
	                        $scope.style += 'width: ' + $scope.data.width + 'px; ';
	                        $scope.style += 'left: 50%; ';
	                        $scope.style += 'margin-left: ' + -1 * $scope.data.width / 2 + 'px; ';
	                    }
	
	                    if ($scope.data.clickOutsideToClose != null) {
	                        $scope.clickOutsideToClose = $scope.data.clickOutsideToClose;
	                    }
	                    if ($scope.data.escapeToClose != null) {
	                        $scope.escapeToClose = $scope.data.escapeToClose;
	                    }
	                }
	            };
	
	            $scope.backDropClose = function () {
	                if ($scope.data.clickOutsideToClose) {
	                    hide();
	                }
	            };
	
	            $(window).keydown(function ($event) {
	                if ($event.keyCode == 27) {
	                    if ($scope.escapeToClose) {
	                        hide(true);
	                    }
	                }
	            });
	
	            $inDialog.hide = hide;
	
	            $inDialog.show = show;
	        }]
	    }]);
	
	    return inDialog;
	}();

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/9/2017.
	 */
	var dynamicController = exports.dynamicController = function () {
	    function dynamicController() {
	        'ngInject';
	
	        _classCallCheck(this, dynamicController);
	
	        this.restrict = 'A';
	        this.terminal = true;
	        this.priority = 100000;
	    }
	
	    _createClass(dynamicController, [{
	        key: 'controller',
	        value: ["$scope", "$compile", "$parse", function controller($scope, $compile, $parse) {
	            'ngInject';
	
	            $scope.compile = $compile;
	            $scope.parse = $parse;
	        }]
	    }, {
	        key: 'link',
	        value: function link(scope, elem) {
	            var name = scope.parse(elem.attr('dynamic-controller'))(scope);
	            elem.removeAttr('dynamic-controller');
	            elem.attr('ng-controller', name);
	            scope.compile(elem)(scope);
	        }
	    }]);
	
	    return dynamicController;
	}();

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/9/2017.
	 */
	
	var setDom = exports.setDom = function () {
	    function setDom() {
	        'ngInject';
	
	        _classCallCheck(this, setDom);
	
	        this.restrict = 'A';
	        this.scope = {
	            'widgetData': '='
	        };
	    }
	
	    _createClass(setDom, [{
	        key: 'link',
	        value: function link(scope, elm, attr) {
	            var widget = scope.widgetData;
	            flowManager.widgetData[widget.tag] = { DOM: elm, widget: widget };
	            flowManager.setScope(widget);
	        }
	    }]);
	
	    return setDom;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjY5ZWM4OWI2MGQ0ZDE5N2RjNzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YWE0MSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz85ZDUxIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9mNTEyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzP2Y5ZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzPzMxYTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mbG93TWFuYWdlci9mbG93TWFuYWdlci5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZmxvd01hbmFnZXIvZmxvd01hbmFnZXIuY29udHJvbGxlci5qcz8xM2UxIiwid2VicGFjazovLy8uL3NyYy9hcHAvZmxvd01hbmFnZXIvZ3JpZC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZmxvd01hbmFnZXIvZ3JpZC5jb250cm9sbGVyLmpzP2E4ZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3J0YWwvbG9naW4vcG9ydGFsLmxvZ2luLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3J0YWwvbG9naW4vcG9ydGFsLmxvZ2luLmNvbnRyb2xsZXIuanM/N2Y1ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BvcnRhbC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3J0YWwvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzPzI5NzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3J0YWwvaHR0cFNlcnZpY2UvaHR0cFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3J0YWwvaHR0cFNlcnZpY2UvaHR0cFNlcnZpY2UuanM/ZmI1ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL3ZpZGVvUGxheWVyL3ZpZGVvLnBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL3ZpZGVvUGxheWVyL3ZpZGVvLnBsYXllci5qcz8wNmFmIiwid2VicGFjazovLy8uL3NyYy9hcHAvd2lkZ2V0cy9jb21tb24vM2RQbGF5ZXIvM2QucGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvd2lkZ2V0cy9jb21tb24vM2RQbGF5ZXIvM2QucGxheWVyLmpzP2JhY2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXRzL2NvbW1vbi90aW1lbGluZS90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL3RpbWVsaW5lL3RpbWVsaW5lLmpzP2VmZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXRzL2NvbW1vbi9jb25maWdXaWRnZXQvY29uZmlnLndpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL2NvbmZpZ1dpZGdldC9jb25maWcud2lkZ2V0LmpzP2U4NWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXRzL2NvbW1vbi93aWRnZXRDb25uZWN0b3Ivd2lkZ2V0LmNvbm5lY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL3dpZGdldENvbm5lY3Rvci93aWRnZXQuY29ubmVjdG9yLmpzPzg2ZDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mbG93TWFuYWdlci9ncmlkLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mbG93TWFuYWdlci9ncmlkLnNlcnZpY2UuanM/ZjI4MiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcz8yYTYyIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvaGVscGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZS5qcz8xNDNhIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvdHJlZWRhdGEuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL3RyZWVkYXRhLnNlcnZpY2UuanM/ZjMyYiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlLmpzP2M3YmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb25zdGFudHMvYXBwLmNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzLmpzP2M5NmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9yZXF1ZXN0LnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9yZXF1ZXN0LnNlcnZpY2UuanM/OWU0OSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL2Fzc2V0LmFwaS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvYXNzZXQuYXBpLnNlcnZpY2UuanM/Njc0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL2dyb3VwLmFwaS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvZ3JvdXAuYXBpLnNlcnZpY2UuanM/NmMxMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL3VzZXIuYXBpLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy91c2VyLmFwaS5zZXJ2aWNlLmpzP2ExNjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9yb2xlLmFwaS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvcm9sZS5hcGkuc2VydmljZS5qcz85Y2VhIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGVzdC9oZWxwZXJ0ZXN0LnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZXN0L2hlbHBlcnRlc3Quc2VydmljZS5qcz80M2QyIiwid2VicGFjazovLy8uL3NyYy9hcHAvcG9ydGFsL2xvZ2luL3BvcnRhbC5sb2dpbi5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcG9ydGFsL2xvZ2luL3BvcnRhbC5sb2dpbi5zZXJ2aWNlLmpzPzM1MzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXRzL2RpcmVjdGl2ZXMvaW5EaWFsb2cvaW4uZGlhbG9nLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXRzL2RpcmVjdGl2ZXMvaW5EaWFsb2cvaW4uZGlhbG9nLnNlcnZpY2UuanM/MTMxMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldHMvZGlyZWN0aXZlcy9pbkRpYWxvZy9pbi5kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXRzL2RpcmVjdGl2ZXMvaW5EaWFsb2cvaW4uZGlhbG9nLmpzPzJhNjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mbG93TWFuYWdlci9keW5hbWljLmNvbnRyb2xsZXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZmxvd01hbmFnZXIvZHluYW1pYy5jb250cm9sbGVyLmRpcmVjdGl2ZS5qcz81YTM0Iiwid2VicGFjazovLy8uL3NyYy9hcHAvZmxvd01hbmFnZXIvc2V0LmRvbS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mbG93TWFuYWdlci9zZXQuZG9tLmRpcmVjdGl2ZS5qcz84YjFlIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCJjb25zdGFudCIsIm1vbWVudCIsInJ1biIsInNlcnZpY2UiLCJjb250cm9sbGVyIiwiZGlyZWN0aXZlIiwiZmxvd01hbmFnZXIiLCJ3aWRnZXQiLCIkbG9nUHJvdmlkZXIiLCJ0b2FzdHJDb25maWciLCJkZWJ1Z0VuYWJsZWQiLCJhbGxvd0h0bWwiLCJ0aW1lT3V0IiwicG9zaXRpb25DbGFzcyIsInByZXZlbnREdXBsaWNhdGVzIiwicHJvZ3Jlc3NCYXIiLCJyb3V0ZXJDb25maWciLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyQXMiLCJvdGhlcndpc2UiLCJydW5CbG9jayIsIiRyb290U2NvcGUiLCIkbG9nIiwiJHN0YXRlIiwiJGNvb2tpZVN0b3JlIiwibG9nIiwic2hvd0xvZ2luRGlhbG9nIiwiJG9uIiwiZSIsInRvU3RhdGUiLCJ0b1BhcmFtcyIsImZyb21TdGF0ZSIsImZyb21QYXJhbXMiLCJpc0xvZ2luIiwibmFtZSIsInVzZXJJbmZvIiwiaXNBdXRoZWQiLCJwcmV2ZW50RGVmYXVsdCIsImdvIiwiZ2V0IiwiZ3JpZFNlcnZpY2UiLCJhd2Vzb21lVGhpbmdzIiwiY2xhc3NBbmltYXRpb24iLCJjcmVhdGlvbkRhdGUiLCJ0ZXN0RnVuY3Rpb24iLCJOYXZUcmVlU2VydmljZSIsIkZsb3dDb250cm9sbGVyIiwiJHNjb3BlIiwiY29uc29sZSIsInZtIiwicmVjdFdpZHRoIiwicmVjdEhlaWdodCIsImRlZnMiLCJmaWx0ZXIiLCJmZU1lcmdlIiwid0RhdGEiLCJnZXRXaWRnZXREYXRhIiwid2lkZ2V0cyIsIndpZGdldERhdGEiLCJpbmRleEJ5VGFnIiwidGVtcFgiLCJ0ZW1wWSIsImRyYWdnZWQiLCJkaXNhYmxlRHJhZyIsImRlZmF1bHRNZXRob2QiLCJnZXREZWZhdWx0TWV0aG9kIiwibWlkSCIsIm1pZFciLCJmbG93SlNPTiIsImdldEZsb3ciLCJzZWxlY3RlZFRhYiIsIndpZGdldFNldCIsIm1jUG9wdXBUYWJJbmRleCIsImZsb3dMaW5lcyIsInZpcyIsImQzIiwic2VsZWN0IiwiYXR0ciIsIm9uIiwiZCIsImV2ZW50Iiwic3ZnTW91c2V1cCIsImRlc2VsZWN0QWxsIiwic2VsZWN0QWxsIiwic2VsZWN0ZWRXaWRnZXQiLCJzZWxlY3RlZEZ1bmN0aW9uIiwiJCRwaGFzZSIsIiRhcHBseSIsImRyYWdFbmQiLCJpIiwidGFnTmFtZSIsImdldE15V2lkZ2V0IiwicmVjdFNldHRpbmdzIiwieCIsInkiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZWZyZXNoTGluZXMiLCJkcmFnZ2luZyIsImlkeCIsImZyb20iLCJ0byIsImRyYXdMaW5lIiwicmVtb3ZlRmxvdyIsImlkIiwic3BsaWNlIiwidXBkYXRlRmxvdyIsInNlbGVjdEZ1bmN0aW9uIiwib3V0cHV0IiwicGFyYW1zIiwic2V0dGluZ3MiLCJydW5QYXJhbXMiLCJjb3B5IiwidGVtcEZ1bmNTZWxPYmplY3QiLCJ0ZW1wV2lkIiwidGFnIiwiY29ubmVjdGFibGUiLCJpbnB1dHMiLCJqZHgiLCJtZXRob2RzIiwiaW5wdXQiLCJ0SW5wVCIsInRTZWxUIiwidENvdW50IiwibGVuZ3RoIiwidENvdW50ZXIiLCJ0SmR4IiwidElkeCIsImZvdW5kIiwiaXNNZXRob2RGbG93RGVmaW5lZCIsInB1c2giLCJtZXRob2RzVG9TaG93IiwidFJlY3QiLCJnZXREM1JlY3QiLCJ0ZW1wQ2xhc3MiLCJ0ZW1wSW5wdXQiLCJ0ZW1wU2VsZWN0ZWRJbnB1dCIsInJlbW92ZUlucHV0IiwibWV0aG9kIiwicmVtb3ZlUGFyYW0iLCJwYXJhbSIsImluZGV4T2YiLCJhZGRQYXJhbSIsImtleUNvZGUiLCJ0ZW1wUGFyYW0iLCJ0cmltIiwiZm9jdXNJbnB1dCIsIiQiLCJmb2N1cyIsImFkZElucHV0IiwiYWNlT3B0aW9uIiwibW9kZSIsIm9uTG9hZCIsImVkaXRvciIsInNldE9wdGlvbnMiLCJzaG93R3V0dGVyIiwic2hvd1ByaW50TWFyZ2luIiwiY3JlYXRlTWV0aG9kIiwic2hvdyIsInNhdmVNZXRob2RDcmVhdGVQb3B1cCIsImhpZGUiLCJjbG9zZU1ldGhvZENyZWF0ZVBvcHVwIiwiZWRpdE1ldGhvZCIsImNhbmNlbEFzc2lnbmluZyIsImFzc2lnbkZsb3ciLCJ0ZW1wRmxvd09iamVjdCIsInRlbXBTZWxlY3RlZFdpZGdldCIsImZyb21NZXRob2QiLCJ0b01ldGhvZCIsImdlbkZsb3ciLCJmbG93Rm91bmQiLCJpbmRleCIsInJlZnJlc2hGbG93IiwiZm0iLCJ0bSIsInRlbXBPYmoiLCJkcmFnU3RhcnQiLCJzaG93TWV0aG9kUG9wdXAiLCJsZWZ0IiwicGFnZVgiLCJ0b3AiLCJwYWdlWSIsImJvdHRvbSIsInJpZ2h0Iiwid2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJjc3MiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0TXlOYW1lIiwiZHJhdyIsInJlbW92ZSIsImFwcGVuZCIsInJlY3REcmFnIiwiZHJhZyIsInN1YmplY3QiLCJ0IiwidHIiLCJnZXRUcmFuc2xhdGlvbiIsInJlY3QiLCJpc0Nocm9tZSIsInN0eWxlIiwiY29sb3IiLCJ0ZXh0IiwiY2FsbCIsImN1cnJGbG93cyIsImxpbmUiLCJmcm9tVGFnIiwiZnJvbVJlY3QiLCJ0b1RhZyIsInRvUmVjdCIsImZyb21Db29yZHMiLCJ0b0Nvb3JkcyIsInRlbXBGTE8iLCJzb3J0IiwiYSIsImIiLCJnZXREIiwidmFsdWVsaW5lIiwiY3VydmUiLCJjdXJ2ZUJhc2lzIiwidHJhbnNmb3JtIiwiZyIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwibWF0cml4IiwiYmFzZVZhbCIsImNvbnNvbGlkYXRlIiwiZiIsImdyYWJXaWRnZXQiLCJ3aWREb20iLCJjdXJyZW50VGFyZ2V0IiwiY2xvbmUiLCJ3aWRnZXRHcmFiYmVkIiwib2Zmc2V0IiwibGVmdE9mZiIsInRvcE9mZiIsImFkZENsYXNzIiwibWFyZ2luIiwibW91c2V1cCIsImRyb3BXaWRnZXQiLCJtb3VzZW1vdmUiLCJkcmFnZ2luZ1dpZGdldCIsInRlbXBEYXRhIiwibWFrZU5ld1dpZGdldCIsInVwZGF0ZVNjb3BlRGF0YSIsIndEYXRhUmVzcCIsIm1pZFBhbk9mZiIsIm1pZFdpZHRoIiwibWlkSGVpZ2h0IiwiZ2VuZXJhdGVJbnRhbmNlSWQiLCJnZW5lcmF0ZVVuaXF1ZUlkIiwidXBkYXRlV2lkZ2V0RGF0YSIsInJlc3AiLCJ1aWQiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwYXJzZUludCIsIkdyaWRDb250cm9sbGVyIiwibG9naW5TZXJ2aWNlIiwiZ3JpZE1vZGUiLCJsYXlvdXRPcmRlciIsInN3aXRjaE1vZGUiLCJkcmFnZ2llIiwiZGlzYWJsZSIsImVuYWJsZSIsInN3aXRjaE1vZGVJbnRlciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm9pX3RpbWVvdXQiLCJvcmRlckl0ZW1zIiwiaXRlbUVsZW1zIiwiJGdyaWQiLCJwYWNrZXJ5IiwiZWFjaCIsIml0ZW1FbGVtIiwicG9zaXRpb24iLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZ2V0V2lkZ2V0cyIsImNhbGxiYWNrIiwid2lkTGlzdCIsInN0YXJ0UGFja2VyeSIsImdldExheW91dE9yZGVyIiwic2V0Q1NTQ2xhc3MiLCJjb2xzIiwidSIsInYiLCJzdHlsZVN0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCIsInBhY2tlcnlJbnRlciIsImluaXRQYWNrZXJ5IiwiY29sdW1uV2lkdGgiLCJjb2x1bW5IZWlnaHQiLCJpdGVtU2VsZWN0b3IiLCJjb3VudGVyIiwiZmluZCIsImdyaWRJdGVtIiwiRHJhZ2dhYmlsbHkiLCJ3aWQiLCJQb3J0YWxMb2dpbkNvbnRyb2xsZXIiLCJwb3J0YWxMb2dpblNlcnZpY2UiLCJsb2dpbiIsImVycm9yIiwiZmV0Y2hpbmciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiRGFzaGJvYXJkQ29udHJvbGxlciIsIkFQSV9IT1NUIiwiJHJlc291cmNlIiwidXNlciIsImdldEFQUExpc3QiLCJhcHBMaXN0Iiwid3JhcEFjdGlvbnMiLCJzYXZlIiwidXNlcl9pZCIsIiRwcm9taXNlIiwidGhlbiIsInJlc3VsdHMiLCJwcm9kdWN0TGlzdCIsInByb2Nlc3NQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwibGlzdCIsImRlYnVnZ2luZyIsInN5bmNBUElMaXN0IiwicHJvZHVjdF9pZCIsInByb2R1Y3QiLCJhcGljYWxscyIsInRlbXBMaXN0IiwiYXBpIiwic3BsaXQiLCJhcGlFbmRwb2ludCIsInRpbWVzdGFtcCIsImdldFRpbWVGcm9tU3RyaW5nIiwiY3JlYXRlZF9hdCIsInN0ciIsImdldEN1cnJlbnRUaW1lIiwidW5peCIsIm1pbnV0ZSIsImhvdXIiLCJzaGlmdEhvdXJzIiwic2hpZnRNaW51dGVzIiwic2VsZWN0QVBJQ2FsbCIsImFwaWNhbGwiLCJqc29uIiwicGFyc2UiLCJwYXJhbWV0ZXJzIiwidW5kZWZpbmVkIiwic3ludGF4SGlnaGxpZ2h0Iiwic3luY0FQSUNhbGxzIiwic2VsZWN0UHJvZHVjdCIsIml0ZW0iLCJjaGFuZ2VNb2RlIiwiZGViIiwiaW5wIiwiaHRtbCIsInJlcGxhY2UiLCJtYXRjaCIsImNscyIsInRlc3QiLCJodHRwIiwiJHEiLCJwb3N0IiwiYm9keSIsInJlcSIsImhhbmRsZVJlc3BvbnNlIiwiaGFuZGxlRmFpbHVyZSIsInJlc29sdmUiLCJyZWplY3QiLCJ2aWRlb1BsYXllckNvbnRyb2xsZXIiLCJpbml0V2lkZ2V0IiwiaW5pdCIsInByb2Nlc3NJbnB1dCIsInRhZ19pZCIsInZpZGVvUGxheWVyIiwidmlldyIsInZoIiwidyIsIiQzZFBsYXllckNvbnRyb2xsZXIiLCJ1cGRhdGVGcmFtZSIsImZyYW1lRGF0YSIsImNhbWVyYVBvc2l0aW9uIiwibW9kZXMiLCJ0b29scyIsImF4ZXMiLCJYIiwiWSIsIloiLCJjb250cm9scyIsIkFVVE8iLCJ0b29sIiwiZW5hYmxlZCIsImN1cnJlbnQiLCJjdXR2aWV3IiwicGxhbmVzIiwiYXhpcyIsInJlbmRlcmVyIiwiY2FtZXJhIiwibG9hZGVyIiwidmlld3BvcnRIZWlnaHQiLCJ2aWV3cG9ydFdpZHRoIiwic2NlbmUiLCJ2aWV3cG9ydElkIiwiZ2VvTWVzaCIsImNhbWVyYUNvbnRyb2xzIiwic3RhdHMiLCJpbml0VGhyZWUiLCJ0aHJlZUludGVyIiwiaW5pdDMiLCJUSFJFRSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFNpemUiLCJkb21FbGVtZW50IiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJzZXQiLCJKU09OTG9hZGVyIiwiU2NlbmUiLCJPcmJpdENvbnRyb2xzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsIm1hdGVyaWFsIiwiTWVzaFBob25nTWF0ZXJpYWwiLCJ2ZXJ0ZXhDb2xvcnMiLCJWZXJ0ZXhDb2xvcnMiLCJzcGVjdWxhciIsInNpZGUiLCJEb3VibGVTaWRlIiwic2hpbmluZXNzIiwibG9hZCIsImdlbyIsIm1hdCIsIk1lc2giLCJzZXJ2b0JvZHkiLCJsb29rQXQiLCJhbmltYXRlIiwiYWRkIiwibGlnaHQiLCJBbWJpZW50TGlnaHQiLCJkaXJlY3Rpb25hbExpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsIm5vcm1hbGl6ZSIsIlN0YXRzIiwiZG9tIiwicGxhbmUiLCJQbGFuZSIsIlZlY3RvcjMiLCJub3JtYWwiLCJjbGlwcGluZ1BsYW5lcyIsIm1hcmtlck1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJ0cmFuc3BhcmVudCIsIndpcmVmcmFtZSIsIm9wYWNpdHkiLCJtYXJrZXIiLCJQbGFuZUJ1ZmZlckdlb21ldHJ5IiwiY29udHJvbCIsIlRyYW5zZm9ybUNvbnRyb2xzIiwiYXR0YWNoIiwiY2hhbmdlVG9vbCIsImNoYW5nZUN1dFZpZXdBeGlzIiwiYXBwbHlTY29wZSIsInNlcnZvQW5pbUlkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicHJvY2Vzc0ZyYW1lIiwiYW5pbWF0ZVZlY3RvcnMiLCJ1cGRhdGUiLCJkaW1lbnNpb25zIiwiZGlEaWZmIiwidjEiLCJ2MiIsImRpc2FibGVUb29sIiwiZW5hYmxlVG9vbCIsInoiLCJyb3RhdGlvbiIsIlBJIiwidG9nZ2xlQ3V0VmlldyIsImRpc2FibGVDdXRWaWV3IiwiZW5hYmxlQ3V0VmlldyIsImNoYW5nZUN1dFZpZXdWYWwiLCJ2YWwiLCJpbml0QkNsaWNrIiwiYmNsaWNrRWxzIiwiYmNsaWNrRG9tRWxzIiwiRE9NIiwia2V5IiwiZWwiLCJjbGljayIsImV2YWwiLCJ0ZW1wQXJyT2JqIiwidGVtcEFyciIsImFwcGx5QkNsYXNzIiwicmVtb3ZlQ2xhc3MiLCJpbml0U2NvcGUiLCJnZXREYXRhIiwiJDNkUGxheWVyIiwidGltZWxpbmVDb250cm9sbGVyIiwiRlBTIiwicGxheWVyIiwicGxheWluZyIsImN1cnJlbnRJbmRleCIsInRvZ2dsZVBsYXkiLCJwYXVzZSIsInBsYXkiLCJnZW5lcmF0ZVRlbXBEYXRhIiwiZDNEYXRhIiwic3ZnIiwiY29udGFpbmVyIiwiaW5pdEQzIiwicmFuZENvdW50ZXIiLCJ0ZW1wQXJyYXkiLCJnZXRSYW5kb21WZWN0b3IiLCJzZWNvbmRzIiwiZ2V0UmFuZG9tQXhpcyIsIkQzVGltZWxpbmUiLCJzZWxmIiwiZWxlbWVudCIsInZpc1AiLCJjbGFzc2VkIiwibW91c2VIb3ZlckV2ZW50IiwibW91c2VEb3duRXZlbnQiLCJtb3VzZVVwRXZlbnQiLCJnZXRBeGlzU2NhbGUiLCJjbGlwUmVjdCIsImF4aXNTY2FsZSIsImRhdGFJdGVtIiwieGwiLCJ4aCIsInlsIiwieWgiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwiZG9tYWluIiwiRGF0ZSIsInlTY2FsZSIsIm1vdXNlQ2xpY2tlZCIsIm1vdXNlWCIsIm1vdXNlIiwibW91c2VZIiwibWFya2VyUG9zaXRpb24iLCJpbnZlcnQiLCJ1cGRhdGVNYXJrZXIiLCJ1cGRhdGVNYXJrZXJJbmRleCIsIm1vdXNlWFZhbCIsImZyYW1lIiwiaW50ZXJ2YWwiLCJnZXRDdXJyZW50SW5kZXgiLCJnZXRGcmFtZUluZGV4IiwiZGlmZiIsInN0YXJ0aW5nSW5kZXgiLCJlbmRpbmdJbmRleCIsImVxIiwiZ2V0Um91bmQiLCJ4MSIsIngyIiwiZGlmZjEiLCJmcmFtZVVwZGF0ZWQiLCJ1cGRhdGVUaW1lbGluZSIsInJ1bkZsb3ciLCJ0aW1lbGluZSIsImNvbmZpZ1dpZGdldENvbnRyb2xsZXIiLCJjb25maWdXaWRnZXQiLCJ3aWRnZXRDb25uZWN0b3JDb250cm9sbGVyIiwic3RhdGVzIiwic3RhdGVJZCIsInB1c2hTdGF0ZSIsInByb2Nlc3NEYXRhIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsIm5hdmlnYXRpb24iLCJpc0JhY2t3YXJkIiwiaXNGb3J3YXJkIiwidGVtcFN0YXRlIiwiZmV0Y2giLCJncm91cCIsInRhYiIsInRlbXBpbmRleCIsIndpZGdldENvbm5lY3RvciIsImdldERlZmF1bHRXaWRnZXRzIiwicmVzZXRMb2NhbFN0b3JhZ2UiLCJpc09wZXJhIiwib3ByIiwiYWRkb25zIiwib3BlcmEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpc0ZpcmVmb3giLCJJbnN0YWxsVHJpZ2dlciIsImlzU2FmYXJpIiwiSFRNTEVsZW1lbnQiLCJwIiwidG9TdHJpbmciLCJzYWZhcmkiLCJwdXNoTm90aWZpY2F0aW9uIiwiaXNJRSIsImRvY3VtZW50TW9kZSIsImlzRWRnZSIsIlN0eWxlTWVkaWEiLCJjaHJvbWUiLCJ3ZWJzdG9yZSIsImlzQmxpbmsiLCJDU1MiLCJwYXJhbVR5cGVzIiwiSU5UIiwiU1RSSU5HIiwiQk9PTEVBTiIsIkZVTkNUSU9OIiwiVElNRVNUQU1QIiwidF9mbG93SlNPTiIsInRpbWVsaW5lMyIsInRfbGF5b3V0T3JkZXIiLCJ0X3dpZGdldERhdGEiLCJnZXRXaWRnZXRTZXR0aW5ncyIsImdldEl0ZW0iLCJnZW5lcmF0ZVdpZGdldHMiLCJ3aWRnZXRKU09OIiwid2lkRGF0YSIsImtkeCIsInFkeCIsInB1c2hUb0FQSSIsInRlbXBMYXkiLCJmbG93IiwiaW5pdEZsb3ciLCJhdXRoU2VydmljZSIsIiR3aW5kb3ciLCJUT0tFTl9LRVkiLCJwYXJzZUp3dCIsInRva2VuIiwiYmFzZTY0VXJsIiwiYmFzZTY0IiwiZnJvbUpzb24iLCJhdG9iIiwic2F2ZVRva2VuIiwiZ2V0VG9rZW4iLCJyb3VuZCIsImdldFRpbWUiLCJleHAiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiYXV0aEludGVyY2VwdG9yIiwicmVxdWVzdCIsInJlc3BvbnNlIiwicmVzIiwiaGVscGVyU2VydmljZSIsImFwcENvbnN0YW50cyIsIlNMQVNIIiwiYXNzZXRUeXBlSWRUb0Fzc2V0VHlwZSIsIkdST1VQIiwiVVNFUiIsIlJPTEUiLCJMT0NBTFVTRVIiLCJWRUhJQ0xFIiwiREVWSUNFIiwiYXNzZXRUeXBlVG9Bc3NldFR5cGVJZCIsImdldEFzc2V0SWQyIiwicGF0aCIsInRva2VucyIsImdldFBhcmVudFBhdGgyIiwic2F2ZWRpZHgiLCJjb3VudCIsInN1YnN0cmluZyIsImdldFBhcmVudElkMiIsImdldEFzc2V0VHlwZUlkMiIsImdldEFzc2V0VHlwZTIiLCJnZXRBc3NldExldmVsMiIsImFkZEFzc2V0SW5mbyIsImFzc2V0IiwiYXNzZXRpZCIsImFzc2V0cGF0aCIsInBncm91cHBhdGgiLCJwZ3JvdXBpZCIsInVpX2Fzc2V0X3R5cGUiLCJhc3NldGxldmVsIiwiZmlsdGVyQXNzZXRHcm91cHMiLCJmaWx0ZXJlZExpc3QiLCJtZXJnZUFzc2V0UGVybWlzc2lvbnMiLCJhc3NldHMiLCJwaWR4IiwicGVybWlzc2lvbnMiLCJwZXJtaXNzaW9uIiwicGVybWlkIiwibWVyZ2VVc2VyUGVybWlzc2lvbnMiLCJ1c2Vyc0xpc3QiLCJwZXJtIiwicG5hbWUiLCJtZXJnZUFzc2V0QXNzaWdubWVudHMiLCJpbmZvIiwiYXNzZyIsImFzc2dpbmZvIiwibWVyZ2VGZW5jZUluZm8iLCJtYWtlQXNzZXRNYXAiLCJnZXRNeVBhdGgiLCJtYWtlUGVybWlzc2lvbk1hcCIsIm1lcmdlTWFwIiwibWFwMSIsIm1hcDIiLCJncm91cHBhdGgiLCJyb2xlcGF0aCIsInVzZXJwYXRoIiwidmVoaWNsZXBhdGgiLCJkZXZpY2VwYXRoIiwidmFsaWRhdGVSZXNwb25zZSIsIm1ha2VBc3NldExpc3QiLCJtYWtlTWFwT25Bc3NldFBhdGgiLCJzbGFzaENvdW50Iiwic29ydE9uQXNzZXRMZXZlbCIsImhhc2hPYmoiLCJhcnJheU9iaiIsImNvbXBhcmUiLCJzb3J0UGF0aHMiLCJnZXROZXh0UGF0aEl0ZW1FbmQiLCJzdGFydCIsInNsYXNoIiwiY2hhckF0Iiwic3Vic3RyIiwiZmlyc3RTbGFzaCIsInNlY29uZFNsYXNoIiwiZ2V0Tm9kZXNJblBhdGgiLCJpc1VuZGVmaW5lZCIsIm5vZGVzSW5QYXRoIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiaXRlbVN0YXJ0SW5kZXgiLCJmbGF0dGVuIiwicmVzdWx0IiwicmVjdXJzZSIsImN1ciIsInByb3AiLCJPYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJsIiwiaXNFbXB0eSIsImZsYXR0ZW4yIiwidW5mbGF0dGVuIiwicmVnZXgiLCJyZXN1bHRob2xkZXIiLCJtIiwiZXhlYyIsInNldEluZGlyZWN0IiwiYXJyIiwiaW5kaXJlY3QiLCJzcGxpY2VSZWR1bmRhbnRPYmplY3RzIiwiZmlsdGVyZWRCeUtleSIsImZpbHRlcmVkTWFwIiwidGVtcEtleSIsIml0ZW1BcnJheSIsImdldE15SXRlbSIsIm9iaiIsInRlbXBJZCIsImFycmF5RGlmZiIsImFycmF5MSIsImFycmF5MiIsImZpbHRlcmVkIiwicmV0dXJuVmFsdWUiLCJiYXNlIiwidGVtcFBhdGgiLCJwYXRoT2JqIiwidGVtcEJhc2UiLCJzaGlmdCIsImlzRGVmaW5lZCIsInRyZWVEYXRhU2VydmljZSIsImdyb3VwQVBJU2VydmljZSIsImNvbGxhcHNlZFN0YXR1cyIsImdsb2JhbEdlbmVyaWNUcmVlIiwiZ2V0R2VuZXJpY1RyZWVJbmRleCIsImdlbmVyaWNUcmVlIiwiYnVpbGRNYW5hZ2VtZW50VHJlZSIsInZpc2l0ZWQiLCJndE5vZGUiLCJ1dE5vZGUiLCJ0aXRsZSIsIml0ZW1zIiwiY2hlY2tTdGF0dXMiLCJjb2xsYXBzZWQiLCJyZXN1bHROb2RlIiwiY2hpbGQiLCJjaGlsZHJlbiIsImNyZWF0ZU1hbmFnZW1lbnRUcmVlIiwidGVtcFRyZWUiLCJncm91cFRyZWUiLCJ1aVRyZWUiLCJsb2FkaW5nIiwiY3JlYXRlR2VuZXJpY1RyZWUiLCJncm91cHMiLCJyaWR4IiwiYWlkeCIsImFzc2V0QXJyYXkiLCJoYW5kbGVTdWNjZXNzIiwiZ2V0TWFuYWdlbWVudFRyZWUiLCJnZXRNeURpcmVjdEFzc2V0c01hcCIsInJlcXVlc3RTZXJ2aWNlIiwiJGluRGlhbG9nIiwibGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsImNhbGxMaXN0ZW5lcnMiLCJtc2ciLCJmaXJlUG9zdCIsImVtYWlsIiwiY2hlY2tMb2dpbiIsImNsaWNrT3V0c2lkZVRvQ2xvc2UiLCJlc2NhcGVUb0Nsb3NlIiwiYWRkQXV0aExpc3RlbmVyIiwiSU5GTyIsIlBST0ZJTEUiLCJTSU1DQVJEIiwiUk9PVF9HUk9VUCIsIiRodHRwIiwiYXV0aExpc3RlbmVycyIsImVycm9yU3RhdHVzQ29kZXMiLCJhdXRoIiwiY2F0Y2giLCJmaXJlR2V0Iiwic3RhdHVzIiwiZm9yY2UiLCJmb3JFYWNoIiwidmFsdWUiLCJpc0xvZ2luVG9rZW5WYWxpZCIsImFzc2V0QVBJU2VydmljZSIsIiRpbkVycm9yIiwiZGVsZXRlQXNzZXQiLCJnZXRNeUNyZWF0ZUFzc2V0UGVybUluZm8iLCJnZXRNeUVkaXREZWxldGVBc3NldFBlcm1JbmZvIiwidmFsaWRhdGVBc3NldE5hbWUiLCJnZXRNeUVkaXREZWxldGVBc3NldFBlcm1JbmZvTWFwIiwiZ2V0TXlDcmVhdGVBc3NldFBlcm1JbmZvTWFwIiwicm9vdF9wZ3JvdXBwYXRoIiwiZW5jbG9zZUJvZHkiLCJnZXRBc3NldFR5cGUiLCJhc3NldHR5cGUiLCJsaXN0QXNzZXRzIiwiZ2V0TXlHcm91cHMiLCJnZXRNeURpcmVjdEdyb3VwcyIsImdldE15VmVoaWNsZXMiLCJnZXRNeVVzZXJzIiwiZ2V0TXlSb2xlcyIsImdldE15RGV2aWNlcyIsImFzc2lnblVzZXIiLCJkZWFzc2lnblVzZXIiLCJhc3NpZ25Sb2xlIiwiZGVhc3NpZ25Sb2xlIiwiZ2V0QXNzaWduZWRVc2VycyIsImdldEFzc2lnbmVkUm9sZXMiLCJnZXRNeUFzc2lnbmFibGVVc2VycyIsImdldE15QXNzaWduYWJsZVJvbGVzIiwiY3JlYXRlR3JvdXAiLCJsaXN0QXNzZXRzTWFwIiwiZ2V0QXNzaWduZWRSb2xlc01hcCIsImdldE15QXNzaWduYWJsZVVzZXJzTWFwIiwiZ2V0TXlBc3NpZ25hYmxlUm9sZXNNYXAiLCJnZXRBc3NpZ25lZFVzZXJzTWFwIiwiZ2V0TXlHcm91cHNNYXAiLCJnZXRNeURpcmVjdEdyb3Vwc01hcCIsImdldE15VmVoaWNsZXNNYXAiLCJnZXRNeVVzZXJzTWFwIiwiZ2V0TXlVc2Vyc01hcExpc3QiLCJnZXRNeVJvbGVzTWFwIiwiZ2V0TXlSb2xlc0xpc3QiLCJnZXRNeURldmljZXNNYXAiLCJoYW5kbGVEaXJlY3RBc3NldFJlc3BvbnNlIiwiZ1Byb21pc2UiLCJhbGwiLCJ1c2VyQVBJU2VydmljZSIsImdldEFzc2lnbmVkR3JvdXBzIiwiZ2V0TXlBc3NpZ25hYmxlR3JvdXBzIiwiY3JlYXRlVXNlciIsImdldE15QXNzaWduYWJsZUdyb3Vwc01hcCIsImdldEFzc2lnbmVkR3JvdXBzTWFwIiwiZ2V0TXlBc3NpZ25lZEdyb3Vwc01hcCIsImdldE15QXNzaWduZWRHcm91cHMiLCJnZXRNeUFzc2V0R3JvdXBzTWFwIiwiZ2V0TXlBc3NldEdyb3VwcyIsInZQcm9taXNlIiwidVByb21pc2UiLCJyUHJvbWlzZSIsImRQcm9taXNlIiwibXlQcm9taXNlIiwiZ2V0TXlJbmZvTWFwIiwicm9sZUFQSVNlcnZpY2UiLCJnZXRNeVBlcm1pc3Npb25zIiwiZ2V0QXNzaWduZWRQZXJtaXNzaW9ucyIsImFkZFBlcm1pc3Npb24iLCJkZWxldGVQZXJtaXNzaW9uIiwiY3JlYXRlUm9sZSIsImdldE15UGVybWlzc2lvbnNNYXAiLCJnZXRBc3NpZ25lZFBlcm1pc3Npb25zTWFwIiwiaGVscGVyVGVzdFNlcnZpY2UiLCJBU1NFVF9JRCIsIlBBUkVOVF9QQVRIIiwiUEFSRU5UX0lEIiwiQVNTRVRfVFlQRV9JRCIsInRlc3QxIiwidGVzdDIiLCJ0ZXN0MyIsInJ1blRlc3QiLCJwYXJlbnRwYXRoIiwicGFyZW50aWQiLCJhc3NldHR5cGVpZCIsInRva2VuSGFuZGxlciIsInRlbXBMb2dnZWRpbiIsIm9ic2VydmVyQ2FsbGJhY2tzIiwiaGVhZGVyIiwiYXV0aFVzZXIiLCJub3RpZnlPYnNlcnZlcnMiLCJmYWlsdXJlIiwicHV0IiwibmV3VG9rZW4iLCJyZXNvdXJjZSIsImFjdGlvbnMiLCJ3cmFwcGVkUmVzb3VyY2UiLCJ0b2tlbldyYXBwZXIiLCJhY3Rpb24iLCJzdWNjZXNzIiwiZXh0ZW5kIiwicHV0Q29va2llcyIsImdldFVzZXIiLCJnZXRQcm9qZWN0cyIsInByb2plY3RzIiwib25UZW1wTG9naW4iLCJjIiwiaXNUZW1wTG9nZ2VkIiwiaW5EaWFsb2ciLCJyZXN0cmljdCIsInNjb3BlIiwiYWN0aXZlIiwiYXBwbHkiLCJiYWNrRHJvcENsb3NlIiwia2V5ZG93biIsIiRldmVudCIsImR5bmFtaWNDb250cm9sbGVyIiwidGVybWluYWwiLCJwcmlvcml0eSIsIiRjb21waWxlIiwiJHBhcnNlIiwiY29tcGlsZSIsImVsZW0iLCJyZW1vdmVBdHRyIiwic2V0RG9tIiwiZWxtIiwic2V0U2NvcGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FB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QWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOzs7Ozs7QUFNaEgsS0NWYWMsU0RVQSxRQ1ZBQSxTRFVpQixZQUFZO0tDUnRDLGtCQUFlO1NBQ1g7O1NBRFc7O1NBR1gsS0FBS2YsV0FBVztTQUNoQixLQUFLQyxRQUFRO2FBQ1QsY0FBZTs7OztLRGV2QixhQUFhLFFBQVEsQ0FBQztTQUNsQixLQUFLO1NBQ0wsT0FBTyxTQUFTLEtDYmZBLE9BQU9lLEtBQUs1MkIsTUFBSzthQUNsQixJQUFJMUUsU0FBU3U2QixNQUFNaDNCO2FBQ25CeEQsWUFBWXdELFdBQVd2RCxPQUFPbUgsT0FBTyxFQUFFMlgsS0FBSXdjLEtBQUt0N0IsUUFBT0E7YUFDdkRELFlBQVl3N0IsU0FBU3Y3Qjs7OztLRGlCekIsT0FBTyIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNjllYzg5YjYwZDRkMTk3ZGM3MiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoJy4vaW5kZXguY29uZmlnJyk7XG5cbnZhciBfaW5kZXgyID0gcmVxdWlyZSgnLi9pbmRleC5yb3V0ZScpO1xuXG52YXIgX2luZGV4MyA9IHJlcXVpcmUoJy4vaW5kZXgucnVuJyk7XG5cbnZhciBfbWFpbiA9IHJlcXVpcmUoJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInKTtcblxudmFyIF9mbG93TWFuYWdlciA9IHJlcXVpcmUoJy4vZmxvd01hbmFnZXIvZmxvd01hbmFnZXIuY29udHJvbGxlcicpO1xuXG52YXIgX2dyaWQgPSByZXF1aXJlKCcuL2Zsb3dNYW5hZ2VyL2dyaWQuY29udHJvbGxlcicpO1xuXG52YXIgX3BvcnRhbExvZ2luID0gcmVxdWlyZSgnLi9wb3J0YWwvbG9naW4vcG9ydGFsLmxvZ2luLmNvbnRyb2xsZXInKTtcblxudmFyIF9kYXNoYm9hcmQgPSByZXF1aXJlKCcuL3BvcnRhbC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXInKTtcblxudmFyIF9odHRwU2VydmljZSA9IHJlcXVpcmUoJy4vcG9ydGFsL2h0dHBTZXJ2aWNlL2h0dHBTZXJ2aWNlJyk7XG5cbnZhciBfdmlkZW8gPSByZXF1aXJlKCcuL3dpZGdldHMvY29tbW9uL3ZpZGVvUGxheWVyL3ZpZGVvLnBsYXllcicpO1xuXG52YXIgX2QgPSByZXF1aXJlKCcuL3dpZGdldHMvY29tbW9uLzNkUGxheWVyLzNkLnBsYXllcicpO1xuXG52YXIgX3RpbWVsaW5lID0gcmVxdWlyZSgnLi93aWRnZXRzL2NvbW1vbi90aW1lbGluZS90aW1lbGluZScpO1xuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoJy4vd2lkZ2V0cy9jb21tb24vY29uZmlnV2lkZ2V0L2NvbmZpZy53aWRnZXQnKTtcblxudmFyIF93aWRnZXQgPSByZXF1aXJlKCcuL3dpZGdldHMvY29tbW9uL3dpZGdldENvbm5lY3Rvci93aWRnZXQuY29ubmVjdG9yJyk7XG5cbnZhciBfZ3JpZDIgPSByZXF1aXJlKCcuL2Zsb3dNYW5hZ2VyL2dyaWQuc2VydmljZScpO1xuXG52YXIgX2F1dGggPSByZXF1aXJlKCcuL3NlcnZpY2VzL2F1dGguc2VydmljZScpO1xuXG52YXIgX2hlbHBlciA9IHJlcXVpcmUoJy4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnKTtcblxudmFyIF90cmVlZGF0YSA9IHJlcXVpcmUoJy4vc2VydmljZXMvdHJlZWRhdGEuc2VydmljZScpO1xuXG52YXIgX2xvZ2luID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwID0gcmVxdWlyZSgnLi9jb25zdGFudHMvYXBwLmNvbnN0YW50cycpO1xuXG52YXIgX3JlcXVlc3QgPSByZXF1aXJlKCcuL3NlcnZpY2VzL3JlcXVlc3Quc2VydmljZScpO1xuXG52YXIgX2Fzc2V0QXBpID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9hc3NldC5hcGkuc2VydmljZScpO1xuXG52YXIgX2dyb3VwQXBpID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9ncm91cC5hcGkuc2VydmljZScpO1xuXG52YXIgX3VzZXJBcGkgPSByZXF1aXJlKCcuL3NlcnZpY2VzL3VzZXIuYXBpLnNlcnZpY2UnKTtcblxudmFyIF9yb2xlQXBpID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9yb2xlLmFwaS5zZXJ2aWNlJyk7XG5cbnZhciBfaGVscGVydGVzdCA9IHJlcXVpcmUoJy4vdGVzdC9oZWxwZXJ0ZXN0LnNlcnZpY2UnKTtcblxudmFyIF9wb3J0YWxMb2dpbjIgPSByZXF1aXJlKCcuL3BvcnRhbC9sb2dpbi9wb3J0YWwubG9naW4uc2VydmljZScpO1xuXG52YXIgX2luRGlhbG9nID0gcmVxdWlyZSgnLi93aWRnZXRzL2RpcmVjdGl2ZXMvaW5EaWFsb2cvaW4uZGlhbG9nLnNlcnZpY2UnKTtcblxudmFyIF9pbiA9IHJlcXVpcmUoJy4vd2lkZ2V0cy9kaXJlY3RpdmVzL2luRGlhbG9nL2luLmRpYWxvZycpO1xuXG52YXIgX2R5bmFtaWNDb250cm9sbGVyID0gcmVxdWlyZSgnLi9mbG93TWFuYWdlci9keW5hbWljLmNvbnRyb2xsZXIuZGlyZWN0aXZlJyk7XG5cbnZhciBfc2V0RG9tID0gcmVxdWlyZSgnLi9mbG93TWFuYWdlci9zZXQuZG9tLmRpcmVjdGl2ZScpO1xuXG4vKiBnbG9iYWwgbWFsYXJrZXk6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuXG5hbmd1bGFyLm1vZHVsZSgnbWFuYWdlbWVudCcsIFsnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ01lc3NhZ2VzJywgJ25nQXJpYScsICduZ1Jlc291cmNlJywgJ3VpLnJvdXRlcicsICdtbS5mb3VuZGF0aW9uJywgJ3RvYXN0ciddKS5jb25maWcoX2luZGV4LmNvbmZpZykuY29uZmlnKF9pbmRleDIucm91dGVyQ29uZmlnKVxuLy8gLmNvbmZpZyhmdW5jdGlvbigkaHR0cFByb3ZpZGVyKSB7XG4vLyAgICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXV0aEludGVyY2VwdG9yJyk7XG4vLyB9KVxuXG4vLyBoYXZlIHRvIGZpeCBhYm92ZSBjb25maWdcblxuLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4vLyAuY29uc3RhbnQoJ0FQSV9IT1NUJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGknKVxuLmNvbnN0YW50KCdBUElfSE9TVCcsICdodHRwOi8vYXBpLmJsdWVjaXBoZXJzLmNvbS9hcGknKS5jb25zdGFudCgnVE9LRU5fS0VZJywgJ0pXVF9UT0tFTl9LRVknKS5ydW4oX2luZGV4My5ydW5CbG9jaykuc2VydmljZSgnZ3JpZFNlcnZpY2UnLCBfZ3JpZDIuZ3JpZFNlcnZpY2UpLnNlcnZpY2UoJ2F1dGhTZXJ2aWNlJywgX2F1dGguYXV0aFNlcnZpY2UpLnNlcnZpY2UoJ2F1dGhJbnRlcmNlcHRvcicsIF9hdXRoLmF1dGhJbnRlcmNlcHRvcikuc2VydmljZSgnaGVscGVyU2VydmljZScsIF9oZWxwZXIuaGVscGVyU2VydmljZSkuc2VydmljZSgndHJlZURhdGFTZXJ2aWNlJywgX3RyZWVkYXRhLnRyZWVEYXRhU2VydmljZSkuc2VydmljZSgnbG9naW5TZXJ2aWNlJywgX2xvZ2luLmxvZ2luU2VydmljZSkuc2VydmljZSgncmVxdWVzdFNlcnZpY2UnLCBfcmVxdWVzdC5yZXF1ZXN0U2VydmljZSkuc2VydmljZSgnYXNzZXRBUElTZXJ2aWNlJywgX2Fzc2V0QXBpLmFzc2V0QVBJU2VydmljZSkuc2VydmljZSgnZ3JvdXBBUElTZXJ2aWNlJywgX2dyb3VwQXBpLmdyb3VwQVBJU2VydmljZSkuc2VydmljZSgndXNlckFQSVNlcnZpY2UnLCBfdXNlckFwaS51c2VyQVBJU2VydmljZSkuc2VydmljZSgncm9sZUFQSVNlcnZpY2UnLCBfcm9sZUFwaS5yb2xlQVBJU2VydmljZSkuc2VydmljZSgnaGVscGVyVGVzdFNlcnZpY2UnLCBfaGVscGVydGVzdC5oZWxwZXJUZXN0U2VydmljZSkuc2VydmljZSgnYXBwQ29uc3RhbnRzJywgX2FwcC5hcHBDb25zdGFudHMpLnNlcnZpY2UoJyRpbkRpYWxvZycsIF9pbkRpYWxvZy4kaW5EaWFsb2cpLnNlcnZpY2UoJ3BvcnRhbExvZ2luU2VydmljZScsIF9wb3J0YWxMb2dpbjIucG9ydGFsTG9naW5TZXJ2aWNlKS5zZXJ2aWNlKCdodHRwJywgX2h0dHBTZXJ2aWNlLmh0dHApLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgX21haW4uTWFpbkNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ0Zsb3dDb250cm9sbGVyJywgX2Zsb3dNYW5hZ2VyLkZsb3dDb250cm9sbGVyKS5jb250cm9sbGVyKCdHcmlkQ29udHJvbGxlcicsIF9ncmlkLkdyaWRDb250cm9sbGVyKS5jb250cm9sbGVyKCdEYXNoYm9hcmRDb250cm9sbGVyJywgX2Rhc2hib2FyZC5EYXNoYm9hcmRDb250cm9sbGVyKS5jb250cm9sbGVyKCdQb3J0YWxMb2dpbkNvbnRyb2xsZXInLCBfcG9ydGFsTG9naW4uUG9ydGFsTG9naW5Db250cm9sbGVyKS5kaXJlY3RpdmUoJ2R5bmFtaWNDb250cm9sbGVyJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgX2R5bmFtaWNDb250cm9sbGVyLmR5bmFtaWNDb250cm9sbGVyKCk7XG59KS5kaXJlY3RpdmUoJ3NldERvbScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IF9zZXREb20uc2V0RG9tKCk7XG59KS5kaXJlY3RpdmUoJ2luRGlhbG9nJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgX2luLmluRGlhbG9nKCk7XG59KTtcblxuLy8gUHVyZSBqYXZhc2NyaXB0IEZsb3cgTWFuYWdlciB3aWRnZXRzO1xuZmxvd01hbmFnZXIud2lkZ2V0KCd3aWRnZXRDb25uZWN0b3InLCBfd2lkZ2V0LndpZGdldENvbm5lY3Rvcik7XG5mbG93TWFuYWdlci53aWRnZXQoJ3ZpZGVvUGxheWVyJywgX3ZpZGVvLnZpZGVvUGxheWVyKTtcbmZsb3dNYW5hZ2VyLndpZGdldCgnM2RQbGF5ZXInLCBfZC4kM2RQbGF5ZXIpO1xuZmxvd01hbmFnZXIud2lkZ2V0KCd0aW1lbGluZScsIF90aW1lbGluZS50aW1lbGluZSk7XG5mbG93TWFuYWdlci53aWRnZXQoJ2NvbmZpZ1dpZGdldCcsIF9jb25maWcuY29uZmlnV2lkZ2V0KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qcyIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXHJcblxyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2luZGV4LmNvbmZpZyc7XHJcbmltcG9ydCB7IHJvdXRlckNvbmZpZyB9IGZyb20gJy4vaW5kZXgucm91dGUnO1xyXG5pbXBvcnQgeyBydW5CbG9jayB9IGZyb20gJy4vaW5kZXgucnVuJztcclxuaW1wb3J0IHsgTWFpbkNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vbWFpbi5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgRmxvd0NvbnRyb2xsZXIgfSBmcm9tICcuL2Zsb3dNYW5hZ2VyL2Zsb3dNYW5hZ2VyLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHcmlkQ29udHJvbGxlciB9IGZyb20gJy4vZmxvd01hbmFnZXIvZ3JpZC5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgUG9ydGFsTG9naW5Db250cm9sbGVyIH0gZnJvbSAnLi9wb3J0YWwvbG9naW4vcG9ydGFsLmxvZ2luLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250cm9sbGVyIH0gZnJvbSAnLi9wb3J0YWwvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgaHR0cCB9IGZyb20gJy4vcG9ydGFsL2h0dHBTZXJ2aWNlL2h0dHBTZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IHZpZGVvUGxheWVyIH0gZnJvbSAnLi93aWRnZXRzL2NvbW1vbi92aWRlb1BsYXllci92aWRlby5wbGF5ZXInO1xyXG5pbXBvcnQgeyAkM2RQbGF5ZXIgfSBmcm9tICcuL3dpZGdldHMvY29tbW9uLzNkUGxheWVyLzNkLnBsYXllcic7XHJcbmltcG9ydCB7IHRpbWVsaW5lIH0gZnJvbSAnLi93aWRnZXRzL2NvbW1vbi90aW1lbGluZS90aW1lbGluZSc7XHJcbmltcG9ydCB7IGNvbmZpZ1dpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jb21tb24vY29uZmlnV2lkZ2V0L2NvbmZpZy53aWRnZXQnO1xyXG5cclxuaW1wb3J0IHsgd2lkZ2V0Q29ubmVjdG9yIH0gZnJvbSAnLi93aWRnZXRzL2NvbW1vbi93aWRnZXRDb25uZWN0b3Ivd2lkZ2V0LmNvbm5lY3Rvcic7XHJcbmltcG9ydCB7IGdyaWRTZXJ2aWNlIH0gZnJvbSAnLi9mbG93TWFuYWdlci9ncmlkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgYXV0aEludGVyY2VwdG9yIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBoZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IHRyZWVEYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdHJlZWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IGxvZ2luU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IGFwcENvbnN0YW50cyB9IGZyb20gJy4vY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgYXNzZXRBUElTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hc3NldC5hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IGdyb3VwQVBJU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ3JvdXAuYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VyQVBJU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci5hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IHJvbGVBUElTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9yb2xlLmFwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaGVscGVyVGVzdFNlcnZpY2UgfSBmcm9tICcuL3Rlc3QvaGVscGVydGVzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcG9ydGFsTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9wb3J0YWwvbG9naW4vcG9ydGFsLmxvZ2luLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgJGluRGlhbG9nIH0gZnJvbSAnLi93aWRnZXRzL2RpcmVjdGl2ZXMvaW5EaWFsb2cvaW4uZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpbkRpYWxvZyB9IGZyb20gJy4vd2lkZ2V0cy9kaXJlY3RpdmVzL2luRGlhbG9nL2luLmRpYWxvZyc7XHJcbmltcG9ydCB7IGR5bmFtaWNDb250cm9sbGVyIH0gZnJvbSAnLi9mbG93TWFuYWdlci9keW5hbWljLmNvbnRyb2xsZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgc2V0RG9tIH0gZnJvbSAnLi9mbG93TWFuYWdlci9zZXQuZG9tLmRpcmVjdGl2ZSc7XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ21hbmFnZW1lbnQnLCBbICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ21tLmZvdW5kYXRpb24nLCAndG9hc3RyJ10pXHJcblxyXG5cclxuICAgIC5jb25maWcoY29uZmlnKVxyXG4gICAgLmNvbmZpZyhyb3V0ZXJDb25maWcpXHJcbiAgICAvLyAuY29uZmlnKGZ1bmN0aW9uKCRodHRwUHJvdmlkZXIpIHtcclxuICAgIC8vICAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdhdXRoSW50ZXJjZXB0b3InKTtcclxuICAgIC8vIH0pXHJcblxyXG4gICAgLy8gaGF2ZSB0byBmaXggYWJvdmUgY29uZmlnXHJcblxyXG4gICAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXHJcbiAgICAvLyAuY29uc3RhbnQoJ0FQSV9IT1NUJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGknKVxyXG4gICAgLmNvbnN0YW50KCdBUElfSE9TVCcsICdodHRwOi8vYXBpLmJsdWVjaXBoZXJzLmNvbS9hcGknKVxyXG4gICAgLmNvbnN0YW50KCdUT0tFTl9LRVknLCAnSldUX1RPS0VOX0tFWScpXHJcblxyXG4gICAgLnJ1bihydW5CbG9jaylcclxuXHJcbiAgICAuc2VydmljZSgnZ3JpZFNlcnZpY2UnLCBncmlkU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCdhdXRoU2VydmljZScsIGF1dGhTZXJ2aWNlKVxyXG4gICAgLnNlcnZpY2UoJ2F1dGhJbnRlcmNlcHRvcicsIGF1dGhJbnRlcmNlcHRvcilcclxuICAgIC5zZXJ2aWNlKCdoZWxwZXJTZXJ2aWNlJywgaGVscGVyU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCd0cmVlRGF0YVNlcnZpY2UnLCB0cmVlRGF0YVNlcnZpY2UpXHJcbiAgICAuc2VydmljZSgnbG9naW5TZXJ2aWNlJywgbG9naW5TZXJ2aWNlKVxyXG4gICAgLnNlcnZpY2UoJ3JlcXVlc3RTZXJ2aWNlJywgcmVxdWVzdFNlcnZpY2UpXHJcbiAgICAuc2VydmljZSgnYXNzZXRBUElTZXJ2aWNlJywgYXNzZXRBUElTZXJ2aWNlKVxyXG4gICAgLnNlcnZpY2UoJ2dyb3VwQVBJU2VydmljZScsIGdyb3VwQVBJU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCd1c2VyQVBJU2VydmljZScsIHVzZXJBUElTZXJ2aWNlKVxyXG4gICAgLnNlcnZpY2UoJ3JvbGVBUElTZXJ2aWNlJywgcm9sZUFQSVNlcnZpY2UpXHJcbiAgICAuc2VydmljZSgnaGVscGVyVGVzdFNlcnZpY2UnLCBoZWxwZXJUZXN0U2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCdhcHBDb25zdGFudHMnLCBhcHBDb25zdGFudHMpXHJcbiAgICAuc2VydmljZSgnJGluRGlhbG9nJywgJGluRGlhbG9nKVxyXG4gICAgLnNlcnZpY2UoJ3BvcnRhbExvZ2luU2VydmljZScsIHBvcnRhbExvZ2luU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCdodHRwJywgaHR0cClcclxuXHJcbiAgICAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcilcclxuICAgIC5jb250cm9sbGVyKCdGbG93Q29udHJvbGxlcicsIEZsb3dDb250cm9sbGVyKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0dyaWRDb250cm9sbGVyJywgR3JpZENvbnRyb2xsZXIpXHJcbiAgICAuY29udHJvbGxlcignRGFzaGJvYXJkQ29udHJvbGxlcicsIERhc2hib2FyZENvbnRyb2xsZXIpXHJcbiAgICAuY29udHJvbGxlcignUG9ydGFsTG9naW5Db250cm9sbGVyJywgUG9ydGFsTG9naW5Db250cm9sbGVyKVxyXG5cclxuICAgIC5kaXJlY3RpdmUoJ2R5bmFtaWNDb250cm9sbGVyJywoKSA9PiBuZXcgZHluYW1pY0NvbnRyb2xsZXIoKSlcclxuICAgIC5kaXJlY3RpdmUoJ3NldERvbScsKCkgPT4gbmV3IHNldERvbSgpKVxyXG4gICAgLmRpcmVjdGl2ZSgnaW5EaWFsb2cnLCgpID0+IG5ldyBpbkRpYWxvZygpKTtcclxuXHJcbiAgICAvLyBQdXJlIGphdmFzY3JpcHQgRmxvdyBNYW5hZ2VyIHdpZGdldHM7XHJcbiAgICBmbG93TWFuYWdlci53aWRnZXQoJ3dpZGdldENvbm5lY3RvcicsIHdpZGdldENvbm5lY3Rvcik7XHJcbiAgICBmbG93TWFuYWdlci53aWRnZXQoJ3ZpZGVvUGxheWVyJywgdmlkZW9QbGF5ZXIpO1xyXG4gICAgZmxvd01hbmFnZXIud2lkZ2V0KCczZFBsYXllcicsICQzZFBsYXllcik7XHJcbiAgICBmbG93TWFuYWdlci53aWRnZXQoJ3RpbWVsaW5lJywgdGltZWxpbmUpO1xyXG4gICAgZmxvd01hbmFnZXIud2lkZ2V0KCdjb25maWdXaWRnZXQnLCBjb25maWdXaWRnZXQpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY29uZmlnID0gY29uZmlnO1xuZnVuY3Rpb24gY29uZmlnKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcblxuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuXG4gIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwO1xuICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyAoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcbiAgJ25nSW5qZWN0JztcbiAgLy8gRW5hYmxlIGxvZ1xuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuXG4gIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwO1xuICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucm91dGVyQ29uZmlnID0gcm91dGVyQ29uZmlnO1xuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcbiAgICAgICAgdXJsOiAnLycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BvcnRhbC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnRGFzaGJvYXJkQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH0pLnN0YXRlKCdwb3J0YWxMb2dpbicsIHtcbiAgICAgICAgdXJsOiAnL3BvcnRhbC1sb2dpbicsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BvcnRhbC9sb2dpbi9wb3J0YWwubG9naW4uaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdQb3J0YWxMb2dpbkNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9KTtcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICduZ0luamVjdCc7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdkYXNoYm9hcmQnLCB7XG4gICAgICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BvcnRhbC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0Rhc2hib2FyZENvbnRyb2xsZXInLFxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgncG9ydGFsTG9naW4nLCB7XG4gICAgICAgICAgICB1cmw6ICcvcG9ydGFsLWxvZ2luJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BvcnRhbC9sb2dpbi9wb3J0YWwubG9naW4uaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUG9ydGFsTG9naW5Db250cm9sbGVyJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgICB9KTtcblxuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ydW5CbG9jayA9IHJ1bkJsb2NrO1xuZnVuY3Rpb24gcnVuQmxvY2soJHJvb3RTY29wZSwgJGxvZywgJHN0YXRlLCAkY29va2llU3RvcmUpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgJGxvZy5sb2coXCJydW5CbG9ja1wiKTtcbiAgICAkcm9vdFNjb3BlLnNob3dMb2dpbkRpYWxvZyA9IHRydWU7XG4gICAgLy8kcm9vdFNjb3BlLiRlbWl0KCdnZXREYXRhJywgeydsb2dpbic6IHRydWV9KTtcblxuICAgIC8vICR3aW5kb3cuZ2EoJ2NyZWF0ZScsICdVQS04NjgyMDI4Ni0yJywgJ2F1dG8nKTtcbiAgICAvL1xuICAgIC8vIC8vIHRyYWNrIHBhZ2V2aWV3IG9uIHN0YXRlIGNoYW5nZVxuICAgIC8vICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gICAkd2luZG93LmdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgJGxvY2F0aW9uLnBhdGgoKSk7XG4gICAgLy8gfSk7XG5cblxuICAgICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChlLCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XG5cbiAgICAgICAgdmFyIGlzTG9naW4gPSB0b1N0YXRlLm5hbWUgPT09IFwicG9ydGFsTG9naW5cIjtcbiAgICAgICAgaWYgKGlzTG9naW4pIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gbm8gbmVlZCB0byByZWRpcmVjdFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm93LCByZWRpcmVjdCBvbmx5IG5vdCBhdXRoZW50aWNhdGVkXG5cbiAgICAgICAgdmFyIHVzZXJJbmZvID0gaXNBdXRoZWQoKTtcblxuICAgICAgICBpZiAodXNlckluZm8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHN0b3AgY3VycmVudCBleGVjdXRpb25cbiAgICAgICAgICAgICRzdGF0ZS5nbygncG9ydGFsTG9naW4nKTsgLy8gZ28gdG8gbG9naW5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gaXNBdXRoZWQoKSB7XG4gICAgICAgIGlmICgkY29va2llU3RvcmUuZ2V0KCd1c2VyRGF0YScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsImV4cG9ydCBmdW5jdGlvbiBydW5CbG9jayAoJHJvb3RTY29wZSwgJGxvZywgJHN0YXRlLCAkY29va2llU3RvcmUpICB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuXHJcbiAgICAkbG9nLmxvZyhcInJ1bkJsb2NrXCIpO1xyXG4gICAgJHJvb3RTY29wZS5zaG93TG9naW5EaWFsb2cgPSB0cnVlO1xyXG4gICAgLy8kcm9vdFNjb3BlLiRlbWl0KCdnZXREYXRhJywgeydsb2dpbic6IHRydWV9KTtcclxuXHJcbiAgICAvLyAkd2luZG93LmdhKCdjcmVhdGUnLCAnVUEtODY4MjAyODYtMicsICdhdXRvJyk7XHJcbiAgICAvL1xyXG4gICAgLy8gLy8gdHJhY2sgcGFnZXZpZXcgb24gc3RhdGUgY2hhbmdlXHJcbiAgICAvLyAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gICAkd2luZG93LmdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgJGxvY2F0aW9uLnBhdGgoKSk7XHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG4gICAgJHJvb3RTY29wZS4kb24oICckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uKGUsIHRvU3RhdGUgICwgdG9QYXJhbXNcclxuICAgICAgICAsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuICAgICAgICB2YXIgaXNMb2dpbiA9IHRvU3RhdGUubmFtZSA9PT0gXCJwb3J0YWxMb2dpblwiO1xyXG4gICAgICAgIGlmKGlzTG9naW4pe1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIG5vIG5lZWQgdG8gcmVkaXJlY3RcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG5vdywgcmVkaXJlY3Qgb25seSBub3QgYXV0aGVudGljYXRlZFxyXG5cclxuICAgICAgICB2YXIgdXNlckluZm8gPSBpc0F1dGhlZCgpO1xyXG5cclxuICAgICAgICBpZih1c2VySW5mbyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdG9wIGN1cnJlbnQgZXhlY3V0aW9uXHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygncG9ydGFsTG9naW4nKTsgLy8gZ28gdG8gbG9naW5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc0F1dGhlZCgpIHtcclxuICAgICAgICBpZigkY29va2llU3RvcmUuZ2V0KCd1c2VyRGF0YScpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNYWluQ29udHJvbGxlciA9IGV4cG9ydHMuTWFpbkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKGdyaWRTZXJ2aWNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYWluQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBbXTtcbiAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNDg2MDQ1NDcxODM2O1xuXG4gICAgdGhpcy50ZXN0RnVuY3Rpb24oZ3JpZFNlcnZpY2UpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1haW5Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ3Rlc3RGdW5jdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRlc3RGdW5jdGlvbihOYXZUcmVlU2VydmljZSkge1xuICAgICAgLy9jb25zb2xlLmxvZygncnVubmluZyB0ZXN0IGZ1bmN0aW9uIGlzIGF3ZXNvbWUnLCBOYXZUcmVlU2VydmljZS5nZXREYXRhKCkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYWluQ29udHJvbGxlcjtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvciAoZ3JpZFNlcnZpY2UpIHtcclxuICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gW107XHJcbiAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XHJcbiAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IDE0ODYwNDU0NzE4MzY7XHJcblxyXG4gICAgdGhpcy50ZXN0RnVuY3Rpb24oZ3JpZFNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgdGVzdEZ1bmN0aW9uKE5hdlRyZWVTZXJ2aWNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdydW5uaW5nIHRlc3QgZnVuY3Rpb24gaXMgYXdlc29tZScsIE5hdlRyZWVTZXJ2aWNlLmdldERhdGEoKSk7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBGbG93Q29udHJvbGxlciA9IGV4cG9ydHMuRmxvd0NvbnRyb2xsZXIgPSBmdW5jdGlvbiBGbG93Q29udHJvbGxlcihncmlkU2VydmljZSwgJHNjb3BlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGbG93Q29udHJvbGxlcik7XG5cbiAgICBjb25zb2xlLmxvZygnZmxvdyBjb250cm9sbGVyJyk7XG5cbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciByZWN0V2lkdGggPSAxMjA7XG4gICAgdmFyIHJlY3RIZWlnaHQgPSAzNTtcbiAgICB2YXIgZGVmcztcbiAgICB2YXIgZmlsdGVyO1xuICAgIHZhciBmZU1lcmdlO1xuICAgIHZhciB3RGF0YSA9IGdyaWRTZXJ2aWNlLmdldFdpZGdldERhdGEoKTtcbiAgICB2YXIgd2lkZ2V0cyA9IHdEYXRhLndpZGdldHM7XG4gICAgdmFyIHdpZGdldERhdGEgPSB3RGF0YS53aWRnZXREYXRhO1xuICAgIHZhciBpbmRleEJ5VGFnID0gd0RhdGEuaW5kZXhCeVRhZztcbiAgICB2YXIgdGVtcFg7XG4gICAgdmFyIHRlbXBZO1xuICAgIHZhciBkcmFnZ2VkID0gZmFsc2U7XG4gICAgdmFyIGRpc2FibGVEcmFnID0gZmFsc2U7XG4gICAgdm0uZGVmYXVsdE1ldGhvZCA9IGZsb3dNYW5hZ2VyLmdldERlZmF1bHRNZXRob2QoKTtcblxuICAgIHZtLm1pZEggPSAyMDAwO1xuICAgIHZtLm1pZFcgPSAyMDAwO1xuICAgIHZtLmZsb3dKU09OID0gZ3JpZFNlcnZpY2UuZ2V0RmxvdygpO1xuICAgIHZtLnNlbGVjdGVkVGFiID0gMDtcbiAgICB2bS53aWRnZXRTZXQgPSB3RGF0YS53aWRnZXRTZXQ7XG4gICAgdm0ubWNQb3B1cFRhYkluZGV4ID0gMDtcbiAgICB2bS5mbG93TGluZXMgPSB7fTtcblxuICAgIHZtLnZpcyA9IGQzLnNlbGVjdCgnI2ZtLW1pZHBhbicpLmF0dHIoJ3dpZHRoJywgdm0ubWlkVykuYXR0cignaGVpZ2h0Jywgdm0ubWlkSCkuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyB2bS5taWRXICsgXCIgXCIgKyB2bS5taWRIKS5vbihcImNvbnRleHRtZW51XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSkub24oXCJtb3VzZXVwXCIsIHN2Z01vdXNldXApO1xuXG4gICAgZnVuY3Rpb24gc3ZnTW91c2V1cCgpIHtcbiAgICAgICAgZGVzZWxlY3RBbGwoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXNlbGVjdEFsbCgpIHtcbiAgICAgICAgdm0udmlzLnNlbGVjdEFsbCgnZycpLmF0dHIoJ2NsYXNzJywgJ2Zsb3ctcmVjdC1tYWluJyk7XG4gICAgICAgIHZtLnNlbGVjdGVkV2lkZ2V0ID0gbnVsbDtcbiAgICAgICAgdm0uc2VsZWN0ZWRGdW5jdGlvbiA9IG51bGw7XG4gICAgICAgIGRpc2FibGVEcmFnID0gZmFsc2U7XG4gICAgICAgIGlmICghJHNjb3BlLiQkcGhhc2UpIHtcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdFbmQoZCwgaSkge1xuICAgICAgICBpZiAoZHJhZ2dlZCAmJiAhZGlzYWJsZURyYWcpIHtcbiAgICAgICAgICAgIC8vIFNhdmluZyB3aWRnZXREYXRhIGludG8gbG9jYWxzdG9yYWdlXG4gICAgICAgICAgICB2YXIgdGFnTmFtZSA9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidGFnLW5hbWVcIik7XG4gICAgICAgICAgICB2YXIgd2lkZ2V0ID0gZ2V0TXlXaWRnZXQodGFnTmFtZSk7XG4gICAgICAgICAgICB3aWRnZXQucmVjdFNldHRpbmdzLnggPSB0ZW1wWDtcbiAgICAgICAgICAgIHdpZGdldC5yZWN0U2V0dGluZ3MueSA9IHRlbXBZO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh3aWRnZXREYXRhKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3aWRnZXREYXRhJywgZGF0YSk7XG4gICAgICAgICAgICByZWZyZXNoTGluZXMoKTtcbiAgICAgICAgICAgIGRyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnaW5nKGQsIGkpIHtcbiAgICAgICAgaWYgKCFkaXNhYmxlRHJhZykge1xuICAgICAgICAgICAgdGVtcFggPSBkMy5ldmVudC54O1xuICAgICAgICAgICAgdGVtcFkgPSBkMy5ldmVudC55O1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBbZDMuZXZlbnQueCwgZDMuZXZlbnQueV0gKyBcIilcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSBkMy5zZWxlY3QodGhpcykuYXR0cihcInRhZy1uYW1lXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmZsb3dMaW5lcykge1xuICAgICAgICAgICAgICAgIGlmICh2bS5mbG93TGluZXNbaWR4XS5mcm9tID09IHRhZ05hbWUgfHwgdm0uZmxvd0xpbmVzW2lkeF0udG8gPT0gdGFnTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBkcmF3TGluZSh2bS5mbG93TGluZXNbaWR4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJhZ2dlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2bS5yZW1vdmVGbG93ID0gZnVuY3Rpb24gKGZyb20sIHRvLCBpZCkge1xuICAgICAgICBpZiAodm0uZmxvd0pTT05bZnJvbV1bdG9dKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0uZmxvd0pTT05bZnJvbV1bdG9dKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZtLmZsb3dKU09OW2Zyb21dW3RvXVtpZHhdLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLmZsb3dKU09OW2Zyb21dW3RvXS5zcGxpY2UoaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmxvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2bS5zZWxlY3RGdW5jdGlvbiA9IGZ1bmN0aW9uIChvdXRwdXQpIHtcblxuICAgICAgICBkaXNhYmxlRHJhZyA9IHRydWU7XG4gICAgICAgIGlmIChvdXRwdXQucGFyYW1zID09IFwibWV0aG9kXCIpIHtcbiAgICAgICAgICAgIG91dHB1dC5wYXJhbXMgPSB2bS5zZWxlY3RlZFdpZGdldC5zZXR0aW5ncy5ydW5QYXJhbXM7XG4gICAgICAgIH1cblxuICAgICAgICB2bS5zZWxlY3RlZEZ1bmN0aW9uID0gYW5ndWxhci5jb3B5KG91dHB1dCk7XG4gICAgICAgIHZtLnRlbXBGdW5jU2VsT2JqZWN0ID0ge307XG5cbiAgICAgICAgLyogQ2hlY2tpbmcgZm9yIHRoZSBjb25uZWN0YWJsZSBmdW5jdGlvbiAqL1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gd2lkZ2V0cykge1xuICAgICAgICAgICAgdmFyIHdpZGdldCA9IHdpZGdldERhdGFbaWR4XTtcbiAgICAgICAgICAgIGlmICh3aWRnZXQuaWQgIT0gdm0uc2VsZWN0ZWRXaWRnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFdpZCA9IHsgaWQ6IHdpZGdldC5pZCwgbmFtZTogd2lkZ2V0Lm5hbWUsIHRhZzogd2lkZ2V0LnRhZywgY29ubmVjdGFibGU6IGZhbHNlLCBpbnB1dHM6IFtdIH07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgamR4IGluIHdpZGdldC5tZXRob2RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGFuZ3VsYXIuY29weSh3aWRnZXQubWV0aG9kc1tqZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdElucFQgPSBhbmd1bGFyLmNvcHkoaW5wdXQucGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0U2VsVCA9IGFuZ3VsYXIuY29weSh2bS5zZWxlY3RlZEZ1bmN0aW9uLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodFNlbFQgJiYgdElucFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdENvdW50ID0gdElucFQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0Q291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdEpkeCBpbiB0SW5wVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0SWR4IGluIHRTZWxUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodFNlbFRbdElkeF0gPT0gdElucFRbdEpkeF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Q291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Q291bnRlciA+PSB0Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gaXNNZXRob2RGbG93RGVmaW5lZCh2bS5zZWxlY3RlZFdpZGdldC50YWcsIHdpZGdldC50YWcsIHZtLnNlbGVjdGVkRnVuY3Rpb24ubmFtZSwgaW5wdXQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBXaWQuY29ubmVjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVtcFdpZC50YWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wV2lkLmlucHV0cy5wdXNoKGlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2bS50ZW1wRnVuY1NlbE9iamVjdFt0ZW1wV2lkLnRhZ10gPSB0ZW1wV2lkO1xuICAgICAgICAgICAgICAgIHZtLm1ldGhvZHNUb1Nob3cgPSB0ZW1wV2lkLmlucHV0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0udGVtcEZ1bmNTZWxPYmplY3QpIHtcbiAgICAgICAgICAgIGlmICghdm0udGVtcEZ1bmNTZWxPYmplY3RbaWR4XS5jb25uZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciB0UmVjdCA9IGdldEQzUmVjdCh2bS50ZW1wRnVuY1NlbE9iamVjdFtpZHhdLnRhZyk7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBDbGFzcyA9IHRSZWN0LmF0dHIoJ2NsYXNzJyk7XG4gICAgICAgICAgICAgICAgdFJlY3QuYXR0cignY2xhc3MnLCB0ZW1wQ2xhc3MgKyAnIGRpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0udGVtcElucHV0ID0ge307XG4gICAgdm0udGVtcFNlbGVjdGVkSW5wdXQgPSB7fTtcblxuICAgIHZtLnJlbW92ZUlucHV0ID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0uc2VsZWN0ZWRXaWRnZXQubWV0aG9kcykge1xuICAgICAgICAgICAgaWYgKHZtLnNlbGVjdGVkV2lkZ2V0Lm1ldGhvZHNbaWR4XS5pZCA9PSBtZXRob2QuaWQpIHtcbiAgICAgICAgICAgICAgICB2bS5zZWxlY3RlZFdpZGdldC5tZXRob2RzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgICAgIGlmICh2bS50ZW1wU2VsZWN0ZWRJbnB1dC5pZCA9PSBtZXRob2QuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm0udGVtcFNlbGVjdGVkSW5wdXQgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0ucmVtb3ZlUGFyYW0gPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgdm0udGVtcFNlbGVjdGVkSW5wdXQucGFyYW1zLnNwbGljZSh2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXMuaW5kZXhPZihwYXJhbSksIDEpO1xuICAgIH07XG5cbiAgICB2bS5hZGRQYXJhbSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQgPT0gbnVsbCB8fCBldmVudC5rZXlDb2RlID09IDMyKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgIT0gbnVsbCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICh2bS50ZW1wUGFyYW0gIT0gbnVsbCkgdm0udGVtcFBhcmFtLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh2bS50ZW1wUGFyYW0gIT0gbnVsbCAmJiB2bS50ZW1wUGFyYW0gIT0gJycpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0udGVtcFNlbGVjdGVkSW5wdXQucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXNbaWR4XSA9PSB2bS50ZW1wUGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXMpIHZtLnRlbXBTZWxlY3RlZElucHV0LnBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXMucHVzaCh2bS50ZW1wUGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICB2bS50ZW1wUGFyYW0gPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0uZm9jdXNJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI3BhcmFtSW5wdXQnKS5mb2N1cygpO1xuICAgIH07XG5cbiAgICB2bS5hZGRJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1ldGhvZCA9IGFuZ3VsYXIuY29weSh2bS50ZW1wSW5wdXQpO1xuICAgICAgICB2bS50ZW1wSW5wdXQgPSB7fTtcbiAgICAgICAgbWV0aG9kLmlkID0gdm0uc2VsZWN0ZWRXaWRnZXQubWV0aG9kcy5sZW5ndGg7XG4gICAgICAgIHZtLnNlbGVjdGVkV2lkZ2V0Lm1ldGhvZHMucHVzaChtZXRob2QpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuYWNlT3B0aW9uID0ge1xuICAgICAgICBtb2RlOiAnamF2YXNjcmlwdCcsXG4gICAgICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKGVkaXRvcikge1xuICAgICAgICAgICAgLy8gZGVmYXVsdHNcbiAgICAgICAgICAgIC8vIGVkaXRvci5zZXRUaGVtZShcImFjZS90aGVtZS9tb25va2FpXCIpO1xuICAgICAgICAgICAgLy8gb3B0aW9uc1xuICAgICAgICAgICAgZWRpdG9yLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgICAgIHNob3dHdXR0ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvd1ByaW50TWFyZ2luOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0uY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjZm0tbWV0aG9kLWNyZWF0ZScpLnNob3coKTtcbiAgICB9O1xuXG4gICAgdm0uc2F2ZU1ldGhvZENyZWF0ZVBvcHVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2lkZ2V0RGF0YScsIEpTT04uc3RyaW5naWZ5KHdpZGdldERhdGEpKTtcbiAgICAgICAgJCgnI2ZtLW1ldGhvZC1jcmVhdGUnKS5oaWRlKCk7XG4gICAgICAgIC8vTUFLRSBBUEkgQ0FMTCBUTyBTQVZFIERBVEFcbiAgICB9O1xuXG4gICAgdm0uY2xvc2VNZXRob2RDcmVhdGVQb3B1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2ZtLW1ldGhvZC1jcmVhdGUnKS5oaWRlKCk7XG4gICAgfTtcblxuICAgIHZtLmVkaXRNZXRob2QgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1ldGhvZCk7XG4gICAgfTtcblxuICAgIHZtLmNhbmNlbEFzc2lnbmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2ZtLW1ldGhvZC1wb3BDb250JykuaGlkZSgpO1xuICAgIH07XG5cbiAgICB2bS5hc3NpZ25GbG93ID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICAkKCcjZm0tbWV0aG9kLXBvcENvbnQnKS5oaWRlKCk7XG4gICAgICAgIHZtLnRlbXBGbG93T2JqZWN0ID0ge307XG4gICAgICAgIHZtLnRlbXBGbG93T2JqZWN0LmZyb20gPSBhbmd1bGFyLmNvcHkodm0uc2VsZWN0ZWRXaWRnZXQpO1xuICAgICAgICB2bS50ZW1wRmxvd09iamVjdC50byA9IGFuZ3VsYXIuY29weSh2bS50ZW1wU2VsZWN0ZWRXaWRnZXQpO1xuICAgICAgICB2bS50ZW1wRmxvd09iamVjdC5mcm9tTWV0aG9kID0gYW5ndWxhci5jb3B5KHZtLnNlbGVjdGVkRnVuY3Rpb24pO1xuICAgICAgICB2bS50ZW1wRmxvd09iamVjdC50b01ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgdm0uc2VsZWN0ZWRGdW5jdGlvbiA9IG51bGw7XG4gICAgICAgIHZtLnRlbXBTZWxlY3RlZFdpZGdldCA9IG51bGw7XG4gICAgICAgIHZtLnNlbGVjdGVkV2lkZ2V0ID0gbnVsbDtcbiAgICAgICAgZ2VuRmxvdyh2bS50ZW1wRmxvd09iamVjdCk7XG4gICAgICAgIGRlc2VsZWN0QWxsKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdlbkZsb3coZGF0YSkge1xuICAgICAgICB2bS5mbG93SlNPTiA9IGdyaWRTZXJ2aWNlLmdldEZsb3coKTtcbiAgICAgICAgY29uc29sZS5sb2codm0uZmxvd0pTT04pO1xuICAgICAgICBpZiAoIXZtLmZsb3dKU09OKSB7XG4gICAgICAgICAgICB2bS5mbG93SlNPTiA9IHt9O1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ltIGhlcmUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShkYXRhLmZyb20udGFnIGluIHZtLmZsb3dKU09OKSkgdm0uZmxvd0pTT05bZGF0YS5mcm9tLnRhZ10gPSB7fTtcbiAgICAgICAgaWYgKCF2bS5mbG93SlNPTltkYXRhLmZyb20udGFnXVtkYXRhLnRvLnRhZ10pIHtcbiAgICAgICAgICAgIHZtLmZsb3dKU09OW2RhdGEuZnJvbS50YWddW2RhdGEudG8udGFnXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmbG93Rm91bmQgPSBpc01ldGhvZEZsb3dEZWZpbmVkKGRhdGEuZnJvbS50YWcsIGRhdGEudG8udGFnLCBkYXRhLmZyb21NZXRob2QubmFtZSwgZGF0YS50b01ldGhvZC5uYW1lKTtcbiAgICAgICAgaWYgKCFmbG93Rm91bmQpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHZtLmZsb3dKU09OW2RhdGEuZnJvbS50YWddW2RhdGEudG8udGFnXS5sZW5ndGg7XG4gICAgICAgICAgICB2bS5mbG93SlNPTltkYXRhLmZyb20udGFnXVtkYXRhLnRvLnRhZ10ucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGluZGV4LFxuICAgICAgICAgICAgICAgIGZyb206IGRhdGEuZnJvbU1ldGhvZC5uYW1lLFxuICAgICAgICAgICAgICAgIHRvOiBkYXRhLnRvTWV0aG9kLm5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdXBkYXRlRmxvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tGTE9XIE1BTkFHRVJdIE11bHRpcGxlIGluc3RhbmNlIG9mIHNhbWUgZmxvdyBpcyBub3QgYWxsb3dlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRmxvdygpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zsb3dKU09OJywgSlNPTi5zdHJpbmdpZnkodm0uZmxvd0pTT04pKTtcbiAgICAgICAgcmVmcmVzaExpbmVzKCk7XG4gICAgICAgIGZsb3dNYW5hZ2VyLnJlZnJlc2hGbG93KGdyaWRTZXJ2aWNlLmdldEZsb3coKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNNZXRob2RGbG93RGVmaW5lZChmcm9tLCB0bywgZm0sIHRtKSB7XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIXZtLmZsb3dKU09OKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghdm0uZmxvd0pTT05bZnJvbV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCF2bS5mbG93SlNPTltmcm9tXVt0b10pIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmZsb3dKU09OW2Zyb21dW3RvXSkge1xuICAgICAgICAgICAgdmFyIHRlbXBPYmogPSB2bS5mbG93SlNPTltmcm9tXVt0b11baWR4XTtcbiAgICAgICAgICAgIGlmICh0ZW1wT2JqLmZyb20gPT0gZm0gJiYgdGVtcE9iai50byA9PSB0bSkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ1N0YXJ0KGQsIGkpIHtcbiAgICAgICAgaWYgKCF2bS5zZWxlY3RlZEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdGFnTmFtZSA9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidGFnLW5hbWVcIik7XG4gICAgICAgICAgICB2bS5zZWxlY3RlZFdpZGdldCA9IHdpZGdldHNbaW5kZXhCeVRhZ1t0YWdOYW1lXV07XG4gICAgICAgICAgICB2bS52aXMuc2VsZWN0QWxsKCdnJykuYXR0cignY2xhc3MnLCAnZmxvdy1yZWN0LW1haW4nKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwiY2xhc3NcIiwgJ2Zsb3ctcmVjdC1tYWluIGFjdGl2ZScpO1xuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSBkMy5zZWxlY3QodGhpcykuYXR0cihcInRhZy1uYW1lXCIpO1xuICAgICAgICAgICAgdm0udGVtcFNlbGVjdGVkV2lkZ2V0ID0gZ2V0TXlXaWRnZXQodGFnTmFtZSk7XG5cbiAgICAgICAgICAgIHZhciBjb25uZWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLnRlbXBGdW5jU2VsT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHZtLnRlbXBGdW5jU2VsT2JqZWN0W2lkeF0uY29ubmVjdGFibGUgPT0gdHJ1ZSAmJiB2bS50ZW1wRnVuY1NlbE9iamVjdFtpZHhdLnRhZyA9PSB2bS50ZW1wU2VsZWN0ZWRXaWRnZXQudGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29ubmVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgc2hvd01ldGhvZFBvcHVwKGQzLmV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dNZXRob2RQb3B1cChlKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gZS5wYWdlWDtcbiAgICAgICAgdmFyIHRvcCA9IGUucGFnZVk7XG4gICAgICAgIHZhciBib3R0b20gPSAnYXV0byc7XG4gICAgICAgIHZhciByaWdodCA9ICdhdXRvJztcbiAgICAgICAgaWYgKGxlZnQgPiAkKHdpbmRvdykud2lkdGgoKSAvIDIpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gJCh3aW5kb3cpLndpZHRoKCkgLSBsZWZ0O1xuICAgICAgICAgICAgbGVmdCA9ICdhdXRvJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gJCh3aW5kb3cpLmhlaWdodCgpIC8gMikge1xuICAgICAgICAgICAgYm90dG9tID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gdG9wO1xuICAgICAgICAgICAgdG9wID0gJ2F1dG8nO1xuICAgICAgICB9XG4gICAgICAgICQoJyNmbS1tZXRob2QtcG9wJykuY3NzKHsgbGVmdDogbGVmdCwgdG9wOiB0b3AsIGJvdHRvbTogYm90dG9tLCByaWdodDogcmlnaHQgfSk7XG4gICAgICAgICQoJyNmbS1tZXRob2QtcG9wQ29udCcpLnNob3coKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREM1JlY3QoaWR4KSB7XG4gICAgICAgIHJldHVybiBkMy5zZWxlY3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZHJlY3QtJyArIGlkeCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE15V2lkZ2V0KHRhZ05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHdpZGdldERhdGFbaW5kZXhCeVRhZ1t0YWdOYW1lXV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TXlOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgICAgZDMuc2VsZWN0QWxsKFwiI2ZtLW1pZHBhbiA+ICpcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgZGVmcyA9IHZtLnZpcy5hcHBlbmQoXCJkZWZzXCIpO1xuICAgICAgICBmaWx0ZXIgPSBkZWZzLmFwcGVuZChcImZpbHRlclwiKS5hdHRyKFwiaWRcIiwgXCJkcm9wLXNoYWRvd1wiKS5hdHRyKFwiaGVpZ2h0XCIsIFwiMTUwJVwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZChcImZlR2F1c3NpYW5CbHVyXCIpLmF0dHIoXCJpblwiLCBcIlNvdXJjZUFscGhhXCIpLmF0dHIoXCJzdGREZXZpYXRpb25cIiwgMikuYXR0cihcInJlc3VsdFwiLCBcIm9mZnNldGJsdXJcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmQoXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIpLmFwcGVuZChcImZlRnVuY0FcIikuYXR0cigndHlwZScsICdsaW5lYXInKS5hdHRyKCdzbG9wZScsICcwLjMnKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZChcImZlT2Zmc2V0XCIpLmF0dHIoXCJpblwiLCBcImJsdXJcIikuYXR0cihcImR4XCIsIDEpLmF0dHIoXCJkeVwiLCAxKS5hdHRyKFwicmVzdWx0XCIsIFwib2Zmc2V0Qmx1clwiKTtcblxuICAgICAgICBmZU1lcmdlID0gZmlsdGVyLmFwcGVuZChcImZlTWVyZ2VcIik7XG4gICAgICAgIGZlTWVyZ2UuYXBwZW5kKFwiZmVNZXJnZU5vZGVcIikuYXR0cihcImluXCIsIFwib2Zmc2V0Qmx1clwiKTtcbiAgICAgICAgZmVNZXJnZS5hcHBlbmQoXCJmZU1lcmdlTm9kZVwiKS5hdHRyKFwiaW5cIiwgXCJTb3VyY2VHcmFwaGljXCIpO1xuXG4gICAgICAgIHZhciByZWN0RHJhZyA9IGQzLmRyYWcoKS5zdWJqZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgdmFyIHRyID0gZ2V0VHJhbnNsYXRpb24odC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogdC5hdHRyKFwieFwiKSArIHRyWzBdLFxuICAgICAgICAgICAgICAgIHk6IHQuYXR0cihcInlcIikgKyB0clsxXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkub24oXCJkcmFnXCIsIGRyYWdnaW5nKS5vbihcImVuZFwiLCBkcmFnRW5kKTtcblxuICAgICAgICBmb3IgKHZhciBpZHggaW4gd2lkZ2V0cykge1xuXG4gICAgICAgICAgICBpZiAoIXdpZGdldERhdGFbaWR4XS5yZWN0U2V0dGluZ3MgfHwgIXdpZGdldERhdGFbaWR4XS5yZWN0U2V0dGluZ3MueCkge1xuICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncykgd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncyA9IHt9O1xuICAgICAgICAgICAgICAgIHdpZGdldERhdGFbaWR4XS5yZWN0U2V0dGluZ3MueCA9IDA7XG4gICAgICAgICAgICAgICAgd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncy55ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2lkZ2V0c1tpZHhdLnJlY3QgPSB2bS52aXMuYXBwZW5kKFwiZ1wiKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncy54ICsgXCIsXCIgKyB3aWRnZXREYXRhW2lkeF0ucmVjdFNldHRpbmdzLnkgKyBcIilcIikuYXR0cihcInRhZy1uYW1lXCIsIHdpZGdldHNbaWR4XS50YWcpLmF0dHIoJ2NsYXNzJywgJ2Zsb3ctcmVjdC1tYWluJykuYXR0cignaWQnLCAnd2lkcmVjdC0nICsgd2lkZ2V0c1tpZHhdLnRhZykub24oXCJtb3VzZWRvd25cIiwgZHJhZ1N0YXJ0KTtcblxuICAgICAgICAgICAgaWYgKGdyaWRTZXJ2aWNlLmlzQ2hyb21lKSB3aWRnZXRzW2lkeF0ucmVjdC5zdHlsZShcImZpbHRlclwiLCBcInVybCgjZHJvcC1zaGFkb3cpXCIpO1xuXG4gICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJ3aWR0aFwiLCByZWN0SGVpZ2h0KS5hdHRyKFwiaGVpZ2h0XCIsIHJlY3RIZWlnaHQpLmF0dHIoJ2ZpbGwnLCB3aWRnZXRzW2lkeF0uY29sb3IpLmF0dHIoJ2ZvbnQtc2l6ZScsICc3MCUnKS5hdHRyKCdmb250LWZhbWlseScsICdnb3RoYW0nKS5hdHRyKCdjbGFzcycsICdmbG93LXJlY3QtZHJhZ2dlcicpO1xuICAgICAgICAgICAgd2lkZ2V0c1tpZHhdLnJlY3QuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwid2lkdGhcIiwgcmVjdFdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIHJlY3RIZWlnaHQpLmF0dHIoJ2ZpbGwnLCAnI2ZmZicpLmF0dHIoJ3gnLCByZWN0SGVpZ2h0KS5hdHRyKCdmb250LXNpemUnLCAnNzAlJykuYXR0cignZm9udC1mYW1pbHknLCAnZ290aGFtJyk7XG4gICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ2dvdGhhbScpLmF0dHIoJ2ZvbnQtc2l6ZScsICc5MCUnKS5hdHRyKCdmaWxsJywgJyM1NTUnKS5hdHRyKCdsaW5lLWhlaWdodCcsIHJlY3RIZWlnaHQpLmF0dHIoJ3gnLCByZWN0SGVpZ2h0ICsgMTApLmF0dHIoJ3knLCAyMikuYXR0cignei1pbmRleCcsIDExMCkudGV4dChnZXRNeU5hbWUod2lkZ2V0RGF0YVtpZHhdLnRhZykpO1xuICAgICAgICAgICAgd2lkZ2V0c1tpZHhdLnJlY3QuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwid2lkdGhcIiwgMTApLmF0dHIoXCJoZWlnaHRcIiwgcmVjdEhlaWdodCkuYXR0cihcInhcIiwgcmVjdFdpZHRoICsgcmVjdEhlaWdodCkuYXR0cignZmlsbCcsICcjOTk5JykuYXR0cignZm9udC1zaXplJywgJzcwJScpLmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ2dvdGhhbScpLmF0dHIoJ2NsYXNzJywgJ2Zsb3ctcmVjdC1kcmFnZ2VyJyk7XG4gICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcInJcIiwgNikuYXR0cignc3Ryb2tlLXdpZHRoJywgMSkuYXR0cignc3Ryb2tlJywgJyM2NjYnKS5hdHRyKFwiY3hcIiwgcmVjdFdpZHRoICsgcmVjdEhlaWdodCArIDEwKS5hdHRyKCdjeScsIHJlY3RIZWlnaHQgLyAyKS5hdHRyKCdmaWxsJywgJyNkZGQnKTtcbiAgICAgICAgICAgIHdpZGdldHNbaWR4XS5yZWN0LmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiclwiLCA2KS5hdHRyKCdzdHJva2Utd2lkdGgnLCAxKS5hdHRyKCdzdHJva2UnLCAnIzY2NicpLmF0dHIoJ2NsYXNzJywgJ2ZtLW5vZGUtZmlyc3QtY2lyY2xlJykuYXR0cihcImN4XCIsIDApLmF0dHIoJ2N5JywgcmVjdEhlaWdodCAvIDIpLmF0dHIoJ2ZpbGwnLCAnI2RkZCcpO1xuICAgICAgICAgICAgd2lkZ2V0c1tpZHhdLnJlY3QuY2FsbChyZWN0RHJhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExpbmVzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExpbmVzKCkge1xuICAgICAgICB2YXIgY3VyckZsb3dzID0gW107XG4gICAgICAgIGZvciAodmFyIGlkeCBpbiB2bS5mbG93TGluZXMpIHtcbiAgICAgICAgICAgIHZtLmZsb3dMaW5lc1tpZHhdLmxpbmUucmVtb3ZlKCk7XG4gICAgICAgICAgICBkZWxldGUgdm0uZmxvd0xpbmVzW2lkeF07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgZnJvbVRhZyBpbiB2bS5mbG93SlNPTikge1xuICAgICAgICAgICAgaWYgKHdpZGdldHNbaW5kZXhCeVRhZ1tmcm9tVGFnXV0pIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJvbVJlY3QgPSB3aWRnZXRzW2luZGV4QnlUYWdbZnJvbVRhZ11dLnJlY3Q7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdG9UYWcgaW4gdm0uZmxvd0pTT05bZnJvbVRhZ10pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmZsb3dKU09OW2Zyb21UYWddW3RvVGFnXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b1JlY3QgPSB3aWRnZXRzW2luZGV4QnlUYWdbdG9UYWddXS5yZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZyb21Db29yZHMgPSBnZXRUcmFuc2xhdGlvbihmcm9tUmVjdC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b0Nvb3JkcyA9IGdldFRyYW5zbGF0aW9uKHRvUmVjdC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRkxPID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Db29yZHM6IGZyb21Db29yZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db29yZHM6IHRvQ29vcmRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGZyb21UYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHRvVGFnXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0xpbmUodGVtcEZMTyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShmcm9tVGFnICsgdG9UYWcgaW4gdm0uZmxvd0xpbmVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZsb3dMaW5lc1tmcm9tVGFnICsgdG9UYWddID0gdGVtcEZMTztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJGbG93cy5wdXNoKGZyb21UYWcgKyB0b1RhZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZDMuc2VsZWN0QWxsKFwiI2ZtLW1pZHBhbiA+ICpcIikuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgLy8gc2VsZWN0IHRoZSBwYXJlbnQgYW5kIHNvcnQgdGhlIHBhdGgnc1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEQoZnJvbUNvb3JkcywgdG9Db29yZHMpIHtcbiAgICAgICAgZnJvbUNvb3Jkc1sxXSArPSAxNztcbiAgICAgICAgZnJvbUNvb3Jkc1swXSArPSAxNjU7XG4gICAgICAgIHRvQ29vcmRzWzFdICs9IDE3O1xuICAgICAgICByZXR1cm4gW1tmcm9tQ29vcmRzWzBdLCBmcm9tQ29vcmRzWzFdXSwgW2Zyb21Db29yZHNbMF0gKyA1LCBmcm9tQ29vcmRzWzFdXSwgW2Zyb21Db29yZHNbMF0gKyAyNSwgZnJvbUNvb3Jkc1sxXV0sIFt0b0Nvb3Jkc1swXSAtIDI1LCB0b0Nvb3Jkc1sxXV0sIFt0b0Nvb3Jkc1swXSAtIDUsIHRvQ29vcmRzWzFdXSwgW3RvQ29vcmRzWzBdLCB0b0Nvb3Jkc1sxXV1dO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZWxpbmUgPSBkMy5saW5lKCkuY3VydmUoZDMuY3VydmVCYXNpcykueChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZFswXTtcbiAgICB9KS55KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkWzFdO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZHJhd0xpbmUoZGF0YSkge1xuICAgICAgICB2YXIgZnJvbVJlY3QgPSB3aWRnZXRzW2luZGV4QnlUYWdbZGF0YS5mcm9tXV0ucmVjdDtcbiAgICAgICAgdmFyIHRvUmVjdCA9IHdpZGdldHNbaW5kZXhCeVRhZ1tkYXRhLnRvXV0ucmVjdDtcbiAgICAgICAgdmFyIGZyb21Db29yZHMgPSBnZXRUcmFuc2xhdGlvbihmcm9tUmVjdC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgdmFyIHRvQ29vcmRzID0gZ2V0VHJhbnNsYXRpb24odG9SZWN0LmF0dHIoXCJ0cmFuc2Zvcm1cIikpO1xuICAgICAgICB2YXIgZCA9IGdldEQoZnJvbUNvb3JkcywgdG9Db29yZHMpO1xuICAgICAgICBkYXRhLmZyb21Db29yZHMgPSBmcm9tQ29vcmRzO1xuICAgICAgICBkYXRhLnRvQ29vcmRzID0gdG9Db29yZHM7XG5cbiAgICAgICAgaWYgKGRhdGEubGluZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkYXRhLmxpbmUgPSB2bS52aXMuYXBwZW5kKCdwYXRoJykuYXR0cignZCcsIHZhbHVlbGluZShkKSkuYXR0cignc3Ryb2tlJywgJyM3NzcnKS5hdHRyKCdzdHJva2Utd2lkdGgnLCA0KS5hdHRyKCdmaWxsJywgJ25vbmUnKS5hdHRyKCd6LWluZGV4JywgLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YS5saW5lLmF0dHIoJ2QnLCB2YWx1ZWxpbmUoZCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb24odHJhbnNmb3JtKSB7XG4gICAgICAgIHZhciBnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xuICAgICAgICBnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidHJhbnNmb3JtXCIsIHRyYW5zZm9ybSk7XG4gICAgICAgIHZhciBtYXRyaXggPSBnLnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkubWF0cml4O1xuICAgICAgICByZXR1cm4gW21hdHJpeC5lLCBtYXRyaXguZl07XG4gICAgfVxuXG4gICAgZHJhdygpO1xuXG4gICAgLypcbiAgICAgKlxuICAgICAqICAgQ29kZSBmb3IgTGVmdCBwYW5cbiAgICAgKlxuICAgICAqICovXG5cbiAgICB2bS5ncmFiV2lkZ2V0ID0gZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIHZhciB3aWREb20gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB2bS53aWREb20gPSB3aWREb20uY2xvbmUoKTtcbiAgICAgICAgdm0ud2lkRG9tLmRhdGEgPSBkYXRhO1xuICAgICAgICB2bS53aWRnZXRHcmFiYmVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIHBhZ2VYID0gd2lkRG9tLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgIHZhciBwYWdlWSA9IHdpZERvbS5vZmZzZXQoKS50b3A7XG4gICAgICAgIHZtLndpZERvbS5sZWZ0T2ZmID0gZXZlbnQucGFnZVggLSBwYWdlWDtcbiAgICAgICAgdm0ud2lkRG9tLnRvcE9mZiA9IGV2ZW50LnBhZ2VZIC0gcGFnZVk7XG4gICAgICAgIGlmICh2bS53aWREb20pIHtcbiAgICAgICAgICAgIHZtLndpZERvbS5hZGRDbGFzcygnZHVtbXknKTtcbiAgICAgICAgICAgIHZtLndpZERvbS5jc3Moe1xuICAgICAgICAgICAgICAgIGxlZnQ6IHBhZ2VYLFxuICAgICAgICAgICAgICAgIHRvcDogcGFnZVksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZERvbS53aWR0aCgpLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcjZm0tbGVmdHBhbicpLmFwcGVuZCh2bS53aWREb20pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICQod2luZG93KS5tb3VzZXVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdm0uZHJvcFdpZGdldCgpO1xuICAgIH0pO1xuICAgICQod2luZG93KS5tb3VzZW1vdmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZtLmRyYWdnaW5nV2lkZ2V0KGV2ZW50KTtcbiAgICB9KTtcblxuICAgIHZtLmRyb3BXaWRnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh2bS53aWREb20gJiYgdm0ud2lkZ2V0R3JhYmJlZCkge1xuICAgICAgICAgICAgdm0ud2lkZ2V0R3JhYmJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHRlbXBEYXRhID0ge1xuICAgICAgICAgICAgICAgIG9mZnNldDogdm0ud2lkRG9tLm9mZnNldCgpLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB2bS53aWREb20ud2lkdGgoKSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHZtLndpZERvbS5oZWlnaHQoKSxcbiAgICAgICAgICAgICAgICBkYXRhOiB2bS53aWREb20uZGF0YVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1ha2VOZXdXaWRnZXQodGVtcERhdGEpO1xuICAgICAgICAgICAgdm0ud2lkRG9tLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZtLmRyYWdnaW5nV2lkZ2V0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh2bS53aWRnZXRHcmFiYmVkKSB7XG4gICAgICAgICAgICB2bS53aWREb20uY3NzKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBldmVudC5wYWdlWCAtIHZtLndpZERvbS5sZWZ0T2ZmLFxuICAgICAgICAgICAgICAgIHRvcDogZXZlbnQucGFnZVkgLSB2bS53aWREb20udG9wT2ZmXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY29wZURhdGEod0RhdGFSZXNwKSB7XG5cbiAgICAgICAgd0RhdGEgPSB3RGF0YVJlc3A7XG4gICAgICAgIHdpZGdldERhdGEgPSB3RGF0YS53aWRnZXREYXRhO1xuICAgICAgICB3aWRnZXRzID0gd0RhdGEud2lkZ2V0cztcbiAgICAgICAgaW5kZXhCeVRhZyA9IHdEYXRhLmluZGV4QnlUYWc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZU5ld1dpZGdldChwYXJhbXMpIHtcbiAgICAgICAgdmFyIG1pZFBhbk9mZiA9ICQoJy5mbS1taWRwYW4nKS5vZmZzZXQoKTtcbiAgICAgICAgdmFyIG1pZFdpZHRoID0gJCgnLmZtLW1pZHBhbicpLndpZHRoKCk7XG4gICAgICAgIHZhciBtaWRIZWlnaHQgPSAkKCcuZm0tbWlkcGFuJykuaGVpZ2h0KCk7XG4gICAgICAgIHZhciBkYXRhID0gYW5ndWxhci5jb3B5KHBhcmFtcy5kYXRhKTtcbiAgICAgICAgaWYgKHBhcmFtcy5vZmZzZXQubGVmdCA+IG1pZFBhbk9mZi5sZWZ0ICYmIHBhcmFtcy5vZmZzZXQudG9wID4gbWlkUGFuT2ZmLnRvcCAmJiBwYXJhbXMub2Zmc2V0LmxlZnQgKyBwYXJhbXMud2lkdGggLyAyIDwgbWlkUGFuT2ZmLmxlZnQgKyBtaWRXaWR0aCAmJiBwYXJhbXMub2Zmc2V0LnRvcCArIHBhcmFtcy5oZWlnaHQgLyAyIDwgbWlkUGFuT2ZmLnRvcCArIG1pZEhlaWdodCkge1xuICAgICAgICAgICAgLy9tYWtpbmcgZGF0YSBmb3IgbmV3IHdpZGdldFxuICAgICAgICAgICAgZGF0YS50YWcgPSBnZW5lcmF0ZUludGFuY2VJZChkYXRhKTtcbiAgICAgICAgICAgIGRhdGEuaWQgPSBnZW5lcmF0ZVVuaXF1ZUlkKCk7XG4gICAgICAgICAgICBkYXRhLnJlY3RTZXR0aW5ncyA9IHt9O1xuICAgICAgICAgICAgZGF0YS5yZWN0U2V0dGluZ3MueSA9IHBhcmFtcy5vZmZzZXQudG9wIC0gJCgnI2ZtLW1pZHBhbicpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIGRhdGEucmVjdFNldHRpbmdzLnggPSBwYXJhbXMub2Zmc2V0LmxlZnQgLSAkKCcjZm0tbWlkcGFuJykub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgICAgIGdyaWRTZXJ2aWNlLnVwZGF0ZVdpZGdldERhdGEoZGF0YSwgZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVTY29wZURhdGEocmVzcCk7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xuICAgICAgICB2YXIgdWlkO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgdWlkID0gZ2V0UmFuZG9tSW50KDEsIDEwMDAwMCk7XG4gICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB3aWRnZXREYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldERhdGFbaWR4XS5pZCA9PSB1aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdWlkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUludGFuY2VJZChkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhLm5hbWUgKyAocGFyc2VJbnQod2lkZ2V0RGF0YS5sZW5ndGgpICsgMSk7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2Zsb3dNYW5hZ2VyL2Zsb3dNYW5hZ2VyLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgRmxvd0NvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoZ3JpZFNlcnZpY2UsICRzY29wZSkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdmbG93IGNvbnRyb2xsZXInKTtcblxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICB2YXIgcmVjdFdpZHRoID0gMTIwO1xuICAgICAgICB2YXIgcmVjdEhlaWdodCA9IDM1O1xuICAgICAgICB2YXIgZGVmcztcbiAgICAgICAgdmFyIGZpbHRlcjtcbiAgICAgICAgdmFyIGZlTWVyZ2U7XG4gICAgICAgIHZhciB3RGF0YSA9IGdyaWRTZXJ2aWNlLmdldFdpZGdldERhdGEoKTtcbiAgICAgICAgdmFyIHdpZGdldHMgPSB3RGF0YS53aWRnZXRzO1xuICAgICAgICB2YXIgd2lkZ2V0RGF0YSA9IHdEYXRhLndpZGdldERhdGE7XG4gICAgICAgIHZhciBpbmRleEJ5VGFnID0gd0RhdGEuaW5kZXhCeVRhZztcbiAgICAgICAgdmFyIHRlbXBYO1xuICAgICAgICB2YXIgdGVtcFk7XG4gICAgICAgIHZhciBkcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgIHZhciBkaXNhYmxlRHJhZyA9IGZhbHNlO1xuICAgICAgICB2bS5kZWZhdWx0TWV0aG9kID0gZmxvd01hbmFnZXIuZ2V0RGVmYXVsdE1ldGhvZCgpO1xuXG4gICAgICAgIHZtLm1pZEggPSAyMDAwO1xuICAgICAgICB2bS5taWRXID0gMjAwMDtcbiAgICAgICAgdm0uZmxvd0pTT04gPSBncmlkU2VydmljZS5nZXRGbG93KCk7XG4gICAgICAgIHZtLnNlbGVjdGVkVGFiID0gMDtcbiAgICAgICAgdm0ud2lkZ2V0U2V0ID0gd0RhdGEud2lkZ2V0U2V0O1xuICAgICAgICB2bS5tY1BvcHVwVGFiSW5kZXggPSAwO1xuICAgICAgICB2bS5mbG93TGluZXMgPSB7fTtcblxuXG4gICAgICAgIHZtLnZpcyA9IGQzLnNlbGVjdCgnI2ZtLW1pZHBhbicpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCB2bS5taWRXKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHZtLm1pZEgpXG4gICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyB2bS5taWRXICsgXCIgXCIgKyB2bS5taWRIKVxuICAgICAgICAgICAgLm9uKFwiY29udGV4dG1lbnVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNldXBcIiwgc3ZnTW91c2V1cClcblxuICAgICAgICBmdW5jdGlvbiBzdmdNb3VzZXVwKCkge1xuICAgICAgICAgICAgZGVzZWxlY3RBbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRlc2VsZWN0QWxsKCkge1xuICAgICAgICAgICAgdm0udmlzLnNlbGVjdEFsbCgnZycpLmF0dHIoJ2NsYXNzJywgJ2Zsb3ctcmVjdC1tYWluJyk7XG4gICAgICAgICAgICB2bS5zZWxlY3RlZFdpZGdldCA9IG51bGw7XG4gICAgICAgICAgICB2bS5zZWxlY3RlZEZ1bmN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGRpc2FibGVEcmFnID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoISRzY29wZS4kJHBoYXNlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhZ0VuZChkLCBpKSB7XG4gICAgICAgICAgICBpZiAoZHJhZ2dlZCAmJiAhZGlzYWJsZURyYWcpIHtcbiAgICAgICAgICAgICAgICAvLyBTYXZpbmcgd2lkZ2V0RGF0YSBpbnRvIGxvY2Fsc3RvcmFnZVxuICAgICAgICAgICAgICAgIHZhciB0YWdOYW1lID0gZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJ0YWctbmFtZVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0ID0gZ2V0TXlXaWRnZXQodGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LnJlY3RTZXR0aW5ncy54ID0gdGVtcFg7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LnJlY3RTZXR0aW5ncy55ID0gdGVtcFk7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh3aWRnZXREYXRhKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2lkZ2V0RGF0YScsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hMaW5lcygpO1xuICAgICAgICAgICAgICAgIGRyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYWdnaW5nKGQsIGkpIHtcbiAgICAgICAgICAgIGlmICghZGlzYWJsZURyYWcpIHtcbiAgICAgICAgICAgICAgICB0ZW1wWCA9IGQzLmV2ZW50Lng7XG4gICAgICAgICAgICAgICAgdGVtcFkgPSBkMy5ldmVudC55O1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIFtkMy5ldmVudC54LCBkMy5ldmVudC55XSArIFwiKVwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB2YXIgdGFnTmFtZSA9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidGFnLW5hbWVcIik7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmZsb3dMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm0uZmxvd0xpbmVzW2lkeF0uZnJvbSA9PSB0YWdOYW1lIHx8IHZtLmZsb3dMaW5lc1tpZHhdLnRvID09IHRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdMaW5lKHZtLmZsb3dMaW5lc1tpZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkcmFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZtLnJlbW92ZUZsb3cgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIGlkKSB7XG4gICAgICAgICAgICBpZiAodm0uZmxvd0pTT05bZnJvbV1bdG9dKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmZsb3dKU09OW2Zyb21dW3RvXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm0uZmxvd0pTT05bZnJvbV1bdG9dW2lkeF0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZsb3dKU09OW2Zyb21dW3RvXS5zcGxpY2UoaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZsb3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZtLnNlbGVjdEZ1bmN0aW9uID0gZnVuY3Rpb24gKG91dHB1dCkge1xuXG4gICAgICAgICAgICBkaXNhYmxlRHJhZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAob3V0cHV0LnBhcmFtcyA9PSBcIm1ldGhvZFwiKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnBhcmFtcyA9IHZtLnNlbGVjdGVkV2lkZ2V0LnNldHRpbmdzLnJ1blBhcmFtcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdm0uc2VsZWN0ZWRGdW5jdGlvbiA9IGFuZ3VsYXIuY29weShvdXRwdXQpO1xuICAgICAgICAgICAgdm0udGVtcEZ1bmNTZWxPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgLyogQ2hlY2tpbmcgZm9yIHRoZSBjb25uZWN0YWJsZSBmdW5jdGlvbiAqL1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHdpZGdldHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0ID0gd2lkZ2V0RGF0YVtpZHhdO1xuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQuaWQgIT0gdm0uc2VsZWN0ZWRXaWRnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBXaWQgPSB7aWQ6IHdpZGdldC5pZCwgbmFtZTogd2lkZ2V0Lm5hbWUsIHRhZzogd2lkZ2V0LnRhZywgY29ubmVjdGFibGU6IGZhbHNlLCBpbnB1dHM6IFtdfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqZHggaW4gd2lkZ2V0Lm1ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGFuZ3VsYXIuY29weSh3aWRnZXQubWV0aG9kc1tqZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5pbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0SW5wVCA9IGFuZ3VsYXIuY29weShpbnB1dC5wYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0U2VsVCA9IGFuZ3VsYXIuY29weSh2bS5zZWxlY3RlZEZ1bmN0aW9uLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRTZWxUICYmIHRJbnBUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0Q291bnQgPSB0SW5wVC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0Q291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHRKZHggaW4gdElucFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHRJZHggaW4gdFNlbFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodFNlbFRbdElkeF0gPT0gdElucFRbdEpkeF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdENvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRDb3VudGVyID49IHRDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gaXNNZXRob2RGbG93RGVmaW5lZCh2bS5zZWxlY3RlZFdpZGdldC50YWcsIHdpZGdldC50YWcsIHZtLnNlbGVjdGVkRnVuY3Rpb24ubmFtZSwgaW5wdXQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFdpZC5jb25uZWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVtcFdpZC50YWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFdpZC5pbnB1dHMucHVzaChpbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdm0udGVtcEZ1bmNTZWxPYmplY3RbdGVtcFdpZC50YWddID0gdGVtcFdpZDtcbiAgICAgICAgICAgICAgICAgICAgdm0ubWV0aG9kc1RvU2hvdyA9IHRlbXBXaWQuaW5wdXRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB2bS50ZW1wRnVuY1NlbE9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmICghdm0udGVtcEZ1bmNTZWxPYmplY3RbaWR4XS5jb25uZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdFJlY3QgPSBnZXREM1JlY3Qodm0udGVtcEZ1bmNTZWxPYmplY3RbaWR4XS50YWcpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcENsYXNzID0gdFJlY3QuYXR0cignY2xhc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgdFJlY3QuYXR0cignY2xhc3MnLCB0ZW1wQ2xhc3MgKyAnIGRpc2FibGVkJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHZtLnRlbXBJbnB1dCA9IHt9O1xuICAgICAgICB2bS50ZW1wU2VsZWN0ZWRJbnB1dCA9IHt9O1xuXG4gICAgICAgIHZtLnJlbW92ZUlucHV0ID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLnNlbGVjdGVkV2lkZ2V0Lm1ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodm0uc2VsZWN0ZWRXaWRnZXQubWV0aG9kc1tpZHhdLmlkID09IG1ldGhvZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICB2bS5zZWxlY3RlZFdpZGdldC5tZXRob2RzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodm0udGVtcFNlbGVjdGVkSW5wdXQuaWQgPT0gbWV0aG9kLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS50ZW1wU2VsZWN0ZWRJbnB1dCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdm0ucmVtb3ZlUGFyYW0gPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHZtLnRlbXBTZWxlY3RlZElucHV0LnBhcmFtcy5zcGxpY2Uodm0udGVtcFNlbGVjdGVkSW5wdXQucGFyYW1zLmluZGV4T2YocGFyYW0pLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZtLmFkZFBhcmFtID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgPT0gbnVsbCB8fCBldmVudC5rZXlDb2RlID09IDMyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50ICE9IG51bGwpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHZtLnRlbXBQYXJhbSAhPSBudWxsKSB2bS50ZW1wUGFyYW0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGlmICh2bS50ZW1wUGFyYW0gIT0gbnVsbCAmJiB2bS50ZW1wUGFyYW0gIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXNbaWR4XSA9PSB2bS50ZW1wUGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZtLnRlbXBTZWxlY3RlZElucHV0LnBhcmFtcykgdm0udGVtcFNlbGVjdGVkSW5wdXQucGFyYW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXMucHVzaCh2bS50ZW1wUGFyYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS50ZW1wUGFyYW0gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdm0uZm9jdXNJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJyNwYXJhbUlucHV0JykuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZtLmFkZElucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFuZ3VsYXIuY29weSh2bS50ZW1wSW5wdXQpO1xuICAgICAgICAgICAgdm0udGVtcElucHV0ID0ge307XG4gICAgICAgICAgICBtZXRob2QuaWQgPSB2bS5zZWxlY3RlZFdpZGdldC5tZXRob2RzLmxlbmd0aDtcbiAgICAgICAgICAgIHZtLnNlbGVjdGVkV2lkZ2V0Lm1ldGhvZHMucHVzaChtZXRob2QpO1xuICAgICAgICB9XG5cbiAgICAgICAgJHNjb3BlLmFjZU9wdGlvbiA9IHtcbiAgICAgICAgICAgIG1vZGU6ICdqYXZhc2NyaXB0JyxcbiAgICAgICAgICAgIG9uTG9hZDogZnVuY3Rpb24gKGVkaXRvcikge1xuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRzXG4gICAgICAgICAgICAgICAgLy8gZWRpdG9yLnNldFRoZW1lKFwiYWNlL3RoZW1lL21vbm9rYWlcIik7XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uc1xuICAgICAgICAgICAgICAgIGVkaXRvci5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0d1dHRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1ByaW50TWFyZ2luOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnI2ZtLW1ldGhvZC1jcmVhdGUnKS5zaG93KCk7XG4gICAgICAgIH1cblxuICAgICAgICB2bS5zYXZlTWV0aG9kQ3JlYXRlUG9wdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2lkZ2V0RGF0YScsIEpTT04uc3RyaW5naWZ5KHdpZGdldERhdGEpKTtcbiAgICAgICAgICAgICQoJyNmbS1tZXRob2QtY3JlYXRlJykuaGlkZSgpO1xuICAgICAgICAgICAgLy9NQUtFIEFQSSBDQUxMIFRPIFNBVkUgREFUQVxuICAgICAgICB9XG5cbiAgICAgICAgdm0uY2xvc2VNZXRob2RDcmVhdGVQb3B1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJyNmbS1tZXRob2QtY3JlYXRlJykuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdm0uZWRpdE1ldGhvZCA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1ldGhvZCk7XG4gICAgICAgIH1cblxuICAgICAgICB2bS5jYW5jZWxBc3NpZ25pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcjZm0tbWV0aG9kLXBvcENvbnQnKS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2bS5hc3NpZ25GbG93ID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICAgICAgJCgnI2ZtLW1ldGhvZC1wb3BDb250JykuaGlkZSgpO1xuICAgICAgICAgICAgdm0udGVtcEZsb3dPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHZtLnRlbXBGbG93T2JqZWN0LmZyb20gPSBhbmd1bGFyLmNvcHkodm0uc2VsZWN0ZWRXaWRnZXQpO1xuICAgICAgICAgICAgdm0udGVtcEZsb3dPYmplY3QudG8gPSBhbmd1bGFyLmNvcHkodm0udGVtcFNlbGVjdGVkV2lkZ2V0KTtcbiAgICAgICAgICAgIHZtLnRlbXBGbG93T2JqZWN0LmZyb21NZXRob2QgPSBhbmd1bGFyLmNvcHkodm0uc2VsZWN0ZWRGdW5jdGlvbik7XG4gICAgICAgICAgICB2bS50ZW1wRmxvd09iamVjdC50b01ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgICAgIHZtLnNlbGVjdGVkRnVuY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgdm0udGVtcFNlbGVjdGVkV2lkZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgIHZtLnNlbGVjdGVkV2lkZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgIGdlbkZsb3codm0udGVtcEZsb3dPYmplY3QpO1xuICAgICAgICAgICAgZGVzZWxlY3RBbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdlbkZsb3coZGF0YSkge1xuICAgICAgICAgICAgdm0uZmxvd0pTT04gPSBncmlkU2VydmljZS5nZXRGbG93KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2bS5mbG93SlNPTik7XG4gICAgICAgICAgICBpZiAoIXZtLmZsb3dKU09OKXtcbiAgICAgICAgICAgICAgdm0uZmxvd0pTT04gPSB7fTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ltIGhlcmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEoZGF0YS5mcm9tLnRhZyBpbiB2bS5mbG93SlNPTikpIHZtLmZsb3dKU09OW2RhdGEuZnJvbS50YWddID0ge307XG4gICAgICAgICAgICBpZiAoISh2bS5mbG93SlNPTltkYXRhLmZyb20udGFnXVtkYXRhLnRvLnRhZ10pKSB7XG4gICAgICAgICAgICAgICAgdm0uZmxvd0pTT05bZGF0YS5mcm9tLnRhZ11bZGF0YS50by50YWddID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZmxvd0ZvdW5kID0gaXNNZXRob2RGbG93RGVmaW5lZChkYXRhLmZyb20udGFnLCBkYXRhLnRvLnRhZywgZGF0YS5mcm9tTWV0aG9kLm5hbWUsIGRhdGEudG9NZXRob2QubmFtZSlcbiAgICAgICAgICAgIGlmICghZmxvd0ZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdm0uZmxvd0pTT05bZGF0YS5mcm9tLnRhZ11bZGF0YS50by50YWddLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2bS5mbG93SlNPTltkYXRhLmZyb20udGFnXVtkYXRhLnRvLnRhZ10ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogZGF0YS5mcm9tTWV0aG9kLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHRvOiBkYXRhLnRvTWV0aG9kLm5hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB1cGRhdGVGbG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbRkxPVyBNQU5BR0VSXSBNdWx0aXBsZSBpbnN0YW5jZSBvZiBzYW1lIGZsb3cgaXMgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUZsb3coKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmxvd0pTT04nLCBKU09OLnN0cmluZ2lmeSh2bS5mbG93SlNPTikpO1xuICAgICAgICAgICAgcmVmcmVzaExpbmVzKCk7XG4gICAgICAgICAgICBmbG93TWFuYWdlci5yZWZyZXNoRmxvdyhncmlkU2VydmljZS5nZXRGbG93KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNNZXRob2RGbG93RGVmaW5lZChmcm9tLCB0bywgZm0sIHRtKSB7XG4gICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdm0uZmxvd0pTT04pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdm0uZmxvd0pTT05bZnJvbV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdm0uZmxvd0pTT05bZnJvbV1bdG9dKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0uZmxvd0pTT05bZnJvbV1bdG9dKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBPYmogPSB2bS5mbG93SlNPTltmcm9tXVt0b11baWR4XTtcbiAgICAgICAgICAgICAgICBpZiAodGVtcE9iai5mcm9tID09IGZtICYmIHRlbXBPYmoudG8gPT0gdG0pIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYWdTdGFydChkLCBpKSB7XG4gICAgICAgICAgICBpZiAoIXZtLnNlbGVjdGVkRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFnTmFtZSA9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidGFnLW5hbWVcIik7XG4gICAgICAgICAgICAgICAgdm0uc2VsZWN0ZWRXaWRnZXQgPSB3aWRnZXRzW2luZGV4QnlUYWdbdGFnTmFtZV1dO1xuICAgICAgICAgICAgICAgIHZtLnZpcy5zZWxlY3RBbGwoJ2cnKS5hdHRyKCdjbGFzcycsICdmbG93LXJlY3QtbWFpbicpXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJjbGFzc1wiLCAnZmxvdy1yZWN0LW1haW4gYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFnTmFtZSA9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidGFnLW5hbWVcIik7XG4gICAgICAgICAgICAgICAgdm0udGVtcFNlbGVjdGVkV2lkZ2V0ID0gZ2V0TXlXaWRnZXQodGFnTmFtZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgY29ubmVjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0udGVtcEZ1bmNTZWxPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLnRlbXBGdW5jU2VsT2JqZWN0W2lkeF0uY29ubmVjdGFibGUgPT0gdHJ1ZSAmJiB2bS50ZW1wRnVuY1NlbE9iamVjdFtpZHhdLnRhZyA9PSB2bS50ZW1wU2VsZWN0ZWRXaWRnZXQudGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3RhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd01ldGhvZFBvcHVwKGQzLmV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzaG93TWV0aG9kUG9wdXAoZSkge1xuICAgICAgICAgICAgdmFyIGxlZnQgPSBlLnBhZ2VYO1xuICAgICAgICAgICAgdmFyIHRvcCA9IGUucGFnZVk7XG4gICAgICAgICAgICB2YXIgYm90dG9tID0gJ2F1dG8nO1xuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgaWYgKGxlZnQgPiAoJCh3aW5kb3cpLndpZHRoKCkgLyAyKSkge1xuICAgICAgICAgICAgICAgIHJpZ2h0ID0gJCh3aW5kb3cpLndpZHRoKCkgLSBsZWZ0O1xuICAgICAgICAgICAgICAgIGxlZnQgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG9wID4gKCQod2luZG93KS5oZWlnaHQoKSAvIDIpKSB7XG4gICAgICAgICAgICAgICAgYm90dG9tID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gdG9wO1xuICAgICAgICAgICAgICAgIHRvcCA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJyNmbS1tZXRob2QtcG9wJykuY3NzKHtsZWZ0OiBsZWZ0LCB0b3A6IHRvcCwgYm90dG9tOiBib3R0b20sIHJpZ2h0OiByaWdodH0pO1xuICAgICAgICAgICAgJCgnI2ZtLW1ldGhvZC1wb3BDb250Jykuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RDNSZWN0KGlkeCkge1xuICAgICAgICAgICAgcmV0dXJuIGQzLnNlbGVjdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkcmVjdC0nICsgaWR4KSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRNeVdpZGdldCh0YWdOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gd2lkZ2V0RGF0YVtpbmRleEJ5VGFnW3RhZ05hbWVdXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldE15TmFtZShuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIjZm0tbWlkcGFuID4gKlwiKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZGVmcyA9IHZtLnZpcy5hcHBlbmQoXCJkZWZzXCIpO1xuICAgICAgICAgICAgZmlsdGVyID0gZGVmcy5hcHBlbmQoXCJmaWx0ZXJcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiZHJvcC1zaGFkb3dcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBcIjE1MCVcIilcbiAgICAgICAgICAgIGZpbHRlci5hcHBlbmQoXCJmZUdhdXNzaWFuQmx1clwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaW5cIiwgXCJTb3VyY2VBbHBoYVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3RkRGV2aWF0aW9uXCIsIDIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJyZXN1bHRcIiwgXCJvZmZzZXRibHVyXCIpO1xuICAgICAgICAgICAgZmlsdGVyLmFwcGVuZChcImZlQ29tcG9uZW50VHJhbnNmZXJcIilcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZmVGdW5jQVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ2xpbmVhcicpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3Nsb3BlJywgJzAuMycpXG4gICAgICAgICAgICBmaWx0ZXIuYXBwZW5kKFwiZmVPZmZzZXRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImluXCIsIFwiYmx1clwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZHhcIiwgMSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImR5XCIsIDEpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJyZXN1bHRcIiwgXCJvZmZzZXRCbHVyXCIpXG5cbiAgICAgICAgICAgIGZlTWVyZ2UgPSBmaWx0ZXIuYXBwZW5kKFwiZmVNZXJnZVwiKTtcbiAgICAgICAgICAgIGZlTWVyZ2UuYXBwZW5kKFwiZmVNZXJnZU5vZGVcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImluXCIsIFwib2Zmc2V0Qmx1clwiKVxuICAgICAgICAgICAgZmVNZXJnZS5hcHBlbmQoXCJmZU1lcmdlTm9kZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaW5cIiwgXCJTb3VyY2VHcmFwaGljXCIpO1xuXG4gICAgICAgICAgICB2YXIgcmVjdERyYWcgPSBkMy5kcmFnKClcbiAgICAgICAgICAgICAgICAuc3ViamVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHIgPSBnZXRUcmFuc2xhdGlvbih0LmF0dHIoXCJ0cmFuc2Zvcm1cIikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogdC5hdHRyKFwieFwiKSArIHRyWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogdC5hdHRyKFwieVwiKSArIHRyWzFdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJkcmFnXCIsIGRyYWdnaW5nKVxuICAgICAgICAgICAgICAgIC5vbihcImVuZFwiLCBkcmFnRW5kKVxuXG5cbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB3aWRnZXRzKSB7XG5cblxuICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncyB8fCAhd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncy54KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncykgd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXREYXRhW2lkeF0ucmVjdFNldHRpbmdzLnggPSAwO1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXREYXRhW2lkeF0ucmVjdFNldHRpbmdzLnkgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpZGdldHNbaWR4XS5yZWN0ID0gdm0udmlzLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWRnZXREYXRhW2lkeF0ucmVjdFNldHRpbmdzLnggKyBcIixcIiArIHdpZGdldERhdGFbaWR4XS5yZWN0U2V0dGluZ3MueSArIFwiKVwiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRhZy1uYW1lXCIsIHdpZGdldHNbaWR4XS50YWcpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdmbG93LXJlY3QtbWFpbicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdpZCcsICd3aWRyZWN0LScgKyB3aWRnZXRzW2lkeF0udGFnKVxuICAgICAgICAgICAgICAgICAgICAub24oXCJtb3VzZWRvd25cIiwgZHJhZ1N0YXJ0KTtcblxuICAgICAgICAgICAgICAgIGlmKGdyaWRTZXJ2aWNlLmlzQ2hyb21lKVxuICAgICAgICAgICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5zdHlsZShcImZpbHRlclwiLCBcInVybCgjZHJvcC1zaGFkb3cpXCIpXG5cblxuICAgICAgICAgICAgICAgIHdpZGdldHNbaWR4XS5yZWN0LmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCByZWN0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCByZWN0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsIHdpZGdldHNbaWR4XS5jb2xvcilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICc3MCUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9udC1mYW1pbHknLCAnZ290aGFtJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Zsb3ctcmVjdC1kcmFnZ2VyJylcbiAgICAgICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgcmVjdFdpZHRoKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCByZWN0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICcjZmZmJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gnLCByZWN0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9udC1zaXplJywgJzcwJScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICdnb3RoYW0nKVxuICAgICAgICAgICAgICAgIHdpZGdldHNbaWR4XS5yZWN0XG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICdnb3RoYW0nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9udC1zaXplJywgJzkwJScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJyM1NTUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignbGluZS1oZWlnaHQnLCByZWN0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneCcsIHJlY3RIZWlnaHQgKyAxMClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3knLCAyMilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3otaW5kZXgnLCAxMTApXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGdldE15TmFtZSh3aWRnZXREYXRhW2lkeF0udGFnKSlcbiAgICAgICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgMTApXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHJlY3RIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCByZWN0V2lkdGggKyByZWN0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICcjOTk5JylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICc3MCUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9udC1mYW1pbHknLCAnZ290aGFtJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Zsb3ctcmVjdC1kcmFnZ2VyJylcbiAgICAgICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJyXCIsIDYpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJyM2NjYnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImN4XCIsIHJlY3RXaWR0aCArIHJlY3RIZWlnaHQgKyAxMClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N5JywgKHJlY3RIZWlnaHQgLyAyKSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnI2RkZCcpXG4gICAgICAgICAgICAgICAgd2lkZ2V0c1tpZHhdLnJlY3QuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCA2KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICcjNjY2JylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZtLW5vZGUtZmlyc3QtY2lyY2xlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCAwKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignY3knLCAocmVjdEhlaWdodCAvIDIpKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICcjZGRkJylcbiAgICAgICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5jYWxsKHJlY3REcmFnKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmcmVzaExpbmVzKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hMaW5lcygpIHtcbiAgICAgICAgICAgIHZhciBjdXJyRmxvd3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB2bS5mbG93TGluZXMpIHtcbiAgICAgICAgICAgICAgICB2bS5mbG93TGluZXNbaWR4XS5saW5lLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB2bS5mbG93TGluZXNbaWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGZyb21UYWcgaW4gdm0uZmxvd0pTT04pIHtcbiAgICAgICAgICAgICAgICBpZih3aWRnZXRzWyhpbmRleEJ5VGFnW2Zyb21UYWddKV0pe1xuICAgICAgICAgICAgICAgICAgICB2YXIgZnJvbVJlY3QgPSB3aWRnZXRzWyhpbmRleEJ5VGFnW2Zyb21UYWddKV0ucmVjdDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdG9UYWcgaW4gdm0uZmxvd0pTT05bZnJvbVRhZ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5mbG93SlNPTltmcm9tVGFnXVt0b1RhZ10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvUmVjdCA9IHdpZGdldHNbKGluZGV4QnlUYWdbdG9UYWddKV0ucmVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZnJvbUNvb3JkcyA9IGdldFRyYW5zbGF0aW9uKGZyb21SZWN0LmF0dHIoXCJ0cmFuc2Zvcm1cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b0Nvb3JkcyA9IGdldFRyYW5zbGF0aW9uKHRvUmVjdC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEZMTyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUNvb3JkczogZnJvbUNvb3JkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db29yZHM6IHRvQ29vcmRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBmcm9tVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogdG9UYWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdMaW5lKHRlbXBGTE8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKChmcm9tVGFnICsgdG9UYWcpIGluIHZtLmZsb3dMaW5lcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZmxvd0xpbmVzW2Zyb21UYWcgKyB0b1RhZ10gPSB0ZW1wRkxPO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyRmxvd3MucHVzaChmcm9tVGFnICsgdG9UYWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiI2ZtLW1pZHBhbiA+ICpcIikuc29ydChmdW5jdGlvbiAoYSwgYikgeyAvLyBzZWxlY3QgdGhlIHBhcmVudCBhbmQgc29ydCB0aGUgcGF0aCdzXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RChmcm9tQ29vcmRzLCB0b0Nvb3Jkcykge1xuICAgICAgICAgICAgZnJvbUNvb3Jkc1sxXSArPSAxNztcbiAgICAgICAgICAgIGZyb21Db29yZHNbMF0gKz0gMTY1O1xuICAgICAgICAgICAgdG9Db29yZHNbMV0gKz0gMTc7XG4gICAgICAgICAgICByZXR1cm4gW1tmcm9tQ29vcmRzWzBdLCBmcm9tQ29vcmRzWzFdXSxcbiAgICAgICAgICAgICAgICBbKGZyb21Db29yZHNbMF0gKyA1KSwgZnJvbUNvb3Jkc1sxXV0sXG4gICAgICAgICAgICAgICAgWyhmcm9tQ29vcmRzWzBdICsgMjUpLCBmcm9tQ29vcmRzWzFdXSxcbiAgICAgICAgICAgICAgICBbKHRvQ29vcmRzWzBdIC0gMjUpLCB0b0Nvb3Jkc1sxXV0sXG4gICAgICAgICAgICAgICAgWyh0b0Nvb3Jkc1swXSAtIDUpLCB0b0Nvb3Jkc1sxXV0sXG4gICAgICAgICAgICAgICAgW3RvQ29vcmRzWzBdLCB0b0Nvb3Jkc1sxXV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbHVlbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlQmFzaXMpXG4gICAgICAgICAgICAueChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkWzBdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRbMV07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBkcmF3TGluZShkYXRhKSB7XG4gICAgICAgICAgICB2YXIgZnJvbVJlY3QgPSB3aWRnZXRzWyhpbmRleEJ5VGFnW2RhdGEuZnJvbV0pXS5yZWN0O1xuICAgICAgICAgICAgdmFyIHRvUmVjdCA9IHdpZGdldHNbKGluZGV4QnlUYWdbZGF0YS50b10pXS5yZWN0O1xuICAgICAgICAgICAgdmFyIGZyb21Db29yZHMgPSBnZXRUcmFuc2xhdGlvbihmcm9tUmVjdC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgICAgIHZhciB0b0Nvb3JkcyA9IGdldFRyYW5zbGF0aW9uKHRvUmVjdC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgICAgIHZhciBkID0gZ2V0RChmcm9tQ29vcmRzLCB0b0Nvb3Jkcyk7XG4gICAgICAgICAgICBkYXRhLmZyb21Db29yZHMgPSBmcm9tQ29vcmRzO1xuICAgICAgICAgICAgZGF0YS50b0Nvb3JkcyA9IHRvQ29vcmRzO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5saW5lID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmxpbmUgPSB2bS52aXMuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2QnLCB2YWx1ZWxpbmUoZCkpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnIzc3NycpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCA0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3otaW5kZXgnLCAtMSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YS5saW5lLmF0dHIoJ2QnLCB2YWx1ZWxpbmUoZCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgdmFyIGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIik7XG4gICAgICAgICAgICBnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidHJhbnNmb3JtXCIsIHRyYW5zZm9ybSk7XG4gICAgICAgICAgICB2YXIgbWF0cml4ID0gZy50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpLm1hdHJpeDtcbiAgICAgICAgICAgIHJldHVybiBbbWF0cml4LmUsIG1hdHJpeC5mXTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZHJhdygpO1xuXG5cbiAgICAgICAgLypcbiAgICAgICAgICpcbiAgICAgICAgICogICBDb2RlIGZvciBMZWZ0IHBhblxuICAgICAgICAgKlxuICAgICAgICAgKiAqL1xuXG4gICAgICAgIHZtLmdyYWJXaWRnZXQgPSBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIHZhciB3aWREb20gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgdm0ud2lkRG9tID0gd2lkRG9tLmNsb25lKCk7XG4gICAgICAgICAgICB2bS53aWREb20uZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICB2bS53aWRnZXRHcmFiYmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBwYWdlWCA9IHdpZERvbS5vZmZzZXQoKS5sZWZ0XG4gICAgICAgICAgICB2YXIgcGFnZVkgPSB3aWREb20ub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgdm0ud2lkRG9tLmxlZnRPZmYgPSBldmVudC5wYWdlWCAtIHBhZ2VYO1xuICAgICAgICAgICAgdm0ud2lkRG9tLnRvcE9mZiA9IGV2ZW50LnBhZ2VZIC0gcGFnZVk7XG4gICAgICAgICAgICBpZiAodm0ud2lkRG9tKSB7XG4gICAgICAgICAgICAgICAgdm0ud2lkRG9tLmFkZENsYXNzKCdkdW1teScpXG4gICAgICAgICAgICAgICAgdm0ud2lkRG9tLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHBhZ2VZLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkRG9tLndpZHRoKCksXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICQoJyNmbS1sZWZ0cGFuJykuYXBwZW5kKHZtLndpZERvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykubW91c2V1cChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2bS5kcm9wV2lkZ2V0KCk7XG4gICAgICAgIH0pXG4gICAgICAgICQod2luZG93KS5tb3VzZW1vdmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2bS5kcmFnZ2luZ1dpZGdldChldmVudCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdm0uZHJvcFdpZGdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh2bS53aWREb20gJiYgdm0ud2lkZ2V0R3JhYmJlZCkge1xuICAgICAgICAgICAgICAgIHZtLndpZGdldEdyYWJiZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogdm0ud2lkRG9tLm9mZnNldCgpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdm0ud2lkRG9tLndpZHRoKCksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdm0ud2lkRG9tLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB2bS53aWREb20uZGF0YSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFrZU5ld1dpZGdldCh0ZW1wRGF0YSk7XG4gICAgICAgICAgICAgICAgdm0ud2lkRG9tLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdm0uZHJhZ2dpbmdXaWRnZXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh2bS53aWRnZXRHcmFiYmVkKSB7XG4gICAgICAgICAgICAgICAgdm0ud2lkRG9tLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGV2ZW50LnBhZ2VYIC0gdm0ud2lkRG9tLmxlZnRPZmYsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogZXZlbnQucGFnZVkgLSB2bS53aWREb20udG9wT2ZmLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVTY29wZURhdGEod0RhdGFSZXNwKSB7XG5cbiAgICAgICAgICAgIHdEYXRhID0gd0RhdGFSZXNwO1xuICAgICAgICAgICAgd2lkZ2V0RGF0YSA9IHdEYXRhLndpZGdldERhdGE7XG4gICAgICAgICAgICB3aWRnZXRzID0gd0RhdGEud2lkZ2V0cztcbiAgICAgICAgICAgIGluZGV4QnlUYWcgPSB3RGF0YS5pbmRleEJ5VGFnO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtYWtlTmV3V2lkZ2V0KHBhcmFtcykge1xuICAgICAgICAgICAgdmFyIG1pZFBhbk9mZiA9ICQoJy5mbS1taWRwYW4nKS5vZmZzZXQoKTtcbiAgICAgICAgICAgIHZhciBtaWRXaWR0aCA9ICQoJy5mbS1taWRwYW4nKS53aWR0aCgpO1xuICAgICAgICAgICAgdmFyIG1pZEhlaWdodCA9ICQoJy5mbS1taWRwYW4nKS5oZWlnaHQoKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gYW5ndWxhci5jb3B5KHBhcmFtcy5kYXRhKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMub2Zmc2V0LmxlZnQgPiBtaWRQYW5PZmYubGVmdCAmJiBwYXJhbXMub2Zmc2V0LnRvcCA+IG1pZFBhbk9mZi50b3AgJiZcbiAgICAgICAgICAgICAgICBwYXJhbXMub2Zmc2V0LmxlZnQgKyAocGFyYW1zLndpZHRoIC8gMikgPCBtaWRQYW5PZmYubGVmdCArIG1pZFdpZHRoICYmIHBhcmFtcy5vZmZzZXQudG9wICsgKHBhcmFtcy5oZWlnaHQgLyAyKSA8IG1pZFBhbk9mZi50b3AgKyBtaWRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAvL21ha2luZyBkYXRhIGZvciBuZXcgd2lkZ2V0XG4gICAgICAgICAgICAgICAgZGF0YS50YWcgPSBnZW5lcmF0ZUludGFuY2VJZChkYXRhKTtcbiAgICAgICAgICAgICAgICBkYXRhLmlkID0gZ2VuZXJhdGVVbmlxdWVJZCgpO1xuICAgICAgICAgICAgICAgIGRhdGEucmVjdFNldHRpbmdzID0ge31cbiAgICAgICAgICAgICAgICBkYXRhLnJlY3RTZXR0aW5ncy55ID0gcGFyYW1zLm9mZnNldC50b3AgLSAkKCcjZm0tbWlkcGFuJykub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgICAgIGRhdGEucmVjdFNldHRpbmdzLnggPSBwYXJhbXMub2Zmc2V0LmxlZnQgLSAkKCcjZm0tbWlkcGFuJykub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgICAgICAgICBncmlkU2VydmljZS51cGRhdGVXaWRnZXREYXRhKGRhdGEsIGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNjb3BlRGF0YShyZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xuICAgICAgICAgICAgdmFyIHVpZDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdWlkID0gZ2V0UmFuZG9tSW50KDEsIDEwMDAwMCk7XG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHdpZGdldERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZGdldERhdGFbaWR4XS5pZCA9PSB1aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1aWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVJbnRhbmNlSWQoZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEubmFtZSArICggcGFyc2VJbnQod2lkZ2V0RGF0YS5sZW5ndGgpICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mbG93TWFuYWdlci9mbG93TWFuYWdlci5jb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBHcmlkQ29udHJvbGxlciA9IGV4cG9ydHMuR3JpZENvbnRyb2xsZXIgPSBmdW5jdGlvbiBHcmlkQ29udHJvbGxlcihncmlkU2VydmljZSwgJHNjb3BlLCBsb2dpblNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyaWRDb250cm9sbGVyKTtcblxuICAgIGNvbnNvbGUubG9nKCdHcmlkIENvbnRyb2xsZXInKTtcblxuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS53aWRnZXRzID0gW107XG4gICAgdm0uZ3JpZE1vZGUgPSAwOyAvLyAwID0gbm9ybWFsIE1vZGUgLCAxID0gZWRpdCBNb2RlXG4gICAgdm0ubGF5b3V0T3JkZXIgPSBudWxsO1xuICAgIHZtLndpZGdldERhdGEgPSBncmlkU2VydmljZS5nZXRXaWRnZXREYXRhKCk7XG5cbiAgICB2bS5zd2l0Y2hNb2RlID0gZnVuY3Rpb24gKG1vZGUpIHtcbiAgICAgICAgdm0uZ3JpZE1vZGUgPSBtb2RlO1xuICAgICAgICBpZiAobW9kZSA9PSAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0ud2lkZ2V0cykge1xuICAgICAgICAgICAgICAgIHZtLndpZGdldHNbaWR4XS5kcmFnZ2llLmRpc2FibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09IDEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB2bS53aWRnZXRzKSB7XG4gICAgICAgICAgICAgICAgdm0ud2lkZ2V0c1tpZHhdLmRyYWdnaWUuZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHN3aXRjaE1vZGVJbnRlciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHZtLndpZGdldHNbMF0gJiYgdm0ud2lkZ2V0c1swXS5kcmFnZ2llKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHN3aXRjaE1vZGVJbnRlcik7XG4gICAgICAgICAgICB2bS5zd2l0Y2hNb2RlKDApO1xuICAgICAgICB9XG4gICAgfSwgMTAwKTtcblxuICAgIHZhciBvaV90aW1lb3V0ID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIG9yZGVySXRlbXMoKSB7XG4gICAgICAgIHZhciBpdGVtRWxlbXMgPSAkKCRncmlkLnBhY2tlcnkoJ2dldEl0ZW1FbGVtZW50cycpKTtcbiAgICAgICAgdm0ubGF5b3V0T3JkZXIgPSBbXTtcbiAgICAgICAgJChpdGVtRWxlbXMpLmVhY2goZnVuY3Rpb24gKGksIGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBwYXJzZUludCgkKGl0ZW1FbGVtKS5hdHRyKCd3aWRnZXQtaWQnKSk7XG4gICAgICAgICAgICB2YXIgdGFnID0gJChpdGVtRWxlbSkuYXR0cignd2lkZ2V0LXRhZycpO1xuICAgICAgICAgICAgdm0ubGF5b3V0T3JkZXJbaV0gPSB7IHBvc2l0aW9uOiBpZCB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob2lfdGltZW91dCkgY2xlYXJUaW1lb3V0KG9pX3RpbWVvdXQpO1xuICAgICAgICBvaV90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0T3JkZXInLCBKU09OLnN0cmluZ2lmeSh2bS5sYXlvdXRPcmRlcikpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0V2lkZ2V0cygpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2sobGF5b3V0T3JkZXIpIHtcbiAgICAgICAgICAgIHZtLmxheW91dE9yZGVyID0gbGF5b3V0T3JkZXI7XG4gICAgICAgICAgICB2YXIgd2lkTGlzdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLndpZGdldERhdGEud2lkZ2V0cykge1xuICAgICAgICAgICAgICAgIHdpZExpc3QucHVzaCh2bS53aWRnZXREYXRhLndpZGdldHNbaWR4XS50YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmxheW91dE9yZGVyKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgamR4IGluIHZtLndpZGdldERhdGEud2lkZ2V0cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm0ud2lkZ2V0RGF0YS53aWRnZXRzW2pkeF0uaWQgPT0gdm0ubGF5b3V0T3JkZXJbaWR4XS5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0ud2lkZ2V0cy5wdXNoKHZtLndpZGdldERhdGEud2lkZ2V0c1tqZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZExpc3Quc3BsaWNlKHdpZExpc3QuaW5kZXhPZih2bS53aWRnZXREYXRhLndpZGdldHNbamR4XS50YWcpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB3aWRMaXN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBPYmogPSBhbmd1bGFyLmNvcHkodm0ud2lkZ2V0RGF0YS53aWRnZXRzW3ZtLndpZGdldERhdGEuaW5kZXhCeVRhZ1t3aWRMaXN0W2lkeF1dXSk7XG4gICAgICAgICAgICAgICAgdm0ud2lkZ2V0cy5wdXNoKHRlbXBPYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRQYWNrZXJ5KCk7XG4gICAgICAgIH07XG4gICAgICAgIGdyaWRTZXJ2aWNlLmdldExheW91dE9yZGVyKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBnZXRXaWRnZXRzKCk7XG5cbiAgICBmdW5jdGlvbiBzZXRDU1NDbGFzcyhjb2xzLCB1LCB2KSB7XG4gICAgICAgIHZhciBzdHlsZVN0cmluZyA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpZHggPSAxOyBpZHggPD0gY29sczsgaWR4KyspIHtcbiAgICAgICAgICAgIHN0eWxlU3RyaW5nICs9ICcuZ2ktdy0nICsgaWR4ICsgJ3sgd2lkdGg6ICcgKyAodSAqIGlkeCAtIDApICsgJ3B4IH0gJyArICcuZ2ktdmgtJyArIGlkeCArICd7IGhlaWdodDogJyArIHYgKiBpZHggKyAncHggfSAnICsgJy5naS1oLScgKyBpZHggKyAneyBoZWlnaHQ6ICcgKyB1ICogaWR4ICsgJ3B4IH0gJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gc3R5bGVTdHJpbmc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0UGFja2VyeSgpIHtcbiAgICAgICAgdmFyIHBhY2tlcnlJbnRlciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKCcuZ3JpZCA+IGRpdicpLmxlbmd0aCA+PSB2bS53aWRnZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGluaXRQYWNrZXJ5KCk7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChwYWNrZXJ5SW50ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIHZhciAkZ3JpZDtcblxuICAgIGZ1bmN0aW9uIGluaXRQYWNrZXJ5KCkge1xuICAgICAgICB2YXIgY29scyA9IDI0O1xuICAgICAgICB2bS5jb2x1bW5XaWR0aCA9IHBhcnNlSW50KCgkKHdpbmRvdykud2lkdGgoKSAtIDApIC8gY29scyk7XG4gICAgICAgIHZtLmNvbHVtbkhlaWdodCA9IHBhcnNlSW50KCQod2luZG93KS5oZWlnaHQoKSAvIGNvbHMpO1xuICAgICAgICBzZXRDU1NDbGFzcyhjb2xzLCB2bS5jb2x1bW5XaWR0aCwgdm0uY29sdW1uSGVpZ2h0KTtcblxuICAgICAgICAkZ3JpZCA9ICQoJy5ncmlkJykucGFja2VyeSh7XG4gICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuZ3JpZC1pdGVtJyxcbiAgICAgICAgICAgIGNvbHVtbldpZHRoOiB2bS5jb2x1bW5XaWR0aFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuXG4gICAgICAgICRncmlkLmZpbmQoJy5ncmlkLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uIChpLCBncmlkSXRlbSkge1xuICAgICAgICAgICAgdmFyIGRyYWdnaWUgPSBuZXcgRHJhZ2dhYmlsbHkoZ3JpZEl0ZW0pO1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgdm0ud2lkZ2V0cy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpZCA9IHBhcnNlSW50KCQoZ3JpZEl0ZW0pLmF0dHIoJ3dpZGdldC1pZCcpKTtcbiAgICAgICAgICAgICAgICBpZiAodm0ud2lkZ2V0c1tpZHhdLmlkID09IHdpZCkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIHZtLndpZGdldHNbaWR4XS5kcmFnZ2llID0gZHJhZ2dpZTtcbiAgICAgICAgICAgICAgICAgICAgJGdyaWQucGFja2VyeSgnYmluZERyYWdnYWJpbGx5RXZlbnRzJywgdm0ud2lkZ2V0c1tpZHhdLmRyYWdnaWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGdyaWQucGFja2VyeSgnb24nLCAnbGF5b3V0Q29tcGxldGUnLCBvcmRlckl0ZW1zKTtcbiAgICAgICAgJGdyaWQucGFja2VyeSgnb24nLCAnZHJhZ0l0ZW1Qb3NpdGlvbmVkJywgb3JkZXJJdGVtcyk7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2Zsb3dNYW5hZ2VyL2dyaWQuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBHcmlkQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ3JpZFNlcnZpY2UsICRzY29wZSwgbG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dyaWQgQ29udHJvbGxlcicpXHJcblxyXG5cclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG5cclxuICAgICAgICB2bS53aWRnZXRzID0gW107XHJcbiAgICAgICAgdm0uZ3JpZE1vZGUgPSAwOyAvLyAwID0gbm9ybWFsIE1vZGUgLCAxID0gZWRpdCBNb2RlXHJcbiAgICAgICAgdm0ubGF5b3V0T3JkZXIgPSBudWxsO1xyXG4gICAgICAgIHZtLndpZGdldERhdGEgPSBncmlkU2VydmljZS5nZXRXaWRnZXREYXRhKCk7XHJcblxyXG4gICAgICAgIHZtLnN3aXRjaE1vZGUgPSBmdW5jdGlvbihtb2RlKSB7XHJcbiAgICAgICAgICAgIHZtLmdyaWRNb2RlID0gbW9kZTtcclxuICAgICAgICAgICAgaWYobW9kZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaWR4IGluIHZtLndpZGdldHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLndpZGdldHNbaWR4XS5kcmFnZ2llLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYobW9kZSA9PSAxKXtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaWR4IGluIHZtLndpZGdldHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLndpZGdldHNbaWR4XS5kcmFnZ2llLmVuYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZhciBzd2l0Y2hNb2RlSW50ZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKHZtLndpZGdldHNbMF0gJiYgdm0ud2lkZ2V0c1swXS5kcmFnZ2llKXtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3dpdGNoTW9kZUludGVyKTtcclxuICAgICAgICAgICAgICAgIHZtLnN3aXRjaE1vZGUoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LDEwMClcclxuXHJcbiAgICAgICAgdmFyIG9pX3RpbWVvdXQgPSBudWxsO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcmRlckl0ZW1zKCkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbUVsZW1zID0gJCgkZ3JpZC5wYWNrZXJ5KCdnZXRJdGVtRWxlbWVudHMnKSk7XHJcbiAgICAgICAgICAgIHZtLmxheW91dE9yZGVyID0gW107XHJcbiAgICAgICAgICAgICQoaXRlbUVsZW1zKS5lYWNoKGZ1bmN0aW9uKGksIGl0ZW1FbGVtKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBwYXJzZUludCgkKGl0ZW1FbGVtKS5hdHRyKCd3aWRnZXQtaWQnKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFnID0gJChpdGVtRWxlbSkuYXR0cignd2lkZ2V0LXRhZycpO1xyXG4gICAgICAgICAgICAgICAgdm0ubGF5b3V0T3JkZXJbaV0gPSB7IHBvc2l0aW9uIDogaWQgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZihvaV90aW1lb3V0KSBjbGVhclRpbWVvdXQob2lfdGltZW91dCk7XHJcbiAgICAgICAgICAgIG9pX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXRPcmRlcicsIEpTT04uc3RyaW5naWZ5KHZtLmxheW91dE9yZGVyKSlcclxuICAgICAgICAgICAgfSwxMDAwKVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0V2lkZ2V0cygpIHtcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24obGF5b3V0T3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHZtLmxheW91dE9yZGVyID0gbGF5b3V0T3JkZXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpZHggaW4gdm0ud2lkZ2V0RGF0YS53aWRnZXRzKXtcclxuICAgICAgICAgICAgICAgICAgICB3aWRMaXN0LnB1c2godm0ud2lkZ2V0RGF0YS53aWRnZXRzW2lkeF0udGFnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaWR4IGluIHZtLmxheW91dE9yZGVyKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGpkeCBpbiB2bS53aWRnZXREYXRhLndpZGdldHMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2bS53aWRnZXREYXRhLndpZGdldHNbamR4XS5pZCA9PSB2bS5sYXlvdXRPcmRlcltpZHhdLnBvc2l0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLndpZGdldHMucHVzaCh2bS53aWRnZXREYXRhLndpZGdldHNbamR4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRMaXN0LnNwbGljZSh3aWRMaXN0LmluZGV4T2Yodm0ud2lkZ2V0RGF0YS53aWRnZXRzW2pkeF0udGFnKSwxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaWR4IGluIHdpZExpc3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wT2JqID0gYW5ndWxhci5jb3B5KHZtLndpZGdldERhdGEud2lkZ2V0c1t2bS53aWRnZXREYXRhLmluZGV4QnlUYWdbd2lkTGlzdFtpZHhdXV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLndpZGdldHMucHVzaCh0ZW1wT2JqKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0UGFja2VyeSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdyaWRTZXJ2aWNlLmdldExheW91dE9yZGVyKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFdpZGdldHMoKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldENTU0NsYXNzKGNvbHMsIHUsIHYpIHtcclxuICAgICAgICAgICAgdmFyIHN0eWxlU3RyaW5nID0gJyc7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaWR4PTE7IGlkeCA8PSBjb2xzOyBpZHgrKyl7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVN0cmluZyArPSAgJy5naS13LScraWR4Kyd7IHdpZHRoOiAnKygodSAqIGlkeCktMCkrJ3B4IH0gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5naS12aC0nK2lkeCsneyBoZWlnaHQ6ICcrKHYgKiBpZHgpKydweCB9ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuZ2ktaC0nK2lkeCsneyBoZWlnaHQ6ICcrKHUgKiBpZHgpKydweCB9ICdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcclxuICAgICAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gIHN0eWxlU3RyaW5nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydFBhY2tlcnkoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYWNrZXJ5SW50ZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZigkKCcuZ3JpZCA+IGRpdicpLmxlbmd0aCA+PSB2bS53aWRnZXRzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdFBhY2tlcnkoKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHBhY2tlcnlJbnRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sMjAwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyICRncmlkO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbml0UGFja2VyeSgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbHMgPSAyNDtcclxuICAgICAgICAgICAgdm0uY29sdW1uV2lkdGggPSBwYXJzZUludCgoJCh3aW5kb3cpLndpZHRoKCktMCkgLyBjb2xzKTtcclxuICAgICAgICAgICAgdm0uY29sdW1uSGVpZ2h0ID0gcGFyc2VJbnQoJCh3aW5kb3cpLmhlaWdodCgpIC8gY29scyk7XHJcbiAgICAgICAgICAgIHNldENTU0NsYXNzKGNvbHMsIHZtLmNvbHVtbldpZHRoLCB2bS5jb2x1bW5IZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgJGdyaWQgPSAkKCcuZ3JpZCcpLnBhY2tlcnkoe1xyXG4gICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbScsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogdm0uY29sdW1uV2lkdGhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgICRncmlkLmZpbmQoJy5ncmlkLWl0ZW0nKS5lYWNoKCBmdW5jdGlvbiggaSwgZ3JpZEl0ZW0gKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ2dpZSA9IG5ldyBEcmFnZ2FiaWxseSggZ3JpZEl0ZW0gKTtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaWR4ID0gMDsgaWR4IDwgdm0ud2lkZ2V0cy5sZW5ndGg7IGlkeCsrKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2lkID0gcGFyc2VJbnQoJChncmlkSXRlbSkuYXR0cignd2lkZ2V0LWlkJykpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodm0ud2lkZ2V0c1tpZHhdLmlkID09IHdpZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0ud2lkZ2V0c1tpZHhdLmRyYWdnaWUgPSBkcmFnZ2llO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZ3JpZC5wYWNrZXJ5KCAnYmluZERyYWdnYWJpbGx5RXZlbnRzJywgdm0ud2lkZ2V0c1tpZHhdLmRyYWdnaWUgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGdyaWQucGFja2VyeSggJ29uJywgJ2xheW91dENvbXBsZXRlJywgb3JkZXJJdGVtcyApO1xyXG4gICAgICAgICAgICAkZ3JpZC5wYWNrZXJ5KCAnb24nLCAnZHJhZ0l0ZW1Qb3NpdGlvbmVkJywgb3JkZXJJdGVtcyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mbG93TWFuYWdlci9ncmlkLmNvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gNC8yOC8yMDE3LlxyXG4gKi9cbnZhciBQb3J0YWxMb2dpbkNvbnRyb2xsZXIgPSBleHBvcnRzLlBvcnRhbExvZ2luQ29udHJvbGxlciA9IGZ1bmN0aW9uIFBvcnRhbExvZ2luQ29udHJvbGxlcihwb3J0YWxMb2dpblNlcnZpY2UsICRzdGF0ZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9ydGFsTG9naW5Db250cm9sbGVyKTtcblxuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS5sb2dpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdm0uZXJyb3IgPSAnJztcbiAgICAgICAgdm0uZmV0Y2hpbmcgPSB0cnVlO1xuICAgICAgICBwb3J0YWxMb2dpblNlcnZpY2UubG9naW4odm0udXNlcm5hbWUsIHZtLnBhc3N3b3JkLCBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdkYXNoYm9hcmQnKTtcbiAgICAgICAgICAgIHZtLmZldGNoaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICB2bS5mZXRjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdm0uZXJyb3IgPSAnSW52YWxpZCBDcmVkZW50aWFscyc7XG4gICAgICAgIH0pO1xuICAgIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcG9ydGFsL2xvZ2luL3BvcnRhbC5sb2dpbi5jb250cm9sbGVyLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gNC8yOC8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvcnRhbExvZ2luQ29udHJvbGxlcntcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocG9ydGFsTG9naW5TZXJ2aWNlLCAkc3RhdGUpIHtcclxuICAgICAgICAnbmdJbmplY3QnXHJcblxyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZtLmxvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2bS5lcnJvciA9ICcnO1xyXG4gICAgICAgICAgICB2bS5mZXRjaGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHBvcnRhbExvZ2luU2VydmljZS5sb2dpbih2bS51c2VybmFtZSwgdm0ucGFzc3dvcmQsIGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2Rhc2hib2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgdm0uZmV0Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgIHZtLmZldGNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2bS5lcnJvciA9ICdJbnZhbGlkIENyZWRlbnRpYWxzJztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcG9ydGFsL2xvZ2luL3BvcnRhbC5sb2dpbi5jb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDQvMjgvMjAxNy5cclxuICovXG52YXIgRGFzaGJvYXJkQ29udHJvbGxlciA9IGV4cG9ydHMuRGFzaGJvYXJkQ29udHJvbGxlciA9IGZ1bmN0aW9uIERhc2hib2FyZENvbnRyb2xsZXIocG9ydGFsTG9naW5TZXJ2aWNlLCAkY29va2llU3RvcmUsIEFQSV9IT1NULCAkcmVzb3VyY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhc2hib2FyZENvbnRyb2xsZXIpO1xuXG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLnN0YXRlID0ge307XG4gICAgdm0udXNlciA9ICRjb29raWVTdG9yZS5nZXQoJ3VzZXJEYXRhJyk7XG5cbiAgICBmdW5jdGlvbiBnZXRBUFBMaXN0KCkge1xuXG4gICAgICAgIGlmICghdm0udXNlcikgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhcHBMaXN0ID0gcG9ydGFsTG9naW5TZXJ2aWNlLndyYXBBY3Rpb25zKCRyZXNvdXJjZShBUElfSE9TVCArICcvZ2V0YXBwbGlzdCcpLCBbJ3NhdmUnXSk7XG5cbiAgICAgICAgYXBwTGlzdC5zYXZlKHsgdXNlcl9pZDogNiB9KS4kcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICB2bS5wcm9kdWN0TGlzdCA9IHByb2Nlc3NQcm9kdWN0TGlzdChyZXN1bHRzLnByb2R1Y3RzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc1Byb2R1Y3RMaXN0KGxpc3QpIHtcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIGxpc3QpIHtcbiAgICAgICAgICAgIGxpc3RbaWR4XS5kZWJ1Z2dpbmcgPSBwYXJzZUludChsaXN0W2lkeF0uZGVidWdnaW5nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzeW5jQVBJTGlzdCgpIHtcblxuICAgICAgICBpZiAoIXZtLnVzZXIpIHJldHVybjtcblxuICAgICAgICB2YXIgYXBwTGlzdCA9IHBvcnRhbExvZ2luU2VydmljZS53cmFwQWN0aW9ucygkcmVzb3VyY2UoQVBJX0hPU1QgKyAnL2dldGFwaWNhbGxzJyksIFsnc2F2ZSddKTtcblxuICAgICAgICBhcHBMaXN0LnNhdmUoeyBwcm9kdWN0X2lkOiB2bS5zdGF0ZS5wcm9kdWN0LmlkIH0pLiRwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHZtLmFwaWNhbGxzID0gcmVzdWx0cy5hcGljYWxscztcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB2bS5hcGljYWxscykge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wTGlzdCA9IHZtLmFwaWNhbGxzW2lkeF0uYXBpLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgdm0uYXBpY2FsbHNbaWR4XS5hcGlFbmRwb2ludCA9IHRlbXBMaXN0W3RlbXBMaXN0Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIHZtLmFwaWNhbGxzW2lkeF0uYXBpRW5kcG9pbnQgPSB2bS5hcGljYWxsc1tpZHhdLmFwaUVuZHBvaW50LnNwbGl0KCc/Jyk7XG4gICAgICAgICAgICAgICAgdm0uYXBpY2FsbHNbaWR4XS5hcGlFbmRwb2ludCA9IHZtLmFwaWNhbGxzW2lkeF0uYXBpRW5kcG9pbnRbMF07XG4gICAgICAgICAgICAgICAgdm0uYXBpY2FsbHNbaWR4XS50aW1lc3RhbXAgPSBnZXRUaW1lRnJvbVN0cmluZyh2bS5hcGljYWxsc1tpZHhdLmNyZWF0ZWRfYXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUaW1lRnJvbVN0cmluZyhzdHIpIHtcbiAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRUaW1lKG1vbWVudChzdHIpLnVuaXgoKSAqIDEwMDApO1xuICAgIH1cblxuICAgIHZhciBtaW51dGUgPSAxMDAwICogNjA7XG4gICAgdmFyIGhvdXIgPSBtaW51dGUgKiA2MDtcbiAgICB2YXIgc2hpZnRIb3VycyA9IDU7XG4gICAgdmFyIHNoaWZ0TWludXRlcyA9IDMwO1xuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUodGltZXN0YW1wKSB7XG4gICAgICAgIHJldHVybiB0aW1lc3RhbXAgKyAoc2hpZnRIb3VycyAqIGhvdXIgKyBzaGlmdE1pbnV0ZXMgKiBtaW51dGUpO1xuICAgIH1cblxuICAgIHZtLnNlbGVjdEFQSUNhbGwgPSBmdW5jdGlvbiAoY2FsbCkge1xuICAgICAgICB2bS5zdGF0ZS5hcGljYWxsID0gY2FsbDtcbiAgICAgICAgdmFyIGpzb247XG4gICAgICAgIHZhciBzdHI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZSh2bS5zdGF0ZS5hcGljYWxsLnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgc3RyID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgdW5kZWZpbmVkLCA0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgc3RyID0gdm0uc3RhdGUuYXBpY2FsbC5wYXJhbWV0ZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0cHV0KHN5bnRheEhpZ2hsaWdodChzdHIpKTtcbiAgICB9O1xuXG4gICAgdm0uc3luY0FQSUNhbGxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzeW5jQVBJTGlzdCgpO1xuICAgIH07XG5cbiAgICB2bS5zZWxlY3RQcm9kdWN0ID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdm0uc3RhdGUucHJvZHVjdCA9IGl0ZW07XG4gICAgfTtcblxuICAgIHZtLmNoYW5nZU1vZGUgPSBmdW5jdGlvbiAoaXRlbSkge1xuXG4gICAgICAgIHZhciBhcHBMaXN0ID0gcG9ydGFsTG9naW5TZXJ2aWNlLndyYXBBY3Rpb25zKCRyZXNvdXJjZShBUElfSE9TVCArICcvY2hhbmdlZGVidWdnaW5nbW9kZScpLCBbJ3NhdmUnXSk7XG5cbiAgICAgICAgdmFyIGRlYiA9ICF2bS5zdGF0ZS5wcm9kdWN0LmRlYnVnZ2luZyA/IDEgOiAwO1xuXG4gICAgICAgIGFwcExpc3Quc2F2ZSh7IGlkOiB2bS5zdGF0ZS5wcm9kdWN0LmlkLCBkZWJ1Z2dpbmc6IGRlYiB9KS4kcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICB2bS5zdGF0ZS5wcm9kdWN0ID0gcmVzdWx0cy5wcm9kdWN0O1xuICAgICAgICAgICAgdm0ucHJvZHVjdExpc3QgPSByZXN1bHRzLnByb2R1Y3RzO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZ2V0QVBQTGlzdCgpO1xuXG4gICAgZnVuY3Rpb24gb3V0cHV0KGlucCkge1xuICAgICAgICAkKCcuZGJtY2QtY29udGFpbmVyIHByZScpLmh0bWwoaW5wKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzeW50YXhIaWdobGlnaHQoanNvbikge1xuICAgICAgICBqc29uID0ganNvbi5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gICAgICAgIHJldHVybiBqc29uLnJlcGxhY2UoLyhcIihcXFxcdVthLXpBLVowLTldezR9fFxcXFxbXnVdfFteXFxcXFwiXSkqXCIoXFxzKjopP3xcXGIodHJ1ZXxmYWxzZXxudWxsKVxcYnwtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWytcXC1dP1xcZCspPykvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICB2YXIgY2xzID0gJ251bWJlcic7XG4gICAgICAgICAgICBpZiAoL15cIi8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoLzokLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICBjbHMgPSAna2V5JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbHMgPSAnc3RyaW5nJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKC90cnVlfGZhbHNlLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICAgICAgICAgIGNscyA9ICdib29sZWFuJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoL251bGwvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgY2xzID0gJ251bGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbHMgKyAnXCI+JyArIG1hdGNoICsgJzwvc3Bhbj4nO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcG9ydGFsL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29udHJvbGxlci5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDQvMjgvMjAxNy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb250cm9sbGVye1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwb3J0YWxMb2dpblNlcnZpY2UsICRjb29raWVTdG9yZSwgQVBJX0hPU1QsICRyZXNvdXJjZSl7XHJcbiAgICAgICAgJ25nSW5qZWN0J1xyXG5cclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG5cclxuICAgICAgICB2bS5zdGF0ZSA9IHt9O1xyXG4gICAgICAgIHZtLnVzZXIgPSAkY29va2llU3RvcmUuZ2V0KCd1c2VyRGF0YScpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRBUFBMaXN0KCkge1xyXG5cclxuICAgICAgICAgICAgaWYoIXZtLnVzZXIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgYXBwTGlzdCA9IHBvcnRhbExvZ2luU2VydmljZS53cmFwQWN0aW9ucyhcclxuICAgICAgICAgICAgICAgICRyZXNvdXJjZShBUElfSE9TVCArICcvZ2V0YXBwbGlzdCcpLFxyXG4gICAgICAgICAgICAgICAgWydzYXZlJ11cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGFwcExpc3Quc2F2ZSh7dXNlcl9pZDogNn0pLiRwcm9taXNlLnRoZW4oZnVuY3Rpb24ocmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgdm0ucHJvZHVjdExpc3QgPSBwcm9jZXNzUHJvZHVjdExpc3QocmVzdWx0cy5wcm9kdWN0cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc1Byb2R1Y3RMaXN0KGxpc3QpIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpZHggaW4gbGlzdCl7XHJcbiAgICAgICAgICAgICAgICBsaXN0W2lkeF0uZGVidWdnaW5nID0gcGFyc2VJbnQobGlzdFtpZHhdLmRlYnVnZ2luZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzeW5jQVBJTGlzdCgpIHtcclxuXHJcbiAgICAgICAgICAgIGlmKCF2bS51c2VyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFwcExpc3QgPSBwb3J0YWxMb2dpblNlcnZpY2Uud3JhcEFjdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAkcmVzb3VyY2UoQVBJX0hPU1QgKyAnL2dldGFwaWNhbGxzJyksXHJcbiAgICAgICAgICAgICAgICBbJ3NhdmUnXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgYXBwTGlzdC5zYXZlKHtwcm9kdWN0X2lkOiB2bS5zdGF0ZS5wcm9kdWN0LmlkfSkuJHByb21pc2UudGhlbihmdW5jdGlvbihyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICB2bS5hcGljYWxscyA9IHJlc3VsdHMuYXBpY2FsbHM7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGlkeCBpbiB2bS5hcGljYWxscyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBMaXN0ID0gdm0uYXBpY2FsbHNbaWR4XS5hcGkuc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgICAgICAgICB2bS5hcGljYWxsc1tpZHhdLmFwaUVuZHBvaW50ID0gdGVtcExpc3RbdGVtcExpc3QubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLmFwaWNhbGxzW2lkeF0uYXBpRW5kcG9pbnQgPSB2bS5hcGljYWxsc1tpZHhdLmFwaUVuZHBvaW50LnNwbGl0KCc/Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0uYXBpY2FsbHNbaWR4XS5hcGlFbmRwb2ludCA9IHZtLmFwaWNhbGxzW2lkeF0uYXBpRW5kcG9pbnRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdm0uYXBpY2FsbHNbaWR4XS50aW1lc3RhbXAgPSBnZXRUaW1lRnJvbVN0cmluZyh2bS5hcGljYWxsc1tpZHhdLmNyZWF0ZWRfYXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFRpbWVGcm9tU3RyaW5nKHN0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0Q3VycmVudFRpbWUobW9tZW50KHN0cikudW5peCgpICogMTAwMClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtaW51dGUgPSAxMDAwICogNjA7XHJcbiAgICAgICAgdmFyIGhvdXIgPSBtaW51dGUgKiA2MDtcclxuICAgICAgICB2YXIgc2hpZnRIb3VycyA9IDU7XHJcbiAgICAgICAgdmFyIHNoaWZ0TWludXRlcyA9IDMwO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSh0aW1lc3RhbXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVzdGFtcCArICggKHNoaWZ0SG91cnMgKiBob3VyKSArIChzaGlmdE1pbnV0ZXMgKiBtaW51dGUpICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2bS5zZWxlY3RBUElDYWxsID0gZnVuY3Rpb24gKGNhbGwpIHtcclxuICAgICAgICAgICAgdm0uc3RhdGUuYXBpY2FsbCA9IGNhbGw7XHJcbiAgICAgICAgICAgIHZhciBqc29uXHJcbiAgICAgICAgICAgIHZhciBzdHI7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKHZtLnN0YXRlLmFwaWNhbGwucGFyYW1ldGVycylcclxuICAgICAgICAgICAgICAgIHN0ciA9IEpTT04uc3RyaW5naWZ5KGpzb24sIHVuZGVmaW5lZCwgNCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAgICAgc3RyID0gdm0uc3RhdGUuYXBpY2FsbC5wYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvdXRwdXQoc3ludGF4SGlnaGxpZ2h0KHN0cikpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLnN5bmNBUElDYWxscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3luY0FQSUxpc3QoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5zZWxlY3RQcm9kdWN0ID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdm0uc3RhdGUucHJvZHVjdCA9IGl0ZW07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uY2hhbmdlTW9kZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXBwTGlzdCA9IHBvcnRhbExvZ2luU2VydmljZS53cmFwQWN0aW9ucyhcclxuICAgICAgICAgICAgICAgICRyZXNvdXJjZShBUElfSE9TVCArICcvY2hhbmdlZGVidWdnaW5nbW9kZScpLFxyXG4gICAgICAgICAgICAgICAgWydzYXZlJ11cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkZWIgPSAhdm0uc3RhdGUucHJvZHVjdC5kZWJ1Z2dpbmcgPyAxIDogMDtcclxuXHJcbiAgICAgICAgICAgIGFwcExpc3Quc2F2ZSh7aWQ6IHZtLnN0YXRlLnByb2R1Y3QuaWQsIGRlYnVnZ2luZzogZGVifSlcclxuICAgICAgICAgICAgICAgIC4kcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2bS5zdGF0ZS5wcm9kdWN0ID0gcmVzdWx0cy5wcm9kdWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLnByb2R1Y3RMaXN0ID0gcmVzdWx0cy5wcm9kdWN0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGdldEFQUExpc3QoKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG91dHB1dChpbnApIHtcclxuICAgICAgICAgICAgJCgnLmRibWNkLWNvbnRhaW5lciBwcmUnKS5odG1sKGlucCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzeW50YXhIaWdobGlnaHQoanNvbikge1xyXG4gICAgICAgICAgICBqc29uID0ganNvbi5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBqc29uLnJlcGxhY2UoLyhcIihcXFxcdVthLXpBLVowLTldezR9fFxcXFxbXnVdfFteXFxcXFwiXSkqXCIoXFxzKjopP3xcXGIodHJ1ZXxmYWxzZXxudWxsKVxcYnwtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWytcXC1dP1xcZCspPykvZywgZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2xzID0gJ251bWJlcic7XHJcbiAgICAgICAgICAgICAgICBpZiAoL15cIi8udGVzdChtYXRjaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoLzokLy50ZXN0KG1hdGNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgPSAna2V5JztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgPSAnc3RyaW5nJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKC90cnVlfGZhbHNlLy50ZXN0KG1hdGNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNscyA9ICdib29sZWFuJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoL251bGwvLnRlc3QobWF0Y2gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xzID0gJ251bGwnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbHMgKyAnXCI+JyArIG1hdGNoICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcG9ydGFsL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiA0LzI4LzIwMTcuXHJcbiAqL1xudmFyIGh0dHAgPSBleHBvcnRzLmh0dHAgPSBmdW5jdGlvbiBodHRwKCRyZXNvdXJjZSwgQVBJX0hPU1QsICRsb2csICRxLCBwb3J0YWxMb2dpblNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGh0dHApO1xuXG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLnBvc3QgPSBmdW5jdGlvbiAodXJsLCBib2R5KSB7XG4gICAgICAgIHZhciByZXEgPSBwb3J0YWxMb2dpblNlcnZpY2Uud3JhcEFjdGlvbnMoJHJlc291cmNlKEFQSV9IT1NUICsgdXJsKSwgWydzYXZlJ10pO1xuXG4gICAgICAgIHJldHVybiByZXEuc2F2ZShib2R5KS4kcHJvbWlzZS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICB9O1xuXG4gICAgdm0uaGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAvLyRsb2cubG9nKFwiaGFuZGxlUmVzcG9uc2VcIik7XG4gICAgICAgIGlmIChyZXNwLmRhdGEpIHtcbiAgICAgICAgICAgIHJlc3AgPSByZXNwLmRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XG4gICAgfTtcblxuICAgIHZtLmhhbmRsZUZhaWx1cmUgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAvLyRpbkVycm9yLmFkZChyZXNwKTtcbiAgICAgICAgJGxvZy5sb2coXCJoYW5kbGVGYWlsdXJlIFwiLCByZXNwKTtcbiAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZXNwKTtcbiAgICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BvcnRhbC9odHRwU2VydmljZS9odHRwU2VydmljZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDQvMjgvMjAxNy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBodHRwe1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgkcmVzb3VyY2UsIEFQSV9IT1NULCAkbG9nLCAkcSwgcG9ydGFsTG9naW5TZXJ2aWNlKXtcclxuICAgICAgICAnbmdJbmplY3QnXHJcblxyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZtLnBvc3QgPSBmdW5jdGlvbiAodXJsLCBib2R5KSB7XHJcbiAgICAgICAgICAgIHZhciByZXEgPSBwb3J0YWxMb2dpblNlcnZpY2Uud3JhcEFjdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAkcmVzb3VyY2UoQVBJX0hPU1QgKyB1cmwpLFxyXG4gICAgICAgICAgICAgICAgWydzYXZlJ11cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXEuc2F2ZShib2R5KS4kcHJvbWlzZVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uaGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAvLyRsb2cubG9nKFwiaGFuZGxlUmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIGlmKHJlc3AuZGF0YSl7XHJcbiAgICAgICAgICAgICAgICByZXNwID0gcmVzcC5kYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmhhbmRsZUZhaWx1cmUgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAvLyRpbkVycm9yLmFkZChyZXNwKTtcclxuICAgICAgICAgICAgJGxvZy5sb2coXCJoYW5kbGVGYWlsdXJlIFwiLCByZXNwKTtcclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZXNwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BvcnRhbC9odHRwU2VydmljZS9odHRwU2VydmljZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgdmlkZW9QbGF5ZXJDb250cm9sbGVyID0gZnVuY3Rpb24gdmlkZW9QbGF5ZXJDb250cm9sbGVyKHRhZykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCB2aWRlb1BsYXllckNvbnRyb2xsZXIpO1xuXG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIGZsb3dNYW5hZ2VyLmluaXRXaWRnZXQodGFnLCBmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIGluaXQodGFnKTtcbiAgICB9KTtcblxuICAgIHZtLnByb2Nlc3NJbnB1dCA9IGZ1bmN0aW9uICh0YWcsIGRhdGEpIHt9O1xuXG4gICAgZnVuY3Rpb24gaW5pdCh0YWcpIHtcbiAgICAgICAgdm0udGFnID0gdGFnLnRhZ19pZDtcbiAgICB9XG59O1xuXG52YXIgdmlkZW9QbGF5ZXIgPSB7XG4gICAgY29udHJvbGxlcjogdmlkZW9QbGF5ZXJDb250cm9sbGVyLFxuICAgIHZpZXc6ICdhcHAvd2lkZ2V0cy9jb21tb24vdmlkZW9QbGF5ZXIvdmlkZW8ucGxheWVyLmh0bWwnLFxuICAgIG1ldGhvZHM6IFtcbiAgICAgICAgLy8ge2lkOjAsIG5hbWU6J3NldERhdGEnLG91dHB1dDp0cnVlLCBpbnB1dDp0cnVlLCBwYXJhbXMgOiBbJ2Fzc2V0J119LFxuICAgIF0sXG4gICAgY29sb3I6ICcjY2MyMjIyJyxcbiAgICBzZXR0aW5nczogeyB2aDogMjAsIHc6IDkgfVxufTtcblxuZXhwb3J0cy52aWRlb1BsYXllciA9IHZpZGVvUGxheWVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd2lkZ2V0cy9jb21tb24vdmlkZW9QbGF5ZXIvdmlkZW8ucGxheWVyLmpzIiwiXG5jbGFzcyB2aWRlb1BsYXllckNvbnRyb2xsZXJ7XG5cbiAgICBjb25zdHJ1Y3RvciAodGFnKSB7XG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgICAgZmxvd01hbmFnZXIuaW5pdFdpZGdldCh0YWcsIGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgIGluaXQodGFnKVxuICAgICAgICB9KTtcblxuICAgICAgICB2bS5wcm9jZXNzSW5wdXQgPSBmdW5jdGlvbiAodGFnLCBkYXRhKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXQodGFnKSB7XG4gICAgICAgICAgICB2bS50YWcgPSB0YWcudGFnX2lkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbnZhciB2aWRlb1BsYXllciA9IHtcbiAgICBjb250cm9sbGVyOiB2aWRlb1BsYXllckNvbnRyb2xsZXIsXG4gICAgdmlldzonYXBwL3dpZGdldHMvY29tbW9uL3ZpZGVvUGxheWVyL3ZpZGVvLnBsYXllci5odG1sJyxcbiAgICBtZXRob2RzOltcbiAgICAgICAgLy8ge2lkOjAsIG5hbWU6J3NldERhdGEnLG91dHB1dDp0cnVlLCBpbnB1dDp0cnVlLCBwYXJhbXMgOiBbJ2Fzc2V0J119LFxuICAgIF0sXG4gICAgY29sb3I6JyNjYzIyMjInLFxuICAgIHNldHRpbmdzIDoge3ZoOjIwLCB3Ojl9LFxufVxuXG5cbmV4cG9ydCB7dmlkZW9QbGF5ZXJ9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93aWRnZXRzL2NvbW1vbi92aWRlb1BsYXllci92aWRlby5wbGF5ZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyICQzZFBsYXllckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAkM2RQbGF5ZXJDb250cm9sbGVyKHRhZywgJHNjb3BlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsICQzZFBsYXllckNvbnRyb2xsZXIpO1xuXG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qXG4gICAgKlxuICAgICogRmxvdyBNYW5hZ2VyIEZ1bmN0aW9uc1xuICAgICpcbiAgICAqICovXG5cbiAgICB2bS5wcm9jZXNzSW5wdXQgPSBmdW5jdGlvbiAodGFnLCBkYXRhKSB7XG4gICAgICAgIGlmICh0YWcgPT0gJ3NldEZyYW1lJykge1xuICAgICAgICAgICAgdXBkYXRlRnJhbWUoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0uZnJhbWVEYXRhID0ge307XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVGcmFtZShkYXRhKSB7XG4gICAgICAgIGlmICgnY2FtZXJhUG9zaXRpb24nIGluIGRhdGEpIHtcbiAgICAgICAgICAgIHZtLmZyYW1lRGF0YS5jYW1lcmFQb3NpdGlvbiA9IGRhdGEuY2FtZXJhUG9zaXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICpcbiAgICAqIFZhcmlhYmxlIEluaXRpYWxpemF0aW9uXG4gICAgKlxuICAgICogKi9cblxuICAgIHZtLm1vZGVzID0ge1xuICAgICAgICAnTUFOVUFMJzogJ01BTlVBTCcsXG4gICAgICAgICdBVVRPJzogJ0FVVE8nXG4gICAgfTtcblxuICAgIHZtLnRvb2xzID0ge1xuICAgICAgICAnTU9WRSc6ICdNT1ZFJyxcbiAgICAgICAgJ0NVVFZJRVcnOiAnQ1VUVklFVydcbiAgICB9O1xuXG4gICAgdm0uYXhlcyA9IHtcbiAgICAgICAgWDogJ1gnLFxuICAgICAgICBZOiAnWScsXG4gICAgICAgIFo6ICdaJ1xuICAgIH07XG5cbiAgICB2bS5jb250cm9scyA9IHtcbiAgICAgICAgbW9kZTogdm0ubW9kZXMuQVVUTyxcbiAgICAgICAgdG9vbDoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBjdXJyZW50OiB2bS50b29sc1snTU9WRSddXG4gICAgICAgIH0sXG4gICAgICAgIGN1dHZpZXc6IHtcbiAgICAgICAgICAgIHBsYW5lczogW10sXG4gICAgICAgICAgICBheGlzOiB2bS5heGVzWydYJ11cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBUaHJlZUpTXG4gICAgKlxuICAgICogKi9cblxuICAgIHZhciByZW5kZXJlcixcbiAgICAgICAgY2FtZXJhLFxuICAgICAgICBsb2FkZXIsXG4gICAgICAgIHZpZXdwb3J0SGVpZ2h0LFxuICAgICAgICB2aWV3cG9ydFdpZHRoLFxuICAgICAgICBzY2VuZSxcbiAgICAgICAgdmlld3BvcnRJZCA9ICczZFBsYXllcicsXG4gICAgICAgIGdlb01lc2gsXG4gICAgICAgIGNhbWVyYUNvbnRyb2xzLFxuICAgICAgICBzdGF0cztcblxuICAgIGZ1bmN0aW9uIGluaXRUaHJlZSgpIHtcbiAgICAgICAgdmFyIHRocmVlSW50ZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJCgnIycgKyB2aWV3cG9ydElkKS5sZW5ndGggPiAwICYmICQoJyMnICsgdmlld3BvcnRJZCkuaGVpZ2h0KCkgPiAxNTApIHtcbiAgICAgICAgICAgICAgICB2aWV3cG9ydEhlaWdodCA9ICQoJyMnICsgdmlld3BvcnRJZCkuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgdmlld3BvcnRXaWR0aCA9ICQoJyMnICsgdmlld3BvcnRJZCkud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBpZiAodmlld3BvcnRIZWlnaHQgPiAwICYmIHZpZXdwb3J0V2lkdGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXQzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhyZWVJbnRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdDMoKSB7XG4gICAgICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IGZhbHNlLCBhbHBoYTogdHJ1ZSB9KTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh2aWV3cG9ydFdpZHRoLCB2aWV3cG9ydEhlaWdodCk7XG4gICAgICAgIC8vIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIDB4Nzc3Nzc3LCAwICk7IC8vIHRoZSBkZWZhdWx0XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXdwb3J0SWQpLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgdmlld3BvcnRXaWR0aCAvIHZpZXdwb3J0SGVpZ2h0LCAwLjEsIDUwMCk7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoMi41LCAyLjUsIDIuNSk7XG5cbiAgICAgICAgbG9hZGVyID0gbmV3IFRIUkVFLkpTT05Mb2FkZXIoKTtcbiAgICAgICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgICAgICBjYW1lcmFDb250cm9scyA9IG5ldyBUSFJFRS5PcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICAgIGNhbWVyYUNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHJlbmRlcik7IC8vIHJlbW92ZSB3aGVuIHVzaW5nIGFuaW1hdGlvbiBsb29wXG4gICAgICAgIGNhbWVyYUNvbnRyb2xzLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBlbmFibGUgYW5pbWF0aW9uIGxvb3Agd2hlbiB1c2luZyBkYW1waW5nIG9yIGF1dG9yb3RhdGlvblxuICAgICAgICAvLyBjYW1lcmFDb250cm9scy5lbmFibGVEYW1waW5nID0gdHJ1ZTtcbiAgICAgICAgLy8gY2FtZXJhQ29udHJvbHMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG4gICAgICAgIC8vIGNhbWVyYUNvbnRyb2xzLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuICAgICAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgICAgICAgICAgLy8gbWFwIDogdGV4dHVyZSxcbiAgICAgICAgICAgIGNvbG9yOiAweDg4MzMzMyxcbiAgICAgICAgICAgIHZlcnRleENvbG9yczogVEhSRUUuVmVydGV4Q29sb3JzLFxuICAgICAgICAgICAgc3BlY3VsYXI6IDB4NTU1NTU1LFxuICAgICAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcbiAgICAgICAgICAgIHNoaW5pbmVzczogMTAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvYWRlci5sb2FkKCdhcHAvbW9kZWxzL25ldXJvbi5qcycsIGZ1bmN0aW9uIChnZW8sIG1hdCkge1xuICAgICAgICAgICAgbWF0WzBdLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobWF0KTtcbiAgICAgICAgICAgIGdlb01lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsKTtcbiAgICAgICAgICAgIHZtLnNlcnZvQm9keSA9IGdlb01lc2g7XG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KGdlb01lc2gucG9zaXRpb24pO1xuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICAgICAgc2NlbmUuYWRkKGdlb01lc2gpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgbGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KCcjZmZmJyk7IC8vIHNvZnQgd2hpdGUgbGlnaHRcbiAgICAgICAgc2NlbmUuYWRkKGxpZ2h0KTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XG4gICAgICAgIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uc2V0KC0zLCAyMCwgMTAwKS5ub3JtYWxpemUoKTtcbiAgICAgICAgc2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xuXG4gICAgICAgIHN0YXRzID0gbmV3IFN0YXRzKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maWdXaWRnZXQnKS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xuXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcblxuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lID0gbmV3IFRIUkVFLlBsYW5lKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApLCAwLjEpO1xuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLm5vcm1hbC54ID0gLTE7XG4gICAgICAgIHJlbmRlcmVyLmNsaXBwaW5nUGxhbmVzID0gdm0uY29udHJvbHMuY3V0dmlldy5wbGFuZXM7XG5cbiAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXJNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IHRyYW5zcGFyZW50OiB0cnVlLCB3aXJlZnJhbWU6IHRydWUsIGNvbG9yOiAweGZmMDAwMCwgb3BhY2l0eTogMCB9KTtcbiAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgzLCAzLCAyLCAyKSwgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXJNYXRlcmlhbCk7XG5cbiAgICAgICAgdmFyIGNvbnRyb2wgPSBuZXcgVEhSRUUuVHJhbnNmb3JtQ29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAgICAgY29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCByZW5kZXIpO1xuICAgICAgICBjb250cm9sLmF0dGFjaCh2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlcik7XG5cbiAgICAgICAgc2NlbmUuYWRkKHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyKTtcbiAgICAgICAgLy8gc2NlbmUuYWRkKCBjb250cm9sICk7XG5cblxuICAgICAgICB2bS5jaGFuZ2VNb2RlKCdNQU5VQUwnKTtcbiAgICAgICAgdm0uY2hhbmdlVG9vbCgnTU9WRScpO1xuICAgICAgICB2bS5jaGFuZ2VDdXRWaWV3QXhpcygnWCcpO1xuICAgICAgICBhcHBseVNjb3BlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgdm0uc2Vydm9BbmltSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIHJlbmRlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcHJvY2Vzc0ZyYW1lKCk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRnJhbWUoKSB7XG4gICAgICAgIGlmICh2bS5jb250cm9scy5tb2RlID09IHZtLm1vZGVzLkFVVE8pIHtcbiAgICAgICAgICAgIGFuaW1hdGVWZWN0b3JzKGNhbWVyYS5wb3NpdGlvbiwgdm0uZnJhbWVEYXRhLmNhbWVyYVBvc2l0aW9uLCAwLjIpO1xuICAgICAgICAgICAgY2FtZXJhLmxvb2tBdChnZW9NZXNoLnBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHt9XG4gICAgICAgIHN0YXRzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHZhciBkaW1lbnNpb25zID0gWyd4JywgJ3knLCAneiddO1xuICAgIHZhciBkaURpZmYgPSAwO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZVZlY3RvcnModjEsIHYyLCBtYXgpIHtcbiAgICAgICAgaWYgKCF2MSB8fCAhdjIpIHJldHVybjtcbiAgICAgICAgZm9yICh2YXIgYXhpcyBpbiBkaW1lbnNpb25zKSB7XG4gICAgICAgICAgICBkaURpZmYgPSB2MVtkaW1lbnNpb25zW2F4aXNdXSAtIHYyW2RpbWVuc2lvbnNbYXhpc11dO1xuICAgICAgICAgICAgaWYgKGRpRGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICB2MVtkaW1lbnNpb25zW2F4aXNdXSAtPSBNYXRoLm1pbihtYXgsIGRpRGlmZiAvIDEwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlEaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgIHYxW2RpbWVuc2lvbnNbYXhpc11dICs9IE1hdGgubWluKG1heCwgLTEgKiBkaURpZmYgLyAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBDb250cm9sbGVyIEZ1bmN0aW9uc1xuICAgICpcbiAgICAqICovXG5cbiAgICB2bS5jaGFuZ2VNb2RlID0gZnVuY3Rpb24gKG1vZGUpIHtcbiAgICAgICAgdm0uY29udHJvbHMubW9kZSA9IHZtLm1vZGVzW21vZGVdO1xuICAgICAgICBpZiAodm0ubW9kZXNbbW9kZV0gPT0gdm0ubW9kZXNbJ0FVVE8nXSkge1xuICAgICAgICAgICAgZGlzYWJsZVRvb2woKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuYWJsZVRvb2woKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2bS5jaGFuZ2VUb29sID0gZnVuY3Rpb24gKHRvb2wpIHtcbiAgICAgICAgaWYgKHZtLmNvbnRyb2xzLnRvb2wuZW5hYmxlZCkge1xuICAgICAgICAgICAgdm0uY29udHJvbHMudG9vbC5jdXJyZW50ID0gdm0udG9vbHNbdG9vbF07XG4gICAgICAgICAgICBpZiAodm0udG9vbHNbdG9vbF0gPT0gdm0udG9vbHNbJ01PVkUnXSkge1xuICAgICAgICAgICAgICAgIGNhbWVyYUNvbnRyb2xzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYW1lcmFDb250cm9scy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0uY2hhbmdlQ3V0Vmlld0F4aXMgPSBmdW5jdGlvbiAoYXhpcykge1xuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LmF4aXMgPSBheGlzO1xuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLm5vcm1hbC54ID0gMDtcbiAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5wbGFuZS5ub3JtYWwueSA9IDA7XG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmUubm9ybWFsLnogPSAwO1xuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLmNvbnN0YW50ID0gMC4wO1xuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5yb3RhdGlvbi54ID0gMDtcbiAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucm90YXRpb24ueSA9IDA7XG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnJvdGF0aW9uLnogPSAwO1xuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5wb3NpdGlvbi54ID0gLTAuMDI7XG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnBvc2l0aW9uLnkgPSAtMC4wMjtcbiAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucG9zaXRpb24ueiA9IC0wLjAyO1xuXG4gICAgICAgIGlmICh2bS5heGVzW2F4aXNdID09IHZtLmF4ZXNbJ1gnXSkge1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5wbGFuZS5ub3JtYWwueCA9IC0xO1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucm90YXRpb24ueSA9IE1hdGguUEkgLyAyO1xuICAgICAgICB9IGVsc2UgaWYgKHZtLmF4ZXNbYXhpc10gPT0gdm0uYXhlc1snWSddKSB7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLm5vcm1hbC55ID0gLTE7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLm5vcm1hbC56ID0gLTE7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0udG9nZ2xlQ3V0VmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHZtLmNvbnRyb2xzLmN1dHZpZXcuZW5hYmxlZCkge1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBkaXNhYmxlQ3V0VmlldygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGVuYWJsZUN1dFZpZXcoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2bS5jaGFuZ2VDdXRWaWV3VmFsID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLmNvbnN0YW50ICs9IHZhbDtcbiAgICAgICAgaWYgKHZtLmNvbnRyb2xzLmN1dHZpZXcuYXhpcyA9PSB2bS5heGVzWydYJ10pIHtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnBvc2l0aW9uLnggKz0gdmFsO1xuICAgICAgICB9IGVsc2UgaWYgKHZtLmNvbnRyb2xzLmN1dHZpZXcuYXhpcyA9PSB2bS5heGVzWydYJ10pIHtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnBvc2l0aW9uLnkgKz0gdmFsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucG9zaXRpb24ueiArPSB2YWw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGlzYWJsZVRvb2woKSB7XG4gICAgICAgIHZtLmNoYW5nZVRvb2woJycpO1xuICAgICAgICB2bS5jb250cm9scy50b29sLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVUb29sKCkge1xuICAgICAgICB2bS5jb250cm9scy50b29sLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB2bS5jaGFuZ2VUb29sKCdNT1ZFJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5hYmxlQ3V0VmlldygpIHtcbiAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgcmVuZGVyZXIuY2xpcHBpbmdQbGFuZXMgPSBbdm0uY29udHJvbHMuY3V0dmlldy5wbGFuZV07XG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyTWF0ZXJpYWwub3BhY2l0eSA9IDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzYWJsZUN1dFZpZXcoKSB7XG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICByZW5kZXJlci5jbGlwcGluZ1BsYW5lcyA9IFtdO1xuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlck1hdGVyaWFsLm9wYWNpdHkgPSAwO1xuICAgIH1cblxuICAgIC8qXG4gICAgKlxuICAgICogIEluaXQgRnVuY3Rpb25cbiAgICAqXG4gICAgKiAqL1xuXG4gICAgZnVuY3Rpb24gaW5pdEJDbGljaygpIHtcbiAgICAgICAgdm0uYmNsaWNrRWxzID0ge307XG4gICAgICAgIHZtLmJjbGlja0RvbUVscyA9IHZtLkRPTS5maW5kKCdbYi1jbGlja10nKTtcbiAgICAgICAgdm0uYmNsaWNrRG9tRWxzLmVhY2goZnVuY3Rpb24gKGtleSwgZWwpIHtcbiAgICAgICAgICAgICQoZWwpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBldmFsKCQoZWwpLmF0dHIoJ2ItY2xpY2snKSk7XG4gICAgICAgICAgICAgICAgYXBwbHlTY29wZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciB0ZW1wQXJyT2JqO1xuICAgIHZhciB0ZW1wQXJyO1xuXG4gICAgZnVuY3Rpb24gYXBwbHlCQ2xhc3MoKSB7XG4gICAgICAgIHZtLmJjbGlja0VscyA9IHt9O1xuICAgICAgICB2bS5iY2xpY2tEb21FbHMgPSB2bS5ET00uZmluZCgnW2ItY2xhc3NdJyk7XG4gICAgICAgIHZtLmJjbGlja0RvbUVscy5lYWNoKGZ1bmN0aW9uIChrZXksIGVsKSB7XG4gICAgICAgICAgICB0ZW1wQXJyID0gJChlbCkuYXR0cignYi1jbGFzcycpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdGVtcEFycikge1xuICAgICAgICAgICAgICAgIHRlbXBBcnJPYmogPSB0ZW1wQXJyW2lkeF0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBpZiAoZXZhbCh0ZW1wQXJyT2JqWzFdKSkgJChlbCkuYWRkQ2xhc3ModGVtcEFyck9ialswXSk7ZWxzZSAkKGVsKS5yZW1vdmVDbGFzcyh0ZW1wQXJyT2JqWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlTY29wZSgpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhcHBseUJDbGFzcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0U2NvcGUoKSB7XG4gICAgICAgIGluaXRCQ2xpY2soKTtcbiAgICAgICAgYXBwbHlTY29wZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQodGFnKSB7XG5cbiAgICAgICAgLypcbiAgICAgICAgKiAgIEJhc2ljIFNldHRpbmdzXG4gICAgICAgICogKi9cblxuICAgICAgICB2bS50YWcgPSB0YWcudGFnX2lkO1xuICAgICAgICB2bS53aWRnZXREYXRhID0gZmxvd01hbmFnZXIuZ2V0RGF0YSh2bS50YWcpO1xuICAgICAgICB2bS5ET00gPSB2bS53aWRnZXREYXRhLkRPTTtcbiAgICAgICAgaW5pdFRocmVlKCk7XG4gICAgICAgIGluaXRTY29wZSgpO1xuXG4gICAgICAgIC8qXG4gICAgICAgICogSW5pdGlhbCBTZXR1cFxuICAgICAgICAqICovXG4gICAgfVxuXG4gICAgZmxvd01hbmFnZXIuaW5pdFdpZGdldCh0YWcsIGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgaW5pdCh0YWcpO1xuICAgIH0pO1xufTtcblxudmFyICQzZFBsYXllciA9IHtcbiAgICBjb250cm9sbGVyOiAkM2RQbGF5ZXJDb250cm9sbGVyLFxuICAgIHZpZXc6ICdhcHAvd2lkZ2V0cy9jb21tb24vM2RQbGF5ZXIvM2QucGxheWVyLmh0bWwnLFxuICAgIG1ldGhvZHM6IFt7IGlkOiAwLCBuYW1lOiAnc2V0RnJhbWUnLCBvdXRwdXQ6IGZhbHNlLCBpbnB1dDogdHJ1ZSwgcGFyYW1zOiBbJ2ZyYW1lJ10gfV0sXG4gICAgY29sb3I6ICcjY2MyMjIyJyxcbiAgICBzZXR0aW5nczogeyB2aDogMjAsIHc6IDkgfVxufTtcblxuZXhwb3J0cy4kM2RQbGF5ZXIgPSAkM2RQbGF5ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93aWRnZXRzL2NvbW1vbi8zZFBsYXllci8zZC5wbGF5ZXIuanMiLCJcbmNsYXNzICQzZFBsYXllckNvbnRyb2xsZXJ7XG5cbiAgICBjb25zdHJ1Y3RvciAodGFnLCAkc2NvcGUpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgICAvKlxuICAgICAgICAqXG4gICAgICAgICogRmxvdyBNYW5hZ2VyIEZ1bmN0aW9uc1xuICAgICAgICAqXG4gICAgICAgICogKi9cblxuICAgICAgICB2bS5wcm9jZXNzSW5wdXQgPSBmdW5jdGlvbiAodGFnLCBkYXRhKSB7XG4gICAgICAgICAgICBpZih0YWcgPT0gJ3NldEZyYW1lJyl7XG4gICAgICAgICAgICAgICAgdXBkYXRlRnJhbWUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2bS5mcmFtZURhdGEgPSB7fTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVGcmFtZShkYXRhKSB7XG4gICAgICAgICAgICBpZignY2FtZXJhUG9zaXRpb24nIGluIGRhdGEpe1xuICAgICAgICAgICAgICAgIHZtLmZyYW1lRGF0YS5jYW1lcmFQb3NpdGlvbiA9IGRhdGEuY2FtZXJhUG9zaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqXG4gICAgICAgICogVmFyaWFibGUgSW5pdGlhbGl6YXRpb25cbiAgICAgICAgKlxuICAgICAgICAqICovXG5cbiAgICAgICAgdm0ubW9kZXMgPSB7XG4gICAgICAgICAgICAnTUFOVUFMJyA6ICdNQU5VQUwnLFxuICAgICAgICAgICAgJ0FVVE8nIDogJ0FVVE8nXG4gICAgICAgIH1cblxuICAgICAgICB2bS50b29scyA9IHtcbiAgICAgICAgICAgICdNT1ZFJyA6ICdNT1ZFJyxcbiAgICAgICAgICAgICdDVVRWSUVXJyA6ICdDVVRWSUVXJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmF4ZXMgPSB7XG4gICAgICAgICAgICBYIDogJ1gnLFxuICAgICAgICAgICAgWSA6ICdZJyxcbiAgICAgICAgICAgIFogOiAnWidcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5jb250cm9scyA9IHtcbiAgICAgICAgICAgIG1vZGUgOiB2bS5tb2Rlcy5BVVRPLFxuICAgICAgICAgICAgdG9vbCA6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY3VycmVudCA6IHZtLnRvb2xzWydNT1ZFJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdXR2aWV3IDoge1xuICAgICAgICAgICAgICAgIHBsYW5lcyA6IFtdLFxuICAgICAgICAgICAgICAgIGF4aXMgOiB2bS5heGVzWydYJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8qXG4gICAgICAgICpcbiAgICAgICAgKiAgVGhyZWVKU1xuICAgICAgICAqXG4gICAgICAgICogKi9cblxuICAgICAgICB2YXIgcmVuZGVyZXIsXG4gICAgICAgICAgICBjYW1lcmEsXG4gICAgICAgICAgICBsb2FkZXIsXG4gICAgICAgICAgICB2aWV3cG9ydEhlaWdodCxcbiAgICAgICAgICAgIHZpZXdwb3J0V2lkdGgsXG4gICAgICAgICAgICBzY2VuZSxcbiAgICAgICAgICAgIHZpZXdwb3J0SWQgPSAnM2RQbGF5ZXInLFxuICAgICAgICAgICAgZ2VvTWVzaCxcbiAgICAgICAgICAgIGNhbWVyYUNvbnRyb2xzLFxuICAgICAgICAgICAgc3RhdHM7XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdFRocmVlKCl7XG4gICAgICAgICAgICB2YXIgdGhyZWVJbnRlciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZigkKCcjJyt2aWV3cG9ydElkKS5sZW5ndGggPiAwICYmICQoJyMnK3ZpZXdwb3J0SWQpLmhlaWdodCgpID4gMTUwKXtcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnRIZWlnaHQgPSAkKCcjJyt2aWV3cG9ydElkKS5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnRXaWR0aCA9ICQoJyMnK3ZpZXdwb3J0SWQpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZpZXdwb3J0SGVpZ2h0ID4gMCAmJiB2aWV3cG9ydFdpZHRoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0MygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aHJlZUludGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sMjApXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbml0MygpIHtcbiAgICAgICAgICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczogZmFsc2UsIGFscGhhOiB0cnVlfSk7XG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHZpZXdwb3J0V2lkdGgsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIDB4Nzc3Nzc3LCAwICk7IC8vIHRoZSBkZWZhdWx0XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2aWV3cG9ydElkKS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgICAgICAgICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB2aWV3cG9ydFdpZHRoIC8gdmlld3BvcnRIZWlnaHQsIDAuMSwgNTAwKTtcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoMi41LCAyLjUsIDIuNSk7XG5cbiAgICAgICAgICAgIGxvYWRlciA9IG5ldyBUSFJFRS5KU09OTG9hZGVyKCk7XG4gICAgICAgICAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgICAgICAgICBjYW1lcmFDb250cm9scyA9IG5ldyBUSFJFRS5PcmJpdENvbnRyb2xzKCBjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcbiAgICAgICAgICAgIGNhbWVyYUNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCByZW5kZXIgKTsgLy8gcmVtb3ZlIHdoZW4gdXNpbmcgYW5pbWF0aW9uIGxvb3BcbiAgICAgICAgICAgIGNhbWVyYUNvbnRyb2xzLmVuYWJsZWQgPSBmYWxzZTtcblxuXG5cbiAgICAgICAgICAgIC8vIGVuYWJsZSBhbmltYXRpb24gbG9vcCB3aGVuIHVzaW5nIGRhbXBpbmcgb3IgYXV0b3JvdGF0aW9uXG4gICAgICAgICAgICAvLyBjYW1lcmFDb250cm9scy5lbmFibGVEYW1waW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGNhbWVyYUNvbnRyb2xzLmRhbXBpbmdGYWN0b3IgPSAwLjI1O1xuICAgICAgICAgICAgLy8gY2FtZXJhQ29udHJvbHMuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgICAgICAgICAgICAgIC8vIG1hcCA6IHRleHR1cmUsXG4gICAgICAgICAgICAgICAgY29sb3IgOiAweDg4MzMzMyxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhDb2xvcnMgOiBUSFJFRS5WZXJ0ZXhDb2xvcnMsXG4gICAgICAgICAgICAgICAgc3BlY3VsYXI6IDB4NTU1NTU1LFxuICAgICAgICAgICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXG4gICAgICAgICAgICAgICAgc2hpbmluZXNzOiAxMDAsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbG9hZGVyLmxvYWQoJ2FwcC9tb2RlbHMvbmV1cm9uLmpzJywgZnVuY3Rpb24gKGdlbywgbWF0KXtcbiAgICAgICAgICAgICAgICBtYXRbMF0uc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWF0KTtcbiAgICAgICAgICAgICAgICBnZW9NZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbCk7XG4gICAgICAgICAgICAgICAgdm0uc2Vydm9Cb2R5ID0gZ2VvTWVzaDtcbiAgICAgICAgICAgICAgICBjYW1lcmEubG9va0F0KGdlb01lc2gucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgICAgICAgICBzY2VuZS5hZGQoZ2VvTWVzaCk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB2YXIgbGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KCcjZmZmJyk7IC8vIHNvZnQgd2hpdGUgbGlnaHRcbiAgICAgICAgICAgIHNjZW5lLmFkZChsaWdodCk7XG4gICAgICAgICAgICB2YXIgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmKTtcbiAgICAgICAgICAgIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uc2V0KC0zLCAyMCwgMTAwKS5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgIHNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KTtcblxuXG4gICAgICAgICAgICBzdGF0cyA9IG5ldyBTdGF0cygpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpZ1dpZGdldCcpLmFwcGVuZENoaWxkKCBzdGF0cy5kb20gKTtcblxuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXG5cbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmUgPSBuZXcgVEhSRUUuUGxhbmUoIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAwLCAwICksIDAuMSApO1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5wbGFuZS5ub3JtYWwueCA9IC0xO1xuICAgICAgICAgICAgcmVuZGVyZXIuY2xpcHBpbmdQbGFuZXMgPSB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lcztcblxuXG5cbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgdHJhbnNwYXJlbnQ6dHJ1ZSwgd2lyZWZyYW1lOiB0cnVlLCBjb2xvcjoweGZmMDAwMCwgb3BhY2l0eTowIH0gKTtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoIDMsIDMsIDIsIDIgKSx2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlck1hdGVyaWFsKTtcblxuXG4gICAgICAgICAgICB2YXIgY29udHJvbCA9IG5ldyBUSFJFRS5UcmFuc2Zvcm1Db250cm9scyggY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50ICk7XG4gICAgICAgICAgICBjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCByZW5kZXIgKTtcbiAgICAgICAgICAgIGNvbnRyb2wuYXR0YWNoKCB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlciApO1xuXG4gICAgICAgICAgICBzY2VuZS5hZGQodm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIpO1xuICAgICAgICAgICAgLy8gc2NlbmUuYWRkKCBjb250cm9sICk7XG5cblxuICAgICAgICAgICAgdm0uY2hhbmdlTW9kZSgnTUFOVUFMJyk7XG4gICAgICAgICAgICB2bS5jaGFuZ2VUb29sKCdNT1ZFJyk7XG4gICAgICAgICAgICB2bS5jaGFuZ2VDdXRWaWV3QXhpcygnWCcpXG4gICAgICAgICAgICBhcHBseVNjb3BlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICAgICAgdm0uc2Vydm9BbmltSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcbiAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcHJvY2Vzc0ZyYW1lKCk7XG4gICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzRnJhbWUoKSB7XG4gICAgICAgICAgICBpZih2bS5jb250cm9scy5tb2RlID09IHZtLm1vZGVzLkFVVE8pe1xuICAgICAgICAgICAgICAgIGFuaW1hdGVWZWN0b3JzKGNhbWVyYS5wb3NpdGlvbiwgdm0uZnJhbWVEYXRhLmNhbWVyYVBvc2l0aW9uLCAwLjIpO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQoZ2VvTWVzaC5wb3NpdGlvbik7XG4gICAgICAgICAgICB9ZWxzZXtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdHMudXBkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGltZW5zaW9ucyA9IFsneCcsJ3knLCd6J107XG4gICAgICAgIHZhciBkaURpZmYgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGVWZWN0b3JzKHYxLCB2MiwgbWF4KSB7XG4gICAgICAgICAgICBpZighdjEgfHwgIXYyKSByZXR1cm47XG4gICAgICAgICAgICBmb3IodmFyIGF4aXMgaW4gZGltZW5zaW9ucyl7XG4gICAgICAgICAgICAgICAgZGlEaWZmID0gdjFbZGltZW5zaW9uc1theGlzXV0gLSB2MltkaW1lbnNpb25zW2F4aXNdXTtcbiAgICAgICAgICAgICAgICBpZihkaURpZmYgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdjFbZGltZW5zaW9uc1theGlzXV0gLT0gTWF0aC5taW4obWF4LCBkaURpZmYgLyAxMClcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkaURpZmYgPCAwKXtcbiAgICAgICAgICAgICAgICAgICAgdjFbZGltZW5zaW9uc1theGlzXV0gKz0gTWF0aC5taW4obWF4LCAtMSAqIGRpRGlmZiAvIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qXG4gICAgICAgICpcbiAgICAgICAgKiAgQ29udHJvbGxlciBGdW5jdGlvbnNcbiAgICAgICAgKlxuICAgICAgICAqICovXG5cblxuICAgICAgICB2bS5jaGFuZ2VNb2RlID0gZnVuY3Rpb24gKG1vZGUpIHtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLm1vZGUgPSB2bS5tb2Rlc1ttb2RlXTtcbiAgICAgICAgICAgIGlmKHZtLm1vZGVzW21vZGVdID09IHZtLm1vZGVzWydBVVRPJ10pe1xuICAgICAgICAgICAgICAgIGRpc2FibGVUb29sKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBlbmFibGVUb29sKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2bS5jaGFuZ2VUb29sID0gZnVuY3Rpb24gKHRvb2wpIHtcbiAgICAgICAgICAgIGlmKHZtLmNvbnRyb2xzLnRvb2wuZW5hYmxlZCl7XG4gICAgICAgICAgICAgICAgdm0uY29udHJvbHMudG9vbC5jdXJyZW50ID0gdm0udG9vbHNbdG9vbF07XG4gICAgICAgICAgICAgICAgaWYodm0udG9vbHNbdG9vbF0gPT0gdm0udG9vbHNbJ01PVkUnXSl7XG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYUNvbnRyb2xzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjYW1lcmFDb250cm9scy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmNoYW5nZUN1dFZpZXdBeGlzID0gZnVuY3Rpb24gKGF4aXMpIHtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcuYXhpcyA9IGF4aXM7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLm5vcm1hbC54ID0gMDtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmUubm9ybWFsLnkgPSAwO1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5wbGFuZS5ub3JtYWwueiA9IDA7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLmNvbnN0YW50ID0gMC4wO1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucm90YXRpb24ueCA9IDA7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5yb3RhdGlvbi55ID0gMDtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnJvdGF0aW9uLnogPSAwO1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucG9zaXRpb24ueCA9IC0wLjAyO1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucG9zaXRpb24ueSA9IC0wLjAyO1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucG9zaXRpb24ueiA9IC0wLjAyO1xuXG4gICAgICAgICAgICBpZih2bS5heGVzW2F4aXNdID09IHZtLmF4ZXNbJ1gnXSl7XG4gICAgICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5wbGFuZS5ub3JtYWwueCA9IC0xO1xuICAgICAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnJvdGF0aW9uLnkgPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgICAgIH1lbHNlIGlmKHZtLmF4ZXNbYXhpc10gPT0gdm0uYXhlc1snWSddKXtcbiAgICAgICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLm5vcm1hbC55ID0gLTE7XG4gICAgICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5wbGFuZS5ub3JtYWwueiA9IC0xO1xuICAgICAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2bS50b2dnbGVDdXRWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYodm0uY29udHJvbHMuY3V0dmlldy5lbmFibGVkKXtcbiAgICAgICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkaXNhYmxlQ3V0VmlldygpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbmFibGVDdXRWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICB2bS5jaGFuZ2VDdXRWaWV3VmFsID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5wbGFuZS5jb25zdGFudCArPSB2YWw7XG4gICAgICAgICAgICBpZih2bS5jb250cm9scy5jdXR2aWV3LmF4aXMgPT0gdm0uYXhlc1snWCddKXtcbiAgICAgICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5wb3NpdGlvbi54ICs9IHZhbDtcbiAgICAgICAgICAgIH1lbHNlIGlmKHZtLmNvbnRyb2xzLmN1dHZpZXcuYXhpcyA9PSB2bS5heGVzWydYJ10pe1xuICAgICAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnBvc2l0aW9uLnkgKz0gdmFsO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucG9zaXRpb24ueiArPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgZnVuY3Rpb24gZGlzYWJsZVRvb2woKSB7XG4gICAgICAgICAgICB2bS5jaGFuZ2VUb29sKCcnKTtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLnRvb2wuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZW5hYmxlVG9vbCgpIHtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLnRvb2wuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB2bS5jaGFuZ2VUb29sKCdNT1ZFJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBlbmFibGVDdXRWaWV3KCkge1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlbmRlcmVyLmNsaXBwaW5nUGxhbmVzID0gW3ZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmVdO1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXJNYXRlcmlhbC5vcGFjaXR5ID0gMTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZGlzYWJsZUN1dFZpZXcoKSB7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlbmRlcmVyLmNsaXBwaW5nUGxhbmVzID0gW107XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlck1hdGVyaWFsLm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG5cblxuICAgICAgICAvKlxuICAgICAgICAqXG4gICAgICAgICogIEluaXQgRnVuY3Rpb25cbiAgICAgICAgKlxuICAgICAgICAqICovXG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdEJDbGljaygpIHtcbiAgICAgICAgICAgIHZtLmJjbGlja0VscyA9IHt9O1xuICAgICAgICAgICAgdm0uYmNsaWNrRG9tRWxzID0gdm0uRE9NLmZpbmQoJ1tiLWNsaWNrXScpO1xuICAgICAgICAgICAgdm0uYmNsaWNrRG9tRWxzLmVhY2goZnVuY3Rpb24gKGtleSwgZWwpIHtcbiAgICAgICAgICAgICAgICAkKGVsKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2YWwoJChlbCkuYXR0cignYi1jbGljaycpKTtcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlTY29wZSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRlbXBBcnJPYmo7XG4gICAgICAgIHZhciB0ZW1wQXJyO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5QkNsYXNzKCkge1xuICAgICAgICAgICAgdm0uYmNsaWNrRWxzID0ge307XG4gICAgICAgICAgICB2bS5iY2xpY2tEb21FbHMgPSB2bS5ET00uZmluZCgnW2ItY2xhc3NdJyk7XG4gICAgICAgICAgICB2bS5iY2xpY2tEb21FbHMuZWFjaChmdW5jdGlvbiAoa2V5LCBlbCkge1xuICAgICAgICAgICAgICAgIHRlbXBBcnIgPSAkKGVsKS5hdHRyKCdiLWNsYXNzJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGlkeCBpbiB0ZW1wQXJyKXtcbiAgICAgICAgICAgICAgICAgICAgdGVtcEFyck9iaiA9IHRlbXBBcnJbaWR4XS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgICAgICBpZihldmFsKHRlbXBBcnJPYmpbMV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgJChlbCkuYWRkQ2xhc3ModGVtcEFyck9ialswXSlcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgJChlbCkucmVtb3ZlQ2xhc3ModGVtcEFyck9ialswXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYXBwbHlTY29wZSgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFwcGx5QkNsYXNzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXRTY29wZSgpIHtcbiAgICAgICAgICAgIGluaXRCQ2xpY2soKVxuICAgICAgICAgICAgYXBwbHlTY29wZSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBmdW5jdGlvbiBpbml0KHRhZykge1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgKiAgIEJhc2ljIFNldHRpbmdzXG4gICAgICAgICAgICAqICovXG5cbiAgICAgICAgICAgIHZtLnRhZyA9IHRhZy50YWdfaWQ7XG4gICAgICAgICAgICB2bS53aWRnZXREYXRhID0gZmxvd01hbmFnZXIuZ2V0RGF0YSh2bS50YWcpO1xuICAgICAgICAgICAgdm0uRE9NID0gdm0ud2lkZ2V0RGF0YS5ET007XG4gICAgICAgICAgICBpbml0VGhyZWUoKTtcbiAgICAgICAgICAgIGluaXRTY29wZSgpO1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgKiBJbml0aWFsIFNldHVwXG4gICAgICAgICAgICAqICovXG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgZmxvd01hbmFnZXIuaW5pdFdpZGdldCh0YWcsIGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgIGluaXQodGFnKVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxudmFyICQzZFBsYXllciA9IHtcbiAgICBjb250cm9sbGVyOiAkM2RQbGF5ZXJDb250cm9sbGVyLFxuICAgIHZpZXc6J2FwcC93aWRnZXRzL2NvbW1vbi8zZFBsYXllci8zZC5wbGF5ZXIuaHRtbCcsXG4gICAgbWV0aG9kczpbXG4gICAgICAgIHtpZDowLCBuYW1lOidzZXRGcmFtZScsb3V0cHV0OmZhbHNlLCBpbnB1dDp0cnVlLCBwYXJhbXMgOiBbJ2ZyYW1lJ119LFxuICAgIF0sXG4gICAgY29sb3I6JyNjYzIyMjInLFxuICAgIHNldHRpbmdzIDoge3ZoOjIwLCB3Ojl9LFxufVxuXG5cbmV4cG9ydCB7JDNkUGxheWVyfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd2lkZ2V0cy9jb21tb24vM2RQbGF5ZXIvM2QucGxheWVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciB0aW1lbGluZUNvbnRyb2xsZXIgPSBmdW5jdGlvbiB0aW1lbGluZUNvbnRyb2xsZXIodGFnKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIHRpbWVsaW5lQ29udHJvbGxlcik7XG5cbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZtLkZQUyA9IDMwO1xuXG4gICAgZmxvd01hbmFnZXIuaW5pdFdpZGdldCh0YWcsIGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgaW5pdCh0YWcpO1xuICAgIH0pO1xuXG4gICAgdm0ucHJvY2Vzc0lucHV0ID0gZnVuY3Rpb24gKHRhZywgZGF0YSkge307XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgZnVuY3Rpb24gaW5pdCh0YWcpIHtcblxuICAgICAgICB2bS50YWcgPSB0YWcudGFnX2lkO1xuICAgICAgICB2bS53aWRnZXREYXRhID0gZmxvd01hbmFnZXIuZ2V0RGF0YSh2bS50YWcpO1xuICAgICAgICB2bS5ET00gPSB2bS53aWRnZXREYXRhLkRPTTtcbiAgICAgICAgaW5pdEJDbGljaygpO1xuXG4gICAgICAgIHZtLnBsYXllciA9IHtcbiAgICAgICAgICAgIHBsYXlpbmc6IGZhbHNlLFxuICAgICAgICAgICAgY3VycmVudEluZGV4OiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgdm0ucGxheWVyLnRvZ2dsZVBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodm0ucGxheWVyLnBsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICB2bS5wbGF5ZXIucGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbSBwYXVzZWQnKTtcbiAgICAgICAgICAgICAgICBwYXVzZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW0gcGxheWluZycpXG4gICAgICAgICAgICAgICAgdm0ucGxheWVyLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2bS5wbGF5ZXIuZGF0YSA9IGdlbmVyYXRlVGVtcERhdGEoKTtcblxuICAgICAgICB2YXIgZDNEYXRhID0ge1xuICAgICAgICAgICAgc3ZnOiAnI3RpbWVsaW5lU1ZHJyxcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJyN0aW1lbGluZScsXG4gICAgICAgICAgICBkYXRhOiB2bS5wbGF5ZXIuZGF0YVxuICAgICAgICB9O1xuXG4gICAgICAgIGluaXREMyhkM0RhdGEpO1xuICAgIH1cblxuICAgIHZhciBjYW1lcmFQb3NpdGlvbiA9IHsgeDogNCwgeTogLTEsIHo6IDMgfTtcbiAgICB2YXIgcmFuZENvdW50ZXIgPSAwO1xuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGVtcERhdGEoKSB7XG4gICAgICAgIHZhciB0ZW1wQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgMTAwMDsgaWR4KyspIHtcbiAgICAgICAgICAgIHJhbmRDb3VudGVyKys7XG4gICAgICAgICAgICBpZiAocmFuZENvdW50ZXIgPj0gNjApIHtcbiAgICAgICAgICAgICAgICByYW5kQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgY2FtZXJhUG9zaXRpb24gPSBnZXRSYW5kb21WZWN0b3IoLTUsIDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVtcEFycmF5LnB1c2goeyB4OiBtb21lbnQoKS5zZWNvbmRzKGlkeCkudW5peCgpICogMTAwMCwgeTogaWR4LCBjYW1lcmFQb3NpdGlvbjogY2FtZXJhUG9zaXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBBcnJheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSYW5kb21WZWN0b3IobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGdldFJhbmRvbUF4aXMobWluLCBtYXgpLFxuICAgICAgICAgICAgeTogZ2V0UmFuZG9tQXhpcyhtaW4sIG1heCksXG4gICAgICAgICAgICB6OiBnZXRSYW5kb21BeGlzKG1pbiwgbWF4KVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUF4aXMobWluLCBtYXgpIHtcbiAgICAgICAgdmFyIGF4aXMgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XG4gICAgICAgIGlmIChheGlzID4gMCkge1xuICAgICAgICAgICAgYXhpcyA9IE1hdGgubWF4KDEsIGF4aXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXhpcyA9IE1hdGgubWluKC0xLCBheGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0QkNsaWNrKCkge1xuICAgICAgICB2bS5iY2xpY2tFbHMgPSB7fTtcbiAgICAgICAgdm0uYmNsaWNrRG9tRWxzID0gdm0uRE9NLmZpbmQoJ1tiLWNsaWNrXScpO1xuICAgICAgICB2bS5iY2xpY2tEb21FbHMuZWFjaChmdW5jdGlvbiAoa2V5LCBlbCkge1xuICAgICAgICAgICAgJChlbCkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGV2YWwoJ3ZtLicgKyAkKGVsKS5hdHRyKCdiLWNsaWNrJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXREMyhkYXRhKSB7XG4gICAgICAgIGlmICgkKGRhdGEuY29udGFpbmVyKSAmJiAkKGRhdGEuY29udGFpbmVyKS5sZW5ndGggJiYgJChkYXRhLmNvbnRhaW5lcikud2lkdGgoKSA+IDMwMCkge1xuICAgICAgICAgICAgdm0uZDMgPSBuZXcgRDNUaW1lbGluZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGluaXREMyhkYXRhKTtcbiAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIEQzVGltZWxpbmUoZGF0YSkge1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5jb250YWluZXIgPSBhbmd1bGFyLmVsZW1lbnQoZGF0YS5jb250YWluZXIpO1xuICAgICAgICBzZWxmLndpZHRoID0gc2VsZi5jb250YWluZXIud2lkdGgoKTtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSBzZWxmLmNvbnRhaW5lci5oZWlnaHQoKTtcbiAgICAgICAgc2VsZi5zdmcgPSBkYXRhLnN2ZztcbiAgICAgICAgc2VsZi5kYXRhID0gZGF0YS5kYXRhO1xuXG4gICAgICAgIHNlbGYudmlzUCA9IGQzLnNlbGVjdChkYXRhLnN2ZykuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpLmF0dHIoXCJ2aWV3Qm94XCIsIFwiMCAwIFwiICsgc2VsZi53aWR0aCArIFwiIFwiICsgTWF0aC5tYXgoMCwgc2VsZi5oZWlnaHQpKS5jbGFzc2VkKFwic3ZnLWNvbnRlbnQtcmVzcG9uc2l2ZVwiLCB0cnVlKS5vbihcImNvbnRleHRtZW51XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KS5vbihcIm1vdXNlbW92ZVwiLCBtb3VzZUhvdmVyRXZlbnQpLm9uKFwibW91c2Vkb3duXCIsIG1vdXNlRG93bkV2ZW50KS5vbihcIm1vdXNldXBcIiwgbW91c2VVcEV2ZW50KTtcblxuICAgICAgICBnZXRBeGlzU2NhbGUoKTtcbiAgICAgICAgZHJhdygpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoc2VsZi5zdmcgKyBcIiA+ICpcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIHNlbGYuY2xpcFJlY3QgPSBzZWxmLnZpc1AuYXBwZW5kKFwiY2xpcFBhdGhcIikgLy8gZGVmaW5lIGEgY2xpcCBwYXRoXG4gICAgICAgICAgICAuYXR0cigneCcsIDApLmF0dHIoJ3knLCAwKS5hdHRyKFwiaWRcIiwgXCJtYWluLWNsaXBcIikgLy8gZ2l2ZSB0aGUgY2xpcFBhdGggYW4gSURcbiAgICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJ3aWR0aFwiLCBzZWxmLndpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIHNlbGYuaGVpZ2h0KTtcblxuICAgICAgICAgICAgc2VsZi52aXMgPSBzZWxmLnZpc1AuYXBwZW5kKFwic3ZnOmdcIikuYXR0cignY2xhc3MnLCAndmlzVHJhbnMnKS5hdHRyKCd4JywgMCkuYXR0cigneScsIDApLmF0dHIoXCJjbGlwLXBhdGhcIiwgXCJ1cmwoI21haW4tY2xpcClcIikgLy8gY2xpcCB0aGUgcmVjdGFuZ2xlXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLDApXCIpO1xuXG4gICAgICAgICAgICBzZWxmLm1hcmtlciA9IHNlbGYudmlzLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ3RsLW1hcmtlcicpLmFwcGVuZCgncmVjdCcpLmF0dHIoJ3gnLCAwKS5hdHRyKCd5JywgMCkuYXR0cignd2lkdGgnLCAxKS5hdHRyKCdoZWlnaHQnLCBzZWxmLmhlaWdodCkuYXR0cignZmlsbCcsICcjZjAwJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRBeGlzU2NhbGUoKSB7XG4gICAgICAgICAgICBzZWxmLmF4aXNTY2FsZSA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHNlbGYuZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhSXRlbSA9IHNlbGYuZGF0YVtpZHhdO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhSXRlbS54IDwgc2VsZi5heGlzU2NhbGUueGwgfHwgc2VsZi5heGlzU2NhbGUueGwgPT0gbnVsbCkgc2VsZi5heGlzU2NhbGUueGwgPSBkYXRhSXRlbS54O1xuICAgICAgICAgICAgICAgIGlmIChkYXRhSXRlbS54ID4gc2VsZi5heGlzU2NhbGUueGggfHwgc2VsZi5heGlzU2NhbGUueGggPT0gbnVsbCkgc2VsZi5heGlzU2NhbGUueGggPSBkYXRhSXRlbS54O1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFJdGVtLnkgPCBzZWxmLmF4aXNTY2FsZS55bCB8fCBzZWxmLmF4aXNTY2FsZS55bCA9PSBudWxsKSBzZWxmLmF4aXNTY2FsZS55bCA9IGRhdGFJdGVtLnk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFJdGVtLnkgPiBzZWxmLmF4aXNTY2FsZS55aCB8fCBzZWxmLmF4aXNTY2FsZS55aCA9PSBudWxsKSBzZWxmLmF4aXNTY2FsZS55aCA9IGRhdGFJdGVtLnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYueFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgc2VsZi53aWR0aF0pLmRvbWFpbihbbmV3IERhdGUoc2VsZi5heGlzU2NhbGUueGwpLCBuZXcgRGF0ZShzZWxmLmF4aXNTY2FsZS54aCldKTtcbiAgICAgICAgICAgIHNlbGYueVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbc2VsZi5oZWlnaHQsIDBdKS5kb21haW4oW3NlbGYuYXhpc1NjYWxlLnlsLCBzZWxmLmF4aXNTY2FsZS55aF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbW91c2VIb3ZlckV2ZW50KCkge1xuICAgICAgICAgICAgaWYgKHNlbGYubW91c2VDbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb3VzZVggPSBkMy5tb3VzZSh0aGlzKVswXTtcbiAgICAgICAgICAgICAgICBzZWxmLm1vdXNlWSA9IGQzLm1vdXNlKHRoaXMpWzFdO1xuICAgICAgICAgICAgICAgIHNlbGYubWFya2VyUG9zaXRpb24gPSBwYXJzZUludChzZWxmLnhTY2FsZS5pbnZlcnQoc2VsZi5tb3VzZVgpKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVNYXJrZXIoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVNYXJrZXJJbmRleChzZWxmLm1vdXNlWFZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3VzZURvd25FdmVudCgpIHtcbiAgICAgICAgICAgIHNlbGYubW91c2VDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYubW91c2VYID0gZDMubW91c2UodGhpcylbMF07XG4gICAgICAgICAgICBzZWxmLm1vdXNlWSA9IGQzLm1vdXNlKHRoaXMpWzFdO1xuICAgICAgICAgICAgc2VsZi5tb3VzZVhWYWwgPSBwYXJzZUludChzZWxmLnhTY2FsZS5pbnZlcnQoc2VsZi5tb3VzZVgpKTtcbiAgICAgICAgICAgIHVwZGF0ZU1hcmtlcigpO1xuICAgICAgICAgICAgdXBkYXRlTWFya2VySW5kZXgoc2VsZi5tb3VzZVhWYWwpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlVXBFdmVudCgpIHtcbiAgICAgICAgICAgIHNlbGYubW91c2VDbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnVwZGF0ZU1hcmtlciA9IGZ1bmN0aW9uIChmcmFtZSkge1xuICAgICAgICAgICAgc2VsZi5tb3VzZVggPSBzZWxmLnhTY2FsZShmcmFtZS54KTtcbiAgICAgICAgICAgIHVwZGF0ZU1hcmtlcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZU1hcmtlcigpIHtcbiAgICAgICAgICAgIHNlbGYubWFya2VyLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHNlbGYubW91c2VYICsgJywwKScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgdm0ucGxheWVyLmludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHZtLnBsYXllci5jdXJyZW50SW5kZXggKyAxID49IHZtLnBsYXllci5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodm0ucGxheWVyLmludGVydmFsKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVGcmFtZSh2bS5wbGF5ZXIuY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICB2bS5wbGF5ZXIuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB2bS5wbGF5ZXIucGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2bS5wbGF5ZXIuY3VycmVudEluZGV4ID0gZ2V0Q3VycmVudEluZGV4KDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUZyYW1lKHZtLnBsYXllci5jdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwIC8gdm0uRlBTKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh2bS5wbGF5ZXIuaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRJbmRleChvZmZzZXQpIHtcbiAgICAgICAgaWYgKHZtLnBsYXllci5jdXJyZW50SW5kZXggPT0gbnVsbCkgdm0ucGxheWVyLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIGlmIChvZmZzZXQgPT0gbnVsbCkgb2Zmc2V0ID0gMDtcbiAgICAgICAgcmV0dXJuIHZtLnBsYXllci5jdXJyZW50SW5kZXggKyBvZmZzZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RnJhbWVJbmRleCh4LCBkaWZmLCBkYXRhKSB7XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICB2YXIgc3RhcnRpbmdJbmRleCA9IDA7XG4gICAgICAgIHZhciBlbmRpbmdJbmRleCA9IGRhdGEubGVuZ3RoO1xuICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgIHZhciBlcTtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB3aGlsZSAoIWZvdW5kKSB7XG4gICAgICAgICAgICBpbmRleCA9IHBhcnNlSW50KChlbmRpbmdJbmRleCAtIHN0YXJ0aW5nSW5kZXgpIC8gMikgKyBzdGFydGluZ0luZGV4O1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhcnRpbmdJbmRleCxpbmRleCwgZW5kaW5nSW5kZXgpXG4gICAgICAgICAgICBlcSA9IGdldFJvdW5kKHgsIGRhdGFbaW5kZXhdLngsIGRpZmYpO1xuICAgICAgICAgICAgaWYgKGVxID09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBmb3VuZFxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXEgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBncmVhdGVyIHRoYW5cbiAgICAgICAgICAgICAgICBzdGFydGluZ0luZGV4ICs9IGluZGV4IC0gc3RhcnRpbmdJbmRleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbGVzcyB0aGFuXG4gICAgICAgICAgICAgICAgZW5kaW5nSW5kZXggLT0gaW5kZXggLSBzdGFydGluZ0luZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0aW5nSW5kZXggLSBlbmRpbmdJbmRleCA8PSAxICYmIGVuZGluZ0luZGV4IC0gc3RhcnRpbmdJbmRleCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgIGRpZmYgKz0gZGlmZjtcbiAgICAgICAgICAgICAgICBpZiAoY291bnRlciA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFJvdW5kKHgxLCB4MiwgZGlmZikge1xuICAgICAgICAgICAgdmFyIGRpZmYxID0geDEgKyBkaWZmIC0geDI7XG4gICAgICAgICAgICAvLyB2YXIgZGlmZjIgPSB4MSAtIGRpZmYgLSB4MjtcbiAgICAgICAgICAgIGlmIChkaWZmMSA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkaWZmMSwgZGlmZjIsICcrKycpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpZmYxID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRpZmYxLCBkaWZmMiwgJy0tJylcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGluZGV4LS07XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVNYXJrZXJJbmRleChtb3VzZVhWYWwpIHtcbiAgICAgICAgdm0ucGxheWVyLmN1cnJlbnRJbmRleCA9IGdldEZyYW1lSW5kZXgobW91c2VYVmFsLCAxMDAwLCB2bS5wbGF5ZXIuZGF0YSk7XG4gICAgICAgIGZyYW1lVXBkYXRlZCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZyYW1lKGluZGV4KSB7XG4gICAgICAgIHVwZGF0ZVRpbWVsaW5lKGluZGV4KTtcbiAgICAgICAgZnJhbWVVcGRhdGVkKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVGltZWxpbmUoaW5kZXgpIHtcbiAgICAgICAgdm0uZDMudXBkYXRlTWFya2VyKHZtLnBsYXllci5kYXRhW2luZGV4XSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZnJhbWVVcGRhdGVkKCkge1xuICAgICAgICBmbG93TWFuYWdlci5ydW5GbG93KHZtLnRhZywgJ3B1c2hGcmFtZScsIHZtLnBsYXllci5kYXRhW3ZtLnBsYXllci5jdXJyZW50SW5kZXhdKTtcbiAgICB9XG59O1xuXG52YXIgdGltZWxpbmUgPSB7XG4gICAgY29udHJvbGxlcjogdGltZWxpbmVDb250cm9sbGVyLFxuICAgIHZpZXc6ICdhcHAvd2lkZ2V0cy9jb21tb24vdGltZWxpbmUvdGltZWxpbmUuaHRtbCcsXG4gICAgbWV0aG9kczogW3sgaWQ6IDAsIG5hbWU6ICdwdXNoRnJhbWUnLCBvdXRwdXQ6IHRydWUsIGlucHV0OiBmYWxzZSwgcGFyYW1zOiBbJ2ZyYW1lJ10gfV0sXG4gICAgY29sb3I6ICcjY2MyMjIyJyxcbiAgICBzZXR0aW5nczogeyB2aDogNCwgdzogMTggfVxufTtcblxuZXhwb3J0cy50aW1lbGluZSA9IHRpbWVsaW5lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd2lkZ2V0cy9jb21tb24vdGltZWxpbmUvdGltZWxpbmUuanMiLCJcbmNsYXNzIHRpbWVsaW5lQ29udHJvbGxlcntcblxuICAgIGNvbnN0cnVjdG9yICh0YWcpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgdm0uRlBTID0gMzA7XG5cbiAgICAgICAgZmxvd01hbmFnZXIuaW5pdFdpZGdldCh0YWcsIGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgIGluaXQodGFnKVxuICAgICAgICB9KTtcblxuICAgICAgICB2bS5wcm9jZXNzSW5wdXQgPSBmdW5jdGlvbiAodGFnLCBkYXRhKSB7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgICBmdW5jdGlvbiBpbml0KHRhZykge1xuXG4gICAgICAgICAgICB2bS50YWcgPSB0YWcudGFnX2lkO1xuICAgICAgICAgICAgdm0ud2lkZ2V0RGF0YSA9IGZsb3dNYW5hZ2VyLmdldERhdGEodm0udGFnKTtcbiAgICAgICAgICAgIHZtLkRPTSA9IHZtLndpZGdldERhdGEuRE9NO1xuICAgICAgICAgICAgaW5pdEJDbGljaygpO1xuXG4gICAgICAgICAgICB2bS5wbGF5ZXIgPSB7XG4gICAgICAgICAgICAgICAgcGxheWluZyA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA6IDBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZtLnBsYXllci50b2dnbGVQbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmKHZtLnBsYXllci5wbGF5aW5nKXtcbiAgICAgICAgICAgICAgICAgICAgdm0ucGxheWVyLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ltIHBhdXNlZCcpO1xuICAgICAgICAgICAgICAgICAgICBwYXVzZSgpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW0gcGxheWluZycpXG4gICAgICAgICAgICAgICAgICAgIHZtLnBsYXllci5wbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB2bS5wbGF5ZXIuZGF0YSA9IGdlbmVyYXRlVGVtcERhdGEoKTtcblxuICAgICAgICAgICAgdmFyIGQzRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBzdmcgOiAnI3RpbWVsaW5lU1ZHJyxcbiAgICAgICAgICAgICAgICBjb250YWluZXIgOiAnI3RpbWVsaW5lJyxcbiAgICAgICAgICAgICAgICBkYXRhIDogdm0ucGxheWVyLmRhdGEsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluaXREMyhkM0RhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhbWVyYVBvc2l0aW9uID0ge3g6NCwgeTotMSwgejozfTtcbiAgICAgICAgdmFyIHJhbmRDb3VudGVyID0gMDtcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVUZW1wRGF0YSgpIHtcbiAgICAgICAgICAgIHZhciB0ZW1wQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGZvcih2YXIgaWR4ID0wOyBpZHggPCAxMDAwOyBpZHgrKyl7XG4gICAgICAgICAgICAgICAgcmFuZENvdW50ZXIrKztcbiAgICAgICAgICAgICAgICBpZihyYW5kQ291bnRlciA+PSA2MCl7XG4gICAgICAgICAgICAgICAgICAgIHJhbmRDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhUG9zaXRpb24gPSBnZXRSYW5kb21WZWN0b3IoLTUsIDUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZW1wQXJyYXkucHVzaCh7eCA6IG1vbWVudCgpLnNlY29uZHMoaWR4KS51bml4KCkgKiAxMDAwLCB5IDogaWR4LCBjYW1lcmFQb3NpdGlvbiA6IGNhbWVyYVBvc2l0aW9ufSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZW1wQXJyYXk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21WZWN0b3IobWluLCBtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeCA6IGdldFJhbmRvbUF4aXMobWluLCBtYXgpLFxuICAgICAgICAgICAgICAgIHkgOiBnZXRSYW5kb21BeGlzKG1pbiwgbWF4KSxcbiAgICAgICAgICAgICAgICB6IDogZ2V0UmFuZG9tQXhpcyhtaW4sIG1heCksXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21BeGlzKG1pbiwgbWF4KSB7XG4gICAgICAgICAgICB2YXIgYXhpcyA9ICBtaW4gKyAoIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSApO1xuICAgICAgICAgICAgaWYoYXhpcyA+IDApe1xuICAgICAgICAgICAgICAgIGF4aXMgPSBNYXRoLm1heCgxLCBheGlzKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYXhpcyA9IE1hdGgubWluKC0xLCBheGlzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGF4aXM7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXRCQ2xpY2soKSB7XG4gICAgICAgICAgICB2bS5iY2xpY2tFbHMgPSB7fTtcbiAgICAgICAgICAgIHZtLmJjbGlja0RvbUVscyA9IHZtLkRPTS5maW5kKCdbYi1jbGlja10nKTtcbiAgICAgICAgICAgIHZtLmJjbGlja0RvbUVscy5lYWNoKGZ1bmN0aW9uIChrZXksIGVsKSB7XG4gICAgICAgICAgICAgICQoZWwpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIGV2YWwoJ3ZtLicrJChlbCkuYXR0cignYi1jbGljaycpKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXREMyhkYXRhKSB7XG4gICAgICAgICAgICBpZigkKGRhdGEuY29udGFpbmVyKSAmJiAkKGRhdGEuY29udGFpbmVyKS5sZW5ndGggJiYgJChkYXRhLmNvbnRhaW5lcikud2lkdGgoKSA+IDMwMCl7XG4gICAgICAgICAgICAgICAgdm0uZDMgPSBuZXcgRDNUaW1lbGluZShkYXRhKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpbml0RDMoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSwyMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgZnVuY3Rpb24gRDNUaW1lbGluZShkYXRhKSB7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICBzZWxmLmNvbnRhaW5lciA9IGFuZ3VsYXIuZWxlbWVudChkYXRhLmNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgc2VsZi53aWR0aCA9IHNlbGYuY29udGFpbmVyLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5oZWlnaHQgPSBzZWxmLmNvbnRhaW5lci5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBzZWxmLnN2ZyA9IGRhdGEuc3ZnO1xuICAgICAgICAgICAgICAgIHNlbGYuZGF0YSA9IGRhdGEuZGF0YTtcblxuICAgICAgICAgICAgc2VsZi52aXNQID0gZDMuc2VsZWN0KGRhdGEuc3ZnKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyBzZWxmLndpZHRoICsgXCIgXCIgKyAoTWF0aC5tYXgoMCwgc2VsZi5oZWlnaHQpKSlcbiAgICAgICAgICAgICAgICAuY2xhc3NlZChcInN2Zy1jb250ZW50LXJlc3BvbnNpdmVcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAub24oXCJjb250ZXh0bWVudVwiLCBmdW5jdGlvbihkKSB7IGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7IH0pXG4gICAgICAgICAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIG1vdXNlSG92ZXJFdmVudClcbiAgICAgICAgICAgICAgICAub24oXCJtb3VzZWRvd25cIiwgbW91c2VEb3duRXZlbnQpXG4gICAgICAgICAgICAgICAgLm9uKFwibW91c2V1cFwiLCBtb3VzZVVwRXZlbnQpXG5cbiAgICAgICAgICAgIGdldEF4aXNTY2FsZSgpO1xuICAgICAgICAgICAgZHJhdygpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBkcmF3KCkge1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChzZWxmLnN2ZytcIiA+ICpcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmNsaXBSZWN0ID0gc2VsZi52aXNQLmFwcGVuZChcImNsaXBQYXRoXCIpICAgIC8vIGRlZmluZSBhIGNsaXAgcGF0aFxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneCcsMClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3knLDApXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJtYWluLWNsaXBcIikgLy8gZ2l2ZSB0aGUgY2xpcFBhdGggYW4gSURcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAgc2VsZi53aWR0aClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgc2VsZi5oZWlnaHQpXG5cbiAgICAgICAgICAgICAgICBzZWxmLnZpcyA9IHNlbGYudmlzUFxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwic3ZnOmdcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Zpc1RyYW5zJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gnLDApXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5JywwKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImNsaXAtcGF0aFwiLCBcInVybCgjbWFpbi1jbGlwKVwiKSAvLyBjbGlwIHRoZSByZWN0YW5nbGVcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCwwKVwiKTtcblxuICAgICAgICAgICAgICAgIHNlbGYubWFya2VyID0gc2VsZi52aXMuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3RsLW1hcmtlcicpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gnLDApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigneScsMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLHNlbGYuaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCcjZjAwJylcblxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0QXhpc1NjYWxlKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuYXhpc1NjYWxlID0ge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHNlbGYuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUl0ZW0gPSBzZWxmLmRhdGFbaWR4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFJdGVtLnggPCBzZWxmLmF4aXNTY2FsZS54bCB8fCBzZWxmLmF4aXNTY2FsZS54bCA9PSBudWxsKSBzZWxmLmF4aXNTY2FsZS54bCA9IGRhdGFJdGVtLng7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhSXRlbS54ID4gc2VsZi5heGlzU2NhbGUueGggfHwgc2VsZi5heGlzU2NhbGUueGggPT0gbnVsbCkgc2VsZi5heGlzU2NhbGUueGggPSBkYXRhSXRlbS54O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhSXRlbS55IDwgc2VsZi5heGlzU2NhbGUueWwgfHwgc2VsZi5heGlzU2NhbGUueWwgPT0gbnVsbCkgc2VsZi5heGlzU2NhbGUueWwgPSBkYXRhSXRlbS55O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUl0ZW0ueSA+IHNlbGYuYXhpc1NjYWxlLnloIHx8IHNlbGYuYXhpc1NjYWxlLnloID09IG51bGwpIHNlbGYuYXhpc1NjYWxlLnloID0gZGF0YUl0ZW0ueTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLnhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHNlbGYud2lkdGhdKS5kb21haW4oW25ldyBEYXRlKHNlbGYuYXhpc1NjYWxlLnhsKSwgbmV3IERhdGUoc2VsZi5heGlzU2NhbGUueGgpXSk7XG4gICAgICAgICAgICAgICAgc2VsZi55U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtzZWxmLmhlaWdodCwgMF0pLmRvbWFpbihbc2VsZi5heGlzU2NhbGUueWwsIHNlbGYuYXhpc1NjYWxlLnloXSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgZnVuY3Rpb24gbW91c2VIb3ZlckV2ZW50KCkge1xuICAgICAgICAgICAgICAgIGlmKHNlbGYubW91c2VDbGlja2VkKXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb3VzZVggPSBkMy5tb3VzZSh0aGlzKVswXTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb3VzZVkgPSBkMy5tb3VzZSh0aGlzKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXJrZXJQb3NpdGlvbiA9IHBhcnNlSW50KHNlbGYueFNjYWxlLmludmVydChzZWxmLm1vdXNlWCkpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNYXJrZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTWFya2VySW5kZXgoc2VsZi5tb3VzZVhWYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gbW91c2VEb3duRXZlbnQoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb3VzZUNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYubW91c2VYID0gZDMubW91c2UodGhpcylbMF07XG4gICAgICAgICAgICAgICAgc2VsZi5tb3VzZVkgPSBkMy5tb3VzZSh0aGlzKVsxXTtcbiAgICAgICAgICAgICAgICBzZWxmLm1vdXNlWFZhbCA9IHBhcnNlSW50KHNlbGYueFNjYWxlLmludmVydChzZWxmLm1vdXNlWCkpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU1hcmtlcigpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU1hcmtlckluZGV4KHNlbGYubW91c2VYVmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vdXNlVXBFdmVudCgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vdXNlQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZU1hcmtlciA9IGZ1bmN0aW9uIChmcmFtZSkge1xuICAgICAgICAgICAgICAgIHNlbGYubW91c2VYID0gc2VsZi54U2NhbGUoZnJhbWUueCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTWFya2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZU1hcmtlcigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1hcmtlci5hdHRyKCd0cmFuc2Zvcm0nLCd0cmFuc2xhdGUoJytzZWxmLm1vdXNlWCsnLDApJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgICAgICB2bS5wbGF5ZXIuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYodm0ucGxheWVyLmN1cnJlbnRJbmRleCArIDEgPj0gdm0ucGxheWVyLmRhdGEubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh2bS5wbGF5ZXIuaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGcmFtZSh2bS5wbGF5ZXIuY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdm0ucGxheWVyLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZtLnBsYXllci5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHZtLnBsYXllci5jdXJyZW50SW5kZXggPSBnZXRDdXJyZW50SW5kZXgoMSk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZyYW1lKHZtLnBsYXllci5jdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDAgLyB2bS5GUFMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHZtLnBsYXllci5pbnRlcnZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRDdXJyZW50SW5kZXgob2Zmc2V0KSB7XG4gICAgICAgICAgICBpZih2bS5wbGF5ZXIuY3VycmVudEluZGV4ID09IG51bGwpXG4gICAgICAgICAgICAgICAgdm0ucGxheWVyLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgICAgICBpZihvZmZzZXQgPT0gbnVsbClcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHZtLnBsYXllci5jdXJyZW50SW5kZXggKyBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRGcmFtZUluZGV4KHgsIGRpZmYsIGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHN0YXJ0aW5nSW5kZXggPSAwO1xuICAgICAgICAgICAgdmFyIGVuZGluZ0luZGV4ID0gZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgICAgICB2YXIgZXE7XG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgICAgICB3aGlsZSghZm91bmQpe1xuICAgICAgICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoKGVuZGluZ0luZGV4IC0gc3RhcnRpbmdJbmRleCkgLyAyKSArIHN0YXJ0aW5nSW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhcnRpbmdJbmRleCxpbmRleCwgZW5kaW5nSW5kZXgpXG4gICAgICAgICAgICAgICAgZXEgPSBnZXRSb3VuZCh4LCBkYXRhW2luZGV4XS54LCBkaWZmKTtcbiAgICAgICAgICAgICAgICBpZihlcSA9PSAwKXsgLy8gZm91bmRcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGVxID09IC0xKXsgLy8gZ3JlYXRlciB0aGFuXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0aW5nSW5kZXggKz0gKGluZGV4IC0gc3RhcnRpbmdJbmRleCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7IC8vIGxlc3MgdGhhblxuICAgICAgICAgICAgICAgICAgICBlbmRpbmdJbmRleCAtPSAoaW5kZXggLSBzdGFydGluZ0luZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoc3RhcnRpbmdJbmRleCAtIGVuZGluZ0luZGV4IDw9IDEgJiYgZW5kaW5nSW5kZXggLSBzdGFydGluZ0luZGV4IDw9IDEpe1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIGRpZmYgKz0gZGlmZjtcbiAgICAgICAgICAgICAgICAgICAgaWYoY291bnRlciA+IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRSb3VuZCh4MSwgeDIsIGRpZmYpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZjEgPSB4MSArIGRpZmYgLSB4MjtcbiAgICAgICAgICAgICAgICAvLyB2YXIgZGlmZjIgPSB4MSAtIGRpZmYgLSB4MjtcbiAgICAgICAgICAgICAgICBpZihkaWZmMSAgPCAwKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGlmZjEsIGRpZmYyLCAnKysnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKCBkaWZmMSAgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGlmZjEsIGRpZmYyLCAnLS0nKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVNYXJrZXJJbmRleChtb3VzZVhWYWwpIHtcbiAgICAgICAgICAgIHZtLnBsYXllci5jdXJyZW50SW5kZXggPSBnZXRGcmFtZUluZGV4KG1vdXNlWFZhbCwgMTAwMCwgdm0ucGxheWVyLmRhdGEpO1xuICAgICAgICAgICAgZnJhbWVVcGRhdGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVGcmFtZShpbmRleCkge1xuICAgICAgICAgICAgdXBkYXRlVGltZWxpbmUoaW5kZXgpO1xuICAgICAgICAgICAgZnJhbWVVcGRhdGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVUaW1lbGluZShpbmRleCkge1xuICAgICAgICAgICAgdm0uZDMudXBkYXRlTWFya2VyKHZtLnBsYXllci5kYXRhW2luZGV4XSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmcmFtZVVwZGF0ZWQoKSB7XG4gICAgICAgICAgICBmbG93TWFuYWdlci5ydW5GbG93KHZtLnRhZywgJ3B1c2hGcmFtZScsIHZtLnBsYXllci5kYXRhW3ZtLnBsYXllci5jdXJyZW50SW5kZXhdKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG52YXIgdGltZWxpbmUgPSB7XG4gICAgY29udHJvbGxlcjogdGltZWxpbmVDb250cm9sbGVyLFxuICAgIHZpZXc6J2FwcC93aWRnZXRzL2NvbW1vbi90aW1lbGluZS90aW1lbGluZS5odG1sJyxcbiAgICBtZXRob2RzOltcbiAgICAgICAge2lkOjAsIG5hbWU6J3B1c2hGcmFtZScsIG91dHB1dDp0cnVlLCBpbnB1dDpmYWxzZSwgcGFyYW1zIDogWydmcmFtZSddfSxcbiAgICBdLFxuICAgIGNvbG9yOicjY2MyMjIyJyxcbiAgICBzZXR0aW5ncyA6IHt2aDo0LCB3OjE4fSxcbn1cblxuXG5leHBvcnQge3RpbWVsaW5lfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd2lkZ2V0cy9jb21tb24vdGltZWxpbmUvdGltZWxpbmUuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGNvbmZpZ1dpZGdldENvbnRyb2xsZXIgPSBmdW5jdGlvbiBjb25maWdXaWRnZXRDb250cm9sbGVyKHRhZykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBjb25maWdXaWRnZXRDb250cm9sbGVyKTtcblxuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS5wcm9jZXNzSW5wdXQgPSBmdW5jdGlvbiAodGFnLCBkYXRhKSB7fTtcblxuICAgIGZ1bmN0aW9uIGluaXQodGFnKSB7XG4gICAgICAgIHZtLnRhZyA9IHRhZy50YWdfaWQ7XG4gICAgfVxuXG4gICAgZmxvd01hbmFnZXIuaW5pdFdpZGdldCh0YWcsIGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgaW5pdCh0YWcpO1xuICAgIH0pO1xufTtcblxudmFyIGNvbmZpZ1dpZGdldCA9IHtcbiAgICBjb250cm9sbGVyOiBjb25maWdXaWRnZXRDb250cm9sbGVyLFxuICAgIHZpZXc6ICdhcHAvd2lkZ2V0cy9jb21tb24vY29uZmlnV2lkZ2V0L2NvbmZpZy53aWRnZXQuaHRtbCcsXG4gICAgbWV0aG9kczogW1xuICAgICAgICAvLyB7aWQ6MCwgbmFtZTonc2V0RGF0YScsb3V0cHV0OnRydWUsIGlucHV0OnRydWUsIHBhcmFtcyA6IFsnYXNzZXQnXX0sXG4gICAgXSxcbiAgICBjb2xvcjogJyNjYzIyMjInLFxuICAgIHNldHRpbmdzOiB7IHZoOiAyNCwgdzogNiB9XG59O1xuXG5leHBvcnRzLmNvbmZpZ1dpZGdldCA9IGNvbmZpZ1dpZGdldDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL2NvbmZpZ1dpZGdldC9jb25maWcud2lkZ2V0LmpzIiwiXG5jbGFzcyBjb25maWdXaWRnZXRDb250cm9sbGVye1xuXG4gICAgY29uc3RydWN0b3IgKHRhZykge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICAgIHZtLnByb2Nlc3NJbnB1dCA9IGZ1bmN0aW9uICh0YWcsIGRhdGEpIHtcblxuICAgICAgICB9XG5cblxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXQodGFnKSB7XG4gICAgICAgICAgICB2bS50YWcgPSB0YWcudGFnX2lkO1xuICAgICAgICB9XG5cblxuICAgICAgICBmbG93TWFuYWdlci5pbml0V2lkZ2V0KHRhZywgZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgaW5pdCh0YWcpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG52YXIgY29uZmlnV2lkZ2V0ID0ge1xuICAgIGNvbnRyb2xsZXI6IGNvbmZpZ1dpZGdldENvbnRyb2xsZXIsXG4gICAgdmlldzonYXBwL3dpZGdldHMvY29tbW9uL2NvbmZpZ1dpZGdldC9jb25maWcud2lkZ2V0Lmh0bWwnLFxuICAgIG1ldGhvZHM6W1xuICAgICAgICAvLyB7aWQ6MCwgbmFtZTonc2V0RGF0YScsb3V0cHV0OnRydWUsIGlucHV0OnRydWUsIHBhcmFtcyA6IFsnYXNzZXQnXX0sXG4gICAgXSxcbiAgICBjb2xvcjonI2NjMjIyMicsXG4gICAgc2V0dGluZ3MgOiB7dmg6MjQsIHc6Nn0sXG59XG5cblxuZXhwb3J0IHtjb25maWdXaWRnZXR9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93aWRnZXRzL2NvbW1vbi9jb25maWdXaWRnZXQvY29uZmlnLndpZGdldC5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgd2lkZ2V0Q29ubmVjdG9yQ29udHJvbGxlciA9IGZ1bmN0aW9uIHdpZGdldENvbm5lY3RvckNvbnRyb2xsZXIodGFnKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIHdpZGdldENvbm5lY3RvckNvbnRyb2xsZXIpO1xuXG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLnN0YXRlcyA9IFtdO1xuICAgIHZtLnN0YXRlSWQgPSAtMTtcblxuICAgIGZsb3dNYW5hZ2VyLmluaXRXaWRnZXQodGFnLCBmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIGluaXQodGFnKTtcbiAgICB9KTtcblxuICAgIHZtLnByb2Nlc3NJbnB1dCA9IGZ1bmN0aW9uICh0YWcsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRhZyA9PSAnc2V0RGF0YScpIHtcblxuICAgICAgICAgICAgdm0ucHVzaFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgZmxvd01hbmFnZXIucnVuRmxvdyh2bS50YWcsICdzZXREYXRhJywgcHJvY2Vzc0RhdGEoZGF0YSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSAnbmF2aWdhdGVCYWNrJykge1xuXG4gICAgICAgICAgICB2YXIgdG9TdGF0ZSA9IHZtLmdldFN0YXRlKC0xKTtcbiAgICAgICAgICAgIGlmICh0b1N0YXRlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmbG93TWFuYWdlci5ydW5GbG93KHZtLnRhZywgJ3NldERhdGEnLCBwcm9jZXNzRGF0YSh0b1N0YXRlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09ICduYXZpZ2F0ZUZvcndhcmQnKSB7XG5cbiAgICAgICAgICAgIHZhciB0b1N0YXRlID0gdm0uZ2V0U3RhdGUoMSk7XG4gICAgICAgICAgICBpZiAodG9TdGF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZmxvd01hbmFnZXIucnVuRmxvdyh2bS50YWcsICdzZXREYXRhJywgcHJvY2Vzc0RhdGEodG9TdGF0ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSAnc2V0U3RhdGUnKSB7XG5cbiAgICAgICAgICAgIHZtLnB1c2hTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgIGZsb3dNYW5hZ2VyLnJ1bkZsb3codm0udGFnLCAncHVzaFN0YXRlJywgcHJvY2Vzc0RhdGEoZGF0YSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSAndXBkYXRlU3RhdGUnKSB7XG5cbiAgICAgICAgICAgIHZtLnVwZGF0ZVN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgZmxvd01hbmFnZXIucnVuRmxvdyh2bS50YWcsICdwdXNoU3RhdGUnLCBwcm9jZXNzRGF0YShkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0RhdGEoZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEubmF2aWdhdGlvbikgZGF0YS5uYXZpZ2F0aW9uID0ge307XG5cbiAgICAgICAgZGF0YS5uYXZpZ2F0aW9uLmlzQmFja3dhcmQgPSBmYWxzZTtcbiAgICAgICAgZGF0YS5uYXZpZ2F0aW9uLmlzRm9yd2FyZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2bS5zdGF0ZUlkIDwgdm0uc3RhdGVzLmxlbmd0aCAtIDEpIGRhdGEubmF2aWdhdGlvbi5pc0ZvcndhcmQgPSB0cnVlO1xuICAgICAgICBpZiAodm0uc3RhdGVJZCA+IDApIGRhdGEubmF2aWdhdGlvbi5pc0JhY2t3YXJkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KHRhZykge1xuICAgICAgICB2bS50YWcgPSB0YWcudGFnX2lkO1xuICAgIH1cblxuICAgIHZtLnVwZGF0ZVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZtLnN0YXRlc1t2bS5zdGF0ZUlkXSA9IHN0YXRlO1xuICAgIH07XG5cbiAgICB2bS5wdXNoU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblxuICAgICAgICB2YXIgdGVtcFN0YXRlID0gdm0uc3RhdGVzW3ZtLnN0YXRlSWRdO1xuICAgICAgICBpZiAodGVtcFN0YXRlKSB7XG4gICAgICAgICAgICBpZiAodGVtcFN0YXRlLmZldGNoKSBkZWxldGUgdGVtcFN0YXRlLmZldGNoO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZS5ncm91cCAmJiB0ZW1wU3RhdGUuZ3JvdXApIHN0YXRlLmdyb3VwID0gdGVtcFN0YXRlLmdyb3VwO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZS50YWIgJiYgdGVtcFN0YXRlLnRhYikgc3RhdGUudGFiID0gdGVtcFN0YXRlLnRhYjtcbiAgICAgICAgICAgIC8vIGlmKCFzdGF0ZS5pdGVtICYmIHRlbXBTdGF0ZS5pdGVtKSBzdGF0ZS5pdGVtID0gdGVtcFN0YXRlLml0ZW07XG4gICAgICAgIH1cblxuICAgICAgICB2bS5zdGF0ZUlkKys7XG4gICAgICAgIHZtLnN0YXRlcy5zcGxpY2Uodm0uc3RhdGVJZCk7XG4gICAgICAgIHZtLnN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICB9O1xuXG4gICAgdm0uZ2V0U3RhdGUgPSBmdW5jdGlvbiAoZGlmZikge1xuICAgICAgICB2YXIgdGVtcGluZGV4ID0gdm0uc3RhdGVJZCArIGRpZmY7XG4gICAgICAgIGlmICh0ZW1waW5kZXggPj0gMCAmJiB0ZW1waW5kZXggPCB2bS5zdGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2bS5zdGF0ZUlkID0gdGVtcGluZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHZtLnN0YXRlc1t2bS5zdGF0ZUlkXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbnZhciB3aWRnZXRDb25uZWN0b3IgPSB7XG4gICAgY29udHJvbGxlcjogd2lkZ2V0Q29ubmVjdG9yQ29udHJvbGxlcixcbiAgICBtZXRob2RzOiBbeyBpZDogMCwgbmFtZTogJ3NldERhdGEnLCBvdXRwdXQ6IHRydWUsIGlucHV0OiB0cnVlLCBwYXJhbXM6IFsnYXNzZXQnXSB9LCB7IGlkOiAxLCBuYW1lOiAnc2V0U3RhdGUnLCBvdXRwdXQ6IHRydWUsIGlucHV0OiB0cnVlLCBwYXJhbXM6IFsnYXNzZXQnXSB9LCB7IGlkOiAyLCBuYW1lOiAndXBkYXRlU3RhdGUnLCBvdXRwdXQ6IHRydWUsIGlucHV0OiB0cnVlLCBwYXJhbXM6IFsnYXNzZXQnXSB9LCB7IGlkOiAzLCBuYW1lOiAnbmF2aWdhdGVCYWNrJywgb3V0cHV0OiB0cnVlLCBpbnB1dDogdHJ1ZSwgcGFyYW1zOiBbJ2Fzc2V0J10gfSwgeyBpZDogNCwgbmFtZTogJ25hdmlnYXRlRm9yd2FyZCcsIG91dHB1dDogdHJ1ZSwgaW5wdXQ6IHRydWUsIHBhcmFtczogWydhc3NldCddIH0sIHsgaWQ6IDUsIG5hbWU6ICdwdXNoU3RhdGUnLCBvdXRwdXQ6IHRydWUsIHBhcmFtczogWydhc3NldCddIH1dLFxuICAgIGNvbG9yOiAnI2NjMjIyMicsXG4gICAgc2V0dGluZ3M6IHt9XG59O1xuXG5leHBvcnRzLndpZGdldENvbm5lY3RvciA9IHdpZGdldENvbm5lY3RvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL3dpZGdldENvbm5lY3Rvci93aWRnZXQuY29ubmVjdG9yLmpzIiwiXG5jbGFzcyB3aWRnZXRDb25uZWN0b3JDb250cm9sbGVye1xuXG4gICAgY29uc3RydWN0b3IgKHRhZykge1xuICAgICAgICB2YXIgdm0gPSB0aGlzXG5cbiAgICAgICAgdm0uc3RhdGVzID0gW107XG4gICAgICAgIHZtLnN0YXRlSWQgPSAtMTtcblxuICAgICAgICBmbG93TWFuYWdlci5pbml0V2lkZ2V0KHRhZywgZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgaW5pdCh0YWcpXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdm0ucHJvY2Vzc0lucHV0ID0gZnVuY3Rpb24gKHRhZywgZGF0YSkge1xuICAgICAgICAgICAgaWYodGFnID09ICdzZXREYXRhJyl7XG5cbiAgICAgICAgICAgICAgICB2bS5wdXNoU3RhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgZmxvd01hbmFnZXIucnVuRmxvdyh2bS50YWcsICdzZXREYXRhJywgcHJvY2Vzc0RhdGEoZGF0YSkpO1xuXG4gICAgICAgICAgICB9ZWxzZSBpZih0YWcgPT0gJ25hdmlnYXRlQmFjaycpe1xuXG4gICAgICAgICAgICAgICAgdmFyIHRvU3RhdGUgPSB2bS5nZXRTdGF0ZSgtMSk7XG4gICAgICAgICAgICAgICAgaWYodG9TdGF0ZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgZmxvd01hbmFnZXIucnVuRmxvdyh2bS50YWcsICdzZXREYXRhJywgcHJvY2Vzc0RhdGEodG9TdGF0ZSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfWVsc2UgaWYodGFnID09ICduYXZpZ2F0ZUZvcndhcmQnKXtcblxuICAgICAgICAgICAgICAgIHZhciB0b1N0YXRlID0gdm0uZ2V0U3RhdGUoMSk7XG4gICAgICAgICAgICAgICAgaWYodG9TdGF0ZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgZmxvd01hbmFnZXIucnVuRmxvdyh2bS50YWcsICdzZXREYXRhJywgcHJvY2Vzc0RhdGEodG9TdGF0ZSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfWVsc2UgaWYodGFnID09ICdzZXRTdGF0ZScpe1xuXG4gICAgICAgICAgICAgICAgdm0ucHVzaFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgICAgIGZsb3dNYW5hZ2VyLnJ1bkZsb3codm0udGFnLCAncHVzaFN0YXRlJywgcHJvY2Vzc0RhdGEoZGF0YSkpO1xuXG4gICAgICAgICAgICB9ZWxzZSBpZih0YWcgPT0gJ3VwZGF0ZVN0YXRlJyl7XG5cbiAgICAgICAgICAgICAgICB2bS51cGRhdGVTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgICAgICBmbG93TWFuYWdlci5ydW5GbG93KHZtLnRhZywgJ3B1c2hTdGF0ZScsIHByb2Nlc3NEYXRhKGRhdGEpKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKXtcbiAgICAgICAgICAgIGlmKCFkYXRhLm5hdmlnYXRpb24pIGRhdGEubmF2aWdhdGlvbiA9IHt9O1xuXG4gICAgICAgICAgICBkYXRhLm5hdmlnYXRpb24uaXNCYWNrd2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgZGF0YS5uYXZpZ2F0aW9uLmlzRm9yd2FyZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZih2bS5zdGF0ZUlkIDwgdm0uc3RhdGVzLmxlbmd0aCAtIDEpIGRhdGEubmF2aWdhdGlvbi5pc0ZvcndhcmQgPSB0cnVlO1xuICAgICAgICAgICAgaWYodm0uc3RhdGVJZCA+IDApIGRhdGEubmF2aWdhdGlvbi5pc0JhY2t3YXJkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXQodGFnKSB7XG4gICAgICAgICAgICB2bS50YWcgPSB0YWcudGFnX2lkO1xuICAgICAgICB9XG5cblxuICAgICAgICB2bS51cGRhdGVTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgdm0uc3RhdGVzW3ZtLnN0YXRlSWRdID0gc3RhdGU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHZtLnB1c2hTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuXG4gICAgICAgICAgICB2YXIgdGVtcFN0YXRlID0gdm0uc3RhdGVzW3ZtLnN0YXRlSWRdO1xuICAgICAgICAgICAgaWYodGVtcFN0YXRlKXtcbiAgICAgICAgICAgICAgICBpZih0ZW1wU3RhdGUuZmV0Y2gpIGRlbGV0ZSB0ZW1wU3RhdGUuZmV0Y2g7XG4gICAgICAgICAgICAgICAgaWYoIXN0YXRlLmdyb3VwICYmIHRlbXBTdGF0ZS5ncm91cCkgc3RhdGUuZ3JvdXAgPSB0ZW1wU3RhdGUuZ3JvdXA7XG4gICAgICAgICAgICAgICAgaWYoIXN0YXRlLnRhYiAmJiB0ZW1wU3RhdGUudGFiKSBzdGF0ZS50YWIgPSB0ZW1wU3RhdGUudGFiO1xuICAgICAgICAgICAgICAgIC8vIGlmKCFzdGF0ZS5pdGVtICYmIHRlbXBTdGF0ZS5pdGVtKSBzdGF0ZS5pdGVtID0gdGVtcFN0YXRlLml0ZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZtLnN0YXRlSWQrKztcbiAgICAgICAgICAgIHZtLnN0YXRlcy5zcGxpY2Uodm0uc3RhdGVJZCk7XG4gICAgICAgICAgICB2bS5zdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHZtLmdldFN0YXRlID0gZnVuY3Rpb24gKGRpZmYpIHtcbiAgICAgICAgICAgIHZhciB0ZW1waW5kZXggPSB2bS5zdGF0ZUlkICsgZGlmZjtcbiAgICAgICAgICAgIGlmKHRlbXBpbmRleCA+PSAwICYmIHRlbXBpbmRleCA8IHZtLnN0YXRlcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIHZtLnN0YXRlSWQgPSB0ZW1waW5kZXg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLnN0YXRlc1t2bS5zdGF0ZUlkXTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxudmFyIHdpZGdldENvbm5lY3RvciA9IHtcbiAgICBjb250cm9sbGVyOiB3aWRnZXRDb25uZWN0b3JDb250cm9sbGVyLFxuICAgIG1ldGhvZHM6W1xuICAgICAgICB7aWQ6MCwgbmFtZTonc2V0RGF0YScsb3V0cHV0OnRydWUsIGlucHV0OnRydWUsIHBhcmFtcyA6IFsnYXNzZXQnXX0sXG4gICAgICAgIHtpZDoxLCBuYW1lOidzZXRTdGF0ZScsb3V0cHV0OnRydWUsIGlucHV0OnRydWUsIHBhcmFtcyA6IFsnYXNzZXQnXX0sXG4gICAgICAgIHtpZDoyLCBuYW1lOid1cGRhdGVTdGF0ZScsb3V0cHV0OnRydWUsIGlucHV0OnRydWUsIHBhcmFtcyA6IFsnYXNzZXQnXX0sXG4gICAgICAgIHtpZDozLCBuYW1lOiduYXZpZ2F0ZUJhY2snLG91dHB1dDp0cnVlLCBpbnB1dDp0cnVlLCBwYXJhbXMgOiBbJ2Fzc2V0J119LFxuICAgICAgICB7aWQ6NCwgbmFtZTonbmF2aWdhdGVGb3J3YXJkJyxvdXRwdXQ6dHJ1ZSwgaW5wdXQ6dHJ1ZSwgcGFyYW1zIDogWydhc3NldCddfSxcbiAgICAgICAge2lkOjUsIG5hbWU6J3B1c2hTdGF0ZScsb3V0cHV0OnRydWUsIHBhcmFtcyA6IFsnYXNzZXQnXX0sXG4gICAgXSxcbiAgICBjb2xvcjonI2NjMjIyMicsXG4gICAgc2V0dGluZ3MgOiB7fSxcbn1cblxuXG5leHBvcnQge3dpZGdldENvbm5lY3Rvcn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL3dpZGdldENvbm5lY3Rvci93aWRnZXQuY29ubmVjdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzIvMjAxNy5cbiAqL1xudmFyIGdyaWRTZXJ2aWNlID0gZXhwb3J0cy5ncmlkU2VydmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBncmlkU2VydmljZSgkbG9nKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGdyaWRTZXJ2aWNlKTtcblxuICAgICAgICAkbG9nLmxvZyhcImdyaWRTZXJ2aWNlXCIpO1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICB2YXIgZ2V0RGVmYXVsdFdpZGdldHMgPSB0cnVlO1xuICAgICAgICB2YXIgcmVzZXRMb2NhbFN0b3JhZ2UgPSBmYWxzZTtcblxuICAgICAgICB2bS5pc09wZXJhID0gISF3aW5kb3cub3ByICYmICEhb3ByLmFkZG9ucyB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMDtcbiAgICAgICAgdm0uaXNGaXJlZm94ID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgdm0uaXNTYWZhcmkgPSAvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgIHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7XG4gICAgICAgIH0oIXdpbmRvd1snc2FmYXJpJ10gfHwgc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pO1xuICAgICAgICB2bS5pc0lFID0gLypAY2Nfb24hQCovZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XG4gICAgICAgIHZtLmlzRWRnZSA9ICF2bS5pc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWE7XG4gICAgICAgIHZtLmlzQ2hyb21lID0gISF3aW5kb3cuY2hyb21lICYmICEhd2luZG93LmNocm9tZS53ZWJzdG9yZTtcbiAgICAgICAgdm0uaXNCbGluayA9ICh2bS5pc0Nocm9tZSB8fCB2bS5pc09wZXJhKSAmJiAhIXdpbmRvdy5DU1M7XG5cbiAgICAgICAgdm0ucGFyYW1UeXBlcyA9IHtcbiAgICAgICAgICAgIElOVDogJ0lOVCcsXG4gICAgICAgICAgICBTVFJJTkc6ICdTVFJJTkcnLFxuICAgICAgICAgICAgQk9PTEVBTjogJ0JPT0xFQU4nLFxuICAgICAgICAgICAgRlVOQ1RJT046ICdGVU5DVElPTicsXG4gICAgICAgICAgICBUSU1FU1RBTVA6ICdUSU1FU1RBTVAnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdldERlZmF1bHRXaWRnZXRzKSB7XG5cbiAgICAgICAgICAgIC8vd2lkZ2V0Q29ubmVjdG9yNFxuICAgICAgICAgICAgLy9Db25maWdXaWRnZXQzXG4gICAgICAgICAgICAvL05hdlRyZWUxXG4gICAgICAgICAgICAvL1NlYXJjaDJcblxuICAgICAgICAgICAgdmFyIHRfZmxvd0pTT04gPSB7XG4gICAgICAgICAgICAgICAgdGltZWxpbmUzOiB7XG4gICAgICAgICAgICAgICAgICAgICczZFBsYXllcjInOiBbeyBpZDogMCwgZnJvbTogJ3B1c2hGcmFtZScsIHRvOiAnc2V0RnJhbWUnIH1dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdF9mbG93SlNPTiA9IEpTT04uc3RyaW5naWZ5KHRfZmxvd0pTT04pO1xuXG4gICAgICAgICAgICB2YXIgdF9sYXlvdXRPcmRlciA9ICdbe1wicG9zaXRpb25cIjo3Mzg3N30se1wicG9zaXRpb25cIjozNjA1MX0se1wicG9zaXRpb25cIjo3NTQzOH1dJztcbiAgICAgICAgICAgIC8vIHZhciB0X3dpZGdldERhdGEgPSAnW3tcIm5hbWVcIjpcInZpZGVvUGxheWVyXCIsXCJ0eXBlXCI6XCJqc1wiLFwidmlld1wiOlwiYXBwL3dpZGdldHMvY29tbW9uL3ZpZGVvUGxheWVyL3ZpZGVvLnBsYXllci5odG1sXCIsXCJtZXRob2RzXCI6W10sXCJjb2xvclwiOlwiI2NjMjIyMlwiLFwic2V0dGluZ3NcIjp7XCJ2aFwiOjIwLFwid1wiOjl9LFwidGFnXCI6XCJ2aWRlb1BsYXllcjFcIixcImlkXCI6OTU0MzEsXCJyZWN0U2V0dGluZ3NcIjp7XCJ5XCI6NDQsXCJ4XCI6NjF9LFwicmVjdFwiOntcIl9ncm91cHNcIjpbW3t9XV0sXCJfcGFyZW50c1wiOlt7fV19fSx7XCJuYW1lXCI6XCIzZFBsYXllclwiLFwidHlwZVwiOlwianNcIixcInZpZXdcIjpcImFwcC93aWRnZXRzL2NvbW1vbi8zZFBsYXllci8zZC5wbGF5ZXIuaHRtbFwiLFwibWV0aG9kc1wiOltdLFwiY29sb3JcIjpcIiNjYzIyMjJcIixcInNldHRpbmdzXCI6e1widmhcIjoyMCxcIndcIjo5fSxcInRhZ1wiOlwiM2RQbGF5ZXIyXCIsXCJpZFwiOjM2ODIzLFwicmVjdFNldHRpbmdzXCI6e1wieVwiOjEwNixcInhcIjoxMjR9LFwicmVjdFwiOntcIl9ncm91cHNcIjpbW3t9XV0sXCJfcGFyZW50c1wiOlt7fV19fSx7XCJuYW1lXCI6XCJ0aW1lbGluZVwiLFwidHlwZVwiOlwianNcIixcInZpZXdcIjpcImFwcC93aWRnZXRzL2NvbW1vbi90aW1lbGluZS90aW1lbGluZS5odG1sXCIsXCJtZXRob2RzXCI6W10sXCJjb2xvclwiOlwiI2NjMjIyMlwiLFwic2V0dGluZ3NcIjp7XCJ2aFwiOjQsXCJ3XCI6MTh9LFwidGFnXCI6XCJ0aW1lbGluZTNcIixcImlkXCI6NzY3ODAsXCJyZWN0U2V0dGluZ3NcIjp7XCJ5XCI6MTcyLFwieFwiOjE5Nn0sXCJyZWN0XCI6e1wiX2dyb3Vwc1wiOltbe31dXSxcIl9wYXJlbnRzXCI6W3t9XX19LHtcIm5hbWVcIjpcImNvbmZpZ1dpZGdldFwiLFwidHlwZVwiOlwianNcIixcInZpZXdcIjpcImFwcC93aWRnZXRzL2NvbW1vbi8zZFBsYXllci9jb25maWcud2lkZ2V0Lmh0bWxcIixcIm1ldGhvZHNcIjpbXSxcImNvbG9yXCI6XCIjY2MyMjIyXCIsXCJzZXR0aW5nc1wiOntcInZoXCI6MjQsXCJ3XCI6Nn0sXCJ0YWdcIjpcImNvbmZpZ1dpZGdldDRcIixcImlkXCI6NDk1MzYsXCJyZWN0U2V0dGluZ3NcIjp7XCJ5XCI6MjQ2LFwieFwiOjMwNn19XSdcbiAgICAgICAgICAgIHZhciB0X3dpZGdldERhdGEgPSAnJztcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zsb3dKU09OJywgdF9mbG93SlNPTik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0T3JkZXInLCB0X2xheW91dE9yZGVyKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3aWRnZXREYXRhJywgdF93aWRnZXREYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3aWRnZXRTZXQgPSBmbG93TWFuYWdlci5nZXRXaWRnZXRTZXR0aW5ncygpO1xuXG4gICAgICAgIHZhciB3aWRnZXREYXRhID0gW107XG5cbiAgICAgICAgaWYgKHJlc2V0TG9jYWxTdG9yYWdlKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2lkZ2V0RGF0YScsIEpTT04uc3RyaW5naWZ5KHdpZGdldERhdGEpKTtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3aWRnZXREYXRhJykpIHtcbiAgICAgICAgICAgIHdpZGdldERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3aWRnZXREYXRhJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVXaWRnZXRzKHdpZGdldEpTT04pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB3aWRnZXRKU09OKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpZERhdGEgPSB3aWRnZXRTZXRbd2lkZ2V0SlNPTltpZHhdLm5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0SlNPTltpZHhdLm1ldGhvZHMpIHdpZGdldEpTT05baWR4XS5tZXRob2RzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgamR4IGluIHdpZERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpkeCAhPSAnbWV0aG9kcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEpTT05baWR4XVtqZHhdID0gd2lkRGF0YVtqZHhdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2R4IGluIHdpZERhdGFbamR4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHFkeCBpbiB3aWRnZXRKU09OW2lkeF1bamR4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2lkZ2V0SlNPTltpZHhdW2pkeF1bcWR4XS5uYW1lID09IHdpZERhdGFbamR4XVtrZHhdLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB3aWRnZXRKU09OW2lkeF1bamR4XS5wdXNoKHdpZERhdGFbamR4XVtrZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB3aWRnZXRKU09OO1xuICAgICAgICB9XG5cbiAgICAgICAgdm0uZ2V0V2lkZ2V0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVdpZGdldHMod2lkZ2V0RGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHZtLmdldFdpZGdldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXhCeVRhZyA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHdpZGdldERhdGEpIHtcbiAgICAgICAgICAgICAgICBpbmRleEJ5VGFnW3dpZGdldERhdGFbaWR4XS50YWddID0gaWR4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWRnZXRzOiBnZW5lcmF0ZVdpZGdldHMod2lkZ2V0RGF0YSksXG4gICAgICAgICAgICAgICAgd2lkZ2V0U2V0OiB3aWRnZXRTZXQsXG4gICAgICAgICAgICAgICAgd2lkZ2V0RGF0YTogd2lkZ2V0RGF0YSxcbiAgICAgICAgICAgICAgICBpbmRleEJ5VGFnOiBpbmRleEJ5VGFnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLnVwZGF0ZVdpZGdldERhdGEgPSBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHdpZGdldERhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAod2lkZ2V0RGF0YVtpZHhdLnRhZyA9PSBkYXRhLnRhZykge1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXREYXRhW2lkeF0gPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICB3aWRnZXREYXRhLnB1c2goZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2bS5wdXNoVG9BUEkoJ3dpZGdldERhdGEnLCB3aWRnZXREYXRhLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayh2bS5nZXRXaWRnZXREYXRhKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0ucHVzaFRvQVBJID0gZnVuY3Rpb24gKHRhZywgZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhZywgSlNPTi5zdHJpbmdpZnkoYW5ndWxhci5jb3B5KGRhdGEpKSk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TGF5b3V0T3JkZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciB3aWQgPSB2bS5nZXRXaWRnZXRzKCk7XG4gICAgICAgICAgICB2YXIgdGVtcExheSA9IFtdO1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYXlvdXRPcmRlcicpICYmICFyZXNldExvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgICAgIHRlbXBMYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYXlvdXRPcmRlcicpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgd2lkLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcExheS5wdXNoKHsgcG9zaXRpb246IGlkeCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHRlbXBMYXkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZmxvdyA9IHt9O1xuICAgICAgICAgICAgaWYgKHJlc2V0TG9jYWxTdG9yYWdlKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmxvd0pTT04nLCAne30nKTtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxvd0pTT04nKSkge1xuICAgICAgICAgICAgICAgIGZsb3cgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbG93SlNPTicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmbG93O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZsb3dNYW5hZ2VyLmluaXRGbG93KHZtLmdldEZsb3coKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKGdyaWRTZXJ2aWNlLCBbe1xuICAgICAgICBrZXk6ICdnZXREYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIGdyaWRTZXJ2aWNlO1xufSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZmxvd01hbmFnZXIvZ3JpZC5zZXJ2aWNlLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMi8yMDE3LlxuICovXG5leHBvcnQgY2xhc3MgZ3JpZFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yICgkbG9nKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgJGxvZy5sb2coXCJncmlkU2VydmljZVwiKTtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgdmFyIGdldERlZmF1bHRXaWRnZXRzID0gdHJ1ZTtcbiAgICAgICAgdmFyIHJlc2V0TG9jYWxTdG9yYWdlID0gZmFsc2U7XG5cbiAgICAgICAgdm0uaXNPcGVyYSA9ICghIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMDtcbiAgICAgICAgdm0uaXNGaXJlZm94ID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgdm0uaXNTYWZhcmkgPSAvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7IH0pKCF3aW5kb3dbJ3NhZmFyaSddIHx8IHNhZmFyaS5wdXNoTm90aWZpY2F0aW9uKTtcbiAgICAgICAgdm0uaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuICAgICAgICB2bS5pc0VkZ2UgPSAhdm0uaXNJRSAmJiAhIXdpbmRvdy5TdHlsZU1lZGlhO1xuICAgICAgICB2bS5pc0Nocm9tZSA9ICEhd2luZG93LmNocm9tZSAmJiAhIXdpbmRvdy5jaHJvbWUud2Vic3RvcmU7XG4gICAgICAgIHZtLmlzQmxpbmsgPSAodm0uaXNDaHJvbWUgfHwgdm0uaXNPcGVyYSkgJiYgISF3aW5kb3cuQ1NTO1xuXG4gICAgICAgIHZtLnBhcmFtVHlwZXMgPSB7XG4gICAgICAgICAgICBJTlQgOiAnSU5UJyxcbiAgICAgICAgICAgIFNUUklORyA6ICdTVFJJTkcnLFxuICAgICAgICAgICAgQk9PTEVBTiA6ICdCT09MRUFOJyxcbiAgICAgICAgICAgIEZVTkNUSU9OIDogJ0ZVTkNUSU9OJyxcbiAgICAgICAgICAgIFRJTUVTVEFNUCA6ICdUSU1FU1RBTVAnLFxuICAgICAgICB9XG5cblxuICAgICAgICBpZihnZXREZWZhdWx0V2lkZ2V0cyl7XG5cbiAgICAgICAgICAgIC8vd2lkZ2V0Q29ubmVjdG9yNFxuICAgICAgICAgICAgLy9Db25maWdXaWRnZXQzXG4gICAgICAgICAgICAvL05hdlRyZWUxXG4gICAgICAgICAgICAvL1NlYXJjaDJcblxuICAgICAgICAgICAgdmFyIHRfZmxvd0pTT04gPSB7XG4gICAgICAgICAgICAgICAgdGltZWxpbmUzIDoge1xuICAgICAgICAgICAgICAgICAgICAnM2RQbGF5ZXIyJyA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpZDowLCBmcm9tOidwdXNoRnJhbWUnLCB0bzonc2V0RnJhbWUnfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRfZmxvd0pTT04gPSBKU09OLnN0cmluZ2lmeSh0X2Zsb3dKU09OKTtcblxuICAgICAgICAgICAgdmFyIHRfbGF5b3V0T3JkZXIgPSAnW3tcInBvc2l0aW9uXCI6NzM4Nzd9LHtcInBvc2l0aW9uXCI6MzYwNTF9LHtcInBvc2l0aW9uXCI6NzU0Mzh9XSc7XG4gICAgICAgICAgICAvLyB2YXIgdF93aWRnZXREYXRhID0gJ1t7XCJuYW1lXCI6XCJ2aWRlb1BsYXllclwiLFwidHlwZVwiOlwianNcIixcInZpZXdcIjpcImFwcC93aWRnZXRzL2NvbW1vbi92aWRlb1BsYXllci92aWRlby5wbGF5ZXIuaHRtbFwiLFwibWV0aG9kc1wiOltdLFwiY29sb3JcIjpcIiNjYzIyMjJcIixcInNldHRpbmdzXCI6e1widmhcIjoyMCxcIndcIjo5fSxcInRhZ1wiOlwidmlkZW9QbGF5ZXIxXCIsXCJpZFwiOjk1NDMxLFwicmVjdFNldHRpbmdzXCI6e1wieVwiOjQ0LFwieFwiOjYxfSxcInJlY3RcIjp7XCJfZ3JvdXBzXCI6W1t7fV1dLFwiX3BhcmVudHNcIjpbe31dfX0se1wibmFtZVwiOlwiM2RQbGF5ZXJcIixcInR5cGVcIjpcImpzXCIsXCJ2aWV3XCI6XCJhcHAvd2lkZ2V0cy9jb21tb24vM2RQbGF5ZXIvM2QucGxheWVyLmh0bWxcIixcIm1ldGhvZHNcIjpbXSxcImNvbG9yXCI6XCIjY2MyMjIyXCIsXCJzZXR0aW5nc1wiOntcInZoXCI6MjAsXCJ3XCI6OX0sXCJ0YWdcIjpcIjNkUGxheWVyMlwiLFwiaWRcIjozNjgyMyxcInJlY3RTZXR0aW5nc1wiOntcInlcIjoxMDYsXCJ4XCI6MTI0fSxcInJlY3RcIjp7XCJfZ3JvdXBzXCI6W1t7fV1dLFwiX3BhcmVudHNcIjpbe31dfX0se1wibmFtZVwiOlwidGltZWxpbmVcIixcInR5cGVcIjpcImpzXCIsXCJ2aWV3XCI6XCJhcHAvd2lkZ2V0cy9jb21tb24vdGltZWxpbmUvdGltZWxpbmUuaHRtbFwiLFwibWV0aG9kc1wiOltdLFwiY29sb3JcIjpcIiNjYzIyMjJcIixcInNldHRpbmdzXCI6e1widmhcIjo0LFwid1wiOjE4fSxcInRhZ1wiOlwidGltZWxpbmUzXCIsXCJpZFwiOjc2NzgwLFwicmVjdFNldHRpbmdzXCI6e1wieVwiOjE3MixcInhcIjoxOTZ9LFwicmVjdFwiOntcIl9ncm91cHNcIjpbW3t9XV0sXCJfcGFyZW50c1wiOlt7fV19fSx7XCJuYW1lXCI6XCJjb25maWdXaWRnZXRcIixcInR5cGVcIjpcImpzXCIsXCJ2aWV3XCI6XCJhcHAvd2lkZ2V0cy9jb21tb24vM2RQbGF5ZXIvY29uZmlnLndpZGdldC5odG1sXCIsXCJtZXRob2RzXCI6W10sXCJjb2xvclwiOlwiI2NjMjIyMlwiLFwic2V0dGluZ3NcIjp7XCJ2aFwiOjI0LFwid1wiOjZ9LFwidGFnXCI6XCJjb25maWdXaWRnZXQ0XCIsXCJpZFwiOjQ5NTM2LFwicmVjdFNldHRpbmdzXCI6e1wieVwiOjI0NixcInhcIjozMDZ9fV0nXG4gICAgICAgICAgICB2YXIgdF93aWRnZXREYXRhID0gJyc7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmbG93SlNPTicsIHRfZmxvd0pTT04pO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dE9yZGVyJywgdF9sYXlvdXRPcmRlcik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2lkZ2V0RGF0YScsIHRfd2lkZ2V0RGF0YSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3aWRnZXRTZXQgPSBmbG93TWFuYWdlci5nZXRXaWRnZXRTZXR0aW5ncygpO1xuXG4gICAgICAgIHZhciB3aWRnZXREYXRhID0gW11cblxuICAgICAgICBpZihyZXNldExvY2FsU3RvcmFnZSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dpZGdldERhdGEnLCBKU09OLnN0cmluZ2lmeSh3aWRnZXREYXRhKSk7XG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3aWRnZXREYXRhJykpe1xuICAgICAgICAgICAgd2lkZ2V0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dpZGdldERhdGEnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVdpZGdldHMod2lkZ2V0SlNPTikge1xuICAgICAgICAgICAgZm9yKHZhciBpZHggaW4gd2lkZ2V0SlNPTil7XG4gICAgICAgICAgICAgICAgdmFyIHdpZERhdGEgPSB3aWRnZXRTZXRbd2lkZ2V0SlNPTltpZHhdLm5hbWVdO1xuICAgICAgICAgICAgICAgIGlmKCF3aWRnZXRKU09OW2lkeF0ubWV0aG9kcykgd2lkZ2V0SlNPTltpZHhdLm1ldGhvZHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGpkeCBpbiB3aWREYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoamR4ICE9ICdtZXRob2RzJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRKU09OW2lkeF1bamR4XSA9IHdpZERhdGFbamR4XTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGtkeCBpbiB3aWREYXRhW2pkeF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgcWR4IGluIHdpZGdldEpTT05baWR4XVtqZHhdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod2lkZ2V0SlNPTltpZHhdW2pkeF1bcWR4XS5uYW1lID09IHdpZERhdGFbamR4XVtrZHhdLm5hbWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFmb3VuZCkgd2lkZ2V0SlNPTltpZHhdW2pkeF0ucHVzaCh3aWREYXRhW2pkeF1ba2R4XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB3aWRnZXRKU09OO1xuICAgICAgICB9XG5cbiAgICAgICAgdm0uZ2V0V2lkZ2V0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVdpZGdldHMod2lkZ2V0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdm0uZ2V0V2lkZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbmRleEJ5VGFnID0ge307XG4gICAgICAgICAgICBmb3IodmFyIGlkeCBpbiB3aWRnZXREYXRhKXtcbiAgICAgICAgICAgICAgICBpbmRleEJ5VGFnW3dpZGdldERhdGFbaWR4XS50YWddID0gaWR4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWRnZXRzIDogZ2VuZXJhdGVXaWRnZXRzKHdpZGdldERhdGEpLFxuICAgICAgICAgICAgICAgIHdpZGdldFNldCA6IHdpZGdldFNldCxcbiAgICAgICAgICAgICAgICB3aWRnZXREYXRhIDogd2lkZ2V0RGF0YSxcbiAgICAgICAgICAgICAgICBpbmRleEJ5VGFnOiBpbmRleEJ5VGFnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdm0udXBkYXRlV2lkZ2V0RGF0YSA9IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IodmFyIGlkeCBpbiB3aWRnZXREYXRhKXtcbiAgICAgICAgICAgICAgICBpZih3aWRnZXREYXRhW2lkeF0udGFnID09IGRhdGEudGFnKXtcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RGF0YVtpZHhdID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighZm91bmQpe1xuICAgICAgICAgICAgICAgIHdpZGdldERhdGEucHVzaChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLnB1c2hUb0FQSSgnd2lkZ2V0RGF0YScsIHdpZGdldERhdGEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2sodm0uZ2V0V2lkZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB2bS5wdXNoVG9BUEkgPSBmdW5jdGlvbiAodGFnLCBkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFnLCBKU09OLnN0cmluZ2lmeShhbmd1bGFyLmNvcHkoZGF0YSkpKTtcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdm0uZ2V0TGF5b3V0T3JkZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciB3aWQgPSB2bS5nZXRXaWRnZXRzKCk7XG4gICAgICAgICAgICB2YXIgdGVtcExheSA9IFtdO1xuICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xheW91dE9yZGVyJykgJiYgIXJlc2V0TG9jYWxTdG9yYWdlKXtcbiAgICAgICAgICAgICAgICB0ZW1wTGF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGF5b3V0T3JkZXInKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGlkeCA9IDA7IGlkeCA8IHdpZC5sZW5ndGg7IGlkeCsrKXtcbiAgICAgICAgICAgICAgICAgICAgdGVtcExheS5wdXNoKHtwb3NpdGlvbjogaWR4fSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2sodGVtcExheSk7XG4gICAgICAgIH1cblxuICAgICAgICB2bS5nZXRGbG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZsb3cgPSB7fVxuICAgICAgICAgICAgaWYocmVzZXRMb2NhbFN0b3JhZ2UpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmbG93SlNPTicsICd7fScpXG4gICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxvd0pTT04nKSl7XG4gICAgICAgICAgICAgICAgZmxvdyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zsb3dKU09OJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZsb3c7XG4gICAgICAgIH1cblxuICAgICAgICBmbG93TWFuYWdlci5pbml0Rmxvdyh2bS5nZXRGbG93KCkpO1xuXG5cbiAgICB9XG5cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZmxvd01hbmFnZXIvZ3JpZC5zZXJ2aWNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXG4gKi9cblxudmFyIGF1dGhTZXJ2aWNlID0gZXhwb3J0cy5hdXRoU2VydmljZSA9IGZ1bmN0aW9uIGF1dGhTZXJ2aWNlKCR3aW5kb3csICRsb2csIFRPS0VOX0tFWSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgYXV0aFNlcnZpY2UpO1xuXG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAkbG9nLmxvZyhcImF1dGhTZXJ2aWNlXCIpO1xuXG4gICAgdm0ucGFyc2VKd3QgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgLy8kbG9nLmxvZyh0b2tlbik7XG4gICAgICAgIHZhciBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xuICAgICAgICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoJy0nLCAnKycpLnJlcGxhY2UoJ18nLCAnLycpO1xuICAgICAgICByZXR1cm4gYW5ndWxhci5mcm9tSnNvbigkd2luZG93LmF0b2IoYmFzZTY0KSk7XG4gICAgfTtcblxuICAgIHZtLnNhdmVUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAkd2luZG93LmxvY2FsU3RvcmFnZVtUT0tFTl9LRVldID0gdG9rZW47XG4gICAgfTtcblxuICAgIHZtLmdldFRva2VuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJHdpbmRvdy5sb2NhbFN0b3JhZ2VbVE9LRU5fS0VZXTtcbiAgICB9O1xuXG4gICAgdm0uaXNBdXRoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHZtLmdldFRva2VuKCk7XG4gICAgICAgIGlmICh0b2tlbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gdm0ucGFyc2VKd3QodG9rZW4pO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKSA8PSBwYXJhbXMuZXhwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZtLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShUT0tFTl9LRVkpO1xuICAgIH07XG59O1xuXG52YXIgYXV0aEludGVyY2VwdG9yID0gZXhwb3J0cy5hdXRoSW50ZXJjZXB0b3IgPSBmdW5jdGlvbiBhdXRoSW50ZXJjZXB0b3IoJGxvZywgQVBJX0hPU1QsIGF1dGhTZXJ2aWNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBhdXRoSW50ZXJjZXB0b3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gYXV0b21hdGljYWxseSBhdHRhY2ggQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgcmVxdWVzdDogZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgICAgICAgICAgIC8vJGxvZy5sb2coY29uZmlnKTtcbiAgICAgICAgICAgIGlmIChjb25maWcudXJsLmluZGV4T2YoQVBJX0hPU1QpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5tZXRob2QgPT0gJ1BPU1QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGNvbmZpZy51cmwuaW5kZXhPZignZ2V0dG9rZW4nKSA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuZGF0YS50b2tlbiA9IGF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5tZXRob2QgPT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0JlYXJlciAnICsgYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gSWYgYSB0b2tlbiB3YXMgc2VudCBiYWNrLCBzYXZlIGl0XG4gICAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbiByZXNwb25zZShyZXMpIHtcbiAgICAgICAgICAgIC8vJGxvZy5sb2cocmVzKTtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8kbG9nLmxvZyhyZXMuZGF0YS5kYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpZy51cmwuaW5kZXhPZihBUElfSE9TVCkgPT09IDAgJiYgcmVzLmRhdGEuZGF0YS50b2tlbikge1xuICAgICAgICAgICAgICAgICAgICBhdXRoU2VydmljZS5zYXZlVG9rZW4ocmVzLmRhdGEuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzcG9uc2VFcnJvcjogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vICAgICAkbG9nLmxvZygnaW50ZXJjZXB0b3InKTtcbiAgICAgICAgLy8gICAgICRsb2cubG9nKHJlcyk7XG4gICAgICAgIC8vIH1cbiAgICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXG4gKi9cblxuZXhwb3J0IGNsYXNzIGF1dGhTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvciAoJHdpbmRvdywgJGxvZywgVE9LRU5fS0VZKSB7XG4gICAgICAgICduZ0luamVjdCdcblxuICAgICAgICB2YXIgIHZtID0gdGhpcztcbiAgICAgICAgJGxvZy5sb2coXCJhdXRoU2VydmljZVwiKTtcblxuICAgICAgICB2bS5wYXJzZUp3dCA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgICAgLy8kbG9nLmxvZyh0b2tlbik7XG4gICAgICAgICAgICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgnLScsICcrJykucmVwbGFjZSgnXycsICcvJyk7XG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhci5mcm9tSnNvbigkd2luZG93LmF0b2IoYmFzZTY0KSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uc2F2ZVRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAkd2luZG93LmxvY2FsU3RvcmFnZVtUT0tFTl9LRVldID0gdG9rZW47XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0VG9rZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJHdpbmRvdy5sb2NhbFN0b3JhZ2VbVE9LRU5fS0VZXTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHZtLmlzQXV0aGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdm0uZ2V0VG9rZW4oKTtcbiAgICAgICAgICAgIGlmICh0b2tlbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHZtLnBhcnNlSnd0KHRva2VuKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApIDw9IHBhcmFtcy5leHA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2bS5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFRPS0VOX0tFWSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIGF1dGhJbnRlcmNlcHRvciB7XG4gICAgY29uc3RydWN0b3IgKCRsb2csIEFQSV9IT1NULCBhdXRoU2VydmljZSkge1xuICAgICAgICAnbmdJbmplY3QnXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgYXR0YWNoIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICByZXF1ZXN0OiBmdW5jdGlvbihjb25maWcpIHtcbiAgICAgICAgICAgICAgICAvLyRsb2cubG9nKGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgaWYoY29uZmlnLnVybC5pbmRleE9mKEFQSV9IT1NUKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLm1ldGhvZCA9PSAnUE9TVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGNvbmZpZy51cmwuaW5kZXhPZignZ2V0dG9rZW4nKSA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLmRhdGEudG9rZW4gPSBhdXRoU2VydmljZS5nZXRUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY29uZmlnLm1ldGhvZCA9PSAnR0VUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0JlYXJlciAnICsgYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBJZiBhIHRva2VuIHdhcyBzZW50IGJhY2ssIHNhdmUgaXRcbiAgICAgICAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAvLyRsb2cubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgaWYocmVzLmRhdGEgJiYgcmVzLmRhdGEuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAvLyRsb2cubG9nKHJlcy5kYXRhLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpZy51cmwuaW5kZXhPZihBUElfSE9TVCkgPT09IDAgJiYgcmVzLmRhdGEuZGF0YS50b2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aFNlcnZpY2Uuc2F2ZVRva2VuKHJlcy5kYXRhLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVzcG9uc2VFcnJvcjogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAvLyAgICAgJGxvZy5sb2coJ2ludGVyY2VwdG9yJyk7XG4gICAgICAgICAgICAvLyAgICAgJGxvZy5sb2cocmVzKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8xMS8yMDE3LlxyXG4gKi9cblxudmFyIGhlbHBlclNlcnZpY2UgPSBleHBvcnRzLmhlbHBlclNlcnZpY2UgPSBmdW5jdGlvbiBoZWxwZXJTZXJ2aWNlKCRsb2csICRxLCBhcHBDb25zdGFudHMpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGhlbHBlclNlcnZpY2UpO1xuXG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAkbG9nLmxvZyhcImhlbHBlclNlcnZpY2VcIik7XG5cbiAgICB2YXIgU0xBU0ggPSAnLyc7XG5cbiAgICAvLyBzaG91bGQgYmUgc2FtZSBhcyBkZWZpbmVkIGluIGJhY2tlbmRcbiAgICB2bS5hc3NldFR5cGVJZFRvQXNzZXRUeXBlID0ge1xuICAgICAgICAyOiBhcHBDb25zdGFudHMuR1JPVVAsXG4gICAgICAgIDM6IGFwcENvbnN0YW50cy5VU0VSLFxuICAgICAgICA0OiBhcHBDb25zdGFudHMuUk9MRSxcbiAgICAgICAgNTogYXBwQ29uc3RhbnRzLkxPQ0FMVVNFUixcbiAgICAgICAgNDU6IGFwcENvbnN0YW50cy5WRUhJQ0xFLFxuICAgICAgICA1MjogYXBwQ29uc3RhbnRzLkRFVklDRVxuICAgIH07XG5cbiAgICAvLyBnZW5lcmF0aW5nIHJldmVyc2UgbG9va3VwXG4gICAgdm0uYXNzZXRUeXBlVG9Bc3NldFR5cGVJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFzc2V0VHlwZVRvQXNzZXRUeXBlSWQgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmFzc2V0VHlwZUlkVG9Bc3NldFR5cGUpIHtcbiAgICAgICAgICAgIGFzc2V0VHlwZVRvQXNzZXRUeXBlSWRbdm0uYXNzZXRUeXBlSWRUb0Fzc2V0VHlwZVtpZHhdXSA9IGlkeDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXNzZXRUeXBlVG9Bc3NldFR5cGVJZDtcbiAgICB9KCk7XG5cbiAgICB2bS5nZXRBc3NldElkMiA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIGlmIChwYXRoID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgICAgIHZhciB0b2tlbnMgPSBwYXRoLnNwbGl0KFNMQVNIKTtcblxuICAgICAgICBpZiAodG9rZW5zLmxlbmd0aCA+IDIpIHJldHVybiB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDJdO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICB2bS5nZXRQYXJlbnRQYXRoMiA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIGlmIChwYXRoID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgICAgIHZhciBzYXZlZGlkeCA9IDA7XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgIGZvciAodmFyIGlkeCA9IHBhdGgubGVuZ3RoIC0gMTsgaWR4ID49IDA7IGlkeC0tKSB7XG4gICAgICAgICAgICBpZiAocGF0aFtpZHhdID09IFNMQVNIKSBjb3VudCsrO1xuXG4gICAgICAgICAgICBpZiAoY291bnQgPT0gMikge1xuICAgICAgICAgICAgICAgIHNhdmVkaWR4ID0gaWR4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY291bnQgPT0gNSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50ID09IDUpIHJldHVybiBwYXRoLnN1YnN0cmluZygwLCBzYXZlZGlkeCk7XG5cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcblxuICAgIHZtLmdldFBhcmVudElkMiA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIGlmIChwYXRoID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiB2bS5nZXRBc3NldElkMih2bS5nZXRQYXJlbnRQYXRoMihwYXRoKSk7XG4gICAgfTtcblxuICAgIHZtLmdldEFzc2V0VHlwZUlkMiA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIGlmIChwYXRoID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgICAgIHZhciB0b2tlbnMgPSBwYXRoLnNwbGl0KFNMQVNIKTtcblxuICAgICAgICBpZiAodG9rZW5zLmxlbmd0aCA+IDMpIHJldHVybiB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDNdO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICB2bS5nZXRBc3NldFR5cGUyID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgaWYgKHBhdGggPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHZtLmFzc2V0VHlwZUlkVG9Bc3NldFR5cGVbdm0uZ2V0QXNzZXRUeXBlSWQyKHBhdGgpXTtcbiAgICB9O1xuXG4gICAgdm0uZ2V0QXNzZXRMZXZlbDIgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICBpZiAocGF0aCA9PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigocGF0aC5zcGxpdChTTEFTSCkubGVuZ3RoIC0gMSkgLyAyKTtcbiAgICB9O1xuXG4gICAgdm0uYWRkQXNzZXRJbmZvID0gZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgIGlmIChhc3NldCA9PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBhc3NldC5hc3NldGlkID0gdm0uZ2V0QXNzZXRJZDIoYXNzZXQuYXNzZXRwYXRoKTtcbiAgICAgICAgYXNzZXQucGdyb3VwcGF0aCA9IHZtLmdldFBhcmVudFBhdGgyKGFzc2V0LmFzc2V0cGF0aCk7XG4gICAgICAgIGFzc2V0LnBncm91cGlkID0gdm0uZ2V0UGFyZW50SWQyKGFzc2V0LmFzc2V0cGF0aCk7XG4gICAgICAgIGFzc2V0LnVpX2Fzc2V0X3R5cGUgPSB2bS5nZXRBc3NldFR5cGUyKGFzc2V0LmFzc2V0cGF0aCk7XG4gICAgICAgIGFzc2V0LmFzc2V0bGV2ZWwgPSB2bS5nZXRBc3NldExldmVsMihhc3NldC5hc3NldHBhdGgpO1xuICAgIH07XG5cbiAgICB2bS5maWx0ZXJBc3NldEdyb3VwcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBmaWx0ZXJlZExpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2lkeF0udGFnID09ICdURUFNJykgZmlsdGVyZWRMaXN0LnB1c2goZGF0YVtpZHhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAkcS5yZXNvbHZlKGZpbHRlcmVkTGlzdCk7XG4gICAgfTtcblxuICAgIC8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG4gICAgdm0ubWVyZ2VBc3NldFBlcm1pc3Npb25zID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgdmFyIGRhdGEgPSByZXNwLmRhdGEuZGF0YTtcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIGRhdGEuYXNzZXRzKSB7XG4gICAgICAgICAgICB2YXIgYXNzZXQgPSBkYXRhLmFzc2V0c1tpZHhdO1xuICAgICAgICAgICAgdm0uYWRkQXNzZXRJbmZvKGFzc2V0KTtcbiAgICAgICAgICAgIGZvciAodmFyIHBpZHggaW4gZGF0YS5wZXJtaXNzaW9ucykge1xuICAgICAgICAgICAgICAgIHZhciBwZXJtaXNzaW9uID0gZGF0YS5wZXJtaXNzaW9uc1twaWR4XTtcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQuYXNzZXRwYXRoID09IHBlcm1pc3Npb24uYXNzZXRwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LnBlcm1pc3Npb25zID0gSlNPTi5wYXJzZShwZXJtaXNzaW9uLnBlcm1pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XG4gICAgfTtcblxuICAgIHZtLm1lcmdlVXNlclBlcm1pc3Npb25zID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgLy8gJGxvZy5sb2cocmVzcCk7XG4gICAgICAgIHZhciB1c2Vyc0xpc3QgPSBbXTtcbiAgICAgICAgdmFyIGRhdGEgPSByZXNwWzBdLmRhdGEuZGF0YTtcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIGRhdGEuYXNzZXRzKSB7XG4gICAgICAgICAgICB2YXIgYXNzZXQgPSBkYXRhLmFzc2V0c1tpZHhdO1xuICAgICAgICAgICAgZm9yICh2YXIgcGVybSBpbiBkYXRhLnBlcm1pc3Npb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlcm1pc3Npb24gPSBkYXRhLnBlcm1pc3Npb25zW3Blcm1dO1xuICAgICAgICAgICAgICAgIGlmIChhc3NldC5hc3NldHBhdGggPT0gcGVybWlzc2lvbi5hc3NldHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcnNMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRwYXRoOiBhc3NldC5hc3NldHBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhc3NldC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG5hbWU6IGFzc2V0LnBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRpZDogcGVybWlzc2lvbi5hc3NldGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlkOiBwZXJtaXNzaW9uLnBlcm1pZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUodXNlcnNMaXN0KTtcbiAgICB9O1xuXG4gICAgdm0ubWVyZ2VBc3NldEFzc2lnbm1lbnRzID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgLy8kbG9nLmxvZyhyZXNwKTtcbiAgICAgICAgdmFyIGRhdGEgPSByZXNwLmRhdGEuZGF0YTtcbiAgICAgICAgdmFyIGFzc2V0ID0gZGF0YS5hc3NldFswXTtcbiAgICAgICAgYXNzZXQuaW5mbyA9IGRhdGEuaW5mbztcbiAgICAgICAgYXNzZXQuYXNzZyA9IGRhdGEuYXNzZztcbiAgICAgICAgYXNzZXQuYXNzZ2luZm8gPSBkYXRhLmFzc2dpbmZvO1xuICAgICAgICBhc3NldC5wZXJtaXNzaW9ucyA9IEpTT04ucGFyc2UoZGF0YS5wZXJtaXNzaW9uc1swXS5wZXJtaWQpO1xuICAgICAgICAvLyRsb2cubG9nKGFzc2V0KTtcbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUoYXNzZXQpO1xuICAgIH07XG5cbiAgICB2bS5tZXJnZUZlbmNlSW5mbyA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIHZhciBkYXRhID0gcmVzcC5kYXRhLmRhdGE7XG4gICAgICAgIGZvciAodmFyIGlkeCBpbiBkYXRhLmFzc2V0cykge1xuICAgICAgICAgICAgdmFyIGFzc2V0ID0gZGF0YS5hc3NldHNbaWR4XTtcbiAgICAgICAgICAgIGFzc2V0LmluZm8gPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIHBpZHggaW4gZGF0YS5pbmZvKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBkYXRhLmluZm9bcGlkeF07XG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0LmFzc2V0cGF0aCA9PSBpdGVtLmFzc2V0cGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBhc3NldC5pbmZvLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XG4gICAgfTtcblxuICAgIHZtLm1ha2VBc3NldE1hcCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBhc3NldHMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIGRhdGEuYXNzZXRzKSB7XG4gICAgICAgICAgICB2YXIgYXNzZXQgPSBkYXRhLmFzc2V0c1tpZHhdO1xuICAgICAgICAgICAgdmFyIGtleSA9IGdldE15UGF0aChhc3NldCk7XG4gICAgICAgICAgICB2bS5hZGRBc3NldEluZm8oYXNzZXQpO1xuICAgICAgICAgICAgYXNzZXRzW2tleV0gPSBhc3NldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAkcS5yZXNvbHZlKGFzc2V0cyk7XG4gICAgfTtcblxuICAgIHZtLm1ha2VQZXJtaXNzaW9uTWFwID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBlcm1pc3Npb25zID0ge307XG4gICAgICAgIGZvciAodmFyIGlkeCBpbiBkYXRhLnBlcm1pc3Npb25zKSB7XG4gICAgICAgICAgICB2YXIgcGVybWlzc2lvbiA9IGRhdGEucGVybWlzc2lvbnNbaWR4XTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBnZXRNeVBhdGgocGVybWlzc2lvbik7XG4gICAgICAgICAgICBwZXJtaXNzaW9uc1trZXldID0gcGVybWlzc2lvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHBlcm1pc3Npb25zKTtcbiAgICB9O1xuXG4gICAgdm0ubWVyZ2VNYXAgPSBmdW5jdGlvbiAobWFwMSwgbWFwMikge1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gbWFwMSkge1xuICAgICAgICAgICAgaWYgKGlkeCBpbiBtYXAyKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgamR4IGluIG1hcDJbaWR4XSkge1xuICAgICAgICAgICAgICAgICAgICBtYXAxW2lkeF1bamR4XSA9IG1hcDJbaWR4XVtqZHhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwMTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0TXlQYXRoKGFzc2V0KSB7XG4gICAgICAgIHZhciB0eXBlID0gYXNzZXQuYXNzZXRwYXRoO1xuICAgICAgICBpZiAoIXR5cGUpIHR5cGUgPSBhc3NldC5ncm91cHBhdGg7XG4gICAgICAgIGlmICghdHlwZSkgdHlwZSA9IGFzc2V0LnJvbGVwYXRoO1xuICAgICAgICBpZiAoIXR5cGUpIHR5cGUgPSBhc3NldC51c2VycGF0aDtcbiAgICAgICAgaWYgKCF0eXBlKSB0eXBlID0gYXNzZXQudmVoaWNsZXBhdGg7XG4gICAgICAgIGlmICghdHlwZSkgdHlwZSA9IGFzc2V0LmRldmljZXBhdGg7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cblxuICAgIHZtLnZhbGlkYXRlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICBpZiAocmVzcCAmJiByZXNwLmRhdGEgJiYgcmVzcC5kYXRhLmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHJlc3AuZGF0YS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3ApO1xuICAgIH07XG5cbiAgICB2bS5tYWtlQXNzZXRMaXN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUoZGF0YS5hc3NldHMpO1xuICAgIH07XG5cbiAgICB2bS5tYWtlTWFwT25Bc3NldFBhdGggPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvLyBkaWZmIHdpdGggbWFrZUFzc2V0TWFwIGlzIHRoYXQgdGhpcyBmdW5jdGlvblxuICAgICAgICAvLyBpcyBkaXJlY3RseSByZWFkaW5nIGZyb20gdGhlIGFycmF5XG4gICAgICAgIC8vIHZhciBkYXRhID0gcmVzcC5kYXRhLmRhdGE7XG4gICAgICAgIHZhciBhc3NldHMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBhc3NldCA9IGRhdGFbaWR4XTtcbiAgICAgICAgICAgIC8vIHZtLmFkZEFzc2V0SW5mbyhhc3NldCk7XG4gICAgICAgICAgICBhc3NldHNbYXNzZXQuYXNzZXRwYXRoXSA9IGFzc2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkcS5yZXNvbHZlKGFzc2V0cyk7XG4gICAgfTtcblxuICAgIHZtLnNsYXNoQ291bnQgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gcGF0aCkge1xuICAgICAgICAgICAgaWYgKHBhdGhbaWR4XSA9PSBTTEFTSCkgY291bnQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9O1xuXG4gICAgdm0uc29ydE9uQXNzZXRMZXZlbCA9IGZ1bmN0aW9uIChoYXNoT2JqKSB7XG4gICAgICAgIHZhciBhcnJheU9iaiA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gaGFzaE9iaikge1xuICAgICAgICAgICAgYXJyYXlPYmoucHVzaChoYXNoT2JqW2lkeF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pbmZvLmFzc2V0bGV2ZWwgLSBiLmluZm8uYXNzZXRsZXZlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFycmF5T2JqLnNvcnQoY29tcGFyZSk7XG5cbiAgICAgICAgcmV0dXJuIGFycmF5T2JqO1xuICAgIH07XG5cbiAgICB2bS5zb3J0UGF0aHMgPSBmdW5jdGlvbiAoYXJyYXlPYmopIHtcbiAgICAgICAgZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gdm0uc2xhc2hDb3VudChhKSAtIHZtLnNsYXNoQ291bnQoYik7XG4gICAgICAgIH1cblxuICAgICAgICBhcnJheU9iai5zb3J0KGNvbXBhcmUpO1xuXG4gICAgICAgIHJldHVybiBhcnJheU9iajtcbiAgICB9O1xuXG4gICAgdm0uZ2V0TmV4dFBhdGhJdGVtRW5kID0gZnVuY3Rpb24gKHN0ciwgc3RhcnQpIHtcbiAgICAgICAgdmFyIHNsYXNoID0gJy8nO1xuXG4gICAgICAgIGlmIChzdHIgPT09IG51bGwpIHJldHVybiAtMTtcblxuICAgICAgICBpZiAoc3RhcnQgPT09IG51bGwpIHN0YXJ0ID0gMDtcblxuICAgICAgICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHN0ci5sZW5ndGgpIHJldHVybiAtMTtcblxuICAgICAgICBpZiAoc3RyLmNoYXJBdChzdGFydCkgIT09IHNsYXNoKSByZXR1cm4gLTE7XG5cbiAgICAgICAgaWYgKHN0ci5zdWJzdHIoc3RhcnQsIHN0ci5sZW5ndGgpLmxlbmd0aCA8IDQpIHJldHVybiAtMTtcblxuICAgICAgICB2YXIgZmlyc3RTbGFzaCA9IHN0ci5pbmRleE9mKHNsYXNoLCBzdGFydCArIDEpO1xuICAgICAgICBpZiAoZmlyc3RTbGFzaCAhPSAtMSAmJiBmaXJzdFNsYXNoIDwgc3RyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHZhciBzZWNvbmRTbGFzaCA9IHN0ci5pbmRleE9mKHNsYXNoLCBmaXJzdFNsYXNoICsgMSk7XG4gICAgICAgICAgICBpZiAoc2Vjb25kU2xhc2ggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vjb25kU2xhc2ggLSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcblxuICAgIHZtLmdldE5vZGVzSW5QYXRoID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNVbmRlZmluZWQocGF0aCkpIHJldHVybiBbXTtcblxuICAgICAgICB2YXIgbm9kZXNJblBhdGggPSBbXTtcbiAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSAwO1xuICAgICAgICB2YXIgZW5kSW5kZXggPSAwO1xuICAgICAgICB2YXIgaXRlbVN0YXJ0SW5kZXggPSAwO1xuICAgICAgICAvLyRsb2cubG9nKFwiPT09PT09PT09PT09PT09PT09XCIgKyBwYXRoKTtcbiAgICAgICAgd2hpbGUgKGl0ZW1TdGFydEluZGV4IDwgcGF0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVuZEluZGV4ID0gdm0uZ2V0TmV4dFBhdGhJdGVtRW5kKHBhdGgsIGl0ZW1TdGFydEluZGV4KTtcbiAgICAgICAgICAgIGlmIChlbmRJbmRleCA9PSAtMSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAvLyRsb2cubG9nKFwiZW5kSW5kZXggXCIgKyBlbmRJbmRleCk7XG4gICAgICAgICAgICBpZiAoZW5kSW5kZXggPCBwYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vZGVzSW5QYXRoLnB1c2gocGF0aC5zdWJzdHJpbmcoc3RhcnRJbmRleCwgZW5kSW5kZXggKyAxKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtU3RhcnRJbmRleCA9IGVuZEluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICAvLyRsb2cubG9nKG5vZGVzSW5QYXRoKTtcbiAgICAgICAgcmV0dXJuIG5vZGVzSW5QYXRoO1xuICAgIH07XG5cbiAgICBKU09OLmZsYXR0ZW4gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzZShjdXIsIHByb3ApIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QoY3VyKSAhPT0gY3VyKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0gY3VyO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGN1cikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGN1ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjdXJzZShjdXJbaV0sIHByb3AgKyBcIltcIiArIGkgKyBcIl1cIik7XG4gICAgICAgICAgICAgICAgfWlmIChsID09IDApIHJlc3VsdFtwcm9wXSA9IFtdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNFbXB0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBjdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZWN1cnNlKGN1cltwXSwgcHJvcCA/IHByb3AgKyBcIi5cIiArIHAgOiBwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzRW1wdHkgJiYgcHJvcCkgcmVzdWx0W3Byb3BdID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZWN1cnNlKGRhdGEsIFwiXCIpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBKU09OLmZsYXR0ZW4yID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2UoY3VyLCBwcm9wKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KGN1cikgIT09IGN1cikge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wXSA9IGN1cjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXIpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjdXIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdHlwZW9mKGN1cltpXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNlKGN1cltpXSwgcHJvcCArIFwiW1wiICsgaSArIFwiXVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbcHJvcF0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wXS5wdXNoKGN1cltpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGwgPT0gMCkgcmVzdWx0W3Byb3BdID0gW107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpc0VtcHR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGN1cikge1xuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2UoY3VyW3BdLCBwcm9wID8gcHJvcCArIFwiLlwiICsgcCA6IHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eSAmJiBwcm9wKSByZXN1bHRbcHJvcF0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlY3Vyc2UoZGF0YSwgXCJcIik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIEpTT04udW5mbGF0dGVuID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgICAgaWYgKE9iamVjdChkYXRhKSAhPT0gZGF0YSB8fCBBcnJheS5pc0FycmF5KGRhdGEpKSByZXR1cm4gZGF0YTtcbiAgICAgICAgdmFyIHJlZ2V4ID0gL1xcLj8oW14uXFxbXFxdXSspfFxcWyhcXGQrKVxcXS9nLFxuICAgICAgICAgICAgcmVzdWx0aG9sZGVyID0ge307XG4gICAgICAgIGZvciAodmFyIHAgaW4gZGF0YSkge1xuICAgICAgICAgICAgdmFyIGN1ciA9IHJlc3VsdGhvbGRlcixcbiAgICAgICAgICAgICAgICBwcm9wID0gXCJcIixcbiAgICAgICAgICAgICAgICBtO1xuICAgICAgICAgICAgd2hpbGUgKG0gPSByZWdleC5leGVjKHApKSB7XG4gICAgICAgICAgICAgICAgY3VyID0gY3VyW3Byb3BdIHx8IChjdXJbcHJvcF0gPSBtWzJdID8gW10gOiB7fSk7XG4gICAgICAgICAgICAgICAgcHJvcCA9IG1bMl0gfHwgbVsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cltwcm9wXSA9IGRhdGFbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdGhvbGRlcltcIlwiXSB8fCByZXN1bHRob2xkZXI7XG4gICAgfTtcblxuICAgIHZtLnNldEluZGlyZWN0ID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gYXJyKSB7XG4gICAgICAgICAgICBhcnJbaWR4XS5pbmRpcmVjdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9O1xuXG4gICAgdm0uc3BsaWNlUmVkdW5kYW50T2JqZWN0cyA9IGZ1bmN0aW9uIChhcnIsIGtleSkge1xuXG4gICAgICAgIHZhciBmaWx0ZXJlZEJ5S2V5ID0ge307XG4gICAgICAgIHZhciBmaWx0ZXJlZE1hcCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGlkeCBpbiBhcnIpIHtcbiAgICAgICAgICAgIHZhciB0ZW1wS2V5ID0gYXJyW2lkeF1ba2V5XTtcbiAgICAgICAgICAgIGlmICghKHRlbXBLZXkgaW4gZmlsdGVyZWRCeUtleSkpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEJ5S2V5W3RlbXBLZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWx0ZXJlZEJ5S2V5W3RlbXBLZXldLnB1c2goYXJyW2lkeF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaWR4IGluIGZpbHRlcmVkQnlLZXkpIHtcbiAgICAgICAgICAgIHZhciBpdGVtQXJyYXkgPSBnZXRNeUl0ZW0oZmlsdGVyZWRCeUtleVtpZHhdKTtcbiAgICAgICAgICAgIGZvciAodmFyIGpkeCBpbiBpdGVtQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZE1hcC5wdXNoKGl0ZW1BcnJheVtqZHhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldE15SXRlbShsaXN0KSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gbnVsbDtcbiAgICAgICAgICAgIHZhciB0ZW1wQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIHZhciBpZCA9IG51bGw7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBsaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHZtLmdldEFzc2V0VHlwZTIobGlzdFtpZHhdLmdyb3VwcGF0aCkgPT0gYXBwQ29uc3RhbnRzLkdST1VQKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wSWQgPSB2bS5nZXRBc3NldElkMihsaXN0W2lkeF1ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZCA9PSBudWxsIHx8IHRlbXBJZCA8IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IHRlbXBJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IGxpc3RbaWR4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5pbmRpcmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaXN0W2lkeF0uaW5kaXJlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcEFycmF5LnB1c2gobGlzdFtpZHhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob2JqICE9IG51bGwpIHRlbXBBcnJheS5wdXNoKG9iaik7XG4gICAgICAgICAgICByZXR1cm4gdGVtcEFycmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkTWFwO1xuICAgIH07XG5cbiAgICB2bS5hcnJheURpZmYgPSBmdW5jdGlvbiAoYXJyYXkxLCBhcnJheTIsIGtleSkge1xuXG4gICAgICAgIGlmICghYXJyYXkxIHx8IGFycmF5MSAmJiAhYXJyYXkxLmxlbmd0aCkgcmV0dXJuIGFycmF5MjtcblxuICAgICAgICB2YXIgZmlsdGVyZWQgPSBbXTtcbiAgICAgICAgdmFyIGZvdW5kO1xuXG4gICAgICAgIGZvciAodmFyIGlkeCBpbiBhcnJheTIpIHtcbiAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBqZHggaW4gYXJyYXkxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5MltpZHhdW2tleV0gPT0gYXJyYXkxW2pkeF1ba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmb3VuZCkgZmlsdGVyZWQucHVzaChhcnJheTJbaWR4XSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmlsdGVyZWQ7XG4gICAgfTtcblxuICAgIHZtLnJldHVyblZhbHVlID0gZnVuY3Rpb24gKGJhc2UsIHN0cikge1xuICAgICAgICB2YXIgcGF0aCA9IHN0ci5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgdGVtcFBhdGggPSBbXTtcbiAgICAgICAgdmFyIHBhdGhPYmogPSB7fTtcbiAgICAgICAgdmFyIHRlbXBCYXNlID0gYW5ndWxhci5jb3B5KGJhc2UpO1xuICAgICAgICB2YXIgZm91bmQgPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGlkeCBpbiBwYXRoKSB7XG4gICAgICAgICAgICBwYXRoT2JqW3BhdGhbaWR4XV0gPSBwYXRoW2lkeF0uc3BsaXQoJ1snKTtcbiAgICAgICAgICAgIGZvciAodmFyIGpkeCBpbiBwYXRoT2JqW3BhdGhbaWR4XV0pIHtcbiAgICAgICAgICAgICAgICB0ZW1wUGF0aC5wdXNoKHBhdGhPYmpbcGF0aFtpZHhdXVtqZHhdLnJlcGxhY2UoJ10nLCAnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRlbXBQYXRoLnNoaWZ0KCk7XG4gICAgICAgIGlmICh0ZW1wQmFzZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHRlbXBQYXRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKHRlbXBCYXNlW3RlbXBQYXRoW2lkeF1dKSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wQmFzZSA9IHRlbXBCYXNlW3RlbXBQYXRoW2lkeF1dO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wQmFzZTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvaGVscGVyLnNlcnZpY2UuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIGhlbHBlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IgKCRsb2csICRxLCBhcHBDb25zdGFudHMpIHtcclxuICAgICAgICAnbmdJbmplY3QnXHJcblxyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgJGxvZy5sb2coXCJoZWxwZXJTZXJ2aWNlXCIpO1xyXG5cclxuICAgICAgICB2YXIgU0xBU0ggPSAnLyc7XHJcblxyXG4gICAgICAgIC8vIHNob3VsZCBiZSBzYW1lIGFzIGRlZmluZWQgaW4gYmFja2VuZFxyXG4gICAgICAgIHZtLmFzc2V0VHlwZUlkVG9Bc3NldFR5cGUgPSB7XHJcbiAgICAgICAgICAgIDI6IGFwcENvbnN0YW50cy5HUk9VUCxcclxuICAgICAgICAgICAgMzogYXBwQ29uc3RhbnRzLlVTRVIsXHJcbiAgICAgICAgICAgIDQ6IGFwcENvbnN0YW50cy5ST0xFLFxyXG4gICAgICAgICAgICA1OiBhcHBDb25zdGFudHMuTE9DQUxVU0VSLFxyXG4gICAgICAgICAgICA0NTogYXBwQ29uc3RhbnRzLlZFSElDTEUsXHJcbiAgICAgICAgICAgIDUyOiBhcHBDb25zdGFudHMuREVWSUNFLFxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvLyBnZW5lcmF0aW5nIHJldmVyc2UgbG9va3VwXHJcbiAgICAgICAgdm0uYXNzZXRUeXBlVG9Bc3NldFR5cGVJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFzc2V0VHlwZVRvQXNzZXRUeXBlSWQgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmFzc2V0VHlwZUlkVG9Bc3NldFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0VHlwZVRvQXNzZXRUeXBlSWRbdm0uYXNzZXRUeXBlSWRUb0Fzc2V0VHlwZVtpZHhdXSA9IGlkeDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXNzZXRUeXBlVG9Bc3NldFR5cGVJZDtcclxuICAgICAgICB9KCk7XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRBc3NldElkMiA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXRoID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBwYXRoLnNwbGl0KFNMQVNIKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRva2Vucy5sZW5ndGggPiAyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMl07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0UGFyZW50UGF0aDIgPSBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgICAgICBpZiAocGF0aCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2F2ZWRpZHggPSAwO1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IobGV0IGlkeCA9IHBhdGgubGVuZ3RoIC0gMTsgaWR4ID49IDA7IGlkeC0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZihwYXRoW2lkeF0gPT0gU0xBU0gpXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjb3VudCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZWRpZHggPSBpZHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY291bnQgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihjb3VudCA9PSA1KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGguc3Vic3RyaW5nKDAsIHNhdmVkaWR4KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRQYXJlbnRJZDIgPSBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgICAgICBpZihwYXRoID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRBc3NldElkMih2bS5nZXRQYXJlbnRQYXRoMihwYXRoKSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEFzc2V0VHlwZUlkMiA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgICAgIGlmKHBhdGggPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRva2VucyA9IHBhdGguc3BsaXQoU0xBU0gpO1xyXG5cclxuICAgICAgICAgICAgaWYodG9rZW5zLmxlbmd0aCA+IDMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAzXTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRBc3NldFR5cGUyID0gZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgICAgICAgICAgaWYocGF0aCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdm0uYXNzZXRUeXBlSWRUb0Fzc2V0VHlwZVt2bS5nZXRBc3NldFR5cGVJZDIocGF0aCldO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRBc3NldExldmVsMiA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXRoID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKChwYXRoLnNwbGl0KFNMQVNIKS5sZW5ndGggLSAxKSAvIDIpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5hZGRBc3NldEluZm8gPSBmdW5jdGlvbiAoYXNzZXQpIHtcclxuICAgICAgICAgICAgaWYgKGFzc2V0ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGFzc2V0LmFzc2V0aWQgPSB2bS5nZXRBc3NldElkMihhc3NldC5hc3NldHBhdGgpO1xyXG4gICAgICAgICAgICBhc3NldC5wZ3JvdXBwYXRoID0gdm0uZ2V0UGFyZW50UGF0aDIoYXNzZXQuYXNzZXRwYXRoKTtcclxuICAgICAgICAgICAgYXNzZXQucGdyb3VwaWQgPSB2bS5nZXRQYXJlbnRJZDIoYXNzZXQuYXNzZXRwYXRoKTtcclxuICAgICAgICAgICAgYXNzZXQudWlfYXNzZXRfdHlwZSA9IHZtLmdldEFzc2V0VHlwZTIoYXNzZXQuYXNzZXRwYXRoKTtcclxuICAgICAgICAgICAgYXNzZXQuYXNzZXRsZXZlbCA9IHZtLmdldEFzc2V0TGV2ZWwyKGFzc2V0LmFzc2V0cGF0aCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmZpbHRlckFzc2V0R3JvdXBzID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGlkeCBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhW2lkeF0udGFnID09ICdURUFNJylcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZExpc3QucHVzaChkYXRhW2lkeF0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShmaWx0ZXJlZExpc3QpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG4gICAgICAgIHZtLm1lcmdlQXNzZXRQZXJtaXNzaW9ucyA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcC5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBkYXRhLmFzc2V0cykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFzc2V0ID0gZGF0YS5hc3NldHNbaWR4XTtcclxuICAgICAgICAgICAgICAgIHZtLmFkZEFzc2V0SW5mbyhhc3NldCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwaWR4IGluIGRhdGEucGVybWlzc2lvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGVybWlzc2lvbiA9IGRhdGEucGVybWlzc2lvbnNbcGlkeF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzc2V0LmFzc2V0cGF0aCA9PSBwZXJtaXNzaW9uLmFzc2V0cGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5wZXJtaXNzaW9ucyA9IEpTT04ucGFyc2UocGVybWlzc2lvbi5wZXJtaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0ubWVyZ2VVc2VyUGVybWlzc2lvbnMgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhyZXNwKTtcclxuICAgICAgICAgICAgdmFyIHVzZXJzTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BbMF0uZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gZGF0YS5hc3NldHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhc3NldCA9IGRhdGEuYXNzZXRzW2lkeF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwZXJtIGluIGRhdGEucGVybWlzc2lvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGVybWlzc2lvbiA9IGRhdGEucGVybWlzc2lvbnNbcGVybV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzc2V0LmFzc2V0cGF0aCA9PSBwZXJtaXNzaW9uLmFzc2V0cGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHBhdGg6IGFzc2V0LmFzc2V0cGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFzc2V0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbmFtZTogYXNzZXQucG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldGlkOiBwZXJtaXNzaW9uLmFzc2V0aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaWQ6IHBlcm1pc3Npb24ucGVybWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZSh1c2Vyc0xpc3QpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5tZXJnZUFzc2V0QXNzaWdubWVudHMgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAvLyRsb2cubG9nKHJlc3ApO1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3AuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICB2YXIgYXNzZXQgPSBkYXRhLmFzc2V0WzBdO1xyXG4gICAgICAgICAgICBhc3NldC5pbmZvID0gZGF0YS5pbmZvO1xyXG4gICAgICAgICAgICBhc3NldC5hc3NnID0gZGF0YS5hc3NnO1xyXG4gICAgICAgICAgICBhc3NldC5hc3NnaW5mbyA9IGRhdGEuYXNzZ2luZm87XHJcbiAgICAgICAgICAgIGFzc2V0LnBlcm1pc3Npb25zID0gSlNPTi5wYXJzZShkYXRhLnBlcm1pc3Npb25zWzBdLnBlcm1pZCk7XHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2coYXNzZXQpO1xyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShhc3NldCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLm1lcmdlRmVuY2VJbmZvID0gZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIGRhdGEuYXNzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXNzZXQgPSBkYXRhLmFzc2V0c1tpZHhdO1xyXG4gICAgICAgICAgICAgICAgYXNzZXQuaW5mbyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcGlkeCBpbiBkYXRhLmluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGRhdGEuaW5mb1twaWR4XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXQuYXNzZXRwYXRoID09IGl0ZW0uYXNzZXRwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LmluZm8ucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHJlc3ApO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5tYWtlQXNzZXRNYXAgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgYXNzZXRzID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBkYXRhLmFzc2V0cykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFzc2V0ID0gZGF0YS5hc3NldHNbaWR4XTtcclxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBnZXRNeVBhdGgoYXNzZXQpO1xyXG4gICAgICAgICAgICAgICAgdm0uYWRkQXNzZXRJbmZvKGFzc2V0KTtcclxuICAgICAgICAgICAgICAgIGFzc2V0c1trZXldID0gYXNzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKGFzc2V0cyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0ubWFrZVBlcm1pc3Npb25NYXAgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgcGVybWlzc2lvbnMgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIGRhdGEucGVybWlzc2lvbnMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwZXJtaXNzaW9uID0gZGF0YS5wZXJtaXNzaW9uc1tpZHhdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGdldE15UGF0aChwZXJtaXNzaW9uKTtcclxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zW2tleV0gPSBwZXJtaXNzaW9uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShwZXJtaXNzaW9ucyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0ubWVyZ2VNYXAgPSBmdW5jdGlvbihtYXAxLCBtYXAyKXtcclxuICAgICAgICAgICAgZm9yKHZhciBpZHggaW4gbWFwMSl7XHJcbiAgICAgICAgICAgICAgICBpZihpZHggaW4gbWFwMil7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBqZHggaW4gbWFwMltpZHhdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwMVtpZHhdW2pkeF0gPSBtYXAyW2lkeF1bamR4XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1hcDE7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0TXlQYXRoKGFzc2V0KSB7XHJcbiAgICAgICAgICAgIHZhciB0eXBlID0gYXNzZXQuYXNzZXRwYXRoO1xyXG4gICAgICAgICAgICBpZiAoIXR5cGUpIHR5cGUgPSBhc3NldC5ncm91cHBhdGg7XHJcbiAgICAgICAgICAgIGlmICghdHlwZSkgdHlwZSA9IGFzc2V0LnJvbGVwYXRoO1xyXG4gICAgICAgICAgICBpZiAoIXR5cGUpIHR5cGUgPSBhc3NldC51c2VycGF0aDtcclxuICAgICAgICAgICAgaWYgKCF0eXBlKSB0eXBlID0gYXNzZXQudmVoaWNsZXBhdGg7XHJcbiAgICAgICAgICAgIGlmICghdHlwZSkgdHlwZSA9IGFzc2V0LmRldmljZXBhdGg7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHZtLnZhbGlkYXRlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICBpZiAocmVzcCAmJiByZXNwLmRhdGEgJiYgcmVzcC5kYXRhLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHJlc3AuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3ApO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5tYWtlQXNzZXRMaXN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUoZGF0YS5hc3NldHMpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5tYWtlTWFwT25Bc3NldFBhdGggPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBkaWZmIHdpdGggbWFrZUFzc2V0TWFwIGlzIHRoYXQgdGhpcyBmdW5jdGlvblxyXG4gICAgICAgICAgICAvLyBpcyBkaXJlY3RseSByZWFkaW5nIGZyb20gdGhlIGFycmF5XHJcbiAgICAgICAgICAgIC8vIHZhciBkYXRhID0gcmVzcC5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgIHZhciBhc3NldHMgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhc3NldCA9IGRhdGFbaWR4XTtcclxuICAgICAgICAgICAgICAgIC8vIHZtLmFkZEFzc2V0SW5mbyhhc3NldCk7XHJcbiAgICAgICAgICAgICAgICBhc3NldHNbYXNzZXQuYXNzZXRwYXRoXSA9IGFzc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKGFzc2V0cyk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLnNsYXNoQ291bnQgPSBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IobGV0IGlkeCBpbiBwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICBpZihwYXRoW2lkeF0gPT0gU0xBU0gpXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5zb3J0T25Bc3NldExldmVsID0gZnVuY3Rpb24gKGhhc2hPYmopIHtcclxuICAgICAgICAgICAgdmFyIGFycmF5T2JqID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBoYXNoT2JqKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheU9iai5wdXNoKGhhc2hPYmpbaWR4XSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5mby5hc3NldGxldmVsIC0gYi5pbmZvLmFzc2V0bGV2ZWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFycmF5T2JqLnNvcnQoY29tcGFyZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlPYmo7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLnNvcnRQYXRocyA9IGZ1bmN0aW9uIChhcnJheU9iaikge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2bS5zbGFzaENvdW50KGEpIC0gdm0uc2xhc2hDb3VudChiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXJyYXlPYmouc29ydChjb21wYXJlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheU9iajtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TmV4dFBhdGhJdGVtRW5kID0gZnVuY3Rpb24gKHN0ciwgc3RhcnQpIHtcclxuICAgICAgICAgICAgdmFyIHNsYXNoID0gJy8nO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0ciA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydCA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gc3RyLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdHIuY2hhckF0KHN0YXJ0KSAhPT0gc2xhc2gpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RyLnN1YnN0cihzdGFydCwgc3RyLmxlbmd0aCkubGVuZ3RoIDwgNClcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmaXJzdFNsYXNoID0gc3RyLmluZGV4T2Yoc2xhc2gsIHN0YXJ0ICsgMSk7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdFNsYXNoICE9IC0xICYmIGZpcnN0U2xhc2ggPCBzdHIubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY29uZFNsYXNoID0gc3RyLmluZGV4T2Yoc2xhc2gsIGZpcnN0U2xhc2ggKyAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWNvbmRTbGFzaCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWNvbmRTbGFzaCAtIDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHIubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXROb2Rlc0luUGF0aCA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzVW5kZWZpbmVkKHBhdGgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5vZGVzSW5QYXRoID0gW107XHJcbiAgICAgICAgICAgIHZhciBzdGFydEluZGV4ID0gMDtcclxuICAgICAgICAgICAgdmFyIGVuZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgdmFyIGl0ZW1TdGFydEluZGV4ID0gMDtcclxuICAgICAgICAgICAgLy8kbG9nLmxvZyhcIj09PT09PT09PT09PT09PT09PVwiICsgcGF0aCk7XHJcbiAgICAgICAgICAgIHdoaWxlIChpdGVtU3RhcnRJbmRleCA8IHBhdGgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBlbmRJbmRleCA9IHZtLmdldE5leHRQYXRoSXRlbUVuZChwYXRoLCBpdGVtU3RhcnRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kSW5kZXggPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAvLyRsb2cubG9nKFwiZW5kSW5kZXggXCIgKyBlbmRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kSW5kZXggPCBwYXRoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVzSW5QYXRoLnB1c2gocGF0aC5zdWJzdHJpbmcoc3RhcnRJbmRleCwgZW5kSW5kZXggKyAxKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpdGVtU3RhcnRJbmRleCA9IGVuZEluZGV4ICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyRsb2cubG9nKG5vZGVzSW5QYXRoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGVzSW5QYXRoO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICBKU09OLmZsYXR0ZW4gPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNlKGN1ciwgcHJvcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdChjdXIpICE9PSBjdXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbcHJvcF0gPSBjdXI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY3VyLmxlbmd0aDsgaSA8IGw7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzZShjdXJbaV0sIHByb3AgKyBcIltcIiArIGkgKyBcIl1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwgPT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0gW107XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0VtcHR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGN1cikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VtcHR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2UoY3VyW3BdLCBwcm9wID8gcHJvcCArIFwiLlwiICsgcCA6IHApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eSAmJiBwcm9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbcHJvcF0gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVjdXJzZShkYXRhLCBcIlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgSlNPTi5mbGF0dGVuMiA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2UoY3VyLCBwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0KGN1cikgIT09IGN1cikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wXSA9IGN1cjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjdXIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VyW2ldID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzZShjdXJbaV0sIHByb3AgKyBcIltcIiArIGkgKyBcIl1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbcHJvcF0ucHVzaChjdXJbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNFbXB0eSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBjdXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNFbXB0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNlKGN1cltwXSwgcHJvcCA/IHByb3AgKyBcIi5cIiArIHAgOiBwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRW1wdHkgJiYgcHJvcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlY3Vyc2UoZGF0YSwgXCJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIEpTT04udW5mbGF0dGVuID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3QoZGF0YSkgIT09IGRhdGEgfHwgQXJyYXkuaXNBcnJheShkYXRhKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB2YXIgcmVnZXggPSAvXFwuPyhbXi5cXFtcXF1dKyl8XFxbKFxcZCspXFxdL2csXHJcbiAgICAgICAgICAgICAgICByZXN1bHRob2xkZXIgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VyID0gcmVzdWx0aG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3AgPSBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG07XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobSA9IHJlZ2V4LmV4ZWMocCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXIgPSBjdXJbcHJvcF0gfHwgKGN1cltwcm9wXSA9IChtWzJdID8gW10gOiB7fSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3AgPSBtWzJdIHx8IG1bMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJbcHJvcF0gPSBkYXRhW3BdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRob2xkZXJbXCJcIl0gfHwgcmVzdWx0aG9sZGVyO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5zZXRJbmRpcmVjdCA9IGZ1bmN0aW9uIChhcnIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIGFycikge1xyXG4gICAgICAgICAgICAgICAgYXJyW2lkeF0uaW5kaXJlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLnNwbGljZVJlZHVuZGFudE9iamVjdHMgPSBmdW5jdGlvbiAoYXJyLCBrZXkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZEJ5S2V5ID0ge307XHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZE1hcCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIGFycikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBLZXkgPSBhcnJbaWR4XVtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEodGVtcEtleSBpbiBmaWx0ZXJlZEJ5S2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkQnlLZXlbdGVtcEtleV0gPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkQnlLZXlbdGVtcEtleV0ucHVzaChhcnJbaWR4XSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBmaWx0ZXJlZEJ5S2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbUFycmF5ID0gZ2V0TXlJdGVtKGZpbHRlcmVkQnlLZXlbaWR4XSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqZHggaW4gaXRlbUFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRNYXAucHVzaChpdGVtQXJyYXlbamR4XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE15SXRlbShsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0uZ2V0QXNzZXRUeXBlMihsaXN0W2lkeF0uZ3JvdXBwYXRoKSA9PSBhcHBDb25zdGFudHMuR1JPVVApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBJZCA9IHZtLmdldEFzc2V0SWQyKGxpc3RbaWR4XVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09IG51bGwgfHwgdGVtcElkIDwgaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gdGVtcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0gbGlzdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmluZGlyZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RbaWR4XS5pbmRpcmVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wQXJyYXkucHVzaChsaXN0W2lkeF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9iaiAhPSBudWxsKSB0ZW1wQXJyYXkucHVzaChvYmopO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBBcnJheTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkTWFwO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uYXJyYXlEaWZmID0gZnVuY3Rpb24gKGFycmF5MSwgYXJyYXkyLCBrZXkpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYXJyYXkxIHx8IGFycmF5MSAmJiAhYXJyYXkxLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTI7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmlsdGVyZWQgPSBbXTtcclxuICAgICAgICAgICAgdmFyIGZvdW5kO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaWR4IGluIGFycmF5Mikge1xyXG4gICAgICAgICAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGpkeCBpbiBhcnJheTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXkyW2lkeF1ba2V5XSA9PSBhcnJheTFbamR4XVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSBmaWx0ZXJlZC5wdXNoKGFycmF5MltpZHhdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5yZXR1cm5WYWx1ZSA9IGZ1bmN0aW9uKGJhc2UsIHN0cikge1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9IHN0ci5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICB2YXIgdGVtcFBhdGggPSBbXTtcclxuICAgICAgICAgICAgdmFyIHBhdGhPYmogPSB7fTtcclxuICAgICAgICAgICAgdmFyIHRlbXBCYXNlID0gYW5ndWxhci5jb3B5KGJhc2UpO1xyXG4gICAgICAgICAgICB2YXIgZm91bmQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBpZHggaW4gcGF0aCl7XHJcbiAgICAgICAgICAgICAgICBwYXRoT2JqW3BhdGhbaWR4XV0gPSBwYXRoW2lkeF0uc3BsaXQoJ1snKVxyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBqZHggaW4gcGF0aE9ialtwYXRoW2lkeF1dKXtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wUGF0aC5wdXNoKHBhdGhPYmpbcGF0aFtpZHhdXVtqZHhdLnJlcGxhY2UoJ10nLCcnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGVtcFBhdGguc2hpZnQoKTtcclxuICAgICAgICAgICAgaWYodGVtcEJhc2Upe1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpZHggaW4gdGVtcFBhdGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHRlbXBCYXNlW3RlbXBQYXRoW2lkeF1dKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBCYXNlID0gdGVtcEJhc2VbdGVtcFBhdGhbaWR4XV07XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighZm91bmQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBCYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvaGVscGVyLnNlcnZpY2UuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8xMS8yMDE3LlxyXG4gKi9cblxudmFyIHRyZWVEYXRhU2VydmljZSA9IGV4cG9ydHMudHJlZURhdGFTZXJ2aWNlID0gZnVuY3Rpb24gdHJlZURhdGFTZXJ2aWNlKCRsb2csICRxLCBoZWxwZXJTZXJ2aWNlLCBncm91cEFQSVNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIHRyZWVEYXRhU2VydmljZSk7XG5cbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgICRsb2cubG9nKFwidHJlZURhdGFTZXJ2aWNlXCIpO1xuXG4gICAgdm0uY29sbGFwc2VkU3RhdHVzID0gZmFsc2U7XG4gICAgdm0uZ2xvYmFsR2VuZXJpY1RyZWUgPSBudWxsO1xuXG4gICAgdm0uZ2V0R2VuZXJpY1RyZWVJbmRleCA9IGZ1bmN0aW9uIChnZW5lcmljVHJlZSwgYXNzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIGdlbmVyaWNUcmVlKSB7XG4gICAgICAgICAgICBpZiAoZ2VuZXJpY1RyZWVbaWR4XS5pbmZvLmFzc2V0cGF0aCA9PSBhc3NldC5hc3NldHBhdGgpIHJldHVybiBpZHg7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0uYnVpbGRNYW5hZ2VtZW50VHJlZSA9IGZ1bmN0aW9uIChnZW5lcmljVHJlZSwga2V5KSB7XG4gICAgICAgIC8vJGxvZy5sb2coXCJidWlsZE1hbmFnZW1lbnRUcmVlIFwiICsga2V5KTtcblxuICAgICAgICBpZiAoZ2VuZXJpY1RyZWUgPT09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGlmICghKCd2aXNpdGVkJyBpbiBnZW5lcmljVHJlZVtrZXldKSkge1xuICAgICAgICAgICAgZ2VuZXJpY1RyZWVba2V5XS52aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChnZW5lcmljVHJlZVtrZXldLnZpc2l0ZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8kbG9nLmxvZyhcIkFscmVhZHkgdmlzaXRlZDogXCIgKyBrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ3ROb2RlID0gZ2VuZXJpY1RyZWVba2V5XTtcbiAgICAgICAgZ3ROb2RlLnZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vJGxvZy5sb2coZ3ROb2RlKTtcbiAgICAgICAgdmFyIHV0Tm9kZSA9IHt9O1xuICAgICAgICB1dE5vZGUuaWQgPSBnZW5lcmljVHJlZVtrZXldLmluZm8uYXNzZXRwYXRoO1xuICAgICAgICB1dE5vZGUudGl0bGUgPSBndE5vZGUuaW5mby5uYW1lO1xuICAgICAgICB1dE5vZGUuaW5mbyA9IGd0Tm9kZS5pbmZvO1xuICAgICAgICB1dE5vZGUuaXRlbXMgPSBbXTtcbiAgICAgICAgdXROb2RlLmNoZWNrU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHV0Tm9kZS5jb2xsYXBzZWQgPSB2bS5jb2xsYXBzZWRTdGF0dXM7XG5cbiAgICAgICAgdmFyIHJlc3VsdE5vZGUgPSBudWxsO1xuICAgICAgICB2YXIgY2hpbGQgPSBudWxsO1xuICAgICAgICBpZiAoZ3ROb2RlLmNoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gZ3ROb2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQgPSBndE5vZGUuY2hpbGRyZW5baWR4XTtcbiAgICAgICAgICAgICAgICAvLyRsb2cubG9nKFwicGFyZW50OiBcIiArIGtleSArIFwiLCBjaGlsZCA9IFwiICsgaWR4ICsgXCIsIHR5cGUgPSBcIiArIGNoaWxkLnVpX2Fzc2V0X3R5cGUpO1xuICAgICAgICAgICAgICAgIHJlc3VsdE5vZGUgPSB2bS5idWlsZE1hbmFnZW1lbnRUcmVlKGdlbmVyaWNUcmVlLCB2bS5nZXRHZW5lcmljVHJlZUluZGV4KGdlbmVyaWNUcmVlLCBjaGlsZCkpO1xuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2cocmVzdWx0Tm9kZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB1dE5vZGUuaXRlbXMucHVzaChyZXN1bHROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXROb2RlO1xuICAgIH07XG5cbiAgICB2bS5jcmVhdGVNYW5hZ2VtZW50VHJlZSA9IGZ1bmN0aW9uICh0ZW1wVHJlZSkge1xuICAgICAgICAvLyAkbG9nLmxvZyhcImdlbmVyaWNUcmVlXCIsIGdlbmVyaWNUcmVlKTtcbiAgICAgICAgdmFyIGdlbmVyaWNUcmVlID0gdGVtcFRyZWVbMF07XG4gICAgICAgIHZhciBncm91cFRyZWUgPSB0ZW1wVHJlZVsxXTtcblxuICAgICAgICB2YXIgdWlUcmVlID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBnZW5lcmljVHJlZSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdE5vZGUgPSB2bS5idWlsZE1hbmFnZW1lbnRUcmVlKGdlbmVyaWNUcmVlLCBrZXkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB1aVRyZWUucHVzaChyZXN1bHROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2bS5nbG9iYWxHZW5lcmljVHJlZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB2bS5nbG9iYWxHZW5lcmljVHJlZSA9IHVpVHJlZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2bS5nbG9iYWxHZW5lcmljVHJlZVswXSkgdm0uZ2xvYmFsR2VuZXJpY1RyZWVbMF0uY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHZtLmdsb2JhbEdlbmVyaWNUcmVlWzBdKSB2bS5nbG9iYWxHZW5lcmljVHJlZVswXS5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgLy8gJGxvZy5sb2coXCJjcmVhdGVNYW5hZ2VtZW50VHJlZVwiLCB1aVRyZWUpO1xuICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShbdWlUcmVlLCBncm91cFRyZWVdKTtcbiAgICB9O1xuXG4gICAgdm0uY3JlYXRlR2VuZXJpY1RyZWUgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAvLyAkbG9nLmxvZyhcImNyZWF0ZUdlbmVyaWNUcmVlXCIsIHJlc3ApO1xuICAgICAgICB2YXIgZ3JvdXBzID0gcmVzcFswXTtcbiAgICAgICAgdmFyIGdyb3VwVHJlZSA9IHt9O1xuICAgICAgICAvLyAkbG9nLmxvZyhcIm15Z3JvdXBzXCIsIGdyb3Vwcyk7XG5cbiAgICAgICAgZm9yICh2YXIgcmlkeCA9IDA7IHJpZHggPCByZXNwLmxlbmd0aDsgcmlkeCsrKSB7XG4gICAgICAgICAgICB2YXIgYXNzZXRzID0gcmVzcFtyaWR4XTtcbiAgICAgICAgICAgIC8vYWRkIGFsbCB0aGUgYXNzZXQncyBhbGxvd2VkIHBhcmVudCBoaWVyYXJjaHkgdG8gZ3JvdXBUcmVlXG4gICAgICAgICAgICBmb3IgKHZhciBhaWR4IGluIGFzc2V0cykge1xuICAgICAgICAgICAgICAgIHZhciBhc3NldCA9IGFzc2V0c1thaWR4XTtcbiAgICAgICAgICAgICAgICAvLyRsb2cubG9nKGFzc2V0KTtcbiAgICAgICAgICAgICAgICB2YXIgYXNzZXRwYXRoID0gYXNzZXQuYXNzZXRwYXRoO1xuICAgICAgICAgICAgICAgIHZhciBwZ3JvdXBwYXRoID0gYXNzZXQucGdyb3VwcGF0aDtcblxuICAgICAgICAgICAgICAgIGlmICghKGFzc2V0cGF0aCBpbiBncm91cFRyZWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVthc3NldHBhdGhdID0ge307XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVthc3NldHBhdGhdLmluZm8gPSBhc3NldDtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBUcmVlW2Fzc2V0cGF0aF0uY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyBncm91cFRyZWVbYXNzZXRwYXRoXS5jb2xsYXBzZWQgPSB2bS5jb2xsYXBzZWRTdGF0dXM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBncm91cHBhdGggaW4gZ3JvdXBzICYmIHBncm91cHBhdGggIT0gYXNzZXRwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwZ3JvdXBwYXRoIGluIGdyb3VwVHJlZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbcGdyb3VwcGF0aF0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbcGdyb3VwcGF0aF0uaW5mbyA9IGdyb3Vwc1twZ3JvdXBwYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbcGdyb3VwcGF0aF0uY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbcGdyb3VwcGF0aF0uY2hpbGRyZW5bYXNzZXRwYXRoXSA9IGFzc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdyb3VwVHJlZVtwZ3JvdXBwYXRoXS5jb2xsYXBzZWQgPSB2bS5jb2xsYXBzZWRTdGF0dXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cFRyZWVbcGdyb3VwcGF0aF0uY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbcGdyb3VwcGF0aF0uY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBUcmVlW3Bncm91cHBhdGhdLmNoaWxkcmVuW2Fzc2V0cGF0aF0gPSBhc3NldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlR2VuZXJpY1RyZWVcIiwgZ3JvdXBUcmVlKTtcbiAgICAgICAgdmFyIGFzc2V0QXJyYXkgPSBoZWxwZXJTZXJ2aWNlLnNvcnRPbkFzc2V0TGV2ZWwoZ3JvdXBUcmVlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVHZW5lcmljVHJlZVwiLCBhc3NldEFycmF5KTtcbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUoW2Fzc2V0QXJyYXksIGdyb3VwVHJlZV0pO1xuICAgIH07XG5cbiAgICB2bS5oYW5kbGVTdWNjZXNzID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZSBzdWNjZXNzJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcbiAgICB9O1xuXG4gICAgdm0uaGFuZGxlRmFpbHVyZSA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGUgZmFpbHVyZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZXNwKTtcbiAgICB9O1xuXG4gICAgdm0uZ2V0TWFuYWdlbWVudFRyZWUgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICByZXR1cm4gZ3JvdXBBUElTZXJ2aWNlLmdldE15RGlyZWN0QXNzZXRzTWFwKGJvZHkpLnRoZW4odm0uY3JlYXRlR2VuZXJpY1RyZWUsIHZtLmhhbmRsZUZhaWx1cmUpLnRoZW4odm0uY3JlYXRlTWFuYWdlbWVudFRyZWUsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvdHJlZWRhdGEuc2VydmljZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMTEvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgdHJlZURhdGFTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigkbG9nLCAkcSwgaGVscGVyU2VydmljZSwgZ3JvdXBBUElTZXJ2aWNlKSB7XHJcbiAgICAgICAgJ25nSW5qZWN0J1xyXG5cclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgICAgICRsb2cubG9nKFwidHJlZURhdGFTZXJ2aWNlXCIpO1xyXG5cclxuICAgICAgICB2bS5jb2xsYXBzZWRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB2bS5nbG9iYWxHZW5lcmljVHJlZSA9IG51bGw7XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRHZW5lcmljVHJlZUluZGV4ID0gZnVuY3Rpb24gKGdlbmVyaWNUcmVlLCBhc3NldCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gZ2VuZXJpY1RyZWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChnZW5lcmljVHJlZVtpZHhdLmluZm8uYXNzZXRwYXRoID09IGFzc2V0LmFzc2V0cGF0aClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWR4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmJ1aWxkTWFuYWdlbWVudFRyZWUgPSBmdW5jdGlvbiAoZ2VuZXJpY1RyZWUsIGtleSkge1xyXG4gICAgICAgICAgICAvLyRsb2cubG9nKFwiYnVpbGRNYW5hZ2VtZW50VHJlZSBcIiArIGtleSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2VuZXJpY1RyZWUgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICghKCd2aXNpdGVkJyBpbiBnZW5lcmljVHJlZVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgZ2VuZXJpY1RyZWVba2V5XS52aXNpdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChnZW5lcmljVHJlZVtrZXldLnZpc2l0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8kbG9nLmxvZyhcIkFscmVhZHkgdmlzaXRlZDogXCIgKyBrZXkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBndE5vZGUgPSBnZW5lcmljVHJlZVtrZXldO1xyXG4gICAgICAgICAgICBndE5vZGUudmlzaXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyRsb2cubG9nKGd0Tm9kZSk7XHJcbiAgICAgICAgICAgIHZhciB1dE5vZGUgPSB7fTtcclxuICAgICAgICAgICAgdXROb2RlLmlkID0gZ2VuZXJpY1RyZWVba2V5XS5pbmZvLmFzc2V0cGF0aDtcclxuICAgICAgICAgICAgdXROb2RlLnRpdGxlID0gZ3ROb2RlLmluZm8ubmFtZTtcclxuICAgICAgICAgICAgdXROb2RlLmluZm8gPSBndE5vZGUuaW5mbztcclxuICAgICAgICAgICAgdXROb2RlLml0ZW1zID0gW107XHJcbiAgICAgICAgICAgIHV0Tm9kZS5jaGVja1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB1dE5vZGUuY29sbGFwc2VkID0gdm0uY29sbGFwc2VkU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlc3VsdE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoZ3ROb2RlLmNoaWxkcmVuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gZ3ROb2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSBndE5vZGUuY2hpbGRyZW5baWR4XTtcclxuICAgICAgICAgICAgICAgICAgICAvLyRsb2cubG9nKFwicGFyZW50OiBcIiArIGtleSArIFwiLCBjaGlsZCA9IFwiICsgaWR4ICsgXCIsIHR5cGUgPSBcIiArIGNoaWxkLnVpX2Fzc2V0X3R5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdE5vZGUgPSB2bS5idWlsZE1hbmFnZW1lbnRUcmVlKGdlbmVyaWNUcmVlLCB2bS5nZXRHZW5lcmljVHJlZUluZGV4KGdlbmVyaWNUcmVlLCBjaGlsZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vJGxvZy5sb2cocmVzdWx0Tm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHROb2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0Tm9kZS5pdGVtcy5wdXNoKHJlc3VsdE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1dE5vZGU7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmNyZWF0ZU1hbmFnZW1lbnRUcmVlID0gZnVuY3Rpb24gKHRlbXBUcmVlKSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2VuZXJpY1RyZWVcIiwgZ2VuZXJpY1RyZWUpO1xyXG4gICAgICAgICAgICB2YXIgZ2VuZXJpY1RyZWUgPSB0ZW1wVHJlZVswXTtcclxuICAgICAgICAgICAgdmFyIGdyb3VwVHJlZSA9IHRlbXBUcmVlWzFdO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVpVHJlZSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZ2VuZXJpY1RyZWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHROb2RlID0gdm0uYnVpbGRNYW5hZ2VtZW50VHJlZShnZW5lcmljVHJlZSwga2V5KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHROb2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdWlUcmVlLnB1c2gocmVzdWx0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHZtLmdsb2JhbEdlbmVyaWNUcmVlID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdm0uZ2xvYmFsR2VuZXJpY1RyZWUgID0gdWlUcmVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih2bS5nbG9iYWxHZW5lcmljVHJlZVswXSkgdm0uZ2xvYmFsR2VuZXJpY1RyZWVbMF0uY29sbGFwc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYodm0uZ2xvYmFsR2VuZXJpY1RyZWVbMF0pIHZtLmdsb2JhbEdlbmVyaWNUcmVlWzBdLmxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiY3JlYXRlTWFuYWdlbWVudFRyZWVcIiwgdWlUcmVlKTtcclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUoW3VpVHJlZSwgZ3JvdXBUcmVlXSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgdm0uY3JlYXRlR2VuZXJpY1RyZWUgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImNyZWF0ZUdlbmVyaWNUcmVlXCIsIHJlc3ApO1xyXG4gICAgICAgICAgICB2YXIgZ3JvdXBzID0gcmVzcFswXTtcclxuICAgICAgICAgICAgdmFyIGdyb3VwVHJlZSA9IHt9O1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcIm15Z3JvdXBzXCIsIGdyb3Vwcyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciByaWR4ID0gMDsgcmlkeCA8IHJlc3AubGVuZ3RoOyByaWR4KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBhc3NldHMgPSByZXNwW3JpZHhdO1xyXG4gICAgICAgICAgICAgICAgLy9hZGQgYWxsIHRoZSBhc3NldCdzIGFsbG93ZWQgcGFyZW50IGhpZXJhcmNoeSB0byBncm91cFRyZWVcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGFpZHggaW4gYXNzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFzc2V0ID0gYXNzZXRzW2FpZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coYXNzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhc3NldHBhdGggPSBhc3NldC5hc3NldHBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBncm91cHBhdGggPSBhc3NldC5wZ3JvdXBwYXRoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShhc3NldHBhdGggaW4gZ3JvdXBUcmVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbYXNzZXRwYXRoXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbYXNzZXRwYXRoXS5pbmZvID0gYXNzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVthc3NldHBhdGhdLmNoaWxkcmVuID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ3JvdXBUcmVlW2Fzc2V0cGF0aF0uY29sbGFwc2VkID0gdm0uY29sbGFwc2VkU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBncm91cHBhdGggaW4gZ3JvdXBzICYmIHBncm91cHBhdGggIT0gYXNzZXRwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShwZ3JvdXBwYXRoIGluIGdyb3VwVHJlZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbcGdyb3VwcGF0aF0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbcGdyb3VwcGF0aF0uaW5mbyA9IGdyb3Vwc1twZ3JvdXBwYXRoXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbcGdyb3VwcGF0aF0uY2hpbGRyZW4gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbcGdyb3VwcGF0aF0uY2hpbGRyZW5bYXNzZXRwYXRoXSA9IGFzc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdyb3VwVHJlZVtwZ3JvdXBwYXRoXS5jb2xsYXBzZWQgPSB2bS5jb2xsYXBzZWRTdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cFRyZWVbcGdyb3VwcGF0aF0uY2hpbGRyZW4gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbcGdyb3VwcGF0aF0uY2hpbGRyZW4gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBUcmVlW3Bncm91cHBhdGhdLmNoaWxkcmVuW2Fzc2V0cGF0aF0gPSBhc3NldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVHZW5lcmljVHJlZVwiLCBncm91cFRyZWUpO1xyXG4gICAgICAgICAgICB2YXIgYXNzZXRBcnJheSA9IGhlbHBlclNlcnZpY2Uuc29ydE9uQXNzZXRMZXZlbChncm91cFRyZWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZUdlbmVyaWNUcmVlXCIsIGFzc2V0QXJyYXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShbYXNzZXRBcnJheSwgZ3JvdXBUcmVlXSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmhhbmRsZVN1Y2Nlc3MgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlIHN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcCk7XHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHJlc3ApO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5oYW5kbGVGYWlsdXJlID0gZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZSBmYWlsdXJlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3ApO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNYW5hZ2VtZW50VHJlZSA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBncm91cEFQSVNlcnZpY2UuZ2V0TXlEaXJlY3RBc3NldHNNYXAoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmNyZWF0ZUdlbmVyaWNUcmVlLCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uY3JlYXRlTWFuYWdlbWVudFRyZWUsIHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy90cmVlZGF0YS5zZXJ2aWNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXG4gKi9cbnZhciBsb2dpblNlcnZpY2UgPSBleHBvcnRzLmxvZ2luU2VydmljZSA9IGZ1bmN0aW9uIGxvZ2luU2VydmljZSgkcm9vdFNjb3BlLCAkbG9nLCBhdXRoU2VydmljZSwgcmVxdWVzdFNlcnZpY2UsICRpbkRpYWxvZykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgbG9naW5TZXJ2aWNlKTtcblxuICAgICRsb2cubG9nKFwibG9naW5TZXJ2aWNlXCIpO1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdm0udXNlcm5hbWUgPSAnJztcbiAgICB2bS5wYXNzd29yZCA9ICcnO1xuICAgIHZtLmxpc3RlbmVycyA9IHt9O1xuXG4gICAgdm0uYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAoa2V5LCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIShrZXkgaW4gdm0ubGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgdm0ubGlzdGVuZXJzW2tleV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2bS5saXN0ZW5lcnNba2V5XS5pbmRleE9mKGxpc3RlbmVyKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHZtLmxpc3RlbmVyc1trZXldLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZtLmNhbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiAobXNnLCBrZXkpIHtcbiAgICAgICAgaWYgKGtleSBpbiB2bS5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB2bS5saXN0ZW5lcnNba2V5XSkge1xuICAgICAgICAgICAgICAgIHZtLmxpc3RlbmVyc1trZXldW2lkeF0obXNnLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZtLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hdXRoZW50aWNhdGUnLCB7XG4gICAgICAgICAgICBcInVzZXJcIjoge1xuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgLy8gJGxvZy5sb2cocmVzcCk7XG4gICAgICAgICAgICB2bS51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICAgICAgdm0ucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICAgICAgICAgIHZtLmNhbGxMaXN0ZW5lcnMocmVzcCwgJ2xvZ2luU3VjY2VzcycpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3A7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2bS5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF1dGhTZXJ2aWNlLmxvZ291dCAmJiBhdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgJHJvb3RTY29wZS5zaG93TG9naW5EaWFsb2cgPSB0cnVlO1xuICAgICAgICB2bS5jaGVja0xvZ2luKCk7XG4gICAgfTtcblxuICAgIHZtLmlzQXV0aGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXV0aFNlcnZpY2UuaXNBdXRoZWQgPyBhdXRoU2VydmljZS5pc0F1dGhlZCgpIDogZmFsc2U7XG4gICAgfTtcblxuICAgIHZtLmNoZWNrTG9naW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkcm9vdFNjb3BlLnNob3dMb2dpbkRpYWxvZykge1xuICAgICAgICAgICAgJGluRGlhbG9nLnNob3coe1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkRpYWxvZ0NvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbG9naW4vbG9naW4uaHRtbCcsXG4gICAgICAgICAgICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXNjYXBlVG9DbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVxdWVzdFNlcnZpY2UuYWRkQXV0aExpc3RlbmVyKHZtLmNoZWNrTG9naW4pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8xMS8yMDE3LlxuICovXG5leHBvcnQgY2xhc3MgbG9naW5TZXJ2aWNle1xuXG4gICAgY29uc3RydWN0b3IgKCRyb290U2NvcGUsICRsb2csIGF1dGhTZXJ2aWNlLCByZXF1ZXN0U2VydmljZSwgJGluRGlhbG9nKSB7XG4gICAgICAgICduZ0luamVjdCdcblxuICAgICAgICAkbG9nLmxvZyhcImxvZ2luU2VydmljZVwiKTtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgdm0udXNlcm5hbWUgPSAnJztcbiAgICAgICAgdm0ucGFzc3dvcmQgPSAnJztcbiAgICAgICAgdm0ubGlzdGVuZXJzID0ge307XG5cblxuICAgICAgICB2bS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChrZXksIGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gdm0ubGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgICAgIHZtLmxpc3RlbmVyc1trZXldID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2bS5saXN0ZW5lcnNba2V5XS5pbmRleE9mKGxpc3RlbmVyKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB2bS5saXN0ZW5lcnNba2V5XS5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG4gICAgICAgIHZtLmNhbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiAobXNnLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkgaW4gdm0ubGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmxpc3RlbmVyc1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLmxpc3RlbmVyc1trZXldW2lkeF0obXNnLCBrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG4gICAgICAgIHZtLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXV0aGVudGljYXRlJywge1xuICAgICAgICAgICAgICAgIFwidXNlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKHJlc3ApO1xuICAgICAgICAgICAgICAgIHZtLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgdm0ucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICAgICAgICAgICAgICB2bS5jYWxsTGlzdGVuZXJzKHJlc3AsICdsb2dpblN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGF1dGhTZXJ2aWNlLmxvZ291dCAmJiBhdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICAgICRyb290U2NvcGUuc2hvd0xvZ2luRGlhbG9nID0gdHJ1ZTtcbiAgICAgICAgICAgIHZtLmNoZWNrTG9naW4oKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5pc0F1dGhlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBhdXRoU2VydmljZS5pc0F1dGhlZCA/IGF1dGhTZXJ2aWNlLmlzQXV0aGVkKCkgOiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5jaGVja0xvZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCRyb290U2NvcGUuc2hvd0xvZ2luRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgJGluRGlhbG9nLnNob3coe1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyIDogJ0xvZ2luRGlhbG9nQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsIDogJ2FwcC9tYWluL2xvZ2luL2xvZ2luLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlVG9DbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDozMDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdFNlcnZpY2UuYWRkQXV0aExpc3RlbmVyKHZtLmNoZWNrTG9naW4pO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMTEvMjAxNy5cclxuICovXG52YXIgYXBwQ29uc3RhbnRzID0gZXhwb3J0cy5hcHBDb25zdGFudHMgPSBmdW5jdGlvbiBhcHBDb25zdGFudHMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGFwcENvbnN0YW50cyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBHUk9VUDogJ2luLmludGVsbGljYXIuYXNzZXRzLmdyb3VwJyxcbiAgICAgICAgVkVISUNMRTogJ2luLmludGVsbGljYXIuYXNzZXRzLnZlaGljbGUnLFxuICAgICAgICBVU0VSOiAnaW4uaW50ZWxsaWNhci5hc3NldHMudXNlcicsXG4gICAgICAgIExPQ0FMVVNFUjogJ2luLmludGVsbGljYXIuYXNzZXRzLnVzZXIubG9jYWx1c2VyJyxcbiAgICAgICAgUk9MRTogJ2luLmludGVsbGljYXIuYXNzZXRzLnJvbGUnLFxuICAgICAgICBERVZJQ0U6ICdpbi5pbnRlbGxpY2FyLmFzc2V0cy5kZXZpY2UnLFxuICAgICAgICBJTkZPOiAnaW4uaW50ZWxsaWNhci5hc3NldHMuZ3JvdXAnLFxuICAgICAgICBQUk9GSUxFOiAnaW4uaW50ZWxsaWNhci5hc3NldHMucHJvZmlsZScsXG4gICAgICAgIFNJTUNBUkQ6ICdpbi5pbnRlbGxpY2FyLmFzc2V0cy5zaW1jYXJkcycsXG4gICAgICAgIFJPT1RfR1JPVVA6ICcvMi82LydcbiAgICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8xMS8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGFwcENvbnN0YW50c3tcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBHUk9VUDogJ2luLmludGVsbGljYXIuYXNzZXRzLmdyb3VwJyxcclxuICAgICAgICAgICAgVkVISUNMRTogJ2luLmludGVsbGljYXIuYXNzZXRzLnZlaGljbGUnLFxyXG4gICAgICAgICAgICBVU0VSOiAnaW4uaW50ZWxsaWNhci5hc3NldHMudXNlcicsXHJcbiAgICAgICAgICAgIExPQ0FMVVNFUjogJ2luLmludGVsbGljYXIuYXNzZXRzLnVzZXIubG9jYWx1c2VyJyxcclxuICAgICAgICAgICAgUk9MRTogJ2luLmludGVsbGljYXIuYXNzZXRzLnJvbGUnLFxyXG4gICAgICAgICAgICBERVZJQ0U6ICdpbi5pbnRlbGxpY2FyLmFzc2V0cy5kZXZpY2UnLFxyXG4gICAgICAgICAgICBJTkZPOiAnaW4uaW50ZWxsaWNhci5hc3NldHMuZ3JvdXAnLFxyXG4gICAgICAgICAgICBQUk9GSUxFOiAnaW4uaW50ZWxsaWNhci5hc3NldHMucHJvZmlsZScsXHJcbiAgICAgICAgICAgIFNJTUNBUkQ6ICdpbi5pbnRlbGxpY2FyLmFzc2V0cy5zaW1jYXJkcycsXHJcbiAgICAgICAgICAgIFJPT1RfR1JPVVA6Jy8yLzYvJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29uc3RhbnRzL2FwcC5jb25zdGFudHMuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8xMS8yMDE3LlxyXG4gKi9cbnZhciByZXF1ZXN0U2VydmljZSA9IGV4cG9ydHMucmVxdWVzdFNlcnZpY2UgPSBmdW5jdGlvbiByZXF1ZXN0U2VydmljZSgkbG9nLCAkaHR0cCwgJHEsIEFQSV9IT1NULCBhdXRoU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgcmVxdWVzdFNlcnZpY2UpO1xuXG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgYXV0aExpc3RlbmVycyA9IFtdO1xuICAgIHZhciBlcnJvclN0YXR1c0NvZGVzID0gWzQwMCwgNDAxLCA0MDNdO1xuXG4gICAgJGxvZy5sb2coXCJyZXF1ZXN0U2VydmljZVwiKTtcblxuICAgIHZtLmdldFRva2VuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcbiAgICB9O1xuXG4gICAgdm0uZmlyZVBvc3QgPSBmdW5jdGlvbiAoYXBpLCBib2R5LCBhdXRoKSB7XG4gICAgICAgIGFwaSA9IEFQSV9IT1NUICsgYXBpO1xuXG4gICAgICAgIGlmIChib2R5ID09PSBudWxsKSBib2R5ID0ge307XG5cbiAgICAgICAgaWYgKGF1dGggPT0gbnVsbCB8fCBhdXRoKSBhdXRoID0gdHJ1ZTtlbHNlIGF1dGggPSBmYWxzZTtcblxuICAgICAgICBpZiAoIWF1dGgpIHJldHVybiAkaHR0cC5wb3N0KGFwaSwgYm9keSk7XG5cbiAgICAgICAgaWYgKGF1dGhTZXJ2aWNlLmlzQXV0aGVkKCkgfHwgYXBpLmluZGV4T2YoJ2dldHRva2VuJykgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdChhcGksIGJvZHkpLmNhdGNoKHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5sb2coXCJ1c2VyIG5vdCBhdXRoZW50aWNhdGVkXCIpO1xuICAgICAgICAgICAgdm0uY2hlY2tMb2dpbigpO1xuICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdCh7ICdhdXRoJzogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0uZmlyZUdldCA9IGZ1bmN0aW9uIChhcGksIGF1dGgpIHtcbiAgICAgICAgYXBpID0gQVBJX0hPU1QgKyBhcGk7XG5cbiAgICAgICAgaWYgKGF1dGggPT0gbnVsbCB8fCBhdXRoKSBhdXRoID0gdHJ1ZTtlbHNlIGF1dGggPSBmYWxzZTtcblxuICAgICAgICBpZiAoIWF1dGgpIHJldHVybiAkaHR0cC5wb3N0KGFwaSk7XG5cbiAgICAgICAgaWYgKGF1dGhTZXJ2aWNlLmlzQXV0aGVkKCkgfHwgYXBpLmluZGV4T2YoJ2dldHRva2VuJykgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdChhcGkpLmNhdGNoKHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5sb2coXCJ1c2VyIG5vdCBhdXRoZW50aWNhdGVkXCIpO1xuICAgICAgICAgICAgdm0uY2hlY2tMb2dpbigpO1xuICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdCh7ICdhdXRoJzogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0uaGFuZGxlRmFpbHVyZSA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIC8vJGxvZy5sb2coXCJBUEkgcmV0dXJuZWQgZXJyb3JcIik7XG4gICAgICAgIC8vJGxvZy5sb2cocmVzcCk7XG4gICAgICAgIGlmIChlcnJvclN0YXR1c0NvZGVzLmluZGV4T2YocmVzcC5zdGF0dXMpICE9IC0xKSB7XG4gICAgICAgICAgICAvLyRsb2cubG9nKFwiZmFpbHVyZSBzdGF0dXMgY29kZVwiKTtcbiAgICAgICAgICAgIC8vdm0uY2hlY2tMb2dpbih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAkcS5yZWplY3QocmVzcCk7XG4gICAgfTtcblxuICAgIHZtLmNoZWNrTG9naW4gPSBmdW5jdGlvbiAoZm9yY2UpIHtcbiAgICAgICAgaWYgKCFhdXRoU2VydmljZS5pc0F1dGhlZCgpIHx8IGZvcmNlKSB7XG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goYXV0aExpc3RlbmVycywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxsaW5nIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJjYWxsaW5nIHNob3cgbG9naW5cIik7XG4gICAgICAgICAgICAgICAgdmFsdWUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZtLmFkZEF1dGhMaXN0ZW5lciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAvLyAkbG9nLmxvZygnYWRkaW5nIGxvZ2luIGNhbGxiYWNrJyk7XG4gICAgICAgIGF1dGhMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIC8vIElmIHJlcXVpcmVkLiBJdCBpcyBwZXJpb2RpY2FsbHkgY2FsbGVkIGZyb20gbWFpbmNvbnRyb2xsZXIgdG8gY2hlY2sgZm9yIHZhbGlkIHRva2VuXG4gICAgLy8gY3VycmVudGx5IGRpc2FibGVkIGluIG1haW5jb250cm9sbGVyXG4gICAgdm0uaXNMb2dpblRva2VuVmFsaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vJGxvZy5sb2coXCJpc0xvZ2luVG9rZW5WYWlsZFwiKTtcbiAgICAgICAgdm0uY2hlY2tMb2dpbihmYWxzZSk7XG4gICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9yZXF1ZXN0LnNlcnZpY2UuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgcmVxdWVzdFNlcnZpY2V7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCRsb2csICRodHRwLCAkcSwgQVBJX0hPU1QsIGF1dGhTZXJ2aWNlKSB7XHJcbiAgICAgICAgJ25nSW5qZWN0J1xyXG5cclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgICAgIHZhciBhdXRoTGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdmFyIGVycm9yU3RhdHVzQ29kZXMgPSBbNDAwLCA0MDEsIDQwM107XHJcblxyXG4gICAgICAgICRsb2cubG9nKFwicmVxdWVzdFNlcnZpY2VcIik7XHJcblxyXG4gICAgICAgIHZtLmdldFRva2VuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdXRoU2VydmljZS5nZXRUb2tlbigpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmZpcmVQb3N0ID0gZnVuY3Rpb24oYXBpLCBib2R5LCBhdXRoKSB7XHJcbiAgICAgICAgICAgIGFwaSA9IEFQSV9IT1NUICsgYXBpO1xyXG5cclxuICAgICAgICAgICAgaWYoYm9keSA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJvZHkgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmKGF1dGggPT0gbnVsbCB8fCBhdXRoKVxyXG4gICAgICAgICAgICAgICAgYXV0aCA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGF1dGggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFhdXRoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoYXBpLCBib2R5KTtcclxuXHJcbiAgICAgICAgICAgIGlmKGF1dGhTZXJ2aWNlLmlzQXV0aGVkKCkgfHwgYXBpLmluZGV4T2YoJ2dldHRva2VuJykgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdChhcGksIGJvZHkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcInVzZXIgbm90IGF1dGhlbnRpY2F0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB2bS5jaGVja0xvZ2luKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHsnYXV0aCc6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZmlyZUdldCA9IGZ1bmN0aW9uKGFwaSwgYXV0aCkge1xyXG4gICAgICAgICAgICBhcGkgPSBBUElfSE9TVCArIGFwaTtcclxuXHJcbiAgICAgICAgICAgIGlmKGF1dGggPT0gbnVsbCB8fCBhdXRoKVxyXG4gICAgICAgICAgICAgICAgYXV0aCA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGF1dGggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFhdXRoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoYXBpKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGF1dGhTZXJ2aWNlLmlzQXV0aGVkKCkgfHwgYXBpLmluZGV4T2YoJ2dldHRva2VuJykgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdChhcGkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcInVzZXIgbm90IGF1dGhlbnRpY2F0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB2bS5jaGVja0xvZ2luKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHsnYXV0aCc6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5oYW5kbGVGYWlsdXJlID0gZnVuY3Rpb24ocmVzcCkge1xyXG4gICAgICAgICAgICAvLyRsb2cubG9nKFwiQVBJIHJldHVybmVkIGVycm9yXCIpO1xyXG4gICAgICAgICAgICAvLyRsb2cubG9nKHJlc3ApO1xyXG4gICAgICAgICAgICBpZihlcnJvclN0YXR1c0NvZGVzLmluZGV4T2YocmVzcC5zdGF0dXMpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyRsb2cubG9nKFwiZmFpbHVyZSBzdGF0dXMgY29kZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vdm0uY2hlY2tMb2dpbih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZXNwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5jaGVja0xvZ2luID0gZnVuY3Rpb24oZm9yY2UpIHtcclxuICAgICAgICAgICAgaWYoIWF1dGhTZXJ2aWNlLmlzQXV0aGVkKCkgfHwgZm9yY2UpIHtcclxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChhdXRoTGlzdGVuZXJzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGluZyBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiY2FsbGluZyBzaG93IGxvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmFkZEF1dGhMaXN0ZW5lciA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKCdhZGRpbmcgbG9naW4gY2FsbGJhY2snKTtcclxuICAgICAgICAgICAgYXV0aExpc3RlbmVycy5wdXNoKGNhbGxiYWNrKVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvLyBJZiByZXF1aXJlZC4gSXQgaXMgcGVyaW9kaWNhbGx5IGNhbGxlZCBmcm9tIG1haW5jb250cm9sbGVyIHRvIGNoZWNrIGZvciB2YWxpZCB0b2tlblxyXG4gICAgICAgIC8vIGN1cnJlbnRseSBkaXNhYmxlZCBpbiBtYWluY29udHJvbGxlclxyXG4gICAgICAgIHZtLmlzTG9naW5Ub2tlblZhbGlkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2coXCJpc0xvZ2luVG9rZW5WYWlsZFwiKTtcclxuICAgICAgICAgICAgdm0uY2hlY2tMb2dpbihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9yZXF1ZXN0LnNlcnZpY2UuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgc21pZGRlbGEgb24gMjUvMDIvMTcuXHJcbiAqL1xuXG52YXIgYXNzZXRBUElTZXJ2aWNlID0gZXhwb3J0cy5hc3NldEFQSVNlcnZpY2UgPSBmdW5jdGlvbiBhc3NldEFQSVNlcnZpY2UoJGxvZywgJHEsIHJlcXVlc3RTZXJ2aWNlLCBoZWxwZXJTZXJ2aWNlLCAkaW5FcnJvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgYXNzZXRBUElTZXJ2aWNlKTtcblxuICAgICRsb2cubG9nKFwiYXNzZXRBUElTZXJ2aWNlXCIpO1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS5kZWxldGVBc3NldCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9hc3NldC9kZWxldGUnLCBib2R5KTtcbiAgICB9O1xuXG4gICAgdm0uZ2V0TXlDcmVhdGVBc3NldFBlcm1JbmZvID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2Fzc2V0L2dldG15Y3JlYXRlYXNzZXRwZXJtaW5mbycsIGJvZHkpO1xuICAgIH07XG5cbiAgICB2bS5nZXRNeUVkaXREZWxldGVBc3NldFBlcm1JbmZvID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2Fzc2V0L2dldG15ZWRpdGRlbGV0ZWFzc2V0cGVybWluZm8nLCBib2R5KTtcbiAgICB9O1xuXG4gICAgdm0udmFsaWRhdGVBc3NldE5hbWUgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvYXNzZXQvdmFsaWRhdGVhc3NldG5hbWUnLCBib2R5KTtcbiAgICB9O1xuXG4gICAgdm0uaGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAvLyRsb2cubG9nKFwiaGFuZGxlUmVzcG9uc2VcIik7XG4gICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHJlc3ApO1xuICAgIH07XG5cbiAgICB2bS5oYW5kbGVGYWlsdXJlID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgJGluRXJyb3IuYWRkKHJlc3ApO1xuICAgICAgICAkbG9nLmxvZyhcImhhbmRsZUZhaWx1cmUgXCIsIHJlc3ApO1xuICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3ApO1xuICAgIH07XG5cbiAgICB2bS5nZXRNeUVkaXREZWxldGVBc3NldFBlcm1JbmZvTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgcmV0dXJuIHZtLmdldE15RWRpdERlbGV0ZUFzc2V0UGVybUluZm8oYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlUGVybWlzc2lvbk1hcCkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgfTtcblxuICAgIHZtLmdldE15Q3JlYXRlQXNzZXRQZXJtSW5mb01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgIHJldHVybiB2bS5nZXRNeUNyZWF0ZUFzc2V0UGVybUluZm8oYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvYXNzZXQuYXBpLnNlcnZpY2UuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBzbWlkZGVsYSBvbiAyNS8wMi8xNy5cclxuICovXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIGFzc2V0QVBJU2VydmljZXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoJGxvZywgJHEsIHJlcXVlc3RTZXJ2aWNlLCBoZWxwZXJTZXJ2aWNlLCAkaW5FcnJvcikge1xyXG4gICAgICAgICduZ0luamVjdCdcclxuICAgICAgICAkbG9nLmxvZyhcImFzc2V0QVBJU2VydmljZVwiKTtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG5cclxuXHJcbiAgICAgICAgdm0uZGVsZXRlQXNzZXQgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvYXNzZXQvZGVsZXRlJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZ2V0TXlDcmVhdGVBc3NldFBlcm1JbmZvID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2Fzc2V0L2dldG15Y3JlYXRlYXNzZXRwZXJtaW5mbycsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmdldE15RWRpdERlbGV0ZUFzc2V0UGVybUluZm8gPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvYXNzZXQvZ2V0bXllZGl0ZGVsZXRlYXNzZXRwZXJtaW5mbycsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLnZhbGlkYXRlQXNzZXROYW1lID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2Fzc2V0L3ZhbGlkYXRlYXNzZXRuYW1lJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmhhbmRsZVJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgLy8kbG9nLmxvZyhcImhhbmRsZVJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uaGFuZGxlRmFpbHVyZSA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICRpbkVycm9yLmFkZChyZXNwKTtcclxuICAgICAgICAgICAgJGxvZy5sb2coXCJoYW5kbGVGYWlsdXJlIFwiLCByZXNwKTtcclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZXNwKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlFZGl0RGVsZXRlQXNzZXRQZXJtSW5mb01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUVkaXREZWxldGVBc3NldFBlcm1JbmZvKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VQZXJtaXNzaW9uTWFwKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmdldE15Q3JlYXRlQXNzZXRQZXJtSW5mb01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUNyZWF0ZUFzc2V0UGVybUluZm8oYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9hc3NldC5hcGkuc2VydmljZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8xMS8yMDE3LlxyXG4gKi9cbnZhciBncm91cEFQSVNlcnZpY2UgPSBleHBvcnRzLmdyb3VwQVBJU2VydmljZSA9IGZ1bmN0aW9uIGdyb3VwQVBJU2VydmljZSgkbG9nLCAkcSwgcmVxdWVzdFNlcnZpY2UsIGhlbHBlclNlcnZpY2UsIGFwcENvbnN0YW50cywgJGluRXJyb3IpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgZ3JvdXBBUElTZXJ2aWNlKTtcblxuICAgICAgICAkbG9nLmxvZyhcImdyb3VwQVBJU2VydmljZVwiKTtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgICB2YXIgcm9vdF9wZ3JvdXBwYXRoID0gJy8yLzYvJztcblxuICAgICAgICB2bS5lbmNsb3NlQm9keSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZ3JvdXA6IGRhdGEgfTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRBc3NldFR5cGUgPSBmdW5jdGlvbiAodHlwZSwgYm9keSkge1xuXG4gICAgICAgICAgICAgICAgYm9keSA9IGFuZ3VsYXIuY29weShib2R5KTtcblxuICAgICAgICAgICAgICAgIGlmICghYm9keS5wZ3JvdXBwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LnBncm91cHBhdGggPSByb290X3Bncm91cHBhdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghYm9keS5hc3NldHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuYXNzZXR0eXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYm9keTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5saXN0QXNzZXRzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImxpc3RBc3NldHNcIik7XG4gICAgICAgICAgICAgICAgLy8gYm9keSA9IHt9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2xpc3Rhc3NldHMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeUdyb3VwcyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeUdyb3Vwc1wiKTtcbiAgICAgICAgICAgICAgICBib2R5ID0gdm0uZ2V0QXNzZXRUeXBlKGFwcENvbnN0YW50cy5HUk9VUCwgYm9keSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmxpc3RBc3NldHMoYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlEaXJlY3RHcm91cHMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlHcm91cHNcIik7XG4gICAgICAgICAgICAgICAgYm9keSA9IHZtLmdldEFzc2V0VHlwZShhcHBDb25zdGFudHMuR1JPVVAsIGJvZHkpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS91c2VyL2dldG15Z3JvdXBzJywgYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlWZWhpY2xlcyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVZlaGljbGVzXCIpO1xuICAgICAgICAgICAgICAgIGJvZHkgPSB2bS5nZXRBc3NldFR5cGUoYXBwQ29uc3RhbnRzLlZFSElDTEUsIGJvZHkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5saXN0QXNzZXRzKGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15VXNlcnMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlVc2Vyc1wiKTtcbiAgICAgICAgICAgICAgICBib2R5ID0gdm0uZ2V0QXNzZXRUeXBlKGFwcENvbnN0YW50cy5VU0VSLCBib2R5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0ubGlzdEFzc2V0cyhib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeVJvbGVzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15Um9sZXNcIik7XG4gICAgICAgICAgICAgICAgYm9keSA9IHZtLmdldEFzc2V0VHlwZShhcHBDb25zdGFudHMuUk9MRSwgYm9keSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmxpc3RBc3NldHMoYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlEZXZpY2VzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15RGV2aWNlc1wiKTtcbiAgICAgICAgICAgICAgICBib2R5ID0gdm0uZ2V0QXNzZXRUeXBlKGFwcENvbnN0YW50cy5ERVZJQ0UsIGJvZHkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5saXN0QXNzZXRzKGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmFzc2lnblVzZXIgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9hc3NpZ251c2VyJywgYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZGVhc3NpZ25Vc2VyID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvZ3JvdXAvZGVhc3NpZ251c2VyJywgYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uYXNzaWduUm9sZSA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2Fzc2lnbnJvbGUnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5kZWFzc2lnblJvbGUgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9kZWFzc2lnbnJvbGUnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRBc3NpZ25lZFVzZXJzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvZ3JvdXAvZ2V0YXNzaWduZWR1c2VycycsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEFzc2lnbmVkUm9sZXMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9nZXRhc3NpZ25lZHJvbGVzJywgYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlBc3NpZ25hYmxlVXNlcnMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9nZXRteWFzc2lnbmFibGV1c2VycycsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZVJvbGVzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvZ3JvdXAvZ2V0bXlhc3NpZ25hYmxlcm9sZXMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5kZWxldGVBc3NldCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2Fzc2V0L2RlbGV0ZScsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmNyZWF0ZUdyb3VwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvZ3JvdXAvY3JlYXRlJywgYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmhhbmRsZVJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAvLyRsb2cubG9nKFwiaGFuZGxlUmVzcG9uc2VcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uaGFuZGxlRmFpbHVyZSA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgJGluRXJyb3IuYWRkKHJlc3ApO1xuICAgICAgICAgICAgICAgICRsb2cubG9nKFwiaGFuZGxlRmFpbHVyZSBcIiwgcmVzcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZXNwKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5saXN0QXNzZXRzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0ubGlzdEFzc2V0cyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0QXNzaWduZWRSb2xlc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldEFzc2lnbmVkUm9sZXMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVVc2Vyc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15QXNzaWduYWJsZVVzZXJzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdCkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlBc3NpZ25hYmxlUm9sZXNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUFzc2lnbmFibGVSb2xlcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEFzc2lnbmVkVXNlcnNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRBc3NpZ25lZFVzZXJzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdCkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlHcm91cHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlHcm91cHNNYXBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15R3JvdXBzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwKS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeURpcmVjdEdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeUdyb3Vwc01hcFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlEaXJlY3RHcm91cHMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXApLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15VmVoaWNsZXNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coXCJnZXRNeVZlaGljbGVzTWFwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVZlaGljbGVzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwKS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeVVzZXJzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyRsb2cubG9nKFwiZ2V0TXlVc2Vyc01hcFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlVc2Vycyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlVc2Vyc01hcExpc3QgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coXCJnZXRNeVVzZXJzTWFwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVVzZXJzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdCkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlSb2xlc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVJvbGVzTWFwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVJvbGVzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwKS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeVJvbGVzTGlzdCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVJvbGVzTWFwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVJvbGVzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdCkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlEZXZpY2VzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15RGV2aWNlc01hcFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlEZXZpY2VzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS5tZXJnZUFzc2V0UGVybWlzc2lvbnMpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXApLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmhhbmRsZURpcmVjdEFzc2V0UmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ3JvdXBBUElTZXJ2aWNlIGhhbmRsZURpcmVjdEFzc2V0UmVzcG9uc2VcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlEaXJlY3RBc3NldHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coXCJncm91cEFQSVNlcnZpY2UgZ2V0TXlEaXJlY3RBc3NldHNNYXBcIik7XG4gICAgICAgICAgICAgICAgdmFyIGdQcm9taXNlID0gdm0uZ2V0TXlEaXJlY3RHcm91cHNNYXAoYm9keSk7XG4gICAgICAgICAgICAgICAgLy8gdmFyIHZQcm9taXNlID0gdm0uZ2V0TXlWZWhpY2xlc01hcChib2R5KTtcbiAgICAgICAgICAgICAgICAvLyB2YXIgdVByb21pc2UgPSB2bS5nZXRNeVVzZXJzTWFwKGJvZHkpO1xuICAgICAgICAgICAgICAgIC8vIHZhciByUHJvbWlzZSA9IHZtLmdldE15Um9sZXNNYXAoYm9keSk7XG4gICAgICAgICAgICAgICAgLy8gdmFyIGRQcm9taXNlID0gdm0uZ2V0TXlEZXZpY2VzTWFwKGJvZHkpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuICRxLmFsbChbZ1Byb21pc2UsIHZQcm9taXNlLCB1UHJvbWlzZSwgclByb21pc2UsIGRQcm9taXNlXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gJHEuYWxsKFtnUHJvbWlzZV0pLnRoZW4odm0uaGFuZGxlRGlyZWN0QXNzZXRSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvZ3JvdXAuYXBpLnNlcnZpY2UuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZ3JvdXBBUElTZXJ2aWNle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgkbG9nLCAkcSwgcmVxdWVzdFNlcnZpY2UsIGhlbHBlclNlcnZpY2UsIGFwcENvbnN0YW50cywgJGluRXJyb3IpIHtcclxuICAgICAgICAnbmdJbmplY3QnXHJcbiAgICAgICAgJGxvZy5sb2coXCJncm91cEFQSVNlcnZpY2VcIik7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgdmFyIHJvb3RfcGdyb3VwcGF0aCA9ICcvMi82Lyc7XHJcblxyXG4gICAgICAgIHZtLmVuY2xvc2VCb2R5ID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiB7Z3JvdXA6IGRhdGF9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmdldEFzc2V0VHlwZSA9IGZ1bmN0aW9uICh0eXBlLCBib2R5KSB7XHJcblxyXG4gICAgICAgICAgICBib2R5ID0gYW5ndWxhci5jb3B5KGJvZHkpO1xyXG5cclxuICAgICAgICAgICAgaWYoIWJvZHkucGdyb3VwcGF0aCl7XHJcbiAgICAgICAgICAgICAgICBib2R5LnBncm91cHBhdGggPSByb290X3Bncm91cHBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWJvZHkuYXNzZXR0eXBlKXtcclxuICAgICAgICAgICAgICAgIGJvZHkuYXNzZXR0eXBlID0gdHlwZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0ubGlzdEFzc2V0cyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwibGlzdEFzc2V0c1wiKTtcclxuICAgICAgICAgICAgLy8gYm9keSA9IHt9XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9saXN0YXNzZXRzJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZ2V0TXlHcm91cHMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15R3JvdXBzXCIpO1xyXG4gICAgICAgICAgICBib2R5ID0gdm0uZ2V0QXNzZXRUeXBlKGFwcENvbnN0YW50cy5HUk9VUCwgYm9keSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5saXN0QXNzZXRzKGJvZHkpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZ2V0TXlEaXJlY3RHcm91cHMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15R3JvdXBzXCIpO1xyXG4gICAgICAgICAgICBib2R5ID0gdm0uZ2V0QXNzZXRUeXBlKGFwcENvbnN0YW50cy5HUk9VUCwgYm9keSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS91c2VyL2dldG15Z3JvdXBzJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZ2V0TXlWZWhpY2xlcyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlWZWhpY2xlc1wiKTtcclxuICAgICAgICAgICAgYm9keSA9IHZtLmdldEFzc2V0VHlwZShhcHBDb25zdGFudHMuVkVISUNMRSwgYm9keSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5saXN0QXNzZXRzKGJvZHkpXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15VXNlcnMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15VXNlcnNcIik7XHJcbiAgICAgICAgICAgIGJvZHkgPSB2bS5nZXRBc3NldFR5cGUoYXBwQ29uc3RhbnRzLlVTRVIsIGJvZHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdm0ubGlzdEFzc2V0cyhib2R5KVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeVJvbGVzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVJvbGVzXCIpO1xyXG4gICAgICAgICAgICBib2R5ID0gdm0uZ2V0QXNzZXRUeXBlKGFwcENvbnN0YW50cy5ST0xFLCBib2R5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmxpc3RBc3NldHMoYm9keSlcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlEZXZpY2VzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeURldmljZXNcIik7XHJcbiAgICAgICAgICAgIGJvZHkgPSB2bS5nZXRBc3NldFR5cGUoYXBwQ29uc3RhbnRzLkRFVklDRSwgYm9keSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5saXN0QXNzZXRzKGJvZHkpXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmFzc2lnblVzZXIgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvZ3JvdXAvYXNzaWdudXNlcicsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmRlYXNzaWduVXNlciA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9kZWFzc2lnbnVzZXInLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uYXNzaWduUm9sZSA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9hc3NpZ25yb2xlJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmRlYXNzaWduUm9sZSA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9kZWFzc2lnbnJvbGUnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0QXNzaWduZWRVc2VycyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9nZXRhc3NpZ25lZHVzZXJzJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEFzc2lnbmVkUm9sZXMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvZ3JvdXAvZ2V0YXNzaWduZWRyb2xlcycsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVVc2VycyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9nZXRteWFzc2lnbmFibGV1c2VycycsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVSb2xlcyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9nZXRteWFzc2lnbmFibGVyb2xlcycsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5kZWxldGVBc3NldCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9hc3NldC9kZWxldGUnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5jcmVhdGVHcm91cCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9jcmVhdGUnLCBib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlICk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICB2bS5oYW5kbGVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2coXCJoYW5kbGVSZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmhhbmRsZUZhaWx1cmUgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAkaW5FcnJvci5hZGQocmVzcCk7XHJcbiAgICAgICAgICAgICRsb2cubG9nKFwiaGFuZGxlRmFpbHVyZSBcIiwgcmVzcCk7XHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QocmVzcCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0ubGlzdEFzc2V0c01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5saXN0QXNzZXRzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXApXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZ2V0QXNzaWduZWRSb2xlc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRBc3NpZ25lZFJvbGVzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVVc2Vyc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUFzc2lnbmFibGVVc2Vycyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVSb2xlc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUFzc2lnbmFibGVSb2xlcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRBc3NpZ25lZFVzZXJzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldEFzc2lnbmVkVXNlcnMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdClcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlHcm91cHNNYXAgPSBmdW5jdGlvbihib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlHcm91cHNNYXBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUdyb3Vwcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXApXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZ2V0TXlEaXJlY3RHcm91cHNNYXAgPSBmdW5jdGlvbihib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlHcm91cHNNYXBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeURpcmVjdEdyb3Vwcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXApXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZ2V0TXlWZWhpY2xlc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2coXCJnZXRNeVZlaGljbGVzTWFwXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlWZWhpY2xlcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXApXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15VXNlcnNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyRsb2cubG9nKFwiZ2V0TXlVc2Vyc01hcFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15VXNlcnMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmdldE15VXNlcnNNYXBMaXN0ID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8kbG9nLmxvZyhcImdldE15VXNlcnNNYXBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVVzZXJzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlSb2xlc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlSb2xlc01hcFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15Um9sZXMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmdldE15Um9sZXNMaXN0ID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVJvbGVzTWFwXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlSb2xlcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlEZXZpY2VzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeURldmljZXNNYXBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeURldmljZXMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWVyZ2VBc3NldFBlcm1pc3Npb25zKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXApXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmhhbmRsZURpcmVjdEFzc2V0UmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwKSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ3JvdXBBUElTZXJ2aWNlIGhhbmRsZURpcmVjdEFzc2V0UmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHJlc3ApO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlEaXJlY3RBc3NldHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyRsb2cubG9nKFwiZ3JvdXBBUElTZXJ2aWNlIGdldE15RGlyZWN0QXNzZXRzTWFwXCIpO1xyXG4gICAgICAgICAgICB2YXIgZ1Byb21pc2UgPSB2bS5nZXRNeURpcmVjdEdyb3Vwc01hcChib2R5KTtcclxuICAgICAgICAgICAgLy8gdmFyIHZQcm9taXNlID0gdm0uZ2V0TXlWZWhpY2xlc01hcChib2R5KTtcclxuICAgICAgICAgICAgLy8gdmFyIHVQcm9taXNlID0gdm0uZ2V0TXlVc2Vyc01hcChib2R5KTtcclxuICAgICAgICAgICAgLy8gdmFyIHJQcm9taXNlID0gdm0uZ2V0TXlSb2xlc01hcChib2R5KTtcclxuICAgICAgICAgICAgLy8gdmFyIGRQcm9taXNlID0gdm0uZ2V0TXlEZXZpY2VzTWFwKGJvZHkpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmV0dXJuICRxLmFsbChbZ1Byb21pc2UsIHZQcm9taXNlLCB1UHJvbWlzZSwgclByb21pc2UsIGRQcm9taXNlXSlcclxuICAgICAgICAgICAgcmV0dXJuICRxLmFsbChbZ1Byb21pc2VdKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlRGlyZWN0QXNzZXRSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9ncm91cC5hcGkuc2VydmljZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8xMS8yMDE3LlxyXG4gKi9cblxudmFyIHVzZXJBUElTZXJ2aWNlID0gZXhwb3J0cy51c2VyQVBJU2VydmljZSA9IGZ1bmN0aW9uIHVzZXJBUElTZXJ2aWNlKCRsb2csICRxLCByZXF1ZXN0U2VydmljZSwgaGVscGVyU2VydmljZSwgJGluRXJyb3IpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgdXNlckFQSVNlcnZpY2UpO1xuXG4gICAgICAgICRsb2cubG9nKFwidXNlckFQSVNlcnZpY2VcIik7XG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgICAgdm0uZW5jbG9zZUJvZHkgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHVzZXI6IGRhdGEgfTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeUdyb3VwcyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeUdyb3Vwc1wiKTtcbiAgICAgICAgICAgICAgICAvLyBib2R5ID0gdm0uZW5jbG9zZUJvZHkoYm9keSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2xpc3Rhc3NldHMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRBc3NpZ25lZEdyb3VwcyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeUdyb3Vwc1wiKTtcbiAgICAgICAgICAgICAgICAvLyBib2R5ID0gdm0uZW5jbG9zZUJvZHkoYm9keSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3VzZXIvZ2V0YXNzaWduZWRncm91cHMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRBc3NpZ25lZFJvbGVzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15R3JvdXBzXCIpO1xuICAgICAgICAgICAgICAgIC8vIGJvZHkgPSB2bS5lbmNsb3NlQm9keShib2R5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvdXNlci9nZXRhc3NpZ25lZHJvbGVzJywgYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlBc3NpZ25hYmxlR3JvdXBzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvdXNlci9nZXRteWFzc2lnbmFibGVncm91cHMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVSb2xlcyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3VzZXIvZ2V0bXlhc3NpZ25hYmxlcm9sZXMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5hc3NpZ25Sb2xlID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvdXNlci9hc3NpZ25yb2xlJywgYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZGVhc3NpZ25Sb2xlID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvdXNlci9kZWFzc2lnbnJvbGUnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5jcmVhdGVVc2VyID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvdXNlci9jcmVhdGVsb2NhbHVzZXInLCBib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uaGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiaGFuZGxlUmVzcG9uc2VcIik7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2cocmVzcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uaGFuZGxlRmFpbHVyZSA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJoYW5kbGVGYWlsdXJlIFwiKTtcbiAgICAgICAgICAgICAgICAkaW5FcnJvci5hZGQocmVzcCk7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2cocmVzcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZXNwKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRBc3NpZ25lZFJvbGVzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0QXNzaWduZWRSb2xlcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZVJvbGVzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlBc3NpZ25hYmxlUm9sZXMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVHcm91cHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUFzc2lnbmFibGVHcm91cHMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KS50aGVuKGhlbHBlclNlcnZpY2UuZmlsdGVyQXNzZXRHcm91cHMpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEFzc2lnbmVkR3JvdXBzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0QXNzaWduZWRHcm91cHMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeUdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeUdyb3Vwc01hcFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlHcm91cHMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXAsIHZtLmhhbmRsZUZhaWx1cmUpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15QXNzaWduZWRHcm91cHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlHcm91cHNNYXBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15QXNzaWduZWRHcm91cHMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXAsIHZtLmhhbmRsZUZhaWx1cmUpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15QXNzZXRHcm91cHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coXCJnZXRNeUFzc2V0R3JvdXBzTWFwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUFzc2V0R3JvdXBzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwLCB2bS5oYW5kbGVGYWlsdXJlKS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeVZlaGljbGVzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15VmVoaWNsZXNNYXBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15VmVoaWNsZXMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXAsIHZtLmhhbmRsZUZhaWx1cmUpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15VXNlcnNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlVc2Vyc01hcFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlVc2Vycyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlVc2Vyc01hcExpc3QgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlSb2xlc01hcFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlVc2Vycyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QsIHZtLmhhbmRsZUZhaWx1cmUpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15Um9sZXNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlSb2xlc01hcFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlSb2xlcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlSb2xlc0xpc3QgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlSb2xlc01hcFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlSb2xlcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QsIHZtLmhhbmRsZUZhaWx1cmUpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15RGV2aWNlc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeURldmljZXNNYXBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15RGV2aWNlcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uaGFuZGxlRGlyZWN0QXNzZXRSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgLy8kbG9nLmxvZyhcInVzZXJBUElTZXJ2aWNlIGhhbmRsZURpcmVjdEFzc2V0UmVzcG9uc2VcIik7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2cocmVzcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlEaXJlY3RBc3NldHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwidXNlckFQSVNlcnZpY2UgZ2V0TXlEaXJlY3RBc3NldHNNYXBcIik7XG4gICAgICAgICAgICAgICAgdmFyIGdQcm9taXNlID0gdm0uZ2V0TXlHcm91cHNNYXAoYm9keSk7XG4gICAgICAgICAgICAgICAgdmFyIHZQcm9taXNlID0gdm0uZ2V0TXlWZWhpY2xlc01hcChib2R5KTtcbiAgICAgICAgICAgICAgICB2YXIgdVByb21pc2UgPSB2bS5nZXRNeVVzZXJzTWFwKGJvZHkpO1xuICAgICAgICAgICAgICAgIHZhciByUHJvbWlzZSA9IHZtLmdldE15Um9sZXNNYXAoYm9keSk7XG4gICAgICAgICAgICAgICAgdmFyIGRQcm9taXNlID0gdm0uZ2V0TXlEZXZpY2VzTWFwKGJvZHkpO1xuICAgICAgICAgICAgICAgIHZhciBteVByb21pc2UgPSB2bS5nZXRNeUluZm9NYXAoYm9keSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJHEuYWxsKFtnUHJvbWlzZSwgdlByb21pc2UsIHVQcm9taXNlLCByUHJvbWlzZSwgZFByb21pc2UsIG15UHJvbWlzZV0pLnRoZW4odm0uaGFuZGxlRGlyZWN0QXNzZXRSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvdXNlci5hcGkuc2VydmljZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMTEvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgdXNlckFQSVNlcnZpY2V7XHJcbiAgICBjb25zdHJ1Y3RvciAoJGxvZywgJHEsIHJlcXVlc3RTZXJ2aWNlLCBoZWxwZXJTZXJ2aWNlLCAkaW5FcnJvcikge1xyXG4gICAgICAgICduZ0luamVjdCdcclxuICAgICAgICAkbG9nLmxvZyhcInVzZXJBUElTZXJ2aWNlXCIpO1xyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZtLmVuY2xvc2VCb2R5ID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiB7dXNlcjogZGF0YX07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZ2V0TXlHcm91cHMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15R3JvdXBzXCIpO1xyXG4gICAgICAgICAgICAvLyBib2R5ID0gdm0uZW5jbG9zZUJvZHkoYm9keSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9saXN0YXNzZXRzJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEFzc2lnbmVkR3JvdXBzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeUdyb3Vwc1wiKTtcclxuICAgICAgICAgICAgLy8gYm9keSA9IHZtLmVuY2xvc2VCb2R5KGJvZHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvdXNlci9nZXRhc3NpZ25lZGdyb3VwcycsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRBc3NpZ25lZFJvbGVzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeUdyb3Vwc1wiKTtcclxuICAgICAgICAgICAgLy8gYm9keSA9IHZtLmVuY2xvc2VCb2R5KGJvZHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvdXNlci9nZXRhc3NpZ25lZHJvbGVzJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZUdyb3VwcyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS91c2VyL2dldG15YXNzaWduYWJsZWdyb3VwcycsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVSb2xlcyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS91c2VyL2dldG15YXNzaWduYWJsZXJvbGVzJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmFzc2lnblJvbGUgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvdXNlci9hc3NpZ25yb2xlJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZGVhc3NpZ25Sb2xlID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3VzZXIvZGVhc3NpZ25yb2xlJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uY3JlYXRlVXNlciA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS91c2VyL2NyZWF0ZWxvY2FsdXNlcicsIGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UgKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uaGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImhhbmRsZVJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhyZXNwKTtcclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcClcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uaGFuZGxlRmFpbHVyZSA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICRsb2cubG9nKFwiaGFuZGxlRmFpbHVyZSBcIik7XHJcbiAgICAgICAgICAgICRpbkVycm9yLmFkZChyZXNwKTtcclxuICAgICAgICAgICAgJGxvZy5sb2cocmVzcCk7XHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QocmVzcCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEFzc2lnbmVkUm9sZXNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0QXNzaWduZWRSb2xlcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVSb2xlc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUFzc2lnbmFibGVSb2xlcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVHcm91cHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlBc3NpZ25hYmxlR3JvdXBzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLmZpbHRlckFzc2V0R3JvdXBzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRBc3NpZ25lZEdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRBc3NpZ25lZEdyb3Vwcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlHcm91cHNNYXBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUdyb3Vwcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXAsIHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15QXNzaWduZWRHcm91cHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15R3JvdXBzTWFwXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlBc3NpZ25lZEdyb3Vwcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXAsIHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15QXNzZXRHcm91cHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyRsb2cubG9nKFwiZ2V0TXlBc3NldEdyb3Vwc01hcFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15QXNzZXRHcm91cHMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwLCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeVZlaGljbGVzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVZlaGljbGVzTWFwXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlWZWhpY2xlcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXAsIHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15VXNlcnNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15VXNlcnNNYXBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVVzZXJzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5nZXRNeVVzZXJzTWFwTGlzdCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlSb2xlc01hcFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15VXNlcnMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdCwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlSb2xlc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlSb2xlc01hcFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15Um9sZXMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwLCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeVJvbGVzTGlzdCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlSb2xlc01hcFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15Um9sZXMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdCwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlEZXZpY2VzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeURldmljZXNNYXBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeURldmljZXMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwLCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5oYW5kbGVEaXJlY3RBc3NldFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgLy8kbG9nLmxvZyhcInVzZXJBUElTZXJ2aWNlIGhhbmRsZURpcmVjdEFzc2V0UmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKHJlc3ApO1xyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlEaXJlY3RBc3NldHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcInVzZXJBUElTZXJ2aWNlIGdldE15RGlyZWN0QXNzZXRzTWFwXCIpO1xyXG4gICAgICAgICAgICB2YXIgZ1Byb21pc2UgPSB2bS5nZXRNeUdyb3Vwc01hcChib2R5KTtcclxuICAgICAgICAgICAgdmFyIHZQcm9taXNlID0gdm0uZ2V0TXlWZWhpY2xlc01hcChib2R5KTtcclxuICAgICAgICAgICAgdmFyIHVQcm9taXNlID0gdm0uZ2V0TXlVc2Vyc01hcChib2R5KTtcclxuICAgICAgICAgICAgdmFyIHJQcm9taXNlID0gdm0uZ2V0TXlSb2xlc01hcChib2R5KTtcclxuICAgICAgICAgICAgdmFyIGRQcm9taXNlID0gdm0uZ2V0TXlEZXZpY2VzTWFwKGJvZHkpO1xyXG4gICAgICAgICAgICB2YXIgbXlQcm9taXNlID0gdm0uZ2V0TXlJbmZvTWFwKGJvZHkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICRxLmFsbChbZ1Byb21pc2UsIHZQcm9taXNlLCB1UHJvbWlzZSwgclByb21pc2UsIGRQcm9taXNlLCBteVByb21pc2VdKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlRGlyZWN0QXNzZXRSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvdXNlci5hcGkuc2VydmljZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgc21pZGRlbGEgb24gMDIvMDMvMTcuXHJcbiAqL1xuXG52YXIgcm9sZUFQSVNlcnZpY2UgPSBleHBvcnRzLnJvbGVBUElTZXJ2aWNlID0gZnVuY3Rpb24gcm9sZUFQSVNlcnZpY2UoJGxvZywgJHEsIHJlcXVlc3RTZXJ2aWNlLCBoZWxwZXJTZXJ2aWNlLCBhcHBDb25zdGFudHMsICRpbkVycm9yKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIHJvbGVBUElTZXJ2aWNlKTtcblxuICAgICAgICAkbG9nLmxvZyhcInJvbGVBUElTZXJ2aWNlXCIpO1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICAgIHZtLmdldEFzc2lnbmVkVXNlcnMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9yb2xlL2dldGFzc2lnbmVkdXNlcnMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRBc3NpZ25lZEdyb3VwcyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3JvbGUvZ2V0YXNzaWduZWRncm91cHMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVVc2VycyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3JvbGUvZ2V0bXlhc3NpZ25hYmxldXNlcnMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVHcm91cHMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9yb2xlL2dldG15YXNzaWduYWJsZWdyb3VwcycsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15UGVybWlzc2lvbnMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9yb2xlL2dldG15cGVybWlzc2lvbnMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRBc3NpZ25lZFBlcm1pc3Npb25zID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvcm9sZS9nZXRhc3NpZ25lZHBlcm1pc3Npb25zJywgYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uYWRkUGVybWlzc2lvbiA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3JvbGUvYWRkcGVybWlzc2lvbicsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmRlbGV0ZVBlcm1pc3Npb24gPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9yb2xlL2RlbGV0ZXBlcm1pc3Npb24nLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5jcmVhdGVSb2xlID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvcm9sZS9jcmVhdGUnLCBib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uaGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coXCJoYW5kbGVSZXNwb25zZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5oYW5kbGVGYWlsdXJlID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAkaW5FcnJvci5hZGQocmVzcCk7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJoYW5kbGVGYWlsdXJlIFwiLCByZXNwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3ApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEFzc2lnbmVkR3JvdXBzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0QXNzaWduZWRHcm91cHMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRBc3NpZ25lZFVzZXJzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0QXNzaWduZWRVc2Vycyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZUdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15QXNzaWduYWJsZUdyb3Vwcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpLnRoZW4oaGVscGVyU2VydmljZS5maWx0ZXJBc3NldEdyb3VwcykudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlBc3NpZ25hYmxlVXNlcnNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUFzc2lnbmFibGVVc2Vycyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15UGVybWlzc2lvbnNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVBlcm1pc3Npb25zKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRBc3NpZ25lZFBlcm1pc3Npb25zTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0QXNzaWduZWRQZXJtaXNzaW9ucyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvcm9sZS5hcGkuc2VydmljZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHNtaWRkZWxhIG9uIDAyLzAzLzE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyByb2xlQVBJU2VydmljZXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoJGxvZywgJHEsIHJlcXVlc3RTZXJ2aWNlLCBoZWxwZXJTZXJ2aWNlLCBhcHBDb25zdGFudHMsICRpbkVycm9yKSB7XHJcbiAgICAgICAgJ25nSW5qZWN0J1xyXG4gICAgICAgICRsb2cubG9nKFwicm9sZUFQSVNlcnZpY2VcIik7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEFzc2lnbmVkVXNlcnMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvcm9sZS9nZXRhc3NpZ25lZHVzZXJzJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEFzc2lnbmVkR3JvdXBzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3JvbGUvZ2V0YXNzaWduZWRncm91cHMnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlBc3NpZ25hYmxlVXNlcnMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvcm9sZS9nZXRteWFzc2lnbmFibGV1c2VycycsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVHcm91cHMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvcm9sZS9nZXRteWFzc2lnbmFibGVncm91cHMnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlQZXJtaXNzaW9ucyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9yb2xlL2dldG15cGVybWlzc2lvbnMnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0QXNzaWduZWRQZXJtaXNzaW9ucyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9yb2xlL2dldGFzc2lnbmVkcGVybWlzc2lvbnMnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uYWRkUGVybWlzc2lvbiA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9yb2xlL2FkZHBlcm1pc3Npb24nLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5kZWxldGVQZXJtaXNzaW9uID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3JvbGUvZGVsZXRlcGVybWlzc2lvbicsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5jcmVhdGVSb2xlID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3JvbGUvY3JlYXRlJywgYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmhhbmRsZVJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgLy8kbG9nLmxvZyhcImhhbmRsZVJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uaGFuZGxlRmFpbHVyZSA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICRpbkVycm9yLmFkZChyZXNwKTtcclxuICAgICAgICAgICAgJGxvZy5sb2coXCJoYW5kbGVGYWlsdXJlIFwiLCByZXNwKTtcclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZXNwKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0QXNzaWduZWRHcm91cHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0QXNzaWduZWRHcm91cHMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSApXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEFzc2lnbmVkVXNlcnNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0QXNzaWduZWRVc2Vycyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVHcm91cHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlBc3NpZ25hYmxlR3JvdXBzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLmZpbHRlckFzc2V0R3JvdXBzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVVc2Vyc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUFzc2lnbmFibGVVc2Vycyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeVBlcm1pc3Npb25zTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15UGVybWlzc2lvbnMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5nZXRBc3NpZ25lZFBlcm1pc3Npb25zTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldEFzc2lnbmVkUGVybWlzc2lvbnMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvcm9sZS5hcGkuc2VydmljZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgc21pZGRlbGEgb24gMDEvMDMvMTcuXHJcbiAqL1xuXG52YXIgaGVscGVyVGVzdFNlcnZpY2UgPSBleHBvcnRzLmhlbHBlclRlc3RTZXJ2aWNlID0gZnVuY3Rpb24gaGVscGVyVGVzdFNlcnZpY2UoJGxvZywgJHEsIGhlbHBlclNlcnZpY2UpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgaGVscGVyVGVzdFNlcnZpY2UpO1xuXG4gICAgICAgICRsb2cubG9nKFwiaGVscGVyVGVzdFNlcnZpY2VcIik7XG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHBhdGggPSB2b2lkIDA7XG4gICAgICAgIHZhciBBU1NFVF9JRCA9IHZvaWQgMDtcbiAgICAgICAgdmFyIFBBUkVOVF9QQVRIID0gdm9pZCAwO1xuICAgICAgICB2YXIgUEFSRU5UX0lEID0gdm9pZCAwO1xuICAgICAgICB2YXIgQVNTRVRfVFlQRV9JRCA9IHZvaWQgMDtcblxuICAgICAgICB2bS50ZXN0MSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRFU1QxXCIpO1xuICAgICAgICAgICAgICAgIHBhdGggPSAnLzIvNi8nO1xuICAgICAgICAgICAgICAgIEFTU0VUX0lEID0gNjtcbiAgICAgICAgICAgICAgICBQQVJFTlRfUEFUSCA9ICcvMi82Lyc7XG4gICAgICAgICAgICAgICAgUEFSRU5UX0lEID0gNjtcbiAgICAgICAgICAgICAgICBBU1NFVF9UWVBFX0lEID0gMjtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS50ZXN0MiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRFU1QyXCIpO1xuICAgICAgICAgICAgICAgIHBhdGggPSAnLzIvNjEvNS83Mi8nO1xuICAgICAgICAgICAgICAgIEFTU0VUX0lEID0gNzI7XG4gICAgICAgICAgICAgICAgUEFSRU5UX1BBVEggPSAnLzIvNjEvJztcbiAgICAgICAgICAgICAgICBQQVJFTlRfSUQgPSA2MTtcbiAgICAgICAgICAgICAgICBBU1NFVF9UWVBFX0lEID0gNTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS50ZXN0MyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRFU1QzXCIpO1xuICAgICAgICAgICAgICAgIHBhdGggPSAnLzIvNi8yLzE0NC8yLzE0NS8yLzE0OC81LzE1Ni8nO1xuICAgICAgICAgICAgICAgIEFTU0VUX0lEID0gMTU2O1xuICAgICAgICAgICAgICAgIFBBUkVOVF9QQVRIID0gJy8yLzYvMi8xNDQvMi8xNDUvMi8xNDgvJztcbiAgICAgICAgICAgICAgICBQQVJFTlRfSUQgPSAxNDg7XG4gICAgICAgICAgICAgICAgQVNTRVRfVFlQRV9JRCA9IDU7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0ucnVuVGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXNzZXRpZCA9IGhlbHBlclNlcnZpY2UuZ2V0QXNzZXRJZDIocGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0aWQgIT0gQVNTRVRfSUQpIGNvbnNvbGUubG9nKFwiR0VUX0FTU0VUX0lEIGZhaWxlZFwiLCBwYXRoLCBcImNvbXB1dGVkXCIsIGFzc2V0aWQsIFwiRXhwZWN0ZWRcIiwgQVNTRVRfSUQpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudHBhdGggPSBoZWxwZXJTZXJ2aWNlLmdldFBhcmVudFBhdGgyKHBhdGgpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRwYXRoICE9IFBBUkVOVF9QQVRIKSBjb25zb2xlLmxvZyhcIkdFVF9QQVJFTlRfUEFUSCBmYWlsZWRcIiwgcGF0aCwgXCJjb21wdXRlZFwiLCBwYXJlbnRwYXRoLCBcIkV4cGVjdGVkXCIsIFBBUkVOVF9QQVRIKTtcblxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRpZCA9IGhlbHBlclNlcnZpY2UuZ2V0UGFyZW50SWQyKHBhdGgpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRpZCAhPSBQQVJFTlRfSUQpIGNvbnNvbGUubG9nKFwiR0VUX1BBUkVOVF9JRCBmYWlsZWRcIiwgcGF0aCwgXCJjb21wdXRlZFwiLCBwYXJlbnRpZCwgXCJFeHBlY3RlZFwiLCBQQVJFTlRfSUQpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFzc2V0dHlwZWlkID0gaGVscGVyU2VydmljZS5nZXRBc3NldFR5cGVJZDIocGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0dHlwZWlkICE9IEFTU0VUX1RZUEVfSUQpIGNvbnNvbGUubG9nKFwiR0VUX0FTU0VUX1RZUEVfSUQgZmFpbGVkXCIsIHBhdGgsIFwiY29tcHV0ZWRcIiwgYXNzZXR0eXBlaWQsIFwiRXhwZWN0ZWRcIiwgQVNTRVRfVFlQRV9JRCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0udGVzdDEoKTtcbiAgICAgICAgdm0ucnVuVGVzdCgpO1xuXG4gICAgICAgIHZtLnRlc3QyKCk7XG4gICAgICAgIHZtLnJ1blRlc3QoKTtcblxuICAgICAgICB2bS50ZXN0MygpO1xuICAgICAgICB2bS5ydW5UZXN0KCk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdGVzdC9oZWxwZXJ0ZXN0LnNlcnZpY2UuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBzbWlkZGVsYSBvbiAwMS8wMy8xNy5cclxuICovXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIGhlbHBlclRlc3RTZXJ2aWNle1xyXG4gICAgY29uc3RydWN0b3IgKCRsb2csICRxLCBoZWxwZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgJ25nSW5qZWN0J1xyXG4gICAgICAgICRsb2cubG9nKFwiaGVscGVyVGVzdFNlcnZpY2VcIik7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgbGV0IHBhdGg7XHJcbiAgICAgICAgbGV0IEFTU0VUX0lEO1xyXG4gICAgICAgIGxldCBQQVJFTlRfUEFUSDtcclxuICAgICAgICBsZXQgUEFSRU5UX0lEO1xyXG4gICAgICAgIGxldCBBU1NFVF9UWVBFX0lEO1xyXG5cclxuXHJcbiAgICAgICAgdm0udGVzdDEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVEVTVDFcIik7XHJcbiAgICAgICAgICAgIHBhdGggPSAnLzIvNi8nO1xyXG4gICAgICAgICAgICBBU1NFVF9JRCA9IDY7XHJcbiAgICAgICAgICAgIFBBUkVOVF9QQVRIID0gJy8yLzYvJztcclxuICAgICAgICAgICAgUEFSRU5UX0lEID0gNjtcclxuICAgICAgICAgICAgQVNTRVRfVFlQRV9JRCA9IDI7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLnRlc3QyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRFU1QyXCIpO1xyXG4gICAgICAgICAgICBwYXRoID0gJy8yLzYxLzUvNzIvJztcclxuICAgICAgICAgICAgQVNTRVRfSUQgPSA3MjtcclxuICAgICAgICAgICAgUEFSRU5UX1BBVEggPSAnLzIvNjEvJztcclxuICAgICAgICAgICAgUEFSRU5UX0lEID0gNjE7XHJcbiAgICAgICAgICAgIEFTU0VUX1RZUEVfSUQgPSA1O1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS50ZXN0MyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJURVNUM1wiKTtcclxuICAgICAgICAgICAgcGF0aCA9ICcvMi82LzIvMTQ0LzIvMTQ1LzIvMTQ4LzUvMTU2Lyc7XHJcbiAgICAgICAgICAgIEFTU0VUX0lEID0gMTU2O1xyXG4gICAgICAgICAgICBQQVJFTlRfUEFUSCA9ICcvMi82LzIvMTQ0LzIvMTQ1LzIvMTQ4Lyc7XHJcbiAgICAgICAgICAgIFBBUkVOVF9JRCA9IDE0ODtcclxuICAgICAgICAgICAgQVNTRVRfVFlQRV9JRCA9IDU7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLnJ1blRlc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBhc3NldGlkID0gaGVscGVyU2VydmljZS5nZXRBc3NldElkMihwYXRoKTtcclxuICAgICAgICAgICAgaWYoYXNzZXRpZCAhPSBBU1NFVF9JRClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0VUX0FTU0VUX0lEIGZhaWxlZFwiLCBwYXRoLCBcImNvbXB1dGVkXCIsIGFzc2V0aWQsIFwiRXhwZWN0ZWRcIiwgQVNTRVRfSUQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhcmVudHBhdGggPSBoZWxwZXJTZXJ2aWNlLmdldFBhcmVudFBhdGgyKHBhdGgpO1xyXG4gICAgICAgICAgICBpZihwYXJlbnRwYXRoICE9IFBBUkVOVF9QQVRIKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVRfUEFSRU5UX1BBVEggZmFpbGVkXCIsIHBhdGgsIFwiY29tcHV0ZWRcIiwgcGFyZW50cGF0aCwgXCJFeHBlY3RlZFwiLCBQQVJFTlRfUEFUSCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyZW50aWQgPSBoZWxwZXJTZXJ2aWNlLmdldFBhcmVudElkMihwYXRoKTtcclxuICAgICAgICAgICAgaWYocGFyZW50aWQgIT0gUEFSRU5UX0lEKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVRfUEFSRU5UX0lEIGZhaWxlZFwiLCBwYXRoLCBcImNvbXB1dGVkXCIsIHBhcmVudGlkLCBcIkV4cGVjdGVkXCIsIFBBUkVOVF9JRCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXNzZXR0eXBlaWQgPSBoZWxwZXJTZXJ2aWNlLmdldEFzc2V0VHlwZUlkMihwYXRoKTtcclxuICAgICAgICAgICAgaWYoYXNzZXR0eXBlaWQgIT0gQVNTRVRfVFlQRV9JRClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0VUX0FTU0VUX1RZUEVfSUQgZmFpbGVkXCIsIHBhdGgsIFwiY29tcHV0ZWRcIiwgYXNzZXR0eXBlaWQsIFwiRXhwZWN0ZWRcIiwgQVNTRVRfVFlQRV9JRCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLnRlc3QxKCk7XHJcbiAgICAgICAgdm0ucnVuVGVzdCgpO1xyXG5cclxuICAgICAgICB2bS50ZXN0MigpO1xyXG4gICAgICAgIHZtLnJ1blRlc3QoKTtcclxuXHJcbiAgICAgICAgdm0udGVzdDMoKTtcclxuICAgICAgICB2bS5ydW5UZXN0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdGVzdC9oZWxwZXJ0ZXN0LnNlcnZpY2UuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gNC8yOC8yMDE3LlxyXG4gKi9cbnZhciBwb3J0YWxMb2dpblNlcnZpY2UgPSBleHBvcnRzLnBvcnRhbExvZ2luU2VydmljZSA9IGZ1bmN0aW9uIHBvcnRhbExvZ2luU2VydmljZSgkaHR0cCwgJHJvb3RTY29wZSwgJGNvb2tpZVN0b3JlLCBBUElfSE9TVCkge1xuICAgICduZ0luamVjdCc7XG4gICAgLy8gU2VydmljZSBsb2dpY1xuICAgIC8vIC4uLlxuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIHBvcnRhbExvZ2luU2VydmljZSk7XG5cbiAgICB2YXIgdG9rZW5IYW5kbGVyID0ge307XG4gICAgdmFyIHRva2VuO1xuICAgIHZhciB1c2VyO1xuXG4gICAgLy8gdmFyIHByb2plY3RzOyAvLyB0ZW1wIGltcGxlbWVudGF0aW9uXG4gICAgdmFyIHRlbXBMb2dnZWRpbiA9IGZhbHNlO1xuXG4gICAgdmFyIG9ic2VydmVyQ2FsbGJhY2tzID0gW107XG5cbiAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQoJGNvb2tpZVN0b3JlLmdldCgndXNlckRhdGEnKSkpIHtcbiAgICAgICAgLy8gdGVtcCBsb2dpblxuICAgICAgICB2YXIgZSA9ICRjb29raWVTdG9yZS5nZXQoJ2VtYWlsJyk7XG4gICAgICAgIHZhciBwID0gJGNvb2tpZVN0b3JlLmdldCgncGFzc3dvcmQnKTtcblxuICAgICAgICAkaHR0cC5wb3N0KEFQSV9IT1NUICsgJy9hdXRoZW50aWNhdGUnLCB7IGVtYWlsOiBlLCBwYXNzd29yZDogcCB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXIsIGNvbmZpZykge1xuICAgICAgICAgICAgc2V0KHJlc3BvbnNlLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgdXNlciA9IHJlc3BvbnNlLmRhdGEudXNlcjtcbiAgICAgICAgICAgICRyb290U2NvcGUuYXV0aFVzZXIgPSByZXNwb25zZS5kYXRhLnVzZXI7XG4gICAgICAgICAgICAvLyBwcm9qZWN0cyA9IHJlc3BvbnNlLmRhdGEucHJvamVjdHM7XG4gICAgICAgICAgICB0ZW1wTG9nZ2VkaW4gPSB0cnVlO1xuICAgICAgICAgICAgbm90aWZ5T2JzZXJ2ZXJzKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlciwgY29uZmlnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gZXJyb3InKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZW5kIHRlbXAgbG9naW5cbiAgICB9XG5cbiAgICAvL2xvZ2luXG4gICAgdmFyIF9sb2dpbiA9IGZ1bmN0aW9uIF9sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQsIGNhbGxiYWNrLCBmYWlsdXJlKSB7XG4gICAgICAgICRodHRwLnBvc3QoQVBJX0hPU1QgKyAnL2F1dGhlbnRpY2F0ZScsIHsgZW1haWw6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmQgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyLCBjb25maWcpIHtcbiAgICAgICAgICAgIHNldChyZXNwb25zZS5kYXRhLnRva2VuKTtcbiAgICAgICAgICAgIHVzZXIgPSByZXNwb25zZS5kYXRhLnVzZXI7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLmF1dGhVc2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xuICAgICAgICAgICAgLy8gcHJvamVjdHMgPSByZXNwb25zZS5kYXRhLnByb2plY3RzO1xuICAgICAgICAgICAgJGNvb2tpZVN0b3JlLnB1dCgndG9rZW4nLCB0b2tlbik7XG4gICAgICAgICAgICAkY29va2llU3RvcmUucHV0KCd1c2VyRGF0YScsICRyb290U2NvcGUuYXV0aFVzZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGVtcExvZ2dlZGluID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vdGlmeU9ic2VydmVycygpO1xuICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgJGNvb2tpZVN0b3JlLnB1dCgnZW1haWwnLCB1c2VybmFtZSk7XG4gICAgICAgICAgICAkY29va2llU3RvcmUucHV0KCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcbiAgICAgICAgICAgICRjb29raWVTdG9yZS5wdXQoJ2xvZ2dlZEluJywgdHJ1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlciwgY29uZmlnKSB7XG4gICAgICAgICAgICBmYWlsdXJlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vZW5kIGxvZ2luXG4gICAgdmFyIG5vdGlmeU9ic2VydmVycyA9IGZ1bmN0aW9uIG5vdGlmeU9ic2VydmVycygpIHtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKG9ic2VydmVyQ2FsbGJhY2tzLCBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgc2V0ID0gZnVuY3Rpb24gc2V0KG5ld1Rva2VuKSB7XG4gICAgICAgIHRva2VuID0gbmV3VG9rZW47XG4gICAgfTtcblxuICAgIHRva2VuSGFuZGxlci5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9O1xuXG4gICAgdmFyIHdyYXBBY3Rpb25zID0gZnVuY3Rpb24gd3JhcEFjdGlvbnMocmVzb3VyY2UsIGFjdGlvbnMpIHtcbiAgICAgICAgdmFyIHdyYXBwZWRSZXNvdXJjZSA9IHJlc291cmNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRva2VuV3JhcHBlcih3cmFwcGVkUmVzb3VyY2UsIGFjdGlvbnNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiBtb2RpZmllZCBjb3B5IG9mIHJlc291cmNlXG4gICAgICAgIHJldHVybiB3cmFwcGVkUmVzb3VyY2U7XG4gICAgfTtcblxuICAgIC8vIHdyYXBzIHJlc291cmNlIGFjdGlvbiB0byBzZW5kIHJlcXVlc3Qgd2l0aCBhdXRoIHRva2VuXG4gICAgdmFyIHRva2VuV3JhcHBlciA9IGZ1bmN0aW9uIHRva2VuV3JhcHBlcihyZXNvdXJjZSwgYWN0aW9uKSB7XG4gICAgICAgIC8vIGNvcHkgb3JpZ2luYWwgYWN0aW9uXG4gICAgICAgIHJlc291cmNlWydfJyArIGFjdGlvbl0gPSByZXNvdXJjZVthY3Rpb25dO1xuICAgICAgICByZXNvdXJjZVthY3Rpb25dID0gZnVuY3Rpb24gKGRhdGEsIHN1Y2Nlc3MsIGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VbJ18nICsgYWN0aW9uXShhbmd1bGFyLmV4dGVuZCh7fSwgZGF0YSB8fCB7fSwgeyB0b2tlbjogdG9rZW5IYW5kbGVyLmdldCgpIH0pLCBzdWNjZXNzLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHB1dENvb2tpZXMobmFtZSwgZGF0YSkge1xuICAgICAgICB2YXIgc3RyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RyID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgc3RyID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgQVBJIGhlcmVcbiAgICByZXR1cm4ge1xuICAgICAgICB3cmFwQWN0aW9uczogd3JhcEFjdGlvbnMsXG4gICAgICAgIGdldFVzZXI6IGZ1bmN0aW9uIGdldFVzZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvamVjdHM6IGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgICAgICB9LFxuICAgICAgICBvblRlbXBMb2dpbjogZnVuY3Rpb24gb25UZW1wTG9naW4oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBsb2dpbjogZnVuY3Rpb24gbG9naW4odSwgcCwgYywgZikge1xuICAgICAgICAgICAgcmV0dXJuIF9sb2dpbih1LCBwLCBjLCBmKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNUZW1wTG9nZ2VkOiBmdW5jdGlvbiBpc1RlbXBMb2dnZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcExvZ2dlZGluO1xuICAgICAgICB9LFxuICAgICAgICBnZXRUb2tlbjogdG9rZW5IYW5kbGVyLmdldFxuICAgIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcG9ydGFsL2xvZ2luL3BvcnRhbC5sb2dpbi5zZXJ2aWNlLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gNC8yOC8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIHBvcnRhbExvZ2luU2VydmljZXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoJGh0dHAsICRyb290U2NvcGUsJGNvb2tpZVN0b3JlLCBBUElfSE9TVCkge1xyXG4gICAgICAgICduZ0luamVjdCdcclxuICAgICAgICAvLyBTZXJ2aWNlIGxvZ2ljXHJcbiAgICAgICAgLy8gLi4uXHJcblxyXG4gICAgICAgIHZhciB0b2tlbkhhbmRsZXIgPSB7fTtcclxuICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgdmFyIHVzZXI7XHJcblxyXG4gICAgICAgIC8vIHZhciBwcm9qZWN0czsgLy8gdGVtcCBpbXBsZW1lbnRhdGlvblxyXG4gICAgICAgIHZhciB0ZW1wTG9nZ2VkaW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIG9ic2VydmVyQ2FsbGJhY2tzID0gW107XHJcblxyXG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKCRjb29raWVTdG9yZS5nZXQoJ3VzZXJEYXRhJykpKXtcclxuICAgICAgICAgICAgLy8gdGVtcCBsb2dpblxyXG4gICAgICAgICAgICB2YXIgZSA9ICRjb29raWVTdG9yZS5nZXQoJ2VtYWlsJyk7XHJcbiAgICAgICAgICAgIHZhciBwID0gJGNvb2tpZVN0b3JlLmdldCgncGFzc3dvcmQnKTtcclxuXHJcbiAgICAgICAgICAgICRodHRwLnBvc3QoQVBJX0hPU1QgKyAnL2F1dGhlbnRpY2F0ZScsIHtlbWFpbDplLHBhc3N3b3JkOnB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXQocmVzcG9uc2UuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9IHJlc3BvbnNlLmRhdGEudXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmF1dGhVc2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RzID0gcmVzcG9uc2UuZGF0YS5wcm9qZWN0cztcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wTG9nZ2VkaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeU9ic2VydmVycygpO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCBoZWFkZXIsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBlcnJvcicpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGVuZCB0ZW1wIGxvZ2luXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2xvZ2luXHJcbiAgICAgICAgdmFyIGxvZ2luID0gZnVuY3Rpb24odXNlcm5hbWUscGFzc3dvcmQsY2FsbGJhY2ssIGZhaWx1cmUpe1xyXG4gICAgICAgICAgICAkaHR0cC5wb3N0KEFQSV9IT1NUICsgJy9hdXRoZW50aWNhdGUnLCB7ZW1haWw6dXNlcm5hbWUscGFzc3dvcmQ6cGFzc3dvcmR9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXQocmVzcG9uc2UuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9IHJlc3BvbnNlLmRhdGEudXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmF1dGhVc2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RzID0gcmVzcG9uc2UuZGF0YS5wcm9qZWN0cztcclxuICAgICAgICAgICAgICAgICAgICAkY29va2llU3RvcmUucHV0KCd0b2tlbicsdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICRjb29raWVTdG9yZS5wdXQoJ3VzZXJEYXRhJywkcm9vdFNjb3BlLmF1dGhVc2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcExvZ2dlZGluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZnlPYnNlcnZlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvb2tpZVN0b3JlLnB1dCgnZW1haWwnLHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29va2llU3RvcmUucHV0KCdwYXNzd29yZCcscGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjb29raWVTdG9yZS5wdXQoJ2xvZ2dlZEluJyx0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgaGVhZGVyLCBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBmYWlsdXJlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZW5kIGxvZ2luXHJcbiAgICAgICAgdmFyIG5vdGlmeU9ic2VydmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gob2JzZXJ2ZXJDYWxsYmFja3MsIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgc2V0ID0gZnVuY3Rpb24obmV3VG9rZW4pIHtcclxuICAgICAgICAgICAgdG9rZW4gPSBuZXdUb2tlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRva2VuSGFuZGxlci5nZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHdyYXBBY3Rpb25zID0gZnVuY3Rpb24ocmVzb3VyY2UsIGFjdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIHdyYXBwZWRSZXNvdXJjZSA9IHJlc291cmNlO1xyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRva2VuV3JhcHBlcih3cmFwcGVkUmVzb3VyY2UsIGFjdGlvbnNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBtb2RpZmllZCBjb3B5IG9mIHJlc291cmNlXHJcbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVkUmVzb3VyY2U7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gd3JhcHMgcmVzb3VyY2UgYWN0aW9uIHRvIHNlbmQgcmVxdWVzdCB3aXRoIGF1dGggdG9rZW5cclxuICAgICAgICB2YXIgdG9rZW5XcmFwcGVyID0gZnVuY3Rpb24ocmVzb3VyY2UsIGFjdGlvbikge1xyXG4gICAgICAgICAgICAvLyBjb3B5IG9yaWdpbmFsIGFjdGlvblxyXG4gICAgICAgICAgICByZXNvdXJjZVsnXycgKyBhY3Rpb25dID0gcmVzb3VyY2VbYWN0aW9uXTtcclxuICAgICAgICAgICAgcmVzb3VyY2VbYWN0aW9uXSA9IGZ1bmN0aW9uKGRhdGEsIHN1Y2Nlc3MsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VbJ18nICsgYWN0aW9uXShcclxuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmV4dGVuZCh7fSwgZGF0YSB8fCB7fSwge3Rva2VuOiB0b2tlbkhhbmRsZXIuZ2V0KCl9KSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHB1dENvb2tpZXMobmFtZSwgZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgc3RyO1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHVibGljIEFQSSBoZXJlXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgd3JhcEFjdGlvbnMgOiB3cmFwQWN0aW9ucyxcclxuICAgICAgICAgICAgZ2V0VXNlciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFByb2plY3RzIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uVGVtcExvZ2luOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ2luOiBmdW5jdGlvbih1LHAsYyxmKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9naW4odSxwLGMsZik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlzVGVtcExvZ2dlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVtcExvZ2dlZGluO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRUb2tlbjogdG9rZW5IYW5kbGVyLmdldFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcG9ydGFsL2xvZ2luL3BvcnRhbC5sb2dpbi5zZXJ2aWNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMTEvMjAxNy5cclxuICovXG52YXIgJGluRGlhbG9nID0gZXhwb3J0cy4kaW5EaWFsb2cgPSBmdW5jdGlvbiAkaW5EaWFsb2coKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCAkaW5EaWFsb2cpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dpZGdldHMvZGlyZWN0aXZlcy9pbkRpYWxvZy9pbi5kaWFsb2cuc2VydmljZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMTEvMjAxNy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyAkaW5EaWFsb2d7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgICduZ0luamVjdCdcclxuXHJcblxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93aWRnZXRzL2RpcmVjdGl2ZXMvaW5EaWFsb2cvaW4uZGlhbG9nLnNlcnZpY2UuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiAgQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXG4gKlxuICogICAgTk9URSA6IFlvdSBoYXZlIHRvIGluaXRpYWxpemUgaXQgb25jZSBpbiB0aGUgaW5kZXguaHRtbCBmaWxlLlxuICpcbiAqICBQYXJhbXNcbiAqXG4gKiAgICAgIGNvbnRyb2xsZXIgPSBbIHN0cmluZyBdIG5nQ29udHJvbGxlciBuYW1lXG4gKiAgICAgIHRlbXBsYXRlVXJsID0gWyBzdHJpbmcgXSB1cmwgb2YgdGhlIEhUTUwgdGVtcGxhdGVcbiAqICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZSA9IFsgYm9vbGVhbiBdIGVuYWJsZS9kaXNhYmxlIGNsb3NlIGFjdGlvbiB3aGVuIHVzZXIgY2xpY2sgb3V0c2lkZSBvZiB0aGUgZGlhbG9nIC8gZGVmYXVsdCA9IHRydWVcbiAqICAgICAgZXNjYXBlVG9DbG9zZSA9IFsgYm9vbGVhbiBdIGVuYWJsZS9kaXNhYmxlIGNsb3NlIGFjdG9uIHdoZW4gdXNlciBwcmVzcyBlc2NhcGUgYnV0dG9uIC8gZGVmYXVsdCA9IHRydWVcbiAqICAgICAgaGVpZ2h0ID0gWyBpbnQgXSBkaWFsb2cgaGVpZ2h0XG4gKiAgICAgIHdpZHRoID0gWyBpbnQgXSBkaWFsb2cgd2lkdGhcbiAqXG4gKi9cbnZhciBpbkRpYWxvZyA9IGV4cG9ydHMuaW5EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gaW5EaWFsb2coKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGluRGlhbG9nKTtcblxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0UnO1xuICAgICAgICB0aGlzLnNjb3BlID0ge307XG4gICAgICAgIHRoaXMudGVtcGxhdGVVcmwgPSAnYXBwL3dpZGdldHMvZGlyZWN0aXZlcy9pbkRpYWxvZy9pbi5kaWFsb2cuaHRtbCc7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKGluRGlhbG9nLCBbe1xuICAgICAgICBrZXk6ICdjb250cm9sbGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRyb2xsZXIoJGluRGlhbG9nLCAkc2NvcGUpIHtcbiAgICAgICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgICAgICRzY29wZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICRzY29wZS5jbGlja091dHNpZGVUb0Nsb3NlID0gdHJ1ZTtcbiAgICAgICAgICAgICRzY29wZS5lc2NhcGVUb0Nsb3NlID0gdHJ1ZTtcblxuICAgICAgICAgICAgdmFyIGhpZGUgPSBmdW5jdGlvbiBoaWRlKGFwcGx5KSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChhcHBseSkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmNvbnRyb2xsZXIgIT0gbnVsbCAmJiBkYXRhLnRlbXBsYXRlVXJsICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0eWxlID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEgPSBhbmd1bGFyLmNvcHkoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kYXRhLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0eWxlICs9ICdoZWlnaHQ6ICcgKyAkc2NvcGUuZGF0YS5oZWlnaHQgKyAncHg7ICc7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3R5bGUgKz0gJ3RvcDogNTAlOyAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0eWxlICs9ICdtYXJnaW4tdG9wOiAnICsgLTEgKiAkc2NvcGUuZGF0YS5oZWlnaHQgLyAyICsgJ3B4OyAnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0eWxlICs9ICd3aWR0aDogJyArICRzY29wZS5kYXRhLndpZHRoICsgJ3B4OyAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0eWxlICs9ICdsZWZ0OiA1MCU7ICc7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3R5bGUgKz0gJ21hcmdpbi1sZWZ0OiAnICsgLTEgKiAkc2NvcGUuZGF0YS53aWR0aCAvIDIgKyAncHg7ICc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRhdGEuY2xpY2tPdXRzaWRlVG9DbG9zZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuY2xpY2tPdXRzaWRlVG9DbG9zZSA9ICRzY29wZS5kYXRhLmNsaWNrT3V0c2lkZVRvQ2xvc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kYXRhLmVzY2FwZVRvQ2xvc2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVzY2FwZVRvQ2xvc2UgPSAkc2NvcGUuZGF0YS5lc2NhcGVUb0Nsb3NlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJHNjb3BlLmJhY2tEcm9wQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kYXRhLmNsaWNrT3V0c2lkZVRvQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICQod2luZG93KS5rZXlkb3duKGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT0gMjcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lc2NhcGVUb0Nsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRpbkRpYWxvZy5oaWRlID0gaGlkZTtcblxuICAgICAgICAgICAgJGluRGlhbG9nLnNob3cgPSBzaG93O1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIGluRGlhbG9nO1xufSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd2lkZ2V0cy9kaXJlY3RpdmVzL2luRGlhbG9nL2luLmRpYWxvZy5qcyIsIi8qKlxuICogIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8xMS8yMDE3LlxuICpcbiAqICAgIE5PVEUgOiBZb3UgaGF2ZSB0byBpbml0aWFsaXplIGl0IG9uY2UgaW4gdGhlIGluZGV4Lmh0bWwgZmlsZS5cbiAqXG4gKiAgUGFyYW1zXG4gKlxuICogICAgICBjb250cm9sbGVyID0gWyBzdHJpbmcgXSBuZ0NvbnRyb2xsZXIgbmFtZVxuICogICAgICB0ZW1wbGF0ZVVybCA9IFsgc3RyaW5nIF0gdXJsIG9mIHRoZSBIVE1MIHRlbXBsYXRlXG4gKiAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2UgPSBbIGJvb2xlYW4gXSBlbmFibGUvZGlzYWJsZSBjbG9zZSBhY3Rpb24gd2hlbiB1c2VyIGNsaWNrIG91dHNpZGUgb2YgdGhlIGRpYWxvZyAvIGRlZmF1bHQgPSB0cnVlXG4gKiAgICAgIGVzY2FwZVRvQ2xvc2UgPSBbIGJvb2xlYW4gXSBlbmFibGUvZGlzYWJsZSBjbG9zZSBhY3RvbiB3aGVuIHVzZXIgcHJlc3MgZXNjYXBlIGJ1dHRvbiAvIGRlZmF1bHQgPSB0cnVlXG4gKiAgICAgIGhlaWdodCA9IFsgaW50IF0gZGlhbG9nIGhlaWdodFxuICogICAgICB3aWR0aCA9IFsgaW50IF0gZGlhbG9nIHdpZHRoXG4gKlxuICovXG5leHBvcnQgY2xhc3MgaW5EaWFsb2cge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgICduZ0luamVjdCdcblxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0UnO1xuICAgICAgICB0aGlzLnNjb3BlID0ge307XG4gICAgICAgIHRoaXMudGVtcGxhdGVVcmwgPSAnYXBwL3dpZGdldHMvZGlyZWN0aXZlcy9pbkRpYWxvZy9pbi5kaWFsb2cuaHRtbCc7XG5cbiAgICB9XG5cbiAgICBjb250cm9sbGVyKCRpbkRpYWxvZywgJHNjb3BlKXtcbiAgICAgICAgJ25nSW5qZWN0J1xuXG4gICAgICAgICRzY29wZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgJHNjb3BlLmNsaWNrT3V0c2lkZVRvQ2xvc2UgPSB0cnVlO1xuICAgICAgICAkc2NvcGUuZXNjYXBlVG9DbG9zZSA9IHRydWU7XG5cbiAgICAgICAgdmFyIGhpZGUgPSBmdW5jdGlvbiAoYXBwbHkpIHtcbiAgICAgICAgICAgICRzY29wZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKGFwcGx5KXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2hvdyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZihkYXRhICYmIGRhdGEuY29udHJvbGxlciAhPSBudWxsICYmIGRhdGEudGVtcGxhdGVVcmwgIT0gbnVsbCl7XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3R5bGUgPSAnJztcblxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhID0gYW5ndWxhci5jb3B5KGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgaWYoJHNjb3BlLmRhdGEuaGVpZ2h0KXtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0eWxlICs9ICdoZWlnaHQ6ICcgKyAkc2NvcGUuZGF0YS5oZWlnaHQgKyAncHg7ICc7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zdHlsZSArPSAndG9wOiA1MCU7ICc7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zdHlsZSArPSAnbWFyZ2luLXRvcDogJyArICgtMSAqICRzY29wZS5kYXRhLmhlaWdodCAvIDIpICsgJ3B4OyAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZigkc2NvcGUuZGF0YS53aWR0aCl7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zdHlsZSArPSAnd2lkdGg6ICcgKyAkc2NvcGUuZGF0YS53aWR0aCArICdweDsgJztcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0eWxlICs9ICdsZWZ0OiA1MCU7ICc7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zdHlsZSArPSAnbWFyZ2luLWxlZnQ6ICcgKyAoLTEgKiAkc2NvcGUuZGF0YS53aWR0aCAvIDIpICsgJ3B4OyAnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCRzY29wZS5kYXRhLmNsaWNrT3V0c2lkZVRvQ2xvc2UgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5jbGlja091dHNpZGVUb0Nsb3NlID0gJHNjb3BlLmRhdGEuY2xpY2tPdXRzaWRlVG9DbG9zZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoJHNjb3BlLmRhdGEuZXNjYXBlVG9DbG9zZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVzY2FwZVRvQ2xvc2UgPSAkc2NvcGUuZGF0YS5lc2NhcGVUb0Nsb3NlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAkc2NvcGUuYmFja0Ryb3BDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmKCRzY29wZS5kYXRhLmNsaWNrT3V0c2lkZVRvQ2xvc2Upe1xuICAgICAgICAgICAgICAgIGhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5rZXlkb3duKGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKCRldmVudC5rZXlDb2RlID09IDI3KXtcbiAgICAgICAgICAgICAgICBpZigkc2NvcGUuZXNjYXBlVG9DbG9zZSl7XG4gICAgICAgICAgICAgICAgICAgIGhpZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgICRpbkRpYWxvZy5oaWRlID0gaGlkZTtcblxuICAgICAgICAkaW5EaWFsb2cuc2hvdyA9IHNob3c7XG5cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dpZGdldHMvZGlyZWN0aXZlcy9pbkRpYWxvZy9pbi5kaWFsb2cuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi85LzIwMTcuXHJcbiAqL1xudmFyIGR5bmFtaWNDb250cm9sbGVyID0gZXhwb3J0cy5keW5hbWljQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkeW5hbWljQ29udHJvbGxlcigpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgZHluYW1pY0NvbnRyb2xsZXIpO1xuXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMudGVybWluYWwgPSB0cnVlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gMTAwMDAwO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhkeW5hbWljQ29udHJvbGxlciwgW3tcbiAgICAgICAga2V5OiAnY29udHJvbGxlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb250cm9sbGVyKCRzY29wZSwgJGNvbXBpbGUsICRwYXJzZSkge1xuICAgICAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICAgICAgJHNjb3BlLmNvbXBpbGUgPSAkY29tcGlsZTtcbiAgICAgICAgICAgICRzY29wZS5wYXJzZSA9ICRwYXJzZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGluaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHNjb3BlLnBhcnNlKGVsZW0uYXR0cignZHluYW1pYy1jb250cm9sbGVyJykpKHNjb3BlKTtcbiAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cignZHluYW1pYy1jb250cm9sbGVyJyk7XG4gICAgICAgICAgICBlbGVtLmF0dHIoJ25nLWNvbnRyb2xsZXInLCBuYW1lKTtcbiAgICAgICAgICAgIHNjb3BlLmNvbXBpbGUoZWxlbSkoc2NvcGUpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIGR5bmFtaWNDb250cm9sbGVyO1xufSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZmxvd01hbmFnZXIvZHluYW1pYy5jb250cm9sbGVyLmRpcmVjdGl2ZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvOS8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGR5bmFtaWNDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcclxuICAgICAgICB0aGlzLnRlcm1pbmFsID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gMTAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRyb2xsZXIoJHNjb3BlLCAkY29tcGlsZSwgJHBhcnNlKXtcclxuICAgICAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgICAgICAkc2NvcGUuY29tcGlsZSA9ICRjb21waWxlO1xyXG4gICAgICAgICRzY29wZS5wYXJzZSA9ICRwYXJzZTtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rKHNjb3BlLCBlbGVtKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBzY29wZS5wYXJzZShlbGVtLmF0dHIoJ2R5bmFtaWMtY29udHJvbGxlcicpKShzY29wZSk7XHJcbiAgICAgICAgZWxlbS5yZW1vdmVBdHRyKCdkeW5hbWljLWNvbnRyb2xsZXInKTtcclxuICAgICAgICBlbGVtLmF0dHIoJ25nLWNvbnRyb2xsZXInLCBuYW1lKTtcclxuICAgICAgICBzY29wZS5jb21waWxlKGVsZW0pKHNjb3BlKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2Zsb3dNYW5hZ2VyL2R5bmFtaWMuY29udHJvbGxlci5kaXJlY3RpdmUuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi85LzIwMTcuXHJcbiAqL1xuXG52YXIgc2V0RG9tID0gZXhwb3J0cy5zZXREb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gc2V0RG9tKCkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBzZXREb20pO1xuXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuc2NvcGUgPSB7XG4gICAgICAgICAgICAnd2lkZ2V0RGF0YSc6ICc9J1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhzZXREb20sIFt7XG4gICAgICAgIGtleTogJ2xpbmsnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGluayhzY29wZSwgZWxtLCBhdHRyKSB7XG4gICAgICAgICAgICB2YXIgd2lkZ2V0ID0gc2NvcGUud2lkZ2V0RGF0YTtcbiAgICAgICAgICAgIGZsb3dNYW5hZ2VyLndpZGdldERhdGFbd2lkZ2V0LnRhZ10gPSB7IERPTTogZWxtLCB3aWRnZXQ6IHdpZGdldCB9O1xuICAgICAgICAgICAgZmxvd01hbmFnZXIuc2V0U2NvcGUod2lkZ2V0KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBzZXREb207XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mbG93TWFuYWdlci9zZXQuZG9tLmRpcmVjdGl2ZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvOS8yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBzZXREb20ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB7XHJcbiAgICAgICAgICAgICd3aWRnZXREYXRhJyA6ICc9J1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGluayhzY29wZSwgZWxtLCBhdHRyKXtcclxuICAgICAgICB2YXIgd2lkZ2V0ID0gc2NvcGUud2lkZ2V0RGF0YTtcclxuICAgICAgICBmbG93TWFuYWdlci53aWRnZXREYXRhW3dpZGdldC50YWddID0geyBET006ZWxtLCB3aWRnZXQ6d2lkZ2V0IH07XHJcbiAgICAgICAgZmxvd01hbmFnZXIuc2V0U2NvcGUod2lkZ2V0KTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mbG93TWFuYWdlci9zZXQuZG9tLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=