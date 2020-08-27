"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeroService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var HeroService = /** @class */ (function () {
    function HeroService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.heroesUrl = 'api/heroes';
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        return this.http.get(this.heroesUrl)
            .pipe(operators_1.tap(function (_) { return _this.log("fetched heroes"); }), operators_1.catchError(this.handleError('getHeroes', [])));
    };
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .pipe(operators_1.tap(function (_) { return _this.log("fetched hero id=" + id); }), operators_1.catchError(this.handleError("getHero id=" + id)));
    };
    HeroService.prototype.updateHero = function (hero) {
        var _this = this;
        return this.http.put(this.heroesUrl, hero, this.httpOptions)
            .pipe(operators_1.tap(function (_) { return _this.log("update hero id=" + hero.id); }), operators_1.catchError(this.handleError("updateHero id=" + hero.id)));
    };
    HeroService.prototype.addHero = function (hero) {
        var _this = this;
        return this.http.post(this.heroesUrl, hero, this.httpOptions)
            .pipe(operators_1.tap(function (newHero) { return _this.log("added hero w/ id=" + newHero.id); }), operators_1.catchError(this.handleError("addHero")));
    };
    HeroService.prototype.deleteHero = function (hero) {
        var _this = this;
        var id = typeof hero === 'number' ? hero : hero.id;
        var url = this.heroesUrl + "/" + id;
        return this.http["delete"](url, this.httpOptions)
            .pipe(operators_1.tap(function (_) { return _this.log("delete hero w/ id=" + id); }), operators_1.catchError(this.handleError("deleteHero")));
    };
    HeroService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.log(operation + " failed: " + error.message);
            return rxjs_1.of(result);
        };
    };
    HeroService.prototype.log = function (message) {
        this.messageService.add("HeroService:" + message);
    };
    HeroService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
