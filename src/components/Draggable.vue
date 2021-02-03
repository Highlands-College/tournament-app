<template>
    <div class="draggable">
        <div class="name">
            <p>Tournament App - {{ $route.name }}</p>
        </div>
        <div class="nav">
            <div class="minimize" @click="minimize">
                <svg
                    aria-hidden="false"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                >
                    <rect
                        fill="#aaaaaa"
                        width="10"
                        height="1"
                        x="1"
                        y="6"
                    ></rect>
                </svg>
            </div>
            <div class="maximize" @click="maximize">
                <svg
                    aria-hidden="false"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                >
                    <rect
                        width="9"
                        height="9"
                        x="1.5"
                        y="1.5"
                        fill="none"
                        stroke="#aaaaaa"
                    ></rect>
                </svg>
            </div>
            <div class="close" @click="close">
                <svg
                    aria-hidden="false"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                >
                    <polygon
                        fill="#aaaaaa"
                        fill-rule="evenodd"
                        points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
                    ></polygon>
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// @ts-nocheck

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Draggable',
    setup() {
        const minimize = () => window.ipcRenderer.invoke('minimize-window')

        const maximize = () => window.ipcRenderer.invoke('maximize-window')

        const close = () => window.ipcRenderer.invoke('close-window')

        return {
            minimize,
            maximize,
            close
        }
    }
})
</script>

<style scoped lang="scss">
.draggable {
    -webkit-app-region: drag;
    width: 100%;
    height: 22px;
    background-color: $secondary-dark;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .name {
        margin-left: 10px;

        & p {
            font-size: 14px;
            color: #aaaaaa;
        }
    }

    & .nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        & div {
            -webkit-app-region: no-drag;
            margin-right: 10px;

            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>
