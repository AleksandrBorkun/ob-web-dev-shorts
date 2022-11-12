/*

You have been recently been hired by SpacePro, a new rocket manufacturer, and have been tasked with designing a simulator for their spaceships. 
This simulator creates a virtual “space” and keeps track of the basic movements and direction of a given ship. 
Your job is to keep track of where the ship is and it’s orientation relative to its starting point.

Instructions
Your ship simulator must take in a string of letters that represent a planned flight path for a given rocket ship.

In a ship’s flight path there are only 3 valid options for movement; R for turning right, L for turning left and A for advancing.

If, for example, you receive “RRALAA” as your flight path, you should interpret it as the following:
Turn right, turn right, advance, turn left, advance, advance
Once given this initial flight path, your program must return the x,y coordinates of a ship’s final destination 
as well as it’s orientation relative to the starting point.

Orientation is represented as left, right, up or down.

Space is infinite, so the x,y coordinates you return could be placed on a seemingly infinite grid and can be negative or positive values.

So let's say an upward facing rocket ship leaves its starting point of 0,0 and is given the flight path of “RRALAA”,
it’s final location will be 2,-1 and it will be facing right.

Your Job
You must create a function that takes in a flight path of a rocket ship as a string of letters and returns the following format:
"{x: X, y: Y, direction: 'DIRECTION'}"
X,Y represent the ending coordinates of your ship and direction represents its final direction.
Example 00

Input: "RAALALL"
Output: 
Return Value: "{x: 2, y: -1, direction: 'down'}"

*/

const DIRECTIONS = ["up", "right", "down", "left"];

function calculateSpacePosition(flightPath = "") {
  let x = 0,
    y = 0,
    directionIndex = 0;

  const makeTurn = (step) => {
    directionIndex = directionIndex + step;
    if (directionIndex === -1) directionIndex = 3;
    if (directionIndex === 4) directionIndex = 0;
  };

  const move = () => {
    const getDirection = {
      up: () => y++,
      down: () => y--,
      right: () => x++,
      left: () => x--,
    };

    getDirection[DIRECTIONS[directionIndex]]();
  };

  for (let command of flightPath) {
    const getCommand = {
      L: () => makeTurn(-1),
      R: () => makeTurn(1),
      A: () => move(),
    };
    getCommand[command]();
  }

  return { x, y, direction: DIRECTIONS[directionIndex] };
}

let result = calculateSpacePosition("RRALAA");
console.log(result);
result = calculateSpacePosition("RRALAA");
console.log(result);
