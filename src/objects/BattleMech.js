import InternalStructureTable from '@/Tables/InternalStructureTable';


var Battlemech  =  class {

  // armorConfiguration = [['H',0],['RT',0],['LT',0],['CT',0],['RA',0],['LA',0],['RTR',0],['LTR',0], ['CTR',0],['RL',0],['LL',0]];
  // internalStructure = [['H',0], ['CT',0],['RT',0],['LT',0],['RA',0],['LA',0],['RL',0],['LL',0]];



  constructor () {
    this.Tonnage = 0;
    this.Walk = 0;
    this.Run = 0;
    this.Jump = 0;
    this.internalStructure = InternalStructureTable[this.Tonnage]
  }
  setWalk(newWalk){
    this.Walk = newWalk;
    this.Run = Math.round(newWalk * 1.5);
  }

  setJump(newJump){
    this.Jump = newJump;
  }

  setTonnage(newTonnage){
    this.Tonnage = newTonnage;
    this.internalStructure = InternalStructureTable[newTonnage];
    //internalStructure = Row from Internal Structure Map (40)
    //Other Stuff recalculated based upon new tonnage
  }
};

export default Battlemech
