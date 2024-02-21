const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const image = document.createElement('img');
    image.src = "https://media.timeout.com/images/106047598/750/562/image.jpg";
    image.height = '300';
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant';
    pageContent.appendChild(headline);

    const copy = document.createElement('p');
    copy.textContent = 'We serve the food';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;