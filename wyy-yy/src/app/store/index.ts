/*
 * @Date: 2020-10-02 15:17:48
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-10-02 16:09:13
 * @FilePath: \wyy-yy\src\app\store\index.ts
 */
import { environment } from './../../environments/environment';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { playReducer } from './reducers/player.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({ player: playReducer},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
        },
      }),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production
    })
    ]
})
export class AppStoreModule { }
