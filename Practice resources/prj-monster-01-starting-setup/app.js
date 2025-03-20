
// if we need fucntionality that don't need to be reactive, we can use norml JS functions
function getRandomValue(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

const app = Vue.createApp({
    data() {
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            gameMessage: '',
            winner: null,
            battleMessages : []
        }
    },

    computed:{
        monsterBarStyles(){
            
            if(this.monsterHealth < 0){
                return {
                    width: '0%'
                };
            }
            return {
                width: this.monsterHealth + '%'
            };

        },

        playerBarStyles(){
            if(this.playerHealth < 0){
                return {
                    width: '0%'
                };
            }

            return {
                width: this.playerHealth + '%',
                // maxWidth: '100%',
                // minWidth: '0%'
            };

        },

        useSpecialAttack(){
            // if(this.currentRound % 3 !== 0){
            //     return true;
            // } else{
            //     return false;
            // }
            
            // shorter form is if the condition is true, it will return true
            return this.currentRound % 3 !== 0;
        },





    },

    watch:{
        // check what the value of the monster and player health is 

        // remember the format for watchers
        // variableName(value) this means that we are watching the variableName adn the value of the variable nam eis the value parameter
        playerHealth(value){
            console.log('Watching the playerHealth: ' + this.playerHealth);
            if(value <= 0 && this.monsterHealth <= 0){
                // a draw
                // alert('You have a draw!');
                this.winner = 'draw';

                this.gameMessage = 'You have a draw!';
            } else if(value <= 0 ){
                // player lost
                // alert('Player lost!');
                this.winner = 'monster';

                this.gameMessage = 'You lost!';


            }
        },

        monsterHealth(value){
            console.log('Watching the monsterHealth: ' + this.monsterHealth);
            if(value <= 0 && this.playerHealth <= 0){
                // a draw
                // alert('You have a draw!');
                this.winner = 'draw';

                this.gameMessage = 'You have a draw!';


            } else if(value <= 0){
                // monster lost
                // alert('Monster lost!');
                this.winner = 'player';

                this.gameMessage = 'Monster lost!';


            }
        }
    },

    methods:{
        attackMonster(){
            // increment round
            this.currentRound++;
            console.log('currentRound is: ' + this.currentRound);

            console.log('attackMonster is pressed!');
            // reduce health by a random number between 5 and 12
            const attackMonsterValue =getRandomValue(5,12);
            this.monsterHealth = this.monsterHealth - attackMonsterValue;
            console.log('monsterHealth is: ' + this.monsterHealth);
            
            this.addBattleMessage('player', 'attack', attackMonsterValue);
            this.attackPlayer();


        },

        attackPlayer(){
            console.log('attackPlayer is pressed!');
            // reduce health by a random number between 15 and 8
            const attackPlayerValue =getRandomValue(8,15);
            this.playerHealth -= attackPlayerValue;

            this.addBattleMessage('monster', 'attack', attackPlayerValue);

            console.log('playerHealth is: ' + this.playerHealth);
        },

        // only allow specialAttack to activate after 3 rounds
        specialAttackMonster(){
            this.currentRound++;
            console.log('currentRound is: ' + this.currentRound);

            console.log('specialAttack is pressed!');
            const specialAttackValue = getRandomValue(10,25);
            this.monsterHealth -= specialAttackValue;
            console.log('monsterHealth is: ' + this.monsterHealth);

            this.addBattleMessage('player', 'special attack', specialAttackValue);

            this.attackPlayer();
        },

        healPlayer(){

            this.currentRound++;
            console.log('currentRound is: ' + this.currentRound);

            const healPlayerValue = getRandomValue(8,20);
            if(this.playerHealth + healPlayerValue > 100){
                this.playerHealth = 100;
            }
            else{
            this.playerHealth += healPlayerValue;
            }
            console.log('playerHealth is: ' + this.playerHealth);
            // monster attacks player when player heals

            this.addBattleMessage('player', 'heal', healPlayerValue);
            this.addBattleMessage('monster', 'attack', attackPlayerValue);

            this.attackPlayer();
        },

        surrender(){
            console.log('surrender is pressed!');
            this.addBattleMessage('player', 'surrenders', null);

            this.winner = 'monster';
            this.gameMessage = 'You have surrended! : Monster wins';

        },

        startNewGame(){
            console.log('startNewGame is pressed!');
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.gameMessage = '';
            this.winner = null;
            this.battleMessages = [];
        },

        addBattleMessage(who, what, value){
            this.battleMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
            //unshift adds something to the top of the array
        }
    }
});

app.mount('#game');
