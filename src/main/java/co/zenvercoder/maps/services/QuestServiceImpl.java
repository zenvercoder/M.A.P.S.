package co.zenvercoder.maps.services;

import co.zenvercoder.maps.model.Quest;
import co.zenvercoder.maps.repositories.QuestRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
public class QuestServiceImpl implements QuestService {
    @Resource
    private QuestRepository QuestRepository;

    @Override
    @Transactional
    public List<Quest> findAll() {
        return QuestRepository.findAll();
    }

    @Override
    @Transactional
    public Quest create(Quest quest) {
        return this.QuestRepository.save(quest);
    }
}