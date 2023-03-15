//get user info
// let currentAge = 0;
// let expectedLifeSpan = 0;
// let minutesPerDayIDoIt = 0;

//calc variables
let daysAliveSoFar;
let lifetimeDays;
let daysHaveLeft;

let hoursPerDayYouDoThisThing;
let daysYouDoThisThing;
let daysYouHaveDoneThisThing;

let remainingLifeTimePercentage;

const CalculateTime = () => {
  const resultDiv = document.getElementById("results");

  const currentAge = parseInt(document.getElementById("currentAge").value);
  const expectedLifeSpan = parseInt(
    document.getElementById("expectedLifeSpan").value
  );
  const minutesPerDayIDoIt = parseInt(
    document.getElementById("minutesPerDayIDoIt").value
  );

  daysAliveSoFar = currentAge * 365;
  lifetimeDays = expectedLifeSpan * 365;
  daysHaveLeft = lifetimeDays - daysAliveSoFar;

  hoursPerDayYouDoThisThing = minutesPerDayIDoIt / 60;

  howMuchPerDay = hoursPerDayYouDoThisThing / 24;
  daysYouHaveDoneThisThing = Math.floor(daysAliveSoFar * howMuchPerDay);

  remainingDaysDoingThisThing = Math.floor(daysHaveLeft * howMuchPerDay);
  remainingLifeTimePercentage = Math.floor(
    (remainingDaysDoingThisThing / daysHaveLeft) * 100
  ); //placeholder equation

  resultDiv.innerHTML = `
        <span>You have lived <span class="number">${daysAliveSoFar}</span> days so far.</span><br>
        <span>Of that time you have spent  <span class="number">${daysYouHaveDoneThisThing}</span>  days doing this thing.</span>
        <br>
      <span>You have  <span class="number">${daysHaveLeft}</span>  Days Left in your life.</span>
      <br>
      <span>"If you keep doing this thing this way you will spend  <span class="number">${remainingDaysDoingThisThing}</span>  days, which is  <span class="number">${remainingLifeTimePercentage}</span> % of your remaining life" *.</span>
      <br><br>
      <span>Could this time be better spent? How about your thoughts during this time?</span>
      <br><br>
      <span style="font-size: 0.5em">*These numbers are approximate</span>
        `;

  if (expectedLifeSpan < currentAge || minutesPerDayIDoIt < 1) {
    resultDiv.innerHTML =
      "Invalid Entry. Stop tryna fuck around. This is your LIFE here!";
  }
};
