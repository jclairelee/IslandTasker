import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./PaymentForm.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setError("Stripe.js has not yet loaded.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        console.error("Error creating payment method:", error);
        setError(error.message);
        setSuccess(null);
      } else {
        console.log("PaymentMethod created:", paymentMethod);
        setError(null);
        setSuccess("Payment successful!");

        // Handle the payment method, e.g. send to server for further processing
        const response = await fetch("/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ payment_method_id: paymentMethod.id }),
        });

        if (!response.ok) {
          throw new Error("Failed to send payment method to server.");
        }
      }
    } catch (error) {
      console.error("Payment failed:", error);
      setError("Payment failed. Please try again later.");
      setSuccess(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="payment-form">
        <label>
          Card details
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#32325d",
                },
              },
            }}
          />
        </label>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <button type="submit" disabled={!stripe}>
          Pay Now
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
