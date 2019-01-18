import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import $ from 'jQuery';

$(document).ready(function () {
    $('form#doctor').submit(function (event) {
        event.preventDefault();
        let name = $('#doctorName').val();
        let condition = $('#condition').val();
        $('#doctorName').val("");
        $('#condition').val("");
        $("#results").append(name, condition);
    });
});