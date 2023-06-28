$(document).ready(function(){
    //suivre les coordonnées de du curseur pour ajouster celle de l'image utilisée
    function myMouse () {  
        const elem = document.getElementById("cursor"); 
        var a = $(window).width()
        elem.style.top = (event.pageY - (a * 0.8 / 100)) + "px"; 
        elem.style.left = (event.pageX - (a * 0.8 / 100)) + "px"; 

    }


    
    $(document).mousemove(function(event){ 
        myMouse();
    });



    $('#stopmouse').mouseover(function () { 
        $('cursor').css("display", 'none');
    });
    $('#stopmouse').mouseout(function () { 
        $('cursor').css("display", 'block');
        
    });
});
