class player{
    constructor(_nome,_hitPoints,_armorClass,_attack){
        this.nome = _nome;
        this.hitPoints = _hitPoints;
        this.armorClass = _armorClass;
        this.attack = _attack;
    };
}

const jorge = new player("Jorge",{"current": 32, "Max": 32},{"current": 15, "Standart": 15},{"nome": "sword","mod":{"toHit": 5,"toDamage": 3},"toHit": 20,"damage": [2,6]});
const wolf = new player("Lobinho",{"current": 12, "Max": 12},{"current": 13, "Standart": 13},{"nome": "bite","mod":{"toHit": 4,"toDamage": 2},"toHit": 20,"damage": [2,4]});

function attack(attacker, reciver){
    console.log(`${attacker.nome} is trying to attack ${reciver.nome}`);
    let attack = rollAttack(attacker)
    console.log(`They roll ${attack.hit} to hit`);    

    const caToBeat = reciver.armorClass.current;

    if(attack.hit >= caToBeat){
        console.log(`HIT!! Doing ${attack.damage} damage to ${reciver.nome}`);
        let hpBefore = reciver.hitPoints.current
        reciver.hitPoints.current -= attack.damage;
        if(reciver.hitPoints.current <= 0){
            return console.log(`${reciver.nome} has died!!!!`);
        }else{
            return console.log(`${reciver.nome} was at ${hpBefore} and now has ${reciver.hitPoints.current}`);
        }
    }else{
        return console.log("Misses!");
    }
}

function rollAttack(attackerRolling){
    const hit = rollToHit(attackerRolling);
    let damage = rollToDamage(attackerRolling);

    if(hit - attackerRolling.attack.mod.toHit == 20){
        console.log("CRITICAL HIT!");
        damage = 2 * damage
    }

    return {hit,damage};
}

function rollToDamage(attackerDamage){
    const modToDamage = attackerDamage.attack.mod.toDamage;
    const howManyDices = attackerDamage.attack.damage[0];
    const witchDices = attackerDamage.attack.damage[1];
    let valueOfRoll = 0;

    for(let i = 0; i < howManyDices; i++){
        valueOfRoll += Math.floor(((Math.random() * witchDices) + 1));
    }
    const damage = parseInt(valueOfRoll + modToDamage);

    return damage
}

function rollToHit(attackerToHit){
    const modToHit = attackerToHit.attack.mod.toHit;
    const witchDices = attackerToHit.attack.toHit;

    const valueOfRoll = Math.floor(((Math.random() * witchDices) + 1));
    const hit = valueOfRoll + modToHit

    return hit
}

attack(jorge,wolf)