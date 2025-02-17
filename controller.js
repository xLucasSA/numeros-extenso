const { toWords } = require("./utils");

async function convertNumber(req, res) {
  let { number } = req.body;

  number = number.toString();

  if (isNaN(number) || !number.trim() || number.indexOf(".") != -1)
    return res.status(400).json({ message: "Favor inserir um número válido" });

  if (number.length >= 67)
    return res.status(400).json({ message: "Favor inserir um número menor" });

  try {
    const text = await toWords(number);

    return res.status(200).json({ message: text });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
}

module.exports = convertNumber;
