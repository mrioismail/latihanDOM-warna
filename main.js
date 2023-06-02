// Soal 1 : saat tombol di klik akan berubah warna kesukaan dan di klik lagi kembali normal
const ubahWarna = document.getElementById('ubahWarna')
ubahWarna.onclick = function () {
   // menambahkan class yang tidak ada jadi ada dan menghapus class jika ada = toggle
   document.body.classList.toggle('warna')
}

// Soal 2 : membuat element/tag di js dan saat tombol di klik berubah warna random
const btnBaru = document.createElement('button')
const teksBaru = document.createTextNode('Acak Warna')
btnBaru.appendChild(teksBaru)
btnBaru.setAttribute('type', 'button')
const tangkapButton = document.getElementsByTagName('button')[0]
tangkapButton.after(btnBaru)

btnBaru.addEventListener('click', function () {
   const r = Math.round(Math.random() * 255 + 1)
   const g = Math.round(Math.random() * 255 + 1)
   const b = Math.round(Math.random() * 255 + 1)
   document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

// soal 3 : membuat 3 slider, slider 1 mengatur warna red, slider 2 mengatur warna green, slider 3 mengatur warna blue (menggabung komposisi warna di body)
const sliderMerah = document.querySelector('input[name=sliderMerah]')
const sliderHijau = document.querySelector('input[name=sliderHijau]')
const sliderBiru = document.querySelector('input[name=sliderBiru]')

sliderMerah.addEventListener('input', function () {
   const r = sliderMerah.value
   const g = sliderHijau.value
   const b = sliderBiru.value
   document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

sliderHijau.addEventListener('input', function () {
   const r = sliderMerah.value
   const g = sliderHijau.value
   const b = sliderBiru.value
   document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

sliderBiru.addEventListener('input', function () {
   const r = sliderMerah.value
   const g = sliderHijau.value
   const b = sliderBiru.value
   document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})

// soal 4 = setiap mouse bergerak warna selalu berubah-ubah
document.body.addEventListener('mousemove', function (event) {
   // posisi mouse sumbu x dan sumbu y
   // console.log(event.clientX)
   // console.log(event.clientY)
   // ukuran bowser
   // console.log(window.innerWidth)
   const xPos = Math.round((event.clientX / window.innerWidth) * 255)
   const yPos = Math.round((event.clientY / window.innerHeight) * 255)
   document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ', 100)'
})
