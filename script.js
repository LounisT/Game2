const naruto = document.getElementById("naruto");
const rock = document.getElementById("rock");
const score = document.getElementById("score");

function game() {
  document.getElementById("explication").style.display = "none";
function jump() {
  naruto.classList.add("jump-animation");
  setTimeout(() =>
      naruto.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!naruto.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  const narutoTop = parseInt(window.getComputedStyle(naruto)
    .getPropertyValue('top'));
  const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
  score.innerText++;

  if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = ''
  }

  if (rockLeft < 50 && rockLeft > 0 && narutoTop > 350) {
    score.innerText--;
    alert("Votre score est de : " + score.innerText + '\n si vous souhaitez recommencer appuyez sur OK ou bien Entrer de votre clavier');
    location.reload();
  }
}, 350);
}