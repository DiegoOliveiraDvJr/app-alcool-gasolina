import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public precoAlcool;
  public precoGasolina;
  
  public resultado: String = 'Resultado'

  constructor() {}

  public calcular(): void {

    if(this.precoAlcool !='' || this.precoGasolina !=''){

      let pAlcool = parseFloat(this.precoAlcool);
      let pGasolina = parseFloat(this.precoGasolina);
      
      let res = pAlcool / pGasolina;
      this.resultado = res >= 0.7 ? "Melhor utilizar Gasolina" : "Melhor utilizar Álcool";
    }else{
      this.resultado = "Preencha corretamente os campos!";
    }

  }

}
