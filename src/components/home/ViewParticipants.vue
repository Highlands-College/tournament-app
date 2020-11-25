<template>
    <div class="view-participants">
        <div v-if="state">
            <pre>{{ state }}</pre>
        </div>
        <div v-else>
            <p>No participants</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useParticipants } from '@/store/participants'

export default defineComponent({
    name: 'ViewParticipants',
    setup() {
        const { state } = useParticipants()

        return { state }
    }
})
</script>

<style lang="scss" scoped></style>
