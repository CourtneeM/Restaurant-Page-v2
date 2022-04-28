const homepage = () => {
  const homeSection = document.createElement('section');
  homeSection.id = 'homepage-container';

  const image = document.createElement('img');
  image.src = '../dist/images/burger.jpg';
  

  const textContainer = document.createElement('div');
  textContainer.id = 'text-container';

  const h2 = document.createElement('h2');
  h2.textContent = "Home Cooked Meals Served Fast";

  const paragraphs = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']

  textContainer.appendChild(h2);

  paragraphs.forEach(paragraph => {
    const p = document.createElement('p');
    p.textContent = paragraph;

    textContainer.appendChild(p);
  });

  homeSection.appendChild(image);
  homeSection.appendChild(textContainer);

  return homeSection;
}

export default homepage;