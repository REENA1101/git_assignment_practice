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

prime(13);