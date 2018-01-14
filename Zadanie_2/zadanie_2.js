function getResponse(number) {
	return new Promise ((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.open("GET", 'http://numbersapi.com/'+ number);
		request.onload = (result) => {
			if (result.target.status === 200) {
				resolve(result.target.response);
			}
			if (result.target.status === 404) {
				reject(result.target.response);
			}
		};
		request.onerror = (error) => {
			onError(error);
		};
		request.send();
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

const numberPromise = getResponse(22);
numberPromise.then(onPromiseResolved, onPromiseRejected);
