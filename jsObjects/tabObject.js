function tabObject (tab1_id, tab2_id, tab3_id)
{
    //variables
    this.activeTab;
    this.tab1 = tab1_id;
    this.tab2 = tab2_id;
    this.tab3 = tab3_id;

    this.tab1_content = tab1_id.replace("Tab", "Page");
    this.tab2_content = tab2_id.replace("Tab", "Page");
    this.tab3_content = tab3_id.replace("Tab", "Page");


    //functions

    //intitialize
    createListeners(this);
}

function changeTab(tabId, tabObject)
{
    console.log("change Tab " + tabId);
    document.getElementById(tabObject.tab1_content).style = "display: none";
    document.getElementById(tabObject.tab2_content).style = "display: none";
    document.getElementById(tabObject.tab3_content).style = "display: none";

    document.getElementById(tabId.replace("Tab", "Page")).style = "display: block";
}



function createListeners(tabObject)
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
