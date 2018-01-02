function getResponse() {
	return new Promise ((resolve) => {
		setTimeout(() => {
			resolve({status: 'done'});
		},1000);
	});
}

//test

console.log(getResponse());

const response = getResponse();

response.then((res) => {
	console.log(res);
});