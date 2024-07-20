// code your solution here

// Function declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
// Function expression for mondayWork

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;

};
 // Function for wrapAdjective
 function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}
 
 // Display results for saturdayFun
 function showSaturdayFun(activity) {
    const result = saturdayFun(activity);
    document.getElementById('saturday-fun-result').textContent = result;

 }
 //Display results for MondayWork
 function showMondayWork(activity) {
    const result = mondayWork(activity);
    document.getElementById('monday-work-result').textContent = result;
 }
 // Display results for WrapperAdjective
 function showWrapAdjective(wrapper, adjective) {
    const resultFunction = wrapAdjective(wrapper);
    const result = resultFunction(adjective);
    document.getElementById('wrap-adjective-result').textContent = result;
 }