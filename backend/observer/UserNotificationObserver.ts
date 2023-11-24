// UserNotificationObserver.ts
import { Observer } from './Observer';
import NotificationController from '../controllers/notificationController';

export class UserNotificationObserver implements Observer {
    async notify(message: string, userId: string, orderId: string): Promise<void> {
        console.log("Notification received:", message);
        // Aquí se puede actualizar el estado del componente para mostrar la notificación
        // crear la notificacion en la base de datos
        const fechaActual = Date.now();
        const fecha = new Date(fechaActual);
        await NotificationController.createNotification('http://localhost:4000/api/createNotification', { message, timestamp: fecha, orderId, userId })
    }
}