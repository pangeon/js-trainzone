// Circle //
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
    };
    Circle.prototype.calcField = function() {
        return Math.PI * this.radius ** 2;
    }
    Circle.prototype.calcCircuit = function() {
        return 2 * Math.PI * this.radius;
    }
    var figure = new Circle(8);
    console.log(
        "Circle Field: " + figure.calcField() + 
        "\nCircle Circuit: " + figure.calcCircuit()
    );
// Circle //

// Cylinder //
    class Cylinder extends Circle {
        constructor(radius, height) {
            super(radius);
            this.height = height;
        }
    };
    Cylinder.prototype.calcCapacity = function() {
        return Circle.prototype.calcField.call(this) * this.height;
    }
    Cylinder.prototype.calcSphere = function() {
        return Circle.prototype.calcField.call(this) * 2 
        + (Circle.prototype.calcCircuit.call(this) * this.height);
    }
    var blockCylinder = new Cylinder(2, 10);
    console.log(
        "Cylinder Capacity: " + blockCylinder.calcCapacity() + 
        "\nCylinder Sphere: " + blockCylinder.calcSphere()
    );
// Cylinder //

// Cone //
    class Cone extends Cylinder {
        constructor(radius, height) {
            super(radius, height);
        }
    }
    Cone.prototype.calcCapacity = function() {
        return Cylinder.prototype.calcCapacity.call(this) / 3;
    }
    Cone.prototype.calcSphere = function() {
        return Circle.prototype.calcField.call(this) + 
        + Math.PI * this.radius 
        * Math.sqrt(this.height ** 2 + this.radius ** 2);
    }
    var blockCone = new Cone(2, 10);
    console.log(
        "Cone Capacity: " + blockCone.calcCapacity() + 
        "\nCone Sphere: " + blockCone.calcSphere()
    );
// Cone //
