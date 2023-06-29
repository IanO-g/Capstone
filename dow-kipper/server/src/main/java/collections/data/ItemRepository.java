package collections.data;

import collections.models.Item;

import java.util.List;

public interface
ItemRepository {
    public List<Item> findAllByCollectionId(int collectionId);
    public Item findById(int itemId);
    public Item addItem(Item item);
    public boolean updateItem(Item item);
    public boolean deleteItem(int itemId);
}
