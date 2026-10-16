(function(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var bg,ly=scrollY,v=0,tr;addEventListener('DOMContentLoaded',function(){bg=document.querySelector('.m-bg');tr=[].slice.call(document.querySelectorAll('.m-track'));
(function f(){var y=scrollY;v+= ((y-ly)-v)*.15;ly=y;var k=Math.max(-8,Math.min(8,v*.4));if(bg)bg.style.setProperty('--k',k.toFixed(2));
tr.forEach(function(t){t.getAnimations().forEach(function(a){a.playbackRate=1+Math.min(4,Math.abs(v)*.08)})});requestAnimationFrame(f)})()})})();
(function(){
  var K=[["Play & Toy Design","#E07A93"],["Learning Experience & UX Design","#6F95CC"],["AI-Powered Learning Tools","#6FA578"],["Early Childhood Art Education","#D4A23A"]];
  var i=-1,on=false;
  function go(h){var kw=h.querySelector('.nm-kw');i=(i+1)%K.length;kw.querySelector('.nm-kt').textContent=K[i][0];h.style.setProperty('--kc',K[i][1]);document.body.style.setProperty('--acc',K[i][1]);kw.style.removeProperty('font-size');kw.style.removeProperty('max-width');(function(){var o=document.querySelector('.d-open'),kh=kw.offsetHeight,nh=h.querySelector('.nm-a').offsetHeight,up=h.getBoundingClientRect().top+nh/2-kh/2;if(up<70){kw.style.setProperty('font-size',Math.max(30,parseFloat(getComputedStyle(kw).fontSize)*.82)+'px','important')}})();
    var a=h.querySelector('.nm-a'),b=h.querySelector('.nm-b'),hr=h.getBoundingClientRect();var mid=(a.offsetLeft+a.offsetWidth+b.offsetLeft)/2;kw.style.left=mid+'px';var g=kw.offsetWidth/2+20,room=Math.min(a.offsetLeft+hr.left,innerWidth-hr.right+(h.offsetWidth-b.offsetLeft-b.offsetWidth))-16;h.style.setProperty('--gap',Math.max(30,Math.min(g,room+30))+'px');(function(){var r=h.getBoundingClientRect(),room=Math.min(r.left,innerWidth-r.right)-8,g=kw.offsetWidth/2+14;h.style.setProperty('--gap',Math.max(20,Math.min(g,room))+'px')})();h.classList.add('split');on=true}
  function off(h){h.classList.remove('split');on=false}
  document.addEventListener('DOMContentLoaded',function(){var h=document.querySelector('.m-name');if(!h)return;
    h.addEventListener('mouseenter',function(){go(h)});h.addEventListener('mouseleave',function(){off(h)});
    h.addEventListener('focus',function(){go(h)});h.addEventListener('blur',function(){off(h)});
    h.addEventListener('click',function(){if(matchMedia('(hover:none)').matches)go(h)});
    window.__nm=function(){go(h)};});
})();

(function(){if(!matchMedia('(hover:hover) and (pointer:fine)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
document.addEventListener('DOMContentLoaded',function(){var c=document.createElement('div');c.className='d2-cur';c.setAttribute('aria-hidden','true');document.body.appendChild(c);
addEventListener('pointermove',function(e){c.classList.add('on');c.classList.toggle('big',!!e.target.closest('a,button,.m-name'))});
document.addEventListener('mouseleave',function(){c.classList.remove('on')});});})();
(function(){var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
document.addEventListener('DOMContentLoaded',function(){
  // staggered reveal
  var groups=['.hf-t','.hf-i','.d2-dirs .sec-head','.d2-dirs .dir','.d-who','.d-cv'];
  var els=[];groups.forEach(function(g){[].forEach.call(document.querySelectorAll(g),function(e,i){e.classList.add('rv');e.style.setProperty('--i',i%4);els.push(e)})});
  if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')})}
  else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -10% 0px'});els.forEach(function(e){io.observe(e)})}
  if(rm||!fine)return;
  // blocks float with mouse
  var hm=[].slice.call(document.querySelectorAll('.hero-marks .hm')),depth=[18,12,10,16];
  addEventListener('pointermove',function(e){var dx=e.clientX/innerWidth-.5,dy=e.clientY/innerHeight-.5;hm.forEach(function(h,i){h.style.setProperty('--mx',(-dx*depth[i])+'px');h.style.setProperty('--my',(-dy*depth[i])+'px')})});
  // lerp cursor
  var c=document.querySelector('.d2-cur');if(!c)return;var x=-99,y=-99,tx=-99,ty=-99;
  addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY},{passive:true});
  (function f(){x+=(tx-x)*.2;y+=(ty-y)*.2;c.style.translate=x+'px '+y+'px';requestAnimationFrame(f)})();
});})();
