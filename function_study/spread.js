const slime = {
    name: "슬라임",
    num:5
}

const cuteSlime = {
    ...slime,
    attribute: "cute"
}

const purpleCuteSlime = {
    ...cuteSlime,
    color:"purple",
    name: "slime"
}


console.log(purpleCuteSlime);

// 배열 spread

const nums = [1,2,3,4,5];
const num2 = [...nums,6,7,8,9,10];
const num3 = [...(num2.filter(n => n%2 === 0)),11,12,13,14,15];

console.log(num3);

const users = [
    {
        id: 1,
        name: "ㅇㅈㅊ"
    },
    {
        id: 2,
        name: "ㅇㅈ일"
    },
    {
        id: 3,
        name: "ㅇㅈ삼"
    },
    {
        id: 4,
        name: "ㅇㅈ사"
    }
];

const evenUsers = [...users.filter(user => user.id % 2 === 0),{id:5, name:"ㅇㅈㅇ"}];

console.log(users[0].id);