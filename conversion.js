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

for (var i = 0; i < 21; i++) {
	console.log(conversion(Math.floor(Math.random()), 'fahrenheit', 'celsius'));
}
