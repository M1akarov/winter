const tl = new TimelineMax();
const mySplitText = new SplitText(".header__text", { type: "chars" });
const chars = mySplitText.chars;

tl.from("header", 1, {
  x: "100%",
});

tl.from(".header__line", 1, {
  y: "-100%",
});

tl.from("nav", 0.5, {
  y: -20,
  opacity: 0,
});

tl.staggerFrom(chars, 0.45, { opacity: 0 }, 0.1);

tl.from("button", 1, {
  y: 50,
  opacity: 0,
});

tl.staggerFrom(".star", 0.35, { opacity: 0 }, 0.1);

gsap.from(".header__image", 3, {
  opacity: 0,
  x: 200,
  delay: 2.5,
  skewX: -15,
  skewY: -15,
});
