
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./_shared/auth.guard";

export const routes: Routes = [
  {
    path: "myquiz",
    loadChildren: "./myquiz/quiz.module#QuizModule",
    canActivate: [AuthGuard]
  },
  {
    path: "admin",
    loadChildren: "./questions/questions.module#QuestionsModule"
  },
  {
    path: "quiz",
    loadChildren: "./quiz/quiz.module#QuizModule",
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    loadChildren: "./auth/auth.module#AuthModule"
  },
  {
    path: "",
    component: AppComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
