import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private themeableBrowser: ThemeableBrowser) {}

  openBrowser(){
    const options: ThemeableBrowserOptions = {
      statusbar: {
          color: '#ee3224'
      },
      toolbar: {
          height: 44,
          color: '#ee3224'
      },
      title: {
          color: '#ffffff',
          staticText: 'Chat'
      },
      closeButton: {
          wwwImage: 'assets/imgs/close.png',
          align: 'right',
          event: 'closePressed'
      },
      backButtonCanClose: true
  };


    const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://ionic.io', '_blank', options);
    browser.on('closePressed').subscribe(data => {
      browser.close();
    });
  }
}
