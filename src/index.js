function reverse(number) {
    return parseInt(number.toString().split('').reverse().join(''), 10);
}

module.exports = reverse;
