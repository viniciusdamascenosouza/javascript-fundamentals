const checksApproval = function (finalNote, fouls) {
    if (finalNote < 7 && fouls >= 4) {
        return true
    } else {
        return false
    }
}

console.log(checksApproval(6, 5))
console.log(checksApproval(8, 3))