<template>
    <Draggable />
    <Navigation />
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from '@/components/Navigation.vue'
import Draggable from '@/components/Draggable.vue'

export default defineComponent({
    name: 'App',
    components: {
        Navigation,
        Draggable
    }
})
</script>

<style lang="scss">
@import url('./styles/main.scss');
</style>
