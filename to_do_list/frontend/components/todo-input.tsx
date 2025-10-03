"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

interface TodoInputProps {
  onAdd: (text: string) => void
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text.trim())
      setText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground h-12 text-base"
      />
      <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">
        <Plus className="w-5 h-5 mr-2" />
        Add
      </Button>
    </form>
  )
}
