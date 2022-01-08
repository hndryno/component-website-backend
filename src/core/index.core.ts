class API {
    model:any
    constructor(model:any) {
        this.model = model
    }

    async create(q:any) {
        try{
            let params = {}

            if(q){
                params = q
            }

            let data = await this.model.create(params)

            return data
        }catch(err){
            throw err
        }
    }

    // async show(q){
    //     try{
    //         let params = {}

    //         if(q){
    //             params = q
    //         }

    //         let data = await this.model.findOne({where:{ id: params}})

    //         return data
    //     }catch(err){
    //         throw err
    //     }
    // }

    // async update(id ,q){
    //     try{
    //         let params = {}

    //         if(q){
    //             params = q
    //         }

    //         let data = await this.model.update(q, {where:{ id}})
    //         return data
    //     }catch(err){
    //         throw err
    //     }
    // }

    // async search(q){
    //     try{
    //         let data = await this.model.findOne(q)

    //         return data
    //     }catch(err){
    //         throw err
    //     }
    // }

    // async delete(q){
    //     try{
    //         let params = {}

    //         if(q){
    //             params = q
    //         }

    //         let data = await this.model.destroy({where:{id: params}})

    //         return data
    //     }catch(err){
    //         throw err
    //     }
    // }

    // async showByParam(q){
    //     try{
    //         let params = {}

    //         if(q){
    //             params = q
    //         }

    //         let data = await this.model.findOne()

    //         return data
    //     }catch(err){
    //         throw err
    //     }
    // }

    // async filterAndCount(q){
    //     try{
    //         let params = {}
    //     }catch(err){
    //         throw err
    //     }
    // }
    
}

export default API