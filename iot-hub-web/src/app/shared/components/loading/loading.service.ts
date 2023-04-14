import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private readonly isSaving = new BehaviorSubject<boolean>(false);
  readonly isSavingCast = this.isSaving.asObservable();
  private readonly message = new BehaviorSubject<string>('');
  readonly messageCast = this.message.asObservable();

  constructor() {
  }

  start(): void {
    this.isSaving.next(true);
  }

  stop(): void {
    this.isSaving.next(false);
  }

  setMessage(value: string): void {
    this.message.next(value);
  }

  status(): boolean {
    return this.isSaving.value;
  }
}
