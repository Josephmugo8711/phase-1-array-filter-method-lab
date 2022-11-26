// Code your solution here
//We have an array of drivers with various information. 
//We need to write functions using the filter() method so that PickMeUp Taxi 
//service employees can easily query the data.
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//findMatching- This function takes an array of drivers' names 
//and a string as arguments, and returns the matching list of drivers.
// The function should be case insensitive.
//returns all drivers that match the passed in name
//returns matching drivers if case does not match but letters do
//returns an empty array if there is no match

function findMatching(array, name){
    //The filter() method creates a new array filled with
    // elements that pass a test provided by a function
    return array.filter(function (driver){
        return driver.toLowerCase() === name.toLowerCase()
    })
};
findMatching(drivers, 'Bobby')

//fuzzyMatch - This function takes an array of drivers' names and 
//a string as arguments for querying the array, and returns all 
//drivers whose names begin with the provided letters.
// returns a driver if beginning provided letters match
//does not return drivers if only middle or ending letters match
//does not return drivers if only middle or ending letters match

function fuzzyMatch(array, name){
    return array.filter(function (driver){
        return driver.toLowerCase().substring(0, name.length) === name.toLowerCase()
    })
};
fuzzyMatch(drivers, 'Bobby')

//matchName - This function takes an array of driver objects and a
// string as arguments. Each driver object has two properties: name and hometown. The function should return each element 
//whose name property matches the provided string argument.

function matchName(drivers, argument) {
    return drivers.filter(function (driver) {
        return driver.name === argument
    })
};


