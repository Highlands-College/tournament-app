<template>
    <div class="view-participants">
        <div>
            <pre>{{ state }}</pre>
        </div>
        <div></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { participantsSymbol } from '@/store/participants'

export default defineComponent({
    name: 'ViewParticipants',
    setup() {
        return {
            state: inject(participantsSymbol)
        }
    }
})
</script>

<style lang="scss" scoped>
.view-participants {
    display: flex;

    & div {
        flex: 1;
    }
}
</style>
