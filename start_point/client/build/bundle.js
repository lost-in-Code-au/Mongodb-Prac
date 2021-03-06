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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var ImgView = function(imgsArr){
  this.render(imgsArr);
}

ImgView.prototype = {
  render: function(imgsArr){

    imgsArr.forEach( function(img){

      var imgTag = document.createElement('img');
      var div = document.querySelector('#imgs');

      var id = img._id
      console.log(id)

      var src = "data:image/gif;base64," + img.img
      imgTag.src = src
      console.log(src)
      div.appendChild(imgTag)
    })
  }
}

module.exports = ImgView;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var ImgView = __webpack_require__(0);
var data

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest()

  request.responseType = 'blob'
  request.onload = function() {
    var reader = new FileReader()
    reader.onloadend = function() {
      callback(reader.result)
    }
    reader.readAsDataURL(request.response)
  }
  request.open('GET', url)
  request.setRequestHeader('Content-Type', 'application/json')
  request.send()
}

var requestComplete = function(data) {

  var request = new XMLHttpRequest();
  var postdata = {
    id: data
  }
}

//////

var makeDbRequest = function(url, callback){
  var requestImg = new XMLHttpRequest()
  // request.open('GET', url)
  // request.send()

  requestImg.open("GET", url)
  requestImg.setRequestHeader('Content-Type', 'application/json')
  requestImg.addEventListener('load', getRequestComplete)
  requestImg.send()

}

var getRequestComplete = function() {
  // console.log()
  console.log(this.responseText);

  var imgString = this.responseText
  var imgs = JSON.parse(imgString)
  var imgView = new ImgView(imgs)
}



var app = function(){
  var getUrlImgButton = document.querySelector("#js-img-button");
  getUrlImgButton.addEventListener('click', function() {
      var input = document.querySelector('#imageurl');
      makeRequest(input.value, requestComplete);
  });

  var getImgButton = document.querySelector("#js-getImg-button");
  getImgButton.addEventListener('click', function() {
      makeDbRequest(url, getRequestComplete);
  });
  var url = "http://localhost:3000/imgs"
  // makeRequest(url, requestComplete)
}


window.addEventListener('load', app);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map