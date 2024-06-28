// Script for "Doggie Day Spaw" website / Service Page

// Author: Angela Flynn

////////////////////////////////////////


// Switch language between French and English on Services Page
document.getElementById("frenchBtn").addEventListener("click", function() {
    const translations = {
        frenchBtn: '<a href="#"> Français </a>',
        englishBtn: '<a href="#"> Anglais </a>',
        title: "SPAW <br> JOURNÉE <br> CHIEN",
        fetch: '<a href="./index.html" target="_blank"> Apporter </a>',
        booking: '<a href=./booking.html" target="_blank"> Prendre rendez-vous </a>',
        serviceTitle1: "Services de spaw sans rendez-vous",
        nailTrimTitle: "Coupe d'ongles",
        nailTrimText: "*Service sans rendez-vous",
        faceTrimTitle: "Coupe du visage",
        faceTrimText: "*Service sans rendez-vous",
        brushTitle: "Brossage",
        brushText: "*Service sans rendez-vous",
        smallPrice: "petit $10.00",
        largePrice: "grand $15.00",
        grindingPrice: "ponçage supplémentaire $5.00",
        brushPrice: "$15.00 par 10 minutes",
        apptTitle: "Services de spa uniquement sur rendez-vous",
        bathTitle: "Bain et brossage",
        bathSmallPrice: "petit - à partir de $30.00",
        bathLargePrice: "grand - à partir de $45.00",
        groomTitle: "Toilettage complet",
        groomSmallPrice: "petit - à partir de $55.00",
        groomLargePrice: "grand - à partir de $65.00",
        priceNote: "*Les prix sont susceptibles de changer, voir le toiletteur pour plus de détails*",
        bookApptBtn: '<a href="/website/booking.html"> Réservez un rendez-vous en ligne! </a>'
        
    };  

    document.getElementById("frenchBtn").innerHTML =  translations.frenchBtn;
    document.getElementById("englishBtn").innerHTML = translations.englishBtn;
    document.getElementById("title").innerHTML = translations.title;
    document.getElementById("fetch").innerHTML = translations.fetch;
    document.getElementById("booking").innerHTML = translations.booking;
    document.getElementById("serviceTitle1").innerHTML = translations.serviceTitle1;
    document.getElementById("nailTrimTitle").innerHTML = translations.nailTrimTitle;
    document.getElementById("nailTrimText").innerHTML = translations.nailTrimText;
    document.getElementById("faceTrimTitle").innerHTML = translations.faceTrimTitle;
    document.getElementById("faceTrimText").innerHTML = translations.faceTrimText;
    document.getElementById("brushTitle").innerHTML = translations.brushTitle;
    document.getElementById("brushText").innerHTML = translations.brushText;
    document.getElementById("smallPrice").innerHTML = translations.smallPrice;
    document.getElementById("largePrice").innerHTML = translations.largePrice;
    document.getElementById("grindingPrice").innerHTML = translations.grindingPrice;
    document.getElementById("brushPrice").innerHTML = translations.brushPrice;
    document.getElementById("apptTitle").innerHTML = translations.apptTitle;
    document.getElementById("bathTitle").innerHTML = translations.bathTitle;
    document.getElementById("bathSmallPrice").innerHTML = translations.bathSmallPrice;
    document.getElementById("bathLargePrice").innerHTML = translations.bathLargePrice;
    document.getElementById("groomTitle").innerHTML = translations.groomTitle;
    document.getElementById("groomSmallPrice").innerHTML = translations.groomSmallPrice;
    document.getElementById("groomLargePrice").innerHTML = translations.groomLargePrice;
    document.getElementById("priceNote").innerHTML = translations.priceNote;
    document.getElementById("bookApptBtn").innerHTML = translations.bookApptBtn;

});

document.getElementById("englishBtn").addEventListener("click", function() {
    const translations = {
        frenchBtn: '<a href="#"> French </a>',
        englishBtn: '<a href="#"> English </a>',
        title: "DOGGIE <br> DAY <br> SPAW",
        fetch: '<a href="./index.html" target="_blank"> Fetch </a>',
        booking: '<a href="./booking.html" target="_blank"> Book Appointment </a>',
        serviceTitle1: "Walk-In Spaw Services",
        nailTrimTitle: "Nail Trim",
        nailTrimText: "*Walk-In Service",
        faceTrimTitle: "Face Trim",
        faceTrimText: "*Walk-In Service",
        brushTitle: "Brush",
        brushText: "*Walk-In Service",
        smallPrice: "small $10.00",
        largePrice: "large $15.00",
        grindingPrice: "gringing additional $5.00",
        brushPrice: "$15.00 per 10 minutes",
        apptTitle: "Appointment Only Spaw Services",
        bathTitle: "Bath & Brush",
        bathSmallPrice: "small - starting at $30.00",
        bathLargePrice: "large - starting at $45.00",
        groomTitle: "Full Groom",
        groomSmallPrice: "small - starting at $55.00",
        groomLargePrice: "large - starting at $65.00",
        priceNote: "*Prices subject to change depending, see groomer for details*",
        bookApptBtn: '<a href="/website/booking.html"> Book an Appointment Online! </a>'

    };  

    document.getElementById("frenchBtn").innerHTML = translations.frenchBtn;
    document.getElementById("englishBtn").innerHTML = translations.englishBtn;
    document.getElementById("title").innerHTML = translations.title;
    document.getElementById("fetch").innerHTML = translations.fetch;
    document.getElementById("booking").innerHTML = translations.booking;
    document.getElementById("serviceTitle1").innerHTML = translations.serviceTitle1;
    document.getElementById("nailTrimTitle").innerHTML = translations.nailTrimTitle;
    document.getElementById("nailTrimText").innerHTML = translations.nailTrimText;
    document.getElementById("faceTrimTitle").innerHTML = translations.faceTrimTitle;
    document.getElementById("faceTrimText").innerHTML = translations.faceTrimText;
    document.getElementById("brushTitle").innerHTML = translations.brushTitle;
    document.getElementById("brushText").innerHTML = translations.brushText;
    document.getElementById("smallPrice").innerHTML = translations.smallPrice;
    document.getElementById("largePrice").innerHTML = translations.largePrice;
    document.getElementById("grindingPrice").innerHTML = translations.grindingPrice;
    document.getElementById("brushPrice").innerHTML = translations.brushPrice;
    document.getElementById("apptTitle").innerHTML = translations.apptTitle;
    document.getElementById("bathTitle").innerHTML = translations.bathTitle;
    document.getElementById("bathSmallPrice").innerHTML = translations.bathSmallPrice;
    document.getElementById("bathLargePrice").innerHTML = translations.bathLargePrice;
    document.getElementById("groomTitle").innerHTML = translations.groomTitle;
    document.getElementById("groomSmallPrice").innerHTML = translations.groomSmallPrice;
    document.getElementById("groomLargePrice").innerHTML = translations.groomLargePrice;
    document.getElementById("priceNote").innerHTML = translations.priceNote;
    document.getElementById("bookApptBtn").innerHTML = translations.bookApptBtn;

});