// UserNotificationObserver.ts
import { Observer } from './Observer';
import axios from 'axios';

export class UserNotificationObserver implements Observer {
    async notify(message: string, userId: string, orderId: string): Promise<void> {
        console.log("Notification received:", message);
        // Aquí se puede actualizar el estado del componente para mostrar la notificación
        // crear la notificacion en la base de datos
        let fechaActual = Date.now();
        let fecha = new Date(fechaActual);
        await axios.post('http://localhost:4000/api/createNotification', { message, fecha, orderId, userId })
    }
}