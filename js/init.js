import {createForm} from "./formHandler.js"
import {setEvents} from "./eventHandler.js"

createForm({
    id: "myForm",
    action: "test.php",
    method: "post",
    fields: [
        {
            type: "checkbox",
            id: "myCheckbox1",
            name: "test1"
        },
        {
            type: "checkbox",
            id: "myCheckbox2",
            name: "test2"
        },
        {
            type: "range",
            id: "myRange1",
            name: "test3"
        }
    ]
});

setEvents();