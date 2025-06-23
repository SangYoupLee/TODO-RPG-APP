package com.example.backend.controller;

import com.example.backend.entity.Player;
import com.example.backend.service.PlayerService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/status")
@CrossOrigin(origins = "*")
public class StatusController {
    private final PlayerService playerService;

    public StatusController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public Player getStatus() {
        return playerService.getPlayer();
    }
}
