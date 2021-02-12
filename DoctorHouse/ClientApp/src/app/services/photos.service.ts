import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private httpPutOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getPhotos(userId) {
    return this.http.get(`/api/users/${userId}/photos`);
  }

  upload(userId, photo) {
    var formData = new FormData();
    formData.append('file', photo);

    return this.http.post(`/api/users/${userId}/photos`, formData, {reportProgress: true, observe: "events"});
  }

  updateUserPhotos(userId, photos) {
    return this.http.put(`/api/users/${userId}/photos`, JSON.stringify(photos), this.httpPutOptions);
  }

}
