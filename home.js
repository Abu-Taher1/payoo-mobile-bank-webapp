const validPin = 1234;

// add-money feature in home page
document.getElementById("add-money-btn").addEventListener("click", function(e) {
    e.preventDefault();
    

    const bank = document.getElementById("add-bank").value;

    const account = document.getElementById("add-account").value;
    if(account.length < 11) {
        alert("Please enter a valid account number");
        return;
    } 

    const ammount = parseInt(document.getElementById("add-ammount").value);

    const pin = document.getElementById("add-pin").value;
    if(pin !== validPin) {
        alert("Please enter a valid PIN");
        return;
    }

    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    const totalBalance = availableBalance + ammount;

    // update the balance on the page
    document.getElementById("available-balance").innerText = totalBalance;
});

// cash-out feature in home page














/******************************* Gap *********************************/

