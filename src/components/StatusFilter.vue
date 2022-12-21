<script setup>
import useMyStore from "../composable/myStore";

const {getters, actions} = useMyStore();
const {getTodosStatus} = getters;
const {handleStatusChecked} = actions;
</script>

<template>
    <div class="todos__filter">
        <div class="filter__heading">
            <FontAwesomeIcon icon="fa-solid fa-filter" />
            <h1>Filter:</h1>
        </div>
        <div
            class="filter__item"
            v-for="(status, key) in getTodosStatus"
            :key="key"
        >
            <input
                :id="status.name.toLowerCase().replace(/\s/g, '')"
                type="checkbox"
                :v-model="status.checked"
                @click="handleStatusChecked(status.name, $event)"
                :checked="status.checked"
            />
            <label :for="status.name.toLowerCase().replace(/\s/g, '')">{{
                status.name
            }}</label>
        </div>
    </div>
</template>

<style scoped lang="scss">
.todos__filter {
    display: flex;
    gap: 15px;
    color: var(--soft-brown);
    margin-bottom: 20px;
    padding: 30px 15px;
    background-color: var(--purple);
    border-radius: 4px;
    .filter__heading,
    .filter__item {
        display: flex;
        gap: 5px;
        font-size: 18px;
        h1 {
            font-weight: 600;
        }
    }
}
</style>
