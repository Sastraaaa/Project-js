const quotes = {
  quote1:
    "Di era yang serba cepat, kesabaran bukanlah kelemahan—melainkan kekuatan tersembunyi. Orang yang bisa menunggu dengan tenang seringkali melihat lebih jelas daripada yang terburu-buru.",
  quote2:
    "Kita hidup di dunia yang memuja kesibukan, tetapi kebahagiaan sejati justru ditemukan dalam momen-momen ketika kita berani berhenti sejenak.",
  quote3:
    "Media sosial memberimu ribuan suara, tapi jarang yang bertanya: Sudahkah kau mendengarkan suara sendiri?",
  quote4:
    "Zaman sekarang, banyak orang terjebak dalam perlombaan mengumpulkan 'likes', tapi lupa bagaimana merasakan 'life'.",
  quote5:
    "Teknologi memudahkan segalanya, kecuali menemukan makna. Kita terhubung dengan semua orang, tapi seringkali merasa sendiri.",
};

const authors = {
  author1: "Sazz",
  author2: "Rizz",
  author3: "Vynn",
  author4: "Sazz",
  author5: "Vynn",
};

document.getElementById("generateQuote").addEventListener("click", () => {
  const quoteKeys = Object.keys(quotes);
  const randomIndex = Math.floor(Math.random() * quoteKeys.length);
  const selectedQuoteKey = quoteKeys[randomIndex];
  const selectedAuthorKey = `author${randomIndex + 1}`;

  document.getElementById("quote").textContent = quotes[selectedQuoteKey];
  document.getElementById(
    "author"
  ).textContent = `- ${authors[selectedAuthorKey]}`;
});
