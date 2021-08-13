const axios = require('axios')
const { writeFileSync, mkdirSync } = require('fs')
const { join } = require('path')


function saveJSON (name, data) {
  mkdirSync(join(__dirname, '../../public/json/'), { recursive: true })
  writeFileSync(join(__dirname, `../../public/json/${name}.json`), JSON.stringify(data))
  mkdirSync(join(__dirname, '../../src/assets/json/'), { recursive: true })
  writeFileSync(join(__dirname, `../../src/assets/json/${name}.json`), JSON.stringify(data))
}

async function fetchRemoteData (name) {
  const { data } = await axios.get(`https://dsc-web-b6cbd-default-rtdb.firebaseio.com/${name}.json`)
  .catch(err=>{
    console.log(err);
    return -1;
  })
  saveJSON(name, data)
  return 0;
}

(async () => {
  console.log(await fetchRemoteData('post'))
  console.log(await fetchRemoteData('member'))
})()