import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [paymentMethod, setPaymentMethod] =
    useState("Cash On Delivery");

  const handleOrder = () => {

    setLoading(true);

    setTimeout(() => {

      alert(
        "Order Placed Successfully 🎉\nPayment Method: " +
        paymentMethod
      );

      localStorage.removeItem("cart");

      setLoading(false);

      navigate("/home");

    }, 2000);

  };

  return (

    <div
      style={{
        padding: "30px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh"
      }}
    >

      <h1>Checkout 💳</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          gap: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px gray"
        }}
      >

        <input
          type="text"
          placeholder="Enter Name"
          style={{
            padding: "12px",
            fontSize: "16px"
          }}
        />

        <input
          type="text"
          placeholder="Enter Address"
          style={{
            padding: "12px",
            fontSize: "16px"
          }}
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          style={{
            padding: "12px",
            fontSize: "16px"
          }}
        />

        <h3>Select Payment Method 💳</h3>

        <select
          value={paymentMethod}
          onChange={(e) =>
            setPaymentMethod(e.target.value)
          }
          style={{
            padding: "12px",
            fontSize: "16px"
          }}
        >

          <option>
            Cash On Delivery
          </option>

          <option>
            UPI
          </option>

          <option>
            Credit / Debit Card
          </option>

        </select>

        <button
          onClick={handleOrder}
          style={{
            padding: "15px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          {loading ? "Processing..." : "Place Order"}
        </button>

      </div>

    </div>

  );

}

export default Checkout;