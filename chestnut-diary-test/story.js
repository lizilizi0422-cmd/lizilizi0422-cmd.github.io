// Level 1 script v2 (dialogue by dr eggbot, approved by Ziqi 2026-11-24)
// Characters: chestnut, apple (Ms. Apple, teacher), ollie (games), pia (music), benny (drawing, quiet)
// react entry: [who, expression, en, zh, prop]  prop = emoji or "img:file" shown popping from the character
const P2 = {
  pia:{listen:{react:[["pia","happy","Okay. You HAVE to hear this.","好，你一定要听听这个。","🎧"]],next:"E_pia1"},
       play:{react:[["pia","happy","Piano. Badly. My cat leaves the room.","钢琴。弹得很烂。我家猫都会走开。"]],next:"E_pia2"},
       see:{react:[["pia","confused","See what? My… face?","看什么？我的……脸？"],["pia","happy"]],next:"E_pia2"}},
  ollie:{listen:{react:[["ollie","confused","Uh… game music? Does that count?","呃……游戏音乐？算吗？"]],next:"E_ollie2"},
       play:{react:[["ollie","startled","Okay so, there's this game—","好，有一个游戏——"],["ollie","happy","…Wanna play at lunch?","……午饭一起玩吗？"]],next:"E_ollie1"},
       see:{react:[["ollie","confused","See what? My… backpack?","看什么？我的……书包？"],["ollie","startled","","","🍪🍫🍬"]],next:"E_ollie2"}},
  benny:{listen:{react:[["benny","happy","","","🎧"]],next:"E_benny1"},
       play:{react:[["benny","neutral","(note) Not much. I draw.","没怎么玩。我画画。"]],next:"E_benny2"},
       see:{react:[["benny","nervous"],["benny","happy","","","img:assets/chestnut_happy.png"]],next:"E_benny3"}}
};
function hallway(lead){
  const st=w=>w===lead?"wave":"neutral";
  const stk=(key,en,zh)=>({kind:"line",say:[en,zh],to:{pia:P2.pia[key],ollie:P2.ollie[key],benny:P2.benny[key]}});
  return {title:"After class", bg:"hallway",
    chars:[["chestnut",20,"neutral"],["pia",46,st("pia")],["ollie",66,st("ollie")],["benny",86,st("benny")]],
    intro:[], slot:"chestnut", targets:["pia","ollie","benny"],
    stickers:[stk("listen","Who do you listen to?","你都听谁的歌？"),stk("play","What do you play?","你玩什么？"),stk("see","Can I see?","可以看看吗？"),
      {kind:"line",say:["…",""],react:[["pia","neutral"],["ollie","neutral"],["benny","neutral"],["chestnut","nervous"]],next:"E_none",any:true}]};
}
window.STORY = {
  start: "p1",
  pages: {
    p1: {
      title: "Say something in your first class", bg: "classroom",
      chars: [["apple",10,"neutral"],["chestnut",34,"neutral"],["ollie",57,"neutral"],["pia",73,"neutral"],["benny",89,"neutral"]],
      intro: [["apple","Tell us one thing you're into!","说一件你喜欢的事吧！"]],
      slot: "chestnut",
      stickers: [
        {kind:"topic", icon:"🎵", label:"I'm into music.", zh:"我喜欢音乐。",
         say:["I'm into music.","我喜欢音乐。"], catch:["Wait, what do you listen to?","等等，你都听什么？"],
         react:[["pia","startled","Wait, what do you listen to?","等等，你都听什么？"],["chestnut","happy","K-pop, kind of.","算是 K-pop 吧。"],["ollie","confused","Music… games? Rhythm games?!","音乐……游戏？节奏游戏？！"],["benny","happy","","","🎵"]], next:"h_pia"},
        {kind:"topic", icon:"🎮", label:"I'm into games.", zh:"我喜欢游戏。",
         say:["I'm into games.","我喜欢游戏。"], catch:["No way!","不会吧！"],
         react:[["ollie","startled","No way!","不会吧！"],["pia","happy","Here we go again.","又来了。"]], next:"h_ollie"},
        {kind:"topic", icon:"🎨", label:"I like drawing.", zh:"我喜欢画画。",
         say:["I like drawing.","我喜欢画画。"], catch:["You've got competition.","你有对手了。"],
         react:[["benny","startled"],["pia","happy","Benny, you've got competition.","Benny，你有对手了。"]], next:"h_benny"},
        {kind:"topic", icon:"🥟", label:"I love dumplings.", zh:"我爱吃饺子。",
         say:["I love dumplings.","我爱吃饺子。"], catch:["Honestly? Same.","说真的？我也是。"],
         react:[["ollie","confused","Wait, that's a hobby?","等等，这也算爱好？"],["pia","happy","Honestly? Same.","说真的？我也是。"],["apple","happy","Best answer today.","今天最佳答案。"]], next:"h_pia"},
        {kind:"topic", icon:"…", label:"(say nothing)", zh:"（不说话）",
         say:["…",""], catch:["I hate this part too.","我也讨厌这个环节。"],
         react:[["chestnut","nervous"],["apple","neutral","That's okay. Maybe next time.","没关系，下次吧。"],["benny","neutral","(note) I hate this part too.","我也讨厌这个环节。"]], next:"h_benny"}
      ]
    },
    h_pia: hallway("pia"), h_ollie: hallway("ollie"), h_benny: hallway("benny")
  },
  endings: {
    E_pia1:{who:["chestnut","pia"], en:"Pia wants to swap playlists.", zh:"Pia 要跟你交换歌单。"},
    E_pia2:{who:["chestnut","pia"], en:"You two cracked up.", zh:"你们笑成一团。"},
    E_ollie1:{who:["chestnut","ollie"], en:"Ollie: See you at lunch.", zh:"Ollie：午饭见。"},
    E_ollie2:{who:["chestnut","ollie"], en:"A little weird. But he's laughing.", zh:"有点怪，但他在笑。"},
    E_benny1:{who:["chestnut","benny"], en:"You listened to a whole song together.", zh:"你们一起听完了一首歌。"},
    E_benny2:{who:["chestnut","benny"], en:"He answered you. That's a lot for him.", zh:"他回答了你，这对他来说已经很多了。"},
    E_benny3:{who:["chestnut","benny"], en:"Benny drew you a picture.", zh:"Benny 给你画了一张画。"},
    E_none:{who:["chestnut"], en:"Nobody noticed. Try again tomorrow.", zh:"没人注意到。明天再试一次。", soft:true}
  }
};
