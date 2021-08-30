import { Injectable } from "@angular/core";
import { LoadingController, AlertController, ToastController } from '@ionic/angular';

@Injectable()
export class ToastLoadController {
    constructor(
        public toastController: ToastController,
        public loadingController: LoadingController,
        public alertController: AlertController
    ) {

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
    public async presentLoading(message: string) {
        const loading = await this.loadingController.create({
            spinner: "circles",
            duration: 2000,
            message: message,
            translucent: true,
            cssClass: 'custom-loader',
            backdropDismiss: true,
            animated: true
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed with role:', role);
    }
    public async presentToast(isSuccess: boolean, message: string) {
        let displayMessage = isSuccess ? message : 'oops! something went wrong';
        const toast = await this.toastController.create({
            // header: 'Customer Information Saved',
            message: displayMessage,
            position: 'top',
            duration: 2000,
            animated: true,
            cssClass:"toast-width"
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
    async presentAlertConfirm() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Confirm!',
          message: 'Message <strong>text</strong>!!!',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Okay',
              handler: () => {
                console.log('Confirm Okay');
              }
            }
          ]
        });
    
        await alert.present();
      }

      public Alert = {
        confirm: (msg?, header?) => {
          return new Promise(async (resolve, reject) => {
            let alert = this.alertController.create({
              header: header || 'Confirm',
              message: msg || 'Do you want continue?',
              buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                    reject(false);
                  }
                },
                {
                  text: 'Ok',
                  handler: () => {
                    resolve(true);
                  }
                }
              ]
            });
            (await alert).present();
          });
    
        },
        alert: async (msg, header?) => {
          let alert = this.alertController.create({
            header: header || 'Alert',
            message: msg,
            buttons: ['Dismiss']
          });
    
          (await alert).present();
        }
      }
}