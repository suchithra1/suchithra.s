var personListPanel = new Object();
var lastSelected;

personListPanel.createChildren = function () {}

personListPanel.createView = function () {
    var response = service.doGet('../html/personListPanel.html');
    return response;
}

personListPanel.prePopulate = function () {
    var response = service.doGet('../assets/person.json');
    var persons = JSON.parse(response);
    personListPanel.doCreateList(persons);
}

personListPanel.listenEvents = function () {
    var table = document.getElementById('personList');
    for(var index = 0; index < table.rows.length; index++) {
        table.rows[index].addEventListener('click', function () {
            eventManager.broadcast('recordSelected', this)
        });
    }
    var add = document.getElementById('addButton');
    add.addEventListener('click', function () {
        eventManager.broadcast('addClicked', '')
    });
    eventManager.subscribe('recordSelected', personListPanel.doSelect);
    eventManager.subscribe('submitClicked', personListPanel.doCreatePerson);
}

personListPanel.setDefault = function () {}

personListPanel.doCreateList = function (persons) {
    var table;
    var col = [];
    for (var key in persons[0]) {
        if(col.indexOf(key) === -1) {
            col.push(key);
        }
    }
    table = document.getElementById('personList');
    var tableTemplate = service.doGet('../assets/personTable.html');
    for (var row = 0; row < persons.length; row++) {
        var record = tableTemplate.replace("%id%", persons[row][col[0]])
                                  .replace("%firstName%", persons[row][col[1]])
                                  .replace("%lastName%", persons[row][col[2]])
                                  .replace("%email%", persons[row][col[3]])
                                  .replace("%birthDate%", persons[row][col[4]]);
        table.innerHTML += record;
    }
    personListPanel.doHighlight(table.rows[0]);
    lastSelected = table.rows[0];
}

personListPanel.doSelect = function (record) {
    lastSelected.style.backgroundColor = 'yellow';
    personListPanel.doHighlight(record);
    lastSelected = record;
}

personListPanel.doHighlight = function (row) {
    row.style.backgroundColor = '#ddd';
}

personListPanel.doCreatePerson = function (data) {
    var tableTemplate = service.doGet('../assets/personTable.html');
    var record = tableTemplate
        .replace("%id%", document.getElementById('inputId').value)
        .replace("%firstName%", document.getElementById('inputFname').value)
        .replace("%lastName%", document.getElementById('inputLname').value)
        .replace("%email%", document.getElementById('inputEmail').value)
        .replace("%birthDate%", document.getElementById('inputBirthDate').value);

    var table = document.getElementById('personList');
    table.innerHTML += record;
}