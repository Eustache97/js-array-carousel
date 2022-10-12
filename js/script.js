//andiamo a generare le immagini dello slider con un ciclo for
const sliderImages = ["img/01.jpg", "img/02.jpg","img/03.jpg", "img/04.jpg", "img/05.jpg"];
const sliderContainer = document.querySelector(".slider-container");
console.log(sliderContainer);
for(let i = 0; i < sliderImages.length; i++){
    const element = `<div class="slider-item hidden">
                         <img src="${sliderImages[i]}" alt="">
                     </div>`;
                     console.log(element);
    sliderContainer.innerHTML += element;
}
//settiamo lo stato di partenza dell'active
const sliderItem = document.getElementsByClassName("slider-item");
console.log(sliderItem);
let sliderPosition = 0;
sliderItem[sliderPosition].classList.remove("hidden");
sliderItem[sliderPosition].classList.add("active");
const nextBtn = document.querySelector(".next");

//prendiamo dal DOM l'elemento slider-wrapper
const sliderWrapper = document.querySelector(".slider-wrapper");
console.log(sliderWrapper);

//prendiamo dal DOM l'elemento wrapper e gli aggiungia la classe display flex
const wrapper = document.querySelector(".wrapper");
console.log(wrapper);
wrapper.classList.add("d-flex");

//settiamo lo stato di partenza dell'indice del nostro array sliderImages
let imagePosition = 0;
//Con template litteral andiamo a definire l'elemento che sarà inserito in slider-wrapper
let element = `<img class="cover" src="${sliderImages[imagePosition]}" alt="">`;
sliderWrapper.innerHTML = element;
console.log(sliderWrapper.innerHTML);

//Al click del bottone next
nextBtn.addEventListener("click", function(){

    //Se le posizioni attuali sono minori della lunghezza dei rispettivi array
    if(sliderPosition < sliderItem.length && imagePosition < sliderImages.length ){

        //rimuoviamo la classe active aggiungiamo hidden
        sliderItem[sliderPosition].classList.remove("active");
        sliderItem[sliderPosition].classList.add("hidden");
        
        //incrementiamo di posizione
        sliderPosition++;
        imagePosition++;

        // se le posizioni attuali sono uguali alle lunghezze dei rispettivi array li riinizializziamo a 0
        if(sliderPosition == sliderItem.length && imagePosition == sliderImages.length){
            sliderPosition = 0;
            imagePosition = 0;
        }

         //rimuoviamo la classe hidden aggiungiamo active nel nuovo attuale posizione
        sliderItem[sliderPosition].classList.remove("hidden");
        sliderItem[sliderPosition].classList.add("active");

        //andiamo ad inserire nel slider-wrapper l'elemento con l'indice corrente
        let element = `<img class="cover" src="${sliderImages[imagePosition]}" alt="">`;
        sliderWrapper.innerHTML = element;
        
    }
})
//Al click del bottone prev
const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener("click", function(){

    //Se le posizioni attuali sono maggiori uguali a 0
    if(sliderPosition >= 0 && imagePosition >= 0 ){

        //rimuoviamo la classe active e aggiungiamo hidden
        sliderItem[sliderPosition].classList.remove("active");
        sliderItem[sliderPosition].classList.add("hidden");

        // se le posizioni attuali sono uguali a 0  li riinizializziamo alla lunghezza dei rispettivi array
        if(sliderPosition == 0 && imagePosition == 0){
            sliderPosition = sliderItem.length ;
            imagePosition = sliderImages.length;
        }
        //decrementiamo di posizione
        sliderPosition--;
        imagePosition--;

        //rimuoviamo la classe hidden aggiungiamo active nel nuovo attuale posizione
        sliderItem[sliderPosition].classList.remove("hidden");
        sliderItem[sliderPosition].classList.add("active");
        
        //andiamo ad inserire nel slider-wrapper l'elemento con l'indice corrente
        let element = `<img class="cover" src="${sliderImages[imagePosition]}" alt="">`;
        sliderWrapper.innerHTML = element;
        
        
    }
})