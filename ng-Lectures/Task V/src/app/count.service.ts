export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log('Active to Inactive: ' + this.activeToInactive);
  }

  incrementinactiveToInactive() {
    this.inactiveToActive++;
    console.log('Inactive To Active: ' + this.inactiveToActive);
  }

}