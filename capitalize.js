function capitalize(string) {
    const formatedString = string[0].toUpperCase() + string.substring(1);
    return formatedString;
}

module.exports = capitalize;
