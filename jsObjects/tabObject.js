function TabObject (tab1_id, tab2_id, tab3_id)
{
    //variables
    this.activeTab;
    this.tab1 = tab1_id;
    this.tab2 = tab2_id;
    this.tab3 = tab3_id;

    this.tab1_content = tab1_id.replace("Tab", "Page");
    this.tab2_content = tab2_id.replace("Tab", "Page");
    this.tab3_content = tab3_id.replace("Tab", "Page");

    //intitialize
    createTabListeners(this);
}

function changeTab(tabId, tabObject)
{
    document.getElementById(tabObject.tab1_content).style = "display: none";
    document.getElementById(tabObject.tab2_content).style = "display: none";
    document.getElementById(tabObject.tab3_content).style = "display: none";

    document.getElementById(tabObject.tab1).className = "tab3";
    document.getElementById(tabObject.tab2).className = "tab3";
    document.getElementById(tabObject.tab3).className = "tab3";

    document.getElementById(tabId.replace("Tab", "Page")).style = "display: block";
    document.getElementById(tabId).className = "tab3 activeTab";


}

function createTabListeners(tabObject)
{
    document.getElementById(tabObject.tab1)
        .addEventListener("click", function ()
    {
        changeTab(tabObject.tab1, tabObject);
    });
    document.getElementById(tabObject.tab2)
        .addEventListener("click", function ()
    {
        changeTab(tabObject.tab2, tabObject);
    });
    document.getElementById(tabObject.tab3)
        .addEventListener("click", function ()
    {
        changeTab(tabObject.tab3, tabObject);
    });
}
