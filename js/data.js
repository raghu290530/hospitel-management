
const stats=[
{title:"Doctors",value:12},
{title:"Patients",value:128},
{title:"Appointments Today",value:23}
];
const c=document.getElementById("statsCards");
stats.forEach(s=>{
 const d=document.createElement("div");
 d.className="card";
 d.innerHTML=`<h3>${s.title}</h3><p>${s.value}</p>`;
 c.appendChild(d);
});
