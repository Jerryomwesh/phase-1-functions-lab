// Code your solution in this file!

// Function to calculate distance from Scuber HQ (42nd Street) in blocks
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42); 
}

// Function to convert blocks to feet (each block is 264 feet)
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

// Function to calculate distance traveled in feet between two locations
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Function to calculate fare price based on distance traveled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // First 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare of $25 for distances between 2000 and 2500 feet
  } else {
    return "cannot travel that far"; // No rides over 2500 feet
  }
}

// Export functions for testing (if needed)
module.exports = { distanceFromHqInBlocks, distanceFromHqInFeet, distanceTravelledInFeet, calculatesFarePrice };

