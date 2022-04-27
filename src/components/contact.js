const contact = () => {
  const contactSection = document.createElement('section');
  const h2 = document.createElement('h2');

  h2.textContent = 'Contact Us';

  
  contactSection.appendChild(h2);

  return contactSection;
}

export default contact;