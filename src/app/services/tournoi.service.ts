import { Injectable } from '@angular/core';
import { Tournoi } from '../models/tournoi';

@Injectable({
  providedIn: 'root'
})
export class TournoiService {

  private upersons: Tournoi[] = [
    {
      id: 1,
      tournoiName: 'Summer',
      city: 'Monastir'
    },
    {
      id: 2,
      tournoiName: 'Winter',
      city: 'Sousse'
    }
  ];

  constructor() { }

  getTournoisFromData(): Tournoi[] {
    return this.upersons;
  }

  addUser(user: Tournoi) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: Tournoi) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: Tournoi) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

}
