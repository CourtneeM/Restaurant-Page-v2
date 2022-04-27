const header = () => {
  const headerItems = ['Home', 'Menu', 'Contact'];

  const headerContainer = document.createElement('header');
  const h1 = document.createElement('h1');
  const ul = document.createElement('ul');
  
  h1.textContent = "Jackie's Burgers";

  headerItems.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item;

    ul.appendChild(li);
  });

  [h1, ul].forEach(el => headerContainer.appendChild(el));

  return headerContainer;
}

export default header;