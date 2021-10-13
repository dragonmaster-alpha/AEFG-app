import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
 
import { HttpModule, Http } from '@angular/http';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx'; 
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home'; 
import { ListPage } from '../pages/list/list';
import { Pruebas2Page } from '../pages/pruebas2/pruebas2'; 
import { ScoresPage } from '../pages/scores/scores';
import { MyFlightsPage } from '../pages/myflights/myflights';

import { ScoreDetailPage } from '../pages/score-detail/score-detail';
import { StaticPage } from '../pages/static/static';
import { TabsPage } from '../pages/tabs/tabs';

/***** Componentes *****/

import {OneOfTwoComponent} from '../components/one-of-two/one-of-two';




import { SignaturePage } from '../pages/signature/signature';
import { MatchPage } from '../pages/match/match';
import { MatchscoresPage } from '../pages/matchscores/matchscores';
import { NoticiaPage } from '../pages/noticia/noticia';
import { RankingPage } from '../pages/ranking/ranking'; 
import { RankingLigaPage } from '../pages/rankingliga/rankingliga'; 
import { RankingTeamPage } from '../pages/rankingteam/rankingteam';
import { ScoreslistPage } from '../pages/scoreslist/scoreslist';   
import { ScoreCardPage } from '../pages/scorecard/scorecard';  
import { LoginPage } from '../pages/login/login';
import { NewsPage } from '../pages/news/news';  
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { TeamsPage } from '../pages/teams/teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { SearchTournamentsPage } from '../pages/searchtournaments/searchtournaments';
import { TournamentsTypePage } from '../pages/tournamentstype/tournamentstype';

import { TeamPage } from '../pages/team/team';
import { TournamentPage } from '../pages/tournament/tournament';
import { GolfsPage } from '../pages/golfs/golfs';
import { GolfsMapPage } from '../pages/golfsMap/golfsMap';
import { GolfMapPage } from '../pages/golfMap/golfMap';

import { GolfPage } from '../pages/golf/golf';
import { PlayerPage } from '../pages/player/player';
import { PlayerScorePage } from '../pages/player-score/player-score';
import { EventPage } from '../pages/event/event';
import { AboutPage } from '../pages/about/about';
import { GamePage } from '../pages/game/game'; 
import { AddScorePage } from '../pages/add-score/add-score';
import { AddFormPage } from '../pages/add-form/add-form'; 

import { StatusBar } from '@ionic-native/status-bar'; 
import { SplashScreen } from '@ionic-native/splash-screen';   
import { GlobalProvider } from '../providers/global/global'; 
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ScoreComponent } from '../components/score/score'; 
import { LineahoyoComponent } from '../components/lineahoyo/lineahoyo';

import { FavoriteProvider } from '../providers/favorite/favorite';
import { UserProvider } from '../providers/user/user';
import { FlightsProvider } from '../providers/flights/flights';
import { IonicStorageModule } from '@ionic/storage';
import { ActionSheetService } from '../providers/ActionSheetService/ActionSheetService';
import { SignaturePadModule } from 'angular2-signaturepad';

/**** Nuevas Páginas Version 0.0.5*/

import { RecoverPasswordPage } from '../pages/recover-password/recover-password'; 
import { RegisterPage } from '../pages/register/register'; 
import { ProfilePage } from '../pages/profile/profile'; 
import { ChallengesPage } from '../pages/challenges/challenges'; 
import { ChallengePage } from '../pages/challenge/challenge'; 
import { AlertsPage } from '../pages/alerts/alerts';
import { MyTeamsPage } from '../pages/myteams/myteams';
import { MyTeamPage } from '../pages/myteam/myteam';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { NewTeamPage } from '../pages/newteam/newteam';
import { IntroChallengesPage } from '../pages/intro-challenges/intro-challenges';
import { NewChallengePage } from '../pages/newchallenge/newchallenge';
import { NewChallengeStep2Page } from '../pages/newchallengestep2/newchallengestep2';
import { NewChallengeStep3Page } from '../pages/newchallengestep3/newchallengestep3';
import { NewChallengeStep4Page } from '../pages/newchallengestep4/newchallengestep4';
import { NewChallengeStep5Page } from '../pages/newchallengestep5/newchallengestep5';
import { SignUpCompletePage } from "../pages/signupcomplete/signupcomplete";
import { SendCardCompletedPage } from "../pages/sendcardcompleted/sendcardcompleted";
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';

/***** Pipes *****/
import { MomentPipe} from '../pipes/moment/moment';

export function setTranslateLoader(http: HttpClient) {
return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [  
    MyApp,
    HomePage,
    ListPage,
    Pruebas2Page,
    ScoresPage, 
    MyFlightsPage, 
    ScoreComponent, 
    LineahoyoComponent,
    MatchPage,
    MatchscoresPage,
    NoticiaPage, 
    RankingPage,
    RankingLigaPage,
    RankingTeamPage,
    ScoreslistPage,
    LoginPage,
    TournamentsPage,
    TabsPage,
    NewsPage,
    NewsDetailPage,
    TeamsPage,
    TeamPage,
    GolfsPage,
    GolfsMapPage,
    GolfPage,
    PlayerPage,
    EventPage,
    AboutPage,
    GamePage,
    StaticPage,
    AddScorePage,
    AddFormPage,
    ScoreDetailPage,
    PlayerScorePage,
    TournamentsTypePage,
     TournamentPage,
         GolfMapPage,
SearchTournamentsPage,
    ScoreCardPage,
    SignaturePage,
    RecoverPasswordPage,
    RegisterPage,
    ProfilePage,
    ChallengesPage,
    ChallengePage,
    AlertsPage,
    MyTeamsPage,
    MyTeamPage,
    DashboardPage,
    NewTeamPage,
    IntroChallengesPage,
    NewChallengePage,
    NewChallengeStep2Page,
    NewChallengeStep3Page,
    NewChallengeStep4Page,
    NewChallengeStep5Page,
    OneOfTwoComponent,
    SignUpCompletePage,
    SendCardCompletedPage,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    SignaturePadModule,
    IonicModule.forRoot(MyApp),
    HttpModule, HttpClientModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
		loader: {
		provide: TranslateLoader,
		useFactory: (setTranslateLoader),
		deps: [HttpClient]
		}
		})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Pruebas2Page,
    ScoresPage,
    MyFlightsPage,
    MatchPage,
    MatchscoresPage,
    NoticiaPage,
    RankingPage,
    RankingTeamPage,
    ScoreslistPage ,
    LoginPage,
    TabsPage,
    NewsPage,
    NewsDetailPage,
    TeamsPage,
    TeamPage,
        GolfsPage,
        RankingLigaPage,
    GolfPage,
    GolfsMapPage,
        GolfMapPage,
SearchTournamentsPage,
    TournamentsPage,
    PlayerPage,
    EventPage,
    AboutPage,
    GamePage,
    StaticPage,
    AddScorePage,
    TournamentsTypePage,
    AddFormPage,
    ScoreDetailPage,
    PlayerScorePage,
    TournamentPage,
    ScoreCardPage,
    SignaturePage,
    RecoverPasswordPage,
    RegisterPage,
    ProfilePage,
    ChallengesPage,
    ChallengePage,
    AlertsPage,
    MyTeamsPage,
    MyTeamPage,
    DashboardPage,
    NewTeamPage,
    IntroChallengesPage,
    NewChallengePage,
    NewChallengeStep2Page,
    NewChallengeStep3Page,
    NewChallengeStep4Page,
    NewChallengeStep5Page,
    SignUpCompletePage,
    SendCardCompletedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    FlightsProvider,
    FavoriteProvider,
    UserProvider,
    InAppBrowser,
    ActionSheetService,
    LaunchNavigator,
    NativeStorage,
    Geolocation,
    LocationAccuracy
  ]
})
export class AppModule {}
 