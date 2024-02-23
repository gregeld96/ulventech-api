const { sha256 } = require("ethereum-cryptography/sha256");
const { utf8ToBytes, bytesToHex } = require("ethereum-cryptography/utils");
const { generateUUID } = require("./uuid");
const moment = require("moment");

const JWT_SECRET = process.env.JWT_KEY || "1234QWERTY";

function createSha256(text) {
  return bytesToHex(sha256(utf8ToBytes(text)));
};

function generateRandomStr(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function unixGenerator(date) {
    return (moment(date).unix() / 1000)
}

function order(number) {

    let prefix = "KE/";
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();

    return `${prefix}${year}/${month > 9 ? month : `0${month}`}/${date > 9 ? date : `0${date}`}/${number}`;
};

function generateUniqueCode(value, length = 8) {
    let prefix = "KE";

    const referralCodeString = `${value}-${JWT_SECRET}-${generateUUID()}`;
    const sha256Hash = createSha256(referralCodeString);

    return `${prefix}${sha256Hash.substring(0, length).toUpperCase()}`;
};

function slugGenerator(value) {
    return value.toString().toLowerCase().replace(/ /g, '-')
};

module.exports = {
    createSha256,
    generateRandomStr,
    unixGenerator,
    order,
    generateUniqueCode,
    slugGenerator
}