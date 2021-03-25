Roll=()=>{

const play1= Math.ceil(Math.random()*6);
const play1dice= `Images/${play1}.png`;
document.getElementById('check1').setAttribute( 'src',play1dice);

const play2= Math.ceil(Math.random()*6);
const play2dice= `Images/${play2}.png`;
document.getElementById('check2').setAttribute( 'src',play2dice);

if (play1>play2) {
	document.querySelector('h1').innerHTML="Player 1 won";
}
else if (play1<play2) {
	document.querySelector('h1').innerHTML="Player 2 won";
}
else{
	document.querySelector('h1').innerHTML="Draw!";
}
}