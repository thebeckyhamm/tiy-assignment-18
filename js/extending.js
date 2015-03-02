var Vehicle = (function() {

    function Vehicle() {
    };

    return Vehicle;
})();



var LandVehicle = (function() {

    function LandVehicle() {
        Vehicle.call(this);
    };

    LandVehicle.prototype = Object.create(Vehicle.prototype);

    return LandVehicle;
})();



var Car = (function() {

    function Car() {
        LandVehicle.call(this);
    };

    Car.prototype = Object.create(LandVehicle.prototype);

    return Car;
})();



var Train = (function() {

    function Train() {
        LandVehicle.call(this);
    };

    Train.prototype = Object.create(LandVehicle.prototype);

    return Train;

})();



var SeaVessel = (function() {

    function SeaVessel() {
        Vehicle.call(this);
    };

    SeaVessel.prototype = Object.create(Vehicle.prototype);

    return SeaVessel;

})();



var Boat = (function() {

    function Boat() {
        SeaVessel.call(this);
    };

    Boat.prototype = Object.create(SeaVessel.prototype);

    return Boat;

})();



var Aircraft = (function() {

    function Aircraft() {
        Vehicle.call(this);
    };

    Aircraft.prototype = Object.create(Vehicle.prototype);

    return Aircraft;

})();



var Plane = (function() {

    function Plane() {
        Aircraft.call(this);
    };

    Plane.prototype = Object.create(Aircraft.prototype);

    return Plane;

})();

