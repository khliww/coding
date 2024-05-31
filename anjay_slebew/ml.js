const heroes = [
    {
        icon: 'https://static.wikia.nocookie.net/mobile-legends/images/8/8c/Hero011-icon.png/revision/latest?cb=20230826054932',
        name: 'Vexana, the Shimmer of Hope',
        role: 'Mage',
        specialty: 'Poke',
        laneRecommendation: 'Mid Lane',
        region: 'The Barren Lands',
        price: '32000 Battle Points, 599 Diamonds',
        releaseYear: 2017
    },
    {
        icon: 'https://static.wikia.nocookie.net/mobile-legends/images/9/93/Hero021-icon.png/revision/latest?cb=20220116063124',
        name: 'Fanny, The Blade Dancer',
        role: 'Assasin',
        specialty: 'Chase',
        laneRecommendation: 'Jungling',
        region: 'Moniyan Empire',
        price: '24000 Battle Points, 499 Diamonds',
        releaseYear: 2016
    },
    {
        icon: 'https://static.wikia.nocookie.net/mobile-legends/images/9/93/Hero021-icon.png/revision/latest?cb=20220116063124',
        name: 'Ruby, the Little Red Hood',
        role: 'Fighter',
        specialty: 'Crowd Control',
        laneRecommendation: 'EXP Lane',
        region: 'Moniyan Empire',
        price: '32000 Battle Points, 599 Diamonds',
        releaseYear: 2017
    },
    // add more heroes here...
];

const heroesList = document.getElementById('heroes-list');

heroes.forEach((hero) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${hero.icon}" alt="${hero.name} icon"></td>
        <td>${hero.name}</td>
        <td>${hero.role}</td>
        <td>${hero.specialty}</td>
        <td>${hero.laneRecommendation}</td>
        <td>${hero.region}</td>
        <td>${hero.price}</td>
        <td>${hero.releaseYear}</td>
    `;
    heroesList.appendChild(row);
});