// Level 1 v4 — three-panel version. Rules, lines and endings by dr eggbot (2026-11-24).
// **word** = key expression (red, tappable). Lines marked "note" = Benny writes it on paper.
// act = action caption. dr eggbot wrote these only in Chinese, so they show as a caption, not as dialogue.
// ZH (Chinese on double-tap) for new lines: TEMP translations by Chestnutlll until dr eggbot supplies them.
(function(root){
const STRANGER=0,ACQ=1,FRIEND=2;
const PEOPLE=[
  {id:"pia",name:"Pia"},
  {id:"ollie",name:"Ollie"},
  {id:"benny",name:"Benny"}
];
const CARDS=[
  {id:"look",kind:"line",say:"**Mind if I take a look?**"},
  {id:"metoo",kind:"line",say:"**No way**, me too!"},
  {id:"cute",kind:"line",say:"**Lowkey**, this is so **cute**."},
  {id:"lunch",kind:"line",say:"Wanna sit with us at lunch?"},
  {id:"phones",kind:"prop",icon:"🎧",zh:"耳机（放着 K-pop）"},
  {id:"book",kind:"prop",icon:"📓",zh:"Benny 的素描本"},
  {id:"dumplings",kind:"prop",icon:"🥟",zh:"饺子"}
];
const LEVELS=[{en:"stranger",zh:"陌生人"},{en:"acquaintance",zh:"熟人"},{en:"friend",zh:"朋友"}];
// Endings in priority order (first match wins). Chinese only: dr eggbot gave no English titles.
const ENDINGS=[
  {id:"E1",zh:"午饭时你们坐在了一起。"},
  {id:"E2",zh:"你帮 Benny 解了围。"},
  {id:"E3",zh:"Benny 给你画了一张画。"},
  {id:"E4",zh:"Pia 要跟你交换歌单。"},
  {id:"E5",zh:"Ollie：\"Lunch, we play.\""},
  {id:"E6",zh:"Benny 一整天都没抬头。",soft:true},
  {id:"E7",zh:"他们记住你了，但铃响了。明天继续。",soft:true},
  {id:"E8",zh:"没人注意到。明天再试一次。",soft:true}
];
const ZH={ // TEMP zh by Chestnutlll until dr eggbot
"**Mind if I take a look?**":"介意我看看吗？",
"**No way**, me too!":"不会吧，我也是！",
"**Lowkey**, this is so **cute**.":"说真的，这个有点可爱。",
"Wanna sit with us at lunch?":"午饭要不要跟我们坐一起？",
"…**Not now.**":"……现在不行。",
"Look at what? Okay fine.":"看什么？好吧。",
"You draw too?":"你也画画？",
"…Me too what?":"……我也什么？",
"Wait, you like them too?! Okay, we're friends now.":"等等，你也喜欢他们？！好，我们现在是朋友了。",
"Me too… what?":"我也……什么？",
"No way! Lunch, we play.":"不会吧！午饭时一起玩。",
"Me too! …Wait, what are we talking about?":"我也是！……等等，我们在聊什么？",
"…What is?":"……什么可爱？",
"Benny, draw me next!":"Benny，下一个画我！",
"Aw, thanks? I think?":"呃，谢谢？大概？",
"**Bro**, that's **sick**.":"兄弟，这也太酷了。",
"Cute? I'm not cute. I'm cool.":"可爱？我不可爱，我是酷。",
"**Obviously.** **Save me a seat.**":"当然。帮我占个位子。",
"Who's 'us'?":"“我们”是谁？",
"Oh, with Ollie? Sure.":"哦，跟 Ollie 一起？行啊。",
"Lunch? I was **literally** about to ask.":"午饭？我刚好正要问你。",
"Uh… sure?":"呃……好吧？",
"**Catchy.**":"很上头。",
"Wait, is that K-pop? **Highkey** my favorite.":"等等，这是 K-pop 吗？我超爱的。",
"K-pop? Is that… a game?":"K-pop？那是……一个游戏吗？",
"Where'd you get that?":"你从哪儿拿的？",
"Look at THIS!":"快看这个！",
"Who drew this? It's **sick**!":"这是谁画的？太酷了！",
"Bring extra. I'm **not sharing**.":"多带点，我可不分给别人。",
"**Potstickers**?! I could eat like twenty.":"锅贴？！我能吃二十个。"
};
function newState(){return{rel:{pia:0,ollie:0,benny:0},drawing:false,music:false,games:false,embarrassed:false,wasEmbarrassed:false,rescued:false,present:{}}}
function clone(s){return JSON.parse(JSON.stringify(s))}
const up=(s,who)=>{s.rel[who]=Math.min(FRIEND,s.rel[who]+1)};
const fr=(s,who)=>{s.rel[who]=FRIEND};
const hasFriend=s=>Object.values(s.rel).some(v=>v===FRIEND);
// One panel. Returns {state, out:[{who,en?,note?,act?,mood,prop?}]}; flags set here only count for LATER panels.
function resolve(state,who,card){
  const s=clone(state),pre=state,out=[],say=(w,en,mood,x={})=>out.push({who:w,en,mood,...x});
  const set=[]; // flags to set after this panel
  if(who==="benny"){
    if(card==="look"){
      if(pre.embarrassed){say("benny","…**Not now.**","nervous",{note:true})}
      else if(pre.rel.benny>=ACQ){fr(s,"benny");say("benny",null,"happy",{act:"翻到他画的你",prop:"img:assets/chestnut_happy.png"});set.push("drawing")}
      else{up(s,"benny");say("benny",null,"happy",{act:"给你看一页水果超级英雄",prop:"📓"});set.push("drawing")}
    }else if(card==="metoo"){
      if(pre.drawing){up(s,"benny");say("benny","You draw too?","startled",{note:true})}
      else say("benny","…Me too what?","confused");
    }else if(card==="cute"){
      if(pre.drawing){up(s,"benny");say("benny",null,"happy",{act:"他脸红了，偷偷笑"})}
      else say("benny","…What is?","confused");
    }else if(card==="lunch"){
      if(pre.rel.benny>=ACQ){fr(s,"benny");say("benny",null,"happy",{act:"点点头"})}
      else say("benny",null,"nervous",{act:"摇摇头，太快了"});
    }else if(card==="phones"){up(s,"benny");say("benny","**Catchy.**","happy",{note:true,act:"戴上听了一会儿"});set.push("music")}
    else if(card==="book"){
      if(pre.embarrassed){fr(s,"benny");s.embarrassed=false;s.rescued=true;say("benny",null,"happy",{act:"你把本子还给他"})}
      else say("benny","Where'd you get that?","startled",{act:"抢回去"});
    }else if(card==="dumplings"){up(s,"benny");say("benny",null,"happy",{act:"默默拿了一个"})}
  }else if(who==="pia"){
    if(card==="look"){up(s,"pia");say("pia","Look at what? Okay fine.","happy",{act:"给你看手机屏保上的偶像",prop:"📱"})}
    else if(card==="metoo"){
      if(pre.music){fr(s,"pia");say("pia","Wait, you like them too?! Okay, we're friends now.","startled")}
      else{up(s,"pia");say("pia","Me too… what?","happy",{act:"笑出来"})}
    }else if(card==="cute"){
      if(pre.drawing){up(s,"pia");if(pre.present.benny)up(s,"benny");say("pia","Benny, draw me next!","wave")}
      else{up(s,"pia");say("pia","Aw, thanks? I think?","confused")}
    }else if(card==="lunch"){
      if(pre.rel.pia>=ACQ){fr(s,"pia");say("pia","**Obviously.** **Save me a seat.**","wave")}
      else if(hasFriend(pre)){fr(s,"pia");say("pia","Oh, with Ollie? Sure.","happy")}
      else say("pia","Who's 'us'?","confused");
    }else if(card==="phones"){up(s,"pia");say("pia","Wait, is that K-pop? **Highkey** my favorite.","startled");set.push("music")}
    else if(card==="book"){up(s,"pia");s.embarrassed=true;s.wasEmbarrassed=true;say("pia","Look at THIS!","happy",{act:"抢过本子给大家看"});out.push({who:"benny",mood:"nervous",act:"Benny 变难堪"});set.push("drawing")}
    else if(card==="dumplings"){up(s,"pia");say("pia","Bring extra. I'm **not sharing**.","happy")}
  }else if(who==="ollie"){
    if(card==="look"){up(s,"ollie");say("ollie",null,"happy",{act:"掏出手机给你看他的游戏，说个不停",prop:"🎮"});set.push("games")}
    else if(card==="metoo"){
      if(pre.games){fr(s,"ollie");say("ollie","No way! Lunch, we play.","wave")}
      else{up(s,"ollie");say("ollie","Me too! …Wait, what are we talking about?","confused")}
    }else if(card==="cute"){
      up(s,"ollie");
      if(pre.drawing)say("ollie","**Bro**, that's **sick**.","happy");
      else say("ollie","Cute? I'm not cute. I'm cool.","confused");
    }else if(card==="lunch"){
      if(pre.rel.ollie>=ACQ){fr(s,"ollie");say("ollie","Lunch? I was **literally** about to ask.","wave")}
      else{up(s,"ollie");say("ollie","Uh… sure?","confused")}
    }else if(card==="phones"){say("ollie","K-pop? Is that… a game?","confused");set.push("music")}
    else if(card==="book"){up(s,"ollie");if(!pre.embarrassed)up(s,"benny");say("ollie","Who drew this? It's **sick**!","startled",{act:"翻了翻"});set.push("drawing")}
    else if(card==="dumplings"){up(s,"ollie");say("ollie","**Potstickers**?! I could eat like twenty.","happy")}
  }
  if(!out.length)throw new Error("no reaction for "+who+"+"+card);
  set.forEach(f=>s[f]=true);s.present[who]=true;
  return{state:s,out};
}
function ending(s){
  const r=s.rel,v=Object.values(r);
  if(v.every(x=>x>=ACQ)&&v.some(x=>x===FRIEND))return"E1";
  if(s.wasEmbarrassed&&s.rescued)return"E2";
  if(r.benny===FRIEND)return"E3";
  if(r.pia===FRIEND)return"E4";
  if(r.ollie===FRIEND)return"E5";
  if(s.wasEmbarrassed&&!s.rescued)return"E6";
  if(v.some(x=>x>=ACQ))return"E7";
  return"E8";
}
function play(steps){let s=newState();const log=[];for(const [w,c] of steps){const r=resolve(s,w,c);log.push(r);s=r.state}return{state:s,log,end:ending(s)}}
const API={TITLE:"Make a friend before the bell rings.",PEOPLE,CARDS,LEVELS,ENDINGS,ZH,newState,resolve,ending,play};
if(typeof module!=="undefined")module.exports=API;else root.STORY=API;
})(this);
