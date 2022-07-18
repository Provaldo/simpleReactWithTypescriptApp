import axios from 'axios';
import Reminder from '../models/reminder';

class ReminderService {
    http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    });

    async getReminders() {
        const response = await this.http.get<Reminder[]>('/todos');
        return response.data;
    }

    async addReminder(title: string) {
        const response = await this.http.post<Reminder>('/todos', { title });
        return response.data;
    }

    async removeReminder(id: number) {
        const response = await this.http.delete('/todos/' + id);
        return response.data;
    }
}

// Now instead of exporting the ReminderService class, we are going to export
// an instance of this class. With this the consumers of this module, don't 
// have to new up a new instance of this service everytime.
// It's just a little bit easier.
export default new ReminderService();