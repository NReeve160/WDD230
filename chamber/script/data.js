const requestURL = './json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const businesses = jsonObject['businesses'];
    for (let i = 0; i < businesses.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let image = document.createElement('img');
        let membership = document.createElement('p');
    
        image.setAttribute('src', businesses[i].imageurl);
        image.setAttribute('alt', `${businesses[i].name} ${businesses[i].lastname} - ${businesses[i].order}`);
        h2.textContent = businesses[i].name;
        address.textContent = 'Address: ' + businesses[i].address;
        phone.textContent = 'Phone: ' + businesses[i].phone;
        website.textContent = 'Website: ' + businesses[i].website;
        membership.textContent = 'Membership: ' + businesses[i].membership;
    
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(image);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        document.querySelector('div.cards').appendChild(card);
    } 
    
    });
