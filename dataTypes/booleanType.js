const student = "Vinícius";

const isApproved = true;

if (isApproved) {
    console.log(`Congratulations, ${student}! You have been approved!`);
} else {
    console.log(`Sorry, ${student}! You not have been approved!`)
}

// other way to check, but they both do the same thing
if (isApproved === true) {
    console.log(`Congratulations, ${student}! You have been approved!`);
} else {
    console.log(`Sorry, ${student}! You not have been approved!`)
}