import taskSvc from '../taskservice.js';

export default {
    template: document.getElementById('todo-item-template').innerHTML,

    props: { item: Object },

    data() {
        return {
            loading: false,
        };
    },

    methods: {
        async setText() {
            await this.update();
        },

        async setStatus(status) {
            this.item.status = status;
            await this.update();
        },

        async remove() {
            this.loading = true;
            await taskSvc.remove(this.item.id);
            // todo: use a store
            await this.$root.getItems();
        },

        async update() {
            this.loading = true;
            await taskSvc.update(
                this.item.id,
                this.item.text,
                this.item.status
            );
            this.loading = false;
        }
    }
};
