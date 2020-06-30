calcCircleArea = (radius) => Math.PI * radius ** 2;
calcCircleCircumference = (radius) => Math.PI * radius;
calcCylinderCapacity = (circleArea, height) => circleArea * height;
calcConeCapacity = (cylinderCapacity) => cylinderCapacity / 3;
calcCylinderSphere = (circleArea, circleCircumference, height) => (circleArea * height * 2) + (circleCircumference * height);
calcConeSphere = (circleArea, height, radius) => circleArea + (Math.PI * radius * ((height ** 2 + radius ** 2)**1/2));

showResult = (text, expression) => console.log(text + ":", expression);

showResult("Circle Area", calcCircleArea(2));
showResult("Circle Circumference", calcCircleCircumference(2));
showResult("Cylinder Capacity", calcCylinderCapacity(calcCircleArea(2), 10));
showResult("Cylinder Sphere", calcCylinderSphere(calcCircleArea(2), calcCircleCircumference(2), 10));
showResult("Cone Capacity", calcConeCapacity(calcCylinderCapacity(calcCircleArea(2), 10)));
showResult("Cone Sphere", calcConeSphere(calcCircleArea(2), 10, 2));