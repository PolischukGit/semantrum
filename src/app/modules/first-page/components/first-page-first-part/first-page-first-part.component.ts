import { AfterViewInit, Component, Inject, NgZone, OnDestroy, PLATFORM_ID } from '@angular/core';
import { InsteadNgrxLoadingSelectorService } from '../../../../services/instead-ngrx-loading-selector.service';
import { ActivatedRoute } from '@angular/router';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-first-page-first-part',
  templateUrl: './first-page-first-part.component.html',
  styles: [`
    #chartdiv, #chartukrdiv {
      width: 100%;
      height: 400px;
    }
    p {
      text-align: center;
    }
  `]
})
export class FirstPageFirstPartComponent implements AfterViewInit, OnDestroy {

  private globalChart: am4charts.PieChart;
  private ukraineChart: am4charts.PieChart;

  constructor(
    loadingService: InsteadNgrxLoadingSelectorService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId,
    private zone: NgZone
  ) {
    loadingService.loading$.next(false);
  }

  browserOnly(f: () => void): void {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit(): void {
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);
      const chartAll = am4core.create('chartdiv', am4charts.PieChart);
      const chartUkr = am4core.create('chartukrdiv', am4charts.PieChart);
      const allData = this.route.snapshot.data.data[0][0];
      const ukrData = this.route.snapshot.data.data[1][0];
      chartAll.data = this.getObjectFields(allData);
      const pieSeries = chartAll.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'value';
      pieSeries.dataFields.category = 'name';
      chartUkr.data = this.getObjectFields(ukrData);
      const pieUkrSeries = chartUkr.series.push(new am4charts.PieSeries());
      pieUkrSeries.dataFields.value = 'value';
      pieUkrSeries.dataFields.category = 'name';
      this.globalChart = chartAll;
      this.ukraineChart = chartUkr;
    });
  }

  private getObjectFields(object: any): Array<{name: string, value: number}> {
    const fields = ['confirmed', 'critical', 'deaths', 'recovered'];
    return Object.entries(object).filter((el: any) => {
      return fields.includes(el[0]);
    }).map(([name, value]: [string, number]) => ({name, value}));
  }

  ngOnDestroy(): void {
    this.browserOnly(() => {
      if (this.globalChart) {
        this.globalChart.dispose();
      }
      if (this.ukraineChart) {
        this.ukraineChart.dispose();
      }
    });
  }
}
