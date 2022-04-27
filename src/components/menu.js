const menu = () => {
  const menuSection = document.createElement('section');
  const h2 = document.createElement('h2');
  
  h2.textContent = 'Menu';

  const menuItemsContainer = document.createElement('div');
  const burgerItems = ['Burgers', 'Burger', 'Cheese Burger', 'Peanut Butter Burger', 'Veggie Burger'];
  const sideItems = ['Sides', 'Fries', 'Chips', 'Pecan Pie'];
  const drinkItems = ['Drinks', 'Coke', 'Dr. Pepper', 'Sprite', 'Fanta'];

  [burgerItems, sideItems, drinkItems].forEach(list => {
    const ul = document.createElement('ul');

    list.forEach(item => {
      const li = document.createElement('li');
      
      li.textContent = item;

      ul.appendChild(li);
    });

    menuItemsContainer.appendChild(ul);
  });


  menuSection.appendChild(h2);
  menuSection.appendChild(menuItemsContainer);

  return menuSection;
}

export default menu;