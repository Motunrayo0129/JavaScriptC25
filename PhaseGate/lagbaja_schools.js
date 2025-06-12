const prompt = require("prompt-sync")();

const studentCount = parseInt(prompt("Enter the number of students: "));
const subjectCount = parseInt(prompt("Enter the number of subjects: "));

let studentScores = [];
for (let studentIndex = 0; studentIndex < studentCount; studentIndex++) {
    studentScores[studentIndex] = [];
    for (let subjectIndex = 0; subjectIndex < subjectCount; subjectIndex++) {
        studentScores[studentIndex][subjectIndex] = 0;
    }
}

let studentScores = [];
for (let studentIndex = 0; studentIndex < studentCount; studentIndex++) {
    studentScores[studentIndex] = [];
    for (let subjectIndex = 0; subjectIndex < subjectCount; subjectIndex++) {
        studentScores[studentIndex][subjectIndex] = 0;
    }
}

let totalStudentScores = [];
for (let studentIndex = 0; studentIndex < studentCount; studentIndex++) {
    totalStudentScores[studentIndex] = 0;
}

let totalSubjectScores = [];
for (let subjectIndex = 0; subjectIndex < subjectCount; subjectIndex++) {
    totalSubjectScores[subjectIndex] = 0;
}

let subjectFailureCount = [];
for (let subjectIndex = 0; subjectIndex < subjectCount; subjectIndex++) {
    subjectFailureCount[subjectIndex] = 0;

}
let hardestSubject = 0;
let easiestSubject = 0;
let bestStudent = 0;
let worstStudent = 0;

for (let studentIndex = 0; studentIndex < studentCount; studentIndex++) {
    console.log(`Entering scores for Student ${studentIndex + 1}:`);
    
    for (let subjectIndex = 0; subjectIndex < subjectCount; subjectIndex++) {
        let score;
        do {
            score = parseInt(prompt(`Enter score for Subject ${subjectIndex + 1} (0-100): `));
            if (score < 0 || score > 100) {
                console.log("Invalid input! Score must be between 0 and 100.");
            }
        } while (score < 0 || score > 100);

        studentScores[studentIndex][subjectIndex] = score;
        totalStudentScores[studentIndex] += score;
        totalSubjectScores[subjectIndex] += score;

        if (score < 50) {
            subjectFailureCount[subjectIndex]++;
        }
    }
}


for (let subjectIndex = 0; subjectIndex < subjectCount; subjectIndex++) {
    if (subjectFailureCount[subjectIndex] > subjectFailureCount[hardestSubject]) {
        hardestSubject = subjectIndex;
    }
    if (subjectFailureCount[subjectIndex] < subjectFailureCount[easiestSubject]) {
        easiestSubject = subjectIndex;
    }
}


for (let studentIndex = 0; studentIndex < studentCount; studentIndex++) {
    if (totalStudentScores[studentIndex] > totalStudentScores[bestStudent]) {
        bestStudent = studentIndex;
    }
    if (totalStudentScores[studentIndex] < totalStudentScores[worstStudent]) {
        worstStudent = studentIndex;
    }
}


console.log("SUBJECT SUMMARY:");
console.log("===========================================================");
for (let subjectIndex = 0; subjectIndex < subjectCount; subjectIndex++) {
    console.log(`Subject ${subjectIndex + 1}:`);
    console.log(`Total Score: ${totalSubjectScores[subjectIndex]}`);
    console.log(`Number of Fails: ${subjectFailureCount[subjectIndex]}`);
    console.log("===========================================================");
}


console.log("CLASS ANALYSIS:");
console.log("===========================================================");
console.log(`Hardest Subject: Subject ${hardestSubject + 1} with ${subjectFailureCount[hardestSubject]} failures.`);
console.log(`Easiest Subject: Subject ${easiestSubject + 1} with ${studentCount - subjectFailureCount[easiestSubject]} passes.`);
console.log("===========================================================");


console.log("STUDENT PERFORMANCES:");
console.log("===========================================================");
console.log(`Best Graduating Student: Student ${bestStudent + 1} scoring ${totalStudentScores[bestStudent]}`);
console.log("===========================================================");
console.log(`Worst Graduating Student: Student ${worstStudent + 1} scoring ${totalStudentScores[worstStudent]}`);
console.log("===========================================================");
