const input0 = document.getElementsByTagName('input')[0];
const input1 = document.getElementsByTagName('input')[1];
const result = document.getElementsByTagName('span')[1];

const clickHandler = () => {
    const value0 = Number(input0.value);
    const value1 = Number(input1.value);
    result.innerHTML = value0 + value1;
};