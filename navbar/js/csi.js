if(window.NodeList&&!NodeList.prototype.forEach){NodeList.prototype.forEach=function(callback,thisArg){thisArg=thisArg||window;for(var i=0;i<this.length;i++){callback.call(thisArg,this[i],i,this);}};}
if(!Array.from){Array.from=(function(){var toStr=Object.prototype.toString;var isCallable=function(fn){return typeof fn==='function'||toStr.call(fn)==='[object Function]';};var toInteger=function(value){var number=Number(value);if(isNaN(number)){return 0;}
if(number===0||!isFinite(number)){return number;}
return(number>0?1:-1)*Math.floor(Math.abs(number));};var maxSafeInteger=Math.pow(2,53)-1;var toLength=function(value){var len=toInteger(value);return Math.min(Math.max(len,0),maxSafeInteger);};return function from(arrayLike){var C=this;var items=Object(arrayLike);if(arrayLike==null){throw new TypeError('Array.from requires an array-like object - not null or undefined');}
var mapFn=arguments.length>1?arguments[1]:void undefined;var T;if(typeof mapFn!=='undefined'){if(!isCallable(mapFn)){throw new TypeError('Array.from: when provided, the second argument must be a function');}
if(arguments.length>2){T=arguments[2];}}
var len=toLength(items.length);var A=isCallable(C)?Object(new C(len)):new Array(len);var k=0;var kValue;while(k<len){kValue=items[k];if(mapFn){A[k]=typeof T==='undefined'?mapFn(kValue,k):mapFn.call(T,kValue,k);}else{A[k]=kValue;}
k+=1;}
A.length=len;return A;};}());}
function toggleClass(el,className){if(el.classList){el.classList.toggle(className);}else{var classes=el.className.split(' ');var existingIndex=classes.indexOf(className);if(existingIndex>=0)
classes.splice(existingIndex,1);else
classes.push(className);el.className=classes.join(' ');}}
function debounce(func,interval){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;func.apply(context,args);};clearTimeout(timeout);timeout=setTimeout(later,interval||200);}}
function isMobile(){return window.getComputedStyle(document.querySelector('.is-mobile')).display!=="none";}/*!
* Serialize all form data into a query string
* (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
* @param {Node} form The form to serialize
* @return {String} The serialized form data
*/
var serialize=function(form){var serialized=[];for(var i=0;i<form.elements.length;i++){var field=form.elements[i];if(!field.name||field.disabled||field.type==='file'||field.type==='reset'||field.type==='submit'||field.type==='button')continue;if(field.type==='select-multiple'){for(var n=0;n<field.options.length;n++){if(!field.options[n].selected)continue;serialized.push(encodeURIComponent(field.name)+"="+encodeURIComponent(field.options[n].value));}}
else if((field.type!=='checkbox'&&field.type!=='radio')||field.checked){serialized.push(encodeURIComponent(field.name)+"="+encodeURIComponent(field.value));}}
return serialized.join('&');};function SvgReplacer(image){var imageSrc=image.src;var newImageSrc='';var response=window.fetch(imageSrc);var body=response.text();newImageSrc=body;image.insertAdjacentHTML("afterend",newImageSrc);image.parentNode.removeChild(image);this.raiseEvent("replaced");}
document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('[data-svg-src]').forEach(function(el){SvgReplacer(el);});});function PlayVideo(video){var iframe=video.getElementsByTagName('iframe');var player=new Vimeo.Player(iframe.item(0));player.on('loaded',function(){video.setAttribute('loaded',true);})
video.addEventListener('click',function(){player.play();})
player.on('bufferstart',function(){video.setAttribute('buffered',true);})
player.on('play',function(){video.setAttribute('playing',true);console.log('playing');});}
document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('.csi-video[type="vimeo"]').forEach(function(el){PlayVideo(el);});});