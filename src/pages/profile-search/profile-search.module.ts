import { NgModule } from '@angular/core';
import { ProfileSearchPage } from './profile-search';
import { IonicPageModule } from "ionic-angular";


@NgModule({
    declarations: [ProfileSearchPage],
    exports: [ProfileSearchPage],
    imports: [
        IonicPageModule.forChild(ProfileSearchPage)
    ]
})
export class ProfileSearchPageModule {
    constructor() { }
}