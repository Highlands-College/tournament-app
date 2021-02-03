<template>
    <div class="scoring">
        <p>Scoring</p>
        <div class="split">
            <div class="select">
                <SelectEvent />
            </div>
            <div class="set">
                <SetScore />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SelectEvent from '@/components/scoring/SelectEvent.vue'
import SetScore from '@/components/scoring/SetScore.vue'

export default defineComponent({
    name: 'Scoring',
    components: {
        SelectEvent,
        SetScore
    }
})
</script>

<style lang="scss" scoped>
.scoring {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    & .split {
        width: 90%;
        margin: 0 5%;
        display: flex;
        align-items: flex-start;

        & .select,
        .set {
            height: 100px;
            flex: 1;
        }
    }
}
</style>
