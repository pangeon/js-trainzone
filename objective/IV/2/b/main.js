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
var circleArea = {
    calcArea: function() {
        return Math.PI * this.radius ** 2; 
    }
}
var circleCircumference = {
    calcCircumference: function() {
        return 2 * Math.PI * this.radius;
    }
}
var cylinderCapacity = {
    calcCapacity: function() {
        return (Math.PI * this.radius ** 2) * this.height;
    }
}
var coneCapacity = {
    calcCapacity: function() {
        return (Math.PI * this.radius ** 2) * this.height / 3;
    }
}
var cylinderSphere = {
    calcSphere: function() {
        var baseArea = (Math.PI * this.radius ** 2) * this.height * 2;
        var lateralSurfaceArea = (2 * Math.PI * this.radius) * this.height;
        return baseArea + lateralSurfaceArea; 
    }
}
var coneSphere = {
    calcSphere: function() {
        var baseArea = (Math.PI * this.radius ** 2);
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
