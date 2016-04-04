function AtkPageObject(statsObject, oObject)
{
    this.statsObject = statsObject;
    this.oObject = oObject;
    
    this.allXs = {
        "firstX" : {
            "set" : true,
            "running": false,
            "loop" : null,
            "asciimationLoop" : null,
            "barPercent" : 100
        },
        "secondX" : {
            "set" : false,
            "running": false,
            "loop" : null,
            "asciimationLoop" : null,
            "barPercent" : 100
        },
        "thirdX" : {
            "set" : false,
            "running": false,
            "loop" : null,
            "asciimationLoop" : null,
            "barPercent" : 100
        },
        "fourthX" : {
            "set" : false,
            "running": false,
            "loop" : null,
            "asciimationLoop" : null,
            "barPercent" : 100
        },
        "fifthX" : {
            "set" : false,
            "running": false,
            "loop" : null,
            "asciimationLoop" : null,
            "barPercent" : 100
        }
    }

    this.loadStorage = function(loadXs)
    {
        var xToAdd = 0;
        for (var xId in loadXs)
        {
            if (loadXs[xId].set)
            {
                xToAdd++;
            }
        }
        for (var i = 1; i < xToAdd; i++)
        {
            this.addX();
        }
    }

    this.addX = function ()
    {
        addX(this);
    }
    
    this.speedUpgraded = function ()
    {
        for (var id in this.allXs)
        {
            if (this.allXs[id].set && this.allXs[id].running)
            {
                clearInterval(this.allXs[id].loop);
                atkInterval(this, id);
            }
        }
    }

    this.tapAttackListeners = function ()
    {
        var atkPage = this;
        document.getElementById("firstXTap").addEventListener("click", function ()
        {
            if (atkPage.allXs.firstX.running)
            {
                atkPage.allXs.firstX.barPercent -= 1;
                attack("firstX", atkPage.allXs.firstX.barPercent);
            }
        });
        document.getElementById("secondXTap").addEventListener("click", function ()
        {
            if (atkPage.allXs.secondX.running)
            {
                atkPage.allXs.secondX.barPercent -= 1;
                attack("secondX", atkPage.allXs.secondX.barPercent);
            }
        });
        document.getElementById("thirdXTap").addEventListener("click", function ()
        {
            if (atkPage.allXs.thirdX.running)
            {
                atkPage.allXs.thirdX.barPercent -= 1;
                attack("thirdX", atkPage.allXs.thirdX.barPercent);
            }
        });
        document.getElementById("fourthXTap").addEventListener("click", function ()
        {
            if (atkPage.allXs.fourthX.running)
            {
                atkPage.allXs.fourthX.barPercent -= 1;
                attack("fourthX", atkPage.allXs.fourthX.barPercent);
            }
        });
        document.getElementById("fifthXTap").addEventListener("click", function ()
        {
            if (atkPage.allXs.fifthX.running)
            {
                atkPage.allXs.fifthX.barPercent -= 1;
                attack("fifthX", atkPage.allXs.fifthX.barPercent);
            }
        });
    }
    
    this.asciimationLoop1 = function (id)
    {
           asciimationLoop1(this, id);
    }
    this.asciimationLoop2 = function (id)
    {
           asciimationLoop2(this, id);
    }
    this.clearAsciimation = function (id)
    {
        clearInterval(this.allXs[id].asciimationLoop);  
        document.getElementById(id + "asciimation").innerHTML = "XvsO";
    }

    createAtkListeners(this);
    this.tapAttackListeners();
}

function asciimationLoop1 (atkPageObject, id)
{
    var i = 0;
    atkPageObject.allXs[id].asciimationLoop = setInterval(function()
    {
        if (i == 0)
        {
            document.getElementById(id + "asciimation").innerHTML = "X |O";
            i++;
        }
        else if(i == 1)
        {
           document.getElementById(id + "asciimation").innerHTML = "X \\O";
            i++;
        }
        else if (i == 2)
        {
            document.getElementById(id + "asciimation").innerHTML = "X--O";
            i++;
        }
        else if (i == 3)
        {
            document.getElementById(id + "asciimation").innerHTML = "x--O";
            i++;
        }
        else if (i == 4)
        {
            document.getElementById(id + "asciimation").innerHTML = "X--O";
            i++;
        }  
        else if (i == 5)
        {
            document.getElementById(id + "asciimation").innerHTML = "X \\O";
            i=0;
        }
    }, 500);
}

function asciimationLoop2 (atkPageObject, id)
{
    var i = 0;
    atkPageObject.allXs[id].asciimationLoop = setInterval(function()
    {
        if (i == 0)
        {
            document.getElementById(id + "asciimation").innerHTML = "X  {O";
            i++;
        }
        else if(i == 1)
        {
           document.getElementById(id + "asciimation").innerHTML = "X {-O";
            i++;
        }
        else if (i == 2)
        {
            document.getElementById(id + "asciimation").innerHTML = "X  -{O";
            i++;
        }
        else if (i == 3)
        {
            document.getElementById(id + "asciimation").innerHTML = "X-  {O";
            i++;
        }
        else if (i == 4)
        {
            document.getElementById(id + "asciimation").innerHTML = "x  {O";
            i++;
        }  
        else if (i == 5)
        {
            document.getElementById(id + "asciimation").innerHTML = "X  {O";
            i=0;
        }
    }, 500);
}

function createAtkListeners(atkPageObject)
{
    for (var xId in atkPageObject.allXs)
    {
        (function(xId1)
        {
           document.getElementById(xId1 + "Button")
               .addEventListener("click", function ()
            {
                document.getElementById(xId1 + "Button").disabled = true;
                atkPageObject.allXs[xId1].running = true;
                if (xId1 == "firstX" || xId1 == "thirdX" || xId1 == "fifthX")
                {
                    atkPageObject.asciimationLoop1(xId1);
                }
                else
                {
                    atkPageObject.asciimationLoop2(xId1);
                }

                atkPageObject.allXs[xId1].barPercent = 100;

                //start attack loop
                //console.log(1000/ atkPageObject.oObject.atkSpeed);
                atkInterval(atkPageObject, xId1);
            });
        }(xId)); //calls this immediately to prevent var rewrites..
    }
}

function atkInterval(atkPage, id)
{
    clearInterval(atkPage.allXs[id].loop);
    atkPage.allXs[id].loop = setInterval(function()
                {
                    attackLoop(atkPage, id);
                }, 1000 / atkPage.oObject.atkSpeed);
}

function addX(atkPageObject)
{
    for (var xId in atkPageObject.allXs)
    {
        if(!atkPageObject.allXs[xId].set)
        {
            document.getElementById(xId).style.display = "block";
            atkPageObject.allXs[xId].set = true;
            break;
        }
    }
}

function attack(id, newPercent)
{
    document.getElementById(id + "Bar")
            .style.width = newPercent + "%";

    //this is to account for the text overflowing container
    if (newPercent <= 15)
    {
        document.getElementById(id + "BarText").innerHTML = "";
    }
    else
    {
        document.getElementById(id + "BarText").innerHTML = newPercent + "%";
    }
}

function attackLoop(atkPageObject, id)
{
    if (atkPageObject.allXs[id].barPercent - atkPageObject.oObject.atkDamage <= 0)
    {
        if (!atkPageObject.oObject.autoAttack)
        {  
            clearInterval(atkPageObject.allXs[id].loop);
            document.getElementById(id + "Button").disabled = false;
            atkPageObject.allXs[id].running = false;
            atkPageObject.clearAsciimation(id);
        }
        else
        {
           //handle atkSpeed change here    
        }
        document.getElementById(id + "Bar").style.width = "100%";
        document.getElementById(id + "BarText").innerHTML = "100%";
        
        
        //atkPageObject.statsObject.changeMoney(atkPageObject.oObject.xValue);
        //atkPageObject.statsObject.changeXKills(1);
        //atkPageObject[id + "_bar_percent"] = 100;
        atkPageObject.allXs[id].barPercent = 100;
        atkPageObject.statsObject
            .changeMoneyAndXKills(atkPageObject.oObject.xValue, 1);
    } 
    else
    {
        //var newPercent = atkPageObject[id + "_bar_percent"] - atkPageObject.oObject.atkDamage;
        var newPercent = atkPageObject.allXs[id].barPercent - atkPageObject.oObject.atkDamage;
        //atkPageObject[id + "_bar_percent"] = newPercent;
        atkPageObject.allXs[id].barPercent = newPercent;

        document.getElementById(id + "Bar")
        .style.width = newPercent + "%";
        
        //this is to account for the text overflowing container
        if (newPercent <= 10)
        {
            document.getElementById(id + "BarText").innerHTML = "";
        }
        else
        {
            document.getElementById(id + "BarText").innerHTML = newPercent + "%";
        }
    }
}
