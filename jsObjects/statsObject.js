function StatsObject ()
{
    this.money = 1000000;
    this.xKills = 1000000;
    
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
    
    this.updateStats = function ()
    {
        updateStats(this);
    }
    this.addSubscriber = function (newSubscriber)
    {
        this.subscribers.push(newSubscriber);
    }
    
    this.updateStats();
}

function updateStats(statsObject)
{
    document.getElementById(statsObject.moneyId)
            .innerHTML = "$ " + statsObject.money;
        document.getElementById(statsObject.xKillsId)
        .innerHTML = "x kills: " + statsObject.xKills;
    
    for (var i = 0; i < statsObject.subscribers.length; i++)
    {
        statsObject.subscribers[i].statsUpdated();
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