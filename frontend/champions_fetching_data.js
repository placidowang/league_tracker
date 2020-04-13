//* update all champions video and skin video from youtube API *//

// const YOUTUBEKEY = "AIzaSyAhpNcXJY9KAmj0qL9gsZTqlOV8545d2ng"
// const getVideo = (championName,id) => {
//   fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${YOUTUBEKEY}&q=${championName}&type=video`)
//     .then(res => res.json())
//     .then(data => {
//         updateVideo(data.items[0].id.videoId,id)
//     })
// }

// const updateVideo = (videoId,championId) => {
//     let obj = {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             videoId
//         })
//     }
//     fetch(`http://localhost:3000/champions/${championId}`,obj)
// }

// const getAllChampions = () => {
//     fetch("http://localhost:3000/champions")
//     .then(res => res.json())
//     .then(data => {
//         for(let i = 0; i < data.length ; i ++) {
//             // if(data[i].videoId === ""){
//             //     let name = data[i].name.split(" ").join("-")
//             //     getVideo(`${name}-spotlight`,data[i].id)
//             // }
//             if(data[i].skins.length > 1){
//                 for(let j = 1; j < data[i].skins.length; j ++){
//                     if(data[i].skins[j].videoId === ""){
//                         let skinName = data[i].skins[j].name.split(" ").join("-")
//                         getSkinVideo(`${skinName}-spotlight`,data[i].id,j,data[i].skins)
//                     }
//                 }
//             }
//         }
//     })
// }

// const getSkinVideo = (skinName,id,index,skinArr) => {
//     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${YOUTUBEKEY}&q=${skinName}&type=video`)
//     .then(res => res.json())
//     .then(data => {
//         skinArr[index].videoId = data.items[0].id.videoId
//         updateSkinVideo(id,skinArr)
//     })
// }

// const updateSkinVideo = (championId,skins) => {
//     let obj = {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             skins
//         })
//     }
//     fetch(`http://localhost:3000/champions/${championId}`,obj)
// }

// getAllChampions()


//* get all champions from API *//

// const fetchData = () => {
//     fetch("http://ddragon.leagueoflegends.com/cdn/10.7.1/data/en_US/champion.json")
//     .then(res => res.json())
//     .then(data => {
//         console.log(Object.keys(data.data))
//         for(var champion in data.data){
//             getChampionData(champion)
//         }
//     })
// }

// const getChampionData = (champion_name) => {
//     fetch(`http://ddragon.leagueoflegends.com/cdn/10.7.1/data/en_US/champion/${champion_name}.json`)
//     .then(res => res.json())
//     .then(champion => uploadToJson(champion.data[champion_name]))
// }


// const uploadToJson = (data) => {
//     let champion_data = createChampion(data)
//     let obj = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(champion_data)
//     }
//     fetch("http://localhost:3000/champions",obj)
// }

// const findVideo = (championName) => {
//     fetch()
// }

// const createChampion = (champion) => {
//     let champion_obj = {
//         key: champion.key,
//         name: champion.name, 
//         videoId: "",
//         title: champion.title,
//         blurb: champion.blurb, 
//         info: champion.info, 
//         type: champion.tags,
//         partype: champion.partype,
//         stats: champion.stats,
//         icon_image: `http://ddragon.leagueoflegends.com/cdn/10.7.1/img/champion/${champion.image.full}`,
//         skins: [],
//         lore: champion.lore,
//         allytips: champion.allytips,
//         enemytips: champion.enemytips,
//         spells: [],
//         passive: {
//             name: champion.passive.name,
//             description: champion.passive.description,
//             image: `http://ddragon.leagueoflegends.com/cdn/10.7.1/img/passive/${champion.passive.image.full}`
//         }
//     }

//     champion_obj.skins = champion.skins.map(skin => {return {
//         name: skin.name, 
//         image: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name.split(" ").join("")}_${skin.num}.jpg`,
//         videoId: ""}
//     })

//     champion_obj.spells = champion.spells.map(spell => {return {
//         id: spell.id,
//         name: spell.name, 
//         description: spell.description,
//         cooldown: spell.cooldown,
//         image: `http://ddragon.leagueoflegends.com/cdn/10.7.1/img/spell/${spell.image.full}`
//     }})

//     return champion_obj
// }

// fetchData()

// fetch("http://localhost:3000/champions")
// .then(res => res.json())
// .then(data => {
//     let filterdata = data.map(champion => {return {name: champion.name, vieo: champion.videoId, skins: champion.skins.map(skin => skin.videoId)}})
//     // filterdata = filterdata.filter((champion,index) => filterdata.indexOf(champion) === index)
//     // console.log(filterdata.reduce((a,b) => a + b , 0))
//     console.log(filterdata)
// })