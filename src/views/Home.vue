<template>
    <div class="home">
        <p>Participants</p>
        <div class="split">
            <div class="add">
                <AddParticipants />
            </div>
            <div class="entered">
                <ViewParticipants />
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import AddParticipants from '@/components/home/AddParticipants.vue'
import ViewParticipants from '@/components/home/ViewParticipants.vue'

export default defineComponent({
    name: 'Home',
    components: {
        AddParticipants,
        ViewParticipants
    }
})
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    & .split {
        width: 90%;
        margin: 0 5%;
        display: flex;
        align-items: flex-start;

        & .add,
        .entered {
            height: 100px;
            flex: 1;
        }
    }
}
</style>
