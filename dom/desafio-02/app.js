new Vue({
    el: '#desafio',
    data: {
        value: ''
    },
    methods: {
        alertUser() {
            alert('Alerta!');
        },
        refreshValue(e) {
            this.value = e.target.value
        }
    }
})