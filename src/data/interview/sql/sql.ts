
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
    question: 'A junior engineer runs DELETE FROM orders; (no WHERE clause) instead of TRUNCATE TABLE orders, then asks why the table still shows a high value for the next auto-increment ID. What is the most accurate explanation?',
    options: [
      'DELETE removed all rows but did not reset the identity/auto-increment counter, while TRUNCATE typically does reset it',
      'DELETE and TRUNCATE always behave identically with respect to auto-increment counters',
      'DELETE without a WHERE clause only removes the first row by default',
      'The auto-increment counter can only be reset by dropping and recreating the table'
    ],
    correctAnswer: 'DELETE removed all rows but did not reset the identity/auto-increment counter, while TRUNCATE typically does reset it',
    explanation: 'DELETE is a row-by-row DML operation logged individually, and in most databases it leaves the identity/sequence counter untouched even when every row is removed. TRUNCATE is a DDL-level operation that deallocates the data pages and, in most engines, resets the auto-increment seed. Option B is wrong because the two commands differ in logging, locking, and counter behavior. Option C is wrong because DELETE with no WHERE clause removes every row, not just the first. Option D is wrong because most databases (e.g., MySQL, SQL Server) provide a dedicated command to reset the sequence without recreating the table.',
    tags: ['ddl', 'dml', 'sql-basics']
  },
  {
    id: 'sql-002',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Why is SQL generally described as a "declarative" language rather than a "procedural" one?',
    options: [
      'SQL queries describe the desired result set, leaving the database engine to decide the execution strategy',
      'SQL statements always execute in the exact line-by-line order they are written, like a script',
      'SQL has no concept of an execution plan, so there is nothing for the engine to decide',
      'SQL is declarative only when used inside a stored procedure'
    ],
    correctAnswer: 'SQL queries describe the desired result set, leaving the database engine to decide the execution strategy',
    explanation: 'In declarative languages, you specify what you want, and the engine determines how to get it (e.g., join order, index usage, scan strategy). Option B describes a procedural model, which is the opposite of how the optimizer treats a SQL statement. Option C is wrong because every query is converted into an execution plan by the optimizer before running. Option D is wrong because the declarative nature of SQL applies to standalone queries as much as to queries inside procedures.',
    tags: ['fundamentals', 'sql-basics']
  },
  {
    id: 'sql-003',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'A query needs to return only customers whose total order count (after grouping by customer) exceeds 5. Which clause must be used to filter on that condition?',
    options: [
      'HAVING, because the condition depends on an aggregated value computed after grouping',
      'WHERE, because all filtering in SQL happens at the same stage regardless of aggregation',
      'ORDER BY, since it is the clause responsible for evaluating conditions on aggregates',
      'GROUP BY, since the filtering condition can be written directly inside it'
    ],
    correctAnswer: 'HAVING, because the condition depends on an aggregated value computed after grouping',
    explanation: 'HAVING filters groups after GROUP BY has aggregated rows, which is necessary here since "order count per customer" only exists after aggregation. Option B is incorrect because WHERE executes before grouping and cannot reference aggregate results like COUNT(*) in this context. Option C is wrong because ORDER BY only controls result ordering, not filtering. Option D is wrong because GROUP BY only specifies grouping columns, not filter conditions.',
    tags: ['where', 'having', 'filtering', 'sql-basics']
  },
  {
    id: 'sql-004',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'A table has a composite PRIMARY KEY on (order_id, product_id). Which statement about this key is correct?',
    options: [
      'No single row may repeat the exact same (order_id, product_id) pair, but order_id alone or product_id alone can repeat across rows',
      'Both order_id and product_id must individually be unique across the entire table',
      'A composite primary key behaves exactly like a UNIQUE constraint and still allows NULLs in either column',
      'Only one of the two columns is actually enforced as unique; the other is decorative'
    ],
    correctAnswer: 'No single row may repeat the exact same (order_id, product_id) pair, but order_id alone or product_id alone can repeat across rows',
    explanation: 'A composite primary key enforces uniqueness on the combination of columns, not on each column individually, so the same order_id can appear in multiple rows as long as the product_id differs. Option B is wrong because that would describe two separate unique constraints, not a composite key. Option C is wrong because, unlike a nullable UNIQUE constraint, primary key columns (including each column within a composite key) cannot contain NULLs. Option D is wrong because both columns participate equally in the uniqueness check.',
    tags: ['keys', 'constraints', 'sql-basics']
  },
  {
    id: 'sql-005',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'A "orders" table has a FOREIGN KEY on customer_id referencing customers(id). What happens by default in most databases if you try to INSERT an order with a customer_id that does not exist in the customers table?',
    options: [
      'The insert is rejected with a constraint violation error',
      'The insert succeeds, and the customer_id is automatically set to NULL',
      'The insert succeeds, and a new customer row is automatically created',
      'The insert succeeds silently, since foreign keys are only checked on SELECT'
    ],
    correctAnswer: 'The insert is rejected with a constraint violation error',
    explanation: 'A foreign key constraint enforces referential integrity by default, meaning a referencing value must already exist in the referenced table\u2019s key column, so the insert fails. Option B describes ON DELETE/UPDATE SET NULL behavior, which only applies to existing rows affected by changes in the parent table, not to inserts with an invalid value. Option C is wrong because foreign keys never auto-create parent rows. Option D is wrong because foreign key checks are enforced on INSERT and UPDATE of the referencing table, not just on reads.',
    tags: ['keys', 'constraints', 'referential-integrity']
  },
  {
    id: 'sql-006',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'Which query correctly returns every column for every row in the "employees" table?',
    options: [
      'SELECT * FROM employees;',
      'SELECT ALL COLUMNS FROM employees;',
      'FETCH * FROM employees;',
      'GET employees.*;'
    ],
    correctAnswer: 'SELECT * FROM employees;',
    explanation: 'SELECT * FROM table_name is the standard syntax for retrieving all columns from a table. Option B uses invalid syntax; "ALL COLUMNS" is not a recognized SQL keyword combination. Option C is invalid because FETCH is used with cursors in a different context, not as a substitute for SELECT. Option D is invalid syntax with no GET statement in standard SQL.',
    tags: ['select', 'sql-basics']
  },
  {
    id: 'sql-007',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'You need to list each department along with the number of employees earning more than $80,000, but only for departments with more than 3 such employees. Which combination of clauses is correct?',
    options: [
      'WHERE salary > 80000 ... GROUP BY department ... HAVING COUNT(*) > 3',
      'HAVING salary > 80000 ... GROUP BY department ... WHERE COUNT(*) > 3',
      'GROUP BY department ... WHERE salary > 80000 AND COUNT(*) > 3',
      'WHERE salary > 80000 AND COUNT(*) > 3 ... GROUP BY department'
    ],
    correctAnswer: 'WHERE salary > 80000 ... GROUP BY department ... HAVING COUNT(*) > 3',
    explanation: 'WHERE filters individual employee rows by salary before grouping, then GROUP BY collapses rows per department, and HAVING filters the resulting per-department counts. Option B reverses the roles of WHERE and HAVING, which is invalid since HAVING is for post-aggregation filtering and WHERE cannot reference COUNT(*). Option C is invalid because WHERE cannot reference an aggregate like COUNT(*). Option D is invalid for the same reason: COUNT(*) does not exist yet at the WHERE stage.',
    tags: ['where', 'having', 'group-by', 'sql-basics']
  },
  {
    id: 'sql-008',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'A table "signups" has columns (email, source). The same email can appear multiple times with different sources. What does SELECT DISTINCT email FROM signups; return?',
    options: [
      'Each unique email value exactly once, regardless of how many rows or sources it appeared with',
      'Each unique combination of email and source exactly once',
      'Only emails that appear in more than one row',
      'All rows, but with the source column removed from the output'
    ],
    correctAnswer: 'Each unique email value exactly once, regardless of how many rows or sources it appeared with',
    explanation: 'DISTINCT applies to the selected column list, so since only "email" is selected, duplicates are eliminated based on the email value alone, collapsing multiple rows with the same email into one. Option B describes what would happen if both email and source were selected with DISTINCT, not just email. Option C describes a HAVING COUNT(*) > 1 condition, not DISTINCT. Option D is incorrect because DISTINCT removes duplicate result rows; it does not simply "drop" unselected columns from an otherwise unchanged row set.',
    tags: ['distinct', 'select', 'sql-basics']
  },
  {
    id: 'sql-009',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'You want results sorted by total_amount from highest to lowest, with ties broken by the oldest order_date first. Which ORDER BY clause achieves this?',
    options: [
      'ORDER BY total_amount DESC, order_date ASC',
      'ORDER BY total_amount ASC, order_date DESC',
      'ORDER BY order_date ASC, total_amount DESC',
      'ORDER BY total_amount DESC, order_date DESC'
    ],
    correctAnswer: 'ORDER BY total_amount DESC, order_date ASC',
    explanation: 'Multiple ORDER BY columns are applied in sequence: the first column determines primary sort order, and later columns only matter for breaking ties within equal values of earlier columns. DESC on total_amount sorts highest first, and ASC on order_date breaks ties with the oldest date first. Option B sorts the primary value the wrong direction. Option C sorts by date first, making total_amount only a tie-breaker, which reverses the intended priority. Option D breaks ties by newest date first instead of oldest.',
    tags: ['order-by', 'sql-basics']
  },
  {
    id: 'sql-010',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'A column is defined as NOT NULL but has no DEFAULT value. What happens if an INSERT statement omits that column entirely?',
    options: [
      'The insert fails with a constraint violation, since no value (including a default) is available for a required column',
      'The database automatically inserts an empty string for any omitted NOT NULL column',
      'The database automatically inserts the number 0 for any omitted NOT NULL column',
      'NOT NULL only applies to UPDATE statements, so the insert succeeds'
    ],
    correctAnswer: 'The insert fails with a constraint violation, since no value (including a default) is available for a required column',
    explanation: 'Without a DEFAULT, an omitted column would be set to NULL, which directly violates the NOT NULL constraint, so the engine rejects the statement. Option B and Option C describe behavior that does not exist generically across SQL databases; there is no implicit string or numeric default tied to NOT NULL. Option D is wrong because NOT NULL constraints apply to both INSERT and UPDATE operations.',
    tags: ['constraints', 'sql-basics']
  },
  {
    id: 'sql-011',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'A column "ssn" has a UNIQUE constraint (not a primary key) and is nullable. A table currently has two rows where ssn is NULL. Does this violate the UNIQUE constraint in most databases (e.g., PostgreSQL, SQL Server, MySQL)?',
    options: [
      'No, because most databases treat each NULL as distinct from every other NULL for uniqueness purposes',
      'Yes, because UNIQUE treats all NULLs as equal to one another, so two NULLs are duplicates',
      'It depends only on whether the column is also indexed',
      'No, because UNIQUE constraints are never enforced on nullable columns at all'
    ],
    correctAnswer: 'No, because most databases treat each NULL as distinct from every other NULL for uniqueness purposes',
    explanation: 'Since NULL represents an unknown value rather than a specific value, most databases follow the standard convention that NULL is never considered equal to another NULL, so multiple NULLs do not violate UNIQUE. (Notably, SQL Server\'s default behavior with a single UNIQUE index can differ, but the general relational standard and most engines allow multiple NULLs.) Option B describes the opposite, incorrect behavior. Option C is wrong because indexing is an implementation detail, not what determines NULL equality semantics. Option D is wrong because UNIQUE is enforced for all actual (non-NULL) values in the column.',
    tags: ['constraints', 'unique', 'null', 'sql-basics']
  },
  {
    id: 'sql-012',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'Which statement correctly inserts a new row into orders(id, customer_id, total) using an explicit column list?',
    options: [
      'INSERT INTO orders (id, customer_id, total) VALUES (101, 55, 249.99);',
      'INSERT orders SET id = 101, customer_id = 55, total = 249.99;',
      'INSERT INTO orders VALUES SET (101, 55, 249.99);',
      'ADD INTO orders (id, customer_id, total) VALUES (101, 55, 249.99);'
    ],
    correctAnswer: 'INSERT INTO orders (id, customer_id, total) VALUES (101, 55, 249.99);',
    explanation: 'Standard ANSI SQL syntax for inserting a row with an explicit column list is INSERT INTO table (columns) VALUES (values). Option B uses MySQL-specific SET syntax, which is non-standard and not valid in most other databases for INSERT in this form. Option C mixes invalid syntax combining VALUES and SET incorrectly. Option D uses a nonexistent ADD INTO keyword instead of INSERT INTO.',
    tags: ['insert', 'dml', 'sql-basics']
  },
  {
    id: 'sql-013',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'You want to give every employee in the "Sales" department a 10% raise. Which statement does this correctly?',
    options: [
      'UPDATE employees SET salary = salary * 1.10 WHERE department = \'Sales\';',
      'UPDATE employees SET salary = salary * 1.10;',
      'ALTER employees SET salary = salary * 1.10 WHERE department = \'Sales\';',
      'UPDATE employees WHERE department = \'Sales\' SET salary = salary * 1.10;'
    ],
    correctAnswer: 'UPDATE employees SET salary = salary * 1.10 WHERE department = \'Sales\';',
    explanation: 'UPDATE requires the SET clause before WHERE, and the WHERE clause is essential here to scope the raise only to the Sales department. Option B omits WHERE entirely, which would give every employee in the table a raise, not just Sales. Option C incorrectly uses ALTER, which modifies schema structure, not row data. Option D has the clauses in the wrong order; WHERE must come after SET in standard UPDATE syntax.',
    tags: ['update', 'dml', 'sql-basics']
  },
  {
    id: 'sql-014',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'A developer runs UPDATE accounts SET is_active = false; and forgets the WHERE clause. What is the actual effect?',
    options: [
      'Every row in the accounts table has is_active set to false',
      'The statement is automatically rejected by the database for missing a WHERE clause',
      'Only the first row in the table is affected, since no condition was given',
      'No rows are affected, since UPDATE requires WHERE to identify target rows'
    ],
    correctAnswer: 'Every row in the accounts table has is_active set to false',
    explanation: 'An UPDATE without a WHERE clause applies to every row in the table; there is nothing limiting its scope, which is exactly why this is a common and costly production mistake. Option B is wrong because standard SQL does not require WHERE on UPDATE; it is syntactically optional even though omitting it is usually unintentional. Options C and D incorrectly assume some implicit row-limiting behavior that does not exist for plain UPDATE statements.',
    tags: ['update', 'gotchas', 'dml']
  },
  {
    id: 'sql-015',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'A column is defined as CHAR(10) and another as VARCHAR(10). Both store the value \'cat\'. Which statement correctly describes the stored result?',
    options: [
      'The CHAR(10) column stores \'cat\' padded with trailing spaces to fill 10 characters; the VARCHAR(10) column stores just \'cat\' using only the space it needs',
      'Both columns store exactly \'cat\' with no padding, since modern databases optimize CHAR storage automatically',
      'The VARCHAR(10) column pads with spaces while CHAR(10) stores only the exact characters used',
      'CHAR(10) and VARCHAR(10) are simply two names for the same underlying storage type in all databases'
    ],
    correctAnswer: 'The CHAR(10) column stores \'cat\' padded with trailing spaces to fill 10 characters; the VARCHAR(10) column stores just \'cat\' using only the space it needs',
    explanation: 'CHAR is a fixed-length type that always occupies the declared length, padding shorter values with spaces, while VARCHAR is variable-length and stores only the actual string plus a small length-tracking overhead. Option B is wrong because CHAR padding is a defined part of the type\'s behavior, not something databases bypass for optimization. Option C reverses the actual behavior of the two types. Option D is wrong because the types have meaningfully different storage and comparison semantics (e.g., trailing-space handling in comparisons can differ).',
    tags: ['data-types', 'sql-basics']
  },
  {
    id: 'sql-016',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'A column "discount" is NULL for a particular row. What does this most precisely indicate?',
    options: [
      'The value is unknown or not applicable, which is different from the value being zero or an empty string',
      'The discount is exactly 0, since NULL is SQL\'s representation of numeric zero',
      'The discount column was left as an empty string for that row',
      'The row itself has not been fully committed to the table yet'
    ],
    correctAnswer: 'The value is unknown or not applicable, which is different from the value being zero or an empty string',
    explanation: 'NULL specifically represents missing or unknown data, and is treated differently from any concrete value, including zero or an empty string, in comparisons and arithmetic. Option B incorrectly equates NULL with zero, which would make 0 + NULL evaluate to 0 instead of NULL. Option C confuses NULL with an empty string, which is a distinct, defined value. Option D is wrong because NULL has nothing to do with transaction commit status; it is simply a column value state.',
    tags: ['null', 'sql-basics']
  },
  {
    id: 'sql-017',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'A table has 100 rows where the "manager_id" column is NULL for unmanaged employees. Why does SELECT * FROM employees WHERE manager_id = NULL; return zero rows even though NULL values exist?',
    options: [
      'The = operator compared against NULL always evaluates to UNKNOWN, not TRUE, so no row satisfies the condition; IS NULL must be used instead',
      'The query has a syntax error and never executes',
      'NULL is automatically converted to the string "NULL" during comparison, which never matches the actual NULL value',
      'The WHERE clause silently ignores any condition involving the literal NULL'
    ],
    correctAnswer: 'The = operator compared against NULL always evaluates to UNKNOWN, not TRUE, so no row satisfies the condition; IS NULL must be used instead',
    explanation: 'SQL\'s three-valued logic means any standard comparison operator (=, <>, <, >) applied to NULL produces UNKNOWN rather than TRUE or FALSE, and WHERE only keeps rows where the condition is TRUE, so UNKNOWN results are excluded. Option B is wrong because this is valid, executable syntax, not a syntax error. Option C is wrong because there is no implicit string conversion happening here. Option D is wrong because the clause is not "ignored"; it is evaluated and simply never returns TRUE.',
    tags: ['null', 'gotchas', 'where']
  },
  {
    id: 'sql-018',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'Which of the following is true about aggregate functions like SUM(), AVG(), and MAX()?',
    options: [
      'They compute a single summary value from a set of rows, and by default ignore NULL values in their target column',
      'They operate independently on each row and return one output row per input row',
      'They can only be used inside a WHERE clause, never in SELECT',
      'They automatically treat NULL as zero when computing SUM() or AVG()'
    ],
    correctAnswer: 'They compute a single summary value from a set of rows, and by default ignore NULL values in their target column',
    explanation: 'Aggregate functions collapse multiple rows into a single value per group (or per whole result set with no GROUP BY), and functions like SUM, AVG, MIN, and MAX skip NULLs rather than treating them as zero or including them as an error. Option B describes scalar/row-level functions, not aggregates. Option C is wrong because aggregate functions are commonly used in SELECT and HAVING, and cannot be used directly in WHERE at all. Option D is a common but incorrect assumption: NULL is excluded from the calculation entirely, not coerced to 0, which affects results like AVG() differently than if NULLs counted as zero.',
    tags: ['aggregate-functions', 'null', 'sql-basics']
  },
  {
    id: 'sql-019',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Coding',
    question: 'A table "employees" has 5 rows, two of which have a NULL value in the "age" column. What do COUNT(*) and COUNT(age) return, respectively?',
    options: [
      '5 and 3',
      '5 and 5',
      '3 and 5',
      '3 and 3'
    ],
    correctAnswer: '5 and 3',
    explanation: 'COUNT(*) counts every row regardless of NULLs, so it returns 5. COUNT(column) only counts rows where that specific column is non-NULL, so with 2 NULLs out of 5 rows, it returns 3. The option "5 and 5" incorrectly assumes COUNT(age) also ignores NULL handling and counts all rows. The option "3 and 5" reverses the correct behavior of the two functions. The option "3 and 3" incorrectly assumes COUNT(*) is also affected by NULLs in a specific column, which it is not, since COUNT(*) counts rows, not column values.',
    tags: ['count', 'aggregate-functions', 'null']
  },
  {
    id: 'sql-020',
    topic: 'sql',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'A query uses GROUP BY department, role and also selects COUNT(*). What does each row in the result represent?',
    options: [
      'One row per unique combination of department and role, with COUNT(*) showing how many original rows shared that combination',
      'One row per department only, with role values arbitrarily chosen from one of the underlying rows',
      'One row per original employee row, annotated with department and role',
      'A single row containing the total count across all departments and roles combined'
    ],
    correctAnswer: 'One row per unique combination of department and role, with COUNT(*) showing how many original rows shared that combination',
    explanation: 'GROUP BY with multiple columns groups rows by the combination of all listed columns, so each output row corresponds to a distinct (department, role) pair, and COUNT(*) reflects how many source rows fell into that specific group. Option B describes grouping by department alone, which would not respect the role column at all. Option C describes no grouping happening, which contradicts the use of GROUP BY. Option D describes the result of omitting the GROUP BY clause and only using COUNT(*) as a single aggregate over the whole table.',
    tags: ['group-by', 'aggregate-functions']
  },

  // ===================== INTERMEDIATE =====================
  {
    id: 'sql-021',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'Given orders (10 rows) and shipments (7 rows, each referencing an order_id that exists in orders, with no order having more than one shipment), what is the result row count of: SELECT * FROM orders o LEFT JOIN shipments s ON o.id = s.order_id;',
    options: [
      '10 rows, with shipment columns NULL for the 3 orders lacking a shipment',
      '7 rows, since LEFT JOIN only returns matched rows',
      '17 rows, since LEFT JOIN concatenates both tables\u2019 row counts',
      '3 rows, representing only the unmatched orders'
    ],
    correctAnswer: '10 rows, with shipment columns NULL for the 3 orders lacking a shipment',
    explanation: 'LEFT JOIN preserves every row from the left table (orders) regardless of whether a match exists in the right table, filling unmatched shipment columns with NULL, so the result has exactly as many rows as orders: 10. The option describing 7 rows confuses LEFT JOIN with INNER JOIN, which would only return matched rows. The 17-row option misunderstands JOIN as a UNION-like concatenation, which is not how relational joins work. The 3-row option only reflects the unmatched subset, ignoring the 7 orders that do have a shipment.',
    tags: ['joins', 'left-join', 'coding']
  },
  {
    id: 'sql-022',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'A query uses RIGHT JOIN instead of LEFT JOIN by mistake, but the developer swaps the table order in the FROM clause to compensate. Under what condition does this produce an identical result to the original intended LEFT JOIN?',
    options: [
      'Only if the same two tables and the same join condition are used, just with their positions in FROM swapped to match the new join direction',
      'Never, because RIGHT JOIN and LEFT JOIN are fundamentally incompatible operations with no overlap',
      'Always, regardless of table order, since RIGHT JOIN and LEFT JOIN are simply aliases for INNER JOIN',
      'Only if both tables happen to have the same number of rows'
    ],
    correctAnswer: 'Only if the same two tables and the same join condition are used, just with their positions in FROM swapped to match the new join direction',
    explanation: 'A LEFT JOIN of A to B is equivalent to a RIGHT JOIN of B to A, since both preserve all rows of the same logical table while matching against the other; swapping FROM order while also swapping which side is RIGHT JOINed reproduces the same semantics. The "never" option is incorrect because this equivalence is a well-known and commonly used technique. The "always, since they\u2019re aliases for INNER JOIN" option is wrong because LEFT/RIGHT JOIN preserve unmatched rows from one side, unlike INNER JOIN, which discards them. The row-count option is irrelevant; equivalence depends on join direction and table roles, not row counts.',
    tags: ['joins', 'right-join', 'left-join']
  },
  {
    id: 'sql-023',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'Table A has rows {1, 2, 3} and table B has rows {2, 3, 4} in their shared key column. What does SELECT a.key FROM A a FULL OUTER JOIN B b ON a.key = b.key WHERE b.key IS NULL; return?',
    options: [
      '1, representing the row from A with no match in B',
      '4, representing the row from B with no match in A',
      '1 and 4, representing all unmatched rows from both tables',
      'Nothing, since FULL OUTER JOIN never produces NULLs in the join column'
    ],
    correctAnswer: '1, representing the row from A with no match in B',
    explanation: 'FULL OUTER JOIN returns all rows from both tables, NULL-padding unmatched sides; filtering with WHERE b.key IS NULL isolates rows that came only from A with no B match \u2014 here, just key 1, since the SELECT also explicitly pulls a.key. Option B is wrong because filtering on b.key IS NULL excludes rows where B matched but A didn\u2019t (it would need a.key IS NULL to capture the unmatched B row, value 4). The "1 and 4" option incorrectly assumes the single condition captures both directions of mismatch at once. The last option is wrong because NULL padding for unmatched sides is exactly what FULL OUTER JOIN is defined to produce.',
    tags: ['joins', 'full-outer-join', 'coding']
  },
  {
    id: 'sql-024',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'Table "sizes" has 4 rows and table "colors" has 5 rows, with no join condition. How many rows does SELECT * FROM sizes CROSS JOIN colors; return, and why?',
    options: [
      '20 rows, the Cartesian product of every row in sizes paired with every row in colors',
      '9 rows, the sum of both tables\u2019 row counts',
      '5 rows, matching the larger of the two tables',
      '1 row, since no ON condition means no rows can be matched'
    ],
    correctAnswer: '20 rows, the Cartesian product of every row in sizes paired with every row in colors',
    explanation: 'CROSS JOIN deliberately has no join condition and instead pairs every row of one table with every row of the other, producing rows_A \u00d7 rows_B results, here 4 \u00d7 5 = 20. The 9-row option mistakenly treats this like a UNION-style addition of row counts. The 5-row option incorrectly assumes some implicit matching limits the output to the larger table\u2019s size. The 1-row option incorrectly assumes a missing ON condition causes the join to fail or collapse, when in fact CROSS JOIN intentionally omits one.',
    tags: ['joins', 'cross-join', 'coding']
  },
  {
    id: 'sql-025',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'An "employees" table has columns (id, name, manager_id), where manager_id references another row\u2019s id in the same table. Which query correctly lists each employee alongside their manager\u2019s name?',
    options: [
      'SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;',
      'SELECT e.name, e.manager_id FROM employees e GROUP BY e.manager_id;',
      'SELECT name, manager_id FROM employees ORDER BY manager_id;',
      'SELECT e.name AS employee, m.name AS manager FROM employees e, employees m;'
    ],
    correctAnswer: 'SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;',
    explanation: 'This is a self join using two aliases of the same table: "e" represents the employee row and "m" represents the manager row, joined where the employee\u2019s manager_id matches the manager\u2019s id; LEFT JOIN ensures employees with no manager (e.g., the CEO, manager_id NULL) still appear with a NULL manager name. The GROUP BY option does not resolve manager_id into an actual name and serves an unrelated aggregation purpose. The ORDER BY option only sorts by the raw manager_id value, never looking up the manager\u2019s name. The last option omits any join condition, producing a Cartesian product (every employee paired with every possible "manager" row) rather than the correct manager mapping.',
    tags: ['joins', 'self-join', 'coding']
  },
  {
    id: 'sql-026',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What does the following query return?\n\nSELECT name\nFROM departments\nWHERE id IN (\n  SELECT department_id\n  FROM employees\n  WHERE salary > 100000\n);',
    options: [
      'The names of departments that have at least one employee earning more than 100000',
      'The names of all departments, annotated with their highest salary',
      'The names of employees earning more than 100000, joined with department info',
      'An error, because subqueries cannot be used inside a WHERE...IN clause'
    ],
    correctAnswer: 'The names of departments that have at least one employee earning more than 100000',
    explanation: 'The inner subquery produces a list of department_id values belonging to high earners, and the outer query then selects department names whose id appears anywhere in that list \u2014 effectively, any department with at least one qualifying employee. The "annotated with highest salary" option incorrectly assumes some aggregation is happening, but no MAX() or GROUP BY exists here. The "names of employees" option confuses the outer SELECT, which explicitly returns department names, not employee names. The "error" option is incorrect because subqueries are a standard and common use inside WHERE...IN.',
    tags: ['subqueries', 'coding']
  },
  {
    id: 'sql-027',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'Consider: SELECT e.name FROM employees e WHERE e.salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department_id = e.department_id);\n\nWhy is this subquery correlated rather than independent?',
    options: [
      'Because the inner query references e.department_id from the outer query, so it must be conceptually re-evaluated for each outer row',
      'Because it uses AVG(), and all aggregate subqueries are automatically correlated',
      'Because it is nested inside a WHERE clause, and all WHERE subqueries are correlated by definition',
      'It is not actually correlated, since the inner query has its own table alias e2'
    ],
    correctAnswer: 'Because the inner query references e.department_id from the outer query, so it must be conceptually re-evaluated for each outer row',
    explanation: 'A subquery is correlated specifically when it references a column from the outer query (here, e.department_id), meaning its result can differ depending on which outer row is currently being evaluated, in this case computing each employee\u2019s own department\u2019s average salary. Using AVG() does not by itself make a subquery correlated; an aggregate subquery with no outer reference would be independent. Likewise, subqueries inside WHERE are not automatically correlated; many WHERE subqueries (e.g., a simple IN list) are fully independent. Having a separate alias (e2) does not prevent correlation; the alias is necessary precisely because the same table is referenced from both inner and outer scopes.',
    tags: ['subqueries', 'correlated-subquery', 'coding']
  },
  {
    id: 'sql-028',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'What is the purpose of the WITH clause in the following query?\n\nWITH high_value_orders AS (\n  SELECT customer_id, SUM(total) AS lifetime_value\n  FROM orders\n  GROUP BY customer_id\n  HAVING SUM(total) > 5000\n)\nSELECT c.name, h.lifetime_value\nFROM customers c\nJOIN high_value_orders h ON c.id = h.customer_id;',
    options: [
      'It defines a named, temporary result set (a CTE) that can be referenced later in the same query, here used to pre-aggregate order totals before joining',
      'It permanently creates a new table called high_value_orders in the database schema',
      'It is functionally identical to creating an index on the orders table',
      'It forces the query to execute the subquery once per row of the customers table'
    ],
    correctAnswer: 'It defines a named, temporary result set (a CTE) that can be referenced later in the same query, here used to pre-aggregate order totals before joining',
    explanation: 'The WITH clause introduces a Common Table Expression, scoped to this single statement, which here aggregates order totals per customer before the outer query joins it against the customers table, improving readability over nesting the subquery directly in the FROM clause. It does not create a persistent database object; the CTE disappears once the statement finishes. It has nothing to do with indexing, which is a storage/performance feature, not a query-structuring one. It also does not force per-row re-execution; in most databases, a non-recursive CTE\u2019s definition can be computed once and reused (the exact materialization strategy varies by engine, but conceptually it is not iterated per outer row).',
    tags: ['cte', 'with-clause', 'coding']
  },
  {
    id: 'sql-029',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'A recursive CTE is used to traverse an "employees" table with (id, name, manager_id) to find everyone who reports up the chain to a given executive. Which part of the recursive CTE definition prevents it from running forever?',
    options: [
      'The recursive member stops producing new rows once a join condition (e.g., matching manager_id) finds no further matching rows to add',
      'Recursive CTEs always run for a fixed, hardcoded number of iterations regardless of the data',
      'The anchor member alone determines when recursion stops, independent of the recursive member',
      'Recursive CTEs require an explicit STOP statement to terminate'
    ],
    correctAnswer: 'The recursive member stops producing new rows once a join condition (e.g., matching manager_id) finds no further matching rows to add',
    explanation: 'A recursive CTE repeatedly executes its recursive member, joining the CTE\u2019s own previous result back against the base table, and naturally terminates once an iteration produces zero new rows (e.g., reaching employees with no further reports). There is no fixed iteration count baked into the recursive CTE mechanism itself, though some databases let you set a maximum recursion depth as a safety guard. The anchor member only seeds the initial rows; it does not control when recursion stops, the recursive member\u2019s row production does. There is no STOP keyword in standard recursive CTE syntax; termination is implicit based on data exhaustion.',
    tags: ['cte', 'recursive-cte', 'hierarchical-data']
  },
  {
    id: 'sql-030',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'A view "active_customers" is defined as SELECT * FROM customers WHERE status = \'active\'. A row in customers changes from active to inactive. What happens when active_customers is queried immediately afterward (assuming it is a standard, non-materialized view)?',
    options: [
      'The now-inactive row no longer appears, since the view re-executes its underlying query against current data on every access',
      'The row still appears until the view is manually refreshed with a REFRESH command',
      'The view continues showing stale data until the database is restarted',
      'The change has no effect because views cache their result permanently at creation time'
    ],
    correctAnswer: 'The now-inactive row no longer appears, since the view re-executes its underlying query against current data on every access',
    explanation: 'A standard (non-materialized) view is essentially a stored query, not stored data, so every time it is queried, the underlying SELECT runs fresh against the live table and reflects the current state immediately. The REFRESH-command option describes materialized view behavior, not a regular view, which has no such manual refresh step because it has nothing cached to refresh. The "stale until restart" option incorrectly attributes caching behavior to plain views. The "caches permanently at creation" option confuses how views work entirely; a view\u2019s definition is fixed, but its data is always recomputed live.',
    tags: ['views', 'coding']
  },
  {
    id: 'sql-031',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'A team replaces a frequently-queried regular VIEW with a MATERIALIZED VIEW to improve dashboard load times. What new operational responsibility does this introduce that did not exist with the regular view?',
    options: [
      'The team must now periodically refresh the materialized view, or its data will become stale relative to the underlying tables',
      'The team must now manually rewrite every query that referenced the old view, since materialized views use entirely different SELECT syntax',
      'The team loses the ability to query the materialized view using ordinary SELECT statements',
      'Materialized views automatically stay in sync with underlying tables in real time, so no new responsibility is introduced'
    ],
    correctAnswer: 'The team must now periodically refresh the materialized view, or its data will become stale relative to the underlying tables',
    explanation: 'Because a materialized view physically stores its query results rather than recomputing them on each access, it must be explicitly refreshed (manually, on a schedule, or via triggers depending on the database) to reflect changes in the underlying tables, which is a new operational burden compared to a regular view. Materialized views are still queried with standard SELECT statements, just like regular views, so no special new syntax is required for read queries. They remain fully queryable; that is, in fact, their main appeal for performance. The claim that they "automatically stay in sync in real time" is false for most databases and is precisely the trade-off being introduced.',
    tags: ['views', 'materialized-view', 'performance']
  },
  {
    id: 'sql-032',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Performance',
    question: 'A table receives heavy write traffic (thousands of INSERTs per second) and has 8 indexes on various columns. Read queries are relatively rare. What is the most likely consequence of this index configuration?',
    options: [
      'Write throughput suffers because every index must be updated on each INSERT, even though most of those indexes are rarely used for reads',
      'Indexes have no effect on INSERT performance, only on SELECT performance',
      'Having more indexes always improves both read and write performance simultaneously',
      'The number of indexes only matters for UPDATE statements, not INSERT statements'
    ],
    correctAnswer: 'Write throughput suffers because every index must be updated on each INSERT, even though most of those indexes are rarely used for reads',
    explanation: 'Each index is a separate data structure that must be maintained whenever a row is inserted, so eight indexes mean eight structures to update per write, which compounds significantly under high insert volume, especially when most of those indexes provide little corresponding read benefit. The claim that indexes have no effect on INSERT performance ignores this maintenance cost entirely. Indexes do not universally improve both reads and writes; they trade write overhead for read speed, which is exactly the tension in this scenario. INSERT operations are affected by indexes just as much as UPDATE operations, since both require adding or modifying index entries.',
    tags: ['indexing', 'performance']
  },
  {
    id: 'sql-033',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'A table has a clustered index on its primary key "id" and a separate non-clustered index on "email". When a query searches by email, what does the database typically have to do to retrieve the full row?',
    options: [
      'Use the non-clustered index to find the matching row\u2019s key, then perform a lookup back into the clustered index (the actual table data) to fetch remaining columns',
      'Read the row directly from the non-clustered index, since it always stores a complete copy of every column',
      'Scan the entire table regardless of the non-clustered index\u2019s existence',
      'Use the non-clustered index to determine which physical page the table\u2019s clustered data starts on, with no further lookup needed'
    ],
    correctAnswer: 'Use the non-clustered index to find the matching row\u2019s key, then perform a lookup back into the clustered index (the actual table data) to fetch remaining columns',
    explanation: 'A non-clustered index stores the indexed column(s) plus a pointer or row locator (often the clustering key), so unless the query only needs columns already present in the non-clustered index itself (a covering index scenario), the engine must do an extra lookup into the clustered index to retrieve the rest of the row\u2019s data. The claim that non-clustered indexes store complete row copies is false; that describes the clustered index, which holds the actual table data in storage order. A full table scan is not required here precisely because a usable index exists on email. The last option misdescribes the lookup as simply locating a page with no further work, when in fact a full key-based lookup into the clustered structure occurs.',
    tags: ['indexing', 'clustered-index', 'non-clustered-index']
  },
  {
    id: 'sql-034',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'A junior developer denormalizes a heavily normalized schema by duplicating a customer\u2019s name into every order row, instead of joining to a customers table. What is the most accurate description of the trade-off being made?',
    options: [
      'Read queries avoid a join and may run faster, but every update to a customer\u2019s name now must be propagated across all of that customer\u2019s order rows to avoid inconsistency',
      'There is no meaningful trade-off, since denormalization always strictly improves performance with no downside',
      'This change has no effect on data consistency, only on storage size',
      'This change makes the schema more normalized, not less, since it adds more columns'
    ],
    correctAnswer: 'Read queries avoid a join and may run faster, but every update to a customer\u2019s name now must be propagated across all of that customer\u2019s order rows to avoid inconsistency',
    explanation: 'Denormalization trades update complexity and consistency risk for read performance: duplicating the name avoids a join at read time, but if the customer renames themselves, every duplicated copy across order rows must be updated, or the data becomes inconsistent. The "no trade-off" option ignores the well-known consistency risk that denormalization explicitly introduces. The claim about "no effect on consistency" is incorrect since duplicated data is the textbook source of update anomalies. Adding a duplicated column does not increase normalization; it actually reduces it, since the name now depends on customer_id rather than solely living in the customers table, reintroducing a transitive/redundant dependency.',
    tags: ['denormalization', 'normalization', 'database-design']
  },
  {
    id: 'sql-035',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'A "students" table has a column "phone_numbers" storing comma-separated values like \'555-1111,555-2222\'. Which normal form violation does this represent, and what is the standard fix?',
    options: [
      'It violates First Normal Form (1NF) because the column is not atomic; the fix is to move phone numbers into a separate related table with one row per number',
      'It violates Third Normal Form (3NF) due to a transitive dependency; the fix is to add a new column for each possible phone number',
      'It violates no normal form, since comma-separated values are a standard SQL data type',
      'It violates Second Normal Form (2NF) because phone numbers depend on a non-key column'
    ],
    correctAnswer: 'It violates First Normal Form (1NF) because the column is not atomic; the fix is to move phone numbers into a separate related table with one row per number',
    explanation: '1NF requires that each column hold a single, atomic value rather than a list or repeating group, so a comma-separated list directly violates it; the standard relational fix is a child table (e.g., student_phones) with a foreign key back to the student, one row per phone number. This has nothing to do with 3NF, which concerns dependencies between non-key columns, not atomicity of a single column\u2019s value, and adding more columns for more numbers is a poor "fix" (it just creates a different anomaly capping the number of phones). Comma-separated values are not a real SQL data type; they are a string being misused to represent multiple values. 2NF concerns partial dependency on a composite key, which is unrelated to this single-column atomicity problem.',
    tags: ['normalization', '1nf', 'database-design']
  },
  {
    id: 'sql-036',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'An "orders" table includes columns (order_id, customer_id, customer_zip, customer_city), where customer_city is determined entirely by customer_zip (not by order_id directly). What normalization problem does this represent?',
    options: [
      'A transitive dependency, which violates Third Normal Form (3NF) since customer_city depends on customer_zip, a non-key column, rather than directly on the primary key',
      'A violation of First Normal Form (1NF), since customer_city is not an atomic value',
      'No violation at all, since both columns are non-key and any combination of non-key columns is always acceptable',
      'A violation of the UNIQUE constraint, since customer_zip and customer_city must be declared unique together'
    ],
    correctAnswer: 'A transitive dependency, which violates Third Normal Form (3NF) since customer_city depends on customer_zip, a non-key column, rather than directly on the primary key',
    explanation: '3NF requires that non-key columns depend only on the primary key, not on other non-key columns; here customer_city is determined by customer_zip rather than directly by order_id, which is the classic transitive dependency 3NF is designed to eliminate (the fix being to move zip/city into their own table). This is not a 1NF issue, since customer_city is itself a perfectly atomic single value; the problem is about dependency structure, not atomicity. It is incorrect to say any non-key combination is acceptable; 3NF specifically restricts which dependencies among non-key columns are allowed. This scenario has nothing to do with UNIQUE constraints, which enforce row-level uniqueness, not functional dependency rules.',
    tags: ['normalization', '3nf', 'database-design']
  },
  {
    id: 'sql-037',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'A reporting team denormalizes their analytics schema by pre-joining and flattening several normalized tables into one wide table refreshed nightly. Which statement best describes why this is a reasonable choice for their use case?',
    options: [
      'Their workload is read-heavy and tolerant of slightly stale data, so trading some redundancy and write complexity for much faster reporting queries makes sense',
      'It is never reasonable to denormalize a schema under any circumstances',
      'Denormalization is only valid in NoSQL systems, never in relational databases',
      'This approach guarantees the data will always be perfectly consistent in real time, eliminating any trade-off'
    ],
    correctAnswer: 'Their workload is read-heavy and tolerant of slightly stale data, so trading some redundancy and write complexity for much faster reporting queries makes sense',
    explanation: 'Denormalization is a deliberate engineering trade-off that fits well for read-heavy, write-light workloads like nightly-refreshed analytics, where avoiding expensive joins at query time outweighs the cost of redundant storage and the acceptable staleness of nightly refresh. The blanket claim that denormalization is "never reasonable" contradicts its widespread, well-established use in exactly this kind of scenario. Denormalization is a relational database technique just as much as a NoSQL one; it is not exclusive to either category. Far from guaranteeing real-time consistency, this nightly-refresh approach explicitly accepts staleness between refreshes as part of the trade-off.',
    tags: ['denormalization', 'performance', 'database-design']
  },
  {
    id: 'sql-038',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'A bank transfer application executes: BEGIN; UPDATE accounts SET balance = balance - 100 WHERE id = 1; UPDATE accounts SET balance = balance + 100 WHERE id = 2; COMMIT; If the application crashes after the first UPDATE but before COMMIT, what is the state of the data once the database recovers?',
    options: [
      'Neither update is applied; the transaction is rolled back as if it never started',
      'Only the first UPDATE (the deduction) is permanently applied, leaving the funds effectively destroyed',
      'Both updates are applied automatically during crash recovery, since the intent was clear',
      'The second UPDATE is applied alone, compensating for the missing first one'
    ],
    correctAnswer: 'Neither update is applied; the transaction is rolled back as if it never started',
    explanation: 'Because the transaction never reached COMMIT, atomicity guarantees that none of its changes become permanent; on recovery, the database treats the incomplete transaction as if it never happened, rolling back any partial effects. The "only the first update applied" option describes exactly the atomicity violation that transactions are designed to prevent, leaving money debited with no corresponding credit. The "automatic completion during recovery" option incorrectly assumes the database can infer business intent, which it cannot; it only knows whether a transaction was committed or not. The "second update applied alone" option is not something any standard transactional system would do, since there is no mechanism to apply only the uncommitted, never-executed second statement.',
    tags: ['transactions', 'coding', 'atomicity']
  },
  {
    id: 'sql-039',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Theory',
    question: 'A senior engineer says a particular transactional bug "violated isolation, not atomicity." Which scenario is consistent with that specific description?',
    options: [
      'A concurrent transaction read intermediate, uncommitted data from another in-progress transaction before it finished, even though both transactions eventually committed successfully on their own',
      'A transaction partially applied its changes, then crashed before completing the rest, leaving the database in a half-updated state',
      'A committed transaction\u2019s changes were lost entirely after a server restart',
      'A transaction left the database in a state that violated a declared CHECK constraint'
    ],
    correctAnswer: 'A concurrent transaction read intermediate, uncommitted data from another in-progress transaction before it finished, even though both transactions eventually committed successfully on their own',
    explanation: 'Isolation specifically concerns how concurrently running transactions affect each other\u2019s visibility of data; one transaction observing another\u2019s uncommitted, in-progress changes (a dirty read) is a textbook isolation violation, independent of whether each transaction individually completed correctly. A transaction crashing mid-way and leaving partial changes is specifically an atomicity violation (failure of all-or-nothing execution), not an isolation issue. Losing committed data after a restart is a durability violation, since durability guarantees committed work survives failures. Violating a CHECK constraint is a consistency violation, since consistency concerns the database remaining in a valid state according to its defined rules.',
    tags: ['acid', 'isolation-levels', 'transactions']
  },
  {
    id: 'sql-040',
    topic: 'sql',
    stage: 'Intermediate',
    difficulty: 'Intermediate',
    category: 'Coding',
    question: 'Within a single session: BEGIN; UPDATE inventory SET stock = stock - 1 WHERE id = 5; SAVEPOINT before_log; INSERT INTO audit_log VALUES (...); -- this insert fails due to a constraint violation\nROLLBACK TO before_log;\nCOMMIT;\n\nWhat is the final state of the inventory row with id = 5?',
    options: [
      'The stock decrement is committed, since ROLLBACK TO a savepoint only undoes statements after that savepoint, not the entire transaction',
      'The entire transaction, including the stock decrement, is rolled back because one statement inside it failed',
      'The stock decrement is undone, since any failure anywhere in the transaction forces a full rollback regardless of savepoints',
      'The COMMIT at the end fails entirely because an earlier statement inside the transaction had failed'
    ],
    correctAnswer: 'The stock decrement is committed, since ROLLBACK TO a savepoint only undoes statements after that savepoint, not the entire transaction',
    explanation: 'A SAVEPOINT creates a partial rollback point within a transaction; ROLLBACK TO before_log specifically discards only the failed INSERT (and anything else after the savepoint), leaving the earlier UPDATE intact and still part of the still-open transaction, which can then be committed normally. The "entire transaction rolled back" option ignores the specific purpose of savepoints, which exist precisely to avoid discarding the whole transaction over one failed statement. Likewise, "any failure forces a full rollback" is not true when savepoints are used correctly; that is the whole point of the feature. The final COMMIT does not fail here because, after the ROLLBACK TO savepoint, the transaction is back in a valid state with only the successful UPDATE pending.',
    tags: ['transactions', 'savepoint', 'coding']
  },

  // ===================== ADVANCED =====================
  {
    id: 'sql-041',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'Transaction A runs under REPEATABLE READ and executes the same SELECT COUNT(*) FROM orders WHERE status = \'pending\'; twice, several seconds apart. Between the two reads, Transaction B inserts a new pending order and commits. What does Transaction A see on its second read, and why?',
    options: [
      'The same count as before, because REPEATABLE READ guarantees that re-reading the same rows yields consistent results, though it does not universally prevent phantom rows in the SQL standard',
      'A higher count immediately reflecting B\u2019s insert, because REPEATABLE READ only protects against dirty reads, not phantoms',
      'An error, because REPEATABLE READ blocks all concurrent inserts from other transactions',
      'A lower count, because REPEATABLE READ silently excludes the most recently inserted rows from any session'
    ],
    correctAnswer: 'The same count as before, because REPEATABLE READ guarantees that re-reading the same rows yields consistent results, though it does not universally prevent phantom rows in the SQL standard',
    explanation: 'In many real engines (e.g., PostgreSQL\u2019s snapshot-based REPEATABLE READ), Transaction A\u2019s snapshot is taken at the start of the transaction, so newly committed rows from B remain invisible to A for the rest of A\u2019s transaction, keeping the count stable; note the ANSI standard technically only guarantees protection against phantom reads at SERIALIZABLE, but most MVCC engines\u2019 snapshot isolation happens to prevent this particular phantom too. The "higher count" option incorrectly assumes REPEATABLE READ offers no protection beyond Read Committed, when it specifically targets exactly this kind of inconsistency across reads within one transaction. The "error" option wrongly assumes REPEATABLE READ blocks other transactions outright, when in MVCC systems it instead manages visibility, not blocking writers. The "lower count" option describes behavior with no basis in how isolation levels work.',
    tags: ['isolation-levels', 'transactions', 'concurrency', 'mvcc']
  },
  {
    id: 'sql-042',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'Transaction A (Read Uncommitted) executes: BEGIN; UPDATE accounts SET balance = balance - 500 WHERE id = 7; -- not yet committed\nMeanwhile, Transaction B runs: SELECT balance FROM accounts WHERE id = 7; under Read Uncommitted, then Transaction A executes ROLLBACK;. What value did Transaction B most likely read, and what problem does this illustrate?',
    options: [
      'B read the decremented (not-yet-committed) balance, illustrating a dirty read, since that value was later rolled back and never actually became valid',
      'B read the original balance, since Read Uncommitted never exposes uncommitted changes from other transactions',
      'B\u2019s query was blocked until A committed or rolled back, illustrating standard row-level locking',
      'B received an error, since reading a row currently being modified by another transaction is disallowed under Read Uncommitted'
    ],
    correctAnswer: 'B read the decremented (not-yet-committed) balance, illustrating a dirty read, since that value was later rolled back and never actually became valid',
    explanation: 'Read Uncommitted is specifically defined to allow transactions to see other transactions\u2019 uncommitted changes, so B almost certainly observed the in-progress decrement; since A later rolled back, that value was never real, making this the textbook definition of a dirty read. The claim that Read Uncommitted "never exposes uncommitted changes" directly contradicts the defining characteristic of that isolation level. Blocking is associated with stricter isolation or explicit locking mechanisms, not Read Uncommitted, which is specifically the least restrictive level and avoids blocking on reads. There is no error condition here; reading concurrently modified data without blocking is exactly what this isolation level permits.',
    tags: ['isolation-levels', 'dirty-read', 'concurrency', 'coding']
  },
  {
    id: 'sql-043',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'Transaction A (under Repeatable Read in a lock-based, non-MVCC-style system) runs: SELECT * FROM orders WHERE status = \'pending\'; twice. Between the two SELECTs, Transaction B inserts a brand-new row with status = \'pending\' and commits. Why might A\u2019s second SELECT include this new row even though Repeatable Read is active?',
    options: [
      'Repeatable Read, as defined by the SQL standard, guarantees that previously read rows won\u2019t change, but does not by itself guarantee protection against new matching rows appearing \u2014 that protection (against phantoms) is specifically associated with Serializable',
      'It cannot happen under any circumstances, since Repeatable Read always prevents every kind of new row from appearing',
      'Repeatable Read only applies to UPDATE statements, never to SELECT statements',
      'The new row only appears because Transaction A explicitly ran COMMIT between the two SELECTs'
    ],
    correctAnswer: 'Repeatable Read, as defined by the SQL standard, guarantees that previously read rows won\u2019t change, but does not by itself guarantee protection against new matching rows appearing \u2014 that protection (against phantoms) is specifically associated with Serializable',
    explanation: 'Per the ANSI SQL standard, Repeatable Read prevents non-repeatable reads of already-read rows but does not, in the formal standard, guarantee protection against phantom rows; only Serializable formally closes that gap (though specific engines\u2019 MVCC implementations of Repeatable Read may behave differently in practice). The claim that it "always prevents every kind of new row" overstates the standard\u2019s guarantee for this isolation level. Repeatable Read applies to read consistency generally, not specifically to UPDATE statements; the scenario described is explicitly about repeated SELECTs. Nothing in the scenario involves A committing between the two reads; introducing that detail doesn\u2019t explain the phantom, since the transaction is still open across both SELECTs.',
    tags: ['isolation-levels', 'phantom-read', 'concurrency']
  },
  {
    id: 'sql-044',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'An e-commerce system implements optimistic locking on a "products" table using a "version" integer column. Two requests load the same product (version = 5) and each tries to update its stock count. Request A commits first, updating version to 6. What must happen when Request B then tries to commit its update?',
    options: [
      'Request B\u2019s UPDATE, which includes WHERE version = 5, affects zero rows since the version is now 6, signaling a conflict the application must detect and handle (e.g., retry)',
      'Request B\u2019s update silently overwrites Request A\u2019s change with no indication of conflict',
      'The database automatically merges both stock changes into a single consistent value',
      'Request B is blocked and forced to wait until Request A\u2019s connection closes entirely'
    ],
    correctAnswer: 'Request B\u2019s UPDATE, which includes WHERE version = 5, affects zero rows since the version is now 6, signaling a conflict the application must detect and handle (e.g., retry)',
    explanation: 'Optimistic locking works by including the expected version in the WHERE clause; since Request A already bumped the version to 6, Request B\u2019s UPDATE...WHERE version = 5 matches no rows, and the application is responsible for checking the affected row count and reacting (typically retrying with fresh data). The "silently overwrites" option describes what would happen without optimistic locking at all, defeating its purpose. Databases do not automatically merge conflicting business values like stock counts; that would require domain-specific logic the engine has no knowledge of. Optimistic locking specifically avoids blocking; that behavior describes pessimistic locking instead.',
    tags: ['locking', 'optimistic-locking', 'concurrency', 'coding']
  },
  {
    id: 'sql-045',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'Transaction A executes UPDATE accounts SET balance = balance - 10 WHERE id = 1; then, before committing, attempts UPDATE accounts SET balance = balance + 10 WHERE id = 2;. Simultaneously, Transaction B does the reverse: updates id = 2 first, then tries to update id = 1. Both transactions are still open. What is the most likely outcome?',
    options: [
      'A deadlock occurs, since each transaction holds a lock the other needs, and the database\u2019s deadlock detector aborts one transaction to let the other proceed',
      'Both transactions complete successfully with no contention, since they update different rows in each individual statement',
      'The database automatically reorders the statements within each transaction to avoid any conflict',
      'Only Transaction A is allowed to run; Transaction B is rejected immediately upon starting'
    ],
    correctAnswer: 'A deadlock occurs, since each transaction holds a lock the other needs, and the database\u2019s deadlock detector aborts one transaction to let the other proceed',
    explanation: 'This is the canonical deadlock scenario: A holds a lock on row 1 and wants row 2, while B holds a lock on row 2 and wants row 1, so neither can proceed; the database detects this circular wait and forcibly rolls back one transaction (the "victim") so the other can continue. The "no contention" option is incorrect because both transactions do touch the same two rows, just in reversed order, which is exactly what creates the lock cycle. Databases never silently reorder statements within a transaction to avoid conflicts; that would violate the transaction\u2019s defined execution order. There is no mechanism that rejects an entire transaction "immediately upon starting" due to a future conflict the database cannot yet know about.',
    tags: ['deadlock', 'locking', 'concurrency', 'coding']
  },
  {
    id: 'sql-046',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'A report needs each employee\u2019s salary alongside their department\u2019s average salary, without collapsing individual employee rows. Which approach correctly achieves this?',
    options: [
      'SELECT name, salary, AVG(salary) OVER (PARTITION BY department_id) AS dept_avg FROM employees;',
      'SELECT department_id, AVG(salary) FROM employees GROUP BY department_id;',
      'SELECT name, salary FROM employees ORDER BY department_id;',
      'SELECT name, salary, (SELECT AVG(salary) FROM employees) AS dept_avg FROM employees;'
    ],
    correctAnswer: 'SELECT name, salary, AVG(salary) OVER (PARTITION BY department_id) AS dept_avg FROM employees;',
    explanation: 'A window function with PARTITION BY computes the average per department while still returning one row per employee, exactly satisfying the requirement to keep individual rows intact. The GROUP BY option collapses the result into one row per department, losing individual employee detail entirely, the opposite of what is needed. The ORDER BY option does not compute any average at all; it only changes row order. The correlated-looking subquery in the last option computes the average across the entire table (no department filter), not per department, since the inner subquery has no WHERE or correlation tying it to department_id.',
    tags: ['window-functions', 'over-clause', 'coding']
  },
  {
    id: 'sql-047',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'A "scores" table has rows with values [100, 90, 90, 80] (already ordered descending). What do ROW_NUMBER(), RANK(), and DENSE_RANK() (each ordered by score DESC) assign to the two rows with score 90?',
    options: [
      'ROW_NUMBER(): 2 and 3 (no ties allowed); RANK(): both get 2, and the next row (80) gets 4; DENSE_RANK(): both get 2, and the next row (80) gets 3',
      'All three functions assign the value 2 to both rows with score 90',
      'ROW_NUMBER(), RANK(), and DENSE_RANK() all skip tied rows entirely, only ranking the unique scores 100 and 80',
      'RANK() and DENSE_RANK() both assign 2 and 3 respectively to break the tie, identical to ROW_NUMBER()'
    ],
    correctAnswer: 'ROW_NUMBER(): 2 and 3 (no ties allowed); RANK(): both get 2, and the next row (80) gets 4; DENSE_RANK(): both get 2, and the next row (80) gets 3',
    explanation: 'ROW_NUMBER() never produces ties, arbitrarily assigning unique sequential numbers (2, 3) to the tied 90s; RANK() gives both 90s the same rank (2) but then skips ahead, giving 80 a rank of 4 (accounting for the two rows that shared rank 2); DENSE_RANK() also gives both 90s rank 2, but does not skip, so 80 gets rank 3. The "all three assign 2" option ignores that ROW_NUMBER() specifically never ties values. The "skip tied rows entirely" option misunderstands these functions, none of which omit rows from the result; they only differ in numbering strategy. The last option incorrectly claims RANK() and DENSE_RANK() behave identically to ROW_NUMBER() by breaking the tie with sequential numbers, when both are specifically defined to assign equal values to ties.',
    tags: ['window-functions', 'rank', 'row_number', 'coding']
  },
  {
    id: 'sql-048',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'An "employees" table has duplicate salary values (e.g., two employees both earning the company\u2019s highest salary). Which query correctly returns the second-highest distinct salary, robust to such duplicates?',
    options: [
      'SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees) t WHERE rnk = 2;',
      'SELECT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;',
      'SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);',
      'SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1;'
    ],
    correctAnswer: 'SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees) t WHERE rnk = 2;',
    explanation: 'DENSE_RANK() treats tied top salaries as rank 1 without gaps, so rank 2 correctly and reliably refers to the second distinct salary value regardless of how many employees share the top salary. The LIMIT/OFFSET option is unreliable here because if two employees share the highest salary, "OFFSET 1" would just return another row with the same highest salary, not the true second-highest distinct value. The correlated MAX subquery option, however, does actually work correctly: it finds the highest salary strictly less than the overall max, which correctly skips duplicates of the top value \u2014 but it is a different, less scalable technique than the DENSE_RANK() approach, and is included here as a plausible (if less idiomatic) alternative rather than the cleanest pattern. The DISTINCT-with-LIMIT-1 option only returns the single highest distinct salary, not the second-highest, since it doesn\u2019t skip past the top value.',
    tags: ['window-functions', 'coding', 'rank']
  },
  {
    id: 'sql-049',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'A query SELECT order_id, status FROM orders WHERE customer_id = 42; runs frequently. An index exists on (customer_id, status, order_id). Why does this specific index let the database avoid touching the actual table data at all?',
    options: [
      'Because every column the query needs (customer_id for filtering, status and order_id for output) is already present in the index itself, making it a covering index for this query',
      'Because all indexes automatically include every column of the table regardless of how they are defined',
      'Because the WHERE clause filters by customer_id, and any index on any column improves performance equally',
      'Because the query uses no aggregate functions, which is unrelated to whether an index can be covering'
    ],
    correctAnswer: 'Because every column the query needs (customer_id for filtering, status and order_id for output) is already present in the index itself, making it a covering index for this query',
    explanation: 'A covering index satisfies a query entirely from the index structure because every referenced column, both filter and output columns, exists within it, letting the engine skip the lookup back into the full table row. The claim that all indexes include every column is false; a typical index only includes the columns explicitly listed in its definition (plus, often, the primary key as a row locator). Not every index improves performance equally; an index missing one of the needed output columns would still require a row lookup despite using the index. The presence or absence of aggregate functions is unrelated to whether an index is covering, which depends entirely on whether the query\u2019s needed columns are present in the index.',
    tags: ['indexing', 'covering-index', 'performance', 'coding']
  },
  {
    id: 'sql-050',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Performance',
    question: 'Running EXPLAIN ANALYZE on a slow query shows "Seq Scan on orders (actual time=850.123..850.456 rows=3 loops=1)" despite an index existing on the filtered column. What does this output most strongly suggest, assuming the optimizer\u2019s statistics are accurate?',
    options: [
      'The optimizer chose a sequential scan and ended up reading the whole table to find just 3 matching rows, suggesting it may be worth investigating why it didn\u2019t choose the available index for such a selective query',
      'EXPLAIN ANALYZE only displays estimated costs and never reflects what actually happened during execution',
      'A sequential scan returning only 3 rows is always the optimal and expected choice for any selective filter',
      'The presence of "Seq Scan" means the index on that column has become corrupted and must be rebuilt'
    ],
    correctAnswer: 'The optimizer chose a sequential scan and ended up reading the whole table to find just 3 matching rows, suggesting it may be worth investigating why it didn\u2019t choose the available index for such a selective query',
    explanation: 'EXPLAIN ANALYZE actually executes the query and reports real timing/row counts, so seeing a Seq Scan return only 3 rows after a long scan time is a red flag suggesting the optimizer may have misjudged selectivity (e.g., due to stale statistics) and missed a more efficient index scan. The claim that EXPLAIN ANALYZE only shows estimates is incorrect and describes plain EXPLAIN without ANALYZE, which does not execute the query. A sequential scan returning very few rows out of a large table is generally a performance smell, not an "expected, optimal" outcome, for a selective filter. Seeing Seq Scan in a plan says nothing about index corruption; it simply reflects whichever access method the optimizer chose, which can be influenced by cost estimates, not catastrophic index failure.',
    tags: ['explain', 'query-plan', 'performance', 'coding']
  },
  {
    id: 'sql-051',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'A search feature uses WHERE product_name LIKE \'%phone%\' on a column with a standard B-tree index on product_name. Why does this query typically fail to benefit from that index, and what is a better-suited index type for this exact pattern?',
    options: [
      'A leading and trailing wildcard means there is no fixed prefix for the B-tree to seek on, so it falls back to a full scan; a trigram (e.g., pg_trgm GIN/GIST) or full-text index is generally better suited to arbitrary substring search',
      'B-tree indexes are never usable with the LIKE operator under any pattern',
      'The query should instead use an index on a completely unrelated column to speed up substring matching',
      'Adding more standard B-tree indexes on the same column will resolve the issue'
    ],
    correctAnswer: 'A leading and trailing wildcard means there is no fixed prefix for the B-tree to seek on, so it falls back to a full scan; a trigram (e.g., pg_trgm GIN/GIST) or full-text index is generally better suited to arbitrary substring search',
    explanation: 'A B-tree is sorted by leading characters, so prefix searches like \'phone%\' can still use it, but a pattern wrapped in wildcards on both sides has no usable prefix at all, forcing a scan; specialized indexes like trigram indexes break text into overlapping substrings, enabling efficient arbitrary substring lookups that a B-tree fundamentally cannot support. The claim that B-tree indexes are "never usable with LIKE" is too broad, since prefix-only patterns can still benefit from one. An index on an unrelated column has no bearing on filtering by product_name. Simply adding more conventional B-tree indexes on the same column does not solve the structural mismatch between B-tree ordering and substring search; a different index type is needed.',
    tags: ['indexing', 'like', 'performance', 'full-text-search']
  },
  {
    id: 'sql-052',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'An ORM loads 50 blog posts with one query, then for each post lazily loads its author with a separate query triggered by accessing post.author.name in a loop. What is the most accurate description of this pattern\u2019s cost, and the standard fix?',
    options: [
      'It issues 51 total queries (1 + 50), known as the N+1 problem; the fix is eager loading, such as a JOIN or a single batched WHERE author_id IN (...) query, to fetch all authors in one or two round trips',
      'It issues exactly 2 queries regardless of the number of posts, since ORMs always batch lazy loads automatically',
      'It is more efficient than a single JOIN because each query is individually simpler for the database to execute',
      'The number of queries depends only on the number of unique authors, not on the number of posts'
    ],
    correctAnswer: 'It issues 51 total queries (1 + 50), known as the N+1 problem; the fix is eager loading, such as a JOIN or a single batched WHERE author_id IN (...) query, to fetch all authors in one or two round trips',
    explanation: 'This is the textbook N+1 pattern: one query for the list, then one additional query per item to resolve a related entity, here 1 + 50 = 51 round trips; eager loading collapses this into a single JOIN or a batched IN query against all needed author IDs at once. The claim that ORMs "always batch lazy loads automatically" is false in the naive lazy-loading case described; automatic batching (sometimes called a dataloader pattern) is an opt-in optimization, not default ORM behavior in most setups. Issuing 51 small queries is generally less efficient than one well-indexed JOIN, due to the cumulative network round-trip and parsing overhead of each separate query. The query count here scales with the number of posts being iterated, not the number of distinct authors, since a separate lazy-load is triggered per post access regardless of author repetition (unless the ORM\u2019s identity map happens to cache repeated author lookups).',
    tags: ['n-plus-1', 'orm', 'performance', 'coding']
  },
  {
    id: 'sql-053',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'System Design',
    question: 'A social media platform shards its "posts" table by user_id using a hash of the ID to assign shards. What is the main difficulty this introduces for a query like "get the 20 most recent posts across all users a given person follows"?',
    options: [
      'The query may need to fan out to many different shards (one per followed user, potentially on different physical databases), then merge and re-sort the results in the application layer, since no single shard holds all relevant data',
      'Sharding by user_id makes this query strictly impossible to ever execute correctly',
      'Sharding only affects INSERT performance, so this read query is completely unaffected',
      'The query can be solved with a single simple JOIN exactly as it would be on an unsharded table, with no extra complexity'
    ],
    correctAnswer: 'The query may need to fan out to many different shards (one per followed user, potentially on different physical databases), then merge and re-sort the results in the application layer, since no single shard holds all relevant data',
    explanation: 'Because posts are distributed by user_id hash, posts from different followed users likely live on different physical shards, so satisfying a cross-user query requires querying multiple shards and combining/sorting results outside the database, a classic scatter-gather pattern and a well-known cost of sharding by this key. It is not impossible, just significantly more complex and slower than the unsharded case; many large systems do solve this with fan-out queries or precomputed feeds. Sharding fundamentally changes how both reads and writes are routed, since reads now need to know which shard(s) to query; it is not limited to write performance. A simple single JOIN is not possible across separate physical database shards in the general case, since standard SQL joins operate within a single database connection/instance.',
    tags: ['system-design', 'sharding', 'scalability', 'coding']
  },
  {
    id: 'sql-054',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'A "users" table has 40 columns, but most queries only ever touch 5 frequently-accessed columns (id, email, status, last_login, plan_type), while the other 35 are large, rarely-accessed profile fields. What restructuring would most directly address the resulting I/O overhead?',
    options: [
      'Vertical partitioning: split the rarely-used columns into a separate related table, so common queries only read the smaller, "hot" table',
      'Horizontal partitioning by date range, since the issue described is about columns, not rows',
      'Sharding the table across multiple servers by user_id hash, which addresses scale rather than per-row column bloat',
      'Adding a composite index covering all 40 columns to speed up every possible query'
    ],
    correctAnswer: 'Vertical partitioning: split the rarely-used columns into a separate related table, so common queries only read the smaller, "hot" table',
    explanation: 'Vertical partitioning directly targets this exact problem: separating frequently-accessed "hot" columns from rarely-used "cold" ones into their own table means common queries scan much smaller rows, reducing I/O without touching unrelated data. Horizontal partitioning splits rows (e.g., by date or region), which doesn\u2019t address the column-width problem described here at all. Sharding is about distributing rows across servers for write/read scalability, an orthogonal concern to a single table\u2019s wide-row I/O overhead. A 40-column composite index would be enormous, expensive to maintain on every write, and still wouldn\u2019t solve the underlying issue of needing to store and occasionally scan very wide rows.',
    tags: ['partitioning', 'database-design', 'performance']
  },
  {
    id: 'sql-055',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'A team wraps a multi-step "process_refund" operation (validate, update order status, adjust account balance, write audit log) inside a stored procedure rather than coordinating it from application code across four separate round trips. What is the most accurate trade-off of this design choice?',
    options: [
      'It reduces network round trips and lets the database guarantee the steps run as one transaction, but moves business logic into the database layer, which can be harder to unit test, version, and review compared to application code',
      'It has no meaningful trade-offs; stored procedures are strictly superior to application-level logic in every situation',
      'Stored procedures cannot participate in transactions, so this design actually loses atomicity compared to application code',
      'It only matters for read performance, since stored procedures cannot contain any DML statements like UPDATE or INSERT'
    ],
    correctAnswer: 'It reduces network round trips and lets the database guarantee the steps run as one transaction, but moves business logic into the database layer, which can be harder to unit test, version, and review compared to application code',
    explanation: 'Encapsulating multi-step logic in a stored procedure executed as a single transaction reduces round-trip latency and centralizes atomicity guarantees at the database, but it comes at the real cost of business logic living somewhere harder to test with standard application tooling, version alongside application code, and review in typical code review workflows. The claim of "no trade-offs" ignores these well-documented downsides that lead many teams to prefer keeping logic in application code where reasonable. Stored procedures absolutely can run within transactions, often more tightly coupled to one than application code calling multiple separate statements; the claim otherwise is false. Stored procedures routinely contain INSERT, UPDATE, and DELETE statements; restricting them to reads only is incorrect.',
    tags: ['stored-procedures', 'transactions', 'coding']
  },
  {
    id: 'sql-056',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Coding',
    question: 'A team adds a BEFORE UPDATE trigger on "accounts" that automatically writes a row to "balance_history" whenever the balance column changes, then separately calls a stored procedure named log_balance_change() from the application whenever a balance update happens. What problem does this combination most likely cause?',
    options: [
      'The balance change ends up logged twice for every legitimate update, once automatically by the trigger and once manually by the explicit stored procedure call',
      'The trigger and stored procedure cancel each other out, resulting in no log entries at all',
      'This combination is required and is the only valid way to log balance changes in any relational database',
      'Triggers cannot coexist with stored procedures in the same schema, so this configuration would fail to even be created'
    ],
    correctAnswer: 'The balance change ends up logged twice for every legitimate update, once automatically by the trigger and once manually by the explicit stored procedure call',
    explanation: 'Because the trigger fires implicitly and automatically on every UPDATE to balance, while the application also explicitly calls a separate logging procedure for the same event, both code paths execute independently, resulting in duplicate audit entries unless one of the two is removed or the trigger is made aware of the explicit call. There\u2019s no mechanism by which a trigger and an explicitly-called procedure would "cancel out" each other\u2019s effects; both simply execute as defined. Using only a trigger, or only application-level logging, are both valid approaches individually; using both for the same event is the specific anti-pattern here, not a requirement. Triggers and stored procedures are entirely independent database objects and can coexist without any creation conflict.',
    tags: ['triggers', 'stored-procedures', 'coding']
  },
  {
    id: 'sql-057',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Security',
    question: 'A login query is built as: "SELECT * FROM users WHERE username = \'" + input + "\' AND password = \'" + pass + "\'". An attacker submits input = admin\' OR \'1\'=\'1 as the username. Why does this succeed in bypassing authentication, and what is the correct fix?',
    options: [
      'The concatenated string becomes WHERE username = \'admin\' OR \'1\'=\'1\' AND password = ..., where the OR \'1\'=\'1\' clause is always true, matching every row; the fix is to use parameterized queries so input is always treated as a literal value, never as SQL syntax',
      'This only works if the database has no password column defined, which is unrelated to how the query string was built',
      'The fix is to simply make the password column longer, which would prevent this kind of string manipulation',
      'This is not actually an SQL injection vulnerability, since the attacker only modified the username field, not the password field'
    ],
    correctAnswer: 'The concatenated string becomes WHERE username = \'admin\' OR \'1\'=\'1\' AND password = ..., where the OR \'1\'=\'1\' clause is always true, matching every row; the fix is to use parameterized queries so input is always treated as a literal value, never as SQL syntax',
    explanation: 'Because the attacker\u2019s input is concatenated directly into the SQL string, the injected quote and OR \'1\'=\'1\' becomes part of the executable query logic rather than a literal value, and since \'1\'=\'1\' is always true, the WHERE clause can match rows regardless of the actual password (depending on operator precedence, this may bypass the check entirely); parameterized queries fix this by binding input as data, never letting it alter the query\u2019s structure. The vulnerability has nothing to do with whether a password column exists; the danger is in how the raw string is built, independent of the schema. Column length has no bearing on this; the issue is unescaped string concatenation, not data size limits. The attack absolutely is SQL injection: any field\u2014username, password, or otherwise\u2014that is concatenated unsanitized into SQL is a potential injection point, regardless of which specific field was manipulated.',
    tags: ['sql-injection', 'security', 'coding']
  },
  {
    id: 'sql-058',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'System Design',
    question: 'A company runs a single primary database with no replicas. The primary server suffers a hardware failure and is unrecoverable. What does this scenario most clearly illustrate the value of, and which feature would have mitigated it?',
    options: [
      'The value of replication for disaster recovery: a replica (especially one kept reasonably in sync) could have been promoted to primary, minimizing downtime and data loss',
      'The value of normalization, since a more normalized schema would have prevented hardware failures from occurring',
      'The value of adding more indexes, since more indexes would have made the primary server more resilient to hardware failure',
      'This scenario shows that transactions are unnecessary overhead and should be avoided to reduce server load'
    ],
    correctAnswer: 'The value of replication for disaster recovery: a replica (especially one kept reasonably in sync) could have been promoted to primary, minimizing downtime and data loss',
    explanation: 'Replication exists precisely for this scenario: maintaining one or more replicas means a hardware failure on the primary doesn\u2019t mean total data loss or extended downtime, since a replica can typically be promoted to take over as the new primary. Normalization is a schema design concern about redundancy and integrity; it has no bearing on physical hardware failure resilience. Indexes speed up query performance; they do nothing to protect against a server\u2019s hardware dying, since indexes live on the same physical storage as the rest of the database. Transactions exist to guarantee atomicity and consistency of operations; they are unrelated to hardware failure recovery, and removing them would not have prevented or mitigated this incident at all.',
    tags: ['replication', 'high-availability', 'system-design']
  },
  {
    id: 'sql-059',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'System Design',
    question: 'A financial system requires that once a transaction is reported as "successful" to the client, the write must never be lost, even if the primary database server fails one second later. Which replication configuration is required to make this guarantee, and what cost does it impose?',
    options: [
      'Synchronous replication, since it only confirms success to the client after at least one replica has acknowledged the write, at the cost of higher write latency',
      'Asynchronous replication, since it offers the fastest possible write acknowledgment with zero added latency or risk',
      'No replication is needed at all, since durability is guaranteed by the write-ahead log alone regardless of hardware failure',
      'Either synchronous or asynchronous replication provides an identical durability guarantee, so the choice has no real consequence'
    ],
    correctAnswer: 'Synchronous replication, since it only confirms success to the client after at least one replica has acknowledged the write, at the cost of higher write latency',
    explanation: 'Synchronous replication is specifically designed to provide this guarantee: the primary doesn\u2019t report success until a replica confirms it has the data too, ensuring a single server failure can\u2019t silently lose an acknowledged write, at the cost of added latency waiting for that confirmation. Asynchronous replication explicitly trades away this guarantee for lower latency, since the primary may report success before any replica has the data, meaning a failure immediately afterward really can lose that write. While the write-ahead log protects against losing committed data if the same server recovers, it offers no protection if the physical server (and its disk) is destroyed entirely, which is why cross-server replication matters for this guarantee. The choice between synchronous and asynchronous replication has dramatically different durability implications precisely in the failure scenario described, so they are not interchangeable.',
    tags: ['replication', 'consistency', 'system-design']
  },
  {
    id: 'sql-060',
    topic: 'sql',
    stage: 'Advanced',
    difficulty: 'Advanced',
    category: 'Theory',
    question: 'During a network partition, a distributed database must choose to either reject some write requests (to keep all nodes consistent) or accept writes on both sides of the partition (risking divergence). Which CAP theorem trade-off does this dilemma represent, and what is misleading about saying a system can "have all three" outside of a partition?',
    options: [
      'This is the Consistency vs. Availability trade-off that only manifests during an actual partition; claiming a system has "all three" is misleading because Partition tolerance isn\u2019t something you opt out of \u2014 the real choice only appears once a partition occurs',
      'This represents a trade-off between Durability and Isolation, two properties unrelated to the CAP theorem entirely',
      'CAP theorem guarantees that Consistency, Availability, and Partition tolerance can always coexist perfectly as long as the database uses SSDs instead of HDDs',
      'This dilemma has nothing to do with CAP theorem and is purely a result of poor database schema design'
    ],
    correctAnswer: 'This is the Consistency vs. Availability trade-off that only manifests during an actual partition; claiming a system has "all three" is misleading because Partition tolerance isn\u2019t something you opt out of \u2014 the real choice only appears once a partition occurs',
    explanation: 'CAP theorem\u2019s real-world relevance kicks in specifically during a network partition: a system must choose between rejecting requests to stay consistent or accepting requests on both sides and risking divergence, which is the Consistency-vs-Availability trade-off; outside of a partition, a system can appear to offer all three, which is why marketing claims of "CAP-compliant on all fronts" are misleading\u2014 partition tolerance is essentially a property of distributed systems generally, not a dial you can turn off. Durability and Isolation are ACID transaction properties, entirely separate from CAP, which concerns distributed system behavior, not single-transaction guarantees. Hardware choice (SSD vs. HDD) has no bearing on the theorem\u2019s fundamental trade-off, which is about network partitions, not storage media speed. This dilemma is a direct, well-documented consequence of operating as a distributed system under CAP, not a symptom of bad schema design.',
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