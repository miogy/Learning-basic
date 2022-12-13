class Person {
  constructor() {
    this.name = "Max";
  }
  printMyName() {
    console.log(this.name); //Max
  }
}

const person = new Person();
person.printMyName();

//프로퍼티, 메소드 추가시 new키워드로 클래스의 인스턴스를 생성
