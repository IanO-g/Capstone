package data;

import security.AppUser;
import org.springframework.transaction.annotation.Transactional;

public interface AppUserRepository {
    AppUser findByUsername(String username);

    @Transactional
    AppUser findById(int id);

    AppUser create(AppUser user);
}
