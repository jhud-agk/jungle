"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        this.message = 'enjoy free streaming services';
        this.users = [
            { id: 1, artist: 'One direction', album: 'made in the am', song: [' ', 'love you goodbye', 'End of Day', 'hey angel', 'Drag Me Down', 'perfect', 'temporary fix', 'i wanna write you a song', 'walking in the wind', 'wolves', 'what a feeling', 'olivia', 'never enough', 'if i could fly'] },
            { id: 2, artist: 'Ed sheeran', album: ' divide' },
            { id: 3, artist: 'Taylor swift', album: 1989 },
            { id: 4, artist: 'James author', album: ' Back from the edge' },
            { id: 5, artist: 'Passenger', album: ' whispers 2' },
            { id: 6, artist: 'Bruno Mars', album: ' 24k magic' }
        ];
    }
    HomeComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/home/home.component.html',
        styleUrls: ['app/home/home.component.css']
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map