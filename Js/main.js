let dayParent = document.querySelector(".day");
let monthParent = document.querySelector(".month");
let yearParent = document.querySelector(".year");
let dayInput = document.querySelector(".day input");
let monthInput = document.querySelector(".month input");
let yearInput = document.querySelector(".year input");
let submit = document.querySelector(".arrow img");
let dayResult = document.querySelector("span.days");
let monthResult = document.querySelector("span.months");
let yearResult = document.querySelector("span.years");

//problem

//problem

let tmpDate = new Date();
// console.log(hy.getFullYear())
submit.onclick = function () {
  if (yearInput.value > tmpDate.getFullYear() || yearInput.value < 0 ) {
    document.querySelector(".year .empty").style = "display: none"
    document.querySelector(".year .wrong").style = "display: block";
    dayResult.textContent = "--"
    monthResult.textContent = "--"
    yearResult.textContent = "--"
  }
  else if(yearInput.value === ''){
    document.querySelector(".year .empty").style = "display: block"
    document.querySelector(".year .wrong").style = "display: none";
    dayResult.textContent = "--"
    monthResult.textContent = "--"
    yearResult.textContent = "--"
  }
  else if (((monthInput.value == 1 || monthInput.value == 3 || monthInput.value == 5 || monthInput.value == 7 || monthInput.value == 8 || monthInput.value == 10 || monthInput == 12 ) && (dayInput.value > 31)) || ((monthInput.value == 4 || monthInput.value == 6 || monthInput.value == 9 || monthInput.value == 11) && dayInput.value > 30 ) ||((yearInput.value % 400 == 0) && (dayInput.value > 29) && (monthInput.value == 2)) || ((yearInput.value % 400 != 0) && dayInput.value > 28) && (monthInput.value == 2)) {
    document.querySelector(".month .empty").style = "display: none"
    document.querySelector(".month .wrong").style = "display: block";
    document.querySelector(".day .empty").style = "display: none"
    document.querySelector(".day .wrong").style = "display: block";
    dayResult.textContent = "--"
    monthResult.textContent = "--"
    yearResult.textContent = "--"
  }
  else if(monthInput.value > 12 || monthInput.value <= 0){
    document.querySelector(".month .empty").style = "display: none"
    document.querySelector(".month .wrong").style = "display: block";
    dayResult.textContent = "--"
    monthResult.textContent = "--"
    yearResult.textContent = "--"
  }
  else if(dayInput.value <= 0 ){
    document.querySelector(".day .empty").style = "display: none"
    document.querySelector(".day .wrong").style = "display: block";
    dayResult.textContent = "--"
    monthResult.textContent = "--"
    yearResult.textContent = "--"
  }

  else if(monthInput.value === ''){
    document.querySelector(".month .empty").style = "display: block"
    document.querySelector(".month .wrong").style = "display: none";
    dayResult.textContent = "--"
    monthResult.textContent = "--"
    yearResult.textContent = "--"
  }
  else if(dayInput.value === ''){
    document.querySelector(".day .empty").style = "display: block"
    document.querySelector(".day .wrong").style = "display: none";
    dayResult.textContent = "--"
    monthResult.textContent = "--"
    yearResult.textContent = "--"
  }
  else{
    document.querySelector(".day .empty").style = "display: none"
    document.querySelector(".day .wrong").style = "display: none";
    document.querySelector(".month .empty").style = "display: none"
    document.querySelector(".month .wrong").style = "display: none";
    document.querySelector(".year .empty").style = "display: none"
    document.querySelector(".year .wrong").style = "display: none";


    let presentDay = new Date();
    let birthDay = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`)
    let age = presentDay - birthDay; 
    yearResult.innerHTML = Math.trunc((age / 1000 / 60 / 60 / 24 / 365.25))
    monthResult.innerHTML = Math.trunc((((age / 1000 / 60 / 60 / 24 / 365.25) % (Math.trunc(age / 1000 / 60 / 60 / 24 / 365.25))) ) * 12)
    dayResult.innerHTML = Math.trunc((((age / 1000 / 60 / 60 / 24 / 30) % (Math.trunc(age / 1000 / 60 / 60 / 24 / 30))))*30)
  }
};
