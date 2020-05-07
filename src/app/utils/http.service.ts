import { Observable } from "rxjs";

export const baseUrl = process.env.BASE_URL;

function dataMethods(method, endpoint, body, headers) {
    new Observable(subscriber => {
        fetch(`${baseUrl}/${endpoint}`, {
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            ...headers,
            body: JSON.stringify(body) 
          })
            .then(response => response.json())
            .then(data => {
                subscriber.next(data);
                subscriber.complete()
            })
            .catch(err => {
                subscriber.error(err)
                subscriber.complete()
            });
    });
}

export class Http {

    constructor() { }
    /**
     * Performs a GET request
     * @param endpoint - enter the api endpoint.
     */
    get(endpoint) {
        new Observable(subscriber => {
            fetch(`${baseUrl}/${endpoint}`)
            .then(response => response.json())
            .then(data => {
                subscriber.next(data)
                subscriber.complete()
            })
            .catch(err => {
                subscriber.error(err)
                subscriber.complete()
            })
        })
    }

    post(endpoint, body, headers) {
        return dataMethods('POST', endpoint, body, headers);
    }

    put(endpoint, body, headers) {
        return dataMethods('PUT', endpoint, body, headers);
    }

    patch(endpoint, body, headers) {
        return dataMethods('PATCH', endpoint, body, headers);
    }

    delete(endpoint, body, headers) {
        return dataMethods('DELETE', endpoint, body, headers);
    }
}