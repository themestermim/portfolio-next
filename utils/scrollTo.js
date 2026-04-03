export const scrollToElement = (targetId) => {
  if (!targetId) return;

  const element = document.getElementById(targetId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offset = elementPosition - 80;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
};
