
const animRight = document.querySelectorAll(".anim-right");
const animLeft = document.querySelectorAll(".anim-left");


window.addEventListener("scroll",applyAnimation);

applyAnimation();

function applyAnimation(){
    const triggerTop = window.innerHeight * 0.8;

    animLeftFnc(triggerTop);

    animRightFnc(triggerTop);
}

function animLeftFnc(triggerTop){
    animLeft.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        console.log(triggerTop);
        if(boxTop > triggerTop){
            box.classList.add("anim-left");
        }else{
            box.classList.remove("anim-left");
        }
    });
}

function animRightFnc(triggerTop){
    animRight.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop > triggerTop){
            box.classList.add("anim-right");
        }else{
            box.classList.remove("anim-right");
        }
    });
}
