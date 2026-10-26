let S={K:'♔',Q:'♕',R:'♖',B:'♗',N:'♘',P:'♙',k:'♚',q:'♛',r:'♜',b:'♝',n:'♞',p:'♟'};
let board=[['r','n','b','q','k','b','n','r'],['p','p','p','p','p','p','p','p'],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['P','P','P','P','P','P','P','P'],['R','N','B','Q','K','B','N','R']];
let selected=null,botDepth=2;
function renderBoard(){let el=document.getElementById('mainBoard');el.innerHTML='';for(let r=0;r<8;r++)for(let c=0;c<8;c++){let d=document.createElement('div');d.className='sq '+((r+c)%2==0?'l':'d');let p=board[r][c];if(p){let sp=document.createElement('span');sp.textContent=S[p];d.appendChild(sp);}d.onclick=()=>clickSq(r,c);el.appendChild(d);}}
function clickSq(r,c){if(selected){board[r][c]=board[selected[0]][selected[1]];board[selected[0]][selected[1]]='';TactiQEngine.makeBotMove(board,botDepth);selected=null;}else selected=[r,c];renderBoard();}
renderBoard();
