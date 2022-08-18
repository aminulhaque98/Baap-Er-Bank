// step-1:add event listener to the withdraw button -----

const withdrawButtonHandler = document.getElementById('btn-Withdraw').addEventListener('click', function () {
    // step-2:get the withdraw amount form the withdraw input field 
    // step-2.1: for input field use .value to the value the input field 
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7:clear the withdraw field -------
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid Amount');
        return;
    }

    // step-3:get the current withdraw total 
    // step-3.1: for non-input (element other than input textarea)use innerText to get the text 
    const totalWithdrawElement = document.getElementById('Withdrow-Total');
    const previousWithdrawTotalString = totalWithdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    // // step-5 get balanec currant total -----------
    const totalBalanceElement = document.getElementById('Total-balance');
    const previousBalanceTotalString = totalBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('please valid deposit');
        return;
    }

    // step-4:add numbers set the total withdraw -----------
    const currentTotal = previousWithdrawTotal + newWithdrawAmount
    //    set the withdraw total 
    totalWithdrawElement.innerText = currentTotal;

    // step-6:calculate current total balance -------
    const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;

    // ste the balance total 
    totalBalanceElement.innerText = currentTotalBalance;



})
