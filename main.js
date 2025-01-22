let formReg = document.querySelector('.regForm');
let userName = document.querySelector('.username');
let password = document.querySelector('.password');

formReg.addEventListener('submit', function (e) {
    e.preventDefault();

    let valueUsername = userName.value.trim()
    let valuePassword = password.value.trim()

    if (valueUsername === '' || valuePassword === '') {
        alert('Iltimos, maydonlarni to`ldiring')
    } else {
        if (localStorage.getItem(valueUsername)) {
            alert('Bunday foydalanuvchi mavjud')
            return
        } else {
            localStorage.setItem(valueUsername, valuePassword)
            alert('Muvaffaqiyatli ro`yxatdan o`tdingiz')
            formReg.reset(); 
            window.location.href = '/home/home.html'
        }
    }
});
