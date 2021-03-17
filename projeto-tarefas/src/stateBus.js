import Vue from 'vue'

export default new Vue({
    methods: {
        changeTaskState(task) {
            this.$emit('changeTaskState', task)
        },
        onChangeTaskReceived(cb) {
            this.$on('changeTaskState', cb)
        }
    }
})