package collections.data;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class CollectionJdbcTemplateRepositoryTest {

    @Autowired
    CollectionJdbcTemplateRepository repository;

    @Autowired
    JdbcTemplate jdbcTemplate;

    static boolean hasSetup = false;

    @BeforeEach
    void setUp(){
        if(!hasSetup){
            hasSetup = true;
            jdbcTemplate.update( "call set_known_good_state();");
        }
    }
    @Test
    void findAllByUserId() {

    }

    @Test
    void findById() {
    }

    @Test
    void addCollection() {
    }

    @Test
    void updateCollection() {
    }

    @Test
    void deleteCollection() {
    }
}