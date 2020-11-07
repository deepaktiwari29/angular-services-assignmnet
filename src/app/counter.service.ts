export class CounterService {
    activeToInactiveCount : number = 0;
    InactiveToActiveCount : number = 0;

    incrementActiveToInactive() {
        console.log('Users changed to Inative : ' + this.activeToInactiveCount++);
    }

    incrementInactiveToActive() {
        console.log('Users changed to Active : ' + this.InactiveToActiveCount++);
    }
}