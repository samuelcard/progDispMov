import {Component} from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	constructor() {}

	public edtHorasTrabalhadas;
	public edtValorHora;
	public cbPercentualDesconto;
	public bruto;
	public desconto;
	public liquido;

	public onCalcularClick(){
		this.bruto = this.edtHorasTrabalhadas * this.edtValorHora;
		this.desconto = this.cbPercentualDesconto/100 * this.bruto;
		this.liquido = this.bruto - this.desconto;
	}
}
