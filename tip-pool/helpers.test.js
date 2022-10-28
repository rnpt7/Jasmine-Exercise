describe("Helpers test (with setup and tear-down)", function () {
  beforeEach(function () {
    billAmtInput.value = 50;
    tipAmtInput.value = 10;
    submitPaymentInfo();
  });

  it("should sum tip total on sumPaymentTotal()", function () {
    billAmtInput.value = 25;
    tipAmtInput.value = 5;
    submitPaymentInfo();

    expect(sumPaymentTotal("tipAmt")).toEqual(15);
  });

  it("should sum bill total on sumPaymentTotal()", function () {
    billAmtInput.value = 25;
    tipAmtInput.value = 5;
    submitPaymentInfo();

    expect(sumPaymentTotal("billAmt")).toEqual(75);
  });

  it("should sum tip percent total on sumPaymentTotal()", function () {
    billAmtInput.value = 50;
    tipAmtInput.value = 10;
    submitPaymentInfo();

    expect(sumPaymentTotal("tipPercent")).toEqual(40);
  });

  it("should find tip percent of a single tip on calculateTipPercent()", function () {
    expect(calculateTipPercent(50, 10)).toEqual(20);
    expect(calculateTipPercent(66, 22)).toEqual(33);
  });

  it("should make new td from value and append to tr on appendTd(tr, value)", function () {
    let newTr = document.createElement("tr");

    appendTd(newTr, "temp");

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("temp");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });
});
