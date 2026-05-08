const departments = [
    { 
        name: "Cardiology", 
        icon: "fa-solid fa-heart-pulse", 
        desc: "Specialized in diagnosing and treating heart and vascular conditions with advanced technology.",
        doctors: ["Dr. Rana"]
    },
    { 
        name: "Pediatrics", 
        icon: "fa-solid fa-baby", 
        desc: "Comprehensive healthcare for infants, children, and adolescents in a friendly environment.",
        doctors: ["Dr. Malak"]
    },
    { 
        name: "Orthopedics", 
        icon: "fa-solid fa-bone", 
        desc: "Expert treatment for bone fractures, joint replacements, and spinal cord injuries.",
        doctors: ["Dr. Kareem"]
    },
    { 
        name: "Internal Medicine", 
        icon: "fa-solid fa-stethoscope", 
        desc: "Comprehensive diagnosis and non-surgical treatment of internal organ diseases and chronic conditions.",
        doctors: ["Dr. Haitham"]
    },
    { 
        name: "Dermatology", 
        icon: "fa-solid fa-hand-dots", 
        desc: "Advanced treatment for skin conditions, allergies, and cosmetic dermatology services.",
        doctors: ["Dr. Mina"]
    },
    { 
        name: "Ophthalmology", 
        icon: "fa-solid fa-eye", 
        desc: "Advanced eye care services including vision correction and specialized eye surgeries.",
        doctors: ["Dr. Abdelrahman"]
    },
    { 
        name: "Emergency", 
        icon: "fa-solid fa-kit-medical", 
        desc: "24/7 immediate care for critical conditions, accidents, and life-threatening emergencies.",
        doctors: ["Dr. Mariam"]
    }
];

const container = document.getElementById('dept-list');

function displayDepartments() {
    container.innerHTML = ""; 
    
    departments.forEach(dept => {
        const doctorsList = dept.doctors.map(doc => 
            `<li><i class="fa-solid fa-user-md"></i> ${doc}</li>`
        ).join('');

        const cardHTML = `
            <div class="dept-card">
                <div class="icon"><i class="${dept.icon}"></i></div>
                <h3>${dept.name}</h3>
                <p>${dept.desc}</p>
                
                <div class="doctors-section">
                    <h4>Medical Staff</h4>
                    <ul class="doctors-list">
                        ${doctorsList}
                    </ul>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

displayDepartments();