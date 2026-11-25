// Level 1 script v3 (dialogue by dr eggbot, approved structure by Ziqi 2026-11-24)
// **word** = key expression (shown red). "(note) ..." = written on paper (Benny).
// react entry: [who, expression, en, zh, prop]
const r=(w,s,en,zh,pr)=>[w,s,en||"",zh||"",pr];
const T=(en,zh,to)=>({kind:"line",say:[en,zh],to});
const SIL={kind:"line",say:["…",""],react:[r("pia","neutral"),r("ollie","neutral"),r("benny","neutral"),r("chestnut","nervous")],next:"E11"};
function hallway(line,lead,stickers){
  const st=w=>w===lead?"wave":"neutral";
  return {title:"After class",bg:"hallway",line,
    chars:[["chestnut",20,"neutral"],["pia",46,st("pia")],["ollie",66,st("ollie")],["benny",86,st("benny")]],
    intro:[],slot:"chestnut",targets:["pia","ollie","benny"],stickers:[...stickers,SIL]};
}
window.STORY={
  start:"p1",
  pages:{
    p1:{title:"Say something in your first class",bg:"classroom",
      chars:[["apple",10,"neutral"],["chestnut",34,"neutral"],["ollie",57,"neutral"],["pia",73,"neutral"],["benny",89,"neutral"]],
      intro:[["apple","Tell us one thing you're into!","说一件你喜欢的事吧！"]],slot:"chestnut",
      stickers:[
        {kind:"topic",icon:"🎵",say:["I've been super into K-pop lately.","我最近超迷 K-pop。"],
         react:[r("pia","startled","Wait, **no way**. Who's your **bias**?","等等，不会吧。你最喜欢哪个成员？"),r("ollie","confused","K-pop… is that a game? **Asking for a friend.**","K-pop……是个游戏吗？帮朋友问的。"),r("benny","happy","","","🎵")],next:"h_kpop"},
        {kind:"topic",icon:"🎮",say:["I'm kind of **obsessed with** video games.","我有点沉迷电子游戏。"],
         react:[r("ollie","startled","Finally, someone who **gets it**!","终于有人懂了！"),r("pia","happy","**Here we go again.**","又来了。")],next:"h_games"},
        {kind:"topic",icon:"🎨",say:["I **doodle** a lot. Like, all the time.","我经常随手画画，一直在画。"],
         react:[r("benny","startled"),r("pia","happy","Benny, you've got **competition**.","Benny，你有对手了。")],next:"h_draw"},
        {kind:"topic",icon:"🥟",say:["Honestly? Dumplings. I could eat them every single day.","说真的？饺子。我可以天天吃。"],
         react:[r("ollie","confused","Wait, is that **allowed** as a hobby?","等等，这也能算爱好？"),r("pia","happy","**Same.** **Respect.**","我也是。佩服。"),r("apple","happy","**Best answer** so far.","目前最佳答案。")],next:"h_food"},
        {kind:"topic",icon:"…",say:["…",""],
         react:[r("chestnut","nervous"),r("apple","neutral","**No pressure.** We'll **come back to** you.","别有压力，我们等会儿再回到你。"),r("benny","neutral","(note) I hate this part too.","我也讨厌这个环节。")],next:"h_quiet"}
      ]},
    h_kpop:hallway("kpop","pia",[
      T("So who's your **bias**?","那你最喜欢哪个成员？",{
        pia:{react:[r("pia","happy","Don't make me choose. Okay fine, but you HAVE to hear this.","别让我选。好吧，但你一定要听这个。","🎧")],next:"E1"},
        ollie:{react:[r("ollie","confused","Bias? Is that like a **main character**?","Bias？是像主角那种吗？")],next:"E4"},
        benny:{react:[r("benny","happy","","","🎧"),r("benny","happy","(note) **Lowkey** same group.","其实我也喜欢这个团。")],next:"E5"}}),
      T("Have you heard their new song? It's **stuck in my head**.","你听过他们的新歌吗？一直在我脑子里循环。",{
        pia:{react:[r("pia","startled","Wait, **it slaps**. Send it to me right now.","等等，这首太好听了。现在就发给我。")],next:"E1"},
        ollie:{react:[r("ollie","happy","","","🥁"),r("ollie","happy","This would be a **sick** boss-fight song.","这首超适合当打 Boss 的配乐。")],next:"E3"},
        benny:{react:[r("benny","happy","","","🎵"),r("benny","happy","(note) **Catchy.**","很上头。")],next:"E6"}}),
      T("Do you play any instruments?","你会什么乐器吗？",{
        pia:{react:[r("pia","happy","Piano. Badly. My cat **literally** leaves the room.","钢琴。弹得很烂。我家猫真的会走开。")],next:"E2"},
        ollie:{react:[r("ollie","happy","Guitar Hero. **Expert mode.** That counts, right?","吉他英雄，专家模式。这也算吧？")],next:"E4"},
        benny:{react:[r("benny","neutral","(note) No. I draw while I listen.","不会。我边听边画。")],next:"E7"}})]),
    h_games:hallway("games","ollie",[
      T("What are you playing right now?","你最近在玩什么？",{
        ollie:{react:[r("ollie","startled","Okay so, there's this game, you're gonna **lose your mind**—","好，有个游戏，你会疯掉的——")],next:"E3"},
        pia:{react:[r("pia","happy","Rhythm games. **Obviously.**","节奏游戏。那还用说。")],next:"E2"},
        benny:{react:[r("benny","happy","","","👾")],next:"E6"}}),
      T("We should **team up** sometime.","我们哪天组队吧。",{
        ollie:{react:[r("ollie","happy","Lunch. Today. I'm **dead serious**.","午饭。今天。我认真的。")],next:"E3"},
        pia:{react:[r("pia","happy","Only if you **let me win**.","除非你让我赢。")],next:"E2"},
        benny:{react:[r("benny","happy","(note) Saturday? **I'm down.**","周六？算我一个。")],next:"E7"}}),
      T("Okay, but are you actually good?","好吧，但你真的玩得好吗？",{
        ollie:{react:[r("ollie","confused","Am I GOOD? …Okay, no. But I'm **getting there**.","我玩得好吗？……好吧，不好。但我在进步。")],next:"E4"},
        pia:{react:[r("pia","happy","I'm amazing. At losing.","我超强的。在输这方面。")],next:"E2"},
        benny:{react:[r("benny","neutral","(note) No. I just draw the characters.","不玩。我只画角色。")],next:"E7"}})]),
    h_draw:hallway("draw","benny",[
      T("What do you usually draw?","你平时画什么？",{
        benny:{react:[r("benny","happy","","","🦸"),r("benny","happy","(note) **Work in progress.**","还没画完。")],next:"E6"},
        pia:{react:[r("pia","happy","Stick figures. **Elite** stick figures.","火柴人。顶级火柴人。")],next:"E2"},
        ollie:{react:[r("ollie","confused","Does drawing game maps **count**?","画游戏地图算吗？")],next:"E4"}}),
      T("**Mind if I take a look?**","介意我看看吗？",{
        benny:{react:[r("benny","nervous"),r("benny","happy","","","img:assets/chestnut_happy.png")],next:"E6"},
        pia:{react:[r("pia","happy","","","🐱"),r("pia","happy","It's **abstract**. Okay, it's **cute**, admit it.","这是抽象派。好吧，很可爱，承认吧。")],next:"E2"},
        ollie:{react:[r("ollie","happy","","","🗺️"),r("ollie","happy","**Don't tell** the teacher.","别告诉老师。")],next:"E3"}}),
      T("Wanna draw something together?","要一起画点什么吗？",{
        benny:{react:[r("benny","happy","","","📓")],next:"E8"},
        pia:{react:[r("pia","happy","Only if you design my **album cover**. I'm gonna be famous.","除非你帮我设计专辑封面。我以后会出名的。")],next:"E2"},
        ollie:{react:[r("ollie","startled","Wait, what if we designed our own game?","等等，要不我们自己设计个游戏？")],next:"E3"}})]),
    h_food:hallway("food","ollie",[
      T("Have you ever tried them?","你吃过吗？",{
        ollie:{react:[r("ollie","happy","Like **potstickers**? I could eat like twenty.","像锅贴那种？我能吃二十个。")],next:"E9"},
        pia:{react:[r("pia","nervous","Only the frozen ones. **Don't judge me.**","只吃过速冻的。别笑我。")],next:"E2"},
        benny:{react:[r("benny","confused","(note) Never. What do they **taste like**?","没吃过。是什么味道？")],next:"E7"}}),
      T("My grandma makes the best ones. **No contest.**","我奶奶包的最好吃，毫无悬念。",{
        ollie:{react:[r("ollie","startled","Okay, I need to meet your grandma.","好，我得见见你奶奶。")],next:"E4"},
        pia:{react:[r("pia","happy","Does she **take orders**?","她接单吗？")],next:"E2"},
        benny:{react:[r("benny","happy","","","👵🥟")],next:"E6"}}),
      T("I could bring some tomorrow, if you want.","你想的话，我明天可以带一些来。",{
        ollie:{react:[r("ollie","startled","Wait, **for real**? **Deal.** No **take-backs**.","等等，真的吗？说定了，不许反悔。")],next:"E9"},
        pia:{react:[r("pia","happy","Bring extra. I'm **not sharing**.","多带点。我可不分给别人。")],next:"E9"},
        benny:{react:[r("benny","happy","(note) **That'd be awesome.**","那太棒了。")],next:"E9"}})]),
    h_quiet:hallway("quiet","benny",[
      T("**Same.** I totally **froze**.","我也是。我完全愣住了。",{
        benny:{react:[r("benny","happy","(note) **You're not the only one.**","不只你一个。")],next:"E10"},
        pia:{react:[r("pia","happy","Oh, the sharing thing? **Ugh**, same, honestly.","哦，那个分享环节？唉，说真的，我也是。")],next:"E2"},
        ollie:{react:[r("ollie","confused","Froze? Like, **lagged**? I **feel that**.","愣住？像卡顿那样？我懂。")],next:"E4"}}),
      T("Thanks. That helped.","谢谢，这让我好受多了。",{
        benny:{react:[r("benny","happy"),r("benny","neutral","","","✏️")],next:"E7"},
        pia:{react:[r("pia","confused","…**You're welcome?** For what?","……不客气？谢什么？")],next:"E2"},
        ollie:{react:[r("ollie","confused","Wait, what did I do?","等等，我做了什么？")],next:"E4"}})])
  },
  endings:{
    E1:{who:["chestnut","pia"],en:"Pia wants to swap playlists.",zh:"Pia 要跟你交换歌单。"},
    E2:{who:["chestnut","pia"],en:"You and Pia cracked up.",zh:"你和 Pia 笑成一团。"},
    E3:{who:["chestnut","ollie"],en:"Ollie: \"See you at lunch.\"",zh:"Ollie：“午饭见。”"},
    E4:{who:["chestnut","ollie"],en:"A little weird. But Ollie's laughing.",zh:"有点怪，但 Ollie 在笑。"},
    E5:{who:["chestnut","benny"],en:"You listened to a whole song with Benny.",zh:"你和 Benny 一起听完了一首歌。"},
    E6:{who:["chestnut","benny"],en:"Benny drew you a picture.",zh:"Benny 给你画了一张画。"},
    E7:{who:["chestnut","benny"],en:"Benny answered you. That's a lot for him.",zh:"Benny 回答了你，这对他来说已经很多了。"},
    E8:{who:["chestnut","benny"],en:"Benny shared half his notebook.",zh:"Benny 把本子分了你一半。"},
    E9:{who:["chestnut","ollie","pia","benny"],en:"You're bringing dumplings tomorrow.",zh:"明天你要带饺子来。"},
    E10:{who:["chestnut","benny"],en:"Someone gets it.",zh:"有人和你一样。"},
    E11:{who:["chestnut"],en:"Nobody noticed. Try again tomorrow.",zh:"没人注意到。明天再试一次。",soft:true}
  },
  fallback:{kpop:["No way!","不会吧！"],games:["Same!","我也是！"],draw:["Wait, really?","真的假的？"],food:["Wait, seriously?","真的吗？"],quiet:["Same, honestly.","说真的，我也是。"]},
  vocab:{
    common:{when:"接别人的话，表示你在听",w:[["No way!","不会吧！"],["Same.","我也是"],["Honestly?","说真的"],["Wait, really?","真的假的？"]]},
    kpop:{when:"聊音乐",w:[["bias","最喜欢的成员"],["it slaps","超好听"],["stuck in my head","在脑子里循环"],["lowkey","悄悄地、有点"],["catchy","上头"]]},
    games:{when:"约人、聊爱好",w:[["obsessed with","迷上"],["team up","组队"],["I'm down","我可以、算我一个"],["dead serious","认真的"],["getting there","在进步"]]},
    draw:{when:"想看别人的东西、夸人",w:[["doodle","随手画"],["Mind if I take a look?","介意我看看吗"],["work in progress","还没画完"],["cute","可爱"],["album cover","专辑封面"]]},
    food:{when:"聊吃的、答应别人",w:[["No contest.","毫无悬念"],["for real?","真的吗"],["Deal.","说定了"],["Don't judge me.","别笑我"],["take orders","接单"]]},
    quiet:{when:"紧张的时候、安慰别人",w:[["No pressure.","别有压力"],["froze","愣住了"],["I feel that.","我懂"],["You're not the only one.","不只你一个"]]}
  }
};
