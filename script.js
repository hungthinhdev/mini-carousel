const imgFeature = document.querySelector('.img-feature')
const listImg = document.querySelectorAll('.list-img img')
const prevBtn = document.querySelector('.control.prev')
const nextBtn = document.querySelector('.control.next')

let currentIndex = 0

function update(currentIndex) {
  document.querySelectorAll('.list-img div').forEach((ele, index) => {
    if(index !== currentIndex) {
      ele.classList.remove('active')
    } else if(!ele.classList.contains('active')) {
      ele.classList.add('active')
    }
  })
  imgFeature.setAttribute('src', listImg[currentIndex].getAttribute('src'))
}

function updatePrevImgFeature() {
  if(currentIndex === 0) {
    currentIndex = listImg.length - 1
  } else {
    currentIndex--
  }

  imgFeature.style.animation = ''
  setTimeout(() => {
    update(currentIndex)
    imgFeature.style.animation = 'slide-to-left 0.7s ease-in-out forwards'
  }, 250)
}

function updateNextImgFeature() {
  if(currentIndex === listImg.length - 1) {
    currentIndex = 0
  } else {
    currentIndex++
  }
  imgFeature.style.animation = ''
  setTimeout(() => {
    update(currentIndex)
    imgFeature.style.animation = 'slide-to-right 0.7s ease-in-out forwards'
  }, 250)
}

listImg.forEach((img, index) => {
  img.addEventListener('click', function(e) {
    currentIndex = index
    imgFeature.style.opacity = 0
    setTimeout(() => {
      update(currentIndex)
      imgFeature.style.opacity = 1
    }, 250);
  })
})

prevBtn.addEventListener('click', updatePrevImgFeature)

nextBtn.addEventListener('click', updateNextImgFeature)