import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

export class Villa {
  id: number;
  chambers: number;
  surface_land: number;
  surface_house: number;
  rent_pernight: number;
  name: string;
  maid: number;
  electricity: number;
  clothing_water: number;
  buying_price: string;
  resale_price: string;
  description: string;
}
export class Choice {
  choice_AOPR: string;
  AOPR: number;
  villa_id: number;
  revenue_annual: string;
  revenue_monthly: string;
  rateofprofit: number;
  amortization: number;
}

const VILLAS: Villa[] = [
  { id: 1, chambers: 1, surface_land: 3, surface_house: 70, rent_pernight: 50, name: 'GREEN', maid: 80, electricity: 30, clothing_water: 10, buying_price: "70.000", resale_price: "105.000", description: '' },
  { id: 2, chambers: 2, surface_land: 3, surface_house: 100, rent_pernight: 80, name: 'PARADISE', maid: 80, electricity: 60, clothing_water: 20, buying_price: "100.000", resale_price: "150.000", description: '' },
  { id: 3, chambers: 2, surface_land: 4, surface_house: 100, rent_pernight: 90, name: 'BOUDHA', maid: 80, electricity: 60, clothing_water: 20, buying_price: "100.000", resale_price: "150.000", description: '' },
  { id: 4, chambers: 2, surface_land: 5, surface_house: 130, rent_pernight: 100, name: 'CANTIK', maid: 80, electricity: 60, clothing_water: 20, buying_price: "130.000", resale_price: "195.000", description: '' },
  { id: 5, chambers: 3, surface_land: 5, surface_house: 130, rent_pernight: 110, name: 'SAWAH', maid: 80, electricity: 90, clothing_water: 30, buying_price: "130.000", resale_price: "195.000", description: '' },
  { id: 6, chambers: 4, surface_land: 6, surface_house: 180, rent_pernight: 200, name: 'KODOK', maid: 100, electricity: 120, clothing_water: 140, buying_price: "180.000", resale_price: "270.000", description: '' },
  { id: 7, chambers: 5, surface_land: 7, surface_house: 213.5, rent_pernight: 260, name: 'LOTUS', maid: 200, electricity: 150, clothing_water: 50, buying_price: "213.500", resale_price: "320.250", description: '' },
  { id: 8, chambers: 6, surface_land: 7, surface_house: 260.5, rent_pernight: 350, name: 'FRANGIPANI', maid: 300, electricity: 180, clothing_water: 60, buying_price: "260.500", resale_price: "390.750", description: '' },
  { id: 9, chambers: 6, surface_land: 8.74, surface_house: 285, rent_pernight: 400, name: 'ORCHIDE', maid: 300, electricity: 180, clothing_water: 60, buying_price: "285.000", resale_price: "427.500", description: '' },
  { id: 10, chambers: 6, surface_land: 15, surface_house: 300, rent_pernight: 500, name: 'JUJUNG', maid: 300, electricity: 180, clothing_water: 60, buying_price: "365.000", resale_price: "547.500", description: '' }
  /* ,{ id: 11, chambers: 8, surface_land: 8.7, surface_house: 500, rent_pernight: 600, name: 'TIRTA', maid: 400, electricity: 240, clothing_water: 80, buying_price: "500.000", resale_price: "750.000", description: '' }*/
]

const CHOICES: Choice[] = [
  { choice_AOPR: "1-50", AOPR: 50, villa_id: 1, revenue_annual: "9.125", revenue_monthly: "760", rateofprofit: 13, amortization: 8},
  { choice_AOPR: "1-60", AOPR: 60, villa_id: 1, revenue_annual: "10.950", revenue_monthly: "913", rateofprofit: 16, amortization: 6.5},
  { choice_AOPR: "1-70", AOPR: 70, villa_id: 1, revenue_annual: "12.775", revenue_monthly: "1.065", rateofprofit: 18, amortization: 5.5},
  { choice_AOPR: "2-50", AOPR: 50, villa_id: 2, revenue_annual: "16.425", revenue_monthly: "1.368", rateofprofit: 16, amortization: 6},
  { choice_AOPR: "2-60", AOPR: 60, villa_id: 2, revenue_annual: "19.710", revenue_monthly: "1.642", rateofprofit: 20, amortization: 5},
  { choice_AOPR: "2-70", AOPR: 70, villa_id: 2, revenue_annual: "22.995", revenue_monthly: "1.916", rateofprofit: 23, amortization: 4.5},
  { choice_AOPR: "3-50", AOPR: 50, villa_id: 3, revenue_annual: "16.425", revenue_monthly: "1.369", rateofprofit: 16, amortization: 6},
  { choice_AOPR: "3-60", AOPR: 60, villa_id: 3, revenue_annual: "19.710", revenue_monthly: "1.643", rateofprofit: 20, amortization: 5},
  { choice_AOPR: "3-70", AOPR: 70, villa_id: 3, revenue_annual: "22.995", revenue_monthly: "1.916", rateofprofit: 23, amortization: 4.5},
  { choice_AOPR: "4-50", AOPR: 50, villa_id: 4, revenue_annual: "18.250", revenue_monthly: "1.521", rateofprofit: 14, amortization: 7},
  { choice_AOPR: "4-60", AOPR: 60, villa_id: 4, revenue_annual: "21.900", revenue_monthly: "1.825", rateofprofit: 17, amortization: 6},
  { choice_AOPR: "4-70", AOPR: 70, villa_id: 4, revenue_annual: "25.550", revenue_monthly: "2.129", rateofprofit: 20, amortization: 5},
  { choice_AOPR: "5-50", AOPR: 50, villa_id: 5, revenue_annual: "20.075", revenue_monthly: "1.673", rateofprofit: 15, amortization: 6.5},
  { choice_AOPR: "5-60", AOPR: 60, villa_id: 5, revenue_annual: "24.090", revenue_monthly: "2.008", rateofprofit: 19, amortization: 5.5},
  { choice_AOPR: "5-70", AOPR: 70, villa_id: 5, revenue_annual: "28.105", revenue_monthly: "2.342", rateofprofit: 22, amortization: 4.5},
  { choice_AOPR: "6-50", AOPR: 50, villa_id: 6, revenue_annual: "36.500", revenue_monthly: "3.042", rateofprofit: 20, amortization: 5},
  { choice_AOPR: "6-60", AOPR: 60, villa_id: 6, revenue_annual: "43.800", revenue_monthly: "3.650", rateofprofit: 24, amortization: 4.2},
  { choice_AOPR: "6-70", AOPR: 70, villa_id: 6, revenue_annual: "51.100", revenue_monthly: "4.258", rateofprofit: 28, amortization: 3.6},
  { choice_AOPR: "7-50", AOPR: 50, villa_id: 7, revenue_annual: "47.450", revenue_monthly: "3.954", rateofprofit: 22, amortization: 4.5},
  { choice_AOPR: "7-60", AOPR: 60, villa_id: 7, revenue_annual: "56.940", revenue_monthly: "4.745", rateofprofit: 27, amortization: 3.8},
  { choice_AOPR: "7-70", AOPR: 70, villa_id: 7, revenue_annual: "66.430", revenue_monthly: "5.536", rateofprofit: 31, amortization: 3.2},
  { choice_AOPR: "8-50", AOPR: 50, villa_id: 8, revenue_annual: "63.875", revenue_monthly: "5.323", rateofprofit: 25, amortization: 5},
  { choice_AOPR: "8-60", AOPR: 60, villa_id: 8, revenue_annual: "76.650", revenue_monthly: "6.388", rateofprofit: 29, amortization: 4.2},
  { choice_AOPR: "8-70", AOPR: 70, villa_id: 8, revenue_annual: "89.425", revenue_monthly: "7.452", rateofprofit: 34, amortization: 3.4},
  { choice_AOPR: "9-50", AOPR: 50, villa_id: 9, revenue_annual: "73.000", revenue_monthly: "6.083", rateofprofit: 26, amortization: 4},
  { choice_AOPR: "9-60", AOPR: 60, villa_id: 9, revenue_annual: "87.600", revenue_monthly: "7.300", rateofprofit: 31, amortization: 3.2},
  { choice_AOPR: "9-70", AOPR: 70, villa_id: 9, revenue_annual: "102.200", revenue_monthly: "5.817", rateofprofit: 36, amortization: 2.8},
  { choice_AOPR: "10-50", AOPR: 50, villa_id: 10, revenue_annual: "91.650", revenue_monthly: "7.604", rateofprofit: 25, amortization: 4},
  { choice_AOPR: "10-60", AOPR: 60, villa_id: 10, revenue_annual: "109.500", revenue_monthly: "9.125", rateofprofit: 30, amortization: 3.5},
  { choice_AOPR: "10-70", AOPR: 70, villa_id: 10, revenue_annual: "127.750", revenue_monthly: "10.645", rateofprofit: 35, amortization: 3}
  /* ,{ choice_AOPR: "11-50", AOPR: 50, villa_id: 11, revenue_annual: "109.500", revenue_monthly: "9.125", rateofprofit: 22, amortization: 4.6},
  { choice_AOPR: "11-60", AOPR: 60, villa_id: 11, revenue_annual: "131.400", revenue_monthly: "10.950", rateofprofit: 26, amortization: 3.8},
  { choice_AOPR: "11-70", AOPR: 70, villa_id: 11, revenue_annual: "153.300", revenue_monthly: "12.775", rateofprofit: 31, amortization: 3.3}*/
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
        trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({opacity:0}),
      animate(500, style({opacity:1})) 
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(500, style({opacity:0})) 
    ])
  ])
  ]
})
export class AppComponent {
  villas = VILLAS;
  selectedVillaObj = 0;
  selectedChoice = 0;
  isValid = 0;
  annual_revenue = "";
  monthly_revenue = "";
  gross_profit = "";
  amortization = "";
  maid_expense = 0;
  electricity_expense = 0;
  clothing_water_expense = 0;
  buying_price = "";
  rent_pernight = 0;
  resale_price = "";
  radioFlag:number = 0;
  selection_description = "";

  Choices = CHOICES;

  onChangeSelectObj(newObj) {
    console.log(newObj); // select dropdown value
    this.selectedVillaObj = newObj;
    this.resetvalues(); // reset values
    this.animateTopDescription();
    
      for(let i of this.villas){
          if(i.id==newObj){

              // independent of radio button choice // based on villa
              this.maid_expense=i.maid;
              this.electricity_expense=i.electricity;
              this.clothing_water_expense=i.clothing_water;
              this.buying_price=i.buying_price;
              this.rent_pernight=i.rent_pernight;
              this.resale_price = i.resale_price;
          }
      }

  }

  onAPORradioChange(newRadioVal) {
    console.log(newRadioVal.target.value); // radio value
    if(typeof(this.selectedVillaObj) !== 'undefined') {
      // both inputs selected correctly ready for calculation
      console.log("calculation began");
      var tempVilla = this.selectedVillaObj;
      var tempChoice =  newRadioVal.target.value;
      this.selectedChoice = newRadioVal.target.value;
      var tempChoiceAOPR = tempVilla+"-"+tempChoice;
      console.log(tempChoiceAOPR);
      for(let i of this.Choices){
          if(i.choice_AOPR==tempChoiceAOPR){

              // based on radio button choices made
              this.annual_revenue= String(i.revenue_annual)+" €";
              this.monthly_revenue= String(i.revenue_monthly)+" €";
              this.gross_profit= String(i.rateofprofit)+" %";
              this.amortization=String(i.amortization)+" ans";
              this.isValid = 1;
              this.animateTopDescription();
          }
      }
    }
  }

  resetvalues() {
    this.annual_revenue = "";
    this.monthly_revenue = "";
    this.gross_profit = "";
    this.amortization = "";
    this.maid_expense = 0;
    this.electricity_expense = 0;
    this.clothing_water_expense = 0;
    this.radioFlag = 0;
    this.selection_description = "";
    this.isValid = 0;
  }

  show:boolean = false;
  animateTopDescription() {
      if(this.isValid === 1) {
        this.show = true; 
      } else {
         this.show = false;
      }
      //console.log("reaching here");
      
  }

  
}
