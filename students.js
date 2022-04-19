let students= [];
let studentFname = document.getElementById("fname");
let studentLname = document.getElementById("lname")
let studentDateOfBirth= document.getElementById("dateOfBirth")
let studentTuitionFees = document.getElementById("tuitionFees")

let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', submit);

let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById("update")
btnUpdate.addEventListener("click", update);

let divStudents = document.getElementById("students");

function Student(fname, lname, dateOfBirth, tuitionFees) {
    this.fname = fname;
    this.lname = lname;
    this.dateOfBirth= dateOfBirth;
    this.tuitionFees = tuitionFees;
    
}

function studentToString(student) {
    return (`${student.fname} ${student.lname} ${student.dateOfBirth} ${student.tuitionFees}`)

}

function submit(event) {
    event.preventDefault();

    let myStudent = new Student(studentFname.value, studentLname.value, studentDateOfBirth.value, studentTuitionFees.value);
    students.push(myStudent);

    let btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.studentIndex = students.length - 1;
    btnEdit.addEventListener("click", edit);
    createParagraphElement(myStudent, btnEdit);
    btnReset.click();
    console.log(students);
}

function reset(event) {
    console.log('Form is reset');
    btnSubmit.textContent = 'Add';
}

function edit(event) {
    studentFname.value = students[this.studentIndex].fname;
    studentLname.value = students[this.studentIndex].lname;
    studentDateOfBirth.value = students[this.studentIndex].dateOfBirth;
    studentTuitionFees.value = students[this.studentIndex].tuitionFees;
    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.studentIndex = this.studentIndex;
    btnUpdate.studentIndex = this.studentIndex;
    console.log(studentToString(students[this.studentIndex]));
}

function update(event) {
    event.preventDefault();
    console.log(this.studentIndex);
    console.log(studentToString(new Student(studentFname.value, studentFname.value, studentDateOfBirth.value, studentTuitionFees.value)));
    students[this.studentIndex] = new Student(studentFname.value, studentFname.value, studentDateOfBirth.value, studentTuitionFees.value);
    divStudents.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.studentIndex = i;
        btnEdit.addEventListener("click", edit);
        createParagraphElement(students[i], btnEdit)
    }
    btnUpdate.hidden = true;
    btnSubmit.hidden = false;
    btnReset.click();
}

function createParagraphElement(student, editButton) {
    let paragraph = document.createElement("p");
    paragraph.innerText = studentToString(student);
    let spanSpace = document.createElement("span");
    spanSpace.innerHTML = "--";
    paragraph.append(spanSpace, editButton);
    divStudents.append(paragraph);

}

