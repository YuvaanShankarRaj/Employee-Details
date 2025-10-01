class Employee{
    constructor(name, id, salary){
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
}

let employee = []

function submitfun(){
    const empname = document.getElementById("empName");
    const empid = document.getElementById("empId");
    const empsal = document.getElementById("empSal");

    if (!empname.value || !empid.value || !empsal.value || isNaN(empid.value) || isNaN(empsal.value)) {
        alert('Please fill all fields with valid data!');
        return;
    }

    if (employee.some(emp => emp.id === empid.value)) {
        alert('Employee ID already exists!');
        return;
    }

    const newEmp = new Employee(empname.value,empid.value,empsal.value);
    employee.push(newEmp);
    alert("Added Successfully!");
}

function reset(){
    if(confirm("Are you sure to clear")){
        document.getElementById("empName").value = "";
        document.getElementById("empId").value = "";
        document.getElementById("empSal").value = "";

        document.getElementById("empName").focus();
    }
}

function display(){
    localStorage.setItem("employeeData",JSON.stringify(employee));
    window.open("display.html","_blank")
}