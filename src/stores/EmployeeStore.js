export default class EmployeeStore {
  
  static findList() {
    const result = this.employeeList.slice();
    return new Promise(resolve => {
      setTimeout(() => resolve(result), 500);
    });
  }

  static find(id) {
    const result = Object.assign({}, this.employeeList.find(x => x.id === id));
    return new Promise(resolve => {
      setTimeout(() => resolve(result), 500);
    });
  }

  static create(employee) {
    this.employeeList.push(employee);
    return new Promise(resolve => {
      setTimeout(() => resolve(employee), 500);
    });
  }

  static update(employee) {
    this.employeeList = this.employeeList.map(x => (x.id === employee.id ? employee : x));
    return new Promise(resolve => {
      setTimeout(() => resolve(employee), 500);
    });
  }

  static delete(id) {
    this.employeeList = this.employeeList.filter(x => x.id !== id);
    return new Promise(resolve => {
      setTimeout(() => resolve(id), 500);
    });
  }

  static employeeList = [
    { id: "E0001", name: "Satoh", age: 25, organization: "営業", isRetired: false },
    { id: "E0002", name: "Suzuki", age: 25, organization: "営業", isRetired: false },
    { id: "E0003", name: "Tanaka", age: 30, organization: "人事", isRetired: false },
    { id: "E0004", name: "Matsumoto", age: 27, organization: "経理", isRetired: true }
  ];
}
