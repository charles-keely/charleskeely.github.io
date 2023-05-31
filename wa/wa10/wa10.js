//problem 1
let employeeData = [
    {"name": "Sam", "department": "Tech", "designation": "Manager", "salary": "40000", "raise eligible": "true"},
    {"name": "Mary", "department": "Finance", "designation": "Trainee", "salary": "18500", "raise eligible": "true"},
    {"name": "Bill", "department": "HR", "designation": "Executive", "salary": "21200", "raise eligible": "false"},
];

console.log("Problem 1:");
console.log(employeeData);

//problem 2
let companyData = [
    {"companyName": "Tech Stars","website": "www.techstars.site", "employees": employeeData}
];

console.log("Problem 2:");
console.log(companyData);

//problem 3
employeeData.push({"name": "Anna", "department": "Tech", "designation": "Executive", "salary": "25600", "raise eligible": "false"});

console.log("Problem 3:");
console.log("New employee data with Anna:");
console.log(employeeData);

//problem 4
var totalSalary = 0;

for (let i = 0; i < employeeData.length; i++){
    totalSalary += Number(employeeData[i]["salary"]);
}

console.log("Problem 4:");
console.log("Total salary: $" + totalSalary);

//problem 5

console.log("Problem 5:");
console.log("Old salaries:");
for(let i = 0; i < employeeData.length; i++){
    console.log(employeeData[i]["name"] + ": " + employeeData[i]["salary"]);
}

function increaseSalary(){

    var newSalary = 0;

    for(let i = 0; i < employeeData.length; i++){
        if(employeeData[i]["raise eligible"] == "true")
        {

            newSalary = Number(employeeData[i]["salary"]) * 1.10;
            employeeData[i]["salary"] = newSalary;
            employeeData[i]["raise eligible"] = "false";
        }
    }
}

increaseSalary();

console.log("New salaries:");
for(let i = 0; i < employeeData.length; i++){
    console.log(employeeData[i]["name"] + ": " + employeeData[i]["salary"]);
}

//problem 6

for(let i = 0; i < employeeData.length; i++){
    if(employeeData[i]["name"] == "Anna" || employeeData[i]["name"] == "Sam"){
        employeeData[i]["wfh"] = "true";
    }

    else{
        employeeData[i]["wfh"] = "false";
    }
}

console.log("Problem 6:");

for(let i = 0; i < employeeData.length; i++){
    console.log("For " + employeeData[i]["name"] + ": wfh = " + employeeData[i]["wfh"]);
}












