const allowedTypes = ["text", "radio", "checkbox", "range"];
let formConfig = null;

function handleFields(form, fields){
    const areRows = fields.some(r=> Array.isArray(r))
    if(areRows){
        formConfig.areRows = true;
        for (const row of fields) {
            for (const field of row) {
                addField(form, field);
            }
        }
    }else{
        for (const field of fields) {
            addField(form, field);
        }
    }
}

function addAttribute(form, config, key){
    form.setAttribute(key, config[key]);
}

function addField(form, field){
    let input = document.createElement("input");
    for (const property in field) {
        if(property == "type" && allowedTypes.includes(property)){
            input.setAttribute(property, "text");
            continue;
        }
        input.setAttribute(property, field[property]);
    }
    
    form.appendChild(input);
}

function createForm(config){
    formConfig = config;
    formConfig.areRows = false;
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

function getConfig(){
    return formConfig;
}

let formCreator = {};
formCreator.createForm = createForm;
formCreator.getConfig = getConfig;

export {formCreator};