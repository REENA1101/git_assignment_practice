
function prime(num)

{   if(num<=1){
    return false;
}
    let flag=true;
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
        {
           flag=false;
        }
    }
    return flag;


}

 let ans=prime(13);

 if(ans==true){
    console.log("Prime");
 }else{
    console.log("Not Prime")
 }