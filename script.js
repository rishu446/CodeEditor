function run(){
    let htmlCode=document.getElementById("html_code").value;
    let cssCode=document.getElementById("css_code").value;
    let jsCode=document.getElementById("js_code").value;
    let output=document.getElementById("output");

    output.contentDocument.body.innerHTML=htmlCode;
}

