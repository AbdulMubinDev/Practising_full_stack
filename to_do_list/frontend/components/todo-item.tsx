"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2 } from "lucide-react"
import type { Todo } from "@/app/page"

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-muted-foreground/30 transition-colors group">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
      />
      <span className={`flex-1 text-base ${todo.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
        {todo.text}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive hover:bg-destructive/10"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  )
}
