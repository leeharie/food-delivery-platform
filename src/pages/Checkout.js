import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const handleOrder = () => {

    alert("Order Placed Successfully 🎉");

    navigate("/home");

  };

  return (

    <div
      style={{
        padding: "30px"
      }}
    >

      <h1>Checkout 💳</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          gap: "20px",
          marginTop: "30px"
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
          Place Order
        </button>

      </div>

    </div>

  );
}

export default Checkout;