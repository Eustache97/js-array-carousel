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
nextBtn.addEventListener("click", function(){
    //Se la posizione attuale è minore della lunghezza di sliderItem
    if(sliderPosition < sliderItem.length ){
        //rimuoviamo la classe active aggiungiamo hidden
        sliderItem[sliderPosition].classList.remove("active");
        sliderItem[sliderPosition].classList.add("hidden");
        
        //incrementiamo di posizione
        sliderPosition++;

        // se la posizione attuale è uguale alla lunghezza di sliderItem lo riinizializziamo a 0
        if(sliderPosition == sliderItem.length){
            sliderPosition = 0;
        }

         //rimuoviamo la classe hidden aggiungiamo active nel nuovo attuale posizione
        sliderItem[sliderPosition].classList.remove("hidden");
        sliderItem[sliderPosition].classList.add("active");
        
    }
})
const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener("click", function(){
    //Se la posizione attuale è maggiore uguale di 0
    if(sliderPosition >= 0 ){
        //rimuoviamo la classe active e aggiungiamo hidden
        sliderItem[sliderPosition].classList.remove("active");
        sliderItem[sliderPosition].classList.add("hidden");

        // se la posizione attuale è uguale a 0  lo riinizializziamo alla lunghezza di sliderItem
        if(sliderPosition == 0){
            sliderPosition = sliderItem.length ;
        }
        //decrementiamo di posizione
        sliderPosition--;

        ////rimuoviamo la classe hidden aggiungiamo active nel nuovo attuale posizione
        sliderItem[sliderPosition].classList.remove("hidden");
        sliderItem[sliderPosition].classList.add("active");
        
        
    }
})