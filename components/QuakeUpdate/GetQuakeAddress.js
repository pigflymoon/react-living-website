function getURL(URL) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send();
    });
}


var latlngs = [];
var total = [];
var address = [];
let quakeApi = 'https://api.geonet.org.nz/quake?MMI=3';

// 2: 对 `then` 进行 promise chain 方式进行调用
function getGoogleUrl(latlng) {
    return "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlng + "&location_type=ROOFTOP&result_type=street_address&key=AIzaSyAZF4SM9KTeTMGbAFYnzURVBK9847FjORE";

}

function getApiPromise(apiUrl) {
    return new Promise(function (resolve) {
        var quake = getURL(apiUrl).then(JSON.parse);
        resolve(quake);
    });
} 

function callApiPromise() {
    var ApiPromise = getApiPromise(quakeApi);
    ApiPromise.then(function (value) {
        value.features.map(function (item) {
            var lnglat = item.geometry.coordinates, latlng;

            if (lnglat) {
                latlng = lnglat.toString().split(',').reverse().join(','); //location.latlng =
                latlngs.push(latlng);
            }
        });
        return latlngs;

    }).then(function (latlngs) {
        latlngs.forEach(function (latlng) {
            let url = getGoogleUrl(latlng);
            total.push(getURL(url).then(JSON.parse))
        });

        Promise.all(total).then(function (dataArr) {
            dataArr.forEach(function (data) {

                if (data.status == "OK") {
                    address.push(data.results[0].formatted_address)
                }
            });

            console.log(address)
            return address;
        }).catch(function (err) {
            console.log(err);
        });


    });
}


// exports.address = address;