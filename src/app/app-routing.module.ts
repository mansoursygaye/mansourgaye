import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { PlatService } from '../plat.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
{
  path: 'plats';
   children: [
  {
  path: '',
  loadChildren: () =>
  import('../plat/plat.module').then(m => m.PlatPageModule)
  },
  {
  path: 'ajouter',
  children: [
  {
  path: '',
  loadChildren: () =>
  import('../plat/ajouter-plat/ajouterplat.module').then(m => m.AjouterPlatPageModule)
  }]},
  {
    path: 'modifier',
    children: [
    {
    path: '/:id',
    loadChildren: () =>
    import('../plat/modifier-plat/modifierplat.module').then(m => m.ModifierPlatPageModule
    )
    }
    ]
    }
,
  @NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

  export class AppRoutingModule {}
  @Component({
    selector: 'app-plat',
    templateUrl: 'plat.page.html',
    styleUrls: ['plat.page.scss']
    })
    export class PlatPage {
    plats : any;
    constructor(private service : PlatService,
    private router : Router) {
    this.service.getPlats().subscribe(data=>{
    this.plats=data;
    })
    console.log(this.plats);
    modifierPlat(id:number)
{
this.router.navigate(['/tabs/plats/modifier',id ])
}
}

@Component({
  selector: 'app-modifier-plat',
  templateUrl: './modifier-plat.page.html',
  styleUrls: ['./modifier-plat.page.scss'],
  })
  export class ModifierPlatPage implements OnInit {
  constructor(
  private route : ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
  }
  }