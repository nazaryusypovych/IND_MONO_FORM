
let transactionHistory = document.getElementsByClassName(`transaction-history`)[0];
let amountField = document.getElementById(`amount`);



let choiceIncrement = document.getElementById(`choice-increment`);
let choiceReduction = document.getElementById(`choice-reduction`);





let formMono = document.forms[`mono-form`];

let balance = 0;


formMono.onsubmit = function (ev){
    ev.preventDefault();

    //додати обмеження: ввдення нуля, введення відємного значення

    let numberSum = parseInt(this.sum.value);
    let transaction = document.createElement(`div`);
    let transactionSum = document.createElement(`div`);
    let transactionData = document.createElement(`div`);

    let now = new Date();
    let formattedDateTime = now.toLocaleString('uk-UA', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    transaction.append(transactionSum, transactionData);

    if (choiceIncrement.checked){
        balance = balance + numberSum;
        transactionSum.innerText = `+ ${numberSum} грн.`;
        transactionData.innerText = `${formattedDateTime}`;
        transaction.classList.add('increment-green')
    } else if (choiceReduction.checked){
        balance = balance - numberSum;
        transactionSum.innerText = `- ${numberSum} грн.`;
        transactionData.innerText = `${formattedDateTime}`;
        transaction.classList.add('reduction-red')
    }


    amountField.innerText = `Баланс: ${balance} грн.`;

    transactionHistory.appendChild(transaction);

    //Стрирати значення у полі, піся вводу
}

