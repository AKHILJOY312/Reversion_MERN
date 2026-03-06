# ✅ MongoDB Querying Mastery Checklist

---

## 🔹 1. Basic CRUD Operations

- `insertOne()`, `insertMany()`
- `find()` with filters (equality, comparison: `$gt`, `$lt`, `$ne`,
  etc.)
- `findOne()`
- `updateOne()`, `updateMany()`, `replaceOne()`
- `deleteOne()`, `deleteMany()`

💡 Practice: Insert sample data, then retrieve, update, and delete
documents based on conditions.

---

## 🔹 2. Query Operators

### Comparison

- `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`
- `$in`, `$nin`

### Logical

- `$and`, `$or`, `$not`, `$nor`

### Element

- `$exists`, `$type`

### Array

- `$all`, `$elemMatch`, `$size`
- Querying arrays of scalars vs arrays of objects

### Evaluation

- `$regex`
- `$text` (requires text indexes)
- `$where` (avoid in production due to performance/security)

💡 Practice: Find students with CGPA between 7--9, or courses containing
"MAT".

---

## 🔹 3. Projection

- Include / exclude fields\
  `{ name: 1, _id: 0 }`

- Project computed fields (via aggregation)

- Slice arrays\
  `{ courses: { $slice: 2 } }`

### Common Projection / Aggregation Operators

**Arithmetic** - `$add` - `$multiply` - `$subtract` - `$divide`

**String** - `$concat` - `$toUpper` - `$substr`

**Comparison** - `$eq` - `$gt` - `$lt` - `$ne`

**Conditional** - `$cond` - `$ifNull` - `$switch`

**Array** - `$size` - `$map` - `$filter` - `$arrayElemAt`

**Date** - `$year` - `$month` - `$dateToString`

**Boolean** - `$and` - `$or` - `$not`

---

## 🔹 4. Sorting, Limiting & Skipping

- `.sort({ field: 1 })` → ascending
- `.sort({ field: -1 })` → descending
- `.limit(n)`
- `.skip(n)` → used for pagination

Example: `db.collection.find().sort({ age: -1 }).skip(10).limit(10)`

⚠️ Best Practice: Always index fields used in sorting.

---

## 🔹 5. Indexing (Critical for Performance)

Create indexes: `db.collection.createIndex({ field: 1 })`

Types of indexes:

- Single-field indexes
- Compound indexes
- Unique indexes
- Sparse indexes
- TTL indexes
- Text indexes

Understand index direction:

- `1` → ascending
- `-1` → descending

Analyze query performance:

`db.collection.find(...).explain("executionStats")`

💡 Rule: Index fields frequently used in: - `find()` - `sort()` -
join-like queries (`$lookup`)

---

## 🔹 6. Aggregation Pipeline (Core Skill!)

Master these pipeline stages:

- `$match` → filter documents
- `$group` → aggregate data
  - `_id`
  - `$sum`, `$avg`, `$max`, `$min`
  - `$first`
  - `$push`
- `$sort`
- `$limit`
- `$skip`
- `$project` → reshape documents
- `$lookup` → perform joins between collections
- `$unwind` → deconstruct arrays
- `$replaceWith` / `$replaceRoot` → promote subdocuments
- `$addFields`
- `$set`
- `$facet` → run multiple aggregations simultaneously

💡 Practice - Find topper per semester - Count students per class - Join
students with courses collection

---

## 🔹 7. Working with Arrays & Nested Data

Query nested fields: `{ "contact.email": "x@y.com" }`

Update array elements: - `$` - `$[]` - `$[<identifier>]`

Use `$elemMatch` in: - queries - projections

Aggregation operators for arrays: - `$filter` - `$map` - `$reduce`

💡 Example: Update phone number inside `contact.phone` array.

---

## 🔹 8. Text Search & Geospatial Queries (Advanced)

Create a text index:

`{ "$**": "text" }`

or

`{ title: "text", description: "text" }`

Search text: `{ $text: { $search: "keyword" } }`

Geospatial queries: - `$geoWithin` - `$near` - `$geoIntersects`

Use **2dsphere index** for coordinates.

---

## 🔹 9. Performance & Optimization

Analyze query plans: `db.collection.find(...).explain()`

Avoid: - `$where` - unindexed sorts - large `$unwind` - scanning entire
collections

Use covered queries: Projection only contains indexed fields.

Pagination strategies: - offset pagination (`skip + limit`) - cursor
pagination (`_id` or timestamp)

---

## 🔹 10. Real-World Patterns

Pagination - Offset-based pagination - Cursor-based pagination

Upsert:

    updateOne(
      { email: "user@test.com" },
      { $set: { name: "AJ" } },
      { upsert: true }
    )

Atomic updates - `$inc` - `$addToSet` - `$push`

Data modeling - Embedding - Referencing

Handling duplicates - Use unique indexes - Use `$addToSet` for arrays

---

## 🔹 11. Tools & Best Practices

- Use MongoDB Compass to visualize data.
- Inspect query plans using Explain Plan.
- Write reusable aggregation pipelines.
- Use schema validation where necessary.
- Avoid N+1 queries by using `$lookup` carefully.
