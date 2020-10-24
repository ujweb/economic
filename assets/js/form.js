$(document).ready(function () {
    $('#sendForm').click(function (e) {
        $('.loading').fadeIn();

        var status = true;
        var name = $('#name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var law = $('#law').val();

        // 擋住不填資料邏輯
        if (name == '') {
            alert('請填寫姓名');
            status = false;
        }
        if (phone == '') {
            alert('請填寫手機');
            status = false;
        }
        if (email == '') {
            alert('請填寫Email');
            status = false;
        }
        if (!$('#law').is(":checked")) {
            alert('請閱讀並同意條款');
            status = false;
        }
        // 如果必填欄位都過了 才會到這邊
        if (status) {
            // 增加日期資料
            var currentdate = new Date();
            var time = currentdate.getFullYear() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getDate() + "  "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
            // 打包 要的資料
            var data = {
                'name': name,
                'phone': phone,
                'email': email,
                'time': time,
            }
            // 呼叫 send ajax function
            send(data);
        }
    });
});
function send(data) {
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbwCv1v51ymC7IPeDDaOOn_vWKFBY7nPGgVHe1LmgY0XENXD9_Oq/exec",
        data: data,
        dataType: "JSON",
        success: function (response) {
            console.log(response);
            alert('感謝您的填寫');
            $('body').removeClass('modal-open');
            $('.loading').fadeOut();
            $('.modal').fadeOut().removeClass('show');

            $('#name').val('');
            $('#phone').val('');
            $('#email').val('');
            $('#law').prop("checked", false);
        }
    });
}
