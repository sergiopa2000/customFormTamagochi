import anime from "../node_modules/animejs/lib/anime.es.js"

function handleClick(checkBox){
    let formCheckBox = document.getElementById(checkBox.dataset.checkbox)
    let ball = checkBox.children[0];
    let movement = 0;
    let backgroundColor = "#FF0000";
    if(!ball.classList.contains("active")){
        ball.classList.add("active");
        formCheckBox.checked = true;
        movement = 60;
        backgroundColor = "#00FF00";
    }else{
        ball.classList.remove("active");
        formCheckBox.checked = false;
    }

    anime({
        targets: ball,
        translateX: movement,
        backgroundColor: backgroundColor,
        duration: 300,
        easing: 'easeInOutQuad'
    })
}

function setEvents(){
    let prettyCheckbox = document.querySelectorAll(".prettyCheckBox");

    for (const checkBox of prettyCheckbox) {
        checkBox.addEventListener("click", () => handleClick(checkBox));
    }
}

export {setEvents};
