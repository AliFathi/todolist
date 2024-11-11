export class HttpClient {
    #baseUrl = '';

    constructor({ baseUrl = '' } = {}) {
        this.#baseUrl = baseUrl;
    }

    get(url) {
        return this.send({ url: url });
    }

    post(url, body = null) {
        return this.send({ url: url, method: 'post', body: body });
    }

    put(url, body = null) {
        return this.send({ url: url, method: 'put', body: body });
    }

    delete(url) {
        return this.send({ url: url, method: 'delete' });
    }

    async send({ url, method = 'get', body = null } = {}) {
        const res = await fetch(this.#createUrl(url), {
            method: method,
            body: body ? JSON.stringify(body) : null,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        if (!res.ok)
            throw 'response not ok!';

        return await res.json();
    }

    #createUrl(url) {
        return this.#baseUrl + url;
    }
}
