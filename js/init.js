import {formCreator} from "./formHandler.js"
import {styleForm} from "./formStyler.js"
import {setEvents} from "./eventHandler.js"

formCreator.createForm({
    id: "myForm",
    action: "test.php",
    method: "post",
    fields: [
        [   
            {
                id: "GFXLow",
                type: "radio",
                name: "GFX",
                title: "Low"
            },
            {
                id: "GFXMedium",
                type: "radio",
                name: "GFX",
                title: "Medium"
            },
            {
                id: "GFXHigh",
                type: "radio",
                name: "GFX",
                title: "High"
            },
        ],
        [
            {
                id: "volumeRange",
                type: "range",
                name: "volume",
                min: "1",
                max: "10",
                value: "1",
            },
        ],
        [
            {
                id: "musicOnOF",
                type: "checkbox",
                name: "music",
            },
        ],
        [
            {
                id: "soundOnoF",
                type: "checkbox",
                name: "sound",
            }
        ]
    ]
});

styleForm("container", formCreator.getConfig());

setEvents("container", formCreator.getConfig());