export class Offre {

    constructor(
        public id : Number,
        public nom_offre : String,
        public description : String,
        public prix : String,
        public image : String,
        public date_debut : Date,
        public date_fin : Date , 
        public is_new : Boolean
    ){
    
    }
}
