const rightClick = document.querySelector('.icon-4-2')
const leftClick = document.querySelector('.icon-4-1')
const box = document.querySelector('.box-slide')
const containers = document.querySelectorAll('.container')

let i = 0

function width1440() {
    i++
    if(i > containers.length - 1) {
        i = i - containers.length
        box.style.transform = `translateX(${-1440 * i}px`
    } else {
            box.style.transition = '400ms'
            box.style.transform = `translateX(${-1440 * i}px`     
    }
}

function width1000() {
    i++
    if(i > containers.length - 1) {
        i = i - containers.length
        box.style.transform = `translateX(${-1000 * i}px`
    } else {
            box.style.transition = '400ms'
            box.style.transform = `translateX(${-1000 * i}px`     
    }
}

function width375() {
    i++
    if(i > containers.length - 1) {
        i = i - containers.length
        box.style.transform = `translateX(${-375 * i}px`
    } else {
            box.style.transition = '400ms'
            box.style.transform = `translateX(${-375 * i}px`     
    }
}

function rightHandleClick() {
    if(box.clientWidth > 1439) {
        width1440()
    } else if(box.clientWidth > 375 && box.clientWidth < 1001) {
        width1000()
    } else {
        width375()
    }
}

function leftHandleClick() {
    if(box.clientWidth > 1439) {
        width1440()
    } else if(box.clientWidth > 375 && box.clientWidth < 1001) {
        width1000()
    } else {
        width375()
    }
}

rightClick.addEventListener('click', rightHandleClick)
leftClick.addEventListener('click', leftHandleClick)
