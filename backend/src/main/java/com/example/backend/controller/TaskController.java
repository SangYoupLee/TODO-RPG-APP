package com.example.backend.controller;

import com.example.backend.entity.Task;
import com.example.backend.service.PlayerService;
import com.example.backend.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*")
public class TaskController {
    private final TaskService taskService;
    private final PlayerService playerService;

    public TaskController(TaskService taskService, PlayerService playerService) {
        this.taskService = taskService;
        this.playerService = playerService;
    }

    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task request) {
        int xp = switch (request.getDifficulty()) {
            case "Medium" -> 75;
            case "Hard" -> 100;
            default -> 50;
        };
        request.setXp(xp);
        request.setCompleted(false);
        return ResponseEntity.ok(taskService.addTask(request));
    }

    @GetMapping
    public List<Task> getTasks() {
        return taskService.getIncompleteTasks();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> completeTask(@PathVariable Long id) {
        Task task = taskService.completeTask(id);
        if (task == null) {
            return ResponseEntity.notFound().build();
        }
        playerService.addXp(task.getXp());
        return ResponseEntity.ok().build();
    }
}
