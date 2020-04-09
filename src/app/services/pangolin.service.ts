import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PangolinService {

  constructor(private http: HttpClient) {}

  private static updateUrl(req: string) {
    return "https://api.tod.benito.io/" + req
  }

  get(url: string) {
    url = PangolinService.updateUrl(url);
    return this.http.get(url);
  }

  post(url: string, body: any) {
    url = PangolinService.updateUrl(url);
    return this.http.post(url, body);
  }

  put(url: string, body: any) {
    url = PangolinService.updateUrl(url);
    return this.http.put(url, body);
  }

  delete(url: string) {
    url = PangolinService.updateUrl(url);
    return this.http.delete(url);
  }
}
