// Script for "Doggie Day Spaw" website / Index/Fetch Page

// Author: Angela Flynn

////////////////////////////////////////

// Switch language between French and English on Index Page
document.getElementById("frenchBtn").addEventListener("click", function() {
    const translations = {
        frenchBtn: '<a href="#"> Français </a>',
        englishBtn: '<a href="#"> Anglais </a>',
        title: "SPAW <br> JOURNÉE <br> CHIEN",
        fetch: '<a href="./services.html" target="_blank"> Apporter </a>',
        booking: '<a href=./booking.html" target="_blank"> Prendre rendez-vous </a>',
        bioText: "Chez Spaw Journée Chien, votre chiot est notre priorité!<br> Avec plus de 10 ans d'expérience, notre toiletteuse Angie <br> chouchoutera votre chiot pour qu'il vive sa meilleure vie! <br> Notre culture est uniquement des vibrations positives et <br> notre établissement est équipé de tout ce dont votre chien <br> a besoin pour avoir une apparence et se sentir au mieux! <br> Passez aujourd'hui pour une coupe de griffes et/ou une <br> coupe de visage sans rendez-vous ou prenez rendez-vous <br> et offrez à votre chiot une journée au spa!",
        locationTitle: "Emplacement",
        locationText: "123 rue Water <br> Saint John's, NL <br> A1C 1A5",
        hoursTitle: "Heures d'ouverture",
        hoursText: "Lundi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8h - 17h <br> Mardi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8h - 17h <br> Mercredi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10h - 19h <br> Jeudi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fermé <br> Vendredi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9h - 18h  <br> Samedi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10h - 19h  <br> Dimanche &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fermé <br>",
        phoneTitle: "Téléphone",
        emailTitle: "Courriel",
        reviewTitle: "Découvrez quelques-uns de nos avis positifs!",
        reviewText: "Benji adore absolument ses visites au Spaw!! Angie prend tellement <br> soin de lui et il rentre toujours à la maison en ayant l'air super!",
        reviewText2: "Angie toilette mon chien, Cooper, depuis presque 5 ans maintenant! <br> Il passe toujours un bon moment et revient frais et fabuleux!",
        reviewText3: "Aujourd'hui, c'était notre première visite à Doggie Day Spaw! <br> L'établissement était tellement propre!! Angie a fait une coupe <br> de visage et une coupe de griffes à notre petit yorkie, Chewie, <br> en service sans rendez-vous. Nous n'avons pas eu à attendre <br> longtemps du tout ! Nous reviendrons certainement!",
        leaveReviewTitle: "Avez-vous apprécié votre visite? Laissez-nous un avis!",
        labelName: "Nom",
        labelReview: "Avis",
        submit: 'Soumettre',
        successMessage: "Avis envoyé avec succès!",
        topOfPage: '<a href="index.html"> Haut de la page </a>',
        
    };  

    document.getElementById("frenchBtn").innerHTML =  translations.frenchBtn;
    document.getElementById("englishBtn").innerHTML = translations.englishBtn;
    document.getElementById("title").innerHTML = translations.title;
    document.getElementById("fetch").innerHTML = translations.fetch;
    document.getElementById("booking").innerHTML = translations.booking;
    document.getElementById("bioText").innerHTML = translations.bioText;
    document.getElementById("locationTitle").innerHTML = translations.locationTitle;
    document.getElementById("locationText").innerHTML = translations.locationText;
    document.getElementById("hoursTitle").innerHTML = translations.hoursTitle;
    document.getElementById("hoursText").innerHTML = translations.hoursText;
    document.getElementById("phoneTitle").innerHTML = translations.phoneTitle;
    document.getElementById("emailTitle").innerHTML = translations.emailTitle;
    document.getElementById("reviewTitle").innerHTML = translations.reviewTitle;
    document.getElementById("reviewText").innerHTML = translations.reviewText;
    document.getElementById("reviewText2").innerHTML = translations.reviewText2;
    document.getElementById("reviewText3").innerHTML = translations.reviewText3;
    document.getElementById("leaveReviewTitle").innerHTML = translations.leaveReviewTitle;
    document.getElementById("labelName").innerHTML = translations.labelName;
    document.getElementById("labelReview").innerHTML = translations.labelReview;
    document.getElementById("submit").innerHTML = translations.submit;
    document.getElementById("successMessage").innerHTML = translations.successMessage;
    document.getElementById("topOfPage").innerHTML = translations.topOfPage;

});

document.getElementById("englishBtn").addEventListener("click", function() {
    const translations = {
        frenchBtn: '<a href="#"> French </a>',
        englishBtn: '<a href="#"> English </a>',
        title: "DOGGIE <br> DAY <br> SPAW",
        fetch: '<a href="./index.html" target="_blank"> Fetch </a>',
        booking: '<a href="./booking.html" target="_blank"> Book Appointment </a>',
        bioText: "At Doggie Day Spaw, your pup is our <br>priority! With over 10 years experience, <br>our groomer Angie will pamper your pup <br>letting them live their best life! <br>Our culture is pawsitive vibes only and <br>our facility is equipped with everything <br>your dog needs to look and feel their <br>best! Drop by today for a walk-in nail <br>trim and/or face-trim or book an <br>appointment and give your pup a spaw <br>day!",
        locationTitle: "Location",
        locationText: "123 Water Street <br> Saint John's, NL <br> A1C 1A5",
        hoursTitle: "Hours of Operation",
        hoursText: "Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8am - 5pm <br> Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8am - 5pm <br> Wednesday &nbsp;&nbsp;&nbsp; 10am - 7pm <br> Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed <br> Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9am - 6pm  <br> Saturday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10am - 7pm  <br> Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed <br>",
        phoneTitle: "Phone",
        emailTitle: "Email",
        reviewTitle: "Check out some of our Pawsitive Reviews!",
        reviewText: "Benji absolutely loves his visits to the Spaw!! Angie takes such good <br> care of him and he always comes home looking great!",
        reviewText2: "Angie has been grooming my dog, Cooper, for almost 5 years now! He <br> always has a great time and comes back fresh and fabulous!",
        reviewText3: "Today was our first visit to Doggie Day Spaw! The facility was so clean!! <br> Angie gave our little yorkie, Chewie, a face trim and nail trim as a walk-in <br> service. We didn't have to wait long at all! We will definitely be back!",
        leaveReviewTitle: "Enjoy your visit? Leave us a review!",
        labelName: "Name",
        labelReview: "Review",
        submit: 'Submit',
        successMessage: "Review successfully sent!",
        topOfPage: '<a href="index.html"> Top of Page </a>'

    };  

    document.getElementById("frenchBtn").innerHTML = translations.frenchBtn;
    document.getElementById("englishBtn").innerHTML = translations.englishBtn;
    document.getElementById("title").innerHTML = translations.title;
    document.getElementById("fetch").innerHTML = translations.fetch;
    document.getElementById("booking").innerHTML = translations.booking;
    document.getElementById("bioText").innerHTML = translations.bioText;
    document.getElementById("locationTitle").innerHTML = translations.locationTitle;
    document.getElementById("locationText").innerHTML = translations.locationText;
    document.getElementById("hoursTitle").innerHTML = translations.hoursTitle;
    document.getElementById("hoursText").innerHTML = translations.hoursText;
    document.getElementById("phoneTitle").innerHTML = translations.phoneTitle;
    document.getElementById("emailTitle").innerHTML = translations.emailTitle;
    document.getElementById("reviewTitle").innerHTML = translations.reviewTitle;
    document.getElementById("reviewText").innerHTML = translations.reviewText;
    document.getElementById("reviewText2").innerHTML = translations.reviewText2;
    document.getElementById("reviewText3").innerHTML = translations.reviewText3;
    document.getElementById("leaveReviewTitle").innerHTML = translations.leaveReviewTitle;
    document.getElementById("labelName").innerHTML = translations.labelName;
    document.getElementById("labelReview").innerHTML = translations.labelReview;
    document.getElementById("submit").innerHTML = translations.submit;
    document.getElementById("successMessage").innerHTML = translations.successMessage;
    document.getElementById("topOfPage").innerHTML = translations.topOfPage;

});


// Submit a review and recieve a success message
document.getElementById("customerReview").addEventListener("submit", function(e){
    const name = document.getElementById("name").value;
    const review = document.getElementById("review").value;

    document.getElementById("successMessage").style.display="block";

    document.getElementById("customerReview").reset();

    setTimeout(function() {
        successMessage.style.display = "none";
    }, 4000);

    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({name, review});
    localStorage.setItem("reviews", JSON.stringify(reviews));

   e.preventDefault();
})

    