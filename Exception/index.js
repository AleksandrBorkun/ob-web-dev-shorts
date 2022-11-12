function imThrowingWception() {
  const a = {};

  a.showMeError();
}

try {
  console.log("before function");
  imThrowingWception();
  console.log("After function");
} catch (e) {
  console.log("Something went wrong");
} finally {
  console.log("I always here");
}
