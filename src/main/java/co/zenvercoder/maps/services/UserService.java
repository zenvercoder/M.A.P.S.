package co.zenvercoder.maps.services;

import co.zenvercoder.maps.model.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserService {
    List<User> findAll();
    User create(User user);
}

