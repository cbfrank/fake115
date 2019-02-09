// ==UserScript==
// @name         fake 115Browser
// @namespace    http://github.com/kkHAIKE/fake115
// @version      1.3.8
// @description  伪装115浏览器
// @author       kkhaike
// @match        *://115.com/*
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @grant        GM_log
// @connect      passport.115.com
// @connect      passportapi.115.com
// @connect      proapi.115.com
// @connect      uplb.115.com
// @require      https://code.jquery.com/jquery-3.3.1.js
// @run-at       document-start
// ==/UserScript==
(function() {
    'use strict';
$("#js-login_box").append("<button>test data str and bin false</button>").on("click", function(){
GM_xmlhttpRequest({
    method: 'POST',
    url: "http://passport.115.com/?ct=encrypt&ac=login&k_ec=",
    data: "a1b2",
    binary: false,
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },});
});
    
    $("#js-login_box").append("<button>test data str and bin true</button>").on("click", function(){
GM_xmlhttpRequest({
    method: 'POST',
    url: "http://passport.115.com/?ct=encrypt&ac=login&k_ec=",
    data: "a1b2",
    binary: true,
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },});
});

    $("#js-login_box").append("<button>test data blob and bin true</button>").on("click", function(){
GM_xmlhttpRequest({
    method: 'POST',
    url: "http://passport.115.com/?ct=encrypt&ac=login&k_ec=",
    data: new Blob([(number)'A',(number)'B',(number)'A',(number)'B']),
    binary: true,
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },});
});
})()
