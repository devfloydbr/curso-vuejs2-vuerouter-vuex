import Vue from 'vue'

export default new Vue({
    methods: {
        sendInfo(data) {
            this.$emit('sendInfo', data)
        },
        onInfoReceived(cb) {
            this.$on('sendInfo', cb)
        }
    }
})