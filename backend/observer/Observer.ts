export interface Observer {
    notify: (message: string, userId: string, orderId: string) => void;
}