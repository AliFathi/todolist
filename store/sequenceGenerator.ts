export function sequenceGenerator(seed = 0) {
    let id = seed;
    return function () {
        return id++;
    }
}
