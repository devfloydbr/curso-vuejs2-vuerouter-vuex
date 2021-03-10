new Vue({
	el: '#desafio',
	data: {
		classeDestaque: 'destaque',
		classe1: true,
		classe2: true,
		classe3: '',
		classe4: '',
		cor: '#ccc',
		tamanhos: {
			width: '100px',
			height: '100px',
			borderRadius: '4px',
			transition: 'background linear 0.2s',
		},
		progresso: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classeDestaque = this.classeDestaque == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			let val = 0

			const temporizador = setInterval(() => {
				val += 5

				this.progresso = `${val}%`

				if(val == 100) clearInterval(temporizador)
			}, 500);
		},
		setClasse2(e) {
			if(e.target.value == 'true') {
				this.classe2 = true
			} else if(e.target.value == 'false') {
				this.classe2 = false
			}
		}
	}
})
