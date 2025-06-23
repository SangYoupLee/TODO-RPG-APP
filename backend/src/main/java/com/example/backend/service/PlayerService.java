package com.example.backend.service;

import com.example.backend.entity.Player;
import com.example.backend.repository.PlayerRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PlayerService {
    private final PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public Player getPlayer() {
        return playerRepository.findAll().stream().findFirst().orElse(null);
    }

    @Transactional
    public Player addXp(int xpToAdd) {
        Player player = getPlayer();
        if (player == null) return null;
        int xp = player.getXp() + xpToAdd;
        int level = player.getLevel();
        while (xp >= getRequiredXp(level)) {
            xp -= getRequiredXp(level);
            level++;
        }
        player.setXp(xp);
        player.setLevel(level);
        player.setCoins(player.getCoins() + xpToAdd / 10);
        return playerRepository.save(player);
    }

    private int getRequiredXp(int level) {
        return (int)Math.floor(50 * Math.pow(level, 1.5));
    }
}
