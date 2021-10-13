import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient, HttpParams } from "@angular/common/http";

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Pruebas2Page } from '../pages/pruebas2/pruebas2' ;  
import { ScoresPage } from '../pages/scores/scores';  
import { MyFlightsPage } from '../pages/myflights/myflights';  
import { MatchPage } from '../pages/match/match'; 
import { MatchscoresPage } from '../pages/matchscores/matchscores';  
import { NoticiaPage } from '../pages/noticia/noticia'; 
import { RankingPage } from '../pages/ranking/ranking';  
import { RankingLigaPage } from '../pages/rankingliga/rankingliga'; 
import { RankingTeamPage } from '../pages/rankingteam/rankingteam'; 
import { ScoreslistPage } from '../pages/scoreslist/scoreslist';  
import { LoginPage } from '../pages/login/login';
import { NewsPage } from '../pages/news/news';
import { TeamsPage } from '../pages/teams/teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { TeamPage } from '../pages/team/team';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { PlayerPage } from '../pages/player/player';
import { EventPage } from '../pages/event/event';
import { AboutPage } from '../pages/about/about';
import { GamePage } from '../pages/game/game';
import { StaticPage } from '../pages/static/static';
import { AddScorePage } from '../pages/add-score/add-score';
import { ScoreDetailPage } from '../pages/score-detail/score-detail';
import { ScoreCardPage } from '../pages/scorecard/scorecard';
import { AddFormPage } from '../pages/add-form/add-form';
import { TranslateService } from '@ngx-translate/core';
import { GlobalProvider } from "../providers/global/global";
import { UserProvider } from "../providers/user/user";
import { TabsPage } from '../pages/tabs/tabs'; 
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/***** Nevas páginas, hay que mirar cual se queda y cual no ****/
import { ProfilePage } from '../pages/profile/profile'; 
import { ChallengesPage } from '../pages/challenges/challenges'; 
import { AlertsPage } from '../pages/alerts/alerts'; 
import { MyTeamsPage } from '../pages/myteams/myteams'; 
import { DashboardPage } from '../pages/dashboard/dashboard'; 
import { NewTeamPage } from '../pages/newteam/newteam'; 
import { IntroChallengesPage } from '../pages/intro-challenges/intro-challenges'; 
 
@Component({
  templateUrl: 'app.html' 
})  
export class MyApp {  
  @ViewChild(Nav) nav: Nav;   
  public menuItems:any;
  rootPage: any = HomePage;
   showLevel1 = null;
	showLevel2 = null;
  pages: Array<{title: string, component: any}>;
  
   public options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
	};
  
  

  constructor(public global: GlobalProvider,public user: UserProvider, public http: HttpClient, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public iab: InAppBrowser, public translate: TranslateService) {
    
    translate.setDefaultLang(this.global.language);
     
     //this.startApp();
     
     /*while(this.global.token==undefined){
	     
	     console.log( "no estamos listos, esto debe ser un cargando");
	     
     }*/
     
	 	
     
     
	 	this.global.getMenu();
	 	
	 	this.global.getAPIToken().then(data => { //Necesito el token, sin él no hago nada
	      
		  
		  this.global.updatePlayerData();
		  
	  		
	      
	      this.initializeApp();
	    });
	 	
	
    
	
	
	
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TabsPage },
      //{ title: 'List', component: ListPage },
      { title: 'Live Scores', component: ScoresPage },
      { title: 'News', component: NewsPage },
      { title: 'Teams', component: TeamsPage },
      //{ title: 'MatchPage', component: MatchPage },
      //{ title: 'MatchscoresPage', component: MatchscoresPage },
      //{ title: 'NoticiaPage', component: NoticiaPage },
      { title: 'Rankings', component: RankingPage },
      { title: 'The Tournament', component: EventPage },
      { title: 'About FootGolf', component: AboutPage }
      //{ title: 'ScoreslistPage', component: ScoreslistPage },
    ];
    
   
    

  }
  

  
  
  
  
  
  initializeApp() {
	  
	  
	  
	  
	  //this.global.getClubs();
	  //this.global.getNoticias();
	  //this.global.getVideos();
	  //this.global.getTournamentsTypes();
	  
	  
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      if (this.global.platform.is('cordova')) {
      
      var notificationOpenedCallback = function(jsonData) {
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
  }

  
  openBrowser(url){
	  	
	  	let target = "_system";	  	
    	this.iab.create(url,target,this.options);
	}
  
  
changeLanguage(lang){
	this.translate.use(lang);
}
  
closeTournament(){
	this.global.setTournamentId(-1);
	this.nav.setRoot(TournamentsPage);
}  
  
  
  
 /***** LoGIN ******/
 
 logout() {
        this.global.logout();
        
        this.nav.setRoot(HomePage);
        
    } 
  
  
  listenToLoginEvents() {
        this.global.events.subscribe('user:login', () => {
            //this.global.menu.enable(true);
        });

        this.global.events.subscribe('user:logout', () => {
            this.nav.setRoot(HomePage).then(
                () => {
                    //this.global.menu.enable(false);
                    this.global.user = null;
                }
            );
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

    }
  
  
 /******** END AUTHENTICATION *****/ 
  
  
  
toggleGroup(group) {
    group.show = !group.show;
  };
isGroupShown(group) {
    return group.show;
  };
  
  openPage(page,slug, url) {
    console.log(page);
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);

    switch (page)
    {
      case "home": 
          //this.nav.setRoot(TabsPage,{position:0});
          this.nav.setRoot(HomePage);
          break;
      case "News": 
          this.nav.setRoot(TabsPage,{position:1});
          break;
      case "teams": 
          this.nav.setRoot(TeamsPage);
          break;    
      case "Live Scores": 
          this.nav.setRoot(TabsPage,{position:2});
          break;
       case "rankingliga": 
          this.nav.setRoot(RankingLigaPage,{idLiga:slug});
          break;
      case "rankings": 
          this.nav.setRoot(RankingPage,{slug});
          break;
      case "rankings_team": 
          this.nav.setRoot(RankingTeamPage,{slug});
          break;
      case "match_list": 
          this.nav.setRoot(ScoresPage);
          break;
      case "static": 
          this.nav.setRoot(StaticPage,{id:url});
          break;
      case "external": 
          console.log(url);
          
          this.openBrowser(url);
          
          break;
      case "add_score": 
          console.log("add score");
          this.nav.setRoot(AddScorePage);
          break;
      case "results":
          this.nav.setRoot(ScoresPage,{slug}); 
          console.log("results");
          console.log(slug);
          break;
     case "myflights":
          this.nav.setRoot(MyFlightsPage); 
          //console.log("results");
          //console.log(slug);
          break;
      case "login":
          this.nav.setRoot(LoginPage); 
          //console.log("results");
          //console.log(slug);
          break;
      case "challenges":
          this.nav.setRoot(ChallengesPage); 
          //console.log("results");
          //console.log(slug);
          break;
      case "profile":
          this.nav.setRoot(ProfilePage); 
          //console.log("results");
          //console.log(slug);
          break;   
          
          case "alerts":
          this.nav.setRoot(AlertsPage); 
          //console.log("results");
          //console.log(slug);
          break;    
          
       case "myteams":
          this.nav.setRoot(MyTeamsPage); 
          //console.log("results");
          //console.log(slug);
          break;   
           case "dashboard":
          this.nav.setRoot(DashboardPage); 
          //console.log("results");
          //console.log(slug);
          break;    
            case "newteam":
          this.nav.setRoot(NewTeamPage); 
          //console.log("results");
          //console.log(slug);
          break;     
            case "intro-challenges":
          this.nav.setRoot(IntroChallengesPage); 
          //console.log("results");
          //console.log(slug);
          break;      
      default:
          this.nav.setRoot(page.component); 
          break;
    }
  }
}
 