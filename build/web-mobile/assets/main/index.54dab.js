window.__require=function e(t,n,r){function i(o,c){if(!n[o]){if(!t[o]){var u=o.split("/");if(u=u[u.length-1],!t[u]){var s="function"==typeof __require&&__require;if(!c&&s)return s(u,!0);if(a)return a(u,!0);throw new Error("Cannot find module '"+o+"'")}o=u}var h=n[o]={exports:{}};t[o][0].call(h.exports,function(e){return i(t[o][1][e]||e)},h,h.exports,e,t,n,r)}return n[o].exports}for(var a="function"==typeof __require&&__require,o=0;o<r.length;o++)i(r[o]);return i}({gameDAL:[function(e,t){"use strict";function n(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.setRequestHeader("Content-Type","application/json;charset=UTF-8"),n.onreadystatechange=function(){if(4==n.readyState&&null!=t)try{t(null,JSON.parse(n.responseText))}catch(e){t(e,null)}},n.send()}cc._RF.push(t,"68cca3JextFdahdI9C5eNLN","gameDAL"),t.exports.getCurrentWeather=function(e,t){n("https://kopyae-weather-api-test.herokuapp.com/weather?city="+e,t)},cc._RF.pop()},{}],mainController:[function(e,t){"use strict";cc._RF.push(t,"f0291PG52hKkrTPOE4RN3YY","mainController");var n=e("gameDAL");cc.Class({extends:cc.Component,properties:{daynight:{default:null,type:cc.Node},board:{default:null,type:cc.Node},location:{default:null,type:cc.Label},weatherDesc:{default:null,type:cc.Label},weatherIcon:{default:null,type:cc.Node},windSpeed:{default:null,type:cc.Label},humidity:{default:null,type:cc.Label},temperature:{default:null,type:cc.Label}},onLoad:function(){this.init()},init:function(){this.daynight.y=1500,this.board.active=!1},getCurrentWeather:function(e){var t=this;n.getCurrentWeather(e,function(e,n){var r=n.data.location,i=n.data.windInfo,a=n.data.humidity,o=n.data.temperature,c=n.data.weatherInfo,u=n.data.is_day;t.renderUI(u,r,c,i,a,o)})},renderUI:function(e,t,n,r,i,a){this.board.active=!0,this.checkDayOrNight(e),this.showLocationInfo(t),this.showWeatherInfo(n),this.showWindInfo(r,i,a)},showWindInfo:function(e,t,n){this.windSpeed.string="Wind Speed is "+e.wind_speed+" kmh",this.humidity.string="Humidity is "+t+"%",this.temperature.string="Temperature is "+n+" \xb0C"},showWeatherInfo:function(e){var t=this;t.weatherDesc.string="The weather is "+e.weather_descriptions;var n=e.weather_icons;cc.assetManager.loadRemote(n,function(e,n){t.weatherIcon.getComponent(cc.Sprite).spriteFrame=new cc.SpriteFrame(n)})},showLocationInfo:function(e){this.location.string=e.name+", "+e.region+", "+e.country+"."},checkDayOrNight:function(e){this.daynight.y="yes"===e?-270:270},onClickCity:function(e,t){this.getCurrentWeather(t)}}),cc._RF.pop()},{gameDAL:"gameDAL"}]},{},["gameDAL","mainController"]);