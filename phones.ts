class device{
    Model: string;
    NumOfApp: number;
    OpSystem: string;
    Manufacturer: Manufacturer;
    _ScreenSize: number;
    static counter = 0;
    static AppleCounter = 0;
    static AndroidCounter = device.counter - device.AppleCounter;

    get ScreenSize(){
        return this._ScreenSize;
    }
    set ScreenSize(x){
        if (x<5 || x>20){
            throw "the screen size have to be between 5-20 inch"; 
        }else{
            this._ScreenSize = x;
        }
      
    }

    constructor(Model: string,NumOfApp: number, OpSystem: string , ScreenSize: number, Manufacturer : Manufacturer){
        this.Model= Model;
        this.NumOfApp= NumOfApp;
        this.OpSystem= OpSystem;
        this._ScreenSize= ScreenSize;
        this.Manufacturer = Manufacturer;
        device.counter++;

        if(this.Manufacturer.CompName == 'Apple'){
            device.AppleCounter++;
        }
    }
    printDevice(){
        return `Model: ${this.Model}, Number of apps: ${this.NumOfApp}, 
        operatos system: ${this.OpSystem}, screen size${this.ScreenSize}},number of devices${device.counter}`
    }
}

class Tablet extends device {
    Pro: boolean;

    constructor(Model: string,NumOfApp: number, OpSystem: string , ScreenSize: number, Pro: boolean, Manufacturer : Manufacturer) {
        super (Model, NumOfApp, OpSystem, ScreenSize, Manufacturer)
        this.Pro = Pro;
    }
    printTablet(){
        return `${this.printDevice()}, ${this.Manufacturer.printMan()} pro${this.Pro}`
    }
}
class CellPhone extends device {
    SimComp: string;

    constructor(Model: string,NumOfApp: number, OpSystem: string , ScreenSize: number, SimComp: string, Manufacturer : Manufacturer) {
        super(Model, NumOfApp, OpSystem, ScreenSize, Manufacturer)
        this. SimComp =  SimComp;
    }
    printCellPhone(){
        return `${this.printDevice()}, ${this.Manufacturer.printMan()}, sim company${this.SimComp}`
    }
}
class Manufacturer {
    Country: string;
    EsYear: number;
    ServiceEr: object;
    WebAd: string;
    CompName: string;


    constructor(Country: string, EsYear: number, ServiceEr: object, WebAd: string, CompName: string) {
        this.Country = Country;
        this.EsYear = EsYear;
        this.ServiceEr = ServiceEr;
        this.WebAd = WebAd;
        this.CompName = CompName;
    }
    printMan(){
        return `country: ${this.Country}, establish year: ${this.EsYear}, service erya: ${this.ServiceEr}, website${this.WebAd}, company${this.CompName}`
    }
}

const apple = new Manufacturer('israel' , 1989, ['israel','jorden'] ,'www.google.com' ,'apple');

const device1 = new CellPhone('iPhone X', 40, 'ios',5,"orange",apple); 
console.log(device1.printCellPhone());