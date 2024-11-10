var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Type assertion
    var nameElement1 = document.getElementById('1stName');
    var nameElement2 = document.getElementById('2ndName');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var DateofBirthElement = document.getElementById('DateofBirth');
    var profilePictureInput = document.getElementById('profilePicture');
    // University
    var uniNameElement = document.getElementById('uniName');
    var fieldElement = document.getElementById('field');
    var uniPassingYearElement = document.getElementById('uniPassingYear');
    var gradeElement = document.getElementById('grade');
    // College
    var cllgNameElement = document.getElementById('cllgName');
    var cllgFieldElement = document.getElementById('cllgField');
    var cllgPassYearElement = document.getElementById('cllgPassYear');
    var cllgGradeElement = document.getElementById('cllgGrade');
    // School
    var schlNameElement = document.getElementById('schlName');
    var schlFieldElement = document.getElementById('schlField');
    var schlPassYearElement = document.getElementById('schlPassYear');
    var schlGradeElement = document.getElementById('schlGrade');
    // Skills
    var skillsElement = document.getElementById('skills');
    // Experience
    var experienceElement = document.getElementById('experience');
    if (nameElement1 && nameElement2 && emailElement && phoneElement && DateofBirthElement &&
        profilePictureInput &&
        uniNameElement && fieldElement && uniPassingYearElement && gradeElement &&
        cllgNameElement && cllgFieldElement && cllgPassYearElement && cllgGradeElement &&
        schlNameElement && schlFieldElement && schlPassYearElement && schlGradeElement &&
        skillsElement && experienceElement) {
        var name1 = nameElement1.value;
        var name2 = nameElement2.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var DateofBirth = DateofBirthElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var uniName = uniNameElement.value;
        var field = fieldElement.value;
        var uniPassingYear = uniPassingYearElement.value;
        var grade = gradeElement.value;
        var cllgName = cllgNameElement.value;
        var cllgField = cllgFieldElement.value;
        var cllgPassYear = cllgPassYearElement.value;
        var cllgGrade = cllgGradeElement.value;
        var schlName = schlNameElement.value;
        var schlField = schlFieldElement.value;
        var schlPassYear = schlPassYearElement.value;
        var schlGrade = schlGradeElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ".concat(name1, " ").concat(name2, " </span></p>\n            <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n            <p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span></p>\n            <p><strong>Date of Birth:</strong> <span id=\"edit-DOB\" class=\"editable\"> ").concat(DateofBirth, " </span></p>\n            <p><strong>Profile Picture:</strong></p>\n            <img src=\"").concat(profilePictureURL, "\" alt=\"Profile Picture\" style=\"max-width: 200px; height: auto;\"/>\n\n            <h3>Education</h3>\n\n            <p><strong>University:</strong <span id=\"edit-uni\" class=\"editable\">> ").concat(uniName, ", ").concat(field, ", ").concat(uniPassingYear, ", ").concat(grade, " </span></p>\n            <p><strong>College:</strong><span id=\"edit-college\" class=\"editable\"> ").concat(cllgName, ", ").concat(cllgField, ", ").concat(cllgPassYear, ", ").concat(cllgGrade, " </span></p>\n            <p><strong>School:</strong> <span id=\"edit-school\" class=\"editable\"> ").concat(schlName, ", ").concat(schlField, ", ").concat(schlPassYear, ", ").concat(schlGrade, " </span></p>\n\n            <h3>Skills</h3>\n\n            <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n\n            <h3>Experience</h3>\n\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error("One or more input elements are missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace contant
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
            }
        });
    });
}
