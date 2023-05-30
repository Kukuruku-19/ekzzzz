import throwDice from "./dices";

describe("throwDice", () => {
    beforeEach(() => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.5);
    });

    afterEach(() => {
        jest.spyOn(global.Math, "random").mockRestore();
    });

    it("should return dice values for computer and user", () => {
        const result = throwDice();
        expect(result).toEqual({
            computer: 7,
            user: 7,
        });
    });

    it("should generate random values between 2 and 11", () => {
        throwDice();
        expect(global.Math.random).toHaveBeenCalledTimes(2);
        expect(global.Math.random).toHaveBeenCalledWith();
        expect(global.Math.random).toHaveBeenCalledWith();
    });
});