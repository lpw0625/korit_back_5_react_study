const menu1 = {
    path: "/test/menu",
    params: {
        page: 1,
        searchValue : "테스트"
    }
}

const result = "/test/menu?page=1&searchValue=테스트";

const result2 = menu1.path + "?"
console.log(result2);

const entries = Object.entries(menu1.params);
console.log(entries.map(([key,value])  => key + "=" + value).join("&"));

const names = ["이평원", "이평투", "이평쓰리"];
const names2 = names.join("&"); // 문자열을 중간에 끼워넣을 수 있다 .
console.log(names2);

//entries : key랑 value를 묶어서 배열로 가져 온다.

