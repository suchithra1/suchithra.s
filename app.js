var app = new Object();

app.createChildren = function () {
    lsp.createChildren();
    rsp.createChildren();
}

app.createView = function () {
    var response = lsp.createView();
    document.getElementById('app').innerHTML = response;
    response = rsp.createView();
    document.getElementById('app').innerHTML += response;
}

app.prePopulate = function () {
    lsp.prePopulate();
    rsp.prePopulate();
}

app.listenEvents = function () {
    lsp.listenEvents();
    rsp.listenEvents();
}

app.setDefault = function () {
    lsp.setDefault();
    rsp.setDefault();
}

app.onLoad = function () {
    app.createChildren();
    app.createView();
    app.prePopulate();
    app.listenEvents();
    app.setDefault();
}
