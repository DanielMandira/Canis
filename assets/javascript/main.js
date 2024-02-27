// Importar Telas
function includeHTML(file, elementId) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(elementId).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}

includeHTML('views/cardStudio.html', 'cardStudio');
includeHTML('../../views/cardChacara.html', 'cardChacara');
includeHTML('../../views/contatosDesktop.html', 'contatosDesktop');
includeHTML('../../views/descChacaraDesktop.html', 'container-descricao-chacara');
includeHTML('../../views/descStudioDesktop.html', 'container-descricao-studio');

// Filtro Galeria
$(document).ready(function(){
    $(".filters .filter-button").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
        $(".gallery").fadeOut()
        setTimeout(function(){
            $(".gallery").fadeIn()
        },700)

        let value = $(this).attr("data-filter")

        setTimeout(function(){
            if(value === "*"){
                $(".gallery .filter").show("500")
            }
            else{
                $(".gallery .filter").not(value).hide("500")
                $(".gallery .filter").filter(value).show("500")
            }
        },350)
    })
})

// MODAL QRCode
const qrcodeButton = document.getElementById("qrcode-button");
const qrcodeModal = document.getElementById("qrcode-modal");
const closeQrcodeModal = document.getElementById("close-qrcode-modal");

qrcodeModal.style.display = "none"; // Oculta o modal inicialmente

qrcodeButton.addEventListener("click", () => {
  qrcodeModal.style.display = "flex";
});

closeQrcodeModal.addEventListener("click", () => {
  qrcodeModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === qrcodeModal) {
    qrcodeModal.style.display = "none";
  }
});

function modal() {
    qrcodeModal.style.display = "flex";
  };

//   Chave Pix
  function copiarTexto(texto) {
    var input = document.createElement('input');
    input.value = texto;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }
    
    const pixButton = document.getElementById("copiarPixButton");
    const confirmationModal = document.getElementById("confirmation-modal");
    const closeCofirmationModal = document.getElementById("close-confirmation-modal");
    
    confirmationModal.style.display = "none";
    
    
    // Criar e exibir o modal de confirmação
    pixButton.addEventListener("click", () => {
      console.log("teste")
      confirmationModal.style.display = "flex";
    });
  
  
    //Fechar modal
    closeCofirmationModal.addEventListener("click", () => {
      confirmationModal.style.display = "none";
    });
    
    window.addEventListener("click", (event) => {
      if (event.target === confirmationModal) {
        confirmationModal.style.display = "none";
      }
    });
  
  function modalPix() {
    confirmationModal.style.display = "flex";
  };

  // modal image
  var currentImageIndex = 0;
  var totalImages = document.getElementsByClassName('gallery-image').length;

  function openModal(imageSrc, index) {
    var modal = document.getElementById("modal-image");
    var modalImg = document.getElementById("modal-img");
    var downloadLink = document.getElementById("download-link");
    var modalCounter = document.getElementById("modal-counter");


    modal.style.display = "flex";
    modalImg.src = imageSrc;
    downloadLink.href = imageSrc;
    currentImageIndex = index;

    document.body.classList.add('body-lock-scroll');

    document.addEventListener('keydown', handleArrowKeys);

}

function closeModal() {
    var modal = document.getElementById("modal-image");
    modal.style.display = "none";
    document.body.classList.remove('body-lock-scroll');
    document.removeEventListener('keydown', handleArrowKeys);


}
function handleArrowKeys(event) {
  if (event.key === 'ArrowLeft') {
      changeImage(-1); // Mostrar imagem anterior
  } else if (event.key === 'ArrowRight') {
      changeImage(1); // Mostrar próxima imagem
  }
}

function changeImage(n) {
  currentImageIndex = (currentImageIndex + n + document.getElementsByClassName('gallery-image').length) % document.getElementsByClassName('gallery-image').length;
  var newImageSrc = document.getElementsByClassName('gallery-image')[currentImageIndex].src;
  document.getElementById('modal-img').src = newImageSrc;
  document.getElementById('download-link').href = newImageSrc;
      updateModalCounter();

}

function updateModalCounter() {
  var modalCounter = document.getElementById('modal-counter');
  modalCounter.textContent = (currentImageIndex + 1) + '/' + totalImages;
}
