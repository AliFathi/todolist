export class PredicateBuilder<TData> {
    _funcs: ((d: TData) => boolean)[] = [];

    and(predicate: (d: TData) => boolean) {
        this._funcs.push(predicate);
    }

    build() {
        return this._funcs.length == 0
            ? null
            : this.predicate;
    }

    private predicate(item: TData) {
        for (const func of this._funcs) {
            if (!func(item))
                return false;
        }

        return true;
    }
}
