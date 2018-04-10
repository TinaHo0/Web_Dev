function getHome(cVal){
    $("#contentBox").html("");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function(){
               if(xmlHttp.status == 200){
                   document.getElementById("loader").style.display = "none";
                   document.getElementById("contentBox").innerHTML = xmlHttp.responseText;
               }
           }
    
    document.getElementById("loader").style.display = "block";
            
    xmlHttp.open("GET", "http://ec2-54-158-64-221.compute-1.amazonaws.com/Challenge9/webService.php?content=" + cVal, true);
    xmlHttp.send();
}

function getLevel(cVal, fVal){
    $("#contentBox").html("");
    document.getElementById("loader").style.display = "block";
    $.getJSON("http://ec2-54-158-64-221.compute-1.amazonaws.com/Challenge9/webService.php?content=" + cVal + "&format=" + fVal, function(data){
                console.dir(data.digivice.digimon[0]);
                var size = data.digivice.digimon.length;
                for(var i = 0; i < size; i++){
                    var contraction = "";
                    var first = data.digivice.digimon[i].level.charAt(0);
                    if(first == 'A' || first == 'E' || first == 'I' || first == 'O' || first == 'U'){
                        contraction = " is an ";
                    }else{
                        contraction = " is a ";
                    }
                    var text = "<li>" + data.digivice.digimon[i].name + contraction + data.digivice.digimon[i].level + "</li>";
                    console.dir(text);
                    document.getElementById("loader").style.display = "none";
                    $("#contentBox").append(text);
                }
            });
//    xmlHttp.onload = function() {
//                if (xmlHttp.status == 200) {
//                    
//                    var response = xmlHttp.responseText;
////                    console.dir(response);
//                    response = JSON.parse(response);
//                    console.dir(response);
//                    
//                    var contentBox = document.getElementById("contentBox");
//                    
////                    contentBox.innerHTML = response.name + " has a pet " + response.pet;
//                    
//                }
//            };
//            
//    xmlHttp.open("GET", "http://ec2-54-158-64-221.compute-1.amazonaws.com/Challenge9/webService.php?content=" + cVal + "&format=" + fVal, true);
//    xmlHttp.send();
    
}

function getEvolve(cVal, fVal){
    $("#contentBox").html("");
    document.getElementById("loader").style.display = "block";
    $.getJSON("http://ec2-54-158-64-221.compute-1.amazonaws.com/Challenge9/webService.php?content=" + cVal + "&format=" + fVal, function(data){
                console.dir(data.digivice.digimon[0]);
                var size = data.digivice.digimon.length;
                for(var i = 0; i < size; i++){
//                    var contraction = "";
//                    var first = data.digivice.digimon[i].evolution.charAt(0);
//                    if(first == 'A' || first == 'E' || first == 'I' || first == 'O' || first == 'U'){
//                        contraction = " is an ";
//                    }else{
//                        contraction = " is a ";
//                    }
                    var text = "<li> " + data.digivice.digimon[i].name + " evolves into " + data.digivice.digimon[i].evolution + "</li>";
                    console.dir(text);
//                    $("#contentBox").html("<li>");
                    document.getElementById("loader").style.display = "none";
                    $("#contentBox").append(text);
//                    $("#contentBox").html("</li>");
                }
            });
//    var xmlHttp = new XMLHttpRequest();
//    xmlHttp.onload = function() {
//                if (xmlHttp.status == 200) {
//                    
//                    var response = xmlHttp.responseText;
//                    console.dir(response);
//                    response = JSON.parse(response);
//                    
//                    console.dir(response);
//                    
//                    var contentBox = document.getElementById("contentBox");
//                    
//                    contentBox.innerHTML = response.name + " has a pet " + response.pet;
//                    
//                }
//            };
//            
//    xmlHttp.open("GET", "http://ec2-54-158-64-221.compute-1.amazonaws.com/Challenge9/webService.php?content=" + cVal + "&format=" + fVal, true);
//    xmlHttp.send();
    
}

function getType(cVal, fVal){
    $("#contentBox").html("");
    document.getElementById("loader").style.display = "block";
    $(document).ready(function(){
        $.ajax({
            type: "GET",
            url: "http://ec2-54-158-64-221.compute-1.amazonaws.com/Challenge9/webService.php?content=" + cVal + "&format=" + fVal,
            dataType: "xml",
            success: function(data){
                $(data).find('digimon').each(function(){
                    var name = $(this).find('name').text();
                    var type = $(this).find('type').text();
                    var contraction = "";
                    var first = type.charAt(0);
                    if(first == 'A' || first == 'E' || first == 'I' || first == 'O' || first == 'U'){
                        contraction = " is an ";
                    }else{
                        contraction = " is a ";
                    }
                    document.getElementById("loader").style.display = "none";
                    $('#contentBox').append("<li>" + name + contraction + type + " type Digimon</li>");
                });
            },
            error: function(){
                alert("Error parsing XML file");
            }
        });
    });
}

function getAll(cVal, fVal){
    $("#contentBox").html("");
    document.getElementById("loader").style.display = "block";
    $(document).ready(function(){
        $.ajax({
            type: "GET",
            url: "http://ec2-54-158-64-221.compute-1.amazonaws.com/Challenge9/webService.php?content=" + cVal + "&format=" + fVal,
            dataType: "xml",
            success: function(data){
                $(data).find('digimon').each(function(){
                    var name = $(this).find('name').text();
                    var index = $(this).index()+1;
                    document.getElementById("loader").style.display = "none";
                    $('#contentBox').append("<li>" + name + " is my " + index + " Digimon</li>");
                });
            },
            error: function(){
                alert("Error parsing XML file");
            }
        });
    });  
}

var tick = 1;
setInterval(function() {
    var loadNodes = document.querySelectorAll(".loadNode");
    if (tick == 1) {
        backgroundColors = ["#333", "#aaa", "#777"];
        tick = 2;
    }
    else if (tick == 2) {
        backgroundColors = ["#777", "#333", "#aaa"];
        tick = 3
    }
    else {
        backgroundColors = ["#aaa", "#777", "#333"];
        tick = 1;
    }
    loadNodes[0].style.backgroundColor = backgroundColors[0];
    loadNodes[1].style.backgroundColor = backgroundColors[1];
    loadNodes[2].style.backgroundColor = backgroundColors[2];
}, 200);