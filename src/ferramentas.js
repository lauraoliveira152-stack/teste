const ferramentas = {
  // 1. Metro e Pés (1m = 3.28084ft)
  metroParaPes: (m) => m * 3.28084,
  pesParaMetro: (p) => p / 3.28084,

  // 2. Km e Milha (1km = 0.621371mi)
  kmParaMilha: (km) => km * 0.621371,
  milhaParaKm: (mi) => mi / 0.621371,

  // 3. Cm e Polegada (1in = 2.54cm)
  cmParaPolegada: (cm) => cm / 2.54,
  polegadaParaCm: (pol) => pol * 2.54,

  // 4. Kg e Libra (1kg = 2.20462lb)
  kgParaLibra: (kg) => kg * 2.20462,
  libraParaKg: (lb) => lb / 2.20462,

  // 5. Fahrenheit e Celsius
  fahrParaCels: (f) => ((f - 32) * 5) / 9,
  celsParaFahr: (c) => (c * 9) / 5 + 32,

  // 6. Kelvin e Celsius
  kelvinParaCels: (k) => k - 273.15,
  celsParaKelvin: (c) => c + 273.15,

  // 7. Real e Dólar (Fixado a R$ 5.00 para teste)
  realParaDolar: (brl) => brl / 5.0,
  dolarParaReal: (usd) => usd * 5.0,

  // 8. Real e Euro (Fixado a R$ 5.40 para teste)
  realParaEuro: (brl) => brl / 5.4,
  euroParaReal: (eur) => eur * 5.4,

  // 9. Real e Won (Fixado: R$ 1 = 260 KRW)
  realParaWon: (brl) => brl * 260,
  wonParaReal: (krw) => krw / 260,

  // 10. Horas e Milissegundos
  horasParaMs: (h) => h * 3600000,
  msParaHoras: (ms) => ms / 3600000,

  // 11. Decimal e Binário
  decParaBin: (dec) => dec.toString(2),
  binParaDec: (bin) => parseInt(bin, 2),

  // 12. Decimal e Hexadecimal
  decParaHex: (dec) => dec.toString(16).toUpperCase(),
  hexParaDec: (hex) => parseInt(hex, 16),

  // 13. Timestamp para Data/Hora amigável
  tsParaData: (ts) => new Date(ts).toLocaleString("pt-BR"),

  // 14. Rachador de contas
  racharConta: (total, pessoas) => total / pessoas,

  // 15. Calculadora de percentual
  calcularPercentual: (valor, porcentagem) => (valor * porcentagem) / 100,

  // 16. Aplicador de desconto
  aplicarDesconto: (valor, descontoPct) => valor - (valor * descontoPct) / 100,

  // 17. Arredondador
  arredondar: (valor, casas) => Number(valor.toFixed(casas)),

  // 18. Diferença entre datas (retorna string amigável de dias)
  diferencaDatas: (data1, data2) => {
    const diffMs = Math.abs(new Date(data1) - new Date(data2));
    const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    return `${dias} dia(s) de diferença`;
  },
};

module.exports = Conversores;
