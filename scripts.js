function validateForm() {
    
    document.querySelectorAll('.error').forEach(e => e.textContent = '');

    let isValid = true;

    
    const userID = document.getElementById('userID').value;
    if (userID.length < 6) {
        document.getElementById('userIDError').textContent = 'Käyttäjä ID:n on oltava vähintään 6 merkkiä pitkä.';
        isValid = false;
    }

    
    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@£$€&%#]).{6,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Salasanan on oltava vähintään 6 merkkiä pitkä, sisältäen yhden numeron, ison kirjaimen ja erikoismerkin (!@£$€&%#).';
        isValid = false;
    }

    
    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('nameError').textContent = 'Nimi on pakollinen.';
        isValid = false;
    }

    
    const address = document.getElementById('address').value;
    if (!address) {
        document.getElementById('addressError').textContent = 'Osoite on pakollinen.';
        isValid = false;
    }

    
    const country = document.getElementById('country').value;
    if (!country) {
        document.getElementById('countryError').textContent = 'Valitse maa.';
        isValid = false;
    }


    const postalCode = document.getElementById('postalCode').value;
    if (!/^\d{5}$/.test(postalCode)) {
        document.getElementById('postalCodeError').textContent = 'Postinumeron on oltava 5 numeroa.';
        isValid = false;
    }

    
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Anna kelvollinen sähköpostiosoite.';
        isValid = false;
    }

    
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').textContent = 'Valitse sukupuoli.';
        isValid = false;
    }

    
    const finnish = document.getElementById('finnish').checked;
    const otherLanguage = document.getElementById('otherLanguage').checked;
    if (!finnish && !otherLanguage) {
        document.getElementById('languageError').textContent = 'Valitse vähintään yksi kieli.';
        isValid = false;
    }

   
    if (isValid) {
        alert('Lomake on täytetty.');
    }
}
