import { check } from 'express-validator' 

class kategoriValidation{
    static CreateKategoriValidation = [ 
        check("nama_kategori")
        .not()
        .isEmpty().withMessage('Field nama kategori tidak boleh kosong'),
        check("deskripsi_kategori")
        .not()
        .isEmpty()
        .withMessage("Field deskripsi kategori tidak boleh kosong"),
    ]

    static UpdateKategoriValidation = [ 
        check("nama_kategori")
        .not()
        .isEmpty().withMessage('Field nama kategori tidak boleh kosong'),
        check("deskripsi_kategori")
        .not()
        .isEmpty()
        .withMessage("Field deskripsi kategori tidak boleh kosong"),
    ]
}

export default kategoriValidation;