function init(){
    canvas=document.getElementById('mycanvas');
    W=canvas.width=1000;
    H=canvas.height=550;
    pen=canvas.getContext('2d');
    size=85;
    arr=[];
    generate();
    draw2();
    console.log(arr);
}
function generate(){
    while(arr.length>0){
        arr.pop();
    }
    for(let i=0;i<size;i++){
        let x=Math.round(Math.floor((Math.random() * 100) + 1));
        arr.push(x);
    }
}
function draw3(index1=-1,index2=-1,key=-1){
    pen.clearRect(0,0,W,H);
    pen.font="15px Roboto";
    pen.fillText("element:",0,30);
    pen.fillText(key,55,30);
    var x=92,y=10,csx=7,csy=5;
    for(let i=0;i<size;i++){
        var fy=y;
        if(i>=index1 && i<=index2 && index1<=index2){
            pen.fillStyle="#FF0000";
        }
        else{
            pen.fillStyle="#FFFFFF";
        }
        for(let j=0;j<arr[i];j++){
            pen.fillRect(x,fy,csx,csy);
            fy+=csy;
        }
        fy+=3*csy;
        pen.fillStyle="white";
        pen.font="10px Roboto";
        pen.fillText(arr[i],x,fy);
        x+=(csx+3);
    }
}
function draw2(index1=-1,index2=-1){
    pen.clearRect(0,0,W,H);
    pen.font="15px Roboto";
    pen.fillText("element:",0,30);
    pen.fillText(index2,55,30);
    var x=92,y=10,csx=7,csy=5;
    for(let i=0;i<size;i++){
        var fy=y;
        if(i==index1){
            pen.fillStyle="#FF0000";
        }
        else{
            pen.fillStyle="#FFFFFF";
        }
        for(let j=0;j<arr[i];j++){
            pen.fillRect(x,fy,csx,csy);
            fy+=csy;
        }
        fy+=3*csy;
        pen.fillStyle="white";
        pen.font="10px Roboto";
        pen.fillText(arr[i],x,fy);
        x+=(csx+3);
    }
}
init();
document.getElementById("gen").addEventListener("click",function(){
    generate();
    draw2();
    console.log("new array generated!!!");
});
document.getElementById("linear").addEventListener("click",function(){
    var i=0,j=0;
    var ky = Math.round(Math.floor((Math.random() * 100) + 1));
    var t1=setInterval(lout,100);
    function lout(){
        if(i==size){
            alert("element not found");
            clearInterval(t1);
        }
        else{
            
                draw2(i+1,ky);
                if(arr[i] == ky)
                {
                    alert("element found at positon:"+(i+parseInt(1)));
                    draw2(i,ky);
                    clearInterval(t1);
                }
            }
            i++;
        }
    
    
});

document.getElementById("binary").addEventListener("click",function(){
    for(var u=0;u<size-1;u++)
    {
        for(var e = u+1;e<size;e++)
        {
            if(arr[u] > arr[e])
            {
                var tmp=arr[u];
                arr[u]=arr[e];
                arr[e]=tmp;
            }
        }
    }
    var i=0,j=size-1,mid;
    var ky = Math.round(Math.floor((Math.random() * 100) + 1));
    
    var t1=setInterval(uout,600);
    function uout(){
        if(i>j){
            draw3(-1,-1,ky);
            alert("element not found");
            clearInterval(t1);
            return;
        }
        else{
            
                draw3(i,j,ky);
                mid=Math.round(Math.floor((i+j)/2));
                if(arr[mid] == ky)
                {
                    draw3(mid,-1,ky);
                    alert("element found at positon:"+(mid+parseInt(1)));
                   // draw3(mid,-1,ky);
                    clearInterval(t1);
                    return;
                }

                
            }
            if(arr[mid] > ky)
                j=mid-1;

                else
                i=mid+1;
            
        }
    


    //     var key=parseInt(document.getElementById("bkey").value),s=0,e=size-1,mid;
    // var found=-1;
    // var res=document.getElementById("result");
    // var t1=setInterval(bsearch,600);
    // function bsearch(){
    //     if(s>e){
    //         clearInterval(t1);
    //         res.innerHTML="Element Not Found";
    //         draw();
    //         return;
    //     }
    //     drawb(s,e);
    //     mid=Math.round(Math.floor((s+e)/2));
    //     if(arr[mid]==key){
    //         found=mid;
    //         clearInterval(t1);
    //         res.innerHTML="Element found at index "+mid;
    //         draw(mid);
    //         return;
    //     }
    //     if(arr[mid]<key){
    //         s=mid+1;
    //     }
    //     else{
    //         e=mid-1;
    //     }
   // }
    
});