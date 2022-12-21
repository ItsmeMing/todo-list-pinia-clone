<script setup>
import {ref} from "vue";
import useMyStore from "../composable/myStore";

const props = defineProps(["data"]);
const {getters, actions} = useMyStore();
const {getPriorityStatus} = getters;
const {handlePriorityChecked} = actions;
const status = ref(props.data[0].status);
</script>

<template>
    <div class="priority__filter">
        <div class="filter__heading">
            <FontAwesomeIcon icon="fa-solid fa-filter" />
            <h1>Filter:</h1>
        </div>
        <div
            class="filter__item"
            v-for="(priority, key) in getPriorityStatus"
            :key="key"
        >
            <input
                :id="`${status.toLowerCase()}-${priority.name
                    .toLowerCase()
                    .replace(/\s/g, '')}`"
                type="checkbox"
                @click="(e) => handlePriorityChecked(priority.name, status, e)"
                :checked="priority.checked"
            />
            <label
                :for="`${status.toLowerCase()}-${priority.name
                    .toLowerCase()
                    .replace(/\s/g, '')}`"
                >{{ priority.name }}</label
            >
        </div>
    </div>
</template>

<style scoped lang="scss">
.priority__filter {
    display: flex;
    gap: 15px;
    margin-bottom: 5px;
    .filter__heading,
    .filter__item {
        display: flex;
        gap: 5px;
        font-size: 16px;
        h1 {
            font-weight: 600;
        }
    }
}
</style>
