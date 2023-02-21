let word = cHeEse

function captalize(upLetter) {
    return upLetter.charAt(0).toUpperCase() + upLetter.slice(1).toLowerCase()
}

console.log(captalize(word))
