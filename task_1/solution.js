function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    let message = productName + ' ' + 'за' + ' ' + productPrice + ' ' + 'теперь в корзине!';
    console.log(message)
    return message;
    function newFunction() {
        return message;
    }
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;
    let newValue = oldValue + 1;
        return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    let newSum = oldSum + difference;
    let newSumText = `${newSum} ₽`;
            return newSumText;
}

