# MongoDB Study Guide

## 1. MongoDB Core Concepts

- CAP theorem
- Sharding
- Replication
- Replica set
- Horizontal and vertical scaling
- Cluster
- Clustered collection
- Namespace
- GridFS
- MongoDB Atlas
- Mongos
- Transactions
- Concurrency control
- Isolation
- ACID properties
- Connection pooling
- Oplog
- Election
- Schema-less database
- BSON vs JSON
- Data types
- Default port number
- NoSQL vs SQL
- Types of NoSQL databases
- Advantages and disadvantages of MongoDB
- High availability in MongoDB
- WiredTiger
- Partition tolerance
- Denormalization
- Components of `_id`

**Question:** Why are concepts like “CAP theorem” and “sharding” fundamental to understanding MongoDB? Can you think of one way each impacts database design?

---

## 2. Data Modeling and Schema

- Data modeling
- Anti-patterns
- Embedded document
- Embedding vs referencing
- Foreign key vs primary key
- Dynamic schema
- Types of relations (one-to-one, many-to-many)

**Question:** How does “embedding vs referencing” affect query performance? When might you choose one over the other?

---

## 3. Indexing and Performance

- Indexing
- Types of indexes (compound, TTL, geospatial, hashed, clustered, default)
- Create index
- Drawbacks of indexing
- Database profiler
- Covered query
- Query performance optimization

**Question:** What’s one benefit and one drawback of indexing? How does a “covered query” improve performance?

---

## 4. Aggregation Framework

- Aggregation pipeline
- `$lookup`
- `$facet`
- `$group`
- `$match`
- `$project`
- `$unwind`
- `$sort`
- `$out`
- `$merge`
- `$bucket`
- `$fill`
- `$setUnion`
- `$expr`
- `$elemMatch`
- `$cond`
- `$avg`, `$sum`, `$max`, `$min`
- `$addToSet`, `$push`, `$pull`, `$pop`, `$pullAll`
- `$in`, `$nin`, `$all`
- `$size`
- `$slice`
- Accumulators
- Single purpose aggregation

**Question:** How does an aggregation pipeline differ from a simple query? Can you imagine a scenario where `$lookup` and `$group` are used together?

---

## 5. Query Operations

- CRUD operations (find, insert, update, delete)
- `UpdateOne`, `UpdateMany`
- Upsert
- Save vs insert
- `$set`, `$unset`, `$inc`
- Logical operators (`$or`, `$and`, `$not`, `$nor`)
- Comparison operators (`$lt`, `$gt`, `$eq`, `$ne`)
- `$regex`, `$regexMatch`
- `$exists`
- Bitwise operators
- Count, countDocuments
- Distinct
- Sort, limit, skip
- Cursor
- Projection
- Field filters
- NoSQL injection
- Querying arrays
- Full-text search
- Method chaining
- AllowDiskUse
- Trigger

**Question:** Why is “upsert” useful in MongoDB? How does it differ from a standard update operation?

---

## 6. Database Utilities and Tools

- `mongodump`, `mongorestore`
- `mongoimport`, `mongoexport`
- Backup and restore
- Mongoose
- ODM, ORM
- Compass
- Mongotop
- Change streams

**Question:** How do tools like “mongodump” support database administration? Why might Mongoose be useful for developers?

---

## 7. Web/HTTP Concepts (Optional)

- PUT vs PATCH
- Dynamic routing
- Query and path parameters
- Router chaining
- HTTP statefulness
- Token introspection
- Middleware
- Rate limiting
- REST principles
- CDN vs download
- Content negotiation
- Threading in Node.js
