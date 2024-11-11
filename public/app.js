import { createApp, ref } from 'vue';

import taskSvc from './taskservice.js';
import TodoForm from './components/todoForm.js';
import TodoItem from './components/todoItem.js';

const app = createApp({
    setup() {
        const tasks = ref([]);
        const loading = ref(false);

        return { tasks, loading };
    },

    async mounted() {
        await this.getItems();
        console.log('mounted');
    },

    methods: {
        async getItems() {
            this.loading = true;
            // todo: implement filtering UI to test PredicateBuilder
            this.tasks = await taskSvc.select();
            this.loading = false;
        }
    }
});

app.component('TodoForm', TodoForm);
app.component('TodoItem', TodoItem);
app.mount('#app');

export default app;
