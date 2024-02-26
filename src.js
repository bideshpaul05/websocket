import { WebSocketServer } from "ws";
const ws = WebSocketServer('ws://localhost:8080')
ws.onopen = ()=>{
    console.log("connected to server ws")
}
ws.onmessage = (e)=>{
    console.log(e)
}
let count=0;
document.getElementById("add").addEventListener("click",()=>{
    count=count+1;
    document.getElementsByClassName("value")[0].innerText=  count;
})