function menstrualCycleCalculator(cycleLength, lastPeriodDate) {
    if (cycleLength < 21 || cycleLength > 35) {
        return "Please seek medical attention.";
    }
    
    let lastPeriod = new Date(lastPeriodDate);
    let nextPeriodDate = new Date(lastPeriod);
    nextPeriodDate.setDate(lastPeriod.getDate() + cycleLength);

    let ovulationDate = new Date(nextPeriodDate);
    ovulationDate.setDate(nextPeriodDate.getDate() - 14);

    let fertileStart = new Date(ovulationDate);
    fertileStart.setDate(ovulationDate.getDate() - 5);

    let fertileEnd = new Date(ovulationDate);
    fertileEnd.setDate(ovulationDate.getDate() + 2);

    let safePeriodAfter = new Date(nextPeriodDate);
    safePeriodAfter.setDate(nextPeriodDate.getDate() + 5);

    return `
    Next menstrual date: ${nextPeriodDate.toDateString()}
    Ovulation date: ${ovulationDate.toDateString()}
    Fertile window start: ${fertileStart.toDateString()}, end: ${fertileEnd.toDateString()}
    Safe period: Before ${fertileStart.toDateString()} and after ${safePeriodAfter.toDateString()}
    `;
}

	const prompt = require("prompt-sync")();
let cycleLength = Number(prompt("What is your cycle length: "));
let lastPeriodDate = prompt("When was your last period (DD-MM-YYYY): ");
console.log(menstrualCycleCalculator(cycleLength, lastPeriodDate));