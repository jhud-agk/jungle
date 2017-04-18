"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var album_component_1 = require("./album/album.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var james_authur_component_1 = require("./james_authur/james_authur.component");
var divide_coponent_1 = require("./divide/divide.coponent");
var made_component_1 = require("./made/made.component");
var whispers2_component_1 = require("./whispers2/whispers2.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                { path: 'albums', component: album_component_1.AlbumComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'login', component: login_component_1.loginComponent },
                { path: 'james_authur', component: james_authur_component_1.jamesComponent },
                { path: 'divide', component: divide_coponent_1.divideComponent },
                { path: 'made', component: made_component_1.madeComponent },
                { path: 'whispers2', component: whispers2_component_1.whispers2Component },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
            ])
        ],
        declarations: [app_component_1.AppComponent, album_component_1.AlbumComponent, home_component_1.HomeComponent, login_component_1.loginComponent, james_authur_component_1.jamesComponent, divide_coponent_1.divideComponent, made_component_1.madeComponent, whispers2_component_1.whispers2Component],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map