type Level = 2|6|20; type Board = string[][];
class TactiQEngine{
static makeBotMove(board:Board,depth:Level){
let moves=[];for(let r=0;r<8;r++)for(let c=0;c<8;c++){
let p=board[r][c];if(!p||p===p.toUpperCase())continue;
for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){
let nr=r+dr,nc=c+dc;if(nr<0||nr>=8||nc<0||nc>=8)continue;
moves.push({from:[r,c],to:[nr,nc]});
}}
let ch=moves[Math.floor(Math.random()*moves.length)];
if(depth===20){let caps=moves.filter(m=>board[m.to[0]][m.to[1]]!=='');if(caps.length)ch=caps[0];}
board[ch.to[0]][ch.to[1]]=board[ch.from[0]][ch.from[1]];
board[ch.from[0]][ch.from[1]]='';
}
}
