<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Todo from "./Todo.vue";
import PriorityFilter from "./PriorityFilter.vue";
import useMyStore from "../composable/myStore";

defineProps(["todosListFiltered"]);
const {getters} = useMyStore();
const {getPriorityStatus} = getters;
</script>

<template>
    <PriorityFilter
        :data="todosListFiltered"
        :priorityStatus="getPriorityStatus"
    />
    <ul class="todos__list">
        <li v-for="(todo, key) in todosListFiltered" :key="key">
            <Todo :todo="todo" :idx="key" />
        </li>
    </ul>
</template>

<style scoped lang="scss">
.todos__list {
    display: flex;
    flex-direction: column;
    height: 320px !important;
    overflow: auto;
}
::-webkit-scrollbar {
    display: none;
}
</style>
