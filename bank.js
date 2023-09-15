let pin = "";
let tryCount = 3;
let balance = 5000;
let hasCredit = false;
let salary = 1500;
let activeCreditAmount=0;

let transactions = [];

let userPin = prompt('add your pin');
pin = userPin;


while (tryCount > 0) {
    let loginPin = prompt('add pin for login');
    if (loginPin === pin) {
        console.log('welcome');

        withDraw();

        break;

    } else {
        tryCount--;
        console.log(`${tryCount} chance remained`);
        if (tryCount === 0) {
            console.error('Your card blocked.Contact the bank')
        }
    }
}

//----------------------------------------------------------------------------------
function payCredit(){
alert( `Your credit debt is: ${activeCreditAmount}`)
let creditPayment=Math.abs(Number(prompt("How much do you want to pay for credit?")));



if (creditPayment<=activeCreditAmount)
{
    activeCreditAmount-=creditPayment

    console.log(`You paid:  ${creditPayment} for your credit`)

    let trObj = {
        amount: creditPayment,
        date: new Date(),
        deposit: true
    }
    transactions.push(trObj)

    if (activeCreditAmount==0)
    {
        hasCredit=false;
        console.log(`You don't have any creedits now`)
        
    }
}
else 
{
    console.log("Can't pay more than credit amount ")
}

}
//------------------------------------------------------------------------------------

function withDraw() {
    let hasShowedCredit;
    let newOffer;

    if (hasCredit==true)
    {
        alreadyHasCredit= confirm('Do you want pay your credit?')

        if (  alreadyHasCredit ==true)
        {
            payCredit();
        }

        else
        {
            alert('Redirecter back to withdrawing')
        }

    }
    let amount = Math.abs(Number(prompt('How much do you want to withdraw?')));
    if (amount <= balance) {
        balance -= amount;

        let trObj = {
            amount: amount,
            date: new Date(),
            deposit: false
        }
        transactions.push(trObj)

        console.log('Your balance:', balance);
        if (balance == 0 && !hasCredit) {
            hasShowedCredit = confirm('You want credit?')
            if (hasShowedCredit) {
                let result = calculateCredit(salary);
                console.log(`Max amount:${result.maxCreditAmount},monthly payment: ${result.monthlyPayment}`);
                const hasAcceptedCredit = confirm('Do you agree offer?')
                if (hasAcceptedCredit) {
                    balance += result.maxCreditAmount;
                    activeCreditAmount=result.maxCreditAmount;    // Credited 

                    let trObjCredit = {
                        amount: result.maxCreditAmount,
                        date: new Date(),
                        deposit: true
                    }

                    transactions.push(trObjCredit)

                    hasCredit = true;
                    console.log('credit added balance:', balance);
                
                } else {
                    newOffer = confirm('Do you want to listen to other offers?');
                    if (newOffer) {
                        let resultt = calculateNewOffer(salary);
                        console.log(`Max amount:${resultt.maxCreditAmount},monthly payment: ${resultt.monthlyPayment}`);
                        const hasAcceptedNewOffer = confirm('Do you agree offer?')
                        if (hasAcceptedNewOffer) {
                            balance += resultt.maxCreditAmount;
                            hasCredit = true;
                            activeCreditAmount=resultt.maxCreditAmount;    // Credited 
                          
                            console.log('credit added balance:', balance);
                        } else {
                            console.log("son teklif");
                        }
                    }
                }
            }
        }
    } else {
        console.info('There is not enough money in your balance')
    }

    let isCon = confirm('Your want check again?');
    if (isCon) {
        withDraw();
    }
    else {

        let operation = prompt('With balance: B, with transaction: T')

        switch (operation) {
            case 'B':
                console.log('Balance: ', balance);
                break;
            case 'T':
                ShowTransations();
                break;
        }


        console.log('Thanks');
    }

}


function calculateCredit(salary) {
    let monthlyPayment = salary * 45 / 100;
    let maxCreditAmount = 12 * monthlyPayment;

    let result = maxCreditAmount - (maxCreditAmount * 10 / 100);
    return {
        monthlyPayment: monthlyPayment,
        maxCreditAmount: result
    };
}

function calculateNewOffer(salary) {
    let monthlyPayment = salary * 40 / 100;
    let maxCreditAmount = 18 * monthlyPayment;

    let result = maxCreditAmount - (maxCreditAmount * 8 / 100);
    return {
        monthlyPayment: monthlyPayment,
        maxCreditAmount: result
    };
}

function ShowTransations() {
    transactions.forEach(tr => {
        let date = tr.date;

        let trDate = `${date.getDate()} - ${date.getMonth()}- ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`


        document.write(`Amount:${tr.amount}, Date: ${trDate}- ${tr.deposit ? 'Deposited' : 'Withdrawed'}` + '<br/>') 

    });
}



