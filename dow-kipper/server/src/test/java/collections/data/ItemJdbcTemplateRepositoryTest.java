package collections.data;

import collections.models.Item;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class ItemJdbcTemplateRepositoryTest {
    @Autowired
    ItemJdbcTemplateRepository repository;

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
    void findAllByCollectionId() {
        List<Item> actual = repository.findAllByCollectionId(1);
        assertTrue(actual.size() >=1);
    }

//    @Test
//    void findById() {

//    }
//
//    @Test
//    void addItem() {
//    }
//
//    @Test
//    void updateItem() {
//    }
//
//    @Test
//    void deleteItem() {
//    }
}