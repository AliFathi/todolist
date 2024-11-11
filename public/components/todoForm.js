import taskSvc from '../taskservice.js';

export default {
    template: document.getElementById('todo-form-template').innerHTML,

    data() {
        return {
            text: '',
            loading: false,
        };
    },

    methods: {
        async submit() {
            this.loading = true;
            await taskSvc.create(this.text);
            this.text = '';
            this.loading = false;
            // todo: use a store
            await this.$root.getItems();
        }
    }
};
