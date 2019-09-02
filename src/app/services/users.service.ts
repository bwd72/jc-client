import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    // TODO: Read these from .env file
    usersHTTPHost = "localhost:8005";
    usersURL = `http://${this.usersHTTPHost}/api/systemusers`;

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        return this.http.get<any>(this.usersURL);
    }


    getUser(id: number): Observable<any> {
        return this.http.get<any>(`${this.usersURL}/${id}`);
    }



}
