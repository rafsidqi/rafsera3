// Project Data
const projectData = {
    project1: {
        title: "Project Alpha",
        category: "Branding",
        description: "A comprehensive rebranding project for a fintech startup. The goal was to create a modern, trustworthy identity that appeals to a younger demographic. We explored various color palettes and typography choices before settling on a clean, minimal look.",
    },
    project2: {
        title: "Neon Lights",
        category: "Web Design",
        description: "A high-energy e-commerce website for a streetwear fashion brand. The design focuses on bold typography, dark mode aesthetics, and smooth animations to create an immersive shopping experience.",
    },
    project3: {
        title: "City Vibes",
        category: "Illustration",
        description: "A series of digital illustrations capturing the energy of urban life. Commissioned by a lifestyle magazine, these pieces use vibrant colors and dynamic compositions to tell stories of the city.",
    }
};

// Elements
const modal = document.getElementById('project-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDescription = document.getElementById('modal-description');
const projectButtons = document.querySelectorAll('.project-card button'); // Changed selector to button

// Functions
function openModal(projectId) {
    const project = projectData[projectId];
    if (project) {
        modalTitle.textContent = project.title;
        modalCategory.textContent = project.category;
        modalDescription.textContent = project.description;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event Listeners
projectButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Find the closest project card to get the ID
        const card = e.target.closest('.project-card');
        const projectId = card.dataset.project;
        openModal(projectId);
    });
});

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
