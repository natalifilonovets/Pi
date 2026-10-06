'use strict';
const $ = id => document.getElementById(id);
const affirmative = [
 [
  "I ___ (walk) to school every morning.",
  "walk"
 ],
 [
  "She ___ (drink) tea with breakfast.",
  "drinks"
 ],
 [
  "We ___ (play) football on Saturdays.",
  "play"
 ],
 [
  "My brother ___ (watch) TV after dinner.",
  "watches"
 ],
 [
  "They ___ (live) near the park.",
  "live"
 ],
 [
  "He ___ (study) English every day.",
  "studies"
 ],
 [
  "You ___ (cook) delicious meals.",
  "cook"
 ],
 [
  "Our teacher ___ (explain) new words clearly.",
  "explains"
 ],
 [
  "I usually ___ (read) before bed.",
  "read"
 ],
 [
  "My mother ___ (go) to work by bus.",
  "goes"
 ],
 [
  "We ___ (visit) our grandparents on Sundays.",
  "visit"
 ],
 [
  "The shop ___ (open) at nine.",
  "opens"
 ],
 [
  "They often ___ (listen) to music.",
  "listen"
 ],
 [
  "My sister ___ (wash) the dishes after lunch.",
  "washes"
 ],
 [
  "You ___ (need) a ticket for the train.",
  "need"
 ],
 [
  "He ___ (brush) his teeth twice a day.",
  "brushes"
 ],
 [
  "I ___ (enjoy) long walks.",
  "enjoy"
 ],
 [
  "The bus ___ (stop) near my house.",
  "stops"
 ],
 [
  "We ___ (buy) fresh fruit at the market.",
  "buy"
 ],
 [
  "She ___ (teach) maths at a local school.",
  "teaches"
 ],
 [
  "They ___ (help) their neighbours.",
  "help"
 ],
 [
  "My dad ___ (fix) bikes in his free time.",
  "fixes"
 ],
 [
  "I ___ (take) a shower in the morning.",
  "take"
 ],
 [
  "The baby ___ (cry) when she is hungry.",
  "cries"
 ],
 [
  "We ___ (clean) our kitchen every evening.",
  "clean"
 ],
 [
  "He ___ (carry) his books in a backpack.",
  "carries"
 ],
 [
  "You ___ (speak) English very well.",
  "speak"
 ],
 [
  "My friend ___ (work) in a cafe.",
  "works"
 ],
 [
  "They ___ (travel) by train in summer.",
  "travel"
 ],
 [
  "She ___ (try) new recipes at weekends.",
  "tries"
 ],
 [
  "I ___ (write) a shopping list before going out.",
  "write"
 ],
 [
  "The library ___ (close) at six.",
  "closes"
 ],
 [
  "We ___ (eat) dinner together.",
  "eat"
 ],
 [
  "He ___ (do) his homework after school.",
  "does"
 ],
 [
  "You ___ (water) the plants every week.",
  "water"
 ],
 [
  "My aunt ___ (have) a small garden.",
  "has"
 ],
 [
  "They ___ (meet) their friends after work.",
  "meet"
 ],
 [
  "She ___ (use) her laptop for studying.",
  "uses"
 ],
 [
  "I ___ (leave) home at eight.",
  "leave"
 ],
 [
  "My cousin ___ (ride) a bike to school.",
  "rides"
 ]
];
const negatives = [
 [
  "I ___ (not / like) cold coffee.",
  "don't like"
 ],
 [
  "She ___ (not / eat) meat.",
  "doesn't eat"
 ],
 [
  "We ___ (not / work) on Sundays.",
  "don't work"
 ],
 [
  "He ___ (not / watch) TV in the morning.",
  "doesn't watch"
 ],
 [
  "They ___ (not / live) far from here.",
  "don't live"
 ],
 [
  "My brother ___ (not / play) tennis.",
  "doesn't play"
 ],
 [
  "You ___ (not / need) a car in this town.",
  "don't need"
 ],
 [
  "The shop ___ (not / open) on Mondays.",
  "doesn't open"
 ],
 [
  "I ___ (not / drink) fizzy drinks.",
  "don't drink"
 ],
 [
  "She ___ (not / go) to bed late.",
  "doesn't go"
 ],
 [
  "We ___ (not / buy) lunch at school.",
  "don't buy"
 ],
 [
  "My dad ___ (not / drive) to work.",
  "doesn't drive"
 ],
 [
  "They ___ (not / use) their phones during lessons.",
  "don't use"
 ],
 [
  "He ___ (not / study) French.",
  "doesn't study"
 ],
 [
  "You ___ (not / have) to pay for this lesson.",
  "don't have"
 ],
 [
  "My sister ___ (not / enjoy) horror films.",
  "doesn't enjoy"
 ],
 [
  "I ___ (not / take) the bus on Fridays.",
  "don't take"
 ],
 [
  "The train ___ (not / stop) at this station.",
  "doesn't stop"
 ],
 [
  "We ___ (not / leave) the lights on at night.",
  "don't leave"
 ],
 [
  "My friend ___ (not / cook) at weekends.",
  "doesn't cook"
 ]
];
const interrogatives = [
 [
  "___ you ___ (like) spicy food?",
  "Do",
  "like"
 ],
 [
  "___ she ___ (work) near your school?",
  "Does",
  "work"
 ],
 [
  "___ they ___ (play) basketball after school?",
  "Do",
  "play"
 ],
 [
  "___ he ___ (walk) to work?",
  "Does",
  "walk"
 ],
 [
  "___ we ___ (need) an umbrella today?",
  "Do",
  "need"
 ],
 [
  "___ your sister ___ (study) English?",
  "Does",
  "study"
 ],
 [
  "___ you ___ (drink) coffee every morning?",
  "Do",
  "drink"
 ],
 [
  "___ the bus ___ (stop) here?",
  "Does",
  "stop"
 ],
 [
  "___ your friends ___ (live) nearby?",
  "Do",
  "live"
 ],
 [
  "___ your dad ___ (cook) dinner?",
  "Does",
  "cook"
 ],
 [
  "___ you ___ (read) books in English?",
  "Do",
  "read"
 ],
 [
  "___ she ___ (go) swimming on Saturdays?",
  "Does",
  "go"
 ],
 [
  "___ they ___ (have) a dog?",
  "Do",
  "have"
 ],
 [
  "___ your brother ___ (watch) football?",
  "Does",
  "watch"
 ],
 [
  "___ we ___ (buy) tickets at the station?",
  "Do",
  "buy"
 ],
 [
  "___ this shop ___ (sell) bread?",
  "Does",
  "sell"
 ],
 [
  "___ you ___ (listen) to podcasts?",
  "Do",
  "listen"
 ],
 [
  "___ your teacher ___ (give) homework every day?",
  "Does",
  "give"
 ],
 [
  "___ your parents ___ (travel) in summer?",
  "Do",
  "travel"
 ],
 [
  "___ he ___ (do) the washing-up after dinner?",
  "Does",
  "do"
 ]
];
const questions = [...affirmative.map(([text,a])=>({text,answers:[a],hint:a===text.match(/\((.*?)\)/)[1]?'I / you / we / they → base verb.':'He / she / it → verb + s or es. Consonant + y → ies. Have → has.'})),...negatives.map(([text,a])=>({text,answers:[a],hint:"I / you / we / they → don't + base verb. He / she / it → doesn't + base verb."})),...interrogatives.map(([text,a,b])=>({text,answers:[a,b],hint:'Do + I / you / we / they; Does + he / she / it. Then use the base verb.'}))];
let board,turn,scores,errors,selected,pending,deck,lastQuestion=-1,current,attempts,questionCount,teacher=false,resolved=false,started=false;
let gameMode='two',aiTimer=null;
let kings=new Set(),captured=new Set(),chainFrom=null,gameOver=false;
const categoryNames={base:'Base verb',third:'He / she / it: -s / -es',negative:"Don't / doesn't",question:'Do / Does questions'};
questions.forEach((q,i)=>q.category=i>=affirmative.length+negatives.length?'question':i>=affirmative.length?'negative':q.answers[0]===q.text.match(/\((.*?)\)/)[1]?'base':'third');
let lessonStats={},mistakes=new Map(),lastMotion=null,practiceQueue=[],practicePosition=0,practiceAttempts=0,practiceResolved=false,practiceCorrect=0;
function resetLesson(){lessonStats=Object.fromEntries(Object.keys(categoryNames).map(key=>[key,{tasks:0,correct:0,firstTry:0,errors:0}]));mistakes.clear();lastMotion=null;$('practice-result').textContent='';}
function activeQuestionIds(){return questions.map((_,i)=>i);}

const normalize = s => s.toLowerCase().trim().replace(/[’‘`]/g,"'").replace(/\s+/g,' ').replace(/\bdoes not\b/g,"doesn't").replace(/\bdo not\b/g,"don't");
function refill(){deck=activeQuestionIds();for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}if(deck[deck.length-1]===lastQuestion){[deck[0],deck[deck.length-1]]=[deck[deck.length-1],deck[0]];}}
function initialBoard(){return Array.from({length:64},(_,i)=>{const row=Math.floor(i/8);if((row+i%8)%2===0)return null;return row<3?'pikachu':row>4?'gengar':null;});}
function reset(){cancelAI();gameMode=$('game-mode').value==='ai'?'ai':'two';resetLesson();kings.clear();captured.clear();chainFrom=null;gameOver=false;board=initialBoard();turn='pikachu';scores={pikachu:0,gengar:0};errors={pikachu:0,gengar:0};selected=null;pending=null;current=null;attempts=0;questionCount=0;deck=[];lastQuestion=-1;resolved=false;started=true;['start-dialog','task-dialog','victory-dialog','practice-dialog'].forEach(id=>$(id).close());render();}
// The computer uses the same legal moves, promotions and capture sequences as players.
function isAITurn(){return gameMode==='ai'&&turn==='gengar';}
function cancelAI(){if(aiTimer!==null)clearTimeout(aiTimer);aiTimer=null;}
function chooseAIMove(moves){
 let best=-Infinity,choices=[];
 for(const move of moves){
  const savedBoard=board.slice(),savedKings=new Set(kings),savedCaptured=new Set(captured);
  const wasKing=kings.has(move.from);
  try{
   board[move.to]=board[move.from];board[move.from]=null;kings.delete(move.from);
   if(wasKing||Math.floor(move.to/8)===0)kings.add(move.to);
   if(move.capture!==null)captured.add(move.capture);
   const continuation=move.capture!==null?rawMoves(move.to,true).length:0;
   // Captured pieces remain blockers until the entire sequence is complete.
   if(!continuation)clearCaptured();
   const threatened=board.some((piece,i)=>piece==='pikachu'&&rawMoves(i,true).some(m=>m.capture===move.to));
   const value=(move.capture!==null?20:0)+(kings.has(move.to)&&!wasKing?14:0)+(continuation?10:0)-(threatened?16:0)+(wasKing?0:(7-Math.floor(move.to/8)))+(3.5-Math.abs(move.to%8-3.5));
   if(value>best){best=value;choices=[move];}else if(value===best)choices.push(move);
  }finally{board=savedBoard;kings=savedKings;captured=savedCaptured;}
 }
 return choices[Math.floor(Math.random()*choices.length)];
}
function scheduleAI(){
 if(!started||gameOver||pending||!isAITurn()){cancelAI();return;}
 if(aiTimer!==null)return;
 aiTimer=setTimeout(()=>{
  aiTimer=null;if(!started||gameOver||pending||!isAITurn())return;
  const moves=availableMoves();if(!moves.length){announceWinner('pikachu');return;}
  const move=chooseAIMove(moves);pending={...move,team:turn,applied:false};
  scores.gengar++;applyMove(pending);finishTask();
 },700);
}
function updateModeHelp(){
 $('mode-help').textContent=$('game-mode').value==='ai'?'You play Pikachu and answer questions. Gengar moves automatically and earns one point per move. Capture all opposing pieces or leave your opponent with no legal moves to win.':'Two players take turns and answer grammar questions. Capture all opposing pieces or leave your opponent with no legal moves to win.';
}
$('game-mode').onchange=updateModeHelp;updateModeHelp();

const diagonals=[[-1,-1],[-1,1],[1,-1],[1,1]];
function rawMoves(from,captureOnly=false){
 const team=board[from];if(!team||captured.has(from))return [];
 const row=Math.floor(from/8),col=from%8,isKing=kings.has(from),moves=[];
 for(const [dr,dc] of diagonals){
  if(isKing){
   let enemy=null;
   for(let r=row+dr,c=col+dc;r>=0&&r<8&&c>=0&&c<8;r+=dr,c+=dc){
    const to=r*8+c;
    if(board[to]){if(enemy!==null||board[to]===team||captured.has(to))break;enemy=to;}
    else if(enemy!==null)moves.push({from,to,capture:enemy});
    else if(!captureOnly)moves.push({from,to,capture:null});
   }
  }else{
   const r=row+dr,c=col+dc;if(r<0||r>7||c<0||c>7)continue;
   const adjacent=r*8+c;
   if(!captureOnly&&!board[adjacent]&&dr===(team==='pikachu'?1:-1))moves.push({from,to:adjacent,capture:null});
   const lr=row+2*dr,lc=col+2*dc;
   if(lr>=0&&lr<8&&lc>=0&&lc<8&&board[adjacent]&&board[adjacent]!==team&&!captured.has(adjacent)&&!board[lr*8+lc])moves.push({from,to:lr*8+lc,capture:adjacent});
  }
 }
 return moves;
}
function availableMoves(team=turn){
 if(chainFrom!==null)return team===turn?rawMoves(chainFrom,true):[];
 return board.flatMap((piece,i)=>piece===team?rawMoves(i):[]);
}
function legal(from,to){return availableMoves().some(move=>move.from===from&&move.to===to);}
function moveStatus(){
 if(isAITurn())return 'Gengar AI is thinking…';
 if(chainFrom!==null)return 'Continue with the glowing piece — capture again!';
 const captures=availableMoves().filter(move=>move.capture!==null);
 if(selected!==null){
  if(captures.some(move=>move.from===selected))return 'You can capture with this piece: choose a ringed square, or make another move.';
  return kings.has(selected)?'Choose a glowing square along a diagonal.':'Choose a glowing square to move forward.';
 }
 return captures.length?'Capture available! Highlighted pieces can capture, but you may move any playable piece.':'Choose your character to see its moves.';
}
function applyMove(move){
 lastMotion={...move,team:turn,wasKing:kings.has(move.from),captureKing:move.capture!==null&&kings.has(move.capture),captureTeam:move.capture!==null?board[move.capture]:null};
 const king=kings.delete(move.from);board[move.to]=board[move.from];board[move.from]=null;
 if(king||Math.floor(move.to/8)===(turn==='pikachu'?7:0))kings.add(move.to);
 if(move.capture!==null)captured.add(move.capture);
 move.applied=true;
}
function clearCaptured(){for(const i of captured){board[i]=null;kings.delete(i);}captured.clear();}
function announceWinner(team){const opponent=team==='pikachu'?'gengar':'pikachu';const remaining=board.filter((piece,i)=>piece===opponent&&!captured.has(i)).length;$('victory-reason').textContent=remaining===0?capitalize(opponent)+' has no pieces left.':capitalize(opponent)+' has '+remaining+' pieces left, but no legal moves. A blocked player loses.';cancelAI();gameOver=true;clearCaptured();$('winner').textContent=capitalize(team).toUpperCase()+' WINS!';$('final-score').textContent=`Moves: Pikachu ${scores.pikachu} · Gengar ${scores.gengar}`;render();renderSummary();$('victory-dialog').showModal();}
function render(){const moves=availableMoves();const root=$('board');root.replaceChildren();board.forEach((piece,i)=>{const cell=document.createElement('button');cell.className='cell'+((Math.floor(i/8)+i%8)%2?' dark':'');cell.setAttribute('aria-label',`${String.fromCharCode(97+i%8)}${8-Math.floor(i/8)}${piece?' '+piece+' piece':', empty'}`);if(i===selected)cell.classList.add('selected');if(chainFrom===i)cell.classList.add('chain-piece');if(piece===turn&&moves.some(move=>move.from===i&&move.capture!==null))cell.classList.add('can-capture');if(selected!==null&&legal(selected,i)){cell.classList.add('possible');if(moves.some(move=>move.from===selected&&move.to===i&&move.capture!==null)){cell.classList.add('capture');cell.title='Capture an opponent’s piece';cell.setAttribute('aria-label',cell.getAttribute('aria-label')+', capture an opponent’s piece');}}if(piece){const face=document.createElement('span');face.className=`portrait ${piece}-face`;cell.append(face);if(kings.has(i)){cell.classList.add('king');const crown=document.createElement('span');crown.className='crown';crown.textContent='♛';cell.append(crown);}if(captured.has(i))cell.classList.add('captured');}if(i>=56||i%8===0){const coord=document.createElement('span');coord.className='coord';coord.textContent=i>=56?String.fromCharCode(97+i%8):8-Math.floor(i/8);cell.append(coord);}cell.disabled=!started||gameOver||!!pending||isAITurn()||!(piece===turn&&moves.some(move=>move.from===i)||selected!==null&&moves.some(move=>move.from===selected&&move.to===i));cell.onclick=()=>selectCell(i);root.append(cell);});for(const team of ['pikachu','gengar']){$(team+'-score').textContent=scores[team];$(team+'-progress').style.width=board.filter((x,i)=>x===team&&!captured.has(i)).length/12*100+'%';$(team+'-errors').textContent='Mistakes: '+errors[team];$(team+'-pieces').textContent=board.filter((x,i)=>x===team&&!captured.has(i)).length+' pieces';document.querySelector('.player.'+team).classList.toggle('active',turn===team);}$('turn').textContent=capitalize(turn)+"'s turn";$('turn').style.color=turn==='pikachu'?'var(--green)':'var(--yellow)';$('question-count').textContent='Mixed practice · '+questionCount+' questions';$('status').textContent=moveStatus();$('switch-player').disabled=!!pending||chainFrom!==null||gameOver||isAITurn();$('mode-label').textContent=gameMode==='ai'?'· You vs AI':'· Two players';document.querySelector('.player.gengar .team').textContent=gameMode==='ai'?'GENGAR · AI':'TEAM GENGAR';scheduleAI();}
function capitalize(s){return s[0].toUpperCase()+s.slice(1);}
function selectCell(i){
 if(!started||pending||gameOver||isAITurn())return;
 const moves=availableMoves();
 if(board[i]===turn&&moves.some(move=>move.from===i)){selected=i;render();return;}
 const move=moves.find(move=>move.from===selected&&move.to===i);
 if(move){pending={...move,team:turn,applied:false};openTask();}
}
function openTask(){if(!deck.length)refill();lastQuestion=deck.pop();current=questions[lastQuestion];attempts=0;resolved=false;questionCount++;lessonStats[current.category].tasks++;$('task-team').textContent=capitalize(turn).toUpperCase()+"'S MOVE";$('plural').textContent=current.answers.length===2?'s':'';$('sentence').innerHTML=current.text.replaceAll('___','<b>________</b>');$('answers').replaceChildren();current.answers.forEach((_,i)=>{const label=document.createElement('label');label.textContent=current.answers.length===2?(i===0?'Do or Does':'Main verb'):'Your answer';const input=document.createElement('input');input.id='answer-'+i;input.autocomplete='off';input.spellcheck=false;input.placeholder=current.answers.length===2?(i===0?'Auxiliary':'Verb'):'Type your answer';input.required=true;label.append(input);$('answers').append(label);});$('feedback').textContent='';$('feedback').className='';$('hint').hidden=true;$('check').hidden=false;$('continue').hidden=true;$('hint-button').hidden=false;$('task-teacher').hidden=!teacher;render();$('task-dialog').showModal();$('answer-0').focus();}
function fullSentence(){let index=0;return current.text.replace(/___/g,()=>current.answers[index++]).replace(/\s*\([^)]*\)/g,'');}
function lockAnswers(){document.querySelectorAll('#answers input').forEach(input=>input.disabled=true);$('check').hidden=true;$('continue').hidden=false;$('hint-button').hidden=true;$('continue').focus();}
function checkAnswer(event){event.preventDefault();if(resolved)return;const values=current.answers.map((_,i)=>$('answer-'+i).value);if(values.some(x=>!x.trim()))return;const correct=values.every((v,i)=>normalize(v)===normalize(current.answers[i]));if(correct){lessonStats[current.category].correct++;if(attempts===0)lessonStats[current.category].firstTry++;scores[turn]++;applyMove(pending);resolved=true;$('feedback').className='success';$('feedback').textContent='Correct! Great job! '+fullSentence();lockAnswers();render();}else{attempts++;errors[turn]++;lessonStats[current.category].errors++;mistakes.set(lastQuestion,(mistakes.get(lastQuestion)||0)+1);$('feedback').className='error';if(attempts<2){$('feedback').textContent='Try again! '+current.hint;$('answer-0').focus();$('answer-0').select();}else{resolved=true;$('feedback').textContent='The move stays where it is. '+fullSentence();lockAnswers();}render();}}
function finishTask(){
 if(!pending)return;
 const move=pending;pending=null;current=null;$('task-dialog').close();
 if(move.applied&&move.capture!==null&&rawMoves(move.to,true).length){chainFrom=move.to;selected=move.to;render();animateLastMove();return;}
 // A grammar mistake must never interrupt an already-started capture sequence.
 if(!move.applied&&chainFrom!==null){selected=chainFrom;render();return;}
 chainFrom=null;selected=null;clearCaptured();
 const opponent=turn==='pikachu'?'gengar':'pikachu';
 if(!board.includes(opponent)){announceWinner(turn);return;}
 turn=opponent;
 if(!availableMoves().length){announceWinner(turn==='pikachu'?'gengar':'pikachu');return;}
 render();animateLastMove();
}
$('answer-form').onsubmit=checkAnswer;$('continue').onclick=finishTask;$('hint-button').onclick=()=>{$('hint').textContent=current.hint;$('hint').hidden=false;};$('teacher').onclick=()=>{teacher=!teacher;$('teacher').setAttribute('aria-pressed',String(teacher));$('teacher').textContent=teacher?'Teacher mode: ON':'Teacher mode';$('teacher-controls').hidden=!teacher;$('task-teacher').hidden=!teacher;};$('switch-player').onclick=()=>{if(pending||chainFrom!==null||gameOver||isAITurn())return;turn=turn==='pikachu'?'gengar':'pikachu';selected=null;render();};$('skip').onclick=()=>{if(teacher)finishTask();};$('reveal').onclick=()=>{if(!teacher||resolved)return;resolved=true;$('feedback').className='';$('feedback').textContent='Answer: '+fullSentence()+ ' The move is cancelled.';lockAnswers();};['start-game','play-again'].forEach(id=>$(id).onclick=reset);['new-game','teacher-new','victory-new'].forEach(id=>$(id).onclick=prepareNewGame);document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('cancel',e=>e.preventDefault()));
function prepareNewGame(){cancelAI();['task-dialog','victory-dialog','practice-dialog'].forEach(id=>$(id).close());started=false;pending=null;selected=null;chainFrom=null;clearCaptured();gameOver=false;render();$('start-dialog').showModal();}
function animateLastMove(){
 const motion=lastMotion;lastMotion=null;
 if(!motion||globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches)return;
 const cells=$('board').children,from=cells[motion.from],to=cells[motion.to];
 const face=to?.querySelector?.('.portrait');if(!face?.animate||!from.getBoundingClientRect)return;
 const a=from.getBoundingClientRect(),b=to.getBoundingClientRect();
 face.animate([{transform:`translate(${a.left-b.left}px,${a.top-b.top}px)`,filter:'brightness(1.3)'},{transform:'translate(0,0)',filter:'brightness(1)'}],{duration:420,easing:'cubic-bezier(.2,.7,.2,1)'});
 const crown=to.querySelector('.crown');if(crown?.animate)crown.animate(motion.wasKing?[{transform:`translate(${a.left-b.left}px,${a.top-b.top}px)`},{transform:'translate(0,0)'}]:[{transform:'scale(.1)',opacity:0},{transform:'scale(1)',opacity:1}],{duration:420,easing:'ease-out'});
 if(motion.capture!==null){
  const ghost=document.createElement('span');ghost.className=`portrait capture-ghost ${motion.captureTeam}-face`;
  cells[motion.capture].append(ghost);const animation=ghost.animate([{opacity:1,transform:'scale(1)'},{opacity:0,transform:'scale(.15) rotate(70deg)'}],{duration:430,easing:'ease-in',fill:'forwards'});animation.onfinish=()=>ghost.remove();
 }
}
function renderSummary(){
 const root=$('lesson-summary');root.replaceChildren();const title=document.createElement('h3');title.textContent='Your lesson';root.append(title);
 const total=Object.values(lessonStats).reduce((n,x)=>n+x.tasks,0),correct=Object.values(lessonStats).reduce((n,x)=>n+x.correct,0);
 const intro=document.createElement('p');intro.className='muted';intro.textContent=`${correct} correct sentences / ${total} tasks · ${mistakes.size} sentences to practise`;root.append(intro);
 for(const [category,stats] of Object.entries(lessonStats)){
  if(!stats.tasks)continue;const row=document.createElement('div');row.className='summary-row';const name=document.createElement('span');name.textContent=categoryNames[category];const result=document.createElement('span');result.textContent=`${stats.firstTry}/${stats.tasks} first try · ${stats.errors} mistakes`;row.append(name);row.append(result);root.append(row);
 }
 if(mistakes.size){const tip=document.createElement('p');tip.className='muted';tip.textContent='Try these forms again in a short practice round.';root.append(tip);}
 $('practice-mistakes').hidden=mistakes.size===0;
}
$('lesson-end').onclick=()=>{if(pending||!started)return;cancelAI();gameOver=true;clearCaptured();render();$('winner').textContent='GREAT WORK!';$('victory-reason').textContent='Lesson finished by the player. The game was stopped before a checkers victory.';$('final-score').textContent=`Moves: Pikachu ${scores.pikachu} · Gengar ${scores.gengar}`;renderSummary();$('victory-dialog').showModal();};
function startPractice(){
 practiceQueue=[...mistakes.keys()];for(let i=practiceQueue.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[practiceQueue[i],practiceQueue[j]]=[practiceQueue[j],practiceQueue[i]];}
 if(!practiceQueue.length)return;practicePosition=0;practiceCorrect=0;$('victory-dialog').close();showPractice();
}
function showPractice(){
 const q=questions[practiceQueue[practicePosition]];practiceAttempts=0;practiceResolved=false;
 $('practice-progress').textContent=`PRACTICE ${practicePosition+1} / ${practiceQueue.length}`;
 $('practice-sentence').innerHTML=q.text.replaceAll('___','<b>________</b>');$('practice-answers').replaceChildren();
 q.answers.forEach((_,i)=>{const label=document.createElement('label');label.textContent=q.answers.length===2?(i===0?'Do or Does':'Main verb'):'Your answer';const input=document.createElement('input');input.id='practice-answer-'+i;input.required=true;input.autocomplete='off';input.spellcheck=false;label.append(input);$('practice-answers').append(label);});
 $('practice-feedback').textContent='';$('practice-feedback').className='';$('practice-check').hidden=false;$('practice-next').hidden=true;
 if(!$('practice-dialog').open)$('practice-dialog').showModal();$('practice-answer-0').focus();
}
function checkPractice(event){
 event.preventDefault();if(practiceResolved)return;const q=questions[practiceQueue[practicePosition]],values=q.answers.map((_,i)=>$('practice-answer-'+i).value);if(values.some(v=>!v.trim()))return;
 const correct=values.every((v,i)=>normalize(v)===normalize(q.answers[i]));practiceAttempts++;
 if(!correct&&practiceAttempts<2){$('practice-feedback').textContent='Try again! '+q.hint;$('practice-feedback').className='error';return;}
 practiceResolved=true;if(correct)practiceCorrect++;let index=0;const sentence=q.text.replace(/___/g,()=>q.answers[index++]).replace(/\s*\([^)]*\)/g,'');
 $('practice-feedback').textContent=(correct?'Correct! ':'Remember: ')+sentence;$('practice-feedback').className=correct?'success':'error';
 q.answers.forEach((_,i)=>$('practice-answer-'+i).disabled=true);$('practice-check').hidden=true;$('practice-next').hidden=false;$('practice-next').focus();
}
function closePractice(){
 $('practice-dialog').close();$('practice-result').textContent=`Practice: ${practiceCorrect} correct / ${practicePosition+(practiceResolved?1:0)} completed.`;$('victory-dialog').showModal();
}
$('practice-mistakes').onclick=startPractice;$('practice-form').onsubmit=checkPractice;$('practice-exit').onclick=closePractice;$('practice-next').onclick=()=>{if(!practiceResolved)return;if(practicePosition+1>=practiceQueue.length){closePractice();return;}practicePosition++;showPractice();};

board=initialBoard();turn='pikachu';scores={pikachu:0,gengar:0};errors={pikachu:0,gengar:0};selected=null;questionCount=0;resetLesson();render();$('start-dialog').showModal();
if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'read_chess_game',description:'Read current team, score and board. Does not disclose grammar answers.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({started,gameMode,turn,scores:{...scores},board:[...board],kings:[...kings],captured:[...captured],chainFrom,legalMoves:availableMoves(),question:current?.text??null})})).catch(()=>{});}catch{}}
