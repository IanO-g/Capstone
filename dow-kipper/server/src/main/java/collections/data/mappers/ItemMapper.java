package collections.data.mappers;

import collections.data.CollectionRepository;
import collections.models.Collection;
import collections.models.Item;
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
        item.setId(resultSet.getInt("item_id"));

        int collectionId = resultSet.getInt("collection_id");
        Collection collection = collectionRepository.findById(collectionId);
        item.setCollection(collection);

        item.setName(resultSet.getString("name"));
        item.setValue(resultSet.getBigDecimal("value"));
        return item;
    }
}