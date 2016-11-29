package co.zenvercoder.maps.services;

import co.zenvercoder.maps.model.Tile;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface TileService {
    List<Tile> findAll();
    Tile create(Tile tile);
}

