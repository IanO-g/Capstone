package data.mappers;

import models.Collection;
import models.User;
import data.UserRepository;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CollectionMapper implements RowMapper<Collection> {
    private UserRepository userRepository;

    public CollectionMapper(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Collection mapRow(ResultSet resultSet, int i) throws SQLException {
        Collection collection = new Collection();
        collection.setId(resultSet.getLong("collection_id"));
        long userId = resultSet.getLong("user_id");
        User user = userRepository.findById(userId);
        collection.setUser(user);
        collection.setName(resultSet.getString("name"));
        return collection;
    }
}
