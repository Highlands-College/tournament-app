<template>
    <div class="draggable">
        <p @click="close">close</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const { app } = require('../background.ts')

export default defineComponent({
    name: 'Draggable',
    methods: {
        close() {
            console.log('close')
            app.quit()
        }
    }
})
</script>

<style scoped lang="scss">
.draggable {
    -webkit-app-region: drag;
    width: 100%;
    height: 20px;
    background-color: $secondary-dark;

    & p {
        -webkit-app-region: no-drag;
    }
}
</style>
