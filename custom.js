/*.....timer.....*/
const timer = document.getElementById('timer');
const leftBox =document.getElementsByClassName('leftBox');
const btns= document.getElementsByClassName('btn');
const rightBox =document.getElementsByClassName('rightBox');
counter(15);
function counter(t) {
          if(t<0){
              leftBox[0].innerHTML="<h1>Time's Over</h1>";
              leftBox[0].innerHTML+="<h3>Your Score is: "+score+".";
                return;
           }
    timer.innerHTML="Time Left: "+t+" Secs";
    t--;
    //setTimeout(counter,1000,t);
}

var pos=0, score=0, questions, question,optA,optB,optC,options,option;
questions=[
  ["Who is CM of Tamil Nadu ?","K.L Narayan","Palaniswami","Yedirappa","b"],
  ["How many UTs in India ?","Eight","Six","Seven","c"],
  ["Who is Defense Minister Of India ?","Nirmala","Manohar Parikar","Arun Jately","a"],
  ["Who gave Jai Hind ?","M.K Gandhi","S.Bose","Nehru","b"],
  ["Who is foreign minister of India ?","Sushma Swaraj","Amit Kulkarni","Rajnath Singh","a"]
];

function questionData(){
   if (pos>=questions.length){
     leftBox[0].innerHTML="<h1>Test Completed !</h1>";
     leftBox[0].innerHTML+="<h3>Your test score is: "+score+"</h3>";
     pos=0;
     return false;
   }
   question=questions[pos][0];
   optA=questions[pos][1];
   optB=questions[pos][2];
   optC=questions[pos][3];
   leftBox[0].innerHTML="<h4>Question "+(pos+1)+" of "+questions.length+".</h4>"
   leftBox[0].innerHTML+= "<p>"+question+"</p>";
   leftBox[0].innerHTML+="<input type='radio' name='options' value='a'> "+optA+".<br/><br/>";
   leftBox[0].innerHTML+="<input type='radio' name='options' value='b'> "+optB+".<br/><br/>";
   leftBox[0].innerHTML+="<input type='radio' name='options' value='c'> "+optC+".<br/><br/>";
   leftBox[0].innerHTML+="<button class='btnSubmit' onclick='calculate()'>Next</button>";
   leftBox[0].innerHTML+="<button id='btnTag' onclick='btnReview()'>Tag</button>";
}

function calculate(){
  options= document.getElementsByName('options');
  for(var i=0;i<options.length;i++){
    if(options[i].checked){
      option=options[i].value;
      btns[pos].style.backgroundColor="#276d27";
      btns[pos].style.color="#fff";

    }
    }
    if(option === questions[pos][4]){
        score++;
        console.log(score);
    }
  pos++;
  questionData();
}

/*.....Tag Button....*/
function btnReview(){
  btns[pos].classList.toggle('tag');
}

/* buttons click action to go back to question*/
rightBox[0].addEventListener('click',function(e){

  if(e.target.className="btn"){
    const btnValue= (e.target.value-1);
    pos=btnValue;
    questionData();
  }
});

/*....Mobile Menu*/
const mobMenu = document.getElementById('mobMenu');
mobMenu.addEventListener('click',function(){
  rightBox[0].classList.toggle('change');
  mobMenu.classList.toggle('rotate');
});

window.addEventListener("load", questionData);
