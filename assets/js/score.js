$(document).ready(function () {
    var scoresheet = 'https://spreadsheets.google.com/feeds/cells/1wGyN9syuJc02hJtjd0c9vMgVmnPDOA2s7nQzJH9hEKg/1/public/values?alt=json',
        scorescript = 'https://script.google.com/macros/s/AKfycbyXqSeyfWMXaVzp-jiRSfSZtObSgVWoXIAEkXT53VUMwUD_BcXD/exec';
    $.get(scoresheet, function (data) {
        var rows = data['feed']['entry'],
            lastest = '';
        var opt11 = parseInt(rows[7]['gs$cell']['$t']),
            opt12 = parseInt(rows[8]['gs$cell']['$t']),
            opt1 = parseInt(opt11) + parseInt(opt12),
            opt21 = parseInt(rows[10]['gs$cell']['$t']),
            opt22 = parseInt(rows[11]['gs$cell']['$t']),
            opt23 = parseInt(rows[12]['gs$cell']['$t']),
            opt2 = parseInt(opt21) + parseInt(opt22) + parseInt(opt23),
            opt31 = parseInt(rows[14]['gs$cell']['$t']),
            opt32 = parseInt(rows[15]['gs$cell']['$t']),
            opt3 = parseInt(opt31) + parseInt(opt32),
            opt41 = parseInt(rows[17]['gs$cell']['$t']),
            opt42 = parseInt(rows[18]['gs$cell']['$t']),
            opt4 = parseInt(opt41) + parseInt(opt42),
            opt51 = parseInt(rows[20]['gs$cell']['$t']),
            opt52 = parseInt(rows[21]['gs$cell']['$t']),
            opt53 = parseInt(rows[22]['gs$cell']['$t']),
            opt54 = parseInt(rows[23]['gs$cell']['$t']),
            opt55 = parseInt(rows[24]['gs$cell']['$t']),
            opt5 = parseInt(opt51) + parseInt(opt52) + parseInt(opt53) + parseInt(opt54) + parseInt(opt55);
        $('#opt11 .percentage').text(Math.round((opt11 / opt1) * 100) + '%');
        $('#opt12 .percentage').text(Math.round((opt12 / opt1) * 100) + '%');
        $('#opt21 .percentage').text(Math.round((opt21 / opt2) * 100) + '%');
        $('#opt22 .percentage').text(Math.round((opt22 / opt2) * 100) + '%');
        $('#opt23 .percentage').text(Math.round((opt23 / opt2) * 100) + '%');
        $('#opt31 .percentage').text(Math.round((opt31 / opt3) * 100) + '%');
        $('#opt32 .percentage').text(Math.round((opt32 / opt3) * 100) + '%');
        $('#opt41 .percentage').text(Math.round((opt41 / opt4) * 100) + '%');
        $('#opt42 .percentage').text(Math.round((opt42 / opt4) * 100) + '%');
        $('#opt51 .percentage').text(Math.round((opt51 / opt5) * 100) + '%');
        $('#opt52 .percentage').text(Math.round((opt52 / opt5) * 100) + '%');
        $('#opt53 .percentage').text(Math.round((opt53 / opt5) * 100) + '%');
        $('#opt54 .percentage').text(Math.round((opt54 / opt5) * 100) + '%');
        $('#opt55 .percentage').text(Math.round((opt55 / opt5) * 100) + '%');
        // var optStatus = true;
        // $('.option button').click(function (e) {
        //     $('.loading').fadeIn();
        // });
        // $('#opt11').click(function (e) {
        //     if (optStatus) {
        //         var data = {
        //             'opt11': opt11 + 1,
        //         }
        //         send(data);
        //     }
        // });
        // $('#opt12').click(function (e) {
        //     if (optStatus) {
        //         var data = {
        //             'opt12': opt12 + 1,
        //         }
        //         send(data);
        //     }
        // });
        // function send(data) {
        //     $.ajax({
        //         type: "get",
        //         url: scorescript,
        //         data: data,
        //         dataType: "JSON",
        //         success: function (response) {
        //             console.log(response);
        //             $(this.parent().children().addClass('done'));
        //             $('.loading').fadeOut();
        //         }
        //     });
        // }
    });
});