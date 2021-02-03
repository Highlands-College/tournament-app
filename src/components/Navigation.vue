<template>
    <div class="nav">
        <p>Tournament App</p>
        <div class="routes">
            <router-link v-for="(route, i) in routes" :key="i" :to="route.path">
                {{ route.name }}
            </router-link>
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
            background-color: #dddddd;
            padding: 10px;

            &:first-of-type {
                border-bottom-left-radius: 10px;
                border-top-left-radius: 10px;
            }

            &:last-of-type {
                border-bottom-right-radius: 10px;
                border-top-right-radius: 10px;
            }

            &:hover {
                background-color: #cccccc;
            }
        }

        & .router-link-exact-active {
            background-color: #cccccc;
        }
    }
}
</style>
