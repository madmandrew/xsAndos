function AtkPageObject(statsObject, oObject)
{
    this.statsObject = statsObject;
    this.oObject = oObject;
    
    this.allXs = {
        "firstX" : {
            "set" : true,
            "running": false,
            "loop" : null,
            "barPercent" : 100
        },
        "secondX" : {
            "set" : false,
            "loop" : null,
            "barPercent" : 100
        },
        "thirdX" : {
            "set" : false,
            "loop" : null,
            "barPercent" : 100
        },
        "fourthX" : {
            "set" : false,
            "loop" : null,
            "barPercent" : 100
        },
        "fifthX" : {
            "set" : false,
            "loop" : null,
            "barPercent" : 100
        }
    }

    this.addX = function ()
    {
        addX(this);
    }
    
    this.speedUpgraded = function ()
    {
        //console.log("speed has been upgraded, reset intervals");
        //console.log(1000 / oObject.atkSpeed);
        for (var id in this.allXs)
        {
            if (this.allXs[id].set)
            {
                clearInterval(this.allXs[id].loop);
                atkInterval(this, id);
            }
        }
    }
    
    createAtkListeners(this);
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
            document.getElementById(xId).style = "display: block";
            atkPageObject.allXs[xId].set = true;
            break;
        }
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
        }
        else
        {
           //handle atkSpeed change here    
        }
        document.getElementById(id + "Bar").style = "width:100%";
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
        .style = "width:" + newPercent + "%";
        
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
