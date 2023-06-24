import React from 'react';

const ContactPage = () => {
  return (
    <section class="page-container" id="contact">
      <div className='second'>
        <h3>Thanks For Checking My Site Out</h3>
      </div>
      <div className="center-form">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSdGbGt0-TO8wzm5W6I-JAlMg9krxDY404cHiEbvb5W4slQtAA/viewform?embedded=true" 
          width="640"
          height="861" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
        >
          Loading...
        </iframe>
      </div>
    </section>
  )
}

export default ContactPage;
