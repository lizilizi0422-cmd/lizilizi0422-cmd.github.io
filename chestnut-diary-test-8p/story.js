// Level 1 (8-page UI prototype, Pages 1-4).
// Rules, lines & topics by dr eggbot (2026-11-24 + steering updates).
// Chinese translations marked TEMP are temporary by Chestnutlll until dr eggbot provides final copy.
(function(root){
const TITLE="Make a friend before the bell rings.";

const GROUPS={
  pia:{
    id:"pia",
    name:"Pia & Jade",
    main:"pia",
    friend:"jade",
    topicIcon:"🎵",
    topicLabel:"K-pop song",
    topicZh:"K-pop 新歌",
    lines:[
      {who:"pia",en:"Their **comeback** is Friday!"},
      {who:"jade",en:"The **dance** is impossible."}
    ],
    stickers:[
      {id:"s1",topic:true,en:"Wait, the new **song**? It's so catchy."},
      {id:"s2",topic:true,en:"Are you learning the **dance**?"},
      {id:"new",topic:false,en:"Hi, I'm new."}
    ],
    onSuccess:{
      s1:{who:"pia",mood:"happy",en:null,act:"Pia & Jade turn and make room."},
      s2:{who:"pia",mood:"wave",en:null,act:"Pia & Jade turn and make room."}
    },
    onInterrupt:{who:"pia",mood:"confused",en:"Uh… sorry, what?",act:"They pause, confused."},
    onNew:{who:null,mood:"neutral",en:null,act:"They keep talking and don't notice you."}
  },
  ollie:{
    id:"ollie",
    name:"Ollie & Max",
    main:"ollie",
    friend:"max",
    topicIcon:"🎮",
    topicLabel:"the game",
    topicZh:"游戏",
    lines:[
      {who:"ollie",en:"No way, the **final boss** is way harder."},
      {who:"max",en:"You're just bad."}
    ],
    stickers:[
      {id:"s1",topic:true,en:"Wait, the **final boss**? It took me forever."},
      {id:"s2",topic:true,en:"Is that the new **game**?"},
      {id:"new",topic:false,en:"Hi, I'm new."}
    ],
    onSuccess:{
      s1:{who:"ollie",mood:"happy",en:"See? Told you!",act:"Both turn to you."},
      s2:{who:"ollie",mood:"startled",en:"Dude, you play?",act:"Both turn to you."}
    },
    onInterrupt:{who:"ollie",mood:"confused",en:"Uh… sorry, what?",act:"They pause, confused."},
    onNew:{who:null,mood:"neutral",en:null,act:"They keep arguing. Nobody responds."}
  },
  benny:{
    id:"benny",
    name:"Benny",
    main:"benny",
    friend:null,
    topicIcon:"✏️",
    topicLabel:"drawing",
    topicZh:"画画",
    lines:[], // Benny has no speech lines; shows apple superhero notebook
    stickers:[
      {id:"s1",topic:true,en:"Whoa, is that your **drawing**? It's so cool."},
      {id:"s2",topic:true,en:"Mind if I take a look?"},
      {id:"new",topic:false,en:"Hi, I'm new."}
    ],
    onSuccess:{
      s1:{who:"benny",mood:"happy",en:null,act:"Benny pushes his notebook a bit toward you."},
      s2:{who:"benny",mood:"happy",en:null,act:"Benny nods and turns the notebook toward you."}
    },
    onInterrupt:{who:"benny",mood:"neutral",en:null,act:"Benny keeps drawing and doesn't look up."},
    onNew:{who:"benny",mood:"neutral",en:null,act:"Benny glances up once, then keeps drawing."}
  }
};

const TASKS={
  1:{en:"Tap a group to listen.",zh:"点一群人，听他们在聊什么。"},
  2:{en:"Who do you want to talk to?",zh:"你想跟谁说话？"},
  3:{en:"Wait for a pause, then say something.",zh:"等停顿的时候，再说点什么。"},
  4:{en:"See how they reacted.",zh:"看看他们的反应。"}
};

// TEMP zh translations by Chestnutlll until dr eggbot supplies final Chinese
const ZH={
  "Their **comeback** is Friday!":"他们周五回归发新歌！",
  "The **dance** is impossible.":"这支舞根本学不会。",
  "No way, the **final boss** is way harder.":"不可能，最终 Boss 难多了。",
  "You're just bad.":"就是你自己菜。",
  "Wait, the new **song**? It's so catchy.":"等等，新歌吗？超上头的。",
  "Are you learning the **dance**?":"你在学这个舞吗？",
  "Wait, the **final boss**? It took me forever.":"等等，最终 Boss 吗？我打了超久。",
  "Is that the new **game**?":"那是新出的那个游戏吗？",
  "Whoa, is that your **drawing**? It's so cool.":"哇，这是你画的吗？好酷。",
  "Mind if I take a look?":"介意我看看吗？",
  "Hi, I'm new.":"嗨，我是新来的。",
  "Uh… sorry, what?":"呃……不好意思，什么？",
  "See? Told you!":"你看吧！我就说！",
  "Dude, you play?":"哥们，你也玩？",
  "Pia & Jade turn and make room.":"Pia 和 Jade 转过身，让出了位置。",
  "Both turn to you.":"两个人都转过来看你。",
  "They pause, confused.":"他们停下来，有点困惑。",
  "They keep talking and don't notice you.":"他们继续聊着，没注意到你。",
  "They keep arguing. Nobody responds.":"他们继续争论着，没人回应。",
  "Benny pushes his notebook a bit toward you.":"Benny 把素描本朝你推过来一点。",
  "Benny nods and turns the notebook toward you.":"Benny 点点头，把素描本转过来给你看。",
  "Benny keeps drawing and doesn't look up.":"Benny 继续画画，没有抬头。",
  "Benny glances up once, then keeps drawing.":"Benny 抬头看了一眼，又继续画了。",
  "They turned to me!":"他们转过来看我了！",
  "They didn't hear me.":"他们没听到我说话。"
};

const API={TITLE,GROUPS,TASKS,ZH};
if(typeof module!=="undefined")module.exports=API;else root.STORY8=API;
})(this);
