// initialize by prompting variables outside loop

let TaskTitle1 = prompt("Enter Task 1 title: ");

let TaskDetails1 = prompt("Enter the Task 1 description: ");

let TaskStatus1 = prompt("Enter Task 1 status: ").toLowerCase(); //convert the status to lowercase for checks

// check if the task status is valid and if not, prompt user until it is

while (
  TaskStatus1 !== "todo" &&
  TaskStatus1 !== "doing" &&
  TaskStatus1 !== "done"
) {
  TaskStatus1 = prompt(
    "Enter Task 1 Status: (todo, doing or done)"
  ).toLowerCase();
}

// return the task title and status like the example

console.log(TaskTitle1, ": ", TaskStatus1);

// check if the status is done or not and return the required message

if (TaskStatus1 !== "done") {
  console.log("No tasks completed, let's get to work!");
} else {
  console.log("Title: Make corrections to JSL01, status: done");
}

// repeat everything but for task 2

let TaskTitle2 = prompt("Enter Task 2 title: ");

let TaskDetails2 = prompt("Enter the Task 2 description: ");

let TaskStatus2 = prompt("Enter Task 2 status: ").toLowerCase();

while (
  TaskStatus2 !== "todo" &&
  TaskStatus2 !== "doing" &&
  TaskStatus2 !== "done"
) {
  TaskStatus2 = prompt(
    "Enter Task 2 Status: (todo, doing or done)"
  ).toLowerCase();
}

console.log(TaskTitle2, ": ", TaskStatus2);

if (TaskStatus2 !== "done") {
  console.log("No tasks completed, let's get to work!");
} else {
  console.log("Title: Make corrections to JSL01, status: done");
}
