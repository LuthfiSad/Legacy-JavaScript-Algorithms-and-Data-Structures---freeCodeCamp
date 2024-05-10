function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let totalCID = cid.reduce((acc, curr) => acc + curr[1], 0);

  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCID === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  cid = cid.reverse();
  let change = [];

  for (let i = 0; i < cid.length; i++) {
    const coinName = cid[i][0];
    const coinTotal = cid[i][1];
    const coinValue = currencyUnit[coinName];
    let coinAmount = (coinTotal / coinValue).toFixed(0);
    let returnedCoins = 0;

    while (changeDue >= coinValue && coinAmount > 0) {
      changeDue -= coinValue;
      changeDue = Math.round(changeDue * 100) / 100;
      coinAmount--;
      returnedCoins++;
    }

    if (returnedCoins > 0) {
      change.push([coinName, returnedCoins * coinValue]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));