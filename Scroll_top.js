/* 
 * License: GPL v02 
 * author: nadeem.elahi@gmail.com,
 * http://webscripts.biz
 */
"use strict";
var T=new function(){var items=[],len;this.add=function(item){items.push(item);len=items.length};var rmIdx;this.rm=function(item){rmIdx=items.indexOf(item);items.splice(rmIdx,1);len=items.length};var dt,ct,lt=Date.now();var raf=window.requestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(cb){setTimeout(cb,30)};var i,t=0;function ticker(){ct=Date.now();dt=ct-lt;t+=dt;if(t>30){for(i=0;i<len;i++)items[i].tick(t);
t=0}lt=ct;raf(ticker)}ticker()};

var Scroll_top=new function(){

   var that = this,
      scrollPos,
      decrement=175;

   this.config = function(id){
      this.id = id;
   };

   this.click=function(e){
      if(!e) var e = window.event;
      if(e.target.id !== that.id) return;
      
      scrollPos 
	 = document.documentElement 
	 ? document.documentElement.scrollTop 
	 : document.body.scrollTop;
      T.add(that);
   };

   this.tick=function(t){
      scrollPos-=decrement;
      if(scrollPos < decrement){
	 T.rm(this);
	 scrollPos=0;
      }
      window.scrollTo(0,scrollPos);
   };
};
function setupScroll_top(id){
   Scroll_top.config(id);
   document.body
   .addEventListener("click",
      Scroll_top.click, false);
}
