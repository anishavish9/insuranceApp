import {Injectable} from '@angular/core';

@Injectable({
    providedIn : 'root',
})

export class DataService{
    private data:any ={};
    loginStatus:boolean = false;

setData(key:string, value:any){
    this.data[key] = value;
}

getData(key:string):any{
    return this.data[key];
}

signIn(){
    this.loginStatus = true;
}

}