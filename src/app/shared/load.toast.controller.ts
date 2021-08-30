import { Injectable } from "@angular/core";
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Injectable()
export class  ToastLoadController{
    constructor(
    public toastController: ToastController,
    public loadingController: LoadingController
    )
{

}



public async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
        spinner: "circles",
        duration: 2000,
        message: 'saving',
        translucent: true,
        cssClass: 'custom-loader',
        backdropDismiss: true,
        animated: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
    this.presentToastWithOptions();
}
public async presentLoading() {
    const loading = await this.loadingController.create({
        spinner: "circles",
        duration: 2000,
        message: 'saving',
        translucent: true,
        cssClass: 'custom-loader',
        backdropDismiss: true,
        animated: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
}
public async presentToast(isSuccess:boolean) {
    let message = isSuccess?'Saved Successfully':'oops! something went wrong';
    const toast = await this.toastController.create({
        // header: 'Customer Information Saved',
        message: message,
        position: 'top',
        duration: 2000,
        animated:true
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
}

public async presentToastWithOptions() {
    const toast = await this.toastController.create({
        // header: 'Customer Information Saved',
        message: 'Customer Information Saved',
        position: 'top',
        duration: 2000,
        // buttons: [
        //   {
        //         text: 'Done',
        //         role: 'cancel',
        //         handler: () => {
        //             console.log('Cancel clicked');
        //         }
        //     }
        // ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
}
}