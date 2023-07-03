package data;

import models.Collection;
import models.CollectionItem;

import java.util.List;

public interface CollectionItemRepository {

    boolean add(CollectionItem collectionItem);

    boolean update(CollectionItem collectionItem);

    boolean delete(int collectionId, int itemId);

    CollectionItem getCollectionItem(int collectionId, int itemId);

    List<CollectionItem> getCollectionItemByCollectionId(int collectionId);
}
