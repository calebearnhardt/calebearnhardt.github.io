document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("introForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        if (validateForm()) {
            displaySubmittedData();
        }
    });
    
    document.getElementById("introForm").addEventListener("reset", function () {
        resetForm();
    });
});

function validateForm() {
    let requiredFields = ["name", "mascot", "image", "imageCaption", "personalBackground", "professionalBackground", "academicBackground", "webDevBackground", "computerPlatform", "agreement"];
    for (let field of requiredFields) {
        let input = document.getElementById(field);
        if (!input || (input.type !== "checkbox" && input.value.trim() === "")) {
            alert(`Please fill out the ${field.replace(/([A-Z])/g, ' $1')} field.`);
            return false;
        }
        if (input.type === "checkbox" && !input.checked) {
            alert("You must agree to the terms before submitting.");
            return false;
        }
    }
    
    let imageInput = document.getElementById("image");
    if (imageInput.files.length > 0) {
        let file = imageInput.files[0];
        let fileType = file.type;
        if (fileType !== "image/png" && fileType !== "image/jpeg") {
            alert("Image must be a PNG or JPG file.");
            return false;
        }
    }
    return true;
}

function displaySubmittedData() {
    let form = document.getElementById("introForm");
    let formData = new FormData(form);
    let output = "<h2>Your Introduction Page</h2>";
    
    formData.forEach((value, key) => {
        if (key !== "image") {
            output += `<p><strong>${key.replace(/([A-Z])/g, ' $1')}:</strong> ${value}</p>`;
        }
    });
    
    let imageInput = document.getElementById("image");
    if (imageInput.files.length > 0) {
        let fileURL = URL.createObjectURL(imageInput.files[0]);
        output += `<img src="${fileURL}" alt="Uploaded Image" width="200"><br>`;
    }
    
    output += '<button onclick="resetForm()">Reset</button>';
    
    document.body.innerHTML = output;
}

function resetForm() {
    location.reload();
}

function addCourse() {
    let coursesContainer = document.getElementById("coursesContainer");
    let newCourseInput = document.createElement("input");
    newCourseInput.type = "text";
    newCourseInput.name = "courses[]";
    newCourseInput.classList.add("courseInput");
    
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.type = "button";
    deleteButton.onclick = function () {
        coursesContainer.removeChild(courseWrapper);
    };
    
    let courseWrapper = document.createElement("div");
    courseWrapper.appendChild(newCourseInput);
    courseWrapper.appendChild(deleteButton);
    
    coursesContainer.appendChild(courseWrapper);
}
