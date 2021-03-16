<template>
    <div class="citacao">
        <slot name="autor"/>
        <slot/>
        <slot name="fonte"/>
    </div>
</template>

<script>
export default { 
    props: {
        texto: String
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
