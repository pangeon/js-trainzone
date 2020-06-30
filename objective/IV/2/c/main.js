var Circle = {
    init: function(radius) {
        console.log("Circle r = " + radius);
        this.radius = radius;
    }
}
var Cylinder = {
    init: function(radius, height) {
        console.log("Cylinder r = " + radius + ", h = " + height);
        this.radius = radius;
        this.height = height;
    }
}
var Cone = {
    init: function(radius, height) {
        console.log("Cone r = " + radius + ", h = " + height);
        this.radius = radius;
        this.height = height;
    }
}
function calcCircleArea(radius) {
    return Math.PI * radius ** 2;
}
function calcCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}
var circleArea = {
    calcArea: function() {
        return calcCircleArea(this.radius);
    }
}
var circleCircumference = {
    calcCircumference: function() {
        return calcCircleCircumference(this.radius);
    }
}
var cylinderCapacity = {
    calcCapacity: function() {
        return calcCircleArea(this.radius) * this.height;
    }
}
var coneCapacity = {
    calcCapacity: function() {
        return calcCircleArea(this.radius) * this.height / 3;
    }
}
var cylinderSphere = {
    calcSphere: function() {
        var baseArea = calcCircleArea(this.radius) * this.height * 2;
        var lateralSurfaceArea = calcCircleCircumference(this.radius) * this.height;
        return baseArea + lateralSurfaceArea; 
    }
}
var coneSphere = {
    calcSphere: function() {
        var baseArea = calcCircleArea(this.radius);
        var lineFormingCone = Math.sqrt(this.height ** 2 + this.radius ** 2);
        var lateralSurfaceArea = + Math.PI * this.radius * lineFormingCone;
        return baseArea + lateralSurfaceArea; 
    }
}
var circle = Object.assign(Object.create(Circle), circleArea, circleCircumference);
circle.init(2);
console.log("a = " + circle.calcArea());
console.log("c = " + circle.calcCircumference());

var cylinder = Object.assign(Object.create(Cylinder), cylinderCapacity, cylinderSphere);
cylinder.init(2, 10);
console.log("V = " + cylinder.calcCapacity());
console.log("A = " + cylinder.calcSphere());

var cone = Object.assign(Object.create(Cone), coneCapacity, coneSphere);
cone.init(2, 10);
console.log("V = " + cone.calcCapacity());
console.log("A = " + cone.calcSphere());
