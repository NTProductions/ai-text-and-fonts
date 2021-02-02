// ai text and fonts
var document = app.activeDocument;
var newLayer = document.layers.add();
newLayer.name = "Text Layer Test";
var newTextFrame = newLayer.textFrames.add();
$.writeln(newTextFrame.characters);
$.writeln(newTextFrame.words);
newTextFrame.contents = "Test Injection of Contents";
//newTextFrame.anchor = [document.width*.5, document.height*.5];

var fonts = app.textFonts;

var desiredFont;
for(var i = 0; i < fonts.length; i++) {
    //$.writeln(fonts[i].name);
    //$.writeln(fonts[i].style);
    //$.writeln(fonts[i].family);
    if(i == 40) {
        desiredFont = fonts[i];
        }
    }

var textRange = newTextFrame.textRange;
var characterAttributes = textRange.characterAttributes;
characterAttributes.textFont = desiredFont;
characterAttributes.size = 48;

newTextFrame.translate(document.width*.5-newTextFrame.width*.5, -document.height*.5);