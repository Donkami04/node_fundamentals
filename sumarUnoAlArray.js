let a = [9,9]

function upArray(arr){
    let b = arr.join('');
    let c = (+b) + 1;
    let d = c.toString().split('');
    let e = d.map(x =>{
        return  (+x);
    })
    console.log(e);
};
upArray(a);

