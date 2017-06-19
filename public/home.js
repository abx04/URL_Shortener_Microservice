const send=document.getElementById('send');
const div=document.getElementById('div');
const url =document.getElementById('url');

send.onclick=function () {
    let xhr=new XMLHttpRequest();
    let link=url.value;
    xhr.open('GET','/new/'+encodeURIComponent(link),true);
    xhr.send(null);
    
    xhr.onload=function () {
        div.innerHTML=xhr.responseText;
    }
}