class App {
  async run() {}
  async run() {
    try {
      const namesInput = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const names = namesInput.split(",").map((name) => name.trim());

      const tryCountInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      const tryCount = Number(tryCountInput);
}

export default App;
