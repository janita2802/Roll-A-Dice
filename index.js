document.getElementById('rollButton').addEventListener('click', rollTheDice);

function rollTheDice() {
    let diceA = rollSingleDice();
    let diceB = rollSingleDice();
    let diceC = rollSingleDice();
    
    document.getElementById('diceA').textContent = diceA;
    document.getElementById('diceB').textContent = diceB;
    document.getElementById('diceC').textContent = diceC;
    
    let scores = [
        { id: 'diceA', score: diceA },
        { id: 'diceB', score: diceB },
        { id: 'diceC', score: diceC }
    ];
    
    scores.sort((a, b) => b.score - a.score);
    
    let winnerText = '';
    
    scores.forEach(dice => {
        document.getElementById(dice.id).style.backgroundColor = 'white';
    });
    
    if (scores[0].score === scores[1].score && scores[1].score === scores[2].score) {
        winnerText = 'It\'s a draw!';
        scores.forEach(dice => {
            document.getElementById(dice.id).style.backgroundColor = 'blue';
        });
    } else if (scores[0].score === scores[1].score) {
        winnerText = 'It\'s a draw between two players!';
        document.getElementById(scores[0].id).style.backgroundColor = 'blue';
        document.getElementById(scores[1].id).style.backgroundColor = 'blue';
        document.getElementById(scores[2].id).style.backgroundColor = 'red';
    } else {
        winnerText = `The winner is ${scores[0].id.toUpperCase().replace('DICE', 'Member ')}`;
        document.getElementById(scores[0].id).style.backgroundColor = 'green';
        document.getElementById(scores[1].id).style.backgroundColor = 'yellow';
        document.getElementById(scores[2].id).style.backgroundColor = 'red';
    }
    
    document.getElementById('winner').textContent = winnerText;
}

function rollSingleDice() {
    return Math.floor(Math.random() * 6) + 1;
}
