// A javascript code for Student Grade Ranker
// It takes a list of students with subject grades, calculates each student's average, ranks them from highest to lowest, and assigns a letter grade (A–F) based on a grading scale. Demonstrates closures (makeGrader), higher-order functions (map/sort/reduce), and the spread operator for building new objects.//

const students = [
  { name: "Ama",  grades: { math: 78, science: 85, english: 90 } },
  { name: "Kojo", grades: { math: 60, science: 72, english: 65 } },
  { name: "Efua", grades: { math: 95, science: 88, english: 80 } },
];

// Returns the average of a student's grades
const average = (grades) => {
  const values = Object.values(grades);
  return values.reduce((sum, n) => sum + n, 0) / values.length;
};

// Returns a new array of { name, average } objects, sorted highest first
function rankStudents(students) {
  return students
    .map((student) => ({ name: student.name, average: average(student.grades) }))
    .sort((a, b) => b.average - a.average);
}

// returns a function that classifies a grade
function makeGrader(scale) {
  return function (score) {
    for (const [minScore, label] of scale) {
      if (score >= minScore) return label;
    }
    return "F";
  };
}

const grade = makeGrader([
  [90, "A"],
  [80, "B"],
  [70, "C"],
  [60, "D"],
]);

// Combine everything: rank students and attach a letter grade
function report(students) {
  return rankStudents(students).map((s) => ({
    ...s,
    letter: grade(s.average),
  }));
}

console.log(report(students));
// [
//   { name: 'Efua', average: 87.67, letter: 'B' },
//   { name: 'Ama',  average: 84.33, letter: 'B' },
//   { name: 'Kojo', average: 65.67, letter: 'D' },
// ]