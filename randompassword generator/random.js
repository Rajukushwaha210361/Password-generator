
let inputbox = document.getElementById("inputbox");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$$%^&*()_+";
const allchar = uppercase + lowerCase + number + symbol;
function createpassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (20 >= password.length) {

        password += allchar[Math.floor(Math.random() * allchar.length)];
        inputbox.value = password;

    }
    console.log(password)
    console.log(allchar.length)


}
let btn = document.getElementById("icon");
btn.addEventListener('click', function () {

    inputbox.select();
    document.execCommand("copy");

});
let text = "Random password"
let i = 0;

function animation() {

    var x = document.getElementById("animation")
    x.innerHTML += text.charAt(i);
    i++;
    setTimeout(animation, 200)
}

