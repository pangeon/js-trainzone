function calcCircleArea(radius) {
    return Math.PI * radius ** 2;
}
function calcCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}
function calcCylinderCapacity(circleArea, height) {
    return circleArea * height;
}
function calcConeCapacity(cylinderCapacity) {
    return cylinderCapacity / 3;
}
function calcCylinderSphere(circleArea, circleCircumference, height) {
    return (circleArea * height * 2) + (circleCircumference * height);
}
function calcConeSphere(circleArea, height, radius) {
    return circleArea + (Math.PI * radius * (Math.sqrt(height ** 2 + radius ** 2)));
}
console.log("Circle Area: " + calcCircleArea(2));
console.log("Circle Circumference: " + calcCircleCircumference(2));
console.log("Cylinder Capacity: " + calcCylinderCapacity(calcCircleArea(2), 10));
console.log("Cylinder Sphere: " + calcCylinderSphere(calcCircleArea(2), calcCircleCircumference(2), 10));
console.log("Cone Capacity: " + calcConeCapacity(calcCylinderCapacity(calcCircleArea(2), 10)));
console.log("Cone Sphere: " + calcConeSphere(calcCircleArea(2), 10, 2));
