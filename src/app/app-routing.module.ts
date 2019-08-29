import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { OauthAccessComponent } from './oauth-access/oauth-access.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'chat', component: ChatWindowComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'oauthaccess', component: OauthAccessComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
