import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateGame } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  gameId!: number;
  game!: FormateGame;
  user: any = {}

  constructor(private storeService:StoreService, private authService:AuthService , private activatedRoute:ActivatedRoute, private router:Router){}
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=> {
      this.gameId = Number(params.get("id"));
      })
   
    this.storeService.getGame(this.gameId).subscribe((data:any)=> {
      this.game = data
      })

    this.user= this.authService.getUser()
  }

  cartGame(game:any){
    this.storeService.getUserCart(this.user).subscribe((user:any)=>{
      const cart = user.cart
      cart.push(game)
      this.storeService.addGameToCart(this.user, cart).subscribe((data:any)=>{
      })
    })
  }

}
