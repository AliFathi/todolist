import { HttpClient } from './httpClient.js';

class TaskService {
    #http = new HttpClient({ baseUrl: '/api/tasks' });

    select() {
        return this.#http.get('/');
    }

    create(text) {
        return this.#http.post('', {
            text: text
        });
    }

    find(id) {
        return this.#http.get(`/${id}`);
    }

    update(id, text, status) {
        return this.#http.put(`/${id}`, {
            text: text,
            status: status
        });
    }

    remove(id) {
        this.#http.delete(`/${id}`);
    }
}

export default new TaskService();
