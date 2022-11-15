import anime from "../node_modules/animejs/lib/anime.es.js"
const inputTypeClick ={
    "text": "not yet",
    "radio": function(element, origin, row){
        let check = document.querySelector("#" + element.id + " img");
        if(!check.classList.contains("checkActive")){
            removeAllChildrenClass(row.children, "checkActive")
            check.classList.toggle("checkActive");
            origin.checked = !origin.checked;
        }

    },
    "checkbox": function(element, origin, row){
        origin.checked = !origin.checked;
        let ball = document.querySelector("#" + element.id + " .checkBoxBall");
        let movement = 0;
        let backgroundColor = "#FF0000";
        if(!ball.classList.contains("active")){
            
            movement = 60;
            backgroundColor = "#00FF00";
        }
        ball.classList.toggle("active");
    
        anime({
            targets: ball,
            translateX: movement,
            backgroundColor: backgroundColor,
            duration: 300,
            easing: 'easeInOutQuad'
        })
    },
}

function removeAllChildrenClass(parent, className){
    
    for (const child of parent) {
        if(child.tagName == "P") continue
        let img = document.querySelector("#" + child.id + " img");
        img.classList.remove(className);
    }
}

const inputTypeOther ={
    "range": "rangeStyle",
}

function handleOther(element, origin){
    origin.value = element.value;
}

function setEvents(containerId, config){
    let container = document.getElementById(containerId);
    if(config.areRows){
        for (const row of container.children) {
            for (const element of row.children) {
                if(element.tagName == "P") continue
                let origin = document.getElementById(element.dataset.originInput);
                if(inputTypeClick[origin.type]){
                    element.addEventListener("click", () => inputTypeClick[origin.type](element, origin, row));
                }else{
                    element.addEventListener("input", () => handleOther(element, origin));
                }
            }
        }
    }else{
        for (const element of container.children) {
            let origin = document.getElementById(element.dataset.originInput);
            if(inputTypeClick[origin.type]){
                element.addEventListener("click", () => handleClick(element, origin));
            }else{
                element.addEventListener("input", () => handleOther(element, origin));
            }
        }
    }
}

export {setEvents};
