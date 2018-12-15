var personPanel = new Object();

personPanel.createChildren = function () {
    personListPanel.createChildren();
    personInfoPanel.createChildren();
    var response = service.doGet('../html/personPanel.html');
    return response;
}

personPanel.createView = function () {
    document.getElementById('personPanel').innerHTML += personListPanel.createView();
    document.getElementById('personPanel').innerHTML += personInfoPanel.createView();
}

personPanel.prePopulate = function () {
    personListPanel.prePopulate();
    personInfoPanel.prePopulate();
}

personPanel.listenEvents = function () {
    personListPanel.listenEvents();
    personInfoPanel.listenEvents();
}

personPanel.setDefault = function () {
    personListPanel.setDefault();
    personInfoPanel.setDefault();
}