// Write your solution in this file!
const employee={
    name:"Eliud",
    streetadress: "27 ruiru street"
};
function updateEmployeeWithKeyAndValue(employee, key, value){
   return  Object.assign({}, employee,{ [key]: value});
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee [key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee={...employee };
    delete clonedEmployee[key];
    return clonedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}