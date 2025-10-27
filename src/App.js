import { Random, Console } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    if (name.length > 5 || name.length === 0) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
    }
    this.name = name;
    this.position = 0;
  }

  move() {
    const num = Random.pickNumberInRange(0, 9);
    if (num >= 4) this.position += 1;
  }

class App {
  async run() {}
  async run() {
    try {
      const namesInput = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const names = namesInput.split(",").map((name) => name.trim());

      const cars = names.map((name) => new Car(name));

      const tryCountInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      const tryCount = Number(tryCountInput);
      Console.print("\n실행 결과");

      for (let i = 0; i < tryCount; i++) {
        this.play(cars);
        Console.print("");
      }

      Console.print(`최종 우승자 : ${winners.join(", ")}`);
  play(cars) {
    cars.forEach((car) => {
      car.move();
      Console.print(`${car.name} : ${car.getProgress()}`);
    });
  }

}

export default App;
