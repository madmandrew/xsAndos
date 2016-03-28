function UpgradePageObject(statsObject, oObject, atkPage)
{
    this.statsObject = statsObject;
    this.oObject = oObject;
    this.atkPage = atkPage;
    
    this.upgrades = {
        "atkPower" : {
            "xCost" : 5,
            "moneyCost" : 5,
            "level" : 0
        },
        "atkSpeed" : {
            "xCost" : 10,
            "moneyCost" : 10,
            "level" : 0
        },
        "xKillValue" : {
            "xCost" : 15,
            "moneyCost" : 15,
            "level" : 0,
            "incValue" : 1
        },
        "autoAttack" : {
            "xCost" : 5,
            "moneyCost" : 20,
            "bought" : false
        },
        "newO" : {
            "xCost" : 100,
            "moneyCost" : 500,
            "level" : 0
        }
    };
    
    this.statsUpdated = function ()
    { 
        statsUpdated(this);
    }
    
    createUpgListeners(this);
    
    this.statsUpdated();
}

function statsUpdated(upgObject)
{
    for (var upgKey in upgObject.upgrades)
    {
        var upg = upgObject.upgrades[upgKey];
        if (upgObject.statsObject.money >= upg.moneyCost 
            && upgObject.statsObject.xKills >= upg.xCost)
        {
            if (upgKey == "autoAttack")
            {
                if (!upg.bought)
                {
                    document.getElementById(upgKey + "Button").disabled = false;
                }
            }
            else if (upgKey == "newO")
            {
                if (!(upg.level == "max"))
                {
                    document.getElementById(upgKey + "Button").disabled = false;
                }
            } 
            else
            {
                document.getElementById(upgKey + "Button").disabled = false;   
            }
            
        }
        else
        {
            document.getElementById(upgKey + "Button").disabled = true;
        }
    }   
}

function createUpgListeners(upgObject)
{
    //atk power
    document.getElementById("atkPowerButton")
        .addEventListener("click", function ()
    {
        var upg = upgObject.upgrades["atkPower"];
        var cost;
        if (upg.level == 0)
        {
            upgObject.oObject.increaseAttackDamage(1);
            
            cost = 5;
            upg.level = 1;
            upg.moneyCost = upg.moneyCost * 2;
            upg.xCost = upg.xCost * 2;
            
            updateButtonLabel("atkPowerButton", upg, upgObject);
            
        }
        else
        {
            upgObject.oObject.increaseAttackDamage(1);
            upg.level += 1;
            
            cost = upg.moneyCost;
            upg.moneyCost = Math.round(upg.moneyCost * 1.6);
            upg.xCost = Math.round(upg.xCost * 1.5);
            
            updateButtonLabel("atkPowerButton", upg);
        }
        
        //update last... so buttons are disabled correctly
        upgObject.statsObject.changeMoney(-cost);
    });
    
    //atk speed
    document.getElementById("atkSpeedButton")
        .addEventListener("click", function ()
    {
        var upg = upgObject.upgrades["atkSpeed"];
        upgObject.oObject.increaseAttackSpeed(.1);
        
        upg.level += 1;
        
        var cost = upg.moneyCost;
        upg.moneyCost = Math.round(upg.moneyCost * 1.8);
        upg.xCost = Math.round(upg.xCost * 1.7);
        
        updateButtonLabel("atkSpeedButton", upg);
        upgObject.statsObject.changeMoney(-cost);
    });
    
    //x-kill value
    document.getElementById("xKillValueButton")
        .addEventListener("click", function ()
    {
        var upg = upgObject.upgrades["xKillValue"];
        upg.incValue = Math.round(upg.incValue * 1.75);
        
        upgObject.oObject.increaseXValue(upg.incValue);
        
        upg.level += 1;
        var cost = upg.moneyCost;
        upg.moneyCost = Math.round(upg.moneyCost * 1.8);
        upg.xCost = Math.round(upg.xCost * 1.7);
        
        updateButtonLabel("xKillValueButton", upg);
        upgObject.statsObject.changeMoney(-cost);
    });
    
    //auto attack
    document.getElementById("autoAttackButton")
        .addEventListener("click", function ()
    {
        var upg = upgObject.upgrades["autoAttack"];
        upg.bought = true;
        
        upgObject.oObject.autoAttack = true;
        
        document.getElementById("autoAttackButton").children[1]
        .innerHTML = "MAX";
        
        document.getElementById("autoAttackButton").disabled = true;
        upgObject.statsObject.changeMoney(-upg.moneyCost);
    });
    
    //add new O
    document.getElementById("newOButton")
        .addEventListener("click", function ()
    {
        console.log("change attack new O button");
        var upg = upgObject.upgrades["newO"];
        upg.level += 1;
        
        upgObject.atkPage.addX();
        
        if (upg.level == 4)
        {
            upg.level = "max";
            //level
            document.getElementById("newOButton").children[1]
                .innerHTML = "";
    
            //cost
            document.getElementById("newOButton").children[2]
                .innerHTML = "MAX";
            //disable
            document.getElementById("newOButton").disabled = true;
            
            upgObject.statsObject.changeMoney(-upg.moneyCost);
        }
        else
        {
            var cost = upg.moneyCost;
            upg.moneyCost = upg.moneyCost * 4;
            upg.xCost = upg.xCost * 4;
            
            updateButtonLabel("newOButton", upg);
            upgObject.statsObject.changeMoney(-cost);
        }
    });
}

function updateButtonLabel (buttonId, upg)
{
    //level
    document.getElementById(buttonId).children[1]
        .innerHTML = "lvl: " + upg.level;
    
    //cost
    document.getElementById(buttonId).children[2]
        .innerHTML = upg.xCost + " x-kills and $" + upg.moneyCost;
}