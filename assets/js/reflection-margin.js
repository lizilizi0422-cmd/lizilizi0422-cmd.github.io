(function(){
 const body=document.querySelector('.refl-body');if(!body||body.querySelector('.r-sec'))return;
 [...body.querySelectorAll(':scope>p')].forEach(p=>{const m=p.textContent.match(/^\s*##\s+(.*)$/);if(m){const h=document.createElement('h2');h.textContent=m[1];p.replaceWith(h)}});
 const kids=[...body.children];const cols=['c-b','c-s','c-c','c-l'],ids=['course-design','learner-centred','equity','assessment'];
 const isNum=e=>e.tagName==='P'&&/^\s*\d+\.\d+\s*$/.test(e.textContent);
 const isLabel=e=>e.tagName==='P'&&!e.querySelector('img')&&e.textContent.trim().length<70&&!/[.!?:]\s*$/.test(e.textContent.trim())&&!/^Figure/.test(e.textContent.trim())&&!e.querySelector('strong:first-child');
 let secs=[],cur=null,pre=[],post=[],refs=false;
 kids.forEach(e=>{
  if(isNum(e)){cur={num:e,items:[]};secs.push(cur);return}
  if(/^Selected references/i.test(e.textContent.trim())&&e.tagName!=='UL'){refs=true}
  if(refs){post.push(e);return}
  if(cur)cur.items.push(e);else pre.push(e);
 });
 if(!secs.length)return;
 const mk=(t,c)=>{const x=document.createElement(t);if(c)x.className=c;return x};
 // intro + toc
 pre.forEach((e,i)=>{if(e.querySelector('a[href^="#"]')&&/1\.1/.test(e.textContent))e.remove();});
 const firstP=pre.find(e=>e.isConnected&&e.tagName==='P');if(firstP)firstP.classList.add('r-intro');
 const toc=mk('nav','r-toc');toc.setAttribute('aria-label','On this page');
 secs.forEach((s,i)=>{
  const sec=mk('section','r-sec '+cols[i%4]);sec.id=ids[i]||('sec-'+(i+1));
  s.num.className='r-num';body.insertBefore(sec,s.num);sec.append(s.num);
  let group=null,gi=0;
  for(let k=0;k<s.items.length;k++){const e=s.items[k];
   if(e.tagName==='H2'){sec.append(e);const a=mk('a');a.href='#'+sec.id;a.innerHTML='<span>'+s.num.textContent.trim()+'</span> '+e.textContent.split(/ as | of /i)[0];toc.append(a);continue}
   if(e.querySelector&&e.querySelector('img')&&e.children.length===1){const f=mk('figure','r-fig');f.append(e.querySelector('img'));e.remove();const n=s.items[k+1];if(n&&/^Figure/.test(n.textContent.trim())){const c=mk('figcaption');c.innerHTML=n.innerHTML;f.append(c);n.remove();k++}(group||sec).append(f);continue}
   if(isLabel(e)){e.className='r-label';const t=e.textContent.trim();
     if(/understanding and application|my reflection/i.test(t)){group=mk('div','r-mine')}else if(gi===0){group=mk('div','r-box')}else group=null;
     gi++;if(group){sec.append(group);group.append(e)}else sec.append(e);continue}
   (group||sec).append(e);
   if(group&&group.className==='r-box'&&e.tagName==='P'){group=null}
  }
 });
 const intro=body.querySelector('.r-intro');const anchor=secs.length&&body.querySelector('.r-sec');body.insertBefore(toc,anchor);
 if(post.length){const r=mk('section','r-refs');body.insertBefore(r,post[0]);post.forEach(e=>r.append(e));r.firstChild.className='r-label';}
})();
document.querySelectorAll('.r-sec').forEach(s=>{
 const mk=(side,main)=>{const r=document.createElement('div');r.className='row';const a=document.createElement('div');a.className='side';const b=document.createElement('div');b.className='main';r.append(a,b);side&&a.append(side);main.forEach(m=>b.append(m));return r};
 const n=s.querySelector('.r-num'),h=s.querySelector('h2');s.prepend(mk(n,[h]));
 s.querySelectorAll('.r-label').forEach(l=>{const par=l.parentNode;const sib=[];let x=l.nextElementSibling;
   while(x&&!x.classList.contains('r-label')){sib.push(x);x=x.nextElementSibling;}
   const r=mk(null,[]);par.insertBefore(r,l);r.firstChild.append(l);sib.forEach(e=>r.lastChild.append(e));});
});
