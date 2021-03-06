// like JS modules
// this is my implementation
// package and class names is how we find things
// top level folder is co = TLD = top level domain
package co.zenvercoder.maps.repositories;

import co.zenvercoder.maps.model.Quest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestRepository extends JpaRepository<Quest, Long> {
    List<Quest>findAll();
}