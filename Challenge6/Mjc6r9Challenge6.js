function htmlDisplay() {
    var htmlTextAreaObject = document.getElementById('html');
    htmlTextAreaObject.value = "<h3>Hello!</h3><p>applied?</p>";
}

function cssDisplay() {
    var cssTextAreaObject = document.getElementById('css');
    cssTextAreaObject.value = "h3{color:blue;} p{font-family:cursive, arial; font-size: 25pt;}"
}

function htmlChangeShadow(){
    var shadowBox = document.getElementById('html');
    shadowBox.style.boxShadow = "5px 5px 5px 5px darkred";
}

function cssChangeShadow(){
    var shadowBox = document.getElementById('css');
    shadowBox.style.boxShadow = "5px 5px 5px 5px darkred";
}

function paneChangeShadow(){
    var shadowBox = document.getElementById('pane');
    shadowBox.style.boxShadow = "5px 5px 5px 5px darkred";
}

function launchDiv(){
    var paneObject = document.getElementById('pane');
    var htmlObject = document.getElementById('html');
    console.dir(paneObject);
    console.dir(htmlObject);
    paneObject.innerHTML = htmlObject.value;
}

function toggleDiv(){
    var paneObject = document.getElementById('pane');
    var cssObject = document.getElementById('css');
    var toggleObject = document.getElementById('toggle');
//    var htmlObject = document.getElementById('html');
//    console.log(cssObject.value);
    var text = cssObject.value;
    
    if(toggle.style.backgroundColor == "slategray"){
        toggle.style.backgroundColor = "white";
        var text = "";
        paneObject.innerHTML = "";
        launchDiv();
    }
    else{
        toggle.style.backgroundColor = "slategray";
    }
    console.log(text);
    var inline = "<style>" + text + "</style>";
    paneObject.innerHTML += inline;
}

function clearDiv(){
    var paneObject = document.getElementById('pane');
    var cssObject = document.getElementById('css');
    var htmlObject = document.getElementById('html');
    var toggleObject = document.getElementById('toggle');
//    console.dir(paneObject);
//    console.dir(htmlObject);
    paneObject.innerHTML = "";
    cssObject.value = "";
    htmlObject.value = "";
    paneObject.style.boxShadow = "5px 5px 5px 5px slategray";
    cssObject.style.boxShadow = "5px 5px 5px 5px slategray";
    htmlObject.style.boxShadow = "5px 5px 5px 5px slategray";
    toggleObject.style.backgroundColor = "slategray";
    
    
}

function titlePrompt(){
    var promptObject = prompt("Please enter a title: ", "CS2830 Challenge 6: Code Editor");
    var titleObject = document.getElementById('title');
    titleObject.innerHTML = promptObject;
}