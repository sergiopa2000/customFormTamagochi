const inputStyle ={
    "text": "not yet",
    "radio": function(input, div) {
        let check = document.createElement("img");
        if(input.title){
            let title = document.createElement("p");
            title.classList.add("radioTitle");
            title.innerHTML = input.title;
            div.appendChild(title);
        }
        check.classList.add("radioCheck");
        check.src = "imgs/check.png"
        div.appendChild(check);
    },
    "checkbox": function(input, div) {
        let ball = document.createElement("div");
        ball.classList.add("checkBoxBall");
        div.appendChild(ball);
    },
    "range": function(div) {
        console.log("RANGE");
    },
}

const inputClassNames ={
    "text": "not yet",
    "radio": "radioStyle",
    "checkbox": "checkboxStyle",
    "range": "rangeStyle",
}

function createDiv(input, divContainer){
    let div = document.createElement("div");
    if(input.type == "range"){
        let range = document.createElement("input");
        range.classList.add(inputClassNames[input.type]);
        range.type = "range"
        range.min = input.min;
        range.max = input.max;
        range.dataset.originInput = input.id;
        divContainer.appendChild(range);
    }else{
        div.classList.add(inputClassNames[input.type]);
        div.id = input.id + "-" + inputClassNames[input.type]
        inputStyle[input.type](input, div);
        div.dataset.originInput = input.id;
        divContainer.appendChild(div);
    }
}

function styleForm(containerId, config){
    let fields = config.fields;

    let container = document.getElementById(containerId);
    if(config.areRows){
        for (const row of fields) {
            let rowDiv = document.createElement("div");
            rowDiv.classList.add("rowDiv");

            let rowName = document.createElement("p");
            rowName.innerHTML = row[0].name;
            rowName.classList.add("rowTitle");
            rowDiv.appendChild(rowName);

            for (const field of row) {
                createDiv(field, rowDiv);
            }
            container.appendChild(rowDiv);
        }
    }else{
        for (const field of fields) {
            createDiv(field, container);
        }
    }
}

export {styleForm};