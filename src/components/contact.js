const contact = () => {
  const contactSection = document.createElement('section');
  const h2 = document.createElement('h2');

  h2.textContent = 'Contact Us';

  const form = document.createElement('form');
  const contactItems = ['Name', 'Email', 'Message'];

  contactItems.forEach(item => {
    const label = document.createElement('label');
    let input = document.createElement('input');

    label.textContent = item;

    if (item === 'Message') input = document.createElement('textarea');

    label.setAttribute('for', item);
    input['id'] = item;
    input['name'] = item;

    [label, input].forEach(el => form.appendChild(el));
  });

  
  contactSection.appendChild(h2);
  contactSection.appendChild(form);

  return contactSection;
}

export default contact;