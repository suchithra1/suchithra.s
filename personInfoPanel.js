var personInfoPanel = new Object();

personInfoPanel.createChildren = function () {}

personInfoPanel.createView = function () {
    var response = service.doGet('../html/personInfoPanel.html');
    return response;
}

personInfoPanel.prePopulate = function () {}

personInfoPanel.listenEvents = function () {
    // eventManager.subscribe('recordSelected', personInfoPanel.doPopulate);
    eventManager.subscribe('addClicked', personInfoPanel.doClearFields);
    document.getElementById('submitButton').addEventListener('click', function () {
        eventManager.broadcast('submitClicked', 'form')
    });
}

personInfoPanel.setDefault = function () {
    var table = document.getElementById('personList');
    var record = table.rows[0];
    personInfoPanel.doPopulate(record);
}

personInfoPanel.doPopulate = function (record) {
    var form;
    var formTemplate = service.doGet('../assets/personForm.html');
    var info = formTemplate.replace('%id%', record.cells[0].innerHTML)
                                  .replace('%firstName%', record.cells[1].innerHTML)
                                  .replace('%lastName%', record.cells[2].innerHTML)
                                  .replace('%email%', record.cells[3].innerHTML)
                                  .replace('%birthDate%', record.cells[4].innerHTML);
    form = document.getElementById('information');
    form.innerHTML = info;
}

personInfoPanel.doClearFields = function (data) {
    var form;
    var formTemplate = service.doGet('../assets/personForm.html');
    var info = formTemplate.replace('%id%', '')
                           .replace('%firstName%', '')
                           .replace('%lastName%', '')
                           .replace('%email%', '')
                           .replace('%birthDate%', '');
    form = document.getElementById('information');
    form.innerHTML = info;
}
