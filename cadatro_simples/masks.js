"use stricts";

const masks = {
    text : value => value.replace(/[^a-zA-Z À-ÿ]/,''),
    cellphone : value => value.replace(/[a-zA-Z À-ÿ]/,'')
};
// const $campos = document.querySelectorAll('.form > input')
// $campos.forEach ( campo => {
//     const tipoValidacao = campo.dataset.type;
//     campo.addEventListener('input', e => {
//         e.target.value = mask[tipoValidacao](e.target.value);
//     });
// });

export const validator = (e) => {
    const $input = e.target;
    const typeMask = $input.dataset.type;
    $input.value = masks[typeMask]($input.value);
};