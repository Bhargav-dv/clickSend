//Client side JS

const number = document.getElementById("number");
// const msg = document.getElementById("msg");
const btn = document.getElementById("button");

const sendMsg = () =>{
    //non numberic char
    const num = number.value;
    // const text = msg.value;
    console.log(num)
    fetch("/",{
        method:"post",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
        num:num, 
        // text:text
        })
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
};

btn.addEventListener("click", sendMsg,false);

