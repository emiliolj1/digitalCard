document.addEventListener("DOMContentLoaded", function() {
    miFuncion();
    myVideo.play();
  });
  
  function miFuncion() {
    Swal.fire({
        width:`15rem`,
        html: `
                <p class="whereTitle fs-2 py-2">Bienvenidos a la Invitacion de</p>
                <p class="whereTitle fs-2 fw-bold m-0 p-0">Antonella</p>`,
        customClass: { confirmButton : `buttonWhatsapp`},
        confirmButtonText:`Ingresar!`,
    }
    )
  }
  
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Dec 16, 2023 21:30:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('dias').innerText = Math.floor(distance / (day)),
        document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);

    }, second)
      
// const boton = document.getElementById("musica");
// const audio = document.getElementById("audio");
// const icono = document.getElementById("icono");
// const sound = false;
// boton.addEventListener("click",() => {
//     if(!sound){
//         audio.play();
//         sound = true;
//     } else {
//         audio.pause();
//         icono.innerHTML=`<i class="bi bi-volume-mute"></i>`
//         sound = false;
//     }
// })

const ppbutton = document.getElementById("vidbutton");
ppbutton.addEventListener("click", playPause);
myVideo = document.getElementById("myvid");
//myVideo.play();
function playPause() { 
    if (myVideo.paused) {
        myVideo.play();
        ppbutton.innerHTML = `<i id="" class="bi bi-volume-up-fill fs-"></i>`;
        }
    else  {
        myVideo.pause(); 
        ppbutton.innerHTML = `<i class="bi bi-volume-mute"></i>`;
        }
}