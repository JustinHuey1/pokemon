/* global $ */
var randPoke = Math.ceil(Math.random * 807);
var botUrl = `https://pokeapi.co/api/v2/pokemon/${randPoke}`;

//page linking
// Start Page//
$("#start").click(function(){
    window.location.href = "battlePage.html";
});
$("#team").click(function(){
    
});


$("#rule").click(function(){

});

// Team Page//
$("#findPokemon").click(function(){
    $(".a").hide();
    // var searchTerm = $("#searchTerm").val();
    // var apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}/`;
    // $(".picture").html("");
    // $.ajax({
    //     url: apiUrl,
    //     method: "GET",
    //     success: function(response){
    //         // $(".picture").append(`<img class = "pokeImg" src="${response.sprites.front_default}">`);
    //         // $(".pokeAdd").append('<button id = "choose">Add Pokemon to team</button>');
    //     }
    // });
});

$("#choose").click(function(){
    
}

// Battle Page//
$("#ability1").click(function(){
    $.ajax({
        //url: apiUrl,
        method: "GET",
        success : function(response){
            var randNum = Math.floor(Math.random * response.abilities[0].ability.length);
            var ability = response.abilities[randNum].ability.name;
        }
        
    });
});