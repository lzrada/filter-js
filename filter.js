const employees = [
  { id: 1, name: "John Doe", hobbies: ["playing games"], age: 30, address: "123 Main St", city: "New York", phone: "555-1234" },
  { id: 2, name: "Jane Smith", age: 25, address: "456 Oak Ave", city: "Los Angeles", phone: "555-5678" },
  { id: 3, name: "Michael Johnson", age: 40, address: "789 Pine Rd", city: "Chicago", phone: "555-8765" },
  { id: 4, name: "Emily Davis", age: 35, address: "321 Cedar St", city: "New York", phone: "555-4321" },
];

//TODO 1 : dapatkan semua data
employees.forEach((employee) => {
  console.log(employee);
});
{
  <br />;
}
//TODO 2 : dapatkan data dengan nama tertentu
const targetName = "Emily Davis";
const filteredEmployees = employees.filter((employee) => employee.name === targetName);
console.log(filteredEmployees);

//TODO 3 : dapatkan data dengan alamat New York
const targetCity = "New York";
const filteredEmployeesSame = employees.filter((employee) => employee.city === targetCity);
console.log(filteredEmployeesSame);

//TODO 4 : dapatkan data dengan umur >= 30
const filteredEmployeesAge = employees.filter((employee) => employee.age > 30);
console.log(filteredEmployeesAge);
