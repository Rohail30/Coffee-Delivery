import { dollar } from "../assets/icons";
import paymentMethod from "../assets/methods";
import { useState } from "react";
const PayMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("credit");

  const handlePaymentMethodChange = (methodName) => {
    setSelectedMethod(methodName);
  };

  return (
    <div className="mt-[3.999px] md:mt-0 container  bg-color rounded-[6px]  flex flex-col items-start w-full sm:w-full md:gap-4 md:p-[2.5rem]">
      <div className="payment-text p-2 text-[14px] flex sm:gap-2 md:w-full  md:gap-4 ">
        <div className="dollar-sign hidden sm:block ">
          <img
            src={dollar}
            alt="dollar"
            className="w-8 sm:w-12  md:w-[20px] lg:w-6"
          />
        </div>
        <div className="payment">
          <h1>Payment</h1>
          <p className="sm:hidden mt-1">Method</p>
          <p className="hidden sm:block mt-1 ">
            Payment is made upon delivery. Choose the way you want to pay
          </p>
        </div>
      </div>

      <div className="payment-container w-full sm:my-4 gap-4 flex p-2 flex-col md:p-0 md:flex-row items-center justify-between ">
        {paymentMethod.map((method) => (
          <div
            key={method.name}
            className="flex items-center justify-center w-full md:flex-1"
          >
            <input
              type="radio"
              className=" appearance-none invisible"
              id={method.name}
              name="PaymentMethod"
              value={method.name}
              required
              checked={selectedMethod === method.name}
              onChange={() => handlePaymentMethodChange(method.name)}
            />
            <label
              htmlFor={method.name}
              className={`card  w-full md:gap-4 h-[35px] sm:h-[51px] ${
                selectedMethod === method.name && "card-selected"
              }`}
            >
              <img src={method.img} alt={method.name} />
              {method.name === "credit" || method.name === "debit" ? (
                <span>{method.name.toUpperCase()} card</span>
              ) : (
                <span>Cash</span>
              )}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayMethod;
