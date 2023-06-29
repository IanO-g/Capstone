package data;

import data.mappers.ItemMapper;
import models.Item;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class ItemJdbcTemplateRepository implements ItemRepository {

    private final JdbcTemplate jdbcTemplate;
    private final CollectionRepository collectionRepository;

    public ItemJdbcTemplateRepository(JdbcTemplate jdbcTemplate, CollectionRepository collectionRepository) {
        this.jdbcTemplate = jdbcTemplate;
        this.collectionRepository = collectionRepository;
    }

    @Override
    public List<Item> findAllByCollectionId(int collectionId) {
        final String sql = "select item_id, collection_id, name, value from item where collection_id = ?;";
        return jdbcTemplate.query(sql, new ItemMapper(collectionRepository), collectionId);
    }

    @Override
    public Item findById(int itemId) {
        final String sql = "select item_id, collection_id, name, value from item where item_id = ?;";
        Item result = jdbcTemplate.query(sql, new ItemMapper(collectionRepository), itemId)
                .stream()
                .findAny().orElse(null);
        return result;
    }


    @Override
    @Transactional
    public Item addItem(Item item) {
        final String sql = "insert into item (collection_id, name, value) values (?, ?, ?);";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                ps.setInt(1,item.getCollection().getId());
                ps.setString(2,item.getName());
                ps.setBigDecimal(3,item.getPrice());
                return ps;
                }, keyHolder);
        if(rowsAffected <= 0){
            return null;
        }

        item.setId(keyHolder.getKey().intValue());
        return item;
    }

    @Override
    public boolean updateItem(Item item) {
        final String sql = "update item set "
                + "collection_id = ?, "
                + "name = ?, "
                + "value = ? "
                + "where item_id = ?";

        int collectionId = item.getCollection().getId();
        return jdbcTemplate.update(sql, collectionId, item.getName(), item.getPrice(), item.getId()) > 0;
    }

    @Override
    public boolean deleteItem(int itemId) {
        final String sql = "delete from item where item_id = ?";
        return jdbcTemplate.update(sql, itemId) > 0;
    }
}