function O_Object()
{
    this.autoAttack = false;
    this.atkSpeed = 1;
    this.atkDamage = 1;
    this.xValue = 1;
    
    this.clothing = {
        "crown" : false,
        "mustache" : false,
        "sword" : false,
        "shield" : false,
        "pet" : false,
        "petAccessory" : false
    };
    
    this.increaseAttackDamage = function (addAttackDamage)
    {
        //increaseAttackDamage(this, addAttackDamage);
        this.atkDamage += addAttackDamage;
    }
    this.increaseAttackSpeed = function (addAttackSpeed)
    {
        //increaseAttack(this, addAttackSpeed);
        this.atkSpeed += addAttackSpeed;
    }
    this.increaseXValue = function (addXValue)
    {
        //increaseAttack(this, addAttackSpeed);
        this.xValue += addXValue;
    }
    this.addClothing = function (clothingName)
    {
        this.clothing[clothingName] = true;   
    }
}

function increaseAttackDamage(oObject, addAttackDamage)
{
}

function increaseAttackSpeed(oObject, addAttackSpeed)
{   
}