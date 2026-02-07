let bouton = document.querySelector("button");
let popupBackground = document.querySelector(".popup-background");

bouton.addEventListener("click", ()=>{
    popupBackground.classList.add("active");
})

popupBackground.addEventListener("click", (event)=>{
    if(event.target === popupBackground){

        popupBackground.classList.remove("active")
    }
})

