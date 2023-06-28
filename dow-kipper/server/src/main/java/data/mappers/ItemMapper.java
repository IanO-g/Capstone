package data.mappers;

import data.CollectionRepository;
import models.Collection;
import models.Item;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ItemMapper implements RowMapper<Item> {
    private final CollectionRepository collectionRepository;

    public ItemMapper(CollectionRepository collectionRepository) {
        this.collectionRepository = collectionRepository;
    }

    @Override
    public Item mapRow(ResultSet resultSet, int i) throws SQLException {
        Item item = new Item();
        item.setId(resultSet.getLong("item_id"));

        Long collectionId = resultSet.getLong("collection_id");
        Collection collection = collectionRepository.findById(collectionId);
        item.setCollection(collection);

        item.setName(resultSet.getString("name"));
        item.setPrice(resultSet.getBigDecimal("value"));
        return item;
    }
}