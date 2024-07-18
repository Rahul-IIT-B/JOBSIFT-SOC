export const checkImageURL = (url) => {
  if (!url) return false;
  const pattern = new RegExp(
    "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)(\\?.*)?$",
    "i"
  );
  const googlePattern = new RegExp(
    "^https?:\\/\\/encrypted-tbn\\d\\.gstatic\\.com\\/images\\?q=tbn:ANd9Gc.+$",
    "i"
  );
  return pattern.test(url) || googlePattern.test(url);
};
