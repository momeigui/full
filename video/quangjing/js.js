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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_css_css__ = __webpack_require__(1);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_css_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_css_css__);
    /**
     * Created by sanchez 
     */
    
    // import CSS
    // import animate_css from 'animate.css/animate.min.css';
    
    // import scss from '../css/sass.scss';
    
    
    // require('aframe');
    // require('t')
    // window.Detector = require('./entities/Detector');
    // require('./entities/CanvasRenderer');
    // require('./entities/Projector');
    // require('jquery.valiant360');
    // import Js Plugins/Entities
    
    //ES6 Module
    // import Bar1 from './entities/Bar1';
    // import Howler from 'howler';
    // //CommonJS
    // var Bar2=require('./entities/Bar2');
    
    if (/Mobile/i.test(navigator.userAgent)) {
        window.isMobile = true;
    } else {
        window.isMobile = false;
    }
    
    
    window.h5 = {
        initThree360: function() {
            var camera, scene, renderer;
            var texture_placeholder,
                isUserInteracting = false,
                onMouseDownMouseX = 0,
                onMouseDownMouseY = 0,
                lon = 0,
                onMouseDownLon = 0,
                lat = 0,
                onMouseDownLat = 0,
                phi = 0,
                theta = 0,
                distance = 500,
                onPointerDownPointerX = 0,
                onPointerDownPointerY = 0,
                onPointerDownLon = 0,
                onPointerDownLat = 0;
            init();
            // animate();
    
            function init() {
                var container, mesh;
                window.loaded = false;
                container = document.getElementById('container');
                camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
                camera.target = new THREE.Vector3(0, 0, 0);
                scene = new THREE.Scene();
                var geometry = new THREE.SphereBufferGeometry(500, 60, 40);
                // invert the geometry on the x-axis so that all of the faces point inward
                geometry.scale(-1, 1, 1);
                var play_btn = document.getElementById('play_btn');
                var video = document.createElement('video');
                video.width = 640;
                video.height = 360;
                video.loop = true;
                video.muted = true;
    
                video.src = 'http://flimshaw.github.io/Valiant360/videos/overpass-2k.mp4';
                video.setAttribute('webkit-playsinline', 'webkit-playsinline');
                video.setAttribute('playsinline', 'playsinline');
                video.setAttribute('x5-video-player-fullscreen', 'false');
                video.setAttribute('x5-video-player-type', 'h5');
                video.setAttribute('x-webkit-airplay', 'true');
                video.crossOrigin = "Anonymous";
    
    
                // play_btn.innerHTML = 'Play';
                var texture = new THREE.VideoTexture(video);
                texture.minFilter = THREE.LinearFilter;
                texture.format = THREE.RGBFormat;
                var material = new THREE.MeshBasicMaterial({ map: texture });
                mesh = new THREE.Mesh(geometry, material);
                scene.add(mesh);
                renderer = new THREE.WebGLRenderer();
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(window.innerWidth, window.innerHeight);
                container.appendChild(renderer.domElement);
                animate();
    
    
                play_btn.addEventListener('click', function() {
                    play_btn.innerHTML = 'Play';
                    if (!window.loaded) {
                        // video.pause();
                        window.loaded = true;
                    } else {
                        video.play();
                        play_btn.style.display = 'none';
                    }
                }, true);
                var eventstart, eventmove, eventstart;
    
                document.addEventListener('touchstart', function(e) {}, false);
                document.addEventListener('touchmove', function(e) {
                    e.preventDefault();
                }, false);
    
                container.addEventListener('touchstart', onDocumenTouchDown, false);
                container.addEventListener('touchmove', onDocumentTouchMove, false);
                container.addEventListener('touchend', onDocumentTouchUp, false);
    
                container.addEventListener('mousedown', onDocumentMouseDown, false);
                container.addEventListener('mousemove', onDocumentMouseMove, false);
                container.addEventListener('mouseup', onDocumentMouseUp, false);
    
    
                window.addEventListener('resize', onWindowResize, false);
            }
    
            function onWindowResize() {
                if (/Mobile/i.test(navigator.userAgent)) {
                    window.isMobile = true;
                } else {
                    window.isMobile = false;
                }
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
    
    
            function onDocumentMouseDown(event) {
                event.preventDefault();
                isUserInteracting = true;
                onPointerDownPointerX = event.clientX;
                onPointerDownPointerY = event.clientY;
                onPointerDownLon = lon;
                onPointerDownLat = lat;
            }
    
            function onDocumentMouseMove(event) {
    
                if (isUserInteracting === true) {
                    lon = (onPointerDownPointerX - event.clientX) * 0.5 + onPointerDownLon;
                    lat = (event.clientY - onPointerDownPointerY) * 0.5 + onPointerDownLat;
    
                }
            }
    
            function onDocumentMouseUp(event) {
                isUserInteracting = false;
            }
    
            function onDocumenTouchDown(event) {
                event.preventDefault();
                isUserInteracting = true;
                onPointerDownPointerX = event.touches[0].clientX;
                onPointerDownPointerY = event.touches[0].clientY;
                onPointerDownLon = lon;
                onPointerDownLat = lat;
            }
    
            function onDocumentTouchMove(event) {
    
                if (isUserInteracting === true) {
                    lon = (onPointerDownPointerX - event.touches[0].clientX) * 0.5 + onPointerDownLon;
                    lat = (event.touches[0].clientY - onPointerDownPointerY) * 0.5 + onPointerDownLat;
    
                }
            }
    
            function onDocumentTouchUp(event) {
                isUserInteracting = false;
            }
    
            function animate() {
                requestAnimationFrame(animate);
                update();
            }
    
            function update() {
                lat = Math.max(-85, Math.min(85, lat));
                phi = THREE.Math.degToRad(90 - lat);
                theta = THREE.Math.degToRad(lon);
                camera.position.x = distance * Math.sin(phi) * Math.cos(theta);
                camera.position.y = distance * Math.cos(phi);
                camera.position.z = distance * Math.sin(phi) * Math.sin(theta);
                camera.lookAt(camera.target);
                /*
                // distortion
                camera.position.copy( camera.target ).negate();
                */
                renderer.render(scene, camera);
            }
    
        },
        initValiant360: function() {
            var play_btn = document.getElementById('play_btn');
            $('.valiantContainer').Valiant360();
            play_btn.addEventListener('click', function() {
                // play
                $('.valiantContainer').Valiant360('play');
                $('.valiantContainer').Valiant360('pause');
            }, false);
            $('.valiantContainer').Valiant360('loadVideo', './assets/media/city.mp4');
            $('.valiantContainer').Valiant360('play');
            // $('.valiantContainer').Valiant360('pause');
    
        },
        rootResize2: function() {
            //orientation landscape width=1334px
            var wFsize;
            var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width :
                window.innerWidth : window.innerWidth;
            var wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ?
                screen.height : window.innerHeight : window.innerHeight;
            if (wWidth > wHeight) {
                wHeight = wWidth;
            }
            wFsize = wHeight / 13.34;
            document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
        },
        rootResize1: function() {
            //orientation landscape width=1334px
            var that = this;
            var Dpr = 1,
                uAgent = window.navigator.userAgent;
            var isIOS = uAgent.match(/iphone/i);
            var isYIXIN = uAgent.match(/yixin/i);
            var is2345 = uAgent.match(/Mb2345/i);
            var ishaosou = uAgent.match(/mso_app/i);
            var isSogou = uAgent.match(/sogoumobilebrowser/ig);
            var isLiebao = uAgent.match(/liebaofast/i);
            var isGnbr = uAgent.match(/GNBR/i);
            var isWeixin = uAgent.match(/MicroMessenger/i);
            var wFsize;
            var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width :
                window.innerWidth : window.innerWidth;
            var wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ?
                screen.height : window.innerHeight : window.innerHeight;
            if (isIOS) {
                wWidth = screen.width;
                wHeight = screen.height;
            }
            if (wWidth > wHeight) {
                wHeight = wWidth;
            }
            wFsize = wHeight / 13.34;
            if (isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr || isWeixin) { //YIXIN 和 2345 这里有个刚调用系统浏览器时候的bug，需要一点延迟来获取
                setTimeout(function() {
                    wHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                    wWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    if (wWidth > wHeight) {
                        wHeight = wWidth;
                    }
                    wFsize = wHeight / 13.34;
                    // wFsize = wFsize > 32 ? wFsize : 32;
                    document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
                }, 500);
            } else {
                document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
            }
    
            return that;
    
        },
        eventInit: function() {
            var that = this;
            document.addEventListener('touchstart', function(e) {}, false);
            document.addEventListener('touchmove', function(e) {
                e.preventDefault();
            }, false);
            return that;
        },
        cssInit: function() {
            var that = this;
            /*
            that.rootResize1();
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
                if (window.orientation == 90 || window.orientation == -90) {
                    //横屏
                    //_.renderShuping();
                    that.rootResize();
                } else {
                    //竖屏
                    //_.closeShuping();
                }
            }, false);
            */
            var noChangeCountToEnd = 100,
                noEndTimeout = 1000;
            that.rootResize2();
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
                var interval,
                    timeout,
                    end,
                    lastInnerWidth,
                    lastInnerHeight,
                    noChangeCount;
                end = function() {
                    // "orientationchangeend"
                    clearInterval(interval);
                    clearTimeout(timeout);
                    interval = null;
                    timeout = null;
                    that.rootResize1();
                };
                interval = setInterval(function() {
                    if (window.innerWidth === lastInnerWidth && window.innerHeight === lastInnerHeight) {
                        noChangeCount++;
                        if (noChangeCount === noChangeCountToEnd) {
                            // The interval resolved the issue first.
                            end();
                        }
                    } else {
                        lastInnerWidth = window.innerWidth;
                        lastInnerHeight = window.innerHeight;
                        noChangeCount = 0;
                    }
                });
                timeout = setTimeout(function() {
                    // The timeout happened first.
                    end();
                }, noEndTimeout);
            });
    
            return that;
        }
    };
    window.h5.initThree360();
    // window.h5.initValiant360();
    // window.h5.cssInit().eventInit();
    
    
    function showStats() {
        var stats = new Stats();
        stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        var fs = document.createElement('div');
        fs.style.position = 'absolute';
        fs.style.left = 0;
        fs.style.top = 0;
        fs.style.zIndex = 999;
        fs.appendChild(stats.domElement);
        document.body.appendChild(fs);
    
        function animate() {
            stats.begin();
            // monitored code goes here
            stats.end();
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }
    showStats();
    
    /***/ }),
    /* 1 */
    /***/ (function(module, exports) {
    
    // removed by extract-text-webpack-plugin
    
    /***/ })
    /******/ ]);
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTc1ZWZkZmYwZDgyOTc2YTMyYTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY3NzL2Nzcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxlQUFlO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFk7Ozs7OztBQ25XQSx5QyIsImZpbGUiOiJhc3NldHMvanMvbWFpbi5taW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NzVlZmRmZjBkODI5NzZhMzJhOSIsIi8qKlxuICogQ3JlYXRlZCBieSBzYW5jaGV6IFxuICovXG4ndXNlIHN0cmljdCc7XG4vLyBpbXBvcnQgQ1NTXG4vLyBpbXBvcnQgYW5pbWF0ZV9jc3MgZnJvbSAnYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzJztcbmltcG9ydCBjc3MgZnJvbSAnLi4vY3NzL2Nzcy5jc3MnO1xuLy8gaW1wb3J0IHNjc3MgZnJvbSAnLi4vY3NzL3Nhc3Muc2Nzcyc7XG5cblxuLy8gcmVxdWlyZSgnYWZyYW1lJyk7XG4vLyByZXF1aXJlKCd0Jylcbi8vIHdpbmRvdy5EZXRlY3RvciA9IHJlcXVpcmUoJy4vZW50aXRpZXMvRGV0ZWN0b3InKTtcbi8vIHJlcXVpcmUoJy4vZW50aXRpZXMvQ2FudmFzUmVuZGVyZXInKTtcbi8vIHJlcXVpcmUoJy4vZW50aXRpZXMvUHJvamVjdG9yJyk7XG4vLyByZXF1aXJlKCdqcXVlcnkudmFsaWFudDM2MCcpO1xuLy8gaW1wb3J0IEpzIFBsdWdpbnMvRW50aXRpZXNcblxuLy9FUzYgTW9kdWxlXG4vLyBpbXBvcnQgQmFyMSBmcm9tICcuL2VudGl0aWVzL0JhcjEnO1xuLy8gaW1wb3J0IEhvd2xlciBmcm9tICdob3dsZXInO1xuLy8gLy9Db21tb25KU1xuLy8gdmFyIEJhcjI9cmVxdWlyZSgnLi9lbnRpdGllcy9CYXIyJyk7XG5cbmlmICgvTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgIHdpbmRvdy5pc01vYmlsZSA9IHRydWU7XG59IGVsc2Uge1xuICAgIHdpbmRvdy5pc01vYmlsZSA9IGZhbHNlO1xufVxuXG5cbndpbmRvdy5oNSA9IHtcbiAgICBpbml0VGhyZWUzNjA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2FtZXJhLCBzY2VuZSwgcmVuZGVyZXI7XG4gICAgICAgIHZhciB0ZXh0dXJlX3BsYWNlaG9sZGVyLFxuICAgICAgICAgICAgaXNVc2VySW50ZXJhY3RpbmcgPSBmYWxzZSxcbiAgICAgICAgICAgIG9uTW91c2VEb3duTW91c2VYID0gMCxcbiAgICAgICAgICAgIG9uTW91c2VEb3duTW91c2VZID0gMCxcbiAgICAgICAgICAgIGxvbiA9IDAsXG4gICAgICAgICAgICBvbk1vdXNlRG93bkxvbiA9IDAsXG4gICAgICAgICAgICBsYXQgPSAwLFxuICAgICAgICAgICAgb25Nb3VzZURvd25MYXQgPSAwLFxuICAgICAgICAgICAgcGhpID0gMCxcbiAgICAgICAgICAgIHRoZXRhID0gMCxcbiAgICAgICAgICAgIGRpc3RhbmNlID0gNTAwLFxuICAgICAgICAgICAgb25Qb2ludGVyRG93blBvaW50ZXJYID0gMCxcbiAgICAgICAgICAgIG9uUG9pbnRlckRvd25Qb2ludGVyWSA9IDAsXG4gICAgICAgICAgICBvblBvaW50ZXJEb3duTG9uID0gMCxcbiAgICAgICAgICAgIG9uUG9pbnRlckRvd25MYXQgPSAwO1xuICAgICAgICBpbml0KCk7XG4gICAgICAgIC8vIGFuaW1hdGUoKTtcblxuICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciwgbWVzaDtcbiAgICAgICAgICAgIHdpbmRvdy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICAgICAgICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDExMDApO1xuICAgICAgICAgICAgY2FtZXJhLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xuICAgICAgICAgICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeSg1MDAsIDYwLCA0MCk7XG4gICAgICAgICAgICAvLyBpbnZlcnQgdGhlIGdlb21ldHJ5IG9uIHRoZSB4LWF4aXMgc28gdGhhdCBhbGwgb2YgdGhlIGZhY2VzIHBvaW50IGlud2FyZFxuICAgICAgICAgICAgZ2VvbWV0cnkuc2NhbGUoLTEsIDEsIDEpO1xuICAgICAgICAgICAgdmFyIHBsYXlfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXlfYnRuJyk7XG4gICAgICAgICAgICB2YXIgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgdmlkZW8ud2lkdGggPSA2NDA7XG4gICAgICAgICAgICB2aWRlby5oZWlnaHQgPSAzNjA7XG4gICAgICAgICAgICB2aWRlby5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHZpZGVvLm11dGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdmlkZW8uc3JjID0gJ2h0dHA6Ly9mbGltc2hhdy5naXRodWIuaW8vVmFsaWFudDM2MC92aWRlb3Mvb3ZlcnBhc3MtMmsubXA0JztcbiAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnd2Via2l0LXBsYXlzaW5saW5lJywgJ3dlYmtpdC1wbGF5c2lubGluZScpO1xuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICdwbGF5c2lubGluZScpO1xuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCd4NS12aWRlby1wbGF5ZXItZnVsbHNjcmVlbicsICdmYWxzZScpO1xuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCd4NS12aWRlby1wbGF5ZXItdHlwZScsICdoNScpO1xuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCd4LXdlYmtpdC1haXJwbGF5JywgJ3RydWUnKTtcbiAgICAgICAgICAgIHZpZGVvLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcblxuXG4gICAgICAgICAgICAvLyBwbGF5X2J0bi5pbm5lckhUTUwgPSAnUGxheSc7XG4gICAgICAgICAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5WaWRlb1RleHR1cmUodmlkZW8pO1xuICAgICAgICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XG4gICAgICAgICAgICB0ZXh0dXJlLmZvcm1hdCA9IFRIUkVFLlJHQkZvcm1hdDtcbiAgICAgICAgICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdGV4dHVyZSB9KTtcbiAgICAgICAgICAgIG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgICAgICAgc2NlbmUuYWRkKG1lc2gpO1xuICAgICAgICAgICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgICAgICAgICAgYW5pbWF0ZSgpO1xuXG5cbiAgICAgICAgICAgIHBsYXlfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcGxheV9idG4uaW5uZXJIVE1MID0gJ1BsYXknO1xuICAgICAgICAgICAgICAgIGlmICghd2luZG93LmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB2aWRlby5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlfYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgZXZlbnRzdGFydCwgZXZlbnRtb3ZlLCBldmVudHN0YXJ0O1xuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge30sIGZhbHNlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Eb2N1bWVuVG91Y2hEb3duLCBmYWxzZSk7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Eb2N1bWVudFRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Eb2N1bWVudFRvdWNoVXAsIGZhbHNlKTtcblxuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG9jdW1lbnRNb3VzZURvd24sIGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkRvY3VtZW50TW91c2VNb3ZlLCBmYWxzZSk7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRG9jdW1lbnRNb3VzZVVwLCBmYWxzZSk7XG5cblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgICAgIGlmICgvTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5pc01vYmlsZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5pc01vYmlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZ1bmN0aW9uIG9uRG9jdW1lbnRNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpc1VzZXJJbnRlcmFjdGluZyA9IHRydWU7XG4gICAgICAgICAgICBvblBvaW50ZXJEb3duUG9pbnRlclggPSBldmVudC5jbGllbnRYO1xuICAgICAgICAgICAgb25Qb2ludGVyRG93blBvaW50ZXJZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgICAgIG9uUG9pbnRlckRvd25Mb24gPSBsb247XG4gICAgICAgICAgICBvblBvaW50ZXJEb3duTGF0ID0gbGF0O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Eb2N1bWVudE1vdXNlTW92ZShldmVudCkge1xuXG4gICAgICAgICAgICBpZiAoaXNVc2VySW50ZXJhY3RpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsb24gPSAob25Qb2ludGVyRG93blBvaW50ZXJYIC0gZXZlbnQuY2xpZW50WCkgKiAwLjUgKyBvblBvaW50ZXJEb3duTG9uO1xuICAgICAgICAgICAgICAgIGxhdCA9IChldmVudC5jbGllbnRZIC0gb25Qb2ludGVyRG93blBvaW50ZXJZKSAqIDAuNSArIG9uUG9pbnRlckRvd25MYXQ7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uRG9jdW1lbnRNb3VzZVVwKGV2ZW50KSB7XG4gICAgICAgICAgICBpc1VzZXJJbnRlcmFjdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Eb2N1bWVuVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaXNVc2VySW50ZXJhY3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgb25Qb2ludGVyRG93blBvaW50ZXJYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgb25Qb2ludGVyRG93blBvaW50ZXJZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgb25Qb2ludGVyRG93bkxvbiA9IGxvbjtcbiAgICAgICAgICAgIG9uUG9pbnRlckRvd25MYXQgPSBsYXQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbkRvY3VtZW50VG91Y2hNb3ZlKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGlmIChpc1VzZXJJbnRlcmFjdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxvbiA9IChvblBvaW50ZXJEb3duUG9pbnRlclggLSBldmVudC50b3VjaGVzWzBdLmNsaWVudFgpICogMC41ICsgb25Qb2ludGVyRG93bkxvbjtcbiAgICAgICAgICAgICAgICBsYXQgPSAoZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIC0gb25Qb2ludGVyRG93blBvaW50ZXJZKSAqIDAuNSArIG9uUG9pbnRlckRvd25MYXQ7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uRG9jdW1lbnRUb3VjaFVwKGV2ZW50KSB7XG4gICAgICAgICAgICBpc1VzZXJJbnRlcmFjdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgICAgICAgbGF0ID0gTWF0aC5tYXgoLTg1LCBNYXRoLm1pbig4NSwgbGF0KSk7XG4gICAgICAgICAgICBwaGkgPSBUSFJFRS5NYXRoLmRlZ1RvUmFkKDkwIC0gbGF0KTtcbiAgICAgICAgICAgIHRoZXRhID0gVEhSRUUuTWF0aC5kZWdUb1JhZChsb24pO1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBkaXN0YW5jZSAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSk7XG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IGRpc3RhbmNlICogTWF0aC5jb3MocGhpKTtcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gZGlzdGFuY2UgKiBNYXRoLnNpbihwaGkpICogTWF0aC5zaW4odGhldGEpO1xuICAgICAgICAgICAgY2FtZXJhLmxvb2tBdChjYW1lcmEudGFyZ2V0KTtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAvLyBkaXN0b3J0aW9uXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weSggY2FtZXJhLnRhcmdldCApLm5lZ2F0ZSgpO1xuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICBpbml0VmFsaWFudDM2MDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwbGF5X2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5X2J0bicpO1xuICAgICAgICAkKCcudmFsaWFudENvbnRhaW5lcicpLlZhbGlhbnQzNjAoKTtcbiAgICAgICAgcGxheV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIHBsYXlcbiAgICAgICAgICAgICQoJy52YWxpYW50Q29udGFpbmVyJykuVmFsaWFudDM2MCgncGxheScpO1xuICAgICAgICAgICAgJCgnLnZhbGlhbnRDb250YWluZXInKS5WYWxpYW50MzYwKCdwYXVzZScpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICQoJy52YWxpYW50Q29udGFpbmVyJykuVmFsaWFudDM2MCgnbG9hZFZpZGVvJywgJy4vYXNzZXRzL21lZGlhL2NpdHkubXA0Jyk7XG4gICAgICAgICQoJy52YWxpYW50Q29udGFpbmVyJykuVmFsaWFudDM2MCgncGxheScpO1xuICAgICAgICAvLyAkKCcudmFsaWFudENvbnRhaW5lcicpLlZhbGlhbnQzNjAoJ3BhdXNlJyk7XG5cbiAgICB9LFxuICAgIHJvb3RSZXNpemUyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9vcmllbnRhdGlvbiBsYW5kc2NhcGUgd2lkdGg9MTMzNHB4XG4gICAgICAgIHZhciB3RnNpemU7XG4gICAgICAgIHZhciB3V2lkdGggPSAoc2NyZWVuLndpZHRoID4gMCkgPyAod2luZG93LmlubmVyV2lkdGggPj0gc2NyZWVuLndpZHRoIHx8IHdpbmRvdy5pbm5lcldpZHRoID09IDApID8gc2NyZWVuLndpZHRoIDpcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIDogd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHZhciB3SGVpZ2h0ID0gKHNjcmVlbi5oZWlnaHQgPiAwKSA/ICh3aW5kb3cuaW5uZXJIZWlnaHQgPj0gc2NyZWVuLmhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQgPT0gMCkgP1xuICAgICAgICAgICAgc2NyZWVuLmhlaWdodCA6IHdpbmRvdy5pbm5lckhlaWdodCA6IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgaWYgKHdXaWR0aCA+IHdIZWlnaHQpIHtcbiAgICAgICAgICAgIHdIZWlnaHQgPSB3V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgd0ZzaXplID0gd0hlaWdodCAvIDEzLjM0O1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLnN0eWxlLmZvbnRTaXplID0gd0ZzaXplICsgJ3B4JztcbiAgICB9LFxuICAgIHJvb3RSZXNpemUxOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9vcmllbnRhdGlvbiBsYW5kc2NhcGUgd2lkdGg9MTMzNHB4XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIERwciA9IDEsXG4gICAgICAgICAgICB1QWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgdmFyIGlzSU9TID0gdUFnZW50Lm1hdGNoKC9pcGhvbmUvaSk7XG4gICAgICAgIHZhciBpc1lJWElOID0gdUFnZW50Lm1hdGNoKC95aXhpbi9pKTtcbiAgICAgICAgdmFyIGlzMjM0NSA9IHVBZ2VudC5tYXRjaCgvTWIyMzQ1L2kpO1xuICAgICAgICB2YXIgaXNoYW9zb3UgPSB1QWdlbnQubWF0Y2goL21zb19hcHAvaSk7XG4gICAgICAgIHZhciBpc1NvZ291ID0gdUFnZW50Lm1hdGNoKC9zb2dvdW1vYmlsZWJyb3dzZXIvaWcpO1xuICAgICAgICB2YXIgaXNMaWViYW8gPSB1QWdlbnQubWF0Y2goL2xpZWJhb2Zhc3QvaSk7XG4gICAgICAgIHZhciBpc0duYnIgPSB1QWdlbnQubWF0Y2goL0dOQlIvaSk7XG4gICAgICAgIHZhciBpc1dlaXhpbiA9IHVBZ2VudC5tYXRjaCgvTWljcm9NZXNzZW5nZXIvaSk7XG4gICAgICAgIHZhciB3RnNpemU7XG4gICAgICAgIHZhciB3V2lkdGggPSAoc2NyZWVuLndpZHRoID4gMCkgPyAod2luZG93LmlubmVyV2lkdGggPj0gc2NyZWVuLndpZHRoIHx8IHdpbmRvdy5pbm5lcldpZHRoID09IDApID8gc2NyZWVuLndpZHRoIDpcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIDogd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHZhciB3SGVpZ2h0ID0gKHNjcmVlbi5oZWlnaHQgPiAwKSA/ICh3aW5kb3cuaW5uZXJIZWlnaHQgPj0gc2NyZWVuLmhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQgPT0gMCkgP1xuICAgICAgICAgICAgc2NyZWVuLmhlaWdodCA6IHdpbmRvdy5pbm5lckhlaWdodCA6IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgICAgICB3V2lkdGggPSBzY3JlZW4ud2lkdGg7XG4gICAgICAgICAgICB3SGVpZ2h0ID0gc2NyZWVuLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAod1dpZHRoID4gd0hlaWdodCkge1xuICAgICAgICAgICAgd0hlaWdodCA9IHdXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICB3RnNpemUgPSB3SGVpZ2h0IC8gMTMuMzQ7XG4gICAgICAgIGlmIChpc1lJWElOIHx8IGlzMjM0NSB8fCBpc2hhb3NvdSB8fCBpc1NvZ291IHx8IGlzTGllYmFvIHx8IGlzR25iciB8fCBpc1dlaXhpbikgeyAvL1lJWElOIOWSjCAyMzQ1IOi/memHjOacieS4quWImuiwg+eUqOezu+e7n+a1j+iniOWZqOaXtuWAmeeahGJ1Z++8jOmcgOimgeS4gOeCueW7tui/n+adpeiOt+WPllxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHdXaWR0aCA+IHdIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgd0hlaWdodCA9IHdXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd0ZzaXplID0gd0hlaWdodCAvIDEzLjM0O1xuICAgICAgICAgICAgICAgIC8vIHdGc2l6ZSA9IHdGc2l6ZSA+IDMyID8gd0ZzaXplIDogMzI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5zdHlsZS5mb250U2l6ZSA9IHdGc2l6ZSArICdweCc7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5zdHlsZS5mb250U2l6ZSA9IHdGc2l6ZSArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhhdDtcblxuICAgIH0sXG4gICAgZXZlbnRJbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge30sIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgIH0sXG4gICAgY3NzSW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgLypcbiAgICAgICAgdGhhdC5yb290UmVzaXplMSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ub3JpZW50YXRpb25jaGFuZ2VcIiBpbiB3aW5kb3cgPyBcIm9yaWVudGF0aW9uY2hhbmdlXCIgOiBcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cub3JpZW50YXRpb24gPT0gOTAgfHwgd2luZG93Lm9yaWVudGF0aW9uID09IC05MCkge1xuICAgICAgICAgICAgICAgIC8v5qiq5bGPXG4gICAgICAgICAgICAgICAgLy9fLnJlbmRlclNodXBpbmcoKTtcbiAgICAgICAgICAgICAgICB0aGF0LnJvb3RSZXNpemUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy/nq5blsY9cbiAgICAgICAgICAgICAgICAvL18uY2xvc2VTaHVwaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIG5vQ2hhbmdlQ291bnRUb0VuZCA9IDEwMCxcbiAgICAgICAgICAgIG5vRW5kVGltZW91dCA9IDEwMDA7XG4gICAgICAgIHRoYXQucm9vdFJlc2l6ZTIoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbm9yaWVudGF0aW9uY2hhbmdlXCIgaW4gd2luZG93ID8gXCJvcmllbnRhdGlvbmNoYW5nZVwiIDogXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWwsXG4gICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICBlbmQsXG4gICAgICAgICAgICAgICAgbGFzdElubmVyV2lkdGgsXG4gICAgICAgICAgICAgICAgbGFzdElubmVySGVpZ2h0LFxuICAgICAgICAgICAgICAgIG5vQ2hhbmdlQ291bnQ7XG4gICAgICAgICAgICBlbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyBcIm9yaWVudGF0aW9uY2hhbmdlZW5kXCJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoYXQucm9vdFJlc2l6ZTEoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA9PT0gbGFzdElubmVyV2lkdGggJiYgd2luZG93LmlubmVySGVpZ2h0ID09PSBsYXN0SW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9DaGFuZ2VDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9DaGFuZ2VDb3VudCA9PT0gbm9DaGFuZ2VDb3VudFRvRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgaW50ZXJ2YWwgcmVzb2x2ZWQgdGhlIGlzc3VlIGZpcnN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYXN0SW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgICAgICBsYXN0SW5uZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG5vQ2hhbmdlQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIHRpbWVvdXQgaGFwcGVuZWQgZmlyc3QuXG4gICAgICAgICAgICAgICAgZW5kKCk7XG4gICAgICAgICAgICB9LCBub0VuZFRpbWVvdXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICB9XG59O1xud2luZG93Lmg1LmluaXRUaHJlZTM2MCgpO1xuLy8gd2luZG93Lmg1LmluaXRWYWxpYW50MzYwKCk7XG4vLyB3aW5kb3cuaDUuY3NzSW5pdCgpLmV2ZW50SW5pdCgpO1xuXG5cbmZ1bmN0aW9uIHNob3dTdGF0cygpIHtcbiAgICB2YXIgc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICBzdGF0cy5zaG93UGFuZWwoMCk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXG4gICAgdmFyIGZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGZzLnN0eWxlLmxlZnQgPSAwO1xuICAgIGZzLnN0eWxlLnRvcCA9IDA7XG4gICAgZnMuc3R5bGUuekluZGV4ID0gOTk5O1xuICAgIGZzLmFwcGVuZENoaWxkKHN0YXRzLmRvbUVsZW1lbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnMpO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgc3RhdHMuYmVnaW4oKTtcbiAgICAgICAgLy8gbW9uaXRvcmVkIGNvZGUgZ29lcyBoZXJlXG4gICAgICAgIHN0YXRzLmVuZCgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn1cbnNob3dTdGF0cygpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2Nzcy9jc3MuY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=