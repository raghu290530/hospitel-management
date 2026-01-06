const doctors = [
    {
        name: "Dr. Rajesh Kumar",
        specialization: "Cardiology",
        experience: 15,
        phone: "+91 9876543210"
    },
    {
        name: "Dr. Meena Iyer",
        specialization: "Neurology",
        experience: 12,
        phone: "+91 9123456780"
    },
    {
        name: "Dr. Arun Prakash",
        specialization: "Orthopedics",
        experience: 10,
        phone: "+91 9988776655"
    },
    {
        name: "Dr. Sneha Rao",
        specialization: "Pediatrics",
        experience: 8,
        phone: "+91 9090909090"
    }
];

console.log(doctors);

const container = document.getElementById("doctorContainer");

doctors.forEach(doc => {
    const card = document.createElement("div");
    card.className = "doctor-card";
    card.innerHTML = `
        <h3>${doc.name}</h3>
        <p><strong>Specialization:</strong> ${doc.specialization}</p>
        <p><strong>Experience:</strong> ${doc.experience} years</p>
        <p><strong>Contact:</strong> ${doc.phone}</p>
        <span class="badge">Available</span>
    `;
    container.appendChild(card);
});
