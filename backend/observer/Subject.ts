import { Observer } from "./Observer";

export interface Subject {
    attach: (observer: Observer) => void;
    detach: (observer: Observer) => void;
    notifyObservers: (message: string, userId: string, orderId: string) => void;
}
