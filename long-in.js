// دالة إظهار/إخفاء كلمة المرور
function togglePassword() {
    const passwordField = document.getElementById('password');
    const icon = event.currentTarget.querySelector('i');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// عند الضغط على زر الدخول
document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault(); // منع أي إعادة تحميل

    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const username = usernameField.value.trim();
    const password = passwordField.value.trim();

    if (username === "Hiba" && password === "DpaxMA93") {
        alert("✅ تسجيل دخول ناجح!");
    } else {
        // إضافة اهتزاز للحقول
        usernameField.classList.add("shake");
        passwordField.classList.add("shake");

        // إزالة الاهتزاز بعد 500 مللي ثانية
        setTimeout(() => {
            usernameField.classList.remove("shake");
            passwordField.classList.remove("shake");
        }, 500);
    }
});
