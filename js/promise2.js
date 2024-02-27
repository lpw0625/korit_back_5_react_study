main();

function main() {
    new Promise((resolve,reject) => {
        console.log(1);
        console.log(2);
        setTimeout(() => {
            console.log(4);
            resolve(100000);
        }, 3000);
    
        }).then((num) => {   // reslove 결과 값을 사용하는 단계에서 then을 쓴다.
             console.log("then 실행")
        });
        console.log(3)
        }
   



/*setTimeout(() => {
    console.log(1)         
    console.log(2)
}, 3000); // >>> 자체가 비동기로 동작

    console.log(3)
    
}*/