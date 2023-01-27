let view = localStorage.getItem("view") // maybe null

if(view){
    document.getElementById(view).click()
}

Array.from(document.querySelectorAll(".viewbutton"), button => {
    button.addEventListener("click", () => {
        pushState(button.id)
    })
})

function pushState(state /* string: list | table | groups | expand */){
    // grab the id of the radio and check it
    localStorage.setItem("view", state)
}
