var service = new Object();
service.doGet = function (url) {
    var responseReady = 4;
    var success = 200;
    var request;
    var response;
    request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === responseReady && this.status === success) {
            response = this.response;
        }
    };
    request.open('GET', url, false);
    request.send();
    return response;
}
