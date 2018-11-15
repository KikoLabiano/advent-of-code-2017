function suma(a){
    let sum=0;
    let arr = a.split('');
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            sum+=Number(arr[i]);
        }
    }
    if(arr[0]==arr[arr.length-1]){
        sum+=Number(arr[0]);
    }
    console.log(sum);
}

suma("1122");