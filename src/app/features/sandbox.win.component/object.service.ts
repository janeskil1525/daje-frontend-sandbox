import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResponseInterface} from "../../core/response/response.interface";
import {BaseEndpoint, EndPoints} from "../../core/database/endpoints";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ObjectService {
    private http = inject(HttpClient);
    private url = environment.apiUrl;

    load(tools_object_pkey: number) {
        let path = 'Object';
let version:string = 'V01';

        let url = this.url + BaseEndpoint['Base'] + BaseEndpoint[version as keyof typeof BaseEndpoint] + EndPoints[path as keyof typeof EndPoints] + 6
        return  this.http.get <any> (url,{
            /*headers:{
                'X-Token-Check': this.localkey
            }*/
        });
    }
}
