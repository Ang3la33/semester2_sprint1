// Script for "Doggie Day Spaw" website / Booking Page

// Author: Angela Flynn

////////////////////////////////////////


// Switch language between French and English on Booking Page
document.getElementById("frenchBtn").addEventListener("click", function() {
    const translations = {
        frenchBtn: '<a href="#"> Français </a>',
        englishBtn: '<a href="#"> Anglais </a>',
        title: "SPAW <br> JOURNÉE <br> CHIEN",
        fetch: '<a href="./services.html" target="_blank"> Apporter </a>',
        booking: '<a href=./booking.html" target="_blank"> Prendre rendez-vous </a>',
        locationTitle: "Emplacement",
        locationText: "123 rue Water <br> Saint John's, NL <br> A1C 1A5",
        hoursTitle: "Heures d'ouverture",
        hoursText: "Lundi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8h - 17h <br> Mardi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8h - 17h <br> Mercredi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10h - 19h <br> Jeudi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fermé <br> Vendredi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9h - 18h  <br> Samedi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10h - 19h  <br> Dimanche &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fermé <br>",
        phoneTitle: "Téléphone",
        emailTitle: "Courriel",
        bookOnlineTitle: "Réservez une journée au spa en ligne!",
        labelCustomerName: "Nom",
        labelCustomerNumber: "Numéro de téléphone",
        labelCustomerEmail: "Courriel",
        labelDogsName: "Nom du chien",
        labelDogsBreed: "Race du chien",
        labelServiceType: "Choisissez un service",
        labelAppt: "Sélectionnez une date et une heure",
        labelLeaveMessage: "Laissez un message (facultatif)",
        submitBtnBooking: "Soumettre",
        bookingSuccessMessage: "Votre rendez-vous a été enregistré!",
        bookingErrorMessage: "Veuillez remplir tous les champs obligatoires."

    };  

    document.getElementById("frenchBtn").innerHTML =  translations.frenchBtn;
    document.getElementById("englishBtn").innerHTML = translations.englishBtn;
    document.getElementById("title").innerHTML = translations.title;
    document.getElementById("fetch").innerHTML = translations.fetch;
    document.getElementById("booking").innerHTML = translations.booking;
    document.getElementById("locationTitle").innerHTML = translations.locationTitle;
    document.getElementById("locationText").innerHTML = translations.locationText;
    document.getElementById("hoursTitle").innerHTML = translations.hoursTitle;
    document.getElementById("hoursText").innerHTML = translations.hoursText;
    document.getElementById("phoneTitle").innerHTML = translations.phoneTitle;
    document.getElementById("emailTitle").innerHTML = translations.emailTitle;
    document.getElementById("bookOnlineTitle").innerHTML = translations.bookOnlineTitle;
    document.getElementById("labelCustomerName").innerHTML = translations.labelCustomerName;
    document.getElementById("labelCustomerNumber").innerHTML = translations.labelCustomerNumber;
    document.getElementById("labelCustomerEmail").innerHTML = translations.labelCustomerEmail;
    document.getElementById("labelDogsName").innerHTML = translations.labelDogsName;
    document.getElementById("labelDogsBreed").innerHTML = translations.labelDogsBreed;
    document.getElementById("labelServiceType").innerHTML = translations.labelServiceType;
    document.getElementById("labelAppt").innerHTML = translations.labelAppt;
    document.getElementById("labelLeaveMessage").innerHTML = translations.labelLeaveMessage;
    document.getElementById("submitBtnBooking").innerHTML = translations.submitBtnBooking;
    document.getElementById("bookingSuccessMessage").innerHTML = translations.bookingSuccessMessage;
    document.getElementById("bookingErrorMessage").innerHTML = translations.bookingErrorMessage;
});

document.getElementById("englishBtn").addEventListener("click", function() {
    const translations = {
        frenchBtn: '<a href="#"> French </a>',
        englishBtn: '<a href="#"> English </a>',
        title: "DOGGIE <br> DAY <br> SPAW",
        fetch: '<a href="./index.html" target="_blank"> Fetch </a>',
        booking: '<a href="./booking.html" target="_blank"> Book Appointment </a>',
        locationTitle: "Location",
        locationText: "123 Water Street <br> Saint John's, NL <br> A1C 1A5",
        hoursTitle: "Hours of Operation",
        hoursText: "Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8am - 5pm <br> Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8am - 5pm <br> Wednesday &nbsp;&nbsp;&nbsp; 10am - 7pm <br> Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed <br> Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9am - 6pm  <br> Saturday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10am - 7pm  <br> Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed <br>",
        phoneTitle: "Phone",
        emailTitle: "Email",
        bookOnlineTitle: "Book a Spaw Day Online!",
        labelCustomerName: "Name",
        labelCustomerNumber: "Phone Number",
        labelCustomerEmail: "Email",
        labelDogsName: "Dog's Name",
        labelDogsBreed: "Dog's Breed",
        labelServiceType: "Select a Service",
        labelAppt: "Select a Date & Time",
        labelLeaveMessage: "Leave a Message (Optional)",
        submitBtnBooking: "Submit",
        bookingSuccessMessage: "Your appointment has been saved!",
        bookingErrorMessage: "Please fill out all required fields.",

    };  

    document.getElementById("frenchBtn").innerHTML = translations.frenchBtn;
    document.getElementById("englishBtn").innerHTML = translations.englishBtn;
    document.getElementById("title").innerHTML = translations.title;
    document.getElementById("fetch").innerHTML = translations.fetch;
    document.getElementById("booking").innerHTML = translations.booking;
    document.getElementById("locationTitle").innerHTML = translations.locationTitle;
    document.getElementById("locationText").innerHTML = translations.locationText;
    document.getElementById("hoursTitle").innerHTML = translations.hoursTitle;
    document.getElementById("hoursText").innerHTML = translations.hoursText;
    document.getElementById("phoneTitle").innerHTML = translations.phoneTitle;
    document.getElementById("emailTitle").innerHTML = translations.emailTitle;
    document.getElementById("bookOnlineTitle").innerHTML = translations.bookOnlineTitle;
    document.getElementById("labelCustomerName").innerHTML = translations.labelCustomerName;
    document.getElementById("labelCustomerNumber").innerHTML = translations.labelCustomerNumber;
    document.getElementById("labelCustomerEmail").innerHTML = translations.labelCustomerEmail;
    document.getElementById("labelDogsName").innerHTML = translations.labelDogsName;
    document.getElementById("labelDogsBreed").innerHTML = translations.labelDogsBreed;
    document.getElementById("labelServiceType").innerHTML = translations.labelServiceType;
    document.getElementById("labelAppt").innerHTML = translations.labelAppt;
    document.getElementById("labelLeaveMessage").innerHTML = translations.labelLeaveMessage;
    document.getElementById("submitBtnBooking").innerHTML = translations.submitBtnBooking;
    document.getElementById("bookingSuccessMessage").innerHTML = translations.bookingSuccessMessage;
    document.getElementById("bookingErrorMessage").innerHTML = translations.bookingErrorMessage;
});


// Submit Booking Form and Display appropriate message 
document.getElementById("submitBtnBooking").addEventListener("click", function() {
    const customerName = document.getElementById("customerName").value;
    const customerNumber = document.getElementById("customerNumber").value;
    const customerEmail = document.getElementById("customerEmail").value;
    const dogsName = document.getElementById("dogsName").value;
    const dogsBreed = document.getElementById("dogsBreed").value;
    const bathAndBrush = document.getElementById("bathAndBrush").checked;
    const fullGroom = document.getElementById("fullGroom").checked;
    const appt = document.getElementById("appt").value;
    const leaveMessage = document.getElementById("leaveMessage").value;

    if (customerName && customerNumber && customerEmail && dogsName && dogsBreed && appt) {
        console.log({
            customerName,
            customerNumber,
            customerEmail,
            dogsName,
            dogsBreed,
            bathAndBrush,
            fullGroom,
            appt,
            leaveMessage
        });

        document.getElementById("appointmentForm").reset();

        const bookingSuccessMessage = document.getElementById("bookingSuccessMessage");
        bookingSuccessMessage.style.display = "block";
        const bookingErrorMessage = document.getElementById("bookingErrorMessage");
        bookingErrorMessage.style.display = "none";

        setTimeout(function() {
            bookingSuccessMessage.style.display = "none";
        }, 4000);
    } else {
        const bookingErrorMessage = document.getElementById("bookingErrorMessage");
        bookingErrorMessage.style.display = "block";
        const bookingSuccessMessage = document.getElementById("bookingSuccessMessage");
        bookingSuccessMessage.style.display = "none";

        setTimeout(function() {
            bookingErrorMessage.style.display = "none";
        }, 4000);
    }
});
