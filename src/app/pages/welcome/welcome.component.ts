import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  imports: [],
})
export class WelcomeComponent {
  features = [
    'An enterprise-class UI design language for Angular applications.',
    '60+ high-quality Angular components out of the box.',
    'Written in TypeScript with complete defined types.',
    'Support OnPush mode, high performance.',
    'Powerful theme customization in every detail.',
    'Internationalization support for dozens of languages.',
  ];
  companies = [
    'Alibaba',
    'Aliyun',
    'ThoughtWorks',
    'China Merchants Bank',
    'Ververica',
    'Apache Flink',
    'Apache Zeppelin',
    'Apache Submarine',
    'Apache Metron',
    'Process Automation Group',
    'AISINOCO',
    'GongDao',
    'UC Express',
    'Qingflow',
    'DataGrand',
    'ScentBird',
    'Southern Institute of Technology',
    'Hapify (Dynamic boilerplates tool)'
  ];
}
