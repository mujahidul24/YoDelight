// welcome modal
var flashSaleModal = document.getElementById("myModal");
var flashSaleClose = flashSaleModal.getElementsByClassName("close")[0];

window.onload = function() {
    flashSaleModal.style.display = "block";
}

flashSaleClose.onclick = function() {
    flashSaleModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == flashSaleModal) {
        flashSaleModal.style.display = "none";
    }
}

// Inquiry modal
var quotationModal = document.getElementById("summaryModal");
var quotationCloseSpan = quotationModal.getElementsByClassName("close")[0];
var quotationCloseButton = quotationModal.getElementsByClassName("close-btn")[0];

quotationCloseSpan.onclick = function() {
    quotationModal.style.display = "none";
}

quotationCloseButton.onclick = function() {
    quotationModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == quotationModal) {
        quotationModal.style.display = "none";
    }
}

// Form submission handler
document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    displaySummary();
});

function displaySummary() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var summaryContent = `
        <strong>Name:</strong> ${name} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Phone:</strong> ${phone} <br>
        <strong>Message:</strong> ${message}
    `;

    document.getElementById("summaryContent").innerHTML = summaryContent;
    quotationModal.style.display = "flex";
}
