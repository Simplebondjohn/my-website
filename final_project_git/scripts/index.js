document.addEventListener("DOMContentLoaded", function () {
    const preorderRadio = document.getElementById("fpreorder");
    const ideaRadio = document.getElementById("ffoodidea");
    const preorderFields = document.getElementById("preorder-fields");
    const submitButton = document.getElementById("submit");

    function togglePreorderFields() {
        if (preorderRadio.checked) {
            preorderFields.style.display = "block";
        } else {
            preorderFields.style.display = "none";
        }
    }

    function on_submit_button_clicked(event) {
        event.preventDefault();

        const emailField = document.getElementById("femail");
        const messageField = document.getElementById("fmessage");
        const firstNameField = document.getElementById("fname");
        const lastNameField = document.getElementById("flname");

        const field_value = emailField.value;
        const field2_value = messageField.value;

        emailField.style.backgroundColor = "";
        messageField.style.backgroundColor = "";

        if (field_value.trim() === "" && field2_value.trim() === "") {
            emailField.style.backgroundColor = "red";
            messageField.style.backgroundColor = "red";
            alert("Email is required!");
            alert("A message is required!");

            setTimeout(() => {
                emailField.style.backgroundColor = "";
                messageField.style.backgroundColor = "";
            }, 500);

        } else if (field_value.trim() === "") {
            emailField.style.backgroundColor = "red";
            alert("Email is required!");

            setTimeout(() => {
                emailField.style.backgroundColor = "";
            }, 500);

        } else if (field2_value.trim() === "") {
            messageField.style.backgroundColor = "red";
            alert("A message is required!");

            setTimeout(() => {
                messageField.style.backgroundColor = "";
            }, 500);

        } else {
            alert(
                "Submitted values\n"
                + "\nFirst name: " + firstNameField.value
                + "\nLast name: " + lastNameField.value
                + "\nEmail: " + field_value
                + "\nMessage: " + field2_value
            );
        }
    }

    /* Only run preorder code if those elements exist on the page */
    if (preorderRadio && ideaRadio && preorderFields) {
        preorderRadio.addEventListener("change", togglePreorderFields);
        ideaRadio.addEventListener("change", togglePreorderFields);
        togglePreorderFields();
    }

    /* Only attach submit listener if submit button exists */
    if (submitButton) {
        submitButton.addEventListener("click", on_submit_button_clicked);
    }
});