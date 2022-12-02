console.log("hi");

function loadData(){
	var request = new XMLHttpRequest();
	request.open('GET', 'input.txt', false);
	request.send();
	var textfileContent = request.responseText;
	console.log("hi");
}

loadData();