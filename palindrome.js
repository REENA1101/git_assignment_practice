function reverse(){
    string="aman";
    for(let i=string.length;i>=0;i--){
        bag=bag+str[i];
    } 
    return bag;   
}
let rev_str=reverse();

if(str==rev_str){
    console.log("palindrome");

}else{
    console.log("NA");
}