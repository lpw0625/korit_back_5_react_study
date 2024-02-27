main();

let complete = [false, false, false, false];

function main() {
    
    const promises =
    [
    gugudan(0, 4, "이평원"),
    gugudan(1, 1, "이평투"),
    gugudan(2, 3, "이평쓰리"),
    gugudan(3, 2, "이평포")

    ];
    
    Promise.all(promises).then(result => {console.log(result)});
};

function gugudan(index, time, name) {
        const p = new Promise((resolve,reject) => { // 함수 정의부터 온다 하지만 이 함수정이가 매개변수인 resolve,reject 매개 변수는 순서가 정해져 있다.
            console.log(`${name}: 구구단 외워와라!!`);

                setTimeout(() => {
                    console.log(`${name}: 다외웠다.`);
                    //complete = complete.map((value, cIndex) => cIndex !== index ? value : true); // 4초후 실행.
                    // if(index % 2 == 0) {
                    // }
                    resolve(index);
                }, time * 1000);

        });
        return p;
    }
            // 이 함수 자체가 resolve
       
      
// Promise: 존재하지 않는 비동기를 만드는것. 