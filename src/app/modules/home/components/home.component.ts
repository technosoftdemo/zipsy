import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { SkillsetModel } from '@core/models/skillset.interface';
import { ProjectDashboard } from '@core/models/project-dashboard.interface';

@Component({
  selector: 'app-home',
  templateUrl: '../templates/template1/views/home.component.html',
  styleUrls: ['../templates/template1/less/home.component.less']

})
export class HomeComponent implements OnInit {
  // single: any[];
  // multi: any[];

  view: any[] = [400, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'No.of Positions';
  autoScale = true;
  barPadding = 10;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  roundEdges: true;

  userName: string;

  // data goes here
  public single = [
    {
      "name": "10-Oct-2019",
      "value": 150
    },
    {
      "name": "09-Oct-2019",
      "value": 100
    },
    {
      "name": "08-Oct-2019",
      "value": 200
    },
    {
      "name": "07-Oct-2019",
      "value": 150
    },
    {
      "name": "06-Oct-2019",
      "value": 50
    },
    {
      "name": "05-Oct-2019",
      "value": 25
    },
    {
      "name": "04-Oct-2019",
      "value": 50
    }
  ];
  public multi = [
    {
      "name": "China",
      "series": [
        {
          "name": "2018",
          "value": 2243772
        },
        {
          "name": "2017",
          "value": 1227770
        }
      ]
    },
    {
      "name": "USA",
      "series": [
        {
          "name": "2018",
          "value": 1126000
        },
        {
          "name": "2017",
          "value": 764666
        }
      ]
    },
    {
      "name": "Norway",
      "series": [
        {
          "name": "2018",
          "value": 296215
        },
        {
          "name": "2017",
          "value": 209122
        }
      ]
    },
    {
      "name": "Japan",
      "series": [
        {
          "name": "2018",
          "value": 257363
        },
        {
          "name": "2017",
          "value": 205350
        }
      ]
    },
    {
      "name": "Germany",
      "series": [
        {
          "name": "2018",
          "value": 196750
        },
        {
          "name": "2017",
          "value": 129246
        }
      ]
    },
    {
      "name": "France",
      "series": [
        {
          "name": "2018",
          "value": 204617
        },
        {
          "name": "2017",
          "value": 149797
        }
      ]
    }
  ];

  skillset: ProjectDashboard[];
  displayedColumns: string[] = ['Project', 'Location', 'Positions', 'Skills', 'Status','Interviewed','Finalized'];

  constructor(private localStorageService: LocalStorageService) {
    //Object.assign(this, { this.single });
  }
  ngOnInit(): void {
    this.fillSkillset();
  }

  onSelect(event) {
    console.log(event);
  }

  fillSkillset() {
    this.skillset = [
      { id: 0, name: 'RAZE', location: 'Hyd', positions: 'System Analyist', skills: '.NET, Angular', status: 'In-progress',interviewed:true, finalized:false },
      { id: 0, name: 'Timesheets', location: 'CHN', positions: 'SSE', skills: '.NET, Angular', status: 'In-progress' ,interviewed:true, finalized:false },
      { id: 0, name: 'RAZE Analytics', location: 'USA', positions: 'Data Scientist', skills: 'Machine Learning, Bigdata', status: 'In-progress' ,interviewed:true, finalized:false },
      { id: 0, name: 'Titan Chatbots', location: 'CAN', positions: 'Product Owner', skills: 'Product Management, Agile', status: 'In-progress',interviewed:true, finalized:false  }
    ]
  }

}