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
            projects: [
                { projectName: 'Web Sockets', link: 'https://github.com/jatamayo/webSockets' },
                { projectName: 'Flex Box', link: 'https://github.com/jatamayo/FlexBox' },
                { projectName: 'Adventure GAME', link: 'https://github.com/jatamayo/AdventureGame' },
            ]
        },
        {
            img: 'angular.png',
            cardImageType: 'card_image_angular',
            cardContainerType: 'card_image_container_angular',
            cardButtonType: 'button_angular',
            projects: [
                { projectName: 'Portfolio', link: 'https://github.com/jatamayo/Portfolio' },
                { projectName: 'Angular Store', link: 'https://github.com/jatamayo/angularStore' },
                { projectName: 'Angular 8', link: 'https://github.com/jatamayo/Angular8' },
            ]
        },
        {
            img: 'bootstrap.png',
            cardImageType: 'card_image_bootstrap',
            cardContainerType: 'card_image_container_bootstrap',
            cardButtonType: 'button_bootstrap',
            projects: [
                { projectName: 'Bootstrap', link: 'https://github.com/jatamayo/bootstrap' },
                { projectName: 'ADVENTURE GAME', link: 'https://github.com/jatamayo/AdventureGame' },
                { projectName: '', link: '' },
            ]
        },
        {
            img: 'react.png',
            cardImageType: 'card_image_react',
            cardContainerType: 'card_image_container_react',
            cardButtonType: 'button_react',
            projects: [
                { projectName: 'REACT CRUD', link: 'https://github.com/jatamayo/ReactCRUD' },
                { projectName: '', link: '' },
                { projectName: '', link: '' },
            ]
        },
        {
            img: 'js.png',
            cardImageType: 'card_image_js',
            cardContainerType: 'card_image_container_js',
            cardButtonType: 'button_js',
            projects: [
                { projectName: 'Interview API', link: 'https://github.com/jatamayo/InterviewCollegueAPI' },
                { projectName: 'MEAN API', link: 'https://github.com/jatamayo/MEAN_api' },
                { projectName: 'Profesional JS', link: 'https://github.com/jatamayo/cursoProfesionalDeJavaScript' },
            ]
        },
        {
            img: 'css.png',
            cardImageType: 'card_image_css',
            cardContainerType: 'card_image_container_css',
            cardButtonType: 'button_css',
            projects: [
                { projectName: 'SASS', link: 'https://github.com/jatamayo/SASS' },
                { projectName: 'FrontEnd', link: 'https://github.com/jatamayo/frontend-udacity-html-css' },
                { projectName: 'FrontEnd Portfolio', link: 'https://github.com/jatamayo/frontend-portfolio' },
            ]
        },
        {
            img: 'node.png',
            cardImageType: 'card_image_node',
            cardContainerType: 'card_image_container_node',
            cardButtonType: 'button_node',
            projects: [
                { projectName: 'Node JS', link: 'https://github.com/jatamayo/NodeJS' },
                { projectName: 'Node Fundamentals', link: 'https://github.com/jatamayo/fundamentosNodeJS' },
                { projectName: '', link: '' },
            ]
        },
        {
            img: 'python.png',
            cardImageType: 'card_image_python',
            cardContainerType: 'card_image_container_python',
            cardButtonType: 'button_python',
            projects: [
                { projectName: 'Adventure Game', link: 'https://github.com/jatamayo/Python_AdventureGame' },
                { projectName: 'Naval Battle', link: 'https://github.com/jatamayo/python-batalla-naval' },
                { projectName: 'Search Engine', link: 'https://github.com/jatamayo/python-search-engine' },
            ]
        },
        {
            img: 'mongo.png',
            cardImageType: 'card_image_mongo',
            cardContainerType: 'card_image_container_mongo',
            cardButtonType: 'button_mongo',
            projects: [
                { projectName: 'MONGO DB', link: 'https://github.com/jatamayo/MongoDB' },
                { projectName: '', link: '' },
                { projectName: '', link: '' },
            ]
        },
        {
            img: 'sql.png',
            cardImageType: 'card_image_sql',
            cardContainerType: 'card_image_container_sql',
            cardButtonType: 'button_sql',
            projects: [
                { projectName: 'Relational DB', link: 'https://github.com/jatamayo/RelationalDB' },
                { projectName: 'SQL Lite', link: 'https://github.com/jatamayo/SQL_lite' },
                { projectName: '', link: '' },
            ]
        },
        {
            img: 'java.png',
            cardImageType: 'card_image_java',
            cardContainerType: 'card_image_container_java',
            cardButtonType: 'button_java',
            projects: [
                { projectName: 'JAVA SE', link: 'https://github.com/jatamayo/JavaSE' },
                { projectName: 'JAVA CRUD', link: 'https://github.com/jatamayo/JavaCRUD' },
                { projectName: 'JAVA Fundamentals', link: 'https://github.com/jatamayo/JavaFundamentals' },
            ]
        }
    ]

    certifications: Certification[] = [
        { img: 'angular.PNG', title: 'Angular' },
        { img: 'angularAdvanced.PNG', title: 'Angular 6' },
        { img: 'asyncJS.PNG', title: 'Asynchronism with javaScript' },
        { img: 'backendNodejs.PNG', title: 'Backend with NODE' },
        { img: 'ecmascript6.PNG', title: 'ECMASCRIPT 6+' },
        { img: 'gitAndGithub.PNG', title: 'GIT & GITHUB' },
        { img: 'javascriptFundamentals.PNG', title: 'javaScript Fundamentals' },
        { img: 'javaSE.PNG', title: 'Introduction to Java SE' },
        { img: 'nodejs.PNG', title: 'NODE' },
        { img: 'nodejsFundamentals.PNG', title: 'NODE Fundamentals' },
        { img: 'oop.PNG', title: 'Object-oriented Programming' },
        { img: 'publicSpeaking.PNG', title: 'public speaking' },
        { img: 'scrum.PNG', title: 'SRCRUM' },
        { img: 'softwareIngenieringFundamentals.PNG', title: 'Software Engineering Fundamentals' },
    ]

    skills: Skill[] = [
        { title: 'HTML' },
        { title: 'CSS' },
        { title: 'javaScript' },
        { title: 'Angular' },
        { title: 'Bootstrap' },
        { title: 'FlexBox' },
        { title: 'UiPath' },
        { title: 'BluePrism' },
        { title: 'Node' },
        { title: 'Express' },
        { title: 'Unit Testing Mocha' },
        { title: 'Unit Testing JUnit' },
        { title: 'Docker' },
        { title: 'Relationald DB' },
        { title: 'Non-Relational DB' },
        { title: 'JQuery' },
        { title: 'React' },
        { title: 'Material Design' },
        { title: 'Git & Github' },
        { title: 'IONIC' },
        { title: 'Python' },
        { title: 'Java' },
        { title: 'Spring Boot' },
        { title: 'Mockito' },
        { title: 'Linux' },
        { title: 'Scrum' }
    ];

    jobs: Job[] = [
        { img: 'cognits.png', class: 'image_job1' },
        { img: 'pentcloud.png', class: 'image_job2' },
        { img: 'udacity.png', class: 'image_job3' },
        { img: 'capgemini.png', class: 'image_job4' },
        { img: 'bdg.png', class: 'image_job5' },
    ]

    getCardsData() {
        return this.cards;
    }
    getCertificationsData() {
        return this.certifications;
    }
    getSkills() {
        return this.skills;
    }
    getJobs() {
        return this.jobs;
    }
}
