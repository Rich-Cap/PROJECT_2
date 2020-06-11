$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#inputemails");
  var passwordInput = $("input#inputPassword");
  var firstNameInput = $("input#firstName");
  var lastNameInput = $("input#lastName");
  var streetInput = $("input#inputAddress");
  var cityInput = $("input#inputCity");
  var stateInput = $("input#inputState");
  var zipInput = $("input#inputZip");
  var phoneInput = $("input#inputPhone");
  var creditInput = $("input#inputCredit");
  var pharmaIdInput=$("input#inputPharma");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    alert("i m clicked from singup")
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      fname: firstNameInput.val().trim(),
      lname: lastNameInput.val().trim(),
      street: streetInput.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val().trim(),
      zipcode: zipInput.val().trim(),
      phone: phoneInput.val().trim(),
      ccard: creditInput.val().trim(),
      PharmacyId: pharmaIdInput.val().trim()


    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.fname, userData.lname, userData.street, userData.city, userData.state, userData.zipcode, userData.phone, userData.ccard, userData.PharmacyId);
    emailInput.val("");
    passwordInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
    streetInput.val("");
    cityInput.val("");
    stateInput.val("");
    zipInput.val("");
    phoneInput.val("");
    creditInput.val("");
    pharmaIdInput.val("");

  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, firstName, lastName, street, city, state, zip, phone, credit, PharmacyId) {
    $.post("/api/signup", {
      email: email,
      password: password,
      fname: firstName,
      lname: lastName,
      street: street,
      city: city,
      state: state,
      zipcode: zip,
      phone: phone,
      ccard: credit,
      PharmacyId: PharmacyId

    })
      .then(function (data) {
        window.location.replace("/order");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
