import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { Observable } from 'rxjs';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'pg-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  options: AnimationOptions = {
    path: 'assets/animations/loading.json',
  };
  loading$: Observable<boolean>;
  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.loading$ = this.helperService.loading();
  }
}
