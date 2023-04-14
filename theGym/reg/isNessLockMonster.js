function isNessLockMonster(s) {
  return /3.50/.test(s) || /three fify/.test(s) || /tree fiddy/.test(s);
}
console.log(
  isNessLockMonster(
    "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
  )
);
