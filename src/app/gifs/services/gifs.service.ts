import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  GiphySearchResponse,
  GiphySearchResponseData,
} from '../interfaces/gifs.interface';

const GIPHY_API_KEY = 'XwbyQM7Phh23NKyhzMb2FhYM6DxjYAUS';
const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs';
const LOCAL_STORAGE_KEY = 'tagsHistory';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];
  public giftsList: GiphySearchResponseData[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();

    if (this._tagsHistory.length > 0) {
      this.callApi(this._tagsHistory[0]);
    }
  }

  public get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    const _tag = tag.toLowerCase();

    if (this._tagsHistory.includes(_tag)) {
      this._tagsHistory = this._tagsHistory.filter((tag) => tag !== _tag);
    }

    this._tagsHistory.unshift(_tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }

  private saveLocalStorage(): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const tagsHistory = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (tagsHistory) {
      this._tagsHistory = JSON.parse(tagsHistory);
    }
  }

  private callApi(tag: string): void {
    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('q', tag)
      .set('limit', '12');

    this.http
      .get<GiphySearchResponse>(`${GIPHY_API_URL}/search`, { params })
      .subscribe((response) => {
        this.giftsList = response.data;
      });
  }

  public addTagToHistory(tag: string): void {
    if (tag.length === 0) {
      return;
    }

    this.organizeHistory(tag);

    this.callApi(tag);

    this.saveLocalStorage();
  }
}
