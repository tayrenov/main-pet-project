import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функция для чтения todos из файла
export async function readTodos() {
  try {
    const data = await fs.readFile(path.join(__dirname, 'db', 'todos.json'), 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading todos file:', err);
    return [];
  }
}

// Функция для чтения health из файла
export async function readHealth() {
  try {
    const data = await fs.readFile(path.join(__dirname, 'db', 'health.json'), 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading health file:', err);
    return [];
  }
}

// Получить todo по ID
export async function getTodoById(id) {
  try {
    const todos = await readTodos();
    const todo = todos.find(t => t.id === parseInt(id));
    
    if (!todo) {
      return { 
        success: false, 
        message: 'Todo not found' 
      };
    }
    
    return { 
      success: true, 
      todo 
    };
  } catch (err) {
    console.error('Get todo error:', err);
    return { 
      success: false, 
      message: 'Server error' 
    };
  }
}

// Получить todos по userId
export async function getTodosByUserId(userId) {
  try {
    const todos = await readTodos();
    const userTodos = todos.filter(t => t.userId === parseInt(userId));
    
    return { 
      success: true, 
      todos: userTodos 
    };
  } catch (err) {
    console.error('Get user todos error:', err);
    return { 
      success: false, 
      message: 'Server error' 
    };
  }
}

// Создать новый todo
export async function createTodo(todoData) {
  try {
    const todos = await readTodos();
    const newTodo = {
      userId: todoData.userId,
      id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
      title: todoData.title,
      completed: todoData.completed || false
    };
    
    const updatedTodos = [...todos, newTodo];
    await fs.writeFile(
      path.join(__dirname, 'db', 'todos.json'),
      JSON.stringify(updatedTodos, null, 2)
    );
    
    return { 
      success: true, 
      todo: newTodo 
    };
  } catch (err) {
    console.error('Create todo error:', err);
    return { 
      success: false, 
      message: 'Server error' 
    };
  }
}