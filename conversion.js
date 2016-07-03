/*====================== Functions ======================*/
function conversion(temp, fromUnit, toUnit) {
	var newTemp = 0;
	if (fromUnit.toLowerCase() === 'celsius') {
		if (toUnit.toLowerCase() === 'fahrenheit') {
			newTemp = (temp - 32) * (5/9);
			return newTemp;
		}
	}
	else {
		newTemp = (temp * (9/5) ) + 32;
		console.log(newTemp);
		return newTemp;
	}
}

function eventListening(){
	var fahrenheit = document.getElementById('fahrenheit');
	fahrenheit.addEventListener('click', fahrenheitEventHandler);

	var celsius = document.getElementById('celsius');
	celsius.addEventListener('click', celciusEventHandler)

	var clear = document.getElementById('clear');
	clear.addEventListener('click', clearResults)
}

function fahrenheitEventHandler(event){
	event.preventDefault();
	var form = document.getElementById('conversionForm');
	var temp = form.degrees.value;
	var newTemp = conversion(temp, 'celsius', 'fahrenheit');
	var strContents = [temp, 'fahrenheit', newTemp, 'celcius'];
	var parent = document.getElementById('results');
	var child = document.createElement('p');
	child.textContent = strContents[0] + ' degrees ' + strContents[1] + ' is ' + strContents[2] + ' degrees ' + strContents[3] + '.';
	parent.appendChild(child);
	return strContents;
}

function celciusEventHandler(event){
	event.preventDefault();
	var form = document.getElementById('conversionForm');
	console.log(form);
	var temp = form.degrees.value;
	var newTemp = conversion(temp, 'fahrenheit', 'celcius');
	var strContents = [temp, 'celcius', newTemp, 'fahrenheit'];
	var parent = document.getElementById('results');
	var child = document.createElement('p');
	console.log(strContents);
	child.textContent = strContents[0] + ' degrees ' + strContents[1] + ' is ' + strContents[2] + ' degrees ' + strContents[3] + '.';
	parent.appendChild(child);
	return strContents;
}

function clearResults(event) {
	event.preventDefault();
	var parent = document.getElementById("results");
	while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
}

function displayResults(results) {
	var parent = document.getElementById('results');
	var child = document.createElement('p');
	console.log(1);
	child.textContent = results[0] + ' degrees ' + results[1] + ' is ' + results[2] + ' degrees ' + results[3] + '.';
}



function main() {
	eventListening()
}

function test() {
	for (var i = 0; i < 5; i++) {
		var rand = Math.random() * 100;
		console.log(Math.floor(rand) + ' degrees fahrenheit is:');
		console.log(conversion(Math.floor(rand), 'fahrenheit', 'celsius') + ' degrees celcius');
		console.log('_______________________');
	}

	console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

	for (var i = 0; i < 5; i++) {
		var rand = Math.random() * 100;
		console.log(Math.floor(rand) + ' degrees celsius is:');
		console.log(conversion(Math.floor(rand), 'celsius', 'fahrenheit') + ' degrees fahrenheit');
		console.log('_______________________');
	}


}

// test();

main();
