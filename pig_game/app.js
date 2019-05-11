/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 

var scores, roundScore, activePlayer, dice,gamePlaying; 

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
	
	if(gamePlaying)
	{
		
		//find random number
		dice = Math.floor(Math.random() * 6 + 1);

		//change image
		var diceDOM = document.querySelector('.dice');
		diceDOM.src = 'dice-' + dice + '.png';
		diceDOM.style.display ='block'; 

		//add number to current round score
		if( dice !== 1 )
		{
			roundScore +=  dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		}
		else
		{	//Next player
			togglePlayer();

		}
	}
	
})
document.querySelector('.btn-hold').addEventListener('click', function(){
	
	if(gamePlaying){
		//add roundScore to score
		scores[activePlayer] += roundScore;

		//update UI
		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

		//Check if winner
		if ( scores[activePlayer] >= 100)
			{
				document.getElementById('name-' + activePlayer).textContent = 'Winner!'
				document.querySelector('.dice').style.display = 'none';
				document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
				document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
				gamePlaying = false;
			}
			else{
				togglePlayer();
			}
	}
})
function togglePlayer(){
	roundScore = 0;
	document.querySelector('#current-' + activePlayer).textContent = 0;
	document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
	
}

//intialise
document.querySelector('.btn-new').addEventListener('click', init);


function init() {
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
	
	document.querySelector('.dice').style.display = 'none';

	
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	
	document.querySelector('.player-0-panel').classList.add('active');
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	

}
	
	
	
	
