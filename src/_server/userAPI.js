import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функция для чтения users из файла
async function readUsers() {
  try {
    const data = await fs.readFile(path.join(__dirname, 'db', 'users.json'), 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading users file:', err);
    return [];
  }
}

// Проверка логина и пароля
export async function authenticateUser(login, password) {
  try {
    const users = await readUsers();
    const user = users.find(u => u.login === login && u.password === password);
    
    if (!user) {
      return { 
        success: false, 
        message: 'Invalid login or password' 
      };
    }
    
    return { 
      success: true, 
      user: {
        id: user.id,
        login: user.login,
        name: user.name
        // Не возвращаем пароль в ответе
      }
    };
  } catch (err) {
    console.error('Authentication error:', err);
    return { 
      success: false, 
      message: 'Server error during authentication' 
    };
  }
}

// Получить пользователя по ID (опционально)
export async function getUserById(userId) {
  try {
    const users = await readUsers();
    const user = users.find(u => u.id === userId);
    
    if (!user) {
      return { 
        success: false, 
        message: 'User not found' 
      };
    }
    
    return { 
      success: true, 
      user: {
        id: user.id,
        login: user.login,
        name: user.name
      }
    };
  } catch (err) {
    console.error('Get user error:', err);
    return { 
      success: false, 
      message: 'Server error' 
    };
  }
}