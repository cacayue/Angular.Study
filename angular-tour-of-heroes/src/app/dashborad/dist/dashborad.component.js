"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboradComponent = void 0;
var core_1 = require("@angular/core");
var DashboradComponent = /** @class */ (function () {
    function DashboradComponent(heroService) {
        this.heroService = heroService;
    }
    DashboradComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    DashboradComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboradComponent = __decorate([
        core_1.Component({
            selector: 'app-dashborad',
            templateUrl: './dashborad.component.html',
            styleUrls: ['./dashborad.component.css']
        })
    ], DashboradComponent);
    return DashboradComponent;
}());
exports.DashboradComponent = DashboradComponent;
