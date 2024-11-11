import { sequenceGenerator } from './sequenceGenerator';

export class Store<TData> {
    private _map = new Map<number, TData>();
    private _seqGen: () => number;

    constructor({ sequesnceSeed = 1 } = {}) {
        this._seqGen = sequenceGenerator(sequesnceSeed);
    }

    add(item: TData) {
        const id = this._seqGen();
        this._map.set(id, item);
        return id;
    }

    find(id: number) {
        return this._map.get(id);
    }

    select(predicate?: (d: TData) => boolean) {
        var query = Array.from(this._map.values());
        if (predicate)
            query = query.filter(predicate);

        return query;
    }

    delete(id: number) {
        return this._map.delete(id);
    }
}
