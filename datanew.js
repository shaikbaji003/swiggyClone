// import { rejects } from "assert";
// import { resolve } from "path";

// export const getdata=async()=>{
//     let data23=[];
//     // var promise=new Promise((reso,rej)=>{
//     //     fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.4750871&lng=80.70480839999999&page_type=DESKTOP_WEB_LISTING`)
//     //     .then(response => response.json())
//     //     .then(res => {
//     //         console.log(res);
//     //         console.log(res?.data?.cards[2]?.data?.data?.cards)
//     //         reso(res?.data?.cards[2]?.data?.data?.cards)
//     //         //  data23=res?.data?.cards[2]?.data?.data?.cards
//     //     })
//     //     .catch(er=>{
//     //         rej(er)
//     //     })

//     // })
//     await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.4750871&lng=80.70480839999999&page_type=DESKTOP_WEB_LISTING`)
//         .then(response => response.json())
//         .then(res => {
//             console.log(res);
//             console.log(res?.data?.cards[2]?.data?.data?.cards)
//             // (res?.data?.cards[2]?.data?.data?.cards)
//              data23=res?.data?.cards[2]?.data?.data?.cards
//         })
  
// // data23=promise.then(data=>{
// //     return data
// // })
// return data23
// }