// #benefits animation

gsap.timeline ({
  scrollTrigger: {
      trigger: ".benefits",
      start: "top center",
      end: "bottom bottom",
      markers: false,
      scrub: false,
      pin: false,
      duration: 10,
      stagger: 2
  }
})

.fromTo(".benefits h2", {opacity: 0, x: 10}, {opacity: 1, x:0, duration: 0.2})
.fromTo(".intro__txt", {opacity: 0, x: -10}, {opacity: 1, x:0, duration: 0.2})
.fromTo(".benefits__grid-item-img", {opacity: 0, scale: 0.4}, {opacity: 1, scale: 1})
.fromTo(".benefits__grid-item h4", {opacity: 0, y: 20}, {opacity: 1, y: 0})
.fromTo(".benefits__grid-item p", {opacity: 0, y: 20}, {opacity: 1, y: 0})

// #video animation

gsap.timeline ({
  scrollTrigger: {
      trigger: ".video",
      start: "top center",
      end: "bottom bottom",
      markers: false,
      scrub: false,
      pin: false,
      duration: 0.2
  }
})
.fromTo(".video", {opacity: 0}, {opacity: 1, duration: 0.3})
.fromTo(".video__left video", {opacity: 0, scale: 0.4}, {opacity: 1, scale: 1})
.fromTo(".video__right h2", {opacity: 0, x: 30}, {opacity: 1, x:0})
.fromTo(".video__right p", {opacity: 0, y: 50}, {opacity: 1, y:0})
.fromTo(".video__right a", {opacity: 0, x: -10}, {opacity: 1, x: 0})

// #ebank animation

gsap.timeline ({
  scrollTrigger: {
      trigger: ".ebank",
      start: "top center",
      end: "bottom bottom",
      markers: false,
      scrub: false,
      pin: false,
      duration: 0.2
  }
})
.fromTo(".ebank__right", {opacity: 0}, {opacity: 1})
.fromTo(".ebank__left h2", {opacity: 0, x: -30}, {opacity: 1, x:0})
.fromTo(".ebank__left p", {opacity: 0, y: -50}, {opacity: 1, y:0})
.fromTo(".ebank__left a", {opacity: 0, x: 10}, {opacity: 1, x: 0})

// #magazin animation

gsap.timeline ({
  scrollTrigger: {
      trigger: ".magazin",
      start: "top center",
      end: "bottom bottom",
      markers: false,
      scrub: false,
      pin: false
  }
})
.fromTo(".magazin h2", {opacity: 0, x: -30}, {opacity: 1, x:0, duration: 0.2})
.fromTo(".magazin span", {opacity: 0, x: 10}, {opacity: 1, x: 0, duration: 0.2})
.fromTo(".magazin__grid-img", {opacity: 0, x: 10}, {opacity: 1, x: 0, duration: 0.2})
.fromTo(".magazin h3", {opacity: 0, x: 10}, {opacity: 1, x: 0, duration: 0.2})
.fromTo(".magazin p", {opacity: 0, x: 10}, {opacity: 1, x: 0, duration: 0.2})
.fromTo(".magazin a", {opacity: 0, x: -10}, {opacity: 1, x: 0, duration: 0.2})

// #magazin animation

gsap.timeline ({
  scrollTrigger: {
      trigger: ".form",
      start: "top center",
      end: "bottom bottom",
      markers: false,
      scrub: false,
      pin: false
  }
})
.fromTo(".form", {opacity: 0, y: 50}, {opacity: 1, y:0, duration: 0.4})

gsap.timeline ({
  scrollTrigger: {
      trigger: ".tabela",
      start: "top center",
      end: "bottom bottom",
      markers: false,
      scrub: false,
      pin: false
  }
})
.fromTo(".tabela", {opacity: 0, y: 50}, {opacity: 1, y:0, duration: 0.4})

gsap.timeline ({
  scrollTrigger: {
      trigger: "footer",
      start: "top center",
      end: "bottom bottom",
      markers: false,
      scrub: false,
      pin: false
  }
})
.fromTo("footer", {opacity: 0}, {opacity: 1, duration: 0.4})