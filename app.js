// query selectors

let myCheckbox = document.querySelector(".switch input"),

  duration =document.querySelector(".month"),
  price = document.querySelector(" .price .pricefix"),
  switcher = document.querySelector(" .switch"),
  range = document.querySelector(" .myrange");


  //create price on switch

  switcher.onclick =function(){

    if(myCheckbox.checked==true){

        let priceInt= parsenInt(price.textContent);
        price.textContent = '${(priceInt - (priceInt * .25)) *12}';

        duration.textContent = '/year';
    }else{


        duration.textContent='/month';
    }
}
