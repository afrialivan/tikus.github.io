const tanah = document.querySelectorAll('.tanah')
const tikus = document.querySelectorAll('.tikus')
const papanskor = document.querySelector('.papan-skor')


let tanahsebelumnya
let selesai
let skor

function randomTanah(tanah){
  const t = Math.floor(Math.random() * tanah.length)
  const tRandom = tanah[t]

  if(tRandom == tanahsebelumnya){
    randomTanah()
  }

  tanahsebelumnya = tRandom

  return tRandom
}

function randomWaktu(min, max){
  return Math.round(Math.random() * (max - min) + min)
}

function munculTikus()
{
  const tRandom = randomTanah(tanah)
  const wRandom = randomWaktu(300,500)

  tRandom.classList.add('muncul')
  
  
  setTimeout(() => {
    tRandom.classList.remove('muncul')
    if(!selesai){
      munculTikus()
    }
  }, wRandom);
}

function mulai(){
  selesai = false
  skor = 0
  papanskor.textContent = skor

  munculTikus()
  setTimeout(() => {
    selesai = true
  }, 20000);
}

function pukul(){
 skor++
 papanskor.textContent = skor
 this.parentNode.classList.remove('muncul')
 munculTikus()
}

tikus.forEach(t => {
  t.addEventListener('click', pukul)
});