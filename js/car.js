var car1 = {
    name: 'Opel Zafira',
    isTurnOn: false,
    speed: 0,
    engine: {
        v: 1.8,
        horsesPower: 140,
        isTurnOn: false
    },
    start: function() {
        this.isTurnOn = true;
        this.speed = 10;
        this.engine.isTurnOn = true;
    }
};
window.alert(car1.engine.v);