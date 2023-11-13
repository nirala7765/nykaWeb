import React, { useState, useEffect } from "react";

const FooterComponent = () => {
  const [footerContent, setFooterContent] = useState("");

  useEffect(() => {
    const fetchFooterContent = async () => {
      try {
        console.log('Fetching footer content...');
        const response = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/footer');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch footer content. Status: ${response.status}`);
        }
        
        const contentType = response.headers.get('content-type');
        
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Invalid content type. Expected JSON.');
        }
        
        const data = await response.json();
        console.log('API Response:', data); // Log the response
        setFooterContent(data.content);
      } catch (error) {
        console.error('Error fetching footer content:', error.message);
        
      }
    };
    
    

    fetchFooterContent(); // Call the fetchFooterContent function
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return (
    <footer>
      {/* Using dangerouslySetInnerHTML to render HTML content */}
      <div dangerouslySetInnerHTML={{ __html: footerContent }} />
    </footer>
  );
};

export default FooterComponent;
