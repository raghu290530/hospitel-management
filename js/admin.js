const doctors = [
  { id: 1, name: "Dr Kumar", dept: "Cardiology" },
  { id: 2, name: "Dr Meena", dept: "Neurology" },
];
const t = document.getElementById("doctorTable");
t.innerHTML = "<tr><th>ID</th><th>Name</th><th>Department</th></tr>";
doctors.forEach((d) => {
  t.innerHTML += `<tr><td>${d.id}</td><td>${d.name}</td><td>${d.dept}</td></tr>`;
});
