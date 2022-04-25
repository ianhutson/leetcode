// let returnOddNumbers = function(str){
//     str = str.split('');
//     let arr = []
//     for(let i = 0; i < str.length; i++){
//         if(str[i] % 2 !== 0 && (Number(str[i]))){
//             arr.push(str[i])
//         }
//     }
//     arr.join('')
//     return arr
// }

// returnOddNumbers('1abc1234')

const accounts = [
    {
        "id": "d0ad88b9-5943-4450-a950-81d467344b97",
        "created": "2021-09-14T20:26:38.967081Z",
        "currency": "EUR",
        "availableBalance": 7000.000000000000000000,
    },
    {
        "id": "e851072d-1669-41cc-8ca7-406f4abdd01c",
        "created": "2021-09-14T20:23:48.243509Z",
        "currency": "USD",
        "availableBalance": -50.500000000000000000,
    },
    {
        "id": "f851072d-1669-41cc-8ca7-406f4abdd01c",
        "created": "2021-09-14T20:23:48.243509Z",
        "currency": "JPY",
        "availableBalance": 25.500000000000000000,
    } 
]

let getUSDBalance = function(accounts){
    for (let i = 0; i <= accounts.length; i++){
        if(accounts[i]["currency"] == "USD"){
            return accounts[i]["availableBalance"]
        }
    }
}

getUSDBalance(accounts)

