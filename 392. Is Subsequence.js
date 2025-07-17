const isSubsequence = (s, t) => {
  if (s.length > t.length) return false;
  const t_length = t.length;
  let subsequence = 0;
  for (let i = 0; i < t_length; i++) {
    if (s[subsequence] === t[i]) {
      subsequence++;
    }
  }
  return subsequence === s.length
};
