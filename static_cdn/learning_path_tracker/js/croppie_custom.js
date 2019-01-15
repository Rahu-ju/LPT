// Croppie custom js file here is the docs
// https://github.com/Foliotek/Croppie/blob/master/demo/demo.js


var $uploadCrop;

function readFile(input) {
  if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
      $('#upload-demo').addClass('ready');
            $uploadCrop.croppie('bind', {
              url: e.target.result
            }).then(function(){
              console.log('jQuery bind complete');
            });

          }

          reader.readAsDataURL(input.files[0]);
      }
      else {
        swal("Sorry - you're browser doesn't support the FileReader API");
    }
}

$uploadCrop = $('#upload-demo').croppie({
  viewport: {
    width: 150,
    height: 150,
    type: 'circle'
  },
  enableExif: true,
  boundary: {
      width: 140,
      height: 140,
  }
});

$('#id_image').on('change', function () { readFile(this); });
$('.upload-result').on('click', function (ev) {
  $uploadCrop.croppie('result', {
    type: 'base64',
    size: 'viewport'
  }).then(function (src) {
    console.log(src);
    // bind the image data to the hidden input id image-data
    $('#image-data').val(src);
    $('#form').submit();
  });
});
