import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Card } from '../../../app/model/card';
import { Certification } from '../../../app/model/certifications';
import { Skill } from '../../../app/model/skills';
import { Job } from '../../../app/model/jobs';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css', './landing-page-mediaQuery.component.css']
})
export class LandingPageComponent implements OnInit {

    cards: Card[];
    Certifications: Certification[];
    skills: Skill[];
    jobs: Job[];

    certificateImage;

    constructor(private appService: AppService) { }

    ngOnInit(): void {
        this.cards = this.appService.getCardsData();
        this.Certifications = this.appService.getCertificationsData();
        this.skills = this.appService.getSkills();
        this.jobs = this.appService.getJobs();
    }
    certificate(img){
        this.certificateImage = img;
    }
}
