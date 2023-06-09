import { Component, OnInit } from '@angular/core';
import { FormateGame } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  games: FormateGame [] = []
  game! : FormateGame
  user: any = {}
  downloaded: boolean = true

  constructor(private authService:AuthService, private storeService:StoreService){}

  ngOnInit(): void {
    this.user= this.authService.getUser()
    
    this.storeService.getProfileGames(this.user.id).subscribe((data:any)=>{
      this.games = data.games
            
    })
  }

  download(game: FormateGame){
    game.downloaded=true
  }

  deleteProfileGame(i: number){
    this.storeService.getUserCart(this.user).subscribe((user:any)=>{
      const games = user.games     
      games.splice(i, 1)
      this.storeService.deleteGameFromProfile(this.user, games).subscribe((data:any)=>{
      })
      this.games.splice(i, 1)
    })
  }
}

