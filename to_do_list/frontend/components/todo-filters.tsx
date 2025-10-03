"use client"

import { Button } from "@/components/ui/button"
import type { FilterType } from "@/app/page"

interface TodoFiltersProps {
  filter: FilterType
  onFilterChange: (filter: FilterType) => void
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
}

export function TodoFilters({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}: TodoFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-card border border-border rounded-lg p-4">
      <div className="flex gap-2">
        <Button
          variant={filter === "all" ? "default" : "ghost"}
          size="sm"
          onClick={() => onFilterChange("all")}
          className={
            filter === "all" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "default" : "ghost"}
          size="sm"
          onClick={() => onFilterChange("active")}
          className={
            filter === "active" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }
        >
          Active ({activeCount})
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "ghost"}
          size="sm"
          onClick={() => onFilterChange("completed")}
          className={
            filter === "completed"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }
        >
          Completed ({completedCount})
        </Button>
      </div>

      {completedCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearCompleted}
          className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
        >
          Clear completed
        </Button>
      )}
    </div>
  )
}
