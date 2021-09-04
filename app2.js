let order=[];
let started=0;
var startG= document.querySelector('#startG');
var topLeft=document.querySelector('#topLeft');
var bottomLeft=document.querySelector('#bottomLeft');
var topRight=document.querySelector('#topRight');
var bottomRight=document.querySelector('#bottomRight');
var isStrict= document.querySelector('#strict');
let on= true;
var round=0;
var turn=0;
var cnt=0;
var comp;
let strictt= false;
startG.addEventListener('click',startGame);
// isStrict.addEventListener('click',strict);
// function strict(){
//     if(isStrict.checked==true){strictt=true;}
// }
function startGame(){
    clearGame();
    // isStrict.disabled=true;
    started++; round=1; turn=0;
    // isStrict.disabled=true;
    playGame();
}
function clearGame(){
    order=[];
    round=0;
    // isStrict.disabled=false;
}
// Computer's Turn
function compTurn(){
      document.querySelector('#demo').innerHTML="Round: "+round;
      document.querySelector('#result').innerHTML="Memorize the pattern!";

        let temp= Math.floor(Math.random()*4)+1;
        order.push(temp);
        setTimeout(()=>{
            addSound(temp);
            addAnimation(temp);
        },200)
      turn=1;
      setTimeout(playGame,400);
    //   playGame();
}
function playGame(){
    if(round>20){
        document.querySelector('#result').innerHTML="Congratulations! You won🎊✨";
        // round=0;
        // isStrict.disabled=false;
    }
    else if(turn==0){compTurn();}
    else if(turn==1){
    cnt=0;    
    document.querySelector('#result').innerHTML="Repeat the pattern!"; 
    // turn=0;
}
}
topLeft.addEventListener('click',one);
topRight.addEventListener('click',two);
bottomRight.addEventListener('click',three);
bottomLeft.addEventListener('click',four);

function check(value,count){
    if(order.length==0){alert("Wait for computer's turn!"); return 2;}
    else if(order[count-1]==value){return 1;}
      else{return 0;}
}
function wrongAnswer(){
    alert('Wrong Pattern!')
    document.querySelector('#result').innerHTML="Wrong Pattern ❌";
    round=1;
    turn=0;
    order=[];
    setTimeout(playGame,1200);
}
function one(){
      cnt++;
      addAnimation(1);
      let ans=check(1,cnt);
      if(ans==1){
        addSound(1);
        if(cnt==order.length){
            round++;
            turn=0;
            // order=[];
            setTimeout(playGame,500);
        }  }
      else if(ans==0){
          addSound(5);
          wrongAnswer();
      }  
}
function two(){
    cnt++;
    addAnimation(2);
    let ans= check(2,cnt);
    if(ans==1){
        addSound(2);
        if(cnt==order.length){
            round++;
            turn=0;
            // order=[];
            setTimeout(playGame,500);
        }  }
    else if(ans==0){
            addSound(5);
            wrongAnswer();
        }       
}
function three(){
    cnt++;
    addAnimation(3);
    let ans=check(3,cnt);
    if(ans==1){
        addSound(3);
        if(cnt==order.length){
            round++;
            turn=0;
            // order=[];
            setTimeout(playGame,500);
        }  }
    else if(ans==0){
            addSound(5);
            wrongAnswer();
        } 

}
function four(){
    cnt++;
    addAnimation(4);
    let ans= check(4,cnt);
    if(ans==1){
    addSound(4);
    if(cnt==order.length){
        round++;
        turn=0;
        // order=[];
        setTimeout(playGame,500);
    }  }
    else if(ans==0){
        addSound(5);
        wrongAnswer();
    }
}
function addAnimation(value){
    console.log(value);
    switch(value){
        case 1:
            topLeft.classList.add('animation1');
            setTimeout(function(){
               topLeft.classList.remove('animation1');
            },200)
            break;
        case 2:
            topRight.classList.add('animation2');
            setTimeout(function(){
                topRight.classList.remove('animation2');
             },200)
            break;
        case 3:
            bottomRight.classList.add('animation3');
            setTimeout(function(){
                bottomRight.classList.remove('animation3');
             },200)
            break;
        case 4:
            bottomLeft.classList.add('animation4');  
            setTimeout(function(){
                bottomLeft.classList.remove('animation4');
             },200)  
            break;    
        // default:
        //      console.log(value);        
    }
}
function addSound(value){
    switch(value){
        case 1:
            document.querySelector('#sound1').play();
            break;
        case 2:
            document.querySelector('#sound2').play();
            break;
        case 3:
            document.querySelector('#sound3').play();
            break;
        case 4:
            document.querySelector('#sound4').play();
            break;
        case 5:
            document.querySelector('#sound5').play();    
        // default:
        //     console.log(value);                
    }
}
