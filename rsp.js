var rsp = new Object();

rsp.createChildren = function () {}

rsp.createView = function () {
    var response = service.doGet('../html/rsp.html');
    return response;
}

rsp.prePopulate = function () {}

rsp.listenEvents = function () {
    eventManager.subscribe('personSelected', rsp.onClickEntity);
}

rsp.setDefault = function () {}

rsp.onClickAddress = function () {
    doGet('../html/addressPanel.html');
}

rsp.onClickEntity = function (data) {
    if(data === 'person') {
        var response = personPanel.createChildren();
        document.getElementById('rsp').innerHTML = response;
        personPanel.createView();
        personPanel.prePopulate();
        personPanel.listenEvents();
        personPanel.setDefault();
    }
}
