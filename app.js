function focusAndBlur (id){
    document.getElementById(id).addEventListener('focus',function(){
        document.body.style.backgroundColor ='blue'
    })
    document.getElementById(id).addEventListener('blur',function(){
        document.body.style.backgroundColor ='maroon'
    })
}
focusAndBlur('btn-plus-1')
focusAndBlur('btn-plus-2')
// buy button
document.getElementById('check-out').addEventListener('click',function(){
    const buy= confirm('are you agree buy this item ?');
    if(buy){
        const items = document.querySelectorAll('.item')
        for (const item of items){
        console.log(items)
        item.style.backgroundColor='red'
        }
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
    }
})


// document.getElementById('btn-plus-1').addEventListener('click',function(){
//     const inputFrield = document.getElementById('input-1');
//     let inputFrieldNumber = parseInt(inputFrield.value);
//     inputFrieldNumber = inputFrieldNumber + 1;
//     inputFrield.value = inputFrieldNumber ;
    
//     // update phone price
//     const phonePrice = document.getElementById('phone-price');
//     const phonePriceInnerText = phonePrice.innerText;
//     const phonePriceNumber = parseInt(phonePriceInnerText);
//     const phonePriceTotal = phonePrice.innerText = inputFrieldNumber * 1218;
    
//     // case price
//     const casePrice =document.getElementById('case-price');
//     const casePriceText = casePrice.innerText;
//     const constPriceNumber = parseInt(casePriceText);
//     const casePriceTotal = casePrice.innerText =  constPriceNumber;
//     console.log(casePriceTotal)
    
    
    
//     // subtittle 
//     const subtittle = document.getElementById('subtittle');
//     const subtittleInnerText = subtittle.innerText;
//     const subtittleNumber = parseInt(subtittleInnerText);
//     const totalSubtittle = subtittle.innerText =  phonePriceTotal + casePriceTotal;
    
//     // tax 
//     const tax = document.getElementById('tax');
//     const taxinnerText = tax.innerText;
//     const taxNumber = parseInt(taxinnerText);
//     const totalTax = tax.innerText = totalSubtittle * 5 /100;
    
    
//     // total 
//     const total = document.getElementById('total');
//     const totalInnerText = total.innerText;
//     const totalNumber = parseInt(totalInnerText);
//     const totalPrice = total.innerText = totalSubtittle + totalTax;
    
// })


// // minus btn
// document.getElementById('btn-minus-1').addEventListener('click',function(){
//     const inputFrield = document.getElementById('input-1');
//     let inputFrieldValue = inputFrield.value;
//     let inputFrieldNumber = parseInt(inputFrieldValue)
    
    
//     if(inputFrieldNumber>0){
//         inputFrieldNumber=inputFrieldNumber-1;
//         inputFrield.value = inputFrieldNumber;
//     }
//     // phone price dicrment 
//     const phonePrice = document.getElementById('phone-price');
//     const phonePriceInnerText = phonePrice.innerText;
//     const phonePriceNumber = parseInt(phonePriceInnerText);
//     const phonePriceTotal = inputFrieldNumber * 1218;
//     phonePrice.innerText = phonePriceTotal
    
//     //case price
//     const casePrice = document.getElementById('case-price')
//     const casePriceInnerText = casePrice.innerText;
//     const casePriceNumber = parseInt(casePriceInnerText);
//     const casePriceTotal = casePrice.innerText = casePriceNumber;
    
//     // subtittle 
//     const subtittle = document.getElementById('subtittle');
//     // const subtittleInntext = subtittle.innerText;
//     const totalSubtittle = subtittle.innerText = phonePriceTotal + casePriceTotal;
    
//     // tax 
//     const tax = document.getElementById('tax');
//     const totalTax = tax.innerText = totalSubtittle * 5 /100;
    
//     // total 
//     const total = document.getElementById('total');
//     const totalPrice = total.innerText = totalTax + totalSubtittle;
// })



// // case btn
// document.getElementById('btn-plus-2').addEventListener('click',function(){
//     const inputFrield = document.getElementById('input-2');
//     const inputFrieldText = inputFrield.value;
//     let inputFrieldNumber = parseInt(inputFrieldText);
//     inputFrieldNumber = inputFrieldNumber + 1;
//     inputFrield.value = inputFrieldNumber;
    
    
//     // update case price;
//     const casePrice = document.getElementById('case-price');
//     const casePriceInnerText = casePrice.innerText;
//     const casePriceNumber = parseInt(casePriceInnerText);
//     let totalcasePrice = casePrice.innerText = inputFrieldNumber * 52;
    
//     // phonePrice 
//     const phonePrice = document.getElementById('phone-price');
//     const phonePriceInnerText = phonePrice.innerText;
//     const phonePriceNumber = parseInt(phonePriceInnerText);
//     const phonePriceTotal = phonePrice.innerText = phonePriceNumber;
    
//     // subtittle 
//     const subtittle = document.getElementById('subtittle');
//     let totalSubtittle = subtittle.innerText = totalcasePrice + phonePriceTotal;
    
//     // tax
//     const tax = document.getElementById('tax')
//     const totalTax = tax.innerText = totalSubtittle * 5 /100;
    
//     // total 
//     const total = document.getElementById('total');
//     const totalPrice =total.innerText = totalTax + totalSubtittle;
    
//     // function subtittleTaxTotal (subtittles,taxs,totals){
//     //     subtittles= totalSubtittle;
//     //     taxs = totalTax;
//     //     totals = totalPrice;
//     //     return `${subtittles} ${taxs} ${totals}`
//     // }
    
// })

// // case btn minus
// document.getElementById('btn-minus-2').addEventListener('click',function(){
//     const inputFrield = document.getElementById('input-2');
//     let  inputFrieldNumber = parseInt(inputFrield.value);
    
//     if(inputFrieldNumber >0 ){
//         inputFrieldNumber -= 1;
//         inputFrield.value = inputFrieldNumber;
//     }
    
//     // case price 
//     const casePrice = document.getElementById('case-price');
//     const casePriceInnerText = casePrice.innerText;
//     const casePriceNumber = parseInt(casePriceInnerText);
//     casePrice.innerText = inputFrieldNumber * 52;
    
//     // phonePrice 
//     const phonePrice = document.getElementById('phone-price');
//     const phonePriceInnerText = phonePrice.innerText;
//     const phonePriceNumber = parseInt(phonePriceInnerText);
//     const phonePriceTotal = phonePrice.innerText = phonePriceNumber;
    
    
//     // subtittle 
//     const subtittle = document.getElementById('subtittle');
//     const totalSubtittle = subtittle.innerText = inputFrieldNumber * 52 + phonePriceTotal;
    
//     // tax
//     const tax = document.getElementById('tax');
//     const totalTax = tax.innerText = totalSubtittle * 5 /100;
    
//     //total 
//     const total = document.getElementById('total');
//     const totalPrice = total.innerText = totalSubtittle + totalTax;
// })





// increment and decriment input
// function incrementOrDecriment (id,isIncrement) {
//     const  inputFrield = document.getElementById(id)
//     const inputFrieldValue = inputFrield.value;
//     let inputFrieldNumber = parseInt(inputFrieldValue);

//     if(isIncrement){
//         inputFrieldNumber = inputFrieldNumber + 1;
//         inputFrield.value = inputFrieldNumber;
//         return inputFrieldNumber;
//     }
//     else if (inputFrieldNumber >0 ) {
//         inputFrieldNumber = inputFrieldNumber - 1;
//         inputFrield.value = inputFrieldNumber;
//         return inputFrieldNumber;
//     }
    

// }


// function phonePlusMinus (id,idIncreOrDecri,trueOrFalse,displayId,isPhone){
//     const phonePrice = document.getElementById(id).addEventListener('click',function(){
//         // incrementOrDecriment (idIncreOrDecri,trueOrFalse);
//         const man=incrementOrDecriment (idIncreOrDecri,trueOrFalse);;
//         console.log(man)
        
//         const display = document.getElementById(displayId);
//         const displayInnerText = display.innerText;
//         const displayNumber = parseInt(displayInnerText);
        
//     if(isPhone){
//            let displayTotalPhone = display.innerText = man * 1218;
//     }
    
//     else{
//         let displayTotalCase = display.innerText = man * 52;
//     }
    
//         // subtittle
//         const subtittle = document.getElementById('subtittle');
//         const subtittleInnerText = subtittle.innerText;
//         const subtittleNumber = parseInt(subtittleInnerText);
//         let subtittleTotal = subtittle.innerText = displayNumber
//         console.log(displayNumber)    
//     })
// }
// phonePlusMinus('btn-plus-1','input-1',true,'phone-price',true)
// phonePlusMinus('btn-minus-1','input-1',false,'phone-price',true)
// phonePlusMinus('btn-plus-2','input-2',true,'case-price',false)
// phonePlusMinus('btn-minus-2','input-2',false,'case-price',false)



// document.getElementById('btn-plus-1').addEventListener('click',function(){
//     incrementOrDecriment('input-1',true)

// })



// function updatePhoneAndCase (idInput,displayId,price,isIncrement){
//     const inputFrield = document.getElementById(idInput)
//     const inputValue = inputFrield.value;
//     let inputNumber = parseInt(inputValue);
    
//     if (isIncrement){
//         inputNumber = inputNumber +1;
//         inputFrield.value = inputNumber;
//     }
//     else if (inputNumber > 0) {
//         inputNumber = inputNumber - 1;
//         inputFrield.value = inputNumber;
//     }
    
//     // display
//     document.getElementById(displayId).innerText = inputNumber*price
    
//     calculate()
// }

// function getInput (inputId) {
//     const input = document.getElementById(inputId);
//     const inputNumbers = parseInt(input.value)
//     return inputNumbers
// }
// function calculate (){
//     const phoneTotal = getInput('input-1') * 1258;
//     const caseTotal = getInput('input-2') * 52;
//     const subtotal = phoneTotal + caseTotal;
//     const tax = subtotal * 5 /100;
//     // subtotal
//     document.getElementById('subtittle').innerText = subtotal;
//     //tax
//     document.getElementById('tax').innerText = tax;
//     // total
//     document.getElementById('total').innerText = subtotal + tax
// }

// // phone plus btn
// document.getElementById('btn-plus-1').addEventListener('click',function(){
//     updatePhoneAndCase('input-1','phone-price',1258,true)
// })
// // phone minus btn
// document.getElementById('btn-minus-1').addEventListener('click',function(){
//     updatePhoneAndCase('input-1','phone-price',1258,false)
// })
// // case phus btn
// document.getElementById('btn-plus-2').addEventListener('click',function(){
//     updatePhoneAndCase('input-2','case-price',52,true)
// })
// // case minus btn
// document.getElementById('btn-minus-2').addEventListener('click',function(){
//     updatePhoneAndCase('input-2','case-price',52,false)
// })


function updatePhoneCase (inputId,displayId,price,isIncrement) {
  const inputFrield = document.getElementById(inputId);
  const inputvalue = inputFrield.value;
  let inputNumber = parseInt(inputvalue);
 
  if(isIncrement){
     inputNumber =inputFrield.value = inputNumber + 1;
  }
  else if (inputNumber > 0){
    inputNumber =inputFrield.value = inputNumber - 1;
  }
  calculate()
  // display 
  const displays = document.getElementById(displayId).innerText = price * inputNumber;
  
}

function getInputValue (inputId) {
    const input = document.getElementById(inputId);
    const inputNumber = parseInt(input.value)
    return inputNumber;
}

function calculate () {
    const inputPhone = getInputValue('input-1')
    const input1Display = inputPhone * 1258 ;
    
    const inputCase = getInputValue('input-2')
    const input2Display = inputCase * 52;
    
    const subtotal = document.getElementById('subtittle').innerText = input1Display + input2Display;
    const tax = document.getElementById('tax').innerText = subtotal * 5 /100;
    const total = document.getElementById('total').innerText = subtotal + tax;
}



document.getElementById('btn-plus-1').addEventListener('click',function(){
     updatePhoneCase('input-1','phone-price',1258,true)
})
document.getElementById('btn-minus-1').addEventListener('click',function(){
    updatePhoneCase('input-1','phone-price',1258,false)
})
document.getElementById('btn-plus-2').addEventListener('click',function(){
    updatePhoneCase('input-2','case-price',52,true)
})
document.getElementById('btn-minus-2').addEventListener('click',function(){
   updatePhoneCase('input-2','case-price',52,false)
})