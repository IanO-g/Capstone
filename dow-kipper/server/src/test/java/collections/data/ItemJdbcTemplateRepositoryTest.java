package collections.data;

import collections.models.Item;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class ItemJdbcTemplateRepositoryTest {
    @Autowired
    ItemJdbcTemplateRepository repository;

    @Autowired
    CollectionJdbcTemplateRepository collectionRepository;

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
        assertTrue(actual.size() >=2);
    }
    @Test
    void findById() {
        Item actual = new Item(1,"test", BigDecimal.valueOf(20.12),collectionRepository.findById(1));
        Item expected = repository.findById(1);
        BigDecimal rounded = expected.getValue().setScale(2,RoundingMode.HALF_UP);
        expected.setValue(rounded);
        assertEquals(expected,actual);
    }
    @Test
    void addItem() {
        Item item = new Item();
        item.setName("expected");
        item.setValue(BigDecimal.valueOf(33.33));
        item.setCollection(collectionRepository.findById(1));
        repository.addItem(item);
        assertEquals(4,item.getId());
    }
    @Test
    void updateItem() {
        Item actual = new Item(1,"update", BigDecimal.valueOf(23.12),collectionRepository.findById(2));
        assertTrue(repository.updateItem(actual));
        BigDecimal rounded = repository.findById(1).getValue().setScale(2,RoundingMode.HALF_UP);
        Item expected = repository.findById(1);
        expected.setValue(rounded);
        assertEquals(expected,actual);
    }

    @Test
    void shouldNotUpdateItemWithMissingId(){
        Item actual = new Item(0,"test", BigDecimal.valueOf(20.12),collectionRepository.findById(1));
        assertFalse(repository.updateItem(actual));
    }

    @Test
    void deleteItem() {
        assertTrue(repository.deleteItem(1));
    }

    @Test
    void shouldNotDeleteMissingItem() {
        assertFalse(repository.deleteItem(0));
    }
}