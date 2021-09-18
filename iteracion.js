var elements = document.getElementsByClassName("card");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseenter', function () {
        this.className += ' bg-primary text-white';
    }, false);
    elements[i].addEventListener('mouseout', function () {
        this.className = ' card d-inline-block';
    }, false);
}
var chkBitcoins = document.getElementById("chkBitcoins");
chkBitcoins.indeterminate = true;

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()