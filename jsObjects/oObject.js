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
        this.atkDamage += addAttackDamage;
    }
    this.increaseAttackSpeed = function (addAttackSpeed)
    {
        this.atkSpeed += addAttackSpeed;
    }
    this.increaseXValue = function (addXValue)
    {
        this.xValue += addXValue;
    }
    this.addClothing = function (clothingName)
    {
        this.clothing[clothingName] = true;   
    }
}
