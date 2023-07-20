const carMarkers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

// Two dimensional arrays
const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMarkers[0];

// Help us prevent from adding incompatible values to the array
// Can help with 'map', 'forEach', 'reduce', functions
// Flexible - arrays can still contain multiple different types
carMarkers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push("2023-07-10");
