import {ref, computed} from "vue";

const useMyStore = () => {
    const state = ref({
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
    });

    const getTodos = computed(() => state.value.todos);
    const getTodosStatus = computed(() => state.value.todosStatus);
    const todosListByActiveStatus = computed(() =>
        state.value.todosStatus.filter((e) => e.checked),
    );
    const getPriorityStatus = computed(() => state.value.priorityStatus);

    const addTodo = () => {
        state.value.todos.push(state.value.todoInput);
        state.value.todoInput = {
            title: "",
            description: "",
            priority: "Low",
            status: "Pending",
            showed: true,
            id: state.value.todos.length,
        };
        console.log(state.value.todos);
    };

    const handleStatusChecked = (name, e) => {
        const status = state.value.todosStatus.find((s) => s.name === name);
        console.log(status);
        if (status) {
            status.checked = e.target.checked;
        }
        console.log(status);
    };

    const handlePriorityChecked = (checkedPriority, s, e) => {
        state.value.todos.forEach((td) => {
            if (td.priority === checkedPriority && td.status === s) {
                td.showed = e.target.checked;
            }
        });
    };

    const changeTodoStatus = (index) => {
        if (state.value.todos[index].status === "Pending")
            state.value.todos[index].status = "In Progress";
        else if (state.value.todos[index].status === "In Progress")
            state.value.todos[index].status = "Done";
    };

    const deleteTodo = (index) => {
        state.value.todos.splice(index, 1);
        state.value.todos.map((todo, index) => (todo.id = index));
    };

    return {
        state,
        getTodos,
        getTodosStatus,
        getPriorityStatus,
        addTodo,
        todosListByActiveStatus,
        handleStatusChecked,
        handlePriorityChecked,
        changeTodoStatus,
        deleteTodo,
    };
};

export default useMyStore;
