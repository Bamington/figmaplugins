// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
console.log("Showing UI");
figma.loadFontAsync({ family: "Roboto", style: "Regular" });
console.log("Roboto loaded");
var textnode;
console.log("textnode variable created");
var text;
console.log("text variable created");
figma.ui.onmessage = msg => {
    if (msg.type === 'roll-d6') {
        console.log("D6, anyone?");
        if (!text) {
            console.log("Can't see a textbox anywhere");
            if (!textnode) {
                const text = figma.createText();
                textnode = text.id;
                text = figma.getNodeById;
                console.log("Node ID is " + textnode);
            }
        }
        var roll = Math.floor(Math.random() * 6 + 1);
        console.log("Rolled a " + roll);
        figma.getNodeById(textnode);
        console.log("Get node has found " + textnode);
        text.characters = roll.toString();
        console.log("Wrote the roll into the text box, I hope");
    }
};
