function AtkPageObject(statsObject, oObject)
{
    this.statsObject = statsObject;
    this.oObject = oObject;
    
    this.firstX_loop;
    this.firstX_bar_percent;
    
    this.addX = addX;
    
    createAtkListeners(this);
}

function createAtkListeners(atkPageObject)
{
    //initializeX("firstX");   
    document.getElementById("firstXButton")
           .addEventListener("click", function ()
    {
        document.getElementById("firstXButton").disabled = true;
        //start attack loop
        atkPageObject.firstX_bar_percent = 100;
        console.log(1000/ atkPageObject.oObject.atkSpeed);
        atkPageObject.firstX_loop = setInterval(function()
        {
           attackLoop(atkPageObject, "firstX");
        }, 1000 / atkPageObject.oObject.atkSpeed);

        //check
    });
}

function addX()
{
    console.log("addX Here");
}

function attackLoop(atkPageObject, id)
{
    //console.log(atkPageObject[id + "_bar_percent"] - atkPageObject.oObject.atkDamage);
    if (atkPageObject[id + "_bar_percent"] - atkPageObject.oObject.atkDamage <= 0)
    {
        if (!atkPageObject.oObject.autoAttack)
        {  
            clearInterval(atkPageObject.firstX_loop);
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
        atkPageObject[id + "_bar_percent"] = 100;
        atkPageObject.statsObject
            .changeMoneyAndXKills(atkPageObject.oObject.xValue, 1);
    } 
    else
    {
        var newPercent = atkPageObject[id + "_bar_percent"] - atkPageObject.oObject.atkDamage;
        atkPageObject[id + "_bar_percent"] = newPercent;
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