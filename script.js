let nav = document.querySelector("nav")
let style = document.querySelector("#swapstyle")
let view = localStorage.getItem("view") // maybe null

if(view){
    pushState(view)
} else {
    localStorage.setItem("view","table") // assumes that, if there's no localstorage, none of these buttons have been clicked yet, we land on table by default
}

Array.from(document.querySelectorAll("button"), button => {
    button.addEventListener("click", event => {
        event.preventDefault()
        pushState(button.id)
    })
})

function pushState(state /* string: list | table | groups | expand */){
    nav.setAttribute("state", state)
    style.setAttribute("href", "/" + state + ".css")
    localStorage.setItem("view", state)
}