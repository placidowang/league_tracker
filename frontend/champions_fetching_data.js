
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

// const createChampion = (champion) => {
//     let champion_obj = {
//         key: champion.key,
//         name: champion.name, 
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
//         image: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name.split(" ").join("")}_${skin.num}.jpg`}
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