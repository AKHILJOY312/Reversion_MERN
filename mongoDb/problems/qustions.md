# MongoDB Query: Find Employees by Department, Skills, and Join Date

## 🎯 Requirements

Find all employees who:

1. Work in either the **"Engineering"** or **"Data Science"** department, AND
2. Have **at least 3 skills**, AND
3. Joined the company **after January 1, 2019**

---

## 📄 Example Document

```json
{
  "_id": ObjectId("65bd1234abcd5678ef901234"),
  "name": "Alice Johnson",
  "department": "Engineering",
  "skills": ["JavaScript", "Node.js", "MongoDB", "React"],
  "salary": 120000,
  "date_of_joining": ISODate("2020-06-15T00:00:00Z")
}
```

## Solution: Aggregation Pipeline

```javascript
db.employees.find({
  department: { $in: ["Engineering", "Data Science"] },
  $expr: { $gte: [{ $size: "$skills" }, 3] },
  date_of_joining: { $gt: ISODate("2019-01-01") },
});
```
