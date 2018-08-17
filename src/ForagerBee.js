class ForagerBee extends HoneyMakerBee {
  constructor(job) {
    super();
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}
