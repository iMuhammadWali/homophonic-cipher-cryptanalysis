const getFrequencies = (text, regEx) => {
  const extractedMatches = text.match(regEx) || [];
  const frequencies = {};

  extractedMatches.forEach((match) => {
    frequencies[match] = (frequencies[match] || 0) + 1;
  });

  return frequencies;
};

module.exports = getFrequencies;