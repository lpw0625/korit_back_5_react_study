main();

function main() {
    p1(3, "data1").then(result => console.log(result));
    setTimeout(() => p2("data2").then(result => console.log(result)), 4000);
    p2("data3").then(result => p3(result, 100).then(result => console.log(result)));
    p4("data4");
    console.log("출력");

}

    function p1 (time, data) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(data);
            }, time * 1000);
        });
}

async function p2(data) { // async에서는 return을 해줘야 한다. 
    return data; /// >>> async에 p2가 닿는 순간 promise가 된다. 이거 하나 자체로 비동기가 된다.
                    /// promise를 함수화시키는것 >> async 
                    /// 하지만 resolve를 얻을 수 없다.
}

async function p3(data, value) {
    return {
        [data]: value
    }
}

async function p4(data) {
    // await는 async 안에서만 쓸 수 있다.  p2가 리턴을 하면 받아오고
                            // async로 감싸줘야 한다. 순서대로 동작을 한다.
    const r2 = await p3(await p2(data), 200); // 그 다음에 p3를 실행시켜라<
    console.log(r2); 
}