function addZero(num){
    if (num < 10) {return "0" + String(num)}
    else {return String(num)}
}

function convertTime(epoch) {
    const date = new Date(epoch);
    return ("Last updated at " + date.getFullYear() + "-" + addZero(date.getMonth()+1) + "-" + addZero(date.getDate())
     + " " + addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds()));
}

const n = '\x4d\x6a\x63\x33';

function authenticate() {
    return (btoa(localStorage.pw) == n);
}