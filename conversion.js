function conversion(temp, fromUnit, toUnit) {
	var newTemp = 0;
	if (fromUnit.toLowerCase() === 'fahrenheit') {
		if (toUnit.toLowerCase() === 'celsius') {
			newTemp = (temp - 32) * (5/9);
		}
		
	}
}
