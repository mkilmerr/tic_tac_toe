const p1 = "X";
const p2 = "0";
var playTime = p1;
var gameOver = false;

atualizaResultado();
ocuparEspaco();


function atualizaResultado(){
  if(gameOver){return;}

  else if(playTime == p1){
    var player = document.querySelectorAll("div.mostrador img")[0];
    player.setAttribute("src","images/x.png");

  }else{
    var player = document.querySelectorAll("div.mostrador img")[0];
    player.setAttribute("src","images/o.png");

  }
}

function ocuparEspaco(){

  var lugar = document.getElementsByClassName("tab");

  for(var i =0;i<lugar.length;i++){
  lugar[i].addEventListener("click",function(){

    if(gameOver){return;}
    else if(this.getElementsByTagName("img".length==0)){
      if(playTime == p1){
        this.innerHTML = "<img src='images/x.png'>"
        this.setAttribute("lance",p1);
        playTime = p2;
      }else{
        this.innerHTML = "<img src='images/o.png'>";
        this.setAttribute("lance",p2);
        playTime = p1;
      }
    }
    atualizaResultado();
    analiseResultado();
  })
  }
}

async function analiseResultado(){

var a1 = document.getElementById("a1").getAttribute("lance");
var a2 = document.getElementById("a2").getAttribute("lance");
var a3 = document.getElementById("a3").getAttribute("lance");

var b1 = document.getElementById("b1").getAttribute("lance");
var b2 = document.getElementById("b2").getAttribute("lance");
var b3 = document.getElementById("b3").getAttribute("lance");

var c1 = document.getElementById("c1").getAttribute("lance");
var c2 = document.getElementById("c2").getAttribute("lance");
var c3 = document.getElementById("c3").getAttribute("lance");

var ganhou = "";
if((a1 == b1 && a1 == c1)|| (a1 == b2 && a1 == c3) || (a1 == a2 && a1 == a3) && a1 !=""){
  ganhou = a1;
}
else if((b2 == b1 && b2 == b3) || (b2 == a2 && b2 == c2)&& b2!="" ){
  ganhou = b2;
}else if((c3 == c2 && c3==c1)|| (c3 == b3 && c3 == a3)&& c3!=""){
  ganhou = c3;
}
if(ganhou !=""){
  gameOver = true;
  await aguarda(50);
  alert("o ganhador foi o : "+ ganhou);
  window.location.replace("file:///home/mkilmer/Desktop/LaTim/tic_tac_toe_new/index.html");
}

function aguarda(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}
}
