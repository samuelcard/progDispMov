import {Component} from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(public alertController: AlertController) {}

	public async onClick(nome, matricula, data, email, imagem){
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: nome,
			subHeader: matricula,
			message: data + "<br>"
			+ email + "<br><br><img src='../../assets/images/" + imagem + "' />",
		  });
	  
		  await alert.present();
	}
}
