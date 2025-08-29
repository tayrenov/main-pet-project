import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import cors from 'cors'; 
import { fileURLToPath } from 'url';
import { version } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Функция для чтения todos из файла
async function readTodos() {
  try {
    const data = await fs.readFile(path.join(__dirname, 'db', 'todos.json'), 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading todos file:', err);
    return [];
  }
}

// Функция для чтения health из файла
async function readHealth() {
  try {
    const data = await fs.readFile(path.join(__dirname, 'db', 'health.json'), 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading todos file:', err);
    return [];
  }
}

app.get("/", (req, res) => {
  res.status(200).json({ message: 'SERVER IS RUNNING'});
})

// Основной маршрут
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'SERVER IS RUNNING',
    endpoints: {
      getAllTodos: 'GET /todos',
      getTodoById: 'GET /todos/:id',
      getUserTodos: 'GET /todos?userId=:userId',
      createTodo: 'POST /todos'
    }
  });
});

// Получить все todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await readTodos();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Todos Server error' });
  }
});

app.get("/health", async(req, res) => {
  try {
    const health = await readHealth();
    res.json(health)
  } catch (err) {
    res.status(500).json({ message: 'Health Server error' });
  }
});

// Получить todo по id
app.get('/todos/:id', async (req, res) => {
  try {
    const todos = await readTodos();
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Создать новый todo
app.post('/todos', async (req, res) => {
  try {
    const todos = await readTodos();
    const newTodo = {
      userId: req.body.userId,
      id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
      title: req.body.title,
      completed: req.body.completed || false
    };
    
    const updatedTodos = [...todos, newTodo];
    await fs.writeFile(
      path.join(process.cwd(), 'db', 'todos.json'),
      JSON.stringify(updatedTodos, null, 2)
    );
    
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));