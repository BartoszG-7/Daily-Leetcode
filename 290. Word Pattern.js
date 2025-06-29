var wordPattern = function (pattern, s) {
  let sArr = s.split(" ");
  let map1 = Object.create(null);
  let map2 = Object.create(null);

  if (pattern.length !== sArr.length) return false;

  for (let i = 0; i < sArr.length; i++) {
    if (pattern[i] in map1) {
      if (map1[pattern[i]] !== sArr[i]) return false;
    } else {
      map1[pattern[i]] = sArr[i];
    }

    if (sArr[i] in map2) {
      if (map2[sArr[i]] !== pattern[i]) return false;
    } else {
      map2[sArr[i]] = pattern[i];
    }
  }
  return true;
};
