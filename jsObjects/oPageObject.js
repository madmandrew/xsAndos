function oPageObject(statsObject)
{
    this.purchased = {
        "crown" : false,
        "sword" : false,
        "mustache" : false,
        "shield" : false,
        "pet" : false,
        "petAccessory" : false
    }

    this.statsUpdated = function ()
    {
        updateOButtons(this, statsObject);
    }

    this.loadStorage = function (loadPurchased)
    {
        for (var item in this.purchased)
        {
            if (item == "crown")
            {
                if (loadPurchased[item])
                {
                    this.purchased[item] = true;
                    drawCrown();
                }
            }
            else if (item == "sword")
            {
                if (loadPurchased[item])
                {
                    this.purchased[item] = true;
                    drawLightsaber();
                }
            }
            else if (item == "mustache")
            {
                if (loadPurchased[item])
                {
                    this.purchased[item] = true;
                    drawMustache()
                }
            }
            else if (item == "shield")
            {
                if (loadPurchased[item])
                {
                    this.purchased[item] = true;
                    drawShield();
                }
            }
            else if (item == "pet")
            {
                if (loadPurchased[item])
                {
                    this.purchased[item] = true;
                    drawPet();
                }
            }
            else if (item == "petAccessory")
            {
                if (loadPurchased[item])
                {
                    this.purchased[item] = true;
                    drawPetSunglasses();
                }
            }
        }
    }

    createOListeners(this, statsObject);
    initializeO();
    this.statsUpdated();
}

function updateOButtons(oPageObject, statsObject)
{
    if (statsObject.money >= 1000 && !oPageObject.purchased.crown)
    {
        //enable crown
        document.getElementById("buyCrown").disabled = false;
    }
    else
    {
        document.getElementById("buyCrown").disabled = true;
    }
    
    if (statsObject.money >= 10000 && !oPageObject.purchased.sword)
    {
        //enable sword
        document.getElementById("buySword").disabled = false;
    }
    else
    {
        document.getElementById("buySword").disabled = true;
    }

    if (statsObject.money >= 100000 && !oPageObject.purchased.mustache)
    {
        //enable mustache
        document.getElementById("buyMustache").disabled = false;
    }
    else
    {
        document.getElementById("buyMustache").disabled = true;
    }

    if (statsObject.money >= 250000 && !oPageObject.purchased.shield)
    {
        //enable shield
        document.getElementById("buyShield").disabled = false;
    }
    else
    {
        document.getElementById("buyShield").disabled = true;
    }

    if (statsObject.money >= 500000 && !oPageObject.purchased.pet)
    {
        //enable pet
        document.getElementById("buyPet").disabled = false;
    }
    else
    {
        document.getElementById("buyPet").disabled = true;
    }

    if (statsObject.money >= 1000000 && !oPageObject.purchased.petAccessory
        && oPageObject.purchased.pet)
    {
        //enable pet accessory
        document.getElementById("buyPetAccessory").disabled = false;
    }
    else
    {
        document.getElementById("buyPetAccessory").disabled = true;
    }
}

function createOListeners(oPageObject, statsObject)
{
    document.getElementById("buyCrown").addEventListener("click", function()
    {
        drawCrown();
        oPageObject.purchased.crown = true;
        statsObject.changeMoney(-1000);
        //document.getElementById("buyCrown").disabled = true;
    });
    document.getElementById("buyMustache").addEventListener("click", function()
    {
        drawMustache();
        oPageObject.purchased.mustache = true;
        statsObject.changeMoney(-100000);
        //document.getElementById("buyMustache").disabled = true;
    });
    document.getElementById("buySword").addEventListener("click", function()
    {
        drawLightsaber();
        oPageObject.purchased.sword = true;
        statsObject.changeMoney(-10000);
        //document.getElementById("buySword").disabled = true;
    });
    document.getElementById("buyShield").addEventListener("click", function()
    {
        drawShield();
        oPageObject.purchased.shield = true;
        statsObject.changeMoney(-250000);
        //document.getElementById("buyShield").disabled = true;
    });
    document.getElementById("buyPet").addEventListener("click", function()
    {
        drawPet();
        oPageObject.purchased.pet = true;
        statsObject.changeMoney(-500000);
        //document.getElementById("buyPet").disabled = true;
        //document.getElementById("buyPetAccessory").disabled = false;
    });
    document.getElementById("buyPetAccessory").addEventListener("click", function()
    {
        drawPetSunglasses();
        oPageObject.purchased.petAccessory = true;
        statsObject.changeMoney(-1000000);
        //document.getElementById("buyPetAccessory").disabled = true;
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
    img.src = "img/goldCrown.png";
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
    img.src = "img/mustache.png";
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
    img.src = "img/lightsaber.png";
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
    img.src = "img/shield.png";
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
    img.src = "img/pet.png";
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
    img.src = "img/sunglasses.png";
}
