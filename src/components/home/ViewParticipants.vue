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
import { store } from '@/store'
import { Globals } from '@/globals.d.ts'

export default defineComponent({
    name: 'ViewParticipants',
    setup() {
        // @ts-ingore
        const state: Globals.Participants = (store.state
            .participants as unknown) as Globals.Participants

        return { state }
    }
})
</script>

<style lang="scss" scoped></style>
