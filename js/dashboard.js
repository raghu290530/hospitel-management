
const appts=[
{id:101,doctor:"Dr Kumar",date:"10-01-2026",status:"Confirmed"},
{id:102,doctor:"Dr Meena",date:"11-01-2026",status:"Pending"}
];
const t=document.getElementById("appointmentTable");
t.innerHTML="<tr><th>ID</th><th>Doctor</th><th>Date</th><th>Status</th></tr>";
appts.forEach(a=>{
 t.innerHTML+=`<tr><td>${a.id}</td><td>${a.doctor}</td><td>${a.date}</td><td>${a.status}</td></tr>`;
});
