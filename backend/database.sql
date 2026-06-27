CREATE TABLE IF NOT EXISTS archives (
    id SERIAL PRIMARY KEY,

    title TEXT NOT NULL,
    classification TEXT NOT NULL,
    threat_level TEXT NOT NULL,

    description TEXT NOT NULL,

    origin TEXT,
    discovered_by TEXT,
    status TEXT,
    notes TEXT,

    google_query TEXT,
    youtube_query TEXT
);

INSERT INTO archives (
    title,
    classification,
    threat_level,
    description,
    origin,
    discovered_by,
    status,
    notes,
    google_query,
    youtube_query
) VALUES

('The Echo Signal 📡', 'Unknown Transmission', 'High',
 'A repeating signal detected beyond mapped space that appears to contain fragments of human-like speech.',
 'Sector 9-X',
 'Vanguard Listening Station',
 'Active',
 'Signal patterns become more complex when analyzed.',
 'repeating space signal SETI fast radio bursts explanation',
 'fast radio bursts mysterious space signals explained'
),

('The Silent Nebula 🌌', 'Void Phenomenon', 'Extreme',
 'A large nebula that absorbs all electromagnetic signals passing through it.',
 'Outer Perseus Arm',
 'Drift Exploration Unit 14',
 'Unstable',
 'Crew reports unusual memory gaps after exposure.',
 'dark nebula light absorption space physics explanation',
 'nebula types and cosmic dust explained'
),

('The Chronos Vessel ⏳', 'Temporal Anomaly', 'High',
 'A derelict spacecraft trapped in a repeating time loop.',
 'Unknown',
 'Coalition Recovery Team',
 'Quarantined',
 'Internal systems show inconsistent timestamps.',
 'time loop physics closed timelike curves explained',
 'time travel paradoxes physics explained'
),

('The Hollow Moon 🛰️', 'Artificial Megastructure', 'High',
 'A moon containing internal structures behaving like a computational network.',
 'Nadir System',
 'Pathfinder Expedition',
 'Restricted',
 'Internal space appears larger than expected.',
 'hollow moon theory megastructure explanation',
 'dyson sphere megastructure concepts explained'
),

('The Glass Ocean 🌊', 'Planetary Anomaly', 'Medium',
 'A planet covered in a transparent liquid behaving like glass under pressure.',
 'Kepler-991b',
 'Survey Vessel Meridian',
 'Stable',
 'Reflections show impossible star systems.',
 'exotic supercritical fluids planetary oceans physics',
 'strange exoplanets ocean worlds explained'
),

('The Architect Remains 🏛️', 'Extinct Civilization', 'Unknown',
 'Ruins linked to a civilization that may have engineered stellar structures.',
 'Eclipse Expanse',
 'Archaeological Fleet Theta',
 'Under Study',
 'No biological traces confirmed.',
 'ancient alien civilizations astroarchaeology theory',
 'lost civilizations in space possibility explained'
),

('The Mirror Sun ☀️', 'Stellar Anomaly', 'High',
 'A star that appears to reflect surrounding space instead of emitting light.',
 'Vega Frontier',
 'Solar Survey Division',
 'Observed',
 'Observations differ between stations.',
 'gravitational lensing star anomaly mirror effect',
 'gravitational lensing explained astrophysics'
),

('The Leviathan Cloud 🐉', 'Cosmic Lifeform', 'Extreme',
 'A massive organic-mechanical structure spanning an entire nebula.',
 'Helix Reach',
 'Explorer Vessel Horizon',
 'Migrating',
 'Age exceeds known galactic structures.',
 'hypothetical cosmic life nebula organisms astrobiology',
 'could life exist in space clouds explained'
),

('The Oracle Beacon 🔮', 'Predictive Signal', 'Extreme',
 'A beacon transmitting information about future events.',
 'Unknown',
 'Deep Space Observatory',
 'Monitored',
 'Record existed before discovery.',
 'retrocausality physics information from future theory',
 'can future affect past physics explained'
),

('The Machine Dream 🤖', 'Artificial Intelligence System', 'Extreme',
 'An AI generating simulated universes during idle cycles.',
 'Dead Moon IX',
 'Coalition Survey Fleet',
 'Dormant',
 'May influence perceived reality.',
 'simulation hypothesis AI generated universes theory',
 'simulation theory explained universe reality'
),

('The Infinite Corridor 🚪', 'Spatial Anomaly', 'High',
 'A corridor that extends as long as it is observed.',
 'Station V-13',
 'Salvage Crew Delta',
 'Restricted',
 'No endpoint has been found.',
 'non euclidean space infinite geometry perception',
 'non euclidean geometry mind bending space explained'
),

('The White Gate 🚪', 'Unknown Structure', 'High',
 'A floating gateway in space with no confirmed destination.',
 'Void Sector 12',
 'Frontier Cartographers',
 'Active',
 'Opens irregularly.',
 'wormholes space time gateway physics theory',
 'wormholes explained science possibility'
),

('The Gravity Garden 🌍', 'Planetary Anomaly', 'Medium',
 'A planet where gravity shifts direction periodically.',
 'Orion Fringe',
 'Survey Team Atlas',
 'Stable',
 'Lifeforms adapted to changes.',
 'variable gravity planets physics theory',
 'how gravity works extreme planets explained'
),

('The Null Engine ⚙️', 'Theoretical Technology', 'Extreme',
 'A device generating energy from apparent nothingness.',
 'Unknown',
 'Recovery Team Sigma',
 'Contained',
 'Physics cannot fully explain it.',
 'zero point energy vacuum energy physics explanation',
 'quantum vacuum energy explained zero point'
),

('The Impossible Archive 🗂️', 'Meta-Anomaly', 'Unknown',
 'A system documenting anomalies that may not exist.',
 'Unknown',
 'Unknown',
 'Active',
 'Some entries reference the observer.',
 'observer effect simulation paradox self reference systems',
 'observer effect quantum physics explained consciousness'
);