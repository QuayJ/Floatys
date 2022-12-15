var menuLogo = document.getElementById("menuLogo");
var navigationBox = document.getElementById("navigationBox");

var navigationBoxClass;

menuLogo.onclick = function(){ 
   
    navigationBoxClass = navigationBox.getAttribute("class");

    if(navigationBoxClass=="hide"){

        navigationBox.removeAttribute("class");
        navigationBox.setAttribute("class","animate__animated animate__zoomIn" );
    } else{
        navigationBox.setAttribute("class", "hide");
        // navigationBox.setAttribute("class","animate__animated animate__zoomOut" );
    }

};


