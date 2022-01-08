import { check } from 'express-validator' 

class subMenuValidation{
    static CreateSubMenuValidation = [ 
        check("menu_id")
        .not()
        .isEmpty().withMessage('Field nama menu tidak boleh kosong'),
        check("nama")
        .not()
        .isEmpty()
        .withMessage("Field nama tidak boleh kosong"),
        check("urutan")
        .not()
        .isEmpty()
        .withMessage("Field urutan tidak boleh kosong"),
        check("icon")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong"),
        check("url")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong"),
        check("target")
        .not()
        .isEmpty()
        .withMessage("Field target tidak boleh kosong")
    ]

    static UpdateSubMenuValidation = [ 
        check("menu_id")
        .not()
        .isEmpty().withMessage('Field nama menu tidak boleh kosong'),
        check("nama")
        .not()
        .isEmpty()
        .withMessage("Field nama tidak boleh kosong"),
        check("urutan")
        .not()
        .isEmpty()
        .withMessage("Field urutan tidak boleh kosong"),
        check("icon")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong"),
        check("url")
        .not()
        .isEmpty()
        .withMessage("Field icon tidak boleh kosong"),
        check("target")
        .not()
        .isEmpty()
        .withMessage("Field target tidak boleh kosong")
    ]
}

export default subMenuValidation;