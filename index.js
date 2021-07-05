//const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// const totalBatteries = batteryBatches.reduce(function(accumulator, element) { return element + accumulator},0);








//const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// const totalBatteries = batteryBatches.reduce((accum, batch) => {
//     return accum + batch}, 0);



const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((bat,total) => bat + total ,0);