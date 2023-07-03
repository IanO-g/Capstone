package controllers;

import controllers.ErrorResponse;
import domain.CollectionService;
import domain.Result;
import domain.ResultType;
import models.Collection;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/api/collection")
public class CollectionController {

    private final CollectionService collectionService;

    public CollectionController(CollectionService collectionService) {
        this.collectionService = collectionService;
    }

    //get collections by userId
    @GetMapping("/{userId}")
    public List<Collection> getCollectionsByUserId(@PathVariable int userId) {
        return collectionService.getCollectionsByUserId(userId);
    }

    //get collection by collection ID
    @GetMapping("/collection/{collectionId}")
    public ResponseEntity<Collection> getCollectionById(@PathVariable long collectionId) {
        Collection collection = collectionService.getCollectionById(collectionId);
        if (collection == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(collection);
    }

    //add a new collection to system
    @PostMapping
    public ResponseEntity<Object> addCollection(@RequestBody Collection collection) {
        Result<Collection> result = collectionService.addCollection(collection);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }
    //update collection with provided collection ID
    @PutMapping("/{collectionId}")
    public ResponseEntity<Object> updateCollection(@PathVariable long collectionId, @RequestBody Collection collection) {
        if (collectionId != collection.getId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<Collection> result = collectionService.updateCollection(collection);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return ErrorResponse.build(result);
    }
    //delete collection
    @DeleteMapping("/{collectionId}")
    public ResponseEntity<Void> deleteCollection(@PathVariable int collectionId) {
        if (collectionService.deleteCollection(collectionId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
