package com.example.backend;

import com.example.backend.entity.Player;
import com.example.backend.entity.Task;
import com.example.backend.repository.PlayerRepository;
import com.example.backend.repository.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseLoader {
    @Bean
    CommandLineRunner initData(PlayerRepository playerRepository, TaskRepository taskRepository) {
        return args -> {
            if (playerRepository.count() == 0) {
                Player player = new Player();
                playerRepository.save(player);
            }
            if (taskRepository.count() == 0) {
                Task t1 = new Task();
                t1.setTitle("Goblin Attack");
                t1.setDifficulty("Easy");
                t1.setType("daily");
                t1.setXp(50);
                taskRepository.save(t1);

                Task t2 = new Task();
                t2.setTitle("Troll Blockade");
                t2.setDifficulty("Hard");
                t2.setType("weekly");
                t2.setXp(100);
                taskRepository.save(t2);
            }
        };
    }
}
