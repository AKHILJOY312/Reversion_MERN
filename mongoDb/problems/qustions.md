# MongoDB Query: Find Employees by Department, Skills, and Join Date

## 🎯 Requirements

Find all employees who:

1. Work in either the **"Engineering"** or **"Data Science"** department, AND
2. Have **at least 3 skills**, AND
3. Joined the company **after January 1, 2019**

---

## 📄 Example Document

```text
db.employees.insertMany([
  {
    name: "Arjun Nair",
    department: "Engineering",
    skills: ["Python", "Django", "PostgreSQL", "Docker", "AWS"],
    salary: 1050000,
    date_of_joining: ISODate("2021-03-15")
  },
  {
    name: "Priya Menon",
    department: "Data Science",
    skills: ["Python", "Pandas", "SQL", "Machine Learning", "Tableau"],
    salary: 1180000,
    date_of_joining: ISODate("2020-11-08")
  },
  {
    name: "Rohan Sharma",
    department: "Engineering",
    skills: ["Java", "Spring Boot", "Kafka"],
    salary: 920000,
    date_of_joining: ISODate("2022-06-20")   // ← only 3 skills
  },
  {
    name: "Sneha Raj",
    department: "Data Science",
    skills: ["R", "Python", "Spark", "Power BI", "Statistics", "Airflow"],
    salary: 1320000,
    date_of_joining: ISODate("2019-02-10")
  },
  {
    name: "Vivek Thomas",
    department: "Marketing",
    skills: ["SEO", "Google Ads", "Content Writing", "Canva"],
    salary: 780000,
    date_of_joining: ISODate("2020-09-01")   // ← wrong department
  },
  {
    name: "Ananya Bose",
    department: "Engineering",
    skills: ["React", "TypeScript", "Redux", "Jest", "Tailwind CSS", "GraphQL"],
    salary: 1140000,
    date_of_joining: ISODate("2023-01-12")
  },
  {
    name: "Karthik Iyer",
    department: "Data Science",
    skills: ["Python", "TensorFlow", "SQL"],
    salary: 980000,
    date_of_joining: ISODate("2021-07-05")   // ← only 3 skills
  },
  {
    name: "Meera Pillai",
    department: "Engineering",
    skills: ["Go", "Kubernetes", "Prometheus", "Terraform", "GCP"],
    salary: 1250000,
    date_of_joining: ISODate("2018-12-20")   // ← before 2019
  },
  {
    name: "Aditya Varma",
    department: "Data Science",
    skills: ["Python", "PyTorch", "Scikit-learn", "Snowflake", "dbt", "Looker"],
    salary: 1280000,
    date_of_joining: ISODate("2022-04-18")
  }
]);
```

## Questions :

# Easy / Warm-up

Find all employees who joined in 2022 (any department)
Show names and salaries of people who earn more than 11,00,000
List everyone in "Data Science" sorted by joining date (newest first)
Count how many employees have "Python" in their skills

# Medium

Find employees who have both "Python" and "SQL" in their skills
Show people who joined in 2020 or 2021 and have at least 5 skills
Find the person(s) with the highest salary in "Engineering"
List names + skill count for everyone in Engineering or Data Science

# A bit harder / interesting

Find employees who do not have "JavaScript" in their skills (but work in Engineering)
Show the 3 most recently joined employees who have ≥ 4 skills
Find people whose first skill is "Python"
Get average salary per department (only Engineering + Data Science)

# Aggregation / Grouping style

Group by department and show:

count of employees
average salary
earliest join date
(only for departments that have at least 2 people)

For each department, show the top 2 most common skills (with count)

# Tricky / edge-case style

Find employees who joined exactly on or after 2020-01-01 but before 2021-01-01
Find people whose skill array contains at least one skill that starts with "P" (case-sensitive)
Show names of people who have more skills than the average number of skills across all employees
Find employees in "Data Science" who joined after Alice Johnson

Bonus (requires $unwind + grouping)

Get a list of all unique skills that appear in the company + how many people have each skill (sorted descending by count)

## Solution:

```javascript
db.employees.find({
  department: { $in: ["Engineering", "Data Science"] },
  $expr: { $gte: [{ $size: "$skills" }, 3] },
  date_of_joining: { $gt: ISODate("2019-01-01") },
});
```
