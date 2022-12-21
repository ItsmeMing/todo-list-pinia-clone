import {ref, computed} from "vue";

const createStore = ({baseState, getters, actions}) => {
    const _state = ref(baseState);
    const _getters = {};
    const _actions = {};

    for (const key in getters) {
        if (Object.hasOwnProperty.call(getters, key)) {
            const fn = getters[key].bind(_state.value);
            _getters[key] = computed(fn);
        }
    }
    for (const key in actions) {
        if (Object.hasOwnProperty.call(actions, key)) {
            _actions[key] = actions[key].bind(_state.value);
        }
    }

    return () => ({state: _state, getters: _getters, actions: _actions});
};

const useMyStore = createStore({
    baseState: {
        todos: [
            {
                title: "122131",
                description: "fewfwefwe",
                priority: "Low",
                status: "Pending",
                showed: true,
                id: 0,
            },
            {
                title: "gnhtrt",
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
        todoInput: {
            title: "",
            description: "",
            priority: "Low",
            status: "Pending",
            showed: true,
            id: this?.state.value.todos.length,
        },
    },
    getters: {
        getRootState() {
            return this;
        },
        getTodos() {
            return this.todos;
        },
        getPriorityStatus() {
            return this.priorityStatus;
        },
        getTodosStatus() {
            return this.todosStatus;
        },
        getTodoInput() {
            return this.todoInput;
        },
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
            const status = this.todosStatus.find((s) => s.name === name);
            console.log(status);
            if (status) {
                status.checked = e.target.checked;
            }
        },
        handlePriorityChecked(checkedPriority, s, e) {
            this.todos.forEach((td) => {
                if (td.priority === checkedPriority && td.status === s) {
                    td.showed = e.target.checked;
                }
            });
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

export default useMyStore;
