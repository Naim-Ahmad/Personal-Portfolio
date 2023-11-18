
let isStartCount = false

function progressAnimation() {
    const interval = 1000
    const progressBar = document.querySelectorAll('.progress-bar')
    const displays = document.querySelectorAll('.display')
    // console.log(progressBar[0].offsetTop)

    let scrollPos = window.scrollY
  
    progressBar.forEach((prog) => {
        // console.log(scrollPos + 675 > prog.offsetTop)
      if (scrollPos + 675 > prog.offsetTop) {
        
            const value = prog.getAttribute('aria-valuenow')
           
            prog.style.width = `${value}%`
            prog.style.opacity = '1'
          
            if (!isStartCount)
            displays.forEach((display) => {
            let startValue = 1
            const endValue = parseInt(display.getAttribute('data-counter'))
            const duration = Math.floor(interval / endValue)
            const counter = setInterval(() => {
                startValue += 1
                display.textContent = startValue + '%'

                if (startValue === endValue) {
                clearInterval(counter)
                isStartCount = true
                }
            }, duration)
            })
            } else {
                // hideProgress(prog);
            }
    })
  }

  export default progressAnimation