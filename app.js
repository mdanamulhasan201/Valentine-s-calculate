document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
    const quantity = getInputValue('kitKat-quantity');
    const kitKatCost = quantity * 200;
    setInnerText('chocolate', kitKatCost);
    totalCount()

})
document.getElementById('rose-buy-btn').addEventListener('click', function () {
    const quantity = getInputValue('rose-quantity');
    const roseCost = quantity * 50;
    setInnerText('rose', roseCost)
    totalCount()
})

document.getElementById('diary-buy-btn').addEventListener('click', function () {
    const quantity = getInputValue('diary-quantity');
    const diaryCost = quantity * 100;
    setInnerText('diary', diaryCost)
    totalCount()
})

function getInputValue(event) {
    const value = document.getElementById(event).value;
    return parseInt(value);
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;


}

function totalCount(event) {
    const chocolate = document.getElementById('chocolate').innerText;
    const rose = document.getElementById('rose').innerText;
    const diary = document.getElementById('diary').innerText;
    const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
    

    setInnerText('total', totalSum);
}


document.getElementById('promoApplyBtn').addEventListener('click', function(){
    const promoCode = getInputValue('promo-code');
    if(promoCode == 101){
        const total= document.getElementById('total').innerText;
        const sum=total- parseInt(total) * 0.1;
        setInnerText('all-total',sum)
       
    }
    else{
        alert('worg promo code try again with valid code')
    }
   

})