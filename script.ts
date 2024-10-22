const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const experienceContainer = document.getElementById('experienceContainer') as HTMLElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;
const addExperienceButton = document.getElementById('addExperience') as HTMLButtonElement;

resumeForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name: string = (document.getElementById('name') as HTMLInputElement).value;
    const email: string = (document.getElementById('email') as HTMLInputElement).value;
    const phone: string = (document.getElementById('phone') as HTMLInputElement).value;

    const experiences = Array.from(document.querySelectorAll('.experience')).map(exp => {
        const title = (exp.children[0] as HTMLInputElement).value;
        const company = (exp.children[1] as HTMLInputElement).value;
        const years = (exp.children[2] as HTMLInputElement).value;
        return { title, company, years };
    });

    const education: string = (document.getElementById('education') as HTMLInputElement).value;
    const skills: string[] = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    let resumeHTML = `
        <h2>${name}</h2>
        <p>${email} | ${phone}</p>
        <h3>Experience</h3>
        <ul>${experiences.map(exp => `<li>${exp.title} at ${exp.company} (${exp.years})</li>`).join('')}</ul>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <p>${skills.join(', ')}</p>
    `;

    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.classList.remove('hidden');
});

addExperienceButton.addEventListener('click', () => {
    const newExperience = document.createElement('div');
    newExperience.classList.add('experience');
    newExperience.innerHTML = `
        <input type="text" placeholder="Job Title" required>
        <input type="text" placeholder="Company Name" required>
        <input type="text" placeholder="Years (e.g., 2020 - 2023)" required>
    `;
    experienceContainer.appendChild(newExperience);
});