let state =false
let btn = document.querySelector(".btn")
let record =document.querySelector(".record")
let toneArm =document.querySelector(".tone-arm")
let song =document.querySelector(".my-song")
let slider =document.querySelector(".slider")

btn.addEventListener("click",()=>{
    if (state==false)
    {
        record.classList.add("on")
        toneArm.classList.add("play")
        btn.classList.add("enable")
        setTimeout(()=>{
            song.play();
        },1000)
    }
    else
    {
        record.classList.remove("on")
        toneArm.classList.remove("play")
        btn.classList.remove("enable")

        song.pause();
    }
    state=!state
    // console.log(state)
})

slider.addEventListener("input",(e)=>{
    song.volume =Number(e.target.value)
})