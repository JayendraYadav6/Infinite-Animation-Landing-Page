var tl = gsap.timeline({
    repeat: -1
});

tl
.to(".imagecontainer",{
    ease: Expo.easeInOut,
    width:"100%",
    duration: 1,
    stagger: 2
},'a')
.to("#text h1",{
    ease: Expo.easeInOut,
    top: 0,
    stagger: 2.5
},'a')
.to("#text h1",{
    delay: 2,
    ease: Expo.easeInOut,
    top: "-110%",
    stagger: 2.5
},'a')