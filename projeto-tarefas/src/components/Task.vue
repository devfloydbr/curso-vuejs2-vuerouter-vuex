<template>
    <div :style="doneStyle" class="card-cont" @click="changeTaskState">
        <h5>{{ task.task.task }}</h5>
    </div>
</template>

<script>
import stateBus from '@/stateBus'

export default {
    props: {
        task: {
            type: Object
        }
    },      
    computed: {
        doneStyle() {
            if (this.task.task.done) {
                return {
                    backgroundColor: '#46db62',
                }
            } else {
                return {
                    backgroundColor: '#d94848',
                }
            }
        }
    },
    methods: {  
        changeTaskState() {
            stateBus.changeTaskState(this.task.i)
        }
    },
    mounted() {
        // console.log(this.task.task.done)
    }    
}
</script>

<style>
    .card-cont {
        width: 100%;    

        display: flex;
        justify-content: center;
        align-items: center;

        
        
        border-radius: 4px;
        padding: 20px;
    }
    .card-cont h5 {
        color: #fff;
    }

    .done {
        background: #14b83d;
    }
</style>