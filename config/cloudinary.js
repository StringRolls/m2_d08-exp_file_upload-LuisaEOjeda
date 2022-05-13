
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage} = require('multer-storage-cloudinary') // this prepares de Cloudinary object

//STEP 3
cloudinary.config({ // this configuration is to access clodinary instances
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET 
})
// STEP 2
const storage = new CloudinaryStorage({ // this is the constructor of the object we defined in line 4
  cloudinary,
  params: {
    allowed_formats: ['svg', 'png', 'jpg'],
    folder: 'cloudinary-test' // his is the folder in cloudinary
  }
}) // here we define the storage where the images will be located

//STEP 1
module.exports = multer({ storage })