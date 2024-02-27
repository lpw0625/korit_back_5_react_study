/*main();

function main() {
    const promises = [
        // 정의 상태.ㅖ
        new Promise((resolve, reject)  => setTimeout(() => resolve(1), 3000)),
        new Promise((resolve, reject)  => setTimeout(() => resolve(2), 2000)),
        new Promise((resolve, reject)  => setTimeout(() => resolve(3), 1000)),

    ];

    Promise.all(promises).then(result => console.log(result));
}


// 결과 값은 [1,2,3]이 나온다 왜?
// Promise,all은 처리의 순서 상관없이 배열 순으로 그대로 출력이 되기 때문이다 */

