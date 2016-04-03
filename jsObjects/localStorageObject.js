/**
 * Created by andrewbarta on 4/2/16.
 */
function LocalStorageObject(atkPage, upgPage, oPage, statsObject, oObject)
{
    this.gameData = {
        "atkPage" : null,
        "upgPage" : null,
        "oPage" :null,
        "oObject" : null,
        "money" : 0,
        "xKills" : 0
    }

    this.statsUpdated = function (saveData)
    {
        if (saveData)
        {
            console.log("saving");
            this.gameData.atkPage = atkPage.allXs;
            this.gameData.upgPage = upgPage.upgrades;
            this.gameData.oPage = oPage.purchased;
            this.gameData.oObject = oObject;
            this.gameData.money = statsObject.money;
            this.gameData.xKills = statsObject.xKills;

            if (typeof(Storage) !== 'undefined')
            {
                localStorage.setItem("gameData", JSON.stringify(this.gameData));
            }
            else
            {
                console.log("Local Storage disabled");
            }
        }
    }

    this.loadStorage = function ()
    {
        console.log("loading data");
        if(localStorage.gameData != "null" && localStorage.gameData != undefined)
        {
            this.gameData = JSON.parse(localStorage.gameData);

            if (this.gameData.atkPage != null)
            {
                atkPage.loadStorage(this.gameData.atkPage);
            }
            if ( this.gameData.upgPage != null)
            {
                upgPage.upgrades = this.gameData.upgPage;
                upgPage.loadStorage(this.gameData.upgPage);
            }
            if ( this.gameData.oPage != null)
            {
                oPage.loadStorage(this.gameData.oPage);
            }
            if ( this.gameData.oObject != null)
            {
                oObject.autoAttack = this.gameData.oObject.autoAttack;
                oObject.atkSpeed = this.gameData.oObject.atkSpeed;
                oObject.atkDamage = this.gameData.oObject.atkDamage;
                oObject.xValue = this.gameData.oObject.xValue;
            }
            if ( this.gameData.money != null)
            {
                statsObject.money = this.gameData.money;
            }
            if ( this.gameData.xKills != null)
            {
                statsObject.xKills = this.gameData.xKills;
            }

            statsObject.updateStats(false);
        }
        else
        {
            statsObject.updateStats(true);
        }
    }

    this.clearStats = function ()
    {
        console.log("clearing data");
        localStorage.gameData = null;
        location.reload();
    }

    this.loadTestMode = function ()
    {
        console.log("testing");
    }

    document.getElementById("clearStats").addEventListener("click", function ()
    {
       devMode.clearStats();
    });
}