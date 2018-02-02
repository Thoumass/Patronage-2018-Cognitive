
'use strict';


function getResponse(number) {
        const options = {
            url: 'http://numbersapi.com/'+number,
            headers: {
                'User-Agent': 'request'
            }
        };

    return new Promise ((resolve, reject) => {

        get(options, function(err, resp, body) {
            if (err) {
                onError(err);
                reject(err);
            } else {
                console.log(body);
                resolve(body);
            }
        });
    });
}

function onError(error) {
    console.log('onError()', error);
}

function onPromiseResolved(arg) {
    console.log('onPromiseResolved()', arg);
}

function onPromiseRejected(arg) {
    console.log('onPromiseRejected()', arg);
}

const numberPromise = getResponse(1);
numberPromise.then(onPromiseResolved, onPromiseRejected);
