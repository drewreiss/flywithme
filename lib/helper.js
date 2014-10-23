
function getCardinalDirection(input) {
    var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    var index = Math.floor( ((input-22.5)%360) / 45 );
    return directions[index+1];
}


