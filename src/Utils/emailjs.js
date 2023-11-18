(function () {
    emailjs.init('M16bWlzMeuACVCees')
  })()
  
  contact_form.addEventListener('submit', function (event) {
    event.preventDefault()
    const content = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    }
    emailjs.send('service_qvi04wg', 'template_lx9aa5s', content).then(
      function () {
        alert(
          `Hey ${
            document.getElementById('name').value
          }! You have successfully Sent Messages.`
        )
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
  })
