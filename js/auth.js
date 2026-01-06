
function login(){
 const r=document.getElementById("role").value;
 location.href=r==="admin"?"admin.html":"dashboard.html";
}
