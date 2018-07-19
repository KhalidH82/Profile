
function showProjects() {
    console.log("show projects")
    let project = document.getElementById("projects");
    let about = document.getElementById("about");
    let image = document.getElementById("me")
    let contact = document.getElementById("map")
    let skills = document.getElementById("skills");
    project.style.display = "block"
    about.style.display = "none"
    image.style.display = "none"
    contact.style.display = "none"
    skills.style.display = "none"



};

function showSkills() {
    let skills = document.getElementById("skills");
    let about = document.getElementById("about");
    let image = document.getElementById("me")
    let project = document.getElementById("projects");
    let contact = document.getElementById("map");

    project.style.display = "none"
    about.style.display = "none"
    image.style.display = "none"
    contact.style.display = "none"
    skills.style.display = "block"


};

function showLocation() {
    let map = document.getElementById("map")
    let skills = document.getElementById("skills");
    let about = document.getElementById("about");
    let image = document.getElementById("me")
    let project = document.getElementById("projects");

    project.style.display = "none"
    about.style.display = "none"
    image.style.display = "none"
    map.style.display = "block"
    skills.style.display = "none"

};

