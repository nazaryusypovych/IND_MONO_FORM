
let transactionHistory = document.getElementsByClassName(`transaction-history`)[0];


let formMono = document.forms[`mono-form`];

let balance = 0; // Загальний баланс

formMono.onsubmit = function (ev){
    ev.preventDefault();

    // Зробити перевірку на числове значення та відємне


    // Як доступитися до вибраного знаяення радіо бокса?
    if (choice-action === `increment`){
        balance = balance + this.sum.value;
    } else if (choice-action === `increment`){
        balance = balance - this.sum.value;
    }
}