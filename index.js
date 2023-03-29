class Lift {
  // when new Lift() is called, this constructor function is run
  constructor(numFloors) {
    this.numFloors = numFloors;
    this.currentFloor = 1;
    this.direction = "up";
    this.gateOpen = false;
  }

  // move the lift up one floor
  moveUp() {
    if (this.currentFloor < this.numFloors) {
      this.currentFloor++;
      console.log(`Lift is now at floor ${this.currentFloor}`);
    }
    this.gateOpen = true;
  }

  // move the lift down one floor
  moveDown() {
    if (this.currentFloor > 1) {
      this.currentFloor--;
      console.log(`Lift is now at floor ${this.currentFloor}`);
    }
    this.gateOpen = true;
  }

  // open the lift gate at the current floor
  openGate() {
    if (!this.gateOpen) {
      console.log(`Opening gate at floor ${this.currentFloor}`);
      this.gateOpen = true;
    }
  }

  // close the lift gate at the current floor
  closeGate() {
    if (this.gateOpen) {
      console.log(`Closing gate at floor ${this.currentFloor}`);
      this.gateOpen = false;
    }
  }

  // move the lift to a specific floor and lift will goes bottom then return to top floor and vice versa
  moveToFloor(floor) {
    if (floor > this.numFloors) {
      console.log(`Floor ${floor} does not exist`);
      return;
    }

    if (floor === this.currentFloor) {
      console.log(`Lift is already at floor ${floor}`);
      return;
    }

    if (floor > this.currentFloor) {
      // if the floor is above the current floor, then first move to ground then move to top floor
      while (this.currentFloor !== 1) {
        this.moveDown();
      }
      this.direction = "up";
    } else {
      // if the floor is below the current floor, then first move to top then move to ground floor
      while (this.currentFloor !== this.numFloors) {
        this.moveUp();
      }
      this.direction = "down";
    }

    while (this.currentFloor !== floor) {
      if (this.direction === "up") {
        this.moveUp();
      } else {
        this.moveDown();
      }
    }
    this.openGate();
    this.closeGate();
  }
}

// create a new lift with 5 floors
const lift = new Lift(5);
lift.moveToFloor(3);

// Output: Lift is now at floor 2
// Lift is now at floor 3
// Closing gate at floor 3

// if current floor :4  and direction : 'down" then move to 5 floor
lift.moveToFloor(5);
// Output:
// Lift is now at floor 3
// Lift is now at floor 2
// Lift is now at floor 1
// Lift is now at floor 2
// Lift is now at floor 3
// Lift is now at floor 4
// Lift is now at floor 5
// Closing gate at floor 5
