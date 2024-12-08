import React, { useState } from 'react';

const AdminPage = () => {
  const [activeComponent, setActiveComponent] = useState('Inventory'); // Default component to show

  const handleLogout = () => {
    // Clear local storage or any authentication details and redirect to login
    localStorage.removeItem('guest');
    window.location.href = '/'; // Redirect to the login page or home
  };

  const renderContent = () => {
    switch (activeComponent) {
      case 'Inventory':
        return <div><h2>Inventory Page</h2><p>This is the content for the Inventory page.</p></div>;
      case 'InventoryTransaction':
        return <div><h2>Inventory Transaction</h2><p>This is the content for Inventory Transaction.</p></div>;
      case 'Supplier':
        return <div><h2>Supplier Page</h2><p>This is the content for the Supplier page.</p></div>;
      case 'Staff':
        return <div><h2>Staff Page</h2><p>This is the content for the Staff page.</p></div>;
      case 'EmployeeSchedule':
        return <div><h2>Employee Schedule</h2><p>This is the content for the Employee Schedule page.</p></div>;
      case 'MaintenanceRequest':
        return <div><h2>Maintenance Request</h2><p>This is the content for the Maintenance Request page.</p></div>;
      case 'Event':
        return <div><h2>Event Page</h2><p>This is the content for the Event page.</p></div>;
      case 'Guest':
        return <div><h2>Guest Page</h2><p>This is the content for the Guest page.</p></div>;
      default:
        return <div><h2>Welcome</h2><p>Please select an option from the menu.</p></div>;
    }
  };

  const styles = {
    adminContainer: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: '#f4f6f9',
    },
    sidebar: {
      width: '260px',
      backgroundColor: '#001f3f', // Dark blue color
      color: '#ecf0f1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Align the logout button at the bottom
      padding: '30px 20px',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    },
    sidebarTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      marginBottom: '30px',
      textAlign: 'center',
      paddingBottom: '10px',
      borderBottom: '1px solid white',
    },
    menuList: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
      flexGrow: 1, // Let the menu list grow to fill the space
    },
    menuItem: {
      marginBottom: '25px',
      padding: '10px',
      cursor: 'pointer',
      fontSize: '18px',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
    },
    menuItemActive: {
      backgroundColor: '#3498db', // Blue background for active item
      color: '#fff',
    },
    menuItemHover: {
      backgroundColor: '#34495e', // Hover effect
    },
    content: {
      flex: 1,
      padding: '40px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      margin: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
      fontSize: '26px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    logoutButton: {
      backgroundColor: 'red', // Red background for the button
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: 'bold',
      marginTop: 'auto', // Aligns it at the bottom of the sidebar
    },
  };

  return (
    <div style={styles.adminContainer}>
      <div style={styles.sidebar}>
        <div>
          <div style={styles.sidebarTitle}>Admin Page</div>
          <ul style={styles.menuList}>
            <li
              style={activeComponent === 'Inventory' ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem}
              onClick={() => setActiveComponent('Inventory')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.menuItemHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeComponent === 'Inventory' ? styles.menuItemActive.backgroundColor : 'transparent'}
            >
              Inventory
            </li>
            <li
              style={activeComponent === 'InventoryTransaction' ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem}
              onClick={() => setActiveComponent('InventoryTransaction')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.menuItemHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeComponent === 'InventoryTransaction' ? styles.menuItemActive.backgroundColor : 'transparent'}
            >
              Inventory Transaction
            </li>
            <li
              style={activeComponent === 'Supplier' ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem}
              onClick={() => setActiveComponent('Supplier')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.menuItemHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeComponent === 'Supplier' ? styles.menuItemActive.backgroundColor : 'transparent'}
            >
              Supplier
            </li>
            <li
              style={activeComponent === 'Staff' ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem}
              onClick={() => setActiveComponent('Staff')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.menuItemHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeComponent === 'Staff' ? styles.menuItemActive.backgroundColor : 'transparent'}
            >
              Staff
            </li>
            <li
              style={activeComponent === 'EmployeeSchedule' ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem}
              onClick={() => setActiveComponent('EmployeeSchedule')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.menuItemHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeComponent === 'EmployeeSchedule' ? styles.menuItemActive.backgroundColor : 'transparent'}
            >
              Employee Schedule
            </li>
            <li
              style={activeComponent === 'MaintenanceRequest' ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem}
              onClick={() => setActiveComponent('MaintenanceRequest')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.menuItemHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeComponent === 'MaintenanceRequest' ? styles.menuItemActive.backgroundColor : 'transparent'}
            >
              Maintenance Request
            </li>
            <li
              style={activeComponent === 'Event' ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem}
              onClick={() => setActiveComponent('Event')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.menuItemHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeComponent === 'Event' ? styles.menuItemActive.backgroundColor : 'transparent'}
            >
              Event
            </li>
            <li
              style={activeComponent === 'Guest' ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem}
              onClick={() => setActiveComponent('Guest')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.menuItemHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeComponent === 'Guest' ? styles.menuItemActive.backgroundColor : 'transparent'}
            >
              Guest
            </li>
          </ul>
        </div>
        {/* Red logout button */}
        <button style={styles.logoutButton} onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <div style={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPage;
