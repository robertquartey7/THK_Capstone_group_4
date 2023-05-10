import React from "react";
import { Radio } from "@material-tailwind/react";

function PaymentMethod() {
  return (
    <>
      <div>
        <span>Payment Method</span>

        <div class="flex">
          <div class="flex items-center h-5">
            <input
              id="helper-radio"
              aria-describedby="helper-radio-text"
              type="radio"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div class="ml-2 text-sm">
            <label
              for="helper-radio"
              class="font-sans text-gray-600 dark:text-gray-300"
            >
             Pay on Delivery
            </label>
            <p
              id="helper-radio-text"
              class="text-xs font-sans text-gray-600 dark:text-gray-300"
            >
              Pay with cash on delivery
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex items-center h-5">
            <input
              id="helper-radio"
              aria-describedby="helper-radio-text"
              type="radio"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div class="ml-2 text-sm">
            <label
              for="helper-radio"
              class="font-sans text-gray-600 dark:text-gray-300"
            >
             Credit/Debit Cards
            </label>
            <p
              id="helper-radio-text"
              class="text-xs font-sans text-gray-600 dark:text-gray-300"
            >
            Pay with your Debit/Credit Card
            </p>
            <div>
              card
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default PaymentMethod;
