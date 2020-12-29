function openTable(tableName) {
    var i;
    var x = document.getElementsByClassName("tables");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tableName).style.display = "block";
  }

  var slider = document.getElementById("myRange");
  var output = document.getElementById("number");
  output.innerHTML = slider.value;
  slider.oninput = function () {
    output.innerHTML = this.value;
  };

  var slider1 = document.getElementById("myRange1");
  var output1 = document.getElementById("demo");
  output1.innerHTML = slider1.value;
  slider1.oninput = function () {
    output1.innerHTML = this.value;
  };
  // let btn = document.querySelector('button');
  // let calculatorDiv = document.querySelector('div');

  // btn.addEventListenetr('click',() =>{
  //   if(div.style.display === 'none'){

  //     div.style.display ='block';
  //   }else {
  //     div.style.display ='none';
  //   }

  // })

  const amountInput = document.getElementById("myRange");
  const currencyInput = document.getElementById("currency");
  const periodInput = document.getElementById("myRange1");
  const compoundingInput = document.getElementById("compounding");
  const total = document.getElementById("total");

  const percentageMap = {
    azn: 10,
    euro: 12,
    usd: 6,
  };

  amountInput.addEventListener("change", calculateResultAndRender);
  currencyInput.addEventListener("change", calculateResultAndRender);
  periodInput.addEventListener("change", calculateResultAndRender);
  compoundingInput.addEventListener("change", calculateResultAndRender);

  function calculateResultAndRender() {
    console.log("One minute for Calculating..");
    const myRange = amountInput.value;
    const currency = currencyInput.value;
    const myRange1 = periodInput.value;
    const compounding = compoundingInput.value;

    const result = calculateResult(
      myRange,
      currency,
      myRange1,
      compounding
    );
    renderResult(result);
  }

  function calculateResult(myRange, currency, myRange1, compounding) {
    const percentage = percentageMap[currency];
    console.log("Percentage %d", percentage);
    const result = myRange + (myRange * percentage) / 100;
    return result;
  }

  function renderResult(result) {
    total.innerHTML = result + " AZN";
  }