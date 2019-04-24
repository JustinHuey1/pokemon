/* global $ */
var randPoke = Math.ceil(Math.random * 807);
var botUrl = `https://pokeapi.co/api/v2/pokemon/${randPoke}`;

var pokemon1 = false;
var pokemon2 = false;
var pokemon3 = false;
var pokemon4 = false;
var pokemon5 = false;
var pokemon6 = false;
//page linking
// Start Page//
$("#start").click(function(){
    window.location.href = "battlePage.html";
});
$("#team").click(function(){
    
});


$("#rule").click(function(){

});

$("#allRules").hide();
$("#rule").click(function(){
    $("#allRules").slideToggle();
});
// Team Page//

$("#findPokemon").click(function(){
    var searchTerm = $("#searchTerm").val();
    var apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}/`;
    $(".picture").html("");
    $("#ability").html("");
    $.ajax({
        url: apiUrl,
        method: "GET",
        success: function(response){
            $(".name").append(`<p class = "`)
            $(".picture").append(`<img class = "pokeImg" src="${response.sprites.front_default}">`);
            response.abilities.forEach(function(x){
                $("#ability").append(`<p class = "pokeAbility">${x.ability.name}</p>`);
            });
        }
    });
});

$("#choose").click(function(){
    var searchTerm = $("#searchTerm").val();
    var apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}/`;
    $.ajax({
        url: apiUrl,
        method: "GET",
        success: function(response){
            $("#pokemon1").append(`<img src="${response.sprites.front_default}">`);
        }
    });
});

// Battle Page//
// $("#ability1").click(function(){
//     $.ajax({
//         //url: apiUrl,
//         method: "GET",
//         success : function(response){
//             var randNum = Math.floor(Math.random * response.abilities[0].ability.length);
//             var ability = response.abilities[randNum].ability.name;
//         }
        
//     });
// });