const contact = () => {
  const contactSection = document.createElement('section');
  const h2 = document.createElement('h2');

  contactSection.id = 'contact-container';
  h2.textContent = 'Contact Us';

  const form = document.createElement('form');
  const submitBtn = document.createElement('button');
  const contactItems = ['Name', 'Email', 'Message'];

  contactItems.forEach(item => {
    const div = document.createElement('div');
    const label = document.createElement('label');
    let input = document.createElement('input');

    label.textContent = item;

    if (item === 'Message') input = document.createElement('textarea');

    label.setAttribute('for', item);
    input['id'] = item;
    input['name'] = item;

    [label, input].forEach(el => div.appendChild(el));
    form.appendChild(div);
  });

  submitBtn.textContent = 'Submit';

  form.appendChild(submitBtn);
  
  contactSection.appendChild(h2);
  contactSection.appendChild(form);

  return contactSection;
}

export default contact;