package com.example.backend.service;

import com.example.backend.entity.Task;
import com.example.backend.repository.TaskRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getIncompleteTasks() {
        return taskRepository.findByCompletedFalse();
    }

    @Transactional
    public Task addTask(Task task) {
        return taskRepository.save(task);
    }

    @Transactional
    public Task completeTask(Long id) {
        Task task = taskRepository.findById(id).orElse(null);
        if (task == null) return null;
        task.setCompleted(true);
        return taskRepository.save(task);
    }
}
