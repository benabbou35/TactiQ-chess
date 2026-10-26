let boardState=[
 ['r','n','b','q','k','b','n','r'],
 ['p','p','p','p','p','p','p','p'],
 ['','','','','','','',''],
 ['','','','','','','',''],
 ['','','','','','','',''],
 ['','','','','','','',''],
 ['P','P','P','P','P','P','P','P'],
 ['R','N','B','Q','K','B','N','R'],
];
let selected=null;
const icons={r:'♜',n:'♞',b:'♝',q:'♛',k:'♚',p:'♟',R:'♜',N:'♞',B:'♝',Q:'♛',K:'♚',P:'♟'};

function render(){
  const board=document.getElementById('mainBoard');
  board.innerHTML='';
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){
    let sq=document.createElement('div');
    sq.className='square '+((r+c)%2==0?'light':'dark');
    if(selected && selected.r==r && selected.c==c) sq.classList.add('selected');
    let p=boardState[r][c];
    if(p){let s=document.createElement('span');s.className='piece '+(p==p.toUpperCase()?'white':'black');s.textContent=icons[p];sq.appendChild(s);}
    sq.onclick=()=>click(r,c);
    board.appendChild(sq);
  }
}
function click(r,c){
  if(selected){
    if(selected.r==r && selected.c==c){selected=null;render();return;}
    boardState[r][c]=boardState[selected.r][selected.c];
    boardState[selected.r][selected.c]='';
    document.getElementById('status').textContent='تمت الحركة!';
    selected=null;render();setTimeout(bot,600);
  }else{
    let p=boardState[r][c];
    if(!p || p!=p.toUpperCase()) return;
    selected={r,c};render();
  }
}
function bot(){
  let moves=[];
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){
    if(boardState[r][c]=='p' && r<7 && !boardState[r+1][c]) moves.push({f:[r,c],t:[r+1,c]});
  }
  if(moves.length){let m=moves[Math.floor(Math.random()*moves.length)];boardState[m.t[0]][m.t[1]]=boardState[m.f[0]][m.f[1]];boardState[m.f[0]][m.f[1]]='';render();}
}
function toggleLang(){document.getElementById('langBox').classList.toggle('show')}
function setLang(l){
  document.getElementById('langBox').classList.remove('show');
  document.querySelector('.lang-current').textContent='▼ '+l.toUpperCase();
  let t={ar:{title:'العب الشطرنج<br>مجاناً',sub:'مباريات مصنفة، محرك أستاذ كبير، ألغاز وبطولات',on:'🚀 العب أونلاين',bot:'العب ضد المحرك'},en:{title:'Play Chess<br>For Free',sub:'Rated games, GM engine, puzzles & tournaments',on:'🚀 Play Online',bot:'Play vs Engine'}};
  let tr=t[l]||t.ar;
  document.getElementById('t-title').innerHTML=tr.title;
  document.getElementById('t-sub').textContent=tr.sub;
  document.getElementById('t-playOnline').textContent=tr.on;
  document.getElementById('t-playBot').textContent=tr.bot;
}
render();
