
// custom js file

function check(){
var x = document.getElementById("exampleInputPassword1");
if(x.type === "password"){
    x.type = "text";
}
else{
    x.type = "password";
}
}
