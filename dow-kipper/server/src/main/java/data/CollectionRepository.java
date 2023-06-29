package data;

import models.Collection;

import java.util.List;

public interface CollectionRepository {
    public List<Collection> findAllByUserId(int userId);
    public Collection findById(long collectionId);
    public Collection addCollection(Collection collection);
    public boolean updateCollection(Collection collection);
    public boolean deleteCollection(int collectionId);
}
