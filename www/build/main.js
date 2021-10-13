webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFlightsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tournamentstype_tournamentstype__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tournament_tournament__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_ActionSheetService_ActionSheetService__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_form_add_form__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












//import { FlightsProvider } from './../../providers/flights/flights';

var MyFlightsPage = /** @class */ (function () {
    function MyFlightsPage(navCtrl, navParams, http, global, actionsheetCtrl, loadingCtrl, iab, actionSheetSvc, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.actionsheetCtrl = actionsheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.actionSheetSvc = actionSheetSvc;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.salidas = [];
        this.salidasPasadas = [];
        this.salidasBuscador = [];
        this.equipos = [];
        this.equiposPasadas = [];
        this.flights = true;
        this.botones = [];
        this.rondas = [];
        this.rondasp = [];
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.tournamentSwitch = "futuras";
        this.fb_live_url = 'http://admin.fgranks.com/static/redirect_fb_live.php';
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Loading Flights...'
        });
        this.loading.present();
        if (this.global.user) {
            this.logged = true;
            console.log(this.global.user);
            this.pintaSalidasOpen().then(function (data) {
                _this.pintaSalidasClosed().then(function (data) {
                    console.log(_this.salidas);
                    console.log(_this.salidasPasadas);
                    _this.loading.dismiss();
                });
            });
        }
        else {
            this.loading.dismiss();
            //this.navCtrl.setRoot(LoginPage);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            this.logged = false;
        }
        //Genero los botones
    }
    MyFlightsPage.prototype.ionViewWillEnter = function () {
        //this.pintaSalidas();
        //console.log(this.botones);
    };
    MyFlightsPage.prototype.ionViewDidLoad = function () {
    };
    MyFlightsPage.prototype.openLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    MyFlightsPage.prototype.SearchPlayers = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            console.log(this.rankingArray);
            this.salidas = this.rankingArray.filter(function (item) {
                //return (item[0].nombre.toLowerCase().indexOf(val.toLowerCase()) > -1); //Devuelve true o false
                var valor = false;
                for (var _i = 0; _i < item.length; _i++) {
                    if (item[_i].nombre.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                        valor = true;
                    }
                }
                return valor;
            });
        }
    };
    MyFlightsPage.prototype.initializeItems = function () {
        this.salidas = this.rankingArray;
    };
    /*Search(ev) {
      //this.initializeItems();
      var val = ev.target.value;
      if (val && val.trim() != '') {
        this.searchTournaments(val);
      }
    }
      searchTournaments(string){
          
  
      
      console.log(string);
      //this.http.get(this.global.url+"/clubs/2019", {headers}).subscribe((resp:any) => {
          //this.http.get(this.global.urlApiLocal+"/getGolfs.php?file=true&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
          this.http.get(this.global.urlApiLocal+"/getData.php?e=licence/competitions/"+this.tournamentType.Id+"&s="+string+"&l="+this.perPage+"&p="+this.page+"&&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
          //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
          console.log(resp);
          for(let i=0; i<resp.length; i++) {
               this.salidasBuscador.push(resp[i]);
             }
          
          
          this.tournamentSwitch = "buscador";
          
        //console.log(resp);
        //this.golfs=resp;
        //console.log(this.golfs);
      });
           
    }*/
    MyFlightsPage.prototype.pintaSalidasOpen = function () {
        /*this.flightsProvider.getAll().then(result => {
              this.salidas = result;
              console.log( this.salidas);
              });*/
        var _this = this;
        //this.http.get(this.global.urlApiLocal+"/getData.php?e=licence/competitions/"+this.global.user.LicenceId+"/2019/&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        return new Promise(function (resolve) {
            _this.http.get(_this.global.urlApiLocal + "/getData.php?e=licence/competitions/" + _this.global.user.LicenceId + "/" + _this.global.season + "&s=OPEN&token=" + encodeURIComponent(_this.global.token)).subscribe(function (resp) {
                console.log(resp);
                if (resp != null) {
                    for (var i = 0; i < resp.length; i++) {
                        //Hay que añadir tantos como NbRounds hay
                        for (var _j = 1; _j <= resp[i].NbRounds; _j++) {
                            console.log(_j);
                            var aux = resp[i];
                            _this.rondas.push(_j);
                            _this.salidas.push(aux);
                            /*var horaInicio=new Date(resp[i]["Heure"+_j+"Start"].date.replace(' ', 'T'));
                            var horaFin=new Date(resp[i]["Heure"+_j+"End"].date.replace(' ', 'T'));
                            var hoy=new Date();
                            
                            if( (horaInicio < hoy) && (hoy < horaFin) ){
                                //aux.ronda=_j;
                                
                                
                                
                            }else{
                                //aux.ronda=_j;
                                this.rondasp.push(_j);
                                this.salidasPasadas.push(aux);
                            }
                            
                            console.log(this.rondas);
                            console.log(this.rondasp);*/
                        }
                    }
                }
                //this.getEquipos().then(data2 =>{
                resolve(_this.salidas);
                //});
            });
        });
    };
    MyFlightsPage.prototype.pintaSalidasClosed = function () {
        /*this.flightsProvider.getAll().then(result => {
              this.salidas = result;
              console.log( this.salidas);
              });*/
        var _this = this;
        //this.http.get(this.global.urlApiLocal+"/getData.php?e=licence/competitions/"+this.global.user.LicenceId+"/2019/&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        return new Promise(function (resolve) {
            _this.http.get(_this.global.urlApiLocal + "/getData.php?e=licence/competitions/" + _this.global.user.LicenceId + "/" + _this.global.season + "&s=CLOSE&token=" + encodeURIComponent(_this.global.token)).subscribe(function (resp) {
                console.log(resp);
                if (resp != null) {
                    for (var i = 0; i < resp.length; i++) {
                        //Hay que añadir tantos como NbRounds hay
                        for (var _j = 1; _j <= resp[i].NbRounds; _j++) {
                            console.log(_j);
                            var aux = resp[i];
                            _this.rondasp.push(_j);
                            _this.salidasPasadas.push(aux);
                            /*var horaInicio=new Date(resp[i]["Heure"+_j+"Start"].date.replace(' ', 'T'));
                            var horaFin=new Date(resp[i]["Heure"+_j+"End"].date.replace(' ', 'T'));
                            var hoy=new Date();
                            
                            if( (horaInicio < hoy) && (hoy < horaFin) ){
                                //aux.ronda=_j;
                                this.rondas.push(_j);
                                this.salidas.push(aux);
                                
                                
                            }else{
                                //aux.ronda=_j;
                                
                            }*/
                        }
                    }
                }
                //this.getEquipos().then(data2 =>{
                resolve(_this.salidasPasadas);
                //});
            });
        });
    };
    MyFlightsPage.prototype.getEquipos = function () {
        /*this.flightsProvider.getAll().then(result => {
              this.salidas = result;
              console.log( this.salidas);
              });*/
        var _this = this;
        //this.http.get(this.global.urlApiLocal+"/getData.php?e=licence/competitions/"+this.global.user.LicenceId+"/2019/&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        var myGlobal = this.global;
        return new Promise(function (resolve) {
            for (var _i = 0; _i < _this.salidas.length; _i++) {
                _this.http.get(_this.global.urlApiLocal + "/getData.php?e=competitionSquads/" + _this.salidas[_i].Id + "/" + _this.global.season + "/1/100&token=" + encodeURIComponent(_this.global.token)).subscribe(function (resp) {
                    //console.log(resp);
                    for (var i = 0; i < resp.length; i++) {
                        //Voy a buscar al jugador, si no no tiene sentido que lo inserte
                        var found = resp[i].Registers.find(function (element) {
                            return element.LicenceId == myGlobal.user.LicenceId;
                        });
                        if (found) {
                            _this.equipos.push(resp[i]);
                            console.log("Equipo encontrado y añadido!");
                            console.log(resp[i]);
                        }
                        //this.equipos.push(resp[i]);
                        //console.log(resp[i]);
                        //Voy a intentar sacar aqui los CompetitionSquads
                    }
                });
            }
            for (var _i = 0; _i < _this.salidasPasadas.length; _i++) {
                _this.http.get(_this.global.urlApiLocal + "/getData.php?e=competitionSquads/" + _this.salidasPasadas[_i].Id + "/" + _this.global.season + "/1/100&token=" + encodeURIComponent(_this.global.token)).subscribe(function (resp) {
                    //console.log(resp);
                    for (var i = 0; i < resp.length; i++) {
                        //Voy a buscar al jugador, si no no tiene sentido que lo inserte
                        var found = resp[i].Registers.find(function (element) {
                            return element.LicenceId == myGlobal.user.LicenceId;
                        });
                        if (found) {
                            _this.equiposPasadas.push(resp[i]);
                            console.log("Equipo encontrado y añadido!");
                            console.log(resp[i]);
                        }
                        //this.equipos.push(resp[i]);
                        //console.log(resp[i]);
                        //Voy a intentar sacar aqui los CompetitionSquads
                    }
                });
            }
            resolve(_this.equipos);
        });
    };
    /*gotoMatch(flightID){
        
        
        //TODO: Animación chula de cargando por que esto tardará un ratito
        return new Promise(resolve => {
          this.http.get(this.global.urlApiLocal+"/getFlight.php?file=true&id="+flightID+"&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
                //console.log("partjghj");
              this.flight=resp;
              //this.resultados = res.records;
              //this.datos_jugador=this.resultados[0];
              //console.log("esto si que se hace");
              console.log(this.flight);
              console.log("got to match: "+flightID);
              
              this.flightsProvider.saveFlight(this.flight);
              this.loading.dismiss();
              this.navCtrl.push(AddFormPage, {results:this.flight});
              
          }, error => {
            this.showToast("Error loading Flight. Probably the Flight ID is incorrect.");
            this.loading.dismiss();
            //return false;
          });
        
        
        
        });
  
    }*/
    MyFlightsPage.prototype.goToMatch = function (salida, equipo) {
        console.log(salida);
        console.log(equipo);
    };
    MyFlightsPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    /*deleteFlight(flight){
       console.log("Hay que borrar");
       
       for (let i = 0; i < this.salidas.length ; i++) {
             let item = this.salidas[i];
             if(item.info[0].FlightID == flight.info[0].FlightID){
                 //console.log("Está presente");
                 this.salidas.splice(i, 1);
             }
         }
       
       
       this.flightsProvider.deleteFlight(flight).then(data => {
          //this.pintaSalidas();
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
           console.log(data);
         });
       
 //this.pintaSalidas();
   }*/
    MyFlightsPage.prototype.openTournament = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__tournament_tournament__["a" /* TournamentPage */], { info: id });
    };
    MyFlightsPage.prototype.openFlight = function (flight, ronda, matchOpen) {
        var found = this.equipos.findIndex(function (element) {
            return element.CompetitionId == flight.Id;
        });
        console.log(flight);
        //console.log(this.equipos[found]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__add_form_add_form__["a" /* AddFormPage */], { results: flight, ronda: ronda, matchOpen: matchOpen });
    };
    MyFlightsPage.prototype.openFlightPasadas = function (flight, ronda) {
        var found = this.equiposPasadas.findIndex(function (element) {
            return element.CompetitionId == flight.Id;
        });
        console.log(flight);
        //console.log(this.equiposPasadas[found]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__add_form_add_form__["a" /* AddFormPage */], { results: flight, ronda: ronda });
    };
    MyFlightsPage.prototype.openBrowser = function () {
        var target = "_system";
        this.iab.create(this.fb_live_url, target, this.options);
    };
    MyFlightsPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__tournamentstype_tournamentstype__["a" /* TournamentsTypePage */]);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__golfs_golfs__["a" /* GolfsPage */]);
                break;
            case 5:
                break;
        }
    }; //Open Menu
    MyFlightsPage.prototype.openMenuContextual = function () {
        this.actionSheetSvc.present([this.botones]);
        /*let actionSheet = this.actionsheetCtrl.create({
          title: 'Select Round',
          cssClass: 'action-sheets-basic-page',
          buttons: [this.botones]
        });
        actionSheet.present();*/
    }; //OpenMenu
    MyFlightsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myflights',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\myflights\myflights.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img src="assets/imgs/menu.svg">\n    </button>\n    <ion-title>{{ \'FLIGHTS\' | translate }}</ion-title>\n  </ion-navbar>\n  <!--<ion-searchbar (ionInput)="SearchPlayers($event)"></ion-searchbar>-->\n  <!--<ion-searchbar padding (ionInput)="Search($event)"></ion-searchbar>-->\n</ion-header>\n\n<ion-content  class="backgroundColor">\n\n<div >\n  <ion-segment [(ngModel)]="tournamentSwitch">\n    <ion-segment-button value="futuras">\n      {{ \'OPEN\' | translate }}\n    </ion-segment-button>\n\n    <ion-segment-button value="pasadas">\n      {{ \'CLOSED\' | translate }}\n    </ion-segment-button>\n    \n\n   \n  </ion-segment>\n</div>\n\n  \n  <div  [ngSwitch]="tournamentSwitch">\n  	<div class="" padding *ngSwitchCase="\'futuras\'" text-center>\n  		\n  	<div *ngIf="logged">\n  		\n	  <div *ngFor="let t of salidas; index as i;">\n		  \n	  	<div class="golf" (click)="openFlight(t,rondas[i], true)"> \n	    <ion-card class="card" >\n		    <!--<img *ngIf="t.Photo" src="data:image/png;base64,{{t.Photo}}">\n			<img *ngIf="!t.Photo" src="assets/imgs/placeholdert.jpg">-->\n		    <div class="card-header">\n			    <div class="card-title">{{t.Name}}</div>\n				<div class="card-subtitle"><ion-icon name="pin"></ion-icon> {{t.Locality}} | <ion-icon name="time"></ion-icon> {{t.Date1.date | moment:\'D/M/YY\' }} | {{ \'RONDA\' | translate }} {{rondas[i]}}</div>\n		    </div>\n		</ion-card>\n	</div>\n\n	  </div>\n	  \n  	</div>\n  	\n  	<div *ngIf="!logged">\n	  	<button block ion-button round style="min-width: 80%" color="primary" (click)="openLogin()">\n                                        {{ \'CHALLENGES.LOGIN.LOGIN\' | translate }}\n                                    </button>\n  	</div>\n  	\n	\n	\n  	</div>\n  	\n  	<div class="" padding *ngSwitchCase="\'pasadas\'" text-center>\n	  	\n	  	<div *ngIf="logged">\n	  	\n  <div *ngFor="let t of salidasPasadas; index as i;">\n  	<div class="golf"  (click)="openTournament(t)"> \n	    <ion-card class="card" >\n		    <!--<img *ngIf="t.Photo" src="data:image/png;base64,{{t.Photo}}">\n			<img *ngIf="!t.Photo" src="assets/imgs/placeholdert.jpg">-->\n		    <div class="card-header">\n			    <div class="card-title">{{t.Name}}</div>\n				<div class="card-subtitle"><ion-icon name="pin"></ion-icon> {{t.Locality}} | <ion-icon name="time"></ion-icon> {{t.Date1.date | moment:\'D/M/YY\' }} | {{ \'RONDA\' | translate }} {{rondasp[i]}}</div>\n		    </div>\n		</ion-card>\n	</div>\n  	 \n  </div>\n	\n	  	</div>\n	\n	<div *ngIf="!logged">\n	  	<button block ion-button round style="min-width: 80%" color="primary" (click)="openLogin()">\n                                        {{ \'CHALLENGES.LOGIN.LOGIN\' | translate }}\n                                    </button>\n  	</div>\n	\n	\n  	</div>\n  	\n  	\n   	\n  	\n  	\n  </div>\n	\n  \n  \n                \n        <!-- <ion-fab right bottom>\n		    <button  (click)="doPrompt()" ion-fab color="primary"><ion-icon name="add"></ion-icon></button>\n		  </ion-fab> -->   \n\n</ion-content> \n   \n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>\n\n\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\myflights\myflights.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_11__providers_ActionSheetService_ActionSheetService__["a" /* ActionSheetService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], MyFlightsPage);
    return MyFlightsPage;
}());

//# sourceMappingURL=myflights.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage_ngx__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProvider = /** @class */ (function () {
    //public dataUser:any;
    function UserProvider(storage, global, nativeStorage) {
        this.storage = storage;
        this.global = global;
        this.nativeStorage = nativeStorage;
    }
    UserProvider.prototype.setUser = function (data) {
        /*  console.log(data);
        
        localStorage.setItem('userData', JSON.stringify(data));
        
        this.storage.set("player.name", data.name);
        this.storage.set("player.surname", data.surname);
        this.storage.set("player.username", data.username);
        this.storage.set("player.id", data.id);
        this.storage.set("player.email", data.email);
        this.storage.set("player.city", data.city);
        this.storage.set("player.photo", data.photo);
        this.storage.set("player.points", data.points);
        
        this.global.setPlayerData(data);*/
    };
    UserProvider.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var dataUser = {
                name: '',
                id: '',
                surname: '',
                username: '',
                email: '',
                city: '',
                photo: '',
                points: 0
            };
            _this.storage.get('player.name').then(function (val) { dataUser.name = val; });
            _this.storage.get('player.surname').then(function (val) { dataUser.surname = val; });
            _this.storage.get('player.username').then(function (val) { dataUser.username = val; });
            _this.storage.get('player.id').then(function (val) { dataUser.id = val; });
            _this.storage.get('player.email').then(function (val) { dataUser.email = val; });
            _this.storage.get('player.city').then(function (val) { dataUser.city = val; });
            _this.storage.get('player.photo').then(function (val) { dataUser.photo = val; });
            _this.storage.get('player.points').then(function (val) { dataUser.points = val; });
            resolve(dataUser);
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage_ngx__["a" /* NativeStorage */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tournamentstype_tournamentstype__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scores_scores__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_favorite_favorite__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_user__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__challenge_challenge__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__newchallengestep2_newchallengestep2__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ChallengesPage = /** @class */ (function () {
    function ChallengesPage(favoriteProvider, navCtrl, navParams, http, alertCtrl, global, user, iab) {
        this.favoriteProvider = favoriteProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.user = user;
        this.iab = iab;
        //public noticias : Array<any> = [];	
        this.videos = [];
        this.noticias = [];
        this.mychallenges = [];
        this.allchallenges = [];
        this.home = true;
        this.userData = [];
        this.homeSwitch = "news";
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    ChallengesPage_1 = ChallengesPage;
    ChallengesPage.prototype.ionViewWillEnter = function () {
        //this.getNoticias();
        if (this.global.user) {
            console.log(this.global.user);
            var id = this.global.getPlayerData();
            this.getMyChallenges(this.global.user.LicenceId);
            this.getAllChallenges();
        }
        else {
            //No hay usuario por lo que hay que mandarle al login
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
        }
        //this.getBanner();
        this.getVideos();
        //this.getScores(); 
        //this.getRankings(5);
        //this.getSalidas(); 
    };
    ChallengesPage.prototype.getMyChallenges = function (id) {
        var _this = this;
        this.http.get(this.global.urlApiLocal + "/getChallenges.php?id=" + id).subscribe(function (resp) {
            _this.mychallenges = resp.challenges;
            console.log(_this.mychallenges);
        });
    };
    ChallengesPage.prototype.getAllChallenges = function () {
        var _this = this;
        this.http.get(this.global.urlApiLocal + "/getChallenges.php").subscribe(function (resp) {
            _this.allchallenges = resp.challenges;
            //console.log(this.allchallenges);
        });
    };
    ChallengesPage.prototype.getVideos = function () {
        this.videos = this.global.videos;
    };
    ChallengesPage.prototype.openChallenge = function (challenge) {
        var paramObj = { challenge: challenge };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__challenge_challenge__["a" /* ChallengePage */], paramObj);
    };
    ChallengesPage.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    ChallengesPage.prototype.openPage2 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__scores_scores__["a" /* ScoresPage */], { slug: '' });
    };
    ChallengesPage.prototype.toNewChallenge = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__newchallengestep2_newchallengestep2__["a" /* NewChallengeStep2Page */]);
    };
    ChallengesPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tournamentstype_tournamentstype__["a" /* TournamentsTypePage */]);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__golfs_golfs__["a" /* GolfsPage */]);
                break;
            case 5:
                this.navCtrl.setRoot(ChallengesPage_1);
                break;
        }
    }; //Open Menu
    ChallengesPage = ChallengesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-challenges',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\challenges\challenges.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title>{{ \'CHALLENGES.TITULOS.LISTADO\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="backgroundColor">\n\n\n\n<div >\n  <ion-segment [(ngModel)]="homeSwitch">\n    <ion-segment-button value="news">\n      {{ \'CHALLENGES.TITULOS.TAB1\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="videos">\n      {{ \'CHALLENGES.TITULOS.TAB2\' | translate }}\n    </ion-segment-button>\n\n  </ion-segment>\n</div>\n\n<div  [ngSwitch]="homeSwitch">\n  <ion-list padding *ngSwitchCase="\'news\'">\n    \n    <div class="golf" *ngFor="let n of mychallenges" > \n	    <ion-card class="card" *ngIf="n.date"  (click)="openChallenge(n)">\n		    <img  src="{{n.course_image}}"/>\n		    <div class="card-header">\n			    <div class="card-title">{{n.couse_name}}</div>\n				<div class="card-subtitle">{{n.date}}</div>\n				<div class="card-subtitle">{{n.points}} IN PLAY</div>\n		    </div>\n		</ion-card>\n	</div>\n    \n  </ion-list>\n\n  <ion-list padding *ngSwitchCase="\'videos\'">\n    \n    <div class="golf" *ngFor="let n of allchallenges" > \n	    <ion-card class="card" *ngIf="n.date"  (click)="openChallenge(n)">\n		    <img  src="{{n.course_image}}"/>\n		    <div class="card-header">\n			    <div class="card-title">{{n.couse_name}}</div>\n				<div class="card-subtitle">{{n.date}}</div>\n				<div class="card-subtitle">{{n.points}} IN PLAY</div>\n		    </div>\n		</ion-card>\n	</div>\n    \n  </ion-list>\n  \n\n  \n</div>\n\n\n\n			<ion-fab right bottom>\n		    <button  (click)="toNewChallenge()" ion-fab color="primary"><ion-icon name="add"></ion-icon></button>\n		  </ion-fab>\n\n\n\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\challenges\challenges.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__providers_favorite_favorite__["a" /* FavoriteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ChallengesPage);
    return ChallengesPage;
    var ChallengesPage_1;
}());

//# sourceMappingURL=challenges.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__noticia_noticia__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tournamentstype_tournamentstype__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scores_scores__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_favorite_favorite__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = /** @class */ (function () {
    function HomePage(favoriteProvider, navCtrl, navParams, http, alertCtrl, global, iab, domSanitizer) {
        this.favoriteProvider = favoriteProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.iab = iab;
        this.domSanitizer = domSanitizer;
        this.page = 1;
        this.pagev = 1;
        this.perPage = 5;
        //public noticias : Array<any> = [];	
        this.videos = [];
        this.noticias = [];
        this.ofertas = [];
        this.home = true;
        this.homeSwitch = "news";
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //     var fileref = document.createElement('script')
        //     fileref.setAttribute("type", "text/javascript")
        //     fileref.setAttribute("src", "../../assets/js/x-frame-bypass.js")
        //     document.getElementsByTagName("head")[0].appendChild(fileref);
        this.global.getAPIToken().then(function (data) {
            _this.getNoticias();
            _this.getVideos();
        });
        //this.getScores(); 
        //this.getRankings(5);
        //this.getSalidas(); 
    };
    HomePage.prototype.getNoticias = function () {
        var _this = this;
        //this.noticias=this.global.noticias;
        //this.http.get(this.global.urlApiLocal+"/getData.php?e=articles/7/fr_FR&l="+this.perPage+"&p="+this.page+"&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        this.http.get(this.global.urlApiLocal + "/getData.php?e=articles/homepage/fr_FR&l=" + this.perPage + "&p=" + this.page + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            var myresp = resp;
            console.log(myresp.length);
            for (var i = 0; i < myresp.length; i++) {
                _this.noticias.push(myresp[i]);
            }
            console.log(_this.noticias);
        });
    };
    HomePage.prototype.getVideos = function () {
        //this.videos=this.global.videos;
        var _this = this;
        //this.noticias=this.global.noticias;
        this.http.get(this.global.urlApiLocal + "/getData.php?e=articles/10/fr_FR&l=" + this.perPage + "&p=" + this.pagev + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            var myresp = resp;
            console.log(myresp.length);
            for (var i = 0; i < myresp.length; i++) {
                var StrippedString = myresp[i].Summary.replace(/(<([^>]+)>)/ig, "");
                //console.log(StrippedString);
                myresp[i].Summary = _this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + StrippedString);
                _this.videos.push(myresp[i]);
            }
            console.log(_this.videos);
        });
    };
    HomePage.prototype.openNoticia = function (id_not) {
        var paramObj = { noticia: id_not };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__noticia_noticia__["a" /* NoticiaPage */], paramObj);
    };
    HomePage.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.openPage2 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__scores_scores__["a" /* ScoresPage */], { slug: '' });
    };
    HomePage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(HomePage_1);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tournamentstype_tournamentstype__["a" /* TournamentsTypePage */]);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__golfs_golfs__["a" /* GolfsPage */]);
                break;
            case 5:
                break;
        }
    }; //Open Menu
    HomePage.prototype.doInfiniteNoticias = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getNoticias();
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    HomePage.prototype.doInfiniteVideos = function (infiniteScroll) {
        var _this = this;
        this.pagev = this.pagev + 1;
        if (this.pagev != 0) {
            setTimeout(function () {
                _this.getVideos();
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\home\home.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title><img src="assets/imgs/logo_affg.png" height="35px" class="logo" alt=""></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="backgroundColor">\n\n<div >\n  <ion-segment [(ngModel)]="homeSwitch">\n    <ion-segment-button value="news">\n      {{ \'NEWS\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="videos">\n      {{ \'VIDEOS\' | translate }}\n    </ion-segment-button>\n    <!--<ion-segment-button value="offers">\n      Offers\n    </ion-segment-button>-->\n  </ion-segment>\n</div>\n\n<div  [ngSwitch]="homeSwitch">\n  \n  <div class="noticias" *ngSwitchCase="\'news\'" > \n	  <ion-list padding>\n	    \n	    <div class="golf" *ngFor="let n of noticias" (click)="openNoticia(n)"> \n		    <!--<ion-card class="card" *ngIf="n.Vignette.Data"  >\n			    <img src="data:image/png;base64,{{n.Vignette.Data}}" />\n			    <div class="card-header">\n				    <div class="card-title">{{n.Title}}</div>\n					<div *ngIf="n.Tag" class="card-subtitle">{{n.Tag}}</div>\n			    </div>\n			</ion-card>-->\n		</div>\n	    \n	  </ion-list>\n	  \n	  	<ion-infinite-scroll (ionInfinite)="doInfiniteNoticias($event)">\n			<ion-infinite-scroll-content></ion-infinite-scroll-content>\n		</ion-infinite-scroll>\n	  \n  </div>\n  <div class="videos" *ngSwitchCase="\'videos\'">\n	  <ion-list padding >\n	    \n	    <div class="golf" *ngFor="let n of videos"> \n		    <ion-card class="card" *ngIf="n.Summary"  >\n			    <iframe width="100%" [src]="n.Summary" frameborder="0" allowfullscreen></iframe>\n			    <div class="card-header">\n				    <div class="card-title">{{n.Title}}</div>\n					<div *ngIf="n.Tag" class="card-subtitle">{{n.Tag}}</div>\n			    </div>\n			</ion-card>\n		</div>\n	    \n	  </ion-list>\n	  \n	  <ion-infinite-scroll (ionInfinite)="doInfiniteVideos($event)">\n			<ion-infinite-scroll-content></ion-infinite-scroll-content>\n		</ion-infinite-scroll>\n	  \n  </div>\n  \n  <ion-list padding *ngSwitchCase="\'offers\'">\n    \n    ...OFFERS...\n  </ion-list>\n  \n</div>\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__providers_favorite_favorite__["a" /* FavoriteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scorecard_scorecard__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scores_scores__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ranking_ranking__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_favorite_favorite__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RankingTeamPage = /** @class */ (function () {
    function RankingTeamPage(favoriteProvider, navCtrl, navParams, http, global, actionsheetCtrl, loadingCtrl, iab) {
        this.favoriteProvider = favoriteProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.actionsheetCtrl = actionsheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.listado = [];
        this.scores = [];
        this.isFavorite = [];
        this.rondas = [];
        this.rankings = true;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.fb_live_url = 'http://admin.fgranks.com/static/redirect_fb_live.php';
        var loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Loading Rankings...'
        });
        loading.present();
        this.slug = this.navParams.get("slug");
        console.log("Rankings Slug:" + this.slug);
        this.getCategory(this.slug);
        loading.dismiss();
        //console.log(this.favoriteProvider.getAllFavoritePlayers());
    }
    RankingTeamPage_1 = RankingTeamPage;
    RankingTeamPage.prototype.ionViewWillEnter = function () {
    };
    RankingTeamPage.prototype.SearchPlayers = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.ranking = this.rankingArray.filter(function (item) {
                return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    RankingTeamPage.prototype.initializeItems = function () {
        this.ranking = this.rankingArray;
    };
    RankingTeamPage.prototype.openBrowser = function () {
        var target = "_system";
        this.iab.create(this.fb_live_url, target, this.options);
    };
    RankingTeamPage.prototype.getCategory = function (cat) {
        switch (cat) {
            case "rankings_men":
                this.getRanking("men");
                this.categoryName = "Men";
                break;
            case "rankings_women":
                this.getRanking("women");
                this.categoryName = "Women";
                break;
            case "rankings_senior":
                this.getRanking("senior");
                this.categoryName = "Senior";
                break;
            case "rankings_junior":
                this.getRanking("junior");
                this.categoryName = "Junior";
                break;
            case "rankings_team":
                this.getRanking("team");
                this.categoryName = "Team";
                break;
            case "rankings":
                this.getRanking("");
                this.categoryName = "General";
                break;
            default:
                this.getRanking("");
                break;
        }
    };
    RankingTeamPage.prototype.getRanking = function (cat) {
        var _this = this;
        if (cat != "") {
            this.http.get(this.global.url + "/rankings/read_one.php?id_torneo=" + this.global.id_torneo + "&categoria=" + cat)
                .subscribe(function (res) {
                _this.ranking = res.records;
                _this.rankingArray = res.records;
                //console.log(this.ranking);
                _this.rondas = _this.ranking[0].scores;
                //console.log(this.ranking[0].num_rondas); 
                //console.log(this.ranking.scores);
                //Arreglo lo del video
                for (var _i = 0; _i < _this.ranking.length; _i++) {
                    //console.log(this.ranking[_i]);
                    _this.favoriteProvider.isFavorite(_this.ranking[_i].player_id).then(function (isFav) {
                        _this.isFavorite.push(isFav);
                        //console.log(isFav);
                    });
                } //End for
                console.log(_this.isFavorite);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.http.get(this.global.url + "/rankings/read.php?id_torneo=" + this.global.id_torneo)
                .subscribe(function (res) {
                _this.ranking = res.records;
                _this.rankingArray = res.records;
                //console.log(this.ranking); 
                _this.rondas = _this.ranking[0].scores;
                //console.log(this.ranking[0].num_rondas); 
                //console.log(this.ranking.scores);
                //Arreglo lo del video
                for (var _i = 0; _i < _this.ranking.length; _i++) {
                    _this.favoriteProvider.isFavorite(_this.ranking[_i].player_id).then(function (isFav) {
                        _this.isFavorite.push(isFav);
                    });
                } //End for
            }, function (error) {
                console.log(error);
            });
        } //IF
    }; // Get Ranking
    RankingTeamPage.prototype.openCard = function (playerID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__scorecard_scorecard__["a" /* ScoreCardPage */], { playerID: playerID });
    };
    RankingTeamPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ranking_ranking__["a" /* RankingPage */], { slug: 'rankings_men' });
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__scores_scores__["a" /* ScoresPage */], { slug: '' });
                break;
            case 5:
                this.openBrowser();
                break;
        }
    }; //Open Menu
    RankingTeamPage.prototype.favoritePlayer = function (player_id, index) {
        var _this = this;
        this.favoriteProvider.favoritePlayer(player_id).then(function () {
            _this.isFavorite[index] = true;
        });
    }; // Favorite
    RankingTeamPage.prototype.unfavoritePlayer = function (player_id, index) {
        var _this = this;
        this.favoriteProvider.unfavoritePlayer(player_id).then(function () {
            _this.isFavorite[index] = false;
        });
    }; //Unfavorite
    RankingTeamPage.prototype.openMenuContextual = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Select Ranking',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Men Ranking',
                    //role: 'destructive',
                    //icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        //console.log('Delete clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ranking_ranking__["a" /* RankingPage */], { slug: 'rankings_men' });
                    }
                },
                {
                    text: 'Women Ranking',
                    //icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        //console.log('Share clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ranking_ranking__["a" /* RankingPage */], { slug: 'rankings_women' });
                    }
                },
                {
                    text: 'Senior Ranking',
                    //icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ranking_ranking__["a" /* RankingPage */], { slug: 'rankings_senior' });
                    }
                },
                {
                    text: 'Team',
                    //icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        //console.log('Favorite clicked');
                        _this.navCtrl.setRoot(RankingTeamPage_1, { slug: 'rankings_team' });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    //icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }; //OpenMenu
    RankingTeamPage = RankingTeamPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rankingteam',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\rankingteam\rankingteam.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#000000">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title><img src="assets/imgs/foot.png" height="40px" alt=""></ion-title>\n    \n    <ion-buttons end>\n      <button ion-button icon-only (click)="openMenuContextual()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n  <ion-searchbar padding (ionInput)="SearchPlayers($event)"></ion-searchbar>\n  \n</ion-header>\n\n<ion-content padding class="backgroundColor">\n\n<h1>{{categoryName}} Ranking</h1>\n	   \n  <ion-list>\n	  <ion-item *ngFor="let rank of ranking; index as j">\n	  \n	   <ion-grid>\n	    	<ion-row>\n			    <ion-col col-2>\n			      {{ rank.posicion }} \n			      \n			        \n			        <img src="{{ rank.foto }}" width="16px">\n			    </ion-col>\n			    <ion-col col-8>\n			       {{ rank.nombre }} \n		    \n			    </ion-col>\n			    <ion-col col-2 text-right>\n			      {{ rank.diferencia }}\n			    </ion-col>\n			  </ion-row>\n	    </ion-grid>\n	  </ion-item>\n	</ion-list>\n\n\n\n\n</ion-content>\n\n   <ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">HOME</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">HOME</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">LINE UPS</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">LINE UPS</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="flights" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">FLIGHTS</span>\n					</a>\n					<a *ngIf="!flights" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">FLIGHTS</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">RANKINGS</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">RANKINGS</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(5)">\n				    	<span class="icono"><img src="assets/imgs/5.svg" height="30px"></span>\n						<span class="menu-inf-text">LIVE</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>\n\n\n\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\rankingteam\rankingteam.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_favorite_favorite__["a" /* FavoriteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], RankingTeamPage);
    return RankingTeamPage;
    var RankingTeamPage_1;
}());

//# sourceMappingURL=rankingteam.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProvidersActionSheetServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ActionSheetService = /** @class */ (function () {
    function ActionSheetService(actionSheetCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
    }
    ActionSheetService.prototype.present = function (buttons) {
        buttons.push({
            text: 'Cancel',
            role: 'cancel',
        });
        var actionSheet = this.actionSheetCtrl.create({
            buttons: buttons
        });
        actionSheet.present();
    };
    ActionSheetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ActionSheetService);
    return ActionSheetService;
}());

//# sourceMappingURL=ActionSheetService.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {EmailValidators} from 'ng2-validators';


var RecoverPasswordPage = /** @class */ (function () {
    function RecoverPasswordPage(navCtrl, navParams, http, global, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.submitAttempt1 = false;
        this.submitAttempt2 = false;
        this.formLogin = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        });
    }
    RecoverPasswordPage.prototype.ionViewWillEnter = function () {
        //this.getData(); 
    };
    RecoverPasswordPage.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    RecoverPasswordPage.prototype.doLogin = function () {
        var _this = this;
        var parameteres = {
            page: 'recover',
            usuario: this.formLogin.value.email
        };
        if (this.formLogin.value.email == "") {
            this.submitAttempt1 = true;
        }
        else {
            this.http.post(this.global.urlApiLocal + "/reset-pass.php", parameteres).subscribe(function (resp) {
                var data = resp.json();
                if (data.data.ok == "true") {
                    //this.muestra_alert("titulo","texto1");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                }
                else {
                    if (data.data.ok == "false1") {
                        _this.submitAttempt1 = true;
                        //this.muestra_alert("titulo","texto2");
                    }
                    else {
                        _this.submitAttempt2 = true;
                        //this.muestra_alert("titulo","texto3");
                    }
                }
            });
        }
    };
    RecoverPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'recover-password-page',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\recover-password\recover-password.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n     <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title>Recover Pass</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--<ion-header>\n    <ion-navbar>\n        <button ion-button clear (click)="back()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>-->\n\n<ion-content class="recover-password-page">\n\n\n\n    <form [formGroup]="formLogin" novalidate (submit)="doLogin()">\n        <ion-grid fixed>\n            <ion-row>\n                <ion-col col-sm-2 col-md-3 col-lg-4 col-xl-3>\n                </ion-col>\n                <ion-col col-12 col-sm-8 col-md-6 col-lg-4 col-xl-6>\n\n                    <ion-list no-lines>\n\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col text-center>\n\n                                    <div class="logo"><img src="assets/imgs/logo_affg.png">\n                                    </div>\n                                    <ion-item>\n                                        <ion-input formControlName="email" type="email" placeholder="{{ \'CHALLENGES.LOGIN.USER\' | translate }}"></ion-input>\n                                    </ion-item>\n                                    <div class="error-msg">\n                                        <p ion-text color="danger" *ngIf="!formLogin.controls.email.valid && submitAttempt1">{{ \'CHALLENGES.ERRORS.USER\' | translate }}</p>\n                                    </div>\n\n                                    \n                                </ion-col>\n                            </ion-row>\n\n\n\n                            <ion-row>\n\n                                <ion-col col-12 text-center>\n                                    <button type="submit" block ion-button round style="min-width: 80%" color="primary">\n                                        {{ \'CHALLENGES.LOGIN.LOGIN\' | translate }}\n                                    </button>\n                                </ion-col>\n\n                            </ion-row>\n                            <ion-row>\n\n                                <ion-col col-12 text-center>\n                                	<a (click)="openPage(\'recover\')" >{{ \'CHALLENGES.LOGIN.REMEMBER\' | translate }} <ion-icon name="arrow-forward"></ion-icon></a>\n                                    \n                                </ion-col>\n\n                            </ion-row>\n                        </ion-grid>\n\n\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\recover-password\recover-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RecoverPasswordPage);
    return RecoverPasswordPage;
}());

//# sourceMappingURL=recover-password.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scorecard_scorecard__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeamPage = /** @class */ (function () {
    function TeamPage(global, http, viewCtrl, navCtrl, navParams) {
        this.global = global;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.players = [];
        //private director1:any;
        this.clubSwitch = "clubs";
        //this.team ="players";
        this.teamInfo = this.navParams.data.teamInfo;
        console.log(this.teamInfo);
        this.director_id = this.teamInfo.Staffs.President.LicenceId;
        this.secretario_id = this.teamInfo.Staffs.Secretaire.LicenceId;
        this.tesorero_id = this.teamInfo.Staffs.Tresorier.LicenceId;
        //console.log(this.teamInfo);
        //this.teamDBId = this.navParams.data.id_database;
        //console.log(this.teamId);
        //this.getTeam();
        this.getPlayer();
    }
    TeamPage.prototype.ionViewWillEnter = function () {
    };
    TeamPage.prototype.openCard = function (playerID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__scorecard_scorecard__["a" /* ScoreCardPage */], { playerID: playerID });
    };
    TeamPage.prototype.openPlayer = function (player) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* PlayerPage */], { player: player });
    };
    /*getTeam(){
      //console.log(this.teamId);
  
      //this.http.get(this.global.url+"/club/"+this.teamId+"/"+this.global.anyo+"").subscribe((resp:any) => {
          
          this.http.get("http://localhost/AFFGApp/API/getClub.php?id="+this.teamId+"&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        
        this.teamInfo=JSON.parse(resp);
        console.log(this.teamInfo);
        
        if(this.teamInfo.length){
            
            this.office1=this.teamInfo[0].Places.HeadOffice.Street;
            this.office2=this.teamInfo[0].Places.HeadOffice.PostalCode + ", "+ this.teamInfo[0].Places.HeadOffice.Locality;
            this.office3=this.teamInfo[0].Places.HeadOffice.OfficePhone;
            this.office4=this.teamInfo[0].Places.HeadOffice.Mail;
            this.office5=this.teamInfo[0].Places.Correspondance.Street ;
            this.office6=this.teamInfo[0].Places.Correspondance.PostalCode + ", "+ this.teamInfo[0].Places.HeadOffice.Locality;
            this.office7=this.teamInfo[0].Places.Correspondance.OfficePhone;
            this.office8=this.teamInfo[0].Places.Correspondance.Mail;
            
            this.director_id=this.teamInfo[0].Staffs.President.LicenceId;
            this.secretario_id=this.teamInfo[0].Staffs.Secretaire.LicenceId;
            this.tesorero_id=this.teamInfo[0].Staffs.Tresorier.LicenceId;
            
        }
  
        
        //console.log(this.places);
        
        
       
  
      });
    }*/
    TeamPage.prototype.getPlayer = function () {
        var _this = this;
        this.http.get(this.global.urlApiLocal + "/getData.php?e=licences/" + this.teamInfo.Id + "/" + this.global.season + "&p=1&l=50&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/licences/"+this.teamId+"/"+this.global.anyo+"").subscribe((resp:any) => {
            _this.players = resp;
            console.log(_this.players);
            for (var _i = 0; _i < _this.players.length; _i++) {
                console.log(_this.players[_i]);
                if (_this.players[_i].Id == _this.director_id) {
                    _this.director = _this.players[_i].LastName + ", " + _this.players[_i].FirstName;
                    _this.director_p = _this.players[_i].Photo;
                }
                if (_this.players[_i].Id == _this.secretario_id) {
                    _this.secretario = _this.players[_i].LastName + ", " + _this.players[_i].FirstName;
                    _this.secretario_p = _this.players[_i].Photo;
                }
                if (_this.players[_i].Id == _this.tesorero_id) {
                    _this.tesorero = _this.players[_i].LastName + ", " + _this.players[_i].FirstName;
                    _this.tesorero_p = _this.players[_i].Photo;
                }
            }
        });
    };
    TeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\team\team.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar hideBackButton>\n    <ion-title><img src="assets/imgs/logo_affg.png" height="35px" class="logo" alt=""></ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="backgroundColor">\n\n<div >\n  <ion-segment [(ngModel)]="clubSwitch">\n    <ion-segment-button value="clubs">\n      {{ \'CLUBS\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="players">\n      {{ \'PLAYERS\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="board">\n      {{ \'BOARD\' | translate }}\n    </ion-segment-button>\n  </ion-segment>\n</div>\n	\n	\n	<div  [ngSwitch]="clubSwitch">\n  <div class="teamCard" padding *ngSwitchCase="\'clubs\'" text-center>\n    \n    <ion-grid>\n    <ion-row>\n		<ion-col>\n			<ion-thumbnail>\n				<img *ngIf="teamInfo.Mime" src="data:image/png;base64,{{teamInfo.Logo}}">\n				<img *ngIf="!teamInfo.Mime" src="assets/imgs/2.svg">\n			</ion-thumbnail>\n		</ion-col>\n		<ion-col>\n			<img *ngIf="teamInfo.MimeMaillot" src="data:image/png;base64,{{teamInfo.LogoMaillot}}">\n		</ion-col>\n      \n    </ion-row>\n    </ion-grid>\n      \n    <h1>{{teamInfo.Name}}</h1>\n    \n    <div class="field">\n	    <label>{{ \'MAINOFFICE\' | translate }}</label>\n	    <p>{{teamInfo.Places.HeadOffice.Street}}</p>\n	    <p>{{teamInfo.Places.HeadOffice.PostalCode}}, {{teamInfo.Places.HeadOffice.Locality}}</p>\n	    <p><ion-icon name="call"></ion-icon> <a href="tel:{{teamInfo.Places.HeadOffice.OfficePhone}}" >{{teamInfo.Places.HeadOffice.OfficePhone}}</a></p>\n	    <p><ion-icon name="mail"></ion-icon> <a href="mailto:{{teamInfo.Places.HeadOffice.Mail}}">{{teamInfo.Places.HeadOffice.Mail}}</a></p>\n    </div>\n    \n    <div class="field">\n	    <label>{{ \'CORROFFICE\' | translate }}</label>\n	    <p>{{teamInfo.Places.Correspondance.Street}}</p>\n	    <p>{{teamInfo.Places.Correspondance.PostalCode}}, {{this.teamInfo.Places.Correspondance.Locality}}</p>\n	    <p><ion-icon name="call"></ion-icon> <a href="tel:{{teamInfo.Places.Correspondance.OfficePhone}}">{{teamInfo.Places.Correspondance.OfficePhone}}</a></p>\n	    <p><ion-icon name="mail"></ion-icon> <a href="mailto:{{teamInfo.Places.Correspondance.Mail}}">{{teamInfo.Places.Correspondance.Mail}}</a></p>\n    </div>\n    \n  </div>\n\n  <ion-list padding *ngSwitchCase="\'players\'">\n    \n    <ion-item *ngFor="let p of players" >\n      <ion-thumbnail item-start>\n        <img *ngIf="p.Photo" src="data:image/png;base64,{{p.Photo}}">\n        <ion-icon *ngIf="!p.Photo" name="contact"></ion-icon>\n        \n      </ion-thumbnail>\n      <h2><img src="assets/imgs/flags/{{p.Country}}.png" width="16px"> {{p.LastName}}, {{p.FirstName}}</h2>\n      <p class="note">{{p.Country}}</p>\n    </ion-item>\n    \n  </ion-list>\n  \n  <ion-list padding *ngSwitchCase="\'board\'">\n    \n    <ion-item>\n      <ion-thumbnail item-start>\n        <img *ngIf="director_p" src="data:image/png;base64,{{director_p}}">\n        <ion-icon *ngIf="!director_p" name="contact"></ion-icon>\n        \n      </ion-thumbnail>\n      <h2>{{director}}</h2>\n      <p class="note">{{ \'DIRECTOR\' | translate }}</p>\n    </ion-item>\n    \n    <ion-item>\n      <ion-thumbnail item-start>\n        <img *ngIf="secretario_p" src="data:image/png;base64,{{secretario_p}}">\n        <ion-icon *ngIf="!secretario_p" name="contact"></ion-icon>\n        \n      </ion-thumbnail>\n      <h2>{{secretario}}</h2>\n      <p class="note">{{ \'SECRETARIO\' | translate }}</p>\n    </ion-item>\n    \n    <ion-item>\n      <ion-thumbnail item-start>\n        <img *ngIf="tesorero_p" src="data:image/png;base64,{{tesorero_p}}">\n        <ion-icon *ngIf="!tesorero_p" name="contact"></ion-icon>\n        \n      </ion-thumbnail>\n      <h2>{{tesorero}}</h2>\n      <p class="note">{{ \'TESORERO\' | translate }}</p>\n    </ion-item>\n    \n  </ion-list>\n  \n	</div>\n\n</ion-content>\n\n\n<!--<ion-content padding class="backgroundColor">\n	\n	<h1>{{ teamInfo?.nombre }}</h1> <img src="{{ teamInfo?.logo }}" height="60px;">\n	</div>\n\n	<div padding-top>\n		<ion-segment >\n		<ion-segment-button value="players">\n		      PLAYERS\n		    </ion-segment-button>\n		    <ion-segment-button value="info">\n		      INFO\n		    </ion-segment-button>\n		    \n		</ion-segment>\n\n		<div [ngSwitch]="team">\n		\n		<h2 *ngSwitchCase="\'players\'">Men</h2>\n		\n		<ion-list *ngSwitchCase="\'players\'">\n\n			<ion-item *ngFor="let p of menplayers" (click)="openPlayer(p)">\n		      <ion-avatar item-start>\n		        <img src="{{ p.foto }}">\n		      </ion-avatar>\n		      <h2>{{ p.nombre }} {{ p.apellidos }}</h2>\n		      <p>{{ p.categoria }} • {{ p.fecha_nacimiento }}</p>\n		    </ion-item>\n		\n		</ion-list>	\n			\n		<h2 *ngSwitchCase="\'players\'">Women</h2>\n			<ion-list *ngSwitchCase="\'players\'">\n			<ion-item *ngFor="let p of womenplayers" (click)="openPlayer(p)">\n		      <ion-avatar item-start>\n		        <img src="{{ p.foto }}">\n		      </ion-avatar>\n		      <h2>{{ p.nombre }} {{ p.apellidos }}</h2>\n		      <p>{{ p.categoria }} • {{ p.fecha_nacimiento }}</p>\n		    </ion-item>\n			</ion-list>\n		    \n		    \n		<h2 *ngSwitchCase="\'players\'">Senior</h2>\n			<ion-list *ngSwitchCase="\'players\'">\n			<ion-item *ngFor="let p of seniorplayers" (click)="openPlayer(p)">\n		      <ion-avatar item-start>\n		        <img src="{{ p.foto }}">\n		      </ion-avatar>\n		      <h2>{{ p.nombre }} {{ p.apellidos }}</h2>\n		      <p>{{ p.categoria }} • {{ p.fecha_nacimiento }}</p>\n		    </ion-item>\n			</ion-list>\n		    \n		\n		  <div *ngSwitchCase="\'info\'" padding-top>\n		  	<div [innerHTML]="teamInfo?.info"></div>\n		  </div>\n\n	    \n\n		</div>\n	</div>\n\n</ion-content>-->'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\team\team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TeamPage);
    return TeamPage;
}());

//# sourceMappingURL=team.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    "places": [
        {
            "title": "Città del Vaticano",
            "description": "Lo Stato della Città del Vaticano nasce l'11 febbraio 1929 a seguito della firma dei Patti Lateranensi tra Benito Mussolini e Pietro Gasparri, rispettivamente i rappresentanti del Regno d'Italia e della Santa Sede",
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Piazza_San_Pietro%2C_Citta_del_Vaticano.jpg/800px-Piazza_San_Pietro%2C_Citta_del_Vaticano.jpg",
            "lat": 41.90218,
            "lng": 12.45360
        },
        {
            "title": "Duomo di Milano",
            "description": "Simbolo del capoluogo lombardo, e situato nell'omonima piazza al centro della metropoli, è dedicato a Santa Maria Nascente.",
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Milan_Cathedral_2013-09-18.jpg/1024px-Milan_Cathedral_2013-09-18.jpg",
            "lat": 45.46419,
            "lng": 9.19194
        },
        {
            "title": "Duomo di Firenze",
            "description": "La basilica di Santa Croce nell'omonima piazza a Firenze, è una delle più grandi chiese francescane e una delle massime realizzazioni del gotico in Italia, e possiede il rango di basilica minore",
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Santa_Croce_%28Florence%29_-_Facade.jpg/800px-Santa_Croce_%28Florence%29_-_Facade.jpg",
            "lat": 43.76875,
            "lng": 11.26109
        }
    ]
});
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signature_signature__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__myflights_myflights__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddFormPage = /** @class */ (function () {
    function AddFormPage(viewCtrl, http, global, navCtrl, navParams, _FB, actionsheetCtrl, toastCtrl, loadingCtrl, iab, alertCtrl) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._FB = _FB;
        this.actionsheetCtrl = actionsheetCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.equipo = "";
        this.ronda = 0;
        this.rondaPlus = 0;
        this.rondaBus = 0;
        this.idCampo = 0;
        this.hoyos_fake = [];
        this.estadoRonda = [];
        this.resultados = [];
        this.matchOpen = [];
        this.debug = false;
        this.redirectLiveRank = "";
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormGroup */]({
            hole_0_1: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_2: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_3: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_4: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_5: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_6: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_7: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_8: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_9: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_10: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_11: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_12: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_13: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_14: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_15: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_16: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_17: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_0_18: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            LicenceId_0: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_1: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_2: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_3: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_4: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_5: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_6: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_7: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_8: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_9: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_10: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_11: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_12: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_13: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_14: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_15: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_16: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_17: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_1_18: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            LicenceId_1: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_1: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_2: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_3: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_4: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_5: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_6: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_7: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_8: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_9: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_10: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_11: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_12: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_13: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_14: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_15: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_16: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_17: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_2_18: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            LicenceId_2: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_1: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_2: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_3: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_4: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_5: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_6: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_7: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_8: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_9: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_10: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_11: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_12: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_13: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_14: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_15: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_16: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_17: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_3_18: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            LicenceId_3: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_1: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_2: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_3: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_4: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_5: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_6: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_7: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_8: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_9: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_10: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_11: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_12: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_13: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_14: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_15: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_16: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_17: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_4_18: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            LicenceId_4: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_1: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_2: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_3: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_4: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_5: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_6: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_7: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_8: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_9: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_10: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_11: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_12: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_13: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_14: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_15: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_16: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_17: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            hole_5_18: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            LicenceId_5: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
        });
        this.flight_encontrado = true;
        this.match = this.navParams.get("results");
        this.rondaBus = this.navParams.get("ronda");
        this.matchOpen = this.navParams.get("matchOpen");
        //this.equipo = this.navParams.get("equipo");
        this.redirectLiveRank = this.global.urlApiLocal + '/redirect.php?id=' + this.match.Id;
        console.log(this.ronda);
        console.log(this.match);
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Loading Flights...'
        });
        this.loading.present();
        this.getEquipo().then(function (data) {
            if (data == null) {
                //Debo devolver al usuario a la pantalla anterior
                _this.showConfirm();
            }
            /*for(var _k = 0; _k < this.equipo.Registers.length ; _k++){
                
                
                 this.estadoRonda[0]=this.equipo.Registers[_k].Round1Finished;
                 this.estadoRonda[1]=this.equipo.Registers[_k].Round2Finished;
                 this.estadoRonda[2]=this.equipo.Registers[_k].Round3Finished;
                 this.estadoRonda[3]=this.equipo.Registers[_k].Round4Finished;
  
                
                console.log("La ronda " + this.rondaBus + " es: " + this.estadoRonda[this.rondaBus-1]);
                
                
                this.matchOpen[_k]=(!(this.estadoRonda[this.rondaBus-1]));
                
                console.log(this.matchOpen);
                
            }*/
            //console.log(this.ronda);
            //console.log(this.equipo.Registers[0]['Round'+this.rondaBus+'Finished']);
            //Voy a asumir que si el primero no ha acabado la ronda, nadie lo ha acabado
            /*if(!this.equipo.Registers[0]['Round'+this.rondaBus+'Finished']){
                this.matchOpen=true;
            }*/
            _this.loading.dismiss();
        });
        console.log(this.match);
        //console.log(this.equipo);
        //this.getSalida(this.match);
        /* Construyo el formulario*/
        this.form = this._FB.group({
            hoyos: this._FB.array([
                this.initHoyoFields()
            ])
        });
        for (var _i = 0; _i < 18; _i++)
            this.hoyos_fake.push("");
        this.addNewInputField();
    }
    AddFormPage.prototype.ionViewDidEnter = function () {
        if (!this.flight_encontrado) {
            bodymovin.loadAnimation({
                container: document.getElementById('lottie'),
                path: 'assets/animations/notFound.json',
                renderer: 'svg',
                loop: true,
                autoplay: true,
            });
        }
    };
    AddFormPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Flights non créés',
            message: 'Les flights n\'a été créé pour ce tour.',
            buttons: [
                {
                    text: 'Retornez',
                    handler: function () {
                        //console.log('Disagree clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__myflights_myflights__["a" /* MyFlightsPage */]);
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__myflights_myflights__["a" /* MyFlightsPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    AddFormPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    AddFormPage.prototype.initHoyoFields = function () {
        return this._FB.group({
            valor: ['']
        });
    };
    AddFormPage.prototype.addNewInputField = function () {
        var control = this.form.controls.hoyos;
        control.push(this.initHoyoFields());
    };
    AddFormPage.prototype.manage = function (val) {
        console.dir(val);
    };
    AddFormPage.prototype.getFight = function (id) {
        this.http.get(this.global.url + "/flight/read_by_flight.php?id_torneo=" + this.global.id_torneo + "&flight_id=" + this.match)
            .subscribe(function (resp) {
            console.log(resp);
        });
    };
    AddFormPage.prototype.getSalida = function (results) {
        this.flight_encontrado = true;
        this.flights = this.match.results;
        this.hora_inicio = this.match.info[0].HourStart.date;
        this.ronda = this.match.info[0].Round;
        console.log(this.flights);
        //this.ronda=resp.records[0][0].ronda + 1;
        /*this.ronda=+resp.records[0][0].ronda;
        this.campo_juego=resp.records[0][0].campo_juego;
        this.hoyo_salida=resp.records[0][0].hoyo_salida;*/
        //this.resultados=resp.records[0][0].hoyo_salida;
        /*for (var _i = 0; _i < resp.records[0].length; _i++){
            
            this.resultados.push(resp.records[0][_i].resultados[0].pars);
            
        }//Endfor*/
    };
    AddFormPage.prototype.isMatchFinished = function (numJugador) {
        //console.log(this.equipo.Registers[numJugador]['Round'+this.rondaPlus+'Finished']);
        return this.equipo.Registers[numJugador]['Round' + this.rondaPlus + 'Finished'];
    };
    AddFormPage.prototype.getEquipo = function () {
        var _this = this;
        var myglobal = this.global;
        return new Promise(function (resolve) {
            _this.http.get(_this.global.urlApiLocal + "/getData.php?e=competitionSquads/" + _this.match.Id + "/" + _this.global.season + "/0&l=500&p=1&s=&token=" + encodeURIComponent(_this.global.token)).subscribe(function (resp) {
                //console.log(resp);
                for (var i = 0; i < resp.length; i++) {
                    console.log(resp[i]);
                    //Voy a buscar al jugador, si no no tiene sentido que lo inserte
                    var found = resp[i].Registers.find(function (element) {
                        return (element.LicenceId == myglobal.user.LicenceId);
                    });
                    if (found) {
                        if ((resp[i].Round + 1) == _this.rondaBus) {
                            _this.equipo = resp[i];
                            _this.idCampo = _this.equipo.NumParcours;
                            console.log("Equipo encontrado y añadido!");
                            console.log(resp[i]);
                            _this.ronda = resp[i].Round;
                            console.log(_this.ronda);
                            _this.rondaPlus = _this.ronda + 1;
                            resolve(_this.equipo);
                            break;
                        }
                    }
                    //this.equipos.push(resp[i]);
                    //console.log(resp[i]);
                    //Voy a intentar sacar aqui los CompetitionSquads
                }
                resolve(null);
            });
        });
    };
    AddFormPage.prototype.checkHoyoCompleto = function (hoyo) {
        console.log("Estoy revisando el hoyo " + hoyo);
        for (var _i = 0; _i < this.equipo.Registers.length; _i++) {
            if (this.profileForm.value["hole_" + _i + "_" + hoyo] == "") {
                return false;
            }
        }
        this.goToSlide((hoyo));
        //console.log("Debería pasar al hoyo "+ (hoyo+1));
        return true;
    };
    AddFormPage.prototype.checkHoyos = function () {
        console.log(this.profileForm.value);
        for (var _i = 0; _i < this.equipo.Registers.length; _i++) {
            for (var _j = 1; _j <= 18; _j++) {
                console.log("hole_" + _i + "_" + _j + ": " + this.profileForm.value["hole_" + _i + "_" + _j]);
                if (this.profileForm.value["hole_" + _i + "_" + _j] == "") {
                    return false;
                }
            }
        }
        return true;
    };
    AddFormPage.prototype.goToSlide = function (id) {
        this.aaaa.slideTo(id, 500);
    };
    AddFormPage.prototype.openMenuContextual = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Select Ranking',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Hole 1',
                    handler: function () {
                        _this.goToSlide(0);
                    }
                },
                {
                    text: 'Hole 2',
                    handler: function () {
                        _this.goToSlide(1);
                    }
                },
                {
                    text: 'Hole 3',
                    handler: function () {
                        _this.goToSlide(2);
                    }
                },
                {
                    text: 'Hole 4',
                    handler: function () {
                        _this.goToSlide(3);
                    }
                },
                {
                    text: 'Hole 5',
                    handler: function () {
                        _this.goToSlide(4);
                    }
                },
                {
                    text: 'Hole 6',
                    handler: function () {
                        _this.goToSlide(5);
                    }
                },
                {
                    text: 'Hole 7',
                    handler: function () {
                        _this.goToSlide(6);
                    }
                },
                {
                    text: 'Hole 8',
                    handler: function () {
                        _this.goToSlide(7);
                    }
                },
                {
                    text: 'Hole 9',
                    handler: function () {
                        _this.goToSlide(8);
                    }
                },
                {
                    text: 'Hole 10',
                    handler: function () {
                        _this.goToSlide(9);
                    }
                },
                {
                    text: 'Hole 11',
                    handler: function () {
                        _this.goToSlide(10);
                    }
                },
                {
                    text: 'Hole 12',
                    handler: function () {
                        _this.goToSlide(11);
                    }
                },
                {
                    text: 'Hole 13',
                    handler: function () {
                        _this.goToSlide(12);
                    }
                },
                {
                    text: 'Hole 14',
                    handler: function () {
                        _this.goToSlide(13);
                    }
                },
                {
                    text: 'Hole 15',
                    handler: function () {
                        _this.goToSlide(14);
                    }
                },
                {
                    text: 'Hole 16',
                    handler: function () {
                        _this.goToSlide(15);
                    }
                },
                {
                    text: 'Hole 17',
                    handler: function () {
                        _this.goToSlide(16);
                    }
                },
                {
                    text: 'Hole 18',
                    handler: function () {
                        _this.goToSlide(17);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    //icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }; //OpenMenu
    AddFormPage.prototype.onSubmit = function () {
        /****** OJO ESTO LO HACeMOS DESPUES PERO AHORA HAY QUE COMPROBAR QUE TODO OK Y MANDARLO A LA FIRMA ******/
        var _this = this;
        if (this.checkHoyos()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signature_signature__["a" /* SignaturePage */], { info: this.match, equipo: this.equipo, results: this.profileForm.value });
        }
        else {
            /******
                Grabamos los resultados parcialmente ****/
            var loading_1 = this.loadingCtrl.create({
                spinner: 'circles',
                content: 'Saving Scores...'
            });
            loading_1.present();
            this.results = [];
            this.resultadosObj = [];
            //console.log(this.profileForm.value);
            var cont = 0;
            var cont_jug = 0;
            for (var item in this.profileForm.value) {
                if (cont == 18) {
                    if (this.profileForm.value[item] != undefined) {
                        this.resultadosObj.push({
                            'player_id': this.profileForm.value[item],
                            'golpes': this.results
                        });
                        this.results = [];
                        cont = 0;
                        cont_jug++;
                    }
                }
                else {
                    this.results.push(this.profileForm.value[item]);
                    cont++;
                }
            }
            console.log(this.resultadosObj);
            //console.log(this.results);
            this.resultObjt = {
                'ronda': this.equipo.Round,
                'finalizado': 0,
                'idTorneo': this.match.Id,
                'token': this.global.token,
                'year': this.global.season,
                'resultados': this.resultadosObj
            };
            console.log(JSON.stringify(this.resultObjt));
            this.http.post(this.global.urlApiLocal + "/setData.php", JSON.stringify(this.resultObjt))
                .subscribe(function (resp) {
                //console.log(resp);
                //this.navCtrl.pop();
                console.log(resp);
                loading_1.dismiss();
                if (resp.status == 1) {
                    _this.showToast("Scores Saved");
                }
                else {
                    _this.showToast("Error Saving Scores");
                }
            }, function (err) {
                console.log(err);
            });
        }
        /*let loading = this.loadingCtrl.create({
          spinner: 'circles',
          content: 'Saving Scores...'
        });
        loading.present();
          
        this.results= [];
        this.resultadosObj=[];
        //console.log(this.profileForm.value);
        var cont=0;
        var cont_jug=0;
        for (let item in this.profileForm.value) {
            
          if(cont==18){
              this.resultadosObj.push ({
                'player_id':this.profileForm.value[item],
                'golpes':this.results
                });
              this.results= [];
              cont=0;
              cont_jug++;
              
          }else{
               this.results.push(this.profileForm.value[item]);
               cont++;
    
          }
            
          
          
        }
        
            console.log(this.resultadosObj);
    
        
        //console.log(this.results);
        this.resultObjt = {
          'flight_id':this.match,
          'resultados':this.resultadosObj
        }
        console.log(JSON.stringify(this.resultObjt));
        
        
       this.http.post(this.global.url+"/rankings/update.php?id_torneo="+this.global.id_torneo, JSON.stringify(this.resultObjt))
        .subscribe((resp:any) => {
          //console.log(resp);
          //this.navCtrl.pop();
          
          loading.dismiss();
          if(resp.message=="ok"){
              this.showToast("Scores Saved");
          }else{
              this.showToast("Error Saving Scores");
          }
          
        }, err =>{
          console.log(err);
        });
    
      }*/
    };
    AddFormPage.prototype.openBrowser = function () {
        var target = "_system";
        this.iab.create(this.redirectLiveRank, target, this.options);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], AddFormPage.prototype, "aaaa", void 0);
    AddFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-form',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\add-form\add-form.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img src="assets/imgs/menu.svg">\n    </button>\n    <ion-title>Flight</ion-title>\n  </ion-navbar>\n</ion-header>\n  \n  <ion-content class="backgroundColor">\n  \n  		\n  	<div *ngIf="flight_encontrado">\n  	\n  	<div class="cabecera" padding>\n  	\n  	\n  			<h1>{{match.Name}}</h1>\n  			\n  			<h3 text-center>{{ \'RONDA\' | translate }}: {{equipo.Round + 1}}</h3>\n  			\n  		\n  			<!--<h6 ion-text color="menuButton">Course</h6>\n  			<h2>{{campo_juego}}</h2>\n  		\n  			<h6 ion-text color="menuButton">Time</h6>\n  			<h2>{{hora_inicio}}</h2>-->\n  		\n  			<!--<h6 ion-text color="menuButton">Starting </h6>\n  			<h2>Hole {{hoyo_salida}}</h2>-->\n  		\n  	\n  	</div><!--end cabecera -->\n  	<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">      \n     \n      \n      	  <ion-slides #CardSlider>\n			  <ion-slide *ngFor="let hoyo of hoyos_fake; index as k; first as isFirstHoyo" >\n			    \n			    	<ion-grid>\n			    		<ion-row>\n			    			<ion-col col-2>\n						            <ion-icon *ngIf="!isFirstHoyo" (click)="goToSlide(k-1)" name="arrow-back"></ion-icon>\n			    			</ion-col >\n			    			<ion-col col-8 (click)="openMenuContextual()">{{ \'HOYO\' | translate }} {{k + 1}} (Par {{match.Pars[idCampo][k]}})</ion-col>\n							<ion-col col-2>\n								<ion-icon *ngIf="!(k==17)" (click)="goToSlide(k+1)" name="arrow-forward"></ion-icon>\n							</ion-col>\n				    		<!--<ion-col col-2 *ngFor="let hoyo of hoyos_fake; index as k2; first as isFirstHoyo2" text-center class="tab_jugador"  (click)="goToSlide(k2)">\n				    			<div [ngClass]="{\'active\': k==k2}">\n					    			\n									<p>H {{k2 + 1}}</p>\n													    	\n									\n				    			</div>\n				    		</ion-col>-->\n			    		</ion-row>\n			    	</ion-grid>\n			    	<div padding>\n				    	\n				    	\n				    	<ion-list>\n    \n					    <ion-item *ngFor="let p of equipo.Registers; index as j; first as isFirstFlight2">\n					    <ion-input type="hidden" value="{{p.Licence.Id}}" clearInput formControlName="LicenceId_{{j}}"></ion-input>\n					     \n					     <ion-thumbnail item-start>\n					        <img *ngIf="p.Licence.Photo!=\'\'" src="data:image/png;base64,{{p.Licence.Photo}}">\n					        <ion-icon *ngIf="!p.Licence.Photo" name="contact"></ion-icon>\n					        \n					      </ion-thumbnail>\n					      \n	\n					      \n					      <ion-label>\n					      <h2><img src="assets/imgs/flags/{{p.Licence.Country}}.png" width="16px"> {{p.Licence.LastName}}, {{p.Licence.FirstName}}</h2>\n					      <!--<p class="note">{{p.info_jugador.Country}}</p>-->\n					      </ion-label>\n					      <div item-end>\n						      <div *ngIf="!debug">\n						      <ion-input *ngIf=" p.Pars && p.Pars[equipo.Round] && p.Pars[equipo.Round][k] !== undefined" (change)="checkHoyoCompleto(k+1)" placeholder="-" value="{{p.Pars[equipo.Round][k]}}" type="number" [readonly]="isMatchFinished(j)" clearInput formControlName="hole_{{j}}_{{k+1}}" ></ion-input>\n						      <ion-input *ngIf="(!p.Pars || !p.Pars[equipo.Round] || !p.Pars[equipo.Round][k]=== undefined)" (change)="checkHoyoCompleto(k+1)" placeholder="-" type="number" [readonly]="isMatchFinished(j)" clearInput formControlName="hole_{{j}}_{{k+1}}"></ion-input>\n						      </div>\n						      <ion-input *ngIf="debug" placeholder="-" value="3" type="number" [readonly]="!matchOpen" (change)="checkHoyoCompleto(k+1)" clearInput formControlName="hole_{{j}}_{{k+1}}" ></ion-input>\n						  	  <!--<ion-input *ngIf="p.Pars[0][k] !== undefined" placeholder="-" value="{{p.Pars[0][k]}}" type="number" clearInput formControlName="hole_{{j}}_{{k+1}}" ></ion-input>\n							  <ion-input *ngIf="p.Pars[0][k] === undefined" placeholder="-" type="number" clearInput formControlName="hole_{{j}}_{{k+1}}"></ion-input>-->\n					      </div>\n					      <!--<div *ngIf="p.results.Pars != null" >	\n							  <ion-input *ngIf="p.results.Pars[k] !== undefined" placeholder="-" value="{{p.results.Pars[k]}}" type="number" clearInput formControlName="hole_{{j}}_{{k+1}}" item-end></ion-input>\n							  <ion-input *ngIf="p.results.Pars[k] === undefined" placeholder="-" type="number" clearInput formControlName="hole_{{j}}_{{k+1}}" item-end></ion-input>\n							</div>	\n							<div *ngIf="p.results.Pars == null">\n								<ion-input placeholder="-" type="number" clearInput formControlName="hole_{{j}}_{{k+1}}" item-end></ion-input>\n							</div>-->\n					      \n					    </ion-item>\n					\n					    \n					  </ion-list>\n				    	\n				    	\n					    	\n					   <!-- 	<div class="contenedor-resultados">\n					    	\n					    	<div *ngFor="let jugador of flights; index as j; first as isFirstFlight2">\n						    	<ion-input type="hidden" value="{{jugador.info_jugador.Id}}" clearInput formControlName="LicenceId_{{j}}"></ion-input>\n					    	<ion-grid class="vertical-align-content">\n								<ion-row>\n								<ion-col col-2>\n						      <ion-avatar item-start>\n						        <img *ngIf="jugador.info_jugador.Photo!=\'\'" src="{{jugador.info_jugador.Photo}}" width="30px">\n								<img *ngIf="jugador.info_jugador.Photo==\'\'" src="assets/imgs/avatar.png" width="30px">\n						      </ion-avatar>\n								</ion-col>\n								<ion-col col-8>\n						      {{jugador.info_jugador.LastName}}, {{jugador.info_jugador.FirstName}}\n								</ion-col>\n								<ion-col col-2>\n								\n								\n							<div *ngIf="resultados[j] != null">	\n							  <ion-input *ngIf="resultados[j][ronda] !== undefined" placeholder="-" value="{{resultados[j][ronda][k]}}" type="number" clearInput formControlName="hole_{{j}}_{{k+1}}"></ion-input>\n							  <ion-input *ngIf="resultados[j][ronda] === undefined" placeholder="-" type="number" clearInput formControlName="hole_{{j}}_{{k+1}}"></ion-input>\n							</div>	\n							<div *ngIf="resultados[j] == null">\n								<ion-input placeholder="-" type="number" clearInput formControlName="hole_{{j}}_{{k+1}}"></ion-input>\n							</div>\n							\n								\n								</ion-col>\n						      \n								</ion-row>\n					    	</ion-grid>\n					    	</div>\n					    	</div>--><!-- contenedor -->\n						    \n			    	</div>\n			    	\n			    	<!--<div class="timeline">\n				    	\n					    <ul >\n					      <li *ngFor="let jugador of flights; index as j; first as isFirstFlight2">\n					        <div class="bullet green"><ion-avatar item-start>\n										<img *ngIf="jugador.foto!=\'\'" src="{{jugador.foto}}" width="30px">\n										<img *ngIf="jugador.foto==\'\'" src="assets/imgs/avatar.png" width="30px">\n									</ion-avatar></div>\n					        <div class="time" text-center>{{jugador.nombre}}</div>\n					        <div class="desc" text-center>\n					          	<ion-input placeholder="#" type="hidden" value="{{jugador.LicenceId}}" clearInput formControlName="LicenceId_{{j}}"></ion-input>\n							  	<ion-input placeholder="#" type="number" clearInput class="campo_hoyo" formControlName="hole_{{j}}_{{k+1}}"></ion-input>\n							  	\n							  \n					        </div>\n					        \n					      </li>\n					      \n					     \n					      \n					    </ul>\n					  </div>--> <!-- Timeline -->\n			    \n			    \n			    \n			    \n			  </ion-slide>\n		  </ion-slides>\n</form>\n\n  	</div>\n  	\n  	<div padding *ngIf="!flight_encontrado">\n  		<h1>We haven\'t found the Flight...</h1>\n  		<div id="lottie"></div>\n  	</div>\n\n\n<ion-fab right top>\n    <button (click)="openBrowser()" ion-fab color="primary"><ion-icon name="trophy"></ion-icon></button>\n  </ion-fab>\n\n\n</ion-content>\n\n\n<ion-footer no-border *ngIf="flight_encontrado && matchOpen">\n                        \n                        <ion-grid>\n						  <ion-row>\n	\n						    <ion-col col-12>\n						    <button block ion-button round (click)="onSubmit()">{{ \'SAVERESULTS\' | translate }}</button>\n						    </ion-col>\n						  </ion-row>\n						</ion-grid>\n                        \n                  \n                        \n</ion-footer>\n\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\add-form\add-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AddFormPage);
    return AddFormPage;
}());

//# sourceMappingURL=add-form.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_detail_news_detail__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsPage = /** @class */ (function () {
    function NewsPage(global, navCtrl, navParams, http) {
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.videos = [];
        this.resultados = [];
        this.noticiaPrincipal = [];
        this.banner = "";
        this.partidos = [];
    }
    NewsPage.prototype.ionViewWillEnter = function () {
        this.getNews();
        this.getBanner();
    };
    NewsPage.prototype.openNews = function (newsObj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__news_detail_news_detail__["a" /* NewsDetailPage */], newsObj);
    };
    NewsPage.prototype.getNews = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
            .set("id_torneo", this.global.id_torneo.toString());
        this.http.get(this.global.url + "/news/read.php", { params: params })
            .subscribe(function (res) {
            console.log(res);
            _this.noticias = res.records;
        }, function (error) {
            console.log(error);
        });
    };
    NewsPage.prototype.getBanner = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]()
            .set("id_torneo", this.global.id_torneo.toString())
            .set("records", "1");
        this.http.get(this.global.url + "/banner/read_x.php", { params: params }).subscribe(function (resp) {
            console.log(resp.records);
            _this.banner = resp.records;
        });
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\news\news.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><img src="assets/imgs/foot.png" height="40px" alt=""></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="backgroundColor">\n  \n  <div padding *ngFor="let n of noticias" (click)="openNews(n)">\n    <div class="imgContainer">\n        <img src="assets/imgs/footgolf-spain.jpg" class="newsImg" alt="Snow" style="width:100%;">\n        <div class="bottom-left">\n          <ion-item class="trans" no-lines>\n            <p ion-text color="light">{{ n.fecha }}</p>\n            <h4 ion-text color="light">{{ n.titulo }}</h4>\n          </ion-item>\n        </div>\n    </div>\n  </div>\n\n<div *ngFor="let b of banner" padding-top>\n    <img src="assets/imgs/banner2.jpg" style="width:100%">\n</div>\n  \n</ion-content>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tournamentstype_tournamentstype__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StaticPage = /** @class */ (function () {
    function StaticPage(global, navCtrl, navParams, http, domSanitizer, iab) {
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.domSanitizer = domSanitizer;
        this.iab = iab;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.idNoticia = this.navParams.get("id");
        console.log(this.idNoticia);
        this.getStatic();
    }
    StaticPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaticPage');
    };
    StaticPage.prototype.getStatic = function () {
        var _this = this;
        this.http.get(this.global.urlApiLocal + "/getNoticias.php?file=true&id=" + this.idNoticia + "&locale=" + this.global.locale + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //console.log(resp);
            _this.noticias = resp;
            /*this.html=this.noticia[0].Document;
            this.titulo=this.noticia[0].Title;*/
            //console.log(this.noticias);
        });
    };
    StaticPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__tournamentstype_tournamentstype__["a" /* TournamentsTypePage */]);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__golfs_golfs__["a" /* GolfsPage */]);
                break;
            case 5:
                break;
        }
    }; //Open Menu
    StaticPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-static',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\static\static.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n     <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title><img src="assets/imgs/logo_affg.png" height="35px" class="logo" alt=""></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="backgroundColor">\n	\n	<div class="noticia" *ngFor="let n of noticias">\n		<div *ngIf="n.State != 0">\n			<h2>{{ n.Title }}</h2>\n			<div [innerHTML]="n.Document"></div>	\n		</div>\n	\n	</div>\n		\n\n</ion-content>\n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\static\static.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], StaticPage);
    return StaticPage;
}());

//# sourceMappingURL=static.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {EmailValidators} from 'ng2-validators';



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, http, global, alertCtrl, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.userProvider = userProvider;
        this.submitAttempt1 = false;
        this.userData = this.userProvider.getUser();
        //console.log(this.userData);
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            surname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            city: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            username: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        });
    }
    ProfilePage_1 = ProfilePage;
    ProfilePage.prototype.ionViewWillEnter = function () {
        //this.getData(); 
    };
    ProfilePage.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    ProfilePage.prototype.saveProfile = function () {
        var _this = this;
        console.log(this.profileForm);
        var parameteres = {
            page: 'profile',
            email: this.profileForm.value.email,
            password: this.profileForm.value.password,
            username: this.profileForm.value.username,
            city: this.profileForm.value.city,
            name: this.profileForm.value.name,
            surname: this.profileForm.value.surname,
            id: this.userData.id
        };
        if (this.profileForm.value.email == "" || this.profileForm.value.name == "" || this.profileForm.value.surname == "" || this.profileForm.value.city == "") {
            this.submitAttempt1 = true;
        }
        else {
            this.http.post(this.global.urlApiLocal + "/updateProfile.php", parameteres).subscribe(function (resp) {
                var data = resp.json();
                if (data.status == 1) {
                    //this.muestra_alert("titulo","texto1");
                    //this.navCtrl.setRoot(HomePage); 
                    _this.userProvider.setUser(data.player);
                    _this.muestra_alert("titulo", "Saved");
                }
                else {
                    if (data.status == 0) {
                        _this.muestra_alert("titulo", "Error");
                    }
                    else {
                        _this.submitAttempt1 = true;
                        //this.muestra_alert("titulo","texto3");
                    }
                }
            });
        }
    };
    ProfilePage.prototype.openPage = function (page) {
        switch (page) {
            case "login":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "profile":
                this.navCtrl.setRoot(ProfilePage_1);
                //console.log("results");
                //console.log(slug);
                break;
            default:
                this.navCtrl.setRoot(page.component);
                break;
        }
    };
    ProfilePage = ProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profile-page',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\profile\profile.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n     <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="profile-page">\n\n\n\n    <form [formGroup]="profileForm" novalidate (submit)="saveProfile()">\n        <ion-grid fixed>\n            <ion-row>\n                <ion-col col-sm-2 col-md-3 col-lg-4 col-xl-3>\n                </ion-col>\n                <ion-col col-12 col-sm-8 col-md-6 col-lg-4 col-xl-6>\n\n                    <ion-list no-lines>\n\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col text-center>\n\n                                    <ion-item>\n                                    <ion-label stacked>{{ \'CHALLENGES.LOGIN.NAME\' | translate }}</ion-label>\n                                        <ion-input formControlName="name" type="text" value="{{userData.name}}" placeholder="{{ \'CHALLENGES.LOGIN.NAME\' | translate }}"></ion-input>\n                                    </ion-item>\n                                    <ion-item>\n                                    	<ion-label stacked>{{ \'CHALLENGES.LOGIN.SURNAME\' | translate }}</ion-label>\n                                        <ion-input formControlName="surname" type="text" value="{{userData.surname}}" placeholder="{{ \'CHALLENGES.LOGIN.SURNAME\' | translate }}"></ion-input>\n                                    </ion-item>\n                                    <ion-item>\n                                    	<ion-label stacked>{{ \'CHALLENGES.LOGIN.EMAIL\' | translate }}</ion-label>\n                                        <ion-input formControlName="email" type="email" value="{{userData.email}}" placeholder="{{ \'CHALLENGES.LOGIN.EMAIL\' | translate }}"></ion-input>\n                                    </ion-item>\n                                    <ion-item>\n                                    	<ion-label stacked>{{ \'CHALLENGES.LOGIN.USERNAME\' | translate }}</ion-label>\n                                        <ion-input formControlName="username" type="username" value="{{userData.username}}" placeholder="{{ \'CHALLENGES.LOGIN.USER\' | translate }}"></ion-input>\n                                    </ion-item>\n                                    <ion-item>\n                                    	<ion-label stacked>{{ \'CHALLENGES.LOGIN.CITY\' | translate }}</ion-label>\n                                        <ion-input formControlName="city" type="city" value="{{userData.city}}" placeholder="{{ \'CHALLENGES.LOGIN.CITY\' | translate }}"></ion-input>\n                                    </ion-item>\n									<ion-item>\n										<ion-label stacked>{{ \'CHALLENGES.LOGIN.PASSWORD\' | translate }}</ion-label>\n                                        <ion-input formControlName="password" type="password" placeholder="{{ \'CHALLENGES.PROFILE.PASSWORD\' | translate }}"></ion-input>\n                                    </ion-item>\n                                    \n                                    <div class="error-msg">\n                                        <p ion-text color="danger" *ngIf="submitAttempt1">{{ \'CHALLENGES.ERRORS.GENERAL\' | translate }}</p>\n                                    </div>\n\n                                    \n                                    \n                                </ion-col>\n                            </ion-row>\n\n\n\n                            <ion-row>\n\n                                <ion-col col-12 text-center>\n                                    <button type="submit" block ion-button round style="min-width: 80%" color="primary">\n                                        {{ \'CHALLENGES.PROFILE.SAVE\' | translate }}\n                                    </button>\n                                </ion-col>\n\n                            </ion-row>\n                            \n                        </ion-grid>\n\n\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]])
    ], ProfilePage);
    return ProfilePage;
    var ProfilePage_1;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChallengeStep2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newchallengestep3_newchallengestep3__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_challenge__ = __webpack_require__(874);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {EmailValidators} from 'ng2-validators';



var NewChallengeStep2Page = /** @class */ (function () {
    function NewChallengeStep2Page(navCtrl, navParams, http, global, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitAttempt1 = false;
        this.tipo_challenge = this.navParams.data.tipo;
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            time: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            points: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            spots: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            publico: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('')
        });
        this.challenge = new __WEBPACK_IMPORTED_MODULE_6__models_challenge__["a" /* Challenge */]();
        this.challenge.publico = true;
        this.userData = this.global.getPlayerData();
        //console.log(this.userData);
        this.currentYear = new Date().getFullYear();
    }
    NewChallengeStep2Page.prototype.ionViewWillEnter = function () {
        //this.getData(); 
    };
    NewChallengeStep2Page.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    NewChallengeStep2Page.prototype.saveAndNext = function () {
        //console.log(angular.element('#publico').val());
        if (this.profileForm.status == "INVALID") {
            this.submitAttempt1 = true;
        }
        else {
            if (this.profileForm.value.points > this.userData.points) {
                var toast = this.toastCtrl.create({
                    message: 'You cannot bet more points that you currently have. You have ' + this.userData.points + " points",
                    duration: 5000
                });
                toast.present();
            }
            else {
                console.log(this.profileForm.value);
                if (this.profileForm.value.publico == "") {
                    this.challenge.publico = true;
                }
                else {
                    this.challenge.publico = this.profileForm.value.publico;
                }
                this.challenge.date = this.profileForm.value.date;
                this.challenge.time = this.profileForm.value.time;
                this.challenge.points = this.profileForm.value.points;
                this.challenge.spots = this.profileForm.value.spots;
                //Mando a la siguiente página
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__newchallengestep3_newchallengestep3__["a" /* NewChallengeStep3Page */], { challenge: this.challenge });
            }
        }
        //TODO: Validar lo que toque
        //this.challenge.setDate();
    };
    NewChallengeStep2Page.prototype.openPage = function (page) {
        switch (page) {
            default:
                this.navCtrl.setRoot(page.component);
                break;
        }
    };
    NewChallengeStep2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'newchallengestep2-page',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\newchallengestep2\newchallengestep2.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n     <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title>New Challenge</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="newchallengestep2-page">\n\n\n<form [formGroup]="profileForm" (submit)="saveAndNext()">\n        <ion-grid fixed>\n            <ion-row>\n                <ion-col col-sm-2 col-md-3 col-lg-4 col-xl-3>\n                </ion-col>\n                <ion-col col-12 col-sm-8 col-md-6 col-lg-4 col-xl-6>\n\n                    <ion-list no-lines>\n\n                        <ion-grid>\n                        \n                        				\n                        \n                        \n                        \n                        \n                            <ion-row>\n                                <ion-col>\n									<ion-item> \n									<ion-label stacked>{{ \'CHALLENGES.NEW.PUBLIC\' | translate }}</ion-label>\n									    <ion-toggle formControlName="publico" checked="false"></ion-toggle>\n									</ion-item>\n									\n                                    <ion-item>                                                          	\n                                        <ion-label stacked>{{ \'CHALLENGES.NEW.DATE\' | translate }}</ion-label>\n										<ion-datetime formControlName="date" name="date" displayFormat="DD/MM/YYYY" min="{{currentYear}}" max="{{currentYear + 1}}"></ion-datetime>\n                                    </ion-item>\n                                    \n                                    <ion-item>\n                                                                                                            	\n                                        <ion-label stacked>{{ \'CHALLENGES.NEW.HOUR\' | translate }}</ion-label>\n										<ion-datetime formControlName="time" name="time" displayFormat="HH:mm"></ion-datetime>\n                                    </ion-item>\n                                    \n                                     \n                                    \n                                    <ion-item>\n                                    	<ion-label stacked>{{ \'CHALLENGES.NEW.SPOTS\' | translate }}</ion-label>\n                                        <ion-input formControlName="spots" name="spots" type="number"></ion-input>\n                                    </ion-item>\n                                    \n                                    <ion-item>\n                                    	<ion-label stacked>{{ \'CHALLENGES.NEW.POINTS\' | translate }}</ion-label>\n                                        <ion-input formControlName="points" name="points" type="number"></ion-input>\n                                    </ion-item>\n                                    \n                                    \n                                    <div class="error-msg">\n                                        <p ion-text color="danger" *ngIf="submitAttempt1">{{ \'CHALLENGES.ERRORS.GENERAL\' | translate }}</p>\n                                    </div>\n\n                                    \n                                    \n                                </ion-col>\n                            </ion-row>\n\n\n\n                            <ion-row>\n\n                                <ion-col col-12 text-center>\n                                    <button type="submit" block ion-button round style="min-width: 80%" color="primary">\n                                        {{ \'CHALLENGES.NEW.BUTTON\' | translate }}\n                                    </button>\n                                </ion-col>\n\n                            </ion-row>\n                            \n                            \n\n                            \n                        </ion-grid>\n                    \n\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n                                    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\newchallengestep2\newchallengestep2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], NewChallengeStep2Page);
    return NewChallengeStep2Page;
}());

//# sourceMappingURL=newchallengestep2.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tournaments_tournaments__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__team_team__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TeamsPage = /** @class */ (function () {
    function TeamsPage(global, http, navCtrl, navParams, iab) {
        this.global = global;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.page = 1;
        this.perPage = 15;
        this.teams = [];
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.pushPage = __WEBPACK_IMPORTED_MODULE_7__team_team__["a" /* TeamPage */];
    }
    TeamsPage_1 = TeamsPage;
    TeamsPage.prototype.ionViewWillEnter = function () {
        this.lineups = true;
        console.log(this.lineups);
        this.getClubs();
    };
    TeamsPage.prototype.openTeam = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__team_team__["a" /* TeamPage */], { teamInfo: id });
    };
    TeamsPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(TeamsPage_1);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tournaments_tournaments__["a" /* TournamentsPage */]);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__golfs_golfs__["a" /* GolfsPage */]);
                break;
            case 5:
                break;
        }
    }; //Open Menu
    TeamsPage.prototype.getClubs = function () {
        //console.log(this.global.token);
        /*  let headers = new Headers({
         'Content-Type': 'application/x-www-form-urlencoded',
         'withCredentials': 'true'
       });
       
       headers.append('X-Auth-Token', '9SObubYiAtaQTQV7ZWaDXYB7Gx9Fk8+kjSBwUItYYWsd8Y9XPcFNLUskqwfMOcaOchI=');*/
        var _this = this;
        //let headers = new HttpHeaders({ 'X-Auth-Token': '9SObubYiAtaQTQV7ZWaDXYB7Gx9Fk8+kjSBwUItYYWsd8Y9XPcFNLUskqwfMOcaOchI=' });
        /* let reqOpts = {
           headers: {
     
             'X-Auth-Token': this.global.token,
           }
         };
         
                 this.myHeader = new HttpHeaders({ 'Content-Type': 'x-www-form-urlencoded' });
                                                     
                 this.myHeader.set('X-Auth-Token', this.global.token);	*/
        //let options = new RequestOptions({ headers: headers });
        /* options = new RequestOptions();
         
         let headers = new Headers();
                 headers.append('X-Auth-Token', this.global.token);
                 options.headers = headers;*/
        /*let headers = {
          "Content-type": 'x-www-form-urlencoded',
          "X-Auth-Token": this.global.token,
        };*/
        /* let headers: HttpHeaders = new HttpHeaders();
     headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
     headers = headers.append('X-Auth-Token', this.global.token);*/
        /*
      
      //this.http.get(this.global.url+"/clubs/2019", {headers}).subscribe((resp:any) => {
          this.http.get(this.global.urlApiLocal+"/getClubs.php?token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
          
        //console.log(resp);
        this.teams=JSON.parse(resp);
        console.log(this.teams);
      });  */
        this.http.get(this.global.urlApiLocal + "/getData.php?e=clubs/" + this.global.season + "&s=&l=" + this.perPage + "&p=" + this.page + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            for (var i = 0; i < resp.length; i++) {
                if (resp[i].Id != 1) {
                    _this.teams.push(resp[i]);
                }
            }
            console.log(_this.teams);
            //this.golfs=resp;
            //console.log(this.golfs);
        });
    };
    TeamsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getClubs();
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    TeamsPage = TeamsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teams',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\teams\teams.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img src="assets/imgs/menu.svg">\n    </button>\n    <ion-title>Clubs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="backgroundColor">\n	\n	\n	<!--\n	<ion-grid text-center>\n	  <ion-row>\n	    <ion-col col-4  *ngFor="let t of teams" (click)="openTeam(t.id,t.id_database)">\n	    <ion-avatar item-start>\n			<img src="{{ t.logo }}" height="60px;">\n		</ion-avatar>{{ t.nombre }}</ion-col>   \n	  </ion-row>\n	</ion-grid>\n	-->\n	\n	<ion-list >\n    \n    <ion-item *ngFor="let t of teams" (click)="openTeam(t)">\n      <ion-thumbnail item-start>\n      	<img *ngIf="t.Mime" src="data:image/png;base64,{{t.Logo}}">\n      	<img *ngIf="!t.Mime" src="assets/imgs/2.svg">\n        <!--<img src="https://www.footgolf-france.fr/media/cache/club_big/{{t.Id}}_{{global.anyo}}">-->\n      </ion-thumbnail>\n      <h2>{{t.Name}}</h2>\n      <p class="note">{{t.Places.HeadOffice.Locality}}</p>\n    </ion-item>\n\n    \n  </ion-list>\n	\n<!-- Scroll Infinito -->\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n</ion-content>\n\n\n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\teams\teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], TeamsPage);
    return TeamsPage;
    var TeamsPage_1;
}());

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 244;

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoticiaPage = /** @class */ (function () {
    function NoticiaPage(navCtrl, navParams, http, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.titulo = "";
        this.fecha = "";
        this.img = "";
        this.texto = "";
        this.tags = "";
        this.equipos = "";
        console.log(this.navParams.data.noticia);
        this.noticia = this.navParams.data.noticia;
    }
    NoticiaPage.prototype.ionViewWillEnter = function () {
        //this.getData(); 
    };
    NoticiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticia',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\noticia\noticia.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ noticia.Title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n<div class="noticia">\n		<div *ngIf="noticia.Id">\n			<h2>{{ noticia.Title }}</h2>\n			 <!--<img  src="https://www.footgolf-france.fr/media/cache/home_slide/{{noticia.ArticleObjects[0].Slug}}"/>-->\n			 <img *ngIf="noticia.Vignette" src="data:image/png;base64,{{noticia.Vignette.Data}}">\n			 \n			<div [innerHTML]="noticia.Document"></div>\n		</div>\n	\n	</div>\n\n</ion-content>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\noticia\noticia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], NoticiaPage);
    return NoticiaPage;
}());

//# sourceMappingURL=noticia.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GolfMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__golf_golf__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tournamentstype_tournamentstype__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_leaflet__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_data__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var GolfMapPage = /** @class */ (function () {
    function GolfMapPage(global, http, navCtrl, navParams, iab, toastCtrl, geolocation, alertController, locationAccuracy) {
        this.global = global;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.locationAccuracy = locationAccuracy;
        this.data = __WEBPACK_IMPORTED_MODULE_14__assets_data__["a" /* default */];
        /*** Variables Scroll infinito **/
        this.page = 1;
        this.perPage = 10;
        this.homeSwitch = "map";
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.golfs = this.navParams.get("golfs");
        console.log(this.golfs);
        this.fb_live_url = 'http://admin.fgranks.com/static/redirect_fb_live.php';
        this.pushPage = __WEBPACK_IMPORTED_MODULE_5__golf_golf__["a" /* GolfPage */];
    }
    GolfMapPage.prototype.ionViewDidEnter = function () {
        //this.getGolfs();  
        this.cargoMapas();
        /*this.removeHereMarker();
          this.addHereMarker();
          this.addPlaces();*/
    };
    GolfMapPage.prototype.openList = function (id) {
        //console.log(id);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__golfs_golfs__["a" /* GolfsPage */]);
    };
    GolfMapPage.prototype.cargoMapas = function () {
        var _this = this;
        if (this.map == null)
            this.loadmap();
        var promises = new Array();
        this.addPlaces();
        promises.push(this.requestLocation());
        promises.push(this.getLocation());
        __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__["Observable"].forkJoin(promises).subscribe(function (data) {
            _this.currentPosition = data[1];
            _this.removeHereMarker();
            _this.addHereMarker();
        }, function (err) {
            if (_this.map == null)
                _this.loadmap();
            var alert = _this.alertController.create({
                title: "GPS Error",
                message: "Ensure that GPS is enabled and ready"
            });
            alert.present();
        });
    };
    GolfMapPage.prototype.addHereMarker = function () {
        var _this = this;
        this.markerGroup = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.featureGroup();
        var marker = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.marker([this.currentPosition.coords.latitude, this.currentPosition.coords.longitude]).on('click', function () {
            var popup = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.popup()
                .setLatLng([_this.currentPosition.coords.latitude, _this.currentPosition.coords.longitude])
                .setContent("<p>You are here</p>")
                .openOn(_this.map);
            popup.openPopup();
        });
        var latLngs = [marker.getLatLng()];
        var markerBounds = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.latLngBounds(latLngs);
        this.map.fitBounds(markerBounds);
        this.markerGroup.addLayer(marker);
        this.map.addLayer(this.markerGroup);
    };
    GolfMapPage.prototype.addPlaces = function () {
        var _this = this;
        this.placesGroup = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.featureGroup();
        var Icono = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.icon({
            iconUrl: "./assets/imgs/minigolf.png",
            iconSize: [32, 32],
            iconAnchor: [32, 32],
            shadowSize: [0, 0],
            popupAnchor: [0, -40]
        });
        var p = this.golfs;
        console.log(p);
        var image = '';
        if (p.GolfPhotos) {
            var placeMarker = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.marker([p.Latitude, p.Longitude], { icon: Icono }).on('click', function () {
                var popup = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.popup()
                    .setLatLng([p.NbParcours, p.NameParcours])
                    .setContent("<h3>" + p.Name + "</h3>" +
                    "<p>" + p.Street + ' - ' + p.Locality + '(' + p.PostalCode + ")</p>" +
                    "<p>" + p.MobilePhone + ' - ' + p.OfficePhone + '(' + p.PostalCode + ")</p>" +
                    "<img src=\"https://www.footgolf-france.fr/media/cache/golf/" + p.GolfPhotos[0].Slug + "\"</img>")
                    .openOn(_this.map);
                popup.openPopup();
            });
            this.placesGroup.addLayer(placeMarker);
        }
        this.map.addLayer(this.placesGroup);
        /*
        for (let p of this.data.places) {
            console.log(p);
          let placeMarker = leaflet.marker([p.lat, p.lng]).on('click', () => {
            var popup = leaflet.popup()
                  .setLatLng([p.lat, p.lng])
                  .setContent(`<h3>` + p.title + `</h3>` +
                              `<p>` + p.description + `</p>` +
                              `<img src="` + p.url + `"</img>`)
                  .openOn(this.map);
            popup.openPopup();
          });
          this.placesGroup.addLayer(placeMarker);
        }
        this.map.addLayer(this.placesGroup);*/
    };
    GolfMapPage.prototype.getLocation = function () {
        return this.geolocation.getCurrentPosition();
    };
    GolfMapPage.prototype.loadmap = function () {
        this.map = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.map("map").fitWorld();
        __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 13
        }).addTo(this.map);
    };
    GolfMapPage.prototype.removeHereMarker = function () {
        if (this.map == null || this.markerGroup == undefined)
            return;
        this.map.removeLayer(this.markerGroup);
    };
    GolfMapPage.prototype.requestLocation = function () {
        var _this = this;
        return this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                    _this.gpsEnabled = true;
                }, function (error) {
                    _this.gpsEnabled = false;
                    var alert = _this.alertController.create({
                        title: "GPS Error",
                        message: "Ensure that GPS is enabled and ready"
                    });
                    alert.present();
                });
            }
        });
    };
    GolfMapPage.prototype.updateLocation = function () {
        var _this = this;
        if (this.map != null) {
            var promises = new Array();
            promises.push(this.requestLocation());
            promises.push(this.getLocation());
            __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__["Observable"].forkJoin(promises).subscribe(function (data) {
                _this.currentPosition = data[1];
                _this.removeHereMarker();
                _this.addHereMarker();
                _this.addPlaces();
            }, function (err) {
                var alert = _this.alertController.create({
                    title: "GPS Error",
                    message: "Ensure that GPS is enabled and ready"
                });
                alert.present();
            });
        }
    };
    GolfMapPage.prototype.openGolf = function (id) {
        //console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__golf_golf__["a" /* GolfPage */], { infoGolf: id });
    };
    GolfMapPage.prototype.openBrowser = function () {
        var target = "_system";
        this.iab.create(this.fb_live_url, target, this.options);
    };
    GolfMapPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tournamentstype_tournamentstype__["a" /* TournamentsTypePage */]);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__golfs_golfs__["a" /* GolfsPage */]);
                break;
            case 5:
                break;
        }
    }; //Open Menu
    GolfMapPage.prototype.getGolfs = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;',
            'X-Auth-Token': this.global.token
        });
        //this.http.get(this.global.url+"/clubs/2019", {headers}).subscribe((resp:any) => {
        //this.http.get(this.global.urlApiLocal+"/getGolfs.php?file=true&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        this.http.get(this.global.urlApiLocal + "/getData.php?e=golfs&s=&l=250&p=1&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            for (var i = 0; i < resp.length; i++) {
                _this.golfs.push(resp[i]);
            }
            //this.initMap(this.golfs)
            //console.log(this.golfs);
            //this.golfs=resp;
            //console.log(this.golfs);
        });
    };
    GolfMapPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getGolfs();
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GolfMapPage.prototype, "mapContainer", void 0);
    GolfMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-golfMap',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\golfMap\golfMap.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img src="assets/imgs/menu.svg">\n    </button>\n    <ion-title>Golfs</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content  class="backgroundColor">\n	\n	\n	\n		\n		\n			\n			<div id="map" style="width: 100%; height: 95%; position: absolute;"></div>\n			\n		\n	\n\n</ion-content>\n\n\n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>\n\n<!--<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Ionic Map\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="updateLocation()">\n        <ion-icon name="locate"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div id="map" style="width:100%; height:100%;"></div>\n</ion-content>-->\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\golfMap\golfMap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__["a" /* LocationAccuracy */]])
    ], GolfMapPage);
    return GolfMapPage;
}());

//# sourceMappingURL=golfMap.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerScorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlayerScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayerScorePage = /** @class */ (function () {
    function PlayerScorePage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.player = this.navParams.get("player");
        this.index = this.navParams.get("index");
        console.log(this.player);
        this.score = this.player.scores[this.index];
        this.par = this.player.pars[this.index];
    }
    PlayerScorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayerScorePage');
    };
    PlayerScorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-player-score',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\player-score\player-score.html"*/'<ion-header no-border color="backColor">\n    <ion-navbar hideBackButton>\n      <ion-title><img src="assets/imgs/foot.png" height="40px" alt=""></ion-title>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="viewCtrl.dismiss()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding class="backgroundColor">\n\n    <div class="resultBox">\n        <ion-grid>\n          <ion-row text-center padding-top align-items-center>\n            <ion-col col-6>\n              <div class="circle mCenter"></div>\n            </ion-col>\n            <!--<ion-col col-6>\n              <h4 ion-text color="primary">campo<br><span class="mDate">nose</span></h4>\n            </ion-col>\n            <ion-col col-4>\n              <div class="circle mCenter"></div>\n            </ion-col>-->\n          </ion-row>\n          <ion-row text-center>\n            <ion-col col-6 ion-text color="primary"><b>{{player.nombre}}</b></ion-col>\n            <ion-col col-4 ion-text color="primary"></ion-col>\n            <!--<ion-col col-4 ion-text color="primary"><b>SPAIN</b></ion-col>-->\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 ion-text color="primary">\n              <ion-item text-center class="mode" no-lines><b> Score: {{ this.score }}</b></ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <hr>\n  \n      <ion-grid>\n      <ion-row padding-top text-center>\n        <ion-col col-4><b>HOLE</b></ion-col>\n        <ion-col col-4 class="padLeft"><b></b></ion-col>\n        <ion-col col-4 class="padLeft"><b></b></ion-col>\n      </ion-row>\n      <ion-row padding-top text-center *ngFor="let item of par,let i = index">\n        <ion-col col-4>\n          <div class="note" text-center>\n              <p class="litMargin"><b>{{ i+1 }}</b></p>\n              <!--<p no-margin><b>par algo</b></p>-->\n          </div> \n        </ion-col>\n        <ion-col col-4>\n         <h2 style="padding-top:20px">{{ item }}</h2>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\player-score\player-score.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PlayerScorePage);
    return PlayerScorePage;
}());

//# sourceMappingURL=player-score.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tournament_tournament__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tournamentstype_tournamentstype__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { TeamPage } from '../team/team';

var SearchTournamentsPage = /** @class */ (function () {
    function SearchTournamentsPage(global, http, navCtrl, viewCtrl, navParams, iab) {
        this.global = global;
        this.http = http;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.page = 1;
        this.perPage = 15;
        this.tournaments = [];
        this.tournamentsClosed = [];
        this.tournamentSwitch = "open";
        this.mysearch = "";
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        //this.pushPage = TeamPage;
        this.tournamentType = this.navParams.data.type;
        console.log(this.tournamentType);
    }
    SearchTournamentsPage.prototype.ionViewWillEnter = function () {
        this.rankings = true;
        this.getTournaments();
        this.getTournamentsClosed();
    };
    SearchTournamentsPage.prototype.openTournament = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tournament_tournament__["a" /* TournamentPage */], { info: id });
    };
    SearchTournamentsPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tournamentstype_tournamentstype__["a" /* TournamentsTypePage */]);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__golfs_golfs__["a" /* GolfsPage */]);
                break;
            case 5:
                break;
        }
    };
    SearchTournamentsPage.prototype.getTournaments = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;',
            'X-Auth-Token': this.global.token
        });
        //this.http.get(this.global.url+"/clubs/2019", {headers}).subscribe((resp:any) => {
        //this.http.get(this.global.urlApiLocal+"/getGolfs.php?file=true&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        this.http.get(this.global.urlApiLocal + "/getData.php?e=competitions/" + this.global.season + "/" + this.tournamentType.Id + "&s=&l=" + this.perPage + "&p=" + this.page + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            console.log(resp);
            for (var i = 0; i < resp.length; i++) {
                _this.tournaments.push(resp[i]);
            }
            //console.log(resp);
            //this.golfs=resp;
            //console.log(this.golfs);
        });
    };
    SearchTournamentsPage.prototype.getTournamentsClosed = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;',
            'X-Auth-Token': this.global.token
        });
        //this.http.get(this.global.url+"/clubs/2019", {headers}).subscribe((resp:any) => {
        //this.http.get(this.global.urlApiLocal+"/getGolfs.php?file=true&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        this.http.get(this.global.urlApiLocal + "/getData.php?e=competitions/" + this.global.season + "/" + this.tournamentType.Id + "&s=CLOSE&l=" + this.perPage + "&p=" + this.page + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            console.log(resp);
            for (var i = 0; i < resp.length; i++) {
                _this.tournamentsClosed.push(resp[i]);
            }
            //console.log(resp);
            //this.golfs=resp;
            //console.log(this.golfs);
        });
    };
    SearchTournamentsPage.prototype.Search = function (ev) {
        //this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.searchTournaments(val);
            this.mysearch = val;
        }
    };
    SearchTournamentsPage.prototype.searchTournaments = function (string) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;',
            'X-Auth-Token': this.global.token
        });
        this.tournaments.length = 0;
        //this.http.get(this.global.url+"/clubs/2019", {headers}).subscribe((resp:any) => {
        //this.http.get(this.global.urlApiLocal+"/getGolfs.php?file=true&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        this.http.get(this.global.urlApiLocal + "/getData.php?e=competitions/" + this.global.season + "/" + this.tournamentType.Id + "&s=" + string + "&l=205&p=1&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            console.log(resp);
            for (var i = 0; i < resp.length; i++) {
                _this.tournaments.push(resp[i]);
            }
            //console.log(resp);
            //this.golfs=resp;
            //console.log(this.golfs);
        });
    };
    SearchTournamentsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getTournaments();
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    SearchTournamentsPage.prototype.doInfinite2 = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getTournamentsClosed();
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    SearchTournamentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-searchtournaments',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\searchtournaments\searchtournaments.html"*/'\n\n\n<ion-header no-border color="backColor">\n  <ion-navbar hideBackButton>\n    <ion-title>{{ tournamentType.Name }}</ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-searchbar debounce="700" padding (ionInput)="Search($event)"></ion-searchbar>\n</ion-header>\n\n\n<ion-content  class="backgroundColor">\n	\n	\n	<a href="https://www.footgolf-france.fr/inscription" target="_blank"><img src="assets/imgs/banner_inscription.jpg" style="width:100%"></a>\n\n	\n\n<!--<div >\n  <ion-segment [(ngModel)]="tournamentSwitch">\n    <ion-segment-button value="open">\n      {{ \'OPEN\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="closed">\n      {{ \'CLOSED\' | translate }}\n    </ion-segment-button>\n  </ion-segment>\n</div>-->\n\n\n<div padding >\n\n    \n    \n    <div class="golf" *ngFor="let t of tournaments" (click)="openTournament(t)"> \n	    <ion-card class="card" >\n		    <!--<img *ngIf="t.Photo" src="data:image/png;base64,{{t.Photo}}">\n			<img *ngIf="!t.Photo" src="assets/imgs/placeholdert.jpg">-->\n		    <div class="card-header">\n			    <div class="card-title">{{t.Name}}</div>\n				<div class="card-subtitle">{{t.Locality}} | {{t.Date1.date | moment:\'D/M/YY\' }}</div>\n		    </div>\n		</ion-card>\n	</div>\n    \n    \n\n    \n  <!--</ion-list>-->\n	\n<!-- Scroll Infinito -->\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n	\n   \n	\n</div>	\n	\n	\n	\n	\n	\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\searchtournaments\searchtournaments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], SearchTournamentsPage);
    return SearchTournamentsPage;
}());

//# sourceMappingURL=searchtournaments.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GolfsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__golf_golf__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__golfsMap_golfsMap__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tournamentstype_tournamentstype__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_leaflet__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_data__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var GolfsPage = /** @class */ (function () {
    function GolfsPage(global, http, navCtrl, navParams, iab, toastCtrl, geolocation, alertController, locationAccuracy) {
        this.global = global;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.locationAccuracy = locationAccuracy;
        this.data = __WEBPACK_IMPORTED_MODULE_14__assets_data__["a" /* default */];
        /*** Variables Scroll infinito **/
        this.page = 1;
        this.perPage = 10;
        this.homeSwitch = "map";
        this.courses = true;
        this.golfs = [];
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.fb_live_url = 'http://admin.fgranks.com/static/redirect_fb_live.php';
        this.pushPage = __WEBPACK_IMPORTED_MODULE_5__golf_golf__["a" /* GolfPage */];
    }
    GolfsPage_1 = GolfsPage;
    GolfsPage.prototype.ionViewDidEnter = function () {
        this.getGolfs();
        /*this.removeHereMarker();
          this.addHereMarker();
          this.addPlaces();*/
    };
    GolfsPage.prototype.onSegmentChange = function () {
        if (this.homeSwitch == "map") {
            this.cargoMapas();
        }
    };
    GolfsPage.prototype.cargoMapas = function () {
        var _this = this;
        if (this.map == null)
            this.loadmap();
        var promises = new Array();
        promises.push(this.requestLocation());
        promises.push(this.getLocation());
        __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__["Observable"].forkJoin(promises).subscribe(function (data) {
            _this.currentPosition = data[1];
            _this.removeHereMarker();
            _this.addHereMarker();
            _this.addPlaces();
        }, function (err) {
            if (_this.map == null)
                _this.loadmap();
            var alert = _this.alertController.create({
                title: "GPS Error",
                message: "Ensure that GPS is enabled and ready"
            });
            alert.present();
        });
    };
    GolfsPage.prototype.addHereMarker = function () {
        var _this = this;
        this.markerGroup = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.featureGroup();
        var marker = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.marker([this.currentPosition.coords.latitude, this.currentPosition.coords.longitude]).on('click', function () {
            var popup = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.popup()
                .setLatLng([_this.currentPosition.coords.latitude, _this.currentPosition.coords.longitude])
                .setContent("<p>You are here</p>")
                .openOn(_this.map);
            popup.openPopup();
        });
        var latLngs = [marker.getLatLng()];
        var markerBounds = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.latLngBounds(latLngs);
        this.map.fitBounds(markerBounds);
        this.markerGroup.addLayer(marker);
        this.map.addLayer(this.markerGroup);
    };
    GolfsPage.prototype.addPlaces = function () {
        var _this = this;
        this.placesGroup = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.featureGroup();
        var _loop_1 = function (p) {
            console.log(p);
            var placeMarker = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.marker([p.lat, p.lng]).on('click', function () {
                var popup = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.popup()
                    .setLatLng([p.lat, p.lng])
                    .setContent("<h3>" + p.title + "</h3>" +
                    "<p>" + p.description + "</p>" +
                    "<img src=\"" + p.url + "\"</img>")
                    .openOn(_this.map);
                popup.openPopup();
            });
            this_1.placesGroup.addLayer(placeMarker);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.data.places; _i < _a.length; _i++) {
            var p = _a[_i];
            _loop_1(p);
        }
        this.map.addLayer(this.placesGroup);
    };
    GolfsPage.prototype.getLocation = function () {
        return this.geolocation.getCurrentPosition();
    };
    GolfsPage.prototype.loadmap = function () {
        this.map = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.map("map").fitWorld();
        __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 13
        }).addTo(this.map);
    };
    GolfsPage.prototype.removeHereMarker = function () {
        if (this.map == null || this.markerGroup == undefined)
            return;
        this.map.removeLayer(this.markerGroup);
    };
    GolfsPage.prototype.requestLocation = function () {
        var _this = this;
        return this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                    _this.gpsEnabled = true;
                }, function (error) {
                    _this.gpsEnabled = false;
                    var alert = _this.alertController.create({
                        title: "GPS Error",
                        message: "Ensure that GPS is enabled and ready"
                    });
                    alert.present();
                });
            }
        });
    };
    GolfsPage.prototype.updateLocation = function () {
        var _this = this;
        if (this.map != null) {
            var promises = new Array();
            promises.push(this.requestLocation());
            promises.push(this.getLocation());
            __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__["Observable"].forkJoin(promises).subscribe(function (data) {
                _this.currentPosition = data[1];
                _this.removeHereMarker();
                _this.addHereMarker();
                _this.addPlaces();
            }, function (err) {
                var alert = _this.alertController.create({
                    title: "GPS Error",
                    message: "Ensure that GPS is enabled and ready"
                });
                alert.present();
            });
        }
    };
    GolfsPage.prototype.openGolf = function (id) {
        //console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__golf_golf__["a" /* GolfPage */], { infoGolf: id });
    };
    GolfsPage.prototype.openMap = function (golfs) {
        console.log("Esto si");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__golfsMap_golfsMap__["a" /* GolfsMapPage */], { golfs: golfs });
    };
    GolfsPage.prototype.openBrowser = function () {
        var target = "_system";
        this.iab.create(this.fb_live_url, target, this.options);
    };
    GolfsPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__tournamentstype_tournamentstype__["a" /* TournamentsTypePage */]);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(GolfsPage_1);
                break;
            case 5:
                break;
        }
    }; //Open Menu
    GolfsPage.prototype.getGolfs = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;',
            'X-Auth-Token': this.global.token
        });
        //this.http.get(this.global.url+"/clubs/2019", {headers}).subscribe((resp:any) => {
        //this.http.get(this.global.urlApiLocal+"/getGolfs.php?file=true&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        this.http.get(this.global.urlApiLocal + "/getData.php?e=golfs&s=&l=" + this.perPage + "&p=" + this.page + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            for (var i = 0; i < resp.length; i++) {
                _this.golfs.push(resp[i]);
            }
            //this.initMap(this.golfs)
            //console.log(this.golfs);
            //this.golfs=resp;
            //console.log(this.golfs);
        });
    };
    GolfsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getGolfs();
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GolfsPage.prototype, "mapContainer", void 0);
    GolfsPage = GolfsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-golfs',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\golfs\golfs.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img src="assets/imgs/menu.svg">\n    </button>\n    <ion-title>Golfs</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="openMap(golfs)" icon-only color="white">\n        <ion-icon  name="map"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="backgroundColor">\n	\n	\n\n	\n	\n		\n		\n	    <div class="golf" *ngFor="let t of golfs"> \n		    <ion-card class="card" *ngIf="t.GolfPhotos" (click)="openGolf(t)" >\n			    <img  src="https://www.footgolf-france.fr/media/cache/golf/{{t.GolfPhotos[0].Slug}}"/>\n			    <div class="card-header">\n				    <div class="card-title">{{t.Name}}</div>\n					<div class="card-subtitle">{{t.Locality}}</div>\n			    </div>\n			</ion-card>\n		</div>\n	    \n	\n	    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n			<ion-infinite-scroll-content></ion-infinite-scroll-content>\n		</ion-infinite-scroll>\n		\n		\n	\n		\n	\n\n</ion-content>\n\n\n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>\n\n<!--<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Ionic Map\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="updateLocation()">\n        <ion-icon name="locate"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div id="map" style="width:100%; height:100%;"></div>\n</ion-content>-->\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\golfs\golfs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__["a" /* LocationAccuracy */]])
    ], GolfsPage);
    return GolfsPage;
    var GolfsPage_1;
}());

//# sourceMappingURL=golfs.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tournaments_tournaments__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { TeamPage } from '../team/team';

var TournamentsTypePage = /** @class */ (function () {
    function TournamentsTypePage(global, http, navCtrl, navParams, iab) {
        this.global = global;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.tournaments = [];
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.rankings = true;
        this.getTournamentsTypes();
    }
    TournamentsTypePage_1 = TournamentsTypePage;
    TournamentsTypePage.prototype.ionViewWillEnter = function () {
    };
    TournamentsTypePage.prototype.openTournaments = function (id) {
        //console.log(this.global.menuItems);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tournaments_tournaments__["a" /* TournamentsPage */], { type: id });
        //this.navCtrl.setRoot(TournamentsPage,{type: id});
    };
    TournamentsTypePage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(TournamentsTypePage_1);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__golfs_golfs__["a" /* GolfsPage */]);
                break;
            case 5:
                break;
        }
    }; //Open Menu
    TournamentsTypePage.prototype.getTournamentsTypes = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;',
            'X-Auth-Token': this.global.token
        });
        //this.http.get(this.global.urlApiLocal+"/getGolfs.php?file=true&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        this.http.get(this.global.urlApiLocal + "/getData.php?e=competitionKinds/" + this.global.season + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            for (var i = 0; i < resp.length; i++) {
                _this.tournaments.push(resp[i]);
            }
            console.log(_this.tournaments);
            //console.log(resp);
            //this.golfs=resp;
            //console.log(this.golfs);
        });
    };
    TournamentsTypePage = TournamentsTypePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tournamentstype',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\tournamentstype\tournamentstype.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n     <img src="assets/imgs/menu.svg">\n    </button>\n    <ion-title>{{ \'TOURNAMENTS\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content  class="backgroundColor">\n	\n\n<a href="https://www.footgolf-france.fr/inscription" target="_blank"><img src="assets/imgs/banner_inscription.jpg" style="width:100%"></a>\n\n\n  \n  <ion-list padding>\n    \n    <ion-item *ngFor="let t of tournaments" (click)="openTournaments(t)">\n      <!--<ion-thumbnail item-start>\n\n        <ion-icon name="trophy"></ion-icon>\n      </ion-thumbnail>-->\n      <h2>{{t.Name}}</h2>\n      <p class="note">{{t.Year}}</p>\n    </ion-item>\n\n    \n  </ion-list>\n  \n	\n\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\tournamentstype\tournamentstype.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], TournamentsTypePage);
    return TournamentsTypePage;
    var TournamentsTypePage_1;
}());

//# sourceMappingURL=tournamentstype.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GolfsMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__golf_golf__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tournamentstype_tournamentstype__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_leaflet__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_data__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var GolfsMapPage = /** @class */ (function () {
    function GolfsMapPage(global, http, navCtrl, navParams, iab, toastCtrl, geolocation, alertController, locationAccuracy) {
        //this.golfs = this.navParams.get("golfs");
        this.global = global;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.locationAccuracy = locationAccuracy;
        this.data = __WEBPACK_IMPORTED_MODULE_14__assets_data__["a" /* default */];
        /*** Variables Scroll infinito **/
        this.page = 1;
        this.perPage = 10;
        this.homeSwitch = "map";
        this.golfs = [];
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        console.log(this.golfs);
        this.fb_live_url = 'http://admin.fgranks.com/static/redirect_fb_live.php';
        this.pushPage = __WEBPACK_IMPORTED_MODULE_5__golf_golf__["a" /* GolfPage */];
    }
    GolfsMapPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.getGolfs().then(function (data) {
            _this.cargoMapas();
        });
        /*this.removeHereMarker();
          this.addHereMarker();
          this.addPlaces();*/
    };
    GolfsMapPage.prototype.openList = function (id) {
        //console.log(id);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__golfs_golfs__["a" /* GolfsPage */]);
    };
    GolfsMapPage.prototype.cargoMapas = function () {
        var _this = this;
        if (this.map == null)
            this.loadmap();
        var promises = new Array();
        this.addPlaces();
        promises.push(this.requestLocation());
        promises.push(this.getLocation());
        __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__["Observable"].forkJoin(promises).subscribe(function (data) {
            _this.currentPosition = data[1];
            _this.removeHereMarker();
            _this.addHereMarker();
        }, function (err) {
            if (_this.map == null)
                _this.loadmap();
            var alert = _this.alertController.create({
                title: "GPS Error",
                message: "Ensure that GPS is enabled and ready"
            });
            alert.present();
        });
    };
    GolfsMapPage.prototype.addHereMarker = function () {
        var _this = this;
        this.markerGroup = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.featureGroup();
        var marker = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.marker([this.currentPosition.coords.latitude, this.currentPosition.coords.longitude]).on('click', function () {
            var popup = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.popup()
                .setLatLng([_this.currentPosition.coords.latitude, _this.currentPosition.coords.longitude])
                .setContent("<p>You are here</p>")
                .openOn(_this.map);
            popup.openPopup();
        });
        var latLngs = [marker.getLatLng()];
        var markerBounds = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.latLngBounds(latLngs);
        this.map.fitBounds(markerBounds);
        this.markerGroup.addLayer(marker);
        this.map.addLayer(this.markerGroup);
    };
    GolfsMapPage.prototype.addPlaces = function () {
        var _this = this;
        this.placesGroup = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.featureGroup();
        var Icono = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.icon({
            iconUrl: "./assets/imgs/minigolf.png",
            iconSize: [32, 32],
            iconAnchor: [32, 32],
            shadowSize: [0, 0],
            popupAnchor: [0, -40]
        });
        var _loop_1 = function (p) {
            console.log(p);
            image = '';
            if (p.GolfPhotos) {
                var placeMarker = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.marker([p.Latitude, p.Longitude], { icon: Icono }).on('click', function () {
                    /*var popup = leaflet.popup()
                          .setLatLng([p.NbParcours, p.NameParcours])
                          .setContent(`<h3>` + p.Name + `</h3>` +
                                      `<p>` + p.Street + ' - ' + p.Locality + '('+ p.PostalCode + `)</p>` +
                                      `<p>` + p.MobilePhone + ' - ' + p.OfficePhone + '('+ p.PostalCode + `)</p>` +
                                      `<img src="https://www.footgolf-france.fr/media/cache/golf/` + p.GolfPhotos[0].Slug + `"</img>`)
                                  .on('click', function(e) {
                            console.log("Hey, click");
                            console.log(e);
                        }).openOn(this.map);
                    popup.openPopup();*/
                    _this.openGolf(p);
                });
                this_1.placesGroup.addLayer(placeMarker);
            }
        };
        var this_1 = this, image;
        for (var _i = 0, _a = this.golfs; _i < _a.length; _i++) {
            var p = _a[_i];
            _loop_1(p);
        }
        this.map.addLayer(this.placesGroup);
        /*
        for (let p of this.data.places) {
            console.log(p);
          let placeMarker = leaflet.marker([p.lat, p.lng]).on('click', () => {
            var popup = leaflet.popup()
                  .setLatLng([p.lat, p.lng])
                  .setContent(`<h3>` + p.title + `</h3>` +
                              `<p>` + p.description + `</p>` +
                              `<img src="` + p.url + `"</img>`)
                  .openOn(this.map);
            popup.openPopup();
          });
          this.placesGroup.addLayer(placeMarker);
        }
        this.map.addLayer(this.placesGroup);*/
    };
    GolfsMapPage.prototype.getLocation = function () {
        return this.geolocation.getCurrentPosition();
    };
    GolfsMapPage.prototype.loadmap = function () {
        //var latlng = L.latLng(50.5, 30.5);
        this.map = __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.map("map").fitWorld();
        __WEBPACK_IMPORTED_MODULE_13_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 13,
            minZoom: 6
        }).addTo(this.map);
        this.map.setZoom(10);
        var centroactual = this.map.getCenter();
        if (centroactual.lat == 0 && centroactual.lng == 0) {
            this.map.setView([48.864716, 2.349014]); //48.864716, 2.349014
        }
        console.log(this.map.getCenter());
        //this.map.setView({lon: 30, lat: 50});
    };
    GolfsMapPage.prototype.removeHereMarker = function () {
        if (this.map == null || this.markerGroup == undefined)
            return;
        this.map.removeLayer(this.markerGroup);
    };
    GolfsMapPage.prototype.requestLocation = function () {
        var _this = this;
        return this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                    _this.gpsEnabled = true;
                }, function (error) {
                    _this.gpsEnabled = false;
                    var alert = _this.alertController.create({
                        title: "GPS Error",
                        message: "Ensure that GPS is enabled and ready"
                    });
                    alert.present();
                });
            }
        });
    };
    GolfsMapPage.prototype.updateLocation = function () {
        var _this = this;
        if (this.map != null) {
            var promises = new Array();
            promises.push(this.requestLocation());
            promises.push(this.getLocation());
            __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__["Observable"].forkJoin(promises).subscribe(function (data) {
                _this.currentPosition = data[1];
                _this.removeHereMarker();
                _this.addHereMarker();
                _this.addPlaces();
            }, function (err) {
                var alert = _this.alertController.create({
                    title: "GPS Error",
                    message: "Ensure that GPS is enabled and ready"
                });
                alert.present();
            });
        }
    };
    GolfsMapPage.prototype.openGolf = function (id) {
        //console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__golf_golf__["a" /* GolfPage */], { infoGolf: id });
    };
    GolfsMapPage.prototype.openBrowser = function () {
        var target = "_system";
        this.iab.create(this.fb_live_url, target, this.options);
    };
    GolfsMapPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tournamentstype_tournamentstype__["a" /* TournamentsTypePage */]);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__golfs_golfs__["a" /* GolfsPage */]);
                break;
            case 5:
                break;
        }
    }; //Open Menu
    GolfsMapPage.prototype.getGolfs = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json;',
                'X-Auth-Token': _this.global.token
            });
            _this.http.get(_this.global.urlApiLocal + "/getData.php?e=golfs&s=&l=300&p=1&token=" + encodeURIComponent(_this.global.token)).subscribe(function (resp) {
                //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
                for (var i = 0; i < resp.length; i++) {
                    _this.golfs.push(resp[i]);
                }
                //this.initMap(this.golfs)
                //console.log(this.golfs);
                //this.golfs=resp;
                //console.log(this.golfs);
                resolve(_this.golfs);
            });
        });
    };
    GolfsMapPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getGolfs();
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GolfsMapPage.prototype, "mapContainer", void 0);
    GolfsMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-golfsMap',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\golfsMap\golfsMap.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img src="assets/imgs/menu.svg">\n    </button>\n    <ion-title>Golfs</ion-title>\n     <ion-buttons end>\n      <button ion-button (click)="openList()" icon-only color="white">\n        <ion-icon  name="list"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content  class="backgroundColor">\n	\n	\n	\n		\n		\n			\n			<div id="map" style="width: 100%; height: 95%; position: absolute;"></div>\n			\n		\n	\n\n</ion-content>\n\n\n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>\n\n<!--<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Ionic Map\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="updateLocation()">\n        <ion-icon name="locate"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div id="map" style="width:100%; height:100%;"></div>\n</ion-content>-->\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\golfsMap\golfsMap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__["a" /* LocationAccuracy */]])
    ], GolfsMapPage);
    return GolfsMapPage;
}());

//# sourceMappingURL=golfsMap.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_signature_pad__ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { SignaturePad } from 'angular2-signaturepad/signature-pad';

var SignaturePage = /** @class */ (function () {
    function SignaturePage(viewCtrl, http, global, navCtrl, navParams, _FB, actionsheetCtrl, toastCtrl, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._FB = _FB;
        this.actionsheetCtrl = actionsheetCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.signature = '';
        this.isDrawing = false;
        this.hoyos_fake = [];
        this.resultados = [];
        this.TotalPar = 0;
        this.Totales = [];
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            firma: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('')
        });
        this.signaturePadOptions = {
            'minWidth': 1,
            'canvasHeight': 300,
            'backgroundColor': '#ffffff',
            'penColor': '#666a73'
        };
        this.match = this.navParams.get("info");
        this.equipo = this.navParams.get("equipo");
        this.info = this.navParams.get("results");
        this.ronda = this.equipo.Round;
        console.log(this.match);
        console.log(this.equipo);
        console.log(this.info);
        this.showFirmas = false;
        //this.getSalida(this.match);
        /* Construyo el formulario*/
        this.form = this._FB.group({
            hoyos: this._FB.array([
                this.initHoyoFields()
            ])
        });
        for (var _i = 0; _i < 18; _i++)
            this.hoyos_fake.push("");
        this.addNewInputField();
    }
    SignaturePage.prototype.ionViewDidEnter = function () {
        if (this.showFirmas) {
            this.signaturePad.clear();
        }
        else {
            //Calculamos el Par y los golpes de cada Jugador
            for (var _i = 0; _i < 18; _i++) {
                this.TotalPar = parseInt(this.match.Pars[this.equipo.NumParcours][_i]) + this.TotalPar;
            }
            for (var _j = 0; _j < this.equipo.Registers.length; _j++) {
                this.Totales.push(0);
                //console.log(this.equipo.Registers[_j].Pars[this.ronda]);
                /*for (var _z = 0; _z < this.equipo.Registers[_j].Pars[this.ronda].length; _z++){

                    this.Totales[_j]=this.Totales[_j] + parseInt(this.equipo.Registers[_j].Pars[this.ronda][_z]);
                }*/
                for (var _z = 1; _z <= 18; _z++) {
                    console.log("hole_" + _j + "_" + _z + ": " + this.info["hole_" + _j + "_" + _z]);
                    if (this.info["hole_" + _j + "_" + _z] != "") {
                        this.Totales[_j] = this.Totales[_j] + (parseInt(this.info["hole_" + _j + "_" + _z]) - parseInt(this.match.Pars[this.equipo.NumParcours][_z - 1]));
                    }
                }
                /*for (var _z = 0; _z < 18; _z++){
                    if(this.equipo.Registers[_j].Pars[_z]!= null){this.Totales[_j]=this.Totales[_j]+parseInt(this.equipo.Registers[_j].Pars[_z]);}
                    }*/
            }
            console.log(this.Totales);
        }
    };
    SignaturePage.prototype.drawComplete = function () {
        this.isDrawing = false;
    };
    SignaturePage.prototype.drawStart = function () {
        this.isDrawing = true;
    };
    SignaturePage.prototype.toFirmas = function (licence, num) {
        this.numeroJugador = num;
        this.licenciaFirma = licence;
        console.log(this.licenciaFirma);
        this.showFirmas = true;
    };
    SignaturePage.prototype.isMatchFinished = function (numJugador) {
        //console.log(this.equipo.Registers[numJugador]['Round'+this.rondaPlus+'Finished']);
        return this.equipo.Registers[numJugador]['Round' + (this.ronda + 1) + 'Finished'];
    };
    SignaturePage.prototype.toSummary = function () {
        this.showFirmas = false;
    };
    SignaturePage.prototype.savePad = function (idPlayer) {
        this.signature = this.signaturePad.toDataURL();
        console.log(this.signature);
        //this.storage.set('savedSignature', this.signature);
        this.signaturePad.clear();
        var toast = this.toastCtrl.create({
            message: 'Flight Saved',
            duration: 5000
        });
        toast.present();
        this.saveResults(idPlayer);
        //this.navCtrl.popToRoot();
    };
    SignaturePage.prototype.clearPad = function () {
        this.signaturePad.clear();
    };
    SignaturePage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    SignaturePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SignaturePage.prototype.initHoyoFields = function () {
        return this._FB.group({
            valor: ['']
        });
    };
    SignaturePage.prototype.addNewInputField = function () {
        var control = this.form.controls.hoyos;
        control.push(this.initHoyoFields());
    };
    SignaturePage.prototype.manage = function (val) {
        console.dir(val);
    };
    SignaturePage.prototype.getFight = function (id) {
        this.http.get(this.global.url + "/flight/read_by_flight.php?id_torneo=" + this.global.id_torneo + "&flight_id=" + this.match)
            .subscribe(function (resp) {
            console.log(resp);
        });
    };
    SignaturePage.prototype.getSalida = function (results) {
        this.flight_encontrado = true;
        //this.flights=this.match.results;
        this.hora_inicio = this.equipo.HourStart.date;
        this.ronda = this.equipo.Round;
        //console.log(this.flights);
        //this.ronda=resp.records[0][0].ronda + 1;
        /*this.ronda=+resp.records[0][0].ronda;
        this.campo_juego=resp.records[0][0].campo_juego;
        this.hoyo_salida=resp.records[0][0].hoyo_salida;*/
        //this.resultados=resp.records[0][0].hoyo_salida;
        /*for (var _i = 0; _i < resp.records[0].length; _i++){
            
            this.resultados.push(resp.records[0][_i].resultados[0].pars);
            
        }//Endfor*/
    };
    SignaturePage.prototype.saveResults = function (idPlayer) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Saving Scores...'
        });
        this.loading.present();
        this.results = [];
        this.resultadosObj = [];
        //console.log(this.profileForm.value);
        var cont = 0;
        var cont_jug = 0;
        console.log(this.results);
        for (var item in this.info) {
            //if(this.info[item] == idPlayer){ //Solo para este jugador :-D
            if (cont == 18) {
                if (this.info[item] == idPlayer) {
                    this.equipo.Registers[cont_jug]['Round' + (this.ronda + 1) + 'Finished'] = true;
                    this.resultadosObj.push({
                        'player_id': this.info[item],
                        'golpes': this.results
                    });
                }
                this.results = [];
                cont = 0;
                cont_jug++;
            }
            else {
                this.results.push(this.info[item]);
                cont++;
            }
            //}
        }
        //console.log(this.results);
        this.resultObjt = {
            'ronda': this.equipo.Round,
            'finalizado': 1,
            'idTorneo': this.match.Id,
            'token': this.global.token,
            'year': this.global.season,
            'resultados': this.resultadosObj,
            'firma': this.signature
        };
        console.log(JSON.stringify(this.resultObjt));
        this.http.post(this.global.urlApiLocal + "/setData.php", JSON.stringify(this.resultObjt))
            .subscribe(function (resp) {
            //console.log(resp);
            //this.navCtrl.pop();
            _this.loading.dismiss();
            if (resp.status == 1) {
                _this.showToast("Scores Saved");
                _this.equipo.Registers[_this.numeroJugador]['Round' + (_this.ronda + 1) + 'Finished'] = true;
                _this.showFirmas = false; //Volvemos al resumen
                //this.navCtrl.pop();
            }
            else {
                _this.showToast("Error Saving Scores");
            }
        }, function (err) {
            console.log(err);
        });
        //this.loading.dismiss();
    };
    SignaturePage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Saving Scores...'
        });
        loading.present();
        this.results = [];
        this.resultadosObj = [];
        //console.log(this.profileForm.value);
        var cont = 0;
        var cont_jug = 0;
        for (var item in this.profileForm.value) {
            if (cont == 18) {
                this.resultadosObj.push({
                    'player_id': this.profileForm.value[item],
                    'golpes': this.results
                });
                this.results = [];
                cont = 0;
                cont_jug++;
            }
            else {
                this.results.push(this.profileForm.value[item]);
                cont++;
            }
        }
        console.log(this.resultadosObj);
        //console.log(this.results);
        this.resultObjt = {
            'flight_id': this.match,
            'resultados': this.resultadosObj
        };
        console.log(JSON.stringify(this.resultObjt));
        this.http.post(this.global.url + "/rankings/update.php?id_torneo=" + this.global.id_torneo, JSON.stringify(this.resultObjt))
            .subscribe(function (resp) {
            //console.log(resp);
            _this.navCtrl.pop();
            loading.dismiss();
            if (resp.message == "ok") {
                _this.showToast("Scores Saved");
            }
            else {
                _this.showToast("Error Saving Scores");
            }
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_signature_pad__["a" /* default */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_signature_pad__["a" /* default */])
    ], SignaturePage.prototype, "signaturePad", void 0);
    SignaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signature',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\signature\signature.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img src="assets/imgs/menu.svg">\n    </button>\n    <ion-title *ngIf="showFirmas">{{ \'SIGNFLIGHT\' | translate }}</ion-title>\n    <ion-title *ngIf="!showFirmas">{{ \'SUMMARY\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n  \n<ion-content padding>\n\n\n\n\n<div *ngIf="!showFirmas">\n\n<div class="cabecera" padding>\n  	\n  	\n  			<h1>{{match.Name}}</h1>\n  			\n  			<h3 text-center>Round: {{equipo.Round + 1}}</h3>\n  		\n  			<!--<h6 ion-text color="menuButton">Course</h6>\n  			<h2>{{campo_juego}}</h2>\n  		\n  			<h6 ion-text color="menuButton">Time</h6>\n  			<h2>{{hora_inicio}}</h2>-->\n  		\n  			<!--<h6 ion-text color="menuButton">Starting </h6>\n  			<h2>Hole {{hoyo_salida}}</h2>-->\n  		\n  	\n  	</div><!--end cabecera -->\n\n\n  <div class="title">{{ \'SIGNTEXT\' | translate }}</div>\n\n\n<ion-list>\n    \n    \n    		<div *ngFor="let p of equipo.Registers; index as j; first as isFirstFlight2">\n    \n					    <ion-item *ngIf="!isMatchFinished(j)" (click)="toFirmas(p, j)">\n					    \n					     \n					     <ion-thumbnail item-start>\n					        <img *ngIf="p.Licence.Photo!=\'\'" src="data:image/png;base64,{{p.Licence.Photo}}">\n					        <ion-icon *ngIf="!p.Licence.Photo" name="contact"></ion-icon>\n					        \n					      </ion-thumbnail>\n					      \n	\n					      \n					      <ion-label>\n					      <h2><img src="assets/imgs/flags/{{p.Licence.Country}}.png" width="16px"> {{p.Licence.LastName}}, {{p.Licence.FirstName}}</h2>\n					      <!--<p class="note">{{p.info_jugador.Country}}</p>-->\n					      <p class="note">Match non signé<ion-icon name="close" color="danger"></ion-icon></p>\n					      </ion-label>\n					      <div item-end>\n						      <ion-input placeholder="-" value="{{Totales[j]}}" readonly type="number" clearInput  ></ion-input>\n					      </div>\n\n					      \n					    </ion-item>\n					    \n					    \n					     <ion-item *ngIf="isMatchFinished(j)">\n					    \n					     \n					     <ion-thumbnail item-start>\n					        <img *ngIf="p.Licence.Photo!=\'\'" src="data:image/png;base64,{{p.Licence.Photo}}">\n					        <ion-icon *ngIf="!p.Licence.Photo" name="contact"></ion-icon>\n					        \n					      </ion-thumbnail>\n					      \n	\n					      \n					      <ion-label>\n					      <h2><img src="assets/imgs/flags/{{p.Licence.Country}}.png" width="16px"> {{p.Licence.LastName}}, {{p.Licence.FirstName}}</h2>\n\n					      <p class="note">match déjà signé\n <ion-icon name="checkmark" color="success"></ion-icon></p>\n					      </ion-label>\n					      <div item-end>\n						      <ion-input placeholder="-" value="{{Totales[j]}}" readonly type="number" clearInput  ></ion-input>\n					      </div>\n\n					      \n					    </ion-item>\n					    \n					    \n					\n    		</div>\n					\n					    \n					  </ion-list>\n\n</div>\n\n<div *ngIf="showFirmas">\n\n\n\n  <!--<div class="title">{{ \'SIGNTEXT\' | translate }}</div>-->\n  \n  <div>\n  \n  <div class="cabecera" padding>\n  	\n  	\n  			<h1>{{match.Name}}</h1>\n  			\n  			<h3 text-center>Round: {{equipo.Round + 1}}</h3>\n  		\n  			<!--<h6 ion-text color="menuButton">Course</h6>\n  			<h2>{{campo_juego}}</h2>\n  		\n  			<h6 ion-text color="menuButton">Time</h6>\n  			<h2>{{hora_inicio}}</h2>-->\n  		\n  			<!--<h6 ion-text color="menuButton">Starting </h6>\n  			<h2>Hole {{hoyo_salida}}</h2>-->\n  		\n  	\n  	</div><!--end cabecera -->\n\n<ion-list>\n    \n					    <ion-item>\n					    \n					     \n					     <ion-thumbnail item-start>\n					        <img *ngIf="licenciaFirma.Licence.Photo!=\'\'" src="data:image/png;base64,{{licenciaFirma.Licence.Photo}}">\n					        <ion-icon *ngIf="!licenciaFirma.Licence.Photo" name="contact"></ion-icon>\n					        \n					      </ion-thumbnail>\n					      \n	\n					      \n					      <ion-label>\n					      <h2><img src="./assets/imgs/flags/{{licenciaFirma.Licence.Country}}.png" width="16px"> {{licenciaFirma.Licence.LastName}}, {{licenciaFirma.Licence.FirstName}}</h2>\n					      <!--<p class="note">{{p.info_jugador.Country}}</p>-->\n					      </ion-label>\n					      <div item-end>\n						      <ion-input placeholder="-" value="{{Totales[numeroJugador]}}" type="number" readonly ></ion-input>\n					      </div>\n\n					      \n					    </ion-item>\n					\n					    \n					  </ion-list>\n\n</div>\n  \n  \n  \n  <ion-row [ngClass]="{\'drawing-active\': isDrawing}">\n    <ion-col>\n      <signature-pad id="myCanvas" [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()">\n\n      \n      </signature-pad>\n    </ion-col>\n \n  </ion-row>\n  \n\n \n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col width-80>\n      <img [src]="signature"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n \n \n</div>\n \n \n \n \n</ion-content>\n\n\n<div *ngIf="showFirmas">\n<ion-footer no-border>\n                        \n                        <ion-grid>\n						  <ion-row>\n						    <ion-col col-4>\n						    		<!--<button ion-button full color="backColor" (click)="clearPad()" round>{{ \'CLEAR\' | translate }}</button>--><button ion-button full color="backColor" (click)="toSummary()" round>{{ \'BACK\' | translate }}</button>\n						      \n						    </ion-col>\n						    <ion-col col-8>\n						    <button ion-button full color="primary" (click)="savePad(licenciaFirma.Licence.Id)" round>{{ \'SENDCARD\' | translate }}</button>\n						    </ion-col>\n						  </ion-row>\n						</ion-grid>\n                        \n                  \n                        \n</ion-footer>\n</div>\n\n<!--<div *ngIf="!showFirmas">\n<ion-footer no-border>\n                        \n                        <ion-grid>\n						  <ion-row>\n						    <ion-col col-4>\n						    		<button ion-button full color="backColor" (click)="goBack()" round>{{ \'BACK\' | translate }}</button>\n						      \n						    </ion-col>\n						    <ion-col col-8>\n						    <button ion-button full color="primary" (click)="toFirmas()" round>{{ \'SIGN CARD\' | translate }}</button>\n						    </ion-col>\n						  </ion-row>\n						</ion-grid>\n                        \n                  \n                        \n</ion-footer>\n</div>-->\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\signature\signature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SignaturePage);
    return SignaturePage;
}());

//# sourceMappingURL=signature.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingLigaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scorecard_scorecard__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scores_scores__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_favorite_favorite__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RankingLigaPage = /** @class */ (function () {
    function RankingLigaPage(favoriteProvider, navCtrl, viewCtrl, navParams, http, global, actionsheetCtrl, loadingCtrl, iab) {
        var _this = this;
        this.favoriteProvider = favoriteProvider;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.actionsheetCtrl = actionsheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.page = 1;
        this.perPage = 20;
        this.listado = [];
        this.scores = [];
        this.diferencias = [];
        this.isFavorite = [];
        this.rondas = [];
        this.ranking = [];
        this.rankingArray = [];
        this.jugadores = [];
        this.jugadoresArray = [];
        this.rankings = true;
        this.rankingSwitch = "absolute";
        this.estaBuscando = false;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Loading Rankings...'
        });
        this.loading.present();
        //this.idTorneo = this.navParams.get("id");
        //Puede ser que sea una liga
        this.idTorneo = 1;
        this.infoTorneo = JSON.parse('{"Id":1,"Year":' + this.global.season + ',"Name":"FootGolf CUP","Color":"#318ce7"}');
        this.tipo = "liga";
        this.getRankLiga("ABSOLUTE").then(function (data) {
            _this.loading.dismiss();
        });
        //console.log(this.favoriteProvider.getAllFavoritePlayers());
    }
    RankingLigaPage_1 = RankingLigaPage;
    RankingLigaPage.prototype.ionViewWillEnter = function () {
    };
    RankingLigaPage.prototype.onSegmentChange = function (liga) {
        var _this = this;
        this.page = 1;
        console.log("Deberia cambiar a " + liga);
        this.initializeItems();
        //var val = ev.target.value;
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Loading...'
        });
        this.loading.present();
        this.getRankLiga(liga).then(function (data) {
            _this.loading.dismiss();
        });
    };
    RankingLigaPage.prototype.getRankLiga = function (liga) {
        var _this = this;
        console.log(liga);
        //liga="/"+liga;
        this.idTorneo = 1;
        var tipo_liga = "affg";
        //var search="";
        switch (liga) {
            case "EQUIPE": {
                tipo_liga = "affgEquipe";
                liga = "";
                break;
            }
            case "CLUBS": {
                tipo_liga = "club";
                liga = "";
                break;
            }
            case "WOMEN": {
                this.idTorneo = 6;
                liga = "/ABSOLUTE";
                break;
            }
            case "SENIOR": {
                this.idTorneo = 1;
                liga = "/SENIOR";
                //search="Vétéran >= 46 ans";
                break;
            }
            default: {
                //statements;
                this.idTorneo = 1;
                liga = "/" + liga;
                break;
            }
        }
        /*if(liga=="EQUIPE"){
            tipo_liga="affgEquipe";
            liga="";
        }
        if(liga=="CLUBS"){
            tipo_liga="club";
            liga="";
        }
        
        if(liga=="WOMEN"){
            this.idTorneo=6;
            console.log(this.idTorneo);
        }*/
        return new Promise(function (resolve) {
            //this.http.get(this.global.urlApiLocal+"/getCompeticion.php?file=true&id="+this.idTorneo+"&token="+encodeURIComponent(this.global.token))
            _this.http.get(_this.global.urlApiLocal + "/getData.php?e=competitionRanking/" + tipo_liga + "/" + _this.idTorneo + "/" + _this.global.season + "" + liga + "&s=&l=" + _this.perPage + "&p=" + _this.page + "&token=" + encodeURIComponent(_this.global.token)).subscribe(function (resp) {
                //console.log(this.ranking);
                for (var i = 0; i < resp.length; i++) {
                    _this.ranking.push(resp[i]);
                    _this.rankingArray.push(resp[i]);
                }
                //this.rondas=this.ranking[0].scores;
                for (var _i = 0; _i < _this.ranking.length; _i++) {
                    //console.log(this.ranking[_i]);
                    _this.favoriteProvider.isFavorite(_this.ranking[_i].player_id).then(function (isFav) {
                        _this.isFavorite.push(isFav);
                        //console.log(isFav);
                    });
                } //End for
                console.log(_this.ranking);
                resolve(_this.ranking);
            });
        });
    }; // Get Ranking
    RankingLigaPage.prototype.SearchPlayers = function (ev, liga) {
        if (this.estaBuscando) {
            this.loading.dismiss();
        }
        var val = ev.target.value;
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Searching...'
        });
        this.loading.present();
        this.page = 1;
        this.initializeItems();
        this.searchRankLiga(val, liga);
        //this.loading.dismiss();
    };
    RankingLigaPage.prototype.initializeItems = function () {
        this.ranking = [];
        this.rankingArray = [];
    };
    RankingLigaPage.prototype.searchRankLiga = function (search, liga) {
        var _this = this;
        this.estaBuscando = true;
        if (search == undefined) {
            search = "";
        }
        //liga="/"+liga;
        this.idTorneo = 1;
        var tipo_liga = "affg";
        //var search="";
        switch (liga) {
            case "EQUIPE": {
                tipo_liga = "affgEquipe";
                liga = "";
                break;
            }
            case "CLUBS": {
                tipo_liga = "club";
                liga = "";
                break;
            }
            case "WOMEN": {
                this.idTorneo = 6;
                liga = "/ABSOLUTE";
                break;
            }
            case "SENIOR": {
                this.idTorneo = 1;
                liga = "/SENIOR";
                //search="Vétéran >= 46 ans";
                break;
            }
            default: {
                //statements;
                this.idTorneo = 1;
                liga = "/" + liga;
                break;
            }
        }
        //this.http.get(this.global.urlApiLocal+"/getCompeticion.php?file=true&id="+this.idTorneo+"&token="+encodeURIComponent(this.global.token))
        this.http.get(this.global.urlApiLocal + "/getData.php?e=competitionRanking/" + tipo_liga + "/" + this.idTorneo + "/" + this.global.season + "" + liga + "&s=" + search + "&l=" + this.perPage + "&p=" + this.page + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            /*this.ranking = res.results;
            this.rankingArray = res.results;
             
            console.log(this.ranking);*/
            _this.initializeItems();
            for (var i = 0; i < resp.length; i++) {
                _this.ranking.push(resp[i]);
                _this.rankingArray.push(resp[i]);
            }
            //this.rondas=this.ranking[0].scores;
            for (var _i = 0; _i < _this.ranking.length; _i++) {
                //console.log(this.ranking[_i]);
                _this.favoriteProvider.isFavorite(_this.ranking[_i].player_id).then(function (isFav) {
                    _this.isFavorite.push(isFav);
                    //console.log(isFav);
                });
            } //End for
            console.log(_this.ranking);
            _this.loading.dismiss();
            _this.estaBuscando = false;
        });
    }; // Get Ranking
    RankingLigaPage.prototype.getJugador = function (LicenceId, i) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.global.urlApiLocal + "/getData.php?e=licence/" + LicenceId + "/" + _this.global.season + "&token=" + encodeURIComponent(_this.global.token)).subscribe(function (resp) {
                //console.log(resp.secciones);
                _this.jugadores.push(resp);
                //console.log(this.jugadores);
                resolve(resp);
            });
        });
    };
    RankingLigaPage.prototype.doInfinite = function (infiniteScroll, liga) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getRankLiga(liga);
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    /*getCategory(cat){
      switch (cat)
      {
        case "rankings_men":
            this.getRanking("men");
            this.categoryName = "Men";
            break;
        case "rankings_women":
            this.getRanking("women");
            this.categoryName = "Women";
            break;
        case "rankings_senior":
            this.getRanking("senior");
            this.categoryName = "Senior";
            break;
        case "rankings_junior":
            this.getRanking("junior");
            this.categoryName = "Junior";
            break;
        case "rankings_team":
            this.getRanking("team");
            this.categoryName = "Team";
            break;
        case "rankings":
            this.getRanking("");
            this.categoryName = "General";
            break;
        default:
            this.getRanking("");
            break;
      }
    }*/
    /*
      getRanking(cat){
          
          if(cat!=""){
              
              this.http.get(this.global.url+"/rankings/read_one.php?id_torneo="+this.global.id_torneo+"&categoria="+cat)
          .subscribe((res: any) => {
            this.ranking = res.records;
            this.rankingArray = res.records;
             
            //console.log(this.ranking);
            this.rondas=this.ranking[0].scores;
            
            
          
          
          
            for (var _i = 0; _i < this.ranking.length; _i++){
                
                //console.log(this.ranking[_i]);
                
                    this.favoriteProvider.isFavorite(this.ranking[_i].player_id).then(isFav => {
                        this.isFavorite.push(isFav);
                        //console.log(isFav);
                    });
             }//End for
              
              console.log(this.isFavorite);
              
        }, error => {
          console.log(error);
        })
              
          }else{ //Todos los resultados
              
              this.http.get(this.global.url+"/rankings/read.php?id_torneo="+this.global.id_torneo)
          .subscribe((res: any) => {
            this.ranking = res.records;
            this.rankingArray = res.records;
            //console.log(this.ranking);
            
            this.rondas=this.ranking[0].scores;
            //console.log(this.ranking[0].num_rondas);
            //console.log(this.ranking.scores);
            
             
             //console.log(this.diferencias);
             
             for (var _i = 0; _i < this.ranking.length; _i++){
                    this.favoriteProvider.isFavorite(this.ranking[_i].player_id).then(isFav => {
                        this.isFavorite.push(isFav);
                    });
             }//End for
          
            
              
        }, error => {
          console.log(error);
        })
              
              } //IF
        
      } // Get Ranking
    */
    RankingLigaPage.prototype.openCard = function (playerID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__scorecard_scorecard__["a" /* ScoreCardPage */], { infoPlayer: playerID, infoTorneo: this.infoTorneo });
    };
    RankingLigaPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(RankingLigaPage_1, { slug: 1 });
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__scores_scores__["a" /* ScoresPage */], { slug: '' });
                break;
            case 5:
                break;
        }
    }; //Open Menu
    RankingLigaPage.prototype.favoritePlayer = function (player_id, index) {
        var _this = this;
        this.favoriteProvider.favoritePlayer(player_id).then(function () {
            _this.isFavorite[index] = true;
        });
    }; // Favorite
    RankingLigaPage.prototype.unfavoritePlayer = function (player_id, index) {
        var _this = this;
        this.favoriteProvider.unfavoritePlayer(player_id).then(function () {
            _this.isFavorite[index] = false;
        });
    }; //Unfavorite
    RankingLigaPage = RankingLigaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rankingliga',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\rankingliga\rankingliga.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img src="assets/imgs/menu.svg">\n    </button>\n    <ion-title>FootGolf CUP</ion-title>\n  </ion-navbar>\n   \n</ion-header>\n\n<ion-content class="backgroundColor">\n\n  \n  \n   <ion-segment [(ngModel)]="rankingSwitch">\n    <ion-segment-button (ionSelect)="onSegmentChange(\'ABSOLUTE\')" value="absolute">\n      {{ \'RANKING_ABSOLUTE\' | translate }}\n    </ion-segment-button>\n      <ion-segment-button (ionSelect)="onSegmentChange(\'SENIOR\')" value="seniors">\n      {{ \'RANKING_SENIORS\' | translate }}\n    </ion-segment-button>\n\n    <ion-segment-button (ionSelect)="onSegmentChange(\'WOMEN\')" value="dames">\n      {{ \'RANKING_DAMES\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button (ionSelect)="onSegmentChange(\'EQUIPE\')" value="equipe">\n      {{ \'RANKING_DOUBLE\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button (ionSelect)="onSegmentChange(\'CLUBS\')" value="clubs">\n      {{ \'RANKING_CLUBS\' | translate }}\n    </ion-segment-button>\n\n  </ion-segment>\n  \n  \n  \n  \n  <div  [ngSwitch]="rankingSwitch">\n  \n	\n	\n	\n	<div *ngSwitchCase="\'absolute\'" padding>\n		\n		<ion-searchbar debounce="700" (ionInput)="SearchPlayers($event, \'ABSOLUTE\')"></ion-searchbar>\n		\n	<ion-list class="ranking-bueno" >\n	  <ion-item *ngFor="let rank of ranking; index as j">    \n	    <ion-grid>\n	    	<ion-row>\n			    <ion-col col-2>\n			      {{ rank.Rank }} \n			      	<!--<span class="variacion ranking_up" *ngIf="rank.evolucion_ranking == 1"><ion-icon ios="ios-arrow-round-up" md="md-arrow-round-up"></ion-icon></span>\n			        <span class="variacion ranking_down" *ngIf="rank.evolucion_ranking == -1"><ion-icon ios="ios-arrow-round-down" md="md-arrow-round-down"></ion-icon></span>\n			        <span class="variacion ranking_same" *ngIf="rank.evolucion_ranking == 0">=</span>-->\n			        <img src="./assets/imgs/flags/{{ rank.Licence.Nationality }}.png" width="16px">\n			    </ion-col>\n			    <ion-col col-7>\n			       {{ rank.Licence.LastName }},  {{ rank.Licence.FirstName }} \n		    <ion-icon name="star" (click)="unfavoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="isFavorite[j]"></ion-icon>\n		    <ion-icon name="star-outline" (click)="favoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="!isFavorite[j]"></ion-icon>\n			    </ion-col>\n			    <ion-col col-3 text-right>\n			      <span *ngIf="rank.Rank">{{ rank.ScoreHeight }}</span>\n			      <span *ngIf="!rank.Rank">0</span>\n			    </ion-col>\n			  </ion-row>\n	    </ion-grid>\n	  </ion-item>\n	</ion-list>\n	\n	<ion-infinite-scroll (ionInfinite)="doInfinite($event, \'ABSOLUTE\')">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n	\n	</div>\n	\n	\n		<div *ngSwitchCase="\'equipe\'" padding>\n		\n		<ion-searchbar debounce="700" (ionInput)="SearchPlayers($event, \'EQUIPE\')"></ion-searchbar>\n		\n	<ion-list class="ranking-bueno" >\n	  <ion-item *ngFor="let rank of ranking; index as j">    \n	    <ion-grid>\n	    	<ion-row>\n			    <ion-col col-2>\n			      {{ rank.Rank }} \n			      	<!--<span class="variacion ranking_up" *ngIf="rank.evolucion_ranking == 1"><ion-icon ios="ios-arrow-round-up" md="md-arrow-round-up"></ion-icon></span>\n			        <span class="variacion ranking_down" *ngIf="rank.evolucion_ranking == -1"><ion-icon ios="ios-arrow-round-down" md="md-arrow-round-down"></ion-icon></span>\n			        <span class="variacion ranking_same" *ngIf="rank.evolucion_ranking == 0">=</span>-->\n			        <img src="./assets/imgs/flags/{{ rank.Licence.Nationality }}.png" width="16px">\n			    </ion-col>\n			    <ion-col col-7>\n			       {{ rank.Licence.LastName }},  {{ rank.Licence.FirstName }} \n		    <ion-icon name="star" (click)="unfavoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="isFavorite[j]"></ion-icon>\n		    <ion-icon name="star-outline" (click)="favoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="!isFavorite[j]"></ion-icon>\n			    </ion-col>\n			    <ion-col col-3 text-right>\n			      <span *ngIf="rank.Rank">{{ rank.ScoreHeight }}</span>\n			      <span *ngIf="!rank.Rank">0</span>\n			    </ion-col>\n			  </ion-row>\n	    </ion-grid>\n	  </ion-item>\n	</ion-list>\n	\n	<ion-infinite-scroll (ionInfinite)="doInfinite($event, \'EQUIPE\')">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n	\n	</div>\n\n	\n	\n	\n	<div *ngSwitchCase="\'dames\'" padding>\n		\n		<ion-searchbar debounce="700" (ionInput)="SearchPlayers($event, \'WOMEN\')"></ion-searchbar>\n		\n	<ion-list class="ranking-bueno" >\n	  <ion-item *ngFor="let rank of ranking; index as j">    \n	    <ion-grid>\n	    	<ion-row>\n			    <ion-col col-2>\n			      {{ rank.Rank }} \n			      	<!--<span class="variacion ranking_up" *ngIf="rank.evolucion_ranking == 1"><ion-icon ios="ios-arrow-round-up" md="md-arrow-round-up"></ion-icon></span>\n			        <span class="variacion ranking_down" *ngIf="rank.evolucion_ranking == -1"><ion-icon ios="ios-arrow-round-down" md="md-arrow-round-down"></ion-icon></span>\n			        <span class="variacion ranking_same" *ngIf="rank.evolucion_ranking == 0">=</span>-->\n			        <img src="./assets/imgs/flags/{{ rank.Licence.Nationality }}.png" width="16px">\n			    </ion-col>\n			    <ion-col col-7>\n			       {{ rank.Licence.LastName }},  {{ rank.Licence.FirstName }} \n		    <ion-icon name="star" (click)="unfavoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="isFavorite[j]"></ion-icon>\n		    <ion-icon name="star-outline" (click)="favoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="!isFavorite[j]"></ion-icon>\n			    </ion-col>\n			    <ion-col col-3 text-right>\n			      <span *ngIf="rank.Rank">{{ rank.ScoreHeight }}</span>\n			      <span *ngIf="!rank.Rank">0</span>\n			    </ion-col>\n			  </ion-row>\n	    </ion-grid>\n	  </ion-item>\n	</ion-list>\n	\n	<ion-infinite-scroll (ionInfinite)="doInfinite($event, \'WOMEN\')">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n	\n	</div>\n	\n	<div *ngSwitchCase="\'seniors\'" padding>\n		\n		<ion-searchbar debounce="700" (ionInput)="SearchPlayers($event, \'SENIOR\')"></ion-searchbar>\n		\n	<ion-list class="ranking-bueno" >\n	  <ion-item *ngFor="let rank of ranking; index as j">    \n	    <ion-grid>\n	    	<ion-row>\n			    <ion-col col-2>\n			      {{ j + 1 }} \n			      	<!--<span class="variacion ranking_up" *ngIf="rank.evolucion_ranking == 1"><ion-icon ios="ios-arrow-round-up" md="md-arrow-round-up"></ion-icon></span>\n			        <span class="variacion ranking_down" *ngIf="rank.evolucion_ranking == -1"><ion-icon ios="ios-arrow-round-down" md="md-arrow-round-down"></ion-icon></span>\n			        <span class="variacion ranking_same" *ngIf="rank.evolucion_ranking == 0">=</span>-->\n			        <img src="./assets/imgs/flags/{{ rank.Licence.Nationality }}.png" width="16px">\n			    </ion-col>\n			    <ion-col col-7>\n			       {{ rank.Licence.LastName }},  {{ rank.Licence.FirstName }} \n		    <ion-icon name="star" (click)="unfavoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="isFavorite[j]"></ion-icon>\n		    <ion-icon name="star-outline" (click)="favoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="!isFavorite[j]"></ion-icon>\n			    </ion-col>\n			    <ion-col col-3 text-right>\n			      <span *ngIf="rank.Rank">{{ rank.ScoreHeight }}</span>\n			      <span *ngIf="!rank.Rank">0</span>\n			    </ion-col>\n			  </ion-row>\n	    </ion-grid>\n	  </ion-item>\n	</ion-list>\n	\n	<ion-infinite-scroll (ionInfinite)="doInfinite($event, \'SENIOR\')">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n	\n	</div>\n	\n	<div *ngSwitchCase="\'clubs\'" padding>\n		\n		<ion-searchbar debounce="700" (ionInput)="SearchPlayers($event, \'CLUBS\')"></ion-searchbar>\n		\n	<ion-list class="ranking-bueno" >\n	  <ion-item *ngFor="let rank of ranking; index as j">    \n	    <ion-grid class="fila_equipo">\n	    	<ion-row>\n			    <ion-col col-1>\n			      {{ rank.ClubId }} \n			      </ion-col>\n			     <ion-col col-2>\n			      	<!--<span class="variacion ranking_up" *ngIf="rank.evolucion_ranking == 1"><ion-icon ios="ios-arrow-round-up" md="md-arrow-round-up"></ion-icon></span>\n			        <span class="variacion ranking_down" *ngIf="rank.evolucion_ranking == -1"><ion-icon ios="ios-arrow-round-down" md="md-arrow-round-down"></ion-icon></span>\n			        <span class="variacion ranking_same" *ngIf="rank.evolucion_ranking == 0">=</span>-->\n			        \n			        <ion-thumbnail item-start>\n				      	<img *ngIf="rank.Club" src="data:image/png;base64,{{ rank.Club.Logo }}">\n				      	<img *ngIf="!rank.Club" src="assets/imgs/2.svg">\n				        <!--<img src="https://www.footgolf-france.fr/media/cache/club_big/{{t.Id}}_{{global.anyo}}">-->\n				      </ion-thumbnail>\n			       </ion-col>\n			    <ion-col col-6 class="nombre_equipo">\n			       {{ rank.Club.Name }} \n		    <!--<ion-icon name="star" (click)="unfavoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="isFavorite[j]"></ion-icon>\n		    <ion-icon name="star-outline" (click)="favoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="!isFavorite[j]"></ion-icon>-->\n			    </ion-col>\n			    <ion-col col-3 text-right>\n			      <span>{{ rank.Rank }}</span>\n			      <span *ngIf="!rank.Rank">0</span>\n			    </ion-col>\n			  </ion-row>\n	    </ion-grid>\n	  </ion-item>\n	</ion-list>\n	\n	<ion-infinite-scroll (ionInfinite)="doInfinite($event, \'CLUBS\')">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n	\n	</div>\n	\n  </div>\n	\n  \n\n\n\n\n</ion-content>\n\n '/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\rankingliga\rankingliga.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_favorite_favorite__["a" /* FavoriteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], RankingLigaPage);
    return RankingLigaPage;
    var RankingLigaPage_1;
}());

//# sourceMappingURL=rankingliga.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsDetailPage = /** @class */ (function () {
    function NewsDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //console.log(this.navParams.data);
        this.news = this.navParams.data.noticia;
    }
    NewsDetailPage.prototype.ionViewWillEnter = function () {
        this.news = this.navParams.data;
    };
    NewsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-detail',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\news-detail\news-detail.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar >\n    <ion-title><img src="assets/imgs/foot.png" height="40px" alt=""></ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="backgroundColor">\n\n	\n	<div class="imgContainer noticia card">\n        <img src="{{ news?.extension_img }}" class="newsImg" alt="Snow" style="width:100%;">\n        <div class="card-header">\n            <div class="card-title" text-wrap>{{ news?.titulo }}</div>\n		    <div class="card-subtitle">{{ news?.fecha }}</div>\n        </div>\n    </div>\n	\n  <div [innerHTML]="news?.texto"></div>\n</ion-content>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\news-detail\news-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NewsDetailPage);
    return NewsDetailPage;
}());

//# sourceMappingURL=news-detail.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventPage = /** @class */ (function () {
    function EventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventPage');
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\event\event.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><img src="assets/imgs/foot.png" height="40px" alt=""></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="backgroundColor">\n\n	<h2 padding-left>The Event</h2>\n\n	<ion-grid>\n	  <ion-row>\n	    <ion-col col-6>\n	    	<ion-card>\n			  <ion-card-content text-center>\n			  	<ion-icon name="ios-football-outline"></ion-icon>\n			    <h3>Course</h3>\n			    <h3>Event</h3>\n			  </ion-card-content>\n			</ion-card>\n	    </ion-col>\n	    <ion-col col-6>\n	    	<ion-card>\n			  <ion-card-content text-center>\n			  	<ion-icon name="ios-restaurant-outline"></ion-icon>\n			    <h3>Restaurants</h3>\n			    <h3 class="noText">Placeholder</h3>\n			  </ion-card-content>\n			</ion-card>\n	    </ion-col>\n	  </ion-row>\n	  <ion-row>\n	    <ion-col col-6>\n	    	<ion-card>\n			  <ion-card-content text-center>\n			  	<ion-icon name="american-football"></ion-icon>\n			    <h3>Acomodations</h3>\n			    <h3>Info</h3>\n			  </ion-card-content>\n			</ion-card>\n	    </ion-col>\n	    <ion-col col-6>\n	    	<ion-card>\n			  <ion-card-content text-center>\n			  	<ion-icon name="ios-search-outline"></ion-icon>\n			    <h3>Tournament</h3>\n			    <h3>Details</h3>\n			  </ion-card-content>\n			</ion-card>\n	    </ion-col>\n	  </ion-row>\n	  <ion-row>\n	    <ion-col col-6>\n	    	<ion-card>\n			  <ion-card-content text-center>\n			  	<ion-icon name="ios-pin-outline"></ion-icon>\n			    <h3>Country</h3>\n			    <h3>Info</h3>\n			  </ion-card-content>\n			</ion-card>\n	    </ion-col>\n	    <ion-col col-6>\n	    	<ion-card>\n			  <ion-card-content text-center>\n			  	<ion-icon name="ios-map-outline"></ion-icon>\n			    <h3>Program</h3>\n			    <h3 class="noText">Placeholder</h3>\n			  </ion-card-content>\n			</ion-card>\n	    </ion-col>\n	  </ion-row>\n	  <ion-row>\n	    <ion-col col-6>\n	    	<ion-card>\n			  <ion-card-content text-center>\n			  	<ion-icon name="ios-ice-cream-outline"></ion-icon>\n			    <h3>Entertainment</h3>\n			  </ion-card-content>\n			</ion-card>\n	    </ion-col>\n	    <ion-col col-6>\n	    	<ion-card>\n			  <ion-card-content text-center>\n			  	<ion-icon name="ios-star-outline"></ion-icon>\n			    <h3>Services</h3>\n			  </ion-card-content>\n			</ion-card>\n	    </ion-col>\n	  </ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\event\event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\about\about.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><img src="assets/imgs/foot.png" height="40px" alt=""></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="backgroundColor">\n\n	<h3>Footgolf - Rules</h3>\n	<ion-item no-lines>\n	  <ion-label>The Game</ion-label>\n	  <ion-select [(ngModel)]="modalidad">\n	    <ion-option value="f">Option 1</ion-option>\n	    <ion-option value="m">Option 2</ion-option>\n	  </ion-select>\n	</ion-item>\n\n	<p class="aboutTitle"><b>LE FORMULE SHOT GUN</b></p>\n\n	<p>Lorem ipsum dolor sit amet consectetur adipiscing elit taciti velit, auctor dui dictum cubilia fermentum sagittis ullamcorper phasellus, nulla cum cras potenti netus rutrum primis in. Purus sapien dictumst commodo sociosqu sagittis turpis accumsan, cursus semper faucibus phasellus himenaeos donec viverra ultrices, tristique auctor odio maecenas nulla varius. Malesuada a eu nulla etiam lobortis class vulputate risus consequat, massa lacus ut habitasse tellus gravida sodales libero, mollis fusce facilisi vel quis ac non purus.</p>\n\n\n	<p class="aboutTitle"><b>LE FORMULE STROKE PLAY</b></p>\n\n	<p>Nascetur ligula sapien euismod aliquet pulvinar magnis convallis pellentesque ultrices dictum, imperdiet metus ad erat cras tincidunt varius risus nibh, mattis at fusce lacus turpis mi ridiculus luctus magna. Sed bibendum mi dictumst proin lobortis facilisis curabitur quam, ligula mus donec euismod faucibus porttitor morbi nascetur neque.</p>\n\n</ion-content>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddScorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_form_add_form__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_flights_flights__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AddScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddScorePage = /** @class */ (function () {
    function AddScorePage(global, navCtrl, navParams, http, iab, flightsProvider, viewCtrl) {
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.iab = iab;
        this.flightsProvider = flightsProvider;
        this.viewCtrl = viewCtrl;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.fb_live_url = 'http://admin.fgranks.com/static/redirect_fb_live.php';
    }
    AddScorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddScorePage');
    };
    AddScorePage.prototype.openBrowser = function () {
        var target = "_system";
        this.iab.create(this.fb_live_url, target, this.options);
    };
    AddScorePage.prototype.gotoMatch = function () {
        //TODO: Animación chula de cargando por que esto tardará un ratito
        var _this = this;
        this.http.get(this.global.urlApiLocal + "/getFlight.php?file=true&id=" + this.match + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //console.log("partjghj");
            _this.flight = resp;
            //this.resultados = res.records;   
            //this.datos_jugador=this.resultados[0];
            //console.log("esto si que se hace");
            console.log(_this.flight);
            console.log("got to match: " + _this.match);
            _this.flightsProvider.saveFlight(_this.flight);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_form_add_form__["a" /* AddFormPage */], { results: _this.flight });
        }, function (error) {
            console.log(error);
        });
        //
    };
    AddScorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-score',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\add-score\add-score.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar hideBackButton>\n    <ion-title>{{ \'ADDSCORE\' | translate }}</ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="backgroundColor">\n\n      \n      \n            <ion-input type="text" [(ngModel)]="match" placeholder="{{ \'FLIGHTNUMBER\' | translate }}"></ion-input>\n          <button margin-top block ion-button round color="primary" text-center (click)="gotoMatch()">{{ \'FINDFLIGHT\' | translate }}</button>\n      \n</ion-content>\n\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\add-score\add-score.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_6__providers_flights_flights__["a" /* FlightsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], AddScorePage);
    return AddScorePage;
}());

//# sourceMappingURL=add-score.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var STORAGE_KEY = 'flights';
var FlightsProvider = /** @class */ (function () {
    function FlightsProvider(storage) {
        this.storage = storage;
    }
    FlightsProvider.prototype.inList = function (itemId) {
        return this.getAll().then(function (result) {
            //let index = result.findIndex((itemId) => itemId.info[0].FlightID === 'blue');
            //let comparacion= result && result.indexOf(itemId) !== -1;
            //let comparacion= result && result.info[0].FlightID == itemId.info[0].FlightID;
            var comparacion = false;
            for (var i = 0; i < result.length; i++) {
                var item = result[i];
                if (item.info[0].FlightID == itemId.info[0].FlightID) {
                    console.log("Me salgo!!");
                    return true;
                }
            }
            //console.log(result.indexOf(itemId));
            console.log(comparacion);
            return comparacion;
        });
    };
    FlightsProvider.prototype.saveFlight = function (data) {
        var _this = this;
        /*let res = this.storage.set(STORAGE_KEY, [data]);
        console.log("AQUI VAN LOS FLIGHTS GUARDADOS");
        
        this.getAll().then(result => {
              console.log(result);
              });
        
        console.log("------------------------------");
        return res;*/
        return this.getAll().then(function (result) {
            if (result) {
                var comparacion = false;
                for (var i = 0; i < result.length; i++) {
                    var item = result[i];
                    if (item.info[0].FlightID == data.info[0].FlightID) {
                        console.log("Está presente");
                        comparacion = true;
                    }
                }
                if (!comparacion) {
                    result.push(data);
                    return _this.storage.set(STORAGE_KEY, result);
                }
            }
            else {
                return _this.storage.set(STORAGE_KEY, [data]);
            }
        });
    };
    FlightsProvider.prototype.deleteFlight = function (flight) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.getAll().then(function (result) {
                if (result) {
                    var index = result.indexOf(flight);
                    result.splice(index, 1);
                    return _this.storage.set(STORAGE_KEY, result);
                }
            });
        });
    };
    FlightsProvider.prototype.getAll = function () {
        return this.storage.get(STORAGE_KEY);
    };
    FlightsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], FlightsProvider);
    return FlightsProvider;
}());

//# sourceMappingURL=flights.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ranking_ranking__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scores_scores__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    //moreRoot = MorePage
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.newsRoot = __WEBPACK_IMPORTED_MODULE_4__news_news__["a" /* NewsPage */];
        this.scoresRoot = __WEBPACK_IMPORTED_MODULE_5__scores_scores__["a" /* ScoresPage */];
        this.rankingsRoot = __WEBPACK_IMPORTED_MODULE_3__ranking_ranking__["a" /* RankingPage */];
        console.log(this.navParams.get("position"));
    }
    TabsPage.prototype.ionViewWillEnter = function () {
        this.position = this.navParams.get("position");
        if (this.position == 1) {
            this.tabRef.select(1);
        }
        else if (this.position == 2) {
            this.tabRef.select(2);
        }
        else if (this.position == 3) {
            this.tabRef.select(3);
        }
        else if (this.position == 4) {
            this.tabRef.select(4);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\tabs\tabs.html"*/'<ion-tabs color="white" #myTabs>\n    <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="ios-home-outline"></ion-tab>\n    <ion-tab [root]="newsRoot" tabTitle="Line Ups" tabIcon="ios-people-outline"></ion-tab>\n    <ion-tab [root]="scoresRoot" tabTitle="Flights" tabIcon="ios-calendar-outline"></ion-tab>\n    <ion-tab [root]="rankingsRoot" tabTitle="Rankings" tabIcon="ios-trophy-outline"></ion-tab>\n    <ion-tab [root]="moreRoot" tabTitle="More" tabIcon="ios-play-outline"></ion-tab>\n</ion-tabs>\n\n\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scorecard_scorecard__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChallengePage = /** @class */ (function () {
    function ChallengePage(global, http, viewCtrl, navCtrl, navParams) {
        this.global = global;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.players = [];
        //private director1:any;
        this.clubSwitch = "clubs";
        //this.team ="players";
        this.challenge = this.navParams.data.challenge;
        console.log(this.challenge);
        /*this.director_id=this.teamInfo.Staffs.President.LicenceId;
        this.secretario_id=this.teamInfo.Staffs.Secretaire.LicenceId;
        this.tesorero_id=this.teamInfo.Staffs.Tresorier.LicenceId;*/
        //console.log(this.teamInfo);
        //this.teamDBId = this.navParams.data.id_database;
        //console.log(this.teamId);
        //this.getTeam();
        this.getPlayer();
    }
    ChallengePage.prototype.ionViewWillEnter = function () {
    };
    ChallengePage.prototype.openCard = function (playerID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__scorecard_scorecard__["a" /* ScoreCardPage */], { playerID: playerID });
    };
    ChallengePage.prototype.openPlayer = function (player) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* PlayerPage */], { player: player });
    };
    /*getTeam(){
      //console.log(this.teamId);
  
      //this.http.get(this.global.url+"/club/"+this.teamId+"/"+this.global.anyo+"").subscribe((resp:any) => {
          
          this.http.get("http://localhost/AFFGApp/API/getClub.php?id="+this.teamId+"&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        
        this.teamInfo=JSON.parse(resp);
        console.log(this.teamInfo);
        
        if(this.teamInfo.length){
            
            this.office1=this.teamInfo[0].Places.HeadOffice.Street;
            this.office2=this.teamInfo[0].Places.HeadOffice.PostalCode + ", "+ this.teamInfo[0].Places.HeadOffice.Locality;
            this.office3=this.teamInfo[0].Places.HeadOffice.OfficePhone;
            this.office4=this.teamInfo[0].Places.HeadOffice.Mail;
            this.office5=this.teamInfo[0].Places.Correspondance.Street ;
            this.office6=this.teamInfo[0].Places.Correspondance.PostalCode + ", "+ this.teamInfo[0].Places.HeadOffice.Locality;
            this.office7=this.teamInfo[0].Places.Correspondance.OfficePhone;
            this.office8=this.teamInfo[0].Places.Correspondance.Mail;
            
            this.director_id=this.teamInfo[0].Staffs.President.LicenceId;
            this.secretario_id=this.teamInfo[0].Staffs.Secretaire.LicenceId;
            this.tesorero_id=this.teamInfo[0].Staffs.Tresorier.LicenceId;
            
        }
  
        
        //console.log(this.places);
        
        
       
  
      });
    }*/
    ChallengePage.prototype.getPlayer = function () {
        var _this = this;
        this.http.get(this.global.urlApiLocal + "/getChallengePlayers.php?&id=" + this.challenge.id + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/licences/"+this.teamId+"/"+this.global.anyo+"").subscribe((resp:any) => {
            for (var i = 0; i < resp.players.length; i++) {
                _this.players.push(JSON.parse(resp.players[i]));
            }
            //this.players=JSON.parse(resp.players);
            console.log(_this.players);
        });
    };
    ChallengePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-challenge',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\challenge\challenge.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar hideBackButton>\n    <ion-title>{{challenge.couse_name}}</ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="backgroundColor">\n\n<div >\n  <ion-segment [(ngModel)]="clubSwitch">\n    <ion-segment-button value="clubs">\n      CHALLENGE INFO\n    </ion-segment-button>\n    <ion-segment-button value="players">\n      PLAYERS\n    </ion-segment-button>\n    <!--<ion-segment-button value="board">\n      {{ \'BOARD\' | translate }}\n    </ion-segment-button>-->\n  </ion-segment>\n</div>\n	\n	\n	<div  [ngSwitch]="clubSwitch">\n  <div class="teamCard" padding *ngSwitchCase="\'clubs\'" text-center>\n    \n    <ion-thumbnail>\n        <img src="{{challenge.course_image}}">\n        \n      </ion-thumbnail>\n    <h1>{{challenge.couse_name}}</h1>\n    \n    <div class="field">\n	    <label>Date</label>\n	    <p>{{challenge.date}}</p>\n    </div>\n    \n    <div class="field">\n	    <label>POINTS AWARDED</label>\n	    <p>{{challenge.points}}</p>\n\n    </div>\n    \n  </div>\n\n  <ion-list padding *ngSwitchCase="\'players\'">\n    \n    <ion-item *ngFor="let p of players" >\n      <ion-thumbnail item-start>\n        <img *ngIf="p.Photo" src="data:image/png;base64,{{p.Photo}}">\n        <ion-icon *ngIf="!p.Photo" name="contact"></ion-icon>\n        \n      </ion-thumbnail>\n      <h2><img src="assets/imgs/flags/{{p.Country | uppercase}}.svg" width="16px"> {{p.LastName}}, {{p.FirstName}}</h2>\n      <p class="note">{{p.Country}}</p>\n    </ion-item>\n    \n  </ion-list>\n  \n  <!--<ion-list padding *ngSwitchCase="\'board\'">\n    \n    <ion-item>\n      <ion-thumbnail item-start>\n        <img *ngIf="director_p" src="data:image/png;base64,{{director_p}}">\n        <ion-icon *ngIf="!director_p" name="contact"></ion-icon>\n        \n      </ion-thumbnail>\n      <h2>{{director}}</h2>\n      <p class="note">{{ \'DIRECTOR\' | translate }}</p>\n    </ion-item>\n    \n    <ion-item>\n      <ion-thumbnail item-start>\n        <img *ngIf="secretario_p" src="data:image/png;base64,{{secretario_p}}">\n        <ion-icon *ngIf="!secretario_p" name="contact"></ion-icon>\n        \n      </ion-thumbnail>\n      <h2>{{secretario}}</h2>\n      <p class="note">{{ \'SECRETARIO\' | translate }}</p>\n    </ion-item>\n    \n    <ion-item>\n      <ion-thumbnail item-start>\n        <img *ngIf="tesorero_p" src="data:image/png;base64,{{tesorero_p}}">\n        <ion-icon *ngIf="!tesorero_p" name="contact"></ion-icon>\n        \n      </ion-thumbnail>\n      <h2>{{tesorero}}</h2>\n      <p class="note">{{ \'TESORERO\' | translate }}</p>\n    </ion-item>\n    \n  </ion-list>-->\n  \n	</div>\n\n</ion-content>\n\n\n<!--<ion-content padding class="backgroundColor">\n	\n	<h1>{{ teamInfo?.nombre }}</h1> <img src="{{ teamInfo?.logo }}" height="60px;">\n	</div>\n\n	<div padding-top>\n		<ion-segment >\n		<ion-segment-button value="players">\n		      PLAYERS\n		    </ion-segment-button>\n		    <ion-segment-button value="info">\n		      INFO\n		    </ion-segment-button>\n		    \n		</ion-segment>\n\n		<div [ngSwitch]="team">\n		\n		<h2 *ngSwitchCase="\'players\'">Men</h2>\n		\n		<ion-list *ngSwitchCase="\'players\'">\n\n			<ion-item *ngFor="let p of menplayers" (click)="openPlayer(p)">\n		      <ion-avatar item-start>\n		        <img src="{{ p.foto }}">\n		      </ion-avatar>\n		      <h2>{{ p.nombre }} {{ p.apellidos }}</h2>\n		      <p>{{ p.categoria }} • {{ p.fecha_nacimiento }}</p>\n		    </ion-item>\n		\n		</ion-list>	\n			\n		<h2 *ngSwitchCase="\'players\'">Women</h2>\n			<ion-list *ngSwitchCase="\'players\'">\n			<ion-item *ngFor="let p of womenplayers" (click)="openPlayer(p)">\n		      <ion-avatar item-start>\n		        <img src="{{ p.foto }}">\n		      </ion-avatar>\n		      <h2>{{ p.nombre }} {{ p.apellidos }}</h2>\n		      <p>{{ p.categoria }} • {{ p.fecha_nacimiento }}</p>\n		    </ion-item>\n			</ion-list>\n		    \n		    \n		<h2 *ngSwitchCase="\'players\'">Senior</h2>\n			<ion-list *ngSwitchCase="\'players\'">\n			<ion-item *ngFor="let p of seniorplayers" (click)="openPlayer(p)">\n		      <ion-avatar item-start>\n		        <img src="{{ p.foto }}">\n		      </ion-avatar>\n		      <h2>{{ p.nombre }} {{ p.apellidos }}</h2>\n		      <p>{{ p.categoria }} • {{ p.fecha_nacimiento }}</p>\n		    </ion-item>\n			</ion-list>\n		    \n		\n		  <div *ngSwitchCase="\'info\'" padding-top>\n		  	<div [innerHTML]="teamInfo?.info"></div>\n		  </div>\n\n	    \n\n		</div>\n	</div>\n\n</ion-content>-->'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\challenge\challenge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChallengePage);
    return ChallengePage;
}());

//# sourceMappingURL=challenge.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChallengeStep3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newchallengestep4_newchallengestep4__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__golf_golf__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewChallengeStep3Page = /** @class */ (function () {
    function NewChallengeStep3Page(navCtrl, navParams, http, global, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.page = 1;
        this.perPage = 10;
        this.submitAttempt1 = false;
        this.golfs = [];
        //El challenge nos viene de antes
        this.challenge = this.navParams.data.challenge;
        this.userData = this.global.getPlayerData();
        this.selectedGolf = "";
    }
    NewChallengeStep3Page.prototype.ionViewWillEnter = function () { this.getGolfs(); };
    /**** Funciones CUSTOM ****/
    NewChallengeStep3Page.prototype.getGolfs = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;',
            'X-Auth-Token': this.global.token
        });
        //this.http.get(this.global.url+"/clubs/2019", {headers}).subscribe((resp:any) => {
        //this.http.get(this.global.urlApiLocal+"/getGolfs.php?file=true&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        this.http.get(this.global.urlApiLocal + "/getData.php?e=golfs&l=" + this.perPage + "&p=" + this.page + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            var myresp = resp.json();
            console.log(myresp.length);
            for (var i = 0; i < myresp.length; i++) {
                _this.golfs.push(myresp[i]);
            }
            console.log(_this.golfs);
            //this.golfs=resp;
            //console.log(this.golfs);
        });
    };
    NewChallengeStep3Page.prototype.changeSelectedGolf = function (g) {
        console.log(g);
        this.selectedGolf = g.Name;
        this.challenge.course_name = g.Name;
        this.challenge.course_image = "https://www.footgolf-france.fr/media/cache/golf/" + g.GolfPhotos[0].Slug;
        this.challenge.holes = g.NbTrous;
        this.challenge.course_par = g.Pars;
        this.challenge.course_long = g.NameParcours;
        this.challenge.course_lat = g.NbParcours;
        //this.challenge.course_image=g.Name;
    };
    NewChallengeStep3Page.prototype.openGolf = function (id) {
        //console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__golf_golf__["a" /* GolfPage */], { infoGolf: id });
    };
    NewChallengeStep3Page.prototype.saveAndNext = function () {
        console.log(this.challenge);
        //console.log(angular.element('#publico').val());
        if (this.challenge.course_name == "" || this.challenge.course_name == undefined) {
            //Toast para que seleccione campo
            var toast = this.toastCtrl.create({
                message: 'Please select a Golf Course to play the Challenge',
                duration: 3000
            });
            toast.present();
        }
        else {
            //this.navCtrl.push(NewChallengeStep4Page, {challenge: this.challenge}); 
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__newchallengestep4_newchallengestep4__["a" /* NewChallengeStep4Page */], { challenge: this.challenge });
        }
    };
    NewChallengeStep3Page.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getGolfs();
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    NewChallengeStep3Page.prototype.openPage = function (page) {
        switch (page) {
            default:
                this.navCtrl.setRoot(page.component);
                break;
        }
    };
    NewChallengeStep3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'newchallengestep3-page',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\newchallengestep3\newchallengestep3.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n     <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title>Select Golf Course</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="newchallengestep3-page">\n\n<p>Choose a Golf Course to host the challenge.</p>\n\n<div class="golf" *ngFor="let t of golfs" (click)="changeSelectedGolf(t)"> \n	    \n	    <div *ngIf="t.Name==selectedGolf">\n		    <ion-card class="card selected" *ngIf="t.GolfPhotos" >\n			    <img  src="https://www.footgolf-france.fr/media/cache/golf/{{t.GolfPhotos[0].Slug}}"/>\n			    <div class="card-header">\n				    <div class="card-title">{{t.Name}}</div>\n					<div class="card-subtitle">{{t.Locality}}</div>\n					<div class="card-subtitle"><a href="#nogo" class="btn btn-primary" (click)="openGolf(t)">Más Info</a></div>\n			    </div>\n			</ion-card>\n	    </div>\n	    <div *ngIf="t.Name!=selectedGolf">\n			<ion-card class="card" *ngIf="t.GolfPhotos"  >\n			    <img  src="https://www.footgolf-france.fr/media/cache/golf/{{t.GolfPhotos[0].Slug}}"/>\n			    <div class="card-header">\n				    <div class="card-title">{{t.Name}}</div>\n					<div class="card-subtitle">{{t.Locality}}</div>\n					<div class="card-subtitle"><a href="#nogo" class="btn btn-primary" (click)="openGolf(t)">Más Info</a></div>\n			    </div>\n			</ion-card>\n	    </div>\n	</div>\n\n<!-- Scroll Infinito -->\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n\n</ion-content>\n\n<ion-footer no-border>\n                        \n                        <ion-grid>\n						  <ion-row>\n						    <ion-col col-12>\n						      <button ion-button round color="primary" block text-uppercase block icon-right (click)="saveAndNext()">{{ \'CHALLENGES.NEW.BUTTON\' | translate }}<ion-icon name="arrow-round-forward"></ion-icon></button>\n						    </ion-col>\n						    \n						     \n						    \n						  </ion-row>\n						</ion-grid>\n                        \n                  \n                        \n</ion-footer>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\newchallengestep3\newchallengestep3.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], NewChallengeStep3Page);
    return NewChallengeStep3Page;
}());

//# sourceMappingURL=newchallengestep3.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChallengeStep4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newchallengestep5_newchallengestep5__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewChallengeStep4Page = /** @class */ (function () {
    function NewChallengeStep4Page(global, http, viewCtrl, navCtrl, navParams, toastCtrl) {
        this.global = global;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.selectedPlayers = [];
        this.allPlayers = [];
        this.page = 1;
        this.perPage = 10;
        this.clubSwitch = "allplayers";
        //Recibimos el challenge del paso anterior
        this.challenge = this.navParams.data.challenge;
        this.getPlayers();
    }
    NewChallengeStep4Page.prototype.ionViewWillEnter = function () {
    };
    NewChallengeStep4Page.prototype.openPlayer = function (player) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* PlayerPage */], { player: player });
    };
    NewChallengeStep4Page.prototype.addPlayer = function (p) {
        var found = this.selectedPlayers.find(function (element) {
            return element.Id == p.Id;
        });
        var found2 = this.allPlayers.findIndex(function (element) {
            return element.Id == p.Id;
        });
        if (found) {
            var toast = this.toastCtrl.create({
                message: 'Player already in the list of players to be invited',
                duration: 3000
            });
            toast.present();
        }
        else {
            this.allPlayers[found2].isActive = !p.isActive;
            this.selectedPlayers.push(p);
            var toast = this.toastCtrl.create({
                message: 'Player ' + p.LastName + ' ' + p.FirstName + ' added to the list of players to be invited',
                duration: 3000
            });
            toast.present();
        }
    };
    NewChallengeStep4Page.prototype.deletePlayer = function (p) {
        var found = this.selectedPlayers.findIndex(function (element) {
            return element.Id == p.Id;
        });
        this.selectedPlayers.splice(found, 1);
        var toast = this.toastCtrl.create({
            message: 'Player ' + p.LastName + ' ' + p.FirstName + ' removed from the list of players to be invited',
            duration: 3000
        });
        toast.present();
        //console.log(found);
        /*if(found){
             const toast = this.toastCtrl.create({
              message: 'Player already in the list of players to be invited',
              duration: 3000
            });
            toast.present();
        }else{
            this.selectedPlayers.push(p);
        }*/
    };
    NewChallengeStep4Page.prototype.getPlayers = function () {
        var _this = this;
        //this.http.get(this.global.urlApiLocal+"/getPlayers.php?file=true&id="+this.teamInfo.Id+"&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => { 
        //licences/{club_id}/{year}
        this.http.get(this.global.urlApiLocal + "/getData.php?e=" + encodeURIComponent("licences/1/" + this.global.season) + "&l=" + this.perPage + "&p=" + this.page + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/licences/"+this.teamId+"/"+this.global.anyo+"").subscribe((resp:any) => {
            var myresp = resp;
            for (var i = 0; i < myresp.length; i++) {
                myresp[i].isActive = false;
                _this.allPlayers.push(myresp[i]);
            }
        });
    };
    NewChallengeStep4Page.prototype.saveAndNext = function () {
        this.challenge.selectedPlayers = this.selectedPlayers;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__newchallengestep5_newchallengestep5__["a" /* NewChallengeStep5Page */], { challenge: this.challenge });
        //console.log(this.challenge);
        //console.log(angular.element('#publico').val());
        /*if(this.challenge.course_name=="" || this.challenge.course_name==undefined){
            
            //Toast para que seleccione campo
            
            const toast = this.toastCtrl.create({
                message: 'Please select a Golf Course to play the Challenge',
                duration: 3000
              });
              toast.present();
            
            
        }else{
            //this.navCtrl.push(NewChallengeStep4Page, {challenge: this.challenge});
              this.navCtrl.push(NewChallengeStep4Page, {challenge: this.challenge});
              
        }*/
    };
    NewChallengeStep4Page.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getPlayers();
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    NewChallengeStep4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newchallengestep4',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\newchallengestep4\newchallengestep4.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar hideBackButton>\n    <ion-title><img src="assets/imgs/logo_affg.png" height="35px" class="logo" alt=""></ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="backgroundColor">\n\n\n<div padding>\n	<h4>Would you like to invite some players to the challenge?</h4>\n	<p>You can invite as many players as you wish, however only the first {{challenge.spots}} Players that accept the challenge will be added to the same.</p>\n</div>\n\n\n<div >\n	\n	\n  <ion-segment [(ngModel)]="clubSwitch">\n    <ion-segment-button value="allplayers">\n      {{ \'ALLPLAYERS\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="players">\n      {{ \'PLAYERS\' | translate }}\n    </ion-segment-button>\n  </ion-segment>\n</div>\n	\n	\n	<div  [ngSwitch]="clubSwitch">\n		   <ion-list padding *ngSwitchCase="\'allplayers\'">\n		    \n		    \n			    <ion-item *ngFor="let p of allPlayers" (click)="addPlayer(p)" [class.seleccionada]="isActive">\n			      <ion-thumbnail item-start>\n			        <img *ngIf="p.Photo" src="data:image/png;base64,{{p.Photo}}">\n			        <ion-icon *ngIf="!p.Photo" name="contact"></ion-icon>\n			        \n			      </ion-thumbnail>\n			      <h2><img src="assets/imgs/flags/{{p.Country | uppercase}}.svg" width="16px"> {{p.LastName}}, {{p.FirstName}}</h2>\n			      <p class="note">{{p.Country}}</p>\n			    </ion-item>\n		    \n		    \n		    <ion-item *ngFor="let p of allPlayers" (click)="addPlayer(p)">\n		      <ion-thumbnail item-start>\n		        <img *ngIf="p.Photo" src="data:image/png;base64,{{p.Photo}}">\n		        <ion-icon *ngIf="!p.Photo" name="contact"></ion-icon>\n		        \n		      </ion-thumbnail>\n		      <h2><img src="assets/imgs/flags/{{p.Country | uppercase}}.svg" width="16px"> {{p.LastName}}, {{p.FirstName}}</h2>\n		      <p class="note">{{p.Country}}</p>\n		    </ion-item>\n		    \n		    \n		  </ion-list>\n		\n		  <ion-list padding *ngSwitchCase="\'players\'">\n		    <ion-item-sliding *ngFor="let p of selectedPlayers">\n			    <ion-item>\n			      <ion-thumbnail item-start>\n			        <img *ngIf="p.Photo" src="data:image/png;base64,{{p.Photo}}">\n			        <ion-icon *ngIf="!p.Photo" name="contact"></ion-icon>\n			        \n			      </ion-thumbnail>\n			      <h2><img src="assets/imgs/flags/{{p.Country | uppercase}}.svg" width="16px"> {{p.LastName}}, {{p.FirstName}}</h2>\n			      <p class="note">{{p.Country}}</p>\n			    </ion-item>\n			    \n			    <ion-item-options side="right">\n			      <button ion-button color="danger" (click)="deletePlayer(p)">\n			        <ion-icon name="trash"></ion-icon>\n			        DELETE\n			      </button>\n			      \n				</ion-item-options>\n			    \n		    </ion-item-sliding>\n		  </ion-list>\n  \n	</div>\n\n<!-- Scroll Infinito -->\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n\n</ion-content>\n\n<ion-footer no-border>\n                        \n                        <ion-grid>\n						  <ion-row>\n						    <ion-col col-12>\n						      <button ion-button round color="primary" block text-uppercase block icon-right (click)="saveAndNext()">{{ \'CHALLENGES.NEW.BUTTON\' | translate }}<ion-icon name="arrow-round-forward"></ion-icon></button>\n						    </ion-col>\n						    \n						     \n						    \n						  </ion-row>\n						</ion-grid>\n                        \n                  \n                        \n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\newchallengestep4\newchallengestep4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], NewChallengeStep4Page);
    return NewChallengeStep4Page;
}());

//# sourceMappingURL=newchallengestep4.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChallengeStep5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__challenges_challenges__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewChallengeStep5Page = /** @class */ (function () {
    function NewChallengeStep5Page(global, http, viewCtrl, navCtrl, navParams, toastCtrl) {
        this.global = global;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.selectedPlayers = [];
        this.allPlayers = [];
        this.page = 1;
        this.perPage = 10;
        this.clubSwitch = "allplayers";
        //Recibimos el challenge del paso anterior
        this.challenge = this.navParams.data.challenge;
        console.log(this.challenge);
        var parameteres = {
            page: 'challenge',
            challenge: this.challenge,
            creador: this.global.user.id,
            creadorLicence: this.global.user.LicenceId
        };
        this.http.post(this.global.urlApiLocal + "/saveChallenge.php", parameteres).subscribe(function (resp) {
            var data = resp;
            if (data.status == 1) {
                //this.muestra_alert("titulo","texto1");
                //this.navCtrl.setRoot(HomePage); 
            }
            else {
                if (data.status == 2) {
                    //this.muestra_alert("titulo","User already in the Database");
                }
                else {
                    //this.submitAttempt2 = true;
                    //this.muestra_alert("titulo","texto3");
                }
            }
        });
        //this.getPlayers();
    }
    NewChallengeStep5Page.prototype.ionViewWillEnter = function () {
    };
    NewChallengeStep5Page.prototype.ionViewDidEnter = function () {
        bodymovin.loadAnimation({
            container: document.getElementById('lottie'),
            path: 'assets/animations/trophy.json',
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
    };
    NewChallengeStep5Page.prototype.openPlayer = function (player) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* PlayerPage */], { player: player });
    };
    NewChallengeStep5Page.prototype.addPlayer = function (p) {
        var found = this.selectedPlayers.find(function (element) {
            return element.Id == p.Id;
        });
        if (found) {
            var toast = this.toastCtrl.create({
                message: 'Player already in the list of players to be invited',
                duration: 3000
            });
            toast.present();
        }
        else {
            this.selectedPlayers.push(p);
            var toast = this.toastCtrl.create({
                message: 'Player ' + p.LastName + ' ' + p.FirstName + ' added to the list of players to be invited',
                duration: 3000
            });
            toast.present();
        }
    };
    NewChallengeStep5Page.prototype.deletePlayer = function (p) {
        var found = this.selectedPlayers.findIndex(function (element) {
            return element.Id == p.Id;
        });
        this.selectedPlayers.splice(found, 1);
        var toast = this.toastCtrl.create({
            message: 'Player ' + p.LastName + ' ' + p.FirstName + ' removed from the list of players to be invited',
            duration: 3000
        });
        toast.present();
        //console.log(found);
        /*if(found){
             const toast = this.toastCtrl.create({
              message: 'Player already in the list of players to be invited',
              duration: 3000
            });
            toast.present();
        }else{
            this.selectedPlayers.push(p);
        }*/
    };
    NewChallengeStep5Page.prototype.getPlayers = function () {
        var _this = this;
        //this.http.get(this.global.urlApiLocal+"/getPlayers.php?file=true&id="+this.teamInfo.Id+"&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => { 
        //licences/{club_id}/{year}
        this.http.get(this.global.urlApiLocal + "/getData.php?e=" + encodeURIComponent("licences/1/" + this.global.season) + "&l=" + this.perPage + "&p=" + this.page + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/licences/"+this.teamId+"/"+this.global.anyo+"").subscribe((resp:any) => {
            var myresp = resp;
            for (var i = 0; i < myresp.length; i++) {
                _this.allPlayers.push(myresp[i]);
            }
        });
    };
    NewChallengeStep5Page.prototype.saveAndNext = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__challenges_challenges__["a" /* ChallengesPage */]);
        //console.log(this.challenge);
        //console.log(angular.element('#publico').val());
        /*if(this.challenge.course_name=="" || this.challenge.course_name==undefined){
            
            //Toast para que seleccione campo
            
            const toast = this.toastCtrl.create({
                message: 'Please select a Golf Course to play the Challenge',
                duration: 3000
              });
              toast.present();
            
            
        }else{
            //this.navCtrl.push(NewChallengeStep4Page, {challenge: this.challenge});
              this.navCtrl.push(NewChallengeStep4Page, {challenge: this.challenge});
              
        }*/
    };
    NewChallengeStep5Page.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getPlayers();
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    NewChallengeStep5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newchallengestep5',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\newchallengestep5\newchallengestep5.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title>Challenge Created!</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="backgroundColor" text-center>\n\n<h1>All set!</h1>\n\n<div id="lottie"></div>\n\n<h4>The challenge has been created and all the players have been notified.</h4>\n\n\n</ion-content>\n\n<ion-footer no-border>\n                        \n                        <ion-grid>\n						  <ion-row>\n						    <ion-col col-12>\n						      <button ion-button round color="primary" block text-uppercase block icon-right (click)="saveAndNext()">GO TO CHALLENGES PAGE <ion-icon name="trophy"></ion-icon></button>\n						    </ion-col>\n						    \n						     \n						    \n						  </ion-row>\n						</ion-grid>\n                        \n                  \n                        \n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\newchallengestep5\newchallengestep5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], NewChallengeStep5Page);
    return NewChallengeStep5Page;
}());

//# sourceMappingURL=newchallengestep5.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tournaments_tournaments__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__team_team__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AlertsPage = /** @class */ (function () {
    function AlertsPage(global, http, navCtrl, navParams, iab) {
        this.global = global;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.pushPage = __WEBPACK_IMPORTED_MODULE_7__team_team__["a" /* TeamPage */];
    }
    AlertsPage_1 = AlertsPage;
    AlertsPage.prototype.ionViewWillEnter = function () {
        this.lineups = true;
        console.log(this.lineups);
        this.getClubs();
    };
    AlertsPage.prototype.openTeam = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__team_team__["a" /* TeamPage */], { teamInfo: id });
    };
    AlertsPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(AlertsPage_1);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tournaments_tournaments__["a" /* TournamentsPage */]);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__golfs_golfs__["a" /* GolfsPage */]);
                break;
            case 5:
                break;
        }
    }; //Open Menu
    AlertsPage.prototype.getClubs = function () {
        //console.log(this.global.token);
        /*  let headers = new Headers({
         'Content-Type': 'application/x-www-form-urlencoded',
         'withCredentials': 'true'
       });
       
       headers.append('X-Auth-Token', '9SObubYiAtaQTQV7ZWaDXYB7Gx9Fk8+kjSBwUItYYWsd8Y9XPcFNLUskqwfMOcaOchI=');*/
        //let headers = new HttpHeaders({ 'X-Auth-Token': '9SObubYiAtaQTQV7ZWaDXYB7Gx9Fk8+kjSBwUItYYWsd8Y9XPcFNLUskqwfMOcaOchI=' });
        /* let reqOpts = {
           headers: {
     
             'X-Auth-Token': this.global.token,
           }
         };
         
                 this.myHeader = new HttpHeaders({ 'Content-Type': 'x-www-form-urlencoded' });
                                                     
                 this.myHeader.set('X-Auth-Token', this.global.token);	*/
        //let options = new RequestOptions({ headers: headers });
        /* options = new RequestOptions();
         
         let headers = new Headers();
                 headers.append('X-Auth-Token', this.global.token);
                 options.headers = headers;*/
        /*let headers = {
          "Content-type": 'x-www-form-urlencoded',
          "X-Auth-Token": this.global.token,
        };*/
        /* let headers: HttpHeaders = new HttpHeaders();
     headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
     headers = headers.append('X-Auth-Token', this.global.token);*/
        /*
      
      //this.http.get(this.global.url+"/clubs/2019", {headers}).subscribe((resp:any) => {
          this.http.get(this.global.urlApiLocal+"/getClubs.php?token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
          
        //console.log(resp);
        this.teams=JSON.parse(resp);
        console.log(this.teams);
      });  */
        this.teams = this.global.teams;
    };
    AlertsPage = AlertsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alerts',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\alerts\alerts.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img src="assets/imgs/menu.svg">\n    </button>\n    <ion-title>Alerts</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="backgroundColor">\n	\n	\n	<!--\n	<ion-grid text-center>\n	  <ion-row>\n	    <ion-col col-4  *ngFor="let t of teams" (click)="openTeam(t.id,t.id_database)">\n	    <ion-avatar item-start>\n			<img src="{{ t.logo }}" height="60px;">\n		</ion-avatar>{{ t.nombre }}</ion-col>   \n	  </ion-row>\n	</ion-grid>\n	-->\n	\n	<ion-list >\n    \n    <!--<ion-item *ngFor="let t of teams" (click)="openTeam(t)">\n      <ion-thumbnail item-start>\n        <img src="https://www.footgolf-france.fr/media/cache/club_big/{{t.Id}}_{{global.anyo}}">\n      </ion-thumbnail>\n      <h2>{{t.Name}}</h2>\n      <p class="note">{{t.Places.HeadOffice.Locality}}</p>\n    </ion-item>-->\n\n    \n  </ion-list>\n	\n\n</ion-content>\n\n\n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\alerts\alerts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], AlertsPage);
    return AlertsPage;
    var AlertsPage_1;
}());

//# sourceMappingURL=alerts.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tournaments_tournaments__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__myteam_myteam__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyTeamsPage = /** @class */ (function () {
    function MyTeamsPage(global, http, navCtrl, navParams, iab) {
        this.global = global;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.pushPage = __WEBPACK_IMPORTED_MODULE_7__myteam_myteam__["a" /* MyTeamPage */];
    }
    MyTeamsPage_1 = MyTeamsPage;
    MyTeamsPage.prototype.ionViewWillEnter = function () {
        this.lineups = true;
        console.log(this.lineups);
        this.getClubs();
    };
    MyTeamsPage.prototype.openTeam = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__myteam_myteam__["a" /* MyTeamPage */], { teamInfo: id });
    };
    MyTeamsPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(MyTeamsPage_1);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tournaments_tournaments__["a" /* TournamentsPage */]);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__golfs_golfs__["a" /* GolfsPage */]);
                break;
            case 5:
                break;
        }
    }; //Open Menu
    MyTeamsPage.prototype.getClubs = function () {
        this.teams = this.global.teams;
    };
    MyTeamsPage = MyTeamsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myteams',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\myteams\myteams.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <img src="assets/imgs/menu.svg">\n    </button>\n    <ion-title>Clubs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="backgroundColor">\n	\n	\n	<!--\n	<ion-grid text-center>\n	  <ion-row>\n	    <ion-col col-4  *ngFor="let t of teams" (click)="openTeam(t.id,t.id_database)">\n	    <ion-avatar item-start>\n			<img src="{{ t.logo }}" height="60px;">\n		</ion-avatar>{{ t.nombre }}</ion-col>   \n	  </ion-row>\n	</ion-grid>\n	-->\n	\n	<ion-list >\n    \n    <ion-item *ngFor="let t of teams" (click)="openTeam(t)">\n      <ion-thumbnail item-start>\n        <img src="https://www.footgolf-france.fr/media/cache/club_big/{{t.Id}}_{{global.anyo}}">\n      </ion-thumbnail>\n      <h2>{{t.Name}}</h2>\n      <p class="note">{{t.Places.HeadOffice.Locality}}</p>\n    </ion-item>\n\n    \n  </ion-list>\n	\n\n</ion-content>\n\n\n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\myteams\myteams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MyTeamsPage);
    return MyTeamsPage;
    var MyTeamsPage_1;
}());

//# sourceMappingURL=myteams.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scorecard_scorecard__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyTeamPage = /** @class */ (function () {
    function MyTeamPage(global, http, viewCtrl, navCtrl, navParams) {
        this.global = global;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.players = [];
        //private director1:any;
        this.clubSwitch = "clubs";
        //this.team ="players";
        this.teamInfo = this.navParams.data.teamInfo;
        this.director_id = this.teamInfo.Staffs.President.LicenceId;
        this.secretario_id = this.teamInfo.Staffs.Secretaire.LicenceId;
        this.tesorero_id = this.teamInfo.Staffs.Tresorier.LicenceId;
        //console.log(this.teamInfo);
        //this.teamDBId = this.navParams.data.id_database;
        //console.log(this.teamId);
        //this.getTeam();
        this.getPlayer();
    }
    MyTeamPage.prototype.ionViewWillEnter = function () {
    };
    MyTeamPage.prototype.openCard = function (playerID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__scorecard_scorecard__["a" /* ScoreCardPage */], { playerID: playerID });
    };
    MyTeamPage.prototype.openPlayer = function (player) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* PlayerPage */], { player: player });
    };
    /*getTeam(){
      //console.log(this.teamId);
  
      //this.http.get(this.global.url+"/club/"+this.teamId+"/"+this.global.anyo+"").subscribe((resp:any) => {
          
          this.http.get("http://localhost/AFFGApp/API/getClub.php?id="+this.teamId+"&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        
        this.teamInfo=JSON.parse(resp);
        console.log(this.teamInfo);
        
        if(this.teamInfo.length){
            
            this.office1=this.teamInfo[0].Places.HeadOffice.Street;
            this.office2=this.teamInfo[0].Places.HeadOffice.PostalCode + ", "+ this.teamInfo[0].Places.HeadOffice.Locality;
            this.office3=this.teamInfo[0].Places.HeadOffice.OfficePhone;
            this.office4=this.teamInfo[0].Places.HeadOffice.Mail;
            this.office5=this.teamInfo[0].Places.Correspondance.Street ;
            this.office6=this.teamInfo[0].Places.Correspondance.PostalCode + ", "+ this.teamInfo[0].Places.HeadOffice.Locality;
            this.office7=this.teamInfo[0].Places.Correspondance.OfficePhone;
            this.office8=this.teamInfo[0].Places.Correspondance.Mail;
            
            this.director_id=this.teamInfo[0].Staffs.President.LicenceId;
            this.secretario_id=this.teamInfo[0].Staffs.Secretaire.LicenceId;
            this.tesorero_id=this.teamInfo[0].Staffs.Tresorier.LicenceId;
            
        }
  
        
        //console.log(this.places);
        
        
       
  
      });
    }*/
    MyTeamPage.prototype.getPlayer = function () {
        var _this = this;
        this.http.get(this.global.urlApiLocal + "/getPlayers.php?file=true&id=" + this.teamInfo.Id + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/licences/"+this.teamId+"/"+this.global.anyo+"").subscribe((resp:any) => {
            _this.players = resp;
            console.log(_this.players);
            for (var _i = 0; _i < _this.players.length; _i++) {
                console.log(_this.players[_i]);
                if (_this.players[_i].Id == _this.director_id) {
                    _this.director = _this.players[_i].LastName + ", " + _this.players[_i].FirstName;
                    _this.director_p = _this.players[_i].Photo;
                }
                if (_this.players[_i].Id == _this.secretario_id) {
                    _this.secretario = _this.players[_i].LastName + ", " + _this.players[_i].FirstName;
                    _this.secretario_p = _this.players[_i].Photo;
                }
                if (_this.players[_i].Id == _this.tesorero_id) {
                    _this.tesorero = _this.players[_i].LastName + ", " + _this.players[_i].FirstName;
                    _this.tesorero_p = _this.players[_i].Photo;
                }
            }
        });
    };
    MyTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myteam',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\myteam\myteam.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar hideBackButton>\n    <ion-title><img src="assets/imgs/logo_affg.png" height="35px" class="logo" alt=""></ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="backgroundColor">\n\n<div >\n  <ion-segment [(ngModel)]="clubSwitch">\n    <ion-segment-button value="clubs">\n      {{ \'CLUBS\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="players">\n      {{ \'PLAYERS\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="board">\n      {{ \'BOARD\' | translate }}\n    </ion-segment-button>\n  </ion-segment>\n</div>\n	\n	\n	<div  [ngSwitch]="clubSwitch">\n  <div class="teamCard" padding *ngSwitchCase="\'clubs\'" text-center>\n    \n    <ion-thumbnail>\n        <img src="https://www.footgolf-france.fr/media/cache/club_big/{{teamInfo.Id}}_{{global.anyo}}">\n        \n      </ion-thumbnail>\n    <h1>{{teamInfo.Name}}</h1>\n    \n    <div class="field">\n	    <label>{{ \'MAINOFFICE\' | translate }}</label>\n	    <p>{{teamInfo.Places.HeadOffice.Street}}</p>\n	    <p>{{teamInfo.Places.HeadOffice.PostalCode}}, {{this.teamInfo.Places.HeadOffice.Locality}}</p>\n	    <p><ion-icon name="call"></ion-icon> {{teamInfo.Places.HeadOffice.OfficePhone}}</p>\n	    <p><ion-icon name="mail"></ion-icon> {{teamInfo.Places.HeadOffice.Mail}}</p>\n    </div>\n    \n    <div class="field">\n	    <label>{{ \'CORROFFICE\' | translate }}</label>\n	    <p>{{teamInfo.Places.Correspondance.Street}}</p>\n	    <p>{{teamInfo.Places.Correspondance.PostalCode}}, {{this.teamInfo.Places.Correspondance.Locality}}</p>\n	    <p><ion-icon name="call"></ion-icon> {{teamInfo.Places.Correspondance.OfficePhone}}</p>\n	    <p><ion-icon name="mail"></ion-icon> {{teamInfo.Places.Correspondance.Mail}}</p>\n    </div>\n    \n  </div>\n\n  <ion-list padding *ngSwitchCase="\'players\'">\n    \n    <ion-item *ngFor="let p of players" >\n      <ion-thumbnail item-start>\n        <img *ngIf="p.Photo" src="data:image/png;base64,{{p.Photo}}">\n        <ion-icon *ngIf="!p.Photo" name="contact"></ion-icon>\n        \n      </ion-thumbnail>\n      <h2><img src="assets/imgs/flags/{{p.Country | uppercase}}.svg" width="16px"> {{p.LastName}}, {{p.FirstName}}</h2>\n      <p class="note">{{p.Country}}</p>\n    </ion-item>\n    \n  </ion-list>\n  \n  <ion-list padding *ngSwitchCase="\'board\'">\n    \n    <ion-item>\n      <ion-thumbnail item-start>\n        <img *ngIf="director_p" src="data:image/png;base64,{{director_p}}">\n        <ion-icon *ngIf="!director_p" name="contact"></ion-icon>\n        \n      </ion-thumbnail>\n      <h2>{{director}}</h2>\n      <p class="note">{{ \'DIRECTOR\' | translate }}</p>\n    </ion-item>\n    \n    <ion-item>\n      <ion-thumbnail item-start>\n        <img *ngIf="secretario_p" src="data:image/png;base64,{{secretario_p}}">\n        <ion-icon *ngIf="!secretario_p" name="contact"></ion-icon>\n        \n      </ion-thumbnail>\n      <h2>{{secretario}}</h2>\n      <p class="note">{{ \'SECRETARIO\' | translate }}</p>\n    </ion-item>\n    \n    <ion-item>\n      <ion-thumbnail item-start>\n        <img *ngIf="tesorero_p" src="data:image/png;base64,{{tesorero_p}}">\n        <ion-icon *ngIf="!tesorero_p" name="contact"></ion-icon>\n        \n      </ion-thumbnail>\n      <h2>{{tesorero}}</h2>\n      <p class="note">{{ \'TESORERO\' | translate }}</p>\n    </ion-item>\n    \n  </ion-list>\n  \n	</div>\n\n</ion-content>\n\n\n<!--<ion-content padding class="backgroundColor">\n	\n	<h1>{{ teamInfo?.nombre }}</h1> <img src="{{ teamInfo?.logo }}" height="60px;">\n	</div>\n\n	<div padding-top>\n		<ion-segment >\n		<ion-segment-button value="players">\n		      PLAYERS\n		    </ion-segment-button>\n		    <ion-segment-button value="info">\n		      INFO\n		    </ion-segment-button>\n		    \n		</ion-segment>\n\n		<div [ngSwitch]="team">\n		\n		<h2 *ngSwitchCase="\'players\'">Men</h2>\n		\n		<ion-list *ngSwitchCase="\'players\'">\n\n			<ion-item *ngFor="let p of menplayers" (click)="openPlayer(p)">\n		      <ion-avatar item-start>\n		        <img src="{{ p.foto }}">\n		      </ion-avatar>\n		      <h2>{{ p.nombre }} {{ p.apellidos }}</h2>\n		      <p>{{ p.categoria }} • {{ p.fecha_nacimiento }}</p>\n		    </ion-item>\n		\n		</ion-list>	\n			\n		<h2 *ngSwitchCase="\'players\'">Women</h2>\n			<ion-list *ngSwitchCase="\'players\'">\n			<ion-item *ngFor="let p of womenplayers" (click)="openPlayer(p)">\n		      <ion-avatar item-start>\n		        <img src="{{ p.foto }}">\n		      </ion-avatar>\n		      <h2>{{ p.nombre }} {{ p.apellidos }}</h2>\n		      <p>{{ p.categoria }} • {{ p.fecha_nacimiento }}</p>\n		    </ion-item>\n			</ion-list>\n		    \n		    \n		<h2 *ngSwitchCase="\'players\'">Senior</h2>\n			<ion-list *ngSwitchCase="\'players\'">\n			<ion-item *ngFor="let p of seniorplayers" (click)="openPlayer(p)">\n		      <ion-avatar item-start>\n		        <img src="{{ p.foto }}">\n		      </ion-avatar>\n		      <h2>{{ p.nombre }} {{ p.apellidos }}</h2>\n		      <p>{{ p.categoria }} • {{ p.fecha_nacimiento }}</p>\n		    </ion-item>\n			</ion-list>\n		    \n		\n		  <div *ngSwitchCase="\'info\'" padding-top>\n		  	<div [innerHTML]="teamInfo?.info"></div>\n		  </div>\n\n	    \n\n		</div>\n	</div>\n\n</ion-content>-->'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\myteam\myteam.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MyTeamPage);
    return MyTeamPage;
}());

//# sourceMappingURL=myteam.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tournamentstype_tournamentstype__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scores_scores__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_static__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_favorite_favorite__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var DashboardPage = /** @class */ (function () {
    function DashboardPage(favoriteProvider, navCtrl, navParams, http, alertCtrl, global, iab) {
        this.favoriteProvider = favoriteProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.iab = iab;
        //public noticias : Array<any> = [];	
        this.videos = [];
        this.noticias = [];
        this.ofertas = [];
        this.home = true;
        this.homeSwitch = "news";
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    DashboardPage_1 = DashboardPage;
    DashboardPage.prototype.ionViewWillEnter = function () {
        this.getNoticias();
        //this.getBanner();
        this.getVideos();
        //this.getScores(); 
        //this.getRankings(5);
        //this.getSalidas(); 
    };
    DashboardPage.prototype.getNoticias = function () {
        this.noticias = this.global.noticias;
    };
    DashboardPage.prototype.getVideos = function () {
        this.videos = this.global.videos;
    };
    DashboardPage.prototype.openNoticia = function (id_not) {
        var paramObj = { id: id_not };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__static_static__["a" /* StaticPage */], paramObj);
    };
    DashboardPage.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    DashboardPage.prototype.openPage2 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__scores_scores__["a" /* ScoresPage */], { slug: '' });
    };
    DashboardPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(DashboardPage_1);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tournamentstype_tournamentstype__["a" /* TournamentsTypePage */]);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__golfs_golfs__["a" /* GolfsPage */]);
                break;
            case 5:
                break;
        }
    }; //Open Menu
    DashboardPage = DashboardPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\dashboard\dashboard.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title><img src="assets/imgs/logo_affg.png" height="35px" class="logo" alt=""></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="backgroundColor">\n\n\n\n<div >\n  <ion-segment [(ngModel)]="homeSwitch">\n    <ion-segment-button value="news">\n      News\n    </ion-segment-button>\n    <ion-segment-button value="videos">\n      Videos\n    </ion-segment-button>\n    <ion-segment-button value="offers">\n      Offers\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n<div  [ngSwitch]="homeSwitch">\n  <ion-list padding *ngSwitchCase="\'news\'">\n    \n    <div class="golf" *ngFor="let n of noticias" > \n	    <ion-card class="card" *ngIf="n.ArticleObjects[0].Slug"  >\n		    <img *ngIf="n.Vignette" src="data:image/png;base64,{{n.Vignette.Data}}">\n		    <div class="card-header">\n			    <div class="card-title">{{n.Title}}</div>\n				<div *ngIf="n.Tag" class="card-subtitle">{{n.Tag}}</div>\n		    </div>\n		</ion-card>\n	</div>\n    \n  </ion-list>\n\n  <ion-list padding *ngSwitchCase="\'videos\'">\n    \n    <div class="golf" *ngFor="let n of videos"> \n	    <ion-card class="card" *ngIf="n.Summary"  >\n		    <iframe width="100%" [src]="n.Summary" frameborder="0" allowfullscreen></iframe>\n		    <div class="card-header">\n			    <div class="card-title">{{n.Title}}</div>\n				<div *ngIf="n.Tag" class="card-subtitle">{{n.Tag}}</div>\n		    </div>\n		</ion-card>\n	</div>\n    \n  </ion-list>\n  \n  <ion-list padding *ngSwitchCase="\'offers\'">\n    \n    ...OFFERS...\n  </ion-list>\n  \n</div>\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_favorite_favorite__["a" /* FavoriteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], DashboardPage);
    return DashboardPage;
    var DashboardPage_1;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recover_password_recover_password__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {EmailValidators} from 'ng2-validators';




/******* Estas hay que quitarlas *********/

var NewTeamPage = /** @class */ (function () {
    function NewTeamPage(navCtrl, navParams, http, global, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.submitAttempt1 = false;
        this.submitAttempt2 = false;
        this.formLogin = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        });
    }
    NewTeamPage.prototype.ionViewWillEnter = function () {
        //this.getData(); 
    };
    NewTeamPage.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    NewTeamPage.prototype.doLogin = function () {
        var _this = this;
        var parameteres = {
            page: 'login',
            usuario: this.formLogin.value.email,
            password: this.formLogin.value.password,
        };
        if (this.formLogin.value.email == "" || this.formLogin.value.password == "") {
            this.submitAttempt1 = true;
            this.submitAttempt2 = true;
        }
        else {
            this.http.post(this.global.url, parameteres).subscribe(function (resp) {
                var data = resp.json();
                if (data.data.ok == "true") {
                    //this.muestra_alert("titulo","texto1");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                }
                else {
                    if (data.data.ok == "false1") {
                        _this.submitAttempt1 = true;
                        //this.muestra_alert("titulo","texto2");
                    }
                    else {
                        _this.submitAttempt2 = true;
                        //this.muestra_alert("titulo","texto3");
                    }
                }
            });
        }
    };
    NewTeamPage.prototype.openPage = function (page) {
        switch (page) {
            case "recover-password":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__recover_password_recover_password__["a" /* RecoverPasswordPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "register":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "profile":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */]);
                //console.log("results");
                //console.log(slug);
                break;
            default:
                this.navCtrl.setRoot(page.component);
                break;
        }
    };
    NewTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newteam',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\newteam\newteam.html"*/'<ion-content class="newteam-page">\n\n    <form [formGroup]="formLogin" novalidate (submit)="doLogin()">\n        <ion-grid fixed>\n            <ion-row>\n                <ion-col col-sm-2 col-md-3 col-lg-4 col-xl-3>\n                </ion-col>\n                <ion-col col-12 col-sm-8 col-md-6 col-lg-4 col-xl-6>\n\n                    <ion-list>\n\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col text-center>\n\n                                    <div class="logo">\n                                        <img src="{{global.url_assets}}www/assets/imgs/logo.png" alt="Logo">\n\n                                        \n\n                                    </div>\n                                    <ion-item>\n                                        <ion-label stacked>Login</ion-label>\n                                        <ion-input formControlName="email" type="email"></ion-input>\n                                    </ion-item>\n                                    <div class="error-msg">\n                                       <p ion-text color="danger" *ngIf="!formLogin.controls.email.valid && submitAttempt2">User no valido</p>\n                                    </div>\n\n                                    <ion-item>\n                                        <ion-label stacked>Password</ion-label>\n                                        <ion-input formControlName="password" type="password"></ion-input>\n                                    </ion-item>\n                                    <div class="error-msg">\n                                        <p ion-text color="danger" *ngIf="!formLogin.controls.password.valid && submitAttempt1">Password no Valido</p>\n                                    </div>\n\n                                </ion-col>\n                            </ion-row>\n\n\n\n                            <ion-row>\n\n                                <ion-col col-12 text-center>\n                                    <button type="submit" ion-button block color="primary">\n                                        Submit\n                                    </button>\n                                </ion-col>\n\n                                <ion-col col-12 text-center>\n                                	<button type="button" ion-button block color="primary" (click)="openPage(\'recover-password\')">\n                                        Recover Password\n                                    </button>\n                                </ion-col>\n                                \n                                <ion-col col-12 text-center>\n                                	<button type="button" ion-button block color="primary" (click)="openPage(\'register\')">\n                                        Register\n                                    </button>\n                                </ion-col>\n                                \n                                <!----- QUITAR PARA 0.0.5 --->\n                                \n                                <ion-col col-12 text-center>\n                                	<button type="button" ion-button block color="primary" (click)="openPage(\'profile\')">\n                                        Profile\n                                    </button>\n                                </ion-col> \n                                \n                            </ion-row>\n                        </ion-grid>\n\n\n\n                        <div padding text-center>\n                            <h4 color="secundary">FootGolf</h4>\n                        </div>\n\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n   </form>\n\n</ion-content>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\newteam\newteam.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NewTeamPage);
    return NewTeamPage;
}());

//# sourceMappingURL=newteam.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroChallengesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {EmailValidators} from 'ng2-validators';


/******* Estas hay que quitarlas *********/

var IntroChallengesPage = /** @class */ (function () {
    function IntroChallengesPage(navCtrl, navParams, http, global, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.submitAttempt1 = false;
        this.submitAttempt2 = false;
        this.formLogin = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        });
    }
    IntroChallengesPage.prototype.ionViewWillEnter = function () {
        //this.getData(); 
    };
    IntroChallengesPage.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    IntroChallengesPage.prototype.openPage = function (page) {
        switch (page) {
            case "login":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "register":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            default:
                this.navCtrl.setRoot(page.component);
                break;
        }
    };
    IntroChallengesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro-challenges',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\intro-challenges\intro-challenges.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n     <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="intro-challenges-page">\n\n    <form [formGroup]="formLogin" novalidate (submit)="doLogin()">\n        <ion-grid fixed>\n            <ion-row>\n                <ion-col col-sm-2 col-md-3 col-lg-4 col-xl-3>\n                </ion-col>\n                <ion-col col-12 col-sm-8 col-md-6 col-lg-4 col-xl-6>\n\n                    <ion-list>\n\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col text-center>\n									\n									<img src="assets/imgs/logo_affg.png" height="60px" class="logo" alt="">\n									\n                                    <p>{{ \'INTRO_CHALLENGES\' | translate }}</p>\n\n                                </ion-col>\n                            </ion-row>\n\n\n\n                          \n                        </ion-grid>\n\n\n\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n   </form>\n\n</ion-content>\n\n<ion-footer no-border>\n                        \n                        <ion-grid>\n						  <ion-row>\n						    <ion-col col-6>\n						      <button ion-button round color="primary" block text-uppercase block icon-right (click)="openPage(\'login\')">{{ \'MENUC1\' | translate }}<ion-icon name="arrow-round-forward"></ion-icon></button>\n						    </ion-col>\n						    \n						     <ion-col col-6>\n						      <button ion-button round color="primary" block text-uppercase block icon-right (click)="openPage(\'register\')">{{ \'MENUC2\' | translate }}<ion-icon name="arrow-round-forward"></ion-icon></button>\n						    </ion-col>\n						    \n						  </ion-row>\n						</ion-grid>\n                        \n                  \n                        \n</ion-footer>\n\n    \n    	'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\intro-challenges\intro-challenges.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], IntroChallengesPage);
    return IntroChallengesPage;
}());

//# sourceMappingURL=intro-challenges.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatchPage = /** @class */ (function () {
    function MatchPage(navCtrl, navParams, http, global, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.partidos = [];
    }
    MatchPage.prototype.ionViewWillEnter = function () {
        this.getData();
        //this.muestra_alert('titulo','texto'+this.navParams.get("id_part"));
    };
    MatchPage.prototype.getData = function () {
        var _this = this;
        var parameteres = {
            page: 'match',
            id_partido: this.navParams.get("id_part"),
            id_torneo: this.global.id_torneo
        };
        this.http.post(this.global.url, parameteres).subscribe(function (resp) {
            var data = resp.json();
            _this.partidos = data.data.partidos;
        });
    };
    MatchPage.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    MatchPage.prototype.verScores = function (test) {
        this.muestra_alert('titulo', 'texto' + test);
    };
    MatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-match',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\match\match.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Match</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    \n    <score [fecha_programado]="p.fecha_programado" [campo]="p.nombre_campo" [equipos]="p.equipos" [jugando]="p.jugando" [hoyoactual]="p.hoyo_actual" [listadohoyos]="p.listado_victorias_hoyos"  [grupo]="p.grupo"  [partido_id]="p.partido_id" *ngFor="let p of partidos" ></score>\n\n        <ion-row>\n            <ion-col center text-center><button ion-button menuToggle>Hole By hole</button></ion-col>\n            <ion-col center text-center><button ion-button menuToggle>Line Ups</button></ion-col>\n            <ion-col center text-center><button ion-button menuToggle>Events</button></ion-col>\n            <ion-col center text-center><button ion-button menuToggle>News</button></ion-col>\n        </ion-row>\n    <ion-item *ngFor="let p of partidos">\n        <ion-row>\n        	<ion-col center text-center col-sm-4 col-md-4 col-lg-4 col-xl-4>\n        		<br /><br />Hole\n        	</ion-col>\n            \n\n            \n            \n        	<ion-col center text-center *ngFor="let e of p.equipos" col-sm-4 col-md-4 col-lg-4 col-xl-4>\n        		<img class="escudito" data-src="{{global.url_assets}}{{e.imagen_equipo}}" (click)=\'verScores(1);\'><br />\n                <ion-icon name="baseball" [ngClass]="e.color" style="border-radius:20px;"></ion-icon>\n        		<p style="font-size:12px">{{e.nombre_equipo}}</p >\n        	</ion-col>\n                \n            \n                \n    	</ion-row>\n\n        <lineahoyo [num_hoyo]="h.num" [color]="h.ganador" [jugadores]="h.users" *ngFor="let h of p.hoyos"></lineahoyo>\n    </ion-item>\n\n\n    \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\match\match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MatchPage);
    return MatchPage;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ranking_ranking__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_ActionSheetService_ActionSheetService__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ScoresPage = /** @class */ (function () {
    function ScoresPage(navCtrl, navParams, http, viewCtrl, global, actionsheetCtrl, loadingCtrl, iab, actionSheetSvc) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.global = global;
        this.actionsheetCtrl = actionsheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.actionSheetSvc = actionSheetSvc;
        this.page = 1;
        this.perPage = 5;
        //public partidos : Array<any> = [];
        this.salidas = [];
        this.flights = true;
        this.botones = [];
        this.rondaSwitch = "ronda1";
        this.estaBuscando = false;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.fb_live_url = 'http://admin.fgranks.com/static/redirect_fb_live.php';
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Loading Flights...'
        });
        this.loading.present();
        this.infoTorneo = this.navParams.get("infoTorneo");
        console.log(this.infoTorneo);
        //Genero los botones
        this.getSalidas(1).then(function (data) {
            _this.loading.dismiss();
        });
    }
    ScoresPage_1 = ScoresPage;
    ScoresPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        for (var _i = 1; _i <= this.global.rondas; _i++) {
            this.botones.push({
                text: 'Round ' + _i,
                //role: 'destructive',
                //icon: !this.platform.is('ios') ? 'trash' : null,
                handler: function () {
                    //console.log('Delete clicked');
                    _this.navCtrl.setRoot(ScoresPage_1, { slug: 'round_' + _i });
                }
            });
        }
        console.log(this.botones);
    };
    ScoresPage.prototype.ionViewDidLoad = function () {
    };
    ScoresPage.prototype.onSegmentChange = function (ronda) {
        var _this = this;
        this.page = 1;
        console.log("Deberia cambiar a " + ronda);
        this.initializeItems2();
        //var val = ev.target.value;
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Loading...'
        });
        this.loading.present();
        this.getSalidas(ronda).then(function (data) {
            _this.loading.dismiss();
        });
    };
    ScoresPage.prototype.SearchPlayers = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            console.log(this.rankingArray);
            this.salidas = this.rankingArray.filter(function (item) {
                //return (item[0].nombre.toLowerCase().indexOf(val.toLowerCase()) > -1); //Devuelve true o false
                var valor = false;
                for (var _i = 0; _i < item.length; _i++) {
                    if (item[_i].nombre.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                        valor = true;
                    }
                }
                return valor;
            });
        }
    };
    ScoresPage.prototype.initializeItems = function () {
        this.salidas = this.rankingArray;
    };
    ScoresPage.prototype.initializeItems2 = function () {
        this.salidas = [];
    };
    ScoresPage.prototype.SearchFlight = function (ev, ronda) {
        if (this.estaBuscando) {
            this.loading.dismiss();
        }
        var val = ev.target.value;
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Searching...'
        });
        this.loading.present();
        this.page = 1;
        this.initializeItems2();
        console.log(val);
        this.searchSalidas(val, ronda);
        //this.loading.dismiss();
    };
    ScoresPage.prototype.getSalidas = function (round) {
        var _this = this;
        return new Promise(function (resolve) {
            var myGlobal = _this.global;
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            _this.http.get(_this.global.urlApiLocal + "/getData.php?e=competitionSquads/" + _this.infoTorneo.Id + "/" + _this.infoTorneo.Year + "/" + round + "&s=&p=" + _this.page + "&l=" + _this.perPage + "&token=" + encodeURIComponent(_this.global.token)).subscribe(function (resp) {
                //console.log(resp);
                for (var i = 0; i < resp.length; i++) {
                    /*var aux= new Date(resp[i].HourStart.date);
                    var aux2="";
                    console.log(aux);
                    console.log(aux.toLocaleTimeString("fr-FR"));
                    console.log(aux.toLocaleDateString("fr-FR", options));
                    aux2=aux.toLocaleDateString("fr-FR", options) + " " + aux.toLocaleTimeString("fr-FR");
                    resp[i].HourStart.date=aux2;*/
                    var aux = resp[i].HourStart.date.substring(0, 16);
                    resp[i].HourStart.date = aux;
                    //this.fecha = aux[0];
                    _this.salidas.push(resp[i]);
                    //this.equipos.push(resp[i]);
                    //console.log(resp[i]);
                    //Voy a intentar sacar aqui los CompetitionSquads
                }
                console.log(_this.salidas);
                resolve(_this.salidas);
            });
        });
    };
    ScoresPage.prototype.searchSalidas = function (search, round) {
        var _this = this;
        if (search == undefined) {
            search = "";
        }
        return new Promise(function (resolve) {
            var myGlobal = _this.global;
            var options = { weekday: 'long', timeStyle: 'medium', year: 'numeric', month: 'long', day: 'numeric' };
            _this.http.get(_this.global.urlApiLocal + "/getData.php?e=competitionSquads/" + _this.infoTorneo.Id + "/" + _this.infoTorneo.Year + "/" + round + "&s=" + search + "&p=" + _this.page + "&l=" + _this.perPage + "&token=" + encodeURIComponent(_this.global.token)).subscribe(function (resp) {
                //console.log(resp);
                for (var i = 0; i < resp.length; i++) {
                    /*var aux= new Date(resp[i].HourStart.date);
                    var aux2="";
                    console.log(aux);
                    console.log(aux.toLocaleTimeString("fr-FR"));
                    console.log(aux.toLocaleDateString("fr-FR", options));
                    aux2=aux.toLocaleDateString("fr-FR", options)  + " " + aux.toLocaleTimeString("fr-FR");
                    resp[i].HourStart.date=aux2;*/
                    var aux = resp[i].HourStart.date.substring(0, 16);
                    resp[i].HourStart.date = aux;
                    _this.salidas.push(resp[i]);
                    //this.equipos.push(resp[i]);
                    //console.log(resp[i]);
                    //Voy a intentar sacar aqui los CompetitionSquads
                }
                console.log(_this.salidas);
                resolve(_this.salidas);
            });
            _this.loading.dismiss();
            _this.estaBuscando = false;
        });
    };
    ScoresPage.prototype.openBrowser = function () {
        var target = "_system";
        this.iab.create(this.fb_live_url, target, this.options);
    };
    ScoresPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__ranking_ranking__["a" /* RankingPage */], { slug: 'rankings_men' });
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(ScoresPage_1, { slug: '' });
                break;
            case 5:
                this.openBrowser();
                break;
        }
    }; //Open Menu
    ScoresPage.prototype.openMenuContextual = function () {
        this.actionSheetSvc.present([this.botones]);
        /*let actionSheet = this.actionsheetCtrl.create({
          title: 'Select Round',
          cssClass: 'action-sheets-basic-page',
          buttons: [this.botones]
        });
        actionSheet.present();*/
    }; //OpenMenu
    ScoresPage.prototype.doInfinite = function (infiniteScroll, round) {
        var _this = this;
        this.page = this.page + 1;
        console.log(round);
        if (this.page != 0) {
            setTimeout(function () {
                _this.getSalidas(round).then(function (data) {
                    infiniteScroll.complete();
                });
                console.log('Async operation has ended');
            }, 500);
        }
    };
    ScoresPage = ScoresPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scores',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\scores\scores.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar hideBackButton>\n    \n    <ion-title>{{infoTorneo.Name}}</ion-title>\n   <ion-buttons left>\n        <button ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n    <!--<ion-searchbar (ionInput)="SearchPlayers($event)"></ion-searchbar>-->\n\n</ion-header>\n\n<ion-content padding class="backgroundColor">\n	\n	\n	<ion-segment [(ngModel)]="rondaSwitch">\n    	<ion-segment-button *ngIf="infoTorneo.NbRounds > 0"  (ionSelect)="onSegmentChange(1)" value="ronda1">\n			{{ \'ROUND\' | translate }} 1\n		</ion-segment-button>\n		\n		<ion-segment-button *ngIf="infoTorneo.NbRounds > 1"  (ionSelect)="onSegmentChange(2)" value="ronda2">\n			{{ \'ROUND\' | translate }} 2\n		</ion-segment-button>\n		\n		<ion-segment-button *ngIf="infoTorneo.NbRounds > 2"  (ionSelect)="onSegmentChange(3)" value="ronda3">\n			{{ \'ROUND\' | translate }} 3\n		</ion-segment-button>\n		\n		<ion-segment-button *ngIf="infoTorneo.NbRounds > 3"  (ionSelect)="onSegmentChange(4)" value="ronda4">\n			{{ \'ROUND\' | translate }} 4\n		</ion-segment-button>\n      \n  </ion-segment>\n	\n	\n	<div  [ngSwitch]="rondaSwitch">\n	\n	<div *ngIf="infoTorneo.NbRounds > 0">\n	<div *ngSwitchCase="\'ronda1\'">\n	\n		<ion-searchbar debounce="700" (ionInput)="SearchFlight($event, 1)"></ion-searchbar>\n	\n	    <ion-list *ngFor="let salida of salidas" >\n			\n		    <ion-list-header><h4>{{infoTorneo.NameParcours[salida.NumParcours]}}</h4><ion-note item-end><ion-icon ios="ios-flag-outline" md="ios-flag-outline"></ion-icon> {{ \'HOYO\' | translate }} {{salida.HoleStart}}</ion-note></ion-list-header>\n		\n		    <ion-item *ngFor="let jugador of salida.Registers">\n		      <ion-thumbnail item-start>\n		        <img *ngIf="jugador.Licence.Photo" src="data:image/png;base64,{{jugador.Licence.Photo}}">\n				<ion-icon *ngIf="!jugador.Licence.Photo" name="contact"></ion-icon>\n		      </ion-thumbnail>\n		      <h2>{{jugador.Licence.LastName}}, {{jugador.Licence.FirstName}}</h2>\n		      <p>{{salida.HourStart.date}}</p>\n		      \n		    </ion-item>\n		    \n		    \n	    \n	    </ion-list>\n                \n             <!-- Scroll Infinito -->\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event,1)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n	\n	</div>\n	</div>\n	\n	\n	<div *ngIf="infoTorneo.NbRounds > 1">\n	<div *ngSwitchCase="\'ronda2\'">\n	<ion-searchbar debounce="700" (ionInput)="SearchFlight($event, 2)"></ion-searchbar>\n	    <ion-list *ngFor="let salida of salidas" >\n			\n		    <ion-list-header><h4>{{infoTorneo.NameParcours[salida.NumParcours]}}</h4><ion-note item-end><ion-icon ios="ios-flag-outline" md="ios-flag-outline"></ion-icon> {{ \'HOYO\' | translate }} {{salida.HoleStart}}</ion-note></ion-list-header>\n		\n		    <ion-item *ngFor="let jugador of salida.Registers">\n		      <ion-thumbnail item-start>\n		        <img *ngIf="jugador.Licence.Photo" src="data:image/png;base64,{{jugador.Licence.Photo}}">\n				<ion-icon *ngIf="!jugador.Licence.Photo" name="contact"></ion-icon>\n		      </ion-thumbnail>\n		      <h2>{{jugador.Licence.LastName}}, {{jugador.Licence.FirstName}}</h2>\n		      <p>{{salida.HourStart.date}}</p>\n		      \n		    </ion-item>\n		    \n		    \n	    \n	    </ion-list>\n                \n             <!-- Scroll Infinito -->\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event,2)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n	\n	</div>\n	</div>\n	\n	<div *ngIf="infoTorneo.NbRounds > 2">\n	<div *ngSwitchCase="\'ronda3\'">\n	<ion-searchbar debounce="700" (ionInput)="SearchFlight($event, 3)"></ion-searchbar>\n	    <ion-list *ngFor="let salida of salidas" >\n			\n		    <ion-list-header><h4>{{infoTorneo.NameParcours[salida.NumParcours]}}</h4><ion-note item-end><ion-icon ios="ios-flag-outline" md="ios-flag-outline"></ion-icon> {{ \'HOYO\' | translate }} {{salida.HoleStart}}</ion-note></ion-list-header>\n		\n		    <ion-item *ngFor="let jugador of salida.Registers">\n		      <ion-thumbnail item-start>\n		        <img *ngIf="jugador.Licence.Photo" src="data:image/png;base64,{{jugador.Licence.Photo}}">\n				<ion-icon *ngIf="!jugador.Licence.Photo" name="contact"></ion-icon>\n		      </ion-thumbnail>\n		      <h2>{{jugador.Licence.LastName}}, {{jugador.Licence.FirstName}}</h2>\n		      <p>{{salida.HourStart.date}}</p>\n		      \n		    </ion-item>\n		    \n		    \n	    \n	    </ion-list>\n                \n             <!-- Scroll Infinito -->\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event,3)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n	\n	</div>\n	</div>\n	\n	\n	<div *ngIf="infoTorneo.NbRounds > 3">\n	<div *ngSwitchCase="\'ronda4\'">\n	<ion-searchbar debounce="700" (ionInput)="SearchFlight($event, 4)"></ion-searchbar>\n	    <ion-list *ngFor="let salida of salidas" >\n			\n		    <ion-list-header><h4>{{infoTorneo.NameParcours[salida.NumParcours]}}</h4><ion-note item-end><ion-icon ios="ios-flag-outline" md="ios-flag-outline"></ion-icon> {{ \'HOYO\' | translate }} {{salida.HoleStart}}</ion-note></ion-list-header>\n		\n		    <ion-item *ngFor="let jugador of salida.Registers">\n		      <ion-thumbnail item-start>\n		        <img *ngIf="jugador.Licence.Photo" src="data:image/png;base64,{{jugador.Licence.Photo}}">\n				<ion-icon *ngIf="!jugador.Licence.Photo" name="contact"></ion-icon>\n		      </ion-thumbnail>\n		      <h2>{{jugador.Licence.LastName}}, {{jugador.Licence.FirstName}}</h2>\n		      <p>{{salida.HourStart.date}}</p>\n		      \n		    </ion-item>\n		    \n		    \n	    \n	    </ion-list>\n                \n             <!-- Scroll Infinito -->\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event,4)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n	\n	</div>\n	</div>\n	\n	\n	\n</div> <!-- End segment -->\n	\n\n</ion-content> \n   \n  \n\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\scores\scores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_8__providers_ActionSheetService_ActionSheetService__["a" /* ActionSheetService */]])
    ], ScoresPage);
    return ScoresPage;
    var ScoresPage_1;
}());

//# sourceMappingURL=scores.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScoreCardPage = /** @class */ (function () {
    function ScoreCardPage(viewCtrl, http, global, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rankings = [];
        this.pars = [];
        this.diferencias = [];
        this.totales = [];
        this.primera_mitad = [];
        this.segunda_mitad = [];
        this.hoyos_fake = [];
        this.paresCampo = [];
        this.resultSwitch = "ronda0";
        this.infoPlayer = this.navParams.get("infoPlayer");
        this.infoTorneo = this.navParams.get("infoTorneo");
        console.log(this.infoPlayer);
        //console.log(this.infoPlayer);
        this.playerID = this.infoPlayer.Id;
        if (this.infoPlayer.Pars == null) {
            this.rondas_jugadas = 0;
        }
        else {
            this.rondas_jugadas = this.infoPlayer.Pars.length;
        }
        for (var _i = 0; _i < this.rondas_jugadas; _i++) {
            var mitotal = 0;
            var mitotal2 = 0;
            for (var _j = 0; _j < 18; _j++) {
                mitotal = mitotal + this.infoTorneo.Pars[_i][_j];
                mitotal2 = mitotal2 + this.infoPlayer.Pars[_i][_j];
            }
            this.paresCampo.push(mitotal);
            this.totales.push(mitotal2);
        }
        console.log(this.paresCampo);
        console.log(this.totales);
        //this.getScore(this.playerID);
        for (var _i = 0; _i < 18; _i++) {
            this.hoyos_fake.push("");
        }
    }
    ScoreCardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScoreDetailPage');
    };
    ScoreCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scorecard',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\scorecard\scorecard.html"*/'<ion-header no-border color="backColor">\n    <ion-navbar hideBackButton>\n    <ion-title>Score Card</ion-title>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="viewCtrl.dismiss()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding class="backgroundColor">\n    \n	  \n\n  <ion-list no-lines>\n	  <ion-item class="infoPlayer" no-lines>\n	    <ion-thumbnail item-start>\n	      \n		      	<img *ngIf="infoPlayer.Licence.Photo" src="data:image/png;base64,{{infoPlayer.Licence.Photo}}">\n		      	<ion-icon *ngIf="!infoPlayer.Licence.Photo" name="contact"></ion-icon>\n		      \n	    </ion-thumbnail>\n	    <h2>{{ infoPlayer.Licence.LastName }}, {{ infoPlayer.Licence.FirstName }}<span class="flag">\n		      	<img src="./assets/imgs/flags/{{ infoPlayer.Licence.Nationality }}.png" width="20px">\n		      </span></h2>\n	    <!--<p><span *ngFor="let sc of rank.results.Pars; index as i; first as isFirst"> <span *ngIf="!isFirst">•</span> {{ sc }} ({{rank.diferencia[i]}})  </span></p>-->\n	    <p>TOTAL <strong>{{ infoPlayer.TotalScore }}</strong></p>\n	  </ion-item>\n	</ion-list>\n		\n		\n		<ion-segment [(ngModel)]="resultSwitch">\n		    <ion-segment-button *ngFor="let ronda of infoPlayer.Pars; index as i;" value="ronda{{i}}">\n		      {{ \'RONDA\' | translate }} {{i + 1}}\n		    </ion-segment-button>\n		    \n		  </ion-segment>\n		\n		  \n		  <div  [ngSwitch]="resultSwitch">\n			  <div *ngFor="let ronda of infoPlayer.Pars; index as k;">\n				  \n				  <div *ngIf="rondas_jugadas > k">\n				  \n					  <div class="scorecard"  *ngSwitchCase="\'ronda\' + k">\n					   		\n					   							   		\n					   		\n					   		<ion-list class="">\n					   			<ion-list-header>    \n							    <ion-grid>\n							    	<ion-row>\n									    <ion-col col-2 text-center>\n									      {{ \'HOYO\' | translate }} \n									        \n									    </ion-col>\n									    <ion-col col-5 text-center>\n									       {{ \'PAR\' | translate }} \n								    \n									    </ion-col>\n									    <ion-col col-5 text-center>\n									      {{ \'GOLPES\' | translate }}\n									    </ion-col>\n									  </ion-row>\n							    </ion-grid>\n							  </ion-list-header>\n							  <ion-item *ngFor="let hoyo of ronda; index as z;">    \n							    <ion-grid>\n							    	<ion-row>\n									    <ion-col col-2 text-center>\n									      {{ z+1 }} \n									        \n									    </ion-col>\n									    <ion-col col-5 text-center>\n									       {{ infoTorneo.Pars[k][z] }} \n								    \n									    </ion-col>\n									    <ion-col col-5 text-center *ngIf="(hoyo-infoTorneo.Pars[k][z])==0" class="par">{{hoyo}}</ion-col>\n									    <ion-col col-5 text-center *ngIf="(hoyo-infoTorneo.Pars[k][z])==1" class="bogey">{{hoyo}}</ion-col>\n									    <ion-col col-5 text-center *ngIf="(hoyo-infoTorneo.Pars[k][z])==2" class="doblebogey">{{hoyo}}</ion-col>\n									    <ion-col col-5 text-center *ngIf="(hoyo-infoTorneo.Pars[k][z])>2" class="doblebogeyPlus">{{hoyo}}</ion-col>\n									    <ion-col col-5 text-center *ngIf="(hoyo-infoTorneo.Pars[k][z])==-1" class="birdie">{{hoyo}}</ion-col>\n									    <ion-col col-5 text-center *ngIf="(hoyo-infoTorneo.Pars[k][z])==-2" class="eagles">{{hoyo}}</ion-col>\n									    <ion-col col-5 text-center *ngIf="(hoyo-infoTorneo.Pars[k][z])<-2" class="eaglesPlus">{{hoyo}}</ion-col>\n									  </ion-row>\n							    </ion-grid>\n							  </ion-item>\n							  \n							  <ion-list-header>    \n							    <ion-grid>\n							    	<ion-row>\n									    <ion-col col-2 text-center>\n									      {{ \'TOTAL\' | translate }} \n									        \n									    </ion-col>\n									    <ion-col col-5 text-center>\n									       <h5>{{paresCampo[k]}}</h5>\n								    \n									    </ion-col>\n									    <ion-col col-5 text-center>\n									      <h4>{{totales[k]}}</h4>\n									    </ion-col>\n									  </ion-row>\n							    </ion-grid>\n							  </ion-list-header>\n							  \n							</ion-list>\n					   			   		\n					   		\n					   	\n					  </div>\n				  \n				  </div>\n				  \n				  <div *ngIf="rondas_jugadas >1">\n				  \n					  <div class="teamCard"  padding *ngSwitchCase="ronda1">\n					   		\n					   		\n					   		<p *ngFor="let hoyo of infoPlayer.Pars; index as j;">{{hoyo}} / {{ronda.golpes[j]}}</p>			   		\n					   		\n					   	\n					  </div>\n				  \n				  </div>\n				  \n				  <div *ngIf="rondas_jugadas >2">\n				  \n					  <div class="teamCard"  padding *ngSwitchCase="ronda2">\n					   		\n					   		\n					   		<p *ngFor="let hoyo of ronda.par; index as j;">{{hoyo}} / {{ronda.golpes[j]}}</p>			   		\n					   		\n					   	\n					  </div>\n				  \n				  </div>\n				  \n				  <div *ngIf="rondas_jugadas >3">\n				  \n					  <div class="teamCard"  padding *ngSwitchCase="ronda3">\n					   		\n					   		\n					   		<p *ngFor="let hoyo of ronda.par; index as j;">{{hoyo}} / {{ronda.golpes[j]}}</p>			   		\n					   		\n					   	\n					  </div>\n				  \n				  </div>\n				  \n				  <div *ngIf="rondas_jugadas >4">\n				  \n					  <div class="teamCard"  padding *ngSwitchCase="ronda4">\n					   		\n					   		\n					   		<p *ngFor="let hoyo of ronda.par; index as j;">{{hoyo}} / {{ronda.golpes[j]}}</p>			   		\n					   		\n					   	\n					  </div>\n				  \n				  </div>\n				  \n				  \n			  </div>\n		  </div>\n		  \n		  \n		  \n	<!--	  \n		  <div class="timeline">\n		    <ul>\n			    \n			      <li>\n		        <div class="bullet green"></div>\n		        <div class="time"></div>\n		        \n		        <div class="desc" *ngIf="rondas_jugadas > 0" text-center>\n		          <h4>R1</h4>\n		          <h3 >{{infoPlayer.Score1}}</h3>\n		          \n		        </div>\n		        \n		        <div class="desc" *ngIf="rondas_jugadas > 1" text-center >\n		          <h4>R2</h4>\n		          <h3>{{infoPlayer.Score2}}</h3>\n		        </div>\n		        \n		        <div class="desc" *ngIf="rondas_jugadas > 2" text-center >\n		          <h4>R3</h4>\n		          <h3>{{infoPlayer.Score3}}</h3>\n		        </div>\n		        \n		        <div class="desc" *ngIf="rondas_jugadas > 3" text-center >\n		          <h4>R4</h4>\n		          <h3>{{infoPlayer.Score4}}</h3>\n		        </div>\n		        \n		      </li>\n\n			    \n		      <li *ngFor="let hoyo of hoyos_fake; index as i; first as isFirstHoyo">\n		        <div class="bullet green"></div>\n		        <div class="time" text-center>HOLE {{i + 1}}</div>\n		        <div class="desc" text-center *ngFor="let rondas of infoPlayer.Pars; index as j;">\n		          \n		          <h3 >{{infoPlayer.Pars[j][i]}}</h3>\n		        </div>\n		        \n		      </li>\n		      \n		  		      \n		      <li>\n		        <div class="bullet pink"></div>\n		        <div class="time">T</div>\n		        \n		        <div class="desc" *ngIf="rondas_jugadas > 0" text-center>\n		          <h4>R1</h4>\n		          <h3 >{{infoPlayer.Score1}}</h3>\n		        </div>\n		        \n		        <div class="desc" *ngIf="rondas_jugadas > 1" text-center>\n		          <h4>R2</h4>\n		          <h3 >{{infoPlayer.Score2}}</h3>\n		        </div>\n		        \n		        <div class="desc" *ngIf="rondas_jugadas > 2" text-center>\n		          <h4>R3</h4>\n		          <h3 >{{infoPlayer.Score3}}</h3>\n		        </div>\n		        \n		        <div class="desc" *ngIf="rondas_jugadas > 3" text-center>\n		          <h4>R4</h4>\n		          <h3 >{{infoPlayer.Score4}}</h3>\n		        </div>\n		        \n		      </li>\n		      \n		    </ul>\n		  </div>\n-->\n	\n	\n  \n  </ion-content>\n  '/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\scorecard\scorecard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ScoreCardPage);
    return ScoreCardPage;
}());

//# sourceMappingURL=scorecard.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recover_password_recover_password__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import {EmailValidators} from 'ng2-validators';



//import { UserProvider } from './../../providers/user/user';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, http, global, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitAttempt1 = false;
        this.submitAttempt2 = false;
        this.formLogin = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required)
        });
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        //this.getData(); 
    };
    LoginPage.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.doLogin = function () {
        /*console.log("esto lo hago");
        
          let parameteres = {
              page: 'login',
              usuario: this.formLogin.value.email,
              password: this.formLogin.value.password,
              token: this.global.token
  
          };
          if(this.formLogin.value.email=="" || this.formLogin.value.password==""){
              if(this.formLogin.value.email==""){this.submitAttempt1 = true; }
              if(this.formLogin.value.password==""){this.submitAttempt2 = true;}
          }else{
              this.http.post(this.global.urlApiLocal+"/login.php", parameteres).subscribe((resp) => {
                  let data = resp.json();
                  
                  //console.log(data);
  
                  if(data.status==1){
                      
                      this.global.setPlayerData(data.player[0]);
                      
                      //this.global.user = new User(data.player[0]);
                      
                      
                      
                      //this.muestra_alert("titulo","texto1");
                      this.navCtrl.setRoot(HomePage);
                  }else{
                      if(data.status==0){ //el user existe
                          
                          this.muestra_alert("titulo","Wrong Username");
                      }else{ //nada existe
                          this.submitAttempt2 = true;
                          //this.muestra_alert("titulo","texto3");
                      }
                  }
                  
                  
                  
              });
          }*/
        var _this = this;
        if (this.formLogin.value.email == "" || this.formLogin.value.password == "") {
            if (this.formLogin.value.email == "") {
                this.submitAttempt1 = true;
            }
            if (this.formLogin.value.password == "") {
                this.submitAttempt2 = true;
            }
        }
        else {
            this.myHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
            var formData = new FormData();
            formData.append('login', this.formLogin.value.email);
            formData.append('password', this.formLogin.value.password);
            this.http.post(this.global.url + "/login", formData, this.myHeader).subscribe(function (resp) {
                console.log(resp);
                //this.menuItems = resp.secciones;
                var respuesta = resp.json();
                respuesta = JSON.parse(respuesta);
                //this.token=respuesta.token;
                //resolve(this.token);
                console.log(respuesta.licence);
                _this.global.setPlayerData(respuesta.licence);
                //this.navCtrl.setRoot(MyFlightsPage); 
                _this.navCtrl.pop();
                /* Trabajamos con respuesta y tenemos que:
                
                1. Comprobar si el jugador está en la base de datos de challenges
                2. Si no, hago la consulta del perfil y de sus datos a la AFFG y los almaceno en la BD --> Esto lo hago en otra página
                3. Si si que existe añado al jugador al STORAGE y le envio a la home
                */
                //Comprobación de si el ugador existe en nuestra BD
                /*this.http.get(this.global.urlApiLocal+"/getJugador.php?id="+respuesta.licence.Id).subscribe((resp:any) => {
                    
                    let jugador= resp.json();
                    
                    //this.mychallenges=resp.challenges;
                    console.log(jugador);
                    
                    if(jugador.player.length == 0){ // Es la primera vez que viene, le paso a la otra página y ahi creo su perfil
                        
                        this.navCtrl.setRoot(SignUpCompletePage, {player: respuesta.licence});
                        
                    }else{ //No es la primera vez que entra y por lo tanto hay que mandarle a la Home
                         this.global.setPlayerData(jugador.player[0]);
                        this.navCtrl.setRoot(HomePage);
                    }
                    
                    
                    });*/
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Error: ' + err._body,
                    duration: 3000
                });
                toast.present();
                console.log(err);
            });
        }
    };
    LoginPage.prototype.openPage = function (page) {
        switch (page) {
            case "recover-password":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__recover_password_recover_password__["a" /* RecoverPasswordPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "register":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            default:
                this.navCtrl.setRoot(page.component);
                break;
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\login\login.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n     <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--<ion-header>\n    <ion-navbar>\n        <button ion-button clear (click)="back()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>-->\n\n<ion-content class="login-page">\n\n\n\n    <form [formGroup]="formLogin" novalidate (submit)="doLogin()">\n        <ion-grid fixed>\n            <ion-row>\n                <ion-col col-sm-2 col-md-3 col-lg-4 col-xl-3>\n                </ion-col>\n                <ion-col col-12 col-sm-8 col-md-6 col-lg-4 col-xl-6>\n\n                    <ion-list no-lines>\n\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col text-center>\n\n                                    <div class="logo"><img src="assets/imgs/logo_affg.png" height="50px">\n                                    </div>\n                                    <ion-item>\n                                        <ion-input formControlName="email" type="email" placeholder="{{ \'CHALLENGES.LOGIN.USER\' | translate }}"></ion-input>\n                                    </ion-item>\n                                    <div class="error-msg">\n                                        <p ion-text color="danger" *ngIf="!formLogin.controls.email.valid && submitAttempt1">{{ \'CHALLENGES.ERRORS.USER\' | translate }}</p>\n                                    </div>\n\n                                    <ion-item>\n                                        <ion-input formControlName="password" type="password" placeholder="{{ \'CHALLENGES.LOGIN.PASSWORD\' | translate }}"></ion-input>\n                                    </ion-item>\n                                    <div class="error-msg">\n                                        <p ion-text color="danger" *ngIf="!formLogin.controls.password.valid && submitAttempt2">{{ \'CHALLENGES.ERRORS.PASSWORD\' | translate }}</p>\n                                    </div>\n                                    \n                                </ion-col>\n                            </ion-row>\n\n\n\n                            <ion-row>\n\n                                <ion-col col-12 text-center>\n                                    <button type="submit" block ion-button round style="min-width: 80%" color="primary">\n                                        {{ \'CHALLENGES.LOGIN.LOGIN\' | translate }}\n                                    </button>\n                                </ion-col>\n\n                            </ion-row>\n                            <!--<ion-row>\n\n                                <ion-col col-12 text-center>\n                                	<a (click)="openPage(\'recover\')" >{{ \'CHALLENGES.LOGIN.REMEMBER\' | translate }} <ion-icon name="arrow-forward"></ion-icon></a>\n                                    \n                                </ion-col>\n\n                            </ion-row>-->\n                        </ion-grid>\n\n\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(546);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator_ngx__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage_ngx__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pruebas2_pruebas2__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_scores_scores__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_myflights_myflights__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_score_detail_score_detail__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_static_static__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_one_of_two_one_of_two__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signature_signature__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_match_match__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_matchscores_matchscores__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_noticia_noticia__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_ranking_ranking__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_rankingliga_rankingliga__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_rankingteam_rankingteam__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_scoreslist_scoreslist__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_scorecard_scorecard__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_news_news__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_news_detail_news_detail__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_tournaments_tournaments__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_searchtournaments_searchtournaments__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_tournamentstype_tournamentstype__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_team_team__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_tournament_tournament__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_golfsMap_golfsMap__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_golfMap_golfMap__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_golf_golf__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_player_player__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_player_score_player_score__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_event_event__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_about_about__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_game_game__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_add_score_add_score__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_add_form_add_form__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_splash_screen__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_score_score__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_lineahoyo_lineahoyo__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_favorite_favorite__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_user_user__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_flights_flights__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_ActionSheetService_ActionSheetService__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59_angular2_signaturepad__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_recover_password_recover_password__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_register_register__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_profile_profile__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_challenges_challenges__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_challenge_challenge__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_alerts_alerts__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_myteams_myteams__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_myteam_myteam__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_dashboard_dashboard__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_newteam_newteam__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_intro_challenges_intro_challenges__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_newchallenge_newchallenge__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_newchallengestep2_newchallengestep2__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_newchallengestep3_newchallengestep3__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_newchallengestep4_newchallengestep4__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_newchallengestep5_newchallengestep5__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_signupcomplete_signupcomplete__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_sendcardcompleted_sendcardcompleted__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__ionic_native_geolocation__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__ionic_native_location_accuracy__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__pipes_moment_moment__ = __webpack_require__(888);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















/***** Componentes *****/










































/**** Nuevas Páginas Version 0.0.5*/




















/***** Pipes *****/

function setTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pruebas2_pruebas2__["a" /* Pruebas2Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_scores_scores__["a" /* ScoresPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_myflights_myflights__["a" /* MyFlightsPage */],
                __WEBPACK_IMPORTED_MODULE_52__components_score_score__["a" /* ScoreComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_lineahoyo_lineahoyo__["a" /* LineahoyoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_matchscores_matchscores__["a" /* MatchscoresPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_noticia_noticia__["a" /* NoticiaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_ranking_ranking__["a" /* RankingPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_rankingliga_rankingliga__["a" /* RankingLigaPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_rankingteam_rankingteam__["a" /* RankingTeamPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_scoreslist_scoreslist__["a" /* ScoreslistPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_tournaments_tournaments__["a" /* TournamentsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_news_detail_news_detail__["a" /* NewsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_team_team__["a" /* TeamPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_golfs_golfs__["a" /* GolfsPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_golfsMap_golfsMap__["a" /* GolfsMapPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_golf_golf__["a" /* GolfPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_static_static__["a" /* StaticPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_add_score_add_score__["a" /* AddScorePage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_add_form_add_form__["a" /* AddFormPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_score_detail_score_detail__["a" /* ScoreDetailPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_player_score_player_score__["a" /* PlayerScorePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tournamentstype_tournamentstype__["a" /* TournamentsTypePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_tournament_tournament__["a" /* TournamentPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_golfMap_golfMap__["a" /* GolfMapPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_searchtournaments_searchtournaments__["a" /* SearchTournamentsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_scorecard_scorecard__["a" /* ScoreCardPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signature_signature__["a" /* SignaturePage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_recover_password_recover_password__["a" /* RecoverPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_challenges_challenges__["a" /* ChallengesPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_challenge_challenge__["a" /* ChallengePage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_alerts_alerts__["a" /* AlertsPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_myteams_myteams__["a" /* MyTeamsPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_myteam_myteam__["a" /* MyTeamPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_newteam_newteam__["a" /* NewTeamPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_intro_challenges_intro_challenges__["a" /* IntroChallengesPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_newchallenge_newchallenge__["a" /* NewChallengePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_newchallengestep2_newchallengestep2__["a" /* NewChallengeStep2Page */],
                __WEBPACK_IMPORTED_MODULE_73__pages_newchallengestep3_newchallengestep3__["a" /* NewChallengeStep3Page */],
                __WEBPACK_IMPORTED_MODULE_74__pages_newchallengestep4_newchallengestep4__["a" /* NewChallengeStep4Page */],
                __WEBPACK_IMPORTED_MODULE_75__pages_newchallengestep5_newchallengestep5__["a" /* NewChallengeStep5Page */],
                __WEBPACK_IMPORTED_MODULE_18__components_one_of_two_one_of_two__["a" /* OneOfTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_76__pages_signupcomplete_signupcomplete__["a" /* SignUpCompletePage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_sendcardcompleted_sendcardcompleted__["a" /* SendCardCompletedPage */],
                __WEBPACK_IMPORTED_MODULE_80__pipes_moment_moment__["a" /* MomentPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_59_angular2_signaturepad__["a" /* SignaturePadModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_57__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (setTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pruebas2_pruebas2__["a" /* Pruebas2Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_scores_scores__["a" /* ScoresPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_myflights_myflights__["a" /* MyFlightsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_matchscores_matchscores__["a" /* MatchscoresPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_noticia_noticia__["a" /* NoticiaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_ranking_ranking__["a" /* RankingPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_rankingteam_rankingteam__["a" /* RankingTeamPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_scoreslist_scoreslist__["a" /* ScoreslistPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_news_detail_news_detail__["a" /* NewsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_team_team__["a" /* TeamPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_golfs_golfs__["a" /* GolfsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_rankingliga_rankingliga__["a" /* RankingLigaPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_golf_golf__["a" /* GolfPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_golfsMap_golfsMap__["a" /* GolfsMapPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_golfMap_golfMap__["a" /* GolfMapPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_searchtournaments_searchtournaments__["a" /* SearchTournamentsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_tournaments_tournaments__["a" /* TournamentsPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_static_static__["a" /* StaticPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_add_score_add_score__["a" /* AddScorePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tournamentstype_tournamentstype__["a" /* TournamentsTypePage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_add_form_add_form__["a" /* AddFormPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_score_detail_score_detail__["a" /* ScoreDetailPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_player_score_player_score__["a" /* PlayerScorePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_tournament_tournament__["a" /* TournamentPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_scorecard_scorecard__["a" /* ScoreCardPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signature_signature__["a" /* SignaturePage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_recover_password_recover_password__["a" /* RecoverPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_challenges_challenges__["a" /* ChallengesPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_challenge_challenge__["a" /* ChallengePage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_alerts_alerts__["a" /* AlertsPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_myteams_myteams__["a" /* MyTeamsPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_myteam_myteam__["a" /* MyTeamPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_newteam_newteam__["a" /* NewTeamPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_intro_challenges_intro_challenges__["a" /* IntroChallengesPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_newchallenge_newchallenge__["a" /* NewChallengePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_newchallengestep2_newchallengestep2__["a" /* NewChallengeStep2Page */],
                __WEBPACK_IMPORTED_MODULE_73__pages_newchallengestep3_newchallengestep3__["a" /* NewChallengeStep3Page */],
                __WEBPACK_IMPORTED_MODULE_74__pages_newchallengestep4_newchallengestep4__["a" /* NewChallengeStep4Page */],
                __WEBPACK_IMPORTED_MODULE_75__pages_newchallengestep5_newchallengestep5__["a" /* NewChallengeStep5Page */],
                __WEBPACK_IMPORTED_MODULE_76__pages_signupcomplete_signupcomplete__["a" /* SignUpCompletePage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_sendcardcompleted_sendcardcompleted__["a" /* SendCardCompletedPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_50__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_56__providers_flights_flights__["a" /* FlightsProvider */],
                __WEBPACK_IMPORTED_MODULE_54__providers_favorite_favorite__["a" /* FavoriteProvider */],
                __WEBPACK_IMPORTED_MODULE_55__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_58__providers_ActionSheetService_ActionSheetService__["a" /* ActionSheetService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator_ngx__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage_ngx__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_78__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_79__ionic_native_location_accuracy__["a" /* LocationAccuracy */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_score_player_score__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlayerPage = /** @class */ (function () {
    function PlayerPage(http, viewCtrl, navCtrl, navParams, global) {
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.resultados = [];
        this.datos_jugador = [];
        this.player = "matches";
        console.log(this.navParams);
        this.playerId = this.navParams.data.player;
        this.getPlayerData();
    }
    /*getPlayerScore(id){
      this.http.get("http://admin.fgranks.com/api/player/read_one.php?id_torneo="+this.global.id_torneo+"&id="+id)
        .subscribe((res: any) => {
          console.log(res);
          this.profile.scores = res.resultados;
      }, error => {
        console.log(error);
      })
    }*/
    PlayerPage.prototype.getPlayerData = function () {
        var _this = this;
        this.http.get("http://localhost/AFFGApp/API/getPlayer.php?id=" + this.playerId + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //console.log("partjghj");
            _this.datos_jugador = JSON.parse(resp);
            //this.resultados = res.records;   
            //this.datos_jugador=this.resultados[0];
            console.log("esto si que se hace");
            console.log(_this.datos_jugador);
        }, function (error) {
            console.log(error);
        });
    };
    PlayerPage.prototype.getPlayerScore = function (id) {
        var _this = this;
        this.http.get("http://localhost/AFFGApp/API/getClub.php?id=" + id + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //console.log("partjghj");
            _this.datos_jugador = JSON.parse(resp);
            //this.resultados = res.records;   
            //this.datos_jugador=this.resultados[0];
            console.log(_this.datos_jugador);
        }, function (error) {
            //console.log(error);
        });
    };
    PlayerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayerPage');
    };
    PlayerPage.prototype.playerScore = function (player, score) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__player_score_player_score__["a" /* PlayerScorePage */], { player: player, index: score });
    };
    PlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-player',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\player\player.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar hideBackButton>\n    <ion-title><img src="assets/imgs/foot.png" height="40px" alt=""></ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="backgroundColor">\n\n	<ion-grid text-center>\n	  <ion-row>\n	    <ion-col col-3><ion-avatar *ngIf="datos_jugador.foto_jugador!=\'\'" item-start>\n			<img  src="{{ datos_jugador.foto_jugador }}" height="60px;">\n			\n		</ion-avatar>\n		<ion-avatar *ngIf="datos_jugador.foto_jugador==\'\'" item-start>\n			<img src="assets/imgs/avatar.png" height="60px;">\n			\n		</ion-avatar></ion-col>\n	    <ion-col col-9><p text-left><h4>{{ datos_jugador.nombre_jugador }} {{ datos_jugador.apellidos_jugador }}</h4>{{ datos_jugador.equipo_jugador }}</ion-col>\n	  </ion-row>\n	</ion-grid>\n\n	<div padding-top>\n		<ion-segment [(ngModel)]="player">\n		    <ion-segment-button value="info">\n		      Stats\n		    </ion-segment-button>\n		    <ion-segment-button value="matches">\n		      Matches\n		    </ion-segment-button>\n		</ion-segment>\n\n		<div [ngSwitch]="player">\n\n		  <div *ngSwitchCase="\'info\'" padding-top>\n		    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit taciti velit, auctor dui dictum cubilia fermentum sagittis ullamcorper phasellus, nulla cum cras potenti netus rutrum primis in. Purus sapien dictumst commodo sociosqu sagittis turpis accumsan, cursus semper faucibus phasellus himenaeos donec viverra ultrices, tristique auctor odio maecenas nulla varius. Malesuada a eu nulla etiam lobortis class vulputate risus consequat, massa lacus ut habitasse tellus gravida sodales libero, mollis fusce facilisi vel quis ac non purus.</p>\n\n			<p>Nascetur ligula sapien euismod aliquet pulvinar magnis convallis pellentesque ultrices dictum, imperdiet metus ad erat cras tincidunt varius risus nibh, mattis at fusce lacus turpis mi ridiculus luctus magna. Sed bibendum mi dictumst proin lobortis facilisis curabitur quam, ligula mus donec euismod faucibus porttitor morbi nascetur neque.</p>\n			<ion-item>\n				<p>Matches played: 3</p>\n				<p>Matches rally: W-L-W</p>\n			</ion-item>\n		  </div>\n\n		    <ion-grid text-center *ngSwitchCase="\'matches\'">\n			 \n		    	<!--<div class="resultBox" margin-top *ngFor="let item of profile?.scores, let i = index">\n			      <ion-grid>\n			        \n			        <ion-row text-center padding-top align-items-center>\n			          <ion-col col-4>\n			            <div class="circle mCenter"></div>\n			          </ion-col>\n			          <ion-col col-4>\n			            <h4 ion-text color="light">{{ item }}</h4>\n			          </ion-col>\n			          \n			        </ion-row>\n			        <ion-row text-center>\n			          <ion-col col-4 ion-text color="light">{{ profile?.nombre }}</ion-col>\n			          \n			        </ion-row>\n			        \n			        <ion-row text-left class="follow" (click)="playerScore(profile,i)">\n			          <ion-col col-6 ion-text color="light">SEE RESULTS</ion-col>\n			          <ion-col col-6 ion-text color="light" text-right><ion-icon name="ios-arrow-forward"></ion-icon></ion-col>\n			        </ion-row>\n			      </ion-grid>\n			    </div>-->\n			    \n			    \n			     <div class="resultBox" *ngFor="let p of resultados">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3 ion-text color="light"><span class="estado">{{ p.estado_flight }}</span></ion-col>\n      <ion-col col-6 ion-text text-center><span class="numero_ronda">Round {{ p.numero_ronda }}</span></ion-col>\n      <ion-col col-3 ion-text  color="light" text-right>&nbsp;</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-3 ion-text color="light">&nbsp;</ion-col>\n      <ion-col col-6 ion-text text-center color="light">{{ p.date }}</ion-col>\n      <ion-col col-3 ion-text color="light" text-right>&nbsp;</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 ion-text text-center color="light"><strong>{{ p.nombre_campo }}</strong></ion-col>\n    </ion-row>\n    <ion-row text-center padding-top>\n      <ion-col col-3>\n        <ion-avatar *ngIf="p.foto_jugador!=\'\'" item-start>\n			<img  src="{{ p.foto_jugador }}" height="60px;">\n			\n		</ion-avatar>\n		<ion-avatar *ngIf="p.foto_jugador==\'\'" item-start>\n			<img src="assets/imgs/avatar.png" height="60px;">\n			\n		</ion-avatar>\n		\n		\n      </ion-col>\n      <ion-col col-6 ion-text text-left color="light">\n        <h4>{{ p.nombre_jugador }} {{ p.apellidos_jugador }}</h4>\n        <!--<p>{{ p.equipo_jugador }}</p>-->\n      </ion-col>\n      <ion-col col-3 text-right>\n        <span class="score">{{ p.score }}</span>\n      </ion-col>\n      <!--<ion-col col-4>\n        <h4 ion-text color="light">34 - 32</h4>\n      </ion-col>\n      <ion-col col-4>\n        <div class="circle mCenter"></div>\n      </ion-col>-->\n    </ion-row>\n   \n    <ion-row text-left class="linearriba">\n    <ion-col col-12 ion-text><ion-badge class="badge-results" color="#ff6600" *ngFor="let item of p.resultados">{{item}}</ion-badge></ion-col>\n  </ion-row>\n \n  </ion-grid>\n</div>\n\n			    \n\n			</ion-grid>\n\n		</div>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\player\player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */]])
    ], PlayerPage);
    return PlayerPage;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var STORAGE_KEY = 'favoritePlayers';
var FavoriteProvider = /** @class */ (function () {
    function FavoriteProvider(storage) {
        this.storage = storage;
    }
    FavoriteProvider.prototype.isFavorite = function (itemId) {
        return this.getAllFavoritePlayers().then(function (result) {
            var comparacion = result && result.indexOf(itemId) !== -1;
            //console.log(comparacion);
            return comparacion;
        });
    };
    FavoriteProvider.prototype.favoritePlayer = function (itemId) {
        var _this = this;
        return this.getAllFavoritePlayers().then(function (result) {
            if (result) {
                result.push(itemId);
                return _this.storage.set(STORAGE_KEY, result);
            }
            else {
                return _this.storage.set(STORAGE_KEY, [itemId]);
            }
        });
    };
    FavoriteProvider.prototype.unfavoritePlayer = function (itemId) {
        var _this = this;
        return this.getAllFavoritePlayers().then(function (result) {
            if (result) {
                var index = result.indexOf(itemId);
                result.splice(index, 1);
                return _this.storage.set(STORAGE_KEY, result);
            }
        });
    };
    FavoriteProvider.prototype.getAllFavoritePlayers = function () {
        return this.storage.get(STORAGE_KEY);
    };
    FavoriteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], FavoriteProvider);
    return FavoriteProvider;
}());

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_scores_scores__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_myflights_myflights__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ranking_ranking__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_rankingliga_rankingliga__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_rankingteam_rankingteam__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_news_news__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tournaments_tournaments__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_event_event__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_about__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_static_static__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_score_add_score__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_user_user__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_challenges_challenges__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_alerts_alerts__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_myteams_myteams__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_dashboard_dashboard__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_newteam_newteam__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_intro_challenges_intro_challenges__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























/***** Nevas páginas, hay que mirar cual se queda y cual no ****/







var MyApp = /** @class */ (function () {
    function MyApp(global, user, http, platform, statusBar, splashScreen, iab, translate) {
        var _this = this;
        this.global = global;
        this.user = user;
        this.http = http;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.iab = iab;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.showLevel1 = null;
        this.showLevel2 = null;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        translate.setDefaultLang(this.global.language);
        //this.startApp();
        /*while(this.global.token==undefined){
            
            console.log( "no estamos listos, esto debe ser un cargando");
            
        }*/
        this.global.getMenu();
        this.global.getAPIToken().then(function (data) {
            _this.global.updatePlayerData();
            _this.initializeApp();
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */] },
            //{ title: 'List', component: ListPage },
            { title: 'Live Scores', component: __WEBPACK_IMPORTED_MODULE_6__pages_scores_scores__["a" /* ScoresPage */] },
            { title: 'News', component: __WEBPACK_IMPORTED_MODULE_12__pages_news_news__["a" /* NewsPage */] },
            { title: 'Teams', component: __WEBPACK_IMPORTED_MODULE_13__pages_teams_teams__["a" /* TeamsPage */] },
            //{ title: 'MatchPage', component: MatchPage },
            //{ title: 'MatchscoresPage', component: MatchscoresPage },
            //{ title: 'NoticiaPage', component: NoticiaPage },
            { title: 'Rankings', component: __WEBPACK_IMPORTED_MODULE_8__pages_ranking_ranking__["a" /* RankingPage */] },
            { title: 'The Tournament', component: __WEBPACK_IMPORTED_MODULE_15__pages_event_event__["a" /* EventPage */] },
            { title: 'About FootGolf', component: __WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */] }
            //{ title: 'ScoreslistPage', component: ScoreslistPage },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        //this.global.getClubs();
        //this.global.getNoticias();
        //this.global.getVideos();
        //this.global.getTournamentsTypes();
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.global.platform.is('cordova')) {
                var notificationOpenedCallback = function (jsonData) {
                    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
                };
                console.log("Antes de Inicializar");
                window["plugins"].OneSignal
                    .startInit("4960e653-451f-404c-8e4f-13897281403f", "588268016072")
                    .handleNotificationOpened(notificationOpenedCallback)
                    .endInit();
                console.log("Después de inicializar");
            }
        });
    };
    MyApp.prototype.openBrowser = function (url) {
        var target = "_system";
        this.iab.create(url, target, this.options);
    };
    MyApp.prototype.changeLanguage = function (lang) {
        this.translate.use(lang);
    };
    MyApp.prototype.closeTournament = function () {
        this.global.setTournamentId(-1);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_tournaments_tournaments__["a" /* TournamentsPage */]);
    };
    /***** LoGIN ******/
    MyApp.prototype.logout = function () {
        this.global.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.global.events.subscribe('user:login', function () {
            //this.global.menu.enable(true);
        });
        this.global.events.subscribe('user:logout', function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]).then(function () {
                //this.global.menu.enable(false);
                _this.global.user = null;
            });
        });
        /*this.globalProvider.events.subscribe('app:start', () => {
            this.globalProvider.menu.enable(false);
            if (this.globalProvider.user) {
                this.globalProvider.menu.enable(true);
                //                this.nav.setRoot(OperationsPage);
                this.nav.setRoot(LandingPage);
            } else {
                this.nav.setRoot(LandingPage);
            }
            this.splashScreen.hide();
        });*/
    };
    /******** END AUTHENTICATION *****/
    MyApp.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    ;
    MyApp.prototype.isGroupShown = function (group) {
        return group.show;
    };
    ;
    MyApp.prototype.openPage = function (page, slug, url) {
        console.log(page);
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
        switch (page) {
            case "home":
                //this.nav.setRoot(TabsPage,{position:0});
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
                break;
            case "News":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */], { position: 1 });
                break;
            case "teams":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_teams_teams__["a" /* TeamsPage */]);
                break;
            case "Live Scores":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */], { position: 2 });
                break;
            case "rankingliga":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_rankingliga_rankingliga__["a" /* RankingLigaPage */], { idLiga: slug });
                break;
            case "rankings":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_ranking_ranking__["a" /* RankingPage */], { slug: slug });
                break;
            case "rankings_team":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_rankingteam_rankingteam__["a" /* RankingTeamPage */], { slug: slug });
                break;
            case "match_list":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_scores_scores__["a" /* ScoresPage */]);
                break;
            case "static":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_static_static__["a" /* StaticPage */], { id: url });
                break;
            case "external":
                console.log(url);
                this.openBrowser(url);
                break;
            case "add_score":
                console.log("add score");
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_add_score_add_score__["a" /* AddScorePage */]);
                break;
            case "results":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_scores_scores__["a" /* ScoresPage */], { slug: slug });
                console.log("results");
                console.log(slug);
                break;
            case "myflights":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_myflights_myflights__["a" /* MyFlightsPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "login":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "challenges":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_25__pages_challenges_challenges__["a" /* ChallengesPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "profile":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__["a" /* ProfilePage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "alerts":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_26__pages_alerts_alerts__["a" /* AlertsPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "myteams":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_27__pages_myteams_myteams__["a" /* MyTeamsPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "dashboard":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_28__pages_dashboard_dashboard__["a" /* DashboardPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "newteam":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_29__pages_newteam_newteam__["a" /* NewTeamPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "intro-challenges":
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_30__pages_intro_challenges_intro_challenges__["a" /* IntroChallengesPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            default:
                this.nav.setRoot(page.component);
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\app\app.html"*/'<ion-menu [content]="content" class="leftMenu">\n  \n  <ion-content  class="menuBackground">\n\n            \n            \n            <div padding>\n	                <ion-title><img src="assets/imgs/logo_affg.png" width="250px" class="logo" alt=""></ion-title>\n\n            </div>\n	            \n            \n             \n             \n          <ion-list margin-top>\n          \n          <ion-item class="item-stable" color="light" (click)="openPage(\'home\')" menuClose>\n				<ion-label class="menu_item" >Home</ion-label>\n			</ion-item>\n          \n	        <div *ngFor="let p of global.menuItems">\n		        <div *ngIf="p.titulo!=\'BOTTOM MENU\'">\n	          <ion-item class="item-stable" color="light"\n	                    (click)="toggleGroup(p)"\n	                    [ngClass]="{active: isGroupShown(p)}">{{ p.titulo }}\n	                    <ion-icon *ngIf="isGroupShown(p)" name=\'ios-arrow-up\' item-end color="light"></ion-icon>\n	                    <ion-icon *ngIf="!isGroupShown(p)" name=\'ios-arrow-down\' item-end color="light"></ion-icon>\n	            \n	          </ion-item>\n	          <div *ngIf="isGroupShown(p)">\n	          <ion-item class="item-accordion"\n	                    *ngFor="let items of p.items"\n	                     (click)="openPage(items.plantilla,items.id, items.slug)" menuClose>\n<ion-label class="menu_item" >{{ items.titulo }}</ion-label><!--<ion-icon name=\'ios-arrow-forward\' item-end color="light"></ion-icon>-->	          </ion-item>\n	          </div>\n	          </div>\n	        </div>\n	        \n	        <ion-item class="item-stable" color="light" (click)="openPage(\'myflights\')" menuClose>\n				<ion-label class="menu_item" >My Flights</ion-label>\n			</ion-item>\n			\n			<!--<ion-item class="item-stable" color="light" (click)="openPage(\'login\')" menuClose>\n				<ion-label class="menu_item" >Login</ion-label>\n			</ion-item>-->\n			\n			<!-- Esta es la parte de los challenges, habrá que ver si se quita -->\n			<!--<ion-item class="item-stable" color="light" (click)="openPage(\'profile\')" menuClose>\n				<ion-label class="menu_item" >Profile</ion-label>\n			</ion-item>-->\n			<!--<ion-item class="item-stable" color="light" (click)="openPage(\'challenges\')" menuClose>\n				<ion-label class="menu_item" >Challenges</ion-label>\n			</ion-item>-->\n			<!--<ion-item class="item-stable" color="light" (click)="openPage(\'alerts\')" menuClose>\n				<ion-label class="menu_item" >Alerts</ion-label>\n				<ion-badge item-end color="warning">55</ion-badge>\n			</ion-item>-->\n			<!--<ion-item class="item-stable" color="light" (click)="openPage(\'myteams\')" menuClose>\n				<ion-label class="menu_item" >My Teams</ion-label>\n			</ion-item>\n			<ion-item class="item-stable" color="light" (click)="openPage(\'dashboard\')" menuClose>\n				<ion-label class="menu_item" >Dashboard</ion-label>\n			</ion-item>\n			<ion-item class="item-stable" color="light" (click)="openPage(\'newteam\')" menuClose>\n				<ion-label class="menu_item" >New Team</ion-label>\n			</ion-item>\n			<ion-item class="item-stable" color="light" (click)="openPage(\'intro-challenges\')" menuClose>\n				<ion-label class="menu_item" >Intro Challenges</ion-label>\n			</ion-item>-->\n			\n	        \n	      </ion-list>   \n	      \n	      \n	      \n	      \n        <!--     <button margin-top class="menuButton" ion-button color="menuButton" menuClose (click)="changeLanguage(\'en\')" round block>ingles</button>\n            \n    \n    <button margin-top class="menuButton" ion-button color="menuButton" menuClose (click)="closeTournament()" round block>Salir del Torneo</button>\n    <button margin-top class="menuButton" ion-button color="menuButton" menuClose (click)="openPage(\'static\',\'about-app\')" round block>about the app</button>-->\n    <p ion-text color="light" text-center>v 0.0.7</p>\n  </ion-content>\n\n  <ion-footer text-center>\n        <button ion-button round color="white" menuClose="leftMenu" (click)="logout()" style="min-width: 80%">\n            <ion-icon item-left name="power"></ion-icon>&nbsp;Log Out\n        </button>\n\n\n    </ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_20__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_21__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(fields) {
        if (fields) {
            this.name = fields.FirstName;
            this.id = 1;
            this.surname = fields.LastName;
            this.email = fields.Mail;
            this.city = fields.Locality;
            this.username = fields.username;
            this.points = 0;
            this.LicenceId = fields.Id;
            this.Photo = fields.Photo;
        }
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__(593);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/***** Modelos ******/

var GlobalProvider = /** @class */ (function () {
    /*public dataUser["name"]:any;
    public dataUser["surname"]:any;
    public dataUser["id"]:any;
    public dataUser["email"]:any;
    public dataUser["city"]:any;
    public dataUser["photo"]:any;
    public dataUser["points"]:any;
    public dataUser["username"]:any;*/
    function GlobalProvider(http, platform, domSanitizer, storage, events) {
        this.http = http;
        this.platform = platform;
        this.domSanitizer = domSanitizer;
        this.storage = storage;
        this.events = events;
        this.noticias = [];
        this.season = "2020";
        this.url = "https://www.footgolf-france.fr/api";
        //this.id_torneo;
        this.torneo_naciones = true;
        this.usuarioLogeado = false;
        this.tipo_torneo = 1; // Footgolf
        this.url_assets = "https://fgranks.com/fifg/assets/img/app/torneos/";
        //this.urlApiLocal="http://localhost/AFFGApp/API";
        //this.urlApiLocal="https://admin.fgranks.com/apiaffg";
        this.urlApiLocal = "https://affg.aklame.com";
        this.language = 'fr';
        this.locale = 'fr_FR';
        this.anyo = new Date().getFullYear();
    }
    GlobalProvider.prototype.logout = function () {
        //this.alerts = 0;
        this.storage.remove('DATAUSERAFFG');
        this.user = null;
        this.events.publish('user:logout');
        //this.nav.setRoot(LandingPage)
        /*this.api.get(`removeDevice/${this.device}`, null, null, this.user.api_token).subscribe((resp) => {
        }, (message) => {
        });
        //   this._user = null; // provoca un error por el ng-if del menú y volver a la página principal*/
        //this.events.publish('user:logout');
    };
    ;
    GlobalProvider.prototype.setTournamentId = function (id) {
        this.id_torneo = id;
        this.getMenu();
        //Saco el numero de rondas
        this.getNumerRounds();
    };
    GlobalProvider.prototype.setPlayerData = function (data) {
        /*return new Promise(resolve => {
        
        this.usuarioLogeado=true;
        
        let fila = {
              name: '',
              id: '',
              surname: '',
              username: '',
              email: '',
              city: '',
              photo: '',
              points: 0
  
          };
        
        fila.name=data.name;
        fila.surname=data.surname;
        fila.id=data.id;
        fila.username=data.username;
        fila.email=data.email;
        fila.city=data.city;
        fila.photo=data.photo;
        fila.points=data.points;
        
        
        this.idUser=data.id;
        
        console.log(data.id);
        
        });*/
        /*this.nativeStorage.setItem('playerData', {property: 'value', anotherProperty: 'anotherValue'})
            .then(
              () => console.log('Player Stored!'),
              error => console.error('Error storing item', error)
            );*/
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */](data);
        this.storage.set('DATAUSERAFFG', this.user);
        this.events.publish('user:login');
    };
    GlobalProvider.prototype.getPlayerData = function () {
        return this.user;
    };
    GlobalProvider.prototype.userLogged = function () {
        var _this = this;
        var logueado = false;
        this.storage.forEach(function (value, key) {
            switch (key) {
                case 'DATAUSERAFFG':
                    if (value) {
                        logueado = true;
                        //this.user=value;
                        console.log(_this.user);
                    }
                    else {
                        logueado = false;
                    }
                    break;
            }
        }).then(function () {
            return logueado;
        });
    };
    GlobalProvider.prototype.updatePlayerData = function () {
        /*  let data;
          //console.log("Me llaman y devuelvo:" + this.idUser);
           this.nativeStorage.getItem('playerData').then(
            data =>  console.log(data),
            error => console.error(error)
          );
          
          return data;*/
        var _this = this;
        //
        this.storage.forEach(function (value, key) {
            switch (key) {
                case 'DATAUSERAFFG':
                    console.log(value);
                    if (value) {
                        //let user: User = new User();
                        _this.user = value;
                        console.log(_this.user);
                    }
                    break;
            }
        }).then(function () {
            console.log(_this.user);
            console.log("usuario cargado ok");
        });
    };
    /*loggedIn() {
          this.storage.set(this.appConfig.PREFIX_STORAGE + 'api_token', this.user.api_token);
          this.events.publish('user:login');
      }
  
      logout(): void {
          this.storage.remove(this.appConfig.PREFIX_STORAGE + 'api_token');
          this.events.publish('user:logout');
      };*/
    GlobalProvider.prototype.getMenuItems = function () {
        return this.menuItems;
    };
    GlobalProvider.prototype.getMenu = function () {
        var _this = this;
        this.http.get(this.urlApiLocal + "/getMenu.php").subscribe(function (resp) {
            //console.log(resp.secciones);
            _this.menuItems = resp.secciones;
            _this.season = resp.season;
            console.log(_this.season);
        });
    }; // GetMenu
    GlobalProvider.prototype.getCommonData = function () {
        /**** MENU ****/
        var _this = this;
        this.http.get(this.urlApiLocal + "/getMenu.php").subscribe(function (resp) {
            //console.log(resp.secciones);
            _this.menuItems = resp.secciones;
        });
    }; // GetMenu
    GlobalProvider.prototype.getTournamentsTypes = function () {
        var _this = this;
        this.http.get(this.urlApiLocal + "/getTiposCompeticiones.php?file=true&token=" + encodeURIComponent(this.token)).subscribe(function (resp) {
            _this.tournamentTypes = resp;
            //console.log(this.tournaments);
        });
    };
    GlobalProvider.prototype.getVideos = function () {
        var _this = this;
        //SOLO LAS DE PORTADA  
        this.http.get(this.urlApiLocal + "/getNoticias.php?id=10&file=true&locale=" + encodeURIComponent(this.locale) + "&token=" + encodeURIComponent(this.token)).subscribe(function (resp) {
            //console.log(resp);
            _this.videos = resp;
            var i = 0;
            for (var _i = 0, _a = _this.videos; _i < _a.length; _i++) {
                var entry = _a[_i];
                var StrippedString = _this.videos[i].Summary.replace(/(<([^>]+)>)/ig, "");
                //console.log(StrippedString);
                _this.videos[i].Summary = _this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + StrippedString);
                i++;
            }
            //console.log(this.videos);
        });
    };
    GlobalProvider.prototype.getAPIToken = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var bodyParam = new FormData();
            bodyParam.append('login', 'admin_api');
            bodyParam.append('password', 'PexlybAy');
            // bodyParam.append('I like it', 'text'); // This doesn't work either
            //this.textOptions = new RequestOptions({ headers: this.textHeaders});
            var login = "admin_api";
            var pass = "PexlybAy";
            /*
            let resultObjt = {
              'login':login,
              'password':pass
            }*/
            _this.myHeader = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
            var formData = new FormData();
            formData.append('login', login);
            formData.append('password', pass);
            _this.http.post(_this.url + "/login", formData, _this.myHeader).subscribe(function (resp) {
                //console.log(resp);
                //this.menuItems = resp.secciones;
                var respuesta = JSON.parse(resp);
                _this.token = respuesta.token;
                resolve(_this.token);
                console.log(_this.token);
            }, function (err) {
                console.log(err);
            });
        });
    }; // GetAPIToken
    GlobalProvider.prototype.getNumerRounds = function () {
        var _this = this;
        var url_api = this.url + "/salidas/read_number_rounds.php?id_torneo=" + this.id_torneo;
        this.http.get(url_api)
            .subscribe(function (res) {
            //this.scores1 = round.filter(round => round.numero_ronda == "1");
            _this.rondas = res.rondas;
            //this.rankingArray = res.records;
            console.log(_this.rondas);
        }, function (error) {
            console.log(error);
        });
    };
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__golfs_golfs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tournament_tournament__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__searchtournaments_searchtournaments__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tournamentstype_tournamentstype__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { TeamPage } from '../team/team';

var TournamentsPage = /** @class */ (function () {
    function TournamentsPage(global, http, navCtrl, viewCtrl, navParams, iab) {
        this.global = global;
        this.http = http;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.page = 1;
        this.perPage = 15;
        this.tournaments = [];
        this.tournamentsClosed = [];
        this.tournamentSwitch = "open";
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        //this.pushPage = TeamPage;
        this.tournamentType = this.navParams.data.type;
        console.log(this.tournamentType);
    }
    TournamentsPage.prototype.ionViewWillEnter = function () {
        this.rankings = true;
        this.getTournaments();
        this.getTournamentsClosed();
    };
    TournamentsPage.prototype.openTournament = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tournament_tournament__["a" /* TournamentPage */], { info: id });
    };
    TournamentsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__searchtournaments_searchtournaments__["a" /* SearchTournamentsPage */], { type: this.tournamentType });
    };
    TournamentsPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tournamentstype_tournamentstype__["a" /* TournamentsTypePage */]);
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__golfs_golfs__["a" /* GolfsPage */]);
                break;
            case 5:
                break;
        }
    };
    TournamentsPage.prototype.getTournaments = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;',
            'X-Auth-Token': this.global.token
        });
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        console.log('test');
        //this.http.get(this.global.url+"/clubs/2019", {headers}).subscribe((resp:any) => {
        //this.http.get(this.global.urlApiLocal+"/getGolfs.php?file=true&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        this.http.get(this.global.urlApiLocal + "/getData.php?e=competitions/" + this.global.season + "/" + this.tournamentType.Id + "&s=OPEN&l=" + this.perPage + "&p=" + this.page + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            console.log('here');
            console.log(resp);
            for (var i = 0; i < resp.length; i++) {
                var aux = resp[i].Date1.date.split(" ");
                //resp[i].Date1.date=aux.toLocaleDateString("fr-FR", options);
                //resp[i].Date1.date=format(aux, "dd/MM/yyyy");
                resp[i].Date1.date = aux[0];
                _this.tournaments.push(resp[i]);
            }
            //console.log(resp);
            //this.golfs=resp;
            //console.log(this.golfs);
        });
    };
    TournamentsPage.prototype.getTournamentsClosed = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;',
            'X-Auth-Token': this.global.token
        });
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        //this.http.get(this.global.url+"/clubs/2019", {headers}).subscribe((resp:any) => {
        //this.http.get(this.global.urlApiLocal+"/getGolfs.php?file=true&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        this.http.get(this.global.urlApiLocal + "/getData.php?e=competitions/" + this.global.season + "/" + this.tournamentType.Id + "&s=CLOSE&l=" + this.perPage + "&p=" + this.page + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            console.log(resp);
            for (var i = 0; i < resp.length; i++) {
                var aux = resp[i].Date1.date.split(" ");
                //resp[i].Date1.date=aux.toLocaleDateString("fr-FR", options);
                //resp[i].Date1.date=format(aux, "dd/MM/yyyy");
                resp[i].Date1.date = aux[0];
                _this.tournamentsClosed.push(resp[i]);
            }
            //console.log(resp);
            //this.golfs=resp;
            //console.log(this.golfs);
        });
    };
    TournamentsPage.prototype.Search = function (ev) {
        //this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.searchTournaments(val);
        }
    };
    TournamentsPage.prototype.searchTournaments = function (string) {
        var _this = this;
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json;',
            'X-Auth-Token': this.global.token
        });
        this.tournaments.length = 0;
        //this.http.get(this.global.url+"/clubs/2019", {headers}).subscribe((resp:any) => {
        //this.http.get(this.global.urlApiLocal+"/getGolfs.php?file=true&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        this.http.get(this.global.urlApiLocal + "/getData.php?e=competitions/" + this.global.season + "/" + this.tournamentType.Id + "&s=" + string + "&l=" + this.perPage + "&p=" + this.page + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            console.log(resp);
            for (var i = 0; i < resp.length; i++) {
                var aux = resp[i].Date1.date.split(" ");
                //resp[i].Date1.date=aux.toLocaleDateString("fr-FR", options);
                //resp[i].Date1.date=format(aux, "dd/MM/yyyy");
                resp[i].Date1.date = aux[0];
                _this.tournaments.push(resp[i]);
            }
            //console.log(resp);
            //this.golfs=resp;
            //console.log(this.golfs);
        });
    };
    TournamentsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getTournaments();
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    TournamentsPage.prototype.doInfinite2 = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getTournamentsClosed();
                console.log('Async operation has ended');
                infiniteScroll.complete();
            }, 500);
        }
    };
    TournamentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tournaments',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\tournaments\tournaments.html"*/'\n\n\n<ion-header no-border color="backColor">\n  <ion-navbar hideBackButton>\n    <ion-title>{{ tournamentType.Name }}</ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n    \n    <ion-buttons right>\n      <button ion-button (click)="openSearch()" icon-only color="white">\n        <ion-icon  name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n  <!--<ion-searchbar padding (ionInput)="Search($event)"></ion-searchbar>-->\n</ion-header>\n\n\n<ion-content  class="backgroundColor">\n	\n	\n	<a href="https://www.footgolf-france.fr/inscription" target="_blank"><img src="assets/imgs/banner_inscription.jpg" style="width:100%"></a>\n\n	\n\n<div >\n  <ion-segment [(ngModel)]="tournamentSwitch">\n    <ion-segment-button value="open">\n      {{ \'OPEN\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="closed">\n      {{ \'CLOSED\' | translate }}\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n\n<div padding [ngSwitch]="tournamentSwitch">\n\n    \n    <div *ngSwitchCase="\'open\'">\n    \n    <div class="golf" *ngFor="let t of tournaments" (click)="openTournament(t)"> \n	    <ion-card class="card" >\n		    <!--<img *ngIf="t.Photo" src="data:image/png;base64,{{t.Photo}}">\n			<img *ngIf="!t.Photo" src="assets/imgs/placeholdert.jpg">-->\n		    <div class="card-header">\n			    <div class="card-title">{{t.Name}}</div>\n				<div class="card-subtitle">{{t.Locality}} | {{t.Date1.date }}</div>\n		    </div>\n		</ion-card>\n	</div>\n    \n    \n\n    \n  <!--</ion-list>-->\n	\n<!-- Scroll Infinito -->\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n	\n    </div> <!-- Open -->\n    \n    \n     <div *ngSwitchCase="\'closed\'">\n    \n    <div class="golf" *ngFor="let t of tournamentsClosed" (click)="openTournament(t)"> \n	    <ion-card class="card" >\n		    <!--<img *ngIf="t.Photo" src="data:image/png;base64,{{t.Photo}}">\n			<img *ngIf="!t.Photo" src="assets/imgs/placeholdert.jpg">-->\n		    <div class="card-header">\n			    <div class="card-title">{{t.Name}}</div>\n				<div class="card-subtitle">{{t.Locality}} | {{t.Date1.date }}</div>\n		    </div>\n		</ion-card>\n	</div>\n    \n    \n\n    \n  <!--</ion-list>-->\n	\n<!-- Scroll Infinito -->\n    <ion-infinite-scroll (ionInfinite)="doInfinite2($event)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n	\n    </div> <!-- closed -->\n    \n	\n</div>	\n	\n	\n	\n	\n	\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n    \n    <ion-grid>\n    	<ion-row>\n			<ion-col>\n			      <a *ngIf="home" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n					<a *ngIf="!home" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(1)">\n				    	<!--<ion-icon class="menu_inf-icon icon icon-ios ion-ios-home-outline" role="img" aria-label="home outline"></ion-icon>-->\n				    	<span class="icono"><img src="assets/imgs/1.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU1\' | translate }}</span>\n					</a>\n					\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="lineups" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n					<a *ngIf="!lineups" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(2)">\n				    	<span class="icono"><img src="assets/imgs/2.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU2\' | translate }}</span>\n					</a>\n	  		</ion-col>  \n	  		<ion-col>\n			      <a *ngIf="courses" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n					<a *ngIf="!courses" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(3)">\n				    	<span class="icono"><img src="assets/imgs/3.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU3\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a *ngIf="rankings" class="menu-inf-option has-title has-icon disable-hover" aria-selected="true" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4_active.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n					<a *ngIf="!rankings" class="menu-inf-option has-title has-icon disable-hover" (click)="openMenu(4)">\n				    	<span class="icono"><img src="assets/imgs/4.svg" height="30px"></span>\n						<span class="menu-inf-text">{{ \'MENU4\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  		<ion-col>\n			      <a class="menu-inf-option has-title has-icon disable-hover" menuToggle>\n				    	<span class="icono"><ion-icon name="more"></ion-icon></span>\n						<span class="menu-inf-text">{{ \'MENU5\' | translate }}</span>\n					</a>\n	  		</ion-col>\n	  </ion-row>\n    </ion-grid>\n    \n    	\n    \n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\tournaments\tournaments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], TournamentsPage);
    return TournamentsPage;
}());

//# sourceMappingURL=tournaments.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scorecard_scorecard__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scores_scores__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teams_teams__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rankingteam_rankingteam__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_favorite_favorite__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RankingPage = /** @class */ (function () {
    function RankingPage(favoriteProvider, navCtrl, viewCtrl, navParams, http, global, actionsheetCtrl, loadingCtrl, iab) {
        var _this = this;
        this.favoriteProvider = favoriteProvider;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.actionsheetCtrl = actionsheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.page = 1;
        this.perPage = 30;
        this.listado = [];
        this.scores = [];
        this.diferencias = [];
        this.isFavorite = [];
        this.rondas = [];
        this.ranking = [];
        this.rankingArray = [];
        this.rankings = true;
        this.rankingSwitch = "info";
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Loading Rankings...'
        });
        this.loading.present();
        //this.idTorneo = this.navParams.get("id");
        this.infoTorneo = this.navParams.get("infoTorneo");
        this.idTorneo = this.infoTorneo.Id;
        console.log("ID:" + this.idTorneo);
        console.log(this.infoTorneo);
        this.getRank().then(function (data) {
            _this.loading.dismiss();
        });
    }
    RankingPage_1 = RankingPage;
    RankingPage.prototype.ionViewWillEnter = function () {
    };
    RankingPage.prototype.SearchPlayers = function (ev, liga) {
        var _this = this;
        /*this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
          this.ranking = this.rankingArray.filter((item) => {
            return (item.info_jugador.FirstName.toLowerCase().indexOf(val.toLowerCase()) > -1
            
            || item.info_jugador.LastName.toLowerCase().indexOf(val.toLowerCase()) > -1
            
            );
          })
        }*/
        this.initializeItems();
        var val = ev.target.value;
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Searching...'
        });
        this.loading.present();
        this.searchRank(val).then(function (data) {
            _this.loading.dismiss();
        });
    };
    RankingPage.prototype.initializeItems = function () {
        this.ranking = [];
        this.rankingArray = [];
    };
    RankingPage.prototype.getRank = function () {
        var _this = this;
        return new Promise(function (resolve) {
            //this.http.get(this.global.urlApiLocal+"/getCompeticion.php?file=true&id="+this.idTorneo+"&token="+encodeURIComponent(this.global.token))
            _this.http.get(_this.global.urlApiLocal + "/getData.php?e=competitionRegisters/" + _this.idTorneo + "/" + _this.global.season + "&s=&l=" + _this.perPage + "&p=" + _this.page + "&token=" + encodeURIComponent(_this.global.token)).subscribe(function (resp) {
                /*this.ranking = res.results;
                this.rankingArray = res.results;
                 
                console.log(this.ranking);*/
                for (var i = 0; i < resp.length; i++) {
                    _this.ranking.push(resp[i]);
                    _this.rankingArray.push(resp[i]);
                }
                //this.rondas=this.ranking[0].scores;
                for (var _i = 0; _i < _this.ranking.length; _i++) {
                    //console.log(this.ranking[_i]);
                    _this.favoriteProvider.isFavorite(_this.ranking[_i].player_id).then(function (isFav) {
                        _this.isFavorite.push(isFav);
                        //console.log(isFav);
                    });
                } //End for
                console.log(_this.ranking);
                resolve(_this.ranking);
            });
        });
    }; // Get Ranking
    RankingPage.prototype.searchRank = function (value) {
        var _this = this;
        if (value == undefined) {
            value = "";
        }
        return new Promise(function (resolve) {
            //this.http.get(this.global.urlApiLocal+"/getCompeticion.php?file=true&id="+this.idTorneo+"&token="+encodeURIComponent(this.global.token))
            _this.http.get(_this.global.urlApiLocal + "/getData.php?e=competitionRegisters/" + _this.idTorneo + "/" + _this.global.season + "&l=" + _this.perPage + "&p=" + _this.page + "&s=" + value + "&token=" + encodeURIComponent(_this.global.token)).subscribe(function (resp) {
                /*this.ranking = res.results;
                this.rankingArray = res.results;
                 
                console.log(this.ranking);*/
                for (var i = 0; i < resp.length; i++) {
                    _this.ranking.push(resp[i]);
                    _this.rankingArray.push(resp[i]);
                }
                //this.rondas=this.ranking[0].scores;
                for (var _i = 0; _i < _this.ranking.length; _i++) {
                    //console.log(this.ranking[_i]);
                    _this.favoriteProvider.isFavorite(_this.ranking[_i].player_id).then(function (isFav) {
                        _this.isFavorite.push(isFav);
                        //console.log(isFav);
                    });
                } //End for
                console.log(_this.ranking);
                resolve(_this.ranking);
            });
        });
    }; // Get Ranking
    /* SearchPlayers(ev) {
       //this.initializeItems();
       var val = ev.target.value;
       if (val && val.trim() != '') {
         this.searchRank(val);
       }
     }*/
    /*getCategory(cat){
      switch (cat)
      {
        case "rankings_men":
            this.getRanking("men");
            this.categoryName = "Men";
            break;
        case "rankings_women":
            this.getRanking("women");
            this.categoryName = "Women";
            break;
        case "rankings_senior":
            this.getRanking("senior");
            this.categoryName = "Senior";
            break;
        case "rankings_junior":
            this.getRanking("junior");
            this.categoryName = "Junior";
            break;
        case "rankings_team":
            this.getRanking("team");
            this.categoryName = "Team";
            break;
        case "rankings":
            this.getRanking("");
            this.categoryName = "General";
            break;
        default:
            this.getRanking("");
            break;
      }
    }*/
    /*
      getRanking(cat){
          
          if(cat!=""){
              
              this.http.get(this.global.url+"/rankings/read_one.php?id_torneo="+this.global.id_torneo+"&categoria="+cat)
          .subscribe((res: any) => {
            this.ranking = res.records;
            this.rankingArray = res.records;
             
            //console.log(this.ranking);
            this.rondas=this.ranking[0].scores;
            
            
          
          
          
            for (var _i = 0; _i < this.ranking.length; _i++){
                
                //console.log(this.ranking[_i]);
                
                    this.favoriteProvider.isFavorite(this.ranking[_i].player_id).then(isFav => {
                        this.isFavorite.push(isFav);
                        //console.log(isFav);
                    });
             }//End for
              
              console.log(this.isFavorite);
              
        }, error => {
          console.log(error);
        })
              
          }else{ //Todos los resultados
              
              this.http.get(this.global.url+"/rankings/read.php?id_torneo="+this.global.id_torneo)
          .subscribe((res: any) => {
            this.ranking = res.records;
            this.rankingArray = res.records;
            //console.log(this.ranking);
            
            this.rondas=this.ranking[0].scores;
            //console.log(this.ranking[0].num_rondas);
            //console.log(this.ranking.scores);
            
             
             //console.log(this.diferencias);
             
             for (var _i = 0; _i < this.ranking.length; _i++){
                    this.favoriteProvider.isFavorite(this.ranking[_i].player_id).then(isFav => {
                        this.isFavorite.push(isFav);
                    });
             }//End for
          
            
              
        }, error => {
          console.log(error);
        })
              
              } //IF
        
      } // Get Ranking
    */
    RankingPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        if (this.page != 0) {
            setTimeout(function () {
                _this.getRank().then(function (data) {
                    console.log('Async operation has ended');
                    infiniteScroll.complete();
                });
            }, 500);
        }
    };
    RankingPage.prototype.openCard = function (playerID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__scorecard_scorecard__["a" /* ScoreCardPage */], { infoPlayer: playerID, infoTorneo: this.infoTorneo });
    };
    RankingPage.prototype.openMenu = function (id) {
        switch (id) {
            case 1:
                //this.nav.setRoot(TabsPage,{position:0});
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                break;
            case 2:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__teams_teams__["a" /* TeamsPage */]);
                break;
            case 4:
                console.log(id);
                this.navCtrl.setRoot(RankingPage_1, { slug: 'rankings_men' });
                break;
            case 3:
                console.log(id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__scores_scores__["a" /* ScoresPage */], { slug: '' });
                break;
            case 5:
                break;
        }
    }; //Open Menu
    RankingPage.prototype.favoritePlayer = function (player_id, index) {
        var _this = this;
        this.favoriteProvider.favoritePlayer(player_id).then(function () {
            _this.isFavorite[index] = true;
        });
    }; // Favorite
    RankingPage.prototype.unfavoritePlayer = function (player_id, index) {
        var _this = this;
        this.favoriteProvider.unfavoritePlayer(player_id).then(function () {
            _this.isFavorite[index] = false;
        });
    }; //Unfavorite
    RankingPage.prototype.openMenuContextual = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Select Ranking',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Men Ranking',
                    //role: 'destructive',
                    //icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        //console.log('Delete clicked');
                        _this.navCtrl.setRoot(RankingPage_1, { slug: 'rankings_men' });
                    }
                },
                {
                    text: 'Women Ranking',
                    //icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        //console.log('Share clicked');
                        _this.navCtrl.setRoot(RankingPage_1, { slug: 'rankings_women' });
                    }
                },
                {
                    text: 'Senior Ranking',
                    //icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        _this.navCtrl.setRoot(RankingPage_1, { slug: 'rankings_senior' });
                    }
                },
                {
                    text: 'Team',
                    //icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        //console.log('Favorite clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__rankingteam_rankingteam__["a" /* RankingTeamPage */], { slug: 'rankings_team' });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    //icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }; //OpenMenu
    RankingPage = RankingPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ranking',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\ranking\ranking.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar hideBackButton>\n    <ion-title>{{ \'RANK\' | translate }}</ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n  <ion-searchbar debounce="700" padding (ionInput)="SearchPlayers($event)"></ion-searchbar>\n  \n</ion-header>\n\n<ion-content padding class="backgroundColor">\n\n<h1>{{infoTorneo.Name}}</h1>\n  \n  \n   <ion-segment [(ngModel)]="rankingSwitch">\n    <ion-segment-button value="info">\n      {{ \'RANK\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="favoritos">\n      {{ \'FAVORITOS\' | translate }}\n    </ion-segment-button>\n\n  </ion-segment>\n  \n  \n  \n  \n  <div  [ngSwitch]="rankingSwitch">\n   <!-- FAVORITOS -->\n  <div *ngSwitchCase="\'favoritos\'">\n  <ion-list>\n  	<div *ngFor="let rank of ranking; index as j">\n	  <ion-item  *ngIf="isFavorite[j]" (click)="openCard(rank)">    \n	    <ion-grid>\n	    	<ion-row>\n			    <ion-col col-2>\n			      {{ rank.Rank }} \n			      	<!--<span class="variacion ranking_up" *ngIf="rank.evolucion_ranking == 1"><ion-icon ios="ios-arrow-round-up" md="md-arrow-round-up"></ion-icon></span>\n			        <span class="variacion ranking_down" *ngIf="rank.evolucion_ranking == -1"><ion-icon ios="ios-arrow-round-down" md="md-arrow-round-down"></ion-icon></span>\n			        <span class="variacion ranking_same" *ngIf="rank.evolucion_ranking == 0">=</span>-->\n			        <img src="./assets/imgs/flags/{{ rank.Licence.Nationality }}.svg" width="16px">\n			    </ion-col>\n			    <ion-col col-7>\n			       <ion-thumbnail item-start>\n        <img *ngIf="rank.Licence.Photo" src="data:image/png;base64,{{rank.Licence.Photo}}">\n        <ion-icon *ngIf="!rank.Licence.Photo" name="contact"></ion-icon>\n        \n      </ion-thumbnail> {{ rank.Licence.LastName }},  {{ rank.Licence.FirstName }}\n		    <ion-icon name="star" (click)="unfavoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="isFavorite[j]"></ion-icon>\n		    <ion-icon name="star-outline" (click)="favoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="!isFavorite[j]"></ion-icon>\n			    </ion-col>\n			    <ion-col col-3 text-right >\n			      <span *ngIf="rank.Rank">{{ rank.TotalScore }}</span>\n			      <span *ngIf="!rank.Rank">0</span>\n			    </ion-col>\n			    \n			  </ion-row>\n	    </ion-grid>\n\n	  </ion-item>\n  	</div>\n	</ion-list>\n	\n  </div><!-- FAVORITOS -->\n	\n	\n	\n	\n	<ion-list class="ranking-bueno" *ngSwitchCase="\'info\'">\n	  <ion-item *ngFor="let rank of ranking; index as j" (click)="openCard(rank)">    \n	    <ion-grid>\n	    	<ion-row>\n			    <ion-col col-2>\n			      {{ rank.Rank }} \n			      	<!--<span class="variacion ranking_up" *ngIf="rank.evolucion_ranking == 1"><ion-icon ios="ios-arrow-round-up" md="md-arrow-round-up"></ion-icon></span>\n			        <span class="variacion ranking_down" *ngIf="rank.evolucion_ranking == -1"><ion-icon ios="ios-arrow-round-down" md="md-arrow-round-down"></ion-icon></span>\n			        <span class="variacion ranking_same" *ngIf="rank.evolucion_ranking == 0">=</span>-->\n			        <img src="./assets/imgs/flags/{{ rank.Licence.Nationality }}.png" width="16px">\n			    </ion-col>\n			    <ion-col col-7>\n			       <ion-thumbnail item-start>\n        <img *ngIf="rank.Licence.Photo" src="data:image/png;base64,{{rank.Licence.Photo}}">\n        <ion-icon *ngIf="!rank.Licence.Photo" name="contact"></ion-icon>\n        \n      </ion-thumbnail> {{ rank.Licence.LastName }},  {{ rank.Licence.FirstName }} \n		    <ion-icon name="star" (click)="unfavoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="isFavorite[j]"></ion-icon>\n		    <ion-icon name="star-outline" (click)="favoritePlayer(rank.Licence.Id,j);$event.stopPropagation()" *ngIf="!isFavorite[j]"></ion-icon>\n			    </ion-col>\n			    <ion-col col-3 text-right>\n			      <span *ngIf="rank.Rank">{{ rank.TotalScore }}</span>\n			      <span *ngIf="!rank.Rank">0</span>\n			    </ion-col>\n			  </ion-row>\n	    </ion-grid>\n	  </ion-item>\n	</ion-list>\n	\n	\n  </div>\n	\n<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n\n	\n\n\n\n\n</ion-content>\n\n '/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\ranking\ranking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_favorite_favorite__["a" /* FavoriteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], RankingPage);
    return RankingPage;
    var RankingPage_1;
}());

//# sourceMappingURL=ranking.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GolfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__golfMap_golfMap__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator_ngx__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GolfPage = /** @class */ (function () {
    function GolfPage(global, http, viewCtrl, navCtrl, navParams, domSanitizer, iab, launchNavigator) {
        this.global = global;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.domSanitizer = domSanitizer;
        this.iab = iab;
        this.launchNavigator = launchNavigator;
        this.golfPhotos = [];
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.clubSwitch = "info";
        //this.team ="players";
        //console.log(this.navParams.data);
        this.golfInfo = this.navParams.data.infoGolf;
        //this.teamDBId = this.navParams.data.id_database;
        //console.log(this.golfInfo);
        this.getGolf();
        //this.getPlayer();
        //this.getAdmin();	
    }
    GolfPage.prototype.ionViewWillEnter = function () {
    };
    GolfPage.prototype.openBrowser = function (url) {
        console.log(url);
        var target = "_system";
        this.iab.create(url, target, this.options);
    };
    GolfPage.prototype.getBackground = function (image) {
        return this.domSanitizer.bypassSecurityTrustStyle("linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(" + image + ")");
    };
    GolfPage.prototype.navigate = function () {
        this.launchNavigator.navigate([50.279306, -5.163158], {
            start: "50.342847, -4.749904"
        });
    };
    GolfPage.prototype.openMap = function () {
        console.log("Esto si");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__golfMap_golfMap__["a" /* GolfMapPage */], { golfs: this.golfInfo });
    };
    GolfPage.prototype.getGolf = function () {
        //console.log(this.teamId);
        var _this = this;
        //this.http.get(this.global.url+"/club/"+this.teamId+"/"+this.global.anyo+"").subscribe((resp:any) => {
        /*****
            Ahora tengo que sacar la tablita de los precios haciendo la llamada que me quería evitar :-D
            *****/
        this.http.get(this.global.urlApiLocal + "/getData.php?e=golf/" + this.golfInfo.Id + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            console.log(resp);
            if (resp) {
                _this.tablaPrecios = resp.TarifsFromRegiondoApi;
            }
            //console.log(resp);
            //this.golfs=resp;
            //console.log(this.golfs);
        });
        this.titulo = this.golfInfo.Name;
        this.descripcion = this.golfInfo.Description;
        this.localidad = this.golfInfo.Locality;
        this.direccion = this.golfInfo.Street + "<br/>" + this.golfInfo.PostalCode + ", " + this.golfInfo.Locality;
        this.email = this.golfInfo.Mail;
        this.telefono = this.golfInfo.OfficePhone;
        this.longitud = this.golfInfo.NameParcours;
        this.latitud = this.golfInfo.NbParcours;
        this.infoGolf = this.golfInfo.InfosGolf;
        this.precio = this.golfInfo.InfosTarifs;
        this.foto_principal = this.getBackground("https://www.footgolf-france.fr/media/cache/golf/" + this.golfInfo.GolfPhotos[0].Slug);
        this.golfPhotos = this.golfInfo.GolfPhotos;
        this.sistemaReserva = false;
        if (this.golfInfo.LinkGreenfees) {
            this.sistemaReserva = true;
            this.tipoReservaGreenFees = true;
            this.urlBooking = this.golfInfo.LinkGreenfees;
        }
        else {
            if (this.golfInfo.RegiondoId) {
                this.sistemaReserva = true;
                this.tipoReservaRegiondo = true;
                this.iframe = this.golfInfo.RegiondoId;
                /**** Version 0.0.7 ****/
                // Ahora se les ha ocurrido devolver el iFrame entero...
                var inicio = this.iframe.indexOf('data-url="');
                var URLiframe = this.iframe.substring(inicio + 10);
                console.log(URLiframe);
                inicio = URLiframe.indexOf('"');
                console.log(inicio);
                URLiframe = URLiframe.substring(0, inicio);
                console.log(URLiframe);
                this.urlBooking = this.domSanitizer.bypassSecurityTrustResourceUrl(URLiframe);
                //console.log(inicioURL);
                //this.urlBooking=this.domSanitizer.bypassSecurityTrustResourceUrl("https://foot-golf-france.regiondo.fr/bookingwidget/vendor/15713/id/"+this.golfInfo.RegiondoId+"?bookingwidget=1&secure=1");
            }
        }
        /* this.http.get("http://localhost/AFFGApp/API/getGolf.php?id="+encodeURIComponent(this.golfId)+"&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
       
             this.golfInfo=JSON.parse(resp);
             
             console.log(this.golfInfo);
             
             this.titulo=this.golfInfo[0].Name;
             this.descripcion=this.golfInfo[0].Description;
             this.localidad=this.golfInfo[0].Locality;
             this.direccion=this.golfInfo[0].Street+"<br/>"+this.golfInfo[0].PostalCode+", "+this.golfInfo[0].Locality;
             this.email=this.golfInfo[0].Mail;
             this.telefono=this.golfInfo[0].OfficePhone;
             this.longitud=this.golfInfo[0].NameParcours;
             this.latitud=this.golfInfo[0].NbParcours;
             this.infoGolf=this.golfInfo[0].InfosGolf;
             this.precio=this.golfInfo[0].InfosTarifs;
             this.foto_principal=this.getBackground("https://www.footgolf-france.fr/media/cache/golf/"+this.golfInfo[0].GolfPhotos[0].Slug);
             this.golfPhotos=this.golfInfo[0].GolfPhotos;
             this.sistemaReserva=false;
             
             if(this.golfInfo[0].LinkGreenfees){
                 this.sistemaReserva=true;
                 this.tipoReservaGreenFees=true;
                 this.urlBooking=this.golfInfo[0].LinkGreenfees;
             }else{
                 
                 if(this.golfInfo[0].RegiondoId){
                     this.sistemaReserva=true;
                     this.tipoReservaRegiondo=true;
                     this.urlBooking=this.domSanitizer.bypassSecurityTrustResourceUrl("https://foot-golf-france.regiondo.fr/bookingwidget/vendor/15713/id/"+this.golfInfo[0].RegiondoId+"?bookingwidget=1&secure=1");
 
                 }
                 
             }
             
             
             
             
             }); */
    };
    GolfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-golf',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\golf\golf.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar hideBackButton>\n    <ion-title>Golfs</ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<div class="titulo"  center text-center>\n	<h1>{{titulo}}</h1>\n	<p class="note">{{localidad}}</p>\n</div>\n\n<ion-content class="backgroundColor" [style.background-image]="foto_principal" scroll="true" overflow-scroll="true">\n\n<!--<ion-fab right bottom>\n    <button (click)="openMap()" ion-fab color="primary"><ion-icon name="map"></ion-icon></button>\n  </ion-fab>-->\n\n\n<div *ngIf="sistemaReserva">\n  <ion-segment [(ngModel)]="clubSwitch">\n    <ion-segment-button value="info">\n      {{ \'INFO_GOLF\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="location">\n      {{ \'LOCATION_GOLF\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="prices">\n      {{ \'PRICES_GOLF\' | translate }}\n    </ion-segment-button>\n	\n    <ion-segment-button value="book" >\n      {{ \'BOOK_GOLF\' | translate }}\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n<div *ngIf="!sistemaReserva">\n  <ion-segment [(ngModel)]="clubSwitch">\n    <ion-segment-button value="info">\n      {{ \'INFO_GOLF\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="location">\n      {{ \'LOCATION_GOLF\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button value="prices">\n      {{ \'PRICES_GOLF\' | translate }}\n    </ion-segment-button>\n\n  </ion-segment>\n</div>\n	\n\n<div *ngIf="sistemaReserva">\n	\n	<div  [ngSwitch]="clubSwitch">\n		  <div class="teamCard" padding *ngSwitchCase="\'info\'">\n		   		\n		   		<div class="field">\n				    <label>{{ \'DESCRIPTION\' | translate }}</label>\n				    <div [innerHTML]="descripcion"></div>\n			    </div>\n			    \n			    <div class="field">\n				    <label>{{ \'INFOGOLF\' | translate }}</label>\n				    <div [innerHTML]="infoGolf"></div>\n			    </div>\n			    \n			    <div class="field">\n				    <label>{{ \'IMAGES\' | translate }}</label>\n				    <div class="img_gallery">\n					    <div class="" *ngFor="let f of golfPhotos">\n						    <img src="https://www.footgolf-france.fr/media/cache/golf/{{f.Slug}}">\n					    </div>\n			    		</div>\n				    \n			    </div>\n		   		\n		   		\n		   	\n		  </div>\n		  \n		  		  <div class="teamCard" padding *ngSwitchCase="\'location\'" text-center>\n			  		  \n			  		 <div class="field">\n					    <label>{{ \'ADDRESS\' | translate }}</label>\n					    <div [innerHTML]="direccion"></div>\n					    <p><ion-icon name="call"></ion-icon> {{telefono}}</p>\n						 <p><ion-icon name="mail"></ion-icon> {{email}}</p>\n				    </div>\n				    \n			  		  \n				  <!--<div>\n				  	<button ion-button (click)="navigate()" block>{{ \'NAVIGATE\' | translate }}</button>\n				  </div>-->\n		  </div>\n		  \n		    <div class="teamCard" padding *ngSwitchCase="\'prices\'">\n			  		  \n			  		  \n			  		  <div *ngIf="tablaPrecios" class="tabla_precios">\n				  		  \n				  		 <table class="precios" style="width: 100%;text-align: center;" cellpadding="2" *ngIf=\'tablaPrecios["Toute saison"]\'>\n    								<tbody><tr>\n    									<td style="" rowspan="2" colspan="2" >&nbsp;</td>\n    									<td style="" colspan="2"><strong>Green Fee à l\'unité</strong></td>\n    										                                        <td style="" colspan="2"><strong>Carnet de 50 Greenfee</strong></td>\n    									                                    </tr>\n                                    <tr >\n    									<td style="">9 Trous</td>\n                                        <td style="">18 Trous</td>\n    									        									<td style="">9 Trous</td>\n                                            <td style="">18 Trous</td>\n    									                                    </tr>\n                                                                        	<tr>\n                                    		<td style=" vertical-align: middle; " rowspan="2">Toute Saison</td>\n                                    		<td style="">Semaine</td>\n                                    		\n                                    		\n                                    		\n                                    		<td style=""><i>{{tablaPrecios["Toute saison"]["Semaine"]["9"]}} €</i></td>\n                                    		<td style=""><i>{{tablaPrecios["Toute saison"]["Semaine"]["18"]}} €</i></td>\n        									    <td style="vertical-align: middle; " rowspan="2"><i>{{tablaPrecios["Toute saison"]["50"]["9"]}} €</i></td>\n                                                <td  style="vertical-align: middle;" rowspan="2"><i>{{tablaPrecios["Toute saison"]["50"]["18"]}} €</i></td>\n                                                \n        									                                    	</tr>\n                                    	<tr style="">\n                                    		<td style="">Weekend</td>\n                                    		<td  style=" "><i>{{tablaPrecios["Toute saison"]["Weekend"]["9"]}} €</i></td>\n                                    		<td style=""><i>{{tablaPrecios["Toute saison"]["Weekend"]["18"]}} €</i></td>\n                                    	</tr>\n                                                                    </tbody>\n                                                 </table>\n                                                 \n                                                 \n                        <table class="precios" style="width: 100%;text-align: center;" cellpadding="2" *ngIf=\'tablaPrecios["Toute Saison"]\'>\n    								<tbody><tr>\n    									<td style="" rowspan="2" colspan="2" >&nbsp;</td>\n    									<td style="" colspan="2"><strong>Green Fee à l\'unité</strong></td>\n    										                                        <td style="" colspan="2"><strong>Carnet de 50 Greenfee</strong></td>\n    									                                    </tr>\n                                    <tr >\n    									<td style="">9 Trous</td>\n                                        <td style="">18 Trous</td>\n    									        									<td style="">9 Trous</td>\n                                            <td style="">18 Trous</td>\n    									                                    </tr>\n                                                                        	<tr>\n                                    		<td style=" vertical-align: middle; " rowspan="2">Toute Saison</td>\n                                    		<td style="">Semaine</td>\n                                    		\n                                    		\n                                    		\n                                    		<td style=""><i>{{tablaPrecios["Toute Saison"]["Semaine"]["9"]}} €</i></td>\n                                    		<td style=""><i>{{tablaPrecios["Toute Saison"]["Semaine"]["18"]}} €</i></td>\n        									    <td style="vertical-align: middle; " rowspan="2"><i>{{tablaPrecios["Toute Saison"]["50"]["9"]}} €</i></td>\n                                                <td  style="vertical-align: middle;" rowspan="2"><i>{{tablaPrecios["Toute Saison"]["50"]["18"]}} €</i></td>\n                                                \n        									                                    	</tr>\n                                    	<tr style="">\n                                    		<td style="">Weekend</td>\n                                    		<td  style=" "><i>{{tablaPrecios["Toute Saison"]["Weekend"]["9"]}} €</i></td>\n                                    		<td style=""><i>{{tablaPrecios["Toute Saison"]["Weekend"]["18"]}} €</i></td>\n                                    	</tr>\n                                                                    </tbody>\n                                                 </table>                         \n                                                 \n				  		  \n			  		  </div>\n			  		  <p>&nbsp;</p>\n			  		 <div class="field">\n					    <label>{{ \'PRICEINFO\' | translate }}</label>\n					    <div [innerHTML]="precio"></div>\n				    </div>\n\n		  </div>\n		  \n		  \n		  \n		  <div class="" padding *ngSwitchCase="\'book\'">\n			  <div *ngIf="tipoReservaGreenFees">\n			  	<button ion-button (click)="openBrowser(urlBooking)" block>{{ \'BOOKING_TEXT\' | translate }}</button>\n			  </div>\n			  <div *ngIf="tipoReservaRegiondo" class="iframe-wrapper">\n			  	<iframe data-tap-disabled="true"  class= \'webPage\' name= "samplePage" [src]="urlBooking"></iframe>\n			  </div>\n		  </div>\n		  \n		  \n	</div>\n\n</div>\n\n\n<div *ngIf="!sistemaReserva">\n	\n	<div  [ngSwitch]="clubSwitch">\n		  <div class="teamCard" padding *ngSwitchCase="\'info\'">\n		   		\n		   		<div class="field">\n				    <label>{{ \'DESCRIPTION\' | translate }}</label>\n				    <div [innerHTML]="descripcion"></div>\n			    </div>\n			    \n			    <div class="field">\n				    <label>{{ \'INFOGOLF\' | translate }}</label>\n				    <div [innerHTML]="infoGolf"></div>\n			    </div>\n			    \n			    <div class="field">\n				    <label>{{ \'IMAGES\' | translate }}</label>\n				    <div class="img_gallery">\n					    <div class="" *ngFor="let f of golfPhotos">\n						    <img src="https://www.footgolf-france.fr/media/cache/golf/{{f.Slug}}">\n					    </div>\n			    		</div>\n				    \n			    </div>\n		   		\n		   		\n		   	\n		  </div>\n		  \n		  \n		   <div class="teamCard" padding *ngSwitchCase="\'prices\'">\n			  		  \n			  		 <div class="field">\n					    <label>{{ \'PRICEINFO\' | translate }}</label>\n					    <div [innerHTML]="precio"></div>\n				    </div>\n\n		  </div>\n		  \n		  <div class="teamCard" padding *ngSwitchCase="\'location\'" text-center>\n			  \n			  <div class="field">\n					    <label>{{ \'ADDRESS\' | translate }}</label>\n					    <div [innerHTML]="direccion"></div>\n					     <p><ion-icon name="call"></ion-icon> {{telefono}}</p>\n						 <p><ion-icon name="mail"></ion-icon> {{email}}</p>\n				    </div>\n			  \n			  <!--<div>\n			  	<button ion-button (click)="navigate()" block>{{ \'NAVIGATE\' | translate }}</button>\n			  </div>-->\n		  </div>\n		  \n		  \n		  <div class="" padding *ngSwitchCase="\'book\'">\n			  <div *ngIf="tipoReservaGreenFees">\n			  	<button ion-button (click)="openBrowser(urlBooking)" block>{{ \'BOOKING_TEXT\' | translate }}</button>\n			  </div>\n			  <div *ngIf="tipoReservaRegiondo">\n			  	<iframe  class= \'webPage\' name= "samplePage" [src]="urlBooking"></iframe>\n			  </div>\n		  </div>\n		  \n		  \n	</div>\n\n</div>\n	\n\n</ion-content>\n\n\n<!--<ion-content padding class="backgroundColor">\n	\n	<h1>{{ teamInfo?.nombre }}</h1> <img src="{{ teamInfo?.logo }}" height="60px;">\n	</div>\n\n	<div padding-top>\n		<ion-segment >\n		<ion-segment-button value="players">\n		      PLAYERS\n		    </ion-segment-button>\n		    <ion-segment-button value="info">\n		      INFO\n		    </ion-segment-button>\n		    \n		</ion-segment>\n\n		<div [ngSwitch]="team">\n		\n		<h2 *ngSwitchCase="\'players\'">Men</h2>\n		\n		<ion-list *ngSwitchCase="\'players\'">\n\n			<ion-item *ngFor="let p of menplayers" (click)="openPlayer(p)">\n		      <ion-avatar item-start>\n		        <img src="{{ p.foto }}">\n		      </ion-avatar>\n		      <h2>{{ p.nombre }} {{ p.apellidos }}</h2>\n		      <p>{{ p.categoria }} • {{ p.fecha_nacimiento }}</p>\n		    </ion-item>\n		\n		</ion-list>	\n			\n		<h2 *ngSwitchCase="\'players\'">Women</h2>\n			<ion-list *ngSwitchCase="\'players\'">\n			<ion-item *ngFor="let p of womenplayers" (click)="openPlayer(p)">\n		      <ion-avatar item-start>\n		        <img src="{{ p.foto }}">\n		      </ion-avatar>\n		      <h2>{{ p.nombre }} {{ p.apellidos }}</h2>\n		      <p>{{ p.categoria }} • {{ p.fecha_nacimiento }}</p>\n		    </ion-item>\n			</ion-list>\n		    \n		    \n		<h2 *ngSwitchCase="\'players\'">Senior</h2>\n			<ion-list *ngSwitchCase="\'players\'">\n			<ion-item *ngFor="let p of seniorplayers" (click)="openPlayer(p)">\n		      <ion-avatar item-start>\n		        <img src="{{ p.foto }}">\n		      </ion-avatar>\n		      <h2>{{ p.nombre }} {{ p.apellidos }}</h2>\n		      <p>{{ p.categoria }} • {{ p.fecha_nacimiento }}</p>\n		    </ion-item>\n			</ion-list>\n		    \n		\n		  <div *ngSwitchCase="\'info\'" padding-top>\n		  	<div [innerHTML]="teamInfo?.info"></div>\n		  </div>\n\n	    \n\n		</div>\n	</div>\n\n</ion-content>-->'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\golf\golf.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator_ngx__["a" /* LaunchNavigator */]])
    ], GolfPage);
    return GolfPage;
}());

//# sourceMappingURL=golf.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Challenge; });
var Challenge = /** @class */ (function () {
    function Challenge(fields) {
        this.selectedPlayers = [];
        if (fields) {
            this.id = fields.id;
            this.date = fields.date;
            this.time = fields.time;
            this.course_name = fields.course_name;
            this.course_image = fields.course_image;
            this.type = fields.type;
            this.points = fields.points;
            this.holes = fields.holes;
            this.id_creator = fields.id_creator;
            this.publico = fields.publico;
            this.spots = fields.spots;
            this.course_par = fields.course_par;
            this.course_long = fields.course_long;
            this.course_lat = fields.course_lat;
            this.selectedPlayers = fields.selectedPlayers;
        }
    }
    Challenge.prototype.setId = function (id) {
        this.id = id;
    };
    Challenge.prototype.setDate = function (value) {
        this.date = value;
    };
    return Challenge;
}());

//# sourceMappingURL=challenge.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pruebas2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Pruebas2Page = /** @class */ (function () {
    function Pruebas2Page(navCtrl, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.items = [];
        this.simplevar = "";
        this.test = "";
    }
    Pruebas2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Pruebas2Page');
    };
    Pruebas2Page.prototype.azAlgo = function () {
        //${this.urlBase}
        var _this = this;
        var parameters = {
            test: 2,
            clave: 3,
        };
        this.http.post("http://localhost/golftabApp/api/test.php", parameters).subscribe(function (resp) {
            var data = resp.json();
            _this.muestra_alert("eltitulo", data.data.msg);
            _this.recorre(data.recorrido);
            _this.simplevar = data.data;
        });
        this.http.post("http://localhost/golftabApp/api/test.php", parameters).subscribe(function (resp) {
            var data = resp.json();
            ;
            ;
            _this.test = data.data;
        });
    };
    Pruebas2Page.prototype.recorre = function (rec) {
        this.items = rec;
    };
    Pruebas2Page.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    Pruebas2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pruebas2',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\pruebas2\pruebas2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pruebass2</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Pruerbas2</h3>\n<button elboton (click)=\'azAlgo();\'>AZ ALGO</button>\n\n\n <ion-item *ngFor="let item of items">\n      <h2>{{ item.nombre }} </h2>\n      <p>{{ item.apellido }} </p>\n      \n   </ion-item>\n\n\n<h3>{{simplevar.msg}}</h3>\n\n</ion-content>\n\n\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\pruebas2\pruebas2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], Pruebas2Page);
    return Pruebas2Page;
}());

//pal html uso de globales
//<h1>{{ global.myGlobalVar }} </h1>
//# sourceMappingURL=pruebas2.js.map

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScoreDetailPage = /** @class */ (function () {
    function ScoreDetailPage(viewCtrl, http, global, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scoreId = this.navParams.get("scoreId");
        this.getScore(this.scoreId);
    }
    ScoreDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScoreDetailPage');
    };
    ScoreDetailPage.prototype.getScore = function (id) {
        var _this = this;
        this.http.get(this.global.url + "/flight/read_by_flight.php?id_torneo=" + this.global.id_torneo + "&flight_id=" + id)
            .subscribe(function (res) {
            console.log(res);
            _this.score = res;
        }, function (error) {
            console.log(error);
        });
    };
    ScoreDetailPage.prototype.getHoleScore = function (index) {
        return this.score.resultados[index];
    };
    ScoreDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-score-detail',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\score-detail\score-detail.html"*/'<ion-header no-border color="backColor">\n    <ion-navbar hideBackButton>\n      <ion-title><img src="assets/imgs/foot.png" height="40px" alt=""></ion-title>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="viewCtrl.dismiss()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content  class="backgroundColor">\n    <div class="resultBox">\n        <ion-grid>\n          <ion-row text-center padding-top align-items-center>\n            <ion-col col-6>\n              <div class="circle mCenter"></div>\n            </ion-col>\n            <ion-col col-6>\n              <h4 ion-text color="primary">{{ score?.nombre_campo }}<br><span class="mDate">{{ score?.date }}</span></h4>\n            </ion-col>\n            <!--<ion-col col-4>\n              <div class="circle mCenter"></div>\n            </ion-col>-->\n          </ion-row>\n          <ion-row text-center>\n            <ion-col col-6 ion-text color="primary"><b>{{score?.nombre_jugador}}<br>{{score?.apellidos_jugador}}</b></ion-col>\n            <ion-col col-4 ion-text color="primary"></ion-col>\n            <!--<ion-col col-4 ion-text color="primary"><b>SPAIN</b></ion-col>-->\n          </ion-row>\n          <!--<ion-row>\n            <ion-col col-12 ion-text color="primary">\n              <ion-item text-center class="mode"><b>4 singles</b></ion-item>\n            </ion-col>\n          </ion-row>-->\n          <ion-row text-center margin-top>\n            <ion-col col-6 ion-text><div class="dot"></div>Now Playing</ion-col>\n            <ion-col col-6 ion-text><b>{{ score?.hoyo_actual }}</b></ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <hr>\n  \n      <ion-grid>\n      <ion-row padding-top text-center>\n        <ion-col col-4><b>HOLE</b></ion-col>\n        <ion-col col-4 class="padLeft"><b></b></ion-col>\n        <ion-col col-4 class="padLeft"><b></b></ion-col>\n      </ion-row>\n      <ion-row padding-top text-center *ngFor="let item of score?.par_campo, let k = index">\n        <ion-col col-4>\n          <div class="note" text-center>\n              <p class="litMargin"><b>{{k+1}}</b></p>\n              <p no-margin><b>par {{ item }}</b></p>\n          </div> \n        </ion-col>\n        <ion-col col-4>\n         <h2>{{ getHoleScore(k) }}</h2>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  '/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\score-detail\score-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ScoreDetailPage);
    return ScoreDetailPage;
}());

//# sourceMappingURL=score-detail.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneOfTwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OneOfTwoComponent = /** @class */ (function () {
    function OneOfTwoComponent() {
    }
    OneOfTwoComponent.prototype.changeSelected = function () {
        if (this.selected == 1) {
            this.selected = 2;
        }
        else {
            this.selected = 1;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], OneOfTwoComponent.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], OneOfTwoComponent.prototype, "options", void 0);
    OneOfTwoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'one-of-two',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\components\one-of-two\one-of-two.html"*/'<div class="outer">\n    <div class="left" (click)="changeSelected()">\n        <div [class.selected]="selected==1">\n            <ion-icon [name]="selected==1?\'radio-button-on\':\'radio-button-off\'"></ion-icon> {{options[0]}}\n        </div>\n    </div>\n    <div class="right" (click)="changeSelected()">\n        <div [class.selected]="selected==2">\n            <ion-icon [name]="selected==2?\'radio-button-on\':\'radio-button-off\'"></ion-icon> {{options[1]}}\n        </div>\n    </div>\n</div>\n<div style="clear: both"></div>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\components\one-of-two\one-of-two.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], OneOfTwoComponent);
    return OneOfTwoComponent;
}());

//# sourceMappingURL=one-of-two.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchscoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatchscoresPage = /** @class */ (function () {
    function MatchscoresPage(navCtrl, navParams, http, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.partidos = [];
    }
    MatchscoresPage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    MatchscoresPage.prototype.getData = function () {
        var _this = this;
        var parameteres = {
            page: 'matchscores',
            id_torneo: this.global.id_torneo,
            id_partido: 25749,
            id_jugador: 5134,
        };
        this.http.post(this.global.url, parameteres).subscribe(function (resp) {
            var data = resp.json();
            _this.partidos = data.data.partidos;
        });
    };
    MatchscoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matchscores',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\matchscores\matchscores.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Match</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-item *ngFor="let p of partidos">\n    <ion-card>\n        <ion-row>\n        	<ion-col center text-center>\n        		{{p.nombre_campo}}\n        	</ion-col>	\n    	</ion-row>    \n\n\n        <ion-row *ngFor="let e of p.equipos">\n        	<ion-col center text-center>\n\n            <img class="escudo" data-src="{{global.url_assets}}{{e.imagen_jugador}}"><br />\n            <img class="escudo" data-src="{{global.url_assets}}{{e.imagen_equipo}}"><br />                        \n            {{e.nombre_equipo}}\n\n        	</ion-col>\n        	\n        	<ion-col center text-center>\n        		\n        		{{e.golpes}}<br />\n        		{{p.jugando}}<br />\n        		{{p.nombre_campo}}<br />\n        	</ion-col>	\n    	</ion-row>\n        \n        <hr />\n        <ion-row>\n            <ion-col left text-left>\n                {{p.jugando}}\n            </ion-col>\n            <ion-col right text-right>\n                {{p.hoyo_actual}}\n            </ion-col>\n        </ion-row>\n\n\n    	<lineahoyo [num_hoyo]="h.num" [color]="h.ganador" [jugadores]="h.users" *ngFor="let h of p.hoyos"></lineahoyo>\n    	\n      </ion-card>\n</ion-item>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\matchscores\matchscores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], MatchscoresPage);
    return MatchscoresPage;
}());

//# sourceMappingURL=matchscores.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScoreslistPage = /** @class */ (function () {
    function ScoreslistPage(navCtrl, navParams, http, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.partidos = [];
        console.log("entro el veneno");
    }
    ScoreslistPage.prototype.ionViewWillEnter = function () {
    };
    ScoreslistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scoreslist',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\scoreslist\scoreslist.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Scores</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	 \n\n    <score [fecha_programado]="p.fecha_programado" [campo]="p.nombre_campo" [equipos]="p.equipos" [jugando]="p.jugando" [hoyoactual]="p.hoyo_actual" [listadohoyos]="p.listado_victorias_hoyos"  [grupo]="p.grupo" *ngFor="let p of partidos"></score>\n\n</ion-content> \n   \n\n\n\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\scoreslist\scoreslist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */]])
    ], ScoreslistPage);
    return ScoreslistPage;
}());

//# sourceMappingURL=scoreslist.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GamePage = /** @class */ (function () {
    function GamePage(http, global, alertCtrl, viewCtrl, navCtrl, navParams) {
        this.http = http;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.partidos = [];
    }
    GamePage.prototype.ionViewWillEnter = function () {
        this.game = this.navParams.data;
        this.getData();
    };
    GamePage.prototype.getData = function () {
        var _this = this;
        var parameteres = {
            page: 'match',
            id_partido: this.game,
            id_torneo: this.global.id_torneo
        };
        this.http.post(this.global.url, parameteres).subscribe(function (resp) {
            var data = resp.json();
            var restInfo = JSON.stringify(data);
            console.log(JSON.parse(restInfo));
            _this.partidos = data.data.partidos;
        });
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\game\game.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar hideBackButton>\n    <ion-title><img src="assets/imgs/foot.png" height="40px" alt=""></ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content  class="backgroundColor">\n\n	<div class="resultBox" *ngFor="let p of partidos">\n      <ion-grid>\n        <ion-row text-center padding-top align-items-center>\n          <ion-col col-4>\n            <div class="circle mCenter"></div>\n          </ion-col>\n          <ion-col col-4>\n            <h4 ion-text color="primary">35 - 27<br><span class="mDate">{{ p.fecha_programado }}</span></h4>\n          </ion-col>\n          <ion-col col-4>\n            <div class="circle mCenter"></div>\n          </ion-col>\n        </ion-row>\n        <ion-row text-center>\n          <ion-col col-4 ion-text color="primary"><b>USA</b></ion-col>\n          <ion-col col-4 ion-text color="primary"></ion-col>\n          <ion-col col-4 ion-text color="primary"><b>SPAIN</b></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 ion-text color="primary">\n          	<ion-item text-center class="mode"><b>4 singles</b></ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row text-center margin-top>\n          <ion-col col-6 ion-text><div class="dot"></div>{{ p.jugando }}</ion-col>\n          <ion-col col-6 ion-text><b>{{ p.hoyo_actual }}</b></ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <hr>\n\n    <ion-grid>\n	  <ion-row text-center>\n	    <ion-col col-4><span class="subTabs tile">HOLE BY HOLE</span></ion-col>\n	    <ion-col col-3><span class="subTabs">LINEUPS</span></ion-col>\n	    <ion-col col-3><span class="subTabs">EVENTS</span></ion-col>\n	    <ion-col col-2><span class="subTabs">NEWS</span></ion-col>\n	  </ion-row>\n	  <ion-row padding-top text-center>\n	    <ion-col col-4><b>HOLE</b></ion-col>\n	    <ion-col col-4 class="padLeft"><div class="dot2"></div><b>USA</b></ion-col>\n	    <ion-col col-4 class="padLeft"><div class="dot3"></div><b>SPAIN</b></ion-col>\n	  </ion-row>\n	  <ion-row padding-top text-center>\n	    <ion-col col-4>\n        <div class="note" text-center>\n            <p class="litMargin"><b>1</b></p>\n            <p no-margin><b>par 4</b></p>\n        </div> \n      </ion-col>\n	    <ion-col col-4>\n        <div id="container" float-right>\n          <div id="wrapper" class="circleB mCenter"></div>     \n          <ion-badge id="notifications-badge" color="danger">3</ion-badge>           \n        </div>\n        <div id="container">\n          <div id="wrapper" class="circleB mCenter"></div>     \n          <ion-badge id="notifications-badge" color="danger">3</ion-badge>           \n        </div> \n      </ion-col>\n	    <ion-col col-4>\n        <div id="container" float-right>\n          <div id="wrapper" class="circleB mCenter"></div>     \n          <ion-badge id="notifications-badgeB" color="danger">5</ion-badge>           \n        </div>\n        <div id="container">\n          <div id="wrapper" class="circleB mCenter"></div>     \n          <ion-badge id="notifications-badgeB" color="danger">3</ion-badge>           \n        </div> \n      </ion-col>\n	  </ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\game\game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_match_match__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScoreComponent = /** @class */ (function () {
    function ScoreComponent(global, navCtrl, navParams, alertCtrl) {
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.equipos = [];
        this.listadohoyos = [];
        this.equips = [];
    }
    ScoreComponent.prototype.ngOnInit = function () {
    };
    ScoreComponent.prototype.ionViewWillEnter = function () {
    };
    ScoreComponent.prototype.openMatch = function (id_match) {
        //this.muestra_alert('titulo','texto:'+id_match);  
        var paramObj = { id_part: id_match };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_match_match__["a" /* MatchPage */], paramObj);
    };
    ScoreComponent.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('campo'),
        __metadata("design:type", String)
    ], ScoreComponent.prototype, "campo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('jugando'),
        __metadata("design:type", String)
    ], ScoreComponent.prototype, "jugando", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('hoyoactual'),
        __metadata("design:type", String)
    ], ScoreComponent.prototype, "hoyoactual", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('equipos'),
        __metadata("design:type", Array)
    ], ScoreComponent.prototype, "equipos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('listadohoyos'),
        __metadata("design:type", Array)
    ], ScoreComponent.prototype, "listadohoyos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('grupo'),
        __metadata("design:type", String)
    ], ScoreComponent.prototype, "grupo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('partido_id'),
        __metadata("design:type", String)
    ], ScoreComponent.prototype, "partido_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('fecha_programado'),
        __metadata("design:type", String)
    ], ScoreComponent.prototype, "fecha_programado", void 0);
    ScoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'score',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\components\score\score.html"*/'<ion-card (click)=\'openMatch(partido_id);\'>\n    \n\n        <ion-row>\n        	<ion-col center text-center>\n        		{{campo}}\n        	</ion-col>	\n    	</ion-row>    \n\n\n        <ion-row>\n\n\n     \n            \n            	<ion-col col-sm-4 col-md-4 col-lg-4 col-xl-4 center text-center >\n\n                    <div *ngFor="let e of equipos" >\n                        <div *ngIf="e.pos==1">\n                    		<img class="escudo" data-src="{{global.url_assets}}{{e.imagen_equipo}}"><br />\n                            <ion-icon name="baseball" [ngClass]="e.color" style="border-radius:20px;"></ion-icon>\n                    		{{e.nombre_equipo}}\n                        </div>\n                    </div>    \n\n            	</ion-col>\n\n                <div *ngIf="grupo!=\'Futuro\' then content else other_content">here is ignored</div>    \n                <ng-template #content>\n\n            	<ion-col col-sm-4 col-md-4 col-lg-4 col-xl-4 center text-center>\n            		<br /><br />\n                    <span *ngFor="let e of equipos" class="marcador">\n                        <span *ngIf="e.pos==1">\n                        {{e.golpes}}  -\n                        </span>\n                    </span>\n                    \n                    <span *ngFor="let e of equipos" class="marcador">\n                        <span *ngIf="e.pos==2">\n                        {{e.golpes}} \n                        </span>\n                    </span>    \n            \n            	</ion-col>\n\n                </ng-template>\n                <ng-template #other_content>\n\n                    <ion-col col-sm-4 col-md-4 col-lg-4 col-xl-4 center text-center><br /><br /><br /><br /><span class="fecha">{{fecha_programado}}</span></ion-col>\n                </ng-template>\n\n            	<ion-col col-sm-4 col-md-4 col-lg-4 col-xl-4 center text-center >\n                    \n                    <div *ngFor="let e of equipos" >\n                        <div *ngIf="e.pos==2">\n                            <img class="escudo" data-src="{{global.url_assets}}{{e.imagen_equipo}}"><br />\n                            <ion-icon name="baseball" [ngClass]="e.color" style="border-radius:20px;"></ion-icon>\n                            {{e.nombre_equipo}}\n                        </div>\n                    </div>    \n                    \n            	</ion-col>	\n            \n\n\n    	</ion-row>\n    	<br /><br />\n    	<ion-row>\n        	<ion-col left text-left>\n        		{{jugando}}\n        	</ion-col>\n        	<ion-col right text-right>\n        		{{hoyoactual}}\n        	</ion-col>\n    	</ion-row>    \n        <hr />\n\n\n        <div *ngIf="grupo!=\'Futuro\' then base1 else base2">here is ignored</div>    \n        <ng-template #base1>\n            <ion-row>\n                <ion-col left text-left>\n                    Follow\n                </ion-col>\n                <ion-col right text-right>\n                    >\n                </ion-col>\n            </ion-row>\n        </ng-template>\n        <ng-template #base2>\n            <ion-row>\n                <ion-col left text-left>\n                    Set Alert\n                </ion-col>\n                <ion-col right text-right> \n                    >\n                </ion-col>\n            </ion-row>\n        </ng-template>\n\n        <ion-row>\n            &nbsp;&nbsp;\n            <span *ngFor="let l of listadohoyos"> \n\n                <ion-icon name="baseball" [ngClass]="l.color" style="border-radius:20px;"></ion-icon>\n                &nbsp;&nbsp;&nbsp;&nbsp;\n            </span>    \n        </ion-row>\n\n\n</ion-card>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\components\score\score.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], ScoreComponent);
    return ScoreComponent;
}());

//# sourceMappingURL=score.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineahoyoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_global_global__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineahoyoComponent = /** @class */ (function () {
    function LineahoyoComponent(global) {
        this.global = global;
        this.jugadores = [];
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('jugadores'),
        __metadata("design:type", Array)
    ], LineahoyoComponent.prototype, "jugadores", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('num_hoyo'),
        __metadata("design:type", String)
    ], LineahoyoComponent.prototype, "num_hoyo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('color'),
        __metadata("design:type", String)
    ], LineahoyoComponent.prototype, "color", void 0);
    LineahoyoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lineahoyo',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\components\lineahoyo\lineahoyo.html"*/'<ion-row>\n	<ion-col center text-center col-sm-4 col-md-4 col-lg-4 col-xl-4>\n		<br /><br />{{num_hoyo}}-<button style="background-color:white"><ion-icon name="baseball" [ngClass]="color" style="border-radius:20px;"></ion-icon></button>\n	</ion-col> \n\n	<ion-col center text-center *ngFor="let j of jugadores" col-sm-4 col-md-4 col-lg-4 col-xl-4>\n		<img (click)=\'verScores(1);\' class="escudito" data-src="{{global.url_assets}}{{j.foto}}"><br />\n        <span style="position:relative;left:25%">({{j.golpes}}) - {{j.name}} \n		</span>\n	</ion-col>\n		 \n</ion-row>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\components\lineahoyo\lineahoyo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_global_global__["a" /* GlobalProvider */]])
    ], LineahoyoComponent);
    return LineahoyoComponent;
}());

//# sourceMappingURL=lineahoyo.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChallengePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newchallengestep2_newchallengestep2__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {EmailValidators} from 'ng2-validators';

/******* Estas hay que quitarlas *********/

var NewChallengePage = /** @class */ (function () {
    function NewChallengePage(navCtrl, navParams, http, global, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.submitAttempt1 = false;
        this.submitAttempt2 = false;
        this.formLogin = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        });
    }
    NewChallengePage.prototype.ionViewWillEnter = function () {
        //this.getData(); 
    };
    NewChallengePage.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    NewChallengePage.prototype.openPage = function (page, parametros) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__newchallengestep2_newchallengestep2__["a" /* NewChallengeStep2Page */], parametros);
    };
    NewChallengePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newchallenge',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\newchallenge\newchallenge.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n     <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page-newchallenge">\n\n    <form [formGroup]="formLogin" novalidate (submit)="doLogin()">\n        <ion-grid fixed>\n            <ion-row>\n                <ion-col col-sm-2 col-md-3 col-lg-4 col-xl-3>\n                </ion-col>\n                <ion-col col-12 col-sm-8 col-md-6 col-lg-4 col-xl-6>\n\n                    <ion-list>\n\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col text-center>\n									\n									<img src="assets/imgs/logo_affg.png" height="60px" class="logo" alt="">\n									\n                                    <p>{{ \'INTRO_CHALLENGES\' | translate }}</p>\n\n                                </ion-col>\n                            </ion-row>\n\n\n\n                          \n                        </ion-grid>\n\n\n\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n   </form>\n\n</ion-content>\n\n<ion-footer no-border>\n                        \n                        <ion-grid>\n						  <ion-row>\n						    <ion-col col-6>\n						      <button ion-button round color="primary" block text-uppercase block icon-right (click)="openPage(\'newchallengestep2\', {tipo: \'individual\'})">{{ \'MENUC3\' | translate }}<ion-icon name="arrow-round-forward"></ion-icon></button>\n						    </ion-col>\n						    \n						     <ion-col col-6>\n						      <button ion-button round color="primary" block text-uppercase block icon-right (click)="openPage(\'newchallengestep2\', {tipo: \'group\'})">{{ \'MENUC4\' | translate }}<ion-icon name="arrow-round-forward"></ion-icon></button>\n						    </ion-col>\n						    \n						  </ion-row>\n						</ion-grid>\n                        \n                  \n                        \n</ion-footer>\n\n    \n    	'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\newchallenge\newchallenge.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NewChallengePage);
    return NewChallengePage;
}());

//# sourceMappingURL=newchallenge.js.map

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpCompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__challenges_challenges__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignUpCompletePage = /** @class */ (function () {
    function SignUpCompletePage(global, http, viewCtrl, navCtrl, navParams, toastCtrl) {
        var _this = this;
        this.global = global;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        //Recibimos el challenge del paso anterior
        this.playerData = this.navParams.data.player;
        console.log(this.playerData);
        var parameteres = {
            page: 'player',
            playerData: this.playerData
        };
        this.http.post(this.global.urlApiLocal + "/savePlayer.php", parameteres).subscribe(function (resp) {
            var data = resp;
            if (data.status == 1) {
                //this.muestra_alert("titulo","texto1");
                //this.navCtrl.setRoot(HomePage); 
                _this.global.setPlayerData(data.player[0]);
            }
            else {
                if (data.status == 2) {
                }
                else {
                }
            }
        });
        //this.getPlayers();
    }
    SignUpCompletePage.prototype.ionViewWillEnter = function () {
    };
    SignUpCompletePage.prototype.ionViewDidEnter = function () {
        bodymovin.loadAnimation({
            container: document.getElementById('lottie'),
            path: 'assets/animations/newAccount.json',
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
    };
    SignUpCompletePage.prototype.saveAndNext = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__challenges_challenges__["a" /* ChallengesPage */]);
        //console.log(this.challenge);
        //console.log(angular.element('#publico').val());
        /*if(this.challenge.course_name=="" || this.challenge.course_name==undefined){
            
            //Toast para que seleccione campo
            
            const toast = this.toastCtrl.create({
                message: 'Please select a Golf Course to play the Challenge',
                duration: 3000
              });
              toast.present();
            
            
        }else{
            //this.navCtrl.push(NewChallengeStep4Page, {challenge: this.challenge});
              this.navCtrl.push(NewChallengeStep4Page, {challenge: this.challenge});
              
        }*/
    };
    SignUpCompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signupcomplete',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\signupcomplete\signupcomplete.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title>Account Created!</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="backgroundColor" text-center>\n\n<h1>Account Linked!</h1>\n\n<div id="lottie"></div>\n\n<h4>Your account has been set up. Enjoy!</h4>\n<p>We just gave you 200 points to spend in your challenges.</p>\n\n\n</ion-content>\n\n<ion-footer no-border>\n                        \n                        <ion-grid>\n						  <ion-row>\n						    <ion-col col-12>\n						      <button ion-button round color="primary" block text-uppercase block icon-right (click)="saveAndNext()">GO TO CHALLENGES PAGE <ion-icon name="trophy"></ion-icon></button>\n						    </ion-col>\n						    \n						     \n						    \n						  </ion-row>\n						</ion-grid>\n                        \n                  \n                        \n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\signupcomplete\signupcomplete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], SignUpCompletePage);
    return SignUpCompletePage;
}());

//# sourceMappingURL=signupcomplete.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendCardCompletedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myflights_myflights__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendCardCompletedPage = /** @class */ (function () {
    function SendCardCompletedPage(global, http, viewCtrl, navCtrl, navParams, toastCtrl) {
        var _this = this;
        this.global = global;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        //Recibimos el challenge del paso anterior
        this.playerData = this.navParams.data.player;
        console.log(this.playerData);
        var parameteres = {
            page: 'player',
            playerData: this.playerData
        };
        this.http.post(this.global.urlApiLocal + "/savePlayer.php", parameteres).subscribe(function (resp) {
            var data = resp;
            if (data.status == 1) {
                //this.muestra_alert("titulo","texto1");
                //this.navCtrl.setRoot(HomePage); 
                _this.global.setPlayerData(data.player[0]);
            }
            else {
                if (data.status == 2) {
                }
                else {
                }
            }
        });
        //this.getPlayers();
    }
    SendCardCompletedPage.prototype.ionViewWillEnter = function () {
    };
    SendCardCompletedPage.prototype.ionViewDidEnter = function () {
        bodymovin.loadAnimation({
            container: document.getElementById('lottie'),
            path: 'assets/animations/newAccount.json',
            renderer: 'svg',
            loop: true,
            autoplay: true,
        });
    };
    SendCardCompletedPage.prototype.saveAndNext = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__myflights_myflights__["a" /* MyFlightsPage */]);
        //console.log(this.challenge);
        //console.log(angular.element('#publico').val());
        /*if(this.challenge.course_name=="" || this.challenge.course_name==undefined){
            
            //Toast para que seleccione campo
            
            const toast = this.toastCtrl.create({
                message: 'Please select a Golf Course to play the Challenge',
                duration: 3000
              });
              toast.present();
            
            
        }else{
            //this.navCtrl.push(NewChallengeStep4Page, {challenge: this.challenge});
              this.navCtrl.push(NewChallengeStep4Page, {challenge: this.challenge});
              
        }*/
    };
    SendCardCompletedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sendcardcompleted',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\sendcardcompleted\sendcardcompleted.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title>{{ \'SENDCARDTITLE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="backgroundColor" text-center>\n\n<h1>{{ \'SENDCARDTITLE\' | translate }}</h1>\n\n<div id="lottie"></div>\n\n<h4>{{ \'SENDCARDFIRSTLINE\' | translate }}</h4>\n<p>{{ \'SENDCARDSECONDLINE\' | translate }}</p>\n\n\n</ion-content>\n\n<ion-footer no-border>\n                        \n                        <ion-grid>\n						  <ion-row>\n						    <ion-col col-12>\n						      <button ion-button round color="primary" block text-uppercase block icon-right (click)="saveAndNext()">GO TO CHALLENGES PAGE <ion-icon name="trophy"></ion-icon></button>\n						    </ion-col>\n						    \n						     \n						    \n						  </ion-row>\n						</ion-grid>\n                        \n                  \n                        \n</ion-footer>'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\sendcardcompleted\sendcardcompleted.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], SendCardCompletedPage);
    return SendCardCompletedPage;
}());

//# sourceMappingURL=sendcardcompleted.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the MomentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var MomentPipe = /** @class */ (function () {
    function MomentPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    MomentPipe.prototype.transform = function (date, format) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(date).format(format);
    };
    MomentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'moment',
        })
    ], MomentPipe);
    return MomentPipe;
}());

//# sourceMappingURL=moment.js.map

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 406,
	"./af.js": 406,
	"./ar": 407,
	"./ar-dz": 408,
	"./ar-dz.js": 408,
	"./ar-kw": 409,
	"./ar-kw.js": 409,
	"./ar-ly": 410,
	"./ar-ly.js": 410,
	"./ar-ma": 411,
	"./ar-ma.js": 411,
	"./ar-sa": 412,
	"./ar-sa.js": 412,
	"./ar-tn": 413,
	"./ar-tn.js": 413,
	"./ar.js": 407,
	"./az": 414,
	"./az.js": 414,
	"./be": 415,
	"./be.js": 415,
	"./bg": 416,
	"./bg.js": 416,
	"./bm": 417,
	"./bm.js": 417,
	"./bn": 418,
	"./bn-bd": 419,
	"./bn-bd.js": 419,
	"./bn.js": 418,
	"./bo": 420,
	"./bo.js": 420,
	"./br": 421,
	"./br.js": 421,
	"./bs": 422,
	"./bs.js": 422,
	"./ca": 423,
	"./ca.js": 423,
	"./cs": 424,
	"./cs.js": 424,
	"./cv": 425,
	"./cv.js": 425,
	"./cy": 426,
	"./cy.js": 426,
	"./da": 427,
	"./da.js": 427,
	"./de": 428,
	"./de-at": 429,
	"./de-at.js": 429,
	"./de-ch": 430,
	"./de-ch.js": 430,
	"./de.js": 428,
	"./dv": 431,
	"./dv.js": 431,
	"./el": 432,
	"./el.js": 432,
	"./en-au": 433,
	"./en-au.js": 433,
	"./en-ca": 434,
	"./en-ca.js": 434,
	"./en-gb": 435,
	"./en-gb.js": 435,
	"./en-ie": 436,
	"./en-ie.js": 436,
	"./en-il": 437,
	"./en-il.js": 437,
	"./en-in": 438,
	"./en-in.js": 438,
	"./en-nz": 439,
	"./en-nz.js": 439,
	"./en-sg": 440,
	"./en-sg.js": 440,
	"./eo": 441,
	"./eo.js": 441,
	"./es": 442,
	"./es-do": 443,
	"./es-do.js": 443,
	"./es-mx": 444,
	"./es-mx.js": 444,
	"./es-us": 445,
	"./es-us.js": 445,
	"./es.js": 442,
	"./et": 446,
	"./et.js": 446,
	"./eu": 447,
	"./eu.js": 447,
	"./fa": 448,
	"./fa.js": 448,
	"./fi": 449,
	"./fi.js": 449,
	"./fil": 450,
	"./fil.js": 450,
	"./fo": 451,
	"./fo.js": 451,
	"./fr": 452,
	"./fr-ca": 453,
	"./fr-ca.js": 453,
	"./fr-ch": 454,
	"./fr-ch.js": 454,
	"./fr.js": 452,
	"./fy": 455,
	"./fy.js": 455,
	"./ga": 456,
	"./ga.js": 456,
	"./gd": 457,
	"./gd.js": 457,
	"./gl": 458,
	"./gl.js": 458,
	"./gom-deva": 459,
	"./gom-deva.js": 459,
	"./gom-latn": 460,
	"./gom-latn.js": 460,
	"./gu": 461,
	"./gu.js": 461,
	"./he": 462,
	"./he.js": 462,
	"./hi": 463,
	"./hi.js": 463,
	"./hr": 464,
	"./hr.js": 464,
	"./hu": 465,
	"./hu.js": 465,
	"./hy-am": 466,
	"./hy-am.js": 466,
	"./id": 467,
	"./id.js": 467,
	"./is": 468,
	"./is.js": 468,
	"./it": 469,
	"./it-ch": 470,
	"./it-ch.js": 470,
	"./it.js": 469,
	"./ja": 471,
	"./ja.js": 471,
	"./jv": 472,
	"./jv.js": 472,
	"./ka": 473,
	"./ka.js": 473,
	"./kk": 474,
	"./kk.js": 474,
	"./km": 475,
	"./km.js": 475,
	"./kn": 476,
	"./kn.js": 476,
	"./ko": 477,
	"./ko.js": 477,
	"./ku": 478,
	"./ku.js": 478,
	"./ky": 479,
	"./ky.js": 479,
	"./lb": 480,
	"./lb.js": 480,
	"./lo": 481,
	"./lo.js": 481,
	"./lt": 482,
	"./lt.js": 482,
	"./lv": 483,
	"./lv.js": 483,
	"./me": 484,
	"./me.js": 484,
	"./mi": 485,
	"./mi.js": 485,
	"./mk": 486,
	"./mk.js": 486,
	"./ml": 487,
	"./ml.js": 487,
	"./mn": 488,
	"./mn.js": 488,
	"./mr": 489,
	"./mr.js": 489,
	"./ms": 490,
	"./ms-my": 491,
	"./ms-my.js": 491,
	"./ms.js": 490,
	"./mt": 492,
	"./mt.js": 492,
	"./my": 493,
	"./my.js": 493,
	"./nb": 494,
	"./nb.js": 494,
	"./ne": 495,
	"./ne.js": 495,
	"./nl": 496,
	"./nl-be": 497,
	"./nl-be.js": 497,
	"./nl.js": 496,
	"./nn": 498,
	"./nn.js": 498,
	"./oc-lnc": 499,
	"./oc-lnc.js": 499,
	"./pa-in": 500,
	"./pa-in.js": 500,
	"./pl": 501,
	"./pl.js": 501,
	"./pt": 502,
	"./pt-br": 503,
	"./pt-br.js": 503,
	"./pt.js": 502,
	"./ro": 504,
	"./ro.js": 504,
	"./ru": 505,
	"./ru.js": 505,
	"./sd": 506,
	"./sd.js": 506,
	"./se": 507,
	"./se.js": 507,
	"./si": 508,
	"./si.js": 508,
	"./sk": 509,
	"./sk.js": 509,
	"./sl": 510,
	"./sl.js": 510,
	"./sq": 511,
	"./sq.js": 511,
	"./sr": 512,
	"./sr-cyrl": 513,
	"./sr-cyrl.js": 513,
	"./sr.js": 512,
	"./ss": 514,
	"./ss.js": 514,
	"./sv": 515,
	"./sv.js": 515,
	"./sw": 516,
	"./sw.js": 516,
	"./ta": 517,
	"./ta.js": 517,
	"./te": 518,
	"./te.js": 518,
	"./tet": 519,
	"./tet.js": 519,
	"./tg": 520,
	"./tg.js": 520,
	"./th": 521,
	"./th.js": 521,
	"./tk": 522,
	"./tk.js": 522,
	"./tl-ph": 523,
	"./tl-ph.js": 523,
	"./tlh": 524,
	"./tlh.js": 524,
	"./tr": 525,
	"./tr.js": 525,
	"./tzl": 526,
	"./tzl.js": 526,
	"./tzm": 527,
	"./tzm-latn": 528,
	"./tzm-latn.js": 528,
	"./tzm.js": 527,
	"./ug-cn": 529,
	"./ug-cn.js": 529,
	"./uk": 530,
	"./uk.js": 530,
	"./ur": 531,
	"./ur.js": 531,
	"./uz": 532,
	"./uz-latn": 533,
	"./uz-latn.js": 533,
	"./uz.js": 532,
	"./vi": 534,
	"./vi.js": 534,
	"./x-pseudo": 535,
	"./x-pseudo.js": 535,
	"./yo": 536,
	"./yo.js": 536,
	"./zh-cn": 537,
	"./zh-cn.js": 537,
	"./zh-hk": 538,
	"./zh-hk.js": 538,
	"./zh-mo": 539,
	"./zh-mo.js": 539,
	"./zh-tw": 540,
	"./zh-tw.js": 540
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 890;

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scorecard_scorecard__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scores_scores__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ranking_ranking__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TournamentPage = /** @class */ (function () {
    function TournamentPage(global, http, viewCtrl, navCtrl, navParams, domSanitizer, iab) {
        this.global = global;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.domSanitizer = domSanitizer;
        this.iab = iab;
        this.sponsors = [];
        this.toLogin = false;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        //private director1:any;
        this.tournamentSwitch = "info";
        //this.team ="players";
        this.infoCompeticion = this.navParams.data.info;
        console.log(this.infoCompeticion);
        this.nombre = this.infoCompeticion.Name;
        this.localidad = this.infoCompeticion.Locality;
        this.descripcion = this.infoCompeticion.DescriptionLongue;
        var aux = this.infoCompeticion.Date1.date.split(" ");
        this.fecha = aux[0];
        if (this.global.user) {
            this.toLogin = false;
        }
        else {
            this.toLogin = true;
        }
        //Ahora
        var myDate = new Date().getTime();
        //console.log(myDate);
        //Debo sacar la última fecha para saber cuando termina
        if (this.infoCompeticion.Date4 != null && this.infoCompeticion.Date4 != undefined) {
            this.finTorneo = this.infoCompeticion.Date4.date;
            this.horaFinal = this.infoCompeticion.Heure4End.date;
        }
        else if (this.infoCompeticion.Date3 != null && this.infoCompeticion.Date3 != undefined) {
            this.finTorneo = this.infoCompeticion.Date3.date;
            this.horaFinal = this.infoCompeticion.Heure3End.date;
        }
        else if (this.infoCompeticion.Date2 != null && this.infoCompeticion.Date2 != undefined) {
            this.finTorneo = this.infoCompeticion.Date2.date;
            this.horaFinal = this.infoCompeticion.Heure2End.date;
        }
        else {
            this.finTorneo = this.infoCompeticion.Date1.date;
            this.horaFinal = this.infoCompeticion.Heure1End.date;
        }
        //var arrayFechas=this.finTorneo.split(" ");
        var fechaDeFinal = this.finTorneo;
        // var arrayFechas2=this.horaFinal.split(" ");
        var horaDeFinal = this.horaFinal;
        this.finTorneo = fechaDeFinal + " " + horaDeFinal;
        var cumpleanos = new Date(this.finTorneo).getTime();
        cumpleanos = cumpleanos + 3600000; //Le sumo una hora
        console.log(this.finTorneo);
        var transcurso = cumpleanos - myDate;
        console.log(transcurso);
        if (transcurso < 0) {
            this.pasado = true;
        }
        else {
            this.pasado = false;
        }
        ///console.log(moment(this.fecha).isAfter('2010-10-19'));
        //this.fecha=resp.Date1[0].date;
        //console.log(this.fecha);
        if (this.infoCompeticion.CompetitionMaster != null && this.infoCompeticion.CompetitionMaster != undefined) {
            this.puntos = this.infoCompeticion.CompetitionMaster.Scores;
        }
        else {
            this.puntos = [];
        }
        this.competicionId = this.infoCompeticion.Id;
        this.redirectLiveRank = this.global.urlApiLocal + '/redirect.php?id=' + this.infoCompeticion.Id;
        this.urlInscripcion = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.footgolf-france.fr/inscription/1");
        console.log(this.urlInscripcion);
        //this.teamDBId = this.navParams.data.id_database;
        //console.log(this.infoCompeticion);
        this.getSponsors();
        //this.getPlayer();
        //this.getAdmin();	
    }
    TournamentPage.prototype.ionViewWillEnter = function () {
        this.tournamentSwitch = "info";
    };
    TournamentPage.prototype.mivoid = function () { };
    TournamentPage.prototype.openCard = function (playerID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__scorecard_scorecard__["a" /* ScoreCardPage */], { playerID: playerID });
    };
    TournamentPage.prototype.openLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    TournamentPage.prototype.getBackground = function (image) {
        return this.domSanitizer.bypassSecurityTrustStyle("linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(" + image + ")");
    };
    TournamentPage.prototype.openPlayer = function (player) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* PlayerPage */], { player: player });
    };
    TournamentPage.prototype.openRank = function (competicion) {
        this.tournamentSwitch = "rank";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__ranking_ranking__["a" /* RankingPage */], { infoTorneo: competicion });
    };
    TournamentPage.prototype.openFlights = function (competicion) {
        this.tournamentSwitch = "flights";
        console.log(competicion);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__scores_scores__["a" /* ScoresPage */], { infoTorneo: competicion });
    };
    TournamentPage.prototype.getSponsors = function () {
        //console.log(this.teamId);
        var _this = this;
        //this.http.get(this.global.url+"/club/"+this.teamId+"/"+this.global.anyo+"").subscribe((resp:any) => {
        /*  this.http.get(this.global.urlApiLocal+"/getCompeticionInfo.php?file=true&id="+this.infoCompeticion.Id+"&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
          
          this.sponsors=resp;
          
            //this.background=this.getBackground("https://www.footgolf-france.fr/media/cache/evenement/"+this.competicionId+"_"+this.global.anyo);
    
          //console.log(this.sponsors);
    
          
         
    
        }); */
        //this.http.get(this.global.url+"/clubs/2019", {headers}).subscribe((resp:any) => {
        //this.http.get(this.global.urlApiLocal+"/getGolfs.php?file=true&token="+encodeURIComponent(this.global.token)).subscribe((resp:any) => {
        this.http.get(this.global.urlApiLocal + "/getData.php?e=competitionSponsors/" + this.competicionId + "/" + this.infoCompeticion.Year + "&token=" + encodeURIComponent(this.global.token)).subscribe(function (resp) {
            //this.http.get(this.global.url+"/golfs/1/150", {headers}).subscribe((resp:any) => {
            for (var i = 0; i < resp.length; i++) {
                _this.sponsors.push(resp[i]);
            }
            //console.log(resp);
            //this.golfs=resp;
            //console.log(this.golfs);
        });
    };
    TournamentPage.prototype.openBrowser = function () {
        var target = "_system";
        this.iab.create(this.redirectLiveRank, target, this.options);
    };
    TournamentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tournament',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\tournament\tournament.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar hideBackButton>\n    <ion-title><img src="assets/imgs/logo_affg.png" height="35px" class="logo" alt=""></ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="backgroundColor">\n\n<div >\n  <ion-segment [(ngModel)]="tournamentSwitch">\n    <ion-segment-button value="info">\n      {{ \'INFO\' | translate }}\n    </ion-segment-button>\n	<ion-segment-button *ngIf="pasado" value="rank" (click)="openRank(infoCompeticion)">\n      {{ \'RANK\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button *ngIf="!pasado" value="rank" (click)="openBrowser(infoCompeticion)">\n      {{ \'RANK\' | translate }}\n    </ion-segment-button>\n    \n    \n    <ion-segment-button value="flights" (click)="openFlights(infoCompeticion)">\n      {{ \'FLIGHTS\' | translate }}\n    </ion-segment-button>\n    \n    <ion-segment-button value="sponsors">\n      {{ \'SPONSORS\' | translate }}\n    </ion-segment-button>\n    \n    <!--<ion-segment-button value="inscription">\n      {{ \'INSCRIPCION\' | translate }}\n    </ion-segment-button>-->\n    <ion-segment-button *ngIf="toLogin" value="inscription" (click)="openLogin()">\n      {{ \'INSCRIPCION\' | translate }}\n    </ion-segment-button>\n    <ion-segment-button *ngIf="!toLogin" value="inscription">\n      {{ \'INSCRIPCION\' | translate }}\n    </ion-segment-button>\n    \n  </ion-segment>\n</div>\n	\n	\n	<div  [ngSwitch]="tournamentSwitch">\n  <div class="teamCard" padding *ngSwitchCase="\'info\'" text-center>\n    <h1>{{nombre}}</h1>\n    <p class="note">{{localidad}} | {{fecha}}</p>\n    \n    <ion-thumbnail>\n        <img src="https://www.footgolf-france.fr/media/cache/evenement/{{competicionId}}_{{global.anyo}}">\n        \n      </ion-thumbnail>\n      \n      \n   <div *ngIf="descripcion" [innerHTML]="descripcion"></div>   \n    \n    \n    <div class="puntos">\n	    \n	    <ion-list>\n	    	<ion-list-header>\n		    	<ion-item>\n			  \n			  	<ion-row>\n				    <ion-col col-4 text-center>\n				      {{ \'RANK\' | translate }}\n				    </ion-col>\n				    <ion-col col-8 text-center>\n				    {{ \'POINTS\' | translate }}\n				    </ion-col>\n			  	</ion-row>\n			  \n			  </ion-item>\n	    	</ion-list-header>\n		  <ion-item *ngFor="let p of puntos; let i = index">\n		  \n		  	<ion-row>\n			    <ion-col col-4 text-center>\n			      {{i+1}}\n			    </ion-col>\n			    <ion-col col-8 text-center>\n			    {{p}}\n			    </ion-col>\n		  	</ion-row>\n		  \n		  </ion-item>  \n		</ion-list>\n	    \n    </div>\n    \n\n    \n  </div>\n\n  \n  <ion-list padding *ngSwitchCase="\'sponsors\'">\n    \n    \n    \n    <ion-item *ngFor="let s of sponsors" text-center>\n      <img src="https://www.footgolf-france.fr/media/cache/competition_sponsor/{{s.Slug}}">\n    </ion-item>\n\n    \n  </ion-list>\n  \n  \n  \n  \n  \n  <div padding *ngSwitchCase="\'inscription\'">\n	  	  \n\n	    <iframe class= \'webPage\' src="assets/x-frame-bypass-master/index.html"></iframe>\n	  	  \n  </div>\n  \n  \n  \n  \n	</div>\n	\n\n<!--<ion-fab right bottom>\n    <button (click)="openRank(infoCompeticion)" ion-fab color="primary"><ion-icon name="trophy"></ion-icon></button>\n  </ion-fab>-->\n\n</ion-content>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\tournament\tournament.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], TournamentPage);
    return TournamentPage;
}());

//# sourceMappingURL=tournament.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {EmailValidators} from 'ng2-validators';



var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, http, global, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.submitAttempt1 = false;
        this.submitAttempt2 = false;
        this.formLogin = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            surname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            city: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            username: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        });
    }
    RegisterPage_1 = RegisterPage;
    RegisterPage.prototype.ionViewWillEnter = function () {
        //this.getData(); 
    };
    RegisterPage.prototype.muestra_alert = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage.prototype.doSignUp = function () {
        var _this = this;
        var parameteres = {
            page: 'register',
            email: this.formLogin.value.email,
            password: this.formLogin.value.password,
            username: this.formLogin.value.username,
            city: this.formLogin.value.city,
            name: this.formLogin.value.name,
            surname: this.formLogin.value.surname,
        };
        if (this.formLogin.value.email == "" || this.formLogin.value.password == "" || this.formLogin.value.name == "" || this.formLogin.value.surname == "" || this.formLogin.value.city == "") {
            this.submitAttempt1 = true;
        }
        else {
            this.http.post(this.global.urlApiLocal + "/register.php", parameteres).subscribe(function (resp) {
                var data = resp.json();
                if (data.status == 1) {
                    //this.muestra_alert("titulo","texto1");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                }
                else {
                    if (data.status == 2) {
                        _this.muestra_alert("titulo", "User already in the Database");
                    }
                    else {
                        _this.submitAttempt2 = true;
                        //this.muestra_alert("titulo","texto3");
                    }
                }
            });
        }
    };
    RegisterPage.prototype.openPage = function (page) {
        switch (page) {
            case "login":
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                //console.log("results");
                //console.log(slug);
                break;
            case "register":
                this.navCtrl.setRoot(RegisterPage_1);
                //console.log("results");
                //console.log(slug);
                break;
            default:
                this.navCtrl.setRoot(page.component);
                break;
        }
    };
    RegisterPage = RegisterPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'register-page',template:/*ion-inline-start:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\register\register.html"*/'<ion-header no-border color="backColor">\n  <ion-navbar>\n    <button ion-button menuToggle>\n     <svg width="23px" height="16px" viewBox="0 0 23 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->\n                <desc>Created with Sketch.</desc>\n                <defs></defs>\n                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g id="Home" transform="translate(-10.000000, -31.000000)" fill="#ffffff">\n                        <path d="M10,40.1428571 L10,37.8571429 L26.3555556,37.8571429 L26.3555556,40.1428571 L10,40.1428571 Z M10,33.2857143 L10,31 L33,31 L33,33.2857143 L10,33.2857143 Z M10,47 L10,44.7142857 L33,44.7142857 L33,47 L10,47 Z" id="ion-navicon---Ionicons"></path>\n                    </g>\n                </g>\n            </svg>\n    </button>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--<ion-header>\n    <ion-navbar>\n        <button ion-button clear (click)="back()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>-->\n\n<ion-content class="register-page">\n\n\n\n    <form [formGroup]="formLogin" novalidate (submit)="doSignUp()">\n        <ion-grid fixed>\n            <ion-row>\n                <ion-col col-sm-2 col-md-3 col-lg-4 col-xl-3>\n                </ion-col>\n                <ion-col col-12 col-sm-8 col-md-6 col-lg-4 col-xl-6>\n\n                    <ion-list no-lines>\n\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col text-center>\n\n                                    <div class="logo"><img src="assets/imgs/logo_affg.png">\n                                    </div>\n                                    <ion-item>\n                                        <ion-input formControlName="name" type="text" placeholder="{{ \'CHALLENGES.LOGIN.NAME\' | translate }}"></ion-input>\n                                    </ion-item>\n                                    <ion-item>\n                                        <ion-input formControlName="surname" type="text" placeholder="{{ \'CHALLENGES.LOGIN.SURNAME\' | translate }}"></ion-input>\n                                    </ion-item>\n                                    <ion-item>\n                                        <ion-input formControlName="email" type="email" placeholder="{{ \'CHALLENGES.LOGIN.EMAIL\' | translate }}"></ion-input>\n                                    </ion-item>\n                                    <ion-item>\n                                        <ion-input formControlName="username" type="username" placeholder="{{ \'CHALLENGES.LOGIN.USER\' | translate }}"></ion-input>\n                                    </ion-item>\n                                    <ion-item>\n                                        <ion-input formControlName="city" type="city" placeholder="{{ \'CHALLENGES.LOGIN.CITY\' | translate }}"></ion-input>\n                                    </ion-item>\n									<ion-item>\n                                        <ion-input formControlName="password" type="password" placeholder="{{ \'CHALLENGES.LOGIN.PASSWORD\' | translate }}"></ion-input>\n                                    </ion-item>\n                                    \n                                    <div class="error-msg">\n                                        <p ion-text color="danger" *ngIf="!formLogin.controls.email.valid && submitAttempt1">{{ \'CHALLENGES.ERRORS.GENERAL\' | translate }}</p>\n                                    </div>\n\n                                    \n                                    \n                                </ion-col>\n                            </ion-row>\n\n\n\n                            <ion-row>\n\n                                <ion-col col-12 text-center>\n                                    <button type="submit" block ion-button round style="min-width: 80%" color="primary">\n                                        {{ \'CHALLENGES.LOGIN.REGISTER\' | translate }}\n                                    </button>\n                                </ion-col>\n\n                            </ion-row>\n                            <ion-row>\n\n                                <ion-col col-12 text-center>\n                                	<a (click)="openPage(\'login\')" >{{ \'CHALLENGES.LOGIN.ALREADY\' | translate }} <ion-icon name="arrow-forward"></ion-icon></a>\n                                    \n                                </ion-col>\n\n                            </ion-row>\n                        </ion-grid>\n\n\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"E:\UpworkTask\viacheslav\AFFG\AFFG\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
    var RegisterPage_1;
}());

//# sourceMappingURL=register.js.map

/***/ })

},[541]);
//# sourceMappingURL=main.js.map