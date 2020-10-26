$(document).ready(function () {
    $.get('https://spreadsheets.google.com/feeds/cells/1wGyN9syuJc02hJtjd0c9vMgVmnPDOA2s7nQzJH9hEKg/1/public/values?alt=json', function (data) {
        var rows = data['feed']['entry'],
            scoreStatus = true,
            opt11 = parseInt(rows[7]['gs$cell']['$t']),
            opt12 = parseInt(rows[8]['gs$cell']['$t']),
            opt1 = parseInt(rows[9]['gs$cell']['$t']),
            opt21 = parseInt(rows[11]['gs$cell']['$t']),
            opt22 = parseInt(rows[12]['gs$cell']['$t']),
            opt23 = parseInt(rows[13]['gs$cell']['$t']),
            opt2 = parseInt(rows[14]['gs$cell']['$t']),
            opt31 = parseInt(rows[16]['gs$cell']['$t']),
            opt32 = parseInt(rows[17]['gs$cell']['$t']),
            opt3 = parseInt(rows[18]['gs$cell']['$t']),
            opt41 = parseInt(rows[20]['gs$cell']['$t']),
            opt42 = parseInt(rows[21]['gs$cell']['$t']),
            opt4 = parseInt(rows[22]['gs$cell']['$t']),
            opt51 = parseInt(rows[24]['gs$cell']['$t']),
            opt52 = parseInt(rows[25]['gs$cell']['$t']),
            opt53 = parseInt(rows[26]['gs$cell']['$t']),
            opt54 = parseInt(rows[27]['gs$cell']['$t']),
            opt55 = parseInt(rows[28]['gs$cell']['$t']),
            opt5 = parseInt(rows[29]['gs$cell']['$t']);

        $('.option button').click(function (e) {
            $('.loading').fadeIn();
        });
        $('#opt11').click(function (e) {
            var time = new Date();
            opt11 += 1;
            opt1 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore11(data);
        });
        $('#opt12').click(function (e) {
            var time = new Date();
            opt12 += 1;
            opt1 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore12(data);
        });
        $('#opt21').click(function (e) {
            var time = new Date();
            opt21 += 1;
            opt2 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore21(data);
        });
        $('#opt22').click(function (e) {
            var time = new Date();
            opt22 += 1;
            opt2 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore22(data);
        });
        $('#opt23').click(function (e) {
            var time = new Date();
            opt23 += 1;
            opt2 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore23(data);
        });
        $('#opt31').click(function (e) {
            var time = new Date();
            opt31 += 1;
            opt3 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore31(data);
        });
        $('#opt32').click(function (e) {
            var time = new Date();
            opt32 += 1;
            opt3 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore32(data);
        });
        $('#opt41').click(function (e) {
            var time = new Date();
            opt41 += 1;
            opt4 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore41(data);
        });
        $('#opt42').click(function (e) {
            var time = new Date();
            opt42 += 1;
            opt4 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore42(data);
        });
        $('#opt51').click(function (e) {
            var time = new Date();
            opt51 += 1;
            opt5 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore51(data);
        });
        $('#opt52').click(function (e) {
            var time = new Date();
            opt52 += 1;
            opt5 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore52(data);
        });
        $('#opt53').click(function (e) {
            var time = new Date();
            opt53 += 1;
            opt5 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore53(data);
        });
        $('#opt54').click(function (e) {
            var time = new Date();
            opt54 += 1;
            opt5 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore54(data);
        });
        $('#opt55').click(function (e) {
            var time = new Date();
            opt55 += 1;
            opt5 += 1;
            var data = {
                'time': time, 'opt11': opt11, 'opt12': opt12, 'opt21': opt21, 'opt22': opt22, 'opt23': opt23, 'opt31': opt31, 'opt32': opt32, 'opt41': opt41, 'opt42': opt42, 'opt51': opt51, 'opt52': opt52, 'opt53': opt53, 'opt54': opt54, 'opt55': opt55,
            }
            sendScore55(data);
        });

        function sendScore11(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt11 .percentage').text(Math.round((opt11 / opt1) * 100) + '%');
                    $('#opt12 .percentage').text(Math.round((opt12 / opt1) * 100) + '%');
                    $('#opt11 .percentage-bar').css('width', Math.round((opt11 / opt1) * 100) + '%');
                    $('#opt12 .percentage-bar').css('width', Math.round((opt12 / opt1) * 100) + '%');
                    $('#opt11').addClass('selected');
                    $('#opt11').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
        function sendScore12(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt11 .percentage').text(Math.round((opt11 / opt1) * 100) + '%');
                    $('#opt12 .percentage').text(Math.round((opt12 / opt1) * 100) + '%');
                    $('#opt11 .percentage-bar').css('width', Math.round((opt11 / opt1) * 100) + '%');
                    $('#opt12 .percentage-bar').css('width', Math.round((opt12 / opt1) * 100) + '%');
                    $('#opt12').addClass('selected');
                    $('#opt12').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
        function sendScore21(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt21 .percentage').text(Math.round((opt21 / opt2) * 100) + '%');
                    $('#opt22 .percentage').text(Math.round((opt22 / opt2) * 100) + '%');
                    $('#opt23 .percentage').text(Math.round((opt23 / opt2) * 100) + '%');
                    $('#opt21 .percentage-bar').css('width', Math.round((opt21 / opt2) * 100) + '%');
                    $('#opt22 .percentage-bar').css('width', Math.round((opt22 / opt2) * 100) + '%');
                    $('#opt23 .percentage-bar').css('width', Math.round((opt23 / opt2) * 100) + '%');
                    $('#opt21').addClass('selected');
                    $('#opt21').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
        function sendScore22(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt21 .percentage').text(Math.round((opt21 / opt2) * 100) + '%');
                    $('#opt22 .percentage').text(Math.round((opt22 / opt2) * 100) + '%');
                    $('#opt23 .percentage').text(Math.round((opt23 / opt2) * 100) + '%');
                    $('#opt21 .percentage-bar').css('width', Math.round((opt21 / opt2) * 100) + '%');
                    $('#opt22 .percentage-bar').css('width', Math.round((opt22 / opt2) * 100) + '%');
                    $('#opt23 .percentage-bar').css('width', Math.round((opt23 / opt2) * 100) + '%');
                    $('#opt22').addClass('selected');
                    $('#opt22').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
        function sendScore23(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt21 .percentage').text(Math.round((opt21 / opt2) * 100) + '%');
                    $('#opt22 .percentage').text(Math.round((opt22 / opt2) * 100) + '%');
                    $('#opt23 .percentage').text(Math.round((opt23 / opt2) * 100) + '%');
                    $('#opt21 .percentage-bar').css('width', Math.round((opt21 / opt2) * 100) + '%');
                    $('#opt22 .percentage-bar').css('width', Math.round((opt22 / opt2) * 100) + '%');
                    $('#opt23 .percentage-bar').css('width', Math.round((opt23 / opt2) * 100) + '%');
                    $('#opt23').addClass('selected');
                    $('#opt23').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
        function sendScore31(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt31 .percentage').text(Math.round((opt31 / opt3) * 100) + '%');
                    $('#opt32 .percentage').text(Math.round((opt32 / opt3) * 100) + '%');
                    $('#opt31 .percentage-bar').css('width', Math.round((opt31 / opt3) * 100) + '%');
                    $('#opt32 .percentage-bar').css('width', Math.round((opt32 / opt3) * 100) + '%');
                    $('#opt31').addClass('selected');
                    $('#opt31').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
        function sendScore32(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt31 .percentage').text(Math.round((opt31 / opt3) * 100) + '%');
                    $('#opt32 .percentage').text(Math.round((opt32 / opt3) * 100) + '%');
                    $('#opt31 .percentage-bar').css('width', Math.round((opt31 / opt3) * 100) + '%');
                    $('#opt32 .percentage-bar').css('width', Math.round((opt32 / opt3) * 100) + '%');
                    $('#opt32').addClass('selected');
                    $('#opt32').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
        function sendScore41(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt41 .percentage').text(Math.round((opt41 / opt4) * 100) + '%');
                    $('#opt42 .percentage').text(Math.round((opt42 / opt4) * 100) + '%');
                    $('#opt41 .percentage-bar').css('width', Math.round((opt41 / opt4) * 100) + '%');
                    $('#opt42 .percentage-bar').css('width', Math.round((opt42 / opt4) * 100) + '%');
                    $('#opt41').addClass('selected');
                    $('#opt41').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
        function sendScore42(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt41 .percentage').text(Math.round((opt41 / opt4) * 100) + '%');
                    $('#opt42 .percentage').text(Math.round((opt42 / opt4) * 100) + '%');
                    $('#opt41 .percentage-bar').css('width', Math.round((opt41 / opt4) * 100) + '%');
                    $('#opt42 .percentage-bar').css('width', Math.round((opt42 / opt4) * 100) + '%');
                    $('#opt42').addClass('selected');
                    $('#opt42').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
        function sendScore51(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt51 .percentage').text(Math.round((opt51 / opt5) * 100) + '%');
                    $('#opt52 .percentage').text(Math.round((opt52 / opt5) * 100) + '%');
                    $('#opt53 .percentage').text(Math.round((opt53 / opt5) * 100) + '%');
                    $('#opt54 .percentage').text(Math.round((opt54 / opt5) * 100) + '%');
                    $('#opt55 .percentage').text(Math.round((opt55 / opt5) * 100) + '%');
                    $('#opt51 .percentage-bar').css('width', Math.round((opt51 / opt5) * 100) + '%');
                    $('#opt52 .percentage-bar').css('width', Math.round((opt52 / opt5) * 100) + '%');
                    $('#opt53 .percentage-bar').css('width', Math.round((opt53 / opt5) * 100) + '%');
                    $('#opt54 .percentage-bar').css('width', Math.round((opt54 / opt5) * 100) + '%');
                    $('#opt55 .percentage-bar').css('width', Math.round((opt55 / opt5) * 100) + '%');
                    $('#opt51').addClass('selected');
                    $('#opt51').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
        function sendScore52(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt51 .percentage').text(Math.round((opt51 / opt5) * 100) + '%');
                    $('#opt52 .percentage').text(Math.round((opt52 / opt5) * 100) + '%');
                    $('#opt53 .percentage').text(Math.round((opt53 / opt5) * 100) + '%');
                    $('#opt54 .percentage').text(Math.round((opt54 / opt5) * 100) + '%');
                    $('#opt55 .percentage').text(Math.round((opt55 / opt5) * 100) + '%');
                    $('#opt51 .percentage-bar').css('width', Math.round((opt51 / opt5) * 100) + '%');
                    $('#opt52 .percentage-bar').css('width', Math.round((opt52 / opt5) * 100) + '%');
                    $('#opt53 .percentage-bar').css('width', Math.round((opt53 / opt5) * 100) + '%');
                    $('#opt54 .percentage-bar').css('width', Math.round((opt54 / opt5) * 100) + '%');
                    $('#opt55 .percentage-bar').css('width', Math.round((opt55 / opt5) * 100) + '%');
                    $('#opt52').addClass('selected');
                    $('#opt52').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
        function sendScore53(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt51 .percentage').text(Math.round((opt51 / opt5) * 100) + '%');
                    $('#opt52 .percentage').text(Math.round((opt52 / opt5) * 100) + '%');
                    $('#opt53 .percentage').text(Math.round((opt53 / opt5) * 100) + '%');
                    $('#opt54 .percentage').text(Math.round((opt54 / opt5) * 100) + '%');
                    $('#opt55 .percentage').text(Math.round((opt55 / opt5) * 100) + '%');
                    $('#opt51 .percentage-bar').css('width', Math.round((opt51 / opt5) * 100) + '%');
                    $('#opt52 .percentage-bar').css('width', Math.round((opt52 / opt5) * 100) + '%');
                    $('#opt53 .percentage-bar').css('width', Math.round((opt53 / opt5) * 100) + '%');
                    $('#opt54 .percentage-bar').css('width', Math.round((opt54 / opt5) * 100) + '%');
                    $('#opt55 .percentage-bar').css('width', Math.round((opt55 / opt5) * 100) + '%');
                    $('#opt53').addClass('selected');
                    $('#opt53').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
        function sendScore54(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt51 .percentage').text(Math.round((opt51 / opt5) * 100) + '%');
                    $('#opt52 .percentage').text(Math.round((opt52 / opt5) * 100) + '%');
                    $('#opt53 .percentage').text(Math.round((opt53 / opt5) * 100) + '%');
                    $('#opt54 .percentage').text(Math.round((opt54 / opt5) * 100) + '%');
                    $('#opt55 .percentage').text(Math.round((opt55 / opt5) * 100) + '%');
                    $('#opt51 .percentage-bar').css('width', Math.round((opt51 / opt5) * 100) + '%');
                    $('#opt52 .percentage-bar').css('width', Math.round((opt52 / opt5) * 100) + '%');
                    $('#opt53 .percentage-bar').css('width', Math.round((opt53 / opt5) * 100) + '%');
                    $('#opt54 .percentage-bar').css('width', Math.round((opt54 / opt5) * 100) + '%');
                    $('#opt55 .percentage-bar').css('width', Math.round((opt55 / opt5) * 100) + '%');
                    $('#opt54').addClass('selected');
                    $('#opt54').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
        function sendScore55(data) {
            $.ajax({
                type: "get",
                url: "https://script.google.com/macros/s/AKfycbwVHl5NiyyP8axfw1E3U8DpaqCA167EXg_enTfUgX4bs8GReW_1/exec",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    $('#opt51 .percentage').text(Math.round((opt51 / opt5) * 100) + '%');
                    $('#opt52 .percentage').text(Math.round((opt52 / opt5) * 100) + '%');
                    $('#opt53 .percentage').text(Math.round((opt53 / opt5) * 100) + '%');
                    $('#opt54 .percentage').text(Math.round((opt54 / opt5) * 100) + '%');
                    $('#opt55 .percentage').text(Math.round((opt55 / opt5) * 100) + '%');
                    $('#opt51 .percentage-bar').css('width', Math.round((opt51 / opt5) * 100) + '%');
                    $('#opt52 .percentage-bar').css('width', Math.round((opt52 / opt5) * 100) + '%');
                    $('#opt53 .percentage-bar').css('width', Math.round((opt53 / opt5) * 100) + '%');
                    $('#opt54 .percentage-bar').css('width', Math.round((opt54 / opt5) * 100) + '%');
                    $('#opt55 .percentage-bar').css('width', Math.round((opt55 / opt5) * 100) + '%');
                    $('#opt55').addClass('selected');
                    $('#opt55').parent().addClass('done');
                    $('.loading').fadeOut();
                }
            });
        }
    });
});
