const endpoint = "https://www.jsonstore.io/b99e60430b74db7ad6c8d22d718607b33d9c5e7e23438a0d46fe7f368a69c77c";
let shorthash = window.location.hash.substr(1)

if (window.location.hash != "") {
    $.getJSON(endpoint + "/" + shorthash, function (data) {
        data = data["result"];

        if (data != null) {
            window.location.href = data;
        }

    });
}
