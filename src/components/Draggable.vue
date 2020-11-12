<template>
    <div class="draggable">
        <svg
            height="12px"
            viewBox="0 0 329.26933 329"
            width="12px"
            @click="close"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
            />
        </svg>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// const { app } = require('electron').remote

export default defineComponent({
    name: 'Draggable',
    methods: {
        close() {
            console.log('close')
            // app.quit()
        }
    }
})
</script>

<style scoped lang="scss">
.draggable {
    -webkit-app-region: drag;
    width: 100%;
    height: 30px;
    background-color: $secondary-dark;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & svg {
        -webkit-app-region: no-drag;
        fill: $primary-light;
        margin-right: 10px;
    }
}
</style>
