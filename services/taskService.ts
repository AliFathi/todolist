import { Task, TaskStatus } from '../models';
import { PredicateBuilder, Store } from '../store';

export class TaskService {
    private _store = new Store<Task>();

    add(title: string) {
        const newTask = new Task(title);
        newTask.id = this._store.add(newTask);
        return newTask;
    }

    select({
        status = TaskStatus.unknown,
        text = ''
    } = {}) {
        const predicateBuilder = new PredicateBuilder<Task>();

        if (status)
            predicateBuilder.and(t => t.status == status);

        if (text)
            predicateBuilder.and(t => t.text.includes(text));

        return this._store.select(
            predicateBuilder.build()
        );
    }

    find(id: number) {
        return this._store.find(id);
    }

    delete(id: number) {
        const deleted = this._store.delete(id);
        if (!deleted)
            throw new Error(`failed to delete Task ${id}`);
    }
}
