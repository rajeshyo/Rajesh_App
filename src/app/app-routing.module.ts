import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'skills', loadChildren: './skills/skills.module#SkillsPageModule' },
  { path: 'awards', loadChildren: './awards/awards.module#AwardsPageModule' },
  { path: 'education', loadChildren: './education/education.module#EducationPageModule' },
  { path: 'resume', loadChildren: './resume/resume.module#ResumePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
