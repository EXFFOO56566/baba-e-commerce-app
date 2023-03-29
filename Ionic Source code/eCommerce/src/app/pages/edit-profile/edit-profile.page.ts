import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

}
