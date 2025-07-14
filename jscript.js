// My projects data - customize these!
const myProjects = [
    {
        title: "College Calculator",
        description: "Basic calculator for math assignments",
        tech: ["HTML", "CSS", "JS"],
        link: "#"
    },
    {
        title: "Birthday Countdown",
        description: "Countdown timer for friend's birthday",
        tech: ["JavaScript"],
        link: "#"
    },
    {
        title: "Portfolio Website",
        description: "This current project for CODTECH internship",
        tech: ["HTML", "CSS", "JS"],
        link: "#"
    }
];

// Function to display projects
function showProjects() {
    const container = document.getElementById('projectsContainer');
    
    myProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech">
                <strong>Tech used:</strong> ${project.tech.join(', ')}
            </div>
            <a href="${project.link}" class="project-link">View</a>
        `;
        
        container.appendChild(projectCard);
    });
}

// Run when page loads
window.addEventListener('DOMContentLoaded', showProjects);