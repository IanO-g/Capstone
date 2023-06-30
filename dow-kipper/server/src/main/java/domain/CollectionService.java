package domain;

import data.CollectionRepository;
import models.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class CollectionService {
    private final CollectionRepository collectionRepository;

    @Autowired
    public CollectionService(CollectionRepository collectionRepository) {
        this.collectionRepository = collectionRepository;
    }

    //get all collections by user id
    public List<Collection> getCollectionsByUserId(int userId) {
        return collectionRepository.findAllByUserId(userId);
    }

    //get collection by id
    public Collection getCollectionById(long collectionId) {
        return collectionRepository.findById(collectionId);
    }

    //add new collection
    public Result<Collection> addCollection(Collection collection) {
        Result<Collection> result = validate(collection);
        if (!result.isSuccess()) {
            return result;
        }

        if (collection.getId() != 0) {
            result.addMessage("CollectionId cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        collection = collectionRepository.addCollection(collection);
        result.setPayload(collection);
        return result;
    }

    //update existing collection
    public Result<Collection> updateCollection(Collection collection) {
        Result<Collection> result = validate(collection);
        if (!result.isSuccess()) {
            return result;
        }

        if (collection.getId() <= 0) {
            result.addMessage("CollectionId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!collectionRepository.updateCollection(collection)) {
            String msg = String.format("CollectionId: %s, not found", collection.getId());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }

    //delete a collection
    public boolean deleteCollection(int collectionId) {
        return collectionRepository.deleteCollection(collectionId);
    }

    //get the total value of a user's collection
    public BigDecimal getTotalCollectionValue(int userId) {
        List<Collection> collections = collectionRepository.findAllByUserId(userId);
        return collections.stream()
                .map(Collection::getValue)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    //validation
    private Result<Collection> validate(Collection collection) {
        Result<Collection> result = new Result<>();
        if (collection == null) {
            result.addMessage("Collection cannot be null", ResultType.INVALID);
            return result;
        }

        // Validate other fields according to your requirement
        if (collection.getName() == null || collection.getName().trim().isEmpty()) {
            result.addMessage("Name is required", ResultType.INVALID);
        }

        if (collection.getValue().compareTo(BigDecimal.ZERO) < 0) {
            result.addMessage("Value cannot be negative", ResultType.INVALID);
        }

        return result;
    }
}
