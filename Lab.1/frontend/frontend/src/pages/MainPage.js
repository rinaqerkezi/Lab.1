import React from 'react';

const MainPage = () => {
  return (
    <div style={styles.mainPage}>
      {/* Header */}
      <header style={styles.navbar}>
        <div style={styles.logo}>DardaniaHeights</div>
        <nav>
          <ul style={styles.navLinks}>
            <li style={styles.navLink}>About</li>
            <li style={styles.navLink}>Service</li>
            <li style={styles.navLink}>Contact</li>
          </ul>
        </nav>
        <button style={styles.loginBtn}>Log in</button>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Welcome to DardaniaHeights.</h1>
        <p>Where every stay feels like home</p>
        <div style={styles.searchBox}>
          <div style={styles.searchItem}>
            <label>Check-in</label>
            <input type="date" style={styles.input} />
          </div>
          <div style={styles.searchItem}>
            <label>Check-out</label>
            <input type="date" style={styles.input} />
          </div>
          <div style={styles.searchItem}>
            <label>Guests</label>
            <input type="number" min="1" style={styles.input} />
          </div>
          <button style={styles.searchBtn}>Search</button>
        </div>
      </section>

      {/* About Us Section */}
      <section style={styles.aboutUs}>
        <div style={styles.aboutText}>
          <h2>The Best Holidays Start Here!</h2>
          <p>
            Nestled in the heart of the city, DardaniaHeights offers a unique blend of luxury, comfort, and serenity.
            Our elegantly designed rooms provide breathtaking views and modern amenities.
          </p>
          <button style={styles.readMoreBtn}>Read More</button>
        </div>
        <div style={styles.aboutImage}>
          <img src="path_to_image.jpg" alt="About Us" style={styles.image} />
        </div>
      </section>

      {/* Service Cards */}
      <section style={styles.services}>
        <h3>The Most Memorable Rest Time Starts Here</h3>
        <div style={styles.serviceCards}>
          <div style={styles.serviceCard}>
            <img src="path_to_image.jpg" alt="Rooms" style={styles.image} />
            <h4>Rooms</h4>
            <p>
              Each room is meticulously crafted to offer comfort and relaxation with all modern amenities.
            </p>
            <button style={styles.viewMoreBtn}>View More</button>
          </div>
          <div style={styles.serviceCard}>
            <img src="path_to_image.jpg" alt="Restaurant" style={styles.image} />
            <h4>Restaurant</h4>
            <p>
              Enjoy exceptional dining with fresh, local ingredients and international flavors.
            </p>
            <button style={styles.viewMoreBtn}>View More</button>
          </div>
          <div style={styles.serviceCard}>
            <img src="path_to_image.jpg" alt="Amenities" style={styles.image} />
            <h4>Amenities</h4>
            <p>
              Our hotel offers a variety of amenities to make your stay comfortable and relaxing.
            </p>
            <button style={styles.viewMoreBtn}>View More</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.hotelServices}>
        <h3>Strive Only For The Best</h3>
        <ul style={styles.servicesList}>
          <li>High Class Security</li>
          <li>24 Hours Room Service</li>
          <li>Conference Room</li>
          <li>Tourist Guide Support</li>
        </ul>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerInfo}>
            <p>25+ Properties Available</p>
            <p>350+ Bookings Completed</p>
            <p>600+ Happy Customers</p>
          </div>
          <div style={styles.footerLinks}>
            <div style={styles.linkSection}>
              <h4>Quick Links</h4>
              <ul>
                <li>Special Offers</li>
                <li>Room Types</li>
                <li>Amenities</li>
                <li>Customer Reviews</li>
              </ul>
            </div>
            <div style={styles.linkSection}>
              <h4>Our Services</h4>
              <ul>
                <li>Concierge Assistance</li>
                <li>Airport Transfers</li>
                <li>Wellness & Recreation</li>
              </ul>
            </div>
            <div style={styles.linkSection}>
              <h4>Contact Us</h4>
              <ul>
                <li>Email: DardaniaHeights@gmail.com</li>
                <li>Follow Us: [Social Media Links]</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Define styles
const styles = {
  mainPage: {
    width: '100%',
    overflowX: 'hidden',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
    alignItems: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    cursor: 'pointer',
  },
  loginBtn: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
  },
  hero: {
    backgroundColor: '#444',
    color: 'white',
    textAlign: 'center',
    padding: '120px 20px',
    height: '1000px', // Set to at least 1000px
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  searchItem: {
    padding: '10px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  searchBtn: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
  },
  aboutUs: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '80px 20px',
    height: '1000px', // Set to at least 1000px
  },
  aboutText: {
    maxWidth: '500px',
  },
  services: {
    textAlign: 'center',
    padding: '80px 20px',
    height: '1000px', // Set to at least 1000px
  },
  serviceCards: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  serviceCard: {
    maxWidth: '300px',
  },
  viewMoreBtn: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
  },
  hotelServices: {
    textAlign: 'center',
    padding: '80px 20px',
    height: '1000px', // Set to at least 1000px
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '60px 20px',
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  footerInfo: {
    textAlign: 'center',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkSection: {
    marginLeft: '20px',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
};

export default MainPage;
