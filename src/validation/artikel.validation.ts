import { check } from 'express-validator' 

class artikelValidation{
    static CreateArtikelValidation:any = [ 
        check("nama_artikel")
        .not()
        .isEmpty().withMessage('Field nama artikel tidak boleh kosong'),
        check("deskripsi_artikel")
        .not()
        .isEmpty().withMessage('Field deskripsi tidak boleh kosong'),
        check("kategori_id")
        .not()
        .isEmpty()
        .withMessage("Field kategori_id tidak boleh kosong"),
        check("isi")
        .not()
        .isEmpty()
        .withMessage("Field isi tidak boleh kosong"),
    ]

    static UpdateArtikelValidation:any = [ 
        check("nama_artikel")
        .not()
        .isEmpty().withMessage('Field nama artikel tidak boleh kosong'),
        check("deskripsi_artikel")
        .not()
        .isEmpty().withMessage('Field deskripsi tidak boleh kosong'),
        check("kategori_id")
        .not()
        .isEmpty()
        .withMessage("Field kategori_id tidak boleh kosong"),
        check("isi")
        .not()
        .isEmpty()
        .withMessage("Field isi tidak boleh kosong"),
    ]
}

export default artikelValidation;