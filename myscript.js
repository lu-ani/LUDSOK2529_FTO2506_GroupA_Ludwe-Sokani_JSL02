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
