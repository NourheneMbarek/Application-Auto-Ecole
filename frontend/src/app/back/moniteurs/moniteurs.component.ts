import { Component, OnInit } from '@angular/core';
import { MoniteursService } from 'src/app/moniteurs.service';
import { User } from 'src/app/viewModels/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-moniteurs',
  templateUrl: './moniteurs.component.html',
  styleUrls: ['./moniteurs.component.css']
})
export class MoniteursComponent implements OnInit {
 
  constructor(private moniteursService: MoniteursService) { }
  nom ; prenom ;
  cin; matricule;
  users;
  users2;

  ngOnInit() {
    this.moniteursService.getAll()
    .subscribe(res=>{
      console.log(res);
      this.users = res;
  });
  this.users2 = this.users;
  }

  ajouter(){
    this.moniteursService.add_user(this.nom , this.prenom , this.cin , this.matricule)
    .subscribe(res=>{
      console.log(res);
    })
  }



  search(val){
    console.log(val);
   this.users = this.users2;
    let aux : User[] = [];
    for(let u of this.users){
      if((u.name.indexOf(val)>=0)||(u.email.indexOf(val)>=0)){
        aux.push(u);
      }
    }
    this.users = aux;
  }

  sort(){
    (this.users || []).sort((a : User , b:User)=> a.name <b.name ? -1 : 1);
  }

  edituser(id){
    //this.Router.navigate(['/usersedit',id])
    this.moniteursService.editt(id);
    console.log(id);
  };

  delete(u){
    Swal.fire(
      {
        title : "Êtes-vous sûr ?",
        text : "vous ne pourrez pas récupérer" + u.name,
        type : "warning" , 
        showCancelButton : true,
        confirmButtonText : 'Oui',
        cancelButtonText : 'Non , garde le '
      }
      //ba3d maya3mil acion
    ).then(
      (result)=>{
        if(result.value){
          //supression
          this.moniteursService.delete(u.id)
          .subscribe(res=>{
            this.ngOnInit()
          });

          Swal.fire('Supprimer' , '' , 'success')
        }else if(result.dismiss === Swal.DismissReason.cancel){
            Swal.fire('Cancel' , '' , 'error');
        }
      }
    );
  }

}
 