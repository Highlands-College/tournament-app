<template>
    <div class="nav">
        <p>Tournament App</p>
        <div class="routes">
            <router-link
                v-for="(route, i) in routes"
                :key="i"
                :to="route.path"
                >{{ route.name }}</router-link
            >
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { defaultRoutes } from '@/router/routes'

export default defineComponent({
    name: 'Navigation',
    setup() {
        const routes = reactive([...defaultRoutes])

        return {
            routes
        }
    }
})
</script>

<style scoped lang="scss">
.nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 96%;
    margin: 10px 2% 20px;

    & .routes {
        display: flex;
        align-items: center;

        & a {
            &:not(:last-of-type) {
                margin-right: 20px;
            }

            &:hover {
                color: $accent;
            }
        }

        & .router-link-exact-active {
            text-decoration: underline;
        }
    }
}
</style>
