let marks = parseFloat(prompt("Enter your marks:"));
if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Invalid input. Please enter a number between 0 and 100.");
}
else {

    if (marks >= 90) {
        console.log("Marks: " + marks);
        console.log("Grade: A");
        console.log("Result: Pass")
        console.log("Excellent performance!");
    } else if (marks >= 75) {
        console.log("Marks: " + marks);
        console.log("Grade: B");
        console.log("Result: Pass")
        console.log("Good performance!");
    } else if (marks >= 60) {
        console.log("Marks: " + marks);
        console.log("Grade: C");
        console.log("Result: Pass")
        console.log("Satisfactory performance!");
    } else if (marks >= 33) {
        console.log("Marks: " + marks);
        console.log("Grade: D");
        console.log("Result: Pass")
        console.log("Needs improvement!");
    } else {
        console.log("Marks: " + marks);
        console.log("Grade: F");
        console.log("Result: Failed");
        console.log("Failed. Please try again.");
    }
}