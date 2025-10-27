import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 기능 테스트", () => {
  test("자동차 이름 입력과 시도 횟수 입력 후 정상 동작", async () => {
    const inputs = ["pobi,woni,jun", "2"];
    const randoms = [4, 3, 5, 4, 9, 4];
    const expectedLogs = [
      "pobi : -",
      "woni : ",
      "jun : -",
      "",
      "pobi : --",
      "woni : -",
      "jun : --",
      "최종 우승자 : pobi, jun",
    ];

    mockQuestions(inputs);
    mockRandoms(randoms);
    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("우승자가 여러 명인 경우 쉼표로 구분해 출력", async () => {
    const inputs = ["a,b", "1"];
    const randoms = [5, 5];
    const expected = "최종 우승자 : a, b";

    mockQuestions(inputs);
    mockRandoms(randoms);
    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  });
});
