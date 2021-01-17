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
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/html.png?alt=media&token=711d7c37-f43f-405d-85c7-48d351e7b6c8',
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
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/angular.png?alt=media&token=6a970ad0-f9ab-431c-b057-fc45bb6f2cc7',
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
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/bootstrap.png?alt=media&token=0e055d02-a9b6-4cb1-89c6-0f3dd8c1ef7d',
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
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/react.png?alt=media&token=37146bb5-d262-4e36-b319-eaebc2f83b7b',
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
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/js.png?alt=media&token=75a474c0-03cf-4667-9dc5-12712834363f',
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
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/css.png?alt=media&token=4737a77c-d956-463b-aaf7-cf8acc730a04',
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
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/node.png?alt=media&token=91918fbb-6b1e-49dc-9aa5-47f7a4a172fa',
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
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/python.png?alt=media&token=a1b7aaa5-9734-43f7-aad8-29c06390b03d',
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
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/mongo.png?alt=media&token=5a5a81cb-ee91-491a-9482-727fc5fc5abf',
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
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/sql.png?alt=media&token=11ad2199-e0ad-4a70-929d-cec39ddbff5f',
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
            img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/java.png?alt=media&token=e5763588-3d11-45ae-a10c-e04dbad4bf35',
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
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/angular.PNG?alt=media&token=ea4760be-2960-4d67-8123-09e0f0c2b034', title: 'Angular' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/angularAdvanced.PNG?alt=media&token=98827d8d-4831-4c31-9ef5-d3537d64ac70', title: 'Angular 6' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/asyncJS.PNG?alt=media&token=9a158464-377e-48f5-b5e5-9b50f59dd9ed', title: 'Asynchronism with javaScript' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/backendNodejs.PNG?alt=media&token=acb41d02-e9d4-4316-825b-70b488c4b211', title: 'Backend with NODE' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/ecmascript6.PNG?alt=media&token=6bbb9ed9-e780-47ae-9ee8-4c23b70a9508', title: 'ECMASCRIPT 6+' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/gitAndGithub.PNG?alt=media&token=1b10a9f6-6358-4bce-893c-71b7639251ab', title: 'GIT & GITHUB' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/javascriptFundamentals.PNG?alt=media&token=10cfdaba-5516-483c-b639-82371981096b', title: 'javaScript Fundamentals' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/javaSE.PNG?alt=media&token=1cb66cde-333f-4489-9091-8cdf3c82b9d2', title: 'Introduction to Java SE' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/nodejs.PNG?alt=media&token=8d533fcc-7906-49ec-848f-91032c206850', title: 'NODE' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/nodejsFundamentals.PNG?alt=media&token=9095fa52-a1f4-41de-9ecf-48ce5b06a34b', title: 'NODE Fundamentals' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/oop.PNG?alt=media&token=f8b93355-c0fd-4b24-b2bc-79d8f0aade6e', title: 'Object-oriented Programming' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/publicSpeaking.PNG?alt=media&token=70c067ce-8a83-4f90-b3be-9ab70e85d191', title: 'public speaking' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/scrum.PNG?alt=media&token=d2f9a08d-9ada-4d33-b083-1cf5181d302a', title: 'SRCRUM' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/softwareIngenieringFundamentals.PNG?alt=media&token=f3de9bd9-678e-4f5d-8f28-35eb1d8c4f15', title: 'Software Engineering Fundamentals' },
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
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/cognits.png?alt=media&token=2c5ca667-249f-4f17-a892-a719aee7713a', class: 'image_job1' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/pentcloud.png?alt=media&token=5e1a5ff0-a82a-47cd-bc49-0801b502be8c', class: 'image_job2' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/udacity.png?alt=media&token=7ec581c2-31d8-4abd-9974-e55f665fc059', class: 'image_job3' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/capgemini.png?alt=media&token=eae84781-d5a7-4e21-99c8-29241d17d6c9', class: 'image_job4' },
        { img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4c6ee.appspot.com/o/bdg.png?alt=media&token=6a683b88-0c97-458a-bae3-185f37b6e260', class: 'image_job5' },
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
