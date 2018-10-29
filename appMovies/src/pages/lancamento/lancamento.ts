import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the LancamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lancamento',
  templateUrl: 'lancamento.html',
})
export class LancamentoPage {
  public lista_lancamentos = new Array<any>();


  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: MoviesProvider) {
  }

  ionViewDidLoad() {
    this.provider.getLancamentoMovies().subscribe(
      data => {
        const retorno = (data as any);
        this.lista_lancamentos = retorno.results;
        console.log(this.lista_lancamentos);
      }, error =>{
        console.log(error);
      }
    )
  }

}
