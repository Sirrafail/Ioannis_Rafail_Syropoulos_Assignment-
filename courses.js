let courses = [];
let courseTitle = document.getElementById("title");
let courseStream = document.getElementById("stream")
let courseType = document.getElementById("type")
let courseStartDate = document.getElementById("start_date")
let courseEndDate = document.getElementById("end_date")

let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', submit);

let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById("update")
btnUpdate.addEventListener("click", update);

let divCourses = document.getElementById("courses");

function Course(title, stream, type, start_date, end_date) {
    this.title = title;
    this.stream = stream;
    this.type = type;
    this.start_date = start_date;
    this.end_date = end_date;
}

function courseToString(course) {
    return (`${course.title} ${course.stream} ${course.type} ${course.start_date}${course.end_date}`)

}

function submit(event) {
    event.preventDefault();

    let myCourse = new Course(courseTitle.value, courseStream.value, courseType.value, courseStartDate.value, courseEndDate.value);
    courses.push(myCourse);

    let btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.courseIndex = courses.length - 1;
    btnEdit.addEventListener("click", edit);

    createParagraphElement(myCourse, btnEdit);
    btnReset.click();
    console.log(courses);
}

function reset(event) {
    console.log('Form is reset');
    btnSubmit.textContent = 'Add';
}

function edit(event) {
    courseTitle.value = courses[this.courseIndex].title;
    courseStream.value = courses[this.courseIndex].stream;
    courseType.value = courses[this.courseIndex].type;
    courseStartDate.value = courses[this.courseIndex].start_date;
    courseEndDate.value = courses[this.courseIndex].end_date;
    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.courseIndex = this.courseIndex;
    btnUpdate.courseIndex = this.courseIndex;
    console.log(courseToString(courses[this.courseIndex]));
}

function update(event) {
    event.preventDefault();
    console.log(this.courseIndex);
    console.log(courseToString(new Course(courseTitle.value, courseStream.value, courseType.value, courseStartDate.value, courseEndDate.value)));
    courses[this.courseIndex] = new Course(courseTitle.value, courseStream.value, courseType.value, courseStartDate.value, courseEndDate.value);
    divCourses.innerHTML = "";
    for (let i = 0; i < courses.length; i++) {
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.courseIndex = i;
        btnEdit.addEventListener("click", edit);
        createParagraphElement(courses[i], btnEdit)
    }
    btnUpdate.hidden = true;
    btnSubmit.hidden = false;
    btnReset.click();
}

function createParagraphElement(course, editButton) {
    let paragraph = document.createElement("p");
    paragraph.innerText = courseToString(course);
    let spanSpace = document.createElement("span");
    spanSpace.innerHTML = "--";
    paragraph.append(spanSpace, editButton);
    divCourses.append(paragraph);

}