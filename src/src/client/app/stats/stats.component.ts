import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded StatsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-stats',
  templateUrl: 'stats.component.html',
  styleUrls: ['stats.component.css']
})

export class StatsComponent {
    statsAreas: Array<String> = ["Indoor Pool", "Basketball Court", "Outdoor Pool"];
    statsMonths: Array<String> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    statsDays: Array<String> = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    statsTimes: Array<String> = ["Morning", "Afternoon", "Evening", "Late Night"];
}
