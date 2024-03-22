const isEmailValid = (input) => /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]){2,6}$/.test(input);
const removeAt = (email) => email.replace(/@(.*)$/, '');

function formatDate() {

    let date = new Date();
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };

    let formattedDate = date.toLocaleString("en-US", options);
    formattedDate = formattedDate.split('/');

    return `${formattedDate[2]}-${formattedDate[0]}-${formattedDate[1]}`;

}

module.exports = { 
    isEmailValid,
    removeAt,
    formatDate
}