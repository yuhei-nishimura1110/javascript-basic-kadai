const date =new Date()
const [Year, Month, Day] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
];

console.log(Year + '年' + Month + '月' + Day + '日')