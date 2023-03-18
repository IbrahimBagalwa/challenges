let students = [
  { name: "Mary", score: 90, school: "East" },
  { name: "James", score: 100, school: "East" },
  { name: "Steve", score: 40, school: "East" },
  { name: "Gabe", score: 90, school: "West" },
  { name: "Rachel", score: 85, school: "East" },
  { name: "Rochelle", score: 95, school: "West" },
  { name: "Lynette", score: 75, school: "East" },
];

const processStudents = (data, cb) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].school.toLowerCase() === "east") {
      if (typeof cb === "function") {
        cb(data[i]);
      }
    }
  }
};

processStudents(students, (obj) => {
  if (obj.scrore > 60) {
    return obj.name, "Passed the test";
  }
});
let determineTotal = () => {
  let total = 0,
    count = 0;
  processStudents(students, (obj) => {
    total = total + obj.score;
    count++;
  });
  console.log("Total Score: " + total + " - Total Count: " + count);
};
determineTotal();
