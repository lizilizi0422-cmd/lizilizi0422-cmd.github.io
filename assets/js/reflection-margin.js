document.querySelectorAll('.r-sec').forEach(s=>{
 const mk=(side,main)=>{const r=document.createElement('div');r.className='row';const a=document.createElement('div');a.className='side';const b=document.createElement('div');b.className='main';r.append(a,b);side&&a.append(side);main.forEach(m=>b.append(m));return r};
 const n=s.querySelector('.r-num'),h=s.querySelector('h2');s.prepend(mk(n,[h]));
 s.querySelectorAll('.r-label').forEach(l=>{const par=l.parentNode;const sib=[];let x=l.nextElementSibling;
   while(x&&!x.classList.contains('r-label')){sib.push(x);x=x.nextElementSibling;}
   const r=mk(null,[]);par.insertBefore(r,l);r.firstChild.append(l);sib.forEach(e=>r.lastChild.append(e));});
});
