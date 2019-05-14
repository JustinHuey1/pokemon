/* global $ */

var pokemon1 = false;
var pokemon2 = false;
var pokemon3 = false;
var pokemon4 = false;
var pokemon5 = false;
var pokemon6 = false;

var team = [];
// page linking
// Start Page//
$("#start").click(function(){
    window.location.href = "battlePage.html";
});
$("#team").click(function(){
    
});


$("#rule").click(function(){

});

$(".realRules").hide();
$("#rule").click(function(){
    $(".realRules").slideToggle();
});
// Team Page //

$("#findPokemon").click(function(){
    var searchTerm = $("#searchTerm").val();
    var apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}/`;
    $(".picture").html("");
    $(".abilityBox").html("");
    $(".type").html("");
    $.ajax({
        url: apiUrl,
        method: "GET",
        success: function(response){
            $(".type").append(`<p>${response.types[0].type.name}</p>`);
            $(".picture").append(`<img class = "pokeImg" src="${response.sprites.front_default}">`);
            $(".picture").append(`<h1 class = pokeName> ${response.name}</h1>`);
            response.abilities.forEach(function(x){
                $(".abilityBox").append(`<li class = "pokeAbility">${x.ability.name}</li>`);
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
            if (pokemon1 === false && pokemon2 === false && pokemon3 === false && pokemon4 === false && pokemon5 === false && pokemon6 === false){
                $(".poke1Img").append(`<img class = "pokeTImg" src="${response.sprites.front_default}">`);
                $(".poke1Name").append(`<h1 class = pokeTName> ${response.name}</h1>`);
                team.push(response.name);
                pokemon1 = true;
            }else if (pokemon1 === true && pokemon2 === false && pokemon3 === false && pokemon4 === false && pokemon5 === false && pokemon6 === false){
                $(".poke2Img").append(`<img class = "pokeTImg" src="${response.sprites.front_default}">`);
                $(".poke2Name").append(`<h1 class = pokeTName> ${response.name}</h1>`);
                pokemon2 = true;
                team.push(response.name);
            }else if (pokemon1 === true && pokemon2 === true && pokemon3 === false && pokemon4 === false && pokemon5 === false && pokemon6 === false){
                $(".poke3Img").append(`<img class = "pokeTImg" src="${response.sprites.front_default}">`);
                $(".poke3Name").append(`<h1 class = pokeTName> ${response.name}</h1>`);
                pokemon3 = true;
                team.push(response.name);
            }else if (pokemon1 === true && pokemon2 === true && pokemon3 === true && pokemon4 === false && pokemon5 === false && pokemon6 === false){
                $(".poke4Img").append(`<img class = "pokeTImg" src="${response.sprites.front_default}">`);
                $(".poke4Name").append(`<h1 class = pokeTName> ${response.name}</h1>`);
                pokemon4 = true;
                team.push(response.name);
            }else if (pokemon1 === true && pokemon2 === true && pokemon3 === true && pokemon4 === true && pokemon5 === false && pokemon6 === false){
                $(".poke5Img").append(`<img class = "pokeTImg" src="${response.sprites.front_default}">`);
                $(".poke5Name").append(`<h1 class = pokeTName> ${response.name}</h1>`);
                pokemon5 = true;
                team.push(response.name);
            }else if (pokemon1 === true && pokemon2 === true && pokemon3 === true && pokemon4 === true && pokemon5 === true && pokemon6 === false){
                $(".poke6Img").append(`<img class = "pokeTImg" src="${response.sprites.front_default}">`);
                $(".poke6Name").append(`<h1 class = pokeTName> ${response.name}</h1>`);
                pokemon6 = true;
                team.push(response.name);
            }
        }
    });
});

$("#removeTeam").click(function(){
            if (pokemon1 === true && pokemon2 === false && pokemon3 === false && pokemon4 === false && pokemon5 === false && pokemon6 === false){
                $(".poke1Img").html("");
                $(".poke1Name").html("");
                pokemon1 = false;
                team.pop();
            }else if (pokemon1 === true && pokemon2 === true && pokemon3 === false && pokemon4 === false && pokemon5 === false && pokemon6 === false){
                $(".poke2Img").html("");
                $(".poke2Name").html("");
                pokemon2 = false;
                team.pop();
            }else if (pokemon1 === true && pokemon2 === true && pokemon3 === true && pokemon4 === false && pokemon5 === false && pokemon6 === false){
                $(".poke3Img").html("");
                $(".poke3Name").html("");
                pokemon3 = false;
                team.pop();
            }else if (pokemon1 === true && pokemon2 === true && pokemon3 === true && pokemon4 === true && pokemon5 === false && pokemon6 === false){
                $(".poke4Img").html("");
                $(".poke4Name").html("");
                pokemon4 = false;
                team.pop();
            }else if (pokemon1 === true && pokemon2 === true && pokemon3 === true && pokemon4 === true && pokemon5 === true && pokemon6 === false){
                $(".poke5Img").html("");
                $(".poke5Name").html("");
                pokemon5 = false;
                team.pop();
            }else if(pokemon1 === true && pokemon2 === true && pokemon3 === true && pokemon4 === true && pokemon5 === true && pokemon6 === true){
                $(".poke6Img").html("");
                $(".poke6Name").html("");
                pokemon6 = false;
                team.pop();
            }
});
//Battle Page //
var randPoke = 1;
function spawnPoke(){
    $.ajax({
         url: `https://pokeapi.co/api/v2/pokemon/${randPoke}/`,
         method: "GET",
         success : function(response){
            return response.sprites.front_default;
         }
    });
}
$("#imageOpp").attr("src", spawnPoke());
$("#attack").click(function(){
    var pokemonKills = 0;
    
    var currentHealth = $("#healthBarOpp").attr("value");
    currentHealth = currentHealth - 10;
    var playerHealth = $("#healthBarPlay").attr("value");
    playerHealth = playerHealth - 5;
    
    $("#healthBarOpp").attr("value", currentHealth);
    $("#healthBarPlay").attr("value", playerHealth);
    
    if(currentHealth <= 0 && playerHealth > 0){
        $("#imageOpp").fadeOut();
        randPoke = Math.ceil(Math.random * 807);
        spawnPoke();
        $("#imagOpp").attr("src", spawnPoke());
        $("#healthBarOpp").attr("value", 100);
        pokemonKills++;
        $("#counter").text(pokemonKills);
    }else if(playerHealth <= 0){
        alert("Your Pokemon Fainted");
    }
});
/*$("#ability1").click(function(){
    $.ajax({
         url: apiUrl,
         method: "GET",
         success : function(response){
             var randNum = Math.floor(Math.random * response.abilities[0].ability.length);
             var ability = response.abilities[randNum].ability.name;
             
         }
    });
});*/

