function StatsObject ()
{
    this.money = 5;
    this.xKills = 0;
    
    this.moneyId = "money";
    this.xKillsId = "xKills";
    
    this.subscribers = [];
    
    //
    this.changeMoney = function (addMoney)
    {
        this.money += addMoney;
        this.updateStats();
    };
    this.changeXKills = function (addXKills)
    {
        this.xKills += addXKills;
        this.updateStats();
    };
    
    this.changeMoneyAndXKills = function (addMoney, addXKills)
    {
        this.money += addMoney;
        this.xKills += addXKills;
        this.updateStats();
    }
    
    this.updateStats = function (saveData)
    {
        if (typeof(saveData) == "boolean")
        {
            updateStats(this, saveData);
        }
        else
        {
            updateStats(this, true);
        }
    }
    this.addSubscriber = function (newSubscriber)
    {
        this.subscribers.push(newSubscriber);
    }
    
    this.updateStats(false);
}

function updateStats(statsObject, saveData)
{
    document.getElementById(statsObject.moneyId)
            .innerHTML = "$ " + statsObject.money;
        document.getElementById(statsObject.xKillsId)
        .innerHTML = "x kills: " + statsObject.xKills;
    
    for (var i = 0; i < statsObject.subscribers.length; i++)
    {
        statsObject.subscribers[i].statsUpdated(saveData);
    }
}

/*function changeMoney(statsObject, addMoney)
{
    statsObject.money += addMoney;
    //document.getElementById(statsObject.moneyId).innerHTML = "$ " + statsObject.money;
}

function changeXKills(statsObject, addXKills)
{
    statsObject.xKills += addXKills;
    document.getElementById(statsObject.xKillsId)
        .innerHTML = "x kills: " + statsObject.xKills;
}*/
