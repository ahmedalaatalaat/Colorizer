function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function(e) {
            $('.image-upload-wrap').hide();
            $('.file-upload-btn').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-input').val('');
    $('.file-upload-content').hide();
    $('.output-image-container').hide();
    $('.file-colorize-btn').html('Colorize Image');
    $('.file-colorize-btn').show();
    $('.image-upload-wrap').show();
    $('.file-upload-btn').show();
}
$('.image-upload-wrap').bind('dragover', function() {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function() {
    $('.image-upload-wrap').removeClass('image-dropping');
});


$('#image-form').submit(function(e) {
    e.preventDefault();
    $('.file-colorize-btn').html('<i class="fa fa-circle-o-notch fa-spin"></i> Colorizing');
    $('.remove-image').hide();

    $.ajax({
        method: 'POST',
        url: window.location.href,
        data: new FormData(this),
        processData: false,
        contentType: false,
        success: function(data) {
            $('.file-colorize-btn').html('Colorize Image').hide();
            $('.output-image').attr('src', data.colorImageURL);
            $('.output-image-container').show();
        }
    });
});
