<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import {computed} from "vue";
import useMyStore from "../composable/myStore";

const props = defineProps(["todo", "idx"]);
const myStore = useMyStore();
const changeTodoStatus = myStore.changeTodoStatus;
const deleteTodo = myStore.deleteTodo;
const bool = computed(() => {
    if (props.todo.status === "Done") return false;
    else return true;
});
</script>

<template>
    <div :class="`todo ${idx}`" v-if="todo.showed">
        <div class="todo__item">
            <div id="todo-content">
                <div class="todo__heading">
                    <h2>{{ todo.title }}</h2>
                    <div
                        :class="`priority ${todo.status
                            .toLowerCase()
                            .replace(/\s/g, '')}`"
                    >
                        {{ todo.priority }}
                    </div>
                </div>
                <p class="todo__description">{{ todo.description }}</p>
            </div>
            <div id="todo-icon">
                <font-awesome-icon
                    v-if="bool"
                    icon="fa-solid
                fa-circle-right"
                    @click="changeTodoStatus(todo.id)"
                />
                <font-awesome-icon
                    icon="fa-solid fa-trash"
                    @click="deleteTodo(todo.id)"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.todo {
    margin-bottom: 10px;
    padding: 10px 15px;
    background-color: var(--soft-brown);
    border-radius: 4px;
    .todo__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        #todo-content {
            width: 70%;
            .todo__heading {
                display: flex;
                font-size: 16px;
                margin-bottom: 10px;
                > * {
                    padding: 5px 0;
                }
                h2 {
                    color: rgb(var(--dark));
                }
                .priority {
                    color: var(--soft-brown);
                    padding-left: 5px;
                    padding-right: 5px;
                    margin-left: 10px;
                    border-radius: 4px;
                }
            }
            .todo__description {
                font-size: 15px;
                word-wrap: break-word;
            }
        }
        #todo-icon {
            display: flex;
            gap: 10px;
            > * {
                cursor: pointer;
            }
        }
    }
}
</style>
