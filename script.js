var resumeForm = document.getElementById('resumeForm');
var experienceContainer = document.getElementById('experienceContainer');
var resumeOutput = document.getElementById('resumeOutput');
var addExperienceButton = document.getElementById('addExperience');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experiences = Array.from(document.querySelectorAll('.experience')).map(function (exp) {
        var title = exp.children[0].value;
        var company = exp.children[1].value;
        var years = exp.children[2].value;
        return { title: title, company: company, years: years };
    });
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var resumeHTML = "\n        <h2>".concat(name, "</h2>\n        <p>").concat(email, " | ").concat(phone, "</p>\n        <h3>Experience</h3>\n        <ul>").concat(experiences.map(function (exp) { return "<li>".concat(exp.title, " at ").concat(exp.company, " (").concat(exp.years, ")</li>"); }).join(''), "</ul>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills.join(', '), "</p>\n    ");
    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.classList.remove('hidden');
});
addExperienceButton.addEventListener('click', function () {
    var newExperience = document.createElement('div');
    newExperience.classList.add('experience');
    newExperience.innerHTML = "\n        <input type=\"text\" placeholder=\"Job Title\" required>\n        <input type=\"text\" placeholder=\"Company Name\" required>\n        <input type=\"text\" placeholder=\"Years (e.g., 2020 - 2023)\" required>\n    ";
    experienceContainer.appendChild(newExperience);
});
