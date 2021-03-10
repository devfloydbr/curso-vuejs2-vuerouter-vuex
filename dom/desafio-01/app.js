new Vue({
    el: '#desafio',
    data: {
        name: 'Guilherme J. floyd',
        age: 29,
        link: 'https://images.unsplash.com/photo-1614891069485-2402767ca01f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    methods: {       
        randomNumber() {
            return Math.random()
        }
    }
})