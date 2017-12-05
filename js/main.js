document.querySelectorAll('.thumb').forEach(function(img) {
  img.addEventListener('click', function() {
    console.log(img.getAttribute('src'));
  })
})
