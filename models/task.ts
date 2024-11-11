import { TaskStatus } from './taskStatus';

export class Task {
    #id = 0;

    get id() { return this.#id; }
    set id(value: number) {
        if (this.#id)
            throw new Error('id already set.');

        this.#id = value;
    }

    createdAt: number;
    status: TaskStatus;
    text: string;

    constructor(text: string) {
        this.text = text;
        this.status = TaskStatus.todo;
        this.createdAt = Date.now();
    }

    /** اگر این متد نباشه،
     *  پراپرتی آی‌دی رو در خروجی جیسون نشون نمیده */
    toJSON() {
        return {
            id: this.id,
            createdAt: this.createdAt,
            status: this.status,
            text: this.text,
        };
    }
}
