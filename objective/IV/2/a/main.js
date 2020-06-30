// Circle //
    var Circle = {
        init: function(radius) {
            this.radius = radius;
        },
        area: function() {
            return Math.PI * this.radius ** 2; 
        },
        circumference: function() {
            return 2 * Math.PI * this.radius;
        },
        show: function() {
            console.log(
                    "Circle Area: " + this.area() + 
                    "\nCircle Circumference: " + this.circumference()
            );
        }
    }
    var circle = Object.create(Circle);
    circle.init(2);
    circle.show();
// Circle //

// Cylinder //
    var Cylinder = Object.create(Circle);
    Cylinder.initCylinder = function(radius, height) {
        this.init(radius);
        this.height = height;
    }
    Cylinder.calcCylinderCapacity = function() {
        return this.area() * this.height;
    }
    Cylinder.calcCylinderSphere = function() {
        return (this.area() * this.height * 2) 
        + (this.circumference() * this.height);
    }
    Cylinder.showInfoCylinder = function() {
        console.log(
            "Cylinder Capacity: " + this.calcCylinderCapacity() + 
            "\nCylinder Sphere: " + this.calcCylinderSphere()
        );
    }
    var cylinder = Object.create(Cylinder);
    cylinder.initCylinder(2, 10);
    cylinder.showInfoCylinder();
// Cylinder //

// Cone //
    var Cone = Object.create(Cylinder);
    Cone.initCone = function(radius, height) {
        this.initCylinder(radius, height)
        this.height = height;
    }
    Cone.calcConeCapacity = function() {
        return this.calcCylinderCapacity() / 3;
    }
    Cone.calcConeSphere = function() {
        return this.area() 
        + Math.PI * this.radius 
        * Math.sqrt(this.height ** 2 + this.radius ** 2);
    }
    Cylinder.showInfoCone = function() {
        console.log(
            "Cone Capacity: " + this.calcConeCapacity() + 
            "\nCone Sphere: " + this.calcConeSphere()
        );
    }
    var cone = Object.create(Cone);
    cone.initCone(2, 10);
    cone.showInfoCone();
// Cone //
