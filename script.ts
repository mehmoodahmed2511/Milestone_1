
// Hide Button

let isVisible = true;
function hideObj() {
    let hideBtn = document.getElementById('hide-obj');
    if (isVisible) {
        document.getElementById('objectiveFieldT').style.display = 'none';
        hideBtn?.innerHTML = 'Show';
        isVisible = false;
    }
    else {
        document.getElementById('objectiveFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}

function hideExp() {
    let hideBtn = document.getElementById('hide-exp');
    if (isVisible) {
        document.getElementById('experienceFieldT').style.display = 'none';
        hideBtn?.innerHTML = 'Show';
        // document.querySelectorAll('#resume-template .card').style.backgroundColor = 'white';
        isVisible = false;
    }
    else {
        document.getElementById('experienceFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}

function hideEdu() {
    let hideBtn = document.getElementById('hide-edu');
    if (isVisible) {
        document.getElementById('educationFieldT').style.display = 'none';
        hideBtn?.innerHTML = 'Show';
        isVisible = false;
    }
    else {
        document.getElementById('educationFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}

function hideCer() {
    let hideBtn = document.getElementById('hide-cer');
    if (isVisible) {
        document.getElementById('certificationFieldT').style.display = 'none';
        hideBtn?.innerHTML = 'Show';
        isVisible = false;
    }
    else {
        document.getElementById('certificationFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}

function hideSkills() {
    let hideBtn = document.getElementById('hide-skills');
    if (isVisible) {
        document.getElementById('skillsFieldT').style.display = 'none';
        hideBtn?.innerHTML = 'Show';
        isVisible = false;
    }
    else {
        document.getElementById('skillsFieldT').style.display = 'block';
        hideBtn.innerHTML = 'Hide';
        isVisible = true;
    }
}
