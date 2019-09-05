import { Component, OnInit , } from '@angular/core';
import { User } from 'src/app/viewModels/user';
import Swal from 'sweetalert2';
import { CandidatsService } from 'src/app/candidats.service';
import {MatInputModule} from '@angular/material/input';
//import {Router} from '@angular/Router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  

  constructor(private candidatsService : CandidatsService
   /* ,private router : Router*/) { }
  nom ; prenom ; 
  users ; 

  
  type;
  code_valide;
  nb_heurs;
  public usr1 : any ;
  public usr : any ;

 
  /* = [
    new User("enom1" , "email1@domaine.com"),
    new User("rnom2" , "email2@domaine.com"),
    new User("anom3" , "email3@domaine.com"),
  ];*/
  users2;
  ngOnInit() {
    this.candidatsService.getAll()
    .subscribe(res=>{
        console.log(res);
        this.users = res;
    });
    
   



    this.users2 = this.users;
    
    
  }

  ajouter(){
    this.candidatsService.add_user(this.nom , this.prenom , this.type , this.code_valide , this.nb_heurs)
    .subscribe(res=>{
      console.log(res);
    })
  }
/*edituser(idd){
  this.router.navigate(['/edit',idd])
}*/

edituser(id){
  //this.Router.navigate(['/usersedit',id])
  this.candidatsService.editt(id);
  console.log(id);
}

  //(click)="add(i+1)"
/*add(index){
  
  console.log(index); 
  this.usr=index;
  console.log(this.usr);
}*/





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
          this.candidatsService.delete(u.id)
          .subscribe(res=>{
            this.ngOnInit()
          });

          Swal.fire('deleted' , '' , 'success')
        }else if(result.dismiss === Swal.DismissReason.cancel){
            Swal.fire('Cancel' , '' , 'error');
        }
      }
    );
  }
  
}
