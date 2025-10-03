"use client"

import { useState } from "react"
import { TodoList } from "@/components/todo-list"
import { TodoInput } from "@/components/todo-input"
import { TodoFilters } from "@/components/todo-filters"

export type Todo = {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

export type FilterType = "all" | "active" | "completed"

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<FilterType>("all")

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length

  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">Todo List</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Stay organized and productive with your daily tasks
          </p>
        </div>

        <div className="space-y-6">
          <TodoInput onAdd={addTodo} />

          <TodoFilters
            filter={filter}
            onFilterChange={setFilter}
            activeCount={activeCount}
            completedCount={completedCount}
            onClearCompleted={clearCompleted}
          />

          <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />

          {todos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No tasks yet. Add one above to get started!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
