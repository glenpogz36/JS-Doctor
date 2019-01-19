import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import $ from 'jQuery';
import { Search } from "./doctor.js";

$(document).ready(function () {
    $("#doctorForm").submit(function (event) {
        event.preventDefault();
        $("#results").text("");
        $("#error").text("");
        let doctor = $("#doctorSearch").val();
        let newSearch = new Search();
        let promise = newSearch.foundDoctor(doctor);

        promise.then(function (response) {
            let body = JSON.parse(response);
            let result = body.data;
            console.log(result);

            if (body.data.length === 0) {
                $("#results").text("No doctor found, try another one.");
            }
            for (var i = 0; i < result.length; i++) {
                $("#results").append("<h4>" + result[i].profile.first_name + " " + result[i].profile.last_name);
            }
        });
    });
});