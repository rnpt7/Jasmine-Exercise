// describe("Payments test (with setup and tear-down)", function () {
//   beforeEach(function () {
//     billAmtInput.value = 50;
//     tipAmtInput.value = 10;
//   });

//   it("should add a new payment to allPayments on submitPaymentInfo()", function () {
//     submitPaymentInfo();

//     expect(Object.keys(allPayments).length).toEqual(1);
//     expect(allPayments["payment1"].billAmt).toEqual("50");
//     expect(allPayments["payment1"].tipAmt).toEqual("10");
//     expect(allPayments["payment1"].tipPercent).toEqual(20);
//   });

//   it("should not add a new payment with an empty input on submitPaymentInfo()", function () {
//     billAmtInput.value = "";
//     tipAmtInput.value = "";
//     submitPaymentInfo();

//     expect(Object.keys(allPayments).length).toEqual(0);
//   });

//   it("should update payment summary on appendPaymentTable()", function () {
//     let currentPayment = createCurPayment();
//     allPayments["payment1"] = currentPayment;

//     appendPaymentTable(currentPayment);

//     let currentTdList = document.querySelectorAll("#paymentTable tbody tr td");

//     expect(currentTdList.length).toEqual(3);
//     expect(currentTdList[0].innerText).toEqual("$50");
//     expect(currentTdList[1].innerText).toEqual("$10");
//     expect(currentTdList[2].innerText).toEqual("20%");
//   });

//   it("should create a new payment on createCurPayment()", function () {
//     let expectedPayment = {
//       billAmt: "50",
//       tipAmt: "10",
//       tipPercent: 20,
//     };

//     expect(createCurPayment()).toEqual(expectedPayment);
//   });

//   it("should not create payment with empty input on createCurPayment()", function () {
//     billAmtInput.value = "";
//     tipAmtInput.value = "";
//     let currentPayment = createCurPayment();

//     expect(currentPayment).toEqual(undefined);
//   });

//   afterEach(function () {
//     billAmtInput.value = "";
//     tipAmtInput.value = "";
//     paymentTbody.innerHTML = "";
//     summaryTds[0].innerHTML = "";
//     summaryTds[1].innerHTML = "";
//     summaryTds[2].innerHTML = "";
//     paymentId = 0;
//     allPayments = [];
//   });
// });
