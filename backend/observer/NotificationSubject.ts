// NotificationSubject.ts
import { Subject } from './Subject';
import { Observer } from './Observer';

export class NotificationSubject implements Subject {
    private observers: Observer[] = [];

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(message: string, userId: string, orderId: string): void {
        this.observers.forEach(observer => observer.notify(message, userId, orderId));
    }
}