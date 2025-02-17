const ones = [
  "",
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
  "onze",
  "doze",
  "treze",
  "quatorze",
  "quinze",
  "dezesseis",
  "dezessete",
  "dezoito",
  "dezenove",
];
const tens = [
  "",
  "dez",
  "vite",
  "trinta",
  "quarenta",
  "cinquenta",
  "sessenta",
  "setenta",
  "oitenta",
  "noventa",
];
const hundreds = [
  "",
  "cem",
  "dozentos",
  "trezentos",
  "quatrocentos",
  "quinhentos",
  "seiscentos",
  "setecentos",
  "oitocentos",
  "novecentos",
];
const thousandsNames = [
  "",
  [" mil", " mil"],
  [" milhão", " milhões"],
  [" bilhão", " bilhões"],
  [" trilhão", " trilhões"],
  [" quatrilhão", " quatrilhões"],
  [" quintilhão", " quintilhões"],
  [" sextilhão", " sextilhões"],
  [" septilhão", " septilhões"],
  [" octilhão", " octilhões"],
  [" nonilhão", " nonilhões"],
  [" decilhão", " decilhões"],
  [" undecilhão", " undecilhões"],
  [" dodecilhão", " dodecilhões"],
  [" tredecilhão", " tredecilhões"],
  [" quattuordecilhão", " quattuordecilhões"],
  [" quindecilhão", " quindecilhões"],
  [" sexdecilhão", " sexdecilhões"],
  [" septendecilhão", " septendecilhões"],
  [" octodecilhão", " octodecilhões"],
  [" novendecilhão", " novendecilhões"],
  [" vigintilhão", " vigintilhões"],
];

async function toWords(numString) {
  const num = BigInt(numString);
  if (num < 0) throw new Error("Número deve ser maior que zero");

  if (num === 0) return "zero";

  //1 - 20
  if (num < 20) return ones[num];

  if (numString.length === 2) {
    if (numString[1] === "0") return tens[numString[0]];

    return tens[numString[0]] + " e " + ones[numString[1]];
  }

  //100 - 999
  if (numString.length == 3) {
    if (numString[1] === "0" && numString[2] === "0")
      return hundreds[numString[0]];
    else {
      if (numString[0] === "1") {
        return "cento e " + (await toWords(numString[1] + numString[2]));
      } else
        return (
          hundreds[numString[0]] +
          " e " +
          (await toWords(numString[1] + numString[2]))
        );
    }
  }

  //1000 - 999e+63
  if (numString.length >= 4) {
    const rest = numString.length % 3 === 0 ? 3 : numString.length % 3;
    const end = BigInt(numString.substring(rest));
    const thousandsIndex = parseInt((numString.length - 1) / 3);

    const currentString = numString.substring(0, rest);
    const unit =
      BigInt(currentString) === 1
        ? thousandsNames[thousandsIndex][0]
        : thousandsNames[thousandsIndex][1];

    if (end === 0) {
      return (await toWords(currentString)) + unit;
    }

    return (
      (await toWords(currentString)) +
      unit +
      " e " +
      (await toWords(end.toString()))
    );
  }
}

module.exports = {
  toWords,
};
