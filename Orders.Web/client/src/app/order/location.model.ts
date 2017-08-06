export class LocationModel {
        constructor(
                public name?: string,
                public street?:string,
                public city?:string,
                public state?: string,
                public zipCode?: string,
                public locationId?: number){
                }
}