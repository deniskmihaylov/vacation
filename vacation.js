function vacation(input) {
  let index = 0;

  let moneyNeeded = Number(input[index]);
  index++;

  let availableMoney = Number(input[index]);
  index++;

  let action = input[index];
  index++;

  let sum = Number(input[index]);
  index++;

  let daysSpentCount = 0;
  let totalDays = 0;

  while (availableMoney < moneyNeeded) {
    totalDays++;

    if (action === "spend") {
      if (sum > availableMoney) {
        availableMoney = 0;
      } else {
        availableMoney -= sum;
      }

      daysSpentCount++
    } else {
      availableMoney += sum;
      daysSpentCount = 0;
    }

    if (daysSpentCount === 5) {
      console.log(`You can't save the money.`);
      console.log(`${totalDays}`)
      return;
    }

    action = input[index]; 
    index++; 

    sum = input[index]; 
    index++
  }
  console.log(`You saved the money for ${totalDays} days.`)
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
