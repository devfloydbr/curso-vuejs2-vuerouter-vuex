new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0 
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        attack(especial) {
            this.hurt('monsterLife', 5, 10, especial, 'player')
            if (this.monsterLife > 0) {
                this.hurt('playerLife', 7, 12, false, 'monster')
            }
        },
        hurt(attr, min, max, special, clss) {
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[attr] = Math.max(this[attr] - hurt, 0)   
            
            if (attr == 'monsterLife') {
                this.registerLog(`Jogador atingiu o monstro com ${hurt}`, clss)
            } else {
                this.registerLog(`Monstro atingiu o Jogador com ${hurt}`, clss)
            }
        }, 
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'monster')
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)

            this.playerLife = Math.min(this.playerLife + heal, 100)

            this.registerLog(`Jogador ganhou ${heal} de vida`, 'cure')
        },               
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(txt, clss) {
            this.logs.unshift({ txt, clss })
        }         
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})