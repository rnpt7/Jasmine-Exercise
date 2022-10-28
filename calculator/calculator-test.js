it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 4,
  };
  expect(calculateMonthlyPayment(values)).toEqual("121.89");
});

it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 12345,
    years: 6,
    rate: 7,
  };
  expect(calculateMonthlyPayment(values)).toEqual("210.47");
});

it("should handle very long loan terms", function () {
  const values = {
    amount: 24680,
    years: 99,
    rate: 7,
  };
  expect(calculateMonthlyPayment(values)).toEqual("144.11");
});
