const isApproved = true

if (isApproved === true) {
    console.log('Approved')
}

if ('0' === 0) {  // === is a strict comparison, it checks the type of the variable
    console.log('passed the comparison')
} else {
    console.log('did not pass the comparison')
}

if ('0' == 0) { // == is a loose comparison, it does not check the type of the variable
    console.log('passed the comparison')
} else {
    console.log('did not pass the comparison')
} 