


function conversion(temp, fromUnit, toUnit) {
	var newTemp = 0;
	if (fromUnit.toLowerCase() === 'fahrenheit') {
		if (toUnit.toLowerCase() === 'celsius') {
			newTemp = (temp - 32) * (5/9);
			return newTemp;
		}
	}
	else {
		newTemp = (temp * 5/9 ) + 32;
		return newTemp;
	}
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

test();
