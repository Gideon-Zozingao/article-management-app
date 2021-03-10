//  processing of the Login Form

let loginForm=document.querySelector("#loginForm");
loginForm.addEventListener("submit",(e)=>{

	e.preventDefault();
	let formVar=new FormData(loginForm);
	alert(formVar.username)
})