document.addEventListener('keyup', function (event) {
  if (event.defaultPrevented) {
    return
  }

  const key = event.key || event.keyCode

  if (key === 'Enter' || key === 13) {
    alert('You pressed the Enter')
  }
})
