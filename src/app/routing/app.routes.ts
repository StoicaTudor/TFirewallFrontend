import {Route, Routes} from '@angular/router'
import {FirewallLogsComponent} from "../firewall-logs/firewall-logs.component"
import {Paths} from "./RoutingConstants";
import {SignInComponent} from "../sign-in/sign-in.component";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {UsersTableComponent} from "../users-table/users-table.component";

const routes: Routes = [
  {path: Paths.Home, component: UsersTableComponent},
  {path: Paths.Logs, component: FirewallLogsComponent},
  {path: Paths.SignIn, component: SignInComponent},
  {path: Paths.SignUp, component: SignUpComponent},
  // {path: Paths.Empty, redirectTo: Paths.DefaultPath, pathMatch: PathMatch.Full},
  {path: Paths.Undefined, redirectTo: Paths.Home}
]

export const AppRoutingModule: Route[] = routes
