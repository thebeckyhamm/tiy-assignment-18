var Vehicle = (function() {

    function Vehicle() {
    };

    Vehicle.prototype = {
        travel: function() {
            return "Goodbye";
        },
        moves: true
    }

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

    Train.prototype.leaveStation = function() {
        return "choo choo";
    }

    return Train;
})();



var SeaVessel = (function() {

    function SeaVessel() {
        Vehicle.call(this);
    };

    SeaVessel.prototype = Object.create(Vehicle.prototype);

    SeaVessel.prototype.setSail = function() {
        return "ahoy";
    }

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



var extendee = {name: "becky", has_headache: "true"};
var extended = _.extend({}, extendee);


var params = function(options) {

    var defaults = {
        location: "TIY",
        smelly: true,
        quiet: false,
        page: 1
    }

    return _.extend({}, defaults, options);
};

