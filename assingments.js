let asmnts = [];
let asmntTitle = document.getElementById("title");
let asmntDescription = document.getElementById("description")
let asmntSubDateTime = document.getElementById("subDateTime")
let asmntOralMark = document.getElementById("oralMark")
let asmntTotalMark= document.getElementById("totalMark")

let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', submit);

let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById("update")
btnUpdate.addEventListener("click", update);

let divAsmnts = document.getElementById("asmnts");

function Asmnt(title, description, subDateTime, oralMark, totalMark) {
    this.title = title;
    this.description = description;
    this.subDateTime = subDateTime;
    this.oralMark = oralMark;
    this.totalMark = totalMark;
}

function asmntToString(asmnt) {
    return (`${asmnt.title} ${asmnt.description} ${asmnt.subDateTime} ${asmnt.oralMark}${asmnt.totalMark}`)

}

function submit(event) {
    event.preventDefault();

    let myAsmnt= new Asmnt(asmntTitle.value, asmntDescription.value, asmntSubDateTime.value, asmntOralMark.value, asmntTotalMark.value);
    asmnts.push(myAsmnt);
    
    let btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.asmntIndex = asmnts.length - 1;
    btnEdit.addEventListener("click", edit);

    createParagraphElement(myAsmnt, btnEdit);
    btnReset.click();
    console.log(asmnts);
}

function reset(event) {
    console.log('Form is reset');
    btnSubmit.textContent = 'Add';
}

function edit(event) {
    asmntTitle.value = asmnts[this.asmntIndex].title;
    asmntDescription.value = asmnts[this.asmntIndex].description;
    asmntSubDateTime.value = asmnts[this.asmntIndex].subDateTime;
    asmntOralMark.value = asmnts[this.asmntIndex].oralMark;
    asmntTotalMark.value = asmnts[this.asmntIndex].totalMark;
    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.asmntIndex = this.asmntIndex;
    btnUpdate.asmntIndex = this.asmntIndex;
    console.log(asmntToString(asmnts[this.asmntIndex]));
}

function update(event) {
    event.preventDefault();
    console.log(this.asmntIndex);
    console.log(asmntToString(new Asmnt(asmntTitle.value, asmntDescription.value, asmntSubDateTime.value, asmntOralMark.value, asmntTotalMark.value)));
    asmnts[this.asmntIndex] = new Asmnt(asmntTitle.value, asmntDescription.value, asmntSubDateTime.value, asmntOralMark.value, asmntTotalMark.value);
    divAsmnts.innerHTML = "";
    for (let i = 0; i < asmnts.length; i++) {
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.asmntIndex = i;
        btnEdit.addEventListener("click", edit);
        createParagraphElement(asmnts[i], btnEdit)
    }
    btnUpdate.hidden = true;
    btnSubmit.hidden = false;
    btnReset.click();
}

function createParagraphElement(asmnt, editButton) {
    let paragraph = document.createElement("p");
    paragraph.innerText = asmntToString(asmnt);
    let spanSpace = document.createElement("span");
    spanSpace.innerHTML = "--";
    paragraph.append(spanSpace, editButton);
    divAsmnts.append(paragraph);

}