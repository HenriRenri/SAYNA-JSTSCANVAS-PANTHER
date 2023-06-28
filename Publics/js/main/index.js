
document.querySelector(".rond").addEventListener("click", sliderX)
let i = 0;
let coordonerX = 0;
let coordonerXenPX = coordonerX + "px";
var dataCord = [
    { "cordoner": "translateX(-520PX)" },
    { "cordoner": "translateX(-1040PX)" },
    { "cordoner": "translateX(-1560px)" },
    { "cordoner": "translateX(-2080px)" },
    { "cordoner": "translateX(-2600px)" },
    { "cordoner": "translateX(-3200px)" },
    { "cordoner": "translateX(-3640px)" },
    { "cordoner": "translateX(-3950px)" },
]
let x = 3
let refSlide = ""

function sliderX() {
    console.log("e")
    if (i < 8) {
        console.log(x)
        document.querySelector(".conteneur_slider").style.transform = dataCord[i].cordoner;
        refSlide = '.slide' + x + " img";
        document.querySelector(refSlide).classList.add('animationFaddincart')
        x = x + 1;
        i++
    } else {
        i = 0
        x = 3
        document.querySelector(".conteneur_slider").style.transform = "translateX(0px)";
    }
}

    // cacher par defeaut le popup
    $('#box_popup').hide();
    

    // Varables des champs du formulaire
    let nom = document.getElementById('nom');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    //####

    // click sur le bouton ok du popup
    $('#ok_message').click(function() {
        $('#box_popup').hide();
        nom.value = "";
        email.value = "";
        message.value = "";
    });
    // #####

    // Envoi du formulaire
    $('#Formulair').submit(function(e) {
        e.preventDefault();
        $('#box_popup').show();
    });

     // effet zoom sur l'image de la description
     $("#tchalla").on({
        mouseenter: function() {
            $(this).animate({ 
                width: 450,
                height: 634,
            });
        },
        mouseleave: function() {
            $(this).animate({
                width: 374,
                height: 527,
            });
        },
    });

    // effet zoom sur l'image du Panther 
    $("#img_panther").on({
        mouseenter: function() {
            $(this).animate({ 
                width: 692,
                height: 591, 
            });
        },
        mouseleave: function() {
            $(this).animate({ 
                width: 509,
                height: 435, 
            });
        },
    });