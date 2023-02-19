window.onload = function () {
  console.log('onload');
  var images = document.querySelectorAll('img')
  images.forEach(function (img) {
    img.addEventListener('click', function () {
      window.openImageView(img)
    })
  })
}