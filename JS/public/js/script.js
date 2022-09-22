let take = (id)=>{
    switch(id) {
        case "proj1":
            window.open("https://www.google.com","_self")
            break
        case "proj2":
            window.open("https://www.github.com","_self")
            break
        case "proj3":
            window.open("https://www.instagram.com","_self")
            break
        case "proj4":
            window.open("https://www.facebook.com","_self")
            break
    }
}

setTimeout(() => {
    let hove= document.getElementById('ab')
    let kj = document.getElementById('int')
    let div = document.getElementById('pro')
    div.style.display = 'block'
    div.style.transition = '0.9s ease-in-out'
    div.style.left = '40%'
    hove.style.left= "10%"
    kj.style.left= "10%"
    hove.style.transition= "0.9s ease-out"
    kj.style.transition= "0.9s ease-out"
    hove.style.transform = "rotate3d(90,80,-10,45deg)"
    kj.style.transform = "rotate3d(90,80,-10,45deg)"
}, 1050);
// let hov = ()=>{
//     let hove= document.getElementById('ab')
//     let kj = document.getElementById('int')
//     let div = document.getElementById('pro')
//     div.style.display = 'block'
//     div.style.transition = '0.7s ease-in-out'
//     div.style.left = '40%'
//     hove.style.left= "10%"
//     kj.style.left= "10%"
//     hove.style.transition= "0.8s ease-out"
//     kj.style.transition= "0.8s ease-out"
//     hove.style.transform = "rotate3d(90,80,-10,45deg)"
//     kj.style.transform = "rotate3d(90,80,-10,45deg)"
// }

setTimeout(() => {
    let di = document.getElementById('nav')
    di.style.transform = "rotate3d(-100,10,0,360deg)"
    di.style.transition = "0.5s ease-in"
}, 100);
let sub = ()=>{
    alert("Message Sent")
}
let br= (web)=>{
    switch(web) {
        case "box":
            window.open("https://github.com/ResponseTime","_self")
            break
            case "box1":
            window.open("https://www.linkedin.com/in/aayush-bhattacharjee/","_self")
            break
    }
}