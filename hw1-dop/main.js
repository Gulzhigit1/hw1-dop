let num = prompt('')

if (isNaN(num)){
    console.log('Введите только число');
}else{
    if (num % 2 === 0){
        console.log('четное');
    }else{
        console.log('не четное');
    }
}

alert('2')
let num2 = prompt('')

if (isNaN(num2)){
    console.log('введите только число');
}else{
    if (num2 >= 0){
        console.log('положительное');
    }else{
        console.log('отрицательное');
    }
}
