import { createApp, ref } from 'vue';

import taskSvc from './taskservice.js';
import TodoForm from './components/todoForm.js';
import TodoItem from './components/todoItem.js';

const app = createApp({
    setup() {
        const tasks = ref([]);
        const loading = ref(true);

        return { tasks, loading };
    },

    async mounted() {
        await this.getItems();
        console.log('mounted');
    },

    methods: {
        async getItems() {
            this.tasks = await taskSvc.select();
        }
    }
});

app.component('TodoForm', TodoForm);
app.component('TodoItem', TodoItem);
app.mount('#app');

export default app;
