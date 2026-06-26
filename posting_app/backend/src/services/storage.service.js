require("dotenv").config();
const imagekit = require('@imageKit/nodejs')


const imageKit = new imagekit({
  privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadImage(buffer){

  const result = await imageKit.files.upload({
    file:buffer.toString("base64"),
    fileName:"Image.jpg"
  })

  return result;
}

module.exports = uploadImage;