package co.zenvercoder.maps.services;

import co.zenvercoder.maps.model.Tile;
import co.zenvercoder.maps.repositories.TileRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
public class TileServiceImpl implements TileService {
    @Resource
    private TileRepository TileRepository;

    @Override
    @Transactional
    public List<Tile> findAll() {
        return TileRepository.findAll();
    }

    @Override
    @Transactional
    public Tile create(Tile tile) {
        return this.TileRepository.save(tile);
    }
}