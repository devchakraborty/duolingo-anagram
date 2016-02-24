export default function(word1, word2) {
  if (typeof(word1) !== "string" || typeof(word2) !== "string") {
    throw new Error("Non-string passed to anagram()")
  }
  if (word1.length != word2.length) {
    return false
  }
  if (word1.length === 0) {
    return true
  }
  var letters = {}
  for (var l = 0; l < word1.length; l++) {
    var letter = word1[l]
    if (letters[letter] == null) letters[letter] = 1
    else letters[letter] += 1
  }
  for (var l = 0; l < word2.length; l++) {
    var letter = word2[l]
    if (letters[letter] != null && letters[letter] > 0) {
      letters[letter] -= 1
    } else {
      return false
    }
  }
  return true
}
