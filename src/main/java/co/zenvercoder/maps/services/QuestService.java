package co.zenvercoder.maps.services;

import co.zenvercoder.maps.model.Quest;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface QuestService {
    List<Quest> findAll();
    Quest create(Quest quest);
}
