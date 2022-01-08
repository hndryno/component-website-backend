import { check } from 'express-validator' 

class menuValidation{
    static CreateCsValidation = [ 
        check("nama")
        .not()
        .isEmpty().withMessage('Field nama menu tidak boleh kosong'),
        check("urutan")
        .not()
        .isEmpty()
        .withMessage("Field urutan tidak boleh kosong"),
        check("icon")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong")
    ]

    static UpdateCsValidation = [ 
        check("nama")
        .not()
        .isEmpty().withMessage('Field nama menu tidak boleh kosong'),
        check("urutan")
        .not()
        .isEmpty()
        .withMessage("Field urutan tidak boleh kosong"),
        check("icon")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong")
    ]
}

export default menuValidation;