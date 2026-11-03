(function(){
var d=document,root=d.documentElement,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
root.classList.add('v6-js');
// letter split stagger index
d.querySelectorAll('.v6 [data-chars] .v6-c').forEach(function(c,i){c.style.setProperty('--i',i)});
// scroll reveal
var els=d.querySelectorAll('[data-rv],[data-chars]');
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')})}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});els.forEach(function(e){io.observe(e)});}
// insights accordion
d.querySelectorAll('.v6-in-h').forEach(function(b){b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);b.nextElementSibling.hidden=o;})});
// sticky steps
d.querySelectorAll('.v6-steps').forEach(function(w){var st=w.querySelectorAll('.v6-step'),im=w.querySelectorAll('.v6-step-img');
 function set(i){st.forEach(function(s,j){s.classList.toggle('on',j===i)});im.forEach(function(s,j){s.classList.toggle('on',j===i)})}
 set(0);if(!('IntersectionObserver' in window))return;
 var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)set(+e.target.dataset.step)})},{rootMargin:'-45% 0px -45% 0px'});st.forEach(function(s){o.observe(s)});});
var fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
if(rm||!fine)return;
// tilt
d.querySelectorAll('[data-tilt]').forEach(function(p){var a=p.closest('a');
 a.addEventListener('mousemove',function(e){var r=p.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;p.style.transform='perspective(1400px) rotateX('+(-y*5).toFixed(2)+'deg) rotateY('+(x*5).toFixed(2)+'deg) scale(1.01)'});
 a.addEventListener('mouseleave',function(){p.style.transform=''});});
// custom cursor
var cur=d.createElement('div');cur.className='v6-cur';cur.setAttribute('aria-hidden','true');d.body.appendChild(cur);root.classList.add('v6-has-cur');
var tx=0,ty=0,cx=0,cy=0;d.addEventListener('mousemove',function(e){tx=e.clientX;ty=e.clientY});
(function loop(){cx+=(tx-cx)*.2;cy+=(ty-cy)*.2;cur.style.left=cx+'px';cur.style.top=cy+'px';requestAnimationFrame(loop)})();
d.querySelectorAll('[data-cursor]').forEach(function(a){a.addEventListener('mouseenter',function(){cur.textContent=a.dataset.cursor;cur.classList.add('on')});a.addEventListener('mouseleave',function(){cur.classList.remove('on')})});
// soft page transition on internal links
d.addEventListener('click',function(e){var a=e.target.closest('.v6 a');if(!a||e.metaKey||e.ctrlKey||a.target||a.hash&&a.pathname===location.pathname)return;if(a.origin!==location.origin)return;e.preventDefault();d.body.classList.add('v6-leave');setTimeout(function(){location.href=a.href},240);});
addEventListener('pageshow',function(){d.body.classList.remove('v6-leave')});
})();
