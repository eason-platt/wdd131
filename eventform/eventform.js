const form = document.getElementById("ticketForm");
const ticketType = document.getElementById("ticketType");
const studentCreds = document.getElementById("studentCreds");
const guestCreds = document.getElementById("guestCreds");
const output = document.getElementById("output");

const correctAccessCode = ""

function isPastDate(value) {
    const today = new Date();
    const chosenDate = new Date(value);
    return chosenDate < today;
}

ticketType.addEventListener("change", () => {
   studentCreds.classList.toggle("hidden",
       ticketType.value !== "student");
   guestCreds.classList.toggle("hidden",
       ticketType.value !== "guest");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const ticketType = form.ticketType.value.trim();
    const studentID = form.elements.namedItem("studentID").value.trim();
    const accessCode = form.elements.namedItem("accessCode").value.trim();

    if (firstName || lastName || email === "") {
        output.textContent = "Please fully complete the form.";
        return;
    }

    if (ticketType === "student" && studentID.length !== 9) {
        output.textContent = "Student I-number must be nine digits.";
        return;
    }

    if (ticketType === "guest" && guestCreds.value !==) {}

})