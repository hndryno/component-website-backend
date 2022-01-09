import { check } from 'express-validator' 

class menuValidation{
    static CreateCsValidation = [ 
        check("nama")
        .not()
        .isEmpty().withMessage('Field nama menu tidak boleh kosong'),
        check("link")
        .not()
        .isEmpty()
        .withMessage("Field link tidak boleh kosong"),
        check("icon")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong")
    ]

    static UpdateCsValidation = [ 
        check("nama")
        .not()
        .isEmpty().withMessage('Field nama menu tidak boleh kosong'),
        check("link")
        .not()
        .isEmpty()
        .withMessage("Field link tidak boleh kosong"),
        check("icon")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong")
    ]
}

export default menuValidation;