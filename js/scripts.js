function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {		
	}	else {
			return 'nieprawidłowe dane'
	}
	return a * h/2  
}
var triangle1Area = getTriangleArea(4, 6);
var triangle2Area = getTriangleArea(5, 8);
var triangle3Area = getTriangleArea(0, 2);
var triangle4Area = getTriangleArea(2, 0);
console.log(getTriangleArea(10,6))
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
console.log(triangle4Area);