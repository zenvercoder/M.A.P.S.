package co.zenvercoder.maps.services;

import co.zenvercoder.maps.model.User;
import co.zenvercoder.maps.repositories.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Resource
    private UserRepository UserRepository;

    @Override
    @Transactional
    public List<User> findAll() {
        return UserRepository.findAll();
    }

    @Override
    @Transactional
    public User create(User user) {
        return this.UserRepository.save(user);
    }
}