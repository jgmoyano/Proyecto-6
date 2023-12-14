const btn = document.getElementById('mailbutton');

document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_ty7dcyk';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Su mensaje ha sido enviado exitosamente, Gracias!');
                location.reload()
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });