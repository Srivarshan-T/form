function isempty(target){
    if(target.value == ''){
       return true;
    }

    
    
}
function ischeck(){

 let gmail=document.getElementById("emailaddress").value;
let result=gmail.endsWith("@gmail.com");
  
 if(result){
    document.getElementById("eimg").style.visibility="collapse";
    document.getElementById("em").style.visibility="collapse";
    document.getElementById("emailaddress").style.outline="none";

 }
 else{
    document.getElementById("eimg").style.visibility="visible";
    document.getElementById("em").style.visibility="visible";
    document.getElementById("emailaddress").style.outline="solid red";
 }


    
}
let fn=document.getElementById("firstname");
fn.addEventListener("keypress",function(e){

    if(e.keyCode==13){
if(isempty(fn)){
    document.getElementById("fi").style.visibility="visible";
    document.getElementById("fiimg").style.visibility="visible";
    document.getElementById("firstname").style.outline="solid red";
}
else{
    document.getElementById("fi").style.visibility="collapse";
    document.getElementById("fiimg").style.visibility="collapse";
    document.getElementById("firstname").style.outline="none";
}
    }
} ,false);
let ln=document.getElementById("lastname");
ln.addEventListener("keypress",function(e){

    if(e.keyCode==13){
if(isempty(ln)){
    document.getElementById("li").style.visibility="visible";
    document.getElementById("laimg").style.visibility="visible";
    document.getElementById("lastname").style.outline="solid red";
}
else{
    document.getElementById("li").style.visibility="collapse";
    document.getElementById("laimg").style.visibility="collapse";
    document.getElementById("lastname").style.outline="none";
}
    }
} ,false);
let pass=document.getElementById("password");
pass.addEventListener("keypress",function(e){

    if(e.keyCode==13){
if(isempty(pass)){
    document.getElementById("ps").style.visibility="visible";
    document.getElementById("pimg").style.visibility="visible";
    document.getElementById("password").style.outline="solid red";
}
else{
    document.getElementById("ps").style.visibility="collapse";
    document.getElementById("pimg").style.visibility="collapse";
    document.getElementById("password").style.outline="none";
}
    }
} ,false);
email=document.getElementById("emailaddress");




email.addEventListener("keypress",function(e){

    if(e.keyCode==13){
        ischeck();
  
  
    }}, false);
 