// is ma ha append kara ga div ko 
const main = document.getElementsByClassName("main")[0]
const form = document.getElementById("form")
const createDiv = (a) => {
    const div = document.createElement("div")

    const paragraphCreate = document.createElement("p")
    paragraphCreate.className = "style"
    const textNodes = document.createTextNode(a)
    console.log(textNodes);
    div.setAttribute("class", "column")
    paragraphCreate.appendChild(textNodes)
    div.appendChild(paragraphCreate)
    const createForm = document.createElement("form")
    // const creatIcon = document.createElement("i")
    // creatIcon.setAttribute("class", "fa-solid fa-plus")
    // creatIcon.setAttribute("id", "style")
    // createForm.appendChild(creatIcon)
    const createInput = document.createElement("input")
    createInput.setAttribute("placeholder", "Add to Card")
    console.log(createInput);
    createInput.className = "style2"
    // createInput.setAttribute("required")
    createInput.classList.add("container-create-input")
    createInput.setAttribute("type", "text")
    createForm.appendChild(createInput)
    div.appendChild(createForm)
    console.log(main.insertBefore(div, form));
    const column = document.getElementsByClassName("column")
    for (let i = 0; i < column.length; i++) {
        const element = column[i].lastElementChild;
        console.log(element);
        element.addEventListener("submit", valueCreate)
    }
}

// xxxxxxxxxxxxx
const create = (target) => {
    const elementCreate = document.createElement("p")
    elementCreate.setAttribute("draggable", "true")
    elementCreate.classList = "style1"
    const textNodes = document.createTextNode(target)
    const apend = elementCreate.appendChild(textNodes)

    return elementCreate
}
// console.log(create());
const valueCreate = (event) => {
    event.preventDefault()
    const formTarget = event.target;
    const parent = formTarget.parentElement;
    const value = formTarget.firstElementChild.value;
    if (value == "") {
        const elementCreate = document.createElement("")
    }
    console.log(value);
    let target = create(value)
    parent.insertBefore(target, formTarget)
    formTarget.firstElementChild.value = ""

}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    // console.log(event);
    const formTarget = event.target;
    const parent = formTarget.parentElement;

    // console.log(formTarget);
    // console.log(parent);
    const value = formTarget.lastElementChild.value;
    formTarget.lastElementChild.value = ""
    console.log(value);
    createDiv(value)

})
// creat teket
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

