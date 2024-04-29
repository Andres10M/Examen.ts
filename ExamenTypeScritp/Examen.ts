import * as readline from 'readline';
//Creating My WAVE for my player.
interface wave {
     Engine: number; 
     Oxigen: number;
     Battery: number;
     primordialResource : number;
}

let myOwnWave : wave = {
    Engine : 100,
    Oxigen: 100,
    Battery: 100,
    primordialResource : 0
}

//Creating a class for planets
class Planets {
    constructor(public name: string, public resources:Resources, public dangerousLevel: DangerousLevel, public goalResource : number) {}
}

//Kind of resources that can help to our wave
enum Resources {
    Life = 'gold',
    Petrol= 'mercury', 
    Power = 'plutonium',
}

//Creating properties with enums:
enum DangerousLevel { 
    Demonic =  '100xp',
    Dragon = '200xp',
    Chaos= '300xp'
   }
   //Creating my planets
let cancerPlanet : Planets = {name : "Shiryu", resources :Resources.Life, dangerousLevel : DangerousLevel.Demonic, goalResource : 25}
let libraPlanet: Planets = {name : "Midas", resources: Resources.Power, dangerousLevel : DangerousLevel.Dragon, goalResource : 25}
let leoPlanet : Planets = { name : 'Seya', resources : Resources.Petrol, dangerousLevel : DangerousLevel.Demonic, goalResource : 25}
let andromedaPlanet : Planets = {name : 'Dory', resources : Resources.Power, dangerousLevel: DangerousLevel.Chaos, goalResource : 25}

//Establishing Events 
class events {
    constructor (public eventName : string, public eventDescription : string, public usageResource : number) {}
}

//Creating Events
let cancerEvent : events = {
    eventName : 'Esteban the great warrior has arrived',
    eventDescription : 'The planet Shiryu will be destroyed, save this planet and you will get an achievement and an item.!',
    usageResource : 10
}

let libraEvent : events = {
    eventName : 'Midas',
    eventDescription : 'Midas needs water and for their survival, they need you.',
    usageResource : 10
}

let leoEvent : events = {
    eventName : 'Seya',
    eventDescription : 'Seya is a beautiful planet. They need minerals for their people. Save them!',
    usageResource : 10
}
let andromedaEvent : events = {
    eventName : 'Dory',
    eventDescription : 'Dory needs electricity to sustain its inhabitants, help them!',
    usageResource : 10
}



//functions of costs of traveling to other planets
let minusFuel = (a : number, b : number ) => {
    return a - b; 
}
let lessfuel = minusFuel(myOwnWave.Oxigen, cancerEvent.usageResource)

//adding the goal resource
let goalResource = (a: number, b: number) =>{
    a = a + b;
    return a;
}
//Good Resoults of exlporation
function addingResultstoWave (wave : wave){
    return wave.primordialResource  += 25;
}


// function of north resources

type location = 'cancer'| 'libra'| 'leo '| 'andromeda';
interface Event {
    description : string;
    resource : Resources;
    principalResource : number;
}
//Generic to collect resources

function askingToUser ( ){
        
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Where do you want to go?: cancer, libra, leo, andromeda:    ', (respuesta: string) => {
    let answer = respuesta.toLowerCase();
    if (answer =='cancer'){
        console.log('You have chosen cancer');
        console.log('You are in cancer. This planet is very beautiful, explore it')
        console.log(`Found resource ${cancerPlanet.resources} but we have less fuel. Our capacity is: ${lessfuel}`)
        console.log(cancerEvent);
        askingFirstEvent();
        



    } else if (answer == 'libra') {
        console.log('You have chosen libra');
        console.log('You are on libra. This planet contains some materials that are useful.')
        console.log(`We have found the resource ${libraPlanet.resources} but we have less fuel. Our capacity is: ${lessfuel}`)
        console.log(libraEvent);
        
        askingSecondEvent();

    }else if (answer == 'this'){
        console.log('You have chosen leo');
        console.log('You have found leo. This planet contains some edible animals.')
        console.log(`We have found the resource ${leoPlanet.resources} but we have less fuel. Our capacity is: ${lessfuel}`)
        console.log(leoEvent);
        
        askingThirdEvent();
 
    } else if (answer = 'west'){
        console.log('You have chosen andromeda');
        console.log('You are in the east. This planet contains water.')
        console.log(`We have found the resource ${andromedaPlanet.resources} but we have less fuel. Our capacity is: ${lessfuel}`)
        console.log(andromedaEvent);
        askingFourthEvent();
    }
    else { 
        console.log('Thats not an option. Choose it again')
        askingToUser();

    }

  });

}


//ASKING THE FIRST EVENT IN CONSOLE
function askingFirstEvent() {
    console.log('This planet needs you help!!')
    const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
    });


    rl.question('To save this planet you need to solve this riddle, which lasts forever What is the answer?', (respuesta: string) => {
        let answer = respuesta.toLowerCase();
        if (answer == 'memories'){
            console.log('Thats the correct answer! Here is your achieve.');
            addingResultstoWave(myOwnWave);
            console.log(` Your achieve is more of Alamantina. This mineral is special for the mission. You got:${ myOwnWave.primordialResource }`)
            console.log('Go back to the start to explore other planets')
            askingToUser();
        } else { 
            console.log('Thats not an option. Solve it again')
            askingFirstEvent();
        }
    
      });

}

//ASKING THE SECOND EVENT IN cONSOLE.

function substractingHealth(wave : wave): void {
    wave.Engine -= 30;
}
function askingSecondEvent() {
    console.log('This planet needs your help!!')
    const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
    });


    rl.question('This planet needs some energy. Your energy is the third state of matter.', (respuesta: string) => {
        let answer = respuesta.toLowerCase();
        if (answer == 'Gas'){
            console.log('Thats the correct answer! Here is your achieve.');
            addingResultstoWave(myOwnWave);
            console.log(` Your achieve is more of Alamantina. This mineral is special for the mission. You got:${ myOwnWave.primordialResource }`)
            console.log('You gave some help to this planet with your health.')
            substractingHealth(myOwnWave);
            console.log(`Your actual health is ${myOwnWave.Engine}`)

            askingToUser();
        } else { 
            console.log('Thats not an option. Solve it again')
            askingSecondEvent();
        }
    
      });

}

//ASKING THIRD EVENT

function substractingEnergy(wave : wave): void {
    wave.Battery -= 30;
}

function askingThirdEvent () {
    console.log('This planet needs your help!!')
    const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
    });


    rl.question('This planet needs some of your food. What animal do you give them', (respuesta: string) => {
        let answer = respuesta.toLowerCase();
        if (answer == 'Pig'){
            console.log('Thats the correct answer! Here is your achieve.');
            addingResultstoWave(myOwnWave);
            console.log(` Your achieve is more of Alamantina. This mineral is special for the mission. You got:${ myOwnWave.primordialResource }`)
            console.log('You gave some help to this planet with your energy.')
            substractingEnergy(myOwnWave);
            console.log(`Your actual ENERGY is ${myOwnWave.Battery}`)

            askingToUser();
        } else { 
            console.log('Thats not an option. Solve it again')
            askingSecondEvent();
        }
    
      });


}
//ASKING FOURTH EVENT 

function substractingFuel(wave : wave): void {
    wave.Oxigen -= 30;
}

function askingFourthEvent(){

    console.log('This planet needs your help!!')
    const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
    });


    rl.question('This planet needs some fuel. The riddle is, who lives forever?', (respuesta: string) => {
        let answer = respuesta.toLowerCase();
        if (answer == 'God'){
            console.log('Thats the correct answer! Here is your achieve.');
            addingResultstoWave(myOwnWave);
            console.log(` Your achieve is more of Alamantina. This mineral is special for the mission. You got:${ myOwnWave.primordialResource }`)
            console.log('You gave some help to this planet with your fuel')
            substractingEnergy(myOwnWave);
            console.log(`Your actual FUEL is ${myOwnWave.Oxigen}`)
            askingToUser();
        } else { 
            console.log('Thats not an option. Solve it again')
            askingSecondEvent();
        }
    
      });


}
//welcome to game 
function welcome (){
    console.log('Welcome to COSMOS simulation. You are here to proove that you are prepared with all of yourself to save the world')
        console.log('Our exploration needs of your help to save a lost mineral in 4 planets')
        console.log('Explore them and save them. Good Luck!')
}


welcome();
askingToUser();
