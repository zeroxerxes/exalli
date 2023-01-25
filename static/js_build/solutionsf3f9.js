(function(){ready(function(){var item=Array.prototype.slice.call(document.querySelectorAll('.solutions__item a'));var imgCorrect;var imgContainer=document.querySelector('#preloder');if(imgContainer){var preloader=Array.prototype.slice.call(document.querySelectorAll('.solutions-all-img'));}
var solutionsImg=document.querySelector('.solutions-img');if(item){item.forEach(function(item){item.addEventListener('mouseenter',function(){var dataSrc=this.parentNode.getAttribute('data-src');if(!dataSrc){if(solutionsImg.children.length>0){solutionsImg.removeChild(solutionsImg.firstElementChild);}}
if(!solutionsImg.classList.contains('animate')){preloader.forEach(function(item){if(dataSrc===item.getAttribute('src')){imgCorrect=item;if(solutionsImg.children.length>0){solutionsImg.removeChild(solutionsImg.firstElementChild);}
solutionsImg.appendChild(imgCorrect);}});solutionsImg.classList.add('animate');}
setTimeout(function(){solutionsImg.classList.remove('animate');},500)});});}
var sectionsBox=document.querySelector('.category-section');if(sectionsBox){var categories=Array.prototype.slice.call(sectionsBox.querySelectorAll('.category'));if(categories.length>0){var lazyloadThrottleTimeout;var lazyloads=function(element,clazz){if(element===null){return;}
if(lazyloadThrottleTimeout){clearTimeout(lazyloadThrottleTimeout);}
lazyloadThrottleTimeout=setTimeout(function(){var source=document.createElement('source');source.src=element.getAttribute('data-src');element.append(source);element.classList.remove(clazz);element.classList.add('lazy-opacity');},320);};function startVideo(){categories.forEach(function(category,idx){category.addEventListener('mouseenter',function(e){var video=this.querySelector('video.lazy');lazyloads(video,'lazy');categories.forEach(function(c,i){var video=c.querySelector('.category__video-item');if(video){if(i===idx){if(video.play()!==null){video.play()
}
return video.play();}
video.pause();}});});});sectionsBox.addEventListener('mouseleave',function(){categories.forEach(function(c,i){var video=c.querySelector('.category__video-item');if(video){video.pause();}});});}}
startVideo()}});}).call(this);