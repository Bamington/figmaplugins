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
        console.log("TextNode is empty, too.");
        const text = figma.createText();
        text.resize(20,20); 
        console.log("Text field created and sized.");
        textnode = text.id;
        text.characters = "Yay";
        console.log("Added node ID (" + textnode + ") to textnode.");
        //text.textAutoResize("height");
        //console.log("Told the box to auto-resize.")
      }
    }
   var roll = Math.floor(Math.random()*6+1);
   console.log("Rolled a " + roll);
   text = figma.getNodeById(textnode);
   console.log ("Get node has found " + textnode);
   text.characters = roll.toString();
   console.log("Wrote the roll into the text box, I hope");
  }
}


  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
//figma.closePlugin();
;
