import Vue from 'vue'

export default new Vue({
    methods: {
        alterarIdade(idade) {
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(cb) {
            this.$on('idadeMudou', cb)
        }
    }
})