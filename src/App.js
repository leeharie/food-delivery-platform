function App() {

  const restaurants = [
    {
      name: "Pizza Hut",
      location: "Hyderabad",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },

    {
      name: "KFC",
      location: "Vizag",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },

    {
      name: "Burger King",
      location: "Bangalore",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },

    {
      name: "Domino's",
      location: "Chennai",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },

    {
      name: "McDonald's",
      location: "Mumbai",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1550317138-10000687a72b"
    },

    {
      name: "Subway",
      location: "Delhi",
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af"
    },

    {
      name: "Biryani House",
      location: "Hyderabad",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
    },

    {
      name: "Taco Bell",
      location: "Pune",
      rating: 4.0,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
    }
  ];

  return (
    <div style={{ padding: "30px" }}>

      <h1>Food Delivery Platform 🍔</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          fontWeight: "bold"
        }}
      >
        <p>Home</p>
        <p>Restaurants</p>
        <p>Orders</p>
        <p>Profile</p>
      </div>

      <h2>Restaurants</h2>

      <input
        type="text"
        placeholder="Search Restaurants..."
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid gray"
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px"
        }}
      >
        {restaurants.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              padding: "15px",
              width: "250px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              transition: "0.3s"
            }}
          >
            <img
              src={item.image}
              alt="food"
              width="100%"
              height="200px"
              style={{
                borderRadius: "10px",
                objectFit: "cover"
              }}
            />

            <h3>{item.name}</h3>

            <p>Location: {item.location}</p>

            <p>Rating: {item.rating} ⭐</p>

            <button
              style={{
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                marginTop: "10px"
              }}
            >
              Order Now
            </button>

          </div>
        ))}
      </div>

      <footer
        style={{
          marginTop: "40px",
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f2f2f2",
          borderRadius: "10px"
        }}
      >
        <p>© 2026 Food Delivery Platform</p>
        <p>Made with ❤️ by Priyanka</p>
      </footer>

    </div>
  );
}

export default App;