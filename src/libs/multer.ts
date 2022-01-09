import multer from 'multer'
import path from 'path';

const storage = multer.diskStorage({
    destination: '../uploads',
    filename: function ( req, file, cb ) {
        console.log(file)
        cb(null, new Date().getTime() + '-' + file.originalname);
    },
})

const multerSettings = {
    storage,
    fileFilter: function (req:any, file:any, callback:any) {
        let ext = path.extname(file.originalname);

        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    limits:{
        fileSize: 1024 * 1024
    }
}

export default multerSettings