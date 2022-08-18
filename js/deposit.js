// step-1:add event listener to the deposit button 

const depostButtonHandler = document.getElementById('btn-Deposit').addEventListener('click', function () {
    // step-2:get the diposit amount form the diposit input field 
    // step-2.1: for input field use .value to the value the input field 
    const depositField = document.getElementById('user-Deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3:get the current deposit total 
    // step-3.1: for non-input (element other than input textarea)use innerText to get the text 
    const totalDepositElement = document.getElementById('Deposit-Total');
    const previousDepositTotalString = totalDepositElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4:add numbers set the total deposit -----------
    const currentTotal = previousDepositTotal + newDepositAmount

    //    set the deposit total 
    totalDepositElement.innerText = currentTotal;

    // step-5 get balanec currant total ------

    const totalBalanceElement = document.getElementById('Total-balance');
    const previousBalanceTotalString = totalBalanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-6:calculate curent total balance -------
    const currentTotalBalance = previousBalanceTotal + newDepositAmount;
    // ste the balance total 
    totalBalanceElement.innerText = currentTotalBalance;

    // step-7:clear the deposit field 
    depositField.value = '';

})
