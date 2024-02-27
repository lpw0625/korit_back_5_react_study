// 프로미스 개념 

/**
 * 프로미스 객체 생성 
 * 
 * Promise 객체 생성을 할려면 먼저 new 키워드와 Promise 생성자 함수를 사용하면 된다. 
 * 
 * 이때, Promise 생성자 안에 두개의 매개변수를 가진 콜백 함수를 넣게 된다.
 * 1. 작업이 성공을 했을때 성공(resolve)임을 알려주는 객체
 * 
 * 2. 작업이 실패를 했을 때 실패(reject)임을 알려주는 오류 객체
 *
 * ================================
 * 
 */

const myPromise = new Promise((resolve, reject) => {
	// 비동기 작업 수행
    const data = fetch('서버로부터 요청할 URL');
    
    if(data)
    	resolve(data); // 만일 요청이 성공하여 데이터가 있다면
    else
    	reject("Error"); // 만일 요청이 실패하여 데이터가 없다면
}) 

/**
 * 비동기 작업이 성공을 했느냐 혹은 실패를 했느냐에 따라 나뉘어 질 수 있다.
 * 작업이 성공을 했다면 resolve() 성공 매서드를 호출한다.
 * 작업이 실패를 했다면 reject() 실패 매서들을 호출한다. 
 * 
 */

/**
 * 
 * 그렇다면 코드를 작성 했으니 다음 작업인 연결과 처리는 어떻게? 
 * 만일 처리가 성공해서 resovle(data)가 호출이 된다면
 * 
 * 바로 .then() 으로 이어지며 then 메서드의 콜백 함수에서 성공에 대한 
 * 추가 처리를 진행 .
 */

myPromise
    .then((value) => { // 성공적으로 수행했을 때 실행될 코드
    	console.log("Data: ", value); // 위에서 return resolve(data)의 data값이 출력된다
    })
    .catch((error) => { // 실패했을 때 실행될 코드
     	console.error(error); // 위에서 return reject("Error")의 "Error"가 출력된다
    })
    .finally(() => { // 성공하든 실패하든 무조건 실행될 코드
    	
    })

    /**
     * 반대로 처리가 실패를 하여 프로미스 객체 내부에서 reject("Error")를 호출하게 된다면
     * 바로 catch()로 이어져 catch 매서드의 콜백 함수에서 성공에 대한 추가 처리를 진행.
     */

    // 프로미스 객체를 반환하는 함수 생성
    // function myPromise() {
   // return new Promise((resolve, reject) => {
      // if (/* 성공 조건 */) {
       // resolve(/* 결과 값 */);
    //  } else {
    //    reject(/* 에러 값 */);
    //  }
   // });
   // } 
  
  // 프로미스 객체를 반환하는 함수 사용
  myPromise()
      .then((result) => {
        // 성공 시 실행할 콜백 함수
      })
      .catch((error) => {
        // 실패 시 실행할 콜백 함수
      });
  