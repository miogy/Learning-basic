// class Person {
//   constructor() {
//     this.name = "Max";
//   }
//   printMyName() {
//     console.log(this.name); //Max
//   }
// }

// const person = new Person();
// person.printMyName();

//프로퍼티, 메소드 추가시 new키워드로 클래스의 인스턴스를 생성

//상속이 가능
class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  // constructor(){
  //     this.name = 'Max';
  // }

  constructor() {
    super(); //super() 호출후 제대로 생성되는 것을 볼수 있다.
    this.name = "Max";
    //this.gender = "수정가능"
  }
  printMyName() {
    console.log(this.name); //error : 서브클래스에서 super생성자를 먼저 호출해야함.
  }
}

const person = new Person();
person.printMyName();
person.printGender();
