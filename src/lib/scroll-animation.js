import gsap from 'gsap'

export const scrollAnimation = (position, target, isMobile, onUpdate) => {
  const tl = gsap.timeline()

  tl.to(position, {
    x: -0.3865285186723755,
    y: 0.65093250452266,
    z: 3.291981445353388,
    scrollTrigger: {
      trigger: '.design-section',
      start: 'top bottom',
      end: 'top top',
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: -0.06560683249403759,
      y: 0.896913625358572,
      z: 0.016845374241984127,
      scrollTrigger: {
        trigger: '.design-section',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
        immediateRender: false,
      },
    })
    .to('.jumbotron-section', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.design-section',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
        immediateRender: false,
      },
    })
    .to('.design-section-content', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.design-section',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(position, {
      x: -0.006481546031629091,
      y: 1.6598132556605187,
      z: -4.71728332720769,
      scrollTrigger: {
        trigger: '.display-section',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: 0.003700484872971921,
      y: 0.7416840173957322,
      z: 0.007860600715634675,
      scrollTrigger: {
        trigger: '.display-section',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
        immediateRender: false,
      },
    })
    .to('.display-section', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.display-section',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
        immediateRender: false,
      },
    })
}
