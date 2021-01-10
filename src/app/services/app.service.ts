import { Injectable } from '@angular/core';
import { Card } from '../../app/model/card';
import { Certification } from '../../app/model/certifications';
import { Skill } from '../../app/model/skills';
import { Job } from '../../app/model/jobs';



@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor() { }

    cards: Card[] = [
        {   
            img: 'html.png',    
            cardImageType: 'card_image_html',   
            cardContainerType: 'card_image_container_html',
            cardButtonType: 'button_html',
            projects: {
                project1: 'testing 1',
                project2: 'testing 2',
                project3: 'testing 3',
            }    
        },
        {   
            img: 'angular.png',    
            cardImageType: 'card_image_angular',   
            cardContainerType: 'card_image_container_angular',
            cardButtonType: 'button_angular',
            projects: {
                project1: 'testing 1',
                project2: 'testing 2',
                project3: 'testing 3',
            }    
        },
        {   
            img: 'bootstrap.png',    
            cardImageType: 'card_image_bootstrap',   
            cardContainerType: 'card_image_container_bootstrap',
            cardButtonType: 'button_bootstrap',
            projects: {
                project1: 'testing 1',
                project2: 'testing 2',
                project3: 'testing 3',
            }    
        },
        {   
            img: 'node.png',    
            cardImageType: 'card_image_node',   
            cardContainerType: 'card_image_container_node',
            cardButtonType: 'button_node',
            projects: {
                project1: 'testing 1',
                project2: 'testing 2',
                project3: 'testing 3',
            }    
        },
        {   
            img: 'react.png',    
            cardImageType: 'card_image_react',   
            cardContainerType: 'card_image_container_react',
            cardButtonType: 'button_react',
            projects: {
                project1: 'testing 1',
                project2: 'testing 2',
                project3: 'testing 3',
            }    
        },
        {   
            img: 'js.png',    
            cardImageType: 'card_image_js',   
            cardContainerType: 'card_image_container_js',
            cardButtonType: 'button_js',
            projects: {
                project1: 'testing 1',
                project2: 'testing 2',
                project3: 'testing 3',
            }    
        },
        {   
            img: 'python.png',    
            cardImageType: 'card_image_python',   
            cardContainerType: 'card_image_container_python',
            cardButtonType: 'button_python',
            projects: {
                project1: 'testing 1',
                project2: 'testing 2',
                project3: 'testing 3',
            }    
        },
        {   
            img: 'mongo.png',    
            cardImageType: 'card_image_mongo',   
            cardContainerType: 'card_image_container_mongo',
            cardButtonType: 'button_mongo',
            projects: {
                project1: 'testing 1',
                project2: 'testing 2',
                project3: 'testing 3',
            }    
        },
        {   
            img: 'sql.png',    
            cardImageType: 'card_image_sql',   
            cardContainerType: 'card_image_container_sql',
            cardButtonType: 'button_sql',
            projects: {
                project1: 'testing 1',
                project2: 'testing 2',
                project3: 'testing 3',
            }    
        },
        {   
            img: 'c.png',    
            cardImageType: 'card_image_c',   
            cardContainerType: 'card_image_container_c',
            cardButtonType: 'button_c',
            projects: {
                project1: 'testing 1',
                project2: 'testing 2',
                project3: 'testing 3',
            }    
        },
        {   
            img: 'java.png',    
            cardImageType: 'card_image_java',   
            cardContainerType: 'card_image_container_java',
            cardButtonType: 'button_java',
            projects: {
                project1: 'testing 1',
                project2: 'testing 2',
                project3: 'testing 3',
            }    
        }
    ]

    certifications: Certification[] = [
        {img: 'angular.PNG', title: 'Angular'},
        {img: 'angularAdvanced.PNG', title: 'Angular 6'},
        {img: 'asyncJS.PNG', title: 'Asynchronism with javaScript'},
        {img: 'backendNodejs.PNG', title: 'Backend with NODE'},
        {img: 'ecmascript6.PNG', title: 'ECMASCRIPT 6+'},
        {img: 'gitAndGithub.PNG', title: 'GIT & GITHUB'},
        {img: 'javascriptFundamentals.PNG', title: 'javaScript Fundamentals'},
        {img: 'javaSE.PNG', title: 'Introduction to Java SE'},
        {img: 'nodejs.PNG', title: 'NODE'},
        {img: 'nodejsFundamentals.PNG', title: 'NODE Fundamentals'},
        {img: 'oop.PNG', title: 'Object-oriented Programming'},
        {img: 'publicSpeaking.PNG', title: 'public speaking'},
        {img: 'scrum.PNG', title: 'SRCRUM'},
        {img: 'softwareIngenieringFundamentals.PNG', title: 'Software Engineering Fundamentals'},
    ]

    skills: Skill[] = [
        {title: 'HTML'},
        {title: 'CSS'},
        {title: 'javaScript'},
        {title: 'Angular'},
        {title: 'Bootstrap'},
        {title: 'FlexBox'},
        {title: 'UiPath'},
        {title: 'BluePrism'},
        {title: 'Node'},
        {title: 'Express'},
        {title: 'Unit Testing Mocha'},
        {title: 'Unit Testing JUnit'},
        {title: 'Docker'},
        {title: 'Relationald DB'},
        {title: 'Non-Relational DB'},
        {title: 'JQuery'},
        {title: 'React'},
        {title: 'Material Design'},
        {title: 'Git & Github'},
        {title: 'IONIC'},
        {title: 'Python'},
        {title: 'Java'},
        {title: 'Spring Boot'},
        {title: 'Mockito'},
        {title: 'Linux'},
        {title: 'Scrum'}
    ];

    jobs: Job[] = [
        {img: 'cognits.png', class: 'image_job1'},
        {img: 'pentcloud.png', class: 'image_job2'},
        {img: 'udacity.png', class: 'image_job2'},
        {img: 'capgemini.png', class: 'image_job3'},
        {img: 'bdg.png', class: 'image_job4'},
    ]

    getCardsData(){
        return this.cards;
    }
    getCertificationsData(){
        return this.certifications;
    }
    getSkills(){
        return this.skills;
    }
    getJobs(){
        return this.jobs;
    }
}