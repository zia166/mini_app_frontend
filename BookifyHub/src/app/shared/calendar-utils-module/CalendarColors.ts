export class CalendarColors {

  public colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: 'rgb(13 80 199)',
      secondary: '#b2d7fc',
    },
    yellow: {
      primary: '#e5ae08',
      secondary: '#f1e16a7d',
    },
    green: {
      primary: 'rgb(40 173 7)',
      secondary: 'rgb(168 228 183)',
    },
    grey: {
      primary: '#f2f2f2',
      secondary: '#e6e6e6'
    },
    default: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  }

  private statusColorMapping: any = {
    available: this.colors.blue
  }
  private disabledColorMapping: any = {
    disabled: this.colors.grey
  }

  private statusColorMappingCompleted: any = {
    completed: this.colors.green
  }
  fnGetEventColor(status: string): any {
    status = status.toLowerCase();
    if(this.statusColorMappingCompleted[status] && status == 'completed'){
      return this.statusColorMappingCompleted[status];
    }else if (this.statusColorMapping[status] && status == 'available') {
      return this.statusColorMapping[status];
    }else if (this.disabledColorMapping[status] && status == 'disabled') {
      return this.disabledColorMapping[status];
    } else {
      return this.colors.yellow;
    }
  }

}
