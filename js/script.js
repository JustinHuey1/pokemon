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
    $(".")
});

// Team Page//
$("#findPokemon").click(function(){
    var searchTerm = $("#searchTerm").val();
    var apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}/`;
    $.ajax({
        url: apiUrl,
        method: "GET",
        success: function(response){
            console.log("hello");
            console.log(response.sprites.front_default);
            $("body").append(`<img src="${response.sprites.front_default}">`);
        }
    });
});


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