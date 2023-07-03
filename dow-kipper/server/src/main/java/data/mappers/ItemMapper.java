package data.mappers;

import models.Grade;
import models.Item;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ItemMapper implements RowMapper<Item> {
    @Override
    public Item mapRow(ResultSet resultSet, int i) throws SQLException {
        Item item = new Item();
        item.setId(resultSet.getInt("item_id"));
        item.setName(resultSet.getString("name"));
        item.setValue(resultSet.getBigDecimal("value"));
        item.setGrade(Grade.valueOf(resultSet.getString("grade")));
        return item;
    }
}