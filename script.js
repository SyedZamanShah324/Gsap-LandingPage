var sc = gsap.timeline()
sc.from(".nav h1 ",{
    duration: 0.5,
    opacity: 0,
    delay: 0.5,
    x: -100,
})



sc.from("ul", {
    duration: 0.5,
    opacity: 0,
    delay: 0.5,
    y: -100,
    stagger:1,
    

});
sc.from(".hero h1",{
    duration: 0.5,
    opacity: 0,
    delay: 0.5,
    y: 100,
    

})
sc.from(".box1", {duration: 0.5, opacity:0,delay:0.5,stagger:0.5,x:-100})

sc.from(".box3", {duration: 0.5, opacity:0,delay:0.5,stagger:0.5,x:100})
sc.from(".box2", {duration: 0.5, opacity:0,delay:0.5,stagger:0.5,y:100})



