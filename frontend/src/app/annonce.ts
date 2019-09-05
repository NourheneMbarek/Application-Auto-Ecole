export class Annonce {

    constructor(
        public id : Number,
        public nom_annonce : String,
        public description : String,
        public prix : String,
        public image : String,
        public date_debut : Date,
        public date_fin : Date , 
        public is_new : Boolean
    ){
    
    }
}
