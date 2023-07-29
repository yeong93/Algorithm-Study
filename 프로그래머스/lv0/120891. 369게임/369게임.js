const solution = (order) => [...String(order)].filter((v) => ["3", "6", "9"].includes(v)).length;
