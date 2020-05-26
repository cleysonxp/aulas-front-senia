"use strict"
// alert('tsetedfjkj')
let DataBase = [
    {
        "intelligence": "100",
        "strength": "100",
        "speed": "100",
        "durability": "100",
        "power": "100",
        "combat": "100"
    }
];

const showData = (data) => {
    const panel =`
        <div class='titulo'>Power</div>
        <div class='power'> ${data.intelligence} </div>
        <div class='power'> ${data.strength} </div>
        <div class='power'> ${data.speed} </div>
        <div class='power'> ${data.durability} </div>
        <div class='power'> ${data.power} </div>
        <div class='power'> ${data.combat} </div>
    `;

    const $container = document.createElement ('div');
    $container.innerHTML = panel;

    const $powers = document.getElementById('powerStats');

    // $powers.appendChild ($container);
};

showData ( DataBase[0] );