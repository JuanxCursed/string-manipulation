export const Sentente = (string) => {
  return string
    .trim()
    .toLowerCase()
    .split('.')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('.')
};

export const Lower = (string) => {
  return string.trim().toLowerCase()
};

export const Upper = (string) => {
  return string.trim().toUpperCase()
};

export const Captalized = (string) => {
  return string
    .trim()
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
};

export const Title = (string) => {
  return string
    .trim()
    .toLowerCase()
    .split(' ')
    .map((word) => {
      if (word.length <= 2) return word
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
};

export const Alternating = (string) => {
  return string
    .trim()
    .toLowerCase()
    .split('')
    .map(function(char, index) {
      return index % 2 === 1 ? char.toUpperCase() : char.toLowerCase()
    })
    .join('')
};

export const Inverse = (string) => {
  return string
    .trim()
    .toLowerCase()
    .split('')
    .map(function(char, index) {
      return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    })
    .join('')
};

export const Reverse = (string) => {
  return string
    .trim()
    .split('')
    .reverse()
    .join('')
};
