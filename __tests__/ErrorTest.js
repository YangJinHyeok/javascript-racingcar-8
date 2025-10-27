import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 경주 예외 처리 테스트", () => {
  test("[ERROR] 자동차 이름이 5자를 초과하면 예외 발생", async () => {
    
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    
    const app = new App();

    
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("[ERROR] 중복된 이름 입력 시 예외 발생", async () => {
    
    const inputs = ["pobi,pobi"];
    mockQuestions(inputs);

    
    const app = new App();

    
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("[ERROR] 시도 횟수가 0 이하일 경우 예외 발생", async () => {
    
    const inputs = ["pobi,woni", "0"];
    mockQuestions(inputs);

    
    const app = new App();

    
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("[ERROR] 시도 횟수가 숫자가 아닐 경우 예외 발생", async () => {
    const inputs = ["pobi,woni", "abc"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
