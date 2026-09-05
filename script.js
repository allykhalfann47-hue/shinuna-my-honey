const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const opening = $("#opening");
const openBtn = $("#openBtn");
const header = $("#siteHeader");
const main = $("#mainContent");
const audio = $("#bgMusic");
const musicBtn = $("#musicBtn");
const musicCardBtn = $("#musicCardBtn");

function startExperience(){
  opening.classList.add("hidden");
  header.classList.remove("hidden");
  main.classList.remove("hidden");
  audio.play().catch(()=>{});
  musicBtn.textContent = "❚❚";
  musicCardBtn.textContent = "Pause ♥";
  $(".vinyl")?.classList.add("playing");
}
openBtn.addEventListener("click", startExperience);

function toggleMusic(){
  if(audio.paused){
    audio.play().then(()=>{
      musicBtn.textContent="❚❚";
      musicCardBtn.textContent="Pause ♥";
      $(".vinyl")?.classList.add("playing");
    }).catch(()=>{});
  }else{
    audio.pause();
    musicBtn.textContent="♫";
    musicCardBtn.textContent="Play ♥";
    $(".vinyl")?.classList.remove("playing");
  }
}
musicBtn.addEventListener("click",toggleMusic);
musicCardBtn.addEventListener("click",toggleMusic);

const menuBtn=$("#menuBtn");
const nav=$("#nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
$$("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

function createStars(){
  const box=$("#stars");
  for(let i=0;i<130;i++){
    const s=document.createElement("i");
    s.className="star";
    s.style.left=Math.random()*100+"%";
    s.style.top=Math.random()*100+"%";
    s.style.animationDelay=(Math.random()*3)+"s";
    s.style.opacity=(.15+Math.random()*.65).toFixed(2);
    box.appendChild(s);
  }
}
createStars();

const reasons=[
["Your Beautiful Voice","Your voice has a way of making ordinary moments feel softer. Especially when I hear you at night."],
["Your Smile","Your smile can change the mood of an entire moment. I genuinely love seeing you happy."],
["The Way You Talk","You can talk and talk and talk… and somehow I still want to hear more. 😂"],
["Your Personality","There is something naturally special about the way you are. You don't need to pretend."],
["Your Attention","The attention you give me has a place in my heart that is difficult to explain."],
["Your Shyness","That little shy side of you is honestly one of the cutest things about my Honey."],
["Your Dreams","I love that you have dreams for your future and want to become a great Safety Officer."],
["Your Strength","You have faced difficult moments and still keep moving. Hilo nakiheshimu sana."],
["Your Beautiful Face","Your face became one of those pictures my heart remembers without trying."],
["Your Fashion","You have your own relationship with fashion, and I love seeing your style."],
["Your Photography","The way you enjoy photography shows me your creative side."],
["Your Love of Reading","There is something beautiful about a girl who can disappear into a good book."],
["Your Funny Side","You know how to entertain. Sometimes you are the whole show. 😂"],
["Our Night Talks","Your voice, my voice, late-night conversations… those moments are precious to me."],
["The Way You Make Me Feel","With you, I can feel excited, calm, emotional and happy — sometimes all at once."],
["Your Future","I don't only love who you are today. I also care about the woman you are becoming."],
["Our Memories","From the first message to the phone flashlight, every chapter means something to me."],
["The Distance","It is strange, but distance taught me how much one person can matter."],
["The Future I Imagine","I can imagine a future where we don't need a phone to say goodnight."],
["Simply… You","After every explanation, every reason and every list: I love you simply because you are you."]
];

const reasonGrid=$("#reasonGrid");
reasons.forEach((r,i)=>{
  const card=document.createElement("div");
  card.className="reason-card";
  card.innerHTML=`<div class="reason-inner">
    <div class="reason-front"><small>${String(i+1).padStart(2,"0")}</small><h3>${r[0]}</h3><span>Tap ♥</span></div>
    <div class="reason-back"><h3>${r[0]}</h3><p>${r[1]}</p></div>
  </div>`;
  card.addEventListener("click",()=>card.classList.toggle("flipped"));
  reasonGrid.appendChild(card);
});

const captions=[
"My Beautiful Honey","My Sweet Love","My Precious Girl","My Queen","My Favorite Girl",
"My Sunshine","My Sweetheart","My Pretty Love","My Heartbeat","My Lovely One",
"My Dream Girl","My Gorgeous Honey","My Happiness","My Rose","My Angel",
"My Darling","My Treasure","My Forever Love","My Everything","My Forever"
];
const galleryGrid=$("#galleryGrid");
for(let i=1;i<=20;i++){
  const item=document.createElement("div");
  item.className="gallery-item";
  const img=document.createElement("img");
  img.src=`images/shinuna${String(i).padStart(2,"0")}.jpg`;
  img.alt=captions[i-1];
  img.loading="lazy";
  const placeholder=document.createElement("div");
  placeholder.className="gallery-placeholder";
  placeholder.textContent=`Add shinuna${String(i).padStart(2,"0")}.jpg to the images folder`;
  item.appendChild(img);
  item.appendChild(placeholder);
  img.addEventListener("load",()=>placeholder.style.display="none");
  img.addEventListener("error",()=>{img.style.display="none";});
  const cap=document.createElement("div");
  cap.className="gallery-caption";
  cap.textContent=captions[i-1];
  item.appendChild(cap);
  item.addEventListener("click",()=>{
    if(img.complete && img.naturalWidth>0){
      $("#lightboxImg").src=img.src;
      $("#lightboxCaption").textContent=captions[i-1];
      $("#lightbox").classList.remove("hidden");
    }
  });
  galleryGrid.appendChild(item);
}

$("#closeLightbox").addEventListener("click",()=>$("#lightbox").classList.add("hidden"));
$("#lightbox").addEventListener("click",(e)=>{if(e.target.id==="lightbox")$("#lightbox").classList.add("hidden")});

const letters=[
["Open When You Miss Me","For the nights when distance feels too loud.",`
<p>My Honey, if you are reading this because you miss me, then close your eyes for a moment and imagine me sitting beside you.</p>
<p>Being far from you has never meant being far from my heart. Nakukumbuka pia, Honey. I miss your voice, your smile and those conversations that somehow never seem to end.</p>
<p>One day, InshaAllah, missing each other will not require a phone call. Until then, remember that you are loved.</p>`],
["Open When You're Sad","For a day when your smile needs a little help.",`
<p>Hey Honey. I know some days are heavy. You don't have to pretend that everything is okay.</p>
<p>Sitaki kuona tabasamu lako likipotea. Take a breath, rest, pray, and remember that one difficult day does not define your whole life.</p>
<p>Your Darlie is cheering for you, always. ♥</p>`],
["Open When You Need A Smile","For the talkative, funny, slightly shy girl.",`
<p>First: smile. Yes, right now. 😂</p>
<p>Remember that you are my talkative Honey, my little entertainer, my fashion girl, my photographer and sometimes the sleepiest person ever.</p>
<p>If this letter made you smile even a little, mission accomplished.</p>`],
["Open When You Doubt My Love","For the moments when your heart needs reassurance.",`
<p>My love is not based on perfect days. It is based on choosing to care even when things are difficult.</p>
<p>Distance, misunderstandings and challenges can make things complicated, but they cannot erase what you mean to me.</p>
<p>You are my Honey. And I am your Darlie. Hilo bado ni jambo la thamani sana kwangu.</p>`],
["Open When You Can't Sleep","For another late night.",`
<p>You know what I would love? To be beside you instead of talking through a screen.</p>
<p>I would listen to your voice, talk about random things, laugh at our nonsense and then tell you goodnight.</p>
<p>Until that day, close your eyes and imagine that the distance is temporarily switched off. Goodnight, Honey. Sleep peacefully.</p>`],
["Open On Your Birthday","For 31 July.",`
<p>Happy Birthday, my Honey! 🎂</p>
<p>I am proud of the person you are becoming. May Allah guide your steps, protect your heart and help you achieve your dream of becoming a great Safety Officer.</p>
<p>Another year older, another year more beautiful, wiser and stronger. Keep going. Your future is waiting for you.</p>`],
["Open When You Need To Remember Us","For the story only we know.",`
<p>Remember how everything started with a message to your mother… and somehow you were the one who replied?</p>
<p>Remember the electricity going off, the meter, and you helping me with your phone flashlight? Remember Mwanakwerekwe. Remember Darajani. Remember all those talks.</p>
<p>Our story has never needed to be perfect to be meaningful. One day we will look back and say: <b>“We really did it. Together.”</b></p>`]
];

const lettersGrid=$("#lettersGrid");
letters.forEach((l,i)=>{
  const b=document.createElement("button");
  b.className="letter-btn";
  b.innerHTML=`<span>💌</span><h3>${l[0]}</h3><p>${l[1]}</p>`;
  b.addEventListener("click",()=>{
    $("#modalEyebrow").textContent=`Letter ${i+1} • For my Honey`;
    $("#modalTitle").textContent=l[0];
    $("#modalBody").innerHTML=l[2];
    $("#letterModal").classList.remove("hidden");
  });
  lettersGrid.appendChild(b);
});
$("#closeLetter").addEventListener("click",()=>$("#letterModal").classList.add("hidden"));
$("#letterModal").addEventListener("click",e=>{if(e.target.id==="letterModal")$("#letterModal").classList.add("hidden")});

function pad(n){return String(Math.max(0,n)).padStart(2,"0")}
function updateBirthday(){
  const now=new Date();
  let target=new Date(now.getFullYear(),6,31,0,0,0);
  if(now>=target) target=new Date(now.getFullYear()+1,6,31,0,0,0);
  const diff=target-now;
  const sec=Math.floor(diff/1000);
  $("#bdDays").textContent=Math.floor(sec/86400);
  $("#bdHours").textContent=pad(Math.floor(sec%86400/3600));
  $("#bdMinutes").textContent=pad(Math.floor(sec%3600/60));
  $("#bdSeconds").textContent=pad(sec%60);
}
setInterval(updateBirthday,1000);updateBirthday();

const startDate=new Date(2024,0,18,0,0,0);
function updateLoveCounter(){
  const now=new Date();
  let years=now.getFullYear()-startDate.getFullYear();
  let temp=new Date(startDate);
  temp.setFullYear(startDate.getFullYear()+years);
  if(temp>now){years--;temp.setFullYear(temp.getFullYear()-1)}
  let months=now.getMonth()-temp.getMonth();
  if(months<0)months+=12;
  let temp2=new Date(temp);
  temp2.setMonth(temp2.getMonth()+months);
  if(temp2>now){months--;temp2.setMonth(temp2.getMonth()-1)}
  let diff=now-temp2;
  let days=Math.floor(diff/86400000);diff-=days*86400000;
  let hours=Math.floor(diff/3600000);diff-=hours*3600000;
  let minutes=Math.floor(diff/60000);diff-=minutes*60000;
  let seconds=Math.floor(diff/1000);
  $("#loveYears").textContent=years;
  $("#loveMonths").textContent=months;
  $("#loveDays").textContent=days;
  $("#loveHours").textContent=pad(hours);
  $("#loveMinutes").textContent=pad(minutes);
  $("#loveSeconds").textContent=pad(seconds);
}
setInterval(updateLoveCounter,1000);updateLoveCounter();

const quiz=[
["What nickname does AKHSAL call Shinuna? ",["Honey","Queen","Baby","Rose"],0],
["What is Shinuna's favorite color? ",["Black","Blue","Brown","Pink"],2],
["What career does Shinuna dream of? ",["Pilot","Safety Officer","Doctor","Designer"],1],
["Which drink does Shinuna like? ",["Soda","Coffee","Fresh fruit juices","Tea"],2],
["What does AKHSAL especially love about Shinuna? ",["Her voice","Her car","Her cooking only","Her shoes"],0]
];
let qIndex=0,score=0;
function loadQuestion(){
  const q=quiz[qIndex];
  $("#quizNumber").textContent=`Question ${qIndex+1} of ${quiz.length}`;
  $("#quizQuestion").textContent=q[0];
  $("#quizProgress").style.width=((qIndex+1)/quiz.length*100)+"%";
  $("#quizFeedback").textContent="";
  $("#nextQuestion").hidden=true;
  const opts=$("#quizOptions");opts.innerHTML="";
  q[1].forEach((text,i)=>{
    const b=document.createElement("button");b.className="quiz-option";b.textContent=text;
    b.addEventListener("click",()=>{
      $$("#quizOptions .quiz-option").forEach(x=>x.disabled=true);
      if(i===q[2]){score++;b.classList.add("correct");$("#quizFeedback").textContent="Correct! Honey knows us. ❤️";}
      else{b.classList.add("wrong");$("#quizFeedback").textContent=`Not quite 😄 The answer is "${q[1][q[2]]}".`;$$("#quizOptions .quiz-option")[q[2]].classList.add("correct")}
      $("#nextQuestion").hidden=false;
    });
    opts.appendChild(b);
  });
}
$("#nextQuestion").addEventListener("click",()=>{
  qIndex++;
  if(qIndex<quiz.length){loadQuestion();}
  else{
    $("#quizQuestion").textContent=`You scored ${score}/${quiz.length} ❤️`;
    $("#quizOptions").innerHTML="";
    $("#quizFeedback").textContent=score===quiz.length?"Perfect! You really know your Darlie and your story.":"Still cute. 😂 Now you have a reason to explore the website again.";
    $("#nextQuestion").hidden=true;
    qIndex=0;score=0;
  }
});
loadQuestion();

$("#unlockBtn").addEventListener("click",unlockSecret);
$("#secretInput").addEventListener("keydown",e=>{if(e.key==="Enter")unlockSecret()});
function unlockSecret(){
  const value=$("#secretInput").value.trim().toLowerCase();
  if(value==="shismally"){
    $("#secretLock").classList.add("hidden");
    $("#secretRoom").classList.remove("hidden");
    createConfetti(80);
  }else{
    $("#secretError").textContent="That code didn't open the door… try again, Honey. ♥";
  }
}

function createHearts(){
  setInterval(()=>{
    if(Math.random()>.55)return;
    const h=document.createElement("div");
    h.className="heart-particle";h.textContent="♥";
    h.style.left=Math.random()*100+"%";
    h.style.fontSize=(10+Math.random()*18)+"px";
    h.style.animationDuration=(7+Math.random()*7)+"s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),15000);
  },900);
}
createHearts();

function createConfetti(count=60){
  for(let i=0;i<count;i++){
    const c=document.createElement("i");c.className="confetti";c.textContent=Math.random()>.5?"♥":"✦";
    c.style.left=Math.random()*100+"vw";
    c.style.fontSize=(8+Math.random()*12)+"px";
    c.style.animationDelay=(Math.random()*.8)+"s";
    c.style.transform=`rotate(${Math.random()*360}deg)`;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),4000);
  }
}
$("#confettiBtn").addEventListener("click",()=>{
  createConfetti(140);
  $("#confettiBtn").textContent="I love you too ♥";
});

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    $("#lightbox").classList.add("hidden");
    $("#letterModal").classList.add("hidden");
  }
});
