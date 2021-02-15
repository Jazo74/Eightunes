var Color = require('color');
let index = 0;

const c1_array = [
    '#2b108e',
    '#1e2caa',
    '#256a2a',
    '#780d2d',
    '#6d095c',
    '#37096d',
    '#37096d',
    '#240449',
    '#47108e',
    '#2b108e',
    '#2b108e',
    '#2b108e',
    '#100a24',
    '#100a24'
];
const c2_array = [
    '#4dccc1',
    '#8bb32c',
    '#cf91bb',
    '#cf91bb',
    '#be4097',
    '#cf91bb',
    '#19a3ad',
    '#6a19ad',
    '#ad196f',
    '#ad1920',
    '#19ad99',
    '#1948ad',
    '#ad192d',
    '#ad192d'
];
const c3_array = [
    '#ffffff',
    '#ffffff',
    '#efd9f1',
    '#efd9f1',
    '#efd9f1',
    '#efd9f1',
    '#d3d4fa',
    '#eedefa',
    '#eedefa',
    '#eedefa',
    '#eedefa',
    '#eedefa',
    '#ddd8eb',
    '#ddd8eb'
];
const c4_array = [
    '#bcd4f5',
    '#d7eed1',
    '#eed1eb',
    '#eed1eb',
    '#eed1eb',
    '#eed1eb',
    '#b4b3ec',
    '#400c63',
    '#150c63',
    '#150c63',
    '#150c63',
    '#150c63',
    '#110d30',
    '#110d30'
];



export default function themeChanger() {
    const cc17_elements = document.getElementsByClassName("cc17");
    const cc1_5_elements = document.getElementsByClassName("cc1_5");
    const cc2_elements = document.getElementsByClassName("cc2");
    const cc26_elements = document.getElementsByClassName("cc26");
    const cc3_elements = document.getElementsByClassName("cc3");
    const bc1_elements = document.getElementsByClassName("bc1");
    const bc12_elements = document.getElementsByClassName("bc12");
    const bc2_elements = document.getElementsByClassName("bc2");
    const bc3_elements = document.getElementsByClassName("bc3");
    const bc4_elements = document.getElementsByClassName("bc4");
    const grad1_2_elements = document.getElementsByClassName("grad1_2");
    const grad12_1_elements = document.getElementsByClassName("grad12_1");
    [...cc17_elements].forEach(element => {
        console.log(Color(c1_array[index]).lighten(0.7).hex());
        element.style.color = Color(c1_array[index]).lighten(0.7).hex();
        console.log(element.style.color);
    });
    [...cc1_5_elements].forEach(element => {
        element.style.color = Color(c1_array[index]).darken(0.5).hex();
    });
    [...cc2_elements].forEach(element => {
        element.style.color = Color(c2_array[index]).hex();
    });
    [...cc26_elements].forEach(element => {
        element.style.color = Color(c2_array[index]).lighten(0.6).hex();
    });
    [...cc3_elements].forEach(element => {
        element.style.color = Color(c3_array[index]).hex();
    });
    [...bc1_elements].forEach(element => {
        element.style.background = Color(c1_array[index]).hex();
    });
    [...bc12_elements].forEach(element => {
        element.style.background = Color(c1_array[index]).lighten(0.2).hex();
    });
    [...bc2_elements].forEach(element => {
        element.style.background = Color(c2_array[index]).hex();
    });
    [...bc3_elements].forEach(element => {
        element.style.background = Color(c3_array[index]).hex();
    });
    [...bc4_elements].forEach(element => {
        element.style.background = Color(c4_array[index]).hex();
    });
    [...grad1_2_elements].forEach(element => {
        element.style.background = `linear-gradient(180deg, ${Color(c2_array[index]).hex()}, ${Color(c1_array[index]).hex()})`;
    });
    [...grad12_1_elements].forEach(element => {
        element.style.background = `linear-gradient(60deg, ${Color(c1_array[index]).lighten(0.2).hex()}, ${Color(c1_array[index]).hex()})`;;
    });
    if (index < 13) {
        index++;
    } else {
        index = 0;
    }
}
