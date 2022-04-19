let trainers = [];
let trainerFname = document.getElementById("fname");
let trainerLname = document.getElementById("lname")
let trainerSubject = document.getElementById("subject")

let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', submit);

let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById("update")
btnUpdate.addEventListener("click", update);

let divTrainers = document.getElementById("trainers");

function Trainer(fname, lname, subject) {
    this.fname = fname;
    this.lname = lname;
    this.subject = subject;

}

function trainerToString(trainer) {
    return (`${trainer.fname} ${trainer.lname} ${trainer.subject}`)

}

function submit(event) {
    event.preventDefault();

    let myTrainer = new Trainer(trainerFname.value, trainerLname.value, trainerSubject.value);
    trainers.push(myTrainer);

    let btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.trainerIndex = trainers.length - 1;
    btnEdit.addEventListener("click", edit);


    createParagraphElement(myTrainer, btnEdit);
    btnReset.click();
    console.log(trainers);
}

function reset(event) {
    console.log('Form is reset');
    btnSubmit.textContent = 'Add';
}

function edit(event) {
    trainerFname.value = trainers[this.trainerIndex].fname;
    trainerLname.value = trainers[this.trainerIndex].lname;
    trainerSubject.value = trainers[this.trainerIndex].subject;


    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.trainerIndex = this.trainerIndex;
    btnUpdate.trainerIndex = this.trainerIndex;
    console.log(trainerToString(trainers[this.trainerIndex]));
}

function update(event) {
    event.preventDefault();
    console.log(this.trainerIndex);
    console.log(trainerToString(new Trainer(trainerFname.value, trainerLname.value, trainerSubject.value)));
    trainers[this.trainerIndex] = new Trainer(trainerFname.value, trainerLname.value, trainerSubject.value);
    divTrainers.innerHTML = "";
    for (let i = 0; i < trainers.length; i++) {
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.trainerIndex = i;
        btnEdit.addEventListener("click", edit);
        createParagraphElement(trainers[i], btnEdit)
    }
    btnUpdate.hidden = true;
    btnSubmit.hidden = false;
    btnReset.click();
}




function createParagraphElement(trainer, editButton) {
    let paragraph = document.createElement("p");
    paragraph.innerText = trainerToString(trainer);
    let spanSpace = document.createElement("span");
    spanSpace.innerHTML = "--";
    paragraph.append(spanSpace, editButton);
    divTrainers.append(paragraph);


}