BEGIN;

DROP TABLE IF EXISTS superheroes cascade;

CREATE TABLE superheroes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  superpower TEXT NOT NULL,
  weight INTEGER DEFAULT 100
);

INSERT INTO superheroes (name, superpower, weight) VALUES
('Jeff Kaplan', 'I win button', 80),
('The Trash Man', 'Ring of garbage (Edible)', 4500),
('Youtube Advertiser Friendly Policy', 'Killer of content creators (ty Susan)', 0);

COMMIT;
