
/**
 * src/data/interview/sql.ts
 * SQL Interview Questions (120+ items)
 */

import { InterviewQuestion } from '@/src/types/interview';

export const sqlQuestions: InterviewQuestion[] = [
  // ===================== BEGINNER =====================
  {
    id: 'sql-001',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between TRUNCATE, DELETE, and DROP?',
    options: [
      'DELETE is DML, TRUNCATE/DROP are DDL',
      'They are all DDL commands',
      'TRUNCATE keeps the table structure, DELETE removes all rows',
      'DROP removes the database only'
    ],
    correctAnswer: 'DELETE is DML, TRUNCATE/DROP are DDL',
    explanation: 'DELETE is a Data Manipulation Language command (row-by-row), while TRUNCATE and DROP are Data Definition Language commands. TRUNCATE resets the table (and identity), DROP removes the table definition entirely.',
    tags: ['ddl', 'dml', 'sql-basics']
  },
  {
    id: 'sql-002',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does SQL stand for?',
    options: [
      'Structured Query Language',
      'Sequential Query Logic',
      'Simple Question Language',
      'Standard Query Layer'
    ],
    correctAnswer: 'Structured Query Language',
    explanation: 'SQL (Structured Query Language) is the standard language used to communicate with and manipulate relational databases.',
    tags: ['fundamentals', 'sql-basics']
  },
  {
    id: 'sql-003',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which SQL clause is used to filter rows before any grouping occurs?',
    options: ['HAVING', 'WHERE', 'GROUP BY', 'ORDER BY'],
    correctAnswer: 'WHERE',
    explanation: 'WHERE filters individual rows before grouping/aggregation happens, whereas HAVING filters groups after aggregation.',
    tags: ['where', 'filtering', 'sql-basics']
  },
  {
    id: 'sql-004',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is a PRIMARY KEY?',
    options: [
      'A column that can contain NULL and duplicate values',
      'A column or set of columns that uniquely identifies each row in a table and cannot contain NULLs',
      'A foreign reference to another table',
      'An index used only for sorting'
    ],
    correctAnswer: 'A column or set of columns that uniquely identifies each row in a table and cannot contain NULLs',
    explanation: 'A primary key enforces entity integrity by guaranteeing uniqueness and disallowing NULL values, and a table can have only one primary key (though it may be composite).',
    tags: ['keys', 'constraints', 'sql-basics']
  },
  {
    id: 'sql-005',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is a FOREIGN KEY used for?',
    options: [
      'To speed up SELECT queries automatically',
      'To establish and enforce a link between data in two tables, referencing a primary key in another table',
      'To encrypt sensitive columns',
      'To allow duplicate primary keys'
    ],
    correctAnswer: 'To establish and enforce a link between data in two tables, referencing a primary key in another table',
    explanation: 'A foreign key enforces referential integrity by ensuring values in one table correspond to existing values (typically a primary key) in another table.',
    tags: ['keys', 'constraints', 'referential-integrity']
  },
  {
    id: 'sql-006',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'Which SQL statement retrieves all columns from a table named "employees"?',
    options: [
      'GET * FROM employees',
      'SELECT * FROM employees',
      'SELECT ALL employees',
      'FETCH employees.*'
    ],
    correctAnswer: 'SELECT * FROM employees',
    explanation: 'SELECT * FROM table_name retrieves every column for every row in the table (though selecting explicit columns is usually preferred in production code).',
    tags: ['select', 'sql-basics']
  },
  {
    id: 'sql-007',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between WHERE and HAVING?',
    options: [
      'They are interchangeable in every query',
      'WHERE filters rows before grouping; HAVING filters groups after aggregation (e.g., after GROUP BY)',
      'HAVING can only be used with SELECT *',
      'WHERE only works with numeric columns'
    ],
    correctAnswer: 'WHERE filters rows before grouping; HAVING filters groups after aggregation (e.g., after GROUP BY)',
    explanation: 'WHERE operates on individual rows prior to GROUP BY, while HAVING operates on the aggregated results of groups, so it can reference aggregate functions like COUNT() or SUM().',
    tags: ['where', 'having', 'group-by']
  },
  {
    id: 'sql-008',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the DISTINCT keyword do in a SELECT statement?',
    options: [
      'Sorts the result set',
      'Removes duplicate rows from the result set',
      'Counts the number of rows',
      'Filters out NULL values only'
    ],
    correctAnswer: 'Removes duplicate rows from the result set',
    explanation: 'SELECT DISTINCT returns only unique rows based on the selected columns, eliminating exact duplicates from the output.',
    tags: ['distinct', 'select', 'sql-basics']
  },
  {
    id: 'sql-009',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'Which clause is used to sort query results?',
    options: ['SORT BY', 'GROUP BY', 'ORDER BY', 'ARRANGE BY'],
    correctAnswer: 'ORDER BY',
    explanation: 'ORDER BY sorts the result set by one or more columns, ascending (ASC, default) or descending (DESC).',
    tags: ['order-by', 'sql-basics']
  },
  {
    id: 'sql-010',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of the NOT NULL constraint?',
    options: [
      'It ensures a column cannot be left empty (must always have a value)',
      'It ensures a column always contains the value zero',
      'It prevents duplicate values',
      'It enforces foreign key relationships'
    ],
    correctAnswer: 'It ensures a column cannot be left empty (must always have a value)',
    explanation: 'A NOT NULL constraint requires that a column always contain an explicit value, rejecting any INSERT or UPDATE that would leave it NULL.',
    tags: ['constraints', 'sql-basics']
  },
  {
    id: 'sql-011',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does the UNIQUE constraint enforce?',
    options: [
      'That all values in a column are non-NULL',
      'That all values in a column (or column combination) are distinct from one another',
      'That a column can only store numbers',
      'That a table can have only one row'
    ],
    correctAnswer: 'That all values in a column (or column combination) are distinct from one another',
    explanation: 'UNIQUE prevents duplicate values in a column, though unlike PRIMARY KEY, most databases allow multiple NULLs in a UNIQUE column since NULL is not considered equal to itself.',
    tags: ['constraints', 'unique', 'sql-basics']
  },
  {
    id: 'sql-012',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'Which SQL command is used to add a new row to a table?',
    options: ['UPDATE', 'INSERT INTO', 'ADD ROW', 'CREATE ROW'],
    correctAnswer: 'INSERT INTO',
    explanation: 'INSERT INTO table_name (columns) VALUES (...) adds new rows to a table.',
    tags: ['insert', 'dml', 'sql-basics']
  },
  {
    id: 'sql-013',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'Which SQL command modifies existing rows in a table?',
    options: ['UPDATE', 'ALTER', 'MODIFY', 'CHANGE'],
    correctAnswer: 'UPDATE',
    explanation: 'UPDATE table_name SET column = value WHERE condition modifies existing rows that match the given condition.',
    tags: ['update', 'dml', 'sql-basics']
  },
  {
    id: 'sql-014',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What happens if you run an UPDATE statement without a WHERE clause?',
    options: [
      'Nothing happens; the statement is ignored',
      'Every row in the table is updated',
      'Only the first row is updated',
      'The database throws a syntax error'
    ],
    correctAnswer: 'Every row in the table is updated',
    explanation: 'Without a WHERE clause, UPDATE (and DELETE) applies to every row in the table, which is a common and dangerous mistake in production environments.',
    tags: ['update', 'gotchas', 'dml']
  },
  {
    id: 'sql-015',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the difference between CHAR and VARCHAR data types?',
    options: [
      'CHAR is fixed-length and pads with spaces; VARCHAR is variable-length and only stores the actual characters used',
      'They are functionally identical in all databases',
      'VARCHAR can only store numbers',
      'CHAR can store unlimited length text'
    ],
    correctAnswer: 'CHAR is fixed-length and pads with spaces; VARCHAR is variable-length and only stores the actual characters used',
    explanation: 'CHAR(n) always occupies n characters of storage, padding shorter values with spaces, while VARCHAR(n) stores only the actual string length plus a small overhead, up to the maximum n.',
    tags: ['data-types', 'sql-basics']
  },
  {
    id: 'sql-016',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does NULL represent in SQL?',
    options: [
      'The number zero',
      'An empty string',
      'The absence of a value, or an unknown value',
      'A reserved keyword with no special meaning'
    ],
    correctAnswer: 'The absence of a value, or an unknown value',
    explanation: 'NULL represents missing or unknown data; it is not equal to zero, an empty string, or even another NULL, which is why comparisons must use IS NULL / IS NOT NULL.',
    tags: ['null', 'sql-basics']
  },
  {
    id: 'sql-017',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'Why does the condition "column = NULL" never return rows, even when the column contains NULL values?',
    options: [
      'It is a syntax error in all databases',
      'NULL comparisons with = always evaluate to UNKNOWN, not TRUE, so IS NULL must be used instead',
      'NULL is treated as the string "NULL"',
      'The column must be cast to a string first'
    ],
    correctAnswer: 'NULL comparisons with = always evaluate to UNKNOWN, not TRUE, so IS NULL must be used instead',
    explanation: 'In SQL\u2019s three-valued logic (TRUE, FALSE, UNKNOWN), any comparison involving NULL using standard operators yields UNKNOWN, which is treated as not matching in a WHERE clause; IS NULL/IS NOT NULL are the correct predicates.',
    tags: ['null', 'gotchas', 'where']
  },
  {
    id: 'sql-018',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is an aggregate function in SQL?',
    options: [
      'A function that operates on a single row only',
      'A function that performs a calculation across a set of rows and returns a single value (e.g., SUM, AVG, COUNT)',
      'A function used only for string manipulation',
      'A function that creates new tables'
    ],
    correctAnswer: 'A function that performs a calculation across a set of rows and returns a single value (e.g., SUM, AVG, COUNT)',
    explanation: 'Aggregate functions like COUNT(), SUM(), AVG(), MIN(), and MAX() summarize multiple rows into a single result, often used alongside GROUP BY.',
    tags: ['aggregate-functions', 'sql-basics']
  },
  {
    id: 'sql-019',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What does COUNT(*) return for a table with 5 rows, two of which have a NULL value in column "age"?',
    options: ['3', '5', '2', '0'],
    correctAnswer: '5',
    explanation: 'COUNT(*) counts all rows regardless of NULL values, returning the total row count; COUNT(age) would instead return 3, since COUNT(column) ignores NULLs in that column.',
    tags: ['count', 'aggregate-functions', 'null']
  },
  {
    id: 'sql-020',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What does GROUP BY do in a SQL query?',
    options: [
      'Sorts rows alphabetically',
      'Groups rows sharing the same values in specified columns so aggregate functions can be applied per group',
      'Removes duplicate rows entirely',
      'Joins two tables together'
    ],
    correctAnswer: 'Groups rows sharing the same values in specified columns so aggregate functions can be applied per group',
    explanation: 'GROUP BY collapses rows with matching values in the grouped columns into a single row per group, typically used with aggregate functions to compute per-group summaries.',
    tags: ['group-by', 'aggregate-functions']
  },

  // ===================== INTERMEDIATE =====================
  {
    id: 'sql-021',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between INNER JOIN and LEFT JOIN?',
    options: [
      'They always return the same results',
      'INNER JOIN returns only matching rows from both tables; LEFT JOIN returns all rows from the left table plus matched rows from the right (NULL where no match)',
      'LEFT JOIN only works with a single table',
      'INNER JOIN includes unmatched rows from the right table'
    ],
    correctAnswer: 'INNER JOIN returns only matching rows from both tables; LEFT JOIN returns all rows from the left table plus matched rows from the right (NULL where no match)',
    explanation: 'INNER JOIN excludes rows without a match in both tables, while LEFT (OUTER) JOIN preserves every row from the left table, filling unmatched right-table columns with NULL.',
    tags: ['joins', 'inner-join', 'left-join']
  },
  {
    id: 'sql-022',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does a RIGHT JOIN return?',
    options: [
      'Only rows that match in both tables',
      'All rows from the right table, plus matching rows from the left table (NULL where no match)',
      'All rows from both tables regardless of match',
      'Only rows that exist in the right table but not the left'
    ],
    correctAnswer: 'All rows from the right table, plus matching rows from the left table (NULL where no match)',
    explanation: 'RIGHT JOIN is the mirror image of LEFT JOIN: every row from the right table is preserved, with unmatched left-table columns returned as NULL.',
    tags: ['joins', 'right-join']
  },
  {
    id: 'sql-023',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does a FULL OUTER JOIN return?',
    options: [
      'Only rows present in both tables',
      'All rows from both tables, with NULLs filled in wherever there is no match on either side',
      'Only rows that exist in neither table',
      'It is identical to a CROSS JOIN'
    ],
    correctAnswer: 'All rows from both tables, with NULLs filled in wherever there is no match on either side',
    explanation: 'FULL OUTER JOIN combines LEFT and RIGHT JOIN behavior, returning every row from both tables, matched where possible and NULL-padded where not.',
    tags: ['joins', 'full-outer-join']
  },
  {
    id: 'sql-024',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a CROSS JOIN, and what is its typical result size?',
    options: [
      'It joins tables based on a matching key, returning a filtered set',
      'It returns the Cartesian product of two tables, with row count equal to (rows in table A) \u00d7 (rows in table B)',
      'It returns only the first row of each table',
      'It is identical to an INNER JOIN'
    ],
    correctAnswer: 'It returns the Cartesian product of two tables, with row count equal to (rows in table A) \u00d7 (rows in table B)',
    explanation: 'CROSS JOIN pairs every row of one table with every row of the other, with no join condition, which can produce extremely large result sets if used unintentionally.',
    tags: ['joins', 'cross-join']
  },
  {
    id: 'sql-025',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a self join, and when would you use one?',
    options: [
      'A join that is impossible in SQL',
      'A table joined with itself, often used to compare rows within the same table, like finding employees and their managers in one "employees" table',
      'A join that only works on views',
      'A join that always returns zero rows'
    ],
    correctAnswer: 'A table joined with itself, often used to compare rows within the same table, like finding employees and their managers in one "employees" table',
    explanation: 'Self joins use table aliases to treat the same table as two logical entities, commonly used for hierarchical data like an employee table with a manager_id referencing employee_id in the same table.',
    tags: ['joins', 'self-join']
  },
  {
    id: 'sql-026',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a subquery (nested query)?',
    options: [
      'A query that runs after the main query completes, in a separate transaction',
      'A query nested inside another SQL statement, used to produce intermediate results consumed by the outer query',
      'A type of stored procedure',
      'A query that can only return one column'
    ],
    correctAnswer: 'A query nested inside another SQL statement, used to produce intermediate results consumed by the outer query',
    explanation: 'Subqueries can appear in SELECT, FROM, WHERE, or HAVING clauses, and can be correlated (referencing the outer query) or uncorrelated (independent).',
    tags: ['subqueries']
  },
  {
    id: 'sql-027',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between a correlated subquery and a regular (uncorrelated) subquery?',
    options: [
      'There is no functional difference',
      'A correlated subquery references columns from the outer query and is re-evaluated for each outer row; an uncorrelated subquery executes independently once',
      'Correlated subqueries can only appear in the SELECT clause',
      'Uncorrelated subqueries are always faster regardless of context'
    ],
    correctAnswer: 'A correlated subquery references columns from the outer query and is re-evaluated for each outer row; an uncorrelated subquery executes independently once',
    explanation: 'Correlated subqueries depend on values from the enclosing query and conceptually execute once per outer row, which can be expensive, whereas independent subqueries are evaluated once and their result reused.',
    tags: ['subqueries', 'correlated-subquery', 'performance']
  },
  {
    id: 'sql-028',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a Common Table Expression (CTE)?',
    options: [
      'A permanent table stored in the database schema',
      'A named, temporary result set defined using WITH that can be referenced within a single query, improving readability',
      'A type of index',
      'A way to encrypt query results'
    ],
    correctAnswer: 'A named, temporary result set defined using WITH that can be referenced within a single query, improving readability',
    explanation: 'CTEs, defined with the WITH clause, let you break complex queries into named, readable building blocks, and can also support recursive queries.',
    tags: ['cte', 'with-clause']
  },
  {
    id: 'sql-029',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a recursive CTE typically used for?',
    options: [
      'Encrypting recursive data structures',
      'Querying hierarchical or graph-like data, such as an organizational chart or category tree, by repeatedly referencing itself',
      'Improving INSERT performance',
      'Replacing all JOIN operations'
    ],
    correctAnswer: 'Querying hierarchical or graph-like data, such as an organizational chart or category tree, by repeatedly referencing itself',
    explanation: 'A recursive CTE has an anchor (base case) member and a recursive member that references the CTE itself, repeatedly executing until no more rows are produced, ideal for traversing parent-child hierarchies.',
    tags: ['cte', 'recursive-cte', 'hierarchical-data']
  },
  {
    id: 'sql-030',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a database VIEW?',
    options: [
      'A physical copy of table data stored separately',
      'A virtual table defined by a stored SELECT query, which does not store data itself (unless materialized)',
      'A type of backup mechanism',
      'A way to encrypt sensitive columns'
    ],
    correctAnswer: 'A virtual table defined by a stored SELECT query, which does not store data itself (unless materialized)',
    explanation: 'A regular view is essentially a saved query that can be queried like a table, recomputed each time it is accessed, useful for simplifying complex queries or restricting column/row access.',
    tags: ['views']
  },
  {
    id: 'sql-031',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between a regular VIEW and a MATERIALIZED VIEW?',
    options: [
      'They are identical in all databases',
      'A regular view recomputes its query on every access; a materialized view stores the query results physically and must be refreshed to reflect underlying data changes',
      'Materialized views cannot be queried with SELECT',
      'Regular views are always faster than materialized views'
    ],
    correctAnswer: 'A regular view recomputes its query on every access; a materialized view stores the query results physically and must be refreshed to reflect underlying data changes',
    explanation: 'Materialized views trade storage and refresh complexity for query speed, since the result set is precomputed and persisted, unlike standard views which run the underlying query every time.',
    tags: ['views', 'materialized-view', 'performance']
  },
  {
    id: 'sql-032',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is an INDEX in a database, and what trade-off does it introduce?',
    options: [
      'A structure that only stores backup copies of data, with no trade-off',
      'A data structure that speeds up read queries on indexed columns, at the cost of additional storage and slower writes (INSERT/UPDATE/DELETE)',
      'A constraint that prevents duplicate rows',
      'A way to permanently delete data faster'
    ],
    correctAnswer: 'A data structure that speeds up read queries on indexed columns, at the cost of additional storage and slower writes (INSERT/UPDATE/DELETE)',
    explanation: 'Indexes (commonly B-trees) allow the database to locate rows without scanning the entire table, dramatically speeding up lookups and joins, but every index must also be updated on writes, adding overhead.',
    tags: ['indexing', 'performance']
  },
  {
    id: 'sql-033',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between a clustered and a non-clustered index?',
    options: [
      'They are the same thing with different names',
      'A clustered index determines the physical storage order of table rows (only one per table); a non-clustered index is a separate structure pointing back to the rows',
      'Non-clustered indexes can only be used on primary keys',
      'A table can have multiple clustered indexes'
    ],
    correctAnswer: 'A clustered index determines the physical storage order of table rows (only one per table); a non-clustered index is a separate structure pointing back to the rows',
    explanation: 'Because the clustered index dictates physical row order, a table can have at most one (often automatically created on the primary key), while multiple non-clustered indexes can exist, each storing pointers/row locators back to the actual data.',
    tags: ['indexing', 'clustered-index', 'non-clustered-index']
  },
  {
    id: 'sql-034',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is database normalization?',
    options: [
      'A process of duplicating data across tables for speed',
      'A process of organizing data to reduce redundancy and improve data integrity, typically by decomposing tables according to normal forms',
      'A way to compress database backups',
      'A method for encrypting sensitive data'
    ],
    correctAnswer: 'A process of organizing data to reduce redundancy and improve data integrity, typically by decomposing tables according to normal forms',
    explanation: 'Normalization organizes columns and tables to minimize data duplication and dependency anomalies, following normal forms (1NF, 2NF, 3NF, etc.), at the cost of sometimes requiring more joins.',
    tags: ['normalization', 'database-design']
  },
  {
    id: 'sql-035',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does it mean for a table to be in First Normal Form (1NF)?',
    options: [
      'Every column must contain numeric data only',
      'Each column holds atomic (indivisible) values, and each row is unique, with no repeating groups or arrays in a single column',
      'The table must have at least two foreign keys',
      'All columns must allow NULL values'
    ],
    correctAnswer: 'Each column holds atomic (indivisible) values, and each row is unique, with no repeating groups or arrays in a single column',
    explanation: '1NF requires eliminating repeating groups and multi-valued fields (e.g., a comma-separated list of phone numbers in one column), ensuring every cell contains a single, atomic value.',
    tags: ['normalization', '1nf', 'database-design']
  },
  {
    id: 'sql-036',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What problem does Third Normal Form (3NF) address?',
    options: [
      'It addresses repeating groups within a single column',
      'It eliminates transitive dependencies, ensuring non-key columns depend only on the primary key, not on other non-key columns',
      'It requires every table to have exactly one column',
      'It is only relevant for NoSQL databases'
    ],
    correctAnswer: 'It eliminates transitive dependencies, ensuring non-key columns depend only on the primary key, not on other non-key columns',
    explanation: '3NF builds on 2NF by removing transitive dependencies, e.g., if "city" determines "zip_code" within a table, that relationship should be moved to its own table rather than depending indirectly through another non-key column.',
    tags: ['normalization', '3nf', 'database-design']
  },
  {
    id: 'sql-037',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is denormalization, and why might it be used?',
    options: [
      'It is never used in real-world databases',
      'Intentionally introducing redundancy (e.g., duplicating data across tables) to improve read performance at the cost of write complexity and potential inconsistency',
      'It is the process of removing all foreign keys',
      'It always improves both read and write performance simultaneously'
    ],
    correctAnswer: 'Intentionally introducing redundancy (e.g., duplicating data across tables) to improve read performance at the cost of write complexity and potential inconsistency',
    explanation: 'Denormalization trades some normalization guarantees for performance, often used in reporting/analytics systems or read-heavy workloads where joins would otherwise be too costly.',
    tags: ['denormalization', 'performance', 'database-design']
  },
  {
    id: 'sql-038',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is a database transaction?',
    options: [
      'A single SELECT statement',
      'A sequence of one or more SQL operations executed as a single logical unit of work, which either fully commits or fully rolls back',
      'A way to back up the database',
      'A type of index used for sorting'
    ],
    correctAnswer: 'A sequence of one or more SQL operations executed as a single logical unit of work, which either fully commits or fully rolls back',
    explanation: 'Transactions group multiple statements so that either all changes succeed (COMMIT) or none do (ROLLBACK), maintaining consistency even in the event of errors or failures.',
    tags: ['transactions']
  },
  {
    id: 'sql-039',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the ACID acronym stand for in the context of database transactions?',
    options: [
      'Atomicity, Consistency, Isolation, Durability',
      'Availability, Concurrency, Indexing, Durability',
      'Atomicity, Caching, Indexing, Durability',
      'Authentication, Consistency, Integrity, Deletion'
    ],
    correctAnswer: 'Atomicity, Consistency, Isolation, Durability',
    explanation: 'ACID describes the guarantees a reliable transactional system provides: Atomicity (all-or-nothing), Consistency (valid state transitions), Isolation (concurrent transactions don\u2019t interfere), and Durability (committed changes persist).',
    tags: ['acid', 'transactions']
  },
  {
    id: 'sql-040',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the purpose of the COMMIT and ROLLBACK statements?',
    options: [
      'COMMIT deletes data, ROLLBACK creates data',
      'COMMIT permanently saves the changes made in a transaction; ROLLBACK undoes them, restoring the previous state',
      'They are interchangeable synonyms',
      'They can only be used with SELECT statements'
    ],
    correctAnswer: 'COMMIT permanently saves the changes made in a transaction; ROLLBACK undoes them, restoring the previous state',
    explanation: 'COMMIT finalizes a transaction\u2019s changes, making them visible and durable, while ROLLBACK reverts all changes made since the transaction began (or since a named savepoint), as if they never happened.',
    tags: ['transactions', 'commit', 'rollback']
  },

  // ===================== ADVANCED =====================
  {
    id: 'sql-041',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What are the four standard transaction isolation levels, from least to most strict?',
    options: [
      'Read Uncommitted, Read Committed, Repeatable Read, Serializable',
      'Serializable, Repeatable Read, Read Committed, Read Uncommitted (in that increasing order of strictness)',
      'Committed, Uncommitted, Locked, Unlocked',
      'Dirty, Clean, Phantom, Serializable'
    ],
    correctAnswer: 'Read Uncommitted, Read Committed, Repeatable Read, Serializable',
    explanation: 'These four ANSI SQL isolation levels trade off concurrency for consistency: Read Uncommitted allows dirty reads, Read Committed prevents them, Repeatable Read also prevents non-repeatable reads, and Serializable additionally prevents phantom reads by fully serializing transactions.',
    tags: ['isolation-levels', 'transactions', 'concurrency']
  },
  {
    id: 'sql-042',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a "dirty read"?',
    options: [
      'Reading data that has been corrupted on disk',
      'Reading uncommitted changes made by another transaction, which may later be rolled back',
      'Reading data from a table without an index',
      'A read that returns no results'
    ],
    correctAnswer: 'Reading uncommitted changes made by another transaction, which may later be rolled back',
    explanation: 'Dirty reads occur under the Read Uncommitted isolation level, where a transaction can see another transaction\u2019s uncommitted changes, which is risky since that data might be rolled back and never actually become valid.',
    tags: ['isolation-levels', 'dirty-read', 'concurrency']
  },
  {
    id: 'sql-043',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a "phantom read"?',
    options: [
      'Reading a row that was deleted before the transaction began',
      'A transaction re-running the same query and getting a different set of rows, because another transaction inserted or deleted rows matching the query criteria in between',
      'Reading data that does not exist on disk',
      'A read that always returns NULL values'
    ],
    correctAnswer: 'A transaction re-running the same query and getting a different set of rows, because another transaction inserted or deleted rows matching the query criteria in between',
    explanation: 'Phantom reads happen when new rows appear (or existing ones disappear) between two reads within the same transaction due to concurrent inserts/deletes; only the Serializable isolation level fully prevents this.',
    tags: ['isolation-levels', 'phantom-read', 'concurrency']
  },
  {
    id: 'sql-044',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between optimistic and pessimistic locking?',
    options: [
      'They are the same concept with different names',
      'Pessimistic locking acquires locks upfront to prevent conflicts; optimistic locking allows concurrent access and checks for conflicts (e.g., via version numbers) only at commit time',
      'Optimistic locking is only used in NoSQL databases',
      'Pessimistic locking never blocks other transactions'
    ],
    correctAnswer: 'Pessimistic locking acquires locks upfront to prevent conflicts; optimistic locking allows concurrent access and checks for conflicts (e.g., via version numbers) only at commit time',
    explanation: 'Pessimistic locking assumes conflicts are likely and locks rows proactively (reducing concurrency but avoiding conflicts), while optimistic locking assumes conflicts are rare, allowing concurrent reads/writes and detecting conflicts via a version/timestamp column when committing.',
    tags: ['locking', 'concurrency', 'optimistic-locking']
  },
  {
    id: 'sql-045',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a deadlock, and how do most database systems handle it?',
    options: [
      'A deadlock is a permanent crash of the database server',
      'A situation where two or more transactions each hold a lock the other needs, blocking forever; most databases detect this and abort one transaction (a "victim") to break the cycle',
      'A deadlock only occurs in single-user databases',
      'Deadlocks can only be resolved by restarting the database'
    ],
    correctAnswer: 'A situation where two or more transactions each hold a lock the other needs, blocking forever; most databases detect this and abort one transaction (a "victim") to break the cycle',
    explanation: 'Database engines typically run a deadlock detection algorithm (e.g., wait-for graph analysis) and automatically roll back one of the involved transactions, returning an error so the application can retry.',
    tags: ['deadlock', 'locking', 'concurrency']
  },
  {
    id: 'sql-046',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of a window function (e.g., ROW_NUMBER(), RANK(), OVER())?',
    options: [
      'To collapse multiple rows into a single aggregated row, like GROUP BY',
      'To perform calculations across a set of rows related to the current row, without collapsing the result into fewer rows',
      'To create a new window or pop-up in a GUI application',
      'To define a table\u2019s column types'
    ],
    correctAnswer: 'To perform calculations across a set of rows related to the current row, without collapsing the result into fewer rows',
    explanation: 'Unlike GROUP BY, which reduces rows, window functions compute values (rankings, running totals, moving averages) over a defined window of rows (via OVER(), PARTITION BY, ORDER BY) while preserving the original row count.',
    tags: ['window-functions', 'over-clause']
  },
  {
    id: 'sql-047',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between RANK(), DENSE_RANK(), and ROW_NUMBER()?',
    options: [
      'They all behave identically for any data',
      'ROW_NUMBER() assigns unique sequential numbers with no ties; RANK() assigns the same rank to ties but skips subsequent numbers; DENSE_RANK() assigns the same rank to ties without skipping numbers',
      'DENSE_RANK() can only be used with GROUP BY',
      'RANK() cannot be used with PARTITION BY'
    ],
    correctAnswer: 'ROW_NUMBER() assigns unique sequential numbers with no ties; RANK() assigns the same rank to ties but skips subsequent numbers; DENSE_RANK() assigns the same rank to ties without skipping numbers',
    explanation: 'Given tied values, ROW_NUMBER() always returns unique increasing numbers (arbitrary tie-breaking), RANK() gives equal ranks to ties then jumps (e.g., 1,2,2,4), while DENSE_RANK() gives equal ranks to ties without gaps (e.g., 1,2,2,3).',
    tags: ['window-functions', 'rank', 'row_number']
  },
  {
    id: 'sql-048',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'How would you find the second-highest salary from an "employees" table using a window function?',
    options: [
      'SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)',
      'SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees) t WHERE rnk = 2',
      'SELECT salary FROM employees ORDER BY salary LIMIT 1',
      'SELECT MIN(salary) FROM employees'
    ],
    correctAnswer: 'SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees) t WHERE rnk = 2',
    explanation: 'Using DENSE_RANK() correctly handles duplicate salaries by treating them as the same rank, so "second-highest" reliably refers to the second distinct salary value, unlike OFFSET/LIMIT approaches which can be skewed by ties.',
    tags: ['window-functions', 'coding', 'rank']
  },
  {
    id: 'sql-049',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'What is a covering index, and why does it improve query performance?',
    options: [
      'An index that covers every table in the database',
      'An index that includes all columns needed by a query, allowing the database to satisfy the query entirely from the index without accessing the underlying table',
      'An index that automatically rebuilds itself',
      'An index used only for foreign keys'
    ],
    correctAnswer: 'An index that includes all columns needed by a query, allowing the database to satisfy the query entirely from the index without accessing the underlying table',
    explanation: 'When all selected and filtered columns exist within the index itself, the database can avoid the extra "lookup" step back to the table (sometimes called a bookmark lookup), significantly speeding up read performance.',
    tags: ['indexing', 'covering-index', 'performance']
  },
  {
    id: 'sql-050',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'What is the purpose of EXPLAIN (or EXPLAIN ANALYZE) in SQL?',
    options: [
      'It documents the table schema in plain English',
      'It shows the query execution plan the database optimizer chose, helping identify performance issues like full table scans or missing indexes',
      'It automatically optimizes the query',
      'It encrypts the query for security'
    ],
    correctAnswer: 'It shows the query execution plan the database optimizer chose, helping identify performance issues like full table scans or missing indexes',
    explanation: 'EXPLAIN reveals how the database intends to execute a query (join order, index usage, scan types), while EXPLAIN ANALYZE (in PostgreSQL, for example) actually runs the query and reports real timing and row counts, both essential for diagnosing slow queries.',
    tags: ['explain', 'query-plan', 'performance']
  },
  {
    id: 'sql-051',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'Why can a leading wildcard in a LIKE pattern (e.g., LIKE \'%searchterm\') prevent index usage?',
    options: [
      'It never prevents index usage in any database',
      'A B-tree index is sorted by leading characters, so a search with an unknown prefix cannot use the index to narrow the range and typically falls back to a full table scan',
      'LIKE queries are always faster than equality queries',
      'It only affects numeric columns'
    ],
    correctAnswer: 'A B-tree index is sorted by leading characters, so a search with an unknown prefix cannot use the index to narrow the range and typically falls back to a full table scan',
    explanation: 'Standard B-tree indexes are efficient for prefix matches (LIKE \'term%\') because they can binary search by leading characters, but a leading wildcard breaks this since any value could match, requiring a full scan unless a specialized index (e.g., trigram/full-text) is used.',
    tags: ['indexing', 'like', 'performance']
  },
  {
    id: 'sql-052',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the N+1 query problem, often seen in ORMs?',
    options: [
      'A query that returns exactly N+1 rows',
      'Issuing one query to fetch a list of N parent records, then N additional separate queries to fetch related child data for each, instead of a single join',
      'A type of SQL syntax error',
      'A performance optimization technique'
    ],
    correctAnswer: 'Issuing one query to fetch a list of N parent records, then N additional separate queries to fetch related child data for each, instead of a single join',
    explanation: 'The N+1 problem is a common ORM anti-pattern where lazy loading triggers a separate query per related record; it\u2019s typically fixed by eager loading (a JOIN or batched IN query) to fetch all related data in one or two queries instead of N+1.',
    tags: ['n-plus-1', 'orm', 'performance']
  },
  {
    id: 'sql-053',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is database sharding?',
    options: [
      'Splitting a single table\u2019s columns across multiple servers',
      'Horizontally partitioning data across multiple independent database instances (shards), typically by a shard key, to scale beyond a single server\u2019s capacity',
      'A backup strategy that copies the entire database',
      'A type of index used for full-text search'
    ],
    correctAnswer: 'Horizontally partitioning data across multiple independent database instances (shards), typically by a shard key, to scale beyond a single server\u2019s capacity',
    explanation: 'Sharding distributes rows of a logical table across multiple physical databases based on a shard key (e.g., user ID range or hash), allowing horizontal scalability at the cost of added complexity for cross-shard queries and joins.',
    tags: ['sharding', 'scalability', 'system-design']
  },
  {
    id: 'sql-054',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between horizontal and vertical partitioning of a table?',
    options: [
      'They are the same concept with different names',
      'Horizontal partitioning splits rows across partitions (e.g., by date range); vertical partitioning splits columns across separate tables (e.g., frequently vs. rarely accessed columns)',
      'Vertical partitioning is only possible in NoSQL databases',
      'Horizontal partitioning requires removing the primary key'
    ],
    correctAnswer: 'Horizontal partitioning splits rows across partitions (e.g., by date range); vertical partitioning splits columns across separate tables (e.g., frequently vs. rarely accessed columns)',
    explanation: 'Horizontal partitioning (e.g., table partitioning by date) keeps the same schema but divides rows into separate physical segments, while vertical partitioning splits a wide table into narrower tables grouped by access pattern or column type.',
    tags: ['partitioning', 'database-design']
  },
  {
    id: 'sql-055',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a stored procedure?',
    options: [
      'A backup of the entire database schema',
      'A precompiled, reusable set of SQL statements stored in the database and invoked by name, optionally accepting parameters',
      'A type of foreign key constraint',
      'A view that cannot be queried'
    ],
    correctAnswer: 'A precompiled, reusable set of SQL statements stored in the database and invoked by name, optionally accepting parameters',
    explanation: 'Stored procedures encapsulate business logic inside the database, can accept input/output parameters, and are often precompiled for performance, though they can make logic harder to version-control and test compared to application-level code.',
    tags: ['stored-procedures']
  },
  {
    id: 'sql-056',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between a stored procedure and a trigger?',
    options: [
      'They are identical mechanisms',
      'A stored procedure is explicitly called by name; a trigger automatically executes in response to a specific table event (INSERT/UPDATE/DELETE)',
      'Triggers can only run SELECT statements',
      'Stored procedures cannot accept parameters'
    ],
    correctAnswer: 'A stored procedure is explicitly called by name; a trigger automatically executes in response to a specific table event (INSERT/UPDATE/DELETE)',
    explanation: 'Triggers fire implicitly when a defined event occurs on a table (e.g., BEFORE INSERT, AFTER UPDATE), useful for auditing or enforcing complex business rules, whereas stored procedures must be deliberately invoked.',
    tags: ['triggers', 'stored-procedures']
  },
  {
    id: 'sql-057',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Security',
    question: 'What is SQL injection, and what is the most effective defense against it?',
    options: [
      'A performance optimization technique with no security implications',
      'An attack where untrusted input is concatenated directly into SQL, altering query logic; the primary defense is using parameterized queries / prepared statements instead of string concatenation',
      'A type of database backup corruption',
      'A feature used to inject test data into a database'
    ],
    correctAnswer: 'An attack where untrusted input is concatenated directly into SQL, altering query logic; the primary defense is using parameterized queries / prepared statements instead of string concatenation',
    explanation: 'SQL injection exploits unsanitized input being treated as executable SQL; parameterized queries separate query structure from data values, ensuring user input is always treated as a literal value rather than executable code.',
    tags: ['sql-injection', 'security']
  },
  {
    id: 'sql-058',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of database replication?',
    options: [
      'To delete redundant data automatically',
      'To maintain copies of data across multiple database servers for redundancy, read scalability, and disaster recovery',
      'To enforce foreign key constraints',
      'To compress table storage'
    ],
    correctAnswer: 'To maintain copies of data across multiple database servers for redundancy, read scalability, and disaster recovery',
    explanation: 'Replication keeps one or more replica servers synchronized with a primary database, enabling failover in case of primary failure, distributing read load, and providing geographic redundancy.',
    tags: ['replication', 'high-availability', 'system-design']
  },
  {
    id: 'sql-059',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between synchronous and asynchronous replication?',
    options: [
      'They are interchangeable terms for the same mechanism',
      'Synchronous replication waits for the replica to confirm a write before acknowledging it as committed, guaranteeing consistency but adding latency; asynchronous replication acknowledges the write immediately and replicates afterward, risking data loss on failure',
      'Asynchronous replication is always more consistent',
      'Synchronous replication does not require a network connection'
    ],
    correctAnswer: 'Synchronous replication waits for the replica to confirm a write before acknowledging it as committed, guaranteeing consistency but adding latency; asynchronous replication acknowledges the write immediately and replicates afterward, risking data loss on failure',
    explanation: 'This is a classic consistency-vs-latency trade-off: synchronous replication ensures replicas are always up to date at the cost of write latency, while asynchronous replication is faster but can lose recently committed data if the primary fails before replicating.',
    tags: ['replication', 'consistency', 'system-design']
  },
  {
    id: 'sql-060',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the CAP theorem, and how does it relate to distributed SQL/NoSQL databases?',
    options: [
      'It states a distributed system can guarantee Consistency, Availability, and Partition tolerance simultaneously at all times',
      'It states that during a network partition, a distributed system must choose between Consistency and Availability; Partition tolerance is generally assumed as a requirement',
      'It is only applicable to single-node databases',
      'It guarantees ACID compliance automatically'
    ],
    correctAnswer: 'It states that during a network partition, a distributed system must choose between Consistency and Availability; Partition tolerance is generally assumed as a requirement',
    explanation: 'The CAP theorem describes an unavoidable trade-off in distributed systems: when a network partition occurs, the system can either remain consistent (rejecting some requests) or remain available (risking stale/inconsistent reads), but not perfectly achieve both.',
    tags: ['cap-theorem', 'distributed-systems', 'system-design']
  },

  // ===================== MNC (FAANG / High-Bar) =====================
  {
    id: 'sql-061',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'You are designing a system to handle 100,000 writes/sec to a relational database. What are the key strategies to consider?',
    options: [
      'Use a single unindexed table and scale CPU only',
      'Combine write batching, sharding by an appropriate key, asynchronous replication for durability, and minimizing synchronous cross-shard transactions',
      'Disable all indexes permanently to maximize write speed regardless of read impact',
      'Avoid using a primary key to reduce write overhead'
    ],
    correctAnswer: 'Combine write batching, sharding by an appropriate key, asynchronous replication for durability, and minimizing synchronous cross-shard transactions',
    explanation: 'At extreme write volumes, no single database node can keep up; sharding distributes load, batching reduces per-write overhead, and avoiding expensive cross-shard distributed transactions keeps latency predictable, while async replication maintains durability without blocking writes.',
    tags: ['system-design', 'sharding', 'scalability', 'high-throughput']
  },
  {
    id: 'sql-062',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'Write a query approach to find duplicate email addresses in a "users" table and return each duplicated email along with its count.',
    options: [
      'SELECT email FROM users WHERE email IS NOT NULL',
      'SELECT email, COUNT(*) AS cnt FROM users GROUP BY email HAVING COUNT(*) > 1',
      'SELECT DISTINCT email FROM users',
      'SELECT email FROM users ORDER BY email'
    ],
    correctAnswer: 'SELECT email, COUNT(*) AS cnt FROM users GROUP BY email HAVING COUNT(*) > 1',
    explanation: 'Grouping by email and using HAVING COUNT(*) > 1 filters groups (post-aggregation) to only those email values appearing more than once, which is the standard pattern for detecting duplicates.',
    tags: ['group-by', 'having', 'coding', 'duplicates']
  },
  {
    id: 'sql-063',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a database schema and query strategy to efficiently calculate trending content (e.g., top posts by engagement in the last hour) at large scale?',
    options: [
      'Run a full table scan and aggregate over the entire posts table on every request',
      'Use pre-aggregated rolling counters (e.g., incremented in a cache or time-bucketed table) updated asynchronously, combined with periodic batch jobs, rather than computing from raw event data live',
      'Store every individual engagement event with no aggregation and query it directly each time with no caching',
      'Disable indexing on the posts table entirely to simplify the schema'
    ],
    correctAnswer: 'Use pre-aggregated rolling counters (e.g., incremented in a cache or time-bucketed table) updated asynchronously, combined with periodic batch jobs, rather than computing from raw event data live',
    explanation: 'Computing trending rankings directly from raw event tables at read time does not scale; pre-aggregating engagement into time-bucketed counters (often in a fast store like Redis, periodically flushed to SQL) lets trending queries read small, precomputed summaries instead of scanning massive raw tables.',
    tags: ['system-design', 'aggregation', 'scalability', 'caching']
  },
  {
    id: 'sql-064',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you write a query to find employees who earn more than their direct manager, given an "employees" table with columns (id, name, salary, manager_id)?',
    options: [
      'SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees)',
      'SELECT e.name FROM employees e JOIN employees m ON e.manager_id = m.id WHERE e.salary > m.salary',
      'SELECT name FROM employees ORDER BY salary DESC LIMIT 1',
      'SELECT name FROM employees WHERE manager_id IS NULL'
    ],
    correctAnswer: 'SELECT e.name FROM employees e JOIN employees m ON e.manager_id = m.id WHERE e.salary > m.salary',
    explanation: 'This is a classic self-join: aliasing the table once as the employee (e) and once as their manager (m), joining on manager_id = id, then filtering for cases where the employee\u2019s salary exceeds their manager\u2019s.',
    tags: ['self-join', 'coding', 'joins']
  },
  {
    id: 'sql-065',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'In a microservices architecture, each service owns its own database. How would you implement a transaction that must atomically update data across two services (e.g., "place order" and "deduct inventory")?',
    options: [
      'Use a single shared database transaction across both services, bypassing service boundaries',
      'Use the Saga pattern: a sequence of local transactions per service with compensating actions to undo prior steps if a later step fails',
      'Simply retry the entire operation indefinitely until it succeeds',
      'Avoid cross-service consistency entirely and accept permanent data loss on failure'
    ],
    correctAnswer: 'Use the Saga pattern: a sequence of local transactions per service with compensating actions to undo prior steps if a later step fails',
    explanation: 'Distributed transactions across independently owned databases can\u2019t use a single ACID transaction; the Saga pattern coordinates a series of local transactions, each paired with a compensating action (e.g., "release inventory") to maintain consistency if a later step fails.',
    tags: ['system-design', 'saga-pattern', 'distributed-transactions', 'microservices']
  },
  {
    id: 'sql-066',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'A query that previously ran in milliseconds now takes several seconds after the table grew to 50 million rows. What is your systematic approach to diagnosing this?',
    options: [
      'Immediately add an index to every column in the table',
      'Run EXPLAIN ANALYZE to check the execution plan for full table scans or missing index usage, check if statistics are stale, and verify whether existing indexes are still selective enough',
      'Rewrite the entire application in a different programming language',
      'Switch the database engine without further investigation'
    ],
    correctAnswer: 'Run EXPLAIN ANALYZE to check the execution plan for full table scans or missing index usage, check if statistics are stale, and verify whether existing indexes are still selective enough',
    explanation: 'Performance regressions tied to data growth are typically diagnosed by examining the actual query plan: checking if the optimizer switched to a sequential scan, whether table statistics are outdated (causing poor cardinality estimates), or whether an index lost selectivity as data distribution changed.',
    tags: ['performance', 'explain', 'debugging', 'indexing']
  },
  {
    id: 'sql-067',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a schema to support soft deletes (marking records as deleted without physically removing them) while keeping query performance acceptable?',
    options: [
      'Physically DELETE the row and recreate it if needed later',
      'Add a deleted_at (or is_deleted) column, create a partial/filtered index that only indexes non-deleted rows, and ensure all queries consistently filter on it',
      'Move all deleted rows to a separate unindexed archive table immediately with no other changes',
      'Avoid soft deletes entirely since they cannot be made performant'
    ],
    correctAnswer: 'Add a deleted_at (or is_deleted) column, create a partial/filtered index that only indexes non-deleted rows, and ensure all queries consistently filter on it',
    explanation: 'Soft deletes need careful indexing since most queries only care about active (non-deleted) rows; a partial index (e.g., WHERE deleted_at IS NULL in PostgreSQL) keeps the index small and fast, while application-level discipline (or a view) ensures deleted rows are consistently excluded.',
    tags: ['system-design', 'soft-delete', 'indexing', 'database-design']
  },
  {
    id: 'sql-068',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you write a query to identify "gaps" in a sequential ID column (e.g., missing order_id values) in an "orders" table?',
    options: [
      'SELECT order_id FROM orders WHERE order_id IS NULL',
      'SELECT (o1.order_id + 1) AS gap_start FROM orders o1 WHERE NOT EXISTS (SELECT 1 FROM orders o2 WHERE o2.order_id = o1.order_id + 1)',
      'SELECT COUNT(*) FROM orders',
      'SELECT MAX(order_id) - MIN(order_id) FROM orders'
    ],
    correctAnswer: 'SELECT (o1.order_id + 1) AS gap_start FROM orders o1 WHERE NOT EXISTS (SELECT 1 FROM orders o2 WHERE o2.order_id = o1.order_id + 1)',
    explanation: 'This pattern checks, for each existing order_id, whether the next sequential value exists; if not, that next value marks the start of a gap, a common technique for gap detection without needing a full sequence-generation approach.',
    tags: ['coding', 'gaps-and-islands', 'subqueries']
  },
  {
    id: 'sql-069',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a multi-tenant SaaS database schema to balance data isolation, query performance, and operational simplicity?',
    options: [
      'Use a single shared table with no tenant identifier and rely solely on application logic',
      'Choose between separate databases per tenant (maximum isolation, higher operational overhead), separate schemas per tenant, or a shared schema with a tenant_id column plus row-level security, based on tenant count and isolation requirements',
      'Always use one database per tenant regardless of scale',
      'Store tenant data in unstructured text files instead of tables'
    ],
    correctAnswer: 'Choose between separate databases per tenant (maximum isolation, higher operational overhead), separate schemas per tenant, or a shared schema with a tenant_id column plus row-level security, based on tenant count and isolation requirements',
    explanation: 'Multi-tenancy architecture is a spectrum: dedicated databases offer the strongest isolation but become unwieldy at scale (thousands of tenants), while a shared schema with tenant_id and enforced row-level security scales operationally but requires rigorous query discipline and database-level safeguards against cross-tenant leaks.',
    tags: ['system-design', 'multi-tenancy', 'database-design', 'security']
  },
  {
    id: 'sql-070',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'Why might adding more indexes to a heavily written-to table actually degrade overall system performance, despite speeding up specific read queries?',
    options: [
      'Indexes have no effect on write performance in any database',
      'Every additional index must be updated on every INSERT/UPDATE/DELETE, increasing write latency, lock contention, and storage I/O, which can outweigh read benefits on write-heavy workloads',
      'Indexes always make every operation faster with no trade-off',
      'Adding indexes reduces the number of rows in the table'
    ],
    correctAnswer: 'Every additional index must be updated on every INSERT/UPDATE/DELETE, increasing write latency, lock contention, and storage I/O, which can outweigh read benefits on write-heavy workloads',
    explanation: 'Each index is a separate data structure requiring maintenance on every write, so a table with many indexes incurs cumulative overhead per write operation; for write-heavy tables, this means indexing strategy must be carefully balanced against the specific read patterns being optimized for.',
    tags: ['indexing', 'performance', 'trade-offs']
  },
  {
    id: 'sql-071',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design idempotent financial transaction processing in SQL to handle duplicate retried requests (e.g., from network timeouts) without double-charging a customer?',
    options: [
      'Rely on the client to never send the same request twice',
      'Use a unique constraint on an idempotency key column tied to each logical transaction, so a duplicate INSERT fails/conflicts and the original result is returned instead of reprocessing',
      'Process every request as a brand-new transaction with no deduplication',
      'Delete duplicate transactions after the fact via a nightly batch job'
    ],
    correctAnswer: 'Use a unique constraint on an idempotency key column tied to each logical transaction, so a duplicate INSERT fails/conflicts and the original result is returned instead of reprocessing',
    explanation: 'A UNIQUE constraint (or unique index) on an idempotency key lets the database itself enforce exactly-once processing: a retried request with the same key triggers a constraint violation (or upsert no-op), which the application catches and responds to with the original result rather than performing the charge again.',
    tags: ['system-design', 'idempotency', 'constraints', 'financial-systems']
  },
  {
    id: 'sql-072',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'Given a "logins" table with (user_id, login_date), how would you find users who logged in on three or more consecutive days?',
    options: [
      'SELECT user_id FROM logins GROUP BY user_id HAVING COUNT(*) >= 3',
      'Use a window function to compute (login_date - ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date)) as a grouping key for consecutive-day "islands", then filter groups with 3+ rows',
      'SELECT DISTINCT user_id FROM logins',
      'SELECT user_id FROM logins WHERE login_date = CURRENT_DATE'
    ],
    correctAnswer: 'Use a window function to compute (login_date - ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date)) as a grouping key for consecutive-day "islands", then filter groups with 3+ rows',
    explanation: 'This is the classic "gaps and islands" technique: subtracting a sequential row number from the date produces a constant value for each run of consecutive dates per user, letting you group by that constant to identify and measure consecutive-day streaks.',
    tags: ['coding', 'gaps-and-islands', 'window-functions']
  },
  {
    id: 'sql-073',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a database audit logging system that records every change to sensitive tables without significantly degrading write performance?',
    options: [
      'Synchronously write a full audit row to the same table on every write, blocking the original transaction',
      'Use database triggers or change-data-capture (CDC) streaming (e.g., via the write-ahead log) to asynchronously propagate changes to a separate audit store, decoupling audit writes from the primary transaction path',
      'Manually log changes from the application layer with no database-level enforcement',
      'Disable auditing for any table experiencing high write volume'
    ],
    correctAnswer: 'Use database triggers or change-data-capture (CDC) streaming (e.g., via the write-ahead log) to asynchronously propagate changes to a separate audit store, decoupling audit writes from the primary transaction path',
    explanation: 'CDC tools (e.g., Debezium reading the write-ahead log) capture every committed change with minimal impact on the primary transaction, streaming it to a separate audit log or warehouse asynchronously, avoiding the latency and lock contention of synchronous audit writes within the same transaction.',
    tags: ['system-design', 'audit-logging', 'cdc', 'performance']
  },
  {
    id: 'sql-074',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why can a large, long-running transaction cause performance problems for other concurrent transactions, even under Read Committed isolation?',
    options: [
      'Long transactions have no effect on other transactions under any isolation level',
      'It can hold locks for an extended period (blocking other writers), bloat the write-ahead log/undo log, and in MVCC databases delay garbage collection of old row versions, causing table/index bloat',
      'Long transactions automatically pause all other queries system-wide',
      'It only affects SELECT queries, never writes'
    ],
    correctAnswer: 'It can hold locks for an extended period (blocking other writers), bloat the write-ahead log/undo log, and in MVCC databases delay garbage collection of old row versions, causing table/index bloat',
    explanation: 'Even under Read Committed, a long-running transaction holding row/table locks blocks conflicting writers; additionally, in MVCC systems (like PostgreSQL), old row versions can\u2019t be vacuumed/cleaned up until the oldest active transaction completes, leading to table and index bloat that degrades performance for everyone.',
    tags: ['transactions', 'mvcc', 'performance', 'locking']
  },
  {
    id: 'sql-075',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you migrate a large production table (hundreds of millions of rows) to add a new NOT NULL column with a default value, without causing extended downtime or table locks?',
    options: [
      'Run a single ALTER TABLE ADD COLUMN ... NOT NULL DEFAULT statement directly in production during peak hours',
      'Add the column as nullable first, backfill the value in small batches to avoid long locks/large transactions, then add the NOT NULL constraint once backfilling completes (using online schema change tools if needed)',
      'Drop the table and recreate it with the new schema from a backup',
      'Avoid adding new columns to large tables permanently'
    ],
    correctAnswer: 'Add the column as nullable first, backfill the value in small batches to avoid long locks/large transactions, then add the NOT NULL constraint once backfilling completes (using online schema change tools if needed)',
    explanation: 'A single large ALTER TABLE with a NOT NULL default can rewrite the entire table and hold locks for a long time on huge tables in some databases; the safer pattern adds the column nullable, backfills data incrementally in small transactions (often via online schema migration tools like gh-ost or pt-online-schema-change), then applies the constraint last.',
    tags: ['system-design', 'migrations', 'schema-changes', 'production']
  },
  {
    id: 'sql-076',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you write a query to pivot rows into columns \u2014 for example, transforming a "sales" table with (product, quarter, amount) into one row per product with separate columns for Q1\u2013Q4?',
    options: [
      'Use a simple GROUP BY product with no other changes',
      'Use conditional aggregation: SELECT product, SUM(CASE WHEN quarter = \'Q1\' THEN amount END) AS q1, ... GROUP BY product (or a database-specific PIVOT operator)',
      'Use a UNION ALL of four separate SELECT statements',
      'Pivoting is impossible in standard SQL'
    ],
    correctAnswer: 'Use conditional aggregation: SELECT product, SUM(CASE WHEN quarter = \'Q1\' THEN amount END) AS q1, ... GROUP BY product (or a database-specific PIVOT operator)',
    explanation: 'Conditional aggregation with CASE expressions inside aggregate functions is the standard, portable way to pivot rows into columns; some databases (like SQL Server or Oracle) also offer a native PIVOT operator as a more concise alternative.',
    tags: ['coding', 'pivot', 'conditional-aggregation']
  },
  {
    id: 'sql-077',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design read replicas and routing logic to scale a read-heavy SQL application, while handling the risk of replication lag causing stale reads after a write?',
    options: [
      'Route every read request randomly to any replica with no special handling',
      'Route reads to replicas by default, but route reads immediately following a write from the same session/user to the primary (or a replica confirmed caught up), using techniques like read-your-writes consistency or monitoring replication lag',
      'Disable replicas entirely to avoid consistency issues',
      'Always read from the primary, making replicas pointless'
    ],
    correctAnswer: 'Route reads to replicas by default, but route reads immediately following a write from the same session/user to the primary (or a replica confirmed caught up), using techniques like read-your-writes consistency or monitoring replication lag',
    explanation: 'Read replicas scale read throughput but introduce eventual consistency due to replication lag; common mitigations include "read-your-writes" routing (sending a user\u2019s own subsequent reads to the primary for a short window), sticky sessions, or checking replica lag metrics before routing reads that require freshness.',
    tags: ['system-design', 'read-replicas', 'replication-lag', 'consistency']
  },
  {
    id: 'sql-078',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'What is the difference between OLTP and OLAP database workloads, and how does this affect schema and indexing strategy?',
    options: [
      'They are the same type of workload with different names',
      'OLTP handles many small, frequent transactional read/write operations (favoring normalized schemas and selective indexes); OLAP handles large analytical queries over historical data (favoring denormalized/star schemas and columnar storage)',
      'OLAP only supports INSERT operations',
      'OLTP databases cannot use indexes at all'
    ],
    correctAnswer: 'OLTP handles many small, frequent transactional read/write operations (favoring normalized schemas and selective indexes); OLAP handles large analytical queries over historical data (favoring denormalized/star schemas and columnar storage)',
    explanation: 'OLTP (Online Transaction Processing) systems prioritize fast, isolated writes/reads on normalized data, while OLAP (Online Analytical Processing) systems prioritize large aggregate scans over historical data, often using denormalized star/snowflake schemas and columnar storage engines optimized for scanning fewer columns across many rows.',
    tags: ['oltp', 'olap', 'system-design', 'data-warehousing']
  },
  {
    id: 'sql-079',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'Why might using OFFSET-based pagination (e.g., LIMIT 20 OFFSET 100000) become a serious performance problem on large tables, and what is a common alternative?',
    options: [
      'OFFSET-based pagination has no performance impact regardless of table size',
      'The database must still scan and discard all skipped rows before returning the page, making deep pagination increasingly slow; keyset (cursor-based) pagination using a WHERE clause on the last seen value avoids this',
      'OFFSET pagination is faster than any alternative at any scale',
      'The only solution is to disable pagination entirely'
    ],
    correctAnswer: 'The database must still scan and discard all skipped rows before returning the page, making deep pagination increasingly slow; keyset (cursor-based) pagination using a WHERE clause on the last seen value avoids this',
    explanation: 'OFFSET forces the database to count through and discard all preceding rows even though they\u2019re not returned, so cost grows linearly with offset depth; keyset pagination instead uses an indexed WHERE id > last_seen_id ORDER BY id LIMIT 20 pattern, which uses the index to jump directly to the next page regardless of depth.',
    tags: ['pagination', 'performance', 'indexing']
  },
  {
    id: 'sql-080',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you optimize a query with a large number of JOINs?',
    options: [
      'Ensure join keys are properly indexed, filter rows as early as possible (push predicates down), reduce the number of joined tables/columns to only what is needed, and analyze the execution plan to spot inefficient join orders',
      'Use SELECT * to retrieve all columns from every joined table',
      'Avoid using indexes entirely to save storage space',
      'Increase the number of correlated subqueries used in place of joins'
    ],
    correctAnswer: 'Ensure join keys are properly indexed, filter rows as early as possible (push predicates down), reduce the number of joined tables/columns to only what is needed, and analyze the execution plan to spot inefficient join orders',
    explanation: 'Query optimization for multi-join queries involves indexing every join column, filtering aggressively before joining to shrink intermediate result sets, selecting only needed columns (avoiding SELECT *), and using EXPLAIN ANALYZE to verify the optimizer is choosing efficient join algorithms and order.',
    tags: ['performance', 'optimization', 'indexing', 'joins']
  },

  // ===================== Filling out remaining breadth =====================
  {
    id: 'sql-081',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'Which SQL command removes a table and its structure entirely from the database?',
    options: ['DELETE FROM table_name', 'TRUNCATE TABLE table_name', 'DROP TABLE table_name', 'REMOVE TABLE table_name'],
    correctAnswer: 'DROP TABLE table_name',
    explanation: 'DROP TABLE removes the table definition along with all its data, indexes, and constraints; this differs from DELETE/TRUNCATE, which only remove rows but keep the table structure intact.',
    tags: ['ddl', 'drop', 'sql-basics']
  },
  {
    id: 'sql-082',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the purpose of the ALTER TABLE statement?',
    options: [
      'To insert new rows into a table',
      'To modify the structure of an existing table, such as adding, dropping, or modifying columns',
      'To rename a database',
      'To back up table data'
    ],
    correctAnswer: 'To modify the structure of an existing table, such as adding, dropping, or modifying columns',
    explanation: 'ALTER TABLE is a DDL command used to change a table\u2019s schema after creation, including adding/removing columns, changing data types, or adding/removing constraints.',
    tags: ['ddl', 'alter-table', 'sql-basics']
  },
  {
    id: 'sql-083',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What does the BETWEEN operator do in a WHERE clause?',
    options: [
      'It checks if a value matches a pattern',
      'It checks if a value falls within an inclusive range of two values',
      'It checks for NULL values',
      'It joins two tables'
    ],
    correctAnswer: 'It checks if a value falls within an inclusive range of two values',
    explanation: 'BETWEEN x AND y is shorthand for "column >= x AND column <= y", inclusive of both endpoints.',
    tags: ['where', 'between', 'sql-basics']
  },
  {
    id: 'sql-084',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What does the IN operator allow you to do in a WHERE clause?',
    options: [
      'Check if a value matches any value in a specified list or subquery',
      'Check if a string contains a substring',
      'Join two unrelated tables',
      'Count the number of matching rows'
    ],
    correctAnswer: 'Check if a value matches any value in a specified list or subquery',
    explanation: 'WHERE column IN (value1, value2, ...) is shorthand for multiple OR conditions, and can also accept the result of a subquery.',
    tags: ['where', 'in-operator', 'sql-basics']
  },
  {
    id: 'sql-085',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'What does the LIKE operator with the pattern \'A%\' match?',
    options: [
      'Strings that end with "A"',
      'Strings that start with "A", followed by any sequence of characters',
      'Strings that contain exactly one character "A"',
      'Strings that are exactly "A%"'
    ],
    correctAnswer: 'Strings that start with "A", followed by any sequence of characters',
    explanation: 'In LIKE patterns, % matches any sequence of zero or more characters, so \'A%\' matches any string beginning with the letter A.',
    tags: ['like', 'pattern-matching', 'sql-basics']
  },
  {
    id: 'sql-086',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between UNION and UNION ALL?',
    options: [
      'They produce identical results in every case',
      'UNION removes duplicate rows from the combined result; UNION ALL keeps all rows, including duplicates, and is generally faster',
      'UNION ALL can only combine two columns',
      'UNION can only be used with numeric columns'
    ],
    correctAnswer: 'UNION removes duplicate rows from the combined result; UNION ALL keeps all rows, including duplicates, and is generally faster',
    explanation: 'UNION implicitly performs a duplicate-elimination step (similar to DISTINCT) across the combined result sets, which has a performance cost; UNION ALL skips this and simply concatenates results, making it preferable when duplicates are acceptable or known not to occur.',
    tags: ['union', 'set-operations']
  },
  {
    id: 'sql-087',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What do the INTERSECT and EXCEPT (or MINUS) set operators do?',
    options: [
      'INTERSECT combines all rows from both queries; EXCEPT removes NULL values',
      'INTERSECT returns only rows common to both result sets; EXCEPT (MINUS in some databases) returns rows in the first result set not present in the second',
      'They are both identical to UNION ALL',
      'They can only be used on a single table'
    ],
    correctAnswer: 'INTERSECT returns only rows common to both result sets; EXCEPT (MINUS in some databases) returns rows in the first result set not present in the second',
    explanation: 'INTERSECT and EXCEPT/MINUS are standard set operators (alongside UNION) that compare entire rows between two compatible result sets, similar to set intersection and difference operations in mathematics.',
    tags: ['intersect', 'except', 'set-operations']
  },
  {
    id: 'sql-088',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the purpose of a composite (multi-column) index, and what is an important consideration when creating one?',
    options: [
      'It indexes every column in the table automatically',
      'It indexes multiple columns together to optimize queries filtering/sorting on those columns combined; column order matters, since the index is most useful when the leading columns match the query\u2019s filter conditions',
      'It is identical to creating separate single-column indexes',
      'It only works with primary key columns'
    ],
    correctAnswer: 'It indexes multiple columns together to optimize queries filtering/sorting on those columns combined; column order matters, since the index is most useful when the leading columns match the query\u2019s filter conditions',
    explanation: 'A composite index on (a, b, c) is most effective for queries filtering on a, or a and b, or a, b, and c in that order, since B-tree indexes are sorted hierarchically by the leading columns first; a query filtering only on b or c without a typically can\u2019t use the index efficiently.',
    tags: ['indexing', 'composite-index', 'performance']
  },
  {
    id: 'sql-089',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What does the CASE expression allow you to do in SQL?',
    options: [
      'Define stored procedures',
      'Implement conditional (if-then-else-like) logic directly within a SQL statement, returning different values based on conditions',
      'Create new tables',
      'Encrypt column values'
    ],
    correctAnswer: 'Implement conditional (if-then-else-like) logic directly within a SQL statement, returning different values based on conditions',
    explanation: 'CASE WHEN condition THEN result ... ELSE default END lets you compute conditional values inline within SELECT, WHERE, ORDER BY, or other clauses, similar to an if-else statement in procedural code.',
    tags: ['case-expression', 'conditional-logic']
  },
  {
    id: 'sql-090',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'What is the difference between EXISTS and IN when used with a subquery?',
    options: [
      'They always produce identical query plans with no performance difference',
      'EXISTS checks only for the presence of any matching row (often short-circuiting and ignoring NULLs in the subquery), while IN compares values directly and can behave unexpectedly if the subquery returns NULLs',
      'IN can only be used with numeric subqueries',
      'EXISTS cannot be used with correlated subqueries'
    ],
    correctAnswer: 'EXISTS checks only for the presence of any matching row (often short-circuiting and ignoring NULLs in the subquery), while IN compares values directly and can behave unexpectedly if the subquery returns NULLs',
    explanation: 'EXISTS evaluates to true/false based solely on whether the subquery returns any row, commonly optimized well for correlated subqueries, whereas NOT IN with a subquery containing NULL values can produce no rows at all due to SQL\u2019s NULL comparison semantics, a common gotcha.',
    tags: ['exists', 'in-operator', 'subqueries', 'gotchas']
  },
  {
    id: 'sql-091',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'Why can "SELECT * FROM orders WHERE customer_id NOT IN (SELECT customer_id FROM blocked_customers)" silently return zero rows unexpectedly?',
    options: [
      'NOT IN always returns zero rows by design',
      'If blocked_customers.customer_id contains even one NULL value, the entire NOT IN comparison evaluates to UNKNOWN for every row, causing the query to return no results',
      'It is a syntax error',
      'NOT IN cannot be used with subqueries'
    ],
    correctAnswer: 'If blocked_customers.customer_id contains even one NULL value, the entire NOT IN comparison evaluates to UNKNOWN for every row, causing the query to return no results',
    explanation: 'Because NOT IN is internally a series of <> comparisons ANDed together, a single NULL in the subquery\u2019s result set makes every comparison involving it UNKNOWN, which propagates and causes the entire WHERE clause to evaluate to UNKNOWN (excluded) for all rows; using NOT EXISTS avoids this pitfall.',
    tags: ['null', 'not-in', 'gotchas', 'subqueries']
  },
  {
    id: 'sql-092',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is MVCC (Multi-Version Concurrency Control), and how does it improve concurrency?',
    options: [
      'A technique that locks the entire table for every transaction',
      'A technique where the database keeps multiple versions of a row so readers can see a consistent snapshot without blocking concurrent writers, avoiding the need for read locks',
      'A backup strategy unrelated to concurrency',
      'A type of index used for full-text search'
    ],
    correctAnswer: 'A technique where the database keeps multiple versions of a row so readers can see a consistent snapshot without blocking concurrent writers, avoiding the need for read locks',
    explanation: 'Databases like PostgreSQL and Oracle use MVCC so that readers see a snapshot of data as of their transaction\u2019s start (or statement start), without needing to acquire locks that would block writers, significantly improving concurrent read/write throughput at the cost of needing periodic cleanup (e.g., vacuuming) of old row versions.',
    tags: ['mvcc', 'concurrency', 'transactions']
  },
  {
    id: 'sql-093',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a B-tree index, and why is it the default choice for most general-purpose indexing?',
    options: [
      'A linear list of all table values with no sorting',
      'A balanced, sorted tree structure that allows efficient equality, range, and ordered lookups in logarithmic time, supporting most common query patterns',
      'An index that only supports exact equality matches',
      'A data structure used exclusively for full-text search'
    ],
    correctAnswer: 'A balanced, sorted tree structure that allows efficient equality, range, and ordered lookups in logarithmic time, supporting most common query patterns',
    explanation: 'B-tree (and B+tree) indexes maintain sorted order across their leaf nodes, enabling efficient equality lookups, range scans (e.g., BETWEEN, <, >), and ordered traversal (useful for ORDER BY), making them the versatile default index type in most relational databases.',
    tags: ['indexing', 'b-tree', 'data-structures']
  },
  {
    id: 'sql-094',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'When would a hash index be preferred over a B-tree index?',
    options: [
      'When range queries (e.g., BETWEEN, <, >) are the primary access pattern',
      'When only equality lookups (=) are needed and range queries or sorting are not required, since hash indexes offer O(1) average lookup but cannot support ranges',
      'When you need to support ORDER BY on the indexed column',
      'Hash indexes are always strictly better than B-tree indexes in every scenario'
    ],
    correctAnswer: 'When only equality lookups (=) are needed and range queries or sorting are not required, since hash indexes offer O(1) average lookup but cannot support ranges',
    explanation: 'Hash indexes map keys directly to bucket locations via a hash function, giving fast average-case equality lookups, but because hashing destroys ordering information, they cannot support range queries, sorting, or prefix matching the way a B-tree can.',
    tags: ['indexing', 'hash-index', 'data-structures']
  },
  {
    id: 'sql-095',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'What is "parameter sniffing" in the context of query plan caching, and why can it cause inconsistent performance?',
    options: [
      'It refers to a security vulnerability in stored procedures',
      'The optimizer generates and caches a query plan based on the parameter values used the first time a parameterized query runs, which may be suboptimal for very different parameter values used later',
      'It is a technique for encrypting query parameters',
      'It only affects queries with no parameters at all'
    ],
    correctAnswer: 'The optimizer generates and caches a query plan based on the parameter values used the first time a parameterized query runs, which may be suboptimal for very different parameter values used later',
    explanation: 'Because the optimizer often caches an execution plan keyed to the first parameter values seen, subsequent calls with very differently-distributed parameters (e.g., a highly selective vs. very common value) can perform poorly if the cached plan was optimized for a different data distribution, a notable issue in databases like SQL Server.',
    tags: ['query-plan', 'performance', 'parameter-sniffing']
  },
  {
    id: 'sql-096',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is a write-ahead log (WAL), and why is it critical for database durability?',
    options: [
      'A log of all read queries executed against the database',
      'A log where changes are recorded before being applied to the actual data files, ensuring committed transactions can be recovered after a crash',
      'A backup of the entire database taken nightly',
      'A feature used only for replication, with no role in crash recovery'
    ],
    correctAnswer: 'A log where changes are recorded before being applied to the actual data files, ensuring committed transactions can be recovered after a crash',
    explanation: 'WAL ensures durability (the "D" in ACID) by persisting a sequential record of changes before they\u2019re applied to the main data files; if the database crashes, it can replay the WAL to recover committed transactions that hadn\u2019t yet been fully written to disk.',
    tags: ['wal', 'durability', 'crash-recovery']
  },
  {
    id: 'sql-097',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is table bloat in MVCC-based databases like PostgreSQL, and how is it typically addressed?',
    options: [
      'Excessive use of large data types like TEXT',
      'Accumulation of dead row versions (from updates/deletes) that haven\u2019t yet been reclaimed, increasing table/index size and degrading performance; addressed via periodic VACUUM operations',
      'A type of index corruption requiring a full rebuild',
      'A normal and harmless side effect with no remediation needed'
    ],
    correctAnswer: 'Accumulation of dead row versions (from updates/deletes) that haven\u2019t yet been reclaimed, increasing table/index size and degrading performance; addressed via periodic VACUUM operations',
    explanation: 'Since MVCC keeps old row versions around until no transaction needs them, frequent updates/deletes can leave behind "dead tuples" that bloat tables and indexes; PostgreSQL\u2019s VACUUM (and autovacuum) reclaims this space, and infrequent or misconfigured vacuuming is a common cause of degraded performance over time.',
    tags: ['mvcc', 'vacuum', 'performance', 'postgresql']
  },
  {
    id: 'sql-098',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the purpose of database connection pooling at the application layer?',
    options: [
      'To encrypt connections to the database',
      'To reuse a limited set of established database connections across requests instead of opening and closing a new connection for every query, reducing overhead',
      'To automatically shard the database',
      'To prevent SQL injection attacks'
    ],
    correctAnswer: 'To reuse a limited set of established database connections across requests instead of opening and closing a new connection for every query, reducing overhead',
    explanation: 'Establishing a new database connection (including authentication and TCP/TLS handshakes) is relatively expensive; connection pools maintain a reusable set of open connections that application code borrows and returns, substantially reducing per-request latency and database server load.',
    tags: ['connection-pooling', 'performance']
  },
  {
    id: 'sql-099',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'What is wrong with using SELECT * in application code querying a production table, beyond style preference?',
    options: [
      'Nothing; it is always equally efficient as selecting specific columns',
      'It can break application code silently if columns are added/reordered/removed, retrieves unnecessary data increasing I/O and network overhead, and can prevent the optimizer from using a covering index',
      'SELECT * is forbidden by the SQL standard',
      'SELECT * can only be used with a single table'
    ],
    correctAnswer: 'It can break application code silently if columns are added/reordered/removed, retrieves unnecessary data increasing I/O and network overhead, and can prevent the optimizer from using a covering index',
    explanation: 'SELECT * couples application code to the table\u2019s exact current schema (fragile to future ALTER TABLE changes), transfers potentially unnecessary columns (especially costly for large TEXT/BLOB columns), and can force the database to read from the full table rather than satisfying the query from a narrower covering index.',
    tags: ['select-star', 'performance', 'best-practices']
  },
  {
    id: 'sql-100',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'What is the difference between a primary key and a surrogate key (e.g., an auto-incrementing ID) versus a natural key?',
    options: [
      'They are the same concept with different names',
      'A natural key is derived from real-world business data (e.g., email or SSN) and may change or have format issues; a surrogate key is an artificial, system-generated identifier (e.g., auto-increment integer or UUID) with no business meaning, chosen for stability and simplicity',
      'Surrogate keys cannot be used as primary keys',
      'Natural keys are always faster to index than surrogate keys'
    ],
    correctAnswer: 'A natural key is derived from real-world business data (e.g., email or SSN) and may change or have format issues; a surrogate key is an artificial, system-generated identifier (e.g., auto-increment integer or UUID) with no business meaning, chosen for stability and simplicity',
    explanation: 'Surrogate keys decouple the primary identifier from business logic that might change over time (e.g., an email address being updated), simplifying foreign key relationships and avoiding cascading updates, at the cost of needing an extra column with no inherent business meaning.',
    tags: ['primary-key', 'surrogate-key', 'database-design']
  },
  {
    id: 'sql-101',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a database schema to efficiently support both point-in-time historical queries (e.g., "what was this record\u2019s state on date X") and current-state queries?',
    options: [
      'Overwrite the row in place on every update, discarding history entirely',
      'Use a temporal/versioned table design (e.g., system-versioned tables, or an append-only event/history table with valid_from/valid_to columns) alongside a view or query pattern that filters to the latest version for current-state lookups',
      'Store every historical state in a single unstructured JSON blob with no indexing',
      'Create a new physical table for every single update'
    ],
    correctAnswer: 'Use a temporal/versioned table design (e.g., system-versioned tables, or an append-only event/history table with valid_from/valid_to columns) alongside a view or query pattern that filters to the latest version for current-state lookups',
    explanation: 'Temporal table patterns (native system-versioned tables in SQL Server/MariaDB, or a manually maintained history table with effective date ranges) let you query "as of" any point in time while still supporting fast current-state access via an index on the "is current" flag or latest valid_to = infinity rows.',
    tags: ['system-design', 'temporal-tables', 'database-design', 'versioning']
  },
  {
    id: 'sql-102',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you write a query to compute a 7-day moving average of daily sales from a "daily_sales" table with columns (sale_date, total_amount)?',
    options: [
      'SELECT sale_date, AVG(total_amount) FROM daily_sales GROUP BY sale_date',
      'SELECT sale_date, AVG(total_amount) OVER (ORDER BY sale_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS moving_avg FROM daily_sales',
      'SELECT sale_date, SUM(total_amount) FROM daily_sales WHERE sale_date >= CURRENT_DATE - 7',
      'SELECT MAX(total_amount) FROM daily_sales'
    ],
    correctAnswer: 'SELECT sale_date, AVG(total_amount) OVER (ORDER BY sale_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS moving_avg FROM daily_sales',
    explanation: 'A window function with a frame specification (ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) computes the average over the current row plus the six preceding rows, giving a true rolling 7-day average for each row while preserving one output row per input row.',
    tags: ['window-functions', 'moving-average', 'coding']
  },
  {
    id: 'sql-103',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a database to safely handle a "reservation" system (e.g., booking the last available seat) under high concurrency, avoiding overselling?',
    options: [
      'Check availability with a SELECT, then INSERT the booking in a separate transaction with no locking',
      'Use a single atomic transaction that checks and decrements available inventory with proper row locking (e.g., SELECT ... FOR UPDATE) or a conditional UPDATE with a WHERE clause checking remaining capacity, relying on the database to enforce atomicity',
      'Allow unlimited bookings and reconcile overselling manually afterward',
      'Use application-level in-memory counters with no database-level locking'
    ],
    correctAnswer: 'Use a single atomic transaction that checks and decrements available inventory with proper row locking (e.g., SELECT ... FOR UPDATE) or a conditional UPDATE with a WHERE clause checking remaining capacity, relying on the database to enforce atomicity',
    explanation: 'Splitting the "check" and "act" into separate statements/transactions creates a race condition between concurrent users; the safe pattern uses a single atomic operation, like UPDATE inventory SET available = available - 1 WHERE available > 0, or explicit row locking with SELECT FOR UPDATE, so the database guarantees no two concurrent transactions both succeed when only one seat remains.',
    tags: ['system-design', 'concurrency', 'locking', 'race-conditions']
  },
  {
    id: 'sql-104',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'A query joining three large tables runs slowly. EXPLAIN shows the optimizer is choosing a nested loop join where a hash join would be far more efficient. What might cause this, and how would you address it?',
    options: [
      'Nested loop joins are always faster than hash joins regardless of data size',
      'Outdated or missing table statistics can mislead the optimizer\u2019s cardinality estimates; updating statistics (e.g., ANALYZE) or providing query hints/restructuring can help it choose a better join strategy',
      'The query must be rewritten in a completely different database system',
      'There is no way to influence the optimizer\u2019s join strategy choice'
    ],
    correctAnswer: 'Outdated or missing table statistics can mislead the optimizer\u2019s cardinality estimates; updating statistics (e.g., ANALYZE) or providing query hints/restructuring can help it choose a better join strategy',
    explanation: 'Cost-based optimizers rely on statistics about table size and data distribution to estimate which join algorithm will be cheapest; stale statistics after large data changes can cause poor join strategy choices (e.g., nested loop on large tables, which is efficient only when one side is small), so refreshing statistics is often the first remediation step before resorting to query hints.',
    tags: ['query-optimization', 'performance', 'statistics', 'joins']
  },
  {
    id: 'sql-105',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a database-backed job/task scheduling system to ensure no two worker processes pick up and process the same pending job simultaneously?',
    options: [
      'Have every worker SELECT all pending jobs and process whichever it sees first with no coordination',
      'Use SELECT ... FOR UPDATE SKIP LOCKED (or equivalent) to atomically claim a job row, ensuring concurrent workers each lock and skip rows already claimed by others',
      'Use a single global mutex variable shared in application memory across all worker processes',
      'Process jobs in a random order with no locking and rely on idempotency alone'
    ],
    correctAnswer: 'Use SELECT ... FOR UPDATE SKIP LOCKED (or equivalent) to atomically claim a job row, ensuring concurrent workers each lock and skip rows already claimed by others',
    explanation: 'SKIP LOCKED (supported by PostgreSQL, MySQL 8+, and others) lets multiple workers concurrently query for pending jobs while automatically skipping rows already locked by another worker\u2019s transaction, providing a simple and efficient way to implement a competing-consumers job queue directly in SQL without external locking infrastructure.',
    tags: ['system-design', 'job-queues', 'locking', 'concurrency']
  },
  {
    id: 'sql-106',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why is "SELECT COUNT(*) FROM large_table" potentially slow on a table with hundreds of millions of rows, even with indexes, in an MVCC database like PostgreSQL?',
    options: [
      'COUNT(*) is always instantaneous regardless of table size in any database',
      'Because of MVCC, a simple index cannot tell the database how many rows are visible to the current transaction; it generally must scan the table or a full index to determine visible row counts, since visibility depends on transaction snapshots',
      'COUNT(*) only works on tables without a primary key',
      'It is slow only because of network latency, never the storage engine'
    ],
    correctAnswer: 'Because of MVCC, a simple index cannot tell the database how many rows are visible to the current transaction; it generally must scan the table or a full index to determine visible row counts, since visibility depends on transaction snapshots',
    explanation: 'Unlike some non-MVCC engines that maintain a fast running row count, PostgreSQL\u2019s MVCC design means row visibility is determined per-transaction, so an exact COUNT(*) typically requires scanning to check visibility of each row/index entry; for approximate counts, querying planner statistics (e.g., pg_class.reltuples) is a common, much faster alternative when exactness isn\u2019t required.',
    tags: ['mvcc', 'performance', 'count', 'postgresql']
  },
  {
    id: 'sql-107',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you architect a system to perform near-real-time analytics on data stored in a transactional (OLTP) SQL database without degrading the performance of the live application?',
    options: [
      'Run complex analytical aggregate queries directly against the production OLTP database during peak traffic',
      'Stream changes via CDC (e.g., reading the write-ahead log) into a separate analytical store (data warehouse or OLAP engine) optimized for aggregate queries, decoupling analytics workload from the transactional system',
      'Add more indexes to the OLTP database to speed up analytical queries with no other changes',
      'Run analytics queries on a nightly basis directly against production with no replicas'
    ],
    correctAnswer: 'Stream changes via CDC (e.g., reading the write-ahead log) into a separate analytical store (data warehouse or OLAP engine) optimized for aggregate queries, decoupling analytics workload from the transactional system',
    explanation: 'Mixing heavy analytical workloads with transactional traffic on the same database risks resource contention and degraded user-facing latency; streaming changes via CDC into a purpose-built analytical store (columnar warehouse, OLAP cube, or read replica dedicated to analytics) isolates the two workloads while keeping analytics reasonably fresh.',
    tags: ['system-design', 'cdc', 'oltp', 'olap', 'data-warehousing']
  },
  {
    id: 'sql-108',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'Given a "transactions" table with (account_id, amount, created_at), how would you compute each account\u2019s running balance over time?',
    options: [
      'SELECT account_id, SUM(amount) FROM transactions GROUP BY account_id',
      'SELECT account_id, created_at, SUM(amount) OVER (PARTITION BY account_id ORDER BY created_at) AS running_balance FROM transactions',
      'SELECT account_id, MAX(amount) FROM transactions GROUP BY account_id',
      'SELECT account_id, amount FROM transactions ORDER BY created_at'
    ],
    correctAnswer: 'SELECT account_id, created_at, SUM(amount) OVER (PARTITION BY account_id ORDER BY created_at) AS running_balance FROM transactions',
    explanation: 'A window function with PARTITION BY account_id and ORDER BY created_at computes a cumulative (running) sum independently per account, recalculating the total as of each row in chronological order, exactly representing the account\u2019s balance evolution over time.',
    tags: ['window-functions', 'running-total', 'coding']
  },
  {
    id: 'sql-109',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a database constraint or process to guarantee that a "discount_percentage" column never causes a final price to go negative, even under concurrent updates to both price and discount?',
    options: [
      'Rely entirely on application-layer validation with no database-level enforcement',
      'Use a CHECK constraint validating the relationship between relevant columns where possible, combined with enforcing all related updates within a single atomic transaction to avoid a race condition between reading and writing dependent values',
      'Allow negative prices and fix them with a nightly cleanup script',
      'Store price and discount in separate, unrelated tables with no constraints'
    ],
    correctAnswer: 'Use a CHECK constraint validating the relationship between relevant columns where possible, combined with enforcing all related updates within a single atomic transaction to avoid a race condition between reading and writing dependent values',
    explanation: 'Database-level CHECK constraints provide a hard guarantee that no row can violate the invariant regardless of application bugs, while wrapping multi-column or multi-row updates in a single transaction (with appropriate locking) prevents race conditions where two concurrent updates each individually look valid but combine into an invalid state.',
    tags: ['system-design', 'constraints', 'data-integrity', 'concurrency']
  },
  {
    id: 'sql-110',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'What is the main trade-off of using UUIDs instead of auto-incrementing integers as primary keys in a high-throughput, indexed table?',
    options: [
      'UUIDs have no trade-offs compared to integers in any scenario',
      'Random UUIDs cause poor index locality (scattered inserts across the B-tree), leading to more page splits and worse write/cache performance than sequential integers, though they avoid centralized ID generation bottlenecks and are useful for distributed ID generation',
      'UUIDs can only be used as foreign keys, never primary keys',
      'Integer primary keys are always insecure and should never be used'
    ],
    correctAnswer: 'Random UUIDs cause poor index locality (scattered inserts across the B-tree), leading to more page splits and worse write/cache performance than sequential integers, though they avoid centralized ID generation bottlenecks and are useful for distributed ID generation',
    explanation: 'Sequential integer keys insert at the "end" of a B-tree index, which is cache-friendly and minimizes page splits, while random UUIDs insert at scattered, unpredictable locations, causing more index fragmentation; this is mitigated in some systems using sequential/sortable UUID variants (like UUIDv7) that preserve distributed generation benefits while improving index locality.',
    tags: ['primary-key', 'uuid', 'performance', 'indexing']
  },
  {
    id: 'sql-111',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design data retention and archival for a transactional table that grows by millions of rows per day, while keeping recent-data query performance fast?',
    options: [
      'Keep all historical data forever in the same table with no partitioning',
      'Use time-based table partitioning (e.g., monthly partitions) so old partitions can be efficiently archived or dropped, combined with a job that periodically moves/exports old partitions to cheaper storage or a data warehouse',
      'Manually DELETE old rows one at a time without partitioning',
      'Disable indexing on the table once it exceeds a certain size'
    ],
    correctAnswer: 'Use time-based table partitioning (e.g., monthly partitions) so old partitions can be efficiently archived or dropped, combined with a job that periodically moves/exports old partitions to cheaper storage or a data warehouse',
    explanation: 'Partitioning by time range lets the database quickly prune irrelevant partitions for recent-data queries (improving performance) and makes archival trivial, since dropping or detaching an entire old partition is vastly cheaper than deleting millions of individual rows, which would also generate substantial WAL/undo overhead and table bloat.',
    tags: ['system-design', 'partitioning', 'data-retention', 'archival']
  },
  {
    id: 'sql-112',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you write a query to find all customers who have placed orders in every month of the current year (from an "orders" table with columns customer_id, order_date)?',
    options: [
      'SELECT customer_id FROM orders GROUP BY customer_id',
      'SELECT customer_id FROM orders WHERE EXTRACT(YEAR FROM order_date) = EXTRACT(YEAR FROM CURRENT_DATE) GROUP BY customer_id HAVING COUNT(DISTINCT EXTRACT(MONTH FROM order_date)) = EXTRACT(MONTH FROM CURRENT_DATE)',
      'SELECT DISTINCT customer_id FROM orders',
      'SELECT customer_id FROM orders ORDER BY order_date'
    ],
    correctAnswer: 'SELECT customer_id FROM orders WHERE EXTRACT(YEAR FROM order_date) = EXTRACT(YEAR FROM CURRENT_DATE) GROUP BY customer_id HAVING COUNT(DISTINCT EXTRACT(MONTH FROM order_date)) = EXTRACT(MONTH FROM CURRENT_DATE)',
    explanation: 'Filtering to the current year, grouping by customer, and using HAVING COUNT(DISTINCT month) equal to the number of months elapsed so far correctly identifies customers with at least one order in every month-to-date, a pattern combining filtering, grouping, and distinct counting.',
    tags: ['coding', 'group-by', 'having', 'date-functions']
  },
  {
    id: 'sql-113',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a database schema to support efficient full-text search (e.g., searching product descriptions) within a relational database, without resorting to a separate search engine?',
    options: [
      'Use LIKE \'%term%\' queries directly against the description column with no indexing',
      'Use the database\u2019s native full-text search capabilities (e.g., PostgreSQL\u2019s tsvector/GIN index or MySQL\u2019s FULLTEXT index) which build specialized inverted indexes optimized for text search, including ranking and stemming',
      'Store every word as a separate row with no indexing strategy',
      'Full-text search is impossible within a relational database'
    ],
    correctAnswer: 'Use the database\u2019s native full-text search capabilities (e.g., PostgreSQL\u2019s tsvector/GIN index or MySQL\u2019s FULLTEXT index) which build specialized inverted indexes optimized for text search, including ranking and stemming',
    explanation: 'Most modern relational databases include built-in full-text search features that build inverted indexes (mapping words to the rows containing them), support relevance ranking and language-aware stemming, and vastly outperform naive LIKE \'%term%\' scans, which cannot use a standard B-tree index at all.',
    tags: ['system-design', 'full-text-search', 'indexing']
  },
  {
    id: 'sql-114',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Theory',
    question: 'Why might a database choose a sequential (full table) scan over an index scan even when an index exists on the filtered column?',
    options: [
      'The optimizer never considers cost; it always uses any available index',
      'When the query is expected to return a large fraction of the table\u2019s rows, a sequential scan can be cheaper than the overhead of many random-access index lookups, since the optimizer estimates cost based on selectivity',
      'Sequential scans are always disabled when indexes are present',
      'It only happens due to a database bug'
    ],
    correctAnswer: 'When the query is expected to return a large fraction of the table\u2019s rows, a sequential scan can be cheaper than the overhead of many random-access index lookups, since the optimizer estimates cost based on selectivity',
    explanation: 'A cost-based optimizer weighs the overhead of random I/O for many individual index lookups against the lower per-row cost of sequential reads; for low-selectivity predicates (returning a large percentage of rows), a full scan is often genuinely faster, which is why "the index isn\u2019t being used" doesn\u2019t always indicate a problem.',
    tags: ['query-optimization', 'indexing', 'performance']
  },
  {
    id: 'sql-115',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a database-level approach to enforce that a "status" column can only transition through valid states (e.g., pending \u2192 shipped \u2192 delivered, never delivered \u2192 pending)?',
    options: [
      'Rely entirely on application code with no enforcement at the database layer',
      'Use a trigger (or check constraint combined with application logic) that validates the proposed new status against the current status before allowing the UPDATE, rejecting invalid transitions',
      'Allow any value in the status column with no validation',
      'Delete and recreate the row on every status change instead of updating it'
    ],
    correctAnswer: 'Use a trigger (or check constraint combined with application logic) that validates the proposed new status against the current status before allowing the UPDATE, rejecting invalid transitions',
    explanation: 'Enforcing state machine transition rules purely in application code leaves the door open for bugs or out-of-band updates to corrupt state; a BEFORE UPDATE trigger that checks OLD.status against NEW.status against an allowed-transitions table provides a database-level safety net that cannot be bypassed.',
    tags: ['system-design', 'triggers', 'data-integrity', 'state-machine']
  },
  {
    id: 'sql-116',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Coding',
    question: 'How would you write a query to detect overlapping date ranges (e.g., conflicting room bookings) given a "bookings" table with (room_id, start_date, end_date)?',
    options: [
      'SELECT * FROM bookings WHERE start_date = end_date',
      'SELECT b1.* FROM bookings b1 JOIN bookings b2 ON b1.room_id = b2.room_id AND b1.id <> b2.id AND b1.start_date < b2.end_date AND b2.start_date < b1.end_date',
      'SELECT room_id, COUNT(*) FROM bookings GROUP BY room_id',
      'SELECT * FROM bookings ORDER BY start_date'
    ],
    correctAnswer: 'SELECT b1.* FROM bookings b1 JOIN bookings b2 ON b1.room_id = b2.room_id AND b1.id <> b2.id AND b1.start_date < b2.end_date AND b2.start_date < b1.end_date',
    explanation: 'Two date ranges overlap exactly when one starts before the other ends and vice versa (start1 < end2 AND start2 < end1); self-joining bookings for the same room and applying this classic interval-overlap condition (excluding self-matches) identifies all conflicting reservation pairs.',
    tags: ['coding', 'self-join', 'date-ranges', 'overlap-detection']
  },
  {
    id: 'sql-117',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design schema versioning and backward compatibility for a SQL database used by multiple application versions during a rolling deployment?',
    options: [
      'Force all application instances to upgrade simultaneously with the schema change',
      'Apply additive, backward-compatible schema changes (e.g., add nullable columns rather than renaming/dropping existing ones), deploy the schema change first, then roll out application code that uses the new schema, removing old columns only after all instances are upgraded',
      'Make breaking schema changes and accept temporary application errors during deployment',
      'Maintain two completely separate databases for old and new application versions permanently'
    ],
    correctAnswer: 'Apply additive, backward-compatible schema changes (e.g., add nullable columns rather than renaming/dropping existing ones), deploy the schema change first, then roll out application code that uses the new schema, removing old columns only after all instances are upgraded',
    explanation: 'During a rolling deployment, old and new application code run simultaneously against the same database, so schema changes must remain compatible with both versions throughout the transition; the safe pattern is additive changes first (expand), followed by code migration, and only later a cleanup/contraction phase once the old code path is fully retired.',
    tags: ['system-design', 'schema-versioning', 'backward-compatibility', 'deployment']
  },
  {
    id: 'sql-118',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'Performance',
    question: 'Why can excessive use of triggers on a frequently updated table introduce subtle performance and maintainability risks at scale?',
    options: [
      'Triggers have no performance cost regardless of complexity',
      'Triggers execute implicitly on every matching DML operation, adding hidden latency to writes, potentially causing cascading triggers across tables, and making it harder to reason about the full effect of a single statement',
      'Triggers can only be used for SELECT statements',
      'Triggers are deprecated in all modern databases'
    ],
    correctAnswer: 'Triggers execute implicitly on every matching DML operation, adding hidden latency to writes, potentially causing cascading triggers across tables, and making it harder to reason about the full effect of a single statement',
    explanation: 'Because triggers fire automatically and invisibly from the perspective of the calling statement, heavy logic inside them (or chains of triggers calling other triggers) can introduce significant, hard-to-diagnose write latency and make the system\u2019s overall behavior difficult to trace, which is why many teams prefer to keep complex business logic in application code or controlled batch jobs where possible.',
    tags: ['triggers', 'performance', 'maintainability']
  },
  {
    id: 'sql-119',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How would you design a database access layer to defend against both SQL injection and overly broad data exposure (e.g., a user querying another tenant\u2019s data) in a single API endpoint?',
    options: [
      'Trust client-supplied filters directly in the query with no server-side validation',
      'Use parameterized queries exclusively for all user input, and enforce tenant/user scoping server-side (e.g., always injecting a WHERE tenant_id = :current_tenant clause from trusted server context, never from client input)',
      'Rely solely on a web application firewall with no application-level changes',
      'Allow the client to specify the full SQL WHERE clause as a string'
    ],
    correctAnswer: 'Use parameterized queries exclusively for all user input, and enforce tenant/user scoping server-side (e.g., always injecting a WHERE tenant_id = :current_tenant clause from trusted server context, never from client input)',
    explanation: 'These are two distinct but related concerns: parameterized queries prevent attackers from altering query structure, while ensuring scoping predicates (like tenant_id) always come from trusted, server-derived context rather than client-supplied parameters prevents a different vulnerability class, broken access control, where a malicious or buggy client could otherwise read another tenant\u2019s data even with safely parameterized queries.',
    tags: ['system-design', 'security', 'sql-injection', 'multi-tenancy', 'access-control']
  },
  {
    id: 'sql-120',
    topic: 'sql',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you optimize a query with a large number of JOINs?',
    options: [
      'Ensure join keys are properly indexed, filter rows as early as possible (push predicates down), select only needed columns, and review the execution plan for inefficient join order or unnecessary joins',
      'Use SELECT * to get all columns from every table for completeness',
      'Avoid using indexes to save disk space',
      'Increase the number of subqueries to replace joins wherever possible'
    ],
    correctAnswer: 'Ensure join keys are properly indexed, filter rows as early as possible (push predicates down), select only needed columns, and review the execution plan for inefficient join order or unnecessary joins',
    explanation: 'Query optimization involves ensuring join columns are indexed, reducing the result set size before joining (filtering early), selecting only required columns to limit data movement, and analyzing execution plans (EXPLAIN ANALYZE) to identify bottlenecks like poor join ordering or missing indexes.',
    tags: ['performance', 'optimization', 'indexing', 'joins']
  }
]