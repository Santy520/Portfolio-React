
// function Contact() {

//     return (
//         <body>
            
//   <div className="about-me-section">
//     <h1 className="body">Contact</h1>
//     <p className="about-me-text">
//       Hello! welcome to my portfolio. My name is Santiago Palacio, I am an aspiring fullstack developer takin the
//       parttime rutgers bootcamp to expand my professional carrer. I currently work as a project coordniator within the
//       construction industry. My professionalism, carisma, and customer service skills, along with my new acquired full
//       stack development skills make me a great candidate for a full stack role at your company. Refer below for my
//       completed projects!

//     </p>
//   </div>

// </body> 
        
//     )
// }

// export default Contact
// src/ContactForm.js

// src/ContactForm.js

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    message: null
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: 'This field is required'
      }));
    } else if (field === 'email' && !validateEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: null
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));

    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let newErrors = {};

    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
        isValid = false;
      }
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert('Form submitted successfully!');
      // Handle form submission logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur('name')}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur('message')}
        />
        {errors.message && <span>{errors.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
