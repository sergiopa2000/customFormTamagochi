function handleFields(form, fields){
    for (const field of fields) {
        addField(form, field);
    }
}

function addAttribute(form, config, key){
    form.setAttribute(key, config[key]);
}

function addField(form, field){
    let input = document.createElement("input");
    for (const property in field) {
        input.setAttribute(property, field[property]);
    }

    form.appendChild(input);
}

function createForm(config){
    let form = document.createElement("form");
    for (const key in config) {
        if(key != "fields"){
            addAttribute(form, config, key);
        }else{
            handleFields(form, config[key]);
        }
    }
    document.body.appendChild(form);
}

export {createForm};