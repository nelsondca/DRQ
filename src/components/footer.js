// Import React library
import React from 'react';

// Define the styling for the footer component
const footerStyle = {
  marginTop: "20px", // Add margin at the top to separate it from preceding content
  backgroundColor: "black", // Set the background color to black for styling
  padding: "10px", // Add padding to ensure content inside the footer is spaced well
  textAlign: "center", // Align the text and content in the center of the footer
  color: "white", // Set the text color to white for contrast against the black background
};

// Functional component 'Footer' that renders the footer of the application
function Footer() {
  return (
    <div style={footerStyle}> 
      <h5></h5> 
    </div>
  );
}

// Export both the footerStyle and Footer component for use in other parts of the application
export { footerStyle, Footer };
