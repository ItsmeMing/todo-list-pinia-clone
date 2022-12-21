import {defineStore} from "pinia";

export const useTodosStore = defineStore("todos", {
    state: () => {
        return {
            todos: [
                {
                    title: "Do homework",
                    description: "fewfwefwe",
                    priority: "Low",
                    status: "Pending",
                    showed: true,
                    id: 0,
                },
                {
                    title: "Play games",
                    description: "rghergr",
                    priority: "High",
                    status: "In Progress",
                    showed: true,
                    id: 1,
                },
                {
                    title: "Do exercises",
                    description: "fbqeiufbweiuofw",
                    priority: "Medium",
                    status: "Done",
                    showed: true,
                    id: 2,
                },
            ],
            todosStatus: [
                {
                    name: "Pending",
                    icon: "fa-solid fa-clipboard-list",
                    checked: true,
                },
                {
                    name: "In Progress",
                    icon: "fa-solid fa-spinner",
                    checked: true,
                },
                {name: "Done", icon: "fa-solid fa-circle-check", checked: true},
            ],
            priorityStatus: [
                {name: "Low", checked: true},
                {name: "Medium", checked: true},
                {name: "High", checked: true},
            ],
        };
    },
    getters: {
        getState: (state) => state,
        todoInput: (state) => ({
            title: "",
            description: "",
            priority: "Low",
            status: "Pending",
            showed: true,
            id: state.todos.length,
        }),
    },
    actions: {
        addTodo() {
            this.todos.push(this.todoInput);
            this.todoInput = {
                title: "",
                description: "",
                priority: "Low",
                status: "Pending",
                showed: true,
                id: this.todos.length,
            };
        },
        handleStatusChecked(name, e) {
            const temp = this.todosStatus.filter(
                (status) => status.name === name,
            );
            if (e.target.checked) temp[0].checked = true;
            else temp[0].checked = false;
        },
        handlePriorityChecked(checkedPriority, s, e) {
            if (e.target.checked) {
                this.todos.map((todo) => {
                    if (todo.priority === checkedPriority && todo.status === s)
                        todo.showed = true;
                });
            } else {
                this.todos.map((todo) => {
                    if (todo.priority === checkedPriority && todo.status === s)
                        todo.showed = false;
                });
            }
        },
        changeTodoStatus(index) {
            if (this.todos[index].status === "Pending")
                this.todos[index].status = "In Progress";
            else if (this.todos[index].status === "In Progress")
                this.todos[index].status = "Done";
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
            this.todos.map((todo, index) => (todo.id = index));
        },
    },
});
