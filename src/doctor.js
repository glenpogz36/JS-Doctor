var Promise = require('es6-promise').Promise;

export class Search {
    foundDoctor(doctor) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctor}&location=wa-seattle&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    console.log("error");
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();

        });
    }

    foundCondition(condition) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=wa-seattle&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    console.log("error");
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();

        });
    }
}

