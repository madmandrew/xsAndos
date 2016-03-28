function oPageObject()
{

    this.statsUpdated = function ()
    {
        console.log("stats have been updated, update oPage");   
    }

    createOListeners();
    initializeO();
    
    //drawCrown();
    //drawMustache();
    //drawLightsaber();
    //drawShield();
    //drawPet();
    //drawPetSunglasses();
}

function createOListeners()
{
    document.getElementById("buyCrown").addEventListener("click", function()
    {
        drawCrown();
        document.getElementById("buyCrown").disabled = true;
    });
    document.getElementById("buyMustache").addEventListener("click", function()
    {
        drawMustache();
        document.getElementById("buyMustache").disabled = true;
    });
    document.getElementById("buySword").addEventListener("click", function()
    {
        drawLightsaber();
        document.getElementById("buySword").disabled = true;
    });
    document.getElementById("buyShield").addEventListener("click", function()
    {
        drawShield();
        document.getElementById("buyShield").disabled = true;
    });
    document.getElementById("buyPet").addEventListener("click", function()
    {
        drawPet();
        document.getElementById("buyPet").disabled = true;
        document.getElementById("buyPetAccessory").disabled = false;
    });
    document.getElementById("buyPetAccessory").addEventListener("click", function()
    {
        drawPetSunglasses();
        document.getElementById("buyPetAccessory").disabled = true;
    });
}

function initializeO()
{
    var canvas = document.getElementById("oCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc((canvas.width/2),(canvas.height/2),55,0,2 * Math.PI);
    ctx.stroke();  
}

function drawCrown()
{
    var img = new Image();
    img.onload = function ()
    {
        var canvas = document.getElementById("oCanvas");
        var ctx = canvas.getContext("2d");
        ctx.rotate(-.5);
        ctx.drawImage(img, 55,35, 75, 75);
        ctx.rotate(.5);
    }
    //img.src = "/img/goldCrown.png"; doesn't Work online?
    img.src = "/img/goldCrown.png";
}

function drawMustache()
{
    var img = new Image();
    img.onload = function ()
    {
        var canvas = document.getElementById("oCanvas");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 112.25,70, 75.5, 25);
    }
    img.src = "/img/mustache.png";
}

function drawLightsaber()
{
    var img = new Image();
    img.onload = function ()
    {
        var canvas = document.getElementById("oCanvas");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 40,35, 80, 80);
    }
    img.src = "/img/lightsaberSmall.png";
}

function drawShield()
{
    var img = new Image();
    img.onload = function ()
    {
        var canvas = document.getElementById("oCanvas");
        var ctx = canvas.getContext("2d");
        ctx.rotate(.5);
        ctx.drawImage(img, 200, -50, 75, 75);
        ctx.rotate(-.5);
    }
    img.src = "/img/shield.png";
}

function drawPet()
{
    var img = new Image();
    img.onload = function ()
    {
        var canvas = document.getElementById("oCanvas");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 20,90, 45, 45);
    }
    img.src = "/img/pet.gif";
}
function drawPetSunglasses()
{
    var img = new Image();
    img.onload = function ()
    {
        var canvas = document.getElementById("oCanvas");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 34,102, 23.5, 5);
    }
    img.src = "/img/sunglasses2.png";
}
