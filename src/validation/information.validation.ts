import { check } from 'express-validator' 

class informationValidation{
    static CreateCsValidation = [ 
        check("nama_website")
        .not()
        .isEmpty().withMessage('Field nama_website tidak boleh kosong'),
        check("deskripsi")
        .not()
        .isEmpty()
        .withMessage("Field deskripsi tidak boleh kosong"),
        check("lokasi")
        .not()
        .isEmpty()
        .withMessage("Field lokasi tidak boleh kosong"),
        check("lokasi")
        .not()
        .isEmpty()
        .withMessage("Field lokasi tidak boleh kosong"),
        check("facebook")
        .not()
        .isEmpty()
        .withMessage("Field facebook tidak boleh kosong"),
        check("instagram")
        .not()
        .isEmpty()
        .withMessage("Field instagram tidak boleh kosong"),
        check("twitter")
        .not()
        .isEmpty()
        .withMessage("Field twitter tidak boleh kosong")
    ]

    static UpdateCsValidation = [ 
        check("nama_website")
        .not()
        .isEmpty().withMessage('Field nama_website tidak boleh kosong'),
        check("deskripsi")
        .not()
        .isEmpty()
        .withMessage("Field deskripsi tidak boleh kosong"),
        check("lokasi")
        .not()
        .isEmpty()
        .withMessage("Field lokasi tidak boleh kosong"),
        check("lokasi")
        .not()
        .isEmpty()
        .withMessage("Field lokasi tidak boleh kosong"),
        check("facebook")
        .not()
        .isEmpty()
        .withMessage("Field facebook tidak boleh kosong"),
        check("instagram")
        .not()
        .isEmpty()
        .withMessage("Field instagram tidak boleh kosong"),
        check("twitter")
        .not()
        .isEmpty()
        .withMessage("Field twitter tidak boleh kosong")
    ]
}

export default informationValidation;