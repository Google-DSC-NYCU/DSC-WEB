import axios from 'axios'
import { writeFileSync, mkdirSync } from 'fs'
import { join, resolve } from 'path'


const __dirname = resolve();


function saveJSON (name, data) {
  mkdirSync(join(__dirname, './public/json/'), { recursive: true })
  writeFileSync(join(__dirname, `./public/json/${name}.json`), JSON.stringify(data))
  mkdirSync(join(__dirname, './src/assets/json/'), { recursive: true })
  writeFileSync(join(__dirname, `./src/assets/json/${name}.json`), JSON.stringify(data))
}

async function fetchRemoteData () {
  const { data } = await axios.get("https://dsc-web-b6cbd-default-rtdb.firebaseio.com/post.json")
  .catch(err=>{
    console.log(err);
  })
  return data;
}

(async () => {
  let result = await fetchRemoteData();
  saveJSON('post', result)
  console.log(result)
})()