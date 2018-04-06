import BattleMech from '@/objects/BattleMech';


describe('Battlemech Object', () => {

  let subject;

  beforeEach(() => {
    subject = new BattleMech();
  });

  context('Upon Creation', () => {

    it('should have all values set to zero', () => {
      expect(subject.Tonnage).to.equal(0);
      expect(subject.Walk).to.equal(0);
      expect(subject.Run).to.equal(0);
      expect(subject.Jump).to.equal(0);
      expect(subject.internalStructure).to.deep.equal({'H':0,'CT':0, 'RT':0, 'LT':0, 'RA':0, 'LA':10, 'RL':10, 'LL':10});
    });
  });

  context('Upon Tonnage Being Set', () => {
    beforeEach(() => {
      subject.setTonnage(40);
    });


    it('Should retain the set tonnage', () => {
      expect(subject.Tonnage).to.equal(40);
    });
    it('should update internal structure with the correct values', () => {
      expect(subject.internalStructure).to.deep.equal({'H':2,'CT':4, 'RT':6, 'LT':8, 'RA':10, 'LA':12, 'RL':14, 'LL':16});
    });
  });

  context('Upon Walk Movement Being Set', () => {

    beforeEach(() => {
      subject.setWalk(4);
    });

    it('Should retain the set walk movement', () => {
      expect(subject.Walk).to.equal(4);
    });

    it('Should calculate the run movement', () => {
      expect(subject.Run).to.equal(6);
    });

  });
  context('Upon Jump Movement Being Changed', () => {
    it('Should retain the new jump movement', () => {
      subject.setJump(4);
      expect(subject.Jump).to.equal(4);
    });
  });

});
