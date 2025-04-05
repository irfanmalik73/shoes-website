
gsap.from(".headline p",{
    transform:"translateX(-100%)",
    duration:5,
    repeat:-1,
    ease:"none",
})

gsap.from(".text h1",{
    y:100,
    opacity:0,
    duration:1.3,
    
})
gsap.from(".hidden p",{
    y:30,
    opacity:0,
    duration:1.1,
})
gsap.from(".hidden button",{
    y:50,
    opacity:0,
    duration:1.1,
})
gsap.from(".image",{
    x:200,
    opacity:0,
    duration:1.1,
})
gsap.from(".image2",{
    scrollTrigger:{
        trigger:".image2",
        start:"top 80%",
    },
    x:200,
    opacity:0,
    duration:1.1,
})


function image(){
    var image1=document.querySelector(".d1 img")
    image1.addEventListener("mousemove",function(e){
        image1.setAttribute("src","c837a6_368addd3225e4019b4ef4d4741d451ea~mv2.jpg")
        
        
    })



    image1.addEventListener("mouseleave",function(){
        image1.setAttribute("src","c837a6_a9b28eeb2641483ab21505b3b575a752~mv2.jpg")
      
    })
    
    
    var image2=document.querySelector(".d2 img")
    image2.addEventListener("mousemove",function(){
        image2.setAttribute("src","c837a6_a679b52993ee4a8f852c812ea7deb9d9~mv2 (1).jpg")
       
    })
    image2.addEventListener("mouseleave",function(){
        image2.setAttribute("src","c837a6_da34515a9ca049c9b729fa92e5f3e25f~mv2.jpg")
    })
    
    
    var image3=document.querySelector(".d3 img")
    image3.addEventListener("mousemove",function(){
        image3.setAttribute("src","c837a6_a2c4dfe107b54c778c2826b01e24c855~mv2 (1).jpg")
    })
    image3.addEventListener("mouseleave",function(){
        image3.setAttribute("src","c837a6_96481ea655134a6789d7fdc909b280d2~mv2.jpg")
    })
    
    
    var image4=document.querySelector(".d4 img")
    image4.addEventListener("mousemove",function(){
        image4.setAttribute("src","c837a6_22011337f6aa46b2866ec703742ac4ca~mv2.jpg")
        
    })
    image4.addEventListener("mouseleave",function(){
        image4.setAttribute("src","c837a6_9e4500e0fa504a0b9cda0a2390b5e9a8~mv2.jpg")
       
    })
    
    
}
image();




gsap.registerPlugin(ScrollTrigger)
gsap.to(".main",{
    scrollTrigger:{
        trigger:".main",
        scrub:1,
        
    },
        

    duration:20,
    
})

// Initialize Lenis
const lenis = new Lenis({
    duration:0.2,
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


gsap.from(".marquee h1",{
    scrollTrigger:{
        trigger:".marquee h1",
        scrub:3,
        start:"top 100%",
        end:"top -50%",
        
    },
    duration:2,
    transform:"translateX(-100%)",
    // repeat:-1,
    // ease:'none'
})

gsap.to(".mmm img",{
    scrollTrigger:{
        trigger:".mmm img",
        scrub:1,
        start:"top -20%",
        end:"top -140%",
    },
    duration:0.1,
    scale:1,

})