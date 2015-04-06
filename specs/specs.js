describe('queenAttack', function() {
    it('is false if the coordinates are not horizantly, vertically, or diagonally in line with each other', function() {
        expect(queenAttack([1,1], [2,3])).to.equal(false);
    });

    it('is true that the queen can move to coordinates if they are horizantal in line with eachother', function() {
        expect(queenAttack([1,1], [1,3])).to.equal(true);
    });

    it('is true that the queen can move to coordinates if they are vertically in line with eachother', function() {
        expect(queenAttack([1,1], [3,1])).to.equal(true);
    });
    it('is true that the queen can move to coordinates if they are diagonally in line with eachother', function() {
        expect(queenAttack([1,1], [3,3])).to.equal(true);
    })
});
