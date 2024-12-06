import React from 'react';
import '../pages/user/styles/HorizontalImageBanner.css'; // CSS file for styling
import bannerImage from '../assets/lib-image.png'; // Import the image

// Wrap the component with React.memo and close the parentheses properly
const HorizontalImageBanner = React.memo(() => {
  return (
    <div className="horizontal-image-banner">
      <img src={bannerImage} alt="Decorative banner" className="banner-image" />
    </div>
  );
});

export default HorizontalImageBanner;
