function easterEgg(){
			console.log("There's nothing here! Maybe scroll down?");
			let kanna=document.getElementsByClassName('easterEgg')[0];
			kanna.style.display="inline";
		}

function Bounce(x){
	let brand1="linkedin";
	let brand2="github";
	if(x==brand1){
		document.getElementsByClassName("fa-brands")[0].setAttribute("class","fa-brands fa-bounce fa-"+"linkedin");
	}
	else{
		document.getElementsByClassName("fa-brands")[1].setAttribute("class","fa-brands fa-bounce fa-"+"github");
	}
}

function Unbounce(x){
	let brand1=document.getElementsByClassName("fa-brands")[0].getAttribute("id");
	let brand2=document.getElementsByClassName("fa-brands")[1].getAttribute("id");
	if(x==brand1){
		document.getElementsByClassName("fa-brands")[0].setAttribute("class","fa-brands fa-"+"linkedin");
	}
	else{
		document.getElementsByClassName("fa-brands")[1].setAttribute("class","fa-brands fa-"+"github");
	}
}
