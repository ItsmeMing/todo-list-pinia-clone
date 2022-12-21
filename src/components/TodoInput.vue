<script setup>
import useMyStore from "../composable/myStore";

const {getters, actions} = useMyStore();
const {getTodoInput} = getters;
const {addTodo} = actions;
</script>

<template>
    <form class="todo-input">
        <section class="input-section">
            <div>
                <label>Title: </label>
                <input type="text" v-model="getTodoInput.title" required />
            </div>
            <div>
                <label>Description: </label>
                <input
                    type="text"
                    v-model="getTodoInput.description"
                    required
                />
            </div>
        </section>
        <section class="select-section">
            <div>
                <label>Status: </label>
                <select v-model="getTodoInput.status">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                </select>
            </div>
            <div>
                <label>Priority: </label>
                <select v-model="getTodoInput.priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
        </section>
        <button @click.prevent="addTodo()">Add</button>
    </form>
</template>

<style scoped lang="scss">
.todo-input {
    display: flex;
    gap: 20px;
    .input-section,
    .select-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
    .input-section {
        div {
            display: flex;
            align-items: center;
            label {
                display: block;
                text-align: center;
                width: 100px;
            }
        }
    }
    .select-section {
        div {
            display: flex;
            align-items: center;
            label {
                width: 65px;
            }
            select {
                width: 100px;
            }
        }
    }
    button {
        align-self: center;
        height: fit-content;
        width: fit-content;
        padding: 5px 10px;
    }
}
</style>
