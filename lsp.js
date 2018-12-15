var lsp = new Object();

lsp.createChildren = function () {}

lsp.createView = function () {
    var response = service.doGet('../html/lsp.html');
    return response;
}

lsp.prePopulate = function () {}

lsp.listenEvents = function () {
    document.getElementById('personButton')
            .addEventListener('click', function () {
                eventManager.broadcast('personSelected', 'person')
            });
}

lsp.setDefault = function () {}
