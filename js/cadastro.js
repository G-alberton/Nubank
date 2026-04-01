document.addEventListener("DOMContentLoaded", () => {
    const cpfInput = document.getElementById('cpf');
    const btnEnviar = document.getElementById('btnEnviar');
    const checkPrivacidade = document.getElementById('checkPrivacidade');

    function validarForm() {
        const cpfLimpo = cpfInput.value.replace(/\D/g, "");
        if (cpfLimpo.length === 11 && checkPrivacidade.checked) {
            btnEnviar.disabled = false;
            btnEnviar.classList.add('active');
        } else {
            btnEnviar.disabled = true;
            btnEnviar.classList.remove('active');
        }
    }

    cpfInput.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, "");
        if (v.length > 11) v = v.slice(0, 11);

        if (v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
        else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
        else if (v.length > 3) v = v.replace(/(\d{3})(\d{1,3})/, "$1.$2");

        e.target.value = v;
        validarForm();
    });

    checkPrivacidade.addEventListener('change', validarForm);
});