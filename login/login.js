let formReg = document.querySelector('.regForm')
let userName = document.querySelector('.username')
let password = document.querySelector('.password')

formReg.addEventListener(('submit'),function(e){
    e.preventDefault()
    let valuename = userName.value.trim()
    let valuepassword = password.value.trim()
    let valueLocal = localStorage.getItem(valuename)
    if (valueLocal === valuepassword) {
        alert('Login Muvoffaqiyatli')
        window.location.href = '/home/home.html'
    }else{
        alert('Login yoki parol xato')
    }
    formReg.reset()
})